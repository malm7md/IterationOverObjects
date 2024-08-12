let person = { name: "Mohammad", age: 19, city: "Kuwait" };
person.email = "malm@gmail.com";

function hasKey(obj, key) {
  if (obj[key]) {
    console.log(true);
  } else {
    console.log(true);
  }
}
hasKey(person, "name");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

function movieTitle(li) {
  li.forEach((mov) => {
    console.log(mov.title);
  });
}
movieTitle(movies);

function year1994(l) {
  l.forEach((mov) => {
    if (mov.year === 1994) {
      console.log(mov.title);
    }
  });
}
year1994(movies);

function newDarkNight(list) {
  const updatedArray = list.map((mov) => {
    if (mov.title === "The Dark Knight") {
      mov.genre = "Action/Drama";
    }
    return mov;
  });
  return updatedArray;
}

console.log(newDarkNight(movies));
//dark.push("Action/Drama").movies[2].genre;
