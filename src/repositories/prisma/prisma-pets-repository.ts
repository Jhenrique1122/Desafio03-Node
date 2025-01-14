import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { PetsRepository } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async findById(id: string) {
    const pet = await prisma.pET.findUnique({
      where: {
        id,
      },

      include: {
        org: {
          select: {
            name: true,
            description: true,
            phone: true,
          },
        },
      },
    })

    return pet
  }

  async searchMany(city: string, page: number, query?: string) {
    const pets = await prisma.pET.findMany({
      where: {
        city: {
          equals: city,
        },
        ...(query && {
          OR: [
            {
              title: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              breed: {
                contains: query,
                mode: 'insensitive',
              },
            },
            {
              species: {
                contains: query,
                mode: 'insensitive',
              },
            },
          ],
        }),
      },
      take: 20,
      skip: (page - 1) * 20,
      include: {
        org: {
          select: {
            name: true,
            description: true,
            phone: true,
          },
        },
      },
    })

    return pets
  }

  async create(data: Prisma.PETUncheckedCreateInput) {
    const gym = await prisma.pET.create({
      data,
    })

    return gym
  }
}
