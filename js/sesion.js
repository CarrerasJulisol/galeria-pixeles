// Comprobar si hay sesion iniciada
    //pregunta si hay una sesion abierta
    const sesion = sessionStorage.getItem('sesion')
    console.log(sesion)
    if(sesion === 'true') {
    // Contenido del HEADER
        const Header = document.getElementById('header')
        const contHeader = document.createElement('div')
        contHeader.classList.add('cont-menu')
        contHeader.classList.add('abajo')
        contHeader.innerHTML = `
            <div class="titulo en-header" id="titulo">
                <h1 class="titulo-estilo estilo-en-header" id="estilo-titulo"><span><img src="img/nube-rosa.png" class="nube nube-header" id="nube"></span> Pixel Gallery</h1>
            </div>
            <nav class="menu visible-menu" id="menu">
                <button id="boton" class="boton-menu"><img src="img/menu-icon.png" alt="menu" class="icon-menu"></button>
                <ul class="partes-menu">
                    <li><a href="perfil.html" class="seccion-link" id="mi-perfil">Mi perfil</a></li>
                    <li><a href="index.html#s-uno" class="seccion-link">Galeria</a></li>
                    <li><a href="index.html#s-dos" class="seccion-link">Artista</a></li>
                    <li><a href="index.html#s-tres" class="seccion-link">¿Qué es Pixel Art?</a></li>
                </ul>
            </nav>
        `
    Header.appendChild(contHeader)
}else{
    // Contenido del HEADER
    const Header = document.getElementById('header')
    const contHeader = document.createElement('div')
    contHeader.classList.add('cont-menu')
    contHeader.classList.add('abajo')
    contHeader.innerHTML = `
        <div class="titulo en-header" id="titulo">
            <h1 class="titulo-estilo estilo-en-header" id="estilo-titulo"><span><img src="img/nube-rosa.png" class="nube nube-header" id="nube"></span> Pixel Gallery</h1>
        </div>
        <nav class="menu visible-menu" id="menu">
            <button id="boton" class="boton-menu"><img src="img/menu-icon.png" alt="menu" class="icon-menu"></button>
            <ul class="partes-menu">
            <li><a href="iniciar-sesion.html" class="seccion-link">Iniciar sesión</a></li>
            <li><a href="registro.html" class="seccion-link">Registrarme</a></li>
                <li><a href="index.html#s-uno" class="seccion-link">Galeria</a></li>
                <li><a href="index.html#s-dos" class="seccion-link">Artista</a></li>
                <li><a href="index.html#s-tres" class="seccion-link">¿Qué es Pixel Art?</a></li>
            </ul>
        </nav>
    `
Header.appendChild(contHeader)
    //window.location = "registro.html"
}

//boton menu para que sea visible
$('#boton').on('click', () => {
    $('.partes-menu').toggleClass('desplegable-visible')
})

//click en logo y nombre para volver a inicio 
$('#titulo').on('click', ()=>{
    window.location = "index.html"
})

//FORMULARIO DE REGISTRO

/* para que solamente tome los correo electronicos validos */
const valido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

$(document).ready( () => {
    $("#confirmar").on('click', () => {
        const usuario = $('#usuario').val()
        const email = $('#email').val()
        const password = $('#password').val()
        const confirmarPass = $('#confirmar-pass').val()
        if(usuario.length < 3) {
            console.log("error")
            $('#usuario').addClass('error')
            $('#error-nombre').addClass('error-visible')
        }else{
            console.log("pasa")
            $('#usuario').removeClass('error')
            $('#error-nombre').removeClass('error-visible')
        }
        if(email === "" || !valido.test(email)){
            console.log("error")
            $('#email').addClass('error')
            $('#error-correo').addClass('error-visible')
        }else{
            console.log("pasa")
            $('#email').removeClass('error')
            $('#error-correo').removeClass('error-visible')
        }
        if(password.length < 4 ) {
            console.log("error")
            $('#password').addClass('error')
            $('#error-contra').addClass('error-visible')
        }else {
            if(password !== confirmarPass) {
            console.log("error")
            $('#password').addClass('error')
            $('#confirmar-pass').addClass('error')
            $('#error-coinciden').addClass('error-visible')
            $('#error-contra').removeClass('error-visible')
            }else{
                console.log("pasa")
                $('#password').removeClass('error')
                $('#confirmar-pass').removeClass('error')
                $('#error-coinciden').removeClass('error-visible')
                console.log('Usuario creado con exito')
                const userRegistrado = { 'user': usuario, 'email': email, 'contraseña': password, 'img': "img/icono-perfil.png", 'meGustas': [] }
                localStorage.setItem('user registrado', JSON.stringify(userRegistrado))
                setInterval(function(){
                    window.location = "iniciar-sesion.html"
                },500);
            }
        }
    })
})

