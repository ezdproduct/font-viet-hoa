# UTM Fonts Collection

Bộ sưu tập các font UTM (Unicode Thiên Minh) phổ biến, đã được tích hợp sẵn CSS để dễ dàng sử dụng trong các dự án Web.

## Cách sử dụng

### 1. Cài đặt qua NPM (Nếu bạn publish lên NPM)
Nếu kho này được publish lên NPM, bạn có thể cài đặt bằng lệnh:

```bash
npm install font-utm-full
```

Sau đó import vào file CSS/JS của bạn:

```javascript
import 'font-utm-full/index.css';
```

### 2. Sử dụng qua GitHub Raw (CDN)
Bạn có thể nhúng trực tiếp vào file HTML thông qua link raw của GitHub (thay `username/repo` bằng đường dẫn thực tế của bạn):

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/username/repo/main/index.css">
```

Hoặc qua JSDelivr (khuyên dùng vì nhanh hơn):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/username/repo@main/index.css">
```

### 3. Clone và sử dụng local
Clone repo này về máy và copy các file font vào dự án của bạn, hoặc tham chiếu trực tiếp đến `index.css`.

## Danh sách Font
Mở file `preview.html` để xem trước tất cả các font có trong bộ sưu tập này.

## Cấu trúc
- `Font UTM Full/`: Thư mục chứa các file font (.ttf).
- `index.css`: File định nghĩa `@font-face` cho toàn bộ font.
