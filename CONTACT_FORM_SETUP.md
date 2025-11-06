# Contact Form Setup Instructions

Your contact form is now configured to send emails to: **mail2harshilppatel@gmail.com**

## Important: Get Your Web3Forms Access Key

The form currently uses a placeholder access key. To make the form work, you need to get your own **FREE** access key from Web3Forms:

### Steps to Get Your Access Key:

1. **Visit Web3Forms**: Go to [https://web3forms.com/](https://web3forms.com/)

2. **Enter Your Email**: 
   - Enter: `mail2harshilppatel@gmail.com`
   - Click "Get Started" or "Create Access Key"

3. **Verify Your Email**: 
   - Check your inbox for a verification email
   - Click the verification link

4. **Copy Your Access Key**: 
   - You'll receive a unique access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

5. **Update Your Code**:
   - Open: `frontend/src/components/ContactSection.jsx`
   - Find line 35: `access_key: '8e8d42f9-3c7d-4d2e-9f1b-2e9c8d7f3a4b'`
   - Replace the placeholder with your real access key
   - Save the file

6. **Deploy**: 
   - Commit and push your changes to GitHub
   - Vercel will automatically redeploy with the working form

## Features

✅ Sends emails directly to your inbox
✅ No backend required (works with static hosting)
✅ Free forever (up to 250 submissions/month)
✅ Spam protection included
✅ Mobile responsive
✅ Toast notifications on success/error

## Testing

After deploying:
1. Visit your portfolio website
2. Go to the "Contact" section
3. Fill out the form and submit
4. Check your email inbox (mail2harshilppatel@gmail.com)
5. You should receive the form submission within seconds!

## Support

If you have any issues:
- Web3Forms Documentation: https://docs.web3forms.com/
- Web3Forms Support: support@web3forms.com

