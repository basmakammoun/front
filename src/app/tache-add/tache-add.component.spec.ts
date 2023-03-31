import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheAddComponent } from './tache-add.component';

describe('TacheAddComponent', () => {
  let component: TacheAddComponent;
  let fixture: ComponentFixture<TacheAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TacheAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TacheAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
