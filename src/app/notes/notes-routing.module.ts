import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesDetailResolver } from './notes-detail/notes-detail-resolver.service';

const notesRoutes: Routes = [
  {
    path: '',
    component: NotesListComponent,
    children: [{
      path: 'add',
      component: NotesDetailComponent,
    }, {
      path: ':id',
      component: NotesDetailComponent,
      resolve: {
        note: NotesDetailResolver,
      },
    }],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(notesRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    NotesDetailResolver,
  ],
})
export class NotesRoutingModule { }
