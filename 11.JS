let person ={"fname":"John","lname":"doe"};
person.age=35;
person.fullname=person.fname+" "+person.lname;
console.log(person.fullname);
console.log(person.age);

//usin g new keyword
let person1=new Object();
person1.fname="john";
person1.lname="doc";
person1.age=35;
console.log(person1.age);

//prototypical inheritance
let Object1={fname:"cvr",lname:"123"};
let Object2={age:25};
Object2.__proto__=Object1;
console.log(Object2.fname);

//using setproperty
let person3 ={"fname":"ohn","lname":"do"};
let person4={age:35};
Object.setPrototypeOf(person4,person3);
console.log(person3.fname);

//using constructor function
function per(fname,lname){
    this.fname=fname;
    this.lname=lname;
    this.fullname=function(){
        return this.fname+" "+this.lname;
    }
}
let per1=new per("riki","rochi");
console.log(per1.fullname());



function man(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.fullname = function() {
        return this.fname + " " + this.lname;
    };
}

function admin(fname, lname) {
    man.call(this, fname, lname);  // Pass parameters to man constructor
}

admin.prototype = Object.create(man.prototype);
admin.prototype.constructor = admin;  // Corrected the typo here

let a = new admin("a", "b");
console.log(a.fname);  // Output: a
console.log(a.lname);  // Output: b
console.log(a.fullname()); 

arr=[12,13,14];
let[f]=arr;
console.log(f);
arr1=[12,13,14];
let[b,c]=arr1;
console.log(b);
console.log(c);
arr2=[12,13,14];
let[e,y,g,h]=arr2;
console.log(h);
arr3=[12,13,14];
let[i,...j]=arr3
console.log(i);
console.log(j);
arr4=[12,13,14];
let[m,l]=arr4;
console.log(m);
console.log(l);
let arr6=["Ram","sita"];
let[fname,lname]=arr6;
console.log(fname);
console.log(lname);

//object destructing





