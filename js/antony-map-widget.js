/**
 * Antony Map Widget
 *
 * @author JAAF <https://jaaf.negocio.site>
 * @package Antony Map widget
 * @version 1.0
 */
jQuery(document).ready(function(){
	regions = window.lodash.chain(locations)
	.map(item => {
		item['cities'] = window.lodash.map(item.cities, city => {
			city['neighborhoods'] = window.lodash.orderBy(
				window.lodash.uniq(
					window.lodash.map(city.units, n => n.neighborhood)
				)
			);
			return city;
		});
		return item;
	}).orderBy('name').value();

	jQuery('svg#svg-map a').on('click', function(e) {
		e.preventDefault();
		var reg_name = jQuery(this).attr( "name" );
		var reg_cod = jQuery(this).attr( "cod" );
		var base_url = window.location.origin;
		if(jQuery(this).hasClass('actived')) {
			renderLocations(window.lodash.filter(regions.slice(), ['cod', reg_cod]).pop(), true, true);
		} else {
			window.location.href = base_url + '/seja-um-franqueado?reg_cod=' + reg_cod;
		}
	});
	
	jQuery('span.btn-remove').on('click', function(e) {
		jQuery('.wrap-list-location.main').removeClass('d-block').addClass('d-none');
	});
	
	jQuery('svg#svg-map a').on('mousemove',function(e) {
		var currentTarget = jQuery(e.currentTarget);

		if(!currentTarget.hasClass('actived')) {
			jQuery('.tooltip-map').css({ 'top': event.pageY - jQuery(document).scrollTop() - 60, 'left': event.pageX - 110, 'height': '48px' });
			jQuery('.tooltip-map-region').html(currentTarget.attr('name'));
			jQuery('.tooltip-map-partner').show();
			jQuery('.tooltip-map').show();
		} else {
			jQuery('.tooltip-map').css({ 'top': event.pageY - jQuery(document).scrollTop() - 60, 'left': event.pageX - 110, 'height': '32px' });
			jQuery('.tooltip-map-region').html(currentTarget.attr('name'));
			jQuery('.tooltip-map-partner').hide();
			jQuery('.tooltip-map').show();
		}
	}).on('mouseleave', function() {
		jQuery('.tooltip-map').hide();
	});
});

var initMap = function () {
	var map = document.getElementById('map');

	if(map) {
		map_units = new google.maps.Map(document.getElementById('map'), {
			zoom: 12,
			center: {lat: -22.9117438, lng: -47.1174186},
			disableDefaultUI: true,
		});
	}
}

function renderLocations(datas, removeMarkers, ignoreSetLocations) {
	var ignoreSetLocations = ignoreSetLocations ? false : true;
	var is_array = datas && datas.constructor === Array ? true : false;
	
	var d = new Date();
	var wd = d.getDay();
	
	if(!is_array) {
		var _data = datas;
		datas = [];
		datas.push(_data);
	}
	
	var number_results = 0;
	var units = [];
	
	var element_list_location = jQuery('.wrap-list-location.main .list-location');
	element_list_location.html('');
	
	
	window.lodash.forEach(datas, function(data) {
		if(jQuery(window).width() == 375) {
			setTimeout(function(){
				jQuery('html, body').animate({
					scrollTop: (jQuery('.wrap-list-location.main').offset().top - jQuery('#header').height() - 35)
				},500);
			}, 500);
		}

		jQuery('.search-map').removeClass('d-flex').addClass('d-none');
		jQuery('.wrap-list-location.main').removeClass('d-none').addClass('d-block');

		if(!is_array) {
			jQuery('.wrap-list-location.main .selected .region-name').text("Região de "+data.name);
			jQuery('.wrap-list-location.main .selected').show();
		} else {
			jQuery('.wrap-list-location.main .selected').hide();
		}

		number_results += window.lodash.chain(data).map((item, index) => {
			if(index == 'cities') {
				return lodash.chain(item).map(city => city.units && city.units.length ? city.units.length : 0).sumBy().value();
			}
		}).sumBy().value();
		jQuery('.wrap-list-location.main .result .number').text(number_results);

		window.lodash.forEach(data.cities, (item) => {
			var template_item_units = '';
			var todayhours = '';
			lodash.forEach(item, (cities, index) => {
				if(index == 'units') {
					lodash.forEach(cities, city => {
						
						switch(wd){
							case 0:
								todayhours = 'Domingo: ' + city.hours[0].dom;
							break;
							case 1:
								todayhours = 'Segunda-feira: ' + city.hours[0].seg;
							break;
							case 2:
								todayhours = 'Terça-feira: ' + city.hours[0].ter;
							break;
							case 3:
								todayhours = 'Quarta-feira: ' + city.hours[0].qua;
							break;
							case 4:
								todayhours = 'Quinta-feira: ' + city.hours[0].qui;
							break;
							case 5:
								todayhours = 'Sexta-feira: ' + city.hours[0].sex;
							break;
							case 6:
								todayhours = 'Sábado: ' + city.hours[0].sab;
							break;
						}
						template_item_units += `
							<div class="item-unit">
								<strong>${city.name}</strong>
								<p>${city.address}</p>
								<p><i class="fa fa-phone"></i> ${city.phone}</a></p>
								<p><a href="https://api.whatsapp.com/send?phone=55${city.whatsapp}" target="_blank"><i class="fa fa-whatsapp"></i> ${city.whatsapp}</a></p>
								<p>${todayhours}</p>
							</div>
						`;
					});
				}
			});

			var template_item = `
				<div class="item">
					<span class="city">Cidade: ${item.name}</span>
					${template_item_units}
				</div>
			`;
			element_list_location.append(template_item);
		});

		window.lodash.map(data, (item, index) => {
			if (index == 'cities') {
				return lodash.map(item, city => {
					window.lodash.map(city.units, unit => {
						units.push(unit);
					});
				});
			}
		});
	});
	if(ignoreSetLocations) {
		setLocations(map_units, units, removeMarkers);
	}
}