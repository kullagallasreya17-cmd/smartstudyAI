/**
 * SM-2 Spaced Repetition Algorithm
 * quality: 0-5 (0=blackout, 5=perfect)
 */
export function sm2(card, quality) {
  let { repetitions = 0, easeFactor = 2.5, interval = 1 } = card

  if (quality >= 3) {
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 6
    else interval = Math.round(interval * easeFactor)
    repetitions += 1
  } else {
    repetitions = 0
    interval = 1
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)

  return { repetitions, easeFactor, interval, nextReview }
}

export function isDueForReview(card) {
  return new Date(card.nextReview) <= new Date()
}
