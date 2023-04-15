export function replyCommentModel(user) {
  return `
      <div class="add-comments-container">
        <textarea cols="30" rows="10" placeholder="add a comment..."></textarea>
        <div class="user-send_button-container">
          <img src=${user} alt="Replying a comment" />
          <button id="send">Send</button>
        </div>
      </div>
    `;
}
