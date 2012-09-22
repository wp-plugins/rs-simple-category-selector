<?php

function shortcode_rs_print_main(){
	
	global $post;
	
	if ( ! is_single() )
		return;
	
	if ( $cat_id = get_post_meta( $post->ID, 'rs_category_selected', true) )	
		return get_the_category_by_ID( $cat_id );
	
	// Just in case no main category is selected, the first category that was selected	
	return get_the_category( $post->ID );

}
	
add_shortcode( 'rs_print_main', 'shortcode_rs_print_main');
	