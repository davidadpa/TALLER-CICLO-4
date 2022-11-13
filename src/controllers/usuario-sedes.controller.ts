import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Usuario,
  Sedes,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioSedesController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/sedes', {
    responses: {
      '200': {
        description: 'Sedes belonging to Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sedes)},
          },
        },
      },
    },
  })
  async getSedes(
    @param.path.string('id') id: typeof Usuario.prototype.idUsuario,
  ): Promise<Sedes> {
    return this.usuarioRepository.sedes(id);
  }
}
