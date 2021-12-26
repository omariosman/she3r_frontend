import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerseInterface } from '../interfaces/verse-interface';
@Injectable({
  providedIn: 'root'
})
export class VerseEntryService {
  get_random_verse_API = "http://localhost:8000/api/v1/get_random_verse2/";
  constructor(private http: HttpClient) { }

  get_random_verse(): Observable<VerseInterface>{
    console.log("GETTING a VERSE");
    return this.http.get<VerseInterface>(this.get_random_verse_API);

  }

}
