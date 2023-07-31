import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // module des routes et classe de Typage
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { first } from 'rxjs';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { PaginateComponent } from './paginate/paginate.component';
// définission de la constante pour les routes

const albumsRoutes: Routes = [
  {
  path: 'albums',
  component: AlbumsComponent
  },
  {
  path: '',
  redirectTo: '/albums',
  pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'album/:id',
  component: AlbumDescriptionComponent
  },
  {
  path: 'oc',
  component: OpenCloseComponent
  },
  {
  path: 'first',
  component: FirstCompComponent
  },
  {
  path: 'second',
  component: SecondCompComponent
  },
  {
  path: '**',
  component: NotFoundComponent
  },
  ];
  

@NgModule({

declarations: [
AppComponent,
AlbumsComponent,
AlbumDetailsComponent,
SearchComponent,
LoginComponent,
AlbumDescriptionComponent,
OpenCloseComponent,
NotFoundComponent,
FirstCompComponent,
SecondCompComponent,
PaginateComponent
],

imports: [
BrowserModule,
FormsModule,
RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
BrowserAnimationsModule,
],

providers: [],
bootstrap: [AppComponent]
})


export class AppModule { }
  