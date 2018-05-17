import { Component, OnInit } from '@angular/core';
import { Session } from '../class/session.class';
import { SESSIONS } from '../dummy-values/session-values';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  sessions: Session[] = SESSIONS;
  constructor() { }

  ngOnInit() {
  }

  transformArrayToString(array): string {
    return array.join(', ');
  }

}
