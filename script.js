const rest = document.querySelector("#result")

let iiddd = '0'
let ttt = ''
let firstnum = 0
let secondnum = 0


function tapofbtn(iiddd){
	if(typeof iiddd == 'string'){
		if(iiddd=='='){
			secondnum=parseFloat(rest.textContent)
			console.log(firstnum, ttt, secondnum)
			if (ttt =='+'){
				firstnum+=secondnum
			}

			if (ttt =='-'){
				firstnum-=secondnum
			}

			if (ttt =='*'){
				firstnum*=secondnum
			}

			if (ttt ==':'){
				if(secondnum==0){
					firstnum = 0
					ttt=''
					rest.textContent ='Помилка'
				} else{
				firstnum/=secondnum
				}
				
			}
			
			rest.textContent=`${firstnum}`	
		}	else if(iiddd=='C'){ // очистити
			firstnum = 0
			ttt=''
			rest.textContent = 0
			secondnum=0

		} else if(iiddd=='-+'){// зміна знаку
			rest.textContent=parseFloat(rest.textContent)*-1

		}else{ // знак рахування
		 	firstnum = parseFloat(rest.textContent)
			rest.textContent=0
 			ttt = iiddd
		}
	} else {
		rest.textContent==0||rest.textContent=='Помилка'?rest.textContent=`${iiddd}`:rest.textContent+=`${iiddd}`
	}
}