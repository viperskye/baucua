import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	tong: number = this.randomIntFromInterval(3,18);
	mang:any = [this.randomIntFromInterval(1,6),this.randomIntFromInterval(1,6),this.randomIntFromInterval(1,6)];
	constructor(public navCtrl: NavController) {
		console.log(this.mang);
	}
	private randomIntFromInterval(min:number,max:number) : number {
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	public xoc():void {
		this.mang[0] = this.hack(this.tong);
		this.mang[1] = this.randomIntFromInterval(1,6);
		this.mang[2] = this.randomIntFromInterval(1,6);
		this.mang.sort(function() {  
		    return Math.random() - 0.5;
		});
		this.tong = this.mang[0] + this.mang[1] + this.mang[2];
	}
	public hack(tong:number):number {
		console.log(this.tong);
		if(this.tong == 4 || this.tong == 6) {
			console.log("tom");
			return 6;
		}
		if(this.tong == 5 || this.tong == 7) {
			console.log('cua');
			return 5;
		}
		if(this.tong == 8 || this.tong == 10) {
			console.log('ca');
			return 4;
		}
		if(this.tong == 9 || this.tong == 11) {
			console.log('ga');
			return 3;
		}
		if(this.tong == 12 || this.tong == 14) {
			console.log("bau");
			return 2;
		}
		if(this.tong == 13 || this.tong == 15) {
			console.log("nai");
			return 1;
		}
		return this.randomIntFromInterval(1,6);
	}
}
