import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Rubric } from '../classes/rubric';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  boxContacts: Rubric[] = [];

  constructor() {}

  ngOnInit(): void {}

  addItem(elem: Rubric) {
    this.boxContacts.push(elem);
    console.log(elem);
  }
}
