import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})

export class PetListComponent implements OnInit {
  petList: any;
  
  constructor (private petService : PetService) {


  }

  ngOnInit() { 
    this.petService.getPets().subscribe(
    (data)=>{this.petList = data;
    console.log(this.petList);
    })
   

    
  }
}