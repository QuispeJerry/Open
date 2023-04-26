import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //como se llama en el html, la etiqueta
  templateUrl: './app.component.html', // hoja html vinculada al componente
  styleUrls: ['./app.component.css'] // hoja de stilo css vinculada al componente
})
export class AppComponent {
  title = 'myFirstProject';
}
