CREATE DATABASE IF NOT EXISTS japankana default charset utf8 COLLATE utf8_general_ci;
use japankana;
CREATE TABLE IF NOT EXISTS `kn_download`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `ip` VARCHAR(20),
   `address` VARCHAR(200) NOT NULL,
   `update_date` DATETIME,
   PRIMARY KEY ( `id` )
)ENGINE=myisam DEFAULT CHARSET=utf8;
INSERT INTO `kn_download`(`ip`, `address`, `update_date`) VALUES('localhost', '辽宁 大连', '2021-04-08 13:17:00');
