class GuessingGame {
    constructor() {
       let min;
       let max;
       let num;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
      
        
    }

    guess() {
    let num = (this.max + this.min) / 2;
    this.num = Math.round(num);
    return this.num;
    
    }

    lower() {
        this.max=this.num;
        this.guess();
    }

    greater() {
       this.min=this.num;      
        this.guess();
    }
}

module.exports = GuessingGame;
