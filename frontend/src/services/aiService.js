import api from './api'

// Stream AI mentor chat response
export const streamMentorChat = async (messages, onChunk) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/ai/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ messages }),
  })
  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    onChunk(decoder.decode(value))
  }
}

export const generateStudyPlan   = (data)    => api.post('/ai/study-plan', data)
export const summarizeNote        = (noteId)  => api.post(`/ai/summarize/${noteId}`)
export const generateFlashcards   = (noteId)  => api.post(`/ai/flashcards/${noteId}`)
export const generateQuizQuestion = (topic)   => api.post('/ai/quiz/generate', { topic })
export const getInterviewFeedback = (session) => api.post('/ai/interview/feedback', session)
export const analyzeResume        = (formData)=> api.post('/ai/resume-review', formData)
export const getCareerRoadmap     = (goal)    => api.post('/ai/career-roadmap', { goal })
