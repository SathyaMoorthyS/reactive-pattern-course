import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input() lessons;
  constructor() { }

  ngOnInit() {
  }

}
