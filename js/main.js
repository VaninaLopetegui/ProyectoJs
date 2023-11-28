// clase para crear Categorias de productos con su arrayProductos dentro
let categorias = [];
class Categoria {
    constructor (nombreCategoria, id){
        this.nombreCategoria = nombreCategoria
        this.id = id
        this.productosCategoria = [];
    }
    agregarProductosNuevos (numProducto, nombreAlfombra, descripcionAlfombra, precioAlfombra, imagenAlfombra){
        const producto = {
            numProducto : numProducto,
            nombreAlfombra : nombreAlfombra,
            descripcionAlfombra: descripcionAlfombra, 
            precioAlfombra : precioAlfombra,
            imagenAlfombra : imagenAlfombra
        }
        this.productosCategoria.push(producto);
        localStorage.setItem(this.nombreCategoria, JSON.stringify(this.productosCategoria));
    }
    agregarCategoriaACategorias(){
        categorias.push ({
            nombreCategoria: this.nombreCategoria,
            id: this.id,
            productosCategoria: this.productosCategoria
        })
    }
}
// Creo las diferentes categorias con sus productos 
const categoriaUno = new Categoria ("ANIME", 1);
categoriaUno.agregarProductosNuevos(1, "ITACHI", "Alfombra de Naruto" , 3000, "https://i.pinimg.com/564x/77/7b/ce/777bce7e4073ffa9dacc8b88a5ccafc8.jpg");
categoriaUno.agregarProductosNuevos(2, "KAKASHI", "Alfombra de Naruto" , 3000, "https://i.pinimg.com/564x/e6/2b/88/e62b88ac82b54f50d9faa1122e8a897d.jpg");
categoriaUno.agregarProductosNuevos(3, "GARA", "Alfombra de Naruto" , 3000, "https://i.pinimg.com/564x/5d/09/41/5d094176ab1e264f4548ab79ea531f23.jpg");
categoriaUno.agregarProductosNuevos(4, "GOKU", "Alfombra de Dragon ball z", 5000, "https://i.pinimg.com/564x/cf/5a/44/cf5a44db65740153e5e84428a86f90d4.jpg");
categoriaUno.agregarProductosNuevos(5, "VEGITO", "Alfombra de Dragon ball z", 8400, "https://i.pinimg.com/564x/69/8f/67/698f673ee8e0e3150b071d3a718ee299.jpg");
categoriaUno.agregarProductosNuevos(6, "LUFFY", "Alfombra de One Piece", 3500, "https://i.pinimg.com/564x/bf/67/07/bf6707f122befa7bb8fba983b89def8f.jpg");
categoriaUno.agregarProductosNuevos(7, "GOJO", "Alfombra de Jujustsu Kaisen", 3200, "https://i.pinimg.com/564x/40/48/88/404888b99ff095bbf29b6ca94f3573bb.jpg");
categoriaUno.agregarProductosNuevos(8, "INOSUKE", "Alfombra de Kimetsu no Yaiba", 6999, "https://i.pinimg.com/564x/6a/f9/94/6af9941df7aba4443b04251051621817.jpg");
categoriaUno.agregarProductosNuevos(9, "RYUK", "Alfombra de Death Note", 6999, "https://i.pinimg.com/564x/24/79/8f/24798f6bacf7f17b68dbcdcfc722dde7.jpg");
categoriaUno.agregarCategoriaACategorias();

const categoriaDos = new Categoria ("JUEGOS", 2);
categoriaDos.agregarProductosNuevos(10, "BOWSER", "Alfombra de Mario", 10000, "https://i.pinimg.com/564x/ee/b3/d8/eeb3d85b1e3d7e274df7011687835599.jpg");
categoriaDos.agregarProductosNuevos(11, "KIRBY", "Alfombra de Mario", 2000, "https://i.pinimg.com/564x/67/0e/42/670e4272ffe051b5983639acf5f03e7c.jpg");
categoriaDos.agregarProductosNuevos(12, "CHARMANDER", "Alfombra de Pokemón", 2000, "https://i.pinimg.com/564x/72/01/ab/7201abc14c9be992f539acb2e3ef7a20.jpg");
categoriaDos.agregarProductosNuevos(13, "SNORLAX", "Alfombra de Pokemón", 4000, "https://i.pinimg.com/564x/87/e0/b5/87e0b528a1d521b82ce04846a359385f.jpg");
categoriaDos.agregarProductosNuevos(14, "SONIC", "Alfombra de Sonic", 2000, "https://i.pinimg.com/564x/96/61/fc/9661fcdec1cff79a393f8ffb8ec4830f.jpg");
categoriaDos.agregarCategoriaACategorias();

