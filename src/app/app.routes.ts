import { Routes } from '@angular/router';
import { SurahComponent } from './surah/surah.component';
import { SurahListComponent } from './surah-list/surah-list.component';
import { SurahEnComponent } from './surah/surah-en/surah-en.component';

export const routes: Routes = [
  { path: '', component: SurahListComponent },
  { path: 'surah/:id', component: SurahComponent, },
  { path: 'surah/:id/translation', component: SurahEnComponent },

];
