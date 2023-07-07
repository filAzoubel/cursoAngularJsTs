import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public texto : string = "Olá mundo!";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    setTimeout( () => {
      console.log('Valor alterado!');
    }, 2000); 
  }

  ngOnDestroy(): void {
    console.log('\nngOnDestroy - Componente destruído!\n\n');
  }

}
