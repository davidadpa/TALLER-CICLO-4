import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Revisiones extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRevision?: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaRegistro: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaProgramada: string;

  @property({
    type: 'string',
    required: true,
  })
  horaEntrada: string;

  @property({
    type: 'string',
    required: true,
  })
  horaSalida: string;

  @property({
    type: 'number',
    required: true,
  })
  idVehiculo: number;

  @property({
    type: 'string',
    required: true,
  })
  idUsuarioMecanico: string;

  @property({
    type: 'number',
    required: true,
  })
  idEstado: number;

  @property({
    type: 'string',
    required: true,
  })
  idUsuarioEmpleado: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelAceite: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelLiquidoFrenos: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelRefrigerante: string;

  @property({
    type: 'string',
    required: true,
  })
  nivelLiquidoDireccion: string;

  @property({
    type: 'number',
    required: true,
  })
  idSede: number;

  @property({
    type: 'string',
    required: true,
  })
  idServicio: string;

  @property({
    type: 'number',
    required: true,
  })
  idCambioRepuesto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Revisiones>) {
    super(data);
  }
}

export interface RevisionesRelations {
  // describe navigational properties here
}

export type RevisionesWithRelations = Revisiones & RevisionesRelations;
