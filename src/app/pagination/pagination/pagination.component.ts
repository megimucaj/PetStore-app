import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  //TotalRecords is used for the total number of items count which we want to display in pages.
  @Input() totalRecords: number = 0;
  //RecordsPerPage is used for the number of items we want to display in single page. 
  @Input() recordsPerPage: number = 0;


  //EventEmitter will emit(shfaq) the currently active page number to parent component
  //whenever we will click on the page number.
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  public pages:number[] = [];
  activePage:number;


  ngOnChanges() {
    const pageCount = this.getPageCount();
    this.pages = this.getArrayOfPage(pageCount);
    this.activePage = 1;
    this.onPageChange.emit(1);
  }


  private getPageCount() : number{
    let totalPage:number = 0;
    if( this.totalRecords > 0 && this.recordsPerPage > 0){
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);

      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }
    return totalPage;
  }


  private getArrayOfPage(pageCount:number) : number[]{
    let pageArray:number[] = [];
    if(pageCount > 0){
      for(var i=1 ; i<=pageCount ; i++){
        pageArray.push(i);
      }
    }
    return pageArray;
  }


  onClickPage(pageNumber:number){
    if(pageNumber < 1) return;
    if(pageNumber > this.pages.length) return;
    this.activePage = pageNumber;
    this.onPageChange.emit(this.activePage);
  }
}



