import type { TheoryReviewQuestion } from '../types/curriculum';

export const CHECKPOINT_QUESTIONS_MAP: Record<string, TheoryReviewQuestion> = {
  "wt-1-1": {
    "question": "Để ẩn hoặc hiện dải lệnh Ribbon trong Microsoft Word, tổ hợp phím tắt nhanh nào được sử dụng?",
    "options": [
      "Ctrl + F1",
      "Ctrl + Shift + R",
      "Alt + F4",
      "Ctrl + Shift + F1"
    ],
    "correctIndex": 0,
    "explanation": "Tổ hợp phím Ctrl + F1 dùng để thu gọn (Collapse) hoặc mở rộng hiển thị dải lệnh Ribbon trong Word."
  },
  "wt-1-2": {
    "question": "Phím tắt nào sau đây cho phép mở trực tiếp hộp thoại \"Save As\" để lưu tài liệu dưới tên hoặc định dạng khác?",
    "options": [
      "Ctrl + S",
      "Ctrl + Shift + S",
      "F12",
      "Alt + F12"
    ],
    "correctIndex": 2,
    "explanation": "Phím chức năng F12 là phím tắt mặc định trong Microsoft Word để mở nhanh hộp thoại Save As."
  },
  "wt-1-3": {
    "question": "Để chuyển đổi một tệp Word đang mở sang định dạng tài liệu cố định PDF, thao tác chuẩn xác trong Backstage View là gì?",
    "options": [
      "File > Print > Print to PDF",
      "File > Export > Create PDF/XPS Document",
      "File > Share > Send as PDF",
      "File > Save As > đổi đuôi tên tệp thành .pdf thủ công"
    ],
    "correctIndex": 1,
    "explanation": "Đường dẫn chính thức và tối ưu nhất là File > Export > Create PDF/XPS Document (hoặc chọn Save as type là PDF trong hộp thoại Save As)."
  },
  "wt-1-4": {
    "question": "Để sửa thuộc tính Title (Tiêu đề) hoặc Tags (Thẻ từ khóa) của văn bản Word theo yêu cầu bài thi, ta thực hiện tại đâu?",
    "options": [
      "Thẻ Home > nhóm Editing",
      "Thẻ File > mục Info > vùng thuộc tính Properties bên phải",
      "Thẻ Review > nhóm Tracking",
      "Thẻ Layout > nhóm Page Setup"
    ],
    "correctIndex": 1,
    "explanation": "Tất cả các thông tin siêu dữ liệu (Metadata) như Title, Author, Tags, Subject đều được quản lý tại thẻ File > Info > Properties."
  },
  "wt-2-1": {
    "question": "Chế độ xem nào trong Microsoft Word hiển thị tài liệu trực quan nhất, đúng y như kết quả khi in ra giấy?",
    "options": [
      "Draft View",
      "Web Layout",
      "Print Layout",
      "Outline View"
    ],
    "correctIndex": 2,
    "explanation": "Print Layout là chế độ xem mô phỏng chân thực nhất bố cục trang in thực tế của văn bản."
  },
  "wt-2-2": {
    "question": "Để kiểm tra xem văn bản có bị gõ thừa khoảng trắng hoặc thừa các dấu xuống dòng trống hay không, công cụ hữu ích nhất là gì?",
    "options": [
      "Kiểm tra chính tả Spelling",
      "Bật ký hiệu định dạng ẩn Show/Hide ¶ (Ctrl + *)",
      "Thu nhỏ màn hình về 50%",
      "Chuyển sang chế độ Draft"
    ],
    "correctIndex": 1,
    "explanation": "Nút Show/Hide ¶ hiển thị toàn bộ các ký tự điều khiển định dạng không in ra, giúp phát hiện khoảng trắng và đoạn trống dư thừa."
  },
  "wt-2-3": {
    "question": "Để chọn nhanh một câu văn hoàn chỉnh bất kỳ trong tài liệu, thao tác chuột và bàn phím kết hợp là gì?",
    "options": [
      "Nhấp đúp chuột vào giữa câu",
      "Giữ phím Shift và nhấp chuột vào cuối câu",
      "Giữ phím Ctrl và nhấp chuột trái vào câu đó",
      "Nhấp chuột 3 lần liên tiếp"
    ],
    "correctIndex": 2,
    "explanation": "Thao tác giữ phím Ctrl + nhấp chuột trái vào câu văn sẽ bôi đen toàn bộ câu tính từ chữ đầu tiên đến dấu chấm kết câu."
  },
  "wt-2-4": {
    "question": "Trong hộp thoại Find and Replace, ký hiệu đại diện nào được sử dụng trong trường Find What để tìm kiếm dấu ngắt đoạn (Paragraph Mark)?",
    "options": [
      "^t",
      "^p",
      "^b",
      "^m"
    ],
    "correctIndex": 1,
    "explanation": "Ký hiệu ^p (Paragraph Mark) đại diện cho dấu ngắt đoạn (phím Enter) trong tính năng tìm kiếm của Microsoft Word."
  },
  "wt-3-1": {
    "question": "Để chuyển đổi nhanh chu kỳ giữa các kiểu chữ: chữ thường -> VIẾT HOA -> Viết Hoa Đầu Từ, tổ hợp phím tắt nào được sử dụng?",
    "options": [
      "Ctrl + Shift + U",
      "Shift + F3",
      "Ctrl + F3",
      "Alt + F3"
    ],
    "correctIndex": 1,
    "explanation": "Shift + F3 là phím tắt của tính năng Change Case, dùng để chuyển đổi luân phiên các kiểu chữ hoa và chữ thường."
  },
  "wt-3-2": {
    "question": "Phím tắt nào dùng để căn lề đều cả hai mép trái và phải (Justify) cho đoạn văn bản đang chọn?",
    "options": [
      "Ctrl + L",
      "Ctrl + R",
      "Ctrl + E",
      "Ctrl + J"
    ],
    "correctIndex": 3,
    "explanation": "Ctrl + J kích hoạt chế độ căn đều hai bên (Justify), giúp văn bản thẳng đều ở cả lề trái và lề phải."
  },
  "wt-3-3": {
    "question": "Khi lập danh sách giá tiền hoặc các số thập phân cần gióng thẳng hàng theo dấu phẩy thập phân, loại Tab Stop nào là chuẩn xác nhất?",
    "options": [
      "Left Tab",
      "Center Tab",
      "Right Tab",
      "Decimal Tab"
    ],
    "correctIndex": 3,
    "explanation": "Decimal Tab (Tab thập phân) được thiết kế chuyên biệt để căn thẳng hàng các con số theo vị trí dấu chấm/phẩy thập phân."
  },
  "wt-3-4": {
    "question": "Tổ hợp phím tắt nào dùng để sao chép chỉ riêng các thuộc tính định dạng (không sao chép nội dung chữ) trong Microsoft Word?",
    "options": [
      "Ctrl + C",
      "Ctrl + Shift + C",
      "Alt + C",
      "Shift + F4"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + Shift + C sao chép định dạng (Copy Formatting) và Ctrl + Shift + V dùng để dán định dạng (Paste Formatting)."
  },
  "wt-3-5": {
    "question": "Để hạ một mục trong danh sách có thứ tự xuống cấp con thấp hơn (tăng cấp độ thụt lề), ta đặt con trỏ ở đầu mục đó và nhấn phím gì?",
    "options": [
      "Phím Space",
      "Phím Enter",
      "Phím Tab",
      "Phím Shift"
    ],
    "correctIndex": 2,
    "explanation": "Nhấn phím Tab tại đầu mục danh sách sẽ làm thụt lề mục đó vào trong và hạ cấp xuống danh mục con cấp thấp hơn."
  },
  "wt-4-1": {
    "question": "Theo Nghị định 30/2020/NĐ-CP về công tác văn thư, khoảng cách lề trái (Left Margin) của văn bản hành chính quy chuẩn là bao nhiêu?",
    "options": [
      "1.5 cm đến 2.0 cm",
      "2.0 cm đến 2.5 cm",
      "3.0 cm đến 3.5 cm",
      "3.5 cm đến 4.0 cm"
    ],
    "correctIndex": 2,
    "explanation": "Lề trái bắt buộc từ 3.0 cm đến 3.5 cm để dự phòng đóng gáy tập hồ sơ không bị che lấp nội dung chữ."
  },
  "wt-4-2": {
    "question": "Để chia một đoạn văn bản nằm giữa trang thành 2 cột báo mà phần văn bản trước và sau đó vẫn giữ nguyên 1 cột bình thường, loại dấu ngắt nào phải được áp dụng?",
    "options": [
      "Page Break (Ctrl + Enter)",
      "Section Break (Continuous)",
      "Section Break (Next Page)",
      "Column Break"
    ],
    "correctIndex": 1,
    "explanation": "Section Break (Continuous) cho phép tạo vùng mới ngay trên cùng trang giấy để áp dụng số cột khác biệt cho đoạn ở giữa."
  },
  "wt-4-3": {
    "question": "Tùy chọn nào trong hộp thoại Columns cho phép hiển thị một đường kẻ dọc phân cách thanh mảnh giữa các cột báo?",
    "options": [
      "Column Border",
      "Vertical Line",
      "Line between",
      "Column Divider"
    ],
    "correctIndex": 2,
    "explanation": "Tùy chọn \"Line between\" trong hộp thoại More Columns sẽ tự động kẻ một đường dọc phân chia giữa các cột."
  },
  "wt-4-4": {
    "question": "Muốn trang đầu tiên của tài liệu (trang bìa) không hiển thị số trang và đầu trang, ta chọn tùy chọn nào trong công cụ Header & Footer?",
    "options": [
      "Remove First Page",
      "Different First Page",
      "Hide Header & Footer",
      "Unlink First Page"
    ],
    "correctIndex": 1,
    "explanation": "Tùy chọn Different First Page tách biệt thiết kế của trang đầu tiên, cho phép để trống không hiển thị header/footer trên trang bìa."
  },
  "wt-4-5": {
    "question": "Để chèn một dòng chữ mờ chìm dưới nền văn bản như chữ \"BẢN THẢO\" hoặc \"CONFIDENTIAL\", công cụ nào được sử dụng?",
    "options": [
      "Page Color",
      "Watermark (Design)",
      "Text Box Behind",
      "Header Background"
    ],
    "correctIndex": 1,
    "explanation": "Tính năng Watermark (tab Design) được thiết kế chuyên biệt để in chìm chữ hoặc logo bản quyền dưới nền văn bản."
  },
  "wt-5-1": {
    "question": "Phím chức năng nào trên bàn phím dùng để kích hoạt nhanh công cụ kiểm tra chính tả và ngữ pháp (Spelling & Grammar)?",
    "options": [
      "F4",
      "F5",
      "F7",
      "F12"
    ],
    "correctIndex": 2,
    "explanation": "Phím F7 là phím tắt chuẩn của chức năng kiểm tra lỗi chính tả và ngữ pháp trên toàn bộ các ứng dụng Microsoft Office."
  },
  "wt-5-2": {
    "question": "Quy tắc bắt buộc nào sau đây phải tuân thủ khi đặt tên cho một dấu trang (Bookmark) trong Microsoft Word?",
    "options": [
      "Tên phải bắt đầu bằng chữ số",
      "Tên không được chứa dấu cách khoảng trắng",
      "Tên không được dài quá 5 ký tự",
      "Tên phải viết bằng chữ in hoa toàn bộ"
    ],
    "correctIndex": 1,
    "explanation": "Tên Bookmark trong Word bắt buộc phải bắt đầu bằng một chữ cái và tuyệt đối không được chứa ký tự dấu cách (space)."
  },
  "wt-5-3": {
    "question": "Khi in 3 bản sao của một tài liệu gồm 5 trang, chế độ \"Collated\" sẽ xuất các trang ra máy in theo thứ tự nào?",
    "options": [
      "Trang 1,1,1; 2,2,2; 3,3,3...",
      "In trọn vẹn tập 1 (1,2,3,4,5), sau đó in tiếp tập 2 và tập 3",
      "In các trang chẵn trước rồi đến trang lẻ",
      "In ngẫu nhiên theo tốc độ máy in"
    ],
    "correctIndex": 1,
    "explanation": "Chế độ Collated sắp xếp in lần lượt từng bộ tài liệu hoàn chỉnh (tập 1: trang 1->5, tập 2: trang 1->5, tập 3: trang 1->5) rất thuận tiện cho việc đóng gáy tập."
  },
  "wt-5-4": {
    "question": "Để loại bỏ toàn bộ các thông tin cá nhân của tác giả (Author) và thuộc tính ẩn của tệp trước khi gửi ra bên ngoài mà không làm mất nội dung văn bản, ta dùng công cụ nào?",
    "options": [
      "Accessibility Checker",
      "Document Inspector (Check for Issues)",
      "Compatibility Checker",
      "Clear All Formatting"
    ],
    "correctIndex": 1,
    "explanation": "Document Inspector tại File > Info > Check for Issues cho phép kiểm tra và xóa bỏ toàn bộ thuộc tính ẩn và thông tin cá nhân của tệp."
  },
  "wt-6-1": {
    "question": "Khi chuyển đổi một đoạn văn bản có sẵn thành bảng (Convert Text to Table), tùy chọn nào xác định ký tự ngăn cách giữa các cột dữ liệu?",
    "options": [
      "Table size",
      "AutoFit behavior",
      "Separate text at",
      "Column width"
    ],
    "correctIndex": 2,
    "explanation": "Mục \"Separate text at\" trong hộp thoại Convert Text to Table cho phép chọn dấu ngăn cách giữa các cột (Tabs, Commas, Paragraphs...)."
  },
  "wt-6-2": {
    "question": "Muốn hợp nhất 3 ô nằm ngang liên tiếp trên hàng tiêu đề của bảng thành một ô duy nhất, ta chọn lệnh nào?",
    "options": [
      "Split Cells",
      "Merge Cells",
      "Combine Table",
      "Group Cells"
    ],
    "correctIndex": 1,
    "explanation": "Lệnh Merge Cells (tab Layout của Table Tools) dùng để hợp nhất các ô được chọn thành một ô duy nhất."
  },
  "wt-6-3": {
    "question": "Một ô (Cell) trong bảng biểu Microsoft Word hỗ trợ tối đa bao nhiêu vị trí căn lề (Alignment) nội dung?",
    "options": [
      "4 vị trí",
      "6 vị trí",
      "9 vị trí",
      "12 vị trí"
    ],
    "correctIndex": 2,
    "explanation": "Có 9 vị trí căn lề trong ô (kết hợp 3 vị trí ngang: Trái, Giữa, Phải với 3 vị trí dọc: Trên, Giữa, Dưới)."
  },
  "wt-6-4": {
    "question": "Tính năng nào giúp dòng tiêu đề của một bảng biểu tự động hiển thị lặp lại ở đầu trang tiếp theo khi bảng dài tràn qua nhiều trang?",
    "options": [
      "Header & Footer (Insert)",
      "Repeat Header Rows (Table Tools Layout)",
      "Split Table",
      "AutoFit Window"
    ],
    "correctIndex": 1,
    "explanation": "Repeat Header Rows trong nhóm Data của thẻ Table Tools Layout tự động nhân bản dòng tiêu đề bảng ở mỗi trang mới."
  },
  "wt-7-1": {
    "question": "Để cắt xén một bức ảnh hình chữ nhật thành một khung hình elip hoặc hình ngôi sao trong Word 2019, tính năng nào được sử dụng?",
    "options": [
      "Picture Styles",
      "Crop to Shape (trong menu Crop)",
      "Artistic Effects",
      "Remove Background"
    ],
    "correctIndex": 1,
    "explanation": "Lựa chọn Crop > Crop to Shape trên thẻ Picture Format cho phép cắt xén ảnh theo đường viền của bất kỳ hình vẽ hình học nào."
  },
  "wt-7-2": {
    "question": "Chế độ Wrap Text nào cho phép văn bản uốn lượn ôm sát theo đường viền thực tế của đối tượng hình ảnh thay vì bao thành khối chữ nhật?",
    "options": [
      "In Line with Text",
      "Square",
      "Tight",
      "Top and Bottom"
    ],
    "correctIndex": 2,
    "explanation": "Chế độ Tight (ôm sát) cho phép các dòng chữ uốn lượn bám sát vào đường biên thực của hình ảnh đồ họa."
  },
  "wt-7-3": {
    "question": "Thuộc tính nào của hình ảnh cần phải được thiết lập để phần mềm đọc màn hình có thể mô tả nội dung bức ảnh cho người dùng khiếm thị?",
    "options": [
      "Picture Title",
      "Alternative Text (Alt Text)",
      "ScreenTip",
      "Caption"
    ],
    "correctIndex": 1,
    "explanation": "Alt Text (Văn bản thay thế) là tiêu chuẩn trợ năng quốc tế để cung cấp bản mô tả âm thanh về đối tượng hình ảnh cho người khiếm thị."
  },
  "wt-7-4": {
    "question": "Để tự động đánh số thứ tự minh họa (ví dụ: \"Hình 1: Sơ đồ tổ chức\") đi kèm bên dưới một bức ảnh trong tài liệu, ta dùng công cụ nào?",
    "options": [
      "Insert Footnote",
      "Insert Caption (References)",
      "Add Text Box",
      "Page Number"
    ],
    "correctIndex": 1,
    "explanation": "Insert Caption tại tab References dùng để đánh số thứ tự tự động và gắn chú thích tiêu đề cho bảng biểu, hình ảnh trong tài liệu."
  },
  "wt-7-5": {
    "question": "Khi chỉnh sửa nội dung sơ đồ SmartArt, phím tắt nào dùng để hạ cấp một mục thành nhánh con của mục đứng trước nó trong Text Pane?",
    "options": [
      "Phím Enter",
      "Phím Tab",
      "Phím Space",
      "Phím Backspace"
    ],
    "correctIndex": 1,
    "explanation": "Nhấn phím Tab trong Text Pane của SmartArt sẽ hạ cấp (Demote) mục hiện tại thành nhánh con phân cấp cấp dưới."
  },
  "wt-8-1": {
    "question": "Điểm khác biệt căn bản về vị trí hiển thị giữa Chú thích chân trang (Footnote) và Chú thích cuối (Endnote) là gì?",
    "options": [
      "Footnote ở đầu trang, Endnote ở cuối trang",
      "Footnote hiển thị ở đáy của trang hiện tại, còn Endnote hiển thị tập trung ở trang cuối cùng của tài liệu",
      "Footnote chỉ dùng cho hình ảnh, Endnote dùng cho văn bản",
      "Không có khác biệt nào về vị trí"
    ],
    "correctIndex": 1,
    "explanation": "Footnote luôn được in ở chân của trang hiện tại; trong khi Endnote được gom lại và in ở phần kết thúc của toàn bộ tài liệu (hoặc cuối Section)."
  },
  "wt-8-2": {
    "question": "Chuẩn định dạng trích dẫn học thuật phổ biến nào thường được yêu cầu lựa chọn trong mục References > Style của bài thi MOS Word?",
    "options": [
      "ISO 9001",
      "APA hoặc MLA",
      "Unicode",
      "TCVN3"
    ],
    "correctIndex": 1,
    "explanation": "APA (American Psychological Association) và MLA (Modern Language Association) là hai phong cách trích dẫn nguồn chuẩn mực phổ biến nhất."
  },
  "wt-8-3": {
    "question": "Điều kiện tiên quyết để tính năng Table of Contents có thể tự động thu thập và tạo bảng mục lục chính xác là gì?",
    "options": [
      "Văn bản phải được in đậm toàn bộ",
      "Các tiêu đề đề mục phải được gán các kiểu dáng Heading (Heading 1, 2, 3...)",
      "Tài liệu phải có ít nhất 10 trang",
      "Phải chèn bảng biểu ở đầu trang"
    ],
    "correctIndex": 1,
    "explanation": "Table of Contents hoạt động bằng cách quét các khối văn bản được định dạng theo cấu trúc Style Heading để xây dựng cây mục lục."
  },
  "wt-8-4": {
    "question": "Tổ hợp phím tắt nhanh nào sau đây dùng để chèn một bình luận mới (New Comment) trong Microsoft Word?",
    "options": [
      "Ctrl + C",
      "Ctrl + Alt + M",
      "Shift + F7",
      "Alt + Ctrl + C"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + Alt + M là phím tắt mặc định để tạo nhanh một chú thích bình luận (New Comment) tại đoạn văn đang chọn."
  },
  "wt-8-5": {
    "question": "Khi nhận được một tài liệu có bật Track Changes, thao tác nào cho phép người duyệt phê duyệt và chấp nhận toàn bộ các thay đổi cùng một lúc?",
    "options": [
      "Review > Accept > Accept All Changes",
      "Tắt nút Track Changes",
      "Lưu tệp dưới dạng PDF",
      "Review > Reject > Reject All Changes"
    ],
    "correctIndex": 0,
    "explanation": "Lựa chọn Accept All Changes trên thẻ Review sẽ chính thức áp dụng toàn bộ các thay đổi được theo dõi vào tài liệu chính thức."
  },
  "et-1-1": {
    "question": "Địa chỉ của ô nằm ở giao điểm giữa cột D và hàng 8 được viết chuẩn xác là gì?",
    "options": [
      "8D",
      "D8",
      "D-8",
      "$8$D"
    ],
    "correctIndex": 1,
    "explanation": "Quy ước địa chỉ ô trong Excel luôn luôn viết tên Cột trước, sau đó đến chỉ số Hàng (ví dụ: D8)."
  },
  "et-1-2": {
    "question": "Theo quy tắc mặc định của Excel, dữ liệu kiểu Số (Number) khi nhập vào ô sẽ được căn lề như thế nào?",
    "options": [
      "Căn thẳng lề trái",
      "Căn thẳng lề phải",
      "Căn chính giữa",
      "Căn đều hai bên"
    ],
    "correctIndex": 1,
    "explanation": "Dữ liệu số mặc định luôn căn sát lề bên phải để các hàng đơn vị, hàng chục, hàng trăm thẳng cột với nhau."
  },
  "et-1-3": {
    "question": "Để kiểm tra xem sổ tính có sử dụng tính năng nào không tương thích với các phiên bản Excel cũ hay không, ta thực hiện thao tác nào?",
    "options": [
      "File > Info > Check for Issues > Check Compatibility",
      "Home > Editing > Clear All",
      "Data > Data Validation > Circle Invalid Data",
      "Review > Proofing > Spelling"
    ],
    "correctIndex": 0,
    "explanation": "Tính năng Check Compatibility trong nhóm Check for Issues tại Backstage chuyên dùng để rà soát xung đột phiên bản."
  },
  "et-1-4": {
    "question": "Để chọn đồng thời hai vùng ô không liền nhau A2:A8 và D2:D8, ta phải giữ phím nào trên bàn phím khi chọn vùng thứ hai?",
    "options": [
      "Phím Alt",
      "Phím Shift",
      "Phím Ctrl",
      "Phím Tab"
    ],
    "correctIndex": 2,
    "explanation": "Phím Ctrl cho phép chọn nhiều vùng dữ liệu phân tán, không nằm liền kề nhau."
  },
  "et-2-1": {
    "question": "Khi muốn sao chép kết quả của một công thức sang vị trí khác mà không muốn công thức bị lỗi khi dữ liệu gốc thay đổi, ta dùng tùy chọn Paste nào?",
    "options": [
      "Paste Formulas",
      "Paste Values",
      "Paste Formats",
      "Paste Link"
    ],
    "correctIndex": 1,
    "explanation": "Paste Values sẽ loại bỏ công thức gốc và chỉ dán giá trị kết quả cố định vào ô mới."
  },
  "et-2-2": {
    "question": "Nguyên nhân chính khiến một ô chứa dữ liệu kiểu số hiển thị toàn bộ ký hiệu \"#####\" là gì?",
    "options": [
      "Công thức chia cho số 0",
      "Độ rộng cột quá hẹp so với độ dài của số",
      "Dữ liệu số bị lỗi cú pháp",
      "Ô bị xóa định dạng"
    ],
    "correctIndex": 1,
    "explanation": "Chuỗi ##### chỉ xuất hiện khi ô số không đủ bề rộng để hiển thị đầy đủ các chữ số, cần nới rộng cột hoặc AutoFit."
  },
  "et-2-3": {
    "question": "Để sao chép nhanh một công thức xuống toàn bộ các dòng còn lại của một bảng dữ liệu gồm 1.000 dòng một cách nhanh nhất, ta làm gì?",
    "options": [
      "Kéo chuột rê qua 1.000 dòng",
      "Nhấp đúp chuột vào điểm chốt Fill Handle (dấu vuông nhỏ góc dưới ô)",
      "Gõ lại công thức ở từng ô",
      "Dùng phím Page Down"
    ],
    "correctIndex": 1,
    "explanation": "Nhấp đúp chuột vào Fill Handle sẽ tự động phủ công thức xuống đến dòng cuối cùng của bảng dữ liệu tiếp giáp."
  },
  "et-2-4": {
    "question": "Ký tự nào sau đây KHÔNG ĐƯỢC PHÉP xuất hiện trong tên của một trang tính (Worksheet)?",
    "options": [
      "Dấu gạch dưới (_)",
      "Dấu gạch chéo (/ hoặc )",
      "Dấu gạch nối (-)",
      "Dấu cách (Khoảng trắng)"
    ],
    "correctIndex": 1,
    "explanation": "Tên Sheet không được chứa các ký tự đặc biệt của hệ thống tệp như /  ? * : [ ]."
  },
  "et-3-1": {
    "question": "Trong biểu thức Excel: =2 + 3 * 4 ^ 2, kết quả tính toán trả về là bao nhiêu theo đúng thứ tự ưu tiên?",
    "options": [
      "80",
      "50",
      "400",
      "38"
    ],
    "correctIndex": 1,
    "explanation": "Lũy thừa 4^2 = 16 thực hiện trước; sau đó nhân: 3 * 16 = 48; cuối cùng cộng: 2 + 48 = 50."
  },
  "et-3-2": {
    "question": "Khi con trỏ soạn thảo đặt tại tên ô \"B5\" trong thanh công thức, nhấn phím F4 hai lần liên tiếp sẽ cho ra dạng địa chỉ nào?",
    "options": [
      "$B$5",
      "B$5",
      "$B5",
      "B5"
    ],
    "correctIndex": 1,
    "explanation": "Nhấn F4 lần 1 cho $B$5 (tuyệt đối); nhấn F4 lần 2 cho B$5 (hỗn hợp cố định hàng)."
  },
  "et-3-3": {
    "question": "Cho dãy ô A1:A5 lần lượt chứa các giá trị: 10, \"Tin học\", [Ô trống], 25, \"Đỗ\". Hàm =COUNTA(A1:A5) trả về kết quả là bao nhiêu?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "explanation": "COUNTA đếm tất cả các ô không rỗng: gồm 2 ô số (10, 25) và 2 ô chữ (\"Tin học\", \"Đỗ\"), tổng cộng có 4 ô có nội dung."
  },
  "et-3-4": {
    "question": "Nếu ô A1 chứa chuỗi \"THPT-2024\", công thức =RIGHT(A1, 4) sẽ trả về kết quả nào?",
    "options": [
      "\"THPT\"",
      "\"2024\"",
      "\"-2024\"",
      "\"PT-2\""
    ],
    "correctIndex": 1,
    "explanation": "Hàm RIGHT lấy ra 4 ký tự tính từ phía bên phải ngoài cùng của chuỗi, thu được \"2024\"."
  },
  "et-4-1": {
    "question": "Nếu ô A1 đang chứa số thập phân 0.15, khi ta bấm chọn nút định dạng Percentage (%), ô A1 sẽ hiển thị giá trị nào?",
    "options": [
      "0.15%",
      "15%",
      "1.5%",
      "150%"
    ],
    "correctIndex": 1,
    "explanation": "Định dạng phần trăm sẽ nhân giá trị trong ô với 100 và đính kèm ký hiệu % vào cuối số."
  },
  "et-4-2": {
    "question": "Khi sử dụng lệnh \"Merge & Center\" để gộp nhiều ô đang có dữ liệu thành một ô duy nhất, dữ liệu ở những ô nào sẽ được giữ lại?",
    "options": [
      "Dữ liệu ở tất cả các ô được ghép nối lại với nhau",
      "Chỉ giữ lại dữ liệu của ô ở góc trên cùng bên trái",
      "Chỉ giữ lại dữ liệu của ô ở góc dưới cùng bên phải",
      "Toàn bộ dữ liệu của tất cả các ô đều bị xóa sạch"
    ],
    "correctIndex": 1,
    "explanation": "Excel đưa ra cảnh báo rằng việc Merge cells chỉ giữ lại duy nhất giá trị của ô phía trên bên trái và loại bỏ toàn bộ dữ liệu ở các ô còn lại."
  },
  "et-4-3": {
    "question": "Để áp dụng định dạng có sẵn chuẩn hóa như \"Heading 1\" hay \"Accent 1\" cho một ô tiêu đề, ta sử dụng tính năng nào trên thẻ Home?",
    "options": [
      "Format Cells",
      "Cell Styles",
      "Conditional Formatting",
      "AutoFormat"
    ],
    "correctIndex": 1,
    "explanation": "Thư viện Cell Styles trên nhóm Styles thẻ Home chứa các kiểu mẫu trình bày chuyên nghiệp định sẵn của Excel."
  },
  "et-4-4": {
    "question": "Tính năng nào trong Excel cho phép tự động đổi màu nền của các ô thành màu đỏ nếu điểm thi của học sinh nhỏ hơn 5.0?",
    "options": [
      "Data Validation",
      "Format Painter",
      "Conditional Formatting",
      "Cell Styles"
    ],
    "correctIndex": 2,
    "explanation": "Conditional Formatting (Định dạng có điều kiện) sẽ tự động kiểm tra giá trị và áp dụng định dạng khi thỏa mãn điều kiện < 5.0."
  },
  "et-5-1": {
    "question": "Để khóa cố định 2 hàng đầu tiên (Hàng 1 và Hàng 2) cùng với cột đầu tiên (Cột A), ta đặt con trỏ tại ô nào trước khi chọn View > Freeze Panes?",
    "options": [
      "Ô A2",
      "Ô B2",
      "Ô B3",
      "Ô C3"
    ],
    "correctIndex": 2,
    "explanation": "Ô B3 nằm ngay dưới hàng 2 và nằm ngay bên phải cột A; do đó chọn Freeze Panes tại ô B3 sẽ khóa toàn bộ hàng 1-2 và cột A."
  },
  "et-5-2": {
    "question": "Chế độ xem nào trong Excel hiển thị ranh giới các trang in bằng các đường nét đứt màu xanh cho phép kéo thả trực quan để điều chỉnh?",
    "options": [
      "Normal View",
      "Page Layout View",
      "Page Break Preview",
      "Custom Views"
    ],
    "correctIndex": 2,
    "explanation": "Page Break Preview (Xem trước ngắt trang) hiển thị ranh giới trang in bằng các đường màu xanh và số thứ tự Page 1, Page 2."
  },
  "et-5-3": {
    "question": "Muốn khi in một bảng dữ liệu dài 20 trang giấy thì hàng tiêu đề bảng luôn tự động lặp lại ở đầu mỗi trang in, ta sử dụng tính năng nào?",
    "options": [
      "Freeze Panes",
      "Print Titles",
      "Set Print Area",
      "Page Break"
    ],
    "correctIndex": 1,
    "explanation": "Tính năng Print Titles trên thẻ Page Layout có mục \"Rows to repeat at top\" dùng để in lặp lại hàng tiêu đề trên mọi trang giấy."
  },
  "et-5-4": {
    "question": "Mã trường nào sau đây trong phần Header/Footer của Excel sẽ tự động chèn tổng số trang của tài liệu?",
    "options": [
      "&[Page]",
      "&[Pages]",
      "&[Total]",
      "&[NumPages]"
    ],
    "correctIndex": 1,
    "explanation": "&[Page] trả về số trang hiện hành, trong khi &[Pages] trả về tổng số trang của toàn bộ tài liệu in."
  },
  "et-6-1": {
    "question": "Để vẽ nhanh một biểu đồ hình cột mặc định nhúng ngay trong trang tính hiện hành từ vùng dữ liệu đang chọn, ta nhấn tổ hợp phím nào?",
    "options": [
      "F1",
      "Alt + F1",
      "Ctrl + F1",
      "Shift + F1"
    ],
    "correctIndex": 1,
    "explanation": "Alt + F1 chèn ngay biểu đồ cột vào sheet hiện tại; trong khi phím đơn F11 sẽ tạo ra một Chart Sheet độc lập."
  },
  "et-6-2": {
    "question": "Thành phần nào trong biểu đồ có chức năng hiển thị con số giá trị cụ thể ngay trên từng cột dữ liệu hoặc lát cắt hình tròn?",
    "options": [
      "Axis Titles",
      "Data Labels",
      "Legend",
      "Gridlines"
    ],
    "correctIndex": 1,
    "explanation": "Data Labels (Nhãn dữ liệu) in trực tiếp số liệu hoặc phần trăm lên từng phần tử của biểu đồ."
  },
  "et-6-3": {
    "question": "Nút lệnh \"Switch Row/Column\" trên thẻ Chart Design có chức năng gì?",
    "options": [
      "Xóa dữ liệu nguồn",
      "Hoán đổi trục dữ liệu giữa các hàng và các cột trong bảng số liệu nguồn",
      "Đổi loại biểu đồ từ cột sang tròn",
      "Di chuyển biểu đồ sang trang tính mới"
    ],
    "correctIndex": 1,
    "explanation": "Switch Row/Column hoán vị các hàng và các cột để thay đổi góc nhìn phân tích dữ liệu trên biểu đồ."
  },
  "et-6-4": {
    "question": "Điểm đặc trưng nổi bật nhất của biểu đồ thu nhỏ Sparklines trong Excel là gì?",
    "options": [
      "Nó là một tệp hình ảnh độc lập",
      "Nó nằm gọn hoàn toàn bên trong một ô tính đơn lẻ",
      "Nó bắt buộc phải nằm trên một sheet riêng",
      "Nó chỉ hỗ trợ dữ liệu kiểu chữ"
    ],
    "correctIndex": 1,
    "explanation": "Sparkline là biểu đồ mini được vẽ trực tiếp bên trong một ô tính duy nhất để mô tả trực quan xu hướng của dòng số liệu đó."
  },
  "et-7-1": {
    "question": "Tên vùng nào sau đây là HỢP LỆ theo quy tắc đặt tên Named Range của Microsoft Excel?",
    "options": [
      "1_BangDiem",
      "Bang Diem",
      "Bang_Diem_2024",
      "A1"
    ],
    "correctIndex": 2,
    "explanation": "Tên vùng phải bắt đầu bằng chữ cái/gạch dưới, không chứa khoảng trắng và không trùng với địa chỉ ô."
  },
  "et-7-2": {
    "question": "Tổ hợp phím tắt nào dùng để chuyển đổi nhanh một vùng ô dữ liệu đang chọn thành bảng chuẩn Excel Table?",
    "options": [
      "Ctrl + T",
      "Ctrl + B",
      "Alt + T",
      "Ctrl + Shift + B"
    ],
    "correctIndex": 0,
    "explanation": "Ctrl + T (hoặc Ctrl + L) mở nhanh hộp thoại Create Table để biến vùng ô thành bảng thông minh."
  },
  "et-7-3": {
    "question": "Trong hộp thoại Sort, tùy chọn \"My data has headers\" mang ý nghĩa gì quan trọng?",
    "options": [
      "Bảng tính không có tiêu đề",
      "Hàng đầu tiên là hàng tiêu đề cột, không tham gia vào quá trình xáo trộn sắp xếp",
      "Tự động tạo thêm một hàng tiêu đề mới",
      "Chỉ sắp xếp hàng đầu tiên"
    ],
    "correctIndex": 1,
    "explanation": "Tùy chọn này bảo vệ hàng tiêu đề không bị cuốn vào quá trình sắp xếp dữ liệu."
  },
  "et-7-4": {
    "question": "Tổ hợp phím tắt nào dùng để bật hoặc tắt nhanh tính năng lọc tự động AutoFilter trên hàng tiêu đề?",
    "options": [
      "Ctrl + F",
      "Ctrl + Shift + L",
      "Ctrl + L",
      "Alt + F"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + Shift + L bật hoặc tắt các nút mũi tên lọc AutoFilter trên dòng tiêu đề của bảng dữ liệu."
  },
  "et-8-1": {
    "question": "Làm thế nào để thêm nhanh một nút lệnh bất kỳ từ thanh Ribbon vào thanh công cụ Quick Access Toolbar?",
    "options": [
      "Kéo thả nút lệnh lên thanh tiêu đề",
      "Nhấp chuột phải vào nút lệnh đó rồi chọn \"Add to Quick Access Toolbar\"",
      "Nhấn phím F12",
      "Nhấp đúp chuột trái vào nút lệnh"
    ],
    "correctIndex": 1,
    "explanation": "Nhấp chuột phải vào bất kỳ công cụ nào và chọn \"Add to Quick Access Toolbar\" là cách nhanh nhất."
  },
  "et-8-2": {
    "question": "Tổ hợp phím tắt chuẩn để mở trực tiếp hộp thoại Tìm kiếm và Thay thế (Find and Replace) tại thẻ Replace là gì?",
    "options": [
      "Ctrl + F",
      "Ctrl + H",
      "Ctrl + K",
      "Ctrl + G"
    ],
    "correctIndex": 1,
    "explanation": "Ctrl + H mở trực tiếp hộp thoại tại thẻ Replace; trong khi Ctrl + F mở thẻ Find."
  },
  "et-8-3": {
    "question": "Tệp có phần mở rộng .csv (Comma Separated Values) là định dạng tệp như thế nào?",
    "options": [
      "Tệp bảng tính nhị phân có chứa macro",
      "Tệp văn bản thuần túy chứa các giá trị dữ liệu được phân cách bằng dấu phẩy",
      "Tệp hình ảnh biểu đồ nén",
      "Tệp mẫu giao diện Word"
    ],
    "correctIndex": 1,
    "explanation": "CSV là định dạng văn bản đơn giản phân tách các trường dữ liệu bằng dấu phẩy, rất phổ biến khi trao đổi số liệu giữa các hệ thống."
  },
  "et-8-4": {
    "question": "Để dò tìm và loại bỏ sạch các thông tin cá nhân của tác giả cùng các bình luận ẩn trước khi gửi sổ tính ra bên ngoài, ta dùng công cụ nào?",
    "options": [
      "Check Compatibility",
      "Inspect Document",
      "Check Accessibility",
      "Protect Workbook"
    ],
    "correctIndex": 1,
    "explanation": "Công cụ Inspect Document trong mục Check for Issues chuyên dùng để rà soát và xóa vĩnh viễn các thông tin ẩn, metadata và ghi chú."
  },
  "ppt-1-1": {
    "question": "Để tạo một bài thuyết trình mới hoàn toàn dựa trên mẫu thiết kế có sẵn theo chủ đề trong PowerPoint, thao tác chuẩn là gì?",
    "options": [
      "Vào thẻ Home > New Slide",
      "Vào thẻ File > New rồi chọn mẫu Theme/Template mong muốn",
      "Vào thẻ Insert > Themes",
      "Vào thẻ Design > Variants"
    ],
    "correctIndex": 1,
    "explanation": "Thẻ File đưa người dùng vào Backstage View, nơi chứa mục New để tạo bài trình chiếu từ trang trắng hoặc từ kho thư viện Template đa dạng."
  },
  "ppt-1-2": {
    "question": "Làm thế nào để thêm một nút lệnh chưa có sẵn trên thanh Ribbon vào thanh Quick Access Toolbar?",
    "options": [
      "Kéo thả trực tiếp biểu tượng vào màn hình chiếu",
      "Nhấp chuột phải vào nút lệnh đó trên Ribbon và chọn \"Add to Quick Access Toolbar\"",
      "Chuyển sang chế độ Slide Master",
      "Nhấn tổ hợp phím Ctrl + Shift + A"
    ],
    "correctIndex": 1,
    "explanation": "Nhấp chuột phải vào bất kỳ lệnh nào trên thanh Ribbon và chọn \"Add to Quick Access Toolbar\" là cách nhanh nhất để đưa lệnh đó lên thanh truy cập nhanh."
  },
  "ppt-1-3": {
    "question": "Khi chuyển đổi tỷ lệ Slide từ Widescreen (16:9) sang Standard (4:3), lựa chọn nào đảm bảo toàn bộ nội dung nằm gọn bên trong slide mà không bị cắt xén?",
    "options": [
      "Maximize",
      "Ensure Fit",
      "Scale to Paper",
      "Stretch Content"
    ],
    "correctIndex": 1,
    "explanation": "Ensure Fit sẽ thu nhỏ tỷ lệ của các đối tượng và nội dung trên slide để đảm bảo chúng nằm trọn vẹn trong khung hình 4:3 mà không bị mất lề."
  },
  "ppt-1-4": {
    "question": "Chế độ xem nào hiển thị tất cả các slide dưới dạng lưới ảnh thu nhỏ, giúp người dùng dễ dàng bao quát và sắp xếp lại thứ tự các slide?",
    "options": [
      "Normal View",
      "Outline View",
      "Slide Sorter View",
      "Reading View"
    ],
    "correctIndex": 2,
    "explanation": "Slide Sorter View hiển thị toàn bộ các trang slide thành dạng các ô lưới nhỏ, rất thuận tiện để quan sát cấu trúc và kéo thả hoán đổi vị trí slide."
  },
  "ppt-2-1": {
    "question": "Khi muốn áp dụng một màu nền vừa thiết lập trong bảng Format Background cho TẤT CẢ các slide trong bài thuyết trình, nút lệnh nào cần được nhấn?",
    "options": [
      "Reset Background",
      "Apply to All",
      "Close Master View",
      "Set as Default Theme"
    ],
    "correctIndex": 1,
    "explanation": "Nút \"Apply to All\" nằm ở chân bảng Format Background sẽ sao chép thiết lập nền vừa chọn cho toàn bộ các slide trong tệp trình chiếu."
  },
  "ppt-2-2": {
    "question": "Để chèn logo trường học sao cho hình ảnh tự động xuất hiện ở góc trên bên phải của TẤT CẢ các trang chiếu, thao tác đúng là gì?",
    "options": [
      "Sao chép và dán ảnh thủ công vào từng trang slide",
      "Vào thẻ View > Slide Master, chọn slide mẹ trên cùng và chèn logo tại đây",
      "Vào thẻ Design > Background Styles",
      "Sử dụng công cụ Section Header"
    ],
    "correctIndex": 1,
    "explanation": "Slide Master mẹ (slide lớn trên cùng trong ngăn Slide Master) quản lý toàn bộ slide con. Mọi yếu tố đặt tại đây sẽ hiển thị tự động trên tất cả các slide."
  },
  "ppt-2-3": {
    "question": "Làm thế nào để hiển thị số trang trên mọi slide nhưng KHÔNG hiển thị số trang trên slide bìa đầu tiên?",
    "options": [
      "Xóa số trang thủ công trên slide 1",
      "Trong hộp thoại Header and Footer, tích chọn \"Slide number\" và tích chọn \"Don't show on title slide\"",
      "Chỉ bấm nút \"Apply\" thay vì \"Apply to All\"",
      "Đặt số trang trong Slide Sorter"
    ],
    "correctIndex": 1,
    "explanation": "Tùy chọn \"Don't show on title slide\" trong hộp thoại Header and Footer sẽ ẩn toàn bộ thông tin ngày tháng, số trang và chân trang trên slide có bố cục Title Slide."
  },
  "ppt-2-4": {
    "question": "Khi một trang slide được thiết lập chế độ \"Hide Slide\", điều gì sẽ xảy ra trong buổi thuyết trình thực tế?",
    "options": [
      "Slide đó bị xóa vĩnh viễn khỏi tệp trình chiếu",
      "Slide đó vẫn được hiển thị bình thường nhưng không có hiệu ứng",
      "Slide đó bị bỏ qua khi trình chiếu và chỉ hiển thị lại khi người dùng chủ động chuyển tới",
      "Slide đó bị chuyển thành trang trắng hoàn toàn"
    ],
    "correctIndex": 2,
    "explanation": "Hide Slide chỉ ẩn trang chiếu trong quá trình trình chiếu toàn màn hình (Slide Show), dữ liệu bên trong vẫn được giữ nguyên vẹn trong tệp tin."
  },
  "ppt-3-1": {
    "question": "Để chèn thêm các trang slide tự động tạo từ một tệp dàn bài Microsoft Word có sẵn (.docx), thao tác chuẩn xác là gì?",
    "options": [
      "Vào thẻ Insert > Object > Create from file",
      "Vào thẻ Home > New Slide > chọn \"Slides from Outline...\"",
      "Mở file Word lên rồi copy dán từng đoạn vào slide",
      "Vào thẻ File > Open > Word Document"
    ],
    "correctIndex": 1,
    "explanation": "Lệnh Home > New Slide > Slides from Outline... sẽ đọc cấu trúc tiêu đề Heading của file Word để tự động chia thành các slide tương ứng."
  },
  "ppt-3-2": {
    "question": "Muốn thay đổi khoảng cách giữa các ký tự chữ trong một tiêu đề slide để chữ giãn rộng hơn (Loose hoặc Very Loose), công cụ nào được sử dụng?",
    "options": [
      "Line Spacing",
      "Character Spacing (AV)",
      "Change Case",
      "Text Direction"
    ],
    "correctIndex": 1,
    "explanation": "Nút Character Spacing (biểu tượng chữ AV có mũi tên 2 chiều) trong nhóm Font trên thẻ Home dùng để điều chỉnh độ giãn cách giữa các chữ cái."
  },
  "ppt-3-3": {
    "question": "Làm thế nào để chia một danh sách gạch đầu dòng dài bên trong một khung Text Box thành 2 cột đều nhau?",
    "options": [
      "Tạo 2 khung Text Box riêng rồi copy chia đôi danh sách",
      "Vào thẻ Home > nhóm Paragraph > chọn biểu tượng Columns và chọn \"Two Columns\"",
      "Chuyển bố cục slide sang Comparison",
      "Nhấn phím Tab ở đầu mỗi dòng"
    ],
    "correctIndex": 1,
    "explanation": "Nút Columns trong nhóm Paragraph trên thẻ Home cho phép chia trực tiếp văn bản trong khung chứa thành 2 hoặc 3 cột mà không cần tạo nhiều Text Box."
  },
  "ppt-3-4": {
    "question": "Khi có 3 khung Text Box nằm ngang trên slide nhưng khoảng cách giữa chúng không đều nhau, tính năng nào giúp tự động chia đều khoảng cách giữa chúng?",
    "options": [
      "Align Center",
      "Distribute Horizontally",
      "Distribute Vertically",
      "Group Objects"
    ],
    "correctIndex": 1,
    "explanation": "\"Distribute Horizontally\" tính toán khoảng cách giữa các mép đối tượng ngoài cùng và dàn đều khoảng trống cho các đối tượng ở giữa theo chiều ngang."
  },
  "ppt-4-1": {
    "question": "Khi muốn làm nổi bật hàng đầu tiên của bảng biểu với nền màu đậm hơn để làm tiêu đề các cột, tùy chọn nào trong Table Style Options cần được bật?",
    "options": [
      "Banded Rows",
      "Header Row",
      "First Column",
      "Total Row"
    ],
    "correctIndex": 1,
    "explanation": "Tùy chọn \"Header Row\" áp dụng định dạng đặc biệt (thường là màu nền đậm hơn và chữ in hoa/in đậm) cho hàng trên cùng của bảng để phân biệt tiêu đề cột."
  },
  "ppt-4-2": {
    "question": "Để gộp 3 ô liên tiếp trên cùng một hàng của bảng thành một ô duy nhất để chứa tiêu đề chính, thao tác nào sau đây là chính xác?",
    "options": [
      "Xóa vách ngăn giữa các ô bằng phím Delete",
      "Chọn 3 ô đó > Thẻ Table Layout > nhóm Merge > chọn \"Merge Cells\"",
      "Vào thẻ Table Design > Eraser",
      "Chọn Split Cells rồi nhập số 1"
    ],
    "correctIndex": 1,
    "explanation": "Lệnh \"Merge Cells\" trên thẻ Table Layout kết hợp nhiều ô được chọn liền kề thành một ô duy nhất."
  },
  "ppt-4-3": {
    "question": "Khi muốn cập nhật hoặc sửa lại các con số dữ liệu của một biểu đồ đã vẽ sẵn trên slide, nút lệnh nào trong thẻ Chart Design cần được chọn?",
    "options": [
      "Add Chart Element",
      "Quick Layout",
      "Edit Data",
      "Change Chart Type"
    ],
    "correctIndex": 2,
    "explanation": "Nút \"Edit Data\" trên thẻ Chart Design sẽ mở lại bảng tính Excel chứa dữ liệu nguồn của biểu đồ để bạn chỉnh sửa con số."
  },
  "ppt-4-4": {
    "question": "Muốn hiển thị con số giá trị cụ thể ngay trên đầu mỗi cột của biểu đồ hình cột, thành phần nào cần được bật trong Add Chart Element?",
    "options": [
      "Gridlines",
      "Legend",
      "Data Labels",
      "Axis Titles"
    ],
    "correctIndex": 2,
    "explanation": "\"Data Labels\" hiển thị chính xác giá trị số liệu tương ứng trên từng cột biểu đồ, điểm dữ liệu hoặc lát cắt biểu đồ tròn."
  },
  "ppt-5-1": {
    "question": "Khi vẽ một hình chữ nhật bo tròn góc, ta muốn thay đổi độ cong của 4 góc thì thực hiện thao tác nào?",
    "options": [
      "Kéo các nút tròn màu trắng ở góc hình",
      "Kéo điểm nút điều chỉnh hình thoi màu vàng (Yellow handle) trên cạnh hình",
      "Vào thẻ View > Gridlines",
      "Nhấn tổ hợp phím Ctrl + Shift + R"
    ],
    "correctIndex": 1,
    "explanation": "Nút điều chỉnh màu vàng (Adjustment Handle) trên các hình Shapes dùng để thay đổi đặc tính hình học riêng biệt như độ bo góc hoặc độ dày mũi tên."
  },
  "ppt-5-2": {
    "question": "Làm thế nào để cắt một bức ảnh phong cảnh hình chữ nhật thành hình tròn elip mà không làm biến dạng tỷ lệ ảnh gốc?",
    "options": [
      "Dùng công cụ vẽ hình Oval đè lên bức ảnh",
      "Chọn ảnh > Thẻ Picture Format > bấm mũi tên dưới nút Crop > chọn \"Crop to Shape\" > chọn hình Oval",
      "Vào thẻ Picture Format > Artistic Effects",
      "Xóa phông nền ảnh bằng Remove Background"
    ],
    "correctIndex": 1,
    "explanation": "\"Crop to Shape\" tự động cắt ảnh khớp theo đường viền của bất kỳ hình khối Shape nào được chọn mà giữ nguyên nội dung bên trong."
  },
  "ppt-5-3": {
    "question": "Để mỗi nhánh hình khối trong sơ đồ SmartArt có một màu sắc phân biệt khác nhau thay vì đơn điệu một màu, công cụ nào cần được áp dụng?",
    "options": [
      "Shape Fill từng hình thủ công",
      "Thẻ SmartArt Design > nhóm SmartArt Styles > chọn nút \"Change Colors\" và chọn nhóm Colorful",
      "Vào thẻ Design > Variants",
      "Chuyển sang chế độ Slide Master"
    ],
    "correctIndex": 1,
    "explanation": "Nút \"Change Colors\" trên thẻ SmartArt Design cung cấp các bộ phối màu Colorful, tự động gán các sắc thái màu khác nhau cho từng nhánh của sơ đồ."
  },
  "ppt-5-4": {
    "question": "Phím tắt nào giúp mở nhanh hộp thoại chèn liên kết Hyperlink cho đối tượng đang chọn trong PowerPoint?",
    "options": [
      "Ctrl + H",
      "Ctrl + L",
      "Ctrl + K",
      "Ctrl + Shift + K"
    ],
    "correctIndex": 2,
    "explanation": "Ctrl + K là phím tắt kinh điển để chèn liên kết Hyperlink trong toàn bộ các ứng dụng Microsoft Office."
  },
  "ppt-6-1": {
    "question": "Hiệu ứng chuyển trang Morph tạo ra chuyển động biến hình mượt mà dựa trên nguyên lý nào?",
    "options": [
      "Cần phải kết nối mạng Internet để xử lý đám mây",
      "Tự động so sánh vị trí, kích thước và hình dáng của các đối tượng giống nhau giữa 2 slide liên tiếp",
      "Bắt buộc phải chuyển đổi slide thành video MP4",
      "Chỉ áp dụng được cho chữ cái, không áp dụng cho hình khối"
    ],
    "correctIndex": 1,
    "explanation": "Morph tự động dò tìm các đối tượng trùng khớp trên slide trước và slide sau, rồi tính toán chuyển động biến đổi vị trí, kích cỡ mượt mà như một thước phim hoạt hình."
  },
  "ppt-6-2": {
    "question": "Khi muốn gán thêm một hiệu ứng biến mất (Exit) cho một hình ảnh đã có sẵn hiệu ứng xuất hiện (Entrance), ta phải bấm vào nút lệnh nào?",
    "options": [
      "Chọn trực tiếp hiệu ứng Exit từ danh mục Animation chính",
      "Bấm nút \"Add Animation\" trong nhóm Advanced Animation",
      "Bấm nút \"Animation Pane\"",
      "Bấm nút \"Trigger\""
    ],
    "correctIndex": 1,
    "explanation": "Nếu chọn trực tiếp trong danh mục Animation thì hiệu ứng mới sẽ ghi đè lên hiệu ứng cũ. Nút \"Add Animation\" cho phép cộng dồn nhiều hiệu ứng trên cùng một đối tượng."
  },
  "ppt-6-3": {
    "question": "Để một dòng chữ tự động xuất hiện ngay sau khi hình ảnh vừa hoàn thành hiệu ứng mà người thuyết trình KHÔNG cần bấm chuột, tùy chọn Start nào cần thiết lập?",
    "options": [
      "Start: On Click",
      "Start: With Previous",
      "Start: After Previous",
      "Start: By Paragraph"
    ],
    "correctIndex": 2,
    "explanation": "\"After Previous\" ra lệnh cho hiệu ứng tự động kích hoạt ngay thời điểm hiệu ứng liền trước nó kết thúc thời gian chạy."
  },
  "ppt-6-4": {
    "question": "Muốn một đoạn nhạc nền tự động phát từ slide đầu tiên xuyên suốt toàn bộ các slide trong bài và ẩn biểu tượng chiếc loa khi trình chiếu, tùy chọn nhanh nào được sử dụng?",
    "options": [
      "Loop until Stopped",
      "Play in Background",
      "Trim Audio",
      "Fade Duration"
    ],
    "correctIndex": 1,
    "explanation": "Nút \"Play in Background\" trong thẻ Audio Tools Playback tự động bật cả 3 tính năng: Tự phát (Automatically), phát xuyên suốt các slide (Play Across Slides) và ẩn biểu tượng loa (Hide During Show)."
  },
  "ppt-7-1": {
    "question": "Khi người thuyết trình nhập văn bản vào khung Notes Pane ở phía dưới slide, khán giả theo dõi trên màn chiếu lớn có nhìn thấy nội dung này không?",
    "options": [
      "Có, khán giả nhìn thấy chữ hiển thị đè lên slide",
      "Không, khán giả chỉ thấy nội dung slide, chỉ người thuyết trình nhìn thấy Notes trên màn hình laptop nhờ Presenter View",
      "Khán giả chỉ nhìn thấy nếu bật chế độ Slide Sorter",
      "Nội dung Notes sẽ bị xóa tự động khi bấm F5"
    ],
    "correctIndex": 1,
    "explanation": "Speaker Notes được thiết kế riêng tư cho người diễn thuyết; trong chế độ Presenter View, chỉ màn hình riêng của diễn giả mới hiển thị phần ghi chú này."
  },
  "ppt-7-2": {
    "question": "Để đảm bảo bài thuyết trình không bao giờ bị lỗi phông chữ khi mang sang trình chiếu trên máy tính khác của trường học, thao tác kỹ thuật quan trọng nhất là gì?",
    "options": [
      "Chuyển tất cả các chữ cái thành hình ảnh",
      "Vào File > Options > Save và tích chọn \"Embed fonts in the file\"",
      "Chỉ sử dụng phông chữ VnTime",
      "Lưu bài thuyết trình ra đĩa CD"
    ],
    "correctIndex": 1,
    "explanation": "Embed fonts in the file sẽ đóng gói trực tiếp bộ tệp phông chữ vào trong tệp tin PowerPoint, giúp hiển thị chuẩn xác 100% trên bất kỳ máy tính nào."
  },
  "ppt-7-3": {
    "question": "Khi đang thuyết trình toàn màn hình, muốn tạm thời làm đen toàn bộ màn hình máy chiếu để lôi kéo toàn bộ sự chú ý của người nghe về phía mình, bạn bấm phím nào trên bàn phím?",
    "options": [
      "Phím D",
      "Phím B",
      "Phím W",
      "Phím Space"
    ],
    "correctIndex": 1,
    "explanation": "Bấm phím B (Black) sẽ chuyển màn hình sang màu đen hoàn toàn; bấm lại phím B lần nữa để trở lại nội dung slide bình thường."
  },
  "ppt-7-4": {
    "question": "Tính năng nào trong PowerPoint giúp tạo ra một slide mục lục chứa các hình thu nhỏ tương tác, khi nhấp vào hình nào thì slide đó sẽ tự động phóng to toàn màn hình?",
    "options": [
      "Hyperlinks",
      "Action Buttons",
      "Summary Zoom",
      "Custom Slide Show"
    ],
    "correctIndex": 2,
    "explanation": "Summary Zoom tạo ra một trang tổng quan trực quan chứa các hình thu nhỏ của các phần; khi thuyết trình chỉ cần nhấp vào hình để phóng to mượt mà."
  },
  "ppt-8-1": {
    "question": "Để giảm dung lượng tối đa cho bài thuyết trình khi nén ảnh, thao tác nào đảm bảo các phần hình ảnh đã bị cắt cúp (Crop) không còn lưu ngầm trong tệp?",
    "options": [
      "Chọn định dạng file .pptx",
      "Tích chọn ô \"Delete cropped areas of pictures\" trong hộp thoại Compress Pictures",
      "Giảm độ sáng của bức ảnh",
      "Chuyển ảnh sang dạng Grayscale"
    ],
    "correctIndex": 1,
    "explanation": "\"Delete cropped areas of pictures\" sẽ xóa triệt để các pixel thừa ngoài vùng nhìn thấy của ảnh, giúp tệp tin nhẹ đi đáng kể và bảo mật nội dung không muốn lộ."
  },
  "ppt-8-2": {
    "question": "Công cụ nào trong thẻ File > Info giúp tự động phát hiện và xóa sạch tên tác giả, thuộc tính cá nhân và các bình luận trao đổi nội bộ trước khi xuất bản file?",
    "options": [
      "Accessibility Checker",
      "Document Inspector",
      "Compatibility Checker",
      "Version History"
    ],
    "correctIndex": 1,
    "explanation": "Document Inspector quét toàn bộ tệp để phát hiện các thuộc tính ẩn (Metadata), tên người tạo, bình luận nháp và cho phép xóa an toàn chỉ bằng một nút bấm."
  },
  "ppt-8-3": {
    "question": "Khi một bài thuyết trình được thiết lập chế độ \"Mark as Final\", hiện tượng gì sẽ xuất hiện trên màn hình khi người dùng mở tệp?",
    "options": [
      "Tệp tin yêu cầu phải nhập mật khẩu mới xem được",
      "Một thanh thông báo màu vàng xuất hiện thông báo bài thuyết trình ở chế độ Chỉ đọc (Read-only) để hạn chế chỉnh sửa",
      "Tất cả các hiệu ứng diễn hoạt bị xóa bỏ",
      "Tệp tin tự động in ra máy in"
    ],
    "correctIndex": 1,
    "explanation": "\"Mark as Final\" vô hiệu hóa các nút chỉnh sửa trên thanh Ribbon và hiện thanh cảnh báo màu vàng thông báo rằng tác giả đã hoàn tất bài thuyết trình."
  },
  "ppt-8-4": {
    "question": "Kiểu in tài liệu phát tay (Handouts) nào trong mục Print Layout sẽ tự động in 3 slide trên một trang giấy và có sẵn các dòng kẻ ngang bên cạnh để người tham dự ghi chép?",
    "options": [
      "Full Page Slides",
      "Notes Pages",
      "3 Slides",
      "6 Slides Horizontal"
    ],
    "correctIndex": 2,
    "explanation": "Bố cục Handouts \"3 Slides\" là thiết kế độc đáo nhất trong PowerPoint: đặt 3 slide ở cột bên trái và tạo sẵn 3 cụm dòng kẻ ngang ở cột bên phải cho khán giả ghi chép."
  }
};
