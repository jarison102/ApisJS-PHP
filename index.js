const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status==200){
    //0 =unset no se ha llamado al metodo open
    //1 =opened se ha llamado al metodo open
    //2 =headers_received se esta llamando al metodo send()
    //3 =loading esta cargando es decir esta recibiendo  la respuesta
    //4 =done se ha completado
    //Imprimir por consola
    //console.log(this.response)
    const data = JSON.parse(this.response);
    const HTMLresponse = document.querySelector("#app");
    const tlp = data.map((user)=>`<li>${user.name}😎${user.email}📧</li>`)
    HTMLresponse.innerHTML=`<ul>${tlp}`
    }
}

xhr.addEventListener("load", onRequestHandler)
xhr.open("GET", `${API_URL}/users`);
xhr.send();