import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CambioRepuestos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCambioRepuesto?: number;

  @property({
    type: 'number',
    required: true,
  })
  idRepuesto: number;

  @property({
    type: 'number',
    required: true,
  })
  idRevision: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CambioRepuestos>) {
    super(data);
  }
}

export interface CambioRepuestosRelations {
  // describe navigational properties here
}

export type CambioRepuestosWithRelations = CambioRepuestos & CambioRepuestosRelations;
