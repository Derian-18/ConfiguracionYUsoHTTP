import { Component } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsuariosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}