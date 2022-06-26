import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {
  quantidade = 1;
  constructor() { }

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
