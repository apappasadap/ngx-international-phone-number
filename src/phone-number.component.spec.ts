import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryService } from './country.service';
import { PhoneNumberComponent } from './phone-number.component';
import 'jasmine';

describe('PhoneNumberComponent', () => {
  let comp: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  beforeEach(() => {
    const elementRefStub = {
      nativeElement: {
        contains: () => ({})
      }
    };
    const formControlStub = {
      value: {}
    };
    const countryServiceStub = {
      getCountries: () => ({})
    };
    TestBed.configureTestingModule({
      declarations: [PhoneNumberComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ElementRef, useValue: elementRefStub },
        { provide: FormControl, useValue: formControlStub },
        { provide: CountryService, useValue: countryServiceStub }
      ]
    });
    fixture = TestBed.createComponent(PhoneNumberComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  it('placeholder defaults to: Enter phone number', () => {
    expect(comp.placeholder).toEqual('Enter phone number');
  });

  it('maxlength defaults to: 15', () => {
    expect(comp.maxlength).toEqual(15);
  });

  it('allowDropdown defaults to: true', () => {
    expect(comp.allowDropdown).toEqual(true);
  });

  it('showDropdown defaults to: false', () => {
    expect(comp.showDropdown).toEqual(false);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const countryServiceStub: CountryService = fixture.debugElement.injector.get(CountryService);
      spyOn(countryServiceStub, 'getCountries');
      comp.ngOnInit();
      expect(countryServiceStub.getCountries).toHaveBeenCalled();
    });
  });
});
