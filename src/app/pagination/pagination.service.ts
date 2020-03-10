import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsInfo } from '../pet-list/petsInfo';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http: HttpClient) { }



  getmoreDetails(): Observable<PetsInfo[]>{
    return this.http.get<PetsInfo[]>("http://localhost:3000/moreDetails");
  }
  getByDetails(generation: string){
    return this.http.get<PetsInfo[]>("http://localhost:3000/posts/id?_embed=moreDetails=" + generation);

  }
}
//http://localhost:3000/posts/id?_embed=moreDetails?id&petinformation=