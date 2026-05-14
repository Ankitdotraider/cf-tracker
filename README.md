# CF Tracker

A full-stack web app to track and improve your Codeforces competitive programming performance.

## Features

- Rating history graph across all contests
- Contest history with rank, rating delta, and per-contest solved/missed problems
- Weak tag analysis based on wrong answer frequency
- Personalized problem recommendations near your current rating
- Upsolve tracker — lists all missed contest problems with checkbox progress (persisted locally)
- JWT-based auth with per-user CF handle storage

## Tech Stack

**Frontend:** React, Recharts, Vite — deployed on Vercel  
**Backend:** Node.js, Express, Prisma, PostgreSQL, JWT — deployed on Render

## Live Demo

[cf-tracker-app.vercel.app](https://cf-tracker-app.vercel.app)

## Usage

1. Sign up and log in
2. Enter your Codeforces handle
3. View your rating graph, weak tags, and problem recommendations
4. Browse contest history with expandable solved/missed breakdowns
5. Use the Upsolve Tracker to work through problems you missed during contests

## Author

Ankit Ram | [CF: codecrusader69](https://codeforces.com/profile/codecrusader69) | [GitHub: Ankitdotraider](https://github.com/Ankitdotraider)
