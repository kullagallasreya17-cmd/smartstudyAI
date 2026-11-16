from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List
from app.services.claude_service import stream_claude

router = APIRouter()

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]
    topic: str = ""

@router.post("/stream")
async def mentor_chat(req: ChatRequest):
    system = f"You are SmartStudy AI, an expert mentor. {f'The student is currently studying: {req.topic}.' if req.topic else ''} Be concise, encouraging, and use examples."
    msgs = [{"role": m.role, "content": m.content} for m in req.messages]

    async def generate():
        async for chunk in stream_claude(msgs, system):
            yield chunk

    return StreamingResponse(generate(), media_type="text/plain")
