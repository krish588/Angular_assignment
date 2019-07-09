import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHolderComponent } from './game-holder.component';

describe('GameHolderComponent', () => {
  let component: GameHolderComponent;
  let fixture: ComponentFixture<GameHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
