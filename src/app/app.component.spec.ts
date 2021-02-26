import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppComponent } from './app.component';
import { CpfDirective } from './cpf.directive';
import { PasswordConfirmationDirective } from './signup-form/password-confirmation.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SignupFormComponent,
        CpfDirective,
        PasswordConfirmationDirective
      ],
      imports: [FormsModule, NgxMaskModule.forRoot(), BrowserAnimationsModule]
    }).compileComponents();
  });

  it('should render sign up form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
  });
});
