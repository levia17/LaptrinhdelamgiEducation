// Import cors and express
const cors = require('cors');
const express = require('express');
const app = express();

// Cấu hình CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Cho phép các request đến từ địa chỉ này
};

// Sử dụng CORS với cấu hình đã định nghĩa
app.use(cors(corsOptions));
