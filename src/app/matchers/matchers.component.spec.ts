import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // for exact equality
  it('two plus two is four', () => {
    expect(2+2).toBe(4);
  });


  // Object testing
  it('Object values', () => {
    const data = {name:"Shitlesh"};
    expect(data).toEqual({name : "Shitlesh"});
  });

  // Truthiness
  it('null', () => {
    const data = null;
    expect(data).toBeNull();
    expect(data).toBeDefined();
    expect(data).not.toBeUndefined();
    expect(data).not.toBeTruthy();
    expect(data).toBeFalsy();
  });
  it('zero', () => {
    const d = 0;
    expect(d).not.toBeNull();
    expect(d).toBeDefined();
    expect(d).not.toBeUndefined();
    expect(d).not.toBeTruthy();
    expect(d).toBeFalsy();
  });

  //Matchers for Numbers
  it('two plus two',() => {
    const val= 2+2;
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(3.5);
    expect(val).toBeLessThan(5);
    expect(val).toBeLessThanOrEqual(4.5);

    expect(val).toBe(4);
    expect(val).toEqual(4);
  });
  it('adding floating point numbers',() => {
    const val = 0.1 + 0.2;
    //expect(val).toBe(0.3);          // this will not work because of round off error same goes for toEqual()
    expect(val).toBeCloseTo(0.3);
  })

  // Matchers for Strings
  it('there is no K in shitlesh' , () => {
    expect('shitlesh').not.toMatch(/K/);
  });
  it('there is "Shitlesh" in ShitleshKaloshiya' , () => {
    expect('ShitleshKaloshiya').toMatch(/Shitlesh/);
  })

  // Matchers for Arrays & Iterables
  it('the shoping list has milk on it' , () => {
    const shoppingList = [
      'diapers', 'kleenex' , 'paper' , 'milk'
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })

  //exceptions    (for this we create a method inside a component)
  it('compiling android goes as expected' , () => {
    

    expect(() => component.compileCode()).toThrow();  // method is thrown or not
    expect(() => component.compileCode()).toThrow(Error);   // error is thrown or not

    //for exact error message
    expect(() => component.compileCode()).toThrow('Angular is not updated'); // method is throwing the same error or not
    expect(() => component.compileCode()).toThrow(/Angular/); // using regex if the given term is present or not
    
  })

});
