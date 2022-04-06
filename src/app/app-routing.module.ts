import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CROUTES} from './@consts/app.consts';
import {AudioContextGuard} from './guards/audio-context.guard';

const routes: Routes = [
  {
    path:         CROUTES.HOME.URL,
    canActivate:  [],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path:         CROUTES.THEORY.URL,
    canActivate:  [],
    loadChildren: () => import('./pages/theory/theory.module').then(m => m.TheoryPageModule)
  },
  {
    path:         CROUTES.LESSONS.URL,
    canActivate:  [],
    loadChildren: () => import('./pages/lessons/lessons.module').then(m => m.LessonsPageModule)
  },
  {
    path:         CROUTES.PLAY.URL,
    canActivate:  [AudioContextGuard],
    loadChildren: () => import('./pages/play/play.module').then(m => m.PlayPageModule)
  },
  {path: '', redirectTo: CROUTES.HOME.URL, pathMatch: 'full'},
  {path: '**', redirectTo: CROUTES.HOME.URL},
];

@NgModule({
            imports:   [
              RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
            ],
            exports:   [RouterModule],
          })
export class AppRoutingModule {}
