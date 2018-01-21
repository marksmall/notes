import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { NotesService } from '../notes.service';
import { Note } from '../note';

@Injectable()
export class NotesDetailResolver implements Resolve<Note> {
  constructor(private notesService: NotesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note> {
    const id = route.paramMap.get('id');

    return this.notesService.getNote(id).take(1).map(note => {
      if (note) {
        return note;
      } else { // id not found
        this.router.navigate(['/']);
        return null;
      }
    });
  }
}
