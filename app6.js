// Uzunlik birliklari quyidagi tartibda bo'lgan. 1-kilometr, 2-dm 3-santimetr, 4-millimetr. Uzunlik birligini bildiruvchi son berilgan (1-5 o)raliqda va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalovchi programma tuzilsin. 

let a = 1
let uzunlik = 60

switch(a) {
	case 1:
		console.log(`${uzunlik}km = ${uzunlik * 1000}m`);
		break;
	case 2:
		console.log(`${uzunlik}dm = ${uzunlik / 10}m`);
		break;
	case 3:
		console.log(`${uzunlik}sm = ${uzunlik / 100}m`);
		break;
	case 4:
		console.log(`${uzunlik}mm = ${uzunlik / 1000}m`);
		break;
}