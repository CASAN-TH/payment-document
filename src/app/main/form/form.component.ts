import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  paymentForm: FormGroup;
  paymentData: any = {};

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  pay_type: any[] = [
    { name: 'เงินสด', sound: 'pay' },
    { name: 'เช็ค', sound: 'check' },
    { name: 'โอนเงิน', sound: 'tranfer' }
  ];

  ngOnInit() {

    this.paymentData = {
      date: "",
      name: "",
      card_id: "",
      address: "",
      description: "",
      amount: "",
      total: "",
      pay_type: "",
      banking: "",
      pay_no: "",
      date1: ""


      // date: "",
      // name: "",
      // card_id: "",
      // address: "",
      // lists: [
      //   {
      //     description: "",
      //     amount: "",
      //   }
      // ],
      // total: "",
      // pay_type: "",
      // pay_description: {
      //   banking: "",
      //   pay_no: "",
      //   date: ""
      // }

    }

    this.paymentForm = this.createPaymentForm();

  }
  createPaymentForm(): FormGroup {
    return this.formBuilder.group({

      date: [this.paymentData.date, Validators.required],
      name: [this.paymentData.name, Validators.required],
      card_id: [this.paymentData.card_id, Validators.required],
      address: [this.paymentData.address, Validators.required],
      description: [this.paymentData.description, Validators.required],
      amount: [this.paymentData.amount, Validators.required],
      total: [this.paymentData.total, Validators.required],
      pay_type: [this.paymentData.pay_type, Validators.required],
      banking: [this.paymentData.banking, Validators.required],
      pay_no: [this.paymentData.pay_no, Validators.required],
      date1: [this.paymentData.date, Validators.required],

    })
  }

  oncancel() {
    console.log("oncancel")
  }

  onsave() {
    console.log(this.paymentForm.value);
  }

  onadd(){
    this.paymentData.lists.push(
      {
        description: '',
        amount: '',
      }
    )
  }
}
