const btnRaquetas = $("#btnRaquetas");
const btnCuerdas = $("#btnCuerdas");
const btnGrips = $("#btnGrips");
const btnTodo = $("#btnTodo");

const nombre = $("#nombre").value;
const email = $("#email").value;
const edad = $("#edad").value;


const app = $("#app");


// RAQUETAS

const raquetas = [
    {id: "babolatPuredrive", nombre: "Babolat Pure Drive" , marca: "babolat", precio: 700000},
    {id: "babolatPureaero", nombre: "Babolat Pure AERO" , marca: "babolat", precio: 750000},
    {id: "babolatPurestrike", nombre: "Babolat Pure Strike" , marca: "babolat", precio: 680000},
    {id: "headExtreme", nombre: "Head Extreme" , marca: "Head", precio: 640000},
    {id: "headGravity", nombre: "Head Gravity" , marca: "Head", precio: 740000},
    {id: "headRadical", nombre: "Head Radical" , marca: "Head", precio: 650000},
    {id: "yonexVcore", nombre: "Yonex VCORE" , marca: "Yonex", precio: 620000},
    {id: "yonexVcorepro", nombre: "Yonex VCORE PRO" , marca: "Yonex", precio: 720000},
    {id: "yonexEzone", nombre: "Yonex Ezone" , marca: "Yonex", precio: 600000},
];


for(const raqueta of raquetas){

    app.append(

        `
        <div class=cardsR>
        <img class=imgProductos src="./media/${raqueta.id}.jpg">
        <p>${raqueta.nombre}</p>
        <p>Marca: ${raqueta.marca}</p>
        <p>Precio: ${raqueta.precio}$ COP</p>
        <button id=${raqueta.id}>Comprar</button>
        </div>
        `
    );

}

btnRaquetas.on("click", function(){

    app.fadeOut()
       .fadeIn()
       .css("display", "grid")
       .css("grid-template-columns", "1fr 1fr 1fr")
       .css("background-color", "rgba(22,0,77,1)")
       .css("padding", "10px")
       .css("justify-items", "center")
    ;

    $(".cardsR").show();
    $(".cardsC").hide();
    $(".cardsG").hide();
    
    
})

// CUERDAS

const cuerdas = [
    {id: "cuerdaPolyBabolat", nombre: "Cuerda Polydura Babolat" , marca: "babolat", precio: 310000, calibre: "1.1mm"},
    {id: "cuerdaHexYonex", nombre: "Cuerda Hexagonal Yonex" , marca: "babolat", precio: 500000, calibre: "1.2mm"},
    {id: "cuerdaMultiFWilson", nombre: "Cuerda Multifilamento Wilson" , marca: "Wilson", precio: 230000, calibre: "1.4mm"},
];


for(const cuerda of cuerdas){

    app.append(

        `
        <div class=cardsC>
        <img class=imgProductos src="./media/${cuerda.id}.jpg">
        <p>${cuerda.nombre}</p>
        <p>Marca: ${cuerda.marca}</p>
        <p>Calibre: ${cuerda.calibre}</p>
        <p>Precio: ${cuerda.precio}$ COP</p>
        <button id=${cuerda.id}>Comprar</button>
        </div>
        `
    );

}

btnCuerdas.on("click", function(){

    app.fadeOut()
       .fadeIn()
       .css("display", "grid")
       .css("grid-template-columns", "1fr 1fr 1fr")
       .css("background-color", "rgba(22,0,77,1)")
       .css("padding", "10px")
       .css("justify-items", "center")
    ;

    $(".cardsR").hide();
    $(".cardsC").show();
    $(".cardsG").hide();
    

})

// GRIPS


const grips = [
    {id: "gripHWilsonRojo", nombre: "Grip Wilson Rojo" , marca: "Wilson", precio: 10000, tipo: "Sumedo"},
    {id: "gripSHeadVerde", nombre: "Grip Head Verde" , marca: "Silva", precio: 5000, tipo: "Seco"},
    {id: "gripHBabolatAzul", nombre: "Grip Babolat Azul" , marca: "Babolat", precio: 9000, tipo: "Humedo"},
    {id: "gripSYonexNEgro", nombre: "Grip Yonex Negro" , marca: "Yonex", precio: 8000, tipo: "Seco"},
];

for(const grip of grips){

    app.append(

        `
        <div class=cardsG>
        <img class=imgProductos src="./media/${grip.id}.jpg">
        <p>${grip.nombre}</p>
        <p>Marca: ${grip.marca}</p>
        <p>Tipo: ${grip.tipo}</p>
        <p>Precio: ${grip.precio}$ COP</p>
        <button id=${grip.id}>Comprar</button>
        </div>
        `
    );

}

btnGrips.on("click", function(){

    app.fadeOut()
       .fadeIn()
       .css("display", "grid")
       .css("grid-template-columns", "1fr 1fr 1fr")
       .css("background-color", "rgba(22,0,77,1)")
       .css("padding", "10px")
       .css("justify-items", "center")
    ;

    $(".cardsR").hide();
    $(".cardsC").hide();
    $(".cardsG").show();


    

})

// TODO

const productos = raquetas.concat(cuerdas).concat(grips);

btnTodo.on("click", function(){

    app.fadeOut()
       .fadeIn()
       .css("display", "grid")
       .css("grid-template-columns", "1fr 1fr 1fr")
       .css("background-color", "rgba(22,0,77,1)")
       .css("padding", "10px")
       .css("justify-items", "center")
    ;

    $(".cardsR").show();
    $(".cardsC").show();
    $(".cardsG").show();

    

})

// CARRITO Y COMPRA
const compra = []

for(const producto of productos){

    $(`#${producto.id}`).on("click", function(){

        compra.push(producto)

        Swal.fire({
            icon: 'success',
            title: 'Gracias',
            text: `Producto: ${producto.nombre} Agregado Correctamente`,
          })

        const carro = $("#productos");

        carro.append(
            `<img src="./media/${producto.id}.jpg">
            <p>${producto.nombre}</p>
            <p>${producto.precio}</p>
            `)

        


    })

}

const comprar = $("#comprar")
comprar.on("click", function(){

    $("#datos").show();
    
})

$("#enviar").on("click", function(e){

    e.preventDefault();

    let nombre = document.getElementById('nombre').value
    let edad = document.getElementById('edad').value
    let mail = document.getElementById('mail').value

    if(edad >= 18){

        class orden {
            constructor(nombre, items, edad, mail){
                this.nombre = nombre;
                this.apellido = items;
                this.edad = edad;
                this.altura = mail;
            }
        }

        let URLordenes = "https://jsonplaceholder.typicode.com/posts";
        let nuevaOrden = new orden((nombre, compra, edad, mail))
        
        $.post(URLordenes, nuevaOrden, (respuesta, estado) =>{

            if(estado === "success"){
        
                console.log(`Orden enviada al servidor email:${respuesta.nombre}`);
        
            }
        
        })

        Swal.fire({
            icon: 'success',
            title: `Gracias por tu compra ${nombre}`,
            text: `Te contactaremos a ${mail}  para finalizar el pedido`,
        })


    }else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Edad no apta!'
        })

    }
})

