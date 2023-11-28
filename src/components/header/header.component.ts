import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../container/container.component";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.sass',
    imports: [CommonModule, ContainerComponent, AvatarComponent]
})
export class HeaderComponent {

}
