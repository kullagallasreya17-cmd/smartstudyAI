import { create } from 'zustand'

const useProgressStore = create((set) => ({
  xp: 0,
  streak: 0,
  level: 1,
  achievements: [],
  setProgress: (data) => set(data),
  addXP: (points) => set((s) => ({ xp: s.xp + points })),
  addAchievement: (badge) => set((s) => ({ achievements: [...s.achievements, badge] })),
}))
export default useProgressStore
