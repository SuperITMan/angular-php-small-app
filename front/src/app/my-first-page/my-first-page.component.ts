import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-first-page',
  templateUrl: './my-first-page.component.html',
  styleUrls: ['./my-first-page.component.css']
})
export class MyFirstPageComponent implements OnInit {

  response: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  sayHelloToServer() {
    this.httpClient.get("https://a585e16f-3100-46a2-a9fa-5ced9fbe86f1.mock.pstmn.io/test").subscribe(
      (value: object) => {
        console.log("Value received: ", value);
        this.response = value.toString();
      }
    )
  }
}
