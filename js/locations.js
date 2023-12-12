const locations = [
	{
		name: 'Campinas',
		cod: '07',
		cities: [
			{
				name:'Campinas',
				units: [
					{
						name: 'Antony Parque Dom Pedro',
						address: 'Av. Guilherme Campos, 500',
						coordinates: '-22.8493011,-47.0625265',
						neighborhood: 'Parque das Flores',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3756-7400 | 3208-2588',
						whatsapp: '(19) 99638-2787'
					},
					/*{
						name: 'Antony Cambuí',
						address: 'R. Antônio Cesarino, 885',
						coordinates: '-22.9028349,-47.05476',
						neighborhood: 'Centro',
						hours: [
							{
								seg: '9:00 – 21:00',
								ter: '9:00 – 21:00',
								qua: '9:00 – 21:00',
								qui: '9:00 – 21:00',
								sex: '9:00 – 21:00',
								sab: '9:00 – 21:00',
								dom: '9:00 – 16:00'
							}
						],
						phone: '(19) 3367-4547 | 3367-4557',
						whatsapp: '(19) 99673-2059'
					},*/
					/*{
						name: 'Antony Extra Abolição',
						address: 'R. da Abolição, 2013 - 32',
						coordinates: '-22.926488,-47.040487',
						neighborhood: 'Ponte Preta',
						hours: [
							{
								seg: '9:00 – 22:00',
								ter: '9:00 – 22:00',
								qua: '9:00 – 22:00',
								qui: '9:00 – 22:00',
								sex: '9:00 – 22:00',
								sab: '9:00 – 22:00',
								dom: '10:00 – 18:00'
							}
						],
						phone: '(19) 3308-4407 | 3308-4409',
						whatsapp: '(19) 99903-0468'
					},*/
					{
						name: 'Antony Galleria',
						address: 'Rod. Dom Pedro I, Km 131',
						coordinates: '-22.8641477,-47.0232466',
						neighborhood: 'Jardim Nilópolis',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3207-2666 | 3207-0013',
						whatsapp: '(19) 99712-6354'
					},
					{
						name: 'Antony Unimart',
						address: 'Av. John Boyd Dunlop, 350',
						coordinates: '-22.9089299,-47.0968416',
						neighborhood: 'Jardim Aurelia',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '14:00 – 20:00'
							}
						],
						phone: '(19) 3242-7090 | 3213-4453',
						whatsapp: '(19) 99761-2699'
					},
					{
						name: 'Antony Jaraguá',
						address: 'R. Conceição, 233 - Lj 09',
						coordinates: '-22.9042871,-47.0595692',
						neighborhood: 'Centro',
						hours: [
							{
								seg: '09:00 – 20:00',
								ter: '09:00 – 20:00',
								qua: '09:00 – 20:00',
								qui: '09:00 – 20:00',
								sex: '09:00 – 20:00',
								sab: '09:00 – 19:00',
								dom: 'Fechado'
							}
						],
						phone: '(19) 3233-5656',
						whatsapp: '(19) 99879-4118'
					},
					{
						name: 'Antony Carrefour Dom Pedro',
						address: 'Rod. Dom Pedro I, Km 133',
						coordinates: '-22.8533222,-47.029647',
						neighborhood: 'Jardim Nilópolis',
						hours: [
							{
								seg: '9:00 – 22:00',
								ter: '9:00 – 22:00',
								qua: '9:00 – 22:00',
								qui: '9:00 – 22:00',
								sex: '9:00 – 22:00',
								sab: '9:00 – 22:00',
								dom: '10:00 – 20:00'
							}
						],
						phone: '(19) 3207-4373 | 3207-0425',
						whatsapp: '(19) 99801-5328'
					},
					{
						name: 'Antony Barber Shop Galleria',
						address: 'Rod. Dom Pedro I, Km 131',
						coordinates: '-22.8635646,-47.0260012',
						neighborhood: 'Jardim Nilópolis',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3500-3604',
						whatsapp: '(19) 99994-3604'
					},
					{
						name: 'Antony Campinas Shopping',
						address: 'R. Jacy Teixeira de Camargo, 940',
						coordinates: '-22.932473,-47.0802147',
						neighborhood: 'Jardim do Lago',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3267-1608 | 3234-2426',
						whatsapp: '(19) 99840-2143'
					},
					{
						name: 'Antony Proença',
						address: 'R. Joaquim de Paula Souza, 631',
						coordinates: '-22.9171693,-47.0451877',
						neighborhood: 'Jardim Proença',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3294-2685 | 3253-5308',
						whatsapp: '(19) 99811-0934'
					},
					{
						name: 'Antony Norte Sul',
						address: 'Av. José de Souza Campos, 1190',
						coordinates: '-22.8954229,-47.0491421',
						neighborhood: 'Cambuí',
						hours: [
							{
								seg: '9:00 – 21:00',
								ter: '9:00 – 21:00',
								qua: '9:00 – 21:00',
								qui: '9:00 – 21:00',
								sex: '9:00 – 21:00',
								sab: '9:00 – 21:00',
								dom: '9:00 – 17:00'
							}
						],
						phone: '(19) 3295-8556 | 3254-3186',
						whatsapp: '(19) 99915-5211'
					},
					{
						name: 'Antony Bandeiras',
						address: 'Av. John Boyd Dunlop, 3900 - LOJA 3002',
						coordinates: '-22.9246962,-47.1282811',
						neighborhood: 'Jardim Ipaussurama',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3728-4180 | 3722-4181',
						whatsapp: '(19) 99751-4154'
					},
					{
						name: 'Antony Kiosk',
						address: 'Av. Guilherme Campos, 500',
						coordinates: '-22.8489513,-47.0668178',
						neighborhood: 'Parque das Flores',
						hours: [
							{
								seg: '10:00 – 22:00',
								ter: '10:00 – 22:00',
								qua: '10:00 – 22:00',
								qui: '10:00 – 22:00',
								sex: '10:00 – 22:00',
								sab: '10:00 – 22:00',
								dom: '12:00 – 20:00'
							}
						],
						phone: '(19) 3208-2055',
						whatsapp: '(19) 99811-0921'
					}
				]
			}
		]
	}
];