

function mostrarArtista() {
    console.log(this.responseText);
    const artista = JSON.parse(this.responseText);
    console.log(artista.artists[0].strArtist);

    const img = document.createElement("img");
    img.src = artista.artists[0].strArtistLogo;
    const imagen = document.getElementById("logo");
    imagen.innerHTML = "";
    imagen.appendChild(img);   

    const nombre = document.createElement("h2");
    nombre.innerHTML = artista.artists[0].strArtist;
    const nombreArtista = document.getElementById("nombre");
    nombreArtista.innerHTML = "";
    nombreArtista.appendChild(nombre);

    const biografia = document.createElement("p");
    biografia.innerHTML = artista.artists[0].strBiographyEN;
    const biografiaArtista = document.getElementById("biografia");
    biografiaArtista.innerHTML = "";
    biografiaArtista.appendChild(biografia);

    const genero = document.createElement("h6");
    genero.innerHTML = artista.artists[0].strGenre;
    const generoArtista = document.getElementById("genero");
    generoArtista.innerHTML = "";
    generoArtista.appendChild(genero);

    const estilo = document.createElement("h6");
    estilo.innerHTML = artista.artists[0].strStyle;
    const estiloArtista = document.getElementById("estilo");
    estiloArtista.innerHTML = "";
    estiloArtista.appendChild(estilo);

    const banda = document.createElement("img");
    banda.src = artista.artists[0].strArtistThumb;
    const bandaArtista = document.getElementById("banda");
    bandaArtista.innerHTML = "";
    bandaArtista.appendChild(banda);

    const webSite = document.createElement("a"); 
    webSite.href = artista.artists[0].strWebsite;
    webSite.innerHTML = artista.artists[0].strWebsite;
    const webSiteArtista = document.getElementById("webSite");
    webSiteArtista.innerHTML = "";
    webSiteArtista.appendChild(webSite);

}


function mostrarDiscografia() {
    console.log(this.responseText);
    const discografia = JSON.parse(this.responseText);
    console.log(discografia.album[0].strAlbum);
    const fila = document.createElement("ul");
    discografia.album.forEach(album => {
        const columna = document.createElement("li");
        columna.innerHTML = album.intYearReleased + " - " + album.strAlbum;
        fila.appendChild(columna);  
    });
    const discografiaArtista = document.getElementById("discografia");
    discografiaArtista.innerHTML = "";
    discografiaArtista.appendChild(fila);
    
}

function buscar() {
    const buscador = document.getElementById("buscador").value;
    const request = new XMLHttpRequest();
    request.addEventListener("load", mostrarArtista);
    request.open("GET", "https://www.theaudiodb.com/api/v1/json/2/search.php?s=" + buscador);
    request.send();
    const reques = new XMLHttpRequest();
    reques.addEventListener("load", mostrarDiscografia);
    reques.open("GET", "https://theaudiodb.com/api/v1/json/2/discography.php?s=" + buscador);
    reques.send();
    
    
}



