import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Sedes} from './sedes.model';
import {Usuario} from './usuario.model';

@model({settings: {strict: false}})
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idVehiculo?: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  capacidad: string;

  @property({
    type: 'string',
    required: true,
  })
  cilindrajeMotor: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @belongsTo(() => Sedes)
  sedesId: string;

  @belongsTo(() => Usuario, {name: 'usuario'})
  idUsuario: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
