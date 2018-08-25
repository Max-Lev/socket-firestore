import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { FirebaseDatabase, FirebaseStorage } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css']
})
export class FbComponent implements OnInit, AfterViewInit {

  artists: Observable<any[]>;

  constructor(private angularFirestore: AngularFirestore, private angularFireDatabase: AngularFireDatabase) { 

  };

  ngOnInit() { };

  ngAfterViewInit(): void {

    const l: AngularFireList<any> = this.angularFireDatabase.list('Artists');
    l.valueChanges().map(item => item).subscribe((data) => {
      console.log('valueChanges Firebase: ', data)
    });

    this.artists = this.angularFirestore.collection('Artists').snapshotChanges().map(artistsCollection => {
      console.log('snapshotChanges FireStore: ', artistsCollection)
      return artistsCollection.map(artistsDocument => {
        const data = artistsDocument.payload.doc.data();
        const id = artistsDocument.payload.doc.id;
        return { id, ...data }
      });
    });

    this.artists.subscribe((artists) => {
      console.log('Artists SnapShot FireStore: ', artists);
    });

  };


}
