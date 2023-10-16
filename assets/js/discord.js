
    async function getData() {
        // get data from lanyard API
      const req = await fetch('https://api.lanyard.rest/v1/users/814860134479691807');
      const { data } = await req.json();
      // get username and custom status from data
      document.getElementById("name").innerHTML = data["discord_user"]["username"];
      document.getElementById("pfp").src = "https://cdn.discordapp.com/avatars/814860134479691807/"+data["discord_user"]["avatar"];
            document.getElementById('main').style.display = "block";

    //  Get and change status info
      const status = data["discord_status"]
      if (status == "online") {
        document.getElementById('pfp').style.borderColor = "GREEN";

      }else if (status == "dnd"){
        document.getElementById('pfp').style.borderColor = "RED";

      }else if (status == "idle"){
        document.getElementById('pfp').style.borderColor = "ORANGE";

      }else{
          document.getElementById('pfp').style.borderColor = "GRAY";
      }
    //get Activity from lanyard

    // Checks If user is listening to Spotify
    const lts = data["listening_to_spotify"]; 
      if (lts == true) {
              document.getElementById('musicPlayer-Container').style.display = "block";
            document.getElementById("title").innerHTML = data["spotify"]["song"];
            document.getElementById("header-label").innerHTML = "Now Listening";

            document.getElementById("artist").innerHTML = data["spotify"]["artist"];   
            document.getElementById("album").innerHTML = data["spotify"]["album"];    
              var list = $('.artist-label');
              list.text(function(i, text) {
                return text.replace(/\;/g, ",")
              });
            document.getElementById("cover").src = data["spotify"]["album_art_url"];    
             document.getElementById('cover').style.display = "block";

          }else {
            // If user is not listening to Spotify, Then show Game Activity

            document.getElementById('musicPlayer-Container').style.display = "block";

            document.getElementById("header-label").innerHTML = "Now Playing";
            console.log(data["activities"][0]);
            //checks if the activity is a Custom Status, If so then is doesnt show the activity
            if(data["activities"][0]["type"] == "4") {
            document.getElementById('musicPlayer-Container').style.display = "none";
            }
            //checks if There is a CS , If there is then it checks if the second activity is not a CS,if it isnt then it shows the activity
            if (data["activities"][0]["type"] == "4") {
            if(data["activities"][1]["type"]<"4"){
              document.getElementById('musicPlayer-Container').style.display = "block";

              document.getElementById("title").innerHTML = data["activities"][1]["name"];
              //checks if the activity has a Description, if it doesn't have one then it doesnt show the activity
              if(data["activities"][1]["details"] == undefined){
            document.getElementById('musicPlayer-Container').style.display = "none";

              }else{
             document.getElementById("artist").innerHTML = data["activities"][1]["details"];
            document.getElementById("album").innerHTML = data["activities"][1]["state"];
            
             const largeIMG = data["activities"][1]["assets"]["large_image"];
             const appID = data["activities"][1]["application_id"];
             //checks if the activity has a Large Image to show, if it doesnt then it doesnt show the Image
             if (largeIMG == undefined){
             document.getElementById('cover').style.display = "none"; 
             }else{
             document.getElementById('cover').style.display = "block";
             document.getElementById("cover").src = "https://cdn.discordapp.com/app-assets/"+ appID +"/"+ largeIMG;
             }
              }
            }
            }
            //if there isnt a CS then it doesnt go to the next activity
            else{
              document.getElementById("title").innerHTML = data["activities"][0]["name"];
              //checks if the activity has a Description, if it doesn't have one then it doesnt show the activity

              if(data["activities"][0]["details"] == undefined){
            document.getElementById('musicPlayer-Container').style.display = "none";

              }else{
            document.getElementById("artist").innerHTML = data["activities"][0]["details"];
            document.getElementById("album").innerHTML = data["activities"][0]["state"];
            
             const largeIMG = data["activities"][0]["assets"]["large_image"];
             const appID = data["activities"][0]["application_id"];
              //checks if the activity has a Large Image to show, if it doesnt then it doesnt show the Image

             if (largeIMG == undefined){
             document.getElementById('cover').style.display = "none";
             }else{
             document.getElementById('cover').style.display = "block";
             document.getElementById("cover").src = "https://cdn.discordapp.com/app-assets/"+ appID +"/"+ largeIMG;
             }
              }

            }
           
             
             

          }
    }
    getData();