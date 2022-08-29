# Quy trình dự án Shop quần áo thời trang Dragon fashions

# Mục đích của dự án

- Mục đích dự án thương mai điện tử hóa shop thời trang có tên là Dragon Fashion
- Hướng tới phân khúc khách hàng trẻ có gu ăn mặc và phong cách thời trang hiện đại thuộc thế hệ gen Z cuối 9x đầu 2K
- Sản phẩm chất lượng mẫu mã đa dạng và giá thành phù hợp với các bạn học sinh sinh viên và tầng lớp trẻ thu nhập trung bình
- Nguồn hàng đảm bảo uy tín chất lượng cao

# Tính năng của Website

- Đăng nhập, đăng ký thành viên để mua hàng
- chức năng giỏ hàng để thêm bớt sửa xóa sản phẩm muốn mua
- Thanh toán tự động bằng thẻ ngân hàng và visa cá nhân
- Hệ thống nhận đơn hàng triển khai lên đơn và liên hệ với các đơn vị vận chuyển để đưa hàng đến tay người tiêu dùng nhanh và chích xác nhất

# Công nghệ sữ dụng

- font end: sữ dụng công nghệ react js kết hợp react-router để buil giao diện trang web, áp dụng CSS3 + SASS, HTML5 + JSX, REDUX để quản lý dữ liệu toàn cục cho ứng dụng
- Back end: sữ dụng nền tảng cơ sở dữ liệu trực tuyến của google đó là fire base để lưu trữ và quản lý dữ liệu khách hàng phía server, dung tính năng thanh toán của spire để áp dụng cho các tính năng thanh toán
<!-- ///////////////////////////////////////////////// -->

# Quy trình thực hiện dự án từ đầu đến khi buil ra sản phẩm lên production

# Bước 1: Khởi tạo dự án react nhanh với bộ công cụ create-react-app

- ngày bắt đâu triễn khai 26/08/2022
- ngày hoàn thành 26/08/2022
- tạo thư mục "thuongmaidientu' => cmd => nhập câu lệnh => npx create-react-app
- Hoàn thành khởi tạo dự án

# Bước 2: Tiến hành tạo khung app container cho trang Home

- cài đặt sass cho dự án: npm install sass => sau khi cài đặt sass react và webpack tự động cofig sass bên dưới cho dự án
- tạo các file có cấu trúc như sau: categories.style.scss sau đó import và các componet tương ứng để style cho chúng

# Bước tiến hành component hóa cho ứng dụng:

- Triển khai cấu trúc thư mục mới: tạo fodel mới có tên là componets trong thư mục src
- Tao fodel category-item: tạo hai file category-item.component.jsx và category-item.styles.scss => Triển khai cấu trúc trong từ file
- Tạo fodel directory để import component CategoryItem

# Sữ dụng thư viện React-router để điều hướng các page cho ứng dụng

- cài đặt:
  cd router-tutorial
  npm install react-router-dom@6
- Tiến hành sữ dụng react router:

* Trong index.js import react-router-dom: sữ dụng components <BrowserRouter> bọc component App
* Trong app.js import { Routes, Route } from "react-router-dom" và thêm thuộc tính patch và element giống file đã code
* Triển khai chế độ router chidrenl cho Home page
