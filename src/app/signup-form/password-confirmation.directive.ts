import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[passwordConfirmation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationDirective,
      multi: true,
    },
  ],
})
export class PasswordConfirmationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value !== confirmPassword.value
      ? { confirmPassword: { value: confirmPassword.value } }
      : null;
  }
}
