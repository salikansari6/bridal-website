 const products = [
    {   
        id:1,   
        name:'Teal Blue Wedding Saree',
        price: 35000,
        color:'blue',
        size: "US 2",
        imageURL:['https://www.kollybollyethnics.com/image/catalog/data/11Jan2019/Rama-barfi-silk-indian-wedding-saree-60007-4.jpg',
                'https://www.kollybollyethnics.com/image/catalog/data/11Jan2019/Rama-barfi-silk-indian-wedding-saree-60007.jpg',
                'https://www.kollybollyethnics.com/image/catalog/data/11Jan2019/Rama-barfi-silk-indian-wedding-saree-60007-3.jpg',
                    'https://www.kollybollyethnics.com/image/catalog/data/11Jan2019/Rama-barfi-silk-indian-wedding-saree-60007-1.jpg']
    },
    {   
        id:2,
        name:'Embroidered Red Bridal Lehenga',
        price: 60000,
        color:'red',
        size:'US 8',
        imageURL:['https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2003lg03-1003.jpg',
            'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2003lg03-1003-1.jpg',
            'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2003lg03-1003-3.jpg',
            'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2003lg03-1003-2.jpg'
]
    },
    {   
        id:3,
        name:'Embroidered Vine Bridal Lehenga',
        price: 47300,
        color:'violet',
        imageURL:['https://i.pinimg.com/originals/d0/fa/85/d0fa85784d83f0ceba26fcdd8af548e7.png',
    'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/212/014/new_large/Sabyasachi_Autumn_Winter_2017_Collection-_Gulkand_Collection___284_29.jpg?1522921080',
'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/212/016/new_large/Sabyasachi_Autumn_Winter_2017_Collection-_Gulkand_Collection___285_29.jpg?1522921084',
'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/212/011/new_large/Sabyasachi_Autumn_Winter_2017_Collection-_Gulkand_Collection___283_29.jpg?1522921078']
    },
    {   
        id:4,
        name:'Embroidered Rose Gold Bridal Lehenga',
        price: 47300,
        color:'rose gold',
        imageURL: ['https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/3/3/3326_1_.jpg',
    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/3/3326_2_.jpg']
    },
    {   
        id:5,
        name:'Embroidered Green Bridal Lehenga',
        price: 56000,
        color:'green',
        imageURL: ['https://www.ethnicplus.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1004_a_-_copy.jpg',
    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1004_a.1_-_copy.jpg',
'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1004_a.1.jpg',
'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1004_a.jpg']
    },
    {   
        id:6,
        name:'Embroidered Blue Bridal Lehenga',
        price: 60000,
        color:'blue',
        imageURL: ['https://www.ethnicplus.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1004_b_-_copy.jpg',
                    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1004_b.1.jpg',
                    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1004_b.1_-_copy.jpg',
                    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/1004_b.jpg']
    },
    {   
        id:7,
        name:'Embroidered Pink Bridal Lehenga',
        price: 69420,
        color:'pink',
        imageURL: ['https://assets.panashindia.com/media/catalog/product/cache/4/image/479x671/9df78eab33525d08d6e5fb8d27136e95/1/9/1932lg04-cindrella-2304.jpg',
        'https://assets.panashindia.com/media/catalog/product/cache/4/image/479x671/9df78eab33525d08d6e5fb8d27136e95/1/9/1932lg04-cindrella-2304-1.jpg',
        'https://assets.panashindia.com/media/catalog/product/cache/4/image/479x671/9df78eab33525d08d6e5fb8d27136e95/1/9/1932lg04-cindrella-2304-2.jpg']
    },
    {   
        id:8,
        name:'Embroidered Orange Bridal Lehenga',
        price: 57199,
        color:'pink',
        imageURL: ['https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/7/2/7207_4_.jpg',
            'https://www.ethnicplus.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/2/7207_1_.jpg',
                    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/7/2/7207_3_.jpg',
                    'https://www.ethnicplus.in/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/7/2/7207_2_.jpg']
    },
    {   
        id:9,
        name:'Black Wedding Saree',
        price: 47300,
        color:'black',
        imageURL: ['https://www.ethnictrendz.com/image/cache/data/black-bridal-art-silk-traditional-designer-saree-5254-800x1100.jpg',
            'https://www.ethnictrendz.com/image/data/black-bridal-art-silk-traditional-designer-saree-5254-0.jpg',
            'https://www.ethnictrendz.com/image/data/black-bridal-art-silk-traditional-designer-saree-5254-1.jpg'
                    ]
    },
    
    {   
        id:10,
        name:'Navy Blue Banarasi Silk Lehenga',
        price: 47300,
        fabric:"Banarasi Silk",
        color:'blue',
        imageURL: ['https://i.pinimg.com/originals/7a/07/e0/7a07e0c9a994caaf695d63761155a11f.jpg',
            'https://i.pinimg.com/564x/cd/bc/83/cdbc836617de6355c728bf097dee6e81.jpg',
                    ]
    },
    {   
        id:11,
        name:'Embroidered Brown Lehenga with Jacket',
        price: 7599,
        style:'Jacket Style',
        color:'brown',
        imageURL: ['https://assets.panashindia.com/media/catalog/product/cache/4/image/479x671/9df78eab33525d08d6e5fb8d27136e95/2/7/2751lg05-5408lg.jpg',
            "https://assets.panashindia.com/media/catalog/product/cache/4/image/479x671/9df78eab33525d08d6e5fb8d27136e95/2/7/2751lg05-5408lg-2.jpg",
                    ]
    },
    {   
        id:12,
        name:'Light Peach Designer',
        price: 7599,
        style:'Designer',
        color:'peach',
        imageURL: [
            "//cdn.shopify.com/s/files/1/1105/1322/products/Light_Peach_Designer_Heavy_Embroidered_Net_Wedding_Sharara_Suit_-_Saira_s_Boutique_53ca9e16-048c-440b-ab26-2dd616db38de.jpg?v=1581052148",
            '//cdn.shopify.com/s/files/1/1105/1322/products/Light_Peach_Designer_Heavy_Embroidered_Net_Wedding_Sharara_Suit_1_-_Saira_s_Boutique_compact.jpg?v=1581052154',
                    ]
    },
    {   
        id:13,
        name:'Olive Green Embroidered ',
        price: 7599,
        style:'Designer',
        color:'green',
        imageURL:[
            "https://cdn1.ninecolours.com/image/cache/products-2018/Sep-2019/Georgette-Embroidery-Sharara-Suit-In-Olive-Green-Colour-SM000881740-A-1200x1799.jpg",
            "https://cdn1.ninecolours.com/image/cache/products-2018/Sep-2019/Georgette-Embroidery-Sharara-Suit-In-Olive-Green-Colour-SM000881740-B-1200x1799.jpg",
                    ]
    },

]


module.exports={
    products
}