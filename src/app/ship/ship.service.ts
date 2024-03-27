import { Injectable } from '@angular/core';
import { Ship } from '../models/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor() { }

  getVehicleInfo(): Ship {
    return new Ship(
      'Seawise Giant',
      'Largest ship ever built',
      '/assets/ship.jpg',
      'Sumitomo Heavy Industries',
      '1979'
    );
  }
}