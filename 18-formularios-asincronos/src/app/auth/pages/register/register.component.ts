import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  private _patternNameSurName: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.patternNameSurname)]],
    email: ['', [Validators.required], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorsService.canNotBe]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirm_password: ['', [Validators.required]],
  }, {
    validators: [this.validatorsService.equalsFields('password', 'confirm_password')]
  })

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ){}

  get emailError(): string {
    const email = this.form.get('email')
    if ( email!.getError('required') ) return 'El email es obligatorio'
    else if ( email!.getError('pattern') ) return 'El email debe tener un formato de correo'
    else if ( email!.getError('emailIsUsed') ) return 'El email ya está siendo usado por otro usuario'
    return ''
}

  ngOnInit(): void {

  }

  isInvalidField = (field: string) => {
    return this.form.controls[field].errors && this.form.controls[field].touched && this.form.get(field)?.invalid
  }

  save = () => {
      if (this.form.invalid) {
          this.form.markAllAsTouched()
          return
      }

      console.log(this.form.value)
  }

}
