import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/services/serve.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  arrayFlats: Array<any> = [];
  adress: string = '';
  prise: string = '';
  phone: string = '';
  name: string = '';
  editIndex: number | string = '';
  editStatus: boolean = false;
  photo: string = '';
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
  addFlat(): void {
    const Flat = {
      name: this.name,
      phone: this.phone,
      adress: this.adress,
      prise: this.prise,
      photo: this.photo
    }
    this.service.add(Flat).subscribe(
      () => {
        this.getFlats();
      },
      error => {
        console.log(error);
      }
    )
    this.resetForm();
  }

  resetForm(): void {
    this.name = '';
    this.phone = '';
    this.adress = '';
    this.prise = '';
    this.photo = '';
  }

  delete(index: number | string): void {
    this.service.delete(index).subscribe(
      () => {
        this.getFlats();
      },
      error => {
        console.log(error);
      }
    )
  }


  edit(flat: any): void {
    this.name = flat.name;
    this.phone = flat.phone;
    this.adress = flat.adress;
    this.prise = flat.prise;
    this.photo = flat.photo;
    this.editIndex = flat.id;
    this.editStatus = true;
  }

  save(): void {
    const Flat = {
      name: this.name,
      phone: this.phone,
      adress: this.adress,
      prise: this.prise,
      photo: this.photo,
      id: this.editIndex,
    }
    this.service.edit(Flat).subscribe(
      () => {
        this.getFlats();
      },
      error => {
        console.log(error);

      }

    )
    this.resetForm();
    this.editStatus = false;
  }


}
