import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tops } from './models/tops';

@Injectable({
  providedIn: 'root'
})
export class TopsService {

  dataSource: string = "http://localhost:3000/tops"

  // dataSource: string = "http://localhost:4200/products";

  constructor(private http: HttpClient) { }

  getAllTops(): Observable<Tops[]> {
    return this.http.get<Tops[]>(this.dataSource);
  }

  getTopByID(id: number): Observable<Tops> {
    return this.http.get<Tops>(this.dataSource + "/" + id);
  }

  createNewTop(newTop: Tops): Observable<Tops> {
    return this.http.post<Tops>(this.dataSource, newTop);
  }
  editTopByID(id: number, edittedTop: Tops): Observable<Tops> {
    return this.http.put<Tops>(this.dataSource + "/" + id, edittedTop);
  }
  deleteTopByID(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id)
  }
}
