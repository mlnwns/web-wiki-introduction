document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.querySelector(".comment-writing-container form");
  const textarea = commentForm.querySelector("textarea");
  const cancelButton = commentForm.querySelector(".cancel-button");
  const submitButton = commentForm.querySelector(".submit-button");
  const commentList = document.querySelector(".comment-list");

  cancelButton.addEventListener("click", function () {
    textarea.value = "";
  });

  submitButton.addEventListener("click", function () {
    const commentText = textarea.value.trim();

    if (commentText) {
      const newComment = document.createElement("li");
      newComment.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${commentText}
          </div>
        </div>
      `;

      commentList.insertBefore(newComment, commentList.firstChild);

      textarea.value = "";
    }
  });

  textarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitButton.click();
    }
  });
});
