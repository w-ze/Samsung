<?php
    ini_set("display_errors","On");
    error_reporting(E_ERROR);
    header("content-type:text/html;charset=utf-8");
    $link = mysqli_connect("localhost",'root','root',"Samsung");
    if (!$link) {
		die("数据库连接异常");
	}
    $link->query("set names utf8");
?>