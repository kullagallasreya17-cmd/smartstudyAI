# SmartStudy AI – Architecture

## System Overview
Three-service architecture: React frontend, Node.js backend, Python AI service.

## Services

### Frontend (Port 5173)
React 18 + Vite SPA. Communicates with backend via REST + Socket.IO.
State: Zustand (auth, study timer, progress) + TanStack Query (server state).

### Backend API (Port 4000)
Node.js + Express. Handles auth, data persistence, file uploads, real-time (Socket.IO).
Routes proxy AI requests to the AI service.

### AI Service (Port 8000)
Python FastAPI. All Claude API calls, vector embeddings, PDF parsing.
Returns structured JSON or streaming responses.

## Data Flow

```
User Action → React → Backend API → AI Service → Claude API
                    ↓                           ↓
              PostgreSQL              Pinecone (vectors)
              Redis (cache)
              S3 (files)
```

## Key Design Decisions

1. **Separate AI service** – Python ecosystem (langchain, sentence-transformers, pdfplumber)
   is far richer for AI work than Node.js.

2. **Vector DB for notes** – Pinecone / pgvector enables semantic search.
   Users find notes by meaning, not just keywords.

3. **Socket.IO for chat** – Streaming Claude responses require server-sent events or
   websockets. Socket.IO handles both.

4. **Prisma ORM** – Type-safe DB queries, easy migrations, works great with PostgreSQL.

5. **SM-2 algorithm** – Implemented client-side in utils/spacedRepetition.js.
   Scheduled review dates stored in the Flashcard table.
