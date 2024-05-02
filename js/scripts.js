let products = [
    {id: 1, imgSrc: 'images/shoespng.parspng.com_.png', name: 'Nike Sport Shoe', price: 200}
    ,
    {id: 2, imgSrc: 'images/shoespng.parspng.com-2.png', name: 'Baby Shoe', price: 80}
    ,
    {id: 3, imgSrc: 'images/shoespng.parspng.com-3.png', name: 'Mens Shoe', price: 100}
    ,
    {id: 4, imgSrc: 'images/shoespng.parspng.com-5.png', name: 'Convers', price: 150}
    ,
    {id: 5, imgSrc: 'images/shoespng.parspng.com-6.png', name: 'Hi Sport Shoe', price: 70}
    ,
    {id: 6, imgSrc: 'images/shoespng.parspng.com-8.png', name: 'Women Shoe', price: 160}
    ,
    {id: 7, imgSrc: 'images/shoespng.parspng.com-9.png', name: 'Nike Baby Shoe', price: 60}
]

const productContainer = document.querySelector('.products');
const productFragment = document.createDocumentFragment();

// render products to dom
products.forEach(function(product){
    let productBox = document.createElement('div');
    productBox.classList.add('product-box');

    let productImg = document.createElement('img');
    productImg.setAttribute('src' , ''+product.imgSrc+'');
    productImg.classList.add('product-img');

    let productName = document.createElement('h3');
    productName.classList.add('product-title');
    productName.innerHTML = product.name;

    let productPrice = document.createElement('h5');
    productPrice.classList.add('product-price');
    productPrice.innerHTML = product.price + ' $';

    let moreBtn = document.createElement('a');
    moreBtn.className = 'more-info-btn btn btn-danger';
    moreBtn.setAttribute('href', 'product.html?id='+product.id+'');
    moreBtn.innerHTML = 'More';

    productBox.append(productImg, productName, productPrice, moreBtn);
    productFragment.append(productBox);
})

productContainer.append(productFragment);