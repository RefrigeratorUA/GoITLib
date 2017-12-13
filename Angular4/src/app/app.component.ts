import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  cars: Cars[] = [];
  carName: string = '';
  carColor: string = '';
  colors = [ 'red', 'blue', 'green', 'pink', 'yellow', 'grey' ];

  appTitle;

  constructor(private carsService: CarsService) {};

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => { this.cars = cars },
                  (error) => { console.clear(); alert(error); })
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Cars) => {this.cars.push(car)});
    this.carName = '';
    this.carColor = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService
      .changeColor(car, this.getRandColor())
      .subscribe((data) => {console.log(data);})
  }

  deleteCar(car: Cars) {
    this.carsService
      .deleteThisCar(car)
      .subscribe((data) => {this.cars = this.cars
        .filter(item => item.id !== car.id)})
  }

}
