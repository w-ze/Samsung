/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50639
 Source Host           : localhost
 Source Database       : Samsung

 Target Server Type    : MySQL
 Target Server Version : 50639
 File Encoding         : utf-8

 Date: 06/27/2019 20:35:03 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(40) DEFAULT NULL,
  `upwd` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `userinfo`
-- ----------------------------
BEGIN;
INSERT INTO `userinfo` VALUES ('1', '123@qq.com', '123456qwe'), ('2', '1041335858@qq.com', '123456qw'), ('3', '1234@qq.com', '123456zx'), ('4', '123456@qq.com', '123456zx'), ('5', '12345@qq.com', '123456qw'), ('8', '1234@qq.com', '123456zx'), ('9', '1234@qq.com', '123456zx'), ('10', '1234@qq.com', '123456zx'), ('11', '1234@qq.com', '123456zx'), ('12', '12341212@qq.com', '123123qw');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
