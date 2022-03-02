import { Component, OnInit } from '@angular/core';
import { DimensoesService } from '../../servicos/dimensoes.service';

@Component({
  selector: 'retangulo-legal',
  templateUrl: './retangulo.component.html',
  styleUrls: ['./retangulo.component.css'],
  providers: [DimensoesService]
})
export class RetanguloLegalComponent implements OnInit {

  larguraRetangulo: number = 0;
  alturaRetangulo: number = 0;


  constructor(
    private fornecedorDimensoes: DimensoesService
  ) { }

  ngOnInit(): void {
    let dimensoes: any = this.fornecedorDimensoes.obterDimensoesDaForma();
    this.larguraRetangulo = dimensoes.largura;
    this.alturaRetangulo = dimensoes.altura;
  }

  public incrementarLarguraRetangulo() {
    this.larguraRetangulo = this.fornecedorDimensoes.incrementarLargura(30);
  }

}