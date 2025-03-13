for(i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(element => {
                console.log(element.data);
                document.getElementById('output').innerHTML += `<li>${element.data.response}</li>`;
                
            })
            .catch(error => {
                console.error('Errore nella richiesta:', error);
                document.getElementById('output').textContent = 'Errore nel caricamento dei dati!';
            });
};