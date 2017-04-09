import {Component} from '@angular/core';
import {Alliance} from './alliance/alliance';

@Component({
  selector: 'app-root',
  template: `
    <header class="pure-menu pure-menu-horizontal app-header">
      <nav>
        <span class="pure-menu-heading">Find your Flight!</span>
      </nav>
    </header>
    <section class="pure-form pure-form-stacked search">
      <origin (originChanged)="updateOrigin($event)"></origin>
      <schedule (scheduleChanged)="updateSchedule($event)"></schedule>
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
  origin: any;
  schedule: any;

  updateOrigin(newEvent) {
    this.origin = newEvent;
  }

  updateSchedule(newSchedule) {
    this.schedule = newSchedule;
  }
}
