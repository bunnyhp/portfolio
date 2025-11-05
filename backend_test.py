#!/usr/bin/env python3
"""
Backend API Testing for Portfolio Application
Tests all portfolio backend endpoints as specified in the review request.
"""

import requests
import json
import sys
from datetime import datetime
import time

# Get backend URL from frontend .env file
BACKEND_URL = "https://webgl-showcase-11.preview.emergentagent.com/api"

def print_test_header(test_name):
    """Print formatted test header"""
    print(f"\n{'='*60}")
    print(f"Testing: {test_name}")
    print(f"{'='*60}")

def print_result(success, message, details=None):
    """Print test result with formatting"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")
    if details:
        print(f"Details: {details}")

def test_root_endpoint():
    """Test GET /api/ - Health check endpoint"""
    print_test_header("GET /api/ - Root Health Check")
    
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            expected_keys = ["message", "version", "endpoints"]
            
            if all(key in data for key in expected_keys):
                print_result(True, "Root endpoint working correctly")
                print(f"Response: {json.dumps(data, indent=2)}")
                return True
            else:
                print_result(False, "Missing expected keys in response", f"Got: {list(data.keys())}")
                return False
        else:
            print_result(False, f"Unexpected status code: {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def test_health_endpoint():
    """Test GET /api/health - Database health check"""
    print_test_header("GET /api/health - Database Health Check")
    
    try:
        response = requests.get(f"{BACKEND_URL}/health", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            expected_keys = ["status", "database", "timestamp"]
            
            if all(key in data for key in expected_keys):
                if data["status"] == "healthy" and data["database"] == "connected":
                    print_result(True, "Health endpoint working correctly")
                    print(f"Response: {json.dumps(data, indent=2)}")
                    return True
                else:
                    print_result(False, "Database not healthy", f"Status: {data.get('status')}, DB: {data.get('database')}")
                    return False
            else:
                print_result(False, "Missing expected keys in response", f"Got: {list(data.keys())}")
                return False
        else:
            print_result(False, f"Unexpected status code: {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def test_contact_submission_valid():
    """Test POST /api/contact with valid data"""
    print_test_header("POST /api/contact - Valid Contact Submission")
    
    valid_data = {
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Interested in your cybersecurity services",
        "message": "Hi Harshil, I'm impressed with your portfolio. I'd like to discuss a potential project."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=valid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 201:
            data = response.json()
            expected_keys = ["id", "name", "email", "subject", "message", "timestamp", "status", "ip_address"]
            
            if all(key in data for key in expected_keys):
                # Verify the data matches what we sent
                if (data["name"] == valid_data["name"] and 
                    data["email"] == valid_data["email"] and
                    data["subject"] == valid_data["subject"] and
                    data["message"] == valid_data["message"] and
                    data["status"] == "pending"):
                    
                    print_result(True, "Contact submission successful")
                    print(f"Submission ID: {data['id']}")
                    print(f"Timestamp: {data['timestamp']}")
                    return True, data["id"]
                else:
                    print_result(False, "Response data doesn't match input", f"Response: {data}")
                    return False, None
            else:
                print_result(False, "Missing expected keys in response", f"Got: {list(data.keys())}")
                return False, None
        else:
            print_result(False, f"Unexpected status code: {response.status_code}", response.text)
            return False, None
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False, None

def test_contact_validation_errors():
    """Test POST /api/contact with validation errors"""
    print_test_header("POST /api/contact - Validation Error Tests")
    
    test_cases = [
        {
            "name": "Short name test",
            "data": {
                "name": "J",  # Too short (< 2 chars)
                "email": "john@example.com",
                "subject": "Valid subject here",
                "message": "This is a valid message with more than 10 characters"
            },
            "expected_error": "name too short"
        },
        {
            "name": "Invalid email test",
            "data": {
                "name": "John Doe",
                "email": "invalid-email",  # Invalid email format
                "subject": "Valid subject here",
                "message": "This is a valid message with more than 10 characters"
            },
            "expected_error": "invalid email"
        },
        {
            "name": "Short subject test",
            "data": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Hi",  # Too short (< 5 chars)
                "message": "This is a valid message with more than 10 characters"
            },
            "expected_error": "subject too short"
        },
        {
            "name": "Short message test",
            "data": {
                "name": "John Doe",
                "email": "john@example.com",
                "subject": "Valid subject here",
                "message": "Short"  # Too short (< 10 chars)
            },
            "expected_error": "message too short"
        }
    ]
    
    all_passed = True
    
    for test_case in test_cases:
        print(f"\n--- {test_case['name']} ---")
        
        try:
            response = requests.post(
                f"{BACKEND_URL}/contact",
                json=test_case["data"],
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 422:
                print_result(True, f"Validation error correctly returned (422)")
                print(f"Error details: {response.text}")
            else:
                print_result(False, f"Expected 422 validation error, got {response.status_code}", response.text)
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print_result(False, "Request failed", str(e))
            all_passed = False
    
    return all_passed

def test_get_submissions():
    """Test GET /api/contact/submissions"""
    print_test_header("GET /api/contact/submissions - Get All Submissions")
    
    try:
        # Test basic endpoint
        response = requests.get(f"{BACKEND_URL}/contact/submissions", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            expected_keys = ["total", "submissions"]
            
            if all(key in data for key in expected_keys):
                print_result(True, f"Submissions endpoint working - Found {data['total']} submissions")
                
                # Test with query parameters
                print("\n--- Testing with query parameters ---")
                
                # Test limit and skip
                params_response = requests.get(
                    f"{BACKEND_URL}/contact/submissions",
                    params={"limit": 10, "skip": 0},
                    timeout=10
                )
                
                if params_response.status_code == 200:
                    params_data = params_response.json()
                    print_result(True, f"Query parameters working - limit=10, skip=0")
                    
                    # Test status filter
                    status_response = requests.get(
                        f"{BACKEND_URL}/contact/submissions",
                        params={"status": "pending"},
                        timeout=10
                    )
                    
                    if status_response.status_code == 200:
                        status_data = status_response.json()
                        print_result(True, f"Status filter working - pending submissions: {status_data['total']}")
                        return True
                    else:
                        print_result(False, f"Status filter failed: {status_response.status_code}", status_response.text)
                        return False
                else:
                    print_result(False, f"Query parameters failed: {params_response.status_code}", params_response.text)
                    return False
            else:
                print_result(False, "Missing expected keys in response", f"Got: {list(data.keys())}")
                return False
        else:
            print_result(False, f"Unexpected status code: {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def verify_database_storage():
    """Verify that submitted data is stored in MongoDB by checking submissions"""
    print_test_header("Database Storage Verification")
    
    try:
        # Get all submissions to verify storage
        response = requests.get(f"{BACKEND_URL}/contact/submissions", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            if data["total"] > 0:
                # Check the structure of the first submission
                first_submission = data["submissions"][0]
                required_fields = ["id", "name", "email", "subject", "message", "timestamp", "status", "ip_address"]
                
                missing_fields = [field for field in required_fields if field not in first_submission]
                
                if not missing_fields:
                    print_result(True, "Database storage verified - all required fields present")
                    print(f"Sample submission structure: {list(first_submission.keys())}")
                    return True
                else:
                    print_result(False, "Missing required fields in stored data", f"Missing: {missing_fields}")
                    return False
            else:
                print_result(True, "No submissions found in database (this is expected if no valid submissions were made)")
                return True
        else:
            print_result(False, f"Could not verify database storage: {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Database verification failed", str(e))
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Portfolio Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test started at: {datetime.now()}")
    
    test_results = []
    
    # Run all tests
    test_results.append(("Root Endpoint", test_root_endpoint()))
    test_results.append(("Health Check", test_health_endpoint()))
    
    # Test contact submission (this will create data for later verification)
    contact_success, submission_id = test_contact_submission_valid()
    test_results.append(("Contact Submission", contact_success))
    
    test_results.append(("Validation Errors", test_contact_validation_errors()))
    test_results.append(("Get Submissions", test_get_submissions()))
    test_results.append(("Database Verification", verify_database_storage()))
    
    # Print summary
    print(f"\n{'='*60}")
    print("TEST SUMMARY")
    print(f"{'='*60}")
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    print(f"Success Rate: {(passed/len(test_results)*100):.1f}%")
    
    if failed > 0:
        print(f"\n⚠️  {failed} test(s) failed. Check the detailed output above.")
        sys.exit(1)
    else:
        print(f"\n🎉 All tests passed!")
        sys.exit(0)

if __name__ == "__main__":
    main()