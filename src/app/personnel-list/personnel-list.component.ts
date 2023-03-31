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
  displayedColumns: string[] = ["nom" , "date_naiss" , "num_tel" , "adresse" , "cin", "actions"];
  dataSource = new MatTableDataSource();

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
    this.personnelService.getAllPersonnel().subscribe((data) => {
      for(var i=0; i< data.length;i++){
        data[i]['date_naiss']=formatDate(data[i]['date_naiss']);
      }
      this.dataSource = data;
      this.tachePersonnelService.getAllTaches_personnels().subscribe((dataT) => {
        
          for(var i=0; i< dataT.length;i++){
           data.map((item : any) => {
          const idtMatches = dataT.filter((subItem:any) => subItem.id_personnel === item.id);
          const idoValues = idtMatches.map((match:any) => match.id_tache);
          console.log(idoValues) 
            const index = data.findIndex((x:any) => x.id == Number(dataT[i]['id_personnel']))
            if(!!index){
              data[index]['tache_id']=idoValues;
            }});console.log(data);
          }
        
      });
    });
  }
}
