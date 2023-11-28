import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.sass'
})
export class AvatarComponent {
  constructor(private router: Router) {}
  @Input() imagePath?: string = '../../assets/img/logo.svg';
  @Input() clickHandler: () => void = () => {
    this.router.navigate(['/']);
    
  };
  @Input() isLogo: boolean = true;
}
