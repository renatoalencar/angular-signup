import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CpfDirective } from './cpf.directive';
import { PasswordConfirmationDirective } from './signup-form/password-confirmation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CpfDirective,
    PasswordConfirmationDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
