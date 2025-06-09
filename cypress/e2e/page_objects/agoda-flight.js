// cypress/e2e/page_objects/agoda-flight.js

class Flight {
      
    constructor() {
        // flight data
        this.origin_city            = 'Jakarta';
        this.origin_airport         = 'Soekarno-Hatta International Airport';
        this.origin_code            = 'CGK';
        this.destination_city       = 'Singapore';
        this.destination_airport    = 'Changi Airport';
        this.destination_code       = 'SIN';
        this.airlines_name          = 'Malaysia Airlines'
        this.departure_yyyy_mm_dd   = '';
        this.departure_month;
        this.departure_date;
        this.departure_time;
        this.arrival_time;
        this.ticket_price;

        // contact data
        this.contact_first_name     = 'Jefri';
        this.contact_last_name      = 'Testing';
        this.contact_full_name      = 'Jefri Testing';
        this.contact_email          = 'jefri@testing.com';
        this.country_residence      = 'India';
        this.contact_country_code   = '91'
        this.contact_phone_number   = '83504006007';

        // passenger data
        this.passenger_first_name   = 'Jeffry';
        this.passenger_last_name    = 'Test';
        this.passenger_full_name    = 'Jeffry Test';
        this.passport_number        = 'E0464645J';
        this.gender                 = 'Male';
        this.passenger_date_birth   = '23';
        this.passenger_month_birth  = 'March';
        this.passenger_year_birth   = '2000';
        this.nationality            = 'Indonesia';
        this.passport_country       = 'Indonesia';
        this.passport_expiry_date   = '24';
        this.passport_expiry_month  = 'December';
        this.passport_expiry_year   = '2028';


        // locator form searching
        this.menu_flight                = '#tab-flight-tab';
        this.input_origin_city          = '#flight-origin-search-input';
        this.input_origin_airport       = '.Suggestion__categoryName_item';
        this.input_destination_city     = '#flight-destination-search-input';
        this.input_destination_airport  = '.Suggestion__categoryName_item';
        this.input_departure_date       = `span[data-selenium-date="${this.departure_yyyy_mm_dd}"]`;
        this.button_search              = 'button[data-test="SearchButtonBox"]';

        // locator flight list
        this.filter_airlines            = 'div[data-testid="filter-container"]';
        this.checkbox_airlines          = `label[data-element-value="${this.airlines_name}"]`;
        this.sort_flight                = '#sort-options-label';
        this.sort_departure             = 'div[data-testid="floater-container"]';
        this.list_flight                = 'div[data-testid="flight-infinite-scroll"]';
        this.text_departure_time        = 'div[data-testid="departure-time"]';
        this.text_arrival_time          = 'div[data-testid="arrival-time"]';
        this.text_ticket_price          = 'span[data-element-name="flight-price-breakdown"]';

        // locator contact details
        this.input_contact_first_name   = 'input[name="contact.contactFirstName"]';
        this.input_contact_last_name    = 'input[name="contact.contactLastName"]';
        this.input_email                = 'input[name="contact.contactEmail"]';
        this.input_country_residence    = 'div[data-element-name="contact-country-of-residence-input"]';
        this.dropdown_country_residence = 'div[data-testid="floater-container"]';
        this.search_country_residence   = 'input[placeholder="Search"]';
        this.input_phone_number         = 'input[name="contact.contactPhoneNumber"]';

        // locator passenger details
        this.input_gender                   = `input[type="radio"][aria-label="${this.gender}"]`;
        this.input_passenger_first_name     = 'input[name="flight.forms.i0.units.i0.passengerFirstName"]';
        this.input_passenger_last_name      = 'input[name="flight.forms.i0.units.i0.passengerLastName"]';
        this.input_passenger_date_birth     = 'input[datatestid="flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId"]';
        this.input_passenger_month_birth    = 'div[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]';
        this.input_passenger_year_birth     = 'input[datatestid="flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId"]';
        this.input_nationality              = 'div[data-testid="flight.forms.i0.units.i0.passengerNationality"]';
        this.dropdown_nationality           = 'div[data-testid="floater-container"]';
        this.search_nationality             = 'input[placeholder="Search"]';
        this.input_passport_number          = 'input[name="flight.forms.i0.units.i0.passportNumber"]';
        this.input_passport_country         = 'div[data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]';
        this.input_passport_expiry_date     = 'input[datatestid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]';
        this.input_passport_expiry_month    = 'div[data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]';
        this.input_passport_expiry_year     = 'input[datatestid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]';
        this.button_continue                = 'button[data-component="flight-continue-to-addOns-button"]';
        this.button_option_basic            = 'button[data-testid="ceg-upsell-select-button-option-BASIC"][data-id="option-BASIC"]';
        this.button_payment                 = 'button[data-testid="continue-to-payment-button"]';
        this.button_no_thanks               = 'button[data-id="addon-last-chance-CEG_UPSELL"]';

        // locator booking summary
        this.contact_passenger_wrapper      = 'div[data-component="mob-flight-contact-wrapper"]';
        this.text_origin_airport            = 'div[data-component="mob-flight-slice-originAirportCode"]';
        this.text_destionation_airport      = 'div[data-component="mob-flight-slice-destinationAirportCode"]';
        this.text_airlines_name             = 'div[data-component="flight-booking-sliceAirline"]';
        this.text_departure_breakdown       = 'span[data-testid="mob-flight-slice-departuredate"]';
        this.text_price_breakdown           = 'div[data-component="breakdownlist-2"]';
        this.text_price_total               = 'dd[data-component="mob-flight-price-total-desc"]';
    }


