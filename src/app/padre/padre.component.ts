import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

mensajeRecibido: string ="";

recibirMensaje(Sevent: string) {
  this.mensajeRecibido = Sevent;
}






  valorContador: number = 0;
   // mensajePadre = "Ojala Messi y Ronaldo lleguen al proximo Mundial"  (padre.html)<app-hijo [recibeHijo] = "mensajePadre"></app-hijo>
  
  incrementar() {
    this.valorContador++;
  }
  
  decrementar() {
    this.valorContador--;
  }
  
  

}
