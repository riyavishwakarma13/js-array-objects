// **Part 1: User Data Array Manipulation**

// 2. Define an array `users` containing at least 15 objects, where each object represents a user with the following properties: `name`, `age`, `gender`, and `location`.

const users = [
  {
    name: "Alice",
    age: 25,
    gender: "female",
    location: "New York",
  },
  {
    name: "Bob",
    age: 13,
    gender: "male",
    location: "London",
  },
  {
    name: "Charlie",
    age: 22,
    gender: "non-binary",
    location: "Paris",
  },
  {
    name: "David",
    age: 42,
    gender: "male",
    location: "Tokyo",
  },
  {
    name: "Evelyn",
    age: 18,
    gender: "female",
    location: "Berlin",
  },
  {
    name: "Finn",
    age: 35,
    gender: "male",
    location: "Madrid",
  },
  {
    name: "Grace",
    age: 28,
    gender: "female",
    location: "Rome",
  },
  {
    name: "Henry",
    age: 60,
    gender: "male",
    location: "Sydney",
  },
  {
    name: "Isla",
    age: 19,
    gender: "female",
    location: "Toronto",
  },
  {
    name: "Jack",
    age: 12,
    gender: "male",
    location: "Rio de Janeiro",
  },
  {
    name: "Kelly",
    age: 21,
    gender: "female",
    location: "Beijing",
  },
  {
    name: "Liam",
    age: 32,
    gender: "male",
    location: "Stockholm",
  },
  {
    name: "Mia",
    age: 5,
    gender: "female",
    location: "Mumbai",
  },
  {
    name: "Noah",
    age: 27,
    gender: "male",
    location: "Singapore",
  },
  {
    name: "Olivia",
    age: 16,
    gender: "female",
    location: "Lagos",
  },
];

// 3. Implement a function `isAdult` that takes a user object as input and returns `true` if the user is 18 years or older, otherwise `false`.

let isAdult = users.map((user) => {
  if (user.age >= 18) {
    return {
      name: user.name,
      age: user.age,
      gender: user.gender,
      location: user.location,
      adult: true,
    };
  } else {
    return {
      name: user.name,
      age: user.age,
      gender: user.gender,
      location: user.location,
      adult: false,
    };
  }
});

console.log(isAdult);

// 4. Use the `filter` function to create a new array `adultUsers` by selecting only the users who are adults using the `isAdult` function.

let adultUsers = isAdult.filter((user) => user.adult === true);

console.log(adultUsers);

// 5. Implement a function `getFullName` that takes a user object as input and returns the user's full name (combine `name` and `location` properties).

let getFullName = adultUsers.map((user) => {
  return user.name + ", " + user.location;
});

console.log(getFullName);

// 6. Use the `map` function to create a new array `userNames` containing the full names of all users.

let userNames = users.map((user) => user.name);

console.log(userNames);

// **Part 2: Chaining User Data Operations**

// 1. Implement a function `filterByGender` that takes a user object as input and a gender string (e.g., "male" or "female") and returns `true` if the user's gender matches the input gender, otherwise `false`.

let filterByGender = users.filter((user) => {
  if (user.gender == "female" || user.gender == "male") {
    return true;
  } else {
    return false;
  }
});

console.log(filterByGender);

// 2. Use chaining to manipulate the `users` array in the following sequence:
// a. Filter and create a new array `femaleUsers` containing female users using the `filterByGender` function.
// b. Use the `map` function to apply the `getFullName` function to each element of the `femaleUsers` array.

let femaleUsers = filterByGender
  .filter((user) => {
    return user.gender == "female";
  })
  .map((user) => user.name);

console.log(femaleUsers);

// **Part 3: Movie Data Array Manipulation**
// 1. Define an array `movies` containing at least 10 objects, where each object represents a movie with properties: `title`, `genre`, `year`, and `rating`.

const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
  },
  {
    title: "The Godfather",
    genre: "Action",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Action",
    year: 2003,
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    genre: "Comedy",
    year: 1994,
    rating: 8.9,
  },
  {
    title: "Schindler's List",
    genre: "Historical",
    year: 1993,
    rating: 8.9,
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
  },
  {
    title: "12 Angry Men",
    genre: "Drama",
    year: 1957,
    rating: 8.9,
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Forrest Gump",
    genre: "Romance",
    year: 1994,
    rating: 8.8,
  },
  {
    title: "Fight Club",
    genre: "Thriller",
    year: 1999,
    rating: 8.6,
  },
];

// **Part 4: Chaining Movie Data Operations**
// 1. Implement a function `filterByGenre` that takes a movie object as input and a genre string (e.g., "action" or "comedy") and returns `true` if the movie's genre matches the input genre, otherwise `false`.
// 2. Use chaining to manipulate the `movies` array in the following sequence:
// a. Filter and create a new array `actionMovies` containing movies with the "action" genre using the `filterByGenre` function.
// b. Use the `map` function to create a new array `movieTitles` containing the titles of all movies in `actionMovies`.

let filterByGenre = movies.filter((movie) => {
  if (movie.genre == "Action" || movie.genre == "Drama") {
    return true;
  } else {
    return false;
  }
});

console.log(filterByGenre);

let actionMovies = filterByGenre
  .filter((movie) => movie.genre == "Action")
  .map((movie) => movie.title);

console.log(actionMovies);

// **Part 5: Integration and Output**
// 1. Combine the results from Part 1 (`adultUsers` and `userNames` arrays) and Part 2 (`femaleUsers` array with full names), and Part 4 (`movieTitles` array) into a final object `combinedResults` that contains these pieces of information.
// 2. Print the contents of `combinedResults` to the console.

let combinedResults = {
  AdultUsers: adultUsers,
  UserNames: userNames,
  FemaleUsers: femaleUsers,
  ActionMovies: actionMovies,
};

console.log(combinedResults);
