import { OrgsRepository } from '@/repositories/org-repository'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { ORG } from '@prisma/client'
import { compare } from 'bcryptjs'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  orgs: ORG
}

export class AuthenticateUseCase {
  constructor(private usersRepository: OrgsRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const orgs = await this.usersRepository.findByEmail(email)

    if (!orgs) {
      throw new InvalidCredentialsError()
    }

    const doestPasswordMatches = await compare(password, orgs.password_hash)

    if (!doestPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      orgs,
    }
  }
}
