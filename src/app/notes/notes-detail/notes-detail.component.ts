import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotesService } from '../notes.service';
import { Note } from '../note';

@Component({
  selector: 'ms-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
})
export class NotesDetailComponent implements OnInit {

  note: Note;
  editTitle: string;
  editContent: string;
  editNote = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public notesService: NotesService) { }

  save() {
    console.log('This Note: ', this.note);
    if (this.note) {
      this.note.title = this.editTitle;
      this.note.content = this.editContent;
    } else {
      console.log('Create new note: ', this.editTitle);
      const note: Note = {
        id: this.notesService.getNextId(),
        title: this.editTitle,
        date: new Date(),
        content: this.editContent,
      };
      this.notesService.addNote(note);
    }

    this.gotoNotes();
  }

  cancel() {
    this.gotoNotes();
  }

  edit() {
    console.log('Edit Note: ', this.note);
    this.editNote = true;
  }

  ngOnInit() {
    this.route.data.subscribe((data: { note: Note }) => {
      console.log('Data: ', data);
      if (data.note) {
        this.editTitle = data.note.title;
        this.editContent = data.note.content;
        this.note = data.note;
        this.editNote = false;
      }
    });
  }

  private gotoNotes() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

}
