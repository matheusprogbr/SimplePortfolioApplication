const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal-overlay');
const modalClose  = document.querySelector('.close-modal');
const embedModal = document.querySelector('.modal-content iframe');


let modalActive = function(){
  for(let card of cards){
    card.addEventListener('click',() => {
      modal.classList.add('active');

      const videoId = card.getAttribute('id');
      changeId(videoId);
    })
  }
};

let closeBox = function(){
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');

    embedModal.src = '';
  })
};

let changeId = function(videoId){
  embedModal.src = `https://www.youtube.com/embed/${videoId}`;
}

modalActive();

closeBox();

