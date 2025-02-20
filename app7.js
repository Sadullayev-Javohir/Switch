// Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og'irlik qiymati berilgan. Og'irlikni kilogramda ifodalofchi programma tuzilsin.


let a = 1
let weight = 60

switch(a) {
	case 1:
		console.log(`${weight}km = ${weight * 1000}m`);
		break;
	case 2:
		console.log(`${weight}sn = ${weight / 100}m`);
		break;
	case 3:
		console.log(`${weight}gm = ${weight / 1000}m`);
		break;
	case 4:
		console.log(`${weight}mgr = ${weight / 10000}m`);
		break;
}