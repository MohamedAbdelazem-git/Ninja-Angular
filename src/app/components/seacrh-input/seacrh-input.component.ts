import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seacrh-input',
  templateUrl: './seacrh-input.component.html',
  styleUrls: ['./seacrh-input.component.css'],
})
export class SeacrhInputComponent {
  @Output() searchData = new EventEmitter();
  searchTitle(input: HTMLInputElement) {
    this.searchData.emit(input.value);
  }
}
