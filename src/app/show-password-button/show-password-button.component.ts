import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-show-password-button',
  templateUrl: './show-password-button.component.html',
  styleUrls: ['./show-password-button.component.css']
})
export class ShowPasswordButtonComponent {
  showPassword = false;

  @Output() show = new EventEmitter<boolean>();

  onShowPassword() {
    this.showPassword = !this.showPassword;
    this.show.emit(this.showPassword);
  }
}
