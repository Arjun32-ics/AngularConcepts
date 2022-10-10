import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterstring : string ,propName : string ): any {
    console.log('Hii')
    if(value.length === 0 || filterstring===''){
      return value
    }

    const resultvalue = [];
    for(const item of value){
      if(item[propName]===filterstring){
        resultvalue.push(item);
      }
    }
    return resultvalue;
  }

}
