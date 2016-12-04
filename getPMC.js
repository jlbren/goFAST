function getPMC(query){
	var pmcPref="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/" 
	+ "esummary.fcgi?db=pubmed&retmode=json&rettype=abstract&id=";
	var  pmcURL=pmcPref + query.value ; 
	console.log("PMC query: " + pmcURL); 
	$.getJSON(pmcURL, function(result){
		{format: "json"}
 		console.log("success");
 		console.log(JSON.stringify(result));
	})
	.fail(function (jqxhr, status, error) {
        	alert("fail"); 	
		console.log('error', status, error) }
	);
};

