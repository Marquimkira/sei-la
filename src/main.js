
//para rodar o geradorDeSenha antes tem que colocar "type": "module" no pk.json

import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const button = document.querySelector('button');
const gerarSenha = document.querySelector('h2');

button.addEventListener('click', () => {
  const geradorDeSenha = nanoid();
  gerarSenha.innerHTML = geradorDeSenha;
});

gerarSenha.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
