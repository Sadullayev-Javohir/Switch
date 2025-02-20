// A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. Amal quyidagi qiymatlar qabul qiladi. 1-qo'shish, 2-ayirish, 3-bo'lish, 4-ko'paytirish.

let A = 5
let B = 18
let amal = 2

switch (amal) {
	case 1:
		S = A + B
		console.log(`${A} + ${B} = ${S}`);
		break;
	case 2:
		S = A - B
		console.log(`${A} - ${B} = ${S}`);
		break;
	case 3:
		S = A / B
		console.log(`${A} / ${B} = ${S}`);
		break;

	case 4:
		S = A * B
		console.log(`${A} * ${B} = ${S}`);
		break;
}