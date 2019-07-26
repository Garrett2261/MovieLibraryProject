(function($){
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

    function getMovie(e){
    	$.ajax({
    		url: 'https://localhost:44352/api/movie',
    		dataType: 'json',
    		type: 'get',
    		success: function(data){
    			$.each(data, function(key, item){
    				var movieTitle = item.Title;
    				var movieGenre = item.Genre;
    				var movieDirector = item.Director;
    				$('#title').append(movieTitle);
    				$('#genre').append(movieGenre);
    				$('#director').append(movieDirector); 
    			})
    		}
    	})
    }

    $('#my-form').submit( addMovie );
    $('#getMovies').get(getMovie);
})(jQuery);