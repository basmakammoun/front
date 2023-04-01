import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { PersonnelService } from '../services/personnel.service';
import {formatDate} from '../config/date';
import {TachePersonnelService} from '../services/tache-personnel.service';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit{
  constructor(private personnelService:PersonnelService, private router:Router, private tachePersonnelService:TachePersonnelService, private tacheService:TacheService){
  }
  displayedColumns: string[] = ["nom" , "date_naiss" , "num_tel" , "adresse" , "cin", "tache", "actions"];
  dataSource = new MatTableDataSource([]);
  personnelList=[];

  /*fetchDataSource():void{
    this.personnelService.getAllPersonnel().then((result)=>(this.dataSource.data = result));
  }*/
  deletePersonnel(id:String): void{
    this.personnelService.deletePersonnel(id).subscribe(
      (response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );

}

  ngOnInit() {
    this.personnelService.getAllPersonnel().subscribe((personnelList) => {
      this.personnelList = personnelList;
      this.personnelList.forEach((personnel:any) => {
        personnel['date_naiss']=formatDate(personnel['date_naiss']);
        this.tachePersonnelService
          .getTaches_personnelsById(personnel["id"])
          .subscribe((tacheIds) => {
            personnel["tacheList"] = [];
            tacheIds.forEach((tacheId:any) => { 
              this.tacheService.getTacheById(tacheId["id_tache"]).subscribe((tache) => {
                personnel["tacheList"].push(tache["nom"]);
              });
            });
            this.dataSource.data = this.personnelList;
          });
      });
    });
  } 
}

