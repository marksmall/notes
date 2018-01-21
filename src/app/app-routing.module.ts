import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'notes',
    loadChildren: 'app/notes/notes.module#NotesModule',
    data: { preload: true },
  },
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      },
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
