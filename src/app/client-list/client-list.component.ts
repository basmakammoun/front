import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  constructor(private clientService:ClientService, private router:Router){
  }
  displayedColumns: string[] = ["nom" , "num_tel" , "actions"];
  dataSource = new MatTableDataSource();
  filterValue = '';

  deleteClient(id:String): void{
    this.clientService.deleteClient(id).subscribe(
      (response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngOnInit() {
  this.clientService.getAllClient().subscribe((data) => {
    this.dataSource = new MatTableDataSource(data);
  });
}

}
