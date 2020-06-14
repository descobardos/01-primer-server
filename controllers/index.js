
const items = [
    {id: 1, name: 'Consolas 100001'},
    {id: 2, name: 'Telefonos Iphone 100002'},
    {id: 3, name: 'Cargadores Universales 100003'}
];

const index = (req, res, next) => {
    res.render('index', {
        title: 'My WebStore'
    });
};

const ListOfProducts = (req, res, next) => {
    res.render('products', {
        title: 'List of Products',
        items: items
    });
};

const newProduct = (req, res, next) => {
    const {newItem} = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');

};


module.exports = {
    index,
    ListOfProducts,
    newProduct
};