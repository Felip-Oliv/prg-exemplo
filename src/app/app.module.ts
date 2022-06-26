import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AdmComponent } from './adm/adm.component';
import { SobreComponent } from './sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SeletorComponent } from './home/seletor/seletor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ProdutoComponent,
    CarrinhoComponent,
    AdmComponent,
    SobreComponent,
    SeletorComponent
  ],
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
