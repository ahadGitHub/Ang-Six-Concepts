import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    userName = '';
    isUserNameEmpty = true;

    constructor() { }

    ngOnInit() {
    }

    isUserNameValid() {
        return true ? ( this.userName === '' ) : false;
    }

    resetUserName() {
        this.userName = '';
    }

}
