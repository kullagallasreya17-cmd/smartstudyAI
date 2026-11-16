from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import study_plan, notes, quiz, interview, career, chat, resume

app = FastAPI(
    title="SmartStudy AI Service",
    description="AI-powered learning assistance APIs",
    version="1.0.0",
    docs_url="/docs",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(study_plan.router, prefix="/ai/study-plan",  tags=["Study Plan"])
app.include_router(notes.router,      prefix="/ai/notes",       tags=["Notes"])
app.include_router(quiz.router,       prefix="/ai/quiz",        tags=["Quiz"])
app.include_router(interview.router,  prefix="/ai/interview",   tags=["Interview"])
app.include_router(career.router,     prefix="/ai/career",      tags=["Career"])
app.include_router(chat.router,       prefix="/ai/chat",        tags=["Mentor Chat"])
app.include_router(resume.router,     prefix="/ai/resume",      tags=["Resume"])

@app.get("/health")
def health(): return {"status": "ok", "service": "SmartStudy AI"}
