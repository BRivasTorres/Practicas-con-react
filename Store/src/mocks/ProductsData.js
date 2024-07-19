const productsData = [
    {
        id: 0,
        attributes: {
            title: "avant-garde lamp",
            company: "Modenza",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: true,
            category: "Kids",
            image: "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "179.99",
            shipping: false,
            colors: ["#33FF57", "#3366FF"],
        },
    },
    {
        id: 1,
        attributes: {
            title: "chic chair",
            company: "Luxora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Chairs",
            image: "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "339.99",
            shipping: true,
            colors: ["#FF5733", "#33FF57", "#3366FF"],
        },
    },
    {
        id: 2,
        attributes: {
            title: "coffee table",
            company: "Modenza",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: true,
            category: "Tables",
            image: "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            price: "179.99",
            shipping: false,
            colors: ["#FF5733", "#FFFF00"],
        },
    },
    {
        id: 3,
        attributes: {
            title: "comfy bed",
            company: "Homestead",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: true,
            category: "Beds",
            image: "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "129.99",
            shipping: false,
            colors: ["#FF5733"],
        },
    },
    {
        id: 4,
        attributes: {
            title: "contemporary sofa",
            company: "Comfora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Sofas",
            image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "159.99",
            shipping: false,
            colors: ["#FFFF00"],
        },
    },
    {
        id: 5,
        attributes: {
            title: "cutting-edge bed",
            company: "Homestead",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Beds",
            image: "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "84.99",
            shipping: true,
            colors: ["#FFFF00", "#3366FF"],
        },
    },
    {
        id: 6,
        attributes: {
            title: "futuristic shelves",
            company: "Luxora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Kids",
            image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "94.99",
            shipping: true,
            colors: ["#33FF57", "#FFFF00"],
        },
    },
    {
        id: 7,
        attributes: {
            title: "glass table",
            company: "Modenza",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Tables",
            image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "159.99",
            shipping: false,
            colors: ["#FF5733", "#3366FF"],
        },
    },
    {
        id: 8,
        attributes: {
            title: "King Bed",
            company: "Homestead",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Beds",
            image: "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "189.99",
            shipping: true,
            colors: ["#FF5733"],
        },
    },
    {
        id: 9,
        attributes: {
            title: "Lounge Chair",
            company: "Luxora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Chairs",
            image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "259.99",
            shipping: false,
            colors: ["#FF5733", "#33FF57", "#3366FF"],
        },
    },
    {
        id: 10,
        attributes: {
            title: "Minimalist Shelves",
            company: "Artifex",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Kids",
            image: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "439.99",
            shipping: false,
            colors: ["#FF5733", "#FFFF00"],
        },
    },
    {
        id: 11,
        attributes: {
            title: "modern sofa",
            company: "Comfora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Sofas",
            image: "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            price: "299.99",
            shipping: false,
            colors: ["#FF5733", "#33FF57", "#FFFF00"],
        },
    },
    {
        id: 12,
        attributes: {
            title: "modern table",
            company: "Modenza",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Tables",
            image: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "389.99",
            shipping: true,
            colors: ["#33FF57", "#3366FF"],
        },
    },
    {
        id: 13,
        attributes: {
            title: "reclining sofa",
            company: "Comfora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Sofas",
            image: "https://images.pexels.com/photos/4316737/pexels-photo-4316737.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "329.99",
            shipping: false,
            colors: ["#FF5733", "#33FF57", "#3366FF", "#FFFF00"],
        },
    },
    {
        id: 14,
        attributes: {
            title: "Sectional Sofa",
            company: "Comfora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Sofas",
            image: "https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "359.99",
            shipping: true,
            colors: ["#FF5733", "#33FF57", "#3366FF", "#FFFF00"],
        },
    },
    {
        id: 15,
        attributes: {
            title: "sleek bed",
            company: "Homestead",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Beds",
            image: "https://images.pexels.com/photos/16869701/pexels-photo-16869701/free-photo-of-modern-luxury-real-estate-property-interior-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "539.99",
            shipping: true,
            colors: ["#FFFF00", "#3366FF"],
        },
    },
    {
        id: 16,
        attributes: {
            title: "sleek chair",
            company: "Luxora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Chairs",
            image: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "199.99",
            shipping: false,
            colors: ["#FF5733", "#33FF57", "#3366FF", "#FFFF00"],
        },
    },
    {
        id: 17,
        attributes: {
            title: "streamlined table",
            company: "Modenza",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Tables",
            image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "209.99",
            shipping: true,
            colors: ["#FF5733", "#3366FF"],
        },
    },
    {
        id: 18,
        attributes: {
            title: "stylish bed",
            company: "Homestead",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Beds",
            image: "https://images.pexels.com/photos/6758398/pexels-photo-6758398.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "169.99",
            shipping: true,
            colors: ["#FF5733"],
        },
    },
    {
        id: 19,
        attributes: {
            title: "Toy Shelf",
            company: "Luxora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Kids",
            image: "https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "79.99",
            shipping: false,
            colors: ["#33FF57", "#FFFF00"],
        },
    },
    {
        id: 20,
        attributes: {
            title: "velvet sofa",
            company: "Luxora",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Chairs",
            image: "https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg?auto=compress&cs=tinysrgb&w=1600",
            price: "289.99",
            shipping: true,
            colors: ["#FF5733", "#33FF57", "#FFFF00"],
        },
    },
    {
        id: 21,
        attributes: {
            title: "wooden shelves",
            company: "Artifex",
            description:
				"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            featured: false,
            category: "Kids",
            image: "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            price: "119.99",
            shipping: true,
            colors: ["#33FF57", "#3366FF"],
        },
    },
];

export default productsData