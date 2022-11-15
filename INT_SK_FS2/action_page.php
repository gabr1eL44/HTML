<!-- Dummy-PHP-Skript, um die vom Formular gesendeten Werte zu verarbeiten -->
<?php
    // Werte aus Formular in Variablen speichern
    $name= $_GET['name'];
    $password = $_GET['password'];
    $email = $_GET['email'];

    // Werte / Variablen auf Webseite ausgeben
    echo "Name: $name<br/>";
    echo "Passwort: $password<br/>";
    echo "E-Mail: $email";
?>