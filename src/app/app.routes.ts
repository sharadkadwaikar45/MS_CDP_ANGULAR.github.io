import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    // Redirect signed-in user to the '/example'
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards/project'},

    // Auth routes for guests
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
              {path: 'home', loadChildren: () => import('app/modules/admin/home/home.routes')},
        ]
    },

    // Auth routes for authenticated users
    // {
    //     path: '',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
    //         {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
    //     ]
    // },

    // Landing routes
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     data: {
    //         layout: 'empty'
    //     },
    //     children: [
    //         {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
    //     ]
    // },

    // Admin routes
    // {
    //     path: '',
    //     canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     component: LayoutComponent,
    //     resolve: {
    //         initialData: initialDataResolver
    //     },
    //     children: [
    //         {path: 'dashboards', children: [
    //             {path: 'project', loadChildren: () => import('app/modules/admin/dashboards/project/project.routes')},
    //         ]},
    //         {path: 'partner-management', loadChildren: () => import('app/modules/admin/partner-management/partner-management.routes')},
    //         {path: 'example', loadChildren: () => import('app/modules/admin/example/example.routes')},
    //         {path: 'property-management', loadChildren: () => import('app/modules/admin/property-management/property-management.routes')},
    //         {path: 'users-management', loadChildren: () => import('app/modules/admin/users-management/user-management.routes')},
    //         {path: 'sellers-management', loadChildren: () => import('app/modules/admin/sellers-management/sellers-managements-routes')},
    //         {path: 'buyers-management', loadChildren: () => import('app/modules/admin/buyers-managements/buyers-managements-routes')},
    //         {path: 'orders-management', loadChildren: () => import('app/modules/admin/orders/orders.routes')},
    //         {path: 'messages-management', loadChildren: () => import('app/modules/admin/messages/messages.routes')},
    //         {path: 'transactions-management', loadChildren: () => import('app/modules/admin/tranactions/transactions.routes')},
    //         {path: 'reviews-management', loadChildren: () => import('app/modules/admin/reviews/reviews.routes')},
    //         {path: 'subscription-management', loadChildren: () => import('app/modules/admin/subscription-management/subscription-management.routes')},
    //         {path: 'masters-management', loadChildren: () => import('app/modules/admin/masters/masters.routes')},
    //     ]
    // },
];