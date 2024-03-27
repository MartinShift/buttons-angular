import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  standalone: true,
  imports: [DatePipe, UpperCasePipe]
})
export class VehicleComponent {
  @Input() vehicle: Vehicle;

  constructor(
  ) { this.vehicle = new Vehicle("","","","",""); }


}