(function ($) {
	$.fn.flexiTables = function() {		
		categories = [];

		//Cycle through tables marked with data-flexi-table
		return this.filter('table[data-flexi-table]').each(function(i){
			$this = $(this);
			dataDeliniator = $this.data('flexi-deliniator')
			dataSetTitleDeliniator =  '<span class="flexiTableDeliniator">' + dataDeliniator + '</span>';
			dataTitles = $this.data('flexi-table');

			//If flexi-table has value then add to dataTitles[]
			if (dataTitles.length > 0 ) { dataTitles = $this.data('flexi-table').split(','); }

			//Collect labels from thead and add to categories[]
			$this.find("th").each(function(i){
				var label = $(this).text();

				categories.push(label);
			});

			$this.find("tr").each(function(i){
				thisTr = $(this);

				//Add labels to each <td>
				thisTr.find("td").each(function(i){
					$(this).before('<th class="flexiTableLabel">' + categories[i] + '</th>');
				});

				//If dataTitles has value. 				 
				if (dataTitles.length > 0 ) {
					var newHeaderText = "";

					/* For each unique array elem add value associated with the key with defined 
					deliniators and prepend to header of each data-set. */
					$.each(unique(dataTitles), function(key, value) {

						//Check if deliniators are defined, if they are then add deliniators
						if (typeof dataDeliniator === 'undefined' ) {
							newHeaderText += thisTr.find('td').eq(value).html() + " ";
						} else {
							newHeaderText += thisTr.find('td').eq(value).html() + " " + dataSetTitleDeliniator + " ";
						}

						//Add a class to hide duplicate elem's
						thisTr.find('td').eq(value).addClass('flexiTable_hideSmall');
						thisTr.find('th').eq(value).addClass('flexiTable_hideSmall');
					});
					var newHeader = '<th class="flexiTableTitle">' + newHeaderText + '</th>';					
					thisTr.prepend(newHeader);
				}
			});

			dataTitles.length = 0;
			categories.length = 0;
		});
		
		//Make sure that there are no duplicate array elem's in dataTitles
		function unique(dataTitles) {
		    return $.grep(dataTitles, function(el, index) {
		        return index == $.inArray(el, dataTitles);
		    });
		}
	};
} (jQuery));
