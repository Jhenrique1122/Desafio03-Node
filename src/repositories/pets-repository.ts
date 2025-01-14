import { PET, Prisma } from '@prisma/client'

export interface PetsRepository {
  findById(id: string): Promise<PET | null>
  searchMany(city: string, page: number, query?: string): Promise<PET[]>
  create(data: Prisma.PETUncheckedCreateInput): Promise<PET>
}
