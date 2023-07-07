import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  public title : string = "Bem Vindo!";
  @Input() public titleChanges: string = "Olá Mundo!";

  constructor() { }

  ngOnInit(): void {
  }

}
