import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelookeuseInscriptionComponent } from './relookeuse-inscription.component';

describe('RelookeuseInscriptionComponent', () => {
  let component: RelookeuseInscriptionComponent;
  let fixture: ComponentFixture<RelookeuseInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelookeuseInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelookeuseInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
