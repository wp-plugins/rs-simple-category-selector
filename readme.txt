=== RS Simple Category Selector ===
Contributors: robsaurini
Donate link: 
Tags: categories
Requires at least: 3.2
Tested up to: 3.3.1
Stable tag: 0.2.1

Gives you the ability to promote categories associated with a post.

== Description ==

If you have more than one category associated with a post, how do you tell which category takes precedence? This plugin gives you the ability to promote the category to the main one on the post edit page.

This gets stored in post meta for later use. Soon, I will add some simple functions that will allow you to get the main category on the front end.

**Use**

* You can use the shortcode *[rs_print_main]* inside the post to print out the category title.
* In the theme, you can use *rs_get_main_category_id( **$post_id** )* to return (not print) the id of the main category.

== Installation ==

1. Upload the plugin files to the '/wp-content/plugins/' directory
2. Activate the plugin through the 'Plugins' menu in WordPress
