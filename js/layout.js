$(function(){
	
	var $html = $('html');
	var $body = $('body');
	var $headerWrap = $('.header-wrap');
	var $header = $('#header');
	var $gnbPc_bg = $('.gnb-pc-bg');
	var $gnbPc_depthbg = $('.gnb-pc-depthbg');
	var $gnb_pc_wrap = $('.gnb-pc');
	var $gnb_pc = $('.gnb-pc #gnb');
	var $gnb_pc_l1 = $('.gnb-pc #gnb .mn_l1');
	var $gnb_pc_a1 = $('.gnb-pc #gnb .mn_a1');
	var $pc_depth2 = $('.gnb-pc #gnb .depth2');
	var $gnbPc_depthbg_inwrap = $('.gnb-pc-depthbg-inwrap');
	var $mvis = $('.mvis');
	var $headerLogin = $('.header-login');
	var $gnbMb = $('.gnb-mb');
	var $mbMenuOpen = $('.mbMenu-open');
	var $gnbMb_bg  = $('.gnb-mb-bg');
	var $gnb = $('#gnb');
	var $headerLoginpop_open = $('.header-login-pop-open');
	var $headerLoginpop = $('.header-login-pop');
	var $headerLoginpop_title = $('.header-login-pop-title');
	var $shMiniPopOpen = $('.sh-miniPop-open');
	var $shMiniPopClose = $('.sh-miniPop-close');
	var $shMiniPop = $('.sh-miniPop');
	var $sn_l1 = $('.subNav .sn_l1');
	var $sn_a1 = $('.subNav .sn_a1');
	var $subDepthSiblings = $('.subDepth-siblings');
	var $shpgPrint = $('.sh-functionBtn.print');
	var $subContainer = $('.sub-container');
	var $sitemap = $('.sitemap');
	var $sitemapGnb = $('.sitemap-gnb');
	var $sitemapOpen = $('.sitemap-open');
	var $sitemapClose = $('.sitemap-close');
	var $sitemapInBox = $('.sitemap-inBox');
	var $sitemapLogoA = $('.logo a');

	
	function gnb_pc_Fn(){
		
		var gnbOpen;
		
		//1�곸뒪 hover, focus�� �꾩껜硫붾돱 �대┝
		function gnb_pc_open(e){
			$gnb_pc_a1.on('mouseenter focus',function(e){
				
				if( window.innerWidth < 1200 ) return;
				
				var thisPrt = $(this).parents('.mn_l1');
				var thisDepth2 = thisPrt.find('.depth2');
				var depth2H = thisDepth2.innerHeight() + 1;
								
				// �ъ빱�깆씪 �뚮뒗 �대룞�띾룄瑜� �꾪빐 硫붾돱 �좊땲硫붿씠�� �④낵 類�
				if($(event.target).is(':focus')){
					
					gnbOpen = true
					
					$gnbPc_depthbg.height(depth2H) //諛곌꼍 height瑜� 2�곸뒪 height濡� 留욎땄
					
					$header.addClass('mnOpen');
					
					
					if(!$gnbPc_bg.is(':visible')) $gnbPc_bg.fadeIn(200);
					
					$gnbPc_depthbg.show();
					$pc_depth2.stop().hide().finish();
					thisDepth2.stop().show();
					
				}else{
					if(!gnbOpen == true) {
						
						gnbOpen = true
						
						$gnbPc_depthbg.height(depth2H) //諛곌꼍 height瑜� 2�곸뒪 height濡� 留욎땄
						
						$header.addClass('mnOpen');
						
						if(e.type == "mouseenter") thisPrt.addClass('on');
						
						$gnbPc_bg.fadeIn(200);
						$gnbPc_depthbg.stop().slideDown(400,function(){
							
							thisDepth2.stop().fadeIn(200);
							$gnbPc_depthbg_inwrap.fadeIn(200);
						});
						
					}else {
						
						//硫붾돱媛� �대� �ㅽ뵂�섏뼱�덉쓣 �� �ㅻ같寃� �좊땲硫붿씠�� 類�
						if(!$gnbPc_bg.is(':visible')) return;
						if(thisDepth2.is(':visible')) return; //�대떦 硫붾돱媛� �대� �ㅽ뵂以묒씠硫� 以묐났�ㅽ뻾 �덊븿
						
						if(e.type == "mouseenter"){
							$gnb_pc_l1.removeClass('on');
							thisPrt.addClass('on');
						}
						
						$pc_depth2.stop().hide().finish();
						
						$gnbPc_depthbg.stop().animate({height:depth2H},300,function(){
							
							thisDepth2.stop().show();
							
							if(!$gnbPc_depthbg_inwrap.is(':visible')){
								$gnbPc_depthbg_inwrap.fadeIn(200);
							}
						})
					}
				}
			});
		}	
		
		function gnb_pc_close(){
			
			function gnb_pc_close_Fn(){
				
				gnbOpen = false;
				$gnb_pc_l1.removeClass('on');
				
				//硫붾돱 �대┝�� �ㅽ뻾以묒씠硫� 以묐떒
				$gnbPc_bg.finish();  
				$gnbPc_depthbg.finish();
				$pc_depth2.finish();
				$pc_depth2.fadeOut(0,function(){
										
					$gnbPc_bg.fadeOut(200);
					$gnbPc_depthbg.slideUp(200);
					$header.removeClass('mnOpen');
				});
			}
			
			$(document).on('mouseenter focus click','*',function(e){
				
				if(!gnbOpen == true) return; //硫붾돱�대┝�� �ㅽ뻾 �덈릱�쇰㈃ �ロ옒 �ㅽ뻾�덊븿
				
				if($(e.target).hasClass($gnb_pc_wrap.attr('class')) || $gnb_pc_wrap.has(e.target).length || $gnbPc_depthbg.has(e.target).length) return; //留덉슦�� 而ㅼ꽌媛� gnb �덉뿉 �덉쓣�� �ロ옒 �ㅽ뻾�덊븿
				
				gnb_pc_close_Fn();
			});

			//留덉슦�� �붾㈃ 諛뽰쑝濡� �섍�硫� 硫붾돱 �ロ옒
			$(document).on('mouseleave',function(){

				if(!gnbOpen == true) return; //硫붾돱�대┝�� �ㅽ뻾 �덈릱�쇰㈃ �ロ옒 �ㅽ뻾�덊븿
				gnb_pc_close_Fn();
			});
		}
		
		gnb_pc_open();
		gnb_pc_close();
		
	};
	
	//gnb mobile
	function gnb_mb_Fn(){
		
		// 濡쒓렇�� �곸뿭怨� 硫붾돱 �대줎
		function gnb_mb_clone(){
			$gnbMb.append($headerLogin.clone(true));
			$gnbMb.append($gnb.clone(true));
			
			var $gnb_mb_l1 = $('.gnb-mb #gnb .mn_l1');
			var $gnb_mb_a1 = $('.gnb-mb #gnb .mn_a1');
			var $mb_depth2 = $('.gnb-mb #gnb .depth2');
	
			
			$gnb_mb_a1.on('click',function(e){
				
				var thisPrt = $(this).parents('.mn_l1');
				var thisDepth = thisPrt.find('.depth2');
				
				//�쒕툕硫붾돱 �덉쓣 �� 1�곸뒪 留곹겕 �ㅽ뻾 �덊븿
				if(thisDepth.length){
					e.preventDefault();
				}
				
				$mb_depth2.slideUp();
				$gnb_mb_l1.removeClass('over');
				
				if(thisDepth.is(':visible')) return;
				
				thisDepth.slideDown();
				thisPrt.addClass('over');
			});
		};
		
		function gnb_mb_open(){
			
			var scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';			
			
			$mbMenuOpen.on('click',function(){
				
				$('html').css('paddingRight', scrollbarWidth);
				$('#header').css('marginRight', scrollbarWidth);
				$('body').addClass('no_scroll');
				
				$gnbMb_bg.fadeIn('200');
				$gnbMb.addClass('open');
				
				
				$(window).resize(function(){
					
					if(!$gnbMb.hasClass('open')) return;
					
					if( window.innerWidth < 1200 ) return;
					
					$('html').css('paddingRight', 0);
					$('header').css('marginRight', 0);
					$('body').removeClass('no_scroll');
					$gnbMb_bg.hide();
					$gnbMb.removeClass('open');
				});
			});
		};
		
		function gnb_mb_close(){
			
			$gnbMb_bg.on('click',function(){
				
				$('html').css('paddingRight', 0);
				$('header').css('marginRight', 0);
				$('body').removeClass('no_scroll');
				
				$gnbMb_bg.fadeOut('200');
				$gnbMb.removeClass('open');
			})
		}
		
		
		gnb_mb_clone();
		gnb_mb_open();
		gnb_mb_close();
	}
	
	//�ㅻ뜑 �ㅽ겕濡� ��
	function headerScr_Fn(){
		
		var $window = $(window);
		var pageOffsetTop = $header.height()/2;//�됱긽 蹂��� 遺�遺꾩쓽 top媛� 援ы븯湲�
		

		$window.resize(function(){ //諛섏쓳�뺤쓣 ��鍮꾪븯�� 由ъ궗�댁쫰�� top媛믪쓣 �ㅼ떆 怨꾩궛
			pageOffsetTop = $header.height()/2;
		});
		
		var scrolled = $window.scrollTop() >= pageOffsetTop; //�ㅽ겕濡ㅻ맂 �곹깭; true or false
		$headerWrap.toggleClass('scroll', scrolled); //�대옒�� �좉�

		$window.on('scroll', function(){ //�ㅽ겕濡ㅼ떆
			var scrolled = $window.scrollTop() >= pageOffsetTop; //�ㅽ겕濡ㅻ맂 �곹깭; true or false
			$headerWrap.toggleClass('scroll', scrolled); //�대옒�� �좉�
		});
		
	};
	
	//�섏쓽 異붿쭊�꾩썝��  �앹뾽
	function headerLoginpop_open_Fn(){
		
		var headerLoginpop_visible;
		
		$(document).on('click','.header-login-pop-open, .header-login-pop-open span',function(e){
			
			e.stopPropagation();
			
			$(this).parents('.header-login').find('.header-login-pop-open').stop().toggleClass('open');
			$(this).parents('.header-login').find('.header-login-pop').stop().fadeToggle('300',function(){
				
				headerLoginpop_visible = true
			});
		})
		
		$(document).on('click','*',function(e){
			
			if(!headerLoginpop_visible == true) return;

			if($('.header-login-pop').has(event.target).length) return;
			
			$('.header-login-pop-open').removeClass('open');
			$('.header-login-pop').fadeOut('300',function(){
				
				headerLoginpop_visible = false;
			});
		});
	}
	
	//�뺣낫蹂�寃�  �앹뾽
	function headerModifyPop_open_Fn(){
		
		var headerLoginpop_visible;
		
		$(document).on('click','.header-login .mypage, .header-login .mypage span',function(e){
			
			e.stopPropagation();
			
			$(this).parents('.header-login').find('.mypage').stop().toggleClass('open');
			$(this).parents('.header-login').find('.modify-pop').stop().fadeToggle('300',function(){
				
				headerLoginpop_visible = true
			});
		})
		
		$(document).on('click','*',function(e){
			
			if(!headerLoginpop_visible == true) return;

			if($('.header-login .modify-pop').has(event.target).length) return;
			
			$('.header-login .mypage').removeClass('open');
			$('.header-login .modify-pop').fadeOut('300',function(){
				
				headerLoginpop_visible = false;
			});
		});
	}
		
	//�쒕툕 �곷떒 湲곕뒫 踰꾪듉
	function subHeaderBtn_Fn(){
		
		function shMiniPop(){
			
			// 酉곗뼱, 怨듭쑀 �앹뾽
			$shMiniPopOpen.on('click',function(){
				
				$shMiniPop.fadeOut(300);
				$shMiniPopOpen.removeAttr('title');
				$(this).parent('li').find('.sh-miniPop').fadeIn(300);
				$(this).attr('title','�앹뾽 �대젮 �덉쓬');
			});
			
			$shMiniPopClose.on('click',function(){
			
				$shMiniPop.fadeOut(300);
				$shMiniPopOpen.removeAttr('title');
			});			
		}
		
		function pagePrint(){
			
			//�섏씠吏� �꾨┛��
			$shpgPrint.on('click',function(){
				
				$subContainer.printThis({
					beforePrint: function(){maskShow();},
					afterPrint: function(){maskHide();},
					loadCSS: "/portal/css/subpagePrint.css",
				})
			})
		}
		
		shMiniPop();
		pagePrint();
	};
	
	//�쒕툕 �곸뒪 �꾩퐫�붿뼵
	function subNav_Fn(){
		
		$sn_a1.on('click',function(e){
			
			e.preventDefault();
			
			var $thisParent = $(this).parent('.sn_l1');
			
			if($thisParent.find('.subDepth-siblings').is(':visible')){
				
				$subDepthSiblings.slideUp(300);
				$sn_a1.removeAttr('title');
				$sn_l1.removeClass('open');
			}else {
				
				$subDepthSiblings.slideUp(300);
				$sn_a1.removeAttr('title');
				$thisParent.find('.subDepth-siblings').slideDown(300);
				$(this).attr('title','�섏쐞 硫붾돱 �앹뾽 �대젮 �덉쓬');
				$thisParent.addClass('open');
			}
			
			$(document).on('click','*',function(){
				
				if(!$subDepthSiblings.is(':visible')) return;
				
				if($(event.target).hasClass($sn_l1.attr('class')) || $sn_l1.has(event.target).length) return;
				
				$subDepthSiblings.slideUp(300);
				$sn_a1.removeAttr('title');
				$sn_l1.removeClass('open');
			});
		});
	}

	//sitemap
	function sitemap_Fn(){
		
		if(!$sitemap.length) return;
				
		$sitemapGnb.append($gnb.clone(true));
		
		$sitemapGnb.find('a').off();
		
		var scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';	
		
		$sitemapOpen.on('click',function(){
			
			$html.css('paddingRight', scrollbarWidth);
			$header.css('marginRight', scrollbarWidth);
			$body.addClass('no_scroll');
			
			$sitemap.show(0,function(){
				$sitemapInBox.slideDown(500,function(){
					
					$sitemap.addClass('open');
					
					setTimeout(function(){
						
						$sitemap.addClass('closeBefore');
					},1200)
				});
				
				//�뱀젒洹쇱꽦�� �꾪븳 �ㅻ낫�� �ъ빱��
				if(event.pointerType == "mouse") return;
				
				$sitemapLogoA.focus();
			})
		});
		
		$sitemapClose.on('click',function(){
			
			$sitemap.removeClass('open');
			
			setTimeout(function(){
				
				$sitemapInBox.slideUp(500,function(){
					
					$sitemap.hide();
					$sitemap.removeClass('closeBefore');
					
					$html.css('paddingRight', 0);
					$header.css('marginRight', 0);
					$body.removeClass('no_scroll');
				})
			},1200);
			
			//�뱀젒洹쇱꽦�� �꾪븳 �ㅻ낫�� �ъ빱��
			if(event.pointerType == "mouse") return;
			
			$sitemapOpen.focus();
		});
		
		//�뱀젒洹쇱꽦�� �꾪븳 �ㅻ낫�� �ъ빱��
		function sitemap_focus_Fn(){
			
			$sitemapClose.on('keydown',function(e){
				
				if (e.keyCode == 9) {
					setTimeout(function(){
						$sitemapLogoA.focus();
					});
				}
			});
			
			$sitemapLogoA.on('keydown',function(e){
				
				if (e.keyCode == "9" && e.shiftKey) {
					setTimeout(function(){
						$sitemapClose.focus();
					});
				}
			});
		}
		sitemap_focus_Fn()
	}
	
	function menu_width_setting(){
		$('#gnb .mn_a2').each(function(){		
			if($(this).find('span').text() == '�뺣퉬�ъ뾽�꾨Ц愿�由ъ뾽泥� �꾪솴'){
				$(this).addClass('short')
			}
		})
	}
	
	(function layout_init(){
		
		gnb_pc_Fn();
		headerScr_Fn();
		gnb_mb_Fn();
		headerLoginpop_open_Fn();
		headerModifyPop_open_Fn();
		subHeaderBtn_Fn();
		subNav_Fn();
		sitemap_Fn();
		
		menu_width_setting();
	})();
	
});