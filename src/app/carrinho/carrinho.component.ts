import { Produto } from './../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {
  produtos: Produto[];

  constructor(private carrinho: CarrinhoService) {
    this.produtos = carrinho.itens;


   }




  ngOnInit(): void {
  }




  colunas: string[] = ['nome', 'desc', 'peso', 'preco'];

}
