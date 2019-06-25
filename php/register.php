<?php
    include "public.php";
    header("content-type:text/html;charset=utf-8");
    $user = $_GET["username"];
    $pwd = $_GET["password"];

    $link = mysqli_connect("localhost",'root','root',"Samsung");
    if (!$link) {
		die("数据库连接异常");
	}
    mysqli_query("set names utf8");

    $sql = "INSERT INTO userinfo(uname, upwd) VALUES ('$user','$pwd')";
    // echo "$sql";
    $result = mysqli_query($link,$sql);
    if($result){
        echo "1";
        // echo "<script>alert('注册成功');location.href = '../registerresult.html'</script>";
    }else{
        echo "0";
        // echo "<script>alert('注册失败')</script>";
    }

    // echo "邮箱是：$user,<br>密码是：$pwd";
?>