(function($){
	var movieItem = $('#movies');
	var clearList = $('#clearList');
    function addMovie( e ){
        var dict = {
        	Title : this["title"].value,
        	Genre: this["genre"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    
    	
    	$.ajax({
    		url: 'https://localhost:44352/api/movie',
    		
    		type: 'get',
    		success: function(data){
    			$.each(data, function(key, item){
    				var movieTitle = item.Title;
    				var movieGenre = item.Genre;
    				var movieDirector = item.Director;
    				movieItem.append('<li>' + movieTitle + '</li>');
    				movieItem.append('<li>' + movieGenre + '</li>');
    				movieItem.append('<li>' + movieDirector + '</li>'); 
    			});
    			clearList.click(function(){
    				movieItem.empty();
    			})
    		},
    	});
    

    $('#my-form').submit( addMovie );
    
})(jQuery);