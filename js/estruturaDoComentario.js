export function commentModel(
  user,
  username,
  content,
  score,
  createdAt,
  answers = '',
  replies_visibility
) {
  return `<div class="comment-container${
    replies_visibility ? ' parent-container' : ''
  }">
      <div class="comment">
        <div class="comment-header">
          <img
            src=${user}
            alt="User"
            class="user"
          />
          <strong data-username>${username}</strong>
          <span class="period">${createdAt}</span>
        </div>
        <p class="comment-body">${content}</p>
        <div class="comment-actions">
          <div class="score-container">
            <img src="./images/icon-plus.svg" data-amounter-up alt="Icreament score" />
            <strong data-score>${score}</strong>
            <img src="./images/icon-minus.svg" data-amounter-down alt="Decreament score" />
          </div>
  
          <div class="reply-container">
            <img
              src="./images/icon-reply.svg"
              alt="Reply comment"
            />
            <strong data-reply>Reply</strong>
          </div>
        </div>  
      </div>
      
      ${
        replies_visibility
          ? `<div class="replies-container" data-replies>
            ${answers !== undefined ? answers : ''}
          </div>`
          : ''
      }
    </div>`;
}
