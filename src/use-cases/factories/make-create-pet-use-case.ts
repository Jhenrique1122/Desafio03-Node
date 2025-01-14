import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { CreateGymUseCase } from '../create-pet'

export function makeCreateGymUseCase() {
  const gymsRepository = new PrismaPetsRepository()
  const useCase = new CreateGymUseCase(gymsRepository)

  return useCase
}
