// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {
  const result =  array.map(movie => movie.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => (movie.director === director));

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(array, director) {
  const moviesByDirector = getMoviesFromDirector(array, director);
  const result = moviesByDirector.reduce((a, b) => a + b.score, 0) / moviesByDirector.length

  console.log("EXERCICE 3 ->", result);
  return Number(result.toFixed(2))
}

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(array) {
  const arrayTitle = array.map(movie => movie.title)
  const sortedArray = arrayTitle.sort((a, b) => a.localeCompare(b))

  if (sortedArray.length <= 20) { 
    return sortedArray;
  } 
   //limited to the first 20 positions
  else {
    sortedArray.length = 20
    return sortedArray;
  }
  
}

// Exercise 5: Order by year, ascending

function orderByYear(array) {
  const copyarray = [...array]
  const result = copyarray.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))

  console.log("EXERCICE 5 ->",result)
  return result
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesfiltered = array.filter(movie => movie.genre.includes(category) && movie.score !== '')
  const result =moviesAverageOfDirector(moviesfiltered)

  console.log("EXERCICE 6 ->", result)
  return result
}

// Exercise 7: Modify the duration of movies to minutes

  function hoursToMinutes(array) {
    const result = array.map(movie => {
        const hoursDuration = movie.duration.replace("h", "").replace("min", "").split(' ')

        
       const hours = Number(hoursDuration[0]) 
       const minutes = Number(hoursDuration[1])
       const minutesDuration = minutes ? hours * 60 + minutes : hours * 60
  
       console.log("EXERCISE 7 ->", minutesDuration)
      return {
        ...movie,
        duration: minutesDuration
        }
  
    })
    return result
  }


// Exercise 8: Get the best film of a year
  function bestFilmOfYear(array, year) {
    const sortedFilmArray = array.sort((a, b) => b.score - a.score).filter(movie => movie.year === year)
    const result = [sortedFilmArray[0]]
    console.log("EXERCISE 8 ->", result)
    return result
  }





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
