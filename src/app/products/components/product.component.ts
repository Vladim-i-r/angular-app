import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],                        // Si se requiere que este sea el root se agregan las CommonModule, RouterOutlet
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  
  products: Product[] = [];
  
  constructor(private service: ProductService) { 
  }
  
  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      this.products = products;
    })
  }
  
  addProduct(product: Product) {
    product.id = new Date().getTime();
    this.products.push(product);                          //? Forma MUTABLE
    //this.products = [... this.products, {...product}];    //? Forma INMUTABLE EN ANGULAR DA LO MISMO EN REACT NO 
  }
}

