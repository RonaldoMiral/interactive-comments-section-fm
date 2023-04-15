import { replyCommentModel } from './adicionarResponderComentario.js';

// Função responsável por adicionar ou diminuir os scores
export const actions = (user) => {
  //Seleciona todos os botões de sinal +
  const amountUpButtons = document.querySelectorAll('[data-amounter-up]');

  //Seleciona todos os botões de sinal -
  const amountDownButtons = document.querySelectorAll('[data-amounter-down]');

  // Função responsável por achar a score de cada comentário
  const changeScore = (one, e) => {
    let score = e.target.closest('div').querySelector('[data-score]');
    if (parseInt(score.innerText) + one < 0) return;
    score.textContent = parseInt(score.innerText) + one;
  };

  // Adiciona evento onclick para todos os botões de sinal +
  amountUpButtons.forEach((button) => {
    button.addEventListener('click', (e) => changeScore(1, e));
  });

  // Adiciona evento onclick para todos os botões de sinal -
  amountDownButtons.forEach((button) => {
    button.addEventListener('click', (e) => changeScore(-1, e));
  });

  // Seleciona o container de todos os comentários, ou seja, super container
  const comentsContainer = document.querySelector('[data-comments-container]');

  // Adiciona o evento click ao super container
  comentsContainer.addEventListener('click', (event) => {
    // Seleciona o container do comentário em que o botão foi clicado
    const commentContainer = event.target.closest('.parent-container');
    // Seleciona o container que agrupa todas as respostas
    const repliesContainer = commentContainer.querySelector('[data-replies]');

    repliesContainer.innerHTML += replyCommentModel(user);
  });
};
