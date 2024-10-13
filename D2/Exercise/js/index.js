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
        Talla: ${PRODUCTOS[productoComprado].talla.toUpperCase()}
      </div> 
      <div>
        Descuento: ${descuento()}$
      </div>
      <div>
        <strong> Total: ${calcularDescuento()}$ </strong>
      </div>
      <img src="img/${PRODUCTOS[productoComprado].imagen}" alt="${PRODUCTOS[productoComprado][0]}">
    </section>
`


function descuento(){
  return PRODUCTOS[productoComprado].precio * DESCUENTO;
}

function calcularDescuento(){
  precioDescuento = PRODUCTOS[productoComprado].precio * (1 - DESCUENTO);
  return precioDescuento
}