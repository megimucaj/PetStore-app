import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { PetsInfo } from '../pet-list/petsInfo';
import { PaginationService } from '../pagination/pagination.service';


@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})

export class MoreDetailsComponent implements OnInit {
  petsInfo : PetsInfo[];
  moreD: any;
  constructor(private paginationService: PaginationService, private route: ActivatedRoute) { }

  ngOnInit() {
    let date = this.route.snapshot.paramMap.get("generation");
    this.onClickMe(date);
    console.log(date); // Print the parameter to the console. 

   
  }

 onClickMe(generation: string){
    this.paginationService.getByDetails(generation).subscribe(
      (data: PetsInfo[]) =>
       {this.moreD = data;
      console.log(this.moreD)
    });
  }



  //displayActivePage() to catch the emitted value of active page from child component.
  activePage:number = 0;
  
  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber  
  }
}
