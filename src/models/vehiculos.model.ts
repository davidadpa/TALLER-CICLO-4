import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Vehiculos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idVehiculo?: number;

  @property({
    type: 'string',
    required: true,
  })
  numeroChasis: string;

  @property({
    type: 'string',
    required: true,
  })
  tarjetaPropiedad: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  idUsuarioPropietario: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vehiculos>) {
    super(data);
  }
}

export interface VehiculosRelations {
  // describe navigational properties here
}

export type VehiculosWithRelations = Vehiculos & VehiculosRelations;
