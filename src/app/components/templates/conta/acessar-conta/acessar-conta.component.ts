import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.scss']
})
export class AcessarContaComponent implements OnInit {

  loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sendForm(data): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }, 1000)

  }
}
