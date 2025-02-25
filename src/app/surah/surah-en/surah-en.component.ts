import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-surah-en',
  imports: [NgIf, NgFor],
  templateUrl: './surah-en.component.html',
  styleUrl: './surah-en.component.css'
})
export class SurahEnComponent {
  surahData: any;
  surahId: number = 114; // Valeur par défaut (sourate An-Naas)

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    this.route.params.subscribe((params) => {
      this.surahId = +params["id"]; // Convertir en nombre
      console.log();
      this.fetchSurahData(this.surahId);
    });
  }

  fetchSurahData(surahId: number): void {
    const apiUrl = "http://api.alquran.cloud/v1/surah/" + surahId + "/en.asad";
    this.http.get(apiUrl).subscribe((data: any) => {
      this.surahData = data.data;
    });
  }
}
