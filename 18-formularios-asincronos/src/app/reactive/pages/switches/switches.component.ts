import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrl: './switches.component.css'
})
export class SwitchesComponent implements OnInit {

  public person = {
    genre: "M",
    notifications: true
  }

  public myForm: FormGroup = this.fb.group({
    genre: ["", Validators.required],
    notifications: [false, Validators.required],
    terms: [false, Validators.requiredTrue]
  })


  save = () => {
    if (this.myForm.invalid){
        this.myForm.markAllAsTouched()
        return
    }
    const formValue = {...this.myForm.value}
    delete formValue.terms

    this.person = formValue
    console.log(this.person);
  }


  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      terms: false
    })
  }

  isInvalidField(fieldName: string) {
    return this.myForm.controls[fieldName].errors
      && this.myForm.controls[fieldName].touched
  }

  constructor(
    private fb: FormBuilder
  ){}

}
