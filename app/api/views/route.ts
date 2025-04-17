import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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
    console.error('Error managing views:', error)
    return NextResponse.json({ views: 0 }, { status: 500 })
  }
} 