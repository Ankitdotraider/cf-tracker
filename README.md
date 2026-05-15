# CF Tracker

![Live](https://img.shields.io/badge/live-cf--tracker--app.vercel.app-6366f1?style=flat-square&logo=vercel)
![Backend](https://img.shields.io/badge/backend-render-46E3B7?style=flat-square&logo=render)
![React](https://img.shields.io/badge/react-18-61DAFB?style=flat-square&logo=react)
![Node](https://img.shields.io/badge/node-express-339933?style=flat-square&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/db-postgresql-4169E1?style=flat-square&logo=postgresql)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

A full-stack web app to track and improve your Codeforces competitive programming performance.

## Features

- Rating history graph across all contests with rank boundary markers
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
