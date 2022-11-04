import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estados extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idEstado?: number;

  @property({
    type: 'number',
    required: true,
  })
  estado: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estados>) {
    super(data);
  }
}

export interface EstadosRelations {
  // describe navigational properties here
}

export type EstadosWithRelations = Estados & EstadosRelations;
