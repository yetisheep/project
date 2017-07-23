<script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbIqd61F0MieLgoMVAOzxbMAKnXmApaCU">
      var geocoder = new google.maps.Geocoder();

        geocoder.geocode( { address = add.value}, function(results, status) {
        
        if (status == google.maps.GeocoderStatus.OK) {
        
        Longitude.value = results[0].geometry.location.lng();
        
        Latitude.value = results[0].geometry.location.lat();
        
        } else {
        
        alert("Geocode was not successful for the following reason: " + status);
        
        }
        
        });
        
        }
            </script>
            <script type="text/javascript">
              function initialize() {
                var mapOptions = {
                  center: { lat: 23.5, lng: 121.5},
                  zoom: 16
                };
                var map = new google.maps.Map(
                    document.getElementById('map-canvas'),
                    mapOptions);
              }
              google.maps.event.addDomListener(
                  window, 'load', initialize);
            </script>