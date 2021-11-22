let urlfeliz = "https://ih1.redbubble.net/image.1389840840.2329/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
let urltriste ="https://image.flaticon.com/icons/png/512/51/51850.png"
let imgHtml = document.querySelector("#imagencara")
let nota1 = prompt("Ingrese su primera nota")
let nota2 = prompt("Ingrese su segunda nota")
let nota3 = prompt("Ingrese su tercera nota")
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+p)
if (p >="6"){
    imgHtml.src = urlfeliz
}else{
    imgHtml.src = urltriste
}