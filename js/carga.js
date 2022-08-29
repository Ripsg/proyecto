// const templateFooter = document.getElementById('template-footer').contentd
// const templateCarrito = document.getElementById('template-carrito').content
const principio = document.getElementById('principio')
const camisetas = document.getElementById('camisetas')
const oufit = document.getElementById('oufit')
const buzos = document.getElementById('buzos')
const carrousel1 = document.getElementById('carrousel1')
const carrousel2 = document.getElementById('carrousel2')
const templateCard = document.getElementById('template-card-col3').content
const templateCard4 = document.getElementById('template-card-col4').content

const fragment = document.createDocumentFragment()

let carrito= {}
 
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
principio.addEventListener('click', e =>{
        addCarrito(e)
})

camisetas.addEventListener('click', e =>{
    addCarrito(e)
} )
oufit.addEventListener('click', e =>{
    addCarrito(e)
} )
buzos.addEventListener('click', e =>{
    addCarrito(e)
} )
carrousel1.addEventListener('click', e =>{
    addCarrito(e)
} )
carrousel2.addEventListener('click', e =>{
    addCarrito(e)
} )

const fetchData = async () => {
    try {
        const res = await fetch('../json/items.json')
        const data = await res.json()
        
        pintarInicio(data)

    } catch (error) {
        console.log(error);
    }
}

const pintarInicio = data  =>{
   

        data.forEach(producto =>{
            if (producto.id<7) {

                addInfo4col(producto)
                principio.appendChild(fragment)
            }
                
            else if ((producto.id >=7 && producto.id<11)) {
    

                addInfo3col(producto)
                camisetas.appendChild(fragment)
            }
            else if (producto.id >=11 && producto.id<15) {
    

                addInfo3col(producto)
                oufit.appendChild(fragment)
            }
            else if (producto.id >=15 && producto.id<19) {
    

                addInfo3col(producto)
                buzos.appendChild(fragment)
            }
            else if (producto.id >=19 && producto.id<22) {
    
                addInfo4col(producto)
                carrousel1.appendChild(fragment)
            }
            else if (producto.id >=22 && producto.id<25) {
    
                addInfo4col(producto)
                carrousel2.appendChild(fragment)
            }

        })
    
        
}



const addCarrito = e =>{
    if (e.target.classList.contains('add-to-cart')) {

        console.log(e.target.parentElement);
        setCarrito(e.target.parentElement)
    
    }
    e.stopPropagation()
} 

const esProductoIgual = (producto1 , producto2) =>{


    console.log(producto1.id === producto2.id);
    return producto1.id === producto2.id;
    
}



const setCarrito = objeto =>{

    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.add-to-cart').dataset.id,
        title: objeto.querySelector('p').textContent,
        precio: objeto.querySelector('h2').textContent,
        imagen: objeto.querySelector('img').getAttribute("src"),
        cantidad: 1


    }  

    console.log(producto)


    let  productosCarrito = [];
    productosCarrito= JSON.parse(localStorage.getItem("items")) || [];
    
   
   
    if (productosCarrito.length==0) {
        productosCarrito.push(producto)
        
    }
    else{

        let productoAdd = false;
        productosCarrito.forEach(element => {
            if (esProductoIgual(element,producto)) {
                element.cantidad++;
                productoAdd = true;
    
                
            }    
        });
        if(!productoAdd){
                
            productosCarrito.push(producto)
        } 

    }

    
    
    localStorage.setItem("items", JSON.stringify(productosCarrito))
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


