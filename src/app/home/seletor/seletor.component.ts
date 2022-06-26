import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto.model';
import {Item} from '../../models/item.model'
@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {
  quantidade = 1;

  @Input() produto: Produto;
  @Output() eventoDeClique: EventEmitter<Item> = new EventEmitter();

  adicionarAoCarrinho(produto: Produto){
    let item = {produto: produto, qtde: this.quantidade};
    this.eventoDeClique.emit(item);
    console.log(item);

  }

  constructor() {
    this.produto ={} as Produto;
  }

  ngOnInit(): void {
  }

  adicionarItem(){
    this.quantidade++;
    console.log("quantidade: " + this.quantidade);
  }

  removerItem(){
    if(this.quantidade > 1){
      this.quantidade--;
      console.log("quantidade: " + this.quantidade);
    }else{
      console.log("Não é possível remover");
    }
    }

}
