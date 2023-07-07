import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  public nome: string = 'Filipe';
  public nome2: string = '';
  public idade: number = 30;
  public checkedDisabled: boolean = false;
  public imgUrl: string = 'https://picsum.photos/200/300';
  public position: { x: number, y: number } = { x: 0, y: 0 };

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: string) {
    alert(`Funcionou${valor}`);
  }

  public mouse(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTest(pos: MouseEvent) {
    this.position.x = pos.offsetX;
    this.position.y = pos.offsetY;
    // console.log(this.position);
  }

}
