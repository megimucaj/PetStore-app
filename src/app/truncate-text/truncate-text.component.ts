import { Component, OnInit, Input } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { Pets } from '../pet-list/pets';

@Component({
  selector: 'app-truncate-text',
  templateUrl: './truncate-text.component.html',
  styleUrls: ['./truncate-text.component.scss']
})
export class TruncateTextComponent implements OnInit {
  @Input() pets: Pets;
  fullDescription: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullDescription = this.pets.description;
    this.pets.description = this.truncatePipe.transform(this.pets.description, [30]);
  }

  showFullDescription(){ 
    
    this.pets.description = this.fullDescription;
    console.log("this worked");
  };
}
