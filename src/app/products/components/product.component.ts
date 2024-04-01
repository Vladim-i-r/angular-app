import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],                        // Si se requiere que este sea el root se agregan las CommonModule, RouterOutlet
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
  
}

