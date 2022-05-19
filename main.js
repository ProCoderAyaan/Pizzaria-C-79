menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Chilli Chicken Pizza",
                        "Paneer Tikka Pizza",
                        "Chilli Ultimate Pizza",
                        "Schezwan Paneer Pizza",
                        "Ultimate Chicken Pizza",
                        "Schezwan Chicken Pizza",
                        "Hot Chicken Pizza",
                        "Hot Paneer Pizza",
                        "Veggie Pizza",
                        "Ultimate Vegetable Pizza",
                        "Chicken Margerita Pizza",
                        "Ultimate Cheese Pizza",
                        "Spicy Combo[Veg and Non-Veg]",
                        "Pizza of your choice",
                        "Cheese Combo[Veg and Nonveg]"];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item=document.getElementById("add_item").value;
        menu_list_array.sort()
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
