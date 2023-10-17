
// eventos botones
var btnCompra=document.getElementById("btnCompra");
var btnOrador=document.getElementById("btnOrador");

var irACompras=function()
{
    window.open("compraTickets.html","_top");
}
var irAOrador=function()
{
    window.open("index.html#secOrador","_top");
}

btnCompra.addEventListener("click",irACompras);
btnOrador.addEventListener("click",irAOrador);




