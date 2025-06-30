const container = document.querySelector('.booking-tickets');
const pop_up = document.querySelector('.booking-tickets-wrapper');

function handleClick(){
    container.classList.toggle('hidden');
    pop_up.classList.toggle('show-booking-tickets');
}

document.querySelector('.buy-now').addEventListener('click', handleClick);
container.addEventListener('click', (event)=>{
    if(event.target.classList.contains('booking-tickets')){
        container.classList.toggle('hidden');
        pop_up.classList.toggle('show-booking-tickets');
    }
});