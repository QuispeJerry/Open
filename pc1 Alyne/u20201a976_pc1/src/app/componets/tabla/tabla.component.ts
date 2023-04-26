import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoctelService } from 'src/app/services/coctel-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  displayedColumns: string[] = [ 'idDrink', 'strDrink'];
  //data:any[]=[];
  //dataSource= new MatTableDataSource<any>(this.data);
  dataSource: any;

  constructor(private cocktelService: CoctelService){
  }


  // get_cocktail(){
  //   let data;
  //   for(let i=1;i<151;i++){

  //     this.cocktelService.getCockteles(i).subscribe(

  //       res=>{
  //         data={
  //           Name:res.name,
  //           Instruction:res.Instruction,
  //           Date:res.Date,
  //           Glass:res.Glass, 

  //         };

  //         this.data.push(data);
  //         this.dataSource=new MatTableDataSource<any>(this.data);
    
  //       },
  //       err=>{
  //         console.log(err);
  //       }
  //     )
  //   }


  // }
  
  ngOnInit(): void {
    this.cocktelService.getCockteles()
    .subscribe((data: any)=>{
      //this.dataSource =data['']
      this.dataSource = data
      console.log("aaaaaa")
      console.log(this.dataSource)
    })
      }

}
