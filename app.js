const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,

    quote: function(){  return `Dishonor! Dishonor on your whole family!`
    },
storyline: function(){
    return `The movie ${this.title} is about ${this.main}.`
}
}
console.log(mulan.quote());
console.log(mulan.storyline());

const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,

    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    },
    storyline: function(){
        return `The movie ${this.title} is about ${this.main}.`
    }
}
console.log(`===============`);
console.log(tangled.quote());
console.log(tangled.storyline());

function DisneyMovie (t,m){
    this.title = t;
    this.main = m;
}

DisneyMovie.prototype.storyline = function (){
    return `The movie ${this.title} is about ${this.main}.`
}

const mulan1 = new mulan (
    `Mulan`, `Fa Mulan`
)

const tangled1 = new tangled (
    `Tangled`, `Rapunzel`
)

class DM {
    constructor(t,m){
        this.title=t;
        this.main=m;

    }
    storyline(){
        return `The movie ${this.title} is about ${this.main}.`
        
        
    
        
    }
    
    static loveDisneyMovies(){
        return `I Love Disney Movies!`
    }
}
console.log(DM.loveDisneyMovies);


