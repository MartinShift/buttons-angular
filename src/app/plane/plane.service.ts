import { Injectable } from '@angular/core';
import { Plane } from '../models/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor() { }

  getVehicleInfo(): Plane {
    return new Plane(
      'Antonov An-225 Mriya',
      'Largest operational cargo aircraft in the world',
      '/assets/plane.jpg',
      'Antonov Design Bureau',
      '1988'
    );
  }
}