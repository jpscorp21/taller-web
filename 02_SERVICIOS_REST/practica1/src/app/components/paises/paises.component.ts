import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];

  constructor(public paisesService: PaisesService) { }

  ngOnInit() {
    this.paisesService.getAll()
    .subscribe((value: any) => {
      console.log(value);
      this.paises = value;
    });

  }

}
