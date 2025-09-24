import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MainService } from 'app/modules/service/main.service'
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,CommonModule,MatButtonModule,MatButtonToggleModule,MatIconModule,
          MatTableModule, MatPaginatorModule,FormsModule,MatSortModule,
          MatFormField,MatFormFieldModule,MatSelectModule,MatInputModule
  ]
})
export class SharedModule { }
