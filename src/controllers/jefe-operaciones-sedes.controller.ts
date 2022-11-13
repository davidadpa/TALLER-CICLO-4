import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  JefeOperaciones,
  Sedes,
} from '../models';
import {JefeOperacionesRepository} from '../repositories';

export class JefeOperacionesSedesController {
  constructor(
    @repository(JefeOperacionesRepository)
    public jefeOperacionesRepository: JefeOperacionesRepository,
  ) { }

  @get('/jefe-operaciones/{id}/sedes', {
    responses: {
      '200': {
        description: 'Sedes belonging to JefeOperaciones',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sedes)},
          },
        },
      },
    },
  })
  async getSedes(
    @param.path.string('id') id: typeof JefeOperaciones.prototype.idJefe,
  ): Promise<Sedes> {
    return this.jefeOperacionesRepository.sedes(id);
  }
}
