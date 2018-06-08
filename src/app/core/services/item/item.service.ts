import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { SaveItem } from '../../models/save-item';

import { catchError, map, tap, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ItemService {

  private url = '/api/items';
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items = this.itemsSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.getItems();
  }

  private getItems(): void {
    this.http.get<Item[]>(this.url)
      .subscribe(x => this.itemsSubject.next(x));
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`);
  }

  addNewItem(item: SaveItem): void {
    this.http.post<SaveItem>(this.url, item)
      .subscribe(
        () => this.getItems(),
        (error) => this.handleError(error)
      );
  }

  updateItem(id: number, item: SaveItem): Observable<SaveItem> {
    return this.http.put<SaveItem>(`${this.url}/${id}`, item);
  }

  deleteItem(id: number) {
    return this.http.delete<SaveItem>(`${this.url}/${id}`);
  }

  handleError(error): void {
    if (error.status === 404) {
      this.router.navigate(['/not-found']);
    }

    console.log(error);
  }

}
