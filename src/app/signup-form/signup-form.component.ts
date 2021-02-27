import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Customer } from '../customer';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  animations: [
    trigger('loadingSuccess', [
      state(
        'idle',
        style({
          display: 'none',
        })
      ),
      state(
        'loading',
        style({
          width: 0,
          height: 0,
        })
      ),
      state(
        'success',
        style({
          width: 18,
          height: 18,
        })
      ),
      transition('* => success', [animate('0.7s cubic-bezier(0, 0.4, 0.9, 1)')]),
    ]),
  ],
})
export class SignupFormComponent {
  customer: Customer = new Customer(null, null, null, null);
  confirmPassword: string = null;
  @ViewChild('form') form: NgForm;

  // idle loading success error
  state = 'idle';

  showPassword = false;

  onSubmit(event) {
    of(this.customer)
      .pipe(tap(() => (this.state = 'loading')))
      .pipe(delay(3000))
      .subscribe(() => (this.state = 'success'));
  }

  onShowPassword(show: boolean) {
    this.showPassword = show;
  }
}
