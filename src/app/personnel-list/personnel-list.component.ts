import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit{
  constructor(private personnelService:PersonnelService, private router:Router){
  }
  displayedColumns: string[] = ["nom" , "date_naiss" , "num_tel" , "adresse" , "cin"];
  dataSource = new MatTableDataSource();
  /*fetchDataSource():void{
    this.personnelService.getAllPersonnel().then((result)=>(this.dataSource.data = result));
  }*/
  ngOnInit() {
    this.personnelService.getAllPersonnel().subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource)
    });
  }
}
