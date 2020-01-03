create table usuario(
	id_usuario serial primary key,
	nombre_usuario varchar(150) not null,
	fecha_creacion timestamp not null,
	estado boolean not null
);
insert into usuario(nombre_usuario, fecha_creacion, estado) values ('admin', current_timestamp, true)

create table rol(
	id_rol serial primary key,
	nombre_rol varchar(150) not null,
	fecha_creacion timestamp not null,
	estado boolean not null
);

insert into rol(nombre_rol, fecha_creacion, estado) values ('ROL_ADMIN', current_timestamp, true)
insert into rol(nombre_rol, fecha_creacion, estado) values ('ROL_USER', current_timestamp, true)
create table usuario_rol(
	id_usuario_rol serial primary key,
	id_usuario integer references usuario(id_usuario),
	id_rol integer references rol(id_rol)
);

insert into usuario_rol(id_usuario, id_rol) values (1,1)
insert into usuario_rol(id_usuario, id_rol) values (1,2)


select * from usuario;
select * from rol;
select * from usuario_rol;