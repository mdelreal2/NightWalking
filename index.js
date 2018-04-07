var array_of_addresses = [""];

window.onload = function()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "/home/gueromalo/NightWalker/sex_offender_list.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var counter = 0;
                var address_counter = 0;
                for (counter; counter < allText.length; counter++)
                {
                    if (allText.charAt(counter) > '0' && allText.charAt(counter) < '9')
                    {
                        var address_builder = "";
                        //parse address
                        while (allText.charAt(counter) != '\n')
                        {
                            address_builder += allText.charAt(counter);
                            counter++;
                        }

                        //skip over this newline character
                        counter++;
                        address_builder += " ";

                        //parse city, state, zipcode
                        while (allText.charAt(counter) != '\n')
                        {
                            address_builder += allText.charAt(counter);
                            counter++;
                        }
                        //array_of_addresses[address_counter] = address_builder;
                        array_of_addresses.push(address_builder);
                        //alert(address_builder);
                        address_builder = "";
                        address_counter += 1;
                    }
                }
                //alert(allText);
            }
        }
    }     
    alert(array_of_addresses.length);
    rawFile.send(null); 

    add_new_marker(asdf);

}

function add_new_marker(address)
{
    array_of_addresses.push("adf");
    var geocoder = new google.maps.Geocoder();
    var addr = "1286 40TH AVE KENOSHA, WI 53144-2900";

    geocoder.geocode(addr, function(results, status)
    {
        var lat = results[0].geometry.location.latitude;
        var long = results[0].geometry.location.longitude;
        alert(lat + " " + long);
    });

    alert(array_of_addresses.length);
}