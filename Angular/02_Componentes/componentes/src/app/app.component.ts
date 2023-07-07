import { 
  Component, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements 
    OnInit, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
  {

  public valor : number = 1;
  public title : string = 'Bem vindo!';
  public destruir : boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout( () => {
      console.log('onInit!!')
    }, 2000);    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  

  public add() : void {
    this.valor++;
  }

  public destroy() : void {
    this.destruir = !this.destruir;
  }



}
