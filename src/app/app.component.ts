import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonComponent, NzLayoutModule, ListComponent, SearchComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'todo-app';
  isNewNoteVisible = false;
  
  showNewNote(): void {
    this.isNewNoteVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isNewNoteVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isNewNoteVisible = false;
  }
}
