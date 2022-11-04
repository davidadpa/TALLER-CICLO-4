import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Servicios extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idServicio?: number;

  @property({
    type: 'string',
    required: true,
  })
  servicio: string;

  @property({
    type: 'number',
    required: true,
  })
  idRevision: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Servicios>) {
    super(data);
  }
}

export interface ServiciosRelations {
  // describe navigational properties here
}

export type ServiciosWithRelations = Servicios & ServiciosRelations;
