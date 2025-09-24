/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id   : 'example',
    //     title: 'Example',
    //     type : 'basic',
    //     icon : 'heroicons_outline:chart-pie',
    //     link : '/example'
    // },
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboards/project'
    },
    {
        id   : 'property',
        title: 'Property Management',
        type : 'basic',
        icon : 'heroicons_outline:building-office-2',
        link : '/property-management/list'
        // children:[
        //     {
        //         id   : 'property.propertyList',
        //         title: 'Property List',
        //         type : 'basic',
        //         link : '/property-management/list'
        //     },
            // {
            //     id   : 'property.propertyGrid',
            //     title: 'Property Grid',
            //     type : 'basic',
            //     link : '/property-management/grid'
            // },
            // {
            //     id   : 'property.propertyDetails',
            //     title: 'Add Property Details',
            //     type : 'basic',
            //     link : '/property-management/details'
            // }
        // ]
    },
    {
        id   : 'users',
        title: 'Users Management',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/users-management/list'
        // children:[
        //     {
        //         id   : 'users.userListt',
        //         title: 'Users List',
        //         type : 'basic',
        //         link : '/users-management/list'
        //     }
        //     // {
        //     //     id   : 'users.usersDetails',
        //     //     title: 'Add Users Details',
        //     //     type : 'basic',
        //     //     link : '/users-management/details'
        //     // }
        // ]
    },
    {
        id   : 'masters',
        title: 'Masters Management',
        type : 'basic',
        icon : 'heroicons_outline:cog-6-tooth',
        link : '/masters-management'
    },
    // {
    //     id   : 'sellers',
    //     title: 'Sellers Management',
    //     type : 'collapsable',
    //     icon : 'heroicons_outline:users',
    //     children:[
    //         {
    //             id   : 'sellers.sellersList',
    //             title: 'Sellers List',
    //             type : 'basic',
    //             link : '/sellers-management/list'
    //         }
    //     ]
    // },
    // {
    //     id   : 'buyers',
    //     title: 'Buyers Management',
    //     type : 'collapsable',
    //     icon : 'heroicons_outline:users',
    //     children:[
    //         {
    //             id   : 'buyers.buyersList',
    //             title: 'Buyers List',
    //             type : 'basic',
    //             link : '/buyers-management/list'
    //         }
    //     ]
    // },
    // {
    //     id   : 'orders',
    //     title: 'Orders-Management',
    //     type : 'basic',
    //     icon : 'heroicons_outline:clipboard-document-check',
    //     link : '/orders-management'
    // },
    {
        id   : 'subscription',
        title: 'Subscription Management',
        type : 'basic',
        icon : 'heroicons_outline:bookmark-square',
        link : '/subscription-management'
    },
    {
        id   : 'transactions',
        title: 'Transactions-Management',
        type : 'basic',
        icon : 'heroicons_outline:currency-rupee',
        link : '/transactions-management'
    },
    {
        id   : 'reviews',
        title: 'Reviews-Management',
        type : 'basic',
        icon : 'heroicons_outline:star',
        link : '/reviews-management'
    },
    {
        id   : 'messages',
        title: 'Messages-Management',
        type : 'basic',
        icon : 'heroicons_outline:envelope',
        link : '/messages-management'
    },

    
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
