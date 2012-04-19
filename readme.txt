=== RS Simple Category Selector ===
Contributors: robsaurini
Donate link: 
Tags: categories
Requires at least: 3.2
Tested up to: 3.3.1
Stable tag: 0.2

Gives you the ability to promote categories associated with a post.

== Description ==

If you have more than one category associated with a post, how do you tell which category taks precedence? This plugin gives 
you the ability to promote the category to the main one on the post edit page.

This gets stored in post meta for later use. Soon, I will add some simple functions that will allow you to get the main 
category on the front end. For now, you can use **<?php get_post_meta( $post_id, 'rs_simple_category_selected', true ); ?>** 
to grab the ID of main category ( if there is one ).

== Installation ==

1. Upload the plugin files to the '/wp-content/plugins/' directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Get the category's name on by using <? get_the_category_by_ID( get_post_meta( $post_id, 'rs_simple_category_selected', true ) ); ?> 

