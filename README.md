# AIWorkoutCoach

1 virtual assistant for workout guidance and advice

https://github.com/duocmmo/ReactJs-Super

## Product function:

- Authentication module: Quản lý bằng JWT

  - Đăng ký
  - Đăng nhập
  - Đăng xuất

- Trang danh sách sản phẩm:

  - Có phân trang
  - Sort (sắp xếp) theo từng thuộc tính sản phẩm
  - filter nâng cao theo từng thuộc tính sản phẩm
  - Tìm kiếm sản phẩm

- Trang chi tiết sản phẩm:

  - Hiển thị thông tin chi tiết
  - Ảnh hiển thị theo slider + hover zoom effect
  - Mô tả thì hiển thị rich text dạng WYSIWYG HTML
  - Có chức năng mua hàng

- Giỏ hàng

  - Quản lý đơn hàng: Thêm, sửa, xóa sản phẩm
  - Mua hàng

- Quản lý Profile khách hàng

  - Update thông tin cá nhân
  - Upload Avatar
  - Đổi mật khẩu
  - Xem tình trạng đơn hàng

## Công nghệ sử dụng

- UI/CSS Library: Tailwindcss + HeadlessUI
- State Management: React Query cho async state và React Context cho state thường
- Form Management: React Hook Form
- Router: React Router
- Build tool: Vite
- API: Rest API dựa trên server mình cung cấp sẵn
- Hỗ trợ đa ngôn ngữ với react.i18next
- Hỗ trợ SEO với REACT Helmet
- Mô hình hóa các component với story book
- Unit Test

## Cài đặt package cho dự án Vite ReactTS

### Bộ ESLint và Prettier trước

Dưới đây là những depedency:

- ESLint: linter (bộ kiểm tra lỗi) chính

- Prettier: code formatter chính

- @typescript-eslint/eslint-plugin: ESLint plugin cung cấp các rule cho Typescript

- @typescript-eslint/parser: Parser cho phép ESLint kiểm tra lỗi Typescript.

- eslint-config-prettier: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.

- eslint-plugin-import: Để ESLint hiểu về cú pháp `import...` trong source code.

- eslint-plugin-jsx-a11y: Kiểm tra các vấn đề liên quan đến accessiblity (Tính thân thiện website, ví dụ cho thiết bị máy đọc sách).

- eslint-plugin-react: Các rule ESLint cho React

- eslint-plugin-prettier: Dùng thêm 1 số rule Prettier cho ESLint

- prettier-plugin-tailwindcss: Sắp xếp class tailwindcss

- eslint-plugin-react-hooks: ESLint cho React hook

```bash
yarn add eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier prettier-plugin-tailwindcss eslint-plugin-react-hooks -D
```

Cấu hình ESLint

Tạo file `.eslintrc.cjs` tại thư mục root
