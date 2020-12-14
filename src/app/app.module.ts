import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { MainComponent }        from './main';
import { ThankYouComponent } from './thankyou';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule, 
        NgbModule.forRoot(),                          
        routing
    ],
    declarations: [
        AppComponent,       
        MainComponent,        
        ThankYouComponent
    ],
    exports:[
        MainComponent
    ],
    providers: [   ],
    bootstrap: [AppComponent]
})

export class AppModule { }
