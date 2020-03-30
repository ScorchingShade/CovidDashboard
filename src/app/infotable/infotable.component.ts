import { Component, OnInit, ViewChild } from '@angular/core';
import { CoronaDataBuilderService } from './corona-data-builder.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface CoronaData {
  country: string;
  cases: string;
  deaths: string;
  recovered: string;
}

@Component({
  selector: 'app-infotable',
  templateUrl: './infotable.component.html',
  styleUrls: ['./infotable.component.css']
})
export class InfotableComponent implements OnInit {

  displayedColumns: string[] = ['Country', 'Cases', 'Deaths', 'Recoveries'];
  corodt: CoronaData[] =[];

  constructor(private _coronaData: CoronaDataBuilderService) {
    console.log("here is corodata"+this.corodt)
   }

  ngOnInit() { }


  dataSource;
   

     jsonData;
    
       coronash : CoronaData[] =[];
  
       countryName=this._coronaData.coronaData()
        .subscribe(data => {
        
          let stringedData = "{\"Dl\":"+JSON.stringify(data)+"}"
    
           this.jsonData = JSON.parse(stringedData)
    
           this.jsonData
    
           for (var i = 0; i < this.jsonData.Dl.length; i++) {
            var jsonIndex = this.jsonData.Dl[i];
                         
             this.corodt.push({
               country: jsonIndex.country,
               cases: jsonIndex.cases,
               deaths: jsonIndex.deaths,
               recovered: jsonIndex.recovered
             })
          
             console.log(this.corodt);
          }
          
          this.dataSource=this.corodt;
            
        }
  
        );
          
  
  
  
  

}

