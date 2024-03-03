class Cats {
    constructor(name, color) {
      this.name = name || 'Whiskers';
      this.color = color || 'Tabby';
      this.energyLevel = 100;
      this.happiness = 100;
    }
  
    sleep() {
      console.log(`${this.name} is taking a catnap.`);
      this.energyLevel += 20;
      this.displayStatus();
    }
  
    play() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} is playing with a ball of yarn!`);
        this.energyLevel -= 15;
        this.happiness += 10;
      } else {
        console.log(`${this.name} is too tired to play.`);
        this.happiness -= 5;
      }
      this.displayStatus();
    }
  
    meow() {
      console.log(`${this.name} says Meow!`);
      this.happiness += 5;
      this.displayStatus();
    }
  
    displayStatus() {
      console.log(`${this.name}'s Status - Energy: ${this.energyLevel}, Happiness: ${this.happiness}`);
    }
  }
  
  // Example usage
  const fluffyCat = new Cats('Fluffy', 'White');
  const playfulCat = new Cats('Whiskers Jr.', 'Gray');
  
  fluffyCat.play();
  playfulCat.sleep();
  playfulCat.meow();
  