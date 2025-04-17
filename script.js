//SELECCIONAR LA ETIQUETA MAIN DE MI HTML...
const main = document.getElementsByTagName("main").item(0);

//SELECCIONAR ulMenu...
const ulMenu = document.getElementById("menu");

//URL DE API - DE AQUI CONSUMO MIS PRODCUTOS, MI INFORMACION...
const URLMain = "https://fakestoreapi.com/products/";






//FUNCION PARA OBTENER DATOS DESDE LA API...
function getData(categoria){
    const options = {"method":"GET"};
    fetch(URLMain+categoria,options)
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




//FUNCION PARA OBTENER DATOS DESDE LA API - categorias...
function getCategories(){

    const options = {"method":"GET"};
    fetch(URLMain+"categories",options)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
            //console.log(res.length);
            //console.log(res[16].title);
            createCategories(res);
        });
    })
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",`<div class="alert alert-danger" role="alert">${err.message}</div>`)
    });
}



//FUNCION QUE GENERA LOS CARDS CON LA INFORMACION...
function createCards(productos){
    main.innerHTML = "";
    productos.forEach(producto => {
        main.insertAdjacentHTML("beforeend",
            `
            <div class="card m-3" style="width: 18rem;">
                <img class="card-img-top" src="${producto.image}" alt="Card image cap" style="width:200px; height:250px">
                 <div class="card-body">
                     <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class = "card-text">${producto.category}</p>
                        <p class = "card-text text-danger"> ${producto.rating.rate}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `);
    });
}


//FUNCION QUE GENERA CATEGORIAS...
function createCategories(categorias){

    categorias.forEach(categoria => {
       
        ulMenu.insertAdjacentHTML("afterbegin",
            `
            <li><a class="dropdown-item" href="#" onclick="getData('category/${categoria}');">${categoria}</a></li>
           
            `);
    });
}





getData('');
getCategories();