    SearchFlight() {        
        // click menu Flight
        cy.get(this.menu_flight).click();

        // input origin city
        cy.get(this.input_origin_city).type(this.origin_city);

        // select origin airport
        cy.get(this.input_origin_airport).contains(this.origin_airport).click();

        // select destination city
        cy.get(this.input_destination_city).type(this.destination_city);  

        // select destination airport
        cy.get(this.input_destination_airport).contains(this.destination_airport).click();


        // set departure date
        cy.getDepartureDate().then(({ yyyy, mm, dd }) => {
            this.departure_month = mm;
            this.departure_date = dd;
            
            this.departure_yyyy_mm_dd = `${yyyy}-${mm}-${dd}`;
            this.input_departure_date  = `span[data-selenium-date="${this.departure_yyyy_mm_dd}"]`;
        
            // select departure date
            cy.get(this.input_departure_date).parent().click();
        });


        // click search button
        cy.get(this.button_search).click();
    }



    SelectFlight() {
        // show airlines filter
        cy.get(this.filter_airlines).find('div').contains('Show all').click();

        // select airlines
        cy.get(this.checkbox_airlines).click();

        // click sort options
        cy.get(this.sort_flight).click();

        // sort flight by departure time
        cy.get(this.sort_departure).find('p').contains('Departure time').click({ force: true });

      
        // click selected flight 
        cy.get(this.list_flight, { timeout: 10000 }).children().as('flight-lists');
        cy.get('@flight-lists').children().eq(0).as('selected-flight')
        cy.get('@selected-flight', { timeout: 10000 }).click()


        // get departure time
        cy.get('@selected-flight').find(this.text_departure_time).first().invoke('text').as('departure-time');
        cy.get('@departure-time').then((text) => {
            this.departure_time = text;
        });

    
        // get arrival time
        cy.get('@selected-flight').find(this.text_arrival_time).first().invoke('text').as('arrival-time');
        cy.get('@arrival-time').then((text) => {
            this.arrival_time = text;
        });

        
        // get ticket price
        cy.get('@selected-flight').find(this.text_ticket_price).first().as('price');
        cy.get('@price').find('div[dir="ltr"]').eq(1).invoke('text').as('ticket-price');
        
        cy.get('@ticket-price').then((text) => {
            this.ticket_price = text;
        });


        // click "Select" button to booking ticket
        cy.get('@selected-flight').children().as('flight-container');
        cy.get('@flight-container').children().eq(1).as('flight-details');
        cy.get('@flight-details').children().as('flight-data');
        cy.get('@flight-data').children().as('flight-details-expand');
        cy.get('@flight-details-expand').children().as('flight-desc');
        cy.get('@flight-desc').children().eq(2).as('button-container');
        cy.get('@button-container').children().eq(1).as('button-booking');
        cy.get('@button-booking').children().click();
    }



    FillFormBooking() {
          
        // #############     Fill In Contact Details       ##############
        
        // input First Name
        cy.get(this.input_contact_first_name).type(this.contact_first_name);

        // input Last Name
        cy.get(this.input_contact_last_name).type(this.contact_last_name);

        // input Email
        cy.get(this.input_email).type(this.contact_email);

        // select Country/region of residence 
        cy.get(this.input_country_residence).click();
        cy.get(this.dropdown_country_residence).find(this.search_country_residence).type(this.country_residence);
        cy.get('ul li').contains(new RegExp(`^${this.country_residence}$`)).click();


        // select country code
        let code = this.country_residence + ' (' + this.contact_country_code + ')'; // Indonesia (62)
        cy.get('div[data-testid="contact.contactPhoneNumber-CountryCodeDataTestId"]').click();
        cy.get(this.dropdown_country_residence).find(this.search_country_residence).type(this.contact_country_code);
        cy.get('ul li').contains(code).click();


        // input phone number
        cy.get(this.input_phone_number).type(this.contact_phone_number);
  



        
        // #############     Fill In Passenger Details       ##############

        // select Gender
        cy.contains('label', this.gender).find(this.input_gender).check();
        cy.contains('label', this.gender).click();

        // input First Name
        cy.get(this.input_passenger_first_name).type(this.passenger_first_name);

        // input Last Name
        cy.get(this.input_passenger_last_name).type(this.passenger_last_name);


        // input Date of Birth
        // date
        cy.get(this.input_passenger_date_birth).type(this.passenger_date_birth);

        // month
        cy.get(this.input_passenger_month_birth).click();
        cy.get('ul li').contains(this.passenger_month_birth).click();

        // year
        cy.get(this.input_passenger_year_birth).type(this.passenger_year_birth);


        // select Nationality 
        cy.get(this.input_nationality).find('button').click();
        cy.get(this.dropdown_nationality).find(this.search_nationality).type(this.nationality);
        cy.get('ul li').contains(new RegExp(`^${this.nationality}$`)).click();


        // input Passport number
        cy.get(this.input_passport_number, { timeout: 20000 }).type(this.passport_number);

        
        // select Pasport country/region of issue
        cy.get(this.input_passport_country).find('button').click();
        cy.get('ul li').contains(new RegExp(`^${this.passport_country}$`)).click();


        
        // input Passport Expiry Date
        // date
        cy.get(this.input_passport_expiry_date).type(this.passport_expiry_date);

        // month
        cy.get(this.input_passport_expiry_month).find('button').click();
        cy.get('ul li').contains(this.passport_expiry_month).click();

        // year
        cy.get(this.input_passport_expiry_year).type(this.passport_expiry_year);



        // click continue to add-ons
        cy.get(this.button_continue, { timeout: 10000 }).click({force: true});

        // click option basic
        cy.get(this.button_option_basic, { timeout: 10000 }).first().click();

        // click continue payment
        cy.get(this.button_payment, { timeout: 10000 }).click({ force: true });

        // click no thanks to upgrade
        cy.get(this.button_no_thanks).first().click();
        
    }



    VerifyDataBooking() {

        // ====================    Verify Contact Details    ====================

        cy.get(this.contact_passenger_wrapper).children().eq(1).as('contact-wrapper');
        cy.get('@contact-wrapper').children().eq(1).as('contact-details');
        

        // verify contact full name
        cy.get('@contact-details').children().eq(0).invoke('text').as('contact-full-name');
        cy.get('@contact-full-name').then((full_name) => {
            expect(full_name).to.equal(this.contact_full_name);
        });

    
        // verify contact email
        cy.get('@contact-details').children().eq(1).invoke('text').as('contact-email');
        cy.get('@contact-email').then((email) => {
            expect(email).to.equal(this.contact_email);
        });


        // verify phone number
        cy.get('@contact-details').children().eq(2).invoke('text').as('contact-phone-number');
        cy.get('@contact-phone-number').then((phone) => {
            expect(phone).to.equal('+' + this.contact_country_code + ' ' + this.contact_phone_number);
        });



        
        // ====================    Verify Passenger Details    ====================
       
        cy.get(this.contact_passenger_wrapper).children().eq(2).as('passenger-wrapper');
        cy.get('@passenger-wrapper').children().eq(1).as('passenger-summary-list');
        cy.get('@passenger-summary-list').children().as('passenger-details');
        cy.get('@passenger-details').children().eq(1).as('passenger-container');


        // verify passenger full name
        cy.get('@passenger-container').children().eq(0).invoke('text').as('passenger-full-name');
        cy.get('@passenger-full-name').then((full_name) => {
            expect(full_name).to.equal(this.passenger_full_name);
        });
    

        // verify passport number
        cy.get('@passenger-container').children().eq(1).invoke('text').as('passport-number');
        cy.get('@passport-number').then((passport_number) => {
            expect(passport_number).to.equal('Passport: ' + this.passport_number);
        });




        // ====================    Verify Flight Details    ====================

        // verify origin airport
        cy.get(this.text_origin_airport).invoke('text').as('origin-airport');
        cy.get('@origin-airport').then((origin_airport) => {
            expect(origin_airport).to.equal(this.origin_city + ' (' + this.origin_code + ')' );
        });


        // verify destination airport
        cy.get(this.text_destionation_airport).invoke('text').as('destination-airport');
        cy.get('@destination-airport').then((destination_airport) => {
            expect(destination_airport).to.equal(this.destination_city + ' (' + this.destination_code + ')' );
        });


        // verify airlines name
        cy.get(this.text_airlines_name).find('span').invoke('text').as('airlines-name');
        cy.get('@airlines-name').then((airlines_name) => {
            expect(airlines_name).to.equal(this.airlines_name);
        });


        // verify flight info
        cy.get(this.text_departure_breakdown).invoke('text').as('flight-info');
    
        cy.get('@flight-info').then((flight_info) => {        
            cy.extractFlightInfo(flight_info).then(({ date, month, departure, arrival }) => {
                // verify departure date
                expect(date).to.equal(this.departure_date);

                // verify departure month
                expect(month).to.equal(this.departure_month);

                // verify departure time
                expect(departure).to.equal(this.departure_time);

                // verify arrival time
                expect(arrival).to.equal(this.arrival_time);
            });
        });


        // verify ticket price
        cy.get(this.text_price_breakdown).find(this.text_price_total).invoke('text').as('price-total');
        cy.get('@price-total').then((price) => {
            const priceTotal = price.replace('Rp ', 'Rp');
            expect(priceTotal).to.equal(this.ticket_price);
        });
    }

}

export default Flight;