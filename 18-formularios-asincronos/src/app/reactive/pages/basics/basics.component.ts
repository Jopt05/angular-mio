import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stocks: [0, [Validators.required, Validators.min(10)]]
  })

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm.setValue({
      name: 'Predeterminado',
      price: 1,
      stocks: 0
    })
  }

  isInvalidField(fieldName: string) {
    return this.myForm.controls[fieldName].errors
      && this.myForm.controls[fieldName].touched
  }

  save() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return
    }

    this.myForm.reset();
  }

}
