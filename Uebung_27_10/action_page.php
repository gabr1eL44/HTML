<?php
    $anrede = $_GET['anrede'];
    $vorname = $_GET['vorname'];
    $nachname = $_GET['nachname'];
    $strasse = $_GET['strasse'];
    $hausnummer = $_GET['hausnummer'];
    $postleitzahl = $_GET['postleitzahl'];
    $ort_stadt = $_GET['ort_stadt'];
    $email = $_GET['email'];

    echo "Anrede: $anrede<br/>";
    echo "Vorname: $vorname<br/>";
    echo "Nachname: $nachname<br/>";
    echo "Strasse: $strasse<br/>";
    echo "Hausnummer: $hausnummer<br/>";
    echo "Postleitzahl: $postleitzahl<br/>";
    echo "Ort / Stadt: $ort_stadt<br/>";
    echo "E-mail: $email";
?>