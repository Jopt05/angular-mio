import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {

  @ViewChild('myForm') public form!: NgForm;

  save() {
    console.log(this.form);
    this.form.reset({
      price: 0,
      stocks: 0
    })
  }

  validProduct(): boolean {
    return this.form?.controls['product']?.invalid
      && this.form?.controls['product']?.touched
  }

  validPrice(): boolean {
    return this.form?.value.price < 0 || this.form?.value.price == ''
      && this.form?.controls['price']?.touched
  }

}
