import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJuegosComponent } from './componentes/lista-juegos/lista-juegos.component';
import { FiltroJuegosComponent } from './componentes/filtro-juegos/filtro-juegos.component';
import { DetalleJuegoComponent } from './componentes/detalle-juego/detalle-juego.component';

const routes: Routes = [
  { path: '', redirectTo: '/juegos', pathMatch: 'full' },
  { path: 'juegos', component: ListaJuegosComponent },
  { path: 'juegos/filtrar', component: FiltroJuegosComponent },
  { path: 'juegos/:id', component: DetalleJuegoComponent },
  // Puedes agregar m�s rutas seg�n las necesidades de tu aplicaci�n
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
