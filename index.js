async function obtenerDatos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    let list = document.getElementById("list")
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach(e=>{
            if(e.id <= 20){
                console.log(e.title)
                list.innerHTML += `<li>${e.title}</li>`
            }
        })      
        await enviarMensaje();
    } catch (err) {
        console.log(err);
    }
}
function enviarMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Información enviada");
            resolve('Mensaje enviado');
        }, 3000);
    });
}
obtenerDatos();