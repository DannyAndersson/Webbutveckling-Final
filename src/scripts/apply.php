<?php
// saves the form data to a JSON file, then redirects to a confirmation page. my blood is boiling.
$data = [
    'personnummer' => $_POST['personnummer'],
    'fornamn' => $_POST['fornamn'],
    'efternamn' => $_POST['efternamn'],
    'co' => isset($_POST['co']) ? $_POST['co'] : '', // optional
    'adress' => $_POST['adress'],
    'postnummer' => $_POST['postnummer'],
    'ort' => $_POST['ort'],
    'telefon' => isset($_POST['telefon']) ? $_POST['telefon'] : '', 
    'email' => isset($_POST['email']) ? $_POST['email'] : '', 
    'kontakt' => $_POST['kontakt'],
    'medborgarskap' => $_POST['medborgarskap'],
    'land' => isset($_POST['land']) ? $_POST['land'] : '', 
];

// use date and time for the file name
$dateTime = date('Y-m-d_H-i-s');

// put it in the applications directory. feel free to change
$filePath = "/applications/{$dateTime}.json";

// jsonify
$jsonData = json_encode($data, JSON_PRETTY_PRINT);

// does our applications directory exist? if not, create it
$dirPath = '/applications';
if (!is_dir($dirPath)) {
    mkdir($dirPath, 0777, true); // create the directory. i think this only works on linux
}

// write the file
file_put_contents($filePath, $jsonData);

// yippee.
echo 'Application submitted!';
exit();
?>
