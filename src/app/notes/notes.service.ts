import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Note, NOTES } from './note';

@Injectable()
export class NotesService {

  private notes$: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(NOTES);
  private nextId = 100;

  constructor() { }

  getNotes() {
    return this.notes$;
  }

  getNote(id: number | string) {
    return this.getNotes().map(notes => notes.find(note => note.id === +id)!);
  }

  addNote(note: Note) {}

  editNote(note: Note) {}

  getNextId(): number {
    return this.nextId++;
  }

}
