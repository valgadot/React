const products = [
    {
        id: 30,
        name: "Aceite esencial de Lavanda, 60ml.", 
        stock: 1,
        cost: 560,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 1000,
        image: [
            "https://i.imgur.com/v1Ul2U9.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 9,
        brandId: 95,
        packingId: null,
        category: {
            name: "Aceites",
            id: 9
        },
        brand: {
            id:95, 
            name: "Herbalessence"
        },
        reviews: []
    },

    {
        id: 29,
        name: "Aceite esencial de Romero, 60ml.", 
        stock: 5,
        cost: 600,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 1000,
        image: [
            "https://i.imgur.com/AUjVVa8.jpg"
            
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 9,
        brandId: 95,
        packingId: null,
        category: {
            name: "Aceites",
            id: 9
        },
        brand: {
            id:95, 
            name: "Herbalessence"
        },
        reviews: [
            {
            "comment": "Me ayuda mucho con el crecimiento de mi cabello, lo deja suave, recomiendo.",
            "rating": "10",
        }
    ]
    },
    {
        id: 76,
        name: "Kit de aceites Digestivos, 100 ml.", 
        stock: 10,
        cost: 1500,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 50,
        image: [
            "https://i.imgur.com/C8wXwPA.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 9,
        brandId: 95,
        packingId: null,
        category: {
            name: "Aceites",
            id: 9
        },
        brand: {
            id:95, 
            name: "Doterra"
        },
        reviews: [
            {
                "comment": "Excelentes resultados, muy duraderos.",
                "rating": "7",
            }
        ]
    },
    {
        id: 170,
        name: "Cristal de Celestita pulido", 
        stock: 20,
        cost: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 100,
        image: [
            "https://i.imgur.com/qZaFTxI.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Cristales",
            id: 9
        },
        brand: {
            id:10, 
            name: "TheHoodwitch"
        },
        reviews: []
    },
    {
        id: 233,
        name: "Collar Lapizlazuli", 
        stock: 5,
        cost: 1600,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 50,
        image: [
            "https://i.imgur.com/mp956LQ.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Cristales",
            id: 1
        },
        brand: {
            id:10, 
            name: "TheHoodwitch"
        },
        reviews: []
    },
    {
        id: 139,
        name: "Tarot for Lovers E. W. Neville", 
        stock: 10,
        cost: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 20,
        image: [
            "https://i.imgur.com/nAJhUXI.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Libros",
            id: 5
        },
        brand: {
            id:10, 
            name: "Editorial Neville"
        },
        reviews: []
    },{
        id: 260,
        name: "El hombre y sus símbolos, de Carl Jung", 
        stock: 5,
        cost: 1600,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 50,
        image: [
            "https://i.imgur.com/dIEsx2E.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Libros",
            id: 5,
        },
        brand: {
            id: 12, 
            name: "Editorial Estrella"
        },
        reviews: []
    },{
        id: 222,
        name: "Cristal Selenita", 
        stock: 7,
        cost: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 50,
        image: [
            "https://i.imgur.com/UHcXdZ3.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Cristales",
            id: 1
        },
        brand: {
            id:10, 
            name: "TheHoodwitch"
        },
        reviews: []
    },{
        id: 135,
        name: "Cómo leer el Aura de W. E. Butler", 
        stock: 5,
        cost: 1600,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 50,
        image: [
            "https://i.imgur.com/i48DuSk.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Libros",
            id: 5,
        },
        brand: {
            id:12, 
            name: "Editorial Estrella"
        },
        reviews: []
    },{
        id: 31,
        name: "Kit de sahumos de salvia, romero y lavanda", 
        stock: 3,
        cost: 400,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        capacity: 40,
        image: [
            "https://i.imgur.com/rcLk8YR.jpg"
        ],
        sales:0,
        createdAt: "2022-12-11S5:17:30:342Z",
        updatedAt: "2022-12-11S5:20:45:232Z",
        categoryId: 1,
        brandId: 10,
        packingId: null,
        category: {
            name: "Sahumos",
            id: 1
        },
        brand: {
            id:10, 
            name: "TheHoodwitch"
        },
        reviews: []
    },
];
 
module.exports = {
    products,
}
