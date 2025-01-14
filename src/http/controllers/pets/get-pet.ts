import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-pet-profile-use.case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function getPet(request: FastifyRequest, reply: FastifyReply) {
  const GetPetQuerySchema = z.object({
    id: z.string(),
  })

  const { id } = GetPetQuerySchema.parse(request.query)

  const GetPetUseCase = makeGetUserProfileUseCase()

  const { pets } = await GetPetUseCase.execute({
    id,
  })

  return reply.status(200).send({
    pets,
  })
}
