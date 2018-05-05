import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ServerService} from '../../server.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
})
export class HighscoreComponent implements OnInit {
  number = 0;
  rows: any = [{}];
  constructor(private location: Location, private server: ServerService) {}
  ngOnInit() {
    console.log(this.rows);
    console.log('Highscores');
    this.server.getHighscores().subscribe(
      (response) => {
        console.log(response);
        this.rows = response;
      }, (error: HttpErrorResponse) => {
        console.log(error);
        console.log(error.status.toString());
        console.log(error.error.error_message);
      }
    );
    console.log('Rows:');
    console.log(this.rows);
  }
  backClicked() {
    this.location.back();
  }
}
