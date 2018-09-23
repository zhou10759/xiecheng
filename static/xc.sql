SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `xc_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS `xc_index_carousel`;
CREATE TABLE `xc_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xc_index_carousel
-- ----------------------------
INSERT INTO `xc_index_carousel` VALUES ('1', 'img/70040v000000k11t696C6_1920_340_17.jpg', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `xc_index_carousel` VALUES ('2', 'img/70040w000000k5y3d6A18_1920_340_17.jpg', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `xc_index_carousel` VALUES ('3', 'img/70040v000000jvq6yA508_1920_340_17.jpg', '轮播广告商品3', 'lookforward.html');
INSERT INTO `xc_index_carousel` VALUES ('4', 'img/700w0v000000k9hpp3E43_1920_340_17.jpg', '轮播广告商品4', 'lookforward.html');
INSERT INTO `xc_index_carousel` VALUES ('5', 'img/700q0v000000k44t77928_1920_340_17.jpg', '轮播广告商品4', 'lookforward.html');
INSERT INTO `xc_index_carousel` VALUES ('6', 'img/700j0v000000jwodp64EA_1920_340_17.jpg', '轮播广告商品4', 'lookforward.html');
INSERT INTO `xc_index_carousel` VALUES ('7', 'img/700h0v000000k57dd85B7_1920_340_17.jpg', '轮播广告商品4', 'lookforward.html');
INSERT INTO `xc_index_carousel` VALUES ('8', 'img/700b0w000000k87556D5A_1920_340_17.jpg', '轮播广告商品4', 'lookforward.html');

-- ----------------------------
-- Table structure for `xc_index_lvyou`
-- ----------------------------
DROP TABLE IF EXISTS `xc_index_lvYou`;
CREATE TABLE `xc_index_product` (
  `pid` int(11) NOT NULL auto_increment,
  `title` varchar(64) default NULL,
  `details` varchar(128) default NULL,
  `pic` varchar(128) default NULL,
  `xiwei` varchar(12) default NULL,
  `price` decimal(10,2) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xc_index_product
-- ----------------------------
INSERT INTO `xc_index_product` VALUES ('1', '自由行销售明星！早订+多人享惠', '三亚5日自由行(5钻)·【销售明星款..', 'img/300e0v000000k3izh1B48_C_500_280.jpg', '席位充足', '1646','1');

INSERT INTO `xc_index_product` VALUES ('2', '热卖爆款', '沙巴6日4晚自由行.【APP领券更优惠...', 'img/300c0h0000008rtxq3F6B_C_500_280.jpg', '席位充足', '2048','1');

INSERT INTO `xc_index_product` VALUES ('3', '马代五星岛屿特价放松,一家全包,密..', '马尔代夫吉哈Kihaa7日5晚自由行(5...',
'img/100j0k000000bdfzyAC5C_C_500_280.jpg', '席位充足', '6996','1');

INSERT INTO `xc_index_product` VALUES ('4', '森林庄园风格,威斯汀让你感受到一丝..', '兰卡威+吉隆坡7日6晚自由行·【国庆', 'img/100u0k000000bazls1A59_C_500_280.jpg', '席位充足', '4705','1');

-- ----------------------------
-- Table structure for `xc_user`
-- ----------------------------
DROP TABLE IF EXISTS `xc_user`;
CREATE TABLE `xc_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xc_user
-- ----------------------------
INSERT INTO `xc_user` VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
INSERT INTO `xc_user` VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
INSERT INTO `xc_user` VALUES ('3', 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');
INSERT INTO `xc_user` VALUES ('4', 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');
INSERT INTO `xc_user` VALUES ('5', '1111', '111111', '441977193@qq.com', '18357100796', null, null, null);
INSERT INTO `xc_user` VALUES ('6', 'ABCD', '123456', '123@qq.com', '13538894495', null, null, null);
INSERT INTO `xc_user` VALUES ('7', 'mohk', '123456', '11@qq.com', '13512312312', null, null, null);
INSERT INTO `xc_user` VALUES ('8', '121123', 'w13945128995', '491000888@qq.com', '13213389258', null, null, null);
INSERT INTO `xc_user` VALUES ('9', '555555', '5555555', '55555555@163.com', '13400000000', null, null, null);
INSERT INTO `xc_user` VALUES ('10', 'xuyong', '123456', '123456789@qq.com', '15525623622', null, null, null);
INSERT INTO `xc_user` VALUES ('11', 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', null, null, null);
INSERT INTO `xc_user` VALUES ('12', 'siyongbo', '900427', '616188545@qq.com', '18447103998', null, null, null);
INSERT INTO `xc_user` VALUES ('13', 'qwerty', '123456', '1091256014@qq.com', '15617152367', null, null, null);
INSERT INTO `xc_user` VALUES ('14', 'dingziqiang', '456456', '996534706@qq.com', '15567502520', null, null, null);
