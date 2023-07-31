import { Component } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent {

  total: number = 0;

  perPage: number;

  numberPages: number = 0;
  pages: number[] = [];
  constructor(
    private albumService: AlbumService
  ) {

    this.perPage = this.albumService.paginateNumberPage();
  }

  ngOnInit(): void {
    this.total = this.albumService.count();
    this.numberPages = Math.ceil(this.total / this.perPage)

    for (let i = 1; i < this.numberPages; i++) {
      this.pages.push(i)
      
    }
  }

}
