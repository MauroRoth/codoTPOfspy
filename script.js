async function citar() {
    const response = await fetch(`https://api.quotable.io/random`);
    const jsonData = await response.json();

    const divCita = document.querySelector('#quote-content')
    const divAuthor = document.querySelector('#quote-author')
    let pCita = document.createElement('p')
    let pAuthor = document.createElement('p')
    pCita.innerHTML = jsonData.content;
    pAuthor.innerHTML = jsonData.author;
    divCita.appendChild(pCita);
    divAuthor.appendChild(pAuthor);
    
    
}

citar()


