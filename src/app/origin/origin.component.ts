import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'origin',
  template: `
    <section class="origin">
      <label for="origin">What is the origin?</label>
      <input type="text" name="origin" class="pure-input-1" placeholder="JFK,LGA" (change)="updateValue($event)" />
    </section>`
})
export class OriginComponent {
  @Output() originChanged = new EventEmitter<any>();

  updateValue(event) {
    this.originChanged.emit(event.srcElement.value);
  }
}
