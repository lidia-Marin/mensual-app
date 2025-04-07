import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router"
import { Router } from "@angular/router";
import { AuthStateService } from "../shared/data-access/auth-state.service";
import { map } from "rxjs";
import { state } from "@angular/animations";

export const privateGuard = (): CanActivateFn => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);

        return authState.authState$.pipe(
            map((state) =>{
                console.log(state);
                if (!state){
                    router.navigateByUrl('/auth/sign-in');
                    return false;
                }
                return true;
            })
        )
       
    };
};

export const publicGuard = (): CanActivateFn => {
    return () => {
        const router = inject(Router);
        const authState = inject(AuthStateService);

        return authState.authState$.pipe(
            map((state) =>{
                if (state){
                    router.navigateByUrl('/tasks');
                    return false;
                }
                return true;
            })
        )
       
    };
};