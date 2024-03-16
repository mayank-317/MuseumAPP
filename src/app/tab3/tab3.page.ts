import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }

  event1() {
    const eventLink = 'https://forarthistory.org.uk/events/african-objects-in-european-museums-issues-of-restitution-in-ghana/';
    window.open(eventLink, '_blank');
  }
  event2() {
    const eventLink = 'https://forarthistory.org.uk/events/rcp-museum-taster-tour-history/';
    window.open(eventLink, '_blank');
  }
  event3() {
    const eventLink = 'https://forarthistory.org.uk/events/the-womens-art-collection-artworks-and-artists-in-context-murray-edwards-college/';
    window.open(eventLink, '_blank');
  }
  event4() {
    const eventLink = 'From Morris wallpapers, to Voysey chairs and De Morgan ceramics, the artists and designers of the late 19th century Arts and Crafts and Aesthetic movements created some of the most beautiful and iconic objects ever produced in Britain. Join Dr Emma...';
    window.open(eventLink, '_blank');
  }
}
