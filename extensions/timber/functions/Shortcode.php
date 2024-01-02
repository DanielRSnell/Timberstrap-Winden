<?php 

function lc_shortcode($content) {
    $create_shortcode= '[' . $content . ']';
    return do_shortcode($create_shortcode);
}

add_filter('timber/twig/functions', function ($functions) {
    // Add the custom function
    $functions['lc_shortcode'] = [
        'callable' => 'lc_shortcode',
    ];
    return $functions;
});