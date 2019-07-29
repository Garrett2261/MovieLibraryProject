(function($){
	var movies = $('#movies');
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
    				movies.append('<tr>' + '<td>' + movieTitle + '</td>' + '<td>' + movieGenre + '</td>' + '<td>' + movieDirector + '</td>' + '</tr>');
    			});
    			clearList.click(function(){
    				movieRow.empty();
    			})
    		},
    	});

    	/*function updateMovie(e){
    		$.ajax({
    			url: 'https://localhost:44352/api/movie/' + movieId,
    			dataType: 'json',
    			type: 'put',
    			contentType: 'application/json',
    			data: JSON.stringify(),
    			success: function(data){
    				alert("Update successful!");
    			}
    			

    		});
    		e.preventDefault();
    	}*/


    

    $('#my-form').submit( addMovie );
    
})(jQuery);