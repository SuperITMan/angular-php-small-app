import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-first-page',
  templateUrl: './my-first-page.component.html',
  styleUrls: ['./my-first-page.component.css']
})
export class MyFirstPageComponent implements OnInit {

  response: object;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  sayHelloToServer() {
    this.httpClient.get("http://localhost:8083/api/test").subscribe(
      (value: object) => {
        console.log("Value received: ", value);
        this.response = value;
      }
    )
  }
}
