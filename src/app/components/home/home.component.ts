import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{

  paises: any[] = [];
  newSongs: any[] = [];
  error: boolean;
  errorMessage: string;

  loading: boolean;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    }, (serviceError) => {
      this.error = true;
      this.errorMessage =serviceError.error.error.message;
    });
    
    
  }

}
