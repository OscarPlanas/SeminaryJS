// forEach
/*
companies.forEach(function(company) { //JavaScript functional function
  console.log(company.name);
});*/

// filter

// Get 21 and older

/*let canDrink = [];
for(let i = 0; i < ages.length; i++) {
   if(ages[i] >= 21) {
     canDrink.push(ages[i]);
   }
}*/

/*const canDrink = ages.filter(function(age) {
   if(age >= 21) {
     return true;
   }
 });*/
/*
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map -> manipula un array

// Create array of company names
const companyNames = companies.map(company => (company.name));

console.log(companyNames);
*/
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);



// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);
/*
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);*/

fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => {
    return response.json();
  })
  
  .then( (json) => {console.log(json)
    //Suma de todos los userID=5
    const j5 = json.filter(item => item.userId === 5).map(item => item.id).reduce((a, b) => a + b, 0);
      console.log(j5);
      //Filtro por completado y ordenamos alfábeticamente
    const completed = json.filter(item => item.completed == true).map(item => item.title).sort((a, b) => a.localeCompare(b));
      console.log(completed);
  })
  