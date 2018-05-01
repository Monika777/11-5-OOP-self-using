
function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('div').append(this.$element); 
		//or this.$element.appendTo($('div'));
	}
};

var btn1 = new Button('Hello!');
btn1.create();
$('button').css('color','red').css('background','darkgrey').css('font-size','1.2em').css('font-family','Castellar').css('font-weight','bold');
