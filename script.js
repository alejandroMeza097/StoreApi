//SELECCIONAR LA ETIQUETA MAIN DE MI HTML...
const main = document.getElementsByTagName("main").item(0);

//URL DE API - DE AQUI CONSUMO MIS PRODCUTOS, MI INFORMACION...
const URLMain = "https://fakestoreapi.com/products/";



function getData(){
    const options = {"method":"GET"};
    fetch(URLMain,options)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
            //console.log(res.length);
            //console.log(res[16].title);
            createCards(res);
        });
    })
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",`<div class="alert alert-danger" role="alert">${err.message}</div>`)
    });
}

function createCards(productos){
    productos.forEach(producto => {
        main.insertAdjacentHTML("beforeend",
            `
            <div class="card m-3" style="width: 18rem;">
                <img class="card-img-top" src="${producto.image}" alt="Card image cap">
                 <div class="card-body">
                     <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class = "card-text">${producto.category}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `);
    });
}





getData();
