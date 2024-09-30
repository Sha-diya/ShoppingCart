const product=[
    {
        id:0,
        image:'image/Apple_phone.jpeg',
        title:'iphone 14 sweet pink',
        price:225000,
    },
    {
        id:1,
        image:'image/AppleLaptop.jpeg',
        title:'Mac book pro',
        price:290000,
    },
    {
        id:2,
        image:'image/airbud.jpeg',
        title:'Air Bud',
        price:12000,
    },
    {
        id:3,
        image:'image/ipad.jpeg',
        title:'ipad',
        price:50000,
    },
    {
        id:4,
        image:'image/ipad2.jpeg',
        title:'ipad (baby pink)',
        price:72000,
    },
    {
        id:5,
        image:'image/watch.jpeg',
        title:'Apple watch',
        price:45000,
    },
    {
        id:6,
        image:'image/watch2.jpeg',
        title:'Apple watch of series 7',
        price:72000,
    },
    {
        id:7,
        image:'image/phone2.jpeg',
        title:'Apple phone',
        price:172000,
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];


function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}


function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }


    
}
