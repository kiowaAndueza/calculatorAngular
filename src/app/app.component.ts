import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  calculator :String[] =["0","1","2","3","4","5","6","7","8","9","+","-","x","/","=","C"];
  values :String[] = [];

  num1=0;
  num2=0;
  result=0;
  total="";

  add():void{
    this.total="";
    this.result=Number(this.num1)+Number(this.num2);
    this.total += this.num1 + "+" + this.num2 + "=" + this.result;

  }

  subtract():void{
    this.total="";
    this.result=Number(this.num1)-Number(this.num2);
    this.total+= this.num1 + "-" + this.num2 + "=" + this.result;
  }

  multiplication():void{
    this.total="";
    this.result=Number(this.num1)*Number(this.num2);
    this.total+= this.num1 + "x" + this.num2 + "=" + this.result;
  }

  division():void{
    this.total="";
    this.result=Number(this.num1)/Number(this.num2);
    this.total+= this.num1 + "/" + this.num2 + "=" + this.result;
  }

  clear():void{
    this.num1=0;
    this.num2=0;
    this.total="";
  }

  squareRoot():void{
    this.total="";
    this.result=Math.sqrt(this.num1);
    this.total+= "√" + this.num1 + "=" + this.result;
  }

  power():void{
    this.total="";
    this.result=Math.pow(this.num1, this.num2);
    this.total+= this.num1 + "^" + this.num2 + "=" + this.result;
  }

  
}
