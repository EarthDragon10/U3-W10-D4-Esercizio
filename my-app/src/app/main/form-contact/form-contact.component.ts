import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
})
export class FormContactComponent implements OnInit {
  singleContact = new Contact();

  constructor() {}

  ngOnInit(): void {}
}
