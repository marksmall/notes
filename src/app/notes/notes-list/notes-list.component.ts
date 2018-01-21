import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'ms-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {

  notes$: Observable<Note[]>;
  selectedId: number;

  constructor(private notesService: NotesService,
              private route: ActivatedRoute,
              private router: Router,
  ) { }

  addNote() {
    this.router.navigate(['notes/add']);
  }

  select(note: Note) {
    this.selectedId = note.id;
  }

  ngOnInit() {
    this.notes$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        console.log('Selected ID: ', this.selectedId);
        return this.notesService.getNotes();
      });
  }

}
