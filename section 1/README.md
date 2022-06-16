# Zettabyte

you can use your own mongodb and seed this data for test my code

## first you need to open your mongo db, and copy the URI and save at .env file

## in your shell do this operation
paste:

1. use zettaByte_zettaByte_backendTest
2. db.articles.insert([
    {
        title: "New Article Alpha",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ultrices dui sapien eget mi. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi",
        images: "https://randomwordgenerator.com/img/picture-generator/57e4d1474e5ba914f1dc8460962e33791c3ad6e04e5074417d2f7dd49f4ec6_640.jpg",
        author: "Jhon Doe"
    },
    {
        title: "New Article Beta",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ultrices dui sapien eget mi. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi",
        images: "https://randomwordgenerator.com/img/picture-generator/54e3d6434953ae14f1dc8460962e33791c3ad6e04e507749772f78d49f4cc6_640.jpg",
        author: "Jhon Doe"
    },
    {
        title: "New Article Charlie",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ultrices dui sapien eget mi. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi",
        images: "https://randomwordgenerator.com/img/picture-generator/53e5dc414d55ac14f1dc8460962e33791c3ad6e04e507749742d7cd0974dc3_640.jpg",
        author: "Burhandy Aloy"
    },
    {
        title: "New Article Delta",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ultrices dui sapien eget mi. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi ",
        images: "https://randomwordgenerator.com/img/picture-generator/g09c51d6247f88abd6e9145c1fc2af08348ea95ceb3334a3ac87087f6c92fdb3c25a4ea29f42ede7b17dbb77aca344108_640.jpg",
        author: "Burhandy Aloy"
    }
])
3. db.comments.insert([
    {
        articleId: "62aa23221e3c0f7fc80e1a57",
        name: "Dimas Kurniawan",
        text: "Nice article",
    },
    {
        articleId: "62aa23221e3c0f7fc80e1a58",
        name: "Joko",
        text: "Great article",
    },
    {
        articleId: "62aa23221e3c0f7fc80e1a59",
        name: "Anwar",
        text: "Nice article ,thanks",
    }
])
