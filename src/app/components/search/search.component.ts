import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists:any[] = [];
  loading: boolean;

  constructor( private spotify:SpotifyService) { }

  findArtist(termino:string){
    this.loading = true;
    this.spotify.getArtists(termino)
      .subscribe( (data:any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
  }

}
