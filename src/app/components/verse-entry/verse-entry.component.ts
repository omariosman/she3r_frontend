import { Component, OnInit } from '@angular/core';
import { VerseEntryService } from 'src/app/services/verse-entry.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-verse-entry',
  templateUrl: './verse-entry.component.html',
  styleUrls: ['./verse-entry.component.css']
})
export class VerseEntryComponent implements OnInit {
  random_verse = {part_one: "", part_two: "", poet:""};
  answer_flag: number = 0;
  user_answer: any;

  constructor(private verseEntryService: VerseEntryService) { }

  ngOnInit(): void {
  }

  get_random_verse(){
    this.answer_flag = 0;
    this.user_answer = "";
    this.verseEntryService.get_random_verse().subscribe(verse => {
      this.random_verse = verse;
    })
  }

  check_answer(){
    if (this.random_verse.part_two == this.user_answer){
      this.answer_flag = 1;
    } else {
      this.answer_flag = 2;
    }


  }

}
function verse(verse: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}

