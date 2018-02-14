import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  cars = [
    { name: 'Ford',
      id: 1,
      color: 'red',
      year: 2017
    },
    { name: 'BMW',
      id: 2,
      color: 'black',
      year: 2012
    },
    { name: 'ZAZ',
      id: 3,
      color: 'white',
      year: 1990
    },
    { name: 'Fiat',
      id: 4,
      color: 'purple',
      year: 2015
    }
  ]

}
