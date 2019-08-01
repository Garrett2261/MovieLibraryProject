using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET api/values
        public IEnumerable<Movie> Get()
        {
            // Retrieve all movies from db logic
            return db.Movies;
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            var searchedMovie = db.Movies.Find(id);
            if(searchedMovie == null)
            {
                return NotFound();
            }
            return Ok(searchedMovie);
        }

        //POST api/values
        public IHttpActionResult Post([FromBody]Movie movie)
        {
            db.Movies.Add(movie);
            db.SaveChanges();
            return Ok(movie);
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest("Incorrect Data.");
            //}

            //db.Movies.Add(new Movie()
            //{
            //    MovieId = movie.MovieId,

            //})
        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, [FromBody]Movie movie)
        {
            if(id != movie.MovieId)
            {
                return BadRequest();
            }
            db.Entry(movie).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return NotFound();
            // Update movie in db logic
        }

        // DELETE api/values/5
        public void Delete(int id)
        {

            // Delete movie from db logic
        }
    }

}