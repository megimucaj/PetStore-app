import { Injectable } from '@angular/core';
import { Pets } from './pet-list/pets';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  //Kur ju ofroni shërbimin në root level, Angular krijon një shembull të vetëm, të përbashkët të HeroService dhe
  //injekton në çdo klasë që e kërkon atë.
  providedIn: 'root',
})

export class PetService {
  constructor(private http: HttpClient) { }

  getPetList(): Pets[] {
    throw new Error("Method not implemented.");
  }

  getPets(): Observable<Pets[]>{
   return this.http.get<Pets[]>("http://localhost:3000/posts");
  }

  getByCategory( category : string){
    return this.http.get<Pets[]>("http://localhost:3000/posts?called="+category);
  }
  /*getInformation(): Observable<PetsInfo[]>{
    return this.http.get<PetsInfo[]>("http://localhost:3000/information");
  }*/

}
