import {EntityRepository, Repository} from "typeorm";
import {Usuario} from "../entity/Usuario";

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {

    findByName(nombre_usuario: string) {
        return this.findOne({ nombre_usuario });
    }

}