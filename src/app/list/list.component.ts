import { Component, InjectionToken, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meetings, MeetingsImpl } from 'top-workspace/dist/top-lib';

export const MEETING_LIST = new InjectionToken<Observable<Meetings[]>>('MEETING_LIST');

export const meetingList = (meetings: Meetings) => {
  return meetings.list();
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [
    { provide: Meetings, useClass: MeetingsImpl },
    { provide: MEETING_LIST, useFactory: meetingList, deps: [Meetings] }
  ]
})
export class ListComponent implements OnInit {
  constructor(
    private meetings: Meetings
  ) {
    this.meetings = meetings;
  }

  ngOnInit(): void {
  }

}
