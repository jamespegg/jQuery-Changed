(function( $ ){
	/**
	 * jQuery changed()
	 *
	 * This extends the functionality of resize() by checking whether $(window)
	 * actually changed size. This essentially debounces resize() in all browsers.
	 * 
	 * @author James Pegg
	 * @copyright 2013 James Pegg
	 * @license https://github.com/jamespegg/jQuery-Changed/blob/master/LICENSE.md 
	 * @link https://github.com/jamespegg/jQuery-Changed
	 * 
	 * @param  {object} func The function handler to be initiated.
	 */
	$.fn.changed = function( func ) {

		/* Store Objects */
		var $this = $(this);

		/* Starting width & height */
		var width = $this.width();
		var height = $this.height();

		/* If the window has actually changed size, then fire the function */
		$this.resize(function(){
			if($this.width() != width || $this.height() != height){
				func();
				width = $this.width();
				height = $this.height()
			}
		});
	}
})( jQuery );