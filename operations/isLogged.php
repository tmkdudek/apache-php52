<?php


$db = new mysqli('localhost','aledruk_uticket','ticketinspector','aledruk_ticket');

if (!$db) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

header('Content-Type','application/json');
$response = new stdClass();

if( isset($_SESSION['user_id']) ) {
    $id;
    $user_login;
    $user_pass;

    $stmt = $db->prepare("SELECT * FROM users where user_id = ?");
    $stmt->bind_param('d',$_SESSION['user_id'] );
    $stmt->execute();
    $stmt->bind_result($id,$user_login,$user_pass);
    $stmt->fetch();

    if($id == $_SESSION['user_id'] && isset( $user_login, $user_pass)){
        $response->status = 1;
    }else{
        $response->status = -1;
    }

}else{
    $response->status = -1;
}
json_encode($response);

if($db){
    mysqli_close($db);
}