//USUARIO de prueba
const userAdmin = { 'user': "admin", 'email': "mail@prueba.com", 'contraseña': "1234", 'img': "img/icono-perfil-A.png", 'meGustas': [] }
localStorage.setItem('user admin', JSON.stringify(userAdmin))

//FORMULARIO DE INICIO DE SESION 
$(document).ready( () => {
    $("#entrar").on('click', () => {
        // USUARIO RECIEN CREADO
        const datoRegis = localStorage.getItem('user registrado')
        const usuarioRegis = JSON.parse(datoRegis)

        // USUARIO ADMIN
        const datoAdmin = localStorage.getItem('user admin')
        const usuarioAdmin = JSON.parse(datoAdmin)

        if( ($('#user').val() === usuarioAdmin.user) & ($('#contraseña').val() === usuarioAdmin.contraseña) || ($('#user').val() === usuarioRegis.user) & ($('#contraseña').val() === usuarioRegis.contraseña)) {
            const sesionIniciada = 'true'
            const usuarioAbierto = $('#user').val()
            sessionStorage.setItem('usuario abierto', usuarioAbierto)
            sessionStorage.setItem('sesion', sesionIniciada)
            console.log('Sesión iniciada con exito')
            $('#user').removeClass('error')
            $('#contraseña').removeClass('error')
            $('#error-nombre').removeClass('error-visible')
            setInterval(function(){
                window.location = "index.html"
            },500);
        }else{
            //error
            console.log("error")
            $('#user').addClass('error')
            $('#contraseña').addClass('error')
            $('#error-nombre').addClass('error-visible')
        }
    })
})

//comprobar que usuario esta abierto

if(sesion === 'true') {
    const usuario = sessionStorage.getItem('usuario abierto')
    console.log(usuario)
    if (usuario === 'admin' ) {
        const datoAdmin = localStorage.getItem('user admin')
        const usuarioAdmin = JSON.parse(datoAdmin)
        crearPerfil(usuarioAdmin)
    }else{
        //quiere decir que usuario es igual
        // al usuario recien creado
        const datoRegis = localStorage.getItem('user registrado')
        const usuarioRegis = JSON.parse(datoRegis)
        crearPerfil(usuarioRegis)
    }
}


// contenido de MI PERFIL
function crearPerfil(perfilUser) {
    const perfil = document.getElementById('perfil')
    const contenidoPerfil = document.createElement('div')
    contenidoPerfil.classList.add('perfil-cont')
    contenidoPerfil.innerHTML = `
        <div class="nombre-img">
            <img src="${perfilUser.img}" alt="Foto de perfil" class="foto-perfil">
        </div>
        <div class="estilo-usuario">
            <h2>${perfilUser.user}</h2>
            <button class="boton-cerrar-s" id="cerrar-sesion">
                <img src="img/cerrar-sesion.png" alt="Click para cerrar sesión" class="ico-cerrar">
            </button>
        </div>
        <hr>
        <div>
            <h3 class="img-mg">Imagenes que me gustaron:</h3>
        <div id="lista-like"></div>
        </div>
    `
    perfil.appendChild(contenidoPerfil)
}

// cerrar sesion desde perfil
$('#cerrar-sesion').on('click', () => {
    sessionStorage.setItem('sesion', 'false')
    window.location = "index.html"
})

//sacar menu 
$(".registro").on("click", () => {
    $('.partes-menu').removeClass('desplegable-visible')
})


// ver las imagenes a las que se le puso me gusta
let listaMG =  JSON.parse(localStorage.getItem('ListaMG'))
console.log(listaMG)

listaMG.forEach(imgLike => {
    const listalikes = document.getElementById('lista-like')
    const contenidoLikes = document.createElement('div')
    contenidoLikes.classList.add("tam-img-mg")
    contenidoLikes.innerHTML = `
       <img src="${imgLike.img}" alt="${imgLike.descripcion}" class="img-mg">
       <p class="estilo-text">${imgLike.nombre}</p>
    `
    listalikes.appendChild(contenidoLikes)
});

/*function verMG(listaMG) {
    
}

verMG(listaMG)*/

//footer con redes sociales
const footer = document.getElementById("footer")
const contFooter = document.createElement("div")
contFooter.innerHTML = `
            <div class="contenedor-redes">
                <p><a href="https://www.instagram.com/pixeleotodo/"><img src="img/instagram.png" alt="Instagram" class="icon-redes"></a></p>
                <p><a href="https://www.facebook.com/pixeleotodo/"><img src="img/facebook.png" alt="Facebook" class="icon-redes"></a></p>
                <p><a href="https://www.twitter.com/pixeleotodo/"><img src="img/twitter.png" alt="Twitter" class="icon-redes"></a></p>
            </div>
            <div class="texto-footer">
                <span>pixeleotodo23@gmail.com</span>
                <span></span>pixeleotodo © Todos los derechos reservados.</span>
            </div>
`
footer.appendChild(contFooter)