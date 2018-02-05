import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent, CalendarDateFormatter, DAYS_OF_WEEK } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { CustomDateFormatter } from '../custom-date-formatter.provider';
import { trigger, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'mwl-demo-component',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
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

  showCalendar:boolean = false;

  showFields:boolean = true;

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
    this.showCalendar = false;
    this.showFields = true;
  }

  // onSelect(tbl: Table): void {
  //   this.selectedTable = tbl;
  // }

  onSelect(): void {
    this.showCalendar = true;
    this.showFields = false;
  }

  onReturn(): void{
    this.showCalendar = false;
    this.showFields = true;
    window.scrollTo(0, 0);
  }

}
