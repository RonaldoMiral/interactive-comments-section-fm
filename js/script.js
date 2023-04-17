import displayComments from './displayComments.js';
import { replyCommentModel } from './adicionarResponderComentario.js';
import { actions } from './actons.js';
import { handleAddCommentContainer } from './handleAddCommentContainerClick.js';

const main = async () => {
  // Vai buscar os dados no arquivo data.json
  const returnedData = await fetch('http://127.0.0.1:5500/data.json');

  // O a conversão do retorn em um objeto javaScript
  const data = await returnedData.json();

  // Função responsável por imprimir todos os comentários existentes
  displayComments(data);

  // Adiciona o campo de adicionar comentário
  const user = data.currentUser.image.webp;
  document.querySelector('main').innerHTML += replyCommentModel(user);

  // A função responsável por gerenciar as acções que podemos realizar em um comentário
  actions(user);

  // Lida com todos os eventos que ocorrem no container de adição de respostas
  const addCommentContainer = document.querySelector('[data-add]');
  addCommentContainer.addEventListener('click', (e) => handleAddCommentContainer(e));
};

main();
