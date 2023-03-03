import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(response => {
        this.characters = response.results;
      });
  }
}

