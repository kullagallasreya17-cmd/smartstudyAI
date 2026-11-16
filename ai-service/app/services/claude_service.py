import anthropic
from typing import AsyncGenerator

client = anthropic.Anthropic()

def ask_claude(prompt: str, system: str = "", max_tokens: int = 2048) -> str:
    """Single-turn Claude completion."""
    msgs = [{"role": "user", "content": prompt}]
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=max_tokens,
        system=system or "You are SmartStudy AI, an expert learning mentor.",
        messages=msgs,
    )
    return response.content[0].text

async def stream_claude(messages: list, system: str = "") -> AsyncGenerator[str, None]:
    """Streaming Claude response for mentor chat."""
    with client.messages.stream(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        system=system or "You are SmartStudy AI, a knowledgeable and encouraging mentor.",
        messages=messages,
    ) as stream:
        for text in stream.text_stream:
            yield text

def ask_claude_json(prompt: str, system: str = "") -> dict:
    """Return parsed JSON from Claude."""
    import json, re
    result = ask_claude(prompt, system)
    # Strip markdown fences if present
    clean = re.sub(r"```json|```", "", result).strip()
    return json.loads(clean)
