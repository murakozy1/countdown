CountDownTimer('07/10/2024 5:00 AM', 'days');

    function CountDownTimer(dt, id){
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0){

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            document.getElementById(id).innerHTML = days + ' nap ';
            document.getElementById(id).innerHTML += hours + ' óra ';
            document.getElementById(id).innerHTML += minutes + ' perc ';
            document.getElementById(id).innerHTML += seconds + ' másodperc';
        }

        timer = setInterval(showRemaining, 1000);
    }

const button = document.querySelector("#button");
const text = document.querySelector("#text");

function foo(){
    text.innerHTML = "BUZI VAGY XDDD";
}

button.addEventListener('click', foo);