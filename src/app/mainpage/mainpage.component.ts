
import { Component, OnInit, Inject } from '@angular/core';
import {AttributesComponent} from '../attributes/attributes.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiConnectionService } from '../api-connection.service';
import { editDataService } from '../details-data.service';

export interface AllUsers {
  surname: string;
  firstname: string;
  age: string;
  weight: string;
  height: string;
  haircolor: string;
  id: string;
  delete: string;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent implements OnInit {

  USERS_DATA = [];
  USERDATA;

 constructor (private ApiService: ApiConnectionService,public dialog: MatDialog) {}

  ngOnInit() {
    this.ApiService.getUsers()
    .subscribe(
      data => {(this.USERS_DATA = data,        
      console.log('Success', this.USERS_DATA)),
      error => console.error('Error', error),
      this.dataSource = new MatTableDataSource<any>(this.USERS_DATA)
    });    
  }

  displayedColumns: string[] = ['firstname' , 'surname' , 'age', 'weight', 'height', 'haircolor', 'id', 'delete'];
  dataSource = new MatTableDataSource<any>(this.USERS_DATA);
  
  // Filter Function
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Get List of all Registered Users via ApiConnectionService

    // try() {
    //   console.log('Executing Refresh Ops',this.USERS_DATA);
    //   this.dataSource = new MatTableDataSource<any>(this.USERS_DATA);
    // }

    // Delete details about a particular User
    deleteUser(id) {
      this.ApiService.deleteUser(id).subscribe(
        data => {console.log('From the Delete Request',data),
      this.ngOnInit()
      });
    }

    // Gets details about a particular User
    openIndividualUser(id) {
      this.ApiService.getParticularUser(id)
      .subscribe(
        data => {(this.USERDATA = data,
        console.log('Success', data)),
        error => console.log('Error', error),
        
        // This sectionopen the dialog Modal
        this.dialog.open(Dialogattributes, {
          width: '300px',
          data: {stuff : this.USERDATA },
          
        });
      });
   }

   openDialog() {
    const dialogRef = this.dialog.open(AttributesComponent, {
      width: '600px',
  });
    dialogRef.afterClosed()
    .subscribe( result => {
      this.ngOnInit()
    });
  }
}

// New component Dialog Attributes

@Component({
  templateUrl: './attribute-dialog.html',
  // styles: ['.example-full-width {color: red}']
})
export class Dialogattributes {
  editData = this.data.stuff;
  
  // editData;

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any, 
    private ApiService: ApiConnectionService,
    private MainComponent: MainpageComponent,
    ) { }

  editUserModel = new editDataService(this.editData.firstname, this.data.stuff.surname, this.editData.age , this.editData.weight,this.editData.height,this.editData.haircolor);
  hairColor = ['Black', 'Brown', 'Green', 'Gold', 'White', 'Yellow'];
  
  editDetails() {
    console.log(this.editUserModel, this.data.stuff.id)
    this.ApiService.patchUser(this.data.stuff.id,this.editUserModel ).subscribe(
      data => {
        console.log('Result from patch request',data),
        this.MainComponent.ngOnInit()
      });
  }
  
}

