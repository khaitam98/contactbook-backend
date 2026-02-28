const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error"); // Đảm bảo bạn đã tạo file này
const contactRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.send("Chào mừng đến với ContactBook API!");
});

// Gắn các route của contact
app.use("/api/contacts", contactRouter);

// Middleware xử lý lỗi 404 (Không tìm thấy tài nguyên)
app.use((req, res, next) => {
  // Khi không có route nào khớp, middleware này sẽ được gọi
  return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lỗi tập trung
app.use((err, req, res, next) => {
  // Trả về mã lỗi và thông báo lỗi một cách thống nhất
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;