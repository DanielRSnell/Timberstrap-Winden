<?php
/**
 * Template Name: Timber Test
 *

 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

//get_header();

//microheader
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <!-- Required meta tags -->
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- wp_head begin -->
    <?php wp_head(); ?>
    <!-- wp_head end -->
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php 
  // End microheader

  $check_params = get_params_object();

  // Check if there is any param that contains lc as a key
  // For handling different behavior in Editor vs Frontend 
  if (array_key_exists('lc_action_launch_editing', $check_params)) {
      
      echo "In Editor";

      if ( have_posts() ) : 
          while ( have_posts() ) : the_post();
              the_content();
          endwhile;
      else :
          _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
      endif;

  } else {

      echo "Not in Editor";

      // Get current post content
      global $post;
      setup_postdata($post); // Set up global post data

      // Capture the output of the_content
      ob_start();
      the_content();
      $content = ob_get_clean();

      $context = Timber::context();
      $context['post'] = Timber::get_post($post->ID);
      $context['content'] = $content;
      $context['state'] = $context;

      // Use Timber to compile the content
      
      $compiled_content = Timber::compile(the_content(), $context);

      echo $compiled_content; // Output the compiled content

      wp_reset_postdata(); // Reset the global post object

  }

  // Start microfooter
?>




    <?php wp_footer(); ?>

</body>

</html>