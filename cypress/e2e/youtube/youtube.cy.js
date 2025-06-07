/// <reference types="cypress" />

import Video from '../page_objects/youtube-video';
const video = new Video();


describe("YOUTUBE SEARCHING", function () {

  before(function () { 
     cy.viewport(1920, 1080)
     
     const url = Cypress.env('url_youtube');
     cy.visit(url);
  });


  it("Search Film", function() {
     // search video
     let videoIndex = 2;
     video.SearchVideo(videoIndex);


     // open video
     video.OpenVideo();
  })

})
