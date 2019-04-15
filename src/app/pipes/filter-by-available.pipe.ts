import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAvailable'
})
export class FilterByAvailablePipe implements PipeTransform {

  transform(units: any, citiesOnly: boolean, filterByCity: string, countTotByCity: boolean): any {
    if (!units) {
      return units;
    }
    
    if (citiesOnly) {
      return units.reduce(
        function (arr, obj) {
          if (obj.availableFromNowOn)
            if (!arr.some(x => x.address.city === obj.address.city)) {
              arr.push(obj)
            }
          return arr;
        }, [])
    }
    else
      return units = units.filter(unit => {
        if (filterByCity && filterByCity != 'All' && !countTotByCity) // Filter by city and available from
          return (unit.availableFromNowOn && unit.address.city === filterByCity);
        else if (!citiesOnly && !countTotByCity) // To return the Total number of apartments By City and ONLY available
          return unit.availableFromNowOn;
        else if (countTotByCity) // To return the Total number of apartments By City
          if (filterByCity != 'All')
            return unit.address.city === filterByCity;
          else
            return units;
      })
  }
}
