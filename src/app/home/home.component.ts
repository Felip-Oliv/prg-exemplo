import { CarrinhoService } from './../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Produtos } from '../produto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produto: Produto;


  constructor(private carrinho: CarrinhoService ) {


    this.produto = Produtos[6];
  }

  ngOnInit(): void {
  }

}
