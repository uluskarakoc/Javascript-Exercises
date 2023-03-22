class Pokeman {
    constructor(name,health,magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    learnAttackSkill(attackSkill) {
        this.skills.push(attackSkill);
    }
    showStatus() {
        console.log(`${this.name} Status \nHealth: ${this.health} \nMagic: ${this.magic} `);
    }
    attack(index,poke) {
        const attackPoke = this.skills[index];
        console.log(attackPoke)
        if(this.magic < attackPoke.amoMagic) {
            console.log(` has not enough magic, cannot launch attack!`);
        };
        this.magic -= attackPoke.amoMagic;
        console.log(`${this.name} launched skill ${attackPoke.attack} successfully!`);
        

        poke.health -= attackPoke.amoDam;
        console.log(`${poke.name} got ${attackPoke.amoDam} damage`);


        if(poke.health <= 0) {
            console.log(`${poke.name} is already dead!`);
        }
    }
    getMagic(add) {
        this.magic += add;
        console.log(`${this.name} got ${add} magic back`)
    }
}

class AttackSkill {
    constructor(attack,amoDam,amoMagic) {
        this.attack = attack;
        this.amoDam = amoDam;
        this.amoMagic = amoMagic;
    }
}

const pikachu = new Pokeman("Pikachu",120,80);
const bulbasaur = new Pokeman("Bulbasaur",95,105);

let lightning = new AttackSkill("lightning", 40, 30);

pikachu.learnAttackSkill(lightning);

console.log(pikachu.skills)
pikachu.showStatus()
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic(15);