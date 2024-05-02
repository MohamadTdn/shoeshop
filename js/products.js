let products = [
    {id: 1, imgSrc: 'images/shoespng.parspng.com_.png', name: 'Nike Sport Shoe', price: 200, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
    ,
    {id: 2, imgSrc: 'images/shoespng.parspng.com-2.png', name: 'Baby Shoe', price: 80, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
    ,
    {id: 3, imgSrc: 'images/shoespng.parspng.com-3.png', name: 'Mens Shoe', price: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
    ,
    {id: 4, imgSrc: 'images/shoespng.parspng.com-5.png', name: 'Convers', price: 150, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
    ,
    {id: 5, imgSrc: 'images/shoespng.parspng.com-6.png', name: 'Hi Sport Shoe', price: 70, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
    ,
    {id: 6, imgSrc: 'images/shoespng.parspng.com-8.png', name: 'Women Shoe', price: 160, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
    ,
    {id: 7, imgSrc: 'images/shoespng.parspng.com-9.png', name: 'Nike Baby Shoe', price: 60, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat doloribus incidunt, illo in quas mollitia corrupti maxime corporis numquam harum laudantium vero nulla molestias nobis ratione aspernatur? Aut, delectus!'}
]
const targetProductImage = document.querySelector('.target-product-image');
const targetProductName = document.querySelector('.product-name');
const targetProductPrice = document.querySelector('.price');
const targetProductDescription = document.querySelector('.product-description');
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', function(){
    history.back();
})

let productUrl = new URLSearchParams(location.search);
let productId = productUrl.get('id');

let targetProduct = products.find(function(item){
    return productId == item.id;
})

targetProductImage.setAttribute('src', targetProduct.imgSrc);
targetProductName.innerHTML = targetProduct.name;
targetProductPrice.innerHTML = targetProduct.price + ' $';
targetProductDescription.innerHTML = targetProduct.description;
