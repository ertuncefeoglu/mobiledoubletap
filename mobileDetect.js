(isMobileDevice = function () {
			  testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile' , 'i');
			  
			  if (testExp.test(navigator.userAgent)){
				   return true;
			    }
			  else {
					return false;
				} 
})();