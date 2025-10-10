# Note Taking Application

A modern, full-stack note-taking application built with Next.js and TypeScript. Features secure Google authentication, real-time note management, and a beautiful dark/light theme toggle. Users can sign in with Google SSO and securely create, view, edit, and delete their personal notes with a clean, responsive interface.

## 🌐 Live Demo

🔗 **[View Live Application](https://notes-app-one-swart.vercel.app/)**

## 📸 Screenshot

![Notes App Demo](./public/demo.png)

## 🚀 Features

- 🔐 **Google Authentication** - Secure login using NextAuth.js
- 📝 **Note Management** - Create, view, edit, and delete notes
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔒 **Protected Routes** - Secure access to user data
- 💾 **Persistent Storage** - Notes stored securely in MySQL database

## 🛠️ Technologies Used

- **Next.js** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Prisma** - Database ORM and query builder
- **NextAuth.js** - Authentication library with Google Provider
- **MySQL** - Relational database
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- MySQL database
- Google OAuth credentials

### 1. Clone the repository

```bash
git clone https://github.com/anshul45-github/notes-app
cd notes-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (use `.env.example` as template):

```env
DATABASE_URL="mysql://username:password@localhost:3306/notesdb"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key_here"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

### 4. Database Setup

Push the Prisma schema to your database:

```bash
npx prisma db push
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application running locally.

## 📁 Project Structure

```
notes-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth.js authentication
│   │   └── notes/         # Notes CRUD operations
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React contexts (Theme)
│   ├── dashboard/         # Dashboard page
│   └── globals.css        # Global styles
├── lib/                   # Utility libraries
│   ├── auth.ts           # Authentication configuration
│   └── prisma.ts         # Database client
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── [config files]        # Next.js, Tailwind, TypeScript configs
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🧑‍💻 Author

**Anshul Mendiratta**  
B.Tech in Data Science and Engineering, IIT Mandi  
Passionate about web development, AI, and building tools for creators.

---

⭐ If you found this project helpful, please consider giving it a star!