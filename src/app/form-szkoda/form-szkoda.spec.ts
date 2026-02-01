import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { vi } from 'vitest';

import { FormSzkoda } from './form-szkoda';

describe('FormSzkoda', () => {
  let component: FormSzkoda;
  let fixture: ComponentFixture<FormSzkoda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSzkoda, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSzkoda);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.form.valid).toBe(false);
  });

  it('submit should log form value when valid', () => {
    const logSpy = vi.spyOn(console, 'log');
    component.form.patchValue({
      imie: 'Jan',
      nazwisko: 'Kowalski',
      email: 'jan@example.com',
      telefon: '123456789',
      marka: 'Toyota',
      model: 'Corolla',
      rejestracja: 'WA 12345',
      vin: '12345678901234567',
      dataZdarzenia: '2025-01-15',
      opis: 'Opis szkody który ma co najmniej pięćdziesiąt znaków aby spełnić walidację formularza.',
    });
    component.onSubmit();
    expect(logSpy).toHaveBeenCalledWith(
      'Formularz wysłany:',
      expect.objectContaining({
        imie: 'Jan',
        nazwisko: 'Kowalski',
        email: 'jan@example.com',
      })
    );
  });
});
