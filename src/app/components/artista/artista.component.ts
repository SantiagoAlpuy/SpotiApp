import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{

  artista : any = {};
  loading: boolean;
  topTracks : any[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private spotify: SpotifyService ) { 
    this.activatedRoute.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })};

    getArtista(id:string){
      this.loading = true;
      this.spotify.getArtist(id).subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
    }

    getTopTracks(id:string){
      this.spotify.getTopTracks(id)
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        });
    }

}
