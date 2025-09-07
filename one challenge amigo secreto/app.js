let listaDeAmigos = [];

// Funcion para agregar los nombres a mi array
function agregarAmigo(){    
    let agregado = document.getElementById("amigo").value;  // Toma el valor del input
        if(agregado == ""){   // Muestra error si se deja el input vacio
            alert("Debes ingresar un nombre");
            return;
        };
    listaDeAmigos.push(agregado);   // Añade el valor del input a mi array
    document.getElementById("amigo").value = "";  // Limpia el input
    actualizarLista();
}

// Funcion para mostrar los nombres que he introducido
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");     // Accede a la lista
    lista.innerHTML = "";   // Vacia la lista actual
    for(let amigo of listaDeAmigos){
        lista.innerHTML += `<li>${amigo}</li>`;     // Añade cada amigo como un elemento en la lista
    };
}

// Funcion para mostrar el amigo secreto
function sortearAmigo(){    
    let sorteo = Math.floor(Math.random() * listaDeAmigos.length);   // Genera un numero entero aleatorio entre 0 y la longitud de mi array
    let amigoSecreto = listaDeAmigos[sorteo];    // Asigna el amigo secreto segun el numero generado
    alert("Tu amigo secreto es "+amigoSecreto+"!");  // Muestra el amigo secreto en pantalla
}
// Permite llamar la funcion agregarAmigo() con solo presionar Enter en tu teclado
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});
