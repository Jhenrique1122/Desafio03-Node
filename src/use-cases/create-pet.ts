import { PetsRepository } from '@/repositories/pets-repository'
import { PET } from '@prisma/client'

interface CreatePETUseCaseRequest {
  title: string
  description: string | null
  age: number
  breed: string
  species: string
  city: string
  orgId: string
}

interface CreatePETUseCaseResponse {
  pet: PET
}

export class CreateGymUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    title,
    description,
    age,
    breed,
    species,
    city,
    orgId,
  }: CreatePETUseCaseRequest): Promise<CreatePETUseCaseResponse> {
    const pet = await this.petsRepository.create({
      title,
      description,
      age,
      breed,
      species,
      city,
      org_id: orgId,
    })

    const petWithORG = await this.petsRepository.findById(pet.id)
    if (!petWithORG) {
      throw new Error('Pet not found')
    }

    return { pet }
  }
}
