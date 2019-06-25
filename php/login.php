<?php
    include "public.php";
    $user = $_GET['user'];
    $pwd = $_GET['upwd'];

    $sql = "SELECT * FROM `userinfo` WHERE `uname`='$user'";
    // echo "$sql";
    $result = mysqli_query($link,$sql);
    // echo "$result";
    if(!$result) die("数据库查询错误");
    $arr=mysqli_fetch_array($result,MYSQLI_ASSOC);
    // while ($arr = mysqli_fetch_array($result,MYSQLI_ASSOC)){   
    if($arr){
        if($pwd == $arr["upwd"]){
            echo "1";
            // echo "<script>alert('登录成功');location.href = '../shopstore.html'</script>";
        }else{
            echo "0";
            // echo "<script>alert('密码错误');location.href = '../login.html'</script>";
        }
    }else{
        echo "0";
        // echo "<script>alert('用户名不存在');location.href = '../login.htm'</script>";
    }
    // }
    
?>