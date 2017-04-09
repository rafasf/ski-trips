import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AllianceComponent} from './alliance.component';

describe('Alliance Component', () => {
  let fixture: ComponentFixture<AllianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AllianceComponent]
    });

    fixture = TestBed.createComponent(AllianceComponent);
  });

  it('lists available alliances', () => {
    fixture.detectChanges();

    let alliances = fixture.debugElement.query(By.css('option'));

    expect(alliances).toEqual([]);
  });

});
