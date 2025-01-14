import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-pet-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createGymBodySchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    age: z.number(),
    breed: z.string(),
    species: z.string(),
    city: z.string(),
    orgId: z.string(),
  })

  const { title, description, age, breed, species, city, orgId } =
    createGymBodySchema.parse(request.body)

  const createGymUseCase = makeCreateGymUseCase()

  await createGymUseCase.execute({
    title,
    description,
    age,
    breed,
    species,
    city,
    orgId,
  })

  return reply.status(201).send()
}
