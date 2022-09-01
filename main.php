<!DOCTYPE html>
<html>
    <body>
    <h1>My first PHP page</h1>
    Hello World!<br/><br/>
    <?php
        echo nl2br(min(0, 150, 30, 20, -8, -200) . "\n" . max(0, 150, 30, 20, -8, -200));
    ?>
    </body>
</html>