"""Central repository for all AI prompt templates."""

STUDY_PLAN_PROMPT = """
You are an expert learning coach. Create a detailed weekly study plan.

User goal: {goal}
Available hours per day: {hours_per_day}
Current skill level: {skill_level}
Topics to cover: {topics}
Target date: {target_date}

Return a JSON object with:
- weeks: array of weekly plans
- each week: {{ week_number, focus_area, daily_sessions: [{{ day, topic, duration_min, resources }}] }}
- milestones: key checkpoints to measure progress
"""

NOTE_SUMMARY_PROMPT = """
Summarize the following study notes concisely. 
Extract key concepts, important definitions, and main takeaways.
Format as: Summary (2-3 sentences), Key Concepts (bullet list), Takeaways (bullet list).

Notes:
{content}
"""

FLASHCARD_GEN_PROMPT = """
Generate {count} flashcard Q&A pairs from these study notes.
Focus on testable facts, definitions, and concepts.
Return JSON array: [{{"question": "...", "answer": "..."}}]

Notes:
{content}
"""

INTERVIEW_FEEDBACK_PROMPT = """
You are a senior interviewer. Evaluate this interview response.

Question: {question}
Candidate answer: {answer}
Interview type: {interview_type}

Provide feedback on:
1. Technical accuracy (1-10)
2. Clarity and communication (1-10)
3. Depth of knowledge (1-10)
4. Specific improvements
5. Model answer outline

Return as structured JSON.
"""

CAREER_ROADMAP_PROMPT = """
Create a personalized career roadmap for someone who wants to become a {target_role}.

Current skills: {current_skills}
Experience level: {experience_level}
Time available per week: {hours_per_week} hours

Provide:
- Month-by-month learning plan (6 months)
- Priority skills to learn
- Recommended projects to build
- Resources for each topic
- Interview readiness milestones

Return as structured JSON.
"""

SKILL_GAP_PROMPT = """
Analyze the skill gap between a candidate and a job requirement.

Candidate skills: {candidate_skills}
Job description: {job_description}

Return JSON with:
- matching_skills: skills candidate already has
- missing_skills: skills needed but not present
- partial_skills: skills that need improvement
- priority_order: which gaps to fill first
- estimated_time: weeks to close each gap
"""

RESUME_REVIEW_PROMPT = """
Review this resume for a {target_role} position.

Resume text:
{resume_text}

Job description (optional):
{job_description}

Provide:
1. Overall score (1-100)
2. ATS compatibility score
3. Strengths (bullet list)
4. Weaknesses (bullet list)
5. Specific improvements for each section
6. Missing keywords from job description
7. Action verb improvements

Return as structured JSON.
"""
