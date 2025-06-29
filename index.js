/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const makeFreeLancer = () => {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * NAMES.length)];
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
    return {name, occupation, rate};
}

// const generateFreeLancers = Array.from({ length:NUM_FREELANCERS},makeFreeLancer);
const generateFreeLancers = [];
for (let i=0; i< NUM_FREELANCERS; i++){ // i use i < num insted of i <= num because i<num makes 0-99 index of the array = 100 where i<=num will result in an index of 100 = 101
    generateFreeLancers.push(makeFreeLancer())
}

const averageRate = (arr) => {
    const total = arr.reduce((sum, freelancer) => sum + freelancer.rate,0);
    return total / generateFreeLancers.length
}
const avg = averageRate (generateFreeLancers)

