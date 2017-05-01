var obj = {
    name: "Kunal Shaw",
    age: 32,
	Salary:45599,
	address:{
			city:'Kolkata',
			State:'West Bengal',
			pincode:743135,
			
	},
	
};
console.log("Employee Name :"+obj.name);
console.log("Employee Age :"+obj['age']);
console.log("Employee Salary :"+obj['Salary']);
console.log("Address:");
console.log("Employee City:"+obj.address['city']);
console.log("Employee State:"+obj.address['State']);
console.log("Employee pincode:"+obj.address['pincode']);
