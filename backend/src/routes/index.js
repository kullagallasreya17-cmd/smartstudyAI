import { Router } from 'express'
import authRoutes         from './auth.routes.js'
import userRoutes         from './user.routes.js'
import studyRoutes        from './study.routes.js'
import notesRoutes        from './notes.routes.js'
import quizRoutes         from './quiz.routes.js'
import interviewRoutes    from './interview.routes.js'
import careerRoutes       from './career.routes.js'
import progressRoutes     from './progress.routes.js'
import notificationRoutes from './notifications.routes.js'

const router = Router()

router.use('/auth',          authRoutes)
router.use('/users',         userRoutes)
router.use('/study',         studyRoutes)
router.use('/notes',         notesRoutes)
router.use('/quiz',          quizRoutes)
router.use('/interview',     interviewRoutes)
router.use('/career',        careerRoutes)
router.use('/progress',      progressRoutes)
router.use('/notifications', notificationRoutes)

export default router
