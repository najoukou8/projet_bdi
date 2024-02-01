import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Achat } from 'src/models/Achat';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  private panier: BehaviorSubject<Achat[]> = new BehaviorSubject<Achat[]>([]);
  nombreElementsPanier: number = 0;
   
  showPanier = false;
  
  constructor() { }

  viderPanier(): void {
    this.nombreElementsPanier = 0;
    this.showPanier = false;
  }

   // Méthode pour ajouter un élément au panier
   ajouterElementAuPanier(achat: Achat): void {
    const panierActuel = this.panier.value;
    panierActuel.push(achat);
    this.panier.next(panierActuel);
    this.nombreElementsPanier++;
    this.showPanier = true;
  }

  // Méthode pour retirer un élément du panier
  retirerElementDuPanier(numAchat: number): void {
    const panierActuel = this.panier.value;
    const index = panierActuel.findIndex(element => element.numAchat === numAchat);
    if (index !== -1) {
      panierActuel.splice(index, 1);
      this.panier.next(panierActuel);
      this.nombreElementsPanier--;
    }
  }

  // Méthode pour obtenir le panier actuel
  getPanier(): BehaviorSubject<Achat[]> {
    return this.panier;
  }

}

