# 🧠 Notes App with Google Login

A simple full-stack web app built using **Next.js**, **React**, **NextAuth.js**, **Prisma**, and **MySQL**.
Users can sign in with **Google SSO**, and securely create, view, and delete their personal notes.

## 🚀 Features

- 🔐 Google Login using NextAuth.js
- 🧾 Add, view, and delete notes
- 🧱 Notes stored in MySQL via Prisma ORM
- 🎨 Clean responsive UI with Tailwind CSS
- 🔒 Protected routes (only accessible after login)

## 🧩 Tech Stack

- **Frontend**: Next.js (App Router)
- **Authentication**: NextAuth.js with Google Provider
- **Database**: MySQL with Prisma ORM
- **Styling**: Tailwind CSS

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd notes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root with:

```env
DATABASE_URL="mysql://username:password@localhost:3306/notesdb"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

### 4. Setup Prisma and Database

```bash
npx prisma migrate dev --name init
```

### 6. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
notes-app/
├── .next
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── notes/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── lib/
│   ├── auth.ts
│   └── prisma.ts
├── node_modules/
├── prisma/
│   └── dev.db
│   └── schema.prisma
├── types/
├── .env
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 🧑‍💻 Author
**Anshul Mendiratta**<br>
B.Tech in Data Science and Engineering, IIT Mandi<br>
Passionate about web development, AI, and building tools for creators.

## 📸 Demo
![Demo Image](./public/demo.png)

### 💬 Summary:
This project demonstrates ability to build a full-stack app with authentication, database integration, and clean UI — aligning perfectly with the internship requirements for **Software Development Engineering (Web)**.