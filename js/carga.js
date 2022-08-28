// const templateFooter = document.getElementById('template-footer').content
// const templateCarrito = document.getElementById('template-carrito').content
const principio = document.getElementById('principio')
const camisetas = document.getElementById('camisetas')
const productoCarrito = document.getElementById('productoCarrito')
const footerCarrito = document.getElementById('footerCarrito')
const oufit = document.getElementById('oufit')
const buzos = document.getElementById('buzos')
const carrousel1 = document.getElementById('carrousel1')
const carrousel2 = document.getElementById('carrousel2')
const templateCard = document.getElementById('template-card-col3').content
const templateCard4 = document.getElementById('template-card-col4').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()


let carrito= {}
 
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})



    principio.addEventListener('click', e =>{
        addCarrito(e)
    })

const fetchData = async () => {
    try {
        const res = await fetch('../json/items.json')
        const data = await res.json()
        
        pintarInicio(data)
        // pintarCamisetas(data)
        // pintarOufit(data)
        // pintarBuzos(data)
        // pintarCarrousel(data)
        // pintarCarrouse2(data)
    

    } catch (error) {
        console.log(error);
    }
}

const pintarInicio = data  =>{
   

        data.forEach(producto =>{
            if (producto.id<7) {

                addInfo4col(producto)
                principio.appendChild(fragment)}
                
                else if ((producto.id >=7 && producto.id<11)) {
    

                    addInfo3col(producto)
                    camisetas.appendChild(fragment)}
                    else if (producto.id >=11 && producto.id<15) {
    

                        addInfo3col(producto)
                        oufit.appendChild(fragment)}
                        else if (producto.id >=15 && producto.id<19) {
    

                            addInfo3col(producto)
                            buzos.appendChild(fragment)}
                            else if (producto.id >=19 && producto.id<22) {
    
                                addInfo4col(producto)
                                carrousel1.appendChild(fragment)}
                                else if (producto.id >=22 && producto.id<25) {
    
                                    addInfo4col(producto)
                                    carrousel2.appendChild(fragment)
                                }


    
        }   )
    
        // principio.appendChild(fragment)
        // camisetas.appendChild(fragment)
        // oufit.appendChild(fragment)
        // buzos.appendChild(fragment)
        // carrousel1.appendChild(fragment)
        // carrousel2.appendChild(fragment)
}


// const pintarCamisetas = data  =>{
    
    
//     data.forEach(producto =>{
//         if ((producto.id >=7 && producto.id<11)) {
    

//             addInfo3col(producto)}

//     }   )

//     camisetas.appendChild(fragment)

// }
// const pintarOufit = data  =>{
    
    
//     data.forEach(producto =>{
//         if (producto.id >=11 && producto.id<15) {
    

//             addInfo3col(producto)}
//     }   )

//     oufit.appendChild(fragment)
   

// }
// const pintarBuzos = data  =>{
    
    
//     data.forEach(producto =>{
//         if (producto.id >=15 && producto.id<19) {
    

//         addInfo3col(producto)}
//     })

//     buzos.appendChild(fragment)
   

// }
// const pintarCarrousel = data  =>{
    
    
//     data.forEach(producto =>{
//         if (producto.id >=19 && producto.id<22) {
    
//        addInfo4col(producto)}

//     })

//     carrousel1.appendChild(fragment)
   
// }
// const pintarCarrouse2 = data  =>{
    
    
//     data.forEach(producto =>{
//         if (producto.id >=22 && producto.id<25) {
    
//             addInfo4col(producto)
//         }

//     })

//     carrousel2.appendChild(fragment)
   
// }
const addCarrito = e =>{
    if (e.target.classList.contains('add-to-cart')) {

        
        setCarrito(e.target.parentElement)
        
        
    }
    e.stopPropagation()


} 

const setCarrito = objeto =>{

    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.add-to-cart').dataset.id,
        title: objeto.querySelector('p').textContent,
        precio: objeto.querySelector('h2').textContent,
        cantidad: 1


    }  
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
        
    }

    carrito[producto.id]={...producto} 
    pintarCarrito()

}  
const pintarCarrito = () =>{
    console.log(carrito)
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('cart_product').content = producto.thumbnailUrl
        templateCarrito.querySelector('cart_product').content = producto.thumbnailUrl  
        templateCarrito.querySelector('cart_product').content = producto.thumbnailUrl  
        templateCarrito.querySelector('cart_product').content = producto.thumbnailUrl  
        templateCarrito.querySelector('cart_product').content = producto.thumbnailUrl  

    
    })


}  


const addInfo4col = data=>{
    {

    templateCard4.querySelector('h2').textContent = data.precio
    templateCard4.querySelector('p').textContent = data.title
    templateCard4.querySelector('img').setAttribute("src",data.thumbnailUrl)
    templateCard4.querySelector('a').dataset.id =  data.id

    const clone = templateCard4.cloneNode(true)
    fragment.appendChild(clone)}

}
const addInfo3col = data=>{
    {

    templateCard.querySelector('h2').textContent = data.precio
    templateCard.querySelector('p').textContent = data.title
    templateCard.querySelector('img').setAttribute("src",data.thumbnailUrl)
    templateCard.querySelector('a').dataset.id =  data.id

    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)}
}


