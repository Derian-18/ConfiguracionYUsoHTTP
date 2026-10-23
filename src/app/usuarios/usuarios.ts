import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService, Usuario } from '../services/usuarios';
import { timeout, catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent implements OnInit {
  private usuariosService = inject(UsuariosService);

  usuarios: Usuario[] = [];
  cargando = true;
  error = '';

  ngOnInit(): void {
    console.log('Componente inicializado');

    this.usuariosService.obtenerUsuarios().subscribe({
      next: (datos) => {
        console.log('Usuarios recibidos:', datos);

        this.usuarios = datos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error HTTP:', err);

        this.error = 'No se pudieron cargar los usuarios.';
        this.cargando = false;
      },
      complete: () => {
        console.log('Solicitud completada');
      }
    });
  } 
} 