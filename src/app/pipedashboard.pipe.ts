import { Pipe, PipeTransform } from '@angular/core';
import { Pets } from './pet-list/pets';
import { TargetLocator } from 'selenium-webdriver';

@Pipe({
  name: 'pipedashboard'
})
export class PipedashboardPipe implements PipeTransform {
  count: number;
  transform(value: Pets[],event): any {
    var target=event.target.id;
    for(var i=0; i<value.length-1; i++){
      for(var j=1; j<value.length; j++){
        if(target.is(i) && i.valueOf() > j.valueOf()){
          this.count++;
        }
        
      }

  
    }
  }
    //return null;
}


