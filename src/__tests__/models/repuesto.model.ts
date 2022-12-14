import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Repuesto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idRepuesto?: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Repuesto>) {
    super(data);
  }
}

export interface RepuestoRelations {
  // describe navigational properties here
}

export type RepuestoWithRelations = Repuesto & RepuestoRelations;
