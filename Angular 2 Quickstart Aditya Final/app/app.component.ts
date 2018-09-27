import{Component} from 'angular2/core';
import{ProductListComponent} from './Products/product-list.component';
import{ProductService} from './Products/product.service';
import{HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
@Component({
    selector: 'pm-app',
    template:`
    <hr>
    <pm-products></pm-products>`,
    directives:[ProductListComponent],
    providers:[ProductService,HTTP_PROVIDERS]
})

export class AppComponent{
    
}
