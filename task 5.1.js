// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)
//__________________________________________________________________________________
// using for loop
//-----------------

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

xhr.onload = function(){
    let a = JSON.parse(xhr.responseText);
    let userName=[];
    
    for(let i=0;i<a.length;i++){
        userName.push(a[i]['name']);

    }
    console.log(userName);
}
xhr.send()

// output :
//-------------
// [
//     'id labore ex et quam laborum',
//     'quo vero reiciendis velit similique earum',
//     'odio adipisci rerum aut animi',
//     'alias odio sit',
//     'vero eaque aliquid doloribus et culpa'
//   ]


// using for in loop
//--------------------------

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

xhr.onload = function(){
    let a = JSON.parse(xhr.responseText);
    let userName=[];
    
    for(let i in a){
        userName.push(a[i]['id']);

    }
    console.log(userName);
}
xhr.send()

// output :
//-------------
// [ 1, 2, 3, 4, 5 ]


//using in for of loop
//-----------------------

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

xhr.onload = function(){
    let a = JSON.parse(xhr.responseText);
    let userName=[];
    
    for(let value of a){
        userName.push(value['email']);

    }
    console.log(userName);
}
xhr.send()

// output :
//------------
// [
//     'Eliseo@gardner.biz',
//     'Jayne_Kuhic@sydney.com',
//     'Nikita@garfield.biz',
//     'Lew@alysha.tv',
//     'Hayden@althea.biz'
//   ]

// using forEach loop
//----------------------

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');

xhr.onload = function(){
    let a = JSON.parse(xhr.responseText);
    let userName=[];
    
    a.forEach(value => {

       userName.push(value['body'])
    });
    console.log(userName);
}
   
   xhr.send()


// output : 
//-----------
// [
//    'laudantium enim quasi est quidem magnam voluptate ipsam eos\n' +
//      'tempora quo necessitatibus\n' +
//      'dolor quam autem quasi\n' +
//      'reiciendis et nam sapiente accusantium',
//    'est natus enim nihil est dolore omnis voluptatem numquam\n' +
//      'et omnis occaecati quod ullam at\n' +
//      'voluptatem error expedita pariatur\n' +
//      'nihil sint nostrum voluptatem reiciendis et',
//    'quia molestiae reprehenderit quasi aspernatur\n' +
//      'aut expedita occaecati aliquam eveniet laudantium\n' +
//      'omnis quibusdam delectus saepe quia accusamus maiores nam est\n' +
//      'cum et ducimus et vero voluptates excepturi deleniti ratione',
//    'non et atque\n' +
//      'occaecati deserunt quas accusantium unde odit nobis qui voluptatem\n' +
//      'quia voluptas consequuntur itaque dolor\n' +
//      'et qui rerum deleniti ut occaecati',
//    'harum non quasi et ratione\n' +
//      'tempore iure ex voluptates in ratione\n' +
//      'harum architecto fugit inventore cupiditate\n' +
//      'voluptates magni quo et'
//  ]