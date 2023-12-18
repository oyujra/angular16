import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego.interface';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  constructor(private http: HttpClient) {}
  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`/api/games`);
  }
  getJuegoById(id: number): Observable<Juego> {
    return this.http.get<Juego>(`/api/game?id=${id}`);
  }
}
