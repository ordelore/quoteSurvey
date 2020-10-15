<?php
    $log_file_name = 'mylog.log';
    $radioSelect = $_POST['myRadio'];
    $selectText = $_POST[$radioSelect . 'Text'];
    $prompt = $_POST["promptText"];
    $opA = $_POST["OpAText"];
    $opB = $_POST["OpBText"];
    $message = "-prompt-" . $prompt . "-options-" . $opA . "-vs-" . $opB . "-and-chose-" . $selectText . "\n";
    file_put_contents($log_file_name, $message, FILE_APPEND | LOCK_EX);
    header('Location: http://people.cs.uchicago.edu/~ordelore/');
?>
