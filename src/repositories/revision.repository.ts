import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Revision, RevisionRelations, Mecanico} from '../models';
import {MecanicoRepository} from './mecanico.repository';

export class RevisionRepository extends DefaultCrudRepository<
  Revision,
  typeof Revision.prototype.idRevision,
  RevisionRelations
> {

  public readonly mecanico: BelongsToAccessor<Mecanico, typeof Revision.prototype.idRevision>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('MecanicoRepository') protected mecanicoRepositoryGetter: Getter<MecanicoRepository>,
  ) {
    super(Revision, dataSource);
    this.mecanico = this.createBelongsToAccessorFor('mecanico', mecanicoRepositoryGetter,);
    this.registerInclusionResolver('mecanico', this.mecanico.inclusionResolver);
  }
}
