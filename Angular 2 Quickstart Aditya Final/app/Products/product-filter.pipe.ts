import { PipeTransform, Pipe } from 'angular2/core';
import { IProduct } from './product';
 
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
 
    transform(value: IProduct[], args: string[]):
IProduct[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        //return filter ? value.filter((product: IProduct) =>
          ///*/  product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;


if(filter!=null)
{
    return value.filter(
    function(product: IProduct)
    {

           return product.productName.toLocaleLowerCase().indexOf(filter) != -1;
    })
}
    else
    {
        return value;
    }
}}