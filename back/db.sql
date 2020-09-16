CREATE DATABASE IF NOT EXISTS test_ego;
USE test_ego;

CREATE TABLE cars(
	id int(255) auto_increment not null,
	name varchar(50) NOT NULL,
	model varchar(255) NOT NULL,
	category_id int(255) NOT NULL,
	description text,
	image varchar(255),
	created_at datetime DEFAULT NULL,
	updated_at datetime DEFAULT NULL,
	CONSTRAINT pk_cars PRIMARY KEY (id),
	CONSTRAINT fk_cars_category FOREIGN KEY (category_id) REFERENCES categories(id)
)ENGINE=InnoDb;

CREATE TABLE categories(

id int(255) auto_increment not null,
name varchar(100),
created_at datetime DEFAULT NULL,
updated_at datetime DEFAULT NULL,
CONSTRAINT pk_categories PRIMARY KEY (id)
)ENGINE=InnoDb;