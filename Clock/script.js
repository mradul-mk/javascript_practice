const dt = document.getElementById('date')
const tm = document.getElementById('time')
const stopButton = document.getElementById('stop-time')
const resumeButton = document.getElementById('resume-time')
const stopWatch = document.getElementById('timer')
const stopWatchBtn = document.getElementById('stopWatch')

function getTime(){
    const currTime = new Date();

    dt.innerText = `DATE : ${currTime.getDate()}/${currTime.getMonth()}/${currTime.getFullYear()}`
    tm.innerText = `TIME : ${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`
    console.log(currTime)
}

let myInterval = setInterval(getTime, 1000);

stopButton.addEventListener('click', () => {
    clearInterval(myInterval);
})

resumeButton.addEventListener('click', () => {
    myInterval = setInterval(getTime, 1000);
})

stopWatchBtn.addEventListener('click', () => {
    let timer = stopWatch.value;
    let startTime = Date.now();
    const timerInterval = setInterval(()=>{
        let elapsedTime = Date.now() - startTime;
        elapsedTime = Math.floor(elapsedTime / 1000);
        if(elapsedTime > timer){
            clearInterval(timerInterval);
            alert(`Time ${timer}(secs) has finished`)
        }

    } , 1000);
})