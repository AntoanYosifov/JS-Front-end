function solve(moviesInput) {

    let completeInfoMovies = [];

    for (let i = 0; i < moviesInput.length; i++) {
        let currentMovieInfo = moviesInput[i].split(' ');

        let currentCommand = '';
        for (let j = 0; j < currentMovieInfo.length; j++) {
            if (currentMovieInfo[j] === 'addMovie' || currentMovieInfo[j] === 'directedBy' || currentMovieInfo[j] === 'onDate') {
                currentCommand = currentMovieInfo[j];
                break
            }
        }

        let movieInfoStr = '';

        switch (currentCommand) {
            case 'addMovie':
                movieInfoStr = currentMovieInfo.join(' ');
                let movieNameArr = movieInfoStr.split('addMovie');
                let formattedMovieNameStr = movieNameArr.join('').trim();
                completeInfoMovies.push({
                    name: formattedMovieNameStr,
                });
                break;
            case 'directedBy':
                movieInfoStr = currentMovieInfo.join(' ');
                let movieNameAndDirectorArr = movieInfoStr.split('directedBy');
                let [movieName, director] = movieNameAndDirectorArr;
                completeInfoMovies.filter(movieObj => movieObj.name === movieName.trim())
                    .map(movie => movie['director'] = director.trim());
                break;
            case 'onDate':
                movieInfoStr = currentMovieInfo.join(' ');
                let movieNameAndDate = movieInfoStr.split('onDate');
                let [name, date] = movieNameAndDate;
                completeInfoMovies.filter(movieObj => movieObj.name === name.trim())
                    .map(movie => movie['date'] = date.trim());
                break;
        }
    }

    completeInfoMovies.filter(movieObj => Object.keys(movieObj).length > 2).forEach(movie => console.log(JSON.stringify(movie)));
}

solve([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)

console.log('----------');
console.log('----------');

solve([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]
)