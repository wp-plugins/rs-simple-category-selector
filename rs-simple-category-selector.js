jQuery(document).ready( function($){
	
	//Get the form element and append a hidden input element to it
	var post_form = $('form#post');
	var post_id = $('input#post_ID').val();
	var main_category = 0;
	var category_hidden_input = $('<input type="hidden" name="rs_category_selected" type="text" />');
	post_form.append(category_hidden_input);
	
	//See if rs_category_selected was stored in post meta; store it for later
	$.get( ajaxurl, { action: 'get_main_category_meta', postid: post_id }, function(response){
		if ( response != 0){
			main_category = response.trim();
			category_hidden_input.val(main_category);	
		}
		
		//Add graphical checkbox to the right of all categories that were previously selected and make the main category the proper graphic
		$('#taxonomy-category ul.categorychecklist li :checked').each( function(){
			var checkbox_category_id = $(this).val();
			var category_list_item = $(this).closest('li');
			var category_selector = $( '<div class="category_selector" />');
			if ( checkbox_category_id === main_category ){
				category_list_item.append(category_selector);
				category_selector.addClass('on');
			}else{
				category_list_item.append(category_selector);
				category_selector.addClass('off');
			}	
		});
		
	});
	
	//Handle clicking on the checkbox or label
	$('#taxonomy-category ul.categorychecklist li').on('click', 'input', function(e) {
		
		var category_list_item = $(this).closest('li');
		
		//if find() doesn't find anything it returns an empty jQuery of length 0
		if ( ! category_list_item.find('.category_selector').length ){
			var category_selector = $( '<div class="category_selector" />');
			category_list_item.append(category_selector);
			category_selector.addClass('off');
		}else{
			var category_selector = category_list_item.find('.category_selector');
			//if on, reset category_hidden_input
			if( category_selector.hasClass('on') ){
				category_hidden_input.val('');
			}
			
			//then remove the category_main_selector completely
			category_selector.remove();
		}
	});
	
	//Handle turning the category into the main category
	$('#taxonomy-category ul.categorychecklist li').on('click', '.category_selector.off', function(e){
		
		//Remove the on state from any other category_selector
		$('.category_selector').each( function(){
			$(this).removeClass('on').addClass('off');
		});
		
		//Turn this one on
		$(this).removeClass('off').addClass('on');
		
		//Set the selected category
		category_hidden_input.val( $(this).closest('li').find('input').val() );
	});
	
	//Handle shutting off the main category
	$('#taxonomy-category ul.categorychecklist li').on('click', 'div.category_selector.on', function(e){
		$(this).removeClass('on').addClass('off');
		category_hidden_input.val('');
	});
	
});