import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import {DataResult, Ezur, People} from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://localhost:63830/Service1.svc";

  constructor(private http: HttpClient) { }

  getYeshuvimAndMerchavim(): Observable<DataResult> {
    return this.http.get<DataResult>(`${this.baseUrl}/getData`)
  }

  getEzurimByMerchav(merchav: number): Observable<Ezur[]> {
    return this.http.get<Ezur[]>(`${this.baseUrl}/getEzorimByMerchav?merchav=${merchav}`, )
  }

  getRellavantPeople(yeshuv: number, merchav: number,ezor: number): Observable<People[]> {
    return this.http.get<People[]>(`${this.baseUrl}/getRellavantPeople?yeshuv=${yeshuv}&merchav=${merchav}&ezor=${ezor}`);
  }
}
