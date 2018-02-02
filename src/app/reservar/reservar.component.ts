import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent, CalendarDateFormatter, DAYS_OF_WEEK } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { CustomDateFormatter } from '../custom-date-formatter.provider';

@Component({
  selector: 'mwl-demo-component',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    .fill-height {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  `
  ],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class ReservarComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  locale: string = 'Es-CL';

  refresh: Subject<any> = new Subject();

  clickedDate: Date;

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];

  constructor() { }

  ngOnInit() {
  }

}
