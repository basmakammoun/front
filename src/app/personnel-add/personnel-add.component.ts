import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-personnel-add',
  templateUrl: './personnel-add.component.html',
  styleUrls: ['./personnel-add.component.css']
})
export class PersonnelAddComponent {
  constructor (private PersonnelService:PersonnelService, private router:Router, private activatedRoute:ActivatedRoute){

  }
  personnelForm:any;

  initForm(): void {
    this.personnelForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      date_naiss: new FormControl(null, [Validators.required]),
      num_tel: new FormControl(null, [Validators.required]),
      adresse: new FormControl(null, [Validators.required]),
      cin: new FormControl(null, [Validators.required])
    });
  }
  submit() : void{
    const date = new Date(this.personnelForm.value.date_naiss);
    const formattedDate = date.toISOString().slice(0, 10);
    const objectToSubmit = { ...this.personnelForm.value, date_naiss: formattedDate };

    this.PersonnelService.addPersonnel(objectToSubmit).subscribe(
      (response) => {
        this.router.navigate(['/personnels']);
      },
      (error) => {
        // handle errors here
        console.error(error);
      }
    );
  }
  ngOnInit(): void {
      this.initForm();
  }
}
