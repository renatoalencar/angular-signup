import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { Browser } from 'protractor';
import { CpfDirective } from '../cpf.directive';
import { PasswordConfirmationDirective } from './password-confirmation.directive';

import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignupFormComponent,
        CpfDirective,
        PasswordConfirmationDirective,
      ],
      imports: [FormsModule, NgxMaskModule.forRoot(), BrowserAnimationsModule],
    }).compileComponents();
  });

  it('should have cpf, login, name, password and confirmPassword fields', () => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const element = fixture.nativeElement;

    expect(element.querySelector('[name="cpf"]')).toBeTruthy();
    expect(element.querySelector('[name="login"]')).toBeTruthy();
    expect(element.querySelector('[name="name"]')).toBeTruthy();
    expect(element.querySelector('[name="password"]')).toBeTruthy();
    expect(element.querySelector('[name="confirmPassword"]')).toBeTruthy();
  });

  it('should validate cpf field correctly', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const component = fixture.componentInstance;

    /* Invalid CPF */
    component.customer.cpf = '34512356788';
    fixture.detectChanges();

    tick();

    expect(component.form.controls.cpf.errors.invalidCpf).toBeTrue();

    /* Valid CPF */
    component.customer.cpf = '57602492072';
    fixture.detectChanges();

    tick();

    expect(component.form.controls.cpf.valid).toBeTrue();
  }));

  it('should format a cpf field', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const component = fixture.componentInstance;

    /* Invalid CPF */
    component.customer.cpf = '34512356788';
    fixture.detectChanges();

    tick();

    expect(component.customer.cpf).toBe('34512356788');
    expect(fixture.nativeElement.querySelector('[name="cpf"]').value).toBe(
      '345.123.567-88'
    );
  }));

  it('should validate login', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const component = fixture.componentInstance;

    component.customer.login = 'john~doe';
    fixture.detectChanges();

    tick();

    expect(component.form.controls.login.errors.pattern).toBeDefined();

    component.customer.login = 'john.doe_-123';
    fixture.detectChanges();

    tick();

    expect(component.form.controls.login.valid).toBeTrue();
  }));

  it('should validate password to have 8 characters', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const component = fixture.componentInstance;

    component.customer.password = '12345';
    fixture.detectChanges();

    tick();

    expect(component.form.controls.password.errors.minlength).toBeDefined();

    component.customer.password = 'pwd12345';
    fixture.detectChanges();

    tick();

    expect(component.form.controls.password.valid).toBeTrue();
  }));

  it('should validate that confirmPassword is equal to password', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const component = fixture.componentInstance;

    component.customer.password = 'pwd12345';
    component.confirmPassword = 'pwd123456';
    fixture.detectChanges();

    tick();

    expect(component.form.errors.confirmPassword).toBeDefined();

    component.confirmPassword = 'pwd12345';
    fixture.detectChanges();

    tick();

    expect(component.form.errors).toBeNull();
  }));

  it('should require cpf field', fakeAsync(() => {
    const fixture = TestBed.createComponent(SignupFormComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    tick();

    expect(component.form.controls.cpf.errors.required).toBeTrue();
    expect(component.form.controls.login.errors.required).toBeTrue();
    expect(component.form.controls.name.errors.required).toBeTrue();
    expect(component.form.controls.password.errors.required).toBeTrue();
    expect(component.form.controls.confirmPassword.errors.required).toBeTrue();
  }));

  // it('should disable buttons when invalid', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(SignupFormComponent);

  //   fixture.detectChanges();

  //   tick();

  //   expect(
  //     fixture.nativeElement.querySelector('button[type="submit"]').disabled
  //   ).toBeTrue();
  // }));
});
