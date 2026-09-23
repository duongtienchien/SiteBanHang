const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const products = require('./data/product.json');

app.get('/', (req, res) => {
  const categories = [
    { name: 'Tất cả', active: true },
    { name: 'Kem dưỡng ẩm', active: false },
    { name: 'Son môi', active: false },
    { name: 'Sơn móng tay', active: false },
    { name: 'Trang điểm', active: false },
    { name: 'Dưỡng tóc', active: false }
  ];

  res.render('index', { products, categories });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server chạy tại: http://localhost:${PORT}`);
});