# ⚡ Reflex Arena

**A Simon Says reflex game you build, ship to the internet, and make
your own.**

> _"Mom says: tap RED."_ Tap it, fast.\
> _"Tap GREEN."_ Don't touch anything. Simon didn't say.

Play 15 rounds with 3 lives. Commands get faster and trickier as you
progress. Your score is saved to a live leaderboard that anyone with
your link can compete on.

This repository is the hands-on project for the **From Idea to
Production** workshop for 1st- and 2nd-year B.Tech students. You'll see
how a frontend, backend, and database work together---and leave with
your own game live on the internet.

---

## 🧠 The big idea in one picture

```text
 YOU (browser)                    THE REFEREE (server)                 THE MEMORY (database)
┌──────────────────┐   JSON over  ┌──────────────────────┐   Mongoose   ┌────────────────────┐
│  React frontend  │ ───HTTPS───▶ │  Express backend     │ ───────────▶ │  MongoDB Atlas     │
│  shows commands, │              │  picks commands,     │              │  stores every run  │
│  reports taps    │ ◀─────────── │  judges, scores      │ ◀─────────── │  and leaderboard   │
└──────────────────┘              └──────────────────────┘              └────────────────────┘
  hosted on Vercel                  hosted on Render                      hosted on Atlas (free)
```

**Golden rule: the server is the referee.** The browser displays
commands and reports player actions. The server decides whether those
actions are correct and calculates the score. This prevents someone from
simply changing `score = 999999` in the browser console and submitting
that score to the leaderboard.

---

## 🧰 Tech stack (MERN)

Layer Tool Where it runs Free plan

---

**M**ongoDB MongoDB Atlas + Mongoose Atlas cloud M0 cluster
**E**xpress Node.js + Express 5 Render Free web service
**R**eact React 19 + Vite Vercel Hobby plan
**N**ode Node.js 20+ Your laptop and Render ---

No TypeScript, CSS framework, or state-management library: just the
fundamentals, so every line is readable.

---

## 📁 Folder map

```text
reflex-arena/
├── README.md                 # You are here
├── render.yaml               # Optional one-click Render setup
├── docs/                     # The handbook (start with 00-START-HERE.md)
│
├── backend/                  # The referee (Express + MongoDB) → Render
│   ├── .env.example          # Copy to .env and add your MongoDB URL
│   ├── requests.http         # Try the API from VS Code
│   ├── src/
│   │   ├── server.js         # Starts everything (connect DB → listen)
│   │   ├── app.js             # Express app: CORS, JSON, routes, errors
│   │   ├── config/            # env.js (settings), db.js (MongoDB connection)
│   │   ├── routes/            # api.routes.js: URL → controller
│   │   ├── controllers/       # game.controller.js: route behaviour
│   │   ├── middleware/        # validate.js, errorHandler.js, logger.js
│   │   ├── models/            # Run.js: the shape of a game in MongoDB
│   │   └── game/              # rules.js (game rules) + referee.js (judging)
│   └── tests/                 # referee.test.js: tests the game rules
│
└── frontend/                 # What players see (React + Vite) → Vercel
    ├── .env.example          # Copy to .env.local and add your backend URL
    └── src/
        ├── main.jsx           # Entry point
        ├── App.jsx            # Switches between the four screens
        ├── config.js          # Mock mode switch and timings
        ├── theme/             # index.js selects a preset theme
        ├── screens/           # Start, Play, GameOver, Leaderboard
        ├── components/        # Pad, CommandBanner, TimerBar, Hud, ...
        ├── hooks/             # useGameEngine.js, useServerStatus.js
        ├── api/               # client.js (real server), mockServer.js (fake server)
        ├── lib/               # sound.js (Web Audio), commandText.js
        └── styles/            # global.css
```

---

## 🚀 Quick start

### Prerequisites

Install:

- [Node.js 20 or newer](https://nodejs.org/)
- [Git](https://git-scm.com/)

### 1. Run the frontend in mock mode

You can play immediately without setting up the backend or database.

```bash
cd frontend
npm install
npm run dev
```

Open <http://localhost:5173>. In mock mode, the frontend uses a
simulated server running in the browser.

### 2. Run the real backend

This requires a MongoDB Atlas database. Follow the [MongoDB Atlas
guide](docs/04-database-mongodb-atlas.md) to create one.

```bash
cd backend
npm install
```

Create your environment file:

```bash
# macOS / Linux
cp .env.example .env

# Windows Command Prompt
copy .env.example .env
```

Add your `MONGODB_URI` to `backend/.env`, then run:

```bash
npm test
npm run dev
```

The backend health endpoint should be available at
<http://localhost:5000/api/health>.

### 3. Connect the frontend to the backend

Create `frontend/.env.local` and add:

```env
VITE_API_URL=http://localhost:5000
```

Restart the frontend development server so Vite loads the new
environment variable.

For the complete walkthrough, read
[docs/03-run-locally.md](docs/03-run-locally.md).

---

## 📚 The handbook

---

\# Guide What you'll do

---

00 [Start here](docs/00-START-HERE.md) Follow the roadmap and
set up accounts and
tools

01 [How it works](docs/01-how-it-works.md) Follow one tap from
your finger to the
database and back

02 [API contract](docs/02-api-contract.md) Understand the
agreement between
frontend and backend

03 [Run locally](docs/03-run-locally.md) Get the complete
project running on your
laptop

04 [Database: MongoDB Create your free cloud
Atlas](docs/04-database-mongodb-atlas.md) database

05 [Backend: Deploy the referee to
Render](docs/05-deploy-backend-render.md) the internet

06 [Frontend: Deploy the game and get
Vercel](docs/06-deploy-frontend-vercel.md) your public link

07 [Make it yours](docs/07-make-it-yours.md) Customize themes and
explore ideas

08 [Troubleshooting](docs/08-troubleshooting.md) Diagnose and fix common
problems

09 [Maintenance](docs/09-maintenance.md) Work with logs,
updates, and rollbacks
after launch

10 [Facilitator Run the workshop,
guide](docs/10-facilitator-guide.md) configure shared
services, and prepare
fallbacks

★ [Cheat sheet](docs/cheatsheet.md) Find the important
commands and URLs on
one page

---

---

## 🎮 Game rules

---

Command What to do

---

**Simon says: tap RED** Tap the red pad

**Simon says: double-tap BLUE** Tap the blue pad twice within 0.4
seconds

**Tap GREEN** _(without "Simon Do nothing until the timer ends; it
says")_ is a trap

---

Rounds Time per command Available commands Trap probability

---

1--5 3.0 s Tap 20%
6--10 2.0 s Tap, double-tap 30%
11--15 1.2 s Tap, double-tap, and optionally hold 40%

In stretch mode, later rounds may also include hold commands and
additional "do not tap" traps.

### Scoring

- **Correct action:** `(100 + speed bonus) × streak multiplier`
- **Dodging a trap:** 50 points
- **Streak multiplier:** 3 correct actions in a row gives ×2; 6 in a
  row gives ×3.
- Faster reactions earn a larger speed bonus.

### Ranks

Rank Score

---

🐣 Rookie Below 1,000
🎯 Sharp 1,000+
⚡ Lightning 2,500+
👑 Reflex God 4,500+

### Keyboard controls

Use the number keys **1, 2, 3, and 4** for the red, blue, green, and
yellow pads, respectively.

---

_Based on "Reflex Arena: Full Project Plan" (QuickRoll, November 2026),
rebuilt on the MERN stack for the workshop._
