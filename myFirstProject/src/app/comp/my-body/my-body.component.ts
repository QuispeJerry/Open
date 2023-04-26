import { Component } from '@angular/core';

@Component({
  selector: 'app-my-body',
  templateUrl: './my-body.component.html',
  styleUrls: ['./my-body.component.css']
})
export class MyBodyComponent {
  numero = 10;
  cadena = "jhhjhkjhfdjhkjfdd";
  calcular(): number {
    return 10 + this.numero;
  }
}
