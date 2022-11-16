import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  state: boolean = true;

  getNewestComic() {

  }

  getComicViaSearch(queryName: any) {
    console.log(queryName);
  }

  resetQueryField(form: NgForm) {
    form.resetForm();
  }
}

