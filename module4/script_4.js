var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++){
	var alphabet=names[i].charAt(0);

	if(alphabet==='j'||alphabet==='J'){
		byeSpeaker.bye(names[i]);
	}
	else
	{
		helloSpeaker.hello(names[i]);
	}
}
