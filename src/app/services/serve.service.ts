import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/flats'
  }
  get(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url);
  }
  add(newFlat: any): Observable<any> { return this.http.post<any>(this.url, newFlat) }
  delete(index: number | string): Observable<any> { return this.http.delete<any>(`${this.url}/${index}`) }
  edit(newFlat: any): Observable<any> {
    return this.http.put(`${this.url}/${newFlat.id}`, newFlat)
  }
}
