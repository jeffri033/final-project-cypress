// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('extractFlightInfo', (flight_info) => {
  const monthMap = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04',
    May: '05', Jun: '06', Jul: '07', Aug: '08',
    Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };

  const [day, monthStr, departure, arrival] = flight_info.trim().split(/[\s·-]+/);
  const date = day.padStart(2, '0');
  const month = monthMap[monthStr];

  return cy.wrap({ date, month, departure, arrival });
});


Cypress.Commands.add('getDepartureDate', () => {
  const today = new Date();
  const tomorrow = new Date(today); // Clone today
  tomorrow.setDate(today.getDate() + 1); // Add 1 day
  
  const yyyy = tomorrow.getFullYear(); // get YYYY
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // get MM
  const dd = String(tomorrow.getDate()).padStart(2, '0'); // get DD
     
  return cy.wrap({ yyyy, mm, dd });
});