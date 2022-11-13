import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Sedes,
  Usuario,
} from '../models';
import {SedesRepository} from '../repositories';

export class SedesUsuarioController {
  constructor(
    @repository(SedesRepository) protected sedesRepository: SedesRepository,
  ) { }

  @get('/sedes/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Array of Sedes has many Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Usuario)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.sedesRepository.usuarios(id).find(filter);
  }

  @post('/sedes/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Sedes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Sedes.prototype.idSede,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInSedes',
            exclude: ['idUsuario'],
            optional: ['sedesId']
          }),
        },
      },
    }) usuario: Omit<Usuario, 'idUsuario'>,
  ): Promise<Usuario> {
    return this.sedesRepository.usuarios(id).create(usuario);
  }

  @patch('/sedes/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Sedes.Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Partial<Usuario>,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.sedesRepository.usuarios(id).patch(usuario, where);
  }

  @del('/sedes/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Sedes.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.sedesRepository.usuarios(id).delete(where);
  }
}
