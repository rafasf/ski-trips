import {Component, Output, EventEmitter} from '@angular/core';
import {Origin} from './origin';

@Component({
  selector: 'origin',
  template: `
    <section class="origin">
      <label for="origin">What is the origin?</label>
      <input type="text"
        name="origin"
        class="pure-input-1"
        placeholder="JFK,LGA"
        (change)="updateValue($event.target.value)" />
    </section>`
})
export class OriginComponent {
  @Output() originChanged = new EventEmitter<Origin>();

  updateValue(newOrigin) {
    this.originChanged.emit(Origin.from(newOrigin));
  }
}
