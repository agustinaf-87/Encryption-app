import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-form1';

  plainText:string = "";
  encryptText: string = "";  
  encPassword: string= ""; 
  decPassword:string= "";
  conversionEncryptOutput: string= "";
  conversionDecryptOutput:string= "";
  encryptedVars:string [] =  [];

  constructor() {  
  }  
 
  convertText(conversion:string) {  
    this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();  
}


}