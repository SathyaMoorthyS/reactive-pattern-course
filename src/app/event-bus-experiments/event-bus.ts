import { Observer } from './event-bus';
import * as _ from 'lodash';
export interface Observer {
    notify(data: any);
}

interface Subject {
    registerObserver(obs: Observer);
    unRegisterObserver(obs: Observer);
    notifyObservers(data: any);
}

class EventBus implements Subject {

    private observers: Observer[] = [];
    registerObserver(obs: Observer) {
        this.observers.push(obs);
    }

    unRegisterObserver(obs: Observer) {
        _.remove(this.observers, el => el === obs);
    }

    notifyObservers(data: any) {
        this.observers.forEach(obs => obs.notify(data));
    }
}

export const globalEventBus = new EventBus();