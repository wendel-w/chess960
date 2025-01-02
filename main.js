function Generate(){

	//const rect = document.getElementById('r1')
	//rect.setAttribute('x', f*100)
	let setup=new Array(8)
	//placing the rooks
	//r1
	let r1=genNr(0, 5)
	setup[r1]="r1"
	console.log("r1=", r1)
	//r2
	let r2
	let p=[]
	for(let i=0;i<8;i+=1){
		if(setup[i]==null && Math.abs(r1-i)>1)
			p=[...p, i]
	}
	console.log("p=",p)
	r2=p[ genNr(0, p.length-1) ]
	setup[r2]="r2"
	console.log("r2=", r2)
	//k
	let k
	if(r1<r2)
		k=genNr(r1+1, r2-1)
	else
		k=genNr(r2+1, r1-1)
	setup[k]="k"
	console.log("k=", k)
	//b1
	let b1
	let even=[]
	for(let i=0;i<8;i+=2){
		if(setup[i]==null)
			even=[...even, i]
	}
	console.log(even)
	b1=even[ genNr(0, even.length-1) ]
	setup[b1]="b1"
	console.log("b1=",b1)

	//b2
	let b2
	let odd=[]
	for(let i=1;i<8;i+=2){
		if(setup[i]==null)
			odd=[...odd, i]
	}
	console.log(odd)
	b2=odd[ genNr(0, odd.length-1) ]
	setup[b2]="b2"
	console.log("b2=",b2)

	//q
	let q
	let Q=[]
	for(let i=1;i<8;i+=1){
		if(setup[i]==null)
			Q=[...Q, i]
	}
	q= Q[ genNr(0, Q.length-1) ]
	setup[q]="q"
	console.log("Q=", Q)
	console.log("q=",q)
	//n1
	let n1
	for(let i=0;i<8;i+=1){
		if(setup[i]==null){
			setup[i]="n1"
			n1=i
			break
		}
	}
	console.log("n1=", n1)
	

	//n2
	let n2
	for(let i=0;i<8;i+=1){
		if(setup[i]==null){
			setup[i]="n2"
			n2=i
			break
		}
	}
	console.log("n2=", n2)

	for(let i=0;i<8;i+=1){
		if(setup[i]!=null){
			const p=document.getElementById(setup[i])
			p.setAttribute("x", i*100)
		}
	}
	console.log(setup)
}
function genNr(min, max){
	return Math.floor(Math.random()*(max+1-min))+min
}
function abs(x){
	if(x<0)
		return -1*x
	return x
}
