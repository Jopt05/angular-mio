import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)]],

    // Tipo array
    favorites: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ], [Validators.required])
  });

  public newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  constructor(
    private formBuilder: FormBuilder
  ){}

  isInvalidField(fieldName: string) {
    return this.myForm.controls[fieldName].errors
      && this.myForm.controls[fieldName].touched
  }

  addFav() {
    if( this.newFavorite.invalid ) return;
    this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  deleteFav(index: number) {
    this.favoritesArr.removeAt(index);
  }

  save() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return
    }

    this.myForm.reset();
  }

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray
  }

}
