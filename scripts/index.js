function app() {
	const main=document.getElementById("main");
	const inputDiv=document.createElement("div");
	inputDiv.id="inputDiv";
	main.appendChild(inputDiv);
	for(let i=1;i<=3;i++) {
		const subdiv=document.createElement("div");
		subdiv.id="subdiv"+i;
		subdiv.setAttribute("class","subdiv");
		inputDiv.appendChild(subdiv);
		const label=document.createElement("div");
		label.id="label"+i;
		label.setAttribute("class","colorlabel");
		subdiv.appendChild(label);
		const linput=document.createElement("input");
		linput.id="linput"+i;
		linput.setAttribute("type","number");
		const uinput=document.createElement("input");
		uinput.id="uinput"+i;
		uinput.setAttribute("type","number");
		subdiv.appendChild(linput);
		subdiv.appendChild(uinput);
	}
	document.getElementById("label1").style.backgroundColor="#f00";
	document.getElementById("label2").style.backgroundColor="#0f0";
	document.getElementById("label3").style.backgroundColor="#00f";
	gbutton=document.createElement("button");
	gbutton.addEventListener("click",render);
	gbutton.innerHTML="Refresh";
	inputDiv.appendChild(gbutton);
	const outputDiv=document.createElement("div");
	outputDiv.id="outputDiv";
	main.appendChild(outputDiv);
	const colordiv=document.createElement("div");
	colordiv.id="color";
	outputDiv.appendChild(colordiv);
	const rgb=document.createElement("p");
	rgb.id="rgb";
	outputDiv.appendChild(rgb);
	const hex=document.createElement("p");
	hex.id="hex";
	outputDiv.appendChild(hex);
	setInitialValue();
	render();
}

function setInitialValue() {
	document.getElementById("linput1").value=0;
	document.getElementById("uinput1").value=255;
	document.getElementById("linput2").value=0;
	document.getElementById("uinput2").value=255;
	document.getElementById("linput3").value=0;
	document.getElementById("uinput3").value=255;
}


function render() {
	let rmin=parseInt(document.getElementById("linput1").value);
	let rmax=parseInt(document.getElementById("uinput1").value);
	let gmin=parseInt(document.getElementById("linput2").value);
	let gmax=parseInt(document.getElementById("uinput2").value);
	let bmin=parseInt(document.getElementById("linput3").value);
	let bmax=parseInt(document.getElementById("uinput3").value);
	let r=Math.floor(Math.random()*(rmax-rmin+1))+rmin;
	let g=Math.floor(Math.random()*(gmax-gmin+1))+gmin;
	let b=Math.floor(Math.random()*(bmax-bmin+1))+bmin; 
	document.getElementById("color").style.backgroundColor="rgb("+r+","+g+","+b+")";
	document.getElementById("rgb").innerHTML="rgb("+r+","+g+","+b+")";
	let hexValue="#"+(r<16 ? "0"+r.toString(16):r.toString(16))+(g<16 ? "0"+g.toString(16):g.toString(16))+(b<16 ? "0"+b.toString(16):b.toString(16));
	document.getElementById("hex").innerHTML=hexValue;
}

