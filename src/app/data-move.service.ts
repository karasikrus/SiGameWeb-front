import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { environment } from '../environments/environment';

import { shareReplay } from 'rxjs/operators';

export interface DataState {}

@Injectable({
  providedIn: 'root'
})

export class DataMoveService {
    public dataState: Subject<DataState>;


    constructor(wsService: WebsocketService) {
        this.dataState = <Subject<DataState>>wsService.connect(environment.DB_URL);
    }
}
