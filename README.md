<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png" width="80" alt="Spotify Logo"/>
</p>

<h1 align="center">🎶 Spotify Clone</h1>

<p align="center">
  A full-stack music streaming application built with <b>React</b> and <b>Spring Boot</b>.<br/>
  Browse songs, discover artists, explore albums, and manage your own playlists — all in one place.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Spring_Boot-4-6DB33F?logo=springboot&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white&style=flat-square" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens&logoColor=white&style=flat-square" />
</p>

---

## ✨ What Does This App Do?

Think of it like a simplified version of Spotify. Here's what users can do:

| Feature | Description |
|---|---|
| 🎵 **Browse Songs** | View and play songs with a built-in audio player |
| 🎤 **Discover Artists** | Explore artist profiles and their music |
| 💿 **Explore Albums** | Browse albums and see their track listings |
| 📋 **Create Playlists** | Build and manage personal playlists |
| 🔍 **Search** | Find songs, artists, and albums instantly |
| 👤 **User Profiles** | Register, log in, and manage your account |
| 🔒 **Secure Access** | Industry-standard authentication protects your data |

---

## 🏗️ How It's Built

The project has **three main parts** that work together:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   👤 User                                               │
│    │                                                    │
│    ▼                                                    │
│   ┌───────────────┐    API Calls    ┌───────────────┐   │
│   │   Frontend    │ ──────────────► │   Backend     │   │
│   │   (React)     │ ◄────────────── │ (Spring Boot) │   │
│   │   Port 3000   │    JSON Data    │   Port 8080   │   │
│   └───────────────┘                 └───────┬───────┘   │
│                                             │           │
│                                        Read/Write       │
│                                             │           │
│                                     ┌───────▼───────┐   │
│                                     │    Database   │   │
│                                     │   (MySQL)     │   │
│                                     │   Port 3307   │   │
│                                     └───────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 19, Vite, React Router | The visual interface users see and interact with |
| **Backend** | Spring Boot 4, Java 17, Spring Security | Handles business logic, data processing, and security |
| **Database** | MySQL 8 | Stores all data — users, songs, artists, albums, playlists |
| **Auth** | JWT (JSON Web Tokens) | Keeps user sessions secure without storing passwords in the browser |
| **DevOps** | Docker & Docker Compose | Packages everything so it runs the same on any machine |

---

## 📁 Project Structure

```
spotify-clone/
│
├── frontend/                → React app (what users see)
│   ├── src/
│   │   ├── pages/           → Full pages (Home, Search, Login, Register, Profile…)
│   │   ├── components/      → Reusable UI pieces (SongCard, ArtistCard, AudioPlayer…)
│   │   ├── context/         → Global state management (Auth)
│   │   └── api/             → API communication setup
│   └── Dockerfile           → Instructions to containerize the frontend
│
├── backend/                 → Spring Boot API (the brain)
│   ├── src/main/java/com/spotify/
│   │   ├── controller/      → API endpoints (what the frontend talks to)
│   │   ├── service/         → Business logic (the "how things work" layer)
│   │   ├── repository/      → Database queries
│   │   ├── model/           → Data definitions (Song, Artist, Album, Playlist, User)
│   │   ├── security/        → Authentication & authorization (JWT, filters)
│   │   ├── dto/             → Data transfer shapes for login/register
│   │   └── exception/       → Error handling
│   └── Dockerfile           → Instructions to containerize the backend
│
└── docker-compose.yml       → One command to start everything
```

---

## 🚀 Getting Started

### Option 1 — Run with Docker *(Recommended, easiest)*

> You only need [Docker](https://www.docker.com/products/docker-desktop/) installed. Nothing else.

```bash
# 1. Clone the repository
git clone https://github.com/Utkarsh-Karambhe/spotify-clone.git
cd spotify-clone

# 2. Start everything with one command
docker-compose up --build
```

That's it! Open your browser:

| Service | URL |
|---|---|
| 🌐 **Frontend** | [http://localhost:3000](http://localhost:3000) |
| ⚙️ **Backend API** | [http://localhost:8080](http://localhost:8080) |
| 🗄️ **Database** | `localhost:3307` (MySQL) |

To stop everything:
```bash
docker-compose down
```

---

### Option 2 — Run Manually *(For developers)*

**Prerequisites**
- Java 17+
- Node.js 20+
- MySQL 8 (running on port `3307`, database named `spotify_db`)

**Backend**
```bash
cd backend
./mvnw spring-boot:run
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Overview

The backend exposes RESTful endpoints that the frontend consumes:

| Resource | Endpoint | What It Does |
|---|---|---|
| Auth | `POST /api/auth/login` | Log in and receive a token |
| Auth | `POST /api/auth/register` | Create a new account |
| Songs | `GET /api/songs` | List all songs |
| Artists | `GET /api/artists` | List all artists |
| Albums | `GET /api/albums` | List all albums |
| Playlists | `GET /api/playlists` | List user playlists |
| Users | `GET /api/users` | User management |

> All endpoints (except login/register) require a valid JWT token in the request header.

---

## 🛠️ Tech Stack At a Glance

<table>
  <tr>
    <th>Category</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td><b>Frontend</b></td>
    <td>React 19 · Vite · React Router · Axios</td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>Spring Boot 4 · Java 17 · Spring Security · Spring Data JPA · Lombok</td>
  </tr>
  <tr>
    <td><b>Database</b></td>
    <td>MySQL 8</td>
  </tr>
  <tr>
    <td><b>Authentication</b></td>
    <td>JWT (jjwt 0.11.5)</td>
  </tr>
  <tr>
    <td><b>Containerization</b></td>
    <td>Docker · Docker Compose · Nginx</td>
  </tr>
  <tr>
    <td><b>Build Tools</b></td>
    <td>Maven (backend) · npm (frontend)</td>
  </tr>
</table>

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m "Add amazing feature"`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available for learning and personal use.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Utkarsh-Karambhe">Utkarsh Karambhe</a>
</p>
