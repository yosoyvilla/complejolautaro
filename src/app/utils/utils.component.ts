import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mwl-demo-utils-calendar-header',
  template: `
    <div class="row text-center">
      <div class="col-md-4">
        <div class="btn-group" style="margin-left: -6em;">
          <div
            class="btn btn-primary"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)">
            Mes Anterior
          </div>
          <div
            class="btn btn-outline-secondary"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)">
            Hoy
          </div>
          <div
            class="btn btn-primary"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)">
            Mes Siguiente
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale | uppercase}}</h3>
      </div>
      <div class="col-md-4">
        <div class="btn-group">
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('month')"
            [class.active]="view === 'month'">
            Vista Mes
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('week')"
            [class.active]="view === 'week'">
            Vista Semana
          </div>
          <div
            class="btn btn-primary"
            (click)="viewChange.emit('day')"
            [class.active]="view === 'day'">
            Vista Dia
          </div>
        </div>
      </div>
    </div>
    <br>
  `
})

export class UtilsComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'es';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
}

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};