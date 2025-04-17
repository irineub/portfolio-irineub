'use client'

import { useEffect, useState } from 'react'

export function ViewCounter() {
  const [views, setViews] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch('/api/views')
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error('Error fetching views:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchViews()
  }, [])

  if (loading) return <span>...</span>

  return (
    <span>
      {views.toLocaleString()} visualizações
    </span>
  )
} 