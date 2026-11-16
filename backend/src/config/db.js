import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : [],
})

export async function connectDB() {
  await prisma.$connect()
  console.log('✅ PostgreSQL connected')
}
