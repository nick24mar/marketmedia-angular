import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { SaveItem } from '../../models/save-item';

import { catchError, map, tap, retry } from 'rxjs/operators';

@Injectable()
export class ItemService {

  private url = '/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.url}/${id}`)
      .pipe(
        retry(3)
      );
  }

  addNewItem(item: SaveItem): Observable<SaveItem> {
    return this.http.post<SaveItem>(this.url, item);
  }

  updateItem(id: number, item: SaveItem): Observable<SaveItem> {
    return this.http.put<SaveItem>(`${this.url}/${id}`, item);
  }

}
