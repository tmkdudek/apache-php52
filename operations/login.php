<?php


$db = new mysqli('localhost','aledruk_uticket','ticketinspector','aledruk_ticket');

if (!$db) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

$login    = $_POST['user_login'];
$password = $_POST['user_password'];


$id;
$user_login;
$user_pass;

$stmt = $db->prepare("SELECT * FROM users where user_login = ? and user_pass  = ?");
$stmt->bind_param('ss',$login,hash('sha256',$password) );

$stmt->execute();
$stmt->bind_result($id,$user_login,$user_pass);
$stmt->fetch();

$response = new stdClass();
header('Content-Type','application/json');
if($id){
    session_start();
    $_SESSION['user_login'] = $login;
    $_SESSION['user_id']    = $id;
    $response->status       = 1;
    $response->user_login   = $login;

    echo json_encode($response);
}else{
    if( isset($_SESSION['user_login']) ) {
        session_destroy();
    }
    $response->status       = -1;
    echo json_encode($response);

}





if($db){
    mysqli_close($db);
}
