import {Component} from '@angular/core';
import {Alliance} from './alliance/alliance';
import {Origin} from './origin/origin';
import {Schedule} from './schedule/schedule';

@Component({
  selector: 'app-root',
  template: `
    <section class="pure-form pure-form-stacked search">
      <schedule (scheduleChanged)="updateSchedule($event)"></schedule>
      <origin (originChanged)="updateOrigin($event)"></origin>
      <alliance [(alliance)]="alliance"></alliance>
    </section>
    <resorts
      [origin]="origin"
      [schedule]="schedule"
      [alliance]="alliance">
    </resorts>`
})
export class AppComponent {
  alliance: Alliance;
  origin: Origin;
  schedule: Schedule;

  updateOrigin(newOrigin) {
    this.origin = newOrigin;
  }

  updateSchedule(newSchedule) {
    this.schedule = newSchedule;
  }
}
