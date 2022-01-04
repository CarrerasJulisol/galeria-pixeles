console.log('Inicio')
// Comprobar si hay sesion iniciada
    //pregunta si hay una sesion abierta
const sesion = sessionStorage.getItem('sesion')
console.log(sesion)
if(sesion === 'true') {
    // Contenido del HEADER con sesion iniciada
    const Header = document.getElementById('header')
    const contHeader = document.createElement('div')
    contHeader.classList.add('cont-menu')
    contHeader.innerHTML = `
        <div class="titulo" id="titulo">
            <h1 class="titulo-estilo" id="estilo-titulo"><span><img src="img/nube-rosa.png" class="nube" id="nube"></span> Pixel Gallery</h1>
        </div>
        <nav class="menu" id="menu">
            <button id="boton" class="boton-menu"><img src="img/menu-icon.png" alt="menu" class="icon-menu"></button>
            <ul class="partes-menu">
                <li><a href="perfil.html" class="seccion-link" id="mi-perfil">Mi perfil</a></li>
                <li><a href="#s-uno" class="seccion-link">Galeria</a></li>
                <li><a href="#s-dos" class="seccion-link">Artista</a></li>
                <li><a href="#s-tres" class="seccion-link">¿Qué es Pixel Art?</a></li>
                <li class="seccion-link" id="cerrar-sesion">Cerrar sesión</li>
            </ul>
        </nav>
    `
    Header.appendChild(contHeader)

    $('#mi-perfil').on('click', () => {
        console.log('mi perfil')
    })
    //click para cerrar sesion desde el menu de la derecha
    $('#cerrar-sesion').on('click', () => {
        sessionStorage.setItem('sesion', 'false')
        window.location = "index.html"
    })
}else{
    // Contenido del HEADER sin sesion iniciada
    const Header = document.getElementById('header')
    const contHeader = document.createElement('div')
    contHeader.classList.add('cont-menu')
    contHeader.innerHTML = `
        <div class="titulo" id="titulo">
            <h1 class="titulo-estilo" id="estilo-titulo"><span><img src="img/nube-rosa.png" class="nube" id="nube"></span> Pixel Gallery</h1>
        </div>
        <nav class="menu" id="menu">
            <button id="boton" class="boton-menu"><img src="img/menu-icon.png" alt="menu" class="icon-menu"></button>
            <ul class="partes-menu">
                <li><a href="iniciar-sesion.html" class="seccion-link">Iniciar sesión</a></li>
                <li><a href="registro.html" class="seccion-link">Registrarme</a></li>
                <li><a href="#s-uno" class="seccion-link">Galeria</a></li>
                <li><a href="#s-dos" class="seccion-link">Artista</a></li>
                <li><a href="#s-tres" class="seccion-link">¿Qué es Pixel Art?</a></li>
            </ul>
        </nav>
    `
    Header.appendChild(contHeader)
}

// Header que se achica al hacer scroll


//Animacion con scroll
window.addEventListener('scroll', () => {
    // achicar o agrandar el header
    const header = document.getElementById('header')
    header.classList.toggle('abajo', window.scrollY>0)
    const titulo = document.getElementById('titulo')
    titulo.classList.toggle('en-header', window.scrollY>0)
    const estiloTitulo = document.getElementById('estilo-titulo')
    estiloTitulo.classList.toggle('estilo-en-header', window.scrollY>0)
    const nube = document.getElementById('nube')
    nube.classList.toggle('nube-header', window.scrollY>0)
    const secciones = document.getElementById('s-uno')
    secciones.classList.toggle('desplegar', window.scrollY>0)
    //hace visible el boton de menu
    const menuVisible = document.getElementById('menu')
    menuVisible.classList.toggle('visible-menu', window.scrollY>0)
})

//array ded imagenes
const imagenes = [
    {
        id: 0,
        nombre: "Demonito",
        img: "img/1.jpg",
        fecha: "27/11/2021",
        descripcion: "En esta imagen podemos ver la fase uno de 'Demonito'. En ella podemos ver su adorable sonrisa.",
        like: 4
    },
    {
        id: 1,
        nombre: "Demonio",
        img: "img/2.jpg",
        fecha: "27/11/2021",
        descripcion: "En esta imagen 'Demonito' ya se encuentra en su fase de Demonio",
        like: 2
    },
    {
        id: 2,
        nombre: "Demoniaco",
        img: "img/3.jpg",
        fecha: "27/11/2021",
        descripcion: "'Demonito' dejó atrás su niñez para ser el demonio más maniaco de todos.",
        like: 6
    },
    {
        id: 3,
        nombre: "Jinx chikita",
        img: "img/4.jpg",
        fecha: "22/11/2021",
        descripcion: "Apreciamos a Jinx en su modo chibi con su mini arma cohete favorita.",
        like: 11
    },
    {
        id: 4,
        nombre: "Vi chikita",
        img: "img/5.jpg",
        fecha: "24/11/2021",
        descripcion: "Vi ",
        descripcion: "Vi del juego League of Legends version chibi.",
        like: 7
    },
    {
        id: 5,
        nombre: "Ekko chikito",
        img: "img/6.jpg",
        fecha: "26/11/2021",
        descripcion: "Ekko del juego League of Legends con su aspecto Arcane en chibi.",
        like: 10
    },
    {
        id: 6,
        nombre: "Caitlyn",
        img: "img/7.jpg",
        fecha: "20/11/2021",
        descripcion: "Una parte de dos, Caitlyn en Arcane junto a...",
        like: 7
    },
    {
        id: 7,
        nombre: "Vi",
        img: "img/8.jpg",
        fecha: "19/11/2021",
        descripcion: "Una parte de dos, Vi en Arcane junto a...",
        like: 9
    }
]

// Tarjetas: contenido + animacion al hacer click se da vuelta
const Gallery = document.getElementById('contenedor-tarjeta')

imagenes.forEach((img) => {
    const galeria = document.createElement('div')
    galeria.classList.add('tarjeta')
   // galeria.setAttribute('id', `tarjeta${img.id}`)
    galeria.innerHTML = `
    <div class="fondo-abrir" id="div-boton${img.id}">
        <button class="abrir-img" id="boton${img.id}">Abrir</button>
    </div>
    <div id="tarjeta${img.id}" class="animacion">
        <div class="estilo-tarjeta frente">
            <img src=" ${img.img}" alt="${img.nombre}" class="tam">
        </div>
        <div class="estilo-tarjeta dorso">
            <div class="texto-tarjeta" id="texto-tarjeta">
                <ul class="info-img">
                    <li>Nombre: ${img.nombre}</li>
                    <li>Fecha: ${img.fecha}</li>
                    <li id="${img.id}mg-tarjeta">Me gusta: ${img.like}</li>
                </ul>
            </div>
        </div>
    </div>`

    Gallery.appendChild(galeria)

    const tarjeta = document.getElementById(`tarjeta${img.id}`)
    const boton = document.getElementById(`div-boton${img.id}`)
    const dorso = document.getElementById(`boton${img.id}`)

    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('al-girar')
        boton.classList.toggle('girar-boton')
        dorso.classList.toggle('dorso-boton')
    })
})


//boton menu para que sea visible
$('#boton').on('click', () => {
    $('.partes-menu').toggleClass('desplegable-visible')
})

//click en logo y nombre para volver a inicio 
$('#titulo').on('click', ()=>{
    window.location = "index.html"
})

//contenido de la seccion 2: artista
const seccionDos = document.getElementById('s-dos')
const contSeccion2 = document.createElement('div')
contSeccion2.classList.add('contenedor-artista')
contSeccion2.innerHTML = `
    <div>
        <p class="titulo-artista">Artista:</p>
        <h2 class="nombre-artista">pixeleotodo</h2>
        </div>
    <div class="contenedor-info">
    <p>
        <span style="font-size: 25px">María</span> - 24 de Abril 2001 - Argentina
    </p>
    </div>
    <p class="frase">La vida en pixeles</p>
    <img src="img/nube-rosa.png" alt="" class="deco-nube">
`
seccionDos.appendChild(contSeccion2)


//contenido de la seccion 3: que es pixel art
const seccionTres = document.getElementById("s-tres")
const contSeccion3 = document.createElement("div")
contSeccion3.classList.add("contenedor-preg")
contSeccion3.innerHTML = `
    <h3 class="pregunta">¿Qué es pixel art?</h3>
    <p class="parrafo">Es en una disciplina artística que utiliza una computadora
        y diversos programas gráficos de edición de imágenes 
        rasterizadas para la creación de obras de arte digital,
        las cuales son realizadas pixel a pixel.
    </p>
`
seccionTres.appendChild(contSeccion3)

const listaObj = []
let imgMG = []
//Imagenes en grande al hacer click en abrir
imagenes.forEach((img) => {
    const contenido = document.getElementById('img-grande')
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.setAttribute('id', `modal${img.id}`)
    modal.innerHTML= `
            <div class="cont-img" id="cerrar${img.id}">
                <img src="${img.img}" alt="${img.nombre}" class="img-modal">
            </div>
            <div class="descripcion-modal">
                <h2 class="st-titulo">${img.nombre}</h2>
                <p class="st-desc">${img.descripcion}</p>
                <p id="mg-abierto${img.id}">${img.like} personas les gusta - <button id="like${img.id}" class="boton-mg">Me gusta</button></p>
            </div>
        `
    contenido.appendChild(modal)

    //ABRIR Y CERRAR IMAGENES GRANDES
    $(`#boton${img.id}`).on('click', ()=> {
        $(`#modal${img.id}`).toggleClass('modal-visible')
    })

    $(`#cerrar${img.id}`).on('click', ()=> {
        $(`#modal${img.id}`).toggleClass('modal-visible')
    })

    //BOTON para poner ME GUSTA
    let like = `${img.like}`
    console.log(like)

    function botonLIKE() {
        let mg = like
        console.log(mg)
        let nuevosMG = parseInt(mg) + 1
        console.log(nuevosMG)
        //actualizar los likes en el array
        imagenes[`${img.id}`].like = nuevosMG
        console.log(imagenes)
        
        //funcion de refrescar los likes del dorso de la tarjeta
        function refrescarTarj() {
            document.getElementById(`${img.id}mg-tarjeta`).innerHTML = `<li id="${img.id}mg-tarjeta">Me gusta: ${img.like}</li>`
        }
        //funcion de refrescar los likes de las imagenes en grande
        function refrescarImg() {
            document.getElementById(`mg-abierto${img.id}`).innerHTML = `<p id="mg-abierto${img.id}">${img.like} personas les gusta - <button id="dislike${img.id}" class="boton-mg">Ya no me gusta</button></p>`
        }

        refrescarTarj()
        refrescarImg()
        
        //Boton de NO ME GUSTA
        $(`#dislike${img.id}`).on('click', () => {
                let mg = like
                console.log(mg)
                let nuevosMG = parseInt(mg)
                console.log(nuevosMG)
                //actualizar los likes en el array
                imagenes[`${img.id}`].like = nuevosMG
                console.log(imagenes)
                refrescarTarj()
                document.getElementById(`mg-abierto${img.id}`).innerHTML = `<p id="mg-abierto${img.id}">${img.like} 
                personas les gusta - <button id="like${img.id}" class="boton-mg">Me gusta</button></p>`

                const datoAdmin = localStorage.getItem('user admin')
                const usuarioAdmin = JSON.parse(datoAdmin)
                // sacar imagenes de la lista de me gustas
                function sacarLikes() {
                    const obj = localStorage.getItem('obj')
                    console.log(obj)
                    let posicionImg = usuarioAdmin.meGustas.indexOf(obj.id) 
                    console.log(posicionImg)
                }

                sacarLikes()

                if(sesion === 'true') {
                    const usuarioA = sessionStorage.getItem('usuario abierto')
                    if (usuarioA === 'admin' ) {
                        
                        localStorage.setItem('ListaMG', JSON.stringify(imgMG))
                        console.log(imgMG)
                        //sacar las imagenes de la lista de Me gustas
                        function eliminarLikes() {
                            const obj = localStorage.getItem('obj')
                            console.log('obj')
                            console.log(obj)
                            imgMG.splice(obj)
                        }
                        eliminarLikes()
                        
                    }

                    $(`#like${img.id}`).on('click', ()=> {
                        console.log('mg clickeado')
                        botonLIKE()
                    })
                }
        })
    }
    
    
    
    $(`#like${img.id}`).on('click', ()=> {
        console.log('mg clickeado')
        botonLIKE()
        if(sesion === 'true') {
            const usuarioA = sessionStorage.getItem('usuario abierto')
            if (usuarioA === 'admin' ) {
                
                localStorage.setItem('ListaMG', JSON.stringify(imgMG))
                console.log(imgMG)
                // agregar las imagenes que le gustaron a una lista
                function agregarLikes() {
                    //agregar imagen a lista de me gusta
                    imgMG.push(imagenes[`${img.id}`])
                    console.log('lista likes')
                    console.log(imgMG)
                    //actualizar datos del perfil con los nuevos likes
                    localStorage.setItem('ListaMG', JSON.stringify(imgMG))
                    const obj = imgMG.find((elemento) => {
                        let elementoID = elemento.id
                        let ID = `${img.id}`
                        const resultado = elementoID == ID
                        console.log(resultado)
                        return resultado
                    })
                    // listaObj definido afuera del foreach
                    console.log('listaObj')
                    console.log(listaObj)
                    listaObj.push(obj)
                    localStorage.setItem('obj', JSON.stringify(listaObj))
                }
                agregarLikes()
                
            }
        }
    })
        
})

//sacar menu
$("#s-uno").on("click", () => {
    $('.partes-menu').removeClass('desplegable-visible')
})

$("#s-dos").on("click", () => {
    $('.partes-menu').removeClass('desplegable-visible')
})

$("#s-tres").on("click", () => {
    $('.partes-menu').removeClass('desplegable-visible')
})

$("#footer").on("click", () => {
    $('.partes-menu').removeClass('desplegable-visible')
})

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