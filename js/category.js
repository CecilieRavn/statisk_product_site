const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category="+category)
    .then((res) => res.json())
    .then(showCategories);

function showCategories(cats){
    cats.forEach(showCategory);
}

function showCategory(cat){
    //fanger vores template
    const template = document.querySelector("template").content;
    //cloner
    const clone = template.cloneNode(true);
    //ændre indhold
    clone.querySelector("a").textContent = cat.category;
    clone.querySelector("a").href = `productlist.html=${cat.category}`;

    //appender
    document.querySelector(".letterGroup ol").appendChild(clone);
}    