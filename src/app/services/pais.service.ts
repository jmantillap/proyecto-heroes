import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { map } from 'rxjs';
import { IRestCountries } from '../interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) { }

  getPaises() {
    return this._http.get<IRestCountries[]>('https://restcountries.com/v2/lang/es')
      .pipe(
        map((resp: IRestCountries[]): Pais[] =>
          resp.map(
            (pais: IRestCountries): Pais => ({ nombre: pais.name, codigo: pais.alpha3Code })
          )
        )
      )
  }



}
