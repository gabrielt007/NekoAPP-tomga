import { Component, OnInit} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList,
  InfiniteScrollCustomEvent, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, 
} from '@ionic/angular';

import { NekoService, NekoItem } from '../services/neko-service';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList
  ]
})
export class Tab2Page implements OnInit{
  nekos: NekoItem[] = [];
  constructor(private nekoService: NekoService) {}

  ngOnInit() {
    this.loadNekos();
  }

  loadNekos(event?: InfiniteScrollCustomEvent){
    this.nekoService.getNekos().subscribe({
      next: (response) => {
        this.nekos.push(...response.results);
        if(event){
          event.target.complete();
        }
      },
      error: (err) => {
        console.error("Existe un error en el consumo de la Api:", err);
        if(event){
          event.target.complete();
        }
      }
    });
  }


  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadNekos(event);
  }

}
