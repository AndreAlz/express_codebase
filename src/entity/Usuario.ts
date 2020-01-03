import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;
  @Column({ type: "varchar", nullable: false })
  nombre_usuario: string;
  @Column({ type: "time without time zone", nullable: false })
  fecha_creacion: string;
  @Column({ type: "boolean", nullable: false })
  estado: boolean;
}
