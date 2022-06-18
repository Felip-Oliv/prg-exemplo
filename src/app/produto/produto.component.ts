import { Component, OnInit } from '@angular/core';

import {Produtos} from '../produtos'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos = Produtos;
  constructor() { }

  ngOnInit(): void {
  }

}
