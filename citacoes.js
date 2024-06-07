document.getElementById('new-quote').addEventListener('click', generateQuote);

function generateQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = data.content;
            document.getElementById('author').textContent = `- ${data.author}`;
        })
        .catch(error => console.error('Erro ao buscar a citação:', error));
}

// Gera uma citação ao carregar a página
generateQuote();