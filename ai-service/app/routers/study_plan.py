from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional
from app.services.claude_service import ask_claude_json
from app.services.prompt_templates import STUDY_PLAN_PROMPT

router = APIRouter()

class StudyPlanRequest(BaseModel):
    goal: str
    hours_per_day: float
    skill_level: str
    topics: List[str]
    target_date: Optional[str] = None

@router.post("/generate")
def generate_study_plan(req: StudyPlanRequest):
    prompt = STUDY_PLAN_PROMPT.format(
        goal=req.goal,
        hours_per_day=req.hours_per_day,
        skill_level=req.skill_level,
        topics=", ".join(req.topics),
        target_date=req.target_date or "3 months from now",
    )
    return ask_claude_json(prompt)
