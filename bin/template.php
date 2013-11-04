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
$elementTemplatePath = __DIR__. '/../js/app/views/elements/';

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

function generateTemplatesRecursively($path) {
    global $bundle;

    $ite = new RecursiveDirectoryIterator($path);

    foreach (new RecursiveIteratorIterator($ite) as $filename=>$cur) {

            $fileExtension = pathinfo($filename, PATHINFO_EXTENSION);
            if($fileExtension == 'html') {
                $fileInfo = pathinfo($filename);
                $html = bundleHtml($filename, true);
                $bundle .= "Templates." . $fileInfo['filename'] . " = '" . $html . "';\n";
            }
    }
}

generateTemplates ($path);
generateTemplatesRecursively($elementTemplatePath);



file_put_contents(__DIR__ . '/../js/Templates.js', $bundle);

if (php_sapi_name() == 'cli') {
    echo "Templates bundle created at page-builder/js/Templates.js for inclusion.", PHP_EOL;
}