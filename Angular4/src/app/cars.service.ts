import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {

  constructor(private http: Http) {}

  getCars() {
    const headers = new Headers({
      'Content-Type' : 'application/json; charset=utf8'
    });

    return this.http.get('http://localhost:3000/cars', {headers})
                    .map((response: Response) => response.json())
                    .catch((error: Response) => {return Observable.throw('Сервер сдох!')});
  }

  getAppTitle() {
    return this.http.get('http://localhost:3000/title')
                    .delay(2000)
                    .map((response: Response) => response.json())
                    .map((data) => data.value)
  }

  addCar(carName: string, carColor: string) {
    const headers = new Headers({
      'Content-Type' : 'application/json; charset=utf8'
    });

    const data = {
      name: carName,
      color: carColor
    };

    if (data.color === '') {
      data.color = 'white'}

    if (data.name === '') {
        data.name = 'Noname'}

    return this.http.post('http://localhost:3000/cars', data, {headers})
                    .map((response: Response) => response.json());
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
                    .map((response: Response) => response.json());
  }

  deleteThisCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
                    .map((response: Response) => response.json());
  }

}
