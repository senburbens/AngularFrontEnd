import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { WrapperVComponent } from './components/wrappers/wrapperV.component';
import { WrapperHComponent } from './components/wrappers/wrapperH.component';
import { LangDropdownComponent } from './components/lang-dropdown/lang-dropdown.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth/@interceptors/auth.interceptor';
import { AgendaModule } from './agenda/agenda.module';
import { ListUsersResolverService } from './@resolvers/list-users-resolver.service';
import { DynamicFOrmTestComponent } from './components/dynamic-form-test/dynamic-form-test.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './auth/@reducers/counter.reducer';
import * as fromAuthLoginSuccesfull from './auth/@reducers/tokens.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent,
    MainPageComponent,
    HeaderComponent,
    PageNotFoundComponent,
    WrapperVComponent,
    WrapperHComponent,
    LangDropdownComponent,
    DynamicFOrmTestComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    AuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    AgendaModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ count : counterReducer, tokens :  fromAuthLoginSuccesfull.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    ListUsersResolverService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