const categoriaTres = new Categoria ("SERIES", 3);
categoriaTres.agregarProductosNuevos(15, "GARY", "Alfombra de Bob Esponja", 6000, "https://i.pinimg.com/564x/52/c9/45/52c945da412e583ec0aca110279de5ca.jpg");
categoriaTres.agregarProductosNuevos(16, "CUDDLES", "Alfombra de Happy Tree Friends", 5000, "https://i.pinimg.com/750x/ba/c8/20/bac82049456a590362d31ad02190f618.jpg");
categoriaTres.agregarProductosNuevos(17, "BATMAN", "Alfombra de DC", 4000, "https://i.pinimg.com/564x/48/5d/53/485d5315cbd5a13534670996b5acf470.jpg");
categoriaTres.agregarProductosNuevos(18, "PICKLE RICK", "Alfombra de la serie Rick y Morty", 4500, "https://i.pinimg.com/564x/fa/60/34/fa6034ddaaa5c52542df29c36129ea94.jpg");
categoriaTres.agregarProductosNuevos(19, "TOTORO", "Alfombra de la serie Studio Ghibli", 4500, "https://i.pinimg.com/564x/3e/f8/e9/3ef8e937f93d509da676f63e81ddd49f.jpg");
categoriaTres.agregarProductosNuevos(20, "RICK Y MORTY", "Alfombra de la serie Rick y Morty", 4500, "https://i.pinimg.com/564x/12/97/5b/12975b641035f21541adbb843de773f8.jpg");
categoriaTres.agregarCategoriaACategorias();

// Función para obtener los productos de una categoría desde el localStorage
const obtenerProductosDeLS = (nombreCategoria) => {
    return JSON.parse(localStorage.getItem(nombreCategoria));
};

//Procedo a crear estas categorias visibles para el usuario con DOM
const renderProductos = () => {
    let contenidoCategoria = "";
    categorias.forEach(categoria => {
        let productosDeLS = obtenerProductosDeLS(categoria.nombreCategoria);
        productosDeLS.forEach(producto => {
            contenidoCategoria += `
                <div id="${producto.numProducto}" class="col-md-3 mb-5 card text-center border productoCard">
                    <img src="${producto.imagenAlfombra}" class="card-img-top" alt="${producto.nombreAlfombra}">
                    <div class="card-body cardBody">
                        <h5 class="card-title">${producto.nombreAlfombra}</h5>
                        <p class="card-text">${producto.descripcionAlfombra}</p>
                        <p class="card-text">$${producto.precioAlfombra}</p>
                    </div>
                    <a href="#" class="btn cardBotonVer" onclick="verProducto(${producto.numProducto})">Ver producto</a>
                </div>
            `;
        });
    });
    document.getElementById("seccionCategoriaElegida").innerHTML = contenidoCategoria;
}
renderProductos();

// seleccion de categoria y mostrar SOLO productos dentro de esa categoria elegida
const mostrarCategoria = (id) => {
    let categoriaElegidaPorUsuario = categorias.find(categoria => categoria.id == id);
    let productosDeLS = obtenerProductosDeLS(categoriaElegidaPorUsuario.nombreCategoria);
    let contenidoCategoria = "";
    productosDeLS.forEach(producto => {
        contenidoCategoria += `
        <div id="${producto.numProducto}" class="col-md-3 mb-5 card text-center border productoCard">
            <img src="${producto.imagenAlfombra}" class="card-img-top" alt="Personaje: ${producto.nombreAlfombra}">
            <div class="card-body cardBody">
                <h5 class="card-title">${producto.nombreAlfombra}</h5>
                <p class="card-text">${producto.descripcionAlfombra}</p>
                <p class="card-text">$${producto.precioAlfombra}</p>
            </div>
            <a class="btn cardBotonVer" onclick="verProducto(${producto.numProducto})">Ver producto</a>
        </div>
        `;
        document.getElementById("seccionCategoriaElegida").innerHTML = contenidoCategoria;
    })
}

//traigo el dropDown para generar el escuchar y que suceda el evento mostrando la categoria
let categoriasDropContenedor = document.getElementById("categoriasDropContenedor");

const cambiarCategoria = e => {
    mostrarCategoria(e.target.id);
}

categoriasDropContenedor.addEventListener("click", cambiarCategoria);

// input de buscador de productos 

function inputSearch (input, selector){
    document.addEventListener("keyup", (e)=>{
        if (e.target.matches(input)){
            let valorInput = e.target.value
            document.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(valorInput)
            ? el.classList.remove("filtro")
            : el.classList.add("filtro")
            )
        }
    })
}
inputSearch("#buscador", ".productoCard");
localStorage.setItem("categorias", JSON.stringify(categorias));
// boton ver producto con archivo html aparte
const verProducto = (numProducto) => {
    localStorage.setItem("productoSeleccionado", JSON.stringify(numProducto));
    window.location.href = "verProducto.html";
};


