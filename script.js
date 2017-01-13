/**
 * Script of ImageToDataURLScheme.
 * 
 * @date 2017-1-13
 * @version 1.0
 * 
 */
$(function(){
	$('#file1').change(function(e) {

		var files = e.target.files;
		var oFile = files[0];

		var reader = new FileReader();
		reader.readAsDataURL(oFile);
	
		// Event of file upload.
		reader.onload = function(evt) {
			
			// Get data url scheme.
			var dus = reader.result;
			
			$('#res').html(dus);
			
		}
	});

});