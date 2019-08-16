import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'y';
  listOfObjects = [];

  ngOnInit() {
    const input = {name: 'nome', value: 100000};
    const input2 = {name: 'nome', value: 200000};
    const input3 = {name: 'nome', value: 300000};
    const input4 = {name: 'nome', value: 400000};
    const input5 = {name: 'nome', value: 500000};
    const input6 = {name: 'nome', value: 600000};
    this.listOfObjects.push(input);
    this.listOfObjects.push(input2);
    this.listOfObjects.push(input3);
    this.listOfObjects.push(input4);
    this.listOfObjects.push(input5);
    this.listOfObjects.push(input6);
  }
}
