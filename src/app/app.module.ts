import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './success-alert/succes-alert.component';
import { HeaderComponent} from './header/header.component';
import { ProductsComponent } from './product/products.component';
import { ProductDetailsDialogComponent } from './product/product-details/product-details-dialog.component';
import { FrontpageComponent } from './shared/frontpage/frontpage.component';
import { CheckoutComponent } from './shopping-cart-list/checkout/checkout.component';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartEditComponent } from './shopping-cart-list/shopping-cart-edit/shopping-cart-edit.component';
import { RouterModule, Routes} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AdminComponent } from './admin/admin.component';
import * as admin from 'firebase-admin';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import {AngularFireAuthGuard, canActivate} from '@angular/fire/auth-guard';
import {AuthService} from './services/auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: FrontpageComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: AdminLoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccesAlertComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailsDialogComponent,
    FrontpageComponent,
    CheckoutComponent,
    ShoppingCartListComponent,
    ShoppingCartEditComponent,
    ShopComponent,
    ProductItemComponent,
    AdminComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsDialogComponent]
})
export class AppModule { }
