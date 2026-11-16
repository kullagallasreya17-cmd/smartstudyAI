# SmartStudy AI 🎓

An AI-powered learning & career development platform that plans, tracks, and guides students through their learning journey.

## Features
- 📅 AI Study Planner – auto-generate weekly schedules
- 📝 Smart Notes – summarize, tag, and semantically search notes
- 🎤 Interview Prep – mock interviews with AI feedback
- 🚀 Career Roadmap – skill gap analysis and personalized roadmaps
- 📊 Progress Tracking – XP, streaks, badges, and analytics
- 🤖 AI Mentor Chat – real-time streaming guidance
- 🧠 Adaptive Quizzes – spaced repetition engine

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + Tailwind CSS + shadcn/ui |
| State | Zustand + TanStack Query |
| Backend | Node.js + Express |
| AI Service | Python FastAPI |
| AI Engine | Anthropic Claude API |
| Database | PostgreSQL + Redis + Pinecone |
| Storage | AWS S3 |
| DevOps | Docker + Kubernetes + GitHub Actions |

## Quick Start
```bash
git clone https://github.com/kullagallasreya17-cmd/smartstudyAI.git
cd smartstudyAI
cp .env.example .env
# Replace the placeholder values in .env before starting the services.
docker-compose up --build
```

Frontend: http://localhost:5173  
Backend API: http://localhost:4000  
AI Service: http://localhost:8000  
API Docs: http://localhost:4000/api-docs  

## Project Structure
See [docs/architecture.md](docs/architecture.md) for full breakdown.
