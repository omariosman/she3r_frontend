import { Component, OnInit } from '@angular/core';
import { VerseEntryService } from 'src/app/services/verse-entry.service';

@Component({
  selector: 'app-verse-entry',
  templateUrl: './verse-entry.component.html',
  styleUrls: ['./verse-entry.component.css']
})
export class VerseEntryComponent implements OnInit {
  random_verse = {part_one: "", part_two: "", poet:""};
  answer_flag: any;
  user_answer: any;

  constructor(private verseEntryService: VerseEntryService) { }

  ngOnInit(): void {
  }

  get_random_verse(){
    this.verseEntryService.get_random_verse().subscribe(verse => {
      this.random_verse = verse;
    })
  }

  check_answer(){
    if (this.random_verse.part_two == this.user_answer){
      this.answer_flag = true;
    } else {
      this.answer_flag = false;
    }


  }

}
function verse(verse: any, arg1: (any: any) => void) {
  throw new Error('Function not implemented.');
}

