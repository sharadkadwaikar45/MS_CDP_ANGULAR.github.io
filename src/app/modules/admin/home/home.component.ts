import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';

@Component({
    selector: 'app-home',
    imports: [SharedModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    demoArray: any[] = [
        {
            title: 'MANAV',
            img: 'https://manasbhatia.com/img/manavthumbnail.jpg',
            desc1: 'Grasshopper Workflow/Script',
            desc2: 'Generative Design',
        },
        {
            title: 'TerraCurve Tower',
            img: 'https://manasbhatia.com/img/terracurvetowerthumbnail.jpg',
            desc1: 'BIM',
            desc2: 'Rhino-to-Revit Interoperability',
        },
        {
            title: 'NYC Carbon Atlas',
            img: 'https://manasbhatia.com/img/NYCthumbnail.jpg',
            desc1: 'Geographic Information System (GIS)',
            desc2: 'Data Visualization and Mapping',
        },
        {
            title: 'Co-Design Canvas',
            img: 'https://manasbhatia.com/img/codesigncanvasthubnail.jpg',
            desc1: 'Capstone Project',
            desc2: 'Colloquium III: Design in Action',
        },
        {
            title: 'TensileBloom',
            img: 'https://manasbhatia.com/img/tensilebloomthumb2.jpg',
            desc1: 'Fabrication',
            desc2: 'Kinetic Installation',
        },
        {
            title: 'EmotionEcho.exe',
            img: 'https://manasbhatia.com/img/gamethumb.jpg',
            desc1: 'Interactive Design',
            desc2: 'Game Development',
        },
        {
            title: 'Computational Modeling',
            img: 'https://manasbhatia.com/img/compGISgif.gif',
            desc1: 'Data-driven design',
            desc2: 'Parametric Design',
        },
        {
            title: 'Studio-In-Flux',
            img: 'https://manasbhatia.com/img/spatialaithumb.jpg',
            desc1: 'Semantic Modeling',
            desc2: 'Agent-based Simulation',
        },
        {
            title: 'Environmental Data Analysis',
            img: 'https://manasbhatia.com/img/edathumbnail.jpg',
            desc1: 'Machine Learning',
            desc2: 'Data Science',
        },
    ];

    social: any[] = [
        {
            label: 'Instagram',
            icon: 'instagram',
        },
        {
            label: 'LinkedIn',
            icon: 'linkedin',
        },
        {
            label: 'Email',
            icon: 'mail',
        },
    ];
}
