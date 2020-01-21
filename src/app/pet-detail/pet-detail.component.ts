import { Component, OnInit, Input } from '@angular/core';
import { Pets } from '../pet-list/pets';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  selectedPet: any;
  id: any;
  //the @Input decorator tells Angular that this property is public and available for binding by a parent component.
  //Without @Input, Angular refuses to bind to the property.
  @Input() pet : Pets; //pet eshte nje objekt i tipit pets qe ben te mundur te aksesoj clasen pets te nje komponeneteje tjeter jasht pet-detail

  constructor(private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private route : ActivatedRoute){

    //this.route.params.subscribe(params => this.information = params.id)

  }
  
  ngOnInit(){
      let date = this.route.snapshot.paramMap.get("called")
      console.log(date); // Print the parameter to the console. 
      this.onSubmit(date);
   
  }
   onSubmit(category: string){
    this.petService.getByCategory(category).subscribe(
      (data) => {this.selectedPet = data;
      console.log(this.selectedPet)
    });
   }

  

  

  // + -> converts the string to a number
  //route.snapshot is a static image of the route information shortly after the component was created.
  //The paramMap is a dictionary of route parameter values extracted from the URL.
  //Route parameters are always strings
  /**getPet(): void{
    const id= +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe((selectedPet) => this.selectedPet = selectedPet);
  }*/
 
}