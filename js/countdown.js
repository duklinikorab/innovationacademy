function countDown() {
    const countdown = document.querySelector('.countdown');

    const launchDate = new Date('December 1, 2020 00:00:00').getTime();

    const intvl = setInterval(() => {

        const now = new Date().getTime();

        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('min').innerHTML = mins;
        document.getElementById('sec').innerHTML = seconds;


        if (distance < 0) {
            clearInterval(intvl);
            countdown.style.color = '#17a2b8';
            countdown.innerHTML = 'Oferta ka skaduar!';
        }
    }, 1000);
}
countDown();

function mobile() {
    if(window.innerWidth < 568) {
       var span = document.querySelectorAll('.countdown span');
           span[0].innerHTML = 'Days';
           span[1].innerHTML = 'Hours';
           span[2].innerHTML = 'Min';
           span[3].innerHTML = 'Sec';
    }
}
mobile();