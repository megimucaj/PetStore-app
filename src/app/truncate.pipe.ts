import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    //A ternary operator is denoted by '?' and is used as a short cut for an if..else statement.
    //It checks for a boolean condition and executes one of the two statements, 
    //depending on the result of the boolean condition.
    //Boolean expression? First statement : second statement
    //value is the hole tex
    //


    //limit is how long the text needs to be truncated
    //20 characters by default
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    //trail is what needs to be puten at the and , is by default '...'
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
