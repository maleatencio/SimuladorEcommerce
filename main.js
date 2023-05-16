const productos = [
    {nombre: "top", precio: 2000},
    {nombre: "jean", precio: 4000},
    {nombre: "pollera", precio: 3000},
    {nombre: "buzo", precio: 5000},
    {nombre: "vestido", precio: 3500},

];


let carrito = []
let precio= 0

let seleccion = prompt("Hola! Deseas comprar algunas de nuestras prendas? Responde si o no")
while (seleccion != "si" && seleccion != "no"){
alert(prompt("Por favor ingresa si o no") ) }

if(seleccion == "si"){
    alert("Los productos disponibles de nuestra tienda son: ")

let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
alert(todosLosProductos.join(" - "))
 }else if (seleccion == "no"){
    alert("Gracias por visitar nuestra tienda!")
 }




function agregarProducto  () {
  
   let  producto = prompt("Ingresa la prenda que deseas comprar")
    
    
    
   
    
   

    if(producto == "top"  || producto == "jean" || producto == "vestido"  || producto == "buzo" || producto == "pollera"){
        switch(producto){
            case "top":
            precio += 2000;
            break;

            case "jean":
            precio  += 4000;
            break;

            case "buzo":
                precio  += 5000;
                break;

            case "pollera":
                    precio += 3000;
                    break;   

            case "vestido":
             precio += 3500;
            break; 
            
            default:
                break;
        }
        
    }else{
        alert("No se encuentra disponible ese producto")
    }

    let unidades = parseInt(prompt("Cuantas unidades deseas llevar?"))
    carrito.push({producto,unidades, precio})
    //let unidades = parseInt(prompt("Cuantas unidades queres llevar?"))
    console.log;(carrito)

    alert(`Has seleccionado:  ${producto}  El total a pagar es ${precio * unidades}`)

    let continuar = prompt("Deseas seguir comprando?")

    if(continuar == "si"){
        agregarProducto()
   
    }else{
        let pagar = confirm("Deseas pagar?")
        pagarTotal(pagar)
        console.log(carrito)
   
   
    }
    

    


    }

    


    
 

agregarProducto()




 



  function pagarTotal(pagar){
    if(pagar){ 

 let medioDePago = prompt(`Elige un medio de pago: 
  1. Efectivo  
  2. Tarjeta de credito
     3. Tarjeta de debito
`)

if (medioDePago === null) { 
    return;
 }

 medioDePago =+ medioDePago
  

  while (isNaN(medioDePago) || medioDePago < 1 || medioDePago > 2){
    alert("Opcion invalida. Ingrese nuevamente un numero ")

   medioDePago = prompt(`Elige un medio de pago: 
    1. Efectivo  
    2. Tarjeta de credito
    3. Tarjeta de debito
 `)

if (medioDePago === null) { 
   return
    }
  
 }
 elegirPago(medioDePago)
  }
 else{

 }    alert("Gracias por visitarnos!")
 return;
 }
  


     


     function elegirPago(medioDePago){
        let unidades
        let producto
        switch(medioDePago){
            case 1:
            alert (`Has seleccionado pagar con efectivo. Podes mirar el detalle de tu compra por consola. Gracias por tu compra!`)
            break;
    
    
            case 2:
                alert (`Has seleccionado pagar con efectivo. Podes mirar el detalle de tu compra por consola. Gracias por tu compra!`)
            break;
    
            case 3:
                alert (`Has seleccionado pagar con efectivo. Podes mirar el detalle de tu compra por consola. Gracias por tu compra!`)
                break;
    
            
            default:
             return;
        }
        
     return;
     }


 
  
    
  

   


 

