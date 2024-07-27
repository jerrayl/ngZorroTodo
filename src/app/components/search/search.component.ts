import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@Component({
  selector: 'search-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './search.component.html',
  imports: [FormsModule, NzInputModule, NzAutocompleteModule],
  standalone: true
})
export class SearchComponent {
    inputValue?: string;
    options: string[] = [];
  
    onInput(event: Event): void {
      const value = (event.target as HTMLInputElement).value;
      this.options = value ? [value, value + value, value + value + value] : [];
    }
}
