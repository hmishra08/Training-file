import{Component,Input} from 'angular2/core';
import{IProduct} from '../Products/product';
@Component({
    selector:'ai-subStar',
    templateUrl:'app/shared/subStar.component.html'
})

export class SubStarComponent{
        @Input() subProduct:IProduct;


}