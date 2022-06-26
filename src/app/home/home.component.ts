import { CarrinhoService } from './../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Produtos } from '../produto';
import{Item} from '../models/item.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produto: Produto;

  adicionarAoCarrinho(item: Item){
    for(let index = 0; index <item.qtde; index++){
      this.carrinho.adicionarAoCarrinho(item.produto);
      console.log(item.produto.nome + "foi adicionado ao carrinho");


    }

  }



  constructor(private carrinho: CarrinhoService ) {


    this.produto = Produtos[2];
  }

  ngOnInit(): void {
  }

}
