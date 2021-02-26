import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        background: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        background: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class SignupFormComponent {
  customer: Customer = new Customer(null, null, null, null);
  confirmPassword: string = null;
  @ViewChild('form') form: NgForm;

  isOpen = true;

  onSubmit(event) {
    console.log(event);
    console.log(this.customer);
    this.toggle();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
