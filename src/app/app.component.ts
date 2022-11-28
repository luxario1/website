import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ComicServiceService} from "../services/comic-service.service";
import {emitDistinctChangesOnlyDefaultValue} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  state: boolean = true;
  newestComic: any;
  comicArray: string[] = [];
  comicReceived: boolean = false;

  constructor(private manageComicService: ComicServiceService) {
  }

  async getNewestComic() {
    await new Promise<void>(resolve => {
      this.manageComicService.getNewestComic().subscribe(value => {
        if (value) {
          this.newestComic = value.img;
          this.comicReceived = true;
        }
        resolve();
      });
    });
  }

  async getComicViaSearch(queryName: any) {
    console.log(queryName);

    let data = {
      'query': queryName
    }
    await new Promise<void>(resolve => {
      this.manageComicService.getComic(data).subscribe(value => {
        this.comicArray.length = 0;
        if (value && value.length != 0) {
          for (let i = 0; i < value.length; i++) {
            this.comicArray.push(value[i].img);
          }
          this.comicReceived = true;
        }
        resolve();
      });
    });
  }

  resetQueryField(form: NgForm) {
    form.resetForm();
  }
}

