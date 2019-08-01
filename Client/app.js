(function($){
	var movies = $('#movies');
	var clearMovie = $('#clearMovie');
    function addMovie( e ){
        var dict = {
        	Title : this["title"].value,
        	Genre: this["genre"].value,
        	Director: this["director"].value
        };
        var url = "";
        var httpType = "";
        var movieId = this["id"].value;
        if (movieId) {
        	url = "https://localhost:44352/api/movie/" + movieId;
        	httpType = "put";
        }
        else{
        	url = "https://localhost:44352/api/movie/";
        	httpType = "post";
        }
        $.ajax({
            url: url,
            dataType: 'json',
            type: httpType,
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
                alert("Success");
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
    				movies.empty();
    				movies.append('<tr>' + '<th>' + "Title" + '</th>' + '<th>' + "Genre" + '</th>' + '<th>' + "Director" + '</th>' + '</tr>' + '<tr>' + '<td>' + data.Title + '</td>' + '<td>' + data.Genre + '</td>' + '<td>' + data.Director + '</td>' + '</tr>');

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
    		var movieId = this["id"].value;
    		var movie = {
    			Title: this["newTitle"].value,
    			Genre: this["newGenre"].value,
    			Director: this["newDirector"].value
    		};
    		$.ajax({
    			url: 'https://localhost:44352/api/movie/' + movieId,
    			dataType: 'json',
    			type: 'put',
    			contentType: 'application/json',
    			data: JSON.stringify(movie),
    			success: function(data){
    				alert("Update successful!");
    			}
    			error: function(error){
    				alert(error);
    			}
    			

    		});
    		e.preventDefault();
    	}*/


    

    $('#my-form').submit( addMovie );
    $('#getMovieById').submit(getMovieById);
    
})(jQuery);