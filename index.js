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

const makeFreelancer = () => {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * NAMES.length)];
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
    return {name, occupation, rate};
}

// const generateFreeLancers = Array.from({ length:NUM_FREELANCERS},makeFreeLancer);
const generateFreelancers = [];
for (let i=0; i< NUM_FREELANCERS; i++){ // i use i < num instead of i <= num because i<num makes 0-99 index of the array = 100 where i<=num will result in an index of 100 = 101
    generateFreelancers.push(makeFreelancer())
}

const averageRate = (arr) => {
    const total = arr.reduce((sum, freelancer) => sum + freelancer.rate,0);
    return total / generateFreelancers.length
}
// keep your functions generic so they can be used over again with ease. arr 
const avg = averageRate (generateFreelancers)

function freelancerRow(freelancer){
    const row = document.createElement("tr")

    row.innerHTML = `

    <td> ${freelancer.name}</td>
    <td> ${freelancer.occupation}</td>
    <td> $${freelancer.rate}</td>
    `;
    return row;
};
// as an arrow function, it would look like:
// const FreelancerRow = (freelancer) => {
//   const row = document.createElement("tr");
//   row.innerHTML = `
//     <td>${freelancer.name}</td>
//     <td>${freelancer.occupation}</td>
//     <td>$${freelancer.rate}</td>
//   `;
//   return row;
// };

function freelancerTableBody (freelancerArray){
    const tbody = document.createElement("tbody");
    for (let i = 0; i < freelancerArray.length; i++){
        const row = freelancerRow(freelancerArray[i])
        tbody.appendChild(row)
    }
    return tbody;
}
function averageRateDisplay (rate){
    const div = document.createElement("div");
    div.textContent = `Average Freelancer Rate: $${rate}`;
    return div;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear existing content

  const avg = averageRate(generateFreelancers);
  const avgDisplay = averageRateDisplay(avg);

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Rate</th>
      </tr>
    </thead>
  `;

  const body = freelancerTableBody(generateFreelancers);
  table.appendChild(body);

  app.appendChild(avgDisplay);
  app.appendChild(table);
}

renderApp();