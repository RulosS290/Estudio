let usuario="Jab";
let productoComprado=1;
const DESCUENTO=0.1;
let precioDescuento;
const PRODUCTOS=[{
    producto:"Pantalón",
    precio:10,
    talla:"m",
    imagen:"pantalon.jpg"
  },{
    producto:"Gorra",
    precio:5,
    talla:"s",
    imagen:"gorra.jpg"
  }
];

document.querySelector("body").innerHTML=`
<h1>${usuario}

  </h1>
    <section class="caja">
      <div>
        Producto: ${PRODUCTOS[productoComprado].producto} (${PRODUCTOS[productoComprado].precio}$)
      </div>
      <div>
        Talla: ${PRODUCTOS[productoComprado].talla}
      </div> 
      <div>
        Descuento: ${descuento()}$
      </div>
      <div>
        <strong> Total: ${precioTotal()}$ </strong>
      </div>
      <img src="img/${PRODUCTOS[productoComprado].imagen}" alt="PRODUCTO">
    </section>
`


function descuento(){
  return PRODUCTOS[productoComprado].precio * DESCUENTO;
}

function precioTotal(){
  precioDescuento = PRODUCTOS[productoComprado].precio * (1 - DESCUENTO);
  return precioDescuento
}