import { Component } from '@angular/core';
import { DetailsDataService } from '../details-data.service';
import { ApiConnectionService } from '../api-connection.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2019, 0, 1);

  heightForm;
  weightForm;
  hairColorForm;

  constructor(public dialog: MatDialog, private ApiService: ApiConnectionService) { }

  hairColor = ['Black', 'Brown', 'Green', 'Gold', 'White', 'Yellow'];
  scrumUserModel = new DetailsDataService('', '', '','','','');

  // onSubmit function to Post Form data to API via the ApiConnection Service
  onSubmit() {
    console.log(this.scrumUserModel);
    this.ApiService.signup(this.scrumUserModel).subscribe(
      data => {console.log('Success', data),
      error => console.error('Error', error)
      });
}

}
