/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 * Edited by Ved Prakash
 */
import {Component} from '@angular/core';

/*Angular 2 Carousel - Gallery*/
@Component({
    selector: 'Angular2Carousel',
    templateUrl: './Angular2carousel.html'
})
export class Angular2Carousel  {
    //The time to show the next photo
    private NextPhotoInterval:number = 3000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}