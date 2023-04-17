export const handleAddCommentContainer = (e) => {
  // Seleciona um campo de resposta dentro do container dos comentários(super container);
  const clickedElement = e.target.classList;
  if(clickedElement.contains('text-area') || clickedElement.contains('add-button')) {
    const exists = document.querySelector('[data-comments-container]').querySelector('[data-add]');
    // Verifica se existe um campo de resposta dentro do super, se existir remove-o
    if (exists) exists.remove();
  }

  if(clickedElement.contains('add-button')) {
    const info = document.querySelector('[data-text-area]');
    console.log(info.value);
  }
};