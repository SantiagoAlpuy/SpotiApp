import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer QBEqDPlWrpGKerc0KdgShI3L6rp--9khKzYn3X5H4WzlPSQp2zwlfiR80B6q51T211D4OmVlvw2u1TjFTI'
    });
    const url = `https://api.spotify.com/v1/${ query }`;

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( (data:any) => data.artists.items ));
  }

  getArtist(id:string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe(map ( data => data['tracks']));
  }

}
