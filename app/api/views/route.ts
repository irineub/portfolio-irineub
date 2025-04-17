import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path') || '/'

  try {
    // Registra uma nova visualização
    await prisma.pageView.create({
      data: {
        path,
      },
    })

    // Conta total de visualizações para o caminho
    const views = await prisma.pageView.count({
      where: {
        path,
      },
    })

    return NextResponse.json({ views })
  } catch (error) {
    console.error('Error in /api/views:', error)
    console.error('Request path:', path)
    console.error('Database URL:', process.env.POSTGRES_PRISMA_URL ? 'Configured' : 'Missing')
    
    return NextResponse.json(
      { 
        error: 'Failed to manage views',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
} 