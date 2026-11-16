import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from '@components/common/ProtectedRoute'

// Auth Pages
import Login from '@pages/auth/Login'
import Register from '@pages/auth/Register'
import ForgotPassword from '@pages/auth/ForgotPassword'

// App Pages
import Dashboard from '@pages/dashboard/Dashboard'
import StudyPlanner from '@pages/study-planner/StudyPlanner'
import NotesHome from '@pages/notes/NotesHome'
import NoteEditor from '@pages/notes/NoteEditor'
import InterviewHome from '@pages/interview-prep/InterviewHome'
import MockInterview from '@pages/interview-prep/MockInterview'
import CareerRoadmap from '@pages/career/CareerRoadmap'
import ProgressDashboard from '@pages/progress/ProgressDashboard'
import MentorChat from '@pages/mentor-chat/MentorChat'
import QuizHome from '@pages/quiz/QuizHome'
import Settings from '@pages/settings/Settings'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/study-planner" element={<StudyPlanner />} />
          <Route path="/notes" element={<NotesHome />} />
          <Route path="/notes/:id" element={<NoteEditor />} />
          <Route path="/interview" element={<InterviewHome />} />
          <Route path="/interview/mock" element={<MockInterview />} />
          <Route path="/career" element={<CareerRoadmap />} />
          <Route path="/progress" element={<ProgressDashboard />} />
          <Route path="/chat" element={<MentorChat />} />
          <Route path="/quiz" element={<QuizHome />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
