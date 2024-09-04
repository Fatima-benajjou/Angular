import { Component } from '@angular/core';
import { PipePipe } from '../../utils/pipe.pipe';

@Component({
  standalone :true,
  selector: 'app-series',
  imports: [PipePipe
   ],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  seriesList: string[] = ['Breaking Bad', 'Game of Thrones', 'Stranger Things', 'The Witcher'];
  order: "asc" | "desc" = "asc"
  deleteSeries(index: number): void {
    this.seriesList.splice(index, 1);
  }
  orderFunction () :void {
this.order = this.order == "asc" ? "desc" : "asc"
  }
}

