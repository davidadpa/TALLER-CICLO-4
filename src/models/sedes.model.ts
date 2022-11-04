import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Sedes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idSede?: number;

  @property({
    type: 'string',
    required: true,
  })
  sede: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sedes>) {
    super(data);
  }
}

export interface SedesRelations {
  // describe navigational properties here
}

export type SedesWithRelations = Sedes & SedesRelations;
