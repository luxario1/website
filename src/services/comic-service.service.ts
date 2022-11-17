import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {

  //private host: string = `${window.location.protocol}//${window.location.hostname}`;

  urlGetComic: any = `http://localhost/website/getComics.php`;
  //urlGetComic: any = `https://xkcd.com/2054/info.0.json`;

  constructor(private http: HttpClient) {}

    getComic(data: any): Observable<any> {
      return this.http.post(this.urlGetComic, data);
  }
}
