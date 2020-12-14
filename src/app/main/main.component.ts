import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({templateUrl: 'main.component.html', styleUrls: ['main.component.css']})
export class MainComponent implements OnInit {

    @ViewChild('close') close;
    @ViewChild('modalPopup') modalPopup;    

    mainForm: FormGroup;
    error = false;
    submitted = false;
    username:string;
    phone:'';
    email:'';  
    closeResult: string;  

    constructor(
        private formBuilder: FormBuilder,        
        private router: Router,
        private modalService: NgbModal
        ) {}

    ngOnInit() {
        this.mainForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]        
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.mainForm.controls; }

    

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.mainForm.invalid) {
            this.error = true;
            return;
        } else{
            this.error = false;
            this.username = this.mainForm.controls['firstname'].value + ' ' + this.mainForm.controls['lastname'].value;
            this,this.phone = this.mainForm.controls['phone'].value;
            this.email = this.mainForm.controls['email'].value;                        
            this.modalService.open(this.modalPopup);
        }
    }
    
}
