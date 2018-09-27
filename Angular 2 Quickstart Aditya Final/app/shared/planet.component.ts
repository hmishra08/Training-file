import{Component,Input} from 'angular2/core';
import{IProduct} from '../Products/product';

@Component({
    selector:'ai-planet',
    templateUrl:'app/shared/planet.component.html',
})


export class PlanetComponent
{
        @Input() Product:IProduct;
}