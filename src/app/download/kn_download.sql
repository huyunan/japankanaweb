CREATE DATABASE IF NOT EXISTS japankana default charset utf8 COLLATE utf8_general_ci;
use japankana;
CREATE TABLE IF NOT EXISTS `kn_download`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `ip` VARCHAR(20),
   `address` VARCHAR(200) NOT NULL,
   `update_date` DATE,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;