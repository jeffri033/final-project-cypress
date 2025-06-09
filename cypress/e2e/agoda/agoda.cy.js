/// <reference types="cypress" />

import Flight from '../page_objects/agoda-flight';
const flight = new Flight();

describe("AGODA FLIGHT TICKET BOOKING", function () {

  before(function () { 
    cy.viewport(1920, 1080);

    const url = Cypress.env('url_agoda');
    cy.visit(url);
  });


  it("Booking Flight Ticket", function () {
    // searching for a flight 
    flight.SearchFlight();

    // select flight
    flight.SelectFlight();

    // fill in form booking
    flight.FillFormBooking();

    // verify booking information
    flight.VerifyDataBooking();
  })

})