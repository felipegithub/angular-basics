import { Injectable } from '@angular/core';

@Injectable()
export class DimensoesService {
  
  private largura: number = 200;
  private altura: number = 100;

  constructor() { }

  public obterDimensoesDaForma(): any {
    return {
      altura: this.altura,
      largura: this.largura
    };
  }

  public incrementarLargura(ammount: number): number {
    this.largura += ammount;
    return this.largura;
  }
}
