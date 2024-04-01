import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/components/product.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],   // Faltaba añadir el CommonModule para usar el *ngIf, aqui se puede anidar los otros componentes siendo este el root
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hola Mundo Angular 17';  // No tenia el string, pero con las comillas entiende que es string, antes era title = '';
  enabled: boolean = false;

  courses: string[] = ['Angular','SpringBoot','React'];

  setEnabled(): void{
    this.enabled = this.enabled? false: true;  // Esto es un if, si es true se cambia a false
    console.log('Hemos cambiado el title con el click!')
  }
}

