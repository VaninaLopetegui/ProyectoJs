// clase para crear Categorias de productos con su arrayProductos dentro
let categorias = [];
class Categoria {
    constructor (nombreCategoria, id){
        this.nombreCategoria = nombreCategoria
        this.id = id
        this.productosCategoria = [];
    }
    agregarProductosNuevos (nombreAlfombra, precioAlfombra, imagenAlfombra){
        const producto = {
            nombreAlfombra : nombreAlfombra,
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
categoriaUno.agregarProductosNuevos("ITACHI", 3000, "https://i.pinimg.com/564x/77/7b/ce/777bce7e4073ffa9dacc8b88a5ccafc8.jpg");
categoriaUno.agregarProductosNuevos("GOKU", 5000, "https://i.pinimg.com/564x/cf/5a/44/cf5a44db65740153e5e84428a86f90d4.jpg");
categoriaUno.agregarProductosNuevos("ZORO", 1500, "https://i.pinimg.com/564x/7f/86/22/7f862262dcae68583316a552ca65a87e.jpg");
categoriaUno.agregarCategoriaACategorias();

const categoriaDos = new Categoria ("JUEGOS", 2);
categoriaDos.agregarProductosNuevos("BOWSER", 10000, "https://i.pinimg.com/564x/ee/b3/d8/eeb3d85b1e3d7e274df7011687835599.jpg");
categoriaDos.agregarProductosNuevos("KIRBY", 2000, "https://i.pinimg.com/564x/2d/92/0f/2d920f2800eb111d5d722daa380bed02.jpg");
categoriaDos.agregarProductosNuevos("CHARMANDER", 2000, "https://i.pinimg.com/564x/72/01/ab/7201abc14c9be992f539acb2e3ef7a20.jpg");
categoriaDos.agregarCategoriaACategorias();

const categoriaTres = new Categoria ("SERIES", 3);
categoriaTres.agregarProductosNuevos("VENOM", 4500, "https://i.pinimg.com/564x/3a/b9/14/3ab9144b2a73ec07f9b09eca412454a2.jpg");
categoriaTres.agregarProductosNuevos("SPIDER MAN", 6100, "https://i.pinimg.com/736x/51/87/fd/5187fdcf5548ea3e45c8aaf3273e5a3e.jpg");
categoriaTres.agregarProductosNuevos("BATMAN", 3200, "https://i.pinimg.com/564x/48/5d/53/485d5315cbd5a13534670996b5acf470.jpg");
categoriaTres.agregarCategoriaACategorias();
// Función para obtener los productos de una categoría desde el localStorage
const obtenerProductosDeLS = (nombreCategoria) => {
    return JSON.parse(localStorage.getItem(nombreCategoria));
};
let productosUno = obtenerProductosDeLS(categoriaUno.nombreCategoria);
console.log(productosUno)

//Procedo a crear estas categorias visibles para el usuario con DOM

const mostrarCategoria = (id) => {
    let categoriaElegidaPorUsuario = categorias.find(categoria => categoria.id == id);
    let productosDeLS = obtenerProductosDeLS(categoriaElegidaPorUsuario.nombreCategoria);
    let contenidoCategoria = "";
    productosDeLS.forEach(producto => {
        contenidoCategoria += `
        <div class="card text-center border">
            <img src="${producto.imagenAlfombra}" class="card-img-top" alt="${producto.nombreAlfombra}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombreAlfombra}</h5>
                <p class="card-text">${producto.precioAlfombra}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
        `; 
        document.getElementById("seccionCategoriaElegida").innerHTML = contenidoCategoria;
    })
}
//traigo el dropDown para generar el escuchar y que suceda el evento mostrando la categoria
let categoriasDrop = document.getElementById("categoriasDrop");

const cambiarCategoria = e => {
    mostrarCategoria(e.target.id);
}

categoriasDrop.addEventListener("click", cambiarCategoria);
