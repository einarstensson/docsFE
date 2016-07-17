<?php
    $putRequest = file_get_contents("php://input");
    parse_str($putRequest, $request);

    echo $request['name'];
?>
