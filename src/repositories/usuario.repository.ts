import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Sedes} from '../models';
import {SedesRepository} from './sedes.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.idUsuario,
  UsuarioRelations
> {

  public readonly sedes: BelongsToAccessor<Sedes, typeof Usuario.prototype.idUsuario>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('SedesRepository') protected sedesRepositoryGetter: Getter<SedesRepository>,
  ) {
    super(Usuario, dataSource);
    this.sedes = this.createBelongsToAccessorFor('sedes', sedesRepositoryGetter,);
    this.registerInclusionResolver('sedes', this.sedes.inclusionResolver);
  }
}
