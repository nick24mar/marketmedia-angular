import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { SaveItem } from '../../models/save-item';

import { catchError, map, tap, retry } from 'rxjs/operators';

@Injectable()
export class ItemService {

  private url = '/api/items';
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
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
      .subscribe(() => this.getItems());
  }

  updateItem(id: number, item: SaveItem): Observable<SaveItem> {
    return this.http.put<SaveItem>(`${this.url}/${id}`, item);
  }

}
