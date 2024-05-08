import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrl: './country-input.component.css'
})
export class CountryInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public term: string = "";
  public debouncer: Subject<string> = new Subject()

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => this.onDebounce.emit(value))
  }

  onKeyPressed() {
    this.debouncer.next(this.term);
  }

  search() {
    this.onEnter.emit(this.term);
  }
}
