# Cybersecurity Portfolio Website

A modern, responsive portfolio website showcasing cybersecurity expertise, projects, and professional experience.

## Features

- 🛡️ Cybersecurity-themed design with dark green accents
- 🎨 Modern UI with smooth animations using Framer Motion
- 📱 Fully responsive design
- ⚡ Fast performance with React
- 🔒 Security-focused content and projects

## Tech Stack

- React 19
- React Router DOM
- Framer Motion
- Tailwind CSS
- Lucide React (Icons)
- React Intersection Observer

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Deployment

This project is configured for Vercel deployment. The `vercel.json` file is set up to:

1. Install dependencies in the `frontend` directory
2. Build the React app
3. Serve the `frontend/build` directory

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set the root directory to the project root
3. Vercel will automatically detect the configuration and deploy

The build settings are:
- **Build Command**: `cd frontend && npm install && npm run build`
- **Output Directory**: `frontend/build`

## Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── mockData.js
│   │   └── App.js
│   └── package.json
└── vercel.json
```

## License

Private project - All rights reserved
