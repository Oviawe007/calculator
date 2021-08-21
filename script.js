
let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
/*
buttons.map( button => {
	button.addEventListener('click', (e) =>{
		switch(e.target.innerText){
			case "C":
				display.innerText = '';
				break
			case "←":
				display.innerText = display.innerText.slice(0,-1);
				break
			case "=":
				try{
					display.innerText = eval(display.innerText);
				} catch{
					display.innerText = "Error!";
				}
				break

			default:
				display.innerText += e.target.innerText;
		}
		}
	)
})

*/
//using if statement

buttons.map( button => {
	button.addEventListener('click', (e) =>{
		if (e.target.innerText === "C"){
			display.innerText = '';

		} else if (e.target.innerText === "←"){
			display.innerText = display.innerText.slice(0,-1);

		} else if (e.target.innerText === "="){
			try{

				display.innerText = eval(display.innerText);

			}catch{

				display.innerText = "Error!";
			}
		}

		else {
			display.innerText += e.target.innerText;
		}
	})		
})

