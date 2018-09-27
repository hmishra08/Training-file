import{Component,OnInit} from 'angular2/core';
import{IProduct} from './product';
import{ProductFilterPipe} from './product-filter.pipe';
import{StarComponent} from '../shared/star.component';
import{PlanetComponent} from '../shared/planet.component';
import{ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives:[StarComponent,PlanetComponent]
    
})

export class ProductListComponent implements OnInit{
    
    pageTitle:string="Product List";
    imageWidth:number=80;
    imageMargin:number=20;
    showImage:boolean=true;
    listFilter:string='';
    errorMessage:string;
    toggleImage():void{
            this.showImage=!this.showImage;
    } 
    onRatingClicked(message:string):void
    {
        alert("rating was clicked"+message)
    }
    products: IProduct[];
    constructor(private _productService:ProductService){}
    ngOnInit():void{
        this._productService.getProducts().subscribe(products=>this.products=products,error=>this.errorMessage=error);
    }
    /* = [
 
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
           "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/1.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 3.5,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/2.png"
        },
        {
            "productId": 5,
            "productName": "Hemmer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://www.gstatic.com/webp/gallery3/2.png"
        }
    ];*/
}