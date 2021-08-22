import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: Router) {
    this.userForm = this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      email: this.formBuilder.control(""),
      description: this.formBuilder.control(""),
      dateBirth: this.formBuilder.control(""),
      address: this.formBuilder.group({
        street: this.formBuilder.control(""),
        city: this.formBuilder.control(""),
        state: this.formBuilder.control(""),
        zip: this.formBuilder.control("")
      })

    });
  }

  ngOnInit(): void {
    this.initUserForm();
  }
  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastName: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.minLength(5), Validators.email]),
      description: this.formBuilder.control(""),
      dateBirth: this.formBuilder.control("", Validators.required),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zip: this.formBuilder.control("", Validators.required)
      })

    });


  }
  onSubmit(): void {
    const userData = this.userForm.value;
    const address = new Address(userData.address.street, userData.address.city, userData.address.state, userData.address.zip);
    const user = new User(userData.firstName, userData.lastName, userData.email, address, userData.description, userData.dateBath, userData.aliases);
    this.userService.addUser(user);
    this.route.navigate(["users"]);
  }

}
