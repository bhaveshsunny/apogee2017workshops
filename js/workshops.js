
var wks_data = [

	{
		"title":"WorkshopOne",
		"description":"description of WorkshopOne",
		"image":"loc",
	},
	{
		"title":"WorkshopTwo",
		"description":"description of WorkshopTwo",
		"image":"loc",
	},
	{
		"title":"WorkshopThree",
		"description":"description of WorkshopThree",
		"image":"loc",
	},
	{
		"title":"WorkshopFour",
		"description":"description of WorkshopFour",
		"image":"loc",
	},			
];	

$(document).ready(function (){
var tab = $(".wks_tabs");
var content = $(".wks_content");
var buttons = $(".wks_buttons")
var image = $(".wks_image");
var title = $(".wks_title");
var description = $(".wks_description");

	console.log("shit");
	buttons.click(function(e){
		ind = $(this).index();
		if (tab.find("div").hasClass("active_tab")){
			tab.find("div").removeClass("active_tab");	
		}	
		$(this).addClass("active_tab");
		title.fadeOut(300);
		description.fadeOut(300);
		setTimeout(function(){
			title.html(wks_data[ind]["title"]);	
			description.html(wks_data[ind]["description"]).delay(300);	
		},300);
		title.fadeIn(300);
		description.fadeIn(300);		
		console.log($(this).index());
	});
});