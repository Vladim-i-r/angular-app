import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],   // Faltaba añadir el CommonModule para usar el *ngIf
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola Mundo Angular 17';  // No tenia el string, pero con las comillas entiende que es string, antes era title = '';
  enabled: boolean = false;

  setEnabled(): void{
    this.enabled = this.enabled? false: true;  // Esto es un if, si es true se cambia a false
    console.log('Hemos cambiado el title con el click!')
  }
}

