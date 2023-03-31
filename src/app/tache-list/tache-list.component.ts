import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { TacheService } from '../services/tache.service';
import {formatDate} from '../config/date';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent {
  constructor(private tacheService:TacheService, private router:Router){
  }
  displayedColumns: string[] = ["nom" , "prix" , "actions"];
  dataSource = new MatTableDataSource();

  deleteTache(id:String): void{
    this.tacheService.deleteTache(id).subscribe(
      (response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );

}
  ngOnInit() {
    this.tacheService.getAllTache().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
