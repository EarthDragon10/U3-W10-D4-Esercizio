import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rubric } from 'src/app/classes/rubric';

@Component({
  selector: 'app-form-contatti',
  templateUrl: './form-contatti.component.html',
  styleUrls: ['./form-contatti.component.css'],
})
export class FormContattiComponent implements OnInit {
  contact = new Rubric();

  @Output() contactElement = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addContact(): void {
    console.log(this.contact.name, this.contact.lastname, this.contact.address);

    this.contactElement.emit(this.contact);
  }
}
