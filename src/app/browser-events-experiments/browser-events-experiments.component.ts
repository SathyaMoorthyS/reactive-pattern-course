import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-events-experiments',
  templateUrl: './browser-events-experiments.component.html',
  styleUrls: ['./browser-events-experiments.component.css']
})
export class BrowserEventsExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', this.onMouseMove);
  }
  onMouseMove(ev) {
    console.log(ev);
  }
  unSubscribe() {
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove);
  }
}
