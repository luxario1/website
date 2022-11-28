import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  //private host: string = `${window.location.protocol}//${window.location.hostname}`;

  urlGetComic: any = `http://34.78.156.212/getComics.php`;
  urlGetNewestComic: any = `https://xkcd.com/info.0.json`;

  constructor(private http: HttpClient) {}

    getComic(data: any): Observable<any> {
      return this.http.post(this.urlGetComic, data);
  }

  getNewestComic(): Observable<any> {
    return this.http.get(this.urlGetNewestComic);
  }
}
