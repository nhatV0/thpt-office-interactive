import type { TheoryReviewQuestion } from '../types/curriculum';

export const CHECKPOINT_QUESTIONS_MAP: Record<string, TheoryReviewQuestion> = {
  // Word Lesson 1
  'wt-1-1': {
    question: 'Theo quy chuẩn văn bản hành chính Việt Nam (Nghị định 30/2020/NĐ-CP), khoảng cách lề trái (Left) quy định là bao nhiêu?',
    options: ['1.0 cm đến 1.5 cm', '1.5 cm đến 2.0 cm', '2.0 cm đến 2.5 cm', '3.0 cm đến 3.5 cm'],
    correctIndex: 3,
    explanation: 'Lề trái được chừa từ 3.0 cm đến 3.5 cm để phục vụ việc đóng gáy tập hồ sơ không che mất chữ.'
  },
  'wt-1-2': {
    question: 'Để đổi hướng giấy (Orientation) chỉ cho một trang riêng biệt nằm ngang trong tài liệu, công cụ bắt buộc phải dùng là gì?',
    options: ['Page Break (Ctrl + Enter)', 'Continuous Section Break', 'Section Break (Next Page)', 'Column Break'],
    correctIndex: 2,
    explanation: 'Section Break (Next Page) phân chia tài liệu thành các phân vùng độc lập, cho phép đổi hướng Portrait/Landscape riêng cho từng vùng.'
  },
  'wt-1-3': {
    question: 'Để căn thụt đầu dòng dòng đầu tiên của đoạn văn bản (First Line Indent) trên thước đo Ruler, ta kéo con trượt nào?',
    options: ['Con trượt tam giác phía trên', 'Con trượt tam giác phía dưới (Hanging Indent)', 'Khối hình chữ nhật dưới cùng (Left Indent)', 'Lề phải Right Indent'],
    correctIndex: 0,
    explanation: 'Con trượt tam giác ngược phía trên kiểm soát vị trí thụt vào của dòng đầu tiên (First Line Indent).'
  },

  // Word Lesson 2
  'wt-2-1': {
    question: 'Quy định phông chữ chuẩn bắt buộc trong văn bản hành chính tiếng Việt hiện nay là gì?',
    options: ['Arial, bảng mã TCVN3', 'Times New Roman, bảng mã Unicode', 'VnTime, bảng mã TCVN3', 'Calibri, bảng mã VNI'],
    correctIndex: 1,
    explanation: 'Nghị định 30/2020/NĐ-CP quy định sử dụng phông chữ Times New Roman, bộ mã ký tự Unicode chuẩn.'
  },
  'wt-2-2': {
    question: 'Tổ hợp phím tắt nào dùng để căn lề đều cả hai bên (Justify) cho đoạn văn bản?',
    options: ['Ctrl + L', 'Ctrl + E', 'Ctrl + R', 'Ctrl + J'],
    correctIndex: 3,
    explanation: 'Ctrl + J căn đều hai bên (Justify), đảm bảo hai mép lề trái và phải của đoạn văn thẳng hàng.'
  },
  'wt-2-3': {
    question: 'Để sao chép định dạng Format Painter và áp dụng liên tục cho nhiều khối văn bản khác nhau, ta thực hiện thao tác chuột nào?',
    options: ['Nhấp chuột phải vào chổi', 'Nhấp đúp chuột (Double click) vào biểu tượng cây chổi', 'Kéo thả cây chổi', 'Giữ phím Alt khi nhấp chổi'],
    correctIndex: 1,
    explanation: 'Nhấp đúp chuột vào cây chổi Format Painter giúp khóa trạng thái sao chép để áp dụng cho nhiều vị trí liên tiếp.'
  },

  // Word Lesson 3
  'wt-3-1': {
    question: 'Khi con trỏ soạn thảo ở ô cuối cùng bên phải của hàng cuối trong bảng, phím nào tạo thêm một hàng mới?',
    options: ['Phím Enter', 'Phím Tab', 'Phím Space', 'Phím Shift'],
    correctIndex: 1,
    explanation: 'Bấm phím Tab tại ô cuối cùng của bảng sẽ tự động chèn thêm một hàng mới phía dưới.'
  },
  'wt-3-2': {
    question: 'Một ô trong bảng biểu Microsoft Word hỗ trợ bao nhiêu vị trí căn lề (Cell Alignment)?',
    options: ['4 vị trí', '6 vị trí', '9 vị trí', '12 vị trí'],
    correctIndex: 2,
    explanation: 'Có 9 vị trí căn lề trong ô (kết hợp 3 vị trí ngang: trái, giữa, phải với 3 vị trí dọc: trên, giữa, dưới).'
  },
  'wt-3-3': {
    question: 'Tính năng nào giúp dòng tiêu đề bảng tự động lặp lại ở đầu trang tiếp theo khi bảng biểu tràn trang?',
    options: ['Header & Footer', 'Repeat Header Rows', 'Split Table', 'AutoFit Contents'],
    correctIndex: 1,
    explanation: 'Repeat Header Rows trong Table Tools Layout tự động nhân bản dòng tiêu đề ở đầu mỗi trang mới.'
  },

  // Word Lesson 4
  'wt-4-1': {
    question: 'Chế độ bọc chữ Wrap Text nào đặt hình ảnh trôi nổi tự do và nằm đè lên trên lớp văn bản?',
    options: ['In Line with Text', 'Square', 'Behind Text', 'In Front of Text'],
    correctIndex: 3,
    explanation: 'In Front of Text đặt ảnh ở lớp trên cùng (layer trên) che khuất nội dung chữ phía dưới.'
  },
  'wt-4-2': {
    question: 'Trong khung nhập nội dung SmartArt (Text Pane), phím tắt nào dùng để hạ cấp một mục thành nhánh con (Demote)?',
    options: ['Phím Enter', 'Phím Tab', 'Phím Space', 'Phím Backspace'],
    correctIndex: 1,
    explanation: 'Phím Tab hạ cấp nhánh con (Demote); Shift + Tab nâng cấp nhánh cha (Promote).'
  },
  'wt-4-3': {
    question: 'Để đánh số thứ tự hình ảnh tự động (Hình 1, Hình 2...) trong báo cáo khoa học, ta dùng tính năng nào?',
    options: ['Insert Caption (References)', 'Page Number', 'Bookmark', 'Footnote'],
    correctIndex: 0,
    explanation: 'Insert Caption trong thẻ References quản lý nhãn và số thứ tự tự động cho hình ảnh và bảng.'
  },

  // Word Lesson 5
  'wt-5-1': {
    question: 'Phím tắt nào giúp thoát nhanh khỏi chế độ chỉnh sửa Header and Footer để trở về văn bản chính?',
    options: ['Phím Enter', 'Phím Esc', 'Phím Tab', 'Phím Space'],
    correctIndex: 1,
    explanation: 'Phím Esc (Escape) ngay lập tức đóng thanh công cụ Header & Footer Tools.'
  },
  'wt-5-2': {
    question: 'Tùy chọn nào giúp trang đầu tiên (trang bìa) không hiển thị số trang và đầu trang?',
    options: ['Different First Page', 'Different Odd & Even Pages', 'Link to Previous', 'Show Document Text'],
    correctIndex: 0,
    explanation: 'Different First Page cho phép tách riêng thiết kế cho trang bìa đầu tiên.'
  },
  'wt-5-3': {
    question: 'Muốn tiêu đề Header ở Chương 2 khác biệt hoàn toàn với Chương 1, thao tác bắt buộc là gì?',
    options: ['Tắt chế độ Different First Page', 'Chèn Section Break và tắt nút Link to Previous ở Section 2', 'Chèn Page Break 2 lần', 'Đổi màu chữ ở chương 2'],
    correctIndex: 1,
    explanation: 'Cần phân tách Section bằng Section Break và nhấp tắt Link to Previous để độc lập hóa tiêu đề.'
  },

  // Word Lesson 6
  'wt-6-1': {
    question: 'Tổ hợp phím tắt nhanh nào dùng để gán định dạng Heading 1 cho dòng tiêu đề đang chọn?',
    options: ['Ctrl + 1', 'Ctrl + Alt + 1', 'Shift + Alt + 1', 'Alt + 1'],
    correctIndex: 1,
    explanation: 'Ctrl + Alt + 1 gán kiểu Heading 1; Ctrl + Alt + 2 gán Heading 2; Ctrl + Alt + 3 gán Heading 3.'
  },
  'wt-6-2': {
    question: 'Để di chuyển tức thời từ mục lục tự động đến vị trí trang nội dung tương ứng, ta làm thế nào?',
    options: ['Nhấp đúp chuột', 'Giữ phím Ctrl và nhấp chuột trái vào mục đó', 'Nhấp chuột phải', 'Giữ phím Alt và nhấp chuột'],
    correctIndex: 1,
    explanation: 'Giữ phím Ctrl + Click chuột biến mục lục thành siêu liên kết dẫn thẳng đến nội dung trong tài liệu.'
  },
  'wt-6-3': {
    question: 'Phím tắt nào giúp làm mới (cập nhật) trường dữ liệu mục lục đang chọn ngay lập tức?',
    options: ['F4', 'F5', 'F9', 'F12'],
    correctIndex: 2,
    explanation: 'Phím F9 được dùng để cập nhật lại tất cả các trường tính toán và mục lục tự động trong Word.'
  },

  // Excel Lesson 1
  'et-1-1': {
    question: 'Trong Microsoft Excel, dữ liệu dạng số (Number) khi nhập vào ô tính mặc định được căn lề về phía nào?',
    options: ['Căn lề bên trái', 'Căn lề bên phải', 'Căn chính giữa', 'Căn đều hai bên'],
    correctIndex: 1,
    explanation: 'Dữ liệu số mặc định căn phải; dữ liệu văn bản (Text) mặc định căn trái.'
  },
  'et-1-2': {
    question: 'Để nhập số điện thoại "0987654321" mà không bị Excel xóa mất chữ số 0 ở đầu, ta gõ ký tự gì phía trước?',
    options: ['Dấu chấm (.)', 'Dấu gạch ngang (-)', 'Dấu nháy đơn (\')', 'Dấu thăng (#)'],
    correctIndex: 2,
    explanation: 'Dấu nháy đơn (\') định dạng ô thành Text, giữ nguyên mọi ký tự kể cả số 0 ở đầu.'
  },
  'et-1-3': {
    question: 'Tổ hợp phím tắt nào dùng để chèn thêm một Sheet (trang tính) mới vào sổ tính?',
    options: ['Ctrl + N', 'Shift + F11', 'Alt + Shift + N', 'Ctrl + T'],
    correctIndex: 1,
    explanation: 'Shift + F11 tạo thêm một trang tính mới trong sổ tính hiện tại.'
  },

  // Excel Lesson 2
  'et-2-1': {
    question: 'Phím tắt nào giúp luân chuyển nhanh giữa các dạng địa chỉ tương đối, tuyệt đối ($) khi đang gõ công thức?',
    options: ['F2', 'F4', 'F9', 'F12'],
    correctIndex: 1,
    explanation: 'Phím F4 chuyển đổi qua lại giữa A1, $A$1, A$1 và $A1.'
  },
  'et-2-2': {
    question: 'Tổ hợp phím nào giúp hiển thị toàn bộ các công thức trên ô tính thay vì kết quả (Show Formulas)?',
    options: ['Ctrl + ~ (dấu ngã)', 'Ctrl + F', 'Alt + F4', 'Shift + F3'],
    correctIndex: 0,
    explanation: 'Ctrl + ~ (dấu ngã) bật/tắt chế độ hiển thị toàn bộ công thức trên trang tính.'
  },
  'et-2-3': {
    question: 'Khi ô tính xuất hiện chuỗi ký tự "#####", nguyên nhân trực tiếp là gì?',
    options: ['Chia cho số không', 'Độ rộng cột không đủ hiển thị số', 'Sai tên hàm', 'Dữ liệu bị xóa'],
    correctIndex: 1,
    explanation: 'Chuỗi ##### báo hiệu cột quá hẹp, chỉ cần nhấp đúp biên cột để AutoFit.'
  },

  // Excel Lesson 3
  'et-3-1': {
    question: 'Tổ hợp phím tắt nào dùng để kích hoạt tính năng tự động tính tổng AutoSum?',
    options: ['Ctrl + S', 'Alt + =', 'Shift + =', 'Ctrl + Alt + S'],
    correctIndex: 1,
    explanation: 'Alt + = tự động phân tích và tạo công thức =SUM(...) cho các ô số liền kề.'
  },
  'et-3-2': {
    question: 'Hàm nào dùng để tìm giá trị lớn nhất trong một dãy số?',
    options: ['=LARGE()', '=MAX()', '=GREATEST()', '=HIGH()'],
    correctIndex: 1,
    explanation: 'Hàm MAX() trả về giá trị lớn nhất trong vùng đối số.'
  },
  'et-3-3': {
    question: 'Cho vùng dữ liệu A1:A5 gồm: 10, "Tin", 20, ô trống, 30. Hàm =COUNTA(A1:A5) cho kết quả là bao nhiêu?',
    options: ['3', '4', '5', '2'],
    correctIndex: 1,
    explanation: 'COUNTA đếm tất cả các ô không rỗng (3 ô số và 1 ô chữ, tổng là 4).'
  },

  // Excel Lesson 4
  'et-4-1': {
    question: 'Cú pháp chuẩn của hàm điều kiện IF trong Microsoft Excel là gì?',
    options: [
      '=IF(value_if_true, value_if_false, logical_test)',
      '=IF(logical_test, value_if_true, value_if_false)',
      '=IF(condition, then, else)',
      '=IF(logical_test, result)'
    ],
    correctIndex: 1,
    explanation: 'Cú pháp chuẩn gồm 3 đối số: điều kiện kiểm tra, giá trị khi đúng, giá trị khi sai.'
  },
  'et-4-2': {
    question: 'Hàm nào trả về giá trị TRUE khi và chỉ khi TẤT CẢ các điều kiện bên trong đều đúng?',
    options: ['Hàm OR()', 'Hàm AND()', 'Hàm NOT()', 'Hàm XOR()'],
    correctIndex: 1,
    explanation: 'Hàm AND() đòi hỏi toàn bộ đối số phải có giá trị TRUE mới trả về TRUE.'
  },
  'et-4-3': {
    question: 'Trong hàm SUMIF(range, criteria, [sum_range]), đối số sum_range mang ý nghĩa gì?',
    options: ['Vùng điều kiện cần kiểm tra', 'Tiêu chuẩn lọc', 'Vùng thực tế chứa các con số cần tính tổng', 'Giá trị lớn nhất'],
    correctIndex: 2,
    explanation: 'sum_range là vùng thực tế chứa các con số sẽ được cộng dồn khi thỏa mãn criteria.'
  },

  // Excel Lesson 5
  'et-5-1': {
    question: 'Trong hàm VLOOKUP, để tìm kiếm chính xác tuyệt đối thì đối số range_lookup nhận giá trị nào?',
    options: ['1 hoặc TRUE', '0 hoặc FALSE', '-1', 'Để trống'],
    correctIndex: 1,
    explanation: 'Giá trị 0 (hoặc FALSE) yêu cầu tìm kiếm chính xác 100% đối tượng tra cứu.'
  },
  'et-5-2': {
    question: 'Khi sao chép công thức VLOOKUP xuống các hàng dưới, bảng phụ table_array phải ở dạng địa chỉ nào?',
    options: ['Địa chỉ tương đối', 'Địa chỉ tuyệt đối (có dấu $)', 'Địa chỉ tên ô tự do', 'Không quan trọng'],
    correctIndex: 1,
    explanation: 'Bảng tham chiếu table_array phải khóa tuyệt đối bằng $ để không bị xê dịch vùng tra cứu.'
  },
  'et-5-3': {
    question: 'Khi hàm VLOOKUP trả về lỗi "#N/A", điều này báo hiệu điều gì?',
    options: ['Chia cho số 0', 'Không tìm thấy giá trị tra cứu trong cột đầu tiên của bảng phụ', 'Sai cú pháp tên hàm', 'Cột quá hẹp'],
    correctIndex: 1,
    explanation: '#N/A (Not Available) thông báo giá trị lookup_value không tồn tại trong bảng tham chiếu.'
  },

  // Excel Lesson 6
  'et-6-1': {
    question: 'Tổ hợp phím tắt nào dùng để bật hoặc tắt nhanh tính năng lọc dữ liệu tự động AutoFilter?',
    options: ['Ctrl + F', 'Ctrl + Shift + L', 'Alt + F4', 'Ctrl + Alt + F'],
    correctIndex: 1,
    explanation: 'Ctrl + Shift + L bật hoặc tắt các nút mũi tên lọc Filter trên hàng tiêu đề.'
  },
  'et-6-2': {
    question: 'Trong hộp thoại Sort, tùy chọn "My data has headers" mang ý nghĩa gì?',
    options: ['Bảng tính có chứa tiêu đề cột, không tham gia vào sắp xếp', 'Bảng tính không có tiêu đề', 'Chỉ sắp xếp dòng đầu', 'Thêm tiêu đề mới'],
    correctIndex: 0,
    explanation: 'Tùy chọn này giúp hàng tiêu đề được cố định mà không bị xáo trộn vào hàng dữ liệu.'
  },
  'et-6-3': {
    question: 'Công cụ nào cho phép tự động đổi màu nền ô tính thành màu đỏ khi giá trị trong ô nhỏ hơn 5?',
    options: ['Format Cells', 'Data Validation', 'Conditional Formatting', 'AutoFormat'],
    correctIndex: 2,
    explanation: 'Conditional Formatting (Định dạng có điều kiện) tự động đổi màu dựa theo giá trị của ô.'
  },

  // Excel Lesson 7
  'et-7-1': {
    question: 'Tổ hợp phím tắt nào giúp tạo nhanh một biểu đồ hình cột mặc định ngay trong trang tính hiện tại?',
    options: ['F1', 'Alt + F1', 'Ctrl + F1', 'Shift + F1'],
    correctIndex: 1,
    explanation: 'Alt + F1 tạo biểu đồ cột nhúng ngay trên sheet hiện tại; phím F11 tạo Chart Sheet riêng.'
  },
  'et-7-2': {
    question: 'Thành phần nào trong biểu đồ giúp hiển thị con số giá trị cụ thể trên từng cột hoặc lát cắt?',
    options: ['Axis Titles', 'Gridlines', 'Data Labels', 'Legend'],
    correctIndex: 2,
    explanation: 'Data Labels in trực tiếp giá trị số lên từng cột hoặc lát cắt của biểu đồ.'
  },
  'et-7-3': {
    question: 'Nút lệnh "Switch Row/Column" trên thẻ Chart Design có tác dụng gì?',
    options: ['Xóa bảng số liệu gốc', 'Đổi vị trí trục biểu diễn giữa hàng và cột dữ liệu', 'Đổi màu biểu đồ', 'Di chuyển biểu đồ'],
    correctIndex: 1,
    explanation: 'Switch Row/Column hoán đổi chuỗi dữ liệu giữa trục tung và trục hoành.'
  },

  // PowerPoint Lesson 1
  'pt-1-1': {
    question: 'Tổ hợp phím tắt nào dùng để chèn thêm một Slide mới vào bài thuyết trình?',
    options: ['Ctrl + N', 'Ctrl + M', 'Ctrl + Shift + N', 'Ctrl + S'],
    correctIndex: 1,
    explanation: 'Ctrl + M chèn slide mới; còn Ctrl + N tạo ra một file thuyết trình mới hoàn toàn.'
  },
  'pt-1-2': {
    question: 'Để chèn logo trường học sao cho tự động xuất hiện ở góc mọi trang slide, ta đặt logo tại đâu?',
    options: ['Slide Sorter', 'Reading View', 'Slide Master', 'Notes Master'],
    correctIndex: 2,
    explanation: 'Slide Master là trang khuôn mẫu gốc; mọi yếu tố đặt tại trang mẹ tự động kế thừa ra toàn bộ slide.'
  },
  'pt-1-3': {
    question: 'Tỷ lệ kích thước slide tiêu chuẩn mặc định hiện đại trong PowerPoint là bao nhiêu?',
    options: ['Standard 4:3', 'Widescreen 16:9', 'Khổ A4', 'Vuông 1:1'],
    correctIndex: 1,
    explanation: 'Chuẩn màn hình rộng Widescreen 16:9 là kích thước mặc định tương thích tivi và máy chiếu HD.'
  },

  // PowerPoint Lesson 2
  'pt-2-1': {
    question: 'Tính năng nào cho phép biến nhanh danh sách văn bản gạch đầu dòng thành sơ đồ khối trực quan?',
    options: ['SmartArt Styles', 'Convert to SmartArt Graphic', 'WordArt', 'Shapes Gallery'],
    correctIndex: 1,
    explanation: 'Convert to SmartArt Graphic trong thẻ Home chuyển đổi trực tiếp văn bản thành sơ đồ tư duy tương ứng.'
  },
  'pt-2-2': {
    question: 'Khi vẽ hình vuông hoặc hình tròn hoàn hảo, ta cần giữ phím nào trong lúc kéo rê chuột?',
    options: ['Giữ phím Ctrl', 'Giữ phím Shift', 'Giữ phím Alt', 'Giữ phím Space'],
    correctIndex: 1,
    explanation: 'Giữ phím Shift khi vẽ Rectangle sẽ cho hình vuông; vẽ Oval sẽ cho hình tròn hoàn hảo.'
  },
  'pt-2-3': {
    question: 'Lệnh nào dùng để chia đều khoảng cách giữa các hình khối theo chiều ngang một cách tự động?',
    options: ['Align Left', 'Align Middle', 'Distribute Horizontally', 'Distribute Vertically'],
    correctIndex: 2,
    explanation: 'Distribute Horizontally tự động tính toán và đặt khoảng cách giữa các vật thể theo chiều ngang bằng nhau.'
  },

  // PowerPoint Lesson 3
  'pt-3-1': {
    question: 'Sự khác biệt cốt lõi giữa Transition và Animation trong PowerPoint là gì?',
    options: [
      'Transition áp dụng cho toàn bộ slide; Animation áp dụng cho từng đối tượng trong slide',
      'Transition chỉ có âm thanh; Animation chỉ có hình ảnh',
      'Animation chỉ chạy trên máy Mac',
      'Cả hai là một không khác nhau'
    ],
    correctIndex: 0,
    explanation: 'Transition là hiệu ứng chuyển cảnh giữa các trang slide; Animation là hiệu ứng diễn hoạt của từng vật thể.'
  },
  'pt-3-2': {
    question: 'Hiệu ứng chuyển trang Morph tạo ra chuyển động biến hình mượt mà dựa trên nguyên lý nào?',
    options: [
      'Cần có kết nối Internet',
      'Hai slide kế tiếp nhau có cùng các đối tượng với vị trí, kích thước hoặc màu sắc khác nhau',
      'Slide phải dài trên 10 phút',
      'Chèn video vào slide'
    ],
    correctIndex: 1,
    explanation: 'Morph tự động tính toán tọa độ chênh lệch của cùng đối tượng giữa 2 slide liên tiếp để tạo chuyển động tự nhiên.'
  },
  'pt-3-3': {
    question: 'Nút lệnh "Apply to All" trong thẻ Transitions có công dụng gì?',
    options: [
      'Xóa toàn bộ hiệu ứng',
      'Áp dụng cùng một kiểu hiệu ứng và thời gian chuyển cảnh cho tất cả các slide trong bài',
      'Lưu bài thuyết trình',
      'Đổi màu nền slide'
    ],
    correctIndex: 1,
    explanation: 'Apply to All giúp đồng bộ hóa phong cách chuyển cảnh trên toàn bộ bài thuyết trình.'
  },

  // PowerPoint Lesson 4
  'pt-4-1': {
    question: 'Hiệu ứng hoạt họa màu XANH LÁ (Entrance Effects) trong PowerPoint có vai trò gì?',
    options: [
      'Làm cho đối tượng xuất hiện từ bên ngoài vào trong màn hình slide',
      'Làm cho đối tượng rung lắc nhấn mạnh',
      'Làm cho đối tượng biến mất khỏi slide',
      'Làm đổi màu nền slide'
    ],
    correctIndex: 0,
    explanation: 'Nhóm Entrance (Màu xanh) đưa vật thể từ trạng thái ẩn ra xuất hiện trên trang chiếu.'
  },
  'pt-4-2': {
    question: 'Khi muốn gán thêm hiệu ứng thứ hai cho cùng một đối tượng đã có sẵn hiệu ứng, ta dùng nút nào?',
    options: ['Animation Pane', 'Add Animation', 'Trigger', 'Animation Painter'],
    correctIndex: 1,
    explanation: 'Nút Add Animation cho phép cộng thêm hiệu ứng mới mà không ghi đè mất hiệu ứng cũ.'
  },
  'pt-4-3': {
    question: 'Tùy chọn khởi chạy "Start: After Previous" mang ý nghĩa gì?',
    options: [
      'Hiệu ứng chỉ chạy khi nhấp chuột',
      'Hiệu ứng tự động bắt đầu ngay sau khi hiệu ứng phía trước nó vừa kết thúc',
      'Hiệu ứng chạy cùng lúc với hiệu ứng phía trước',
      'Hiệu ứng không bao giờ chạy'
    ],
    correctIndex: 1,
    explanation: 'After Previous giúp tự động hóa chuỗi hoạt họa nối tiếp nhau mà người thuyết trình không cần bấm chuột.'
  },

  // PowerPoint Lesson 5
  'pt-5-1': {
    question: 'Tổ hợp phím tắt chuẩn để tạo siêu liên kết (Hyperlink) trong toàn bộ bộ ứng dụng Office là gì?',
    options: ['Ctrl + H', 'Ctrl + K', 'Ctrl + L', 'Ctrl + Shift + K'],
    correctIndex: 1,
    explanation: 'Ctrl + K là phím tắt mở hộp thoại Insert Hyperlink trong Word, Excel và PowerPoint.'
  },
  'pt-5-2': {
    question: 'Chế độ Presenter View đem lại lợi ích lớn nhất nào cho người đứng thuyết trình?',
    options: [
      'Tự động dịch bài thuyết trình',
      'Xem được slide tiếp theo, đồng hồ đếm giờ và ghi chú bí mật trên màn hình laptop của mình',
      'Tự động ngắt kết nối máy chiếu',
      'Tăng tốc độ làm mát máy tính'
    ],
    correctIndex: 1,
    explanation: 'Presenter View giúp diễn giả chủ động khi nhìn thấy trước slide tiếp theo và ghi chú Notes mà khán giả không thấy.'
  },
  'pt-5-3': {
    question: 'Khi đang trong chế độ trình chiếu toàn màn hình, phím tắt nào giúp tạm thời làm đen màn hình (Black screen)?',
    options: ['Phím B', 'Phím W', 'Phím Space', 'Phím Backspace'],
    correctIndex: 0,
    explanation: 'Phím B làm đen màn hình (Black) và phím W làm trắng màn hình (White) để thu hút sự chú ý của người nghe.'
  }
};
