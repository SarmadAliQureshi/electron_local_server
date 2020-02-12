global:
    default_order: function() { return feature.sort_key || 0; }

    currentTime: 'day'
    currentVersion: 'high'
    svStatus: false
    buildingStatus: true
    poiStatus: true

    colorscheme:
        #roads
        motorway: function(){if(global.currentTime == 'day'){return '#f56b3d'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#fb8140'; }}
        motorway_outline: function(){if(global.currentTime == 'day'){return '#ff4000'; }else if(global.currentTime == 'night'){return '#e4aa81'; }else if(global.currentTime == 'satellite'){return '#e17439'; }}
        highway: function(){if(global.currentTime == 'day'){return '#ff9f80'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#ffcb80'; }}
        highway_outline: function(){if(global.currentTime == 'day'){return '#f46d25'; }else if(global.currentTime == 'night'){return '#ddc588'; }else if(global.currentTime == 'satellite'){return '#FA9E25'; }}
        main_roads: function(){if(global.currentTime == 'day'){return '#ffc6b3'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#ffe67c'; }}
        main_roads_outline: function(){if(global.currentTime == 'day'){return '#ff9f80'; }else if(global.currentTime == 'night'){return '#1785cf'; }else if(global.currentTime == 'satellite'){return '#fbc040'; }}
        secondary_roads: function(){if(global.currentTime == 'day'){return '#e9e5e1'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#FFFFFF'; }}
        secondary_roads_outline: function(){if(global.currentTime == 'day'){return '#dbc6bd'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#c8bc8a'; }}
        tertiary_roads: function(){if(global.currentTime == 'day'){return '#e9e5e1'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#FFFFFF'; }}
        tertiary_roads_outline: function(){if(global.currentTime == 'day'){return '#dbc6bd'; }else if(global.currentTime == 'night'){return '#262626'; }else if(global.currentTime == 'satellite'){return '#BFBFBF'; }}
        streetview: function(){if(global.currentTime == 'day'){return '#009e83'; }else if(global.currentTime == 'night'){return '#e25936'; }}
        streets: function(){if(global.currentTime == 'day'){return '#edeae6'; }else if(global.currentTime == 'night'){return '#282d35'; }else if(global.currentTime == 'satellite'){return '#fcfaf2'; }}
        selected_route: function(){if(global.currentTime == 'day'){return '#a594b8'; }else if(global.currentTime == 'night'){return '#2196F3'; }else if(global.currentTime == 'satellite'){return '#a594b8'; }}
        selected_route_outline: function(){if(global.currentTime == 'day'){return '#782bca'; }else if(global.currentTime == 'night'){return '#782bca'; }else if(global.currentTime == 'satellite'){return '#782bca'; }}
        segment: function(){if(global.currentTime == 'day'){return '#7ab899'; }else if(global.currentTime == 'night'){return '#4CAF50'; }else if(global.currentTime == 'satellite'){return '#7ab899'; }}
        segment_outline: function(){if(global.currentTime == 'day'){return '#67cc33'; }else if(global.currentTime == 'night'){return '#59a65d'; }else if(global.currentTime == 'satellite'){return '#67cc33'; }}
        nonselected_route: function(){if(global.currentTime == 'day'){return '#d1c7c7'; }else if(global.currentTime == 'night'){return '#A9A9A9'; }else if(global.currentTime == 'satellite'){return '#d1c7c7'; }}
        nonselected_route_outline: function(){if(global.currentTime == 'day'){return '#8c8c8c'; }else if(global.currentTime == 'night'){return '#8c8c8c'; }else if(global.currentTime == 'satellite'){return '#8c8c8c'; }}


        #landuse
        cemetery: function(){if(global.currentTime == 'day'){return '#c9d2c6'; }else if(global.currentTime == 'night'){return '#869881'; }}
        religious: function(){if(global.currentTime == 'day'){return '#b2a899'; }else if(global.currentTime == 'night'){return '#a6b398'; }}
        parking: function(){if(global.currentTime == 'day'){return '#e0d1b8'; }else if(global.currentTime == 'night'){return '#808080'; }}
        runway: function(){if(global.currentTime == 'day'){return '#c6b9c6'; }else if(global.currentTime == 'night'){return '#8B8B8B'; }}
        citiesfill8_day: '#fff1e8'
        citiesfill15_day: '#fffaf5'
        citiesfill8_night: '#0A3B5C'
        citiesfill15_night: '#19394D'
        water: function(){if(global.currentTime == 'day'){return '#b1eced'; }else if(global.currentTime == 'night'){return '#001f33'; }}
        park: function(){if(global.currentTime == 'day'){return '#d3e996'; }else if(global.currentTime == 'night'){return '#197D77'; }}
        grass: function(){if(global.currentTime == 'day'){return '#bbd279'; }else if(global.currentTime == 'night'){return '#1A6E69'; }}
        commercial: function(){if(global.currentTime == 'day'){return '#d1c7c7'; }else if(global.currentTime == 'night'){return '#2C4240'; }}
        hospital: function(){if(global.currentTime == 'day'){return '#eac8c8'; }else if(global.currentTime == 'night'){return '#c98983'; }}
        school: function(){if(global.currentTime == 'day'){return '#f2da8c'; }else if(global.currentTime == 'night'){return '#a89d8a'; }}
        industrial: function(){if(global.currentTime == 'day'){return '#c7cdd1'; }else if(global.currentTime == 'night'){return '#858593'; }}
        #others
        misc: function(){if(global.currentTime == 'day'){return '#ece6c6'; }else if(global.currentTime == 'night'){return '#746f3e'; }}
        port: function(){if(global.currentTime == 'day'){return '#ece8ec'; }else if(global.currentTime == 'night'){return '#666666'; }}
        world: function(){if(global.currentTime == 'day'){return '#fafafa '; }else if(global.currentTime == 'night'){return '#4A95D9'; }}
        world_8: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#0d4a73'; }}
        continent_a: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#4696DD'; }}
        continent_p: function(){if(global.currentTime == 'day'){return '#fafafa'; }else if(global.currentTime == 'night'){return '#0d4a73'; }}
        continent_b: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#204F85'; }}
        continent_c: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#4085BE'; }}
        continent_i: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#2A97FC'; }}
        continent_t: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#225189'; }}
        continent_r: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#518FDA'; }}
        continent_u: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#3280C8'; }}
        continent_s: function(){if(global.currentTime == 'day'){return '#f5f5f5'; }else if(global.currentTime == 'night'){return '#2C5A95'; }}
        borders_3: function(){if(global.currentTime == 'day'){return '#a09c9a'; }else if(global.currentTime == 'night'){return '#16476a'; }else if(global.currentTime == 'satellite'){return '#a09c9a'; }}
        borders_2: function(){if(global.currentTime == 'day'){return '#E6F3D8'; }else if(global.currentTime == 'night'){return '#1e6394'; }else if(global.currentTime == 'satellite'){return '#E6F3D8'; }}
        borders_1: function(){if(global.currentTime == 'day'){return '#FFECE5'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#FFECE5'; }}

        province: function(){if(global.currentTime == 'day'){return '#808080'; }else if(global.currentTime == 'night'){return '#93c5eb'; }else if(global.currentTime == 'satellite'){return '#808080'; }}
        #labels

        capitals: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#FFFFFF'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        capitals_stroke: function(){if(global.currentTime == 'day'){return '#000000'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#ffffff'; }}
        country_34: function(){if(global.currentTime == 'day'){return '#000'; }else if(global.currentTime == 'night'){return '#ffffff'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        country_34_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#ffffff'; }}
        country_567: function(){if(global.currentTime == 'day'){return '#000'; }else if(global.currentTime == 'night'){return '#ffffff'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        country_567_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#ffffff'; }}
        provinces_fill: function(){if(global.currentTime == 'day'){return '#7f6e60'; }else if(global.currentTime == 'night'){return '#ffffff'; }else if(global.currentTime == 'satellite'){return '#ffffff'; }}
        provinces_stroke: function(){if(global.currentTime == 'day'){return '#f6d7bc'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        province_cap_fill: function(){if(global.currentTime == 'day'){return '#49311c'; }else if(global.currentTime == 'night'){return '#d4c4ca'; }else if(global.currentTime == 'satellite'){return '#ffffff'; }}
        province_cap_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#604020'; }else if(global.currentTime == 'satellite'){return '#000000'; }}

        cities_fill: function(){if(global.currentTime == 'day'){return '#49311c'; }else if(global.currentTime == 'night'){return '#e9f3fb'; }else if(global.currentTime == 'satellite'){return '#efe6c3'; }}
        cities_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#000000'; }}}
        area_sector_fill: function(){if(global.currentTime == 'day'){return '#49311c'; }else if(global.currentTime == 'night'){return '#e9f3fb'; }else if(global.currentTime == 'satellite'){return '#efe6c3'; }}
        area_sector_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#0c2a41'; }else if(global.currentTime == 'satellite'){return '#000000'; }}

        road_text: function(){if(global.currentTime == 'day'){return '#595959'; }else if(global.currentTime == 'night'){return '#95b7b7'; }else if(global.currentTime == 'satellite'){return '#ecdfac'; }}
        road_text_stroke: function(){if(global.currentTime == 'day'){return '#EEEEEE'; }else if(global.currentTime == 'night'){return '#532e19'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        highway_text: function(){if(global.currentTime == 'day'){return '#8f473d'; }else if(global.currentTime == 'night'){return '#e4eaef'; }else if(global.currentTime == 'satellite'){return '#ecdfac'; }}
        highway_text_border: function(){if(global.currentTime == 'day'){return '#ffd9cc'; }else if(global.currentTime == 'night'){return '#532e19'; }else if(global.currentTime == 'satellite'){return '#000000'; }}

        poi_fill: function(){if(global.currentTime == 'day'){return '#636363'; }else if(global.currentTime == 'night'){return '#87d1f5'; }else if(global.currentTime == 'satellite'){return '#FFFFFF'; }}
        poi_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#532e19'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        search_poi_stroke: function(){if(global.currentTime == 'day'){return '#FFFFFF'; }else if(global.currentTime == 'night'){return '#282d35'; }else if(global.currentTime == 'satellite'){return '#000000'; }}

        water_fill: function(){if(global.currentTime == 'day'){return '#1b7d7e'; }else if(global.currentTime == 'night'){return '#66ffff'; }else if(global.currentTime == 'satellite'){return '#75b3f0'; }}
        water_stroke: function(){if(global.currentTime == 'day'){return '#edf7f7'; }else if(global.currentTime == 'night'){return '#001f33'; }else if(global.currentTime == 'satellite'){return '#000000'; }}

        parks_fill: function(){if(global.currentTime == 'day'){return '#447F08'; }else if(global.currentTime == 'night'){return '#65E3DB'; }else if(global.currentTime == 'satellite'){return '#84e963'; }}
        parks_stroke: function(){if(global.currentTime == 'day'){return '#93e006'; }else if(global.currentTime == 'night'){return '#115551'; }else if(global.currentTime == 'satellite'){return '#000000'; }}
        endflag: function(){if(global.currentTime == 'day'){return '#404040'; }else if(global.currentTime == 'night'){return '#FFFFFF'; }else if(global.currentTime == 'satellite'){return '#404040'; }}

cameras:
    perspective:
        type: perspective
        focal_length: [[10,6.5],[13,5.5], [14, 4.5],[15,4.],[16, 2.5], [17, 2.2], [18, 2.], [19, 1.25]] # pairs of [zoom, focal len]
        vanishing_point: [0, 0] # relative to center of screen, in pixels
        active: true

lights:
    directional1:
        type: directional
        origin: world
        direction: [1.7, 1.9, -3.]
        ambient: [0.585,0.585,0.59]
        diffuse: 0.5

scene:
    background:
        color: '#fffbf5'

cinnabar-colors:
    cameras:
        - &camera_settings            { type: isometric, axis: [0, .1], vanishing_point: [0, -500] }

# Define the textures that will be used in the redering
# For the POIs icons we will give the textures for each type of the POI
# The name, followed by the URL, and then define the sprite (for now the whole png is being used as a sprite
# so we are using 0 as both x and y origin, and the icon itself in 18x18 pixels)
# a different texture object for each icon as the icons are kept in a seperate png file

textures:
    pois:
        url: ../images/map_icons.png
        sprites:
            accounting: [149,1,72,72]
            advertisingagency: [223,1,72,72]
            agribusiness: [297,1,72,72]
            airport: [371,1,72,72]
            ambulance: [445,1,72,72]
            amusementpark: [519,1,72,72]
            aquarium: [593,1,72,72]
            artgallery: [667,1,72,72]
            atm: [741,1,72,72]
            auditorium: [815,1,72,72]
            autospareparts: [889,1,72,72]
            bank: [963,1,72,72]
            barber: [1,74,72,72]
            basketballcourt: [75,74,72,72]
            beautysalon: [149,75,72,72]
            bookstore: [741,963,80,80]
            booksandstationers: [223,75,71,72]
            busstation: [296,75,71,72]
            busstop: [369,75,72,72]
            cafe: [443,75,72,72]
            campground: [517,75,72,72]
            canteen: [591,75,72,72]
            carrepair: [665,75,72,72]
            carshowroom: [739,75,72,72]
            carwash: [813,75,72,72]
            catererseventplanners: [887,75,72,72]
            cemetery: [961,75,72,72]
            church: [1,148,72,72]
            cinema: [75,148,72,72]
            cleaningandlaundry: [149,149,72,72]
            clothingstore: [223,149,72,72]
            college: [297,149,72,72]
            communitycenter: [371,149,72,72]
            computerstore: [445,149,72,72]
            constructionservices: [519,149,72,72]
            conveniencestore: [593,149,72,72]
            cosmeticsstore: [667,149,72,72]
            courierservice: [741,149,72,72]
            court: [815,149,72,72]
            cricketground: [889,149,72,72]
            currencyexchange: [963,149,72,72]
            dairyshop: [1,222,72,72]
            dentist: [75,222,72,72]
            dhaba: [149,223,72,72]
            drivingschool: [223,223,72,72]
            dryport: [297,223,72,72]
            electricalstore: [371,223,72,72]
            electrician: [445,223,72,72]
            electricityoffice: [519,223,72,72]
            electronicsstore: [593,223,72,72]
            embassy: [667,223,72,72]
            equipment: [741,223,72,72]
            exhibitionhall: [815,223,72,72]
            factory: [889,223,72,72]
            fastfood: [963,223,72,72]
            filterationplant: [1,296,72,72]
            firestation: [75,296,72,72]
            fitnesscenter: [149,297,72,72]
            florist: [223,297,72,72]
            flyingclub: [297,297,72,72]
            footballground: [371,297,72,72]
            fruitandvegetable: [445,297,72,72]
            fuelstation: [519,297,72,72]
            functionhall: [593,297,72,72]
            furniturestore: [1,1,72,71]
            giftstore: [667,297,72,72]
            glasswork: [741,297,72,72]
            governmentbuildings: [815,297,72,72]
            guesthouse: [889,297,72,72]
            gurdwara: [963,297,72,72]
            hardwareandsanitary: [1,370,72,72]
            herbalclinic: [75,370,72,72]
            hijamacenter: [149,371,72,72]
            hikmat: [223,371,72,72]
            historicalplace: [297,371,71,72]
            hockeyground: [370,371,72,72]
            homegoodsstore: [444,371,72,72]
            homeopathicclinic: [518,371,72,72]
            hospital: [592,371,72,72]
            hostel: [666,371,72,72]
            hotel: [740,371,72,72]
            icecreamparlor: [814,371,72,72]
            imambargah: [888,371,72,72]
            indoorgames: [962,371,72,72]
            insuranceagency: [1,444,72,72]
            intersection: [75,444,71,72]
            jewellerystore: [148,445,72,72]
            juicebar: [222,445,72,72]
            khokha: [296,445,72,72]
            laboratory: [370,445,72,72]
            langar: [444,445,72,72]
            lawenforcement: [518,445,72,72]
            lawyer: [592,445,72,72]
            library: [666,445,72,72]
            localadministration: [740,445,72,72]
            lpgsupplier: [814,445,72,72]
            madrassa: [888,445,72,72]
            materialsupplier: [962,445,72,72]
            meatstore: [1,518,72,72]
            medicalclinic: [148,519,72,72]
            metalwork: [222,519,72,72]
            mill: [296,519,72,72]
            mobileshop: [370,519,72,72]
            moneytransfer: [444,519,72,72]
            monument: [518,519,72,72]
            mosque: [592,519,72,72]
            motel: [666,519,72,72]
            motorbikerepair: [740,519,72,72]
            motorbikeshowroom: [814,519,72,72]
            museum: [888,519,72,72]
            newspaper: [962,519,72,72]
            ngo: [1,592,72,72]
            oiltraders: [75,593,72,72]
            optician: [149,593,72,72]
            orphanage: [223,593,72,72]
            otherbeautyandspa: [297,593,72,72]
            othercivicutilities: [371,593,72,72]
            otherconstruction: [445,593,72,72]
            othereducation: [519,593,72,72]
            otherevents: [593,593,72,72]
            otherfinance: [667,593,72,72]
            otherfood: [741,593,72,72]
            othergeneral: [815,593,72,72]
            othergovernment: [889,593,72,72]
            othergrocery: [963,593,72,72]
            otherindustry: [1,666,72,72]
            otherlocalbusinesses: [75,667,72,72]
            otherlodging: [149,667,72,72]
            othermedia: [223,667,72,72]
            othermedical: [297,667,72,72]
            otherrecreation: [371,667,72,72]
            otherreligion: [445,667,72,72]
            othershopping: [519,667,72,72]
            othersocialservice: [593,667,72,72]
            othersports: [667,667,72,72]
            othertourist: [741,667,72,72]
            othertransportation: [815,667,72,72]
            othervehicle: [889,667,72,72]
            park: [963,667,72,72]
            parking: [1,740,72,72]
            petstore: [75,741,72,72]
            pharmacy: [149,741,72,72]
            photostudio: [223,741,72,72]
            plumber: [297,741,72,72]
            postoffice: [371,741,72,72]
            powerstation: [445,741,72,72]
            pressclub: [519,741,72,72]
            printers: [823,963,80,80]
            privatecompany: [593,741,72,72]
            radiostation: [667,741,72,72]
            railwaystation: [741,741,72,72]
            realestateagency: [815,741,72,72]
            recyclestore: [889,741,72,72]
            refinery: [963,741,72,72]
            rentacar: [1,814,72,72]
            rescueservice: [75,815,72,72]
            restaurant: [149,815,72,72]
            school: [223,815,72,72]
            seaport: [297,815,72,72]
            shoestore: [371,815,72,72]
            shoppingmall: [445,815,72,72]
            shrine: [519,815,72,72]
            spa: [593,815,72,72]
            sportsgoods: [667,815,72,72]
            squashcourt: [741,815,72,72]
            stadium: [815,815,72,72]
            stockbroker: [889,815,72,72]
            suigasoffice: [963,815,72,72]
            supermarket: [1,888,72,72]
            sweetsandbakers: [75,889,72,72]
            swimmingpool: [149,889,72,72]
            tailor: [223,889,72,72]
            tandoor: [297,889,72,72]
            taxistand: [371,889,72,72]
            technicalservices: [445,889,72,72]
            telecommunication: [519,889,72,72]
            telenor: [905,963,80,80]
            temple: [593,889,72,72]
            tenniscourt: [667,889,72,72]
            tomb: [741,889,72,72]
            toystore: [815,889,72,72]
            tpl: [0,1035,75,75]
            traininginstitute: [889,889,72,72]
            travelagency: [963,889,72,72]
            tuitioncenter: [1,962,72,72]
            tvchannel: [75,963,72,72]
            tvstudio: [149,963,72,72]
            tyreshop: [223,963,72,72]
            university: [297,963,72,72]
            veterinarycare: [371,963,72,72]
            vocationalcenter: [445,963,72,72]
            volleyballcourt: [519,963,72,72]
            warehouse: [75,518,71,72]
            wholesale: [75,1,72,71]
            woodwork: [593,963,72,72]
            zoo: [667,963,72,72]

    pois_search:
        url: ../images/map_icons_search.png
        sprites:
            search_accounting: [1,1,80,80]
            search_advertisingagency: [1,83,80,80]
            search_agribusiness: [1,165,80,80]
            search_airport: [1,247,80,80]
            search_ambulance: [1,329,80,80]
            search_amusementpark: [1,411,80,80]
            search_aquarium: [1,493,80,80]
            search_artgallery: [1,575,80,80]
            search_atm: [1,657,80,80]
            search_auditorium: [1,739,80,80]
            search_autospareparts: [1,821,80,80]
            search_autospareparts: [1,903,80,80]
            search_bank: [1,985,80,80]
            search_barber: [1,1067,80,80]
            search_basketballcourt: [83,1,80,80]
            search_beautysalon: [165,1,80,80]
            search_bookstore: [247,1,80,80]
            search_booksandstationers: [903,985,79,80]
            search_busstation: [903,1067,79,80]
            search_busstop: [329,1,80,80]
            search_cafe: [411,1,80,80]
            search_campground: [493,1,80,80]
            search_canteen: [575,1,80,80]
            search_carrepair: [657,1,80,80]
            search_carshowroom: [739,1,80,80]
            search_carwash: [821,1,80,80]
            search_catererseventplanners: [903,1,80,80]
            search_cemetery: [985,1,80,80]
            search_church: [1067,1,80,80]
            search_cinema: [83,83,80,80]
            search_cleaningandlaundry: [83,165,80,80]
            search_clothingstore: [83,247,80,80]
            search_college: [83,329,80,80]
            search_communitycenter: [83,411,80,80]
            search_computerstore: [83,493,80,80]
            search_constructionservices: [83,575,80,80]
            search_conveniencestore: [83,657,80,80]
            search_cosmeticsstore: [83,739,80,80]
            search_courierservice: [83,821,80,80]
            search_court: [83,903,80,80]
            search_cricketground: [83,985,80,80]
            search_currencyexchange: [83,1067,80,80]
            search_dairyshop: [165,83,80,80]
            search_dentist: [247,83,80,80]
            search_dhaba: [329,83,80,80]
            search_drivingschool: [411,83,80,80]
            search_dryport: [493,83,80,80]
            search_electricalstore: [575,83,80,80]
            search_electrician: [657,83,80,80]
            search_electricityoffice: [739,83,80,80]
            search_electronicsstore: [821,83,80,80]
            search_embassy: [903,83,80,80]
            search_equipment: [985,83,80,80]
            search_exhibitionhall: [1067,83,80,80]
            search_factory: [165,165,80,80]
            search_fastfood: [165,247,80,80]
            search_filterationplant: [165,329,80,80]
            search_firestation: [165,411,80,80]
            search_fitnesscenter: [165,493,80,80]
            search_florist: [165,575,80,80]
            search_flyingclub: [165,657,80,80]
            search_footballground: [165,739,80,80]
            search_fruitandvegetable: [165,821,80,80]
            search_fuelstation: [165,903,80,80]
            search_functionhall: [165,985,80,80]
            search_furniturestore: [1066,903,80,79]
            search_giftstore: [165,1067,80,80]
            search_glasswork: [247,165,80,80]
            search_governmentbuildings: [329,165,80,80]
            search_guesthouse: [411,165,80,80]
            search_gurdwara: [493,165,80,80]
            search_hardwareandsanitary: [575,165,80,80]
            search_herbalclinic: [657,165,80,80]
            search_hijamacenter: [739,165,80,80]
            search_hikmat: [821,165,80,80]
            search_historicalplace: [984,985,79,80]
            search_hockeyground: [903,165,80,80]
            search_homegoodsstore: [985,165,80,80]
            search_homeopathicclinic: [1067,165,80,80]
            search_hospital: [247,247,80,80]
            search_hostel: [247,329,80,80]
            search_hotel: [247,411,80,80]
            search_icecreamparlor: [247,493,80,80]
            search_imambargah: [247,575,80,80]
            search_indoorgames: [247,657,80,80]
            search_insuranceagency: [247,739,80,80]
            search_intersection: [985,903,79,80]
            search_jewellerystore: [247,821,80,80]
            search_juicebar: [247,903,80,80]
            search_khokha: [247,985,80,80]
            search_laboratory: [247,1067,80,80]
            search_langar: [329,247,80,80]
            search_lawenforcement: [411,247,80,80]
            search_lawyer: [493,247,80,80]
            search_library: [575,247,80,80]
            search_localadministration: [657,247,80,80]
            search_lpgsupplier: [739,247,80,80]
            search_madrassa: [821,247,80,80]
            search_materialsupplier: [903,247,80,80]
            search_meatstore: [985,247,80,80]
            search_medicalclinic: [1067,247,80,80]
            search_metalwork: [329,329,80,80]
            search_mill: [329,411,80,80]
            search_mobileshop: [329,493,80,80]
            search_moneytransfer: [329,575,80,80]
            search_monument: [329,657,80,80]
            search_mosque: [329,739,80,80]
            search_motel: [329,821,80,80]
            search_motorbikerepair: [329,903,80,80]
            search_motorbikeshowroom: [329,985,80,80]
            search_museum: [329,1067,80,80]
            search_newspaper: [411,329,80,80]
            search_ngo: [493,329,80,80]
            search_oiltraders: [575,329,80,80]
            search_optician: [657,329,80,80]
            search_orphanage: [739,329,80,80]
            search_otherbeautyandspa: [821,329,80,80]
            search_othercivicutilities: [903,329,80,80]
            search_otherconstruction: [985,329,80,80]
            search_othereducation: [1067,329,80,80]
            search_otherevents: [411,411,80,80]
            search_otherfinance: [411,493,80,80]
            search_otherfood: [411,575,80,80]
            search_othergeneral: [411,657,80,80]
            search_othergovernment: [411,739,80,80]
            search_othergrocery: [411,821,80,80]
            search_otherindustry: [411,903,80,80]
            search_otherlocalbusinesses: [411,985,80,80]
            search_otherlodging: [411,1067,80,80]
            search_othermedia: [493,411,80,80]
            search_othermedical: [575,411,80,80]
            search_otherrecreation: [657,411,80,80]
            search_otherreligion: [739,411,80,80]
            search_othershopping: [821,411,80,80]
            search_othersocialservice: [903,411,80,80]
            search_othersports: [985,411,80,80]
            search_othertourist: [1067,411,80,80]
            search_othertransportation: [493,493,80,80]
            search_othervehicle: [493,575,80,80]
            search_park: [493,657,80,80]
            search_parking: [493,739,80,80]
            search_petstore: [493,821,80,80]
            search_pharmacy: [493,903,80,80]
            search_photostudio: [493,985,80,80]
            search_plumber: [493,1067,80,80]
            search_postoffice: [575,493,80,80]
            search_powerstation: [657,493,80,80]
            search_pressclub: [739,493,80,80]
            search_privatecompany: [821,493,80,80]
            search_radiostation: [903,493,80,80]
            search_railwaystation: [985,493,80,80]
            search_realestateagency: [1067,493,80,80]
            search_recyclestore: [575,575,80,80]
            search_refinery: [575,657,80,80]
            search_rentacar: [575,739,80,80]
            search_rescueservice: [575,821,80,80]
            search_restaurant: [575,903,80,80]
            search_school: [575,985,80,80]
            search_seaport: [575,1067,80,80]
            search_shoestore: [657,575,80,80]
            search_shoppingmall: [739,575,80,80]
            search_shrine: [821,575,80,80]
            search_spa: [903,575,80,80]
            search_sportsgoods: [985,575,80,80]
            search_squashcourt: [1067,575,80,80]
            search_stadium: [657,657,80,80]
            search_stockbroker: [657,739,80,80]
            search_suigasoffice: [657,821,80,80]
            search_supermarket: [657,903,80,80]
            search_sweetsandbakers: [657,985,80,80]
            search_swimmingpool: [657,1067,80,80]
            search_tailor: [739,657,80,80]
            search_tandoor: [821,657,80,80]
            search_taxistand: [903,657,80,80]
            search_technicalservices: [985,657,80,80]
            search_telecommunication: [1067,657,80,80]
            search_telenor: [739,739,80,80]
            search_temple: [739,821,80,80]
            search_tenniscourt: [739,903,80,80]
            search_tomb: [739,985,80,80]
            search_toystore: [739,1067,80,80]
            search_tpl: [1065,1065,80,80]
            search_traininginstitute: [821,739,80,80]
            search_travelagency: [903,739,80,80]
            search_tuitioncenter: [985,739,80,80]
            search_tvchannel: [1067,739,80,80]
            search_tvstudio: [821,821,80,80]
            search_tyreshop: [821,903,80,80]
            search_university: [821,985,80,80]
            search_veterinarycare: [821,1067,80,80]
            search_vocationalcenter: [903,821,80,80]
            search_volleyballcourt: [985,821,80,80]
            search_warehouse: [984,1067,79,80]
            search_wholesale: [1066,984,80,79]
            search_woodwork: [1067,821,80,80]
            search_zoo: [903, 903, 80, 80]

    currentLocationMarker:
        url: ../images/current_location_marker.png
        sprites:
            SPRITE: [0, 0, 44, 44]

    routeMarker:
        url: ../images/heading_arrow.png
        sprites:
            SPRITE: [0, 0, 160, 160]

    startflag:
        url: ../images/start_flag.png
        sprites:
            SPRITE: [0, 0, 75, 50]

    endflag:
        url: ../images/end_flag.png
        sprites:
            SPRITE: [0, 0, 75, 50]

    droppin:
        url: ../images/pin.png
        sprites:
            SPRITE: [0, 0, 107, 107]
    pinmarker:
        url: ../images/pin.png
        sprites:
            SPRITE: [0, 0, 107, 107]

# Will have to define styles for each icon seperately as the textures can't be directly called in the draw function of the layer
# The style will tell the type of object it can be applied to (points for pois) and the applicable texture file
# if the texture is not referenced in a style, then we will get a error
styles:
    icons:
        base: points
        blend_order: 3
        texture: pois
    search_icons:
        base: points
        blend_order: 3
        texture: pois_search
    currentLocationMarker:
        base: points
        blend_order: 4
        texture: currentLocationMarker
    routeMarker:
        base: points
        blend_order: 4
        texture: routeMarker
    startflag:
        base: points
        texture: startflag
    endflag:
        base: points
        texture: endflag
    droppin:
        base: points
        texture: droppin
        blend_order: 5
    pinmarker:
        base: points
        texture: pinmarker
        blend_order: 5
    text-blend-order:
        base: text
        blend_order: 1
    pois_text:
        base: text
    urdu_text:
        base: text
        blend_order: 2

    english_text:
        base: text
        blend_order: 2

    road_text:
        base: text
        blend: inlay
        blend_order: 2

    lines2:
        base: lines

    lines3:
        base: lines

    route_line:
        base: lines
        blend_order: -2

    # Color variation in 3d-buildings
    solidbuildings_night:
        base: polygons
        shaders:
            blocks:
                color: |
                    color.rgb *= vec3(min((v_world_position.z*.01 + .9),1.)-0.2);
                    color.r*=0.6;
                    color.g*=0.6;
                    color.b*=0.7;

    solidbuildings_day:
        base: polygons
        shaders:
            blocks:
                color: |
                    color.rgb *= vec3(min((v_world_position.z*.01 + .9),1.));

    cBuildingWindows_night:
        base: polygons
        mix: [geometry-normal,functions-map]
        shaders:
            blocks:
                color: |
                    if (!isWall()) {
                        color.rgb *= vec3(min((worldPosition().z*.01 + .9),1.)-0.2);
                    }else{
                        color.rgb *= (vec3(min((v_world_position.z*.01 + .9),1.))-vec3(0.2*step(0.1,sin(worldPosition().z))))-0.2; //vec3(0.2*(max(ceil(0.9*sin(worldPosition().z)) , 0.0))*(ceil(max( abs(sin(0.4*(abs(v_world_position.x) + abs(v_world_position.y) )))-.5 , 0.0)      )) );
                    }
                    color.r*=0.6;
                    color.g*=0.6;
                    color.b*=0.7;

    cBuildingWindows_day:
        base: polygons
        mix: [geometry-normal,functions-map]
        shaders:
            blocks:
                color: |
                    if (!isWall()) {
                        color.rgb *= vec3(min((worldPosition().z*.01 + .9),1.));
                    }else{
                        color.rgb *= vec3(min((v_world_position.z*.01 + .9),1.))-vec3(0.2*(max(ceil(0.9*sin(worldPosition().z)) , 0.0))*(ceil(max( abs(sin(0.4*(abs(v_world_position.x) + abs(v_world_position.y) )))-.5 , 0.0)      )) );
                    }

    glassBuilding_night:
        base: polygons
        shaders:
            blocks:
                color: |
                    color.rgb *= (vec3(min((v_world_position.z*.01 + .9),1.),min((v_world_position.z*.003 + .8),1.),min((v_world_position.z*.003 + .83),1.))+vec3(1.2*(max(abs(sin(0.4*worldPosition().y)),0.95)-0.95))+vec3(1.2*(max(abs(sin(0.4*worldPosition().z)),0.95)-0.95))-0.2);
                    color.r*=0.6;
                    color.g*=0.6;
                    color.b*=0.7;

    glassBuilding_day:
        base: polygons
        shaders:
            blocks:
                color: |
                    color.rgb *= vec3(min((v_world_position.z*.01 + .9),1.),min((v_world_position.z*.003 + .8),1.),min((v_world_position.z*.003 + .83),1.))+vec3(1.2*(max(abs(sin(0.4*worldPosition().y)),0.95)-0.95))+vec3(1.2*(max(abs(sin(0.4*worldPosition().z)),0.95)-0.95));

    dashedline:
        base: lines
        texcoords: true
        shaders:
            defines:
                background: vec3(0.867, 0.867, 0.867)
            blocks:
                color: |
                    // blend line 50/50 between two colors
                    float t = fract(v_texcoord.y);
                    float e = 0.1; // edge feather
                    vec3 v = vec3(
                        smoothstep(.0, e, t) *
                        (1. - smoothstep(.5, .5 + e, t))
                    );
                    color.rgb = mix(color.rgb, background, v);

    generative-random:
        shaders:
            blocks:
                global: |
                    // 1D Random for 1 and 2 dimentions
                    // ================================
                    float random (float x) {
                        return fract(sin(x)*1e4);
                    }
                    float random (vec2 xy) {
                        return fract(sin(dot(xy.xy, vec2(12.9898,78.233)))* 43758.5453123);
                    }
                    //
                    // 2D Random for 2 dimentions
                    // ================================
                    vec2 random2 (vec2 xy) {
                        return fract(sin(vec2(dot(xy,vec2(127.1,311.7)),dot(xy,vec2(269.5,183.3))))*43758.5453);
                    }
                    //
                    // 3D Random for 2 dimentions
                    // ================================
                    vec3 random3 (vec2 xy) {
                        return fract(sin(vec3( dot(xy,vec2(127.1,311.7)), dot(xy,vec2(269.5,183.3)), dot(xy,vec2(419.2,371.9)) ))*43758.5453);
                    }
                    vec3 random3 (vec3 c) {
                        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
                        vec3 r;
                        r.z = fract(512.0*j);
                        j *= .125;
                        r.x = fract(512.0*j);
                        j *= .125;
                        r.y = fract(512.0*j);
                        return r-0.5;
                    }
    generative-noise:
        mix: generative-random
        shaders:
            blocks:
                global: |
                    // 1D Value Noise for 1, 2 and 3 dimentions
                    // ================================
                    float noise (in float x) {
                        float i = floor(x);
                        float f = fract(x);
                        float u = f * f * (3.0 - 2.0 * f);
                        return mix(random(i), random(i + 1.0), u);
                    }
                    float noise (vec2 xy) {
                        vec2 i = floor(xy);
                        vec2 f = fract(xy);
                        float a = random(i);
                        float b = random(i + vec2(1.0, 0.0));
                        float c = random(i + vec2(0.0, 1.0));
                        float d = random(i + vec2(1.0, 1.0));
                        vec2 u = f * f * (3.0 - 2.0 * f);
                        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
                    }
                    float noise (vec3 xyz) {
                        const vec3 step = vec3(110.0, 241.0, 171.0);
                        vec3 i = floor(xyz);
                        vec3 f = fract(xyz);
                        float n = dot(i, step);
                        vec3 u = f * f * (3.0 - 2.0 * f);
                        return mix( mix(mix(random(n + dot(step, vec3(0,0,0))),
                                            random(n + dot(step, vec3(1,0,0))),
                                            u.x),
                                        mix(random(n + dot(step, vec3(0,1,0))),
                                            random(n + dot(step, vec3(1,1,0))),
                                            u.x),
                                        u.y),
                                    mix(mix(random(n + dot(step, vec3(0,0,1))),
                                        random(n + dot(step, vec3(1,0,1))),
                                        u.x),
                                        mix(random(n + dot(step, vec3(0,1,1))),
                                            random(n + dot(step, vec3(1,1,1))),
                                            u.x),
                                    u.y),
                                u.z);
                    }
                    //
                    // Simplex Noise
                    const float F3 =  0.3333333;
                    const float G3 =  0.1666667;
                    float snoise (vec3 p) {
                        vec3 s = floor(p + dot(p, vec3(F3)));
                        vec3 x = p - s + dot(s, vec3(G3));
                        vec3 e = step(vec3(0.0), x - x.yzx);
                        vec3 i1 = e*(1.0 - e.zxy);
                        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
                        vec3 x1 = x - i1 + G3;
                        vec3 x2 = x - i2 + 2.0*G3;
                        vec3 x3 = x - 1.0 + 3.0*G3;
                        vec4 w, d;
                        w.x = dot(x, x);
                        w.y = dot(x1, x1);
                        w.z = dot(x2, x2);
                        w.w = dot(x3, x3);
                        w = max(0.6 - w, 0.0);
                        d.x = dot(random3(s), x);
                        d.y = dot(random3(s + i1), x1);
                        d.z = dot(random3(s + i2), x2);
                        d.w = dot(random3(s + 1.0), x3);
                        w *= w;
                        w *= w;
                        d *= w;
                        return dot(d, vec4(52.0));
                    }
    generative-fbm:
        mix: generative-noise
        shaders:
            defines:
                NUM_OCTAVES: 5
            blocks:
                global: |
                    // Fractional Brownian motion for 1 and 2 dimensions
                    float fbm (float x) {
                        float v = 0.0;
                        float a = 0.5;
                        float shift = float(100.0);
                        for (int i = 0; i < int(NUM_OCTAVES); ++i) {
                            v += a * noise(x);
                            x = x * 2.0 + shift;
                            a *= 0.5;
                        }
                        return v;
                    }
                    float fbm (vec2 xy) {
                        float v = 0.0;
                        float a = 0.5;
                        vec2 shift = vec2(100.0);
                        mat2 rot = mat2(cos(0.5), sin(0.5),
                                        -sin(0.5), cos(0.50));
                        for (int i = 0; i < int(NUM_OCTAVES); ++i) {
                            v += a * noise(xy);
                            xy = rot * xy * 2.0 + shift;
                            a *= 0.5;
                        }
                        return v;
                    }

    geometry-normal:
        shaders:
            blocks:
                global: |
                    // Ask to the geometry normals if this surface is a Wall
                    bool isWall() {
                        return dot(worldNormal(),vec3(0.,0.,1.)) <= 0.01;
                    }
                    //
                    // Ask to the geometry normals if this surface is a roof
                    bool isRoof() {
                        return dot(worldNormal(),vec3(0.,0.,1.)) >= 0.99;
                    }


    filter-grain:
        mix: generative-fbm
        shaders:
            defines:
                GRAIN_AMOUNT: .5
                NUM_OCTAVES: 2
            blocks:
                global: |
                    // Grain fractor on screen space with less concetration in the center
                    // ================================
                    float grain(){
                        #ifdef TANGRAM_FRAGMENT_SHADER
                        vec2 pos = gl_FragCoord.xy;
                        vec2 st = pos/u_resolution.xy-vec2(.5);
                        return dot(st,st)+(fbm(pos*0.6)*0.1);
                        #else
                        return 0.0;
                        #endif
                    }
                filter: |
                    // Apply the grain in the amount defined on GRAIN_AMOUNT
                    color.rgb -= grain()*GRAIN_AMOUNT;

    roadsTraffic:
        animated: true
        texcoords: true
        lighting: true
        base: lines
        mix: filter-grain
        material:
            diffuse: .9
            emission: 0.0
        shaders:
            blocks:
                color: |
                    vec2 st = fract(v_texcoord.xy*vec2(.4,.1));
                    float dir = -0.65;
                    if(color.r>=0.9 && color.g<=0.1 && color.b<=0.1 ){
                        dir = -0.03;
                    }else if(color.r>=0.9 && color.g>=0.9 && color.b<=0.1 ){
                        dir = -0.2;
                    }
                    if (v_color.g < 0.5 ) {
                       if (st.x < 0.5) {
                         st.y = st.y; //(1.-st.y) for 2-ways
                       }
                       st.x = fract(st.x*2.0);
                    }
                    float v = u_time*dir;
                    st *= vec2(4.,1.);
                    st += vec2(1.);
                    vec2 ipos = floor(st);
                    vec2 fpos = fract(st);
                    fpos = fpos+vec2(.0,v*random(ipos.x));
                    ipos = floor(fpos*vec2(10.));
                    fpos = fract(fpos*vec2(1.,10.));

                    st = worldPosition().xy*0.04;
                    float n = noise(st);

                    if(color.r>=0.9 && color.g<=0.1 && color.b<=0.1 ){
                        color.rgba -= vec4(0.0,-1.0,0.0,.0) * max(0.0,(0.7-dot(fpos-.5,fpos-vec2(.5,.9))*3.) * step(0.2,random(ipos.y)));
                    }else if(color.r>=0.9 && color.g>=0.9 && color.b<=0.1 ){
                        color.rgba -= vec4(0.75,1.0,-.5,0.) * max(0.0,(0.7-dot(fpos-.5,fpos-vec2(.5,.9))*3.) * step(0.5,random(ipos.y)));
                    }else{
                        color.rgba -= vec4(-1.0,-0.5,-1.0,0.0) * max(0.0,(0.7-dot(fpos-.5,fpos-vec2(.5,.9))*3.) * step(0.8,random(ipos.y)));
                    }

    streetview:
        blend: inlay
        base: lines
        shaders:
            uniforms:
                alpha: 0.0
            blocks:
                color: |
                    color.a = alpha;


# define the source of the tiles we are using
sources:
    local:
        type: MVT
        url:  https://api1.tplmaps.com:8888/tile?apiKey=$2a$10$z0t3xrrGwZSyz385cBv6cewpDAL9B5gYE1OU6w6M8rvTsdnB6ooeO&layer=composite_en&zoom={z}&x={x}&y={y}
        min_zoom: 1
        max_zoom: 17
    local2:
        type: MVT
        url:  https://api1.tplmaps.com:8888/tile?apiKey=$2a$10$z0t3xrrGwZSyz385cBv6cewpDAL9B5gYE1OU6w6M8rvTsdnB6ooeO&layer=buildings_en&zoom={z}&x={x}&y={y}
        min_display_zoom: 14
        min_zoom: 14
        max_zoom: 17

    local-pois:
        type: MVT
        url:  https://api1.tplmaps.com:8888/tile?apiKey=$2a$10$z0t3xrrGwZSyz385cBv6cewpDAL9B5gYE1OU6w6M8rvTsdnB6ooeO&layer=pois_en&zoom={z}&x={x}&y={y}
        min_display_zoom: 10
        max_zoom: 17

    stamen-terrain:
        type: Raster
        url: https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png
        url_params:
            access_token: pk.eyJ1IjoidHBsbWFwczIwMTYiLCJhIjoiY2lybmF1aHBsMDA1Zmh1bmg1NGV5Z2p3NSJ9.H2LMWYfvlLqV-1nZ0vCKzA
        max_zoom: 17

# As we are using the Composite GeoJSON for the source, each layer drawn here is the object class, the layer name acts as the layer from
# source JSON if we don't explicitly define it, boundary layer here is using the data in the JSON that is followed by the "boundary": key word
# before the features are defined
layers:
    terrain:
        data: { source: stamen-terrain }
        filter: function() { return global.currentTime == 'satellite' }
        draw:
            raster:
                order: 0


    touch:
        data: { source: touch }
        line:
            filter: { type: line }
            draw:
                lines:
                    color: function () { return feature.color || 'red'; }
                    order: 50
                    width: 5px
        poly:
            filter: { type: poly }
            draw:
                polygons:
                    color: red
                    order: 40
                    width: 5px

    selectedroutelayer:
        data: { source: selectedroutelayer }
        selectedroute:
            filter: { type: selectedroute }
            draw:
                route_line:
                    color: global.colorscheme.selected_route
                    outline:
                        color: global.colorscheme.selected_route_outline
                        width: 1px
                    cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                    order: 105
                    width: [[10,9px],[16,12px],[20,30px]]

    nonselectedroutelayer:
        data: { source: nonselectedroutelayer }
        nonselectedroute:
            filter: { type: nonselectedroute }
            draw:
                route_line:
                    color: global.colorscheme.nonselected_route
                    outline:
                        color: global.colorscheme.nonselected_route_outline
                        width: 1px
                    cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                    order: 100
                    width: [[10,9px],[16,12px],[20,30px]]
                    interactive: true

    routesegmentslayer:
        data: { source: routesegmentslayer }
        selectedsegment:
            filter: { type: selectedsegment }
            draw:
                route_line:
                    color: global.colorscheme.segment
                    outline:
                        color: global.colorscheme.segment_outline
                        width: 1px
                    order: 106
                    width: [[10,9px],[16,12px],[20,30px]]
                    interactive: true

    routemarkerslayer:
        data: { source: routemarkerslayer }
        startflag:
            filter: { type: startflag }
            draw:
                startflag:
                    priority: 0.5
                    sprite: SPRITE
                    size: [[12, 28px], [15, 22px]]
                    interactive: true

        endflag:
            filter: { type: endflag }
            draw:
                endflag:
                    priority: 0.5
                    sprite: SPRITE
                    size: [[12, 28px], [15, 22px]]
                    interactive: true
                    text:
                        text_source: |
                                function() {
                                    return feature.display_endflag_na;
                                }
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        font:
                            family: sans-serif
                            fill: global.colorscheme.endflag
                            size: 13px
                            stroke: { color: global.colorscheme.poi_stroke , width: 1.0 }

    livetrafficlayer:
        data: { source: livetrafficlayer }
        trafficP5:
            filter: function() { return feature.roadpriority=='5'; }
            draw:
                roadsTraffic:
                    color: function () { return feature.color || 'red'; }
                    order: function() {if(feature.color=='#ff0000'){return 112;}if(feature.color=='#008000'){return 111;}else{return 110;} }
                    cap: round
                    width: [[5, 0.4px],[10,2px],[12,3.5px],[15,15.5px],[21,25px]]

        trafficP4:
            filter: function() { return feature.roadpriority=='4'; }
            draw:
                roadsTraffic:
                    color: function () { return feature.color || 'red'; }
                    order: function() {if(feature.color=='#ff0000'){return 112;}if(feature.color=='#008000'){return 111;}else{return 110;} }
                    cap: round
                    width: [[7, 0.5px],[10,1px],[15,7px],[20,25px]]

        trafficP3:
            filter: function() { return feature.roadpriority=='3'; }
            draw:
                roadsTraffic:
                    color: function () { return feature.color || 'red'; }
                    order: function() {if(feature.color=='#ff0000'){return 112;}if(feature.color=='#008000'){return 111;}else{return 110;} }
                    cap: round
                    width: [[10, 1.25px],[15,4px],[20,23px]]

        trafficP2:
            filter: function() { return feature.roadpriority=='2'; }
            draw:
                roadsTraffic:
                    color: function () { return feature.color || 'red'; }
                    order: function() {if(feature.color=='#ff0000'){return 112;}if(feature.color=='#008000'){return 111;}else{return 110;} }
                    cap: round
                    width: [[12, 1.5px],[15,4px],[20,20px]]

        trafficP1:
            filter: function() { return feature.roadpriority=='1'; }
            draw:
                roadsTraffic:
                    color: function () { return feature.color || 'red'; }
                    order: function() {if(feature.color=='#ff0000'){return 112;}if(feature.color=='#008000'){return 111;}else{return 110;} }
                    cap: round
                    width: [[14, 1px],[15,3px],[20,18px]]
#test starts
    locationmarker:
        data: { source: locationmarker }
        currentLocationMarker:
            filter: { type: currentLocationMarker }
            draw:
                currentLocationMarker:
                    priority: 2
                    sprite: SPRITE
                    size: [[12, 22px], [15, 22px]]
                    collide: false

    sv:
        data: { source: local-sv }
        filter: function() { return global.currentTime != 'satellite'; }
        highway-m:
            filter: {priority: 6}
            high:
                filter: function() { return global.currentVersion == 'high'; }
                draw:
                    streetview:
                        order: 29
                        cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                        visible: true
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[5, 1.px],[10,4px],[12,8.5px],[15,15.5px],[21,35px]]
            low:
                filter: function() { return global.currentVersion == 'low'; }
                draw:
                    lines:
                        order: 40
                        cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                        visible: global.svStatus
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[5, 1.px],[10,4px],[12,8.5px],[15,15.5px],[21,35px]]

        highway-nm:
            filter: {priority: 5}
            high:
                filter: function() { return global.currentVersion == 'high'; }
                draw:
                    streetview:
                        order: 29
                        cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                        visible: true
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[5, 2.px],[10,6px],[12,8.5px],[15,15.5px],[20,40px]]
            low:
                filter: function() { return global.currentVersion == 'low'; }
                draw:
                    lines:
                        order: 40
                        cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                        visible: global.svStatus
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[5, 2.px],[10,6px],[12,8.5px],[15,15.5px],[20,40px]]


        main-roads:
            filter: {priority: 4}
            high:
                filter: function() { return global.currentVersion == 'high'; }
                draw:
                    streetview:
                        order: 29
                        cap: function(){ if ($zoom >= 15){return 'round'} else { return 'butt'}}
                        visible: true
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[7, 2.5px],[10,5px],[15,15px],[20,35px]]
            low:
                filter: function() { return global.currentVersion == 'low'; }
                draw:
                    lines:
                        order: 40
                        cap: function(){ if ($zoom >= 15){return 'round'} else { return 'butt'}}
                        visible: global.svStatus
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[7, 2.5px],[10,5px],[15,15px],[20,35px]]


        secondary-roads:
            filter: {priority: 3}
            high:
                filter: function() { return global.currentVersion == 'high'; }
                draw:
                    streetview:
                        order: 29
                        cap: function(){ if ($zoom >= 16){return 'round'} else { return 'butt'}}
                        visible: true
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[10, 3.25px],[15,8px],[20,32px]]
            low:
                filter: function() { return global.currentVersion == 'low'; }
                draw:
                    lines:
                        order: 40
                        cap: function(){ if ($zoom >= 16){return 'round'} else { return 'butt'}}
                        visible: global.svStatus
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[10, 3.25px],[15,8px],[20,32px]]


        tertiary-roads:
            filter: {priority: 2}
            high:
                filter: function() { return global.currentVersion == 'high'; }
                draw:
                    streetview:
                        order: 29
                        cap: function(){ if ($zoom >= 17){return 'round'} else { return 'butt'}}
                        visible: true
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[12, 3.0px],[15,8px],[20,30px]]
            low:
                filter: function() { return global.currentVersion == 'low'; }
                draw:
                    lines:
                        order: 40
                        cap: function(){ if ($zoom >= 17){return 'round'} else { return 'butt'}}
                        visible: global.svStatus
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[12, 3.0px],[15,8px],[20,30px]]


        streets:
            filter: {priority: 1}
            high:
                filter: function() { return global.currentVersion == 'high'; }
                draw:
                    streetview:
                        order: 29
                        cap: function(){ if ($zoom >= 17){return 'round'} else { return 'butt'}}
                        visible: true
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[14, 0px],[15, 6.5px]]
            low:
                filter: function() { return global.currentVersion == 'low'; }
                draw:
                    lines:
                        order: 40
                        cap: function(){ if ($zoom >= 17){return 'round'} else { return 'butt'}}
                        visible: global.svStatus
                        interactive: true
                        color: global.colorscheme.streetview
                        width: [[14, 0px],[15, 6.5px]]

    droppinmarker:
        data: { source: droppinmarker }
        droppin:
            filter: { type: droppin }
            draw:
                droppin:
                    priority: 1
                    sprite: SPRITE
                    size: [[3, 44px], [21, 44px]]
                    collide: false

    world:
        data: { source: local }
        filter: [ $zoom: { max: 8 } ]
        draw:
            polygons:
                # the higher the order, the greater the importance when drawn
                order: 1
                color: global.colorscheme.world
        continent-p:
            filter: function() { return (feature.n.slice(0, 1) == 'P')  && (global.currentTime != 'satellite')}
            draw:
                polygons:
                    # the higher the order, the greater the importance when drawn
                    order: 1
                    color: global.colorscheme.continent_p

        ocean:
            filter: function() { return (feature.n == 'ocean')  && (global.currentTime != 'satellite') }
            draw:
                polygons:
                    # the higher the order, the greater the importance when drawn
                    order: 0
                    color: global.colorscheme.water
    world-8:
        data: { source: local, layer: world }
        filter: [ $zoom: { min: 8 } ]
        draw:
            polygons:
                # the higher the order, the greater the importance when drawn
                order: 2
                color: global.colorscheme.world_8
        ocean:
            filter: function() { return (feature.n == 'ocean')  && (global.currentTime != 'satellite')}
            draw:
                polygons:
                    # the higher the order, the greater the importance when drawn
                    order: 0
                    color: global.colorscheme.water

    borders:
        data: { source: local }
        country3:
            filter: { p: 0, $zoom: { min: 1 }  }
            draw:
                lines:
                    order: 3
                    color: global.colorscheme.borders_1
                    width: [[2, 0px],[3, 0px],[4,5px],[5,8px],[6,10px],[9,8px],[10,5px]]
                lines2:
                    order: 4
                    color: global.colorscheme.borders_2
                    width: [[2, 0px],[3, 0px],[4,2px],[5,4px],[6,5px],[9,4px],[10,3px]]
                lines3:
                    order: 5
                    color: global.colorscheme.borders_3
                    width: 1px

        province:
            filter: { p: 5 ,$zoom: { max: 10 }}
            draw:
                lines:
                    order: 30
                    color: global.colorscheme.borders_1
                    width: [[5,5px],[10,3px],[20,1px]]
                lines2:
                    order: 40
                    color: global.colorscheme.province
                    width: 1px

    citiesfill:
        data: { source: local }
        day:
            filter: function() { return global.currentTime == 'day' }
            draw:
                polygons:
                    # the higher the order, the greater the importance when drawn
                    order: 5
                    color: [[8,global.colorscheme.citiesfill8_day],[15,global.colorscheme.citiesfill15_day]]
        night:
            filter: function() { return global.currentTime == 'night' }
            draw:
                polygons:
                    # the higher the order, the greater the importance when drawn
                    order: 5
                    color: [[8,global.colorscheme.citiesfill8_night],[15,global.colorscheme.citiesfill15_night]]

    roads:
        data: { source: local }
        highway-m:
            # apply a function in the filter, the resulting objects are used
            filter: function () { return (feature.p == 6 )}
            draw:
                lines:
                    order: 25
                    color: global.colorscheme.motorway
                    cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                    width: [[5, 0.4px],[10,2px],[15,5px],[20,65px]]
                    outline:
                        color: global.colorscheme.motorway_outline
                        width: [[5, 0.1px],[10, 0.5px],[15,1px],[20,2px]]
        highway-nm:
            filter: function () { return (feature.p == 5 )}
            draw:
                lines:
                    order: 24
                    cap: function(){ if ($zoom >= 14){return 'round'} else { return 'butt'}}
                    color: global.colorscheme.highway
                    width: [[5, 0.4px],[10,2px],[15,5px],[20,65px]]
                    outline:
                        color: global.colorscheme.highway_outline
                        width: [[5, 0.1px],[10, 0.5px],[15,1px]]
        main-roads:
            filter: function() { return feature.p == 4 && $zoom >= 7 ; }
            draw:
                lines:
                    order: 23
                    color: global.colorscheme.main_roads
                    cap: function(){ if ($zoom >= 15){return 'round'} else { return 'butt'}}
                    width: [[7, 0.5px],[10,1px],[15,4px],[20,60px]]
                    outline:
                        color: global.colorscheme.main_roads_outline
                        width: [[5, 0.1px],[10, 0.5px],[15,1px]]
        secondary-roads:
            filter: function() { return feature.p == 3; }
            draw:
                lines:
                    order: 22
                    color: global.colorscheme.secondary_roads
                    cap: function(){ if ($zoom >= 16){return 'round'} else { return 'butt'}}
                    width: [[10, 0.5px],[15,3px],[20,55px]]
                    outline:
                        color: global.colorscheme.secondary_roads_outline
                        width: [[10, 0px],[15, 0.75px]]
        tertiary-roads:
            filter: function() { return feature.p == 2; }
            draw:
                lines:
                    order: 21
                    color: global.colorscheme.tertiary_roads
                    cap: function(){ if ($zoom >= 17){return 'round'} else { return 'butt'}}
                    width: [[12, 0.5px],[15,3px],[20,50px]]
                    outline:
                        color: global.colorscheme.tertiary_roads_outline
                        width: [[12, 0px],[15, 0.5px]]
        streets:
            filter: function() { return feature.p == 1 && $zoom >= 14 ; }
            draw:
                lines:
                    order: 20
                    color:  global.colorscheme.streets
                    cap: function(){ if ($zoom >= 17){return 'round'} else { return 'butt'}}
                    width: [[14, 1px],[15,3.5px],[20,50px]]
                    #outline:
                     #   color: global.colorscheme.streets_outline
                     #   width: 0.5px
                road_text:
                    order: 30
                    text_source: n
                    anchor: center
                    align: center
                    repeat_distance: 1000px
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.road_text
                        size: [[15, 12px],[20, 22px]]
                        stroke: { color: global.colorscheme.road_text_stroke, width: 1.5 }


        labels-highway-z12:
            filter: { $zoom: { min: 12 }, p: [4,5] }
            draw:
                road_text:
                    repeat_group: labels-highway-z12
                    order: 30
                    text_source: n
                    anchor: center
                    align: center
                    repeat_distance: 1000px
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.highway_text
                        size: [[12, 10px],[15,14px],[17, 24px]]
                    #    weight: bold
                        stroke: { color: global.colorscheme.highway_text_border, width: 1.5 }
                urdu_text:
                    repeat_group: labels-highway-z12
                    priority: 3.5
                    visible: true
                    text_source: name_urdu
                    anchor: center
                    align: center
                    offset: [ -20px, 0px ]
                    repeat_distance: 1000px
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.highway_text
                        size: [[12, 10px],[15, 15px]]
                    #    weight: bold
                        stroke: { color: global.colorscheme.highway_text_border, width: 1.5 }

        labels-motorway-route:
            filter: function () { return (feature.p == 6 && $zoom >= 7); }
            draw:
                english_text:
                    priority: 3
                    visible: true
                    text_source: r
                    anchor: center
                    align: center
                    repeat_distance: 1000px
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: white
                        size: [[7, 9px],[15, 17px]]
                        spacing: 50
                        stroke: { color: green, width: [[7, 1.5px],[15, 2px]]  }
        labels-nh-route:
            filter: function () { return (feature.p == 5 && $zoom >= 7 ); }
            draw:
                english_text:
                    priority: 3
                    visible: true
                    text_source: r
                    anchor: center
                    align: center
                    repeat_distance: 1000px
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: white
                        size: [[7, 9px],[15, 17px]]
                        spacing: 50
                        stroke: { color: '#3878c7', width: [[7, 1.5px],[15, 2px]] }
        labels-z14:
            filter: { $zoom: { min: 13 }, p: [2,3] }
            draw:
                road_text:
                    order: 30
                    text_source: n
                    anchor: center
                    align: center
                    collide: true
                    repeat_distance: 1000px
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.road_text
                        size: [[13, 10px],[16,16px],[20, 23px]]
                        stroke: { color: global.colorscheme.road_text_stroke, width: 1.5 }


    scale:
        data: { source: local }
        provinces-6:
            filter: { k: 9, $zoom: [6,7,8] }
            draw:
                english_text:
                    priority: 1
                    anchor: bottom
                    offset: [0,-18px]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.provinces_fill
                        size: [[6,14px],[8,17px]]
                     #   weight: bold
                        stroke: { color: global.colorscheme.provinces_stroke, width: 1 }
                urdu_text:
                    priority: 2
                    anchor: bottom
                    offset: [ 0, 0px ]
                    text_source: s
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.provinces_fill
                        size: [[6,14px],[8,17px]]
                     #   weight: bold
                        stroke: { color: global.colorscheme.provinces_stroke , width: 1 }

        provincial-capitals:
            filter: { k: 5, p: 1, $zoom:  { max: 13 } }
            draw:
                urdu_text:
                    priority: 4
                    anchor: center
                    offset: [ 0, 0px ]
                    text_source: s
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.province_cap_fill
                        size: [[6,13px],[10,18px]]
                      #  weight: bold
                        transform: capitalize
                        stroke: { color: global.colorscheme.province_cap_stroke , width: 1 }
                english_text:
                    priority: 3
                    anchor: center
                    offset: [[6,[0,-17px]],[7,[0,-19px]],[8,[0,-18px]],[9,[0,-20px]],[10,[0,-20px]]]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.province_cap_fill
                        size: [[6,13px],[10,18px]]
                      #  weight: bold
                        transform: capitalize
                        stroke: { color: global.colorscheme.province_cap_stroke , width: 1 }

        major-cities:
            filter: { k: 5, p: 2, $zoom:  { max: 14 }  }
            draw:
                urdu_text:
                    priority: 6
                    anchor: center
                    offset: [ 0, 0px ]
                    text_source: s
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.cities_fill
                        size: [[7,11px],[8,12px],[9,13px],[10,15px],[15,22px]]
                        weight: 400
                        transform: capitalize
                        stroke: { color: global.colorscheme.cities_stroke , width: 1 }
                english_text:
                    priority: 5
                    anchor: center
                    offset: [[7,[0,-13px]],[8,[0,-14.5px]],[9,[0,-17px]],[10,[0,-18px]],[15,[0,-26px]]]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.cities_fill
                        size: [[7,11px],[8,13px],[9,14px],[10,15px],[15,22px]]
                        weight: 400
                        transform: capitalize
                        stroke: { color: global.colorscheme.cities_stroke , width: 1 }
        cities:
            filter: { k: 5, p: 3 , $zoom:  { max: 15 } }
            draw:
                urdu_text:
                    priority: 8
                    anchor: center
                    offset: [ 0, 0px ]
                    text_source: s
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.cities_fill
                        size: [[8,10px],[9,11px],[10,12px],[11,14px],[15,20px]]
                        weight: 350
                        transform: capitalize
                        stroke: { color: global.colorscheme.cities_stroke , width: 1 }
                english_text:
                    priority: 7
                    anchor: center
                    offset: [[8,[0,-12px]],[9,[0,-13.5px]],[10,[0,-14.5px]],[11,[0,-17px]],[15,[0,-23px]]]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.cities_fill
                        size: [[8,10px],[9,12px],[10,13px],[11,14px],[15,20px]]
                        weight: 350
                        transform: capitalize
                        stroke: { color: global.colorscheme.cities_stroke , width: 1 }
        minor-cities1:
            filter: { k: 5, p: [4,5] }
            draw:
                urdu_text:
                    priority: 8
                    anchor: center
                    offset: [ 0, 0px ]
                    text_source: s
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.cities_fill
                        size: [[11,12px],[18,20px]]
                        weight: 300
                        transform: capitalize
                        stroke: { color: global.colorscheme.cities_stroke , width: 1 }
                english_text:
                    priority: 7
                    anchor: center
                    offset: [[11,[0,-14px]],[18,[0,-22px]]]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.cities_fill
                        size: [[11,12px],[18,20px]]
                        weight: 300
                        transform: capitalize
                        stroke: { color: global.colorscheme.cities_stroke , width: 1 }

        areas-sectors:
            filter: { k: [3], p: [1,2,3,4,5] }
            draw:
                english_text:
                    priority: 9
                    anchor: center
                    offset: [ 0, 0px ]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.area_sector_fill
                        size: [[11,12px],[18,20px]]
                        weight: 400
                        style: italic
                        transform: capitalize
                        stroke: { color: global.colorscheme.area_sector_stroke , width: 1 }
        areas-subsectors:
            filter: { k: [1,2], p: [1,2,3,4,5] }
            draw:
                english_text:
                    priority: 9
                    anchor: center
                    offset: [ 0, 0px ]
                    text_source: d
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.area_sector_fill
                        size: [[11,11px],[18,18px]]
                        weight: 400
                        style: italic
                        transform: capitalize
                        stroke: { color: global.colorscheme.area_sector_stroke , width: 1 }

    world_labels:
        data: { source: local }
        country0-34:
            filter: { p: [0], $zoom: [3,4] }
            draw:
                english_text:
                    priority: 3
                    anchor: center
                    offset: [0px,0px]
                    text_source: n
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.country_34
                        size: [[3,10px],[4,13px]]
                     #   weight: bold
                        transform: uppercase
                        stroke: { color: global.colorscheme.country_34_stroke , width: 1 }
                urdu_text:
                    priority: 4
                    anchor: center
                    offset: [[3,[0,9px]],[4,[0,12px]]]
                    text_source: u
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.country_34
                        size: [[3,10px],[4,13px]]
                    #    weight: bold
                        transform: uppercase
                        stroke: { color: global.colorscheme.country_34_stroke , width: 1 }
        country0-567:
            filter: { p: [0], $zoom: [5,6,7] }
            draw:
                english_text:
                    priority: 3
                    anchor: center
                    offset: [0px,0px]
                    text_source: n
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.country_567
                        size: [[5,14px],[7,17px]]
                     #   weight: bold
                        transform: uppercase
                        stroke: { color: global.colorscheme.country_567_stroke , width: 1 }
                urdu_text:
                    priority: 4
                    anchor: center
                    offset: [[5,[0,17px]],[6,[0,18px]] ,[7,[0,22px]]]
                    text_source: u
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.country_567
                        size: [[5,14px],[7,17px]]
                     #   weight: bold
                        transform: uppercase
                        stroke: { color: global.colorscheme.country_567_stroke , width: 1 }
        country1-567:
            filter: { p: [1], $zoom: [5,6,7] }
            draw:
                english_text:
                    priority: 3
                    anchor: center
                    offset: [0px,0px]
                    text_source: n
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.country_567
                        size: [[5,14px],[6,17px],[7,20px]]
                    #    weight: bold
                        transform: uppercase
                        stroke: { color: global.colorscheme.country_567_stroke , width: 1 }
                urdu_text:
                    priority: 4
                    anchor: center
                    offset: [[5,[0,14px]],[6,[0,15px]] ,[7,[0,19px]]]
                    text_source: u
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.country_567
                        size: [[5,14px],[6,17px],[7,20px]]
                    #    weight: bold
                        transform: uppercase
                        stroke: { color: global.colorscheme.country_567_stroke , width: 1 }
        capitals:
            filter: { p: 2, $zoom: [5,6] }
            draw:
                english_text:
                    priority: 4
                    anchor: center
                    offset: [[5,[0,-12px]],[6,[0,-15px]]]
                    text_source: n
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: sans-serif
                        fill: global.colorscheme.capitals
                        size: [[5,12px],[6,14px]]
                     #   weight: bold
                        transform: capitalize
                        stroke: { color: global.colorscheme.capitals_stroke , width: 2 }

    cartographic:
        data: { source: local }
        filter: function() { return global.currentTime != 'satellite'; }
        parks:
            filter: { k: [parks] }
            draw:
                polygons:
                    order: 16
                    color: global.colorscheme.park
        forests:
            filter: { k: [forests] }
            draw:
                polygons:
                    order: 6
                    color: global.colorscheme.grass
        religious_places:
            filter: { k: [religious places] }
            draw:
                polygons:
                    order: 15
                    color: global.colorscheme.religious
        industries:
            filter: { k: [industry] }
            draw:
                polygons:
                    order: 7
                    color: global.colorscheme.industrial
        educational:
            filter: { k: [educational] }
            draw:
                polygons:
                    order: 12
                    color: global.colorscheme.school
        hospitals:
            filter: { k: [hospitals] }
            draw:
                polygons:
                    order: 14
                    color: global.colorscheme.hospital
        graveyards:
            filter: { k: [graveyard] }
            draw:
                polygons:
                    order: 10
                    color: global.colorscheme.cemetery
        runways:
            filter: { k: [runway] }
            draw:
                polygons:
                    order: 13
                    color: global.colorscheme.runway
        port_places:
            filter: { k: [port places] }
            draw:
                polygons:
                    order: 11
                    color: global.colorscheme.port
        parking_places:
            filter: { k: [parking places] }
            draw:
                polygons:
                    order: 17
                    color: global.colorscheme.parking
        water:
            filter: { k: [water]  }
            draw:
                polygons:
                    order: 19
                    color: global.colorscheme.water
        misc:
            filter: { k: [misc] }
            draw:
                polygons:
                    order: 9
                    color: global.colorscheme.misc
        commercial:
            filter: { k: [commercial] }
            draw:
                polygons:
                    order: 8
                    color: global.colorscheme.commercial
    buildings:
        data: { source: local2 }
        filter: function(){return (global.buildingStatus == true) }
        buildings_day:
            data: { source: local2, layer: buildings }
            filter: function() { return (feature.material == "solid"|| feature.material == "Solid"|| feature.material == "Solid Lines" ||feature.material == "solid_lines") && (global.currentTime == 'day' && global.currentVersion == 'high') ; }
            draw:
                earth:
                    order: 30
                    style: solidbuildings_day
                    color: function () { return (feature.color); }
                    visible: true
                    extrude: true

        buildingsWindows_day:
            data: { source: local2, layer: buildings}
            filter: function() { return (feature.material == "Solid Window" || feature.material == "Solid windows"|| feature.material == "solid_windows" || feature.material == "Solid Windows")  && (global.currentTime == 'day' && global.currentVersion == 'high') ; }
            draw:
                earth:
                    order: 30
                    style: cBuildingWindows_day
                    color: function () { return (feature.color); }
                    extrude: true

        gbuildings_day:
            data: { source: local2, layer: buildings}
            filter: function() { return  (feature.material == "glass")  && (global.currentTime == 'day' && global.currentVersion == 'high') ; }
            draw:
                earth:
                    order: 30
                    style: glassBuilding_day
                    color: function () { return (feature.color); }
                    extrude: true

        buildings_night:
            data: { source: local2, layer: buildings }
            filter: function() { return (feature.material == "solid"|| feature.material == "Solid"|| feature.material == "Solid Lines" ||feature.material == "solid_lines") && (global.currentTime == 'night' && global.currentVersion == 'high') ; }
            draw:
                earth:
                    order: 30
                    style: solidbuildings_night
                    color: function () { return (feature.color); }
                    visible: true
                    extrude: true

        buildingsWindows_night:
            data: { source: local2, layer: buildings}
            filter: function() { return (feature.material == "Solid Window" || feature.material == "Solid windows"|| feature.material == "solid_windows" || feature.material == "Solid Windows")  && (global.currentTime == 'night' && global.currentVersion == 'high') ; }
            draw:
                earth:
                    order: 30
                    style: cBuildingWindows_night
                    color: function () { return (feature.color); }
                    extrude: true

        gbuildings_night:
            data: { source: local2, layer: buildings}
            filter: function() { return  (feature.material == "glass")  && (global.currentTime == 'night' && global.currentVersion == 'high') ; }
            draw:
                earth:
                    order: 30
                    style: glassBuilding_night
                    color: function () { return (feature.color); }
                    extrude: true
        buildings_day_low:
            data: { source: local2, layer: buildings }
            filter: function() { return (feature.material == "solid"|| feature.material == "Solid"|| feature.material == "Solid Lines" ||feature.material == "solid_lines" || feature.material == "Solid Window" || feature.material == "Solid windows"|| feature.material == "solid_windows" || feature.material == "Solid Windows" || feature.material == "glass") && (global.currentTime == 'day' && global.currentVersion == 'low') ; }
            draw:
                earth:
                    order: 30
                    style: solidbuildings_day
                    color: function () { return (feature.color); }
                    visible: true
                    extrude: true
        buildings_night_low:
            data: { source: local2, layer: buildings }
            filter: function() { return (feature.material == "solid"|| feature.material == "Solid"|| feature.material == "Solid Lines" ||feature.material == "solid_lines" || feature.material == "Solid Window" || feature.material == "Solid windows"|| feature.material == "solid_windows" || feature.material == "Solid Windows" || feature.material == "glass") && (global.currentTime == 'night' && global.currentVersion == 'low') ; }
            draw:
                earth:
                    order: 30
                    style: solidbuildings_night
                    color: function () { return (feature.color); }
                    visible: true
                    extrude: true

    carto_labels:
        data: { source: local }
        water:
            filter: { k: 'water' }
            labels-generic:
                draw:
                    english_text:
                        priority: 4
                        anchor: center
                        align: center
                        visible: true
                        text_source: n
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        font:
                            family: Helvetica
                            size:  [[7, 9px], [10, 10px],[14,14px],[15,16px] ]
                            fill: global.colorscheme.water_fill
                            style: italic
                            stroke: { color: global.colorscheme.water_stroke , width: 1 }
        parks:
            filter: { k: ['parks','forests'] }
            labels-generic:
                draw:
                    english_text:
                        priority: 4
                        anchor: center
                        align: center
                        visible: true
    #                    collide: false
                        text_source: n
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        font:
                            family: Helvetica
                            size:  [[4, 9px],[15,14px] ]
                            fill: global.colorscheme.parks_fill
                            style: italic
                            stroke: { color: global.colorscheme.parks_stroke , width: 0.5 }


        labels-a12:
            filter: { a : [1,2] }
            draw:
                english_text:
                    priority: 4
                    anchor: center
                    align: center
                    visible: true
                    text_source: n
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: Helvetica
                        size:  [[10, 10px], [12, 14px],[14,10px],[15,10px] ]
                        fill: '#888'
                        stroke: { color: '#FFFFFF' , width: 1 }

    waterways-labels:
        data: { source: local , layer: waterways }
        filter: { $zoom:  { min: 13 } , n: true }
        labels:
            filter: function() { return feature.n.slice(0, 1) != '?' && feature.n != 'Korang River' }
            draw:
                english_text:
                    priority: 4
                    anchor: center
                    align: center
                    visible: true
                    repeat_distance: 1000px
                    text_source: n
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    font:
                        family: Helvetica
                        size:  [[7, 9px], [10, 10px],[14,14px],[15,16px] ]
                        fill: global.colorscheme.water_fill
                        style: italic
                        transform: capitalize
                        stroke: { color: global.colorscheme.water_stroke , width: 1 }
    waterways-z5:
        data: { source: local, layer: waterways }
        filter: { $zoom:  { max: 8 } }
        draw:
            lines:
                order: 18
                color: global.colorscheme.water
                width: [[5,1px],[7,2px]]
    waterways:
        data: { source: local }
        filter: function() { return feature.n != '????' && $zoom >= 10 && global.currentTime != 'satellite'  }
        draw:
            lines:
                order: 18
                color: global.colorscheme.water
                width: [[12,2px],[20,20px]]
        rivers:
            filter: { t: [river] }
            draw:
                lines:
                    order: 18
                    color: global.colorscheme.water
                    width: [[10,2px],[20,20px]]
        streams:
            filter: { t: [stream] }
            draw:
                lines:
                    order: 18
                    color: global.colorscheme.water
                    width: [[12,2px],[20,15px]]
    railways:
        data: { source: local }
        draw:
            dashedline:
                order: 25
                color: [0, 0, 0]
                width: 2px
    pois:
        data: { source: local-pois }
        filter: function(){ return global.poiStatus == true}
        poisiconsandtext:
            filter: { $zoom: [10,11,12,13,14,15,16,17] , z: [12,13,14,15,16,17,18,19] }
            draw:
                icons:
                    interactive: true
                    priority: 10
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    sprite: |
                        function() {
                            if(feature.s == null)
                            {
                              return 'othergeneral';
                            }
                            else
                            {
                              var str = feature.s;
                              str = str.replace(/\s+/g,'');
                              str = str.replace(/\&+/g,'');
                              str = str.replace(/\/+/g,'');
                              str = str.replace(/\-+/g,'');
                              return str.toLowerCase();
                            }
                            }
                    size: [[10, 13px], [20, 20px]]
                    text:
                        buffer: 20px
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        text_source: |
                            function() {
                                if (feature.d && feature.d.length > 30) {
                                    return feature.d.slice(0, 30) + '…';
                                }
                                return feature.d;
                            }
                        font:
                            family: sans-serif
                            fill: global.colorscheme.poi_fill
                            size: [[10, 12px], [18, 15px]]
                            stroke: { color: global.colorscheme.poi_stroke , width: 1.5 }

        poisiconsandtext-18:
            filter: { $zoom: [18] , z: [12,13,14,15,16,17,18,19,20] }
            draw:
                icons:
                    interactive: true
                    priority: 10
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    sprite: |
                        function() {
                            if(feature.s == null)
                            {
                              return 'othergeneral';
                            }
                            else
                            {
                              var str = feature.s;
                              str = str.replace(/\s+/g,'');
                              str = str.replace(/\&+/g,'');
                              str = str.replace(/\/+/g,'');
                              str = str.replace(/\-+/g,'');
                              return str.toLowerCase();
                            }
                            }
                    size: [[10, 13px], [20, 20px]]
                    text:
                        buffer: 20px
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        text_source: |
                                function() {
                                    if (feature.d && feature.d.length > 30) {
                                        return feature.d.slice(0, 30) + '…';
                                    }
                                    return feature.d;
                                }
                        font:
                            family: sans-serif
                            fill: global.colorscheme.poi_fill
                            size: [[10, 12px], [18, 15px]]
                            stroke: { color: global.colorscheme.poi_stroke , width: 1.5 }

        poisiconsandtext-19:
            filter: { $zoom: [19,20,21] , z: [12,13,14,15,16,17,18,19,20,21] }
            draw:
                icons:
                    interactive: true
                    priority: 10
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    sprite: |
                         function() {
                             if(feature.s == null)
                             {
                               return 'othergeneral';
                             }
                             else
                             {
                               var str = feature.s;
                               str = str.replace(/\s+/g,'');
                               str = str.replace(/\&+/g,'');
                               str = str.replace(/\/+/g,'');
                               str = str.replace(/\-+/g,'');
                               return str.toLowerCase();
                             }
                             }
                    size: [[10, 13px], [20, 20px]]
                    text:
                        buffer: 20px
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        text_source: |
                                function() {
                                    if (feature.d && feature.d.length > 30) {
                                        return feature.d.slice(0, 30) + '…';
                                    }
                                    return feature.d;
                                }
                        font:
                            family: sans-serif
                            fill: global.colorscheme.poi_fill
                            size: [[10, 12px], [18, 15px]]
                            stroke: { color: global.colorscheme.poi_stroke , width: 1.5 }

    search-pois:
        data: { source: search-pois }
        filter: function(){ return global.poiStatus == true}
        pinmarker:
            filter: { type: pinmarker }
            draw:
                pinmarker:
                    priority: 1
                    #transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    sprite: SPRITE
                    size: [[12, 44px], [15, 44px]]
                    interactive: true

        search_object:
            draw:
                search_icons:
                    interactive: true
                    priority: 2
                    transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                    sprite: |
                        function() {
                            if(feature.sub_cat == null)
                            {
                              return 'search_othergeneral';
                            }
                            else
                            {
                              var str = feature.sub_cat;
                              if (str.search("-se") != -1) {
                                  str = "search_" + str;
                                  var pos = str.search("-se");
                                  str = str.substring(0,pos);
                              }
                              str = str.replace(/\s+/g,'');
                              str = str.replace(/\&+/g,'');
                              str = str.replace(/\/+/g,'');
                              str = str.replace(/\-+/g,'');
                              return str.toLowerCase();
                            }

                            }
                    size: [[10, 15px], [20, 20px]]
                    text:
                        transition: { show: { time: 0.5s }, hide: { time: 0.55s } }
                        text_source: |
                                function() {
                                    if (feature.display_na && feature.display_na.length > 30) {
                                        return feature.display_na.slice(0, 30) + '…';
                                    }
                                    return feature.display_na;
                                }
                        font:
                            family: sans-serif
                            fill: global.colorscheme.poi_fill
                            size: 12px
                            stroke: { color: global.colorscheme.search_poi_stroke , width: 1.5 }
