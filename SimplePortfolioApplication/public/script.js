const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal-overlay');
const modalClose  = document.querySelector('.close-modal');



let modalActive = function(){
  for(let card of cards){
    card.addEventListener('click',() => {
      
      const videoId = card.getAttribute('id');
      window.location.href = `/video?id=${videoId}`;
    })
  }
};

let closeBox = function(){
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');

    embedModal.src = '';
  })
};

modalActive();

closeBox();

