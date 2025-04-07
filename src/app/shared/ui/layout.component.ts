import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { AuthStateService } from "../data-access/auth-state.service";

@Component({
    standalone: true,
    imports: [RouterModule, RouterLink],
    selector: 'app-layout',
    template: '<header class="h-[80px] mb-8 w-full max-w-screen-lg mx-auto px-4"><nav class="flex items-center justify-between h-full"><a class="text-2xl font-bold" routerLink="/tasks">Alumnos</a><button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800" (click)="logOut()">Salir</button></nav></header><router-outlet />',
})
export default class layoutComponent {
    private _authState = inject(AuthStateService);
    private _router = inject(Router);

    async logOut() {
        await this._authState.logOut();
        this._router.navigateByUrl('/auth/sign-in');

    }
}