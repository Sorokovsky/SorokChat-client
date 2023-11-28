import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.sass',
})
export class AvatarComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() clickHandler: (event: Event) => void = (event) => {
    this.router.navigate(['/']);
  };
  @Input() isLogo: boolean = true;
  @Input() imagePath?: string;
  ngOnInit(): void {
    if(!this.imagePath) {
      this.imagePath = this.isLogo ? '../../assets/img/logo.svg' : '../../assets/img/avatar.svg';
    }
  }
}
