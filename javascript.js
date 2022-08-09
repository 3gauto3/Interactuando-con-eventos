class Libros {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }
}

const libro1 = new Libros("La invitada", "Jennifer McMahon", "Terror")
const libro2 = new Libros("La máquina del tiempo", "Herbert George", "Ficción")
const libro3 = new Libros("Los mares del Sur", "Manuel Vázquez Montalbán", "Policíaco", )
const libro4 = new Libros("Me llamo Adou", "Nicolás Castellano", "Bélico", )
const libro5 = new Libros("Santa Biblia", "Reina Valera", "Religioso")
const libro6 = new Libros("El camino del libertario", "Javier Milei", "Político")
const libro7 = new Libros("Océanos sin ley", "Ian Urbina", "Periodismo")
const libro8 = new Libros("Stray Dogs", "Sdipson Rodríguez", "Cómic")
const libro9 = new Libros("Nunca Jamñas", "Melisa de la Cruz", "Infantil")

const losLibros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9]

const divLibros = document.getElementById("divLibros")

losLibros.forEach(libro => {
    divLibros.innerHTML += `
        <div class="tarjeta">
<p>Titulo: ${libro.titulo}<p/>
<p>Autor: ${libro.autor}<p/>
<p>Género: ${libro.genero}<p/>
<div/>
`
})

document.getElementById('libro3').remove()

const usuarios = []
class Usuario {
    constructor(nombreUsuario, correo, clave) {
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.clave = clave;
    }
}

const formUsuario = document.getElementById("formUsuario")

formUsuario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    let nombreUsuario = document.getElementById("nombreUsuario").value
    let correo = document.getElementById("correo").value
    let clave = document.getElementById("clave").value
    const usuario = new Usuario (nombreUsuario, correo, clave)
    usuarios.push(usuario)
    console.log(nombreUsuario, correo, clave)
    formUsuario.reset()
})