'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function ViewCounter() {
  const [views, setViews] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const registerView = async () => {
      try {
        const response = await fetch(`/api/views?path=${encodeURIComponent(pathname)}`)
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error('Error fetching views:', error)
      } finally {
        setLoading(false)
      }
    }

    registerView()
  }, [pathname])

  if (loading) return <span>...</span>

  return (
    <span>
      {views.toLocaleString()} visualizações
    </span>
  )
} 