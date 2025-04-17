import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://cloud.umami.is/api/websites/9c2388f8-2160-467b-ac45-16d8bf6e899b/pageviews', {
      headers: {
        'Authorization': `Bearer ${process.env.UMAMI_API_KEY}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch views')
    }

    const data = await response.json()
    return NextResponse.json({ views: data.pageviews.value })
  } catch (error) {
    console.error('Error fetching views:', error)
    return NextResponse.json({ views: 0 }, { status: 500 })
  }
} 