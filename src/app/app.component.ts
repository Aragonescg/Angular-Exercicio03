import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tipoDoInput: string = 'password'
  texto: string = 'Olá Mundo'
  obrigatorio: boolean = true
  valorInput: number = 0


  constructor() {}
   
    incrementa() {
      this.valorInput++;
    }

    decrementa() {
      this.valorInput--;
    }



    /* alterarValor(event: any): void {
      this.valorInput = event.target.value

    } */
} 
