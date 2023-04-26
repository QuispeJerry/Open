import { Component, OnInit } from '@angular/core';

import {ComsumeApiService} from '../core/services/consume-api.service';



// export interface PeriodicElement {
//   description: any;
//   id: any;
//   name: any;
//   url: any;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
// ];

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['description','name'];
  dataSource: any;

constructor(private consumeApi: ComsumeApiService){

}

  ngOnInit(): void {
this.consumeApi.getObtener().subscribe((data: any)=>{
  this.dataSource =data['sources'];
  console.log(this.dataSource)
})
  }
}

