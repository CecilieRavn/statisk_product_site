fetch("https://kea-alt-del.dk/t7/api/products?limit=30")
    .then(res=>res.json())
    //.then(data=>showProducts(data))
    .then(showProducts)

function showProducts(products){
    //looper og kalder showproduct
    products.forEach(showProduct)
}

function showProduct(product) {

    //console.log(product);
    //Fang template
    const template = document.querySelector("#smallProductTemplate").content;

    //lav en kopi
    const copy = template.cloneNode(true);

    //ændre indhold
    copy.querySelector("h3").textContent=product.productdisplayname;
    copy.querySelector(".subTitle").textContent=product.brandname;
    copy.querySelector(".price").textContent=product.price + ".-";
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    if(product.soldout) {
        copy.querySelector("article").classList.add("soldOut");
    }
    
    if (product.discount){
        copy.querySelector(".price").textContent=udregnrabet(product.price,product.discount) + ".-"; 
    }

    copy.querySelector('.discounted p:last-child').textContent=product.discount + "%";
    
    if(!product.discount){
        copy.querySelector('.discounted .procent').remove();
        copy.querySelector('.discounted').classList.remove('discounted');   
    }

    copy.querySelector(".read-more").setAttribute("href", `product.html?id=${product.id}`);

    //appende
    document.querySelector("main").appendChild(copy);
}

function udregnrabet(pris,rabat){
    return Math.floor( pris - ((pris / 100) * rabat)) 
    
}


/*articletype: "Tshirts"
​
brandname: "Puma"
​
category: "Apparel"
​
discount: null
​
gender: "Men"
​
id: 1529
​
price: 1899
​
productdisplayname: "Tee"
​
productionyear: 2010
​
season: "Fall"
​
soldout: 0
​
subcategory: "Topwear"
​
usagetype: "Casual"*/
