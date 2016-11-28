function testJSON(query){
	var pmcAPI="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&rettype=abstract&id=";
	var  pmcURL=pmcAPI + query.value ; 
	console.log("PMC query: " + pmcURL); 
	$.getJSON(pmcURL, function(abs) {
		{format: "json"}
 		console.log("success"); 	
 		console.log(JSON.stringify(abs));
	       alert("Dev note: check console for output"); 	
	})
	.fail(function (jqxhr, status, error) {
        	console.log("fail"); 	
		console.log('error', status, error) }
	);
};

