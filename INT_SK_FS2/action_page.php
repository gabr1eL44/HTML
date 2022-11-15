<!-- Dummy-PHP-Skript, um die vom Formular gesendeten Werte zu verarbeiten -->
<?php
    // Werte aus Formular in Variablen speichern
    $dummy1 = $_GET['dummy1'];
    $dummy2 = $_GET['dummy2'];

    // Werte / Variablen auf Webseite ausgeben
    echo "Dummy1: $dummy1<br/>";
    echo "Dummy2: $dummy2";
?>