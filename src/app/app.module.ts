import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppRoute } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@app/header/header.component';
import { FooterComponent } from '@app/footer/footer.component';
import { AboutComponent } from '@app/about/about.component';

// Service
import { ApiService } from '@service';

// Pipe
// import { AppPipe } from '@pipe';

// Module
import { BodyModule } from '@app/body/body.module';
import { AppPipeModule } from './pipe/AppPipe.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    // AppPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoute,
    BodyModule,
    AppPipeModule
  ],
  // exports: [AppPipe],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
