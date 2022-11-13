import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Sedes} from './sedes.model';

@model({settings: {strict: false}})
export class JefeOperaciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idJefe?: string;

  @property({
    type: 'string',
    required: true,
  })
  perfil: string;

  @belongsTo(() => Sedes)
  sedesId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<JefeOperaciones>) {
    super(data);
  }
}

export interface JefeOperacionesRelations {
  // describe navigational properties here
}

export type JefeOperacionesWithRelations = JefeOperaciones & JefeOperacionesRelations;
