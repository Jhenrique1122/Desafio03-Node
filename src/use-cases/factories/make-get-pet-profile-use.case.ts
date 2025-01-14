import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { GetPetProfileUseCase } from '../get-pets'

export function makeGetUserProfileUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new GetPetProfileUseCase(petsRepository)

  return useCase
}
