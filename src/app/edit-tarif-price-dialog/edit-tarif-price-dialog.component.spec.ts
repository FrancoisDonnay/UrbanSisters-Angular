import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarifPriceDialogComponent } from './edit-tarif-price-dialog.component';

describe('EditTarifPriceDialogComponent', () => {
  let component: EditTarifPriceDialogComponent;
  let fixture: ComponentFixture<EditTarifPriceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTarifPriceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarifPriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
