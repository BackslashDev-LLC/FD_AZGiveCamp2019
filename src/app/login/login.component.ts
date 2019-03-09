import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "fd-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  working: boolean = false;
  username: string;
  password: string;

  constructor(public authService: AuthService) {}
  ngOnInit() {}

  signIn() {
    this.working = true;

    this.authService.login(this.username, this.password).then(() => {
      this.working = false;
    });
  }
}
