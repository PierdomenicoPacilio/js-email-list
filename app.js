const output = document.getElementById('output');
const button = document.getElementById('button');
const getEmails = function() {
    for(i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(element => {
                    console.log(element.data);
                    output.innerHTML += `<li>${element.data.response}</li>`;
                    
                })
                .catch(error => {
                    console.error('Errore nella richiesta:', error);
                    output.innerHTML = `<li>errore nel caricamento dei dati</li>`;
                });
    };
};
getEmails();
button.addEventListener('click', function(){
    output.innerHTML = ``;
    getEmails();
});