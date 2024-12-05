import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  mensaje: string = 'Hola Mundo';
  nombre: string = 'Jesus Miguel Hernandez Garcia';
  edad: number = 22;
  correo: string = 'jesmiguelhdzg@gmail.com';

}
