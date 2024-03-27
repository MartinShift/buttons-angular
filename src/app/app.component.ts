import { Component } from '@angular/core';
import { Vehicle } from './models/vehicle';
import { CarService } from './car/car.service';
import { PlaneService } from './plane/plane.service';
import { ShipService } from './ship/ship.service';
import { VehicleComponent } from './vehicle/vehicle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [VehicleComponent]
})
export class AppComponent {
  title = 'Vehicle Info';
  vehicle: Vehicle;

  constructor(
    private carService: CarService,
    private planeService: PlaneService,
    private shipService: ShipService
  ) { this.vehicle = this.carService.getVehicleInfo();}

  displayCarInfo() {
    this.vehicle = this.carService.getVehicleInfo();
  }

  displayPlaneInfo() {
    this.vehicle = this.planeService.getVehicleInfo();
  }

  displayShipInfo() {
    this.vehicle = this.shipService.getVehicleInfo();
  }
}