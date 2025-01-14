import { PetsRepository } from '@/repositories/pets-repository'
import { PET } from '@prisma/client'

interface GetPetsUseCaseRequest {
  id: string
}

interface GetPetsUseCaseResponse {
  pets: PET
}

export class GetPetProfileUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    id,
  }: GetPetsUseCaseRequest): Promise<GetPetsUseCaseResponse> {
    const pets = await this.petsRepository.findById(id)

    if (!pets) {
      throw new Error('Pet not found')
    }

    return {
      pets,
    }
  }
}
