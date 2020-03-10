import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../pet.service';
import { Pets } from './pets';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})

export class PetListComponent implements OnInit {
  @Input() pets: Pets;
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