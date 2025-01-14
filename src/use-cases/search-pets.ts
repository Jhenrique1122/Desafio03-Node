import { PetsRepository } from '@/repositories/pets-repository'
import { PET } from '@prisma/client'

interface SearchPetsUseCaseRequest {
  city: string
  query?: string
  page: number
}

interface SearchPetsUseCaseResponse {
  pets: PET[]
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
    query,
    page,
  }: SearchPetsUseCaseRequest): Promise<SearchPetsUseCaseResponse> {
    const pets = await this.petsRepository.searchMany(city, page, query)

    return {
      pets,
    }
  }
}
