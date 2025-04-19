/* ------------------------------------------------------------------------------- */
/* ロールオーバー */
/* ------------------------------------------------------------------------------- */

function initRollovers() {
	if (!document.getElementById) return
	
	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {		
		if (aImages[i].className == 'imgover') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_f2'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);
			
			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}	
			
			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_f2'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

try{
	window.addEventListener("load",initRollovers,false);
}catch(e){
	window.attachEvent("onload",initRollovers);
}


/* ------------------------------------------------------------------------------- */
/* FireFoxでJavascript「window.close()」を使う場合 */
/* ------------------------------------------------------------------------------- */

function close_win(){
	var nvua = navigator.userAgent;
		if(nvua.indexOf('MSIE') >= 0){
			if(nvua.indexOf('MSIE 5.0') == -1) {
				top.opener = '';
			}
		}
		else if(nvua.indexOf('Gecko') >= 0){
			top.name = 'CLOSE_WINDOW';
			wid = window.open('','CLOSE_WINDOW');
		}
	top.close();
}