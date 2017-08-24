import { Component, Inject } from '@angular/core';
import { IResponse } from '../../models/viewModels';
import { responseStatus } from '../../models/enums';

@Component({
		selector: 'app-comp2',
		templateUrl: './component2.component.html'
})

export class Component2Component {
		title: string;

		constructor() {
				var vm = this;
		}

		ngOnInit() {

		}
}
