<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (
        isset($_GET['Username']) && !empty($_GET['Username']) &&
        isset($_GET['Password']) && !empty($_GET['Password'])
    ) {
        $user = $_GET['Username'];
        $pass = $_GET['Password'];
        echo ("User Name is Send : $user");
        echo ("</br>");
        echo (" Password sent : $pass");
    } else {
        exit("برخی فیلدها مقدار دهی نشده اند.");
    }
    ?>
</body>

</html>