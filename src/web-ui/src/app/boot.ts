  ///<reference path="../../node_modules/moment/moment.d.ts" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import { enableProdMode } from '@angular/core';
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);