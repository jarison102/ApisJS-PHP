<?php

// Definir la URL de la API
$API_URL = 'https://jsonplaceholder.typicode.com';

// Realizar una solicitud GET a la API utilizando cURL
$ch = curl_init($API_URL . '/users');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Decodificar la respuesta JSON
$users = json_decode($response, true);

// Mostrar los nombres y correos electrónicos de los usuarios
echo '<ul>';
foreach ($users as $user) {
    echo '<li>' . $user['name'] . ' 😎 ' . $user['email'] . ' 📧</li>';
}
echo '</ul>';

?>
