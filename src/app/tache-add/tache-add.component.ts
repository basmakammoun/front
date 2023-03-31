import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-tache-add',
  templateUrl: './tache-add.component.html',
  styleUrls: ['./tache-add.component.css']
})
export class TacheAddComponent {
  constructor (private tacheService:TacheService, private router:Router, private activatedRoute:ActivatedRoute){
    this.initForm();
  }
  tacheForm:any;
  currentItemID:String="";

  initForm(): void {
    this.tacheForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      prix: new FormControl(null, [Validators.required])
    });
  }
  initFormTache(object : any): void {
    this.tacheForm = new FormGroup({
      nom: new FormControl(object.nom , [Validators.required]),
      prix: new FormControl(object.prix , [Validators.required])
    });
  }
  submit() : void{
    const objectToSubmit = { ...this.tacheForm.value};
    if(!!this.currentItemID){
      this.tacheService.updateTache(this.currentItemID,objectToSubmit).subscribe(
        (response) => {
          this.router.navigate(['/taches']);
        },
        (error) => {
          console.error(error);
        }
      );
    }else{
      this.tacheService.addTache(objectToSubmit).subscribe(
      (response) => {
        this.router.navigate(['/taches']);
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
      this.tacheService.getTacheById(this.currentItemID).subscribe((item1)=>{this.initFormTache(item1)});
    }else{
      this.initForm();
    }
  }
}