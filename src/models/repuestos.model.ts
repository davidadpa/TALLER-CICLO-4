import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Repuestos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRepuesto?: number;

  @property({
    type: 'string',
    required: true,
  })
  repuesto: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Repuestos>) {
    super(data);
  }
}

export interface RepuestosRelations {
  // describe navigational properties here
}

export type RepuestosWithRelations = Repuestos & RepuestosRelations;
