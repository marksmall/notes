import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesService } from './notes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
  ],
  declarations: [NotesListComponent, NotesDetailComponent],
  providers: [NotesService],
})
export class NotesModule { }
