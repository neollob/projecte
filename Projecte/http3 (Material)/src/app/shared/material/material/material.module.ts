import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatButtonModule, MatTabsModule,
  MatListModule, MatInputModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatProgressSpinnerModule, MatCheckboxModule, MatDividerModule,
  MatFormFieldModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule, MatPaginatorModule,
    MatSortModule, MatProgressSpinnerModule,
    DragDropModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule, MatPaginatorModule,
    MatSortModule, MatProgressSpinnerModule,
    DragDropModule
  ]
})
export class MaterialModule { }
