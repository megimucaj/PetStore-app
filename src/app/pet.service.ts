import { Injectable } from '@angular/core';
import { Pets } from './pet-list/pets';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  //Kur ju ofroni shërbimin në root level, Angular krijon një shembull të vetëm, të përbashkët të HeroService dhe
  //injekton në çdo klasë që e kërkon atë.
  providedIn: 'root',
})
export class PetService {
  
  getPetList(): Pets[] {
    throw new Error("Method not implemented.");
  }


  constructor(private http: HttpClient) { }


  getPets(): Observable<Pets[]>{
   return this.http.get<Pets[]>("http://localhost:3000/posts");
  }



}
