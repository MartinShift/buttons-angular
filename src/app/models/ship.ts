import { Vehicle } from './vehicle';

export class Ship extends Vehicle {
  constructor(
    name: string,
    description: string,
    image: string,
    creator: string,
    creationDate: string
  ) {
    super(name, description, image, creator, creationDate);
  }
}