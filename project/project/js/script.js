const responsive = {
	0 : {
		items: 1
	},
	320 : {
		items: 1
	},
	560 : {
		items: 2
	},
	960 : {
		items: 3
	}
}


$(document).ready(function () {

	$nav = $('.nav');
	$toggleCollapse = $('.toggle-collapse');

	$toggleCollapse.click(function () {
		$nav.toggleClass('collapse');
	})

	$('.owl-carousel').owlCarousel({
		loop : true ,
		autoplay : true ,
		autoplayTimeout : 3000 ,
		dots : false ,
		nav : true ,
		navText:[$('.owl-navigation.owl-nav-prev'), $('.owl-navigation.owl-nav-next')] , 
		responsive : responsive
	});

});

 DG.then(function() {
                var map = DG.map('map', {
              		center: [43.23137272054928, 76.75512355578748],
                    center: [43.3220659642351, 76.95787692729826],
                    center: [43.20777750887743, 76.66905257405257],
                    zoom: 10,
                    dragging : true,
                    zoomControl: true,
                    fullscreenControl: true,
        
                });

                 myIcon = DG.icon({
                    iconUrl: 'https://w7.pngwing.com/pngs/310/332/png-transparent-computer-icons-home-house-desktop-service-home-blue-logo-room.png',
                    iconSize: [30, 30]
                });
                DG.marker([43.23137272054928, 76.75512355578748], {
                    icon: myIcon
                }).addTo(map).bindPopup('Home');

   				myIcon = DG.icon({
                    iconUrl: 'https://cdn3.iconfinder.com/data/icons/placeholder-1/64/education-college-school-placeholder-pin-pointer-gps-map-location-512.png',
                    iconSize: [30, 30]
                });
                DG.marker([43.20777750887743, 76.66905257405257], {
                    icon: myIcon
                }).addTo(map).bindPopup('Suleymen Demirel University');

                 DG.marker([43.3220659642351, 76.95787692729826]).addTo(map).bindPopup('Work : Suyunbai Ave 157');

                });
