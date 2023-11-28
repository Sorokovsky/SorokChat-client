import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent {
}
