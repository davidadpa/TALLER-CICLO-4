import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Sedes, Usuario} from '../models';
import {SedesRepository} from './sedes.repository';
import {UsuarioRepository} from './usuario.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.idVehiculo,
  VehiculoRelations
> {

  public readonly sedes: BelongsToAccessor<Sedes, typeof Vehiculo.prototype.idVehiculo>;

  public readonly usuario: BelongsToAccessor<Usuario, typeof Vehiculo.prototype.idVehiculo>;

  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource, @repository.getter('SedesRepository') protected sedesRepositoryGetter: Getter<SedesRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
    this.sedes = this.createBelongsToAccessorFor('sedes', sedesRepositoryGetter,);
    this.registerInclusionResolver('sedes', this.sedes.inclusionResolver);
  }
}
