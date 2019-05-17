import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSiteComponent } from './transaction-site.component';

describe('TransactionSiteComponent', () => {
  let component: TransactionSiteComponent;
  let fixture: ComponentFixture<TransactionSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
