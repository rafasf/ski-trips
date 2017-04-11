import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Alliance} from './alliance';

@Component({
  selector: 'alliance',
  template: `
  <label for="alliances">Which airline alliance?</label>
  <select
    id="alliances"
    name="alliances"
    class="pure-input-1"
    [(ngModel)]="alliance"
    (ngModelChange)="allianceChange.emit($event)">
    <option value="" selected>All</option>
    <option *ngFor="let alliance of alliances" [ngValue]="alliance">
      {{ alliance.name }}
    </option>
  </select>`
})
export class AllianceComponent {
  @Input() alliance: Alliance;
  @Output() allianceChange = new EventEmitter<Alliance>();

  alliances: Array<Alliance> = [
    {name: 'Oneworld', code: 'ONEWORLD'},
    {name: 'SkyTeam', code: 'SKYTEAM'},
    {name: 'Star Alliance', code: 'STAR_ALLIANCE'}
  ]
}
