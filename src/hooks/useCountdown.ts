import { useEffect, useRef, useState } from 'react'

// Counts down from `totalSeconds` while `running` is true. Resets to the full
// duration whenever `totalSeconds` changes (new session). Fires `onExpire`
// exactly once at 0. Uses functional setState + a ref for the callback so the
// interval is not recreated every tick.
export function useCountdown(
  totalSeconds: number,
  running: boolean,
  onExpire: () => void,
): number {
  const [remaining, setRemaining] = useState(totalSeconds)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire
  const wasRunningRef = useRef(false)

  // Reset on each rising edge of `running` (each fresh session start) and
  // whenever the configured duration changes.
  useEffect(() => {
    if (running && !wasRunningRef.current) {
      setRemaining(totalSeconds)
    }
    wasRunningRef.current = running
  }, [running, totalSeconds])

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(id)
          onExpireRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, totalSeconds])

  return remaining
}

export function formatCountdown(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds))
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
