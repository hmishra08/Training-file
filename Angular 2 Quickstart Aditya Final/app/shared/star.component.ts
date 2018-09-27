import { Component, OnChanges, Input,
    Output, EventEmitter } from 'angular2/core';
    import{IProduct} from '../Products/product';
import{SubStarComponent} from '../shared/subStar.component'; 
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css'],
    directives:[SubStarComponent]
})
export class StarComponent implements OnChanges {
   
    @Input() rating: number;
    @Input() Product:IProduct;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();
 
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    onClick() {
       this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
       //alert("hello World");
    }
}
 