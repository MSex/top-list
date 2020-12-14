import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Meeting } from 'top-workspace/dist/top-lib';
import { MEETING_LIST } from '../list.component';

@Component({
  selector: 'meeting-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, OnDestroy {
  meetingList: Meeting[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(MEETING_LIST) private listObsevable: Observable<Meeting[]>
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.listObsevable.subscribe(meetingList => {
        this.meetingList = meetingList;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
