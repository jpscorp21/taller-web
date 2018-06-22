import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../../models/paises';
import { Model, ModelFactory } from 'ngx-model';

@Injectable()
export class PaisesService {

  private model: Model<Paises[]>;
  paises$: Observable<Paises[]>;

  constructor(private http: HttpClient, public modelFactory: ModelFactory<Paises[]>) {
    this.model = this.modelFactory.create([]);
    this.paises$ = this.model.data$;
  }

  get() {
    this.http.get('https://restcountries.eu/rest/v2/all')
    .timeout(5000)
    .map((data: any) => {
      return data.map((item) => {
        let pais = new Paises();
        pais.name = item.name;
        pais.capital = item.capital;
        pais.region = item.region;
        pais.flag = item.flag;
        return pais;
      })
    })
    .catch((error) => {
      console.log(error);
      return [];
    })
    .subscribe((data) => {
      this.model.set(data);
    })
  }
}
