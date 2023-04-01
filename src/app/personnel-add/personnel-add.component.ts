import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { MatTableDataSource } from '@angular/material/table';
import { TacheService } from '../services/tache.service';
import { TachePersonnelService } from '../services//tache-personnel.service';

@Component({
  selector: 'app-personnel-add',
  templateUrl: './personnel-add.component.html',
  styleUrls: ['./personnel-add.component.css']
})
export class PersonnelAddComponent {
  constructor(private PersonnelService: PersonnelService, private router: Router, private activatedRoute: ActivatedRoute, private tacheService: TacheService, private tachePersonnelService: TachePersonnelService) {
    this.initForm();
    this.tacheService.getAllTache().subscribe((data) => {
      this.tacheList = data;
      console.log(this.tacheList);
    });
  }
  personnelForm: any;
  currentItemID: String = "";
  taches = new FormControl();
  tacheList = [];
  selectedTaches: any;
  initForm(): void {
    this.personnelForm = new FormGroup({
      nom: new FormControl(null, [Validators.required]),
      date_naiss: new FormControl(null, [Validators.required]),
      num_tel: new FormControl(null, [Validators.required]),
      adresse: new FormControl(null, [Validators.required]),
      cin: new FormControl(null, [Validators.required])
    });
  }
  initFormPersonnel(object: any): void {
    this.personnelForm = new FormGroup({
      nom: new FormControl(object.nom, [Validators.required]),
      date_naiss: new FormControl(object.date_naiss, [Validators.required]),
      num_tel: new FormControl(object.num_tel, [Validators.required]),
      adresse: new FormControl(object.adresse, [Validators.required]),
      cin: new FormControl(object.cin, [Validators.required])
    });
  }
  submit(): void {
    const date = new Date(this.personnelForm.value.date_naiss);
    const formattedDate = date.toISOString().slice(0, 10);
    const objectToSubmit = { ...this.personnelForm.value, date_naiss: formattedDate };
    if (!!this.currentItemID) {
      this.PersonnelService.updatePersonnel(this.currentItemID, objectToSubmit).subscribe(
        (response) => {
          for (var i = 0; i < this.selectedTaches.length; i++) {
            console.log(this.selectedTaches);
          }
          this.router.navigate(['/personnels']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.PersonnelService.addPersonnel(objectToSubmit).subscribe(
        (response) => {
          let idNewPer = response.id;
          for (var i = 0; i < this.selectedTaches.length; i++) {
            let object = {
              'id_personnel': idNewPer,
              'id_tache': this.selectedTaches[i]
            }
            this.tachePersonnelService.addTaches_personnels(object).subscribe((res) => {
              console.log("sucess")
            },
              (error) => {
                console.error(error);
              })
          }
          this.router.navigate(['/personnels']);
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }
  ngOnInit(): void {
    this.currentItemID = this.activatedRoute.snapshot.params["id"];
    if (!!this.currentItemID) {
      this.PersonnelService.getPersonnelById(this.currentItemID).subscribe((item1) => { this.initFormPersonnel(item1) });
    } else {
      this.initForm();
    }
  }
}
