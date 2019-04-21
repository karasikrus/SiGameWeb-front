import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostApproveAnswerComponent } from './host-approve-answer.component';

describe('HostApproveAnswerComponent', () => {
  let component: HostApproveAnswerComponent;
  let fixture: ComponentFixture<HostApproveAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostApproveAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostApproveAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
