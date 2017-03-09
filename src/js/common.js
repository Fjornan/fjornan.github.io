//切换css
function cssTrainsition(index){
	if(index == 0){
		document.getElementById('tran-one-title').style.bottom = '25%';
		document.getElementById('tran-one-content').style.bottom = '15%';
	}else{
		document.getElementById('tran-one-title').style.bottom = '100%';
		document.getElementById('tran-one-content').style.bottom = '-10%';
	}
}
