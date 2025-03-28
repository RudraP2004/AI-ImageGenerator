# Next.js AI Image Generator

## 🚀 Overview
Next.js AI Image Generator is a web-based application that allows users to generate AI-powered images using prompts. This project leverages modern AI APIs to create high-quality, custom images based on user input.

## 🎯 Features
- Generate AI-powered images from text prompts.
- Responsive and user-friendly UI.
- Download and share generated images.
- History of previously generated images.
- Optimized for performance with Next.js caching and SSR.

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express (if applicable)
- **AI Model**: Flux.1-Dev (Nebius)
- **Database**: Firebase / Supabase / MongoDB (optional, for storing user history)

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/nextjs-ai-image-generator.git
cd nextjs-ai-image-generator
```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file and add the necessary API keys:
```
NEXT_PUBLIC_AI_API_KEY=your_api_key_here
NEXT_PUBLIC_BASE_URL=https://api.your-ai-provider.com
```

### 4️⃣ Run the Development Server
```sh
yarn dev  # or npm run dev
```
The app will be running at `http://localhost:3000`

## 🚀 Deployment
To deploy the app on Vercel, run:
```sh
vercel
```
Or deploy on other cloud services like Netlify, AWS, or Firebase.

## 📸 Usage
1. Enter a text prompt describing the image you want to generate.
2. Click the "Generate" button.
3. View, download, or share your AI-generated image.

## 🤝 Contributing
Pull requests are welcome! If you'd like to contribute, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Added a new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.


## 📬 Contact
For questions or collaborations, reach out at prasadrudra279@gmail.com

---
Made with ❤️ by Rudra
