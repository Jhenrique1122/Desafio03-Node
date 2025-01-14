import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { search } from './search'
import { create } from './create'
import { getPet } from './get-pet'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.get('/pets/get-pet', getPet)

  app.get('/pets/search', search)

  app.post('/pets', { onRequest: [verifyUserRole('ADMIN')] }, create)
}
