import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from '../models/song.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	public songList;
	constructor(
	private firestoreService: FirestoreService,
	private router: Router
	) {}
	
	ngOnInit() {
		this.songList = this.firestoreService.getSongList().valueChanges();
	}
}
