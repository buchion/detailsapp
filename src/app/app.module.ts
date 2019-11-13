import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AttributesComponent } from './attributes/attributes.component';

// Materials
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { MatFormFieldModule, MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { Dialogattributes } from './mainpage/mainpage.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
// MatFormFieldModule

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AttributesComponent,
    Dialogattributes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,

    // Materials
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    AttributesComponent,
    Dialogattributes
  ],
  providers: [
    MainpageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
