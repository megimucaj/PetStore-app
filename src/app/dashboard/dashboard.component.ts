import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  petList: any;
  id: any;
  constructor(private petService : PetService) {
  }

  ngOnInit() { 
    this.petService.getPets().subscribe(
      (data)=>{
        this.petList = data.slice(0,3);
        console.log(this.petList)
  });
  }

  
}

 
  
    
