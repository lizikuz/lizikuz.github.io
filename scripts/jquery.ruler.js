/**
 * jQuery.Ruler v1.1
 * Add Photoshop-like rulers and mouse position to a container element using jQuery.
 * http://ruler.hilliuse.com
 *
 * Dual licensed under the MIT and GPL licenses.
 * Copyright 2013 Hillius Ettinoffe http://hilliuse.com
 */
;(function( $ ){

	$.fn.ruler = function(options) {

		var defaults = {
			vRuleSize: 14,
			hRuleSize: 14
		};//defaults
		var settings = $.extend({},defaults,options);

		var hRule = '<div class="ruler hRule"></div>',
				vRule = '<div class="ruler vRule"></div>';
				// corner = '<div class="ruler corner"></div>';

		//resize
		$(window).resize(function(e){
			console.log(e);
			var $hRule = $('.hRule');
			var $vRule = $('.vRule');
			$hRule.empty();
			$vRule.empty().height(0).outerHeight($vRule.parent().outerHeight());

			// Horizontal ruler ticks
			var tickLabelPos = settings.vRuleSize;
			var newTickLabel = "";
			while ( tickLabelPos <= $hRule.width() ) {
				if ((( tickLabelPos - settings.vRuleSize ) %50 ) == 0 ) {
					newTickLabel = "<div class='tickLabel'></div>" // + ( tickLabelPos - settings.vRuleSize ) + "</div>";
					$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
				} else if ((( tickLabelPos - settings.vRuleSize ) %10 ) == 0 ) {
					newTickLabel = "<div class='tickMajor'></div>";
					$(newTickLabel).css("left",tickLabelPos+"px").appendTo($hRule);
				} else if ((( tickLabelPos - settings.vRuleSize ) %5 ) == 0 ) {
					// newTickLabel = "<div class='tickMinor'></div>";
					// $(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
				}
				tickLabelPos = (tickLabelPos + 5);
			}//hz ticks

			// Vertical ruler ticks
			tickLabelPos = settings.hRuleSize;
			newTickLabel = "";
			while (tickLabelPos <= $vRule.height()) {
				if ((( tickLabelPos - settings.hRuleSize ) %50 ) == 0) {
					newTickLabel = "<div class='tickLabel'></div>"
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				} else if (((tickLabelPos - settings.hRuleSize)%10) == 0) {
					newTickLabel = "<div class='tickMajor'></div>";
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				} else if (((tickLabelPos - settings.hRuleSize)%5) == 0) {
					// newTickLabel = "<div class='tickMinor'></div>";
					// $(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				}
				tickLabelPos = ( tickLabelPos + 5 );
			}//vert ticks
		});//resize

		return this.each(function() {
			var $this = $(this);

			// Attach rulers

			// Should not need 1 min padding-top of 1px but it does
			// will figure it out some other time
			$this.css("padding-top", settings.hRuleSize + 1 + "px");
			if (settings.hRuleSize > 0) {
				$(hRule).height(settings.hRuleSize).prependTo($this);
			}

			if (settings.vRuleSize > 0) {
				var oldWidth = $this.outerWidth();
				$this.css("padding-left", settings.vRuleSize + 1 + "px");
				$(vRule).width(settings.vRuleSize).height($this.outerHeight()).prependTo($this);
			}

			// if ( (settings.vRuleSize > 0) && (settings.hRuleSize > 0) ) {
			// 	$(corner).css({
			// 		width: settings.vRuleSize,
			// 		height: settings.hRuleSize
			// 	}).prependTo($this);
			// }


			var $hRule = $this.children('.hRule');
			var $vRule = $this.children('.vRule');

			// Horizontal ruler ticks
			var tickLabelPos = settings.vRuleSize;
			var newTickLabel = "";
			while ( tickLabelPos <= $hRule.width() ) {
				if ((( tickLabelPos - settings.vRuleSize ) %50 ) == 0 ) {
					newTickLabel = "<div class='tickLabel'></div>" // + ( tickLabelPos - settings.vRuleSize ) + "</div>";
					$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
				} else if ((( tickLabelPos - settings.vRuleSize ) %10 ) == 0 ) {
					newTickLabel = "<div class='tickMajor'></div>";
					$(newTickLabel).css("left",tickLabelPos+"px").appendTo($hRule);
				} else if ((( tickLabelPos - settings.vRuleSize ) %5 ) == 0 ) {
					// newTickLabel = "<div class='tickMinor'></div>";
					// $(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
				}
				tickLabelPos = (tickLabelPos + 5);
			}//hz ticks

			// Vertical ruler ticks
			tickLabelPos = settings.hRuleSize;
			newTickLabel = "";
			while (tickLabelPos <= $vRule.height()) {
				if ((( tickLabelPos - settings.hRuleSize ) %50 ) == 0) {
					newTickLabel = "<div class='tickLabel'></div>" //<span>" + ( tickLabelPos - settings.hRuleSize ) + "</span></div>";
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				} else if (((tickLabelPos - settings.hRuleSize)%10) == 0) {
					newTickLabel = "<div class='tickMajor'></div>";
					$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				} else if (((tickLabelPos - settings.hRuleSize)%5) == 0) {
					// newTickLabel = "<div class='tickMinor'></div>";
					// $(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
				}
				tickLabelPos = ( tickLabelPos + 5 );
			}//vert ticks

		});//each

	};//ruler
})( jQuery );
