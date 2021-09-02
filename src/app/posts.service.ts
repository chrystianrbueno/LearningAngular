import { Injectable } from '@angular/core';
import { Post } from './posts';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { tratadorDeError } from './tratadores';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private urlBase = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  buscarTodosPosts(): Observable<Post[]>  {  
    return this.http.get<Post[]>(this.urlBase).pipe(
        catchError(tratadorDeError<Post[]>([]))
    );
  }

  buscarPostPorUserId(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.urlBase}/?userId=${id}`).pipe(
      catchError(tratadorDeError<Post[]>([]))
  );
}


}