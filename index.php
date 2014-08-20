<?php
require_once './Requests/library/Requests.php';
Requests::register_autoloader();
$page = $_GET['page'];
$pageSize = 10;
$options = array('Host'=>'image.baidu.com');
$url = 'http://image.baidu.com/data/imgs?sort=0&pn=' . $page * $pageSize . 
        '&rn=' . $pageSize . '&col=摄影&tag=全部&tag3=&p=channel&from=1';
$response = Requests::get($url, $options);
echo $response->body;
?>
