

var allMovies ;
var imgePath = "https://image.tmdb.org/t/p/w500"


function myFun()
{
    
var http = new XMLHttpRequest();
http.open( "GET" , "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k"  )
http.send();


http.addEventListener("readystatechange" , function(){

    if(  http.readyState == 4 && http.status ==200  )
    {
        allMovies =  JSON.parse( http.response  );

        allMovies = allMovies.results;
     
        console.log(allMovies);
        displayPosts()

    }

})

}

//colling of function
myFun();

function displayPosts()
{
    var allDivs = ``;

    for( let i=0 ; i< allMovies.length ; i++ )
    {
        allDivs += ` <div class="parent col-lg-4 col-md-6 text-center ">
                        

                            <img src="`+imgePath+ allMovies[i].poster_path +`">
                        
                     
                        <div class="layer p-5">

                            <h1>${allMovies[i].original_title}</h1>
                            <p>${allMovies[i].overview}</p>
                            <p>${allMovies[i].vote_average}</p>
                            <p>${allMovies[i].release_date}</p>
                
                
                        </div>
                        
      </div>`

    }


    document.getElementById("dataRow").innerHTML = allDivs;
}



// ========================================= slideMenu ================


$(".sideMenu .icon ").click(function(){

    var curLeft = $(".sideMenu ").css("left");

    if(curLeft == "0px")
    {
     
     var siz = $(".sideMenu ").innerWidth();
     $(".sideMenu ").animate({left : `${siz}`} , 1000);
 
    }else{
 
     $(".sideMenu ").animate({left : `30px`} , 1000);
 
    }
 
 })


















