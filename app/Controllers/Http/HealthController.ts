/* A type definition for the HttpContextContract. */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Health from 'App/Models/Health'

export default class HealthController {
  public async findAll ({ response }: HttpContextContract){
    const health = await Health.all()
    return response.ok({health})
  }

  public async update ({ request, response }: HttpContextContract){
    const healthPayload = request.all();

    const health = await Health.findByOrFail('id', request.param('id'))

    health.merge(healthPayload)
    await health.save()
    return response.ok({health})
  }
}
