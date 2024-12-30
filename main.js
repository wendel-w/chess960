function Generate(){

	//const rect = document.getElementById('r1')
	//rect.setAttribute('x', f*100)
	let setup=new Array(8)
	//placing the rooks
	//r1
	let r1=genNr(0, 5)
	setup[r1]="r1"
	//r2
	let r2=genNr(r1+2, 7)
	setup[r2]="r2"
	//k
	let k=genNr(r1+1, r2-1)
	setup[k]="k"
	//b1
	for(let i=0;i<8;i+=1){
		if(setup[i]!=null){
			const p=document.getElementById(setup[i])
			p.setAttribute("x", i*100)
		}
	}
}
function genNr(min, max){
	return Math.floor(Math.random()*(max+1-min))+min
}
