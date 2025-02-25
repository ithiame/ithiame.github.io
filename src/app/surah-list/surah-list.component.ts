import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-surah-list',
  templateUrl: './surah-list.component.html',
  styleUrls: ['./surah-list.component.css'],
  imports: [NgIf, NgFor]
})
export class SurahListComponent implements OnInit {
  surahs: any[] = []; // Pour stocker la liste des sourates

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSurahList();
  }

  fetchSurahList(): void {
    const apiUrl = 'http://api.alquran.cloud/v1/surah'; // URL de l'API
    this.http.get(apiUrl).subscribe((response: any) => {
      this.surahs = response.data; // Stocker les données dans la variable surahs
    });
  }
}