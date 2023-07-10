import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gft-fe-gc-angular_componentes_problema2-07-2023';
  nombreapellido="";
  email="";
  message="";
  respuesta:number | undefined;
  contact:any=null;
  alertrespuesta="";
  alertnombreapellido="";
  alertemail="";
  alertmessage="";
  generateContact(){
    let envio = true;
    this.alertrespuesta = "";
    this.alertnombreapellido ="";
    this.alertemail ="";
    this.alertmessage ="";

    if(this.respuesta != 5){
      this.alertrespuesta = "Validación anti-spam incorrecta";
      envio = false;
    }
    if(this.nombreapellido == ""){
      this.alertnombreapellido = "Introduzca su nombre y apellido";
      envio = false;
    }
    if(this.email == ""){
      this.alertemail = "Introduzca un email valido";
      envio = false;
    }
    if(this.message == ""){
      this.alertmessage = "Introduzca un mensaje";
      envio = false;
    }
    
    if (envio){
      this.contact={
        "nombreapellido":this.nombreapellido,
        "email":this.email,
        "message":this.message,
        "respuesta":this.respuesta
      }
    }
  }
}
