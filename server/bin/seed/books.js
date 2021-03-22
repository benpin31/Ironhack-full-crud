//* create a test data set of valid users
const mongoose = require("mongoose");
require("dotenv").config();
require("./../../config/mongo");
const BooksModel = require("./../../model/books");



const books = [
    {
        "author" : "Milan Kundera",
        "title": "The Joke",
        "date": "1967",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/71lhQ7euj9L.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "Life is Elsewhere",
        "date": "1969",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/41rpnAEhsRL._SX306_BO1,204,203,200_.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "Laughable Loves",
        "date": "1970",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/71eTSHyZ3KL.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "The Farewell Waltz",
        "date": "1972",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/71vWmohNGBL.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "The Book of Laughter and Forgetting",
        "date": "1979",
        "image" : "https://products-images.di-static.com/image/base/9780571174379-475x500-1.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "The Unbearable Lightness of Being",
        "date": "1984",
        "image" : "https://assets.thalia.media/img/artikel/ac8fa7e728ab9173d16b829876e426b2b4035bd7-00-00.jpeg"
    },
    {
        "author" : "Milan Kundera",
        "title": "Immortality",
        "date": "1990",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/71D4qzJvX1L.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "Slowness",
        "date": "1995",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/81vcLYeqjeL.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "Identity",
        "date": "1997",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/81-O1rnRyJL.jpg"
    },
    {
        "author" : "Milan Kundera",
        "title": "Ignorance",
        "date": "2000",
        "image" : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQm_67f8wjH79H6GSgbZyWCNY04FiZemXl5RUD-bgqztwkzgF02oNvdCfjH46Ztf4LOEocqo6cRuvFWijLGd5ukALA4akY4kg&usqp=CAY"
    },
    {
        "author" : "Milan Kundera",
        "title": "The Festival of Insignificance",
        "date": "2013",
        "image" : "https://images-na.ssl-images-amazon.com/images/I/61RcuznGYpL.jpg"
    }
]


BooksModel.insertMany(books)
    .then(inserted => {
        console.log(`seed Lists done : ${inserted.length} documents inserted !`);
        mongoose.connection.close().then((success) => console.log("WELL CLOSED"));
    })
    .catch(
        console.log("nay db connection error :(")
    )