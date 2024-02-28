document.body.style.margin = 0;

let user_name = "José Prince"
let receptor = ""

let databurned = [[300,"José Prince", "hola", "2024"],[1000,"José Prince", "adios", "2024"], [1,"José Prince", "Buenas", "2024"], [1,"Alex", "hola", "2024"]]

//Paleta de colores
let background = "black";
let border = "#9F2042";
let messages = "#9BC995";
let chats = "#267891";
let words = "#F8E5EE";

function actualizarColores() {
    document.getElementById("listado-chats").style.border = "1px solid " + border;
    document.getElementById("listado-chats").style.backgroundColor = background;

    document.getElementById("mensaje").style.border = "1px solid " + border;
    document.getElementById("mensaje").style.backgroundColor = background;

    document.getElementById("contenido-perfil").style.border = "1px solid " + border;
    document.getElementById("contenido-perfil").style.backgroundColor = background;

    document.getElementById("contenido-chat").style.border = "1px solid " + border;
    document.getElementById("contenido-chat").style.backgroundColor = background;

    document.getElementById("nombre").style.color = words;

    document.getElementById("theme").style.backgroundColor = border

    document.querySelectorAll(".chatting").forEach(elemento =>{
        elemento.style.backgroundColor = chats
        elemento.style.color = words
        elemento.style.border = "1px solid " + border
    })

    document.getElementById("top").style.backgroundColor = chats

    document.getElementById("top").style.color = words
}

let div1 = document.createElement("div");
div1.id = "contenedor";
document.body.appendChild(div1);

document.getElementById("contenedor").style.display = "grid";
document.getElementById("contenedor").style.gridTemplateColumns = "20% 80%";
document.getElementById("contenedor").style.gridTemplateRows = "94% 6%";
document.getElementById("contenedor").style.border = "1px solid " + border
document.getElementById("contenedor").style.height = "99.8vh";

let div2 = document.createElement("div");
div2.id = "listado-chats";
div1.appendChild(div2);

document.getElementById("listado-chats").style.border = "1px solid " + border;
document.getElementById("listado-chats").style.backgroundColor = background;
document.getElementById("listado-chats").style.display = "flex"
document.getElementById("listado-chats").style.flexDirection = "column"
document.getElementById("listado-chats").style.overflow = "auto"

createChats()

let  div3 = document.createElement("div")
div3.id = "mensaje"
div1.appendChild(div3)

document.getElementById("mensaje").style.border = "1px solid " + border
document.getElementById("mensaje").style.backgroundColor = background

let div3_1 = document.createElement("div")
div3_1.id = "top"
div3.appendChild(div3_1)

document.getElementById("top").style.minHeight = "4.7%"
document.getElementById("top").style.maxHeight = "4.7%"
document.getElementById("top").style.backgroundColor = chats
document.getElementById("top").style.border = "1px solid " + border
document.getElementById("top").style.display = "flex"
document.getElementById("top").style.alignItems = "center"
document.getElementById("top").style.padding = "5px"
document.getElementById("top").style.fontSize = "20px"
document.getElementById("top").style.color = words

let div3_2 = document.createElement("div")
div3_2.id = "mensajes"
div3.appendChild(div3_2)

document.getElementById("mensajes").style.padding = "15px"
document.getElementById("mensajes").style.display = "flex"
document.getElementById("mensajes").style.alignItems = "flex-end"
document.getElementById("mensajes").style.justifyContent = "flex-start"
document.getElementById("mensajes").style.flexDirection = "column-reverse"
document.getElementById("mensajes").style.overflow = "auto"
document.getElementById("mensajes").style.maxHeight = "90%"
document.getElementById("mensajes").style.minHeight = "90%"

let div4 = document.createElement("div");
div4.id = "contenido-perfil";
div1.appendChild(div4);

document.getElementById("contenido-perfil").style.border = "1px solid " + border
document.getElementById("contenido-perfil").style.backgroundColor = background
document.getElementById("contenido-perfil").style.display = "flex"
document.getElementById("contenido-perfil").style.alignItems = "center"
document.getElementById("contenido-perfil").style.justifyContent = "space-around"

let div5 = document.createElement("div");
div5.id = "contenido-chat";
div1.appendChild(div5);

document.getElementById("contenido-chat").style.border = "1px solid " + border;
document.getElementById("contenido-chat").style.backgroundColor = background;
document.getElementById("contenido-chat").style.display = "flex";
document.getElementById("contenido-chat").style.alignItems = "center";
document.getElementById("contenido-chat").style.justifyContent = "space-evenly"

//Image de perfil
let image = document.createElement("img");
image.id = "perfil";
div4.appendChild(image);

document.getElementById("perfil").src = "https://media.posterlounge.com/img/products/760000/757344/757344_poster.jpg";
document.getElementById("perfil").style.width = "50px";
document.getElementById("perfil").style.height = "50px";
document.getElementById("perfil").style.borderRadius = "50%";

let nombre_perfil = document.createElement("p");
nombre_perfil.id = "nombre";
div4.appendChild(nombre_perfil);

document.getElementById("nombre").textContent = user_name;
document.getElementById("nombre").style.color = words;

let color_switch = document.createElement("label");
color_switch.classList.add("switch");

let switchInput = document.createElement("input");
switchInput.type = "checkbox";
switchInput.id = "toggleSwitch";

let slider = document.createElement("span");
slider.classList.add("slider", "round");

color_switch.appendChild(switchInput);
color_switch.appendChild(slider);

div4.appendChild(color_switch);

switchInput.addEventListener("change", function() {
    if (this.checked) {
        localStorage.setItem("switchState", "checked");
        background = "white";
        border = "9F2042";
        messages = "#267891";
        chats = "#9BC995";
        words = "black";
        actualizarColores();
    } else {
        console.log("Switch desactivado");
        localStorage.setItem("switchState", "unchecked");
        background = "black";
        border = "#9F2042";
        messages = "#9BC995";
        chats = "#267891";
        words = "#F8E5EE";
        actualizarColores();
    }
});

let textbox = document.createElement("textarea");
textbox.className = "text";
div5.appendChild(textbox);

document.getElementsByClassName("text")[0].addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Evita que se inserte un salto de línea en el textarea
        let contenido = document.getElementsByClassName("text")[0].value
        if (contenido != "") {
            createMessage(contenido);
            // let objeto = {
                //     "username": user_name,
            //     "message": contenido
            // } 
            // postPosts(objeto)
            document.getElementsByClassName("text")[0].value = ""; // Limpia el contenido del textarea después de enviar el mensaje
        } 
    }
});

document.getElementsByClassName("text")[0].style.height = "50%";
document.getElementsByClassName("text")[0].style.width = "90%";
document.getElementsByClassName("text")[0].style.backgroundColor = '#dfe3eb';
document.getElementsByClassName("text")[0].style.resize = "none";
document.getElementsByClassName("text")[0].style.fontSize = "16px"
document.getElementsByClassName("text")[0].style.fontSize = "16px"
document.getElementsByClassName("text")[0].maxLength="140"
document.getElementsByClassName("text")[0].placeholder = "Mensaje"

let send_button = document.createElement("button");
send_button.id = "theme"
div5.appendChild(send_button);

document.getElementById("theme").style.borderRadius = "50%";
document.getElementById("theme").style.height = "45px";
document.getElementById("theme").style.width = "45px";
document.getElementById("theme").style.backgroundColor = border;

send_button.addEventListener("click", function() {
    let contenido = document.getElementsByClassName("text")[0].value
    if (contenido != "") {
        createMessage(contenido);
        // let objeto = {
        //     "username": user_name,
        //     "message": contenido
        // } 
        // postPosts(objeto)
        document.getElementsByClassName("text")[0].value = "";
    }
})

if (localStorage.getItem("switchState") == "checked") {
    switchInput.checked = true;
    background = "white";
    border = "9F2042";
    messages = "#646E68";
    chats = "#9BC995";
    words = "black";
    actualizarColores();
}

let sendI = document.createElement("img");
sendI.id = "send";
send_button.appendChild(sendI);

document.getElementById("send").style.height = "32px";
document.getElementById("send").style.width = "32px";
document.getElementById("send").src = "https://static-00.iconduck.com/assets.00/send-icon-1024x1011-38wtwa0n.png";
document.getElementById("send").style.margin = "4px 0px 0px 3px";

function createMessage(contenido) {
    console.log("Contenido recibido:", contenido);
    let mensaje = document.createElement("div");
    mensaje.className = "message"
    
    mensaje.style.backgroundColor = messages
    mensaje.style.color = "black"
    mensaje.style.marginTop = "5px"
    mensaje.style.padding = "5px"
    mensaje.style.display = "flex"
    mensaje.style.alignItems = "center"
    mensaje.style.whiteSpace = "pre-line"
    mensaje.animate([
        // {transform: "translateX(0px)"},
        {transform: "translateX(-300px)"},
        {transform: "translateX(0px)"}
    ],{
        duration: 500,
        iterations: 1,
        fill: "forwards"
    })
    
    if (contenido.length > 70) {
    let phrase = "";
    while (contenido.length > 70) {
        let substring = contenido.substring(0, 70);
        let lastSpaceIndex = substring.lastIndexOf(" ");
        if (lastSpaceIndex !== -1) {
            phrase += substring.substring(0, lastSpaceIndex + 1) + "\n";
            contenido = contenido.slice(lastSpaceIndex + 1);
        } else {
            phrase += substring + "\n";
            contenido = contenido.slice(70);
        }
    }

    phrase += contenido;
    mensaje.innerHTML = phrase;
} else {
    mensaje.innerHTML = contenido;
}

    div3_2.prepend(mensaje);

    div3_2.scrollTop = div3_2.scrollHeight
}


function createChat(user){
    let newChat = document.createElement("button")
    newChat.className = "chatting"
    newChat.innerText = user
    newChat.style.color = words
    newChat.style.width = "100%"
    newChat.style.minHeight = "6%"
    newChat.style.backgroundColor = chats
    newChat.style.display = "flex"
    newChat.style.alignItems = "center"
    newChat.style.justifyContent = "center"
    newChat.style.border = "1px solid " + border
    newChat.style.fontSize = "17px"

    newChat.addEventListener("click", function() {
        receptor = newChat.innerHTML
        
        if (receptor != document.getElementById("top").innerHTML){
            document.getElementById("top").innerHTML = receptor
            getMessages(receptor)
        }

    })

    return newChat
}

//ASYNC FUNCTIONS

async function obtainPosts(){
    let data = await fetch("http://uwu-guate.site:3000/messages",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    console.log("await",data)
    let posts = await data.json()
    console.log(posts)

    return posts
}

async function postPosts(object){
    let data = await fetch("http://uwu-guate.site:3000/messages",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
}

async function createChats(){
    let names = []
    // let myPosts = await obtainPosts()
    let myPosts = databurned //Cambiar cuando el server este funcionando

    let lista = document.getElementById("listado-chats")
    if (lista != null){
        myPosts.map(post=>{
            let newChat = createChat(post[1])
            return newChat
        })
        .forEach(element => {
            if (!names.includes(element.innerHTML)){
                lista.appendChild(element)
                names.push(element.innerHTML)    
            }
        })
    }
}

async function getMessages(receptor){
    document.getElementById("mensajes").innerHTML = ""

    // let posts = await obtainPosts()
    let posts = databurned //Cmabiar cuando el server este funcionando
    posts.sort((a,b) => a[0] - b[0])

    posts.forEach(element => {
        if (element[1] == receptor){
            createMessage(element[2])
        }
    })
}
