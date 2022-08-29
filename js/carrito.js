const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragmento = document.createDocumentFragment()
const prodCarrito= document.getElementById('productosCarrito')
const footer= document.getElementById('footer-carrito')
const prueba = document.getElementById('productosCarrito')



prodCarrito.addEventListener('click', e =>{
    operarBotones(e);
})

let  productosCarrito = [];
productosCarrito= JSON.parse(localStorage.getItem("items")) || [];

productosCarrito.forEach(element => {
    templateCarrito.querySelector('h4').textContent = element.title
    templateCarrito.querySelector('img').setAttribute("src",element.imagen)
    templateCarrito.getElementById('precioUnidad').textContent = element.precio
    templateCarrito.getElementById('precioTotal').textContent = parseInt(element.cantidad*element.precio)
    templateCarrito.querySelector('input').setAttribute("value",element.cantidad);
    templateCarrito.getElementById('id-producto').textContent = element.id;

 

    const clone = templateCarrito.cloneNode(true)
    prodCarrito.appendChild(clone)
    
});

const calcularPrecio =  () => {
   
    var total=0;

    productosCarrito.forEach(element => {
        total= total+parseInt(element.cantidad*element.precio)
        
        
    });
    return total;

}


const operarBotones = e =>{


    if (e.target.classList.contains('borrar_carta') ) {

        
        
        quitarCarrito(e.target.parentElement.parentElement)
        
       
    }
    else if (e.target.classList.contains('cart_quantity_up')) {
        
        
        sumarCarrito(e.target.parentElement.parentElement.parentElement)

        
    }
    else if (e.target.classList.contains('cart_quantity_down')) {
        
        
        restarCarrito(e.target.parentElement.parentElement.parentElement)

        
    }


   
    
    e.stopPropagation()
} 
const quitarCarrito = objeto =>{

    

    const producto = {
        id: objeto.querySelector('.clase-producto').textContent
        


    }  


    
    let items = JSON.parse(localStorage.getItem('items'))
    let itemEliminar = items.findIndex(element=> element.id === producto.id)
    items.splice(itemEliminar,1)

    console.log(items);


    localStorage.setItem("items", JSON.stringify(items));

}  
 const sumarCarrito = objeto =>{


    const producto = {
        id:  objeto.querySelector('.clase-producto').textContent
 
    }  

    let items = JSON.parse(localStorage.getItem('items'))
 
    for (let i = 0; i < items.length; i++) {
        
        if (items[i].id== producto.id) {
            items[i].cantidad++

        }
    }

    localStorage.setItem("items", JSON.stringify(items));
    
    
 } 
 const restarCarrito = objeto =>{


    const producto = {
        id:  objeto.querySelector('.clase-producto').textContent

    }  

    let items = JSON.parse(localStorage.getItem('items'))

    for (let i = 0; i < items.length; i++) {
        
        if (items[i].id== producto.id) {

            if (items[i].cantidad>1) {
                items[i].cantidad--
            }
            
        }
    }

    localStorage.setItem("items", JSON.stringify(items));
 } 



templateFooter.getElementById('precioTotal').textContent = calcularPrecio();
templateFooter.getElementById('subTotal').textContent = calcularPrecio();
const clone = templateFooter.cloneNode(true)
footer.appendChild(clone)







    




