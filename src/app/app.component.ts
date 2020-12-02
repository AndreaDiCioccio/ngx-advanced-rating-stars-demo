import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:`
        <ngx-advanced-rating-stars 
            [ratings]="ratings" 
            [style]="ratingStyle" 
            [showRatingInNumericFormat]="true" 
            [percentageBarColor]="barColor">
        </ngx-advanced-rating-stars>
        <p>Hover the arrow on the stars!</p>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    ratings = [5, 5, 5, 5, 5, 4, 4, 4, 3, 2, 1, 1, 2]
    
    ratingStyle = {
        starsStyle: {'height' : '22px', 'width' : '22px'},
        ratingStyle: {'font-size' : '18px'},
        countStyle: {'font-size' : '14px'}
    }
    
    barColor:string = "rgb(45, 140, 200)" // or the name of the color

}
