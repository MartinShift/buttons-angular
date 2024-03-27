// car.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService  {
  getVehicleInfo() {
    return {
      name: 'Bugatti Veyron',
      description: 'Fastest car',
      image: '/assets/car.jpg',
      creator: 'Ettore Bugatti',
      creationDate: '2005'
    };
  }
}