class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0){
          /*   if (this.callback) {
                this.callback(this.counter);
            } */ 
            this.callback && this.callback(this.counter);
        }
    }
}

//const coolCounter = new Counter();
function printSomething(num){
    console.log(`Wow! ${num}`);
}
function alertNum(num) {
    alert(`alert! ${num}`);
}
/* const coolCounter = new Counter();
/* coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(); */
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
