import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  
  onSubmit(productForm: NgForm) {
    if (productForm.valid)  {
      this.newProductEvent.emit(this.product);
      console.log(this.product);
    }   
    productForm.reset();
    productForm.resetForm();
  }    
  
  clean(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0
    };
    
  }
}
