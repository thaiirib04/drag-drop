const itens = document.querySelectorAll('.item');
const colunas = document.querySelectorAll('.coluna');
const statusText = document.getElementById('status');

//dragstart
itens.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

//dragover
colunas.forEach(coluna =>{

    coluna.addEventListener('dragover', (e) => {
        e.preventDefault();
        coluna.classList.add('over');
    });

    coluna.addEventListener('dragleave', ()=> {
        coluna.classList.remove('over');
    });

    coluna.addEventListener('drop', (e) =>{
        e.preventDefault();
        coluna.classList.remove('over');

        const id = e.dataTransfer.getData('text/plain');
        const itemMovido = document.getElementById(id);

        if(itemMovido){

            coluna.appendChild(itemMovido);

            const nomeColuna = coluna.querySelector('h3').innerText;
            const nomeTarefa = itemMovido.innerText;

            statusText.textContent = `Movido: "${nomeTarefa} ➔ ${nomeColuna}`;
        }
    });
});