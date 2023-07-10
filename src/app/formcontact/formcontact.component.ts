import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.css']
})
export class FormcontactComponent {

  @Input() contact:any;
}
