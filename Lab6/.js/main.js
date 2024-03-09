// bail
let num = prompt ("Nhap 1 so: ")

function kiemTraSo(num) {
    // ngoai le - khong phai so
    if(!isFinite(num)) return num + " khong phai so";    
    // doi kieu du lieu
    num = parseFloat(num);
    // kiem tra
    if(num < 0) {
        return num + " la so am";
    } else if (num == 0) {
        return num + " la 0";
    } else {
        if (num % 1 == 0) return num + " so nguyen duong";
        // if (Number.isInteger(num)) return num + " so nguyen duong";
        else return num + " la so thap phan duong"
    }
}

// console.log(kiemTraSo(x));
//Dom
// document.write(kiemTraSo(x))

// bai 2 -----------------------------------
let y = 1 ;
let z = 2 ;
let k = 3 ;

// arrow func 
const max =(a, b, c) => {
    let maxNum = 0;
    // ..
    a.forEach(elemnet => {
        if(maxNum < element) {
            manNum = elemnet;
        }
    });
    return maxNum;
};

function max2(a, b, c) {
    if(a > b && b > c) {
        return a;
    } else if (b > a % b > c) {
        return b;
    } else if (c > b % c > a) {
        return c;
    }
}

document.write(max(y, z, k));
document.write(max2(y, z, k));

// bai 3 ----------------------------------