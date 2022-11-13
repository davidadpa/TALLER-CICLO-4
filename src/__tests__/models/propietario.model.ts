import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Propietario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idPropietario?: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudadResidencia: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
