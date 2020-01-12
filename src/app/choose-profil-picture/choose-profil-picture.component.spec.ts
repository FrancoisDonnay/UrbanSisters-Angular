import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProfilPictureComponent } from './choose-profil-picture.component';

describe('ChooseProfilPictureComponent', () => {
  let component: ChooseProfilPictureComponent;
  let fixture: ComponentFixture<ChooseProfilPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseProfilPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProfilPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
