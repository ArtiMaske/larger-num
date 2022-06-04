
const largestNumber = function () {
	let	num1 = Number(document.getElementById("fnum").value);
	let	num2 = Number(document.getElementById("snum").value);
	if(num1>num2)
		{
			window.alert(`Largest Number is : ${num1}`);
		}
		else if(num2>num1)
		{
			window.alert(`Largest Number is : ${num2}`);
		}
		else 
		{
			window.alert("Numbers are equal");
		}
}
			
	
     

	