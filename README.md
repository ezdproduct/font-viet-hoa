# UTM Fonts Collection

Bộ sưu tập các font UTM (Unicode Thiên Minh) phổ biến, đã được tích hợp sẵn CSS để dễ dàng sử dụng trong các dự án Web.

## Cấu trúc dự án
- `fonts/`: Chứa tất cả các file font gốc (.ttf).
- `index.css`: File định nghĩa `@font-face` cho toàn bộ font.
- `preview.html`: Trang xem trước tất cả các font một cách trực quan.

## Cách sử dụng

### 1. Sử dụng qua CDN (Khuyên dùng)
Bạn có thể nhúng trực tiếp vào file HTML thông qua JSDelivr để đạt tốc độ tải nhanh nhất (thay `username/repo` bằng tên repo của bạn trên GitHub):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ezdproduct/font-viet-hoa@main/index.css">
```

Sau đó sử dụng font-family tương ứng trong CSS của dự án bạn:

```css
body {
    font-family: 'UTM Avo', sans-serif;
}
```

### 2. Sử dụng trong project Node.js / React / Next.js
Nếu bạn cài đặt từ git (hoặc publish lên npm):

```bash
npm install git+https://github.com/ezdproduct/font-viet-hoa.git
```

Sau đó import vào dự án:

```javascript
import 'font-utm-full/index.css';
```

### 3. Clone và sử dụng local
Clone repo này về máy:
```bash
git clone https://github.com/ezdproduct/font-viet-hoa.git
```
Tham chiếu đến file `index.css` trong project của bạn.

## Danh sách Font
Mở file `preview.html` trong trình duyệt để xem demo và danh sách font-family chính xác.

## Cập nhật
Mỗi khi bạn thêm font mới vào thư mục `fonts/`, hãy chạy lệnh sau để cập nhật lại `index.css` và `preview.html`:
```bash
npm run generate
```
