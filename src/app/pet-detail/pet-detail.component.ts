import { Component, OnInit, Input } from '@angular/core';
import { Pets } from '../pet-list/pets';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  
  selectedPet: any;
  //the @Input decorator tells Angular that this property is public and available for binding by a parent component.
  //Without @Input, Angular refuses to bind to the property.
  @Input() pet : Pets; //pet eshte nje objekt i tipit pets qe ben te mundur te aksesoj clasen pets te nje komponeneteje tjeter jasht pet-detail
  constructor(private petService: PetService){
  }
  
  ngOnInit(){
    this.onSubmit();
  }

  onSubmit(){
    this.petService.getPets()
    .subscribe((selectedPet) =>{
      this.selectedPet = selectedPet;
      console.log(this.selectedPet);
    });
  }
 

}
