import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { OrgsRepository } from '../org-repository'

export class PrismaOrgsRepository implements OrgsRepository {
  async findById(id: string) {
    const org = await prisma.oRG.findUnique({
      where: {
        id,
      },
    })

    return org
  }

  async findByEmail(email: string) {
    const org = await prisma.oRG.findUnique({
      where: {
        email,
      },
    })

    return org
  }

  async create(data: Prisma.ORGCreateInput) {
    const org = await prisma.oRG.create({
      data,
    })

    return org
  }
}
