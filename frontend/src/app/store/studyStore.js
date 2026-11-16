import { create } from 'zustand'

const useStudyStore = create((set) => ({
  activePlan: null,
  sessions: [],
  timerRunning: false,
  timerSeconds: 0,
  setActivePlan: (plan) => set({ activePlan: plan }),
  setSessions: (sessions) => set({ sessions }),
  setTimerRunning: (val) => set({ timerRunning: val }),
  tickTimer: () => set((s) => ({ timerSeconds: s.timerSeconds + 1 })),
  resetTimer: () => set({ timerSeconds: 0, timerRunning: false }),
}))
export default useStudyStore
