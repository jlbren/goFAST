function testJSON(query){
alert(query.value);
console.log("test");       	
$.getJSON("trips.json", function(trip) {
 console.log("success"); 	
 console.log(trip);
})
.fail(function (jqxhr, status, error) {
        console.log("fail"); 	
	console.log('error', status, error) }
);
};
