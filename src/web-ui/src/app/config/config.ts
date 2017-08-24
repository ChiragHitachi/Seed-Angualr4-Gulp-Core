import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IAppConfig, IEnvironment } from '../models/viewModels';

export const ENV_APP_PROD_CONFIG: IAppConfig = {
		env: 'prod',
		loginUrl: '/security',
		
}; 

export const ENV_APP_TEST_CONFIG: IAppConfig = {
		env: 'test',    
		loginUrl: ' http://localhost:5001/api/login',
		
}; 

@Injectable()
export class AppConfig implements IAppConfig {
		private config: IAppConfig = { env: '', loginUrl: '' };
		get env(): string {
				return this.config.env;
		}

		get loginUrl(): string {
				return this.config.loginUrl;
		}

		
		ngOnInit() {
				if (this.config.env.length === 0)
						this.load();
		}
		constructor(private http: Http) {
				if (this.config.env.length === 0)
						this.load();
		}

		load() {
				this.http.get('src/app/config/env.json')
						.map(res => res.json())
						.subscribe((envData) => {
								this.config = envData;
						});
		}

		getEnv(key: any) {
				return this.env[key];
		}
		get(key: any) {
				return this.config[key];
		}
}
