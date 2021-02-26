import { Directive, DoCheck, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import Cpf from './utils/cpf'

@Directive({
  selector: '[cpf]',
  providers: [{provide: NG_VALIDATORS, useExisting: CpfDirective, multi: true}]
})
export class CpfDirective implements Validator {
  @Input('cpf') cpf: string;
  
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value && !Cpf.validate(control.value) ? {
      invalidCpf: true
    } : null;
  }
}
