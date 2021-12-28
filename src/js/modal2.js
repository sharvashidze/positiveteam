(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opn]'),
    closeModalBtn: document.querySelector('[data-modal-clos]'),
    modal: document.querySelector('[data-modall]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();