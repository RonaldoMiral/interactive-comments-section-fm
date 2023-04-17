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
    const clickedElement = event.target;
    // Seleciona o container do comentário em que o botão foi clicado junto com as respostas
    const commentContainer = clickedElement.closest('.comment-container');
    // Verifica se o elemento clicado e um botão de responder, se for executas as acções
    if (clickedElement.classList.contains('reply')) {
      // Seleciona um campo de resposta dentro do container dos comentários(super container);
      const exists = comentsContainer.querySelector('[data-add]');
      // Verifica se existe um campo de resposta dentro do super, se existir remove-o
      if (exists) exists.remove();
      // Seleciona o container do comentário em que o botão foi clicado sem afetar as respostas
      const commentContainerSuper = clickedElement.closest('.parent-container');
      // Seleciona o container que agrupa todas as respostas
      const repliesContainer =
        commentContainerSuper.querySelector('[data-replies]');

      // Pega o username do comentário a ser respondido
      const username =
        commentContainer.querySelector('[data-username]').textContent;

      // Adiciona um campo de comentários no container de respostas
      repliesContainer.innerHTML += replyCommentModel(user, username);
    }

    // Certifica de que o botão clicado foi um de adicionar, se for pega o text area mais próximo
    if(clickedElement.classList.contains('add-button')) {
      const textArea = commentContainer.querySelector('[data-text-area]');
      console.log(textArea.value);
    }

  });
};
