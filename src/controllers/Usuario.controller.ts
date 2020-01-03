import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../framework/IControllerBase.interface";
import { getCustomRepository } from "typeorm";
import { UsuarioRepository } from "../repository/UsuarioRepository";
import { UsuarioService } from "../service/Usuario.service";
import { Usuario } from "entity/Usuario";

class UsuarioController implements IControllerBase {
  public service = new UsuarioService();
  public repository = getCustomRepository(UsuarioRepository);
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/usuario/findall", this.findall);
    this.router.post("/usuario/create", this.create);
    this.router.put("/usuario/update", this.update);
    this.router.delete("/usuario/delete", this.delete);
  }

  findall = async (req: Request, res: Response) => {
    try {
      var result = await this.service.findall();
      return res.status(200).json({ data: result });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      var usuario: Usuario = req.body;
      var result = await this.service.save(usuario);
      return res.status(200).json({ data: result });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      var usuario: Usuario = req.body;
      var result = await this.service.update(usuario);
      return res.status(200).json({ data: result });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      var usuario: Usuario = req.body;
      var result = await this.service.delete(usuario);
      return res.status(200).json({ data: result });
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };
}

export default UsuarioController;
