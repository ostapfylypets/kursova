import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/services/serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrayFlats: Array<any> = [];
  constructor(private service: ServeService) { }

  ngOnInit(): void {
    this.getFlats();
  }
  getFlats(): void {
    this.service.get().subscribe(
      data => {
        this.arrayFlats = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
