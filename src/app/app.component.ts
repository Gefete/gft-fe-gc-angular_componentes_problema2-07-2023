import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gft-fe-gc-angular_componentes_problema2-07-2023';
  // Variables
  nombreapellido="";
  email="";
  message="";
  respuesta:number | undefined;
  contact:any=null;
  alertrespuesta="";
  alertnombreapellido="";
  alertemail="";
  alertmessage="";

  /* 
    Metodo que generara una simulacion de envio de contacto 
    en el se comprovara que los campos esten llenos y que la 
    respuesta sea correcta, despues de comprovar todas las 
    condicionales envia el contacto a otro componente
  */
  generateContact(){
    let envio = true;
    this.alertrespuesta = "";
    this.alertnombreapellido ="";
    this.alertemail ="";
    this.alertmessage ="";

    /* SI ALGUNO DE LOS CAMPOS ES INCORRECTO SE INDICA CON TEXTO ROJO */
    // Comprueva que la respuesta sea correcta
    if(this.respuesta != 5){
      this.alertrespuesta = "Validación anti-spam incorrecta";
      envio = false;
    }
    // Comprueva que el campo tenga algun valor
    if(this.nombreapellido == ""){
      this.alertnombreapellido = "Introduzca su nombre y apellido";
      envio = false;
    }
    // Comprueva que el campo tenga algun valor
    if(this.email == ""){
      this.alertemail = "Introduzca un email valido";
      envio = false;
    }
    // Comprueva que el campo tenga algun valor
    if(this.message == ""){
      this.alertmessage = "Introduzca un mensaje";
      envio = false;
    }
    
    // Si los datos pasan el filtro correctamente este crea el objeto para poder enviarlo
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
