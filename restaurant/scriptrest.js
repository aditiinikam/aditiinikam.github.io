$(function(){

	$("#navbarToggle").blur(function(event){
		var screenWidth=window.innerWidth;
		if (screenWidth<768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});

//convinience method
(function(global){
	var dc={};
	var homeHtml="snippets.html";
	var allCategoriesUrl="https://davids-restaurant.herokuapp.com/categories.json"
	var categoriesTitleHtml="category-title.html";
	var categoryHtml="category-snippet.html"
	var menuItemsUrl="https://davids-restaurant.herokuapp.com/menu_items.json?category=";
	var menuItemsTitleHtml="menu-items-title.html";
	var menuItemHtml="menu-item.html";

	var insertHtml=function(selector,html){
		var targetElem=document.querySelector(selector);
		targetElem.innerHTML=html;
	};

//show loading icon inside element identified by 'selector'
	var showLoading=function(selector){
		var html="<div class='text-center'>";
		html+="<img src='ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};

	var insertProperty=function(string, propName, propValue){
		var propToReplace="{{"+propName+"}}";
		string=string.replace(new RegExp(propToReplace,"g"),propValue);
		return string;
	};
//On page load (before images or CSS)
	document.addEventListener("DOMContentLoaded",function(event){
		
		//On first load, show home view
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			homeHtml,function(responseText){
				document.querySelector("#main-content")
				.innerHTML=responseText;
			},false);
	});

	//Load the menu categories view
	dc.loadMenuCategories=function(){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			allCategoriesUrl,buildAndShowCategoriesHTML);
	};

	//Load the menu items view
	//'categoryShort' is a short_name for a category
	dc.loadMenuItems=function(categoryShort){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			menuItemsUrl+categoryShort,
			buildAndShowMenuItemsHTML);
	};



	function buildAndShowCategoriesHTML(categories){
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml,function(categoriesTitleHtml){
				$ajaxUtils.send.sendGetRequest(
					categoryHtml,function(categoryHtml){
						var categoriesViewHtml(categories,categoriesTitleHtml,categoryHtml);
						insertHtml("#main-content",categoriesViewHtml);
					},false);
			},false);
	}

	function buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml){
		var finalHtml=categoriesTitleHtml;
		finalHtml+="<section class='row'>";

		//Loop over categories
		for (var i=0;i<categories.length;i++){
			var html=categoryHtml;
			var name=""+categories[i].name;
			var short_name=categories[i].short_name;
			html=insertProperty(html,"name",name);
			html=insertProperty(html,"short_name",short_name);
			finalHtml+=html;
		}

		finalHtml+="</section>";
		return finalHtml;
	}

	//Builds Html for the single category page based on the data from the server
	function buildAndShowMenuItemsHTML(categoryMenuItems){\
		//load title snippet
		$ajaxUtils.sendGetRequest(menuItemsTitleHtml,function(menuItemsTitleHtml){
			//Retrieve single menu item snippet
			$ajaxUtils.sendGetRequest(menuItemHtml,function(,menuItemHtml){
				var menuItemsViewHtml=
				buildMenuItemsViewHtml(categoryMenuItems,menuTitlehtml,menuItemHtml);
				insertHtml("#main-content",menuItemsViewHtml);
			},false);
		},false);
	}

	function buildMenuItemsViewHtml(categoryMenuItems,menuItemsTitleHtml,menuItemHtml){
		menuItemsTitleHtml=insertProperty(menuItemsTitleHtml,"name",categoryMenuItems.category.name);
		menuItemsTitleHtml=
		insertProperty(menuItemsTitleHtml,"special_instructions",
			categoryMenuItems.category.special_instructions);
		var finalHtml=menuItemsTitleHtml;
		finalHtml+="<section class="row">";

		varmenuItems=categoryMenuItems.menu_items;
		var catShortName=categoryMenuItems.menu_Items;
		for (var i=0; i<menuItems.length;i++){
			//insert emnu item values
			var html=menuItemHtml;
			html=insertProperty(html,"short_name",menuItems[i].short_name);
			html=insertProperty(html,"catShortName",catShortName);
			html=insertItemPrice(html,"price_small",menuItems[i].price_small);
			html=insertItemPrice(html,"small_portion_name",menuItems[i].small_portion_name);
			html=insertItemPrice(html,"price_large",menuItems[i].price_large);
			html=insertItemPortionName(html,"large_portion_name",menuItems[i].large_portion_name);
			html=insertProperty(html,"name",menuItems[i].name);
			html=insertProperty(html,"description",menuItems[i].description);

			//Add clearfix after every second item
			if(i%2 != 0){
				html+="<div class='clearfix visible-lg-block visible-md-block'></div>"
			}
			finalHtml+=html;
		}	
		finalHtml+="</section>";
		return finalHtml;
	}

	//Appends price with '$' if price exists
	function insertItemPrice(html,pricePropName,priceValue){
		//if not specified, replace with empty string
		if(!priceValue){
			return insertProperty(html,pricePropName,"");;
		}
		priceValue="$"+priceValue.toFixed(2);
		html=insertProperty(html,pricePropname,priceValue);
		return html;
	}

	//Appends portion name in parens if it exists
	function insertItemPortionName(html,portionPropName,portionValue){
		//If not specified, return original string
		if(!portionValue){
			return insertProperty/html
		}
	}

	global.$dc=dc;
})(window);