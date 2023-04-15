import { commentModel } from './estruturaDoComentario.js';

// Função responsável por imprimir todos os comentários existentes;
const displayComments = (data) => {
  const coments_container = document.querySelector('[data-comments-container]');

  data.comments.forEach((comment, i) => {
    // Desestruturando o objeto comment
    const { user, content, score, createdAt, replies } = comment;
    const userImg = user.image.webp;
    const username = user.username;

    let answers = '';

    if (replies.length !== 0) {
      replies.forEach((reply) => {
        const { user, content, score, createdAt } = reply;
        const userImg = user.image.webp;
        const username = user.username;
        answers += commentModel(userImg, username, content, score, createdAt);
      });
    }

    // Passando as variáveis desestruturadas com parametro para a função de impressão dos comentários
    coments_container.innerHTML += commentModel(
      userImg,
      username,
      content,
      score,
      createdAt,
      answers,
      true
    );
  });
};

export default displayComments;
