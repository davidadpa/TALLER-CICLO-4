import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vehiculo,
  Sedes,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoSedesController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/sedes', {
    responses: {
      '200': {
        description: 'Sedes belonging to Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sedes)},
          },
        },
      },
    },
  })
  async getSedes(
    @param.path.string('id') id: typeof Vehiculo.prototype.idVehiculo,
  ): Promise<Sedes> {
    return this.vehiculoRepository.sedes(id);
  }
}
