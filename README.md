#jQuery Changed()

This simply debounces the [jQuery resize()](http://api.jquery.com/resize/) event. It doesn't use a timeout, it just checks whether the window actually resized.

I predominately made this to stop Google Chrome firing the event twice. As far as I'm aware this has no ill effects on Firefox, Safari or Internet Explorer 9.

### Usage
```javascript
$(window).changed(function(){
	// Your Code
});
```

You can also pass on the object directly, like this:
```javascript
var myFunc = function(){
	// Your Code
}

$(window).changed(myFunc);
```