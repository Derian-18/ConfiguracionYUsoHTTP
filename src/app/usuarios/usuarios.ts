import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService, Usuario } from '../services/usuarios';
import { timeout, catchError, finalize, of, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent implements OnInit {
  private usuariosService = inject(UsuariosService);

  usuarios$!: Observable<Usuario[] | null>;
  errorOcurrido = false;

  ngOnInit(): void {
    this.usuarios$ = this.usuariosService.obtenerUsuarios().pipe(
      catchError((err) => {
        console.error('Error HTTP:', err);
        this.errorOcurrido = true;
        return of(null);
      })
    );
  }
}