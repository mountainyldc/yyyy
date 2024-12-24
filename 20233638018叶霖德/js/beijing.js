function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImg = modal.querySelector('img');
    modal.style.display = 'flex';
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}