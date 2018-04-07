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
                        
                        alert(address_builder);
                        address_builder = "";
                    }
                }
                //alert(allText);
            }
        }
    }     
    rawFile.send(null); 

}
