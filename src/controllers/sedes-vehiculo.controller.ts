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
  Vehiculo,
} from '../models';
import {SedesRepository} from '../repositories';

export class SedesVehiculoController {
  constructor(
    @repository(SedesRepository) protected sedesRepository: SedesRepository,
  ) { }

  @get('/sedes/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Array of Sedes has many Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Vehiculo>,
  ): Promise<Vehiculo[]> {
    return this.sedesRepository.vehiculos(id).find(filter);
  }

  @post('/sedes/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Sedes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Vehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Sedes.prototype.idSede,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {
            title: 'NewVehiculoInSedes',
            exclude: ['idVehiculo'],
            optional: ['sedesId']
          }),
        },
      },
    }) vehiculo: Omit<Vehiculo, 'idVehiculo'>,
  ): Promise<Vehiculo> {
    return this.sedesRepository.vehiculos(id).create(vehiculo);
  }

  @patch('/sedes/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Sedes.Vehiculo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiculo, {partial: true}),
        },
      },
    })
    vehiculo: Partial<Vehiculo>,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.sedesRepository.vehiculos(id).patch(vehiculo, where);
  }

  @del('/sedes/{id}/vehiculos', {
    responses: {
      '200': {
        description: 'Sedes.Vehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Vehiculo)) where?: Where<Vehiculo>,
  ): Promise<Count> {
    return this.sedesRepository.vehiculos(id).delete(where);
  }
}
