import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { SearchComponent } from './components/search/search.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardContainerComponent } from './components/card/cardcontainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonComponent, NzLayoutModule, CardContainerComponent, SearchComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'todo-app';
  isNewNoteVisible = false;
  
  showNewNote(): void {
    this.isNewNoteVisible = true;
  }

  closeNewNoteModal(): void {
    this.isNewNoteVisible = false;
  }
}
