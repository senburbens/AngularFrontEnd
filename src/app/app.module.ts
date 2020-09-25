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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';


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
    LangDropdownComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    AuthModule,
    BrowserAnimationsModule,
    AgendaModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
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
