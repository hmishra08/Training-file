import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {

  constructor(private service:AppService) { }

  
  details:any;
  

  ngOnInit() 
  {
      //------------------fetching JSON data from service------------------//
      
      this.service.getfile().subscribe(data=>{this.details=data
      console.log(this.details)});
      
  }

  //------------------function to sort the data on basis of MobileId------------------//
  sortId()
{
    this.details.sort(function(a,b){
      return a.mobId-b.mobId;
    });
}

//------------------function to sort the data on basis of MobileName------------------//
sortName()
{ 
   this.details.sort(function(a,b){
     return (''+a.mobName).localeCompare(b.mobName)})
      
}

//------------------function to sort the data on basis of MobilePrice------------------//
sortPrice()
{
    this.details.sort(function(a,b){
      return a.mobPrice-b.mobPrice;
    });
}


//------------------function to delete the row------------------//
deleteRow(index)
{
  this.details.splice(index,1);
}

}

