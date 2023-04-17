export function replyCommentModel(user, username) {
  return `
      <div class="add-comments-container" data-add>
        <textarea cols="30" rows="10" data-text-area class="text-area" placeholder="add a comment...">${
          username ? '@' + username + ' ' : ''
        }</textarea>
        <div class="user-send_button-container">
          <img src=${user} alt="Replying a comment" />
          <button class="add-button" data-add-button>Send</button>
        </div>
      </div>
    `;
}
