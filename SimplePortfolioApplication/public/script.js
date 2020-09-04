const cards = document.querySelectorAll('.card');

let modalActive = function(){
  for(let card of cards){
    card.addEventListener('click',() => {
      
      const videoId = card.getAttribute('id');
      window.location.href = `/video?id=${videoId}`;
    })
  }
};

modalActive();

