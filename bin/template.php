#!/usr/bin/env php
<?php


function bundleHtml($file)
{
    $html = file_get_contents($file);

    $html = str_replace(array("\r\n", "\n", "\r"), " ", $html);
    $html = str_replace("'", "\\'", $html);
    $html = preg_replace("/\s+/", " ", $html);

    return $html;
}



$bundle = "Templates = {};\n";
$path   = __DIR__ . '/../js/app/templates';

function generateTemplates ($path, $name = false){

    global $bundle;

    try{
        $dirIterator = new DirectoryIterator($path);
    }catch (Exception $e){
        return false;
    }


    foreach ($dirIterator as $file) {

        if ($file->isFile()) {

            $html = bundleHtml($file->getPathname(), true);

            if($name){
                $bundle .= "Templates.{$name}." . $file->getBasename('.html') . " = '" . $html . "';\n";
            }else{
                $bundle .= "Templates." . $file->getBasename('.html') . " = '" . $html . "';\n";
            }

        }
    }

}

generateTemplates ($path);



file_put_contents(__DIR__ . '/../js/Templates.js', $bundle);

if (php_sapi_name() == 'cli') {
    echo "Templates bundle created at page-builder/js/Templates.js for inclusion.", PHP_EOL;
}