import { Component, OnInit } from '@angular/core';
import {Produto} from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import {Produtos} from '../produto'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos = Produtos;

  constructor(private carrinho:CarrinhoService) {

  }

  adicionarAoCarrinho(produto: Produto){
    this.carrinho.adicionarAoCarrinho(produto);
    console.log(produto.nome+ "Add to carrinho")
  }

  ngOnInit(): void {
  }

}
