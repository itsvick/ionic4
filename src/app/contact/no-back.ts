import { Injectable, Inject } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
@Injectable()
export class Noback implements CanDeactivate<any> {
    constructor(
        private router: Router
    ) {
    }

    async canDeactivate(): Promise<boolean> {
        return true;
    }
}
