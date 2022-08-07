function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    };
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var days = document.querySelector(".days");
        var hours = document.querySelector(".hours");
        var min = document.querySelector(".minutes");
        var sec = document.querySelector(".seconds");
        var timer = updateTimer(deadline);

        days.innerHTML = timer.days;
        hours.innerHTML = timer.hours;
        min.innerHTML = timer.minutes;
        sec.innerHTML = timer.seconds;


        //check for end of timer
        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML = '<h1>The Event is on!</h1>';
            document.querySelectorAll(".timer__lable").classList.toggle('disappear');
        }


    }, 1000);
}


window.onload = function () {
    var deadline = new Date("March 11, 2022 0:00:00");
    startTimer("clock", deadline);
};
