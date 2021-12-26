import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerseEntryComponent } from './components/verse-entry/verse-entry.component';

const routes: Routes = [
  {path: '', component: VerseEntryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
