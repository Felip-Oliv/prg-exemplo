import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: Produto[];


  constructor() {
    this.itens = [];

   }

   adicionarAoCarrinho(produto: Produto){
     this.itens.push(produto);

   }

   listaItens(){
     return this.itens;

   }

   limparCarrinho(){
    this.itens = [];
    return this.itens

   }
}
