import { Component, OnInit, Input } from '@angular/core';
import { Pets } from '../pet-list/pets';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  selectedPet: any;
  isShow = false;
  //the @Input decorator tells Angular that this property is public and available for binding by a parent component.
  //Without @Input, Angular refuses to bind to the property.
 
  //pet eshte nje objekt i tipit pets qe ben te mundur te aksesoj clasen pets te nje komponeneteje tjeter jasht pet-detail
  @Input() pets : Pets[] = []; 

  
  constructor( private petService: PetService, private route : ActivatedRoute ){}

             
  ngOnInit(){
    //route.snapshot is a static image of the route information shortly after the component was created.
    //The paramMap is a dictionary of route parameter values extracted from the URL.
    let date = this.route.snapshot.paramMap.get("called");
    console.log(date); // Print the parameter to the console. 
    this.onClickMe(date);

   

  };

  onClickMe(category: string){
    this.petService.getByCategory(category).subscribe(
      (data) => {this.selectedPet = data;
      console.log(this.selectedPet)
    });
  };

  animalButton(){
    this.isShow = true;
    console.log("worked");
  };

}