

    var iptCantidad=document.getElementById("iptCantidad");
    var selCategoria=document.getElementById("selCategoria");
    var alTotalPago=document.getElementById("alTotalPago");
    var btnResumen=document.getElementById("btnResumen");
    var btnBorrar=document.getElementById("btnBorrar");

var sumarTickets= function()
{
    let cantidad=iptCantidad.value;
    if(cantidad==0) return;
    let categoria=selCategoria.options[selCategoria.selectedIndex].value;
    let descuento=(cantidad*200)*(categoria/100);
    alTotalPago.innerText="Total a pagar: $ "+ ((cantidad*200)-descuento);
}

var borrarDatos=function()
{
  iptCantidad.value=0;
  selCategoria.selectedIndex=0;
  alTotalPago.innerText="Total a pagar: $ "
}

btnBorrar.addEventListener("click",borrarDatos)
btnResumen.addEventListener("click",sumarTickets);
