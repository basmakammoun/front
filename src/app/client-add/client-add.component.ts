import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {
  constructor (private clientService:ClientService, private router:Router, private activatedRoute:ActivatedRoute){
    this.initForm();
  }
  clientForm:any;
  currentItemID:String="";

  initForm(): void {
    this.clientForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      num_tel: new FormControl(null, [Validators.required])
    });
  }
  initFormClient(object : any): void {
    this.clientForm = new FormGroup({
      nom: new FormControl(object.nom , [Validators.required]),
      num_tel: new FormControl(object.num_tel , [Validators.required])
    });
  }
  submit() : void{
    const objectToSubmit = { ...this.clientForm.value};
    if(!!this.currentItemID){
      this.clientService.updateClient(this.currentItemID,objectToSubmit).subscribe(
        (response) => {
          this.router.navigate(['/clients']);
        },
        (error) => {
          console.error(error);
        }
      );
    }else{
      this.clientService.addClient(objectToSubmit).subscribe(
      (response) => {
        this.router.navigate(['/clients']);
      },
      (error) => {
        console.error(error);
      }
    );
    }
    
  }
  ngOnInit(): void {
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    if(!!this.currentItemID){
      this.clientService.getClientById(this.currentItemID).subscribe((item1)=>{this.initFormClient(item1)});
    }else{
      this.initForm();
    }
  }
}
