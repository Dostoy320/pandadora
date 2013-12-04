scrape1 = document.getElementsByClassName('trackData');
scrape2 = scrape1.item(0).children;
albumString = scrape2.item(0).children.item(0);
fullAlbumArray = albumString.href.split('/');

var track = fullAlbumArray.pop();
var album = fullAlbumArray.pop();
var artist = fullAlbumArray.pop();

statement = "Artist is: " + artist + "\n" + "Album is: " + album + "\n" + "Track is: " + track;

alert(statement);



// Code for bookmarklet
//javascript: function callPanda() {
	//var jsCode = document.createElement('script');
	//jsCode.setAttribute('src', 'http://50.137.252.151/pandadora/pandadora.js');
	//document.body.appendChild(jsCode);
//} callPanda();
