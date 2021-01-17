import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './homePage/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule
    ],
    providers: [],
    exports: [
        HomePageComponent
    ]
})
export class HomeModule { }
