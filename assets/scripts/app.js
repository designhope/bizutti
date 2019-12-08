$(function() {

   var sliderServicos =  function() {
     $('.solucoes-home-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      focusOnSelect: false,
      infinite : true,
      prevArrow:$('.slider-left'),
      nextArrow: $('.slider-right')
     });
   }
    //maps
    function map() {
      (function() {
        // lugares
        var places = [
          {
            text: "Endereço 0001",
            image: "https://i.imgur.com/4J5iiGyl.png",
            location: [-22.7491, -47.0502]
          },
          {
            text: "Endereço 0002",
            image: "https://i.imgur.com/4J5iiGyl.png",
            location: [-22.749025, -47.068045]
          },
          {
            text: "Endereço 0003",
            image: "https://i.imgur.com/4J5iiGyl.png",
            location: [-22.75504, -47.053975]
          }
        ];
    
        var infowindow = new google.maps.InfoWindow();
        var center = new google.maps.LatLng(-22.7491, -47.0502);
    
        var map = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROAD
        });
        for (var i = 0; i < places.length; i++) {
          console.log(places[i]);
    
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              places[i].location[0],
              places[i].location[1]
            ),
            map: map
            // icon: "https://www.clipartwiki.com/clipimg/detail/161-1612281_earth-location-map-world-navigation-pin-marker-comments.png"
          });
    
          content =
            "<div class='map_info_wrapper'><div class='img_wrapper'><img src='" +
            places[i].image +
            "'></div>" +
            "<div class='property_content_wrap'>" +
            "<div class='property_title'>" +
            "<span>" +
            places[i].text +
            "</span>" +
            "</div>" +
            "</div></div>";
    
          google.maps.event.addListener(
            marker,
            "click",
            (function(marker, content, i) {
              return function() {
                infowindow.setContent(content);
                infowindow.open(map, marker);
              };
            })(marker, content, 0)
          );
        }
      })()
    }
  var init = function() {
    document.getElementById("defaultOpen").click();
    sliderServicos();
    map();
  };

  init();
});
function openCity(evt, tipoEstabelecimento) {
  // Declare all variables
  var i, tabcontent, tablinks;
  evt.preventDefault();
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tipoEstabelecimento).style.display = "block";
  evt.currentTarget.className += " active";


  }
