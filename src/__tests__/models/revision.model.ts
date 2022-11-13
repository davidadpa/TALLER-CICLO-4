import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Mecanico} from './mecanico.model';

@model({settings: {strict: false}})
export class Revision extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idRevision?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelAceite: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelLiquidoFreno: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelLiquidoDireccion: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelRefrigerante: string;

  @belongsTo(() => Mecanico, {name: 'mecanico'})
  idMecanico: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Revision>) {
    super(data);
  }
}

export interface RevisionRelations {
  // describe navigational properties here
}

export type RevisionWithRelations = Revision & RevisionRelations;
