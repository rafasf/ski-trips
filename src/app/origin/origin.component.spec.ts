import {async, inject, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, SimpleChange} from '@angular/core';
import {OriginComponent} from './origin.component';

describe('Origin Component', () => {
  let fixture: ComponentFixture<OriginComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [OriginComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(OriginComponent);
  }));

  describe('on value change', () => {
    let originField: any;

    beforeEach(() => {
      originField = fixture.debugElement.query(By.css('input')).nativeElement;
      originField.value = 'JFK';
    })

    it('publishes the new value', done => {
      fixture.componentInstance.originChanged.subscribe(value => {
        expect(value).toEqual('JFK');
        done();
      });

      originField.dispatchEvent(newEvent('change'));
    });
  });

  function newEvent(eventName: string, bubbles = false, cancelable = false) {
    let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
    evt.initCustomEvent(eventName, bubbles, cancelable, null);
    return evt;
  }
});
