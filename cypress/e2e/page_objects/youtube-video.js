// cypress/e2e/page_objects/youtube-video.js

class Video {      
    
    constructor() {
        this.videoTitle;
        this.videoChannel;
        this.index;
        
        // locator
        this.menuTrending           = 'a[title="Trending"]';
        this.categoryFilm           = '.yt-tab-shape-wiz[tab-title="Film"]';
        this.videoList              = 'ytd-video-renderer';
        this.text_title             = 'a#video-title > yt-formatted-string';
        this.text_channel           = '#text-container a';
        this.videoPage_title        = '#title h1 yt-formatted-string';
        this.videoPage_channel      = '#text-container yt-formatted-string a';
    }


    SearchVideo(videoIndex) {
        this.index = videoIndex;

        // click menu trending
        cy.get(this.menuTrending).click();

        // click category movie
        cy.get(this.categoryFilm).click();
        cy.wait(1500);

        // get video title number #3
        cy.get(this.text_title).eq(this.index).invoke('text').as('videoTitle');
        cy.get('@videoTitle').then((text) => {
           this.videoTitle = text;
        });

        
        // get text channel
        cy.get(this.videoList).eq(this.index).within(() => {
            cy.get(this.text_channel).first().invoke('text').then((text) => {
              this.videoChannel = text;
            });
        });
    }


    OpenVideo() {        
        // click detail video
        cy.get(this.videoList).eq(this.index).click()


        // verify video title & channel
        cy.then(() => {
            cy.get(this.videoPage_title ).should('contain', this.videoTitle);
            cy.get(this.videoPage_channel).should('contain', this.videoChannel);
        });
    }
}

export default Video;