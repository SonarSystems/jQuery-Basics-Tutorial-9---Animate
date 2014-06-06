$(document).ready(function()
{
	$("button").click(function()
	{
		$("div").animate
		({
			"margin-left": "250px",
			opacity: "0.5",
			height: "150px",
			width: "150px"
		}, 5000);
	});
});