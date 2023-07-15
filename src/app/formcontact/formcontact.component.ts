import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.css']
})
export class FormcontactComponent {

  // Recibe los datos del componente padre
  @Input() contact:any;
}
