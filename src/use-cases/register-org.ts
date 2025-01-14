import { OrgsRepository } from '@/repositories/org-repository'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { ORG } from '@prisma/client'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  description: string | null
  phone: string
  password: string
}

interface RegisterUseCaseResponse {
  user: ORG
}

export class RegisterUseCase {
  constructor(private usersRepository: OrgsRepository) {}

  async execute({
    name,
    email,
    description,
    phone,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      description,
      phone,
      password_hash,
    })

    return {
      user,
    }
  }
}
