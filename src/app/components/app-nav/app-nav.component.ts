import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css'],
})
export class AppNavComponent {
  @Output() searchData = new EventEmitter();
  searchTitle(input: HTMLInputElement) {
    this.searchData.emit(input.value);
  }
}
