import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  // product: Product= new Product();
  @Input() product: Product = { 
    id: 0,         
    name: '',              
    description: '',
    price: 0
  };

  @Output() newProductEvent = new EventEmitter();       // Indicar que vamos a enviar informacion al componente padre

  
  onSubmit() {
    this.newProductEvent.emit(this.product);
    console.log(this.product);
  }    
  
  clean(): void {
    this.product = new Product();
  }
}
