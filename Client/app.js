(function($){
	var movies = $('#movies');
	var clearMovie = $('#clearMovie');
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
    			
    			
    		},
    	});

    	function getMovieById(e){
    		var movieId = this["id"].value;
    		$.ajax({
    			url: 'https://localhost:44352/api/movie/' + movieId,
    			type: 'get',
    			success: function(data){
    				movies.append('<tr>' + '<td>' + data.Title + '</td>' + '<td>' + data.Genre + '</td>' + '<td>' + data.Director + '</td>' + '</tr>');

    			},
    			error: function(jqXhr, textStatus, errorThrown){
    				console.log(errorThrown);
    			}

    		});
    		clearMovie.click(function(){
    			movies.empty();
    		})
    		e.preventDefault();
    	}

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
    $('#getMovieById').submit(getMovieById);
    
})(jQuery);