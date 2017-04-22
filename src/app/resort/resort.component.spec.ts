import {async, inject, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, SimpleChange} from '@angular/core';
import {ResortComponent} from './resort.component';
import {Origin} from '../origin/origin';

describe('ResortComponent', () => {
  let fixture: ComponentFixture<ResortComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [ResortComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(ResortComponent);
  }));

  describe('initial state', () => {
    beforeEach(() => {
      fixture.componentInstance.resort = {
        name: 'resort 1',
        url: 'resort1.com',
        airports: ['slc']
      };

      fixture.detectChanges();
    });

    it('shows resort title', async(() => {
      expect(fixture.debugElement.query(By.css('h2')).nativeElement.textContent)
        .toEqual('resort 1');
    }));

    it('shows link to the resort website', async(() => {
      expect(fixture.debugElement.query(By.css('small')).nativeElement.textContent)
        .toEqual('resort1.com');
    }));

    it('shows the closest airports', async(() => {
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent)
        .toContain('slc');
    }));

    it('has the find button disabled', async(() => {
      let findLink = fixture.debugElement.query(By.css('.flight-link')).nativeElement;
      expect(findLink.getAttribute('class')).toContain('pure-button-disabled');
    }));
  });

  describe('search link', () => {
    beforeEach(() => {
      fixture.componentInstance.resort = {
        name: 'resort 1',
        url: 'resort1.com',
        airports: ['slc']
      };
      fixture.detectChanges();
    });

    it('shows link if origin and schedule are available', async(() => {
      fixture.componentInstance.origin = Origin.from('JFK');
      fixture.componentInstance.schedule = {
        departureDate: '2016-01-02',
        returnDate: '2016-02-02'
      };
      fixture.componentInstance.alliance = {
        name: 'star',
        code: 'STAR_ALLIANCE'
      };

      fixture.componentInstance.ngOnChanges({
        origin: new SimpleChange('EWR', fixture.componentInstance.origin, true)
      });
      fixture.detectChanges();

      let link = fixture.debugElement.query(By.css('.flight-link'));

      expect(link.nativeElement.getAttribute('href'))
        .toEqual('https://www.google.com/flights/#search;f=JFK;t=slc;d=2016-01-02;r=2016-02-02;mc=m;a=STAR_ALLIANCE');

    }));

    it('does not show the link if origin and schedule are missing', async(() => {
      let link = fixture.debugElement.query(By.css('.flight-link'));
      expect(link.nativeElement.getAttribute('href')).toBe("");
    }));
  });

});
