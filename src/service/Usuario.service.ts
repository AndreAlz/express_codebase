import { getCustomRepository } from "typeorm";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { Usuario } from "../entity/Usuario";

export class UsuarioService {
  repository = getCustomRepository(UsuarioRepository);
  async findall() {
    return await this.repository.find();
  }

  async save(bean: Usuario) {
    return await this.repository.save(bean);
  }

  async update(bean: Usuario){
    return await this.repository.update(bean.id_usuario, bean);
  }

  async delete(bean: Usuario){
    return await this.repository.delete(bean.id_usuario);
  }
}
