		function disableTap() {
		  window.addEventListener("touchstart",function(event_){
		  if (event_.timeStamp-time_stamp<100){// A tap that occurs less than 300 ms from the last tap will trigger a double tap. This delay may be different between browsers.
			  event_.preventDefault();
			  event_.stopProbagation();
			  return false;// Not sure if you really need this anymore, but whatever.
		    }
		  });
		}

		(function($){
			$.fn.doubletap = function(onDoubleTapCallback, onTapCallback, delay){
				var eventName, action;
				delay = delay == null? 500 : delay;
				eventName = 'touchend';
				$(this).bind(eventName, function(event){
					var current = $(this);
					var now = new Date().getTime();
					var lastTouch = $(this).data('lastTouch') || now + 1 /** the first time this will make delta a negative number */;
					var delta = now - lastTouch;
					clearTimeout(action);
					if(delta<500 && delta>0){
						if(onDoubleTapCallback != null && typeof onDoubleTapCallback == 'function'){
							onDoubleTapCallback(event, current);
						}
					}else{
						$(this).data('lastTouch', now);
						action = setTimeout(function(evt){
							if(onTapCallback != null && typeof onTapCallback == 'function'){
								onTapCallback(evt, current);
							}
							clearTimeout(action);   // clear the timeout
						}, delay, [event]);
					}
					$(this).data('lastTouch', now);
					
				});
			};
		})(jQuery);
		
		function doubleTap(elm, tT, tO) {
			elm.doubletap(
			function(event, elem){
				tT(event, elem);
				/*
				alert('çift dokunuş');
				//window.location.href = param;
								dev = document.getElementById("device");
								dev.innerHTML = JSON.stringify(cur);
								var m = cur.find('.irs').text();
								alert('m' + m);
				disableTap();
				*/
				return false;
			},
			function(event, elem){
				tO(event, elem);
				/*
				//alert('tek dokunuş');
				//window.location.href = param;
				*/
				return false;
			},
			400
			);
		};
		
		function dblclick(elm, param) {
			elm.dblclick(
			function(event){
				var x = $(this);
				var k = x.find('.irs');
				console.log(k.text());
				alert(k.text());
				disableTap();
				return false;
			});
		}