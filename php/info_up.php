<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2 style="font-family: 'Poppins', sans-serif;">
        <?php
        if (
            isset($_GET['FirstName']) && !empty($_GET['FirstName']) &&
            isset($_GET['LastName']) && !empty($_GET['LastName']) &&
            isset($_GET['Email']) && !empty($_GET['Email']) &&
            isset($_GET['Username']) && !empty($_GET['Username']) &&
            isset($_GET['Password']) && !empty($_GET['Password']) &&
            isset($_GET['REPassword']) && !empty($_GET['REPassword'])
        ) {
            $FirstName = $_GET['FirstName'];
            $LastName = $_GET['LastName'];
            $Email = $_GET['Email'];
            $user = $_GET['Username'];
            $pass = $_GET['Password'];
            $repass = $_GET['REPassword'];
            echo (" First Name is Sent :  $FirstName");
            echo ("</br>");
            echo (" Last Name is Sent :  $LastName");
            echo ("</br>");
            if (filter_var($Email, FILTER_VALIDATE_EMAIL) === false)
                exit("ایمیل شما نا معتبر است.");
            else
                echo (" Email is Sent : " . $Email);
            echo ("</br>");
            echo (" User Name is Sent : " . $user);
            echo ("</br>");
            if ($pass == $repass) {
                echo (" کلمه عبور و تکرار درست است.");
            } elseif ($pass != $repass) {
                exit(" کلمه عبور و تکرار آن مشابه نیست.");
            }
        } else {
            exit("برخی فیلدها مقدار دهی نشده اند.");
        }
        ?>
    </h2>
</body>

</html>