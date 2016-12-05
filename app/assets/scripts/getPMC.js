function getPMC(query){
	var pmcPref="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/" 
	+ "esummary.fcgi?db=pubmed&retmode=json&rettype=abstract&id=";
	var  pmcURL=pmcPref + query.value ; 
	console.log("PMC query: " + pmcURL); 
	$.getJSON(pmcURL, function(result){
		{format: "json"}
 		console.log("success");
		minRes = result["result"];
		for(var key in minRes) {
			//convoluted way of extracting title 
			if(minRes[key].hasOwnProperty('title' )){
				var title = minRes[key].title; 
				var cleanTitle = replaceAll(title, " ", "%20"); 
			//	console.log(minRes[key].title);
				postTwit(cleanTitle); 
			}
			
		}	
 		//console.log(JSON.stringify(minRes));
	})
	.fail(function (jqxhr, status, error) {
        	alert("fail"); 	
		console.log('error', status, error) }
	);
};

function postTwit(q){
	console.log("posting: " + q ) ;
        var art = {"title" : q } 	
	$.post("results",art,function(response){
		console.log(response); 
	}); 
}; 

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}
