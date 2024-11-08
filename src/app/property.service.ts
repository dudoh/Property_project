import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl = 'http://localhost:3000/properties'; // Adjust the URL if necessary

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.baseUrl);
  }

  getProperty(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.baseUrl}/${id}`);
  }
}
