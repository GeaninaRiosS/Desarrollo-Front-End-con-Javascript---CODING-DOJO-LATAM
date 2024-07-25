document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeSection = button.parentElement;
            const likeCountElement = likeSection.querySelector('.like-count');
            let likeCount = parseInt(likeCountElement.textContent);
            likeCountElement.textContent = `${++likeCount} like(s)`;
        });
    });
});
