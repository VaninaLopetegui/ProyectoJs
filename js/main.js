// clase para crear Categorias de productos con su arrayProductos dentro
class Categoria {
    constructor (nombreCategoria, id){
        this.nombreCategoria = nombreCategoria
        this.id = id
        this.productosCategoria = [];
    }
    agregarProductosNuevos (nombreAlfombra, precioAlfombra, tamanioAlfombra){
        const producto = {
            nombreAlfombra : nombreAlfombra,
            precioAlfombra : precioAlfombra,
            tamanioAlfombra : tamanioAlfombra
        }
        this.productosCategoria.push(producto);
    }
}
// Creo las diferentes categorias con sus productos 
const categoriaUno = new Categoria ("Anime", 1);
categoriaUno.agregarProductosNuevos("NARUTO", 3000, "100x70cm");
categoriaUno.agregarProductosNuevos("GOKU", 5000, "200x100cm");
categoriaUno.agregarProductosNuevos("TOTORO", 1500, "50x50cm");
console.log(categoriaUno);

const categoriaDos = new Categoria ("Juegos", 2);
categoriaDos.agregarProductosNuevos("LINK", 10000, "100x100cm");
categoriaDos.agregarProductosNuevos("PIKACHU", 2000, "50x50cm");
categoriaDos.agregarProductosNuevos("CHARMANDER", 2000, "60x50cm");
console.log(categoriaDos);

const categoriaTres = new Categoria ("Marvel", 3);
categoriaTres.agregarProductosNuevos("VENOM", 4500, "100x70cm");
categoriaTres.agregarProductosNuevos("SPIDER MAN", 6100, "200x100cm");
categoriaTres.agregarProductosNuevos("BATMAN", 3200, "50x50cm");
console.log(categoriaTres);

//Pregunta de compra a usuario sobre las diferentes categorias creadas con sus productos y precios
let compraUsuario = "";
let preguntaCompra = "";
let precioProducto = "";
do {
    compraUsuario = parseInt (prompt ("Hola! ¿Quiéres realizar una compra?, estas son las opciones:\n 1.Alfombras de Anime\n 2.Alfombras de Juegos\n 3.Alfombras de Marvel"));
    if (compraUsuario===1){
        preguntaCompra = prompt ("Dentro de esta categoria " + categoriaUno.nombreCategoria + " se encuentran las opciones:\n" + categoriaUno.productosCategoria[0].nombreAlfombra + "\n" + categoriaUno.productosCategoria[1].nombreAlfombra + "\n" + categoriaUno.productosCategoria[2].nombreAlfombra);
        if (categoriaUno.productosCategoria.find(producto => producto.nombreAlfombra === preguntaCompra)){
            let producto = categoriaUno.productosCategoria.find(item => item.nombreAlfombra === preguntaCompra);
            alert("El precio de la alfombra elegida es de: " + producto.precioAlfombra + " pesos");
        } else {
            alert("¡No has ingresado un valor correcto!")
        }
    } else if (compraUsuario===2){
        preguntaCompra = prompt ("Dentro de esta categoria " + categoriaDos.nombreCategoria + " se encuentran las opciones:\n" + categoriaDos.productosCategoria[0].nombreAlfombra + "\n" + categoriaDos.productosCategoria[1].nombreAlfombra + "\n" + categoriaDos.productosCategoria[2].nombreAlfombra);
        if (categoriaDos.productosCategoria.find(producto => producto.nombreAlfombra === preguntaCompra)){
            let producto = categoriaDos.productosCategoria.find(item => item.nombreAlfombra === preguntaCompra);
            alert("El precio de la alfombra elegida es de: " + producto.precioAlfombra + " pesos");
        } else {
            alert("¡No has ingresado un valor correcto!")
        }
    } else if (compraUsuario===3){
        preguntaCompra = prompt ("Dentro de esta categoria " + categoriaTres.nombreCategoria + " se encuentran las opciones:\n" + categoriaTres.productosCategoria[0].nombreAlfombra + "\n" + categoriaTres.productosCategoria[1].nombreAlfombra + "\n" + categoriaTres.productosCategoria[2].nombreAlfombra);
        if (categoriaTres.productosCategoria.find(producto => producto.nombreAlfombra === preguntaCompra)){
            let producto = categoriaTres.productosCategoria.find(item => item.nombreAlfombra === preguntaCompra);
            alert("El precio de la alfombra elegida es de: " + producto.precioAlfombra + " pesos");
        } else {
            alert("¡No has ingresado un valor correcto!")
        }
    } else {
        alert ("No has ingresado un valor válido!")
    }
} while (compraUsuario===1 || compraUsuario===2 || compraUsuario===3);