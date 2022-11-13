import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {JefeOperaciones, JefeOperacionesRelations, Sedes} from '../models';
import {SedesRepository} from './sedes.repository';

export class JefeOperacionesRepository extends DefaultCrudRepository<
  JefeOperaciones,
  typeof JefeOperaciones.prototype.idJefe,
  JefeOperacionesRelations
> {

  public readonly sedes: BelongsToAccessor<Sedes, typeof JefeOperaciones.prototype.idJefe>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('SedesRepository') protected sedesRepositoryGetter: Getter<SedesRepository>,
  ) {
    super(JefeOperaciones, dataSource);
    this.sedes = this.createBelongsToAccessorFor('sedes', sedesRepositoryGetter,);
    this.registerInclusionResolver('sedes', this.sedes.inclusionResolver);
  }
}
