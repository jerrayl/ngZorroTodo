import { Component } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';

type ListData = {
  title: string,
  description: string;
}

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  imports: [NzListModule],
  standalone: true
})
export class ListComponent {
  loading = false;
  data: ListData[] = [];

  load(): void {
    this.data = Array.from({ length: 5 }, (_, i) => 
      ({
        title: `Title ${i}`,
        description: "Description"
      })
    );
  }
}