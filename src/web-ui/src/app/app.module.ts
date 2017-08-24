import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/Rx';
import { ENV_APP_PROD_CONFIG, ENV_APP_TEST_CONFIG, AppConfig } from './config/config';

import { TRANSLATION_PROVIDERS } from './config/translations';

import { AppRouting } from './app.routing';
import { WebRequest } from './services/web.request';
import { LoginService } from './services/login.service';
import { BroadcastService } from './services/broadcast.service';
import { StorageService } from './services/storage.service';
import { CommonService } from './services/common.service';
import { TranslateService } from './services/translate.service';

import { TranslatePipe } from './pipes/translatePipe';
import { FormatDate } from './pipes/format-date.pipe';

import { AppComponent } from './components/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { Component2Component } from './components/component2/component2.component';
import { SecurityGuard } from './config/SecurityGuard';

 @NgModule({
		// directives, components, and pipes
		declarations: [
				AppComponent,
				LandingComponent,
				LoginComponent,
				TranslatePipe,
            Component2Component,
            FormatDate
		],
		// modules
		imports: [
				BrowserModule,
				HttpModule,
				FormsModule,
				RouterModule,
				AppRouting,
				ReactiveFormsModule,
				BrowserAnimationsModule,
		],
		providers: [
				{ provide: 'IAppConfig', useValue: ENV_APP_TEST_CONFIG },
				{ provide: 'IWebRequest', useClass: WebRequest },
				{ provide: 'ILoginService', useClass: LoginService },
				{ provide: 'ICommonService', useClass: CommonService },
				{ provide: 'ITranslateService', useClass: TranslateService },
				{ provide: 'IBroadcastService', useClass: BroadcastService },
				{ provide: 'IStorageService', useClass: StorageService },
				SecurityGuard,
				TRANSLATION_PROVIDERS,
				COMPILER_PROVIDERS
		],
		bootstrap: [
				AppComponent
		]
})
export class AppModule { }


