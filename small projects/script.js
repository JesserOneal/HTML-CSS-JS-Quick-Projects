const readAll = document.querySelector('.mark-read');
const notification = document.querySelectorAll('.notification');
readAll.addEventListener('click', () => {
    notification.forEach((notice) => {
        notice.innerHTML = ''
    });
});

const acceptBtn = document.querySelectorAll('.accept-btn');
const denyBtn = document.querySelector('.decline-btn');

acceptBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const removeNotice = document.querySelector('.notification');
        removeNotice.innerHTML = `<p><strong>You gave Lily Pasta!</strong></p>`
        });
    })






`<p><strong>You are now friends!</strong></p>`