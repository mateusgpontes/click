function query(tag){
    return document.querySelector(tag);
}

function create(tag) {
    return document.createElement(tag)
}

const button = query('button');
const div = query('div');

button.onclick = (event) => {
    event.preventDefault();    
    const nome = prompt("Qual seu nome?");
    const idade = prompt("Qual sua idade");
    const h3 = create('h3');
    const p = create('p');

    if(nome.length > 0 && typeof nome === 'string' && idade.length > 0 && typeof parseInt(idade) === 'number'){
        div.appendChild(h3);
        h3.innerText = "Olá"
        div.appendChild(p);
        p.innerText = nome + " você tem " + idade + " anos.";
    }else{
        console.log(nome);
        console.log(idade);
        console.log('teste');
    }
}