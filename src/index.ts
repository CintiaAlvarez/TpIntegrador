// "use strict";

let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let aplicarDescuento = document.getElementById("descuento");
let detalle = document.getElementById("detalle");
let total = document.getElementById("total");
let vaciarInputs = document.getElementById("vaciar");
let mensajeDescuento = document.getElementById("mensaje");
let productos: string[] = [];
let precios: number[] = [];
let sumaCompra: number = 0;
let descuento: number = 0;

const agregarAlCarrito = () => {
  sumaCompra = 0;
  productos.push(producto.value);
  precios.push(Number(precio.value));

  detalle.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;

  producto.value = "";
  precio.value = "";
  for (let i: number = 0; i < precios.length; i++) {
    sumaCompra += Number(precios[i]);
  }
  total.innerHTML = sumaCompra;
};

const vaciarDetalleCompra = () => {
  detalle.innerHTML = "";
  total.innerHTML = "";
  mensajeDescuento.innerHTML = "";
};
const condicionDescuento = () => {
  descuento = 0;
  if (sumaCompra > 2500) {
    descuento = sumaCompra * 0.9;
    mensajeDescuento.innerHTML =
      "Usted obtuvo un descuento de 10%, el total es de: $" + descuento;
  } else {
    descuento = sumaCompra;
    mensajeDescuento.innerHTML = "Usted no obtuvo descuento";
  }
};

agregar.addEventListener("click", agregarAlCarrito);
vaciarInputs.addEventListener("click", vaciarDetalleCompra);
aplicarDescuento.addEventListener("click", condicionDescuento);
