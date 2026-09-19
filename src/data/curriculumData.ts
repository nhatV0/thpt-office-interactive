import type { ModuleInfo } from '../types/curriculum';

export const CURRICULUM_DATA: Record<string, ModuleInfo> = {
  word: {
    id: 'word',
    name: 'Microsoft Word (Soạn Thảo Văn Bản)',
    shortDescription: 'Quy chuẩn định dạng văn bản hành chính, bảng biểu, đồ họa và mục lục tự động cho học sinh THPT.',
    badgeName: 'Bậc Thầy Soạn Thảo',
    colorName: 'sky',
    accentClass: 'text-sky-600 dark:text-sky-400 bg-sky-600',
    badgeColorClass: 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border-sky-300 dark:border-sky-800',
    lessons: [
      {
        id: 'word-lesson-1',
        moduleId: 'word',
        order: 1,
        title: 'Giao Diện & Thiết Lập Trang In Chuẩn (Page Setup)',
        summary: 'Nắm vững quy chuẩn văn bản hành chính Việt Nam: khổ giấy A4, định dạng lề chuẩn và hướng giấy.',
        durationMinutes: 15,
        theories: [
          {
            id: 'wt-1-1',
            title: 'Quy Định Định Dạng Trang Văn Bản',
            concept: 'Theo Nghị định 30/2020/NĐ-CP về công tác văn thư, văn bản hành chính chuẩn sử dụng khổ giấy A4 (210 x 297 mm) đặt theo chiều dọc (Portrait).',
            keyPoints: [
              'Khổ giấy mặc định bắt buộc: A4.',
              'Khoảng cách lề trên (Top) và lề dưới (Bottom): 2.0 cm đến 2.5 cm.',
              'Khoảng cách lề trái (Left): 3.0 cm đến 3.5 cm (để chừa gáy đóng tập).',
              'Khoảng cách lề phải (Right): 1.5 cm đến 2.0 cm.'
            ],
            shortcut: 'Phím tắt mở hộp thoại Page Setup: Alt + P, S, P hoặc nhấp đúp vào vùng trống trên thước đo dọc.',
            examTip: 'Đề thi THPT và MOS thường yêu cầu đổi đơn vị từ Inch sang Centimeter trong Word Options > Advanced > Display trước khi đặt lề.'
          },
          {
            id: 'wt-1-2',
            title: 'Hướng Giấy & Ngắt Vùng (Orientation & Section Breaks)',
            concept: 'Mỗi tài liệu có thể chứa nhiều vùng (Section) khác nhau, cho phép một số trang nằm ngang (Landscape) để chứa bảng số liệu lớn trong khi các trang khác vẫn giữ chiều dọc.',
            keyPoints: [
              'Orientation có 2 lựa chọn: Portrait (dọc) và Landscape (ngang).',
              'Để đổi hướng chỉ một trang riêng lẻ: chèn Section Break (Next Page) ở đầu và cuối trang đó.',
              'Margins chuẩn có sẵn trong mục Presets: Normal, Narrow, Moderate, Wide.'
            ],
            shortcut: 'Alt + P, O để đổi nhanh hướng giấy (Orientation).',
            examTip: 'Không bao giờ gõ Enter nhiều lần để sang trang mới, luôn dùng tổ hợp phím Ctrl + Enter (Page Break) hoặc Section Break.'
          },
          {
            id: 'wt-1-3',
            title: 'Quy Chuẩn Hiển Thị Thước Đo & Lưới Soạn Thảo',
            concept: 'Thanh thước đo (Ruler) giúp canh chỉnh vị trí lề, thụt đầu dòng (First Line Indent) và đặt Tab Stop chính xác tuyệt đối.',
            keyPoints: [
              'Bật/tắt thanh thước đo: Tab View > tích chọn Ruler.',
              'Con trượt tam giác phía trên: First Line Indent (thụt dòng đầu tiên).',
              'Con trượt tam giác phía dưới: Hanging Indent (thụt các dòng sau).',
              'Khối hình chữ nhật dưới cùng: Left Indent (dịch chuyển toàn bộ khối văn bản bên trái).'
            ],
            shortcut: 'Alt + W, R để bật hoặc tắt thanh Ruler tức thì.',
            examTip: 'Thụt đầu dòng đoạn văn chuẩn hành chính là từ 1.0 cm đến 1.27 cm (tương đương 0.5 inch).'
          }
        ],
        tasks: [
          {
            id: 'wtask-1-1',
            title: 'Thiết lập hướng giấy ngang (Landscape)',
            instruction: 'Bấm vào thẻ Layout trên thanh Ribbon, sau đó chọn nút Orientation và nhấp chọn Landscape.',
            hint: 'Nhấp chuột vào tab Layout > nhóm Page Setup > Orientation > Landscape.',
            targetType: 'ribbon-action',
            actionKey: 'word-orientation-landscape'
          },
          {
            id: 'wtask-1-2',
            title: 'Áp dụng khổ giấy tiêu chuẩn A4',
            instruction: 'Trên thanh Ribbon tại thẻ Layout, bấm vào biểu tượng Size và chọn kích cỡ giấy A4.',
            hint: 'Nhấp chuột vào tab Layout > nhóm Page Setup > Size > A4 (210 x 297 mm).',
            targetType: 'ribbon-action',
            actionKey: 'word-size-a4'
          },
          {
            id: 'wtask-1-3',
            title: 'Áp dụng lề văn bản chuẩn (Normal Margins)',
            instruction: 'Bấm vào nút Margins trên thẻ Layout và chọn kiểu lề Normal để chuẩn hóa khoảng cách mép giấy.',
            hint: 'Nhấp chuột vào tab Layout > Margins > Normal.',
            targetType: 'ribbon-action',
            actionKey: 'word-margins-normal'
          }
        ],
        quiz: [
          {
            id: 'wq-1-1',
            question: 'Theo quy định hiện hành về văn bản hành chính Việt Nam, khổ giấy nào là quy chuẩn bắt buộc?',
            options: ['Khổ giấy Letter (8.5 x 11 inches)', 'Khổ giấy A4 (210 x 297 mm)', 'Khổ giấy Legal (8.5 x 14 inches)', 'Khổ giấy A3 (297 x 420 mm)'],
            correctIndex: 1,
            explanation: 'Khổ giấy chuẩn trong thể thức soạn thảo văn bản hành chính nhà nước là A4 (210 mm x 297 mm).'
          },
          {
            id: 'wq-1-2',
            question: 'Khi muốn chỉ riêng trang chứa bảng số liệu nằm ngang (Landscape) trong tài liệu nhiều trang dọc, ta phải chèn công cụ gì?',
            options: ['Page Break (Ngắt trang thường)', 'Line Break (Ngắt dòng Shift + Enter)', 'Section Break (Next Page)', 'Column Break (Ngắt cột)'],
            correctIndex: 2,
            explanation: 'Section Break chia văn bản thành các phân vùng độc lập, cho phép áp dụng hướng giấy, lề giấy và tiêu đề trang khác nhau cho từng vùng.'
          },
          {
            id: 'wq-1-3',
            question: 'Tổ hợp phím tắt nào dùng để ngắt trang văn bản ngay lập tức mà không cần nhấn phím Enter liên tiếp?',
            options: ['Ctrl + Enter', 'Shift + Enter', 'Alt + Enter', 'Ctrl + Space'],
            correctIndex: 0,
            explanation: 'Ctrl + Enter tạo một dấu ngắt trang (Page Break) chuẩn xác và chuyên nghiệp.'
          },
          {
            id: 'wq-1-4',
            question: 'Lề trái (Left Margin) của văn bản hành chính thường được quy định rộng hơn lề phải là vì lý do gì?',
            options: ['Quy ước thẩm mỹ ngẫu nhiên', 'Để chừa diện tích đóng gáy hồ sơ tài liệu', 'Để chứa ghi chú ngoài lề (Margin notes)', 'Để tiết kiệm mực máy in'],
            correctIndex: 1,
            explanation: 'Lề trái từ 3.0 cm đến 3.5 cm giúp khi đóng tập bìa cứng hoặc kẹp hồ sơ không bị che mất nội dung chữ.'
          },
          {
            id: 'wq-1-5',
            question: 'Để kích hoạt thanh thước đo hiển thị trên màn hình soạn thảo Word, thao tác đúng là gì?',
            options: ['Vào Home > tích chọn Ruler', 'Vào Insert > chọn Shapes > Ruler', 'Vào View > tích chọn ô Ruler', 'Vào Design > chọn Document Formatting'],
            correctIndex: 2,
            explanation: 'Thanh thước đo Ruler nằm trong nhóm Show tại thẻ View.'
          }
        ]
      },
      {
        id: 'word-lesson-2',
        moduleId: 'word',
        order: 2,
        title: 'Định Dạng Ký Tự & Đoạn Văn Bản (Font & Paragraph)',
        summary: 'Làm chủ định dạng Font chữ, kích cỡ, màu sắc, khoảng cách dòng và căn lề đều hai bên (Justify).',
        durationMinutes: 18,
        theories: [
          {
            id: 'wt-2-1',
            title: 'Quy Chuẩn Phông Chữ & Kích Cỡ',
            concept: 'Văn bản hành chính tiếng Việt quy định dùng bảng mã Unicode chuẩn, phông chữ Times New Roman đồng nhất.',
            keyPoints: [
              'Phông chữ bắt buộc: Times New Roman, bộ mã Unicode dựng sẵn.',
              'Cỡ chữ phần thân văn bản: từ 13 pt đến 14 pt.',
              'Cỡ chữ tiêu đề, phụ mục có thể đậm (Bold) hoặc in nghiêng (Italic) tùy cấp độ.',
              'Không lạm dụng quá 2 phông chữ trong một tài liệu học tập hoặc báo cáo.'
            ],
            shortcut: 'Ctrl + Shift + F để mở bảng phông chữ; Ctrl + ] để tăng cỡ chữ; Ctrl + [ để giảm cỡ chữ.',
            examTip: 'Học sinh hay nhầm lẫn giữa định dạng tô màu chữ (Font Color) và tô màu nền highlight (Text Highlight Color).'
          },
          {
            id: 'wt-2-2',
            title: 'Căn Lề & Khoảng Cách Dòng (Line & Paragraph Spacing)',
            concept: 'Đoạn văn chuyên nghiệp luôn được căn đều hai bên (Justify) để mép văn bản thẳng đều và đẹp mắt.',
            keyPoints: [
              'Căn trái (Align Left - Ctrl + L): Dùng cho tiêu đề phụ hoặc thơ ca.',
              'Căn giữa (Center - Ctrl + E): Dùng cho Quốc hiệu, Tiêu ngữ, Tên văn bản, Bảng biểu.',
              'Căn phải (Align Right - Ctrl + R): Dùng cho ngày tháng năm, chữ ký người ký.',
              'Căn đều hai bên (Justify - Ctrl + J): Bắt buộc cho phần thân nội dung văn bản.',
              'Khoảng cách dòng chuẩn (Line Spacing): 1.15 đến 1.5 lines. Khoảng cách đoạn (Before/After): 6 pt.'
            ],
            shortcut: 'Ctrl + J: Căn đều 2 bên; Ctrl + 1: Dòng đơn (Single); Ctrl + 5: Khoảng cách 1.5 dòng; Ctrl + 2: Dòng kép (Double).',
            examTip: 'Không dùng dấu cách trống (Spacebar) để căn giữa văn bản. Luôn dùng lệnh Center hoặc phím Ctrl + E.'
          },
          {
            id: 'wt-2-3',
            title: 'Sao Chép Định Dạng Thần Tốc Với Format Painter',
            concept: 'Công cụ hình cây chổi Format Painter giúp sao chép toàn bộ thuộc tính định dạng của một khối văn bản sang khối văn bản khác chỉ với 1 cú nhấp chuột.',
            keyPoints: [
              'Chọn đoạn văn bản mẫu đã có định dạng đẹp.',
              'Nhấp chuột 1 lần vào biểu tượng cái chổi để áp dụng cho 1 vị trí.',
              'Nhấp đúp chuột liên tục vào cái chổi để áp dụng cho nhiều vị trí khác nhau mà chổi không bị tắt.'
            ],
            shortcut: 'Ctrl + Shift + C để sao chép định dạng; Ctrl + Shift + V để dán định dạng.',
            examTip: 'Đây là phím tắt xuất hiện thường xuyên nhất trong các đề thi kỹ năng văn phòng MOS Word.'
          }
        ],
        tasks: [
          {
            id: 'wtask-2-1',
            title: 'In đậm nội dung tiêu đề văn bản',
            instruction: 'Chọn khối tiêu đề trên trang giấy và nhấn vào nút Bold (chữ B) trên thẻ Home.',
            hint: 'Nhấp nút Bold (biểu tượng chữ B) ở nhóm Font trên thẻ Home.',
            targetType: 'ribbon-action',
            actionKey: 'word-font-bold'
          },
          {
            id: 'wtask-2-2',
            title: 'Căn đều hai bên nội dung đoạn văn (Justify)',
            instruction: 'Nhấn vào nút Justify trên nhóm Paragraph thẻ Home để căn thẳng cả hai bên lề.',
            hint: 'Nhấp biểu tượng Justify (các đường kẻ ngang đều nhau) hoặc bấm phím Ctrl + J.',
            targetType: 'ribbon-action',
            actionKey: 'word-align-justify'
          },
          {
            id: 'wtask-2-3',
            title: 'Đổi phông chữ sang Times New Roman',
            instruction: 'Chọn ô danh sách phông chữ trên nhóm Font và đổi thành Times New Roman.',
            hint: 'Nhấp hộp chọn Font trên Ribbon Home > Times New Roman.',
            targetType: 'ribbon-action',
            actionKey: 'word-font-times'
          }
        ],
        quiz: [
          {
            id: 'wq-2-1',
            question: 'Tổ hợp phím tắt nào dùng để căn lề đều cả hai bên (Justify) cho đoạn văn bản đang chọn?',
            options: ['Ctrl + L', 'Ctrl + E', 'Ctrl + R', 'Ctrl + J'],
            correctIndex: 3,
            explanation: 'Ctrl + J (Justify) căn chỉnh các mép đoạn văn bản thẳng tắp cả bên trái và bên phải.'
          },
          {
            id: 'wq-2-2',
            question: 'Để sao chép thuộc tính định dạng (màu sắc, phông chữ, cỡ chữ) từ một đoạn văn bản mẫu sang vị trí khác, ta dùng tổ hợp phím nào?',
            options: ['Ctrl + C và Ctrl + V', 'Ctrl + Shift + C và Ctrl + Shift + V', 'Alt + C và Alt + V', 'Ctrl + Alt + C và Ctrl + Alt + V'],
            correctIndex: 1,
            explanation: 'Ctrl + Shift + C sao chép định dạng (Format Copy) và Ctrl + Shift + V dán định dạng (Format Paste).'
          },
          {
            id: 'wq-2-3',
            question: 'Khi muốn áp dụng công cụ sao chép định dạng Format Painter cho nhiều đoạn văn rời rạc nhau, thao tác chuột nào là tối ưu nhất?',
            options: ['Nhấp chuột phải vào chổi', 'Nhấp đúp chuột trái (Double-click) vào biểu tượng cây chổi', 'Kéo thả cây chổi', 'Nhấp chuột giữ phím Alt'],
            correctIndex: 1,
            explanation: 'Nhấp đúp vào cây chổi Format Painter giúp giữ trạng thái chổi để áp dụng liên tục cho nhiều khối văn bản.'
          },
          {
            id: 'wq-2-4',
            question: 'Tổ hợp phím nào dùng để tăng nhanh kích cỡ chữ (Font Size) cho khối văn bản đã chọn?',
            options: ['Ctrl + ]', 'Ctrl + [', 'Ctrl + Shift + <', 'Ctrl + Alt + +'],
            correctIndex: 0,
            explanation: 'Ctrl + ] tăng cỡ chữ lên 1 pt; Ctrl + [ giảm cỡ chữ xuống 1 pt.'
          },
          {
            id: 'wq-2-5',
            question: 'Theo quy định chuẩn, Quốc hiệu "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM" được căn lề như thế nào?',
            options: ['Căn lề trái (Align Left)', 'Căn giữa (Center)', 'Căn lề phải (Align Right)', 'Căn đều hai bên (Justify)'],
            correctIndex: 1,
            explanation: 'Quốc hiệu và Tiêu ngữ luôn được căn giữa (Center) ở phần đầu trang văn bản.'
          }
        ]
      },
      {
        id: 'word-lesson-3',
        moduleId: 'word',
        order: 3,
        title: 'Tạo & Tùy Biến Bảng Biểu (Tables)',
        summary: 'Kỹ thuật chèn bảng, gộp ô (Merge Cells), tách ô (Split Cells), lặp dòng tiêu đề bảng và căn chỉnh văn bản trong ô.',
        durationMinutes: 20,
        theories: [
          {
            id: 'wt-3-1',
            title: 'Chèn Bảng & Thao Tác Cột / Hàng',
            concept: 'Bảng (Table) dùng để trình bày số liệu có cấu trúc lưới. Bảng biểu trong báo cáo học tập cần có tiêu đề cột rõ ràng.',
            keyPoints: [
              'Chèn bảng: Thẻ Insert > Table > kéo lưới ô hoặc chọn Insert Table nhập số cột (Columns) và số hàng (Rows).',
              'Thêm nhanh hàng/cột: Di chuột tới đường biên ngoài của bảng, nhấp vào dấu cộng (+) màu xanh xuất hiện.',
              'Xóa hàng/cột: Chọn hàng/cột > nhấp chuột phải > Delete Rows / Delete Columns.'
            ],
            shortcut: 'Bấm phím Tab ở ô cuối cùng dưới góc phải của bảng để tạo thêm một hàng mới tức thì.',
            examTip: 'Luôn căn giữa dữ liệu số trong bảng và căn trái dữ liệu văn bản (họ tên, tên hàng).'
          },
          {
            id: 'wt-3-2',
            title: 'Gộp Ô, Tách Ô & Căn Vị Trí Dữ Liệu (Alignment In Cells)',
            concept: 'Ô trong bảng có đến 9 kiểu căn chỉnh vị trí (Align Top Left, Align Center, Align Bottom Right...) giúp số liệu cân đối.',
            keyPoints: [
              'Merge Cells: Gộp nhiều ô đã chọn thành một ô lớn duy nhất.',
              'Split Cells: Chia một ô thành nhiều ô nhỏ theo số hàng và số cột tùy ý.',
              'Căn lề trong ô: Vào thẻ ngữ cảnh Table Tools Layout > nhóm Alignment > chọn 1 trong 9 vị trí căn lề.'
            ],
            shortcut: 'Alt + J, L, M để gộp ô (Merge Cells) nhanh khi đang chọn nhiều ô.',
            examTip: 'Tiêu đề bảng biểu thường căn giữa cả chiều dọc lẫn chiều ngang: Align Center (giữa ô).'
          },
          {
            id: 'wt-3-3',
            title: 'Lặp Lại Tiêu Đề Bảng Khi Sang Trang (Repeat Header Rows)',
            concept: 'Với bảng biểu dài qua nhiều trang, tính năng Repeat Header Rows giúp tự động lặp lại hàng tiêu đề ở đầu mỗi trang mới mà không cần gõ thủ công.',
            keyPoints: [
              'Chọn hàng tiêu đề đầu tiên của bảng.',
              'Vào thẻ Table Tools Layout > nhóm Data > nhấp chọn Repeat Header Rows.',
              'Hàng tiêu đề này sẽ tự động nhân bản khi bảng tràn sang trang kế tiếp.'
            ],
            shortcut: 'Alt + J, L, V để kích hoạt lặp tiêu đề bảng.',
            examTip: 'Không bao giờ copy dán thủ công dòng tiêu đề bảng sang trang sau vì khi thêm dữ liệu sẽ làm vỡ cấu trúc bảng.'
          }
        ],
        tasks: [
          {
            id: 'wtask-3-1',
            title: 'Chèn bảng 3 cột x 3 hàng',
            instruction: 'Bấm vào thẻ Insert trên Ribbon, nhấp vào biểu tượng Table và chọn chèn bảng dữ liệu.',
            hint: 'Nhấp Insert > Table > chọn kích cỡ bảng mẫu 3x3.',
            targetType: 'ribbon-action',
            actionKey: 'word-insert-table'
          },
          {
            id: 'wtask-3-2',
            title: 'Gộp các ô được chọn (Merge Cells)',
            instruction: 'Trên thanh Ribbon tại thẻ Table Layout, bấm vào nút Merge Cells để gộp hàng tiêu đề.',
            hint: 'Nhấp thẻ Layout của Bảng > chọn biểu tượng Merge Cells.',
            targetType: 'ribbon-action',
            actionKey: 'word-merge-cells'
          },
          {
            id: 'wtask-3-3',
            title: 'Kích hoạt lặp dòng tiêu đề (Repeat Header Rows)',
            instruction: 'Bấm chọn nút Repeat Header Rows trên nhóm Data để tiêu đề bảng tự động sang trang mới.',
            hint: 'Nhấp Table Layout > nhóm Data > Repeat Header Rows.',
            targetType: 'ribbon-action',
            actionKey: 'word-repeat-header'
          }
        ],
        quiz: [
          {
            id: 'wq-3-1',
            question: 'Khi con trỏ soạn thảo đang nằm ở ô cuối cùng bên phải của hàng cuối cùng trong bảng, thao tác nào sẽ tạo thêm một hàng mới?',
            options: ['Nhấn phím Enter', 'Nhấn phím Tab', 'Nhấn tổ hợp phím Shift + Tab', 'Nhấn phím Space'],
            correctIndex: 1,
            explanation: 'Phím Tab tại ô cuối cùng của bảng sẽ tự động chèn thêm một hàng mới phía dưới.'
          },
          {
            id: 'wq-3-2',
            question: 'Tính năng nào giúp dòng tiêu đề của bảng tự động xuất hiện ở đầu mỗi trang khi bảng có độ dài nhiều trang?',
            options: ['Header and Footer', 'Repeat Header Rows', 'Split Table', 'AutoFit Contents'],
            correctIndex: 1,
            explanation: 'Repeat Header Rows trong Table Tools Layout tự động nhân bản tiêu đề bảng ở mỗi đầu trang tiếp theo.'
          },
          {
            id: 'wq-3-3',
            question: 'Để gộp nhiều ô liền kề trong bảng thành một ô duy nhất, ta dùng chức năng nào?',
            options: ['Split Cells', 'Merge Cells', 'Group Cells', 'Combine Cells'],
            correctIndex: 1,
            explanation: 'Merge Cells (Gộp ô) là thao tác hợp nhất các ô đã chọn thành một.'
          },
          {
            id: 'wq-3-4',
            question: 'Trong Word, một ô trong bảng có bao nhiêu hướng căn chỉnh vị trí văn bản (Cell Alignment)?',
            options: ['4 vị trí', '6 vị trí', '9 vị trí', '12 vị trí'],
            correctIndex: 2,
            explanation: 'Có 9 vị trí căn lề trong ô (kết hợp 3 vị trí ngang: trái, giữa, phải và 3 vị trí dọc: trên, giữa, dưới).'
          },
          {
            id: 'wq-3-5',
            question: 'Muốn di chuyển con trỏ lùi về ô phía trước trong bảng, ta dùng tổ hợp phím nào?',
            options: ['Shift + Tab', 'Ctrl + Tab', 'Alt + Tab', 'Tab'],
            correctIndex: 0,
            explanation: 'Phím Tab chuyển sang ô tiếp theo, còn Shift + Tab chuyển lùi về ô liền trước.'
          }
        ]
      },
      {
        id: 'word-lesson-4',
        moduleId: 'word',
        order: 4,
        title: 'Chèn Đồ Họa, Hình Ảnh & Định Dạng Vị Trí (Text Wrapping)',
        summary: 'Kỹ thuật chèn hình ảnh, SmartArt, chụp màn hình và điều chỉnh chế độ bao quanh văn bản (Wrap Text).',
        durationMinutes: 16,
        theories: [
          {
            id: 'wt-4-1',
            title: 'Chèn Ảnh & Các Chế Độ Bao Quanh Văn Bản (Wrap Text)',
            concept: 'Mặc định ảnh chèn vào Word ở chế độ In Line with Text (như một ký tự chữ). Muốn di chuyển ảnh tự do, ta phải đổi kiểu Wrap Text.',
            keyPoints: [
              'In Line with Text: Nằm trên dòng chữ như một từ, không kéo tự do được.',
              'Square / Tight: Văn bản bao quanh sát viền vuông vức hoặc uốn cong theo viền ảnh.',
              'In Front of Text: Nằm đè lên trên văn bản.',
              'Behind Text: Nằm chìm phía dưới làm hình nền văn bản.'
            ],
            shortcut: 'Bấm vào biểu tượng hình cầu vòm ngựa (Layout Options) cạnh góc trên bên phải của ảnh để đổi nhanh Wrap Text.',
            examTip: 'Đề thi MOS luôn yêu cầu kiểu định dạng Square hoặc Tight cho các hình ảnh minh họa bài báo.'
          },
          {
            id: 'wt-4-2',
            title: 'Sơ Đồ Tư Duy Chuyên Nghiệp Với SmartArt',
            concept: 'SmartArt biến các gạch đầu dòng khô khan thành sơ đồ quy trình, tổ chức phân cấp hình khối sinh động chỉ với vài cú nhấp.',
            keyPoints: [
              'Các nhóm SmartArt phổ biến: List (danh sách), Process (quy trình tuần tự), Cycle (chu trình khép kín), Hierarchy (sơ đồ cây phân cấp).',
              'Sử dụng Text Pane (bảng nhập chữ bên hông) để gõ nội dung nhanh và dùng phím Tab để hạ cấp nhánh con.'
            ],
            shortcut: 'Phím Tab trong Text Pane để lùi cấp (Demote); Shift + Tab để nâng cấp nhánh cha (Promote).',
            examTip: 'Không nên tự vẽ từng khối hình rồi nối mũi tên thủ công; hãy dùng SmartArt để đảm bảo khoảng cách luôn chuẩn.'
          },
          {
            id: 'wt-4-3',
            title: 'Thêm Chú Thích Hình Ảnh Tự Động (Caption)',
            concept: 'Hình ảnh trong báo cáo khoa học THPT cần có chú thích chuẩn (ví dụ: Hình 1. Sơ đồ khối...) được đánh số tự động.',
            keyPoints: [
              'Chọn ảnh > nhấp chuột phải > chọn Insert Caption.',
              'Chọn Label là Figure hoặc tạo nhãn tiếng Việt "Hình".',
              'Số thứ tự sẽ tự động cập nhật nếu có hình ảnh khác được chèn thêm vào trước đó.'
            ],
            shortcut: 'Vào References > Insert Caption.',
            examTip: 'Dùng Caption tự động cho phép Word tạo ra danh mục hình ảnh (Table of Figures) ở đầu bài báo cáo.'
          }
        ],
        tasks: [
          {
            id: 'wtask-4-1',
            title: 'Chèn sơ đồ thông minh SmartArt',
            instruction: 'Bấm vào thẻ Insert trên Ribbon và chọn công cụ SmartArt để thêm sơ đồ tư duy.',
            hint: 'Nhấp thẻ Insert > nhóm Illustrations > SmartArt.',
            targetType: 'ribbon-action',
            actionKey: 'word-insert-smartart'
          },
          {
            id: 'wtask-4-2',
            title: 'Đổi chế độ bao quanh chữ kiểu Square',
            instruction: 'Chọn ảnh minh họa và bấm vào nút Wrap Text trên thẻ Format, chọn chế độ Square.',
            hint: 'Nhấp Picture Format > Wrap Text > Square.',
            targetType: 'ribbon-action',
            actionKey: 'word-wrap-square'
          },
          {
            id: 'wtask-4-3',
            title: 'Chèn chú thích hình ảnh (Insert Caption)',
            instruction: 'Mở thẻ References trên thanh công cụ và nhấp vào nút Insert Caption.',
            hint: 'Nhấp thẻ References > nhóm Captions > Insert Caption.',
            targetType: 'ribbon-action',
            actionKey: 'word-insert-caption'
          }
        ],
        quiz: [
          {
            id: 'wq-4-1',
            question: 'Khi chèn ảnh vào văn bản, chế độ bao quanh văn bản (Wrap Text) mặc định ban đầu là gì?',
            options: ['Square', 'In Front of Text', 'In Line with Text', 'Behind Text'],
            correctIndex: 2,
            explanation: 'Mặc định Word coi hình ảnh như một ký tự văn bản đơn thuần (In Line with Text).'
          },
          {
            id: 'wq-4-2',
            question: 'Chế độ Wrap Text nào cho phép hình ảnh trôi tự do và nằm đè lên trên nội dung chữ?',
            options: ['Square', 'Behind Text', 'Tight', 'In Front of Text'],
            correctIndex: 3,
            explanation: 'In Front of Text đặt hình ảnh ở lớp trên cùng che khuất văn bản bên dưới.'
          },
          {
            id: 'wq-4-3',
            question: 'Trong cửa sổ nhập nội dung SmartArt (Text Pane), muốn hạ cấp một mục thành nhánh con ta bấm phím nào?',
            options: ['Phím Enter', 'Phím Tab', 'Phím Space', 'Phím Backspace'],
            correctIndex: 1,
            explanation: 'Phím Tab giúp hạ cấp (Demote) nhánh con, còn Shift + Tab nâng cấp (Promote) nhánh cha.'
          },
          {
            id: 'wq-4-4',
            question: 'Nhóm SmartArt nào thích hợp nhất để mô tả vòng tuần hoàn của nước trong tự nhiên?',
            options: ['Hierarchy (Phân cấp)', 'Cycle (Chu trình)', 'Relationship (Quan hệ)', 'Matrix (Ma trận)'],
            correctIndex: 1,
            explanation: 'Nhóm Cycle được thiết kế dành riêng cho các chu trình lặp tuần hoàn khép kín.'
          },
          {
            id: 'wq-4-5',
            question: 'Công cụ nào trong Word cho phép đánh số thứ tự hình ảnh tự động (Hình 1, Hình 2...)?',
            options: ['Insert Footnote', 'Insert Caption', 'Page Number', 'Bookmark'],
            correctIndex: 1,
            explanation: 'Insert Caption trong thẻ References quản lý nhãn và số thứ tự tự động cho hình ảnh và bảng biểu.'
          }
        ]
      },
      {
        id: 'word-lesson-5',
        moduleId: 'word',
        order: 5,
        title: 'Tiêu Đề Đầu/Chân Trang & Đánh Số Trang (Header & Page Number)',
        summary: 'Tạo tiêu đề Header, Footer, đánh số trang theo chuẩn và kỹ thuật ngắt liên kết Link to Previous.',
        durationMinutes: 18,
        theories: [
          {
            id: 'wt-5-1',
            title: 'Khái Niệm Header, Footer & Số Trang',
            concept: 'Header (đầu trang) và Footer (chân trang) chứa thông tin xuất hiện lặp lại ở mọi trang: tên tác giả, tên chuyên đề, ngày tháng hoặc số trang.',
            keyPoints: [
              'Vào Insert > Header hoặc Footer để chọn mẫu có sẵn.',
              'Hoặc nhấp đúp chuột vào mép trên/dưới của trang giấy để mở nhanh chế độ chỉnh sửa.',
              'Để thoát khỏi Header/Footer: bấm phím Esc hoặc nhấp đúp vào phần thân văn bản.'
            ],
            shortcut: 'Bấm phím Esc để đóng nhanh chế độ Header and Footer Tools.',
            examTip: 'Không gõ số trang thủ công bằng bàn phím vào Footer vì số đó sẽ bị lặp lại giống hệt nhau ở mọi trang. Phải dùng công cụ Page Number.'
          },
          {
            id: 'wt-5-2',
            title: 'Kỹ Thuật Đánh Số Trang Bỏ Qua Trang Bìa',
            concept: 'Trang bìa đầu tiên không được hiển thị số trang. Word cung cấp tùy chọn Different First Page để xử lý điều này.',
            keyPoints: [
              'Mở Header/Footer > thẻ Header & Footer Tools.',
              'Tích chọn ô Different First Page (Trang đầu khác biệt).',
              'Số trang ở trang bìa sẽ tự động biến mất trong khi các trang sau vẫn giữ nguyên.'
            ],
            shortcut: 'Vào Page Number > Format Page Numbers > Start at: 0 để trang bìa tính là trang 0 và trang sau bắt đầu từ trang 1.',
            examTip: 'Đề thi thường yêu cầu trang đầu tiên không có số trang và trang 2 bắt đầu tính từ số 1.'
          },
          {
            id: 'wt-5-3',
            title: 'Ngắt Liên Kết Link to Previous Giữa Các Phần',
            concept: 'Khi tài liệu có nhiều phần (Chương 1, Chương 2), muốn mỗi chương có tiêu đề Header khác nhau, ta phải ngắt liên kết giữa các Section.',
            keyPoints: [
              'Chèn Section Break (Next Page) giữa các chương.',
              'Nhấp vào Header của Section 2.',
              'Nhấp vào nút Link to Previous trên thanh Ribbon để tắt trạng thái liên kết màu vàng.'
            ],
            shortcut: 'Alt + J, H, K để bật/tắt Link to Previous.',
            examTip: 'Nếu không tắt Link to Previous, việc sửa Header ở trang sau sẽ làm thay đổi luôn cả Header ở trang trước.'
          }
        ],
        tasks: [
          {
            id: 'wtask-5-1',
            title: 'Chèn số trang ở chân trang (Page Number Bottom)',
            instruction: 'Bấm vào thẻ Insert, chọn Page Number > Bottom of Page và chọn mẫu căn giữa Plain Number 2.',
            hint: 'Nhấp Insert > nhóm Header & Footer > Page Number > Bottom of Page.',
            targetType: 'ribbon-action',
            actionKey: 'word-page-number-bottom'
          },
          {
            id: 'wtask-5-2',
            title: 'Kích hoạt tùy chọn Different First Page',
            instruction: 'Trong thẻ ngữ cảnh Header & Footer, tích chọn ô Different First Page để ẩn số trang ở trang bìa.',
            hint: 'Nhấp thẻ Header & Footer > nhóm Options > chọn Different First Page.',
            targetType: 'ribbon-action',
            actionKey: 'word-different-first-page'
          },
          {
            id: 'wtask-5-3',
            title: 'Ngắt liên kết với phần trước (Unlink Previous)',
            instruction: 'Nhấp vào nút Link to Previous trên thanh công cụ để ngắt đồng bộ tiêu đề giữa các chương.',
            hint: 'Nhấp Header & Footer > nhóm Navigation > bấm Link to Previous.',
            targetType: 'ribbon-action',
            actionKey: 'word-unlink-previous'
          }
        ],
        quiz: [
          {
            id: 'wq-5-1',
            question: 'Muốn thoát nhanh khỏi chế độ chỉnh sửa Header/Footer để quay lại văn bản chính, ta bấm phím nào?',
            options: ['Phím Tab', 'Phím Esc', 'Phím Enter', 'Phím Backspace'],
            correctIndex: 1,
            explanation: 'Phím Esc (Escape) ngay lập tức đóng trình chỉnh sửa Header & Footer.'
          },
          {
            id: 'wq-5-2',
            question: 'Tùy chọn nào giúp trang đầu tiên (trang bìa) không hiển thị Header và số trang?',
            options: ['Different Odd & Even Pages', 'Show Document Text', 'Different First Page', 'Link to Previous'],
            correctIndex: 2,
            explanation: 'Different First Page cho phép thiết lập nội dung riêng biệt cho trang bìa đầu tiên.'
          },
          {
            id: 'wq-5-3',
            question: 'Khi muốn hai chương khác nhau có tiêu đề Header khác nhau, ta bắt buộc phải thực hiện thao tác nào?',
            options: ['Tắt chế độ Different First Page', 'Chèn Section Break và tắt nút Link to Previous', 'Chèn Page Break liên tiếp 2 lần', 'Đổi phông chữ ở chương 2'],
            correctIndex: 1,
            explanation: 'Cần chia Section bằng Section Break và nhấp tắt Link to Previous để độc lập hóa tiêu đề trang.'
          },
          {
            id: 'wq-5-4',
            question: 'Để đánh số trang theo kiểu La Mã (i, ii, iii) cho phần Lời mở đầu, ta thiết lập ở đâu?',
            options: ['Home > Paragraph > Numbering', 'Insert > Page Number > Format Page Numbers', 'Page Setup > Layout', 'Design > Themes'],
            correctIndex: 1,
            explanation: 'Trong hộp thoại Format Page Numbers có mục Number format cho phép chọn ký tự La Mã hoặc số thông thường.'
          },
          {
            id: 'wq-5-5',
            question: 'Nếu ta gõ trực tiếp chữ "Trang 1" bằng bàn phím vào chân trang thì điều gì sẽ xảy ra ở các trang tiếp theo?',
            options: ['Tự động tăng thành Trang 2, Trang 3', 'Báo lỗi tài liệu', 'Mọi trang đều hiện chữ "Trang 1"', 'Các trang sau sẽ để trống'],
            correctIndex: 2,
            explanation: 'Gõ văn bản tĩnh vào Footer sẽ lặp lại nguyên văn bản đó ở mọi trang. Cần dùng trường Page Number tự động.'
          }
        ]
      },
      {
        id: 'word-lesson-6',
        moduleId: 'word',
        order: 6,
        title: 'Định Dạng Heading Styles & Tạo Mục Lục Tự Động (Table of Contents)',
        summary: 'Quy chuẩn phân cấp tiêu đề Heading 1, 2, 3 và tự động xuất mục lục báo cáo, đề tài nghiên cứu chỉ với 1 click.',
        durationMinutes: 20,
        theories: [
          {
            id: 'wt-6-1',
            title: 'Bản Chất Của Heading Styles',
            concept: 'Heading Styles (Heading 1, Heading 2, Heading 3) gắn cấp bậc cấu trúc cho tiêu đề tài liệu, là điều kiện tiên quyết để tạo mục lục tự động.',
            keyPoints: [
              'Heading 1: Tiêu đề chương lớn (Chương I, Chương II).',
              'Heading 2: Các mục chính trong chương (1.1, 1.2).',
              'Heading 3: Các tiểu mục chi tiết (1.1.1, 1.1.2).',
              'Định dạng Heading có thể chuột phải chọn Modify để đổi màu sắc, phông chữ chuẩn theo ý muốn.'
            ],
            shortcut: 'Ctrl + Alt + 1 để gán Heading 1; Ctrl + Alt + 2 để gán Heading 2; Ctrl + Alt + 3 để gán Heading 3.',
            examTip: 'Học sinh hay tự bôi đậm và tăng cỡ chữ thủ công thay vì gán Heading; làm như vậy Word sẽ không thể tạo được mục lục tự động.'
          },
          {
            id: 'wt-6-2',
            title: 'Tạo Mục Lục Tự Động Với Table of Contents',
            concept: 'Mục lục tự động quét toàn bộ văn bản, thu thập các tiêu đề đã gán Heading cùng số trang tương ứng và tạo bảng điều hướng liên kết.',
            keyPoints: [
              'Đặt con trỏ ở vị trí muốn đặt mục lục (thường sau trang bìa hoặc lời mở đầu).',
              'Vào thẻ References > nhóm Table of Contents > chọn mẫu Automatic Table 1 hoặc Automatic Table 2.',
              'Mục lục hiển thị danh sách tiêu đề kèm số trang và đường dẫn chấm chấm (Tab Leader).'
            ],
            shortcut: 'Alt + S, T, A để tạo nhanh mục lục tự động.',
            examTip: 'Giữ phím Ctrl và nhấp chuột vào một mục bất kỳ trong mục lục để di chuyển tức thời tới đúng vị trí trang đó.'
          },
          {
            id: 'wt-6-3',
            title: 'Cập Nhật Mục Lục (Update Table)',
            concept: 'Khi viết thêm nội dung làm xê dịch số trang hoặc sửa lại câu chữ của tiêu đề, chỉ cần cập nhật mục lục mà không cần tạo lại từ đầu.',
            keyPoints: [
              'Nhấp chuột vào khung mục lục > chọn nút Update Table trên đầu khung.',
              'Update page numbers only: Chỉ cập nhật lại số trang (khi không sửa tên tiêu đề).',
              'Update entire table: Cập nhật lại toàn bộ cả tiêu đề mới thêm và số trang.'
            ],
            shortcut: 'Phím F9 khi đang chọn mục lục để cập nhật nhanh.',
            examTip: 'Luôn chọn Update entire table trước khi in ấn tài liệu để đảm bảo không sót bất kỳ tiêu đề mới nào.'
          }
        ],
        tasks: [
          {
            id: 'wtask-6-1',
            title: 'Gán kiểu tiêu đề Heading 1',
            instruction: 'Chọn dòng tiêu đề chương và bấm vào ô kiểu Heading 1 trên nhóm Styles thẻ Home.',
            hint: 'Nhấp Home > nhóm Styles > chọn Heading 1.',
            targetType: 'ribbon-action',
            actionKey: 'word-style-heading1'
          },
          {
            id: 'wtask-6-2',
            title: 'Chèn mục lục tự động (Automatic Table)',
            instruction: 'Bấm vào thẻ References trên thanh Ribbon và chọn công cụ Table of Contents > Automatic Table 1.',
            hint: 'Nhấp References > Table of Contents > Automatic Table 1.',
            targetType: 'ribbon-action',
            actionKey: 'word-insert-toc'
          },
          {
            id: 'wtask-6-3',
            title: 'Cập nhật toàn bộ mục lục (Update Entire Table)',
            instruction: 'Bấm vào nút Update Table trên thẻ References và chọn cập nhật toàn bộ bảng.',
            hint: 'Nhấp References > Update Table > Update entire table.',
            targetType: 'ribbon-action',
            actionKey: 'word-update-toc'
          }
        ],
        quiz: [
          {
            id: 'wq-6-1',
            question: 'Tổ hợp phím tắt nhanh nào dùng để gán định dạng Heading 1 cho dòng tiêu đề đang chọn?',
            options: ['Ctrl + 1', 'Ctrl + Alt + 1', 'Shift + Alt + 1', 'Alt + 1'],
            correctIndex: 1,
            explanation: 'Ctrl + Alt + 1 gán kiểu Heading 1; Ctrl + Alt + 2 gán Heading 2; Ctrl + Alt + 3 gán Heading 3.'
          },
          {
            id: 'wq-6-2',
            question: 'Điều kiện cốt lõi để Microsoft Word có thể tự động tạo bảng mục lục là gì?',
            options: ['Văn bản phải được căn lề Justify', 'Các tiêu đề phải được áp dụng kiểu Heading Styles', 'Tài liệu phải dài trên 10 trang', 'Phải chèn bảng biểu vào trước'],
            correctIndex: 1,
            explanation: 'Word dựa vào cấu trúc gán các cấp Heading (1, 2, 3...) để nhận diện và xây dựng cây thư mục nội dung.'
          },
          {
            id: 'wq-6-3',
            question: 'Khi đang xem mục lục tự động, muốn nhảy nhanh đến vị trí trang nội dung của tiêu đề đó ta thao tác như thế nào?',
            options: ['Nhấp đúp chuột', 'Nhấp chuột phải', 'Giữ phím Ctrl và nhấp chuột trái vào mục đó', 'Giữ phím Alt và nhấp chuột'],
            correctIndex: 2,
            explanation: 'Tổ hợp Ctrl + Click chuột biến mục lục thành siêu liên kết dẫn thẳng đến nội dung trong tài liệu.'
          },
          {
            id: 'wq-6-4',
            question: 'Phím tắt nào giúp cập nhật (refresh) trường dữ liệu mục lục đang chọn một cách tức thì?',
            options: ['F4', 'F5', 'F9', 'F12'],
            correctIndex: 2,
            explanation: 'Phím F9 được dùng để cập nhật tất cả các trường tính toán và mục lục tự động trong Word.'
          },
          {
            id: 'wq-6-5',
            question: 'Lựa chọn "Update page numbers only" trong hộp thoại cập nhật mục lục mang ý nghĩa gì?',
            options: ['Chỉ cập nhật lại số trang của các mục, giữ nguyên câu chữ tiêu đề', 'Xóa toàn bộ mục lục chỉ để lại số trang', 'Cập nhật lại cả tên tiêu đề mới và số trang', 'Đánh lại số trang từ đầu'],
            correctIndex: 0,
            explanation: 'Tùy chọn này giúp làm mới số trang nhanh chóng khi nội dung văn bản bị trôi trang mà tên tiêu đề không thay đổi.'
          }
        ]
      },
      {
        id: 'word-lesson-7',
        moduleId: 'word',
        order: 7,
        title: 'Tổng Ôn Luyện Kỹ Năng Thi Chứng Chỉ MOS Word 2019 (Exam Review)',
        summary: 'Tổng hợp các kỹ năng thực chiến chuẩn đề thi quốc tế MOS Word 2019: Convert Text to Table, Section Break Continuous, Heading Styles, Table Styles và Document Properties.',
        durationMinutes: 30,
        theories: [
          {
            id: 'wt-7-1',
            title: 'Cấu Trúc Đề Thi MOS Word 2019 Associate',
            concept: 'Bài thi MOS Word 2019 kéo dài 50 phút với hình thức Multi-Project (gồm 5 đến 7 dự án độc lập, mỗi dự án có từ 4 đến 7 nhiệm vụ Tasks). Thí sinh đạt từ 700/1000 điểm trở lên sẽ được cấp chứng chỉ Microsoft quốc tế.',
            keyPoints: [
              'Thời lượng làm bài: 50 phút.',
              'Điểm đạt chuẩn đậu: tối thiểu 700/1000 điểm.',
              'Mỗi Project có 1 tệp văn bản mẫu kèm theo danh sách Task cụ thể cần thao tác.',
              'Nút Mark Completed: Đánh dấu nhiệm vụ đã làm xong; Mark for Review: Đánh dấu để xem lại sau.'
            ],
            shortcut: 'Không dùng phím tắt của trình duyệt khi thi, làm theo đúng đường dẫn trên Ribbon theo hướng dẫn đề bài.',
            examTip: 'Luôn đọc kỹ câu hỏi: nếu đề bảo giữ nguyên thiết lập mặc định (Accept all other defaults) thì không chỉnh thêm bất kỳ thông số nào khác.'
          },
          {
            id: 'wt-7-2',
            title: 'Các Kỹ Năng Đinh Trong Bài Thi MOS Word',
            concept: 'Các thao tác có tần suất xuất hiện 100% trong đề thi thực tế tại IIG và Certiport.',
            keyPoints: [
              'Chuyển đổi bảng và văn bản: Table Tools Layout > Convert to Text hoặc Insert > Table > Convert Text to Table.',
              'Ngắt trang và vùng: Layout > Breaks > Continuous Section Break hoặc Next Page.',
              'Thuộc tính tài liệu: File > Info > Show All Properties > nhập Status (Draft), Title, Subject, Author.',
              'Bọc văn bản cho đồ họa: Picture Format > Wrap Text > Tight hoặc Square.',
              'Áp dụng kiểu bảng: Table Tools Design > Table Styles (ví dụ: Grid Table 5 Dark - Accent 1).'
            ],
            shortcut: 'Ctrl + F để tìm nhanh từ khóa văn bản trong tài liệu dài nhiều trang theo yêu cầu của đề thi.',
            examTip: 'Chú ý phân biệt giữa Footnote (chú thích chân trang) và Endnote (chú thích cuối tài liệu: References > Insert Endnote).'
          },
          {
            id: 'wt-7-3',
            title: 'Chiến Thuật Phân Bổ Thời Gian & Tránh Mất Điểm Oan',
            concept: 'Mẹo tối ưu hóa điểm số của giảng viên chuyên luyện thi MOS Word 2019.',
            keyPoints: [
              'Dành tối đa 6 đến 7 phút cho mỗi Project.',
              'Nếu gặp một task khó hoặc chưa nhớ thao tác: bấm Mark for Review và chuyển ngay sang task kế tiếp.',
              'Trước khi nhấn Finish Test nộp bài: vào Document Inspector kiểm tra và đảm bảo không xóa nhầm các phần tử yêu cầu.',
              'Khi chèn ảnh hoặc bảng: luôn nhấp chuột ra ngoài đối tượng sau khi hoàn thành để bỏ chọn.'
            ],
            shortcut: 'Nút Restart Project chỉ dùng khi bạn lỡ xóa nhầm tài liệu và muốn khôi phục lại từ đầu dự án đó.',
            examTip: 'Tuyệt đối không nhấn Enter thừa ở cuối văn bản vì hệ thống chấm điểm Certiport tự động quét các ký tự trống Paragraph Marks (¶).'
          }
        ],
        tasks: [
          {
            id: 'wtask-7-1',
            title: 'Chuyển bảng thành văn bản phân tách bằng Tab',
            instruction: 'Bấm vào thẻ Table Tools Layout và chọn Convert to Text để chuyển dữ liệu bảng thành văn bản dạng tab.',
            hint: 'Nhấp Table Layout > nhóm Data > Convert to Text > chọn Tabs.',
            targetType: 'ribbon-action',
            actionKey: 'word-convert-table-text'
          },
          {
            id: 'wtask-7-2',
            title: 'Chèn liên kết Hyperlink đến bài viết Wikipedia',
            instruction: 'Bấm vào thẻ Insert và chọn Link để chèn siêu liên kết cho khối văn bản đã chọn.',
            hint: 'Nhấp Insert > nhóm Links > Link (Ctrl + K).',
            targetType: 'ribbon-action',
            actionKey: 'word-insert-hyperlink'
          },
          {
            id: 'wtask-7-3',
            title: 'Chèn ngắt đoạn liên tục (Continuous Section Break)',
            instruction: 'Trên thẻ Layout, nhấp vào nút Breaks và chọn kiểu Continuous Section Break.',
            hint: 'Nhấp Layout > nhóm Page Setup > Breaks > Continuous.',
            targetType: 'ribbon-action',
            actionKey: 'word-break-continuous'
          },
          {
            id: 'wtask-7-4',
            title: 'Áp dụng kiểu bọc văn bản chữ ôm sát hình (Tight)',
            instruction: 'Chọn hình ảnh minh họa, trên thẻ Picture Format bấm vào Wrap Text và chọn Tight.',
            hint: 'Nhấp Picture Format > Wrap Text > Tight.',
            targetType: 'ribbon-action',
            actionKey: 'word-wrap-tight'
          }
        ],
        quiz: [
          {
            id: 'wq-7-1',
            question: 'Trong bài thi MOS Word 2019, để được cấp chứng chỉ quốc tế của Microsoft, thí sinh cần đạt mức điểm tối thiểu là bao nhiêu?',
            options: ['500 / 1000 điểm', '650 / 1000 điểm', '700 / 1000 điểm', '800 / 1000 điểm'],
            correctIndex: 2,
            explanation: 'Điểm sàn chuẩn đậu của các bài thi tin học văn phòng Microsoft Office Specialist (MOS) là 700 trên thang điểm 1000.'
          },
          {
            id: 'wq-7-2',
            question: 'Để chuyển đổi một bảng dữ liệu thành các dòng văn bản ngăn cách bởi phím Tab, ta sử dụng tính năng nào?',
            options: [
              'Table Tools Layout > nhóm Data > Convert to Text',
              'Table Tools Design > Clear Table',
              'Home > Paragraph > Tabs',
              'Insert > Text Box'
            ],
            correctIndex: 0,
            explanation: 'Convert to Text trong thẻ Layout của công cụ Bảng cho phép trích xuất văn bản và phân tách bằng Tabs, Commas hoặc Paragraphs.'
          },
          {
            id: 'wq-7-3',
            question: 'Sự khác biệt căn bản giữa Chú thích chân trang (Footnote) và Chú thích cuối tài liệu (Endnote) là gì?',
            options: [
              'Footnote xuất hiện ở đáy của trang chứa từ khóa; Endnote xuất hiện tập trung ở trang cuối cùng của tài liệu',
              'Footnote có màu xanh; Endnote có màu đỏ',
              'Endnote không cho phép gõ đường dẫn trang web',
              'Cả hai vị trí giống hệt nhau không có gì khác'
            ],
            correctIndex: 0,
            explanation: 'Footnote (chú thích chân trang) nằm ở cuối trang đó; Endnote (chú thích cuối) gom toàn bộ các nguồn tham khảo về trang cuối cùng của văn bản.'
          },
          {
            id: 'wq-7-4',
            question: 'Khi đề bài yêu cầu đổi thuộc tính Trạng thái (Status) của tài liệu thành "Draft", thao tác chính xác được thực hiện ở đâu?',
            options: [
              'File > Info > Show All Properties > nhập vào ô Status: Draft',
              'Design > Watermark > chọn Draft',
              'Layout > Margins > chọn Draft',
              'View > Draft view'
            ],
            correctIndex: 0,
            explanation: 'Các thuộc tính tài liệu (Document Properties như Status, Subject, Title, Company) được quản lý tại mục File > Info.'
          },
          {
            id: 'wq-7-5',
            question: 'Kiểu ngắt đoạn nào cho phép chia văn bản thành các section mới ngay trên cùng một trang mà không đẩy nội dung sang trang tiếp theo?',
            options: [
              'Page Break',
              'Next Page Section Break',
              'Continuous Section Break',
              'Even Page Section Break'
            ],
            correctIndex: 2,
            explanation: 'Continuous Section Break phân vùng độc lập ngay trên trang hiện tại, thường dùng khi chia 2 cột cho một đoạn ở giữa trang.'
          }
        ]
      }
    ]
  },
  excel: {
    id: 'excel',
    name: 'Microsoft Excel (Bảng Tính Điện Tử)',
    shortDescription: 'Làm chủ ô tính, công thức địa chỉ tuyệt đối, hàm thống kê, hàm điều kiện IF/VLOOKUP và trực quan hóa biểu đồ.',
    badgeName: 'Chuyên Gia Số Liệu',
    colorName: 'emerald',
    accentClass: 'text-emerald-600 dark:text-emerald-400 bg-emerald-600',
    badgeColorClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    lessons: [
      {
        id: 'excel-lesson-1',
        moduleId: 'excel',
        order: 1,
        title: 'Ô Tính, Dữ Liệu & Thao Tác Sheet Chuẩn',
        summary: 'Phân biệt kiểu dữ liệu Văn bản (Text), Số (Number), Ngày tháng (Date) và thao tác quản lý Sheet chuyên nghiệp.',
        durationMinutes: 15,
        theories: [
          {
            id: 'et-1-1',
            title: 'Bản Chất Ô Tính & Quy Tắc Căn Lề Mặc Định',
            concept: 'Bảng tính cấu thành từ các cột ký tự (A, B, C...) và các hàng số (1, 2, 3...). Giao điểm giữa một cột và một hàng gọi là Địa chỉ ô (Cell Reference) ví dụ: B4.',
            keyPoints: [
              'Dữ liệu kiểu Số (Number): Mặc định tự động căn sát lề bên PHẢI.',
              'Dữ liệu kiểu Văn bản (Text): Mặc định tự động căn sát lề bên TRÁI.',
              'Dữ liệu Logic (TRUE/FALSE) hoặc Lỗi: Tự động căn GIỮA ô.',
              'Nếu một chuỗi số bị căn lề trái nghĩa là Excel đang hiểu nó là chuỗi ký tự (Text).'
            ],
            shortcut: 'Ctrl + Mũi tên để nhảy nhanh đến ô cuối cùng của vùng dữ liệu; Ctrl + Home để về ô A1.',
            examTip: 'Để nhập một số như số điện thoại hoặc mã học sinh bắt đầu bằng số 0 mà không bị mất số 0, hãy gõ dấu nháy đơn (\') ở đầu chuỗi (ví dụ: \'0912345678).'
          },
          {
            id: 'et-1-2',
            title: 'Kéo Thả Tự Động Chuỗi Dữ Liệu Với AutoFill',
            concept: 'Nút vuông nhỏ màu xanh ở góc dưới cùng bên phải của ô đang chọn gọi là Fill Handle, dùng để điền nhanh dãy số tăng dần hoặc sao chép công thức.',
            keyPoints: [
              'Điền thứ trong tuần hoặc tháng: Nhập "Tháng 1" và kéo chuột để tự động sinh ra "Tháng 2", "Tháng 3"...',
              'Điền số thứ tự tăng dần: Nhập 1 ở ô trên, 2 ở ô dưới, chọn cả 2 ô rồi kéo Fill Handle.',
              'Hoặc giữ phím Ctrl khi kéo một ô số để tự động tăng dần 1 đơn vị.'
            ],
            shortcut: 'Nhấp đúp chuột vào nút Fill Handle (dấu chấm vuông nhỏ) để tự động điền dọc hết bảng dữ liệu.',
            examTip: 'Thao tác nhấp đúp vào Fill Handle tiết kiệm rất nhiều thời gian trong các bài thi có bảng tính hàng nghìn dòng.'
          },
          {
            id: 'et-1-3',
            title: 'Quản Lý Trang Tính (Worksheets Management)',
            concept: 'Một tệp Workbook có thể chứa nhiều trang tính con (Sheet). Đổi tên và tô màu thẻ Sheet giúp tổ chức sổ tính khoa học.',
            keyPoints: [
              'Thêm sheet mới: Bấm vào biểu tượng dấu cộng (+) bên cạnh thanh thẻ Sheet.',
              'Đổi tên Sheet: Nhấp đúp chuột vào tên Sheet hoặc nhấp chuột phải chọn Rename.',
              'Tô màu Tab: Nhấp chuột phải vào Sheet > Tab Color để phân loại trực quan.'
            ],
            shortcut: 'Shift + F11 để chèn một trang tính Sheet mới ngay lập tức.',
            examTip: 'Tên Sheet không được chứa các ký tự đặc biệt như dấu gạch chéo (/), dấu hỏi (?) hoặc dấu hai chấm (:).'
          }
        ],
        tasks: [
          {
            id: 'etask-1-1',
            title: 'Định dạng kiểu số thập phân có phân tách hàng nghìn',
            instruction: 'Bấm chọn nút Comma Style (biểu tượng dấu phẩy) trên nhóm Number thẻ Home.',
            hint: 'Nhấp Home > nhóm Number > biểu tượng dấu phẩy (Comma Style).',
            targetType: 'ribbon-action',
            actionKey: 'excel-format-comma'
          },
          {
            id: 'etask-1-2',
            title: 'Gộp ô và căn giữa tiêu đề bảng (Merge & Center)',
            instruction: 'Chọn khối ô tiêu đề A1:D1 và bấm vào nút Merge & Center trên nhóm Alignment.',
            hint: 'Nhấp Home > nhóm Alignment > Merge & Center.',
            targetType: 'ribbon-action',
            actionKey: 'excel-merge-center'
          },
          {
            id: 'etask-1-3',
            title: 'Nhập công thức cơ bản vào ô C4',
            instruction: 'Gõ công thức =A4*B4 vào thanh công thức hoặc ô C4 để tính tổng tiền.',
            hint: 'Gõ đúng chuỗi: =A4*B4',
            targetType: 'cell-formula',
            actionKey: 'formula-multiply',
            expectedValue: '=A4*B4',
            targetRef: 'C4'
          }
        ],
        quiz: [
          {
            id: 'eq-1-1',
            question: 'Trong Microsoft Excel, dữ liệu dạng số (Number) khi nhập vào ô tính mặc định được căn lề về phía nào?',
            options: ['Căn lề bên trái', 'Căn lề bên phải', 'Căn chính giữa', 'Căn đều hai bên'],
            correctIndex: 1,
            explanation: 'Dữ liệu số mặc định căn phải; dữ liệu văn bản (Text) mặc định căn trái.'
          },
          {
            id: 'eq-1-2',
            question: 'Để nhập số điện thoại "0987654321" vào ô mà không bị Excel tự động xóa mất chữ số 0 đầu tiên, ta gõ ký tự gì phía trước?',
            options: ['Dấu chấm (.)', 'Dấu gạch ngang (-)', 'Dấu nháy đơn (\')', 'Dấu hoa thị (*)'],
            correctIndex: 2,
            explanation: 'Dấu nháy đơn (\') định dạng ô đó thành kiểu Text, giữ nguyên mọi ký tự kể cả số 0 ở đầu.'
          },
          {
            id: 'eq-1-3',
            question: 'Khi kéo nút điền dữ liệu tự động (Fill Handle), tổ hợp phím nào giúp biến thao tác sao chép thành điền chuỗi số tăng dần?',
            options: ['Giữ phím Shift', 'Giữ phím Ctrl', 'Giữ phím Alt', 'Giữ phím Tab'],
            correctIndex: 1,
            explanation: 'Giữ phím Ctrl khi kéo nút Fill Handle sẽ sinh ra dãy số nguyên liên tiếp tăng dần 1 đơn vị.'
          },
          {
            id: 'eq-1-4',
            question: 'Tổ hợp phím tắt nào dùng để tạo nhanh một Sheet (trang tính) mới trong sổ tính?',
            options: ['Ctrl + N', 'Shift + F11', 'Alt + Shift + N', 'Ctrl + T'],
            correctIndex: 1,
            explanation: 'Shift + F11 tạo thêm một trang tính mới trong bảng tính hiện tại; Ctrl + N tạo một file sổ tính mới hoàn toàn.'
          },
          {
            id: 'eq-1-5',
            question: 'Nút lệnh "Merge & Center" trên thanh Ribbon có công dụng gì?',
            options: ['Gộp các ô được chọn thành một ô và căn dữ liệu ra chính giữa', 'Chia nhỏ một ô thành nhiều ô', 'Xóa toàn bộ nội dung các ô', 'Tô màu nền cho ô'],
            correctIndex: 0,
            explanation: 'Merge & Center hợp nhất các ô liền kề và đưa nội dung về giữa, thường dùng cho tiêu đề bảng.'
          }
        ]
      },
      {
        id: 'excel-lesson-2',
        moduleId: 'excel',
        order: 2,
        title: 'Địa Chỉ Ô Tương Đối, Tuyệt Đối ($) & Công Thức Cơ Bản',
        summary: 'Hiểu sâu bản chất dấu đô-la ($), phân biệt địa chỉ tương đối A1 và tuyệt đối $A$1 khi sao chép công thức.',
        durationMinutes: 18,
        theories: [
          {
            id: 'et-2-1',
            title: 'Khái Niệm Địa Chỉ Tương Đối & Tuyệt Đối',
            concept: 'Khi sao chép công thức sang ô khác, địa chỉ tương đối sẽ tự động thay đổi tọa độ, còn địa chỉ tuyệt đối (có dấu $) luôn bị cố định.',
            keyPoints: [
              'Tương đối (A1): Cả cột và hàng đều thay đổi khi copy sang ô khác.',
              'Tuyệt đối cố định hoàn toàn ($A$1): Cả cột A và hàng 1 đều bị khóa cứng.',
              'Hỗn hợp cố định cột ($A1): Cột A cố định, chỉ số hàng 1 sẽ tăng giảm.',
              'Hỗn hợp cố định hàng (A$1): Cột A sẽ thay đổi, chỉ số hàng 1 luôn cố định.'
            ],
            shortcut: 'Phím F4 khi đang chọn tên ô trong thanh công thức để luân chuyển giữa các kiểu địa chỉ: A1 -> $A$1 -> A$1 -> $A1 -> A1.',
            examTip: 'Khi tính tỷ lệ phần trăm (ví dụ: Doanh thu / Tổng doanh thu), ô Tổng doanh thu luôn phải khóa tuyệt đối bằng $ ký hiệu.'
          },
          {
            id: 'et-2-2',
            title: 'Quy Tắc Viết Công Thức & Thứ Tự Ưu Tiên Toán Học',
            concept: 'Mọi công thức trong Excel luôn bắt đầu bằng dấu bằng (=). Excel tuân thủ quy tắc toán học tiêu chuẩn.',
            keyPoints: [
              'Thứ tự tính: Dấu ngoặc đơn () trước > Lũy thừa (^) > Nhân (*) và Chia (/) > Cộng (+) và Trừ (-).',
              'Toán tử nối chuỗi văn bản: Dấu và (&). Ví dụ: ="Họ: " & "An" cho kết quả "Họ: An".',
              'Toán tử so sánh: = (bằng), <> (khác), > (lớn hơn), < (nhỏ hơn), >=, <=.'
            ],
            shortcut: 'Phím Ctrl + ~ (dấu ngã) để bật/tắt chế độ hiển thị toàn bộ công thức trên các ô thay vì kết quả.',
            examTip: 'Lỗi #DIV/0! xuất hiện khi một công thức thực hiện phép chia cho ô trống hoặc ô chứa số 0.'
          },
          {
            id: 'et-2-3',
            title: 'Các Lỗi Công Thức Thường Gặp & Cách Khắc Phục',
            concept: 'Nhận diện nguyên nhân của các mã lỗi giúp học sinh tự sửa bài làm nhanh chóng trong phòng thi.',
            keyPoints: [
              'Lỗi #####: Độ rộng cột quá hẹp không đủ hiển thị số. Khắc phục: Kéo rộng cột ra.',
              'Lỗi #NAME?: Gõ sai tên hàm (ví dụ gõ =SUUM(...) thay vì =SUM).',
              'Lỗi #VALUE!: Sai kiểu dữ liệu (ví dụ lấy ô chứa chữ cộng với ô chứa số).',
              'Lỗi #REF!: Ô tham chiếu trong công thức đã bị xóa mất khỏi bảng tính.'
            ],
            shortcut: 'Nhấp đúp vào đường phân cách giữa 2 tiêu đề cột để tự động chỉnh vừa vặn độ rộng (AutoFit Column Width).',
            examTip: 'Đề thi trắc nghiệm thường hỏi ý nghĩa của lỗi #NAME? và #VALUE!.'
          }
        ],
        tasks: [
          {
            id: 'etask-2-1',
            title: 'Chuyển địa chỉ sang tuyệt đối bằng phím F4',
            instruction: 'Nhập công thức =B2*$D$1 vào ô C2 để tính thuế VAT với ô tỷ lệ thuế cố định.',
            hint: 'Gõ: =B2*$D$1',
            targetType: 'cell-formula',
            actionKey: 'formula-absolute',
            expectedValue: '=B2*$D$1',
            targetRef: 'C2'
          },
          {
            id: 'etask-2-2',
            title: 'Bật chế độ hiển thị toàn bộ công thức (Show Formulas)',
            instruction: 'Bấm vào nút Show Formulas trên thẻ Formulas để kiểm tra các biểu thức trong bảng.',
            hint: 'Nhấp Formulas > nhóm Formula Auditing > Show Formulas.',
            targetType: 'ribbon-action',
            actionKey: 'excel-show-formulas'
          },
          {
            id: 'etask-2-3',
            title: 'Tính toán phép nhân lũy kế',
            instruction: 'Nhập công thức tính thành tiền =A3*B3 vào ô C3.',
            hint: 'Gõ công thức: =A3*B3',
            targetType: 'cell-formula',
            actionKey: 'formula-calc',
            expectedValue: '=A3*B3',
            targetRef: 'C3'
          }
        ],
        quiz: [
          {
            id: 'eq-2-1',
            question: 'Ký hiệu nào được dùng để cố định hàng hoặc cột (địa chỉ tuyệt đối) trong Excel?',
            options: ['Dấu thăng (#)', 'Dấu và (&)', 'Dấu đô la ($)', 'Dấu phần trăm (%)'],
            correctIndex: 2,
            explanation: 'Dấu $ (ví dụ $A$1) cố định tuyệt đối vị trí tham chiếu không bị thay đổi khi sao chép công thức.'
          },
          {
            id: 'eq-2-2',
            question: 'Phím tắt nào giúp luân chuyển nhanh giữa các dạng địa chỉ tương đối, tuyệt đối và hỗn hợp khi đang viết công thức?',
            options: ['F2', 'F4', 'F9', 'F12'],
            correctIndex: 1,
            explanation: 'Phím F4 chuyển đổi qua lại giữa A1, $A$1, A$1 và $A1.'
          },
          {
            id: 'eq-2-3',
            question: 'Khi ô tính xuất hiện chuỗi ký tự "#####", nguyên nhân trực tiếp là gì?',
            options: ['Công thức bị chia cho số 0', 'Tên hàm bị gõ sai cú pháp', 'Độ rộng cột không đủ lớn để hiển thị số', 'Dữ liệu bị xóa mất'],
            correctIndex: 2,
            explanation: 'Dãy ký tự thăng ##### chỉ ra rằng cột quá hẹp; chỉ cần mở rộng kích thước cột là số liệu hiển thị bình thường.'
          },
          {
            id: 'eq-2-4',
            question: 'Địa chỉ ô "$B4" thuộc loại địa chỉ nào sau đây?',
            options: ['Địa chỉ tương đối', 'Địa chỉ tuyệt đối hoàn toàn', 'Địa chỉ hỗn hợp cố định cột B', 'Địa chỉ hỗn hợp cố định hàng 4'],
            correctIndex: 2,
            explanation: 'Dấu $ nằm trước chữ B nên cột B được giữ cố định, còn hàng 4 là tương đối sẽ thay đổi khi sao chép theo chiều dọc.'
          },
          {
            id: 'eq-2-5',
            question: 'Lỗi "#NAME?" trong Excel xuất hiện chủ yếu do nguyên nhân nào?',
            options: ['Gõ sai tên hàm hoặc chuỗi chữ không đặt trong dấu ngoặc kép', 'Lấy số chia cho 0', 'Cộng văn bản với số', 'Ô tham chiếu bị xóa'],
            correctIndex: 0,
            explanation: 'Excel không nhận diện được tên hàm hoặc tên vùng dữ liệu chưa được định nghĩa.'
          }
        ]
      },
      {
        id: 'excel-lesson-3',
        moduleId: 'excel',
        order: 3,
        title: 'Nhóm Hàm Thống Kê Cơ Bản (SUM, AVERAGE, MIN, MAX, COUNT)',
        summary: 'Làm chủ các hàm tính toán tổng, trung bình, giá trị lớn nhất, nhỏ nhất và đếm ô số lượng.',
        durationMinutes: 16,
        theories: [
          {
            id: 'et-3-1',
            title: 'Hàm SUM & Hàm AVERAGE',
            concept: 'Hàm tính tổng SUM và hàm tính trung bình cộng AVERAGE là hai hàm được sử dụng nhiều nhất trong xử lý bảng điểm và kế toán.',
            keyPoints: [
              'Cú pháp SUM: =SUM(number1, [number2], ...) hoặc =SUM(A1:A10). Bỏ qua các ô chứa chữ hoặc rỗng.',
              'Cú pháp AVERAGE: =AVERAGE(A1:A10). Tính tổng các ô số rồi chia cho số lượng ô số trong vùng.',
              'Có thể truyền vào nhiều vùng rời rạc cách nhau bởi dấu phẩy: =SUM(A1:A5, C1:C5).'
            ],
            shortcut: 'Alt + = (nhấn giữ Alt rồi gõ dấu bằng) để kích hoạt AutoSum tự động bắt vùng tính tổng.',
            examTip: 'Hàm AVERAGE tự động bỏ qua ô rỗng, nhưng nếu ô đó chứa số 0 thì số 0 vẫn được tính vào trung bình cộng.'
          },
          {
            id: 'et-3-2',
            title: 'Hàm MIN & Hàm MAX Tìm Cực Trị',
            concept: 'Dùng để tìm ra giá trị nhỏ nhất (MIN) và giá trị lớn nhất (MAX) trong một dãy số liệu (ví dụ: điểm thủ khoa, doanh số cao nhất).',
            keyPoints: [
              '=MIN(A1:A20): Trả về con số nhỏ nhất trong vùng.',
              '=MAX(A1:A20): Trả về con số lớn nhất trong vùng.',
              'Cả hai hàm đều tự động bỏ qua dữ liệu văn bản và ô rỗng.'
            ],
            shortcut: 'Nhấp mũi tên cạnh nút AutoSum trên thẻ Home để chọn nhanh Average, Max, Min.',
            examTip: 'Nếu cần tìm giá trị lớn thứ nhì hoặc thứ ba, Excel dùng hàm LARGE(vùng, k), không dùng MAX.'
          },
          {
            id: 'et-3-3',
            title: 'Phân Biệt Hàm Đếm COUNT & COUNTA',
            concept: 'Rất nhiều học sinh THPT nhầm lẫn giữa hàm COUNT (chỉ đếm số) và COUNTA (đếm tất cả ô có dữ liệu).',
            keyPoints: [
              'Hàm COUNT(A1:A10): Chỉ đếm các ô chứa dữ liệu kiểu SỐ hoặc ngày tháng.',
              'Hàm COUNTA(A1:A10): Đếm tất cả các ô KHÔNG RỖNG (chứa chữ, số, ký tự đặc biệt).',
              'Hàm COUNTBLANK(A1:A10): Đếm các ô hoàn toàn TRỐNG trong vùng.'
            ],
            shortcut: 'Nhìn xuống thanh trạng thái dưới đáy màn hình (Status Bar) để xem nhanh Count, Sum, Average của các ô đang bôi đen.',
            examTip: 'Đề thi trắc nghiệm thường cho một bảng gồm 3 ô chữ, 4 ô số và 2 ô trống rồi hỏi kết quả của hàm COUNT.'
          }
        ],
        tasks: [
          {
            id: 'etask-3-1',
            title: 'Tính tổng bằng hàm SUM',
            instruction: 'Nhập công thức =SUM(B2:B6) vào ô B7 để tính tổng số lượng.',
            hint: 'Gõ: =SUM(B2:B6)',
            targetType: 'cell-formula',
            actionKey: 'formula-sum',
            expectedValue: '=SUM(B2:B6)',
            targetRef: 'B7'
          },
          {
            id: 'etask-3-2',
            title: 'Tính trung bình cộng bằng hàm AVERAGE',
            instruction: 'Nhập công thức =AVERAGE(B2:B6) vào ô B8 để tính giá trị bình quân.',
            hint: 'Gõ: =AVERAGE(B2:B6)',
            targetType: 'cell-formula',
            actionKey: 'formula-average',
            expectedValue: '=AVERAGE(B2:B6)',
            targetRef: 'B8'
          },
          {
            id: 'etask-3-3',
            title: 'Tìm điểm cao nhất với hàm MAX',
            instruction: 'Nhập công thức =MAX(B2:B6) vào ô B9 để tìm con số lớn nhất.',
            hint: 'Gõ: =MAX(B2:B6)',
            targetType: 'cell-formula',
            actionKey: 'formula-max',
            expectedValue: '=MAX(B2:B6)',
            targetRef: 'B9'
          }
        ],
        quiz: [
          {
            id: 'eq-3-1',
            question: 'Tổ hợp phím tắt nào dùng để kích hoạt tính năng tự động tính tổng AutoSum?',
            options: ['Ctrl + S', 'Alt + =', 'Shift + =', 'Ctrl + Alt + S'],
            correctIndex: 1,
            explanation: 'Alt + = tự động phân tích và tạo công thức =SUM(...) cho các ô số liền kề.'
          },
          {
            id: 'eq-3-2',
            question: 'Cho vùng dữ liệu A1:A5 gồm các giá trị: 10, "Tin học", 20, ô trống, 30. Hàm =COUNT(A1:A5) trả về kết quả là bao nhiêu?',
            options: ['5', '4', '3', '2'],
            correctIndex: 2,
            explanation: 'Hàm COUNT chỉ đếm các ô chứa số (10, 20, 30 nên kết quả là 3).'
          },
          {
            id: 'eq-3-3',
            question: 'Với vùng dữ liệu A1:A5 như trên (10, "Tin học", 20, ô trống, 30), hàm =COUNTA(A1:A5) trả về kết quả là bao nhiêu?',
            options: ['3', '4', '5', '2'],
            correctIndex: 1,
            explanation: 'COUNTA đếm tất cả các ô không rỗng (3 ô số và 1 ô chữ, tổng là 4).'
          },
          {
            id: 'eq-3-4',
            question: 'Hàm nào dùng để tìm con số nhỏ nhất trong một tập hợp dữ liệu số?',
            options: ['=SMALL()', '=MIN()', '=LEAST()', '=LOWEST()'],
            correctIndex: 1,
            explanation: 'Hàm MIN() trả về giá trị nhỏ nhất trong danh sách đối số.'
          },
          {
            id: 'eq-3-5',
            question: 'Nếu ô A1 chứa số 10, ô A2 chứa số 0, ô A3 để trống. Công thức =AVERAGE(A1:A3) cho kết quả là bao nhiêu?',
            options: ['5', '3.33', '10', '#DIV/0!'],
            correctIndex: 0,
            explanation: 'AVERAGE bỏ qua ô trống A3, tính tổng 10 + 0 = 10 chia cho 2 ô có số = 5.'
          }
        ]
      },
      {
        id: 'excel-lesson-4',
        moduleId: 'excel',
        order: 4,
        title: 'Nhóm Hàm Điều Kiện & Logic (IF, AND, OR, SUMIF, COUNTIF)',
        summary: 'Xây dựng biểu thức điều kiện logic, xếp loại học lực học sinh và thống kê có điều kiện với SUMIF, COUNTIF.',
        durationMinutes: 20,
        theories: [
          {
            id: 'et-4-1',
            title: 'Hàm Điều Kiện IF & IF Lồng Nhau (Nested IF)',
            concept: 'Hàm IF kiểm tra một điều kiện logic; nếu ĐÚNG trả về kết quả 1, nếu SAI trả về kết quả 2.',
            keyPoints: [
              'Cú pháp: =IF(logical_test, value_if_true, value_if_false).',
              'Ví dụ: =IF(C2>=5, "Đạt", "Hỏng").',
              'IF lồng nhau để xếp loại: =IF(C2>=8, "Giỏi", IF(C2>=6.5, "Khá", IF(C2>=5, "TB", "Yếu"))).',
              'Chuỗi chữ trả về bắt buộc phải đặt trong cặp dấu ngoặc kép ("").'
            ],
            shortcut: 'Trong Excel hiện đại có thể dùng hàm =IFS(...) để tránh phải lồng nhiều dấu ngoặc đơn đóng ở cuối.',
            examTip: 'Đếm số lượng dấu ngoặc đơn đóng ở cuối công thức IF lồng phải luôn bằng số lượng hàm IF đã mở.'
          },
          {
            id: 'et-4-2',
            title: 'Kết Hợp Hàm Logic AND & OR',
            concept: 'Dùng khi cần kiểm tra đồng thời nhiều điều kiện phức tạp trong bài toán thực tế.',
            keyPoints: [
              'Hàm AND(đk1, đk2, ...): Trả về TRUE chỉ khi TẤT CẢ các điều kiện con đều ĐÚNG.',
              'Hàm OR(đk1, đk2, ...): Trả về TRUE khi có ÍT NHẤT MỘT điều kiện con ĐÚNG.',
              'Ví dụ xét học bổng: =IF(AND(D2>=8.0, E2="Tốt"), "Có Học Bổng", "Không").'
            ],
            shortcut: 'Luôn bao bọc AND hoặc OR bên trong tham số thứ nhất của hàm IF.',
            examTip: 'Học sinh hay viết sai cú pháp dạng =IF(D2>=8 AND E2="Tốt",...) - điều này gây lỗi vì AND là một hàm độc lập.'
          },
          {
            id: 'et-4-3',
            title: 'Hàm Thống Kê Theo Tiêu Chí COUNTIF & SUMIF',
            concept: 'Đếm hoặc tính tổng chỉ những ô thỏa mãn một điều kiện nhất định (ví dụ: đếm số học sinh nữ, tính tổng tiền bán hàng loại A).',
            keyPoints: [
              'Cú pháp COUNTIF: =COUNTIF(range, criteria). Ví dụ: =COUNTIF(B2:B20, "Nữ").',
              'Cú pháp SUMIF: =SUMIF(range, criteria, [sum_range]).',
              'Ví dụ: =SUMIF(A2:A20, "Hà Nội", C2:C20) (tính tổng cột C của các dòng có chữ "Hà Nội" ở cột A).'
            ],
            shortcut: 'Tiêu chí so sánh có thể chứa dấu: =COUNTIF(C2:C20, ">=8.0").',
            examTip: 'Khi tiêu chí chứa các toán tử so sánh (>, <, >=, <=, <>), bắt buộc phải đặt chúng trong dấu ngoặc kép.'
          }
        ],
        tasks: [
          {
            id: 'etask-4-1',
            title: 'Viết hàm IF xét kết quả Đạt hoặc Hỏng',
            instruction: 'Nhập công thức =IF(B2>=5,"Đạt","Hỏng") vào ô C2.',
            hint: 'Gõ: =IF(B2>=5,"Đạt","Hỏng")',
            targetType: 'cell-formula',
            actionKey: 'formula-if',
            expectedValue: '=IF(B2>=5,"Đạt","Hỏng")',
            targetRef: 'C2'
          },
          {
            id: 'etask-4-2',
            title: 'Đếm số lượng học sinh Đạt bằng hàm COUNTIF',
            instruction: 'Nhập công thức =COUNTIF(C2:C10,"Đạt") vào ô C11.',
            hint: 'Gõ: =COUNTIF(C2:C10,"Đạt")',
            targetType: 'cell-formula',
            actionKey: 'formula-countif',
            expectedValue: '=COUNTIF(C2:C10,"Đạt")',
            targetRef: 'C11'
          },
          {
            id: 'etask-4-3',
            title: 'Tính tổng doanh thu theo điều kiện SUMIF',
            instruction: 'Nhập công thức =SUMIF(A2:A10,"Loại A",B2:B10) vào ô B11.',
            hint: 'Gõ: =SUMIF(A2:A10,"Loại A",B2:B10)',
            targetType: 'cell-formula',
            actionKey: 'formula-sumif',
            expectedValue: '=SUMIF(A2:A10,"Loại A",B2:B10)',
            targetRef: 'B11'
          }
        ],
        quiz: [
          {
            id: 'eq-4-1',
            question: 'Cú pháp chuẩn của hàm điều kiện IF trong Microsoft Excel là gì?',
            options: [
              '=IF(value_if_true, value_if_false, logical_test)',
              '=IF(logical_test, value_if_true, value_if_false)',
              '=IF(condition, then_action, else_action)',
              '=IF(logical_test, result)'
            ],
            correctIndex: 1,
            explanation: 'Cú pháp gồm 3 đối số: điều kiện kiểm tra, giá trị khi đúng, giá trị khi sai.'
          },
          {
            id: 'eq-4-2',
            question: 'Hàm nào trả về giá trị TRUE khi và chỉ khi TẤT CẢ các mệnh đề điều kiện bên trong đều đúng?',
            options: ['Hàm OR()', 'Hàm NOT()', 'Hàm AND()', 'Hàm XOR()'],
            correctIndex: 2,
            explanation: 'Hàm AND() đòi hỏi toàn bộ đối số phải có giá trị TRUE mới trả về kết quả TRUE.'
          },
          {
            id: 'eq-4-3',
            question: 'Công thức đếm số học sinh có điểm trung bình từ 8.0 trở lên trong vùng A1:A20 nào sau đây là ĐÚNG cú pháp?',
            options: ['=COUNTIF(A1:A20, >=8.0)', '=COUNTIF(A1:A20, ">=8.0")', '=COUNT(A1:A20, >=8.0)', '=COUNTIF(">=8.0", A1:A20)'],
            correctIndex: 1,
            explanation: 'Điều kiện chứa toán tử so sánh trong COUNTIF bắt buộc phải bao bọc trong cặp dấu nháy kép ">=8.0".'
          },
          {
            id: 'eq-4-4',
            question: 'Trong hàm SUMIF(range, criteria, [sum_range]), đối số sum_range mang ý nghĩa gì?',
            options: ['Vùng điều kiện cần kiểm tra', 'Tiêu chuẩn để lọc', 'Vùng thực tế chứa các con số cần tính tổng', 'Giá trị lớn nhất'],
            correctIndex: 2,
            explanation: 'sum_range là vùng chứa dữ liệu số sẽ được cộng dồn khi các ô tương ứng ở range thỏa mãn tiêu chí criteria.'
          },
          {
            id: 'eq-4-5',
            question: 'Cho công thức =IF(5>3, IF(2>4, 10, 20), 30). Kết quả trả về của công thức là bao nhiêu?',
            options: ['10', '20', '30', '#VALUE!'],
            correctIndex: 1,
            explanation: 'Vì 5>3 là TRUE nên xét nhánh trong: IF(2>4, 10, 20). Vì 2>4 là FALSE nên kết quả trả về là 20.'
          }
        ]
      },
      {
        id: 'excel-lesson-5',
        moduleId: 'excel',
        order: 5,
        title: 'Nhóm Hàm Tra Cứu Dữ Liệu (VLOOKUP & HLOOKUP)',
        summary: 'Kỹ thuật tra cứu bảng giá, tên sản phẩm theo chiều dọc và chiều ngang với đối số dò tìm chính xác tuyệt đối (0/FALSE).',
        durationMinutes: 20,
        theories: [
          {
            id: 'et-5-1',
            title: 'Bản Chất & Cú Pháp Hàm Tra Cứu Dọc VLOOKUP',
            concept: 'VLOOKUP (Vertical Lookup) tìm kiếm một giá trị ở cột đầu tiên bên trái của bảng tham chiếu và trả về giá trị ở cột tương ứng cùng hàng.',
            keyPoints: [
              'Cú pháp: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]).',
              'lookup_value: Giá trị đem đi dò (ví dụ: Mã hàng A01).',
              'table_array: Bảng phụ tham chiếu (bắt buộc phải khóa tuyệt đối $ để khi copy không bị lệch).',
              'col_index_num: Số thứ tự cột muốn lấy dữ liệu trong bảng phụ (tính từ 1).',
              'range_lookup: Điền 0 hoặc FALSE để tìm kiếm chính xác tuyệt đối.'
            ],
            shortcut: 'Luôn gõ số 0 ở đối số cuối cùng để đảm bảo tìm kiếm chính xác 100%.',
            examTip: 'Cột chứa giá trị cần tìm kiếm BẮT BUỘC phải là cột đầu tiên (ngoài cùng bên trái) của table_array.'
          },
          {
            id: 'et-5-2',
            title: 'Hàm Tra Cứu Ngang HLOOKUP',
            concept: 'Tương tự như VLOOKUP nhưng áp dụng khi bảng tham chiếu phụ được bố trí nằm ngang (tiêu đề nằm ở hàng ngang đầu tiên).',
            keyPoints: [
              'Cú pháp: =HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup]).',
              'row_index_num: Số thứ tự HÀNG muốn trích xuất dữ liệu.',
              'Điền 0 (FALSE) ở cuối để tìm kiếm chính xác tuyệt đối.'
            ],
            shortcut: 'Khi bảng phụ tiêu đề dàn theo cột dọc -> dùng VLOOKUP; tiêu đề dàn theo hàng ngang -> dùng HLOOKUP.',
            examTip: 'Đề thi THPT thường cho bảng phụ nằm ngang để kiểm tra học sinh có biết dùng HLOOKUP thay cho VLOOKUP hay không.'
          },
          {
            id: 'et-5-3',
            title: 'Lỗi #N/A Trong Hàm Tra Cứu & Cách Xử Lý',
            concept: 'Lỗi #N/A (Not Available) xuất hiện khi giá trị dò tìm không tồn tại trong cột đầu tiên của bảng phụ.',
            keyPoints: [
              'Nguyên nhân thường gặp: Thừa dấu cách trống (khoảng trắng) ở mã hàng.',
              'Bảng phụ quên không khóa F4 làm vùng bảng bị trôi khi kéo công thức.',
              'Sử dụng hàm bọc =IFERROR(VLOOKUP(...), "Không tìm thấy") để giao diện bảng tính sạch đẹp.'
            ],
            shortcut: 'Dùng hàm TRIM() để cắt bỏ khoảng trắng thừa trước khi đem đi tra cứu.',
            examTip: 'Nhận diện lỗi #N/A là câu hỏi rất phổ biến trong các đề kiểm tra một tiết và học kỳ.'
          }
        ],
        tasks: [
          {
            id: 'etask-5-1',
            title: 'Tra cứu tên hàng với hàm VLOOKUP chính xác',
            instruction: 'Nhập công thức =VLOOKUP(A2,$E$2:$G$10,2,0) vào ô B2.',
            hint: 'Gõ: =VLOOKUP(A2,$E$2:$G$10,2,0)',
            targetType: 'cell-formula',
            actionKey: 'formula-vlookup',
            expectedValue: '=VLOOKUP(A2,$E$2:$G$10,2,0)',
            targetRef: 'B2'
          },
          {
            id: 'etask-5-2',
            title: 'Tra cứu bảng ngang với hàm HLOOKUP',
            instruction: 'Nhập công thức =HLOOKUP(A2,$E$1:$H$3,2,0) vào ô C2.',
            hint: 'Gõ: =HLOOKUP(A2,$E$1:$H$3,2,0)',
            targetType: 'cell-formula',
            actionKey: 'formula-hlookup',
            expectedValue: '=HLOOKUP(A2,$E$1:$H$3,2,0)',
            targetRef: 'C2'
          },
          {
            id: 'etask-5-3',
            title: 'Bẫy lỗi tra cứu bằng hàm IFERROR',
            instruction: 'Nhập công thức =IFERROR(VLOOKUP(A2,$E$2:$F$5,2,0),"N/A") vào ô D2.',
            hint: 'Gõ: =IFERROR(VLOOKUP(A2,$E$2:$F$5,2,0),"N/A")',
            targetType: 'cell-formula',
            actionKey: 'formula-iferror',
            expectedValue: '=IFERROR(VLOOKUP(A2,$E$2:$F$5,2,0),"N/A")',
            targetRef: 'D2'
          }
        ],
        quiz: [
          {
            id: 'eq-5-1',
            question: 'Trong hàm VLOOKUP(lookup_value, table_array, col_index_num, range_lookup), muốn tìm kiếm chính xác tuyệt đối thì đối số range_lookup nhận giá trị nào?',
            options: ['1 hoặc TRUE', '0 hoặc FALSE', '-1', 'Để trống tự động'],
            correctIndex: 1,
            explanation: 'Giá trị 0 (hoặc FALSE) yêu cầu tìm kiếm chính xác tuyệt đối; nếu không tìm thấy sẽ trả về lỗi #N/A.'
          },
          {
            id: 'eq-5-2',
            question: 'Khi sao chép công thức VLOOKUP xuống các dòng bên dưới, vùng bảng tham chiếu (table_array) cần được đặt ở dạng địa chỉ nào để không bị sai lệch?',
            options: ['Địa chỉ tương đối', 'Địa chỉ tuyệt đối (có dấu $)', 'Địa chỉ tên ô tự do', 'Không quan trọng'],
            correctIndex: 1,
            explanation: 'Bảng tham chiếu phải cố định bằng địa chỉ tuyệt đối (ví dụ $A$1:$D$10) để vùng tìm kiếm không bị trôi.'
          },
          {
            id: 'eq-5-3',
            question: 'Điểm khác biệt căn bản giữa hàm VLOOKUP và hàm HLOOKUP là gì?',
            options: [
              'VLOOKUP tra cứu theo cột dọc, HLOOKUP tra cứu theo hàng ngang',
              'VLOOKUP chỉ tìm được số, HLOOKUP chỉ tìm được chữ',
              'HLOOKUP không cần bảng phụ',
              'VLOOKUP không hỗ trợ tìm kiếm chính xác'
            ],
            correctIndex: 0,
            explanation: 'VLOOKUP duyệt tìm ở cột đầu tiên bên trái; HLOOKUP duyệt tìm ở hàng đầu tiên phía trên.'
          },
          {
            id: 'eq-5-4',
            question: 'Khi hàm VLOOKUP trả về mã lỗi "#N/A", điều này báo hiệu điều gì?',
            options: ['Chia cho số không', 'Không tìm thấy giá trị tra cứu trong cột đầu tiên của bảng phụ', 'Sai cú pháp tên hàm', 'Cột hiển thị quá hẹp'],
            correctIndex: 1,
            explanation: '#N/A viết tắt của "Not Available" thông báo rằng giá trị lookup_value không tồn tại trong bảng tham chiếu.'
          },
          {
            id: 'eq-5-5',
            question: 'Trong bảng tham chiếu $A$1:$D$10, nếu muốn lấy dữ liệu ở cột C thì tham số col_index_num phải điền số mấy?',
            options: ['1', '2', '3', '4'],
            correctIndex: 2,
            explanation: 'Cột A là 1, cột B là 2, cột C là 3 và cột D là 4.'
          }
        ]
      },
      {
        id: 'excel-lesson-6',
        moduleId: 'excel',
        order: 6,
        title: 'Sắp Xếp, Lọc Dữ Liệu & Định Dạng Có Điều Kiện (Sort, Filter & Conditional Formatting)',
        summary: 'Kỹ thuật lọc tự động (AutoFilter), sắp xếp dữ liệu nhiều cấp và tô màu tự động cảnh báo các ô số liệu quan trọng.',
        durationMinutes: 18,
        theories: [
          {
            id: 'et-6-1',
            title: 'Lọc Dữ Liệu Tự Động Với AutoFilter',
            concept: 'Filter giúp ẩn đi các dòng không thỏa mãn và chỉ hiển thị những bản ghi ta quan tâm (ví dụ: chỉ xem học sinh xếp loại Giỏi).',
            keyPoints: [
              'Bật lọc: Chọn dòng tiêu đề > thẻ Data > nhấp vào biểu tượng cái phễu Filter.',
              'Mũi tên thả xuống xuất hiện ở mỗi cột cho phép tích chọn tiêu chí.',
              'Lọc số (Number Filters): Lớn hơn (Greater Than), Nhỏ hơn (Less Than), Trong khoảng (Between).',
              'Lọc văn bản (Text Filters): Chứa từ khóa (Contains), Bắt đầu bằng (Begins With).'
            ],
            shortcut: 'Ctrl + Shift + L để bật hoặc tắt chế độ lọc Filter tức thì.',
            examTip: 'Thao tác Filter chỉ ẩn tạm thời các dòng không thỏa mãn, dữ liệu gốc hoàn toàn không bị xóa.'
          },
          {
            id: 'et-6-2',
            title: 'Sắp Xếp Dữ Liệu Đa Tiêu Chí (Multi-Level Sort)',
            concept: 'Sắp xếp danh sách học sinh theo thứ tự tăng dần của Điểm số; nếu trùng điểm thì sắp theo Tên A-Z.',
            keyPoints: [
              'Vào thẻ Data > Sort để mở hộp thoại sắp xếp nhiều cấp độ.',
              'Sort by: Tiêu chí ưu tiên cấp 1.',
              'Add Level: Thêm tiêu chí ưu tiên cấp 2 (Then by).',
              'Thứ tự: A to Z (tăng dần), Z to A (giảm dần).'
            ],
            shortcut: 'Alt + A, S, S để mở nhanh hộp thoại Sort.',
            examTip: 'Luôn tích chọn ô "My data has headers" trong hộp thoại Sort để dòng tiêu đề không bị xáo trộn vào danh sách số liệu.'
          },
          {
            id: 'et-6-3',
            title: 'Định Dạng Ô Tự Động Với Conditional Formatting',
            concept: 'Tự động đổi màu nền hoặc màu chữ của các ô khi thỏa mãn điều kiện (ví dụ: điểm dưới 5 tự động tô màu đỏ cảnh báo).',
            keyPoints: [
              'Chọn vùng điểm số > Thẻ Home > Conditional Formatting.',
              'Highlight Cells Rules: Greater Than (>), Less Than (<), Equal To (=).',
              'Top/Bottom Rules: Tô màu top 10 học sinh cao điểm nhất.',
              'Data Bars & Color Scales: Hiển thị thanh đo trực quan ngay trong lòng ô tính.'
            ],
            shortcut: 'Alt + H, L để mở menu Conditional Formatting.',
            examTip: 'Đề thi MOS luôn yêu cầu tạo quy tắc Highlight Cells Rules và gán kiểu màu Light Red Fill with Dark Red Text.'
          }
        ],
        tasks: [
          {
            id: 'etask-6-1',
            title: 'Bật thanh công cụ lọc dữ liệu Filter',
            instruction: 'Bấm vào thẻ Data trên Ribbon và nhấp vào biểu tượng hình chiếc phễu Filter.',
            hint: 'Nhấp thẻ Data > nhóm Sort & Filter > Filter.',
            targetType: 'ribbon-action',
            actionKey: 'excel-filter-toggle'
          },
          {
            id: 'etask-6-2',
            title: 'Sắp xếp số liệu tăng dần từ A đến Z',
            instruction: 'Bấm nút Sort A to Z trên nhóm Sort & Filter để sắp xếp danh sách.',
            hint: 'Nhấp Data > Sort A to Z.',
            targetType: 'ribbon-action',
            actionKey: 'excel-sort-asc'
          },
          {
            id: 'etask-6-3',
            title: 'Tô màu có điều kiện cho các ô điểm dưới 5',
            instruction: 'Chọn Conditional Formatting trên thẻ Home > Highlight Cells Rules > Less Than.',
            hint: 'Nhấp Home > Conditional Formatting > Highlight Cells Rules > Less Than.',
            targetType: 'ribbon-action',
            actionKey: 'excel-cond-format-lessthan'
          }
        ],
        quiz: [
          {
            id: 'eq-6-1',
            question: 'Tổ hợp phím tắt nào dùng để bật hoặc tắt nhanh tính năng lọc dữ liệu tự động (AutoFilter)?',
            options: ['Ctrl + F', 'Ctrl + Shift + L', 'Alt + F4', 'Ctrl + Alt + F'],
            correctIndex: 1,
            explanation: 'Ctrl + Shift + L bật hoặc tắt các nút mũi tên lọc Filter trên hàng tiêu đề.'
          },
          {
            id: 'eq-6-2',
            question: 'Khi thực hiện thao tác Lọc (Filter) dữ liệu, các hàng không thỏa mãn tiêu chí lọc sẽ như thế nào?',
            options: ['Bị xóa vĩnh viễn khỏi bảng tính', 'Bị ẩn tạm thời', 'Được chuyển sang một Sheet khác', 'Bị đổi màu xám'],
            correctIndex: 1,
            explanation: 'Tính năng Filter chỉ ẩn các dòng không phù hợp; khi bấm Clear Filter toàn bộ dữ liệu sẽ hiện lại đầy đủ.'
          },
          {
            id: 'eq-6-3',
            question: 'Trong hộp thoại Sort, tùy chọn "My data has headers" mang ý nghĩa gì?',
            options: ['Bảng tính có chứa tiêu đề cột, không tham gia vào quá trình sắp xếp', 'Bảng tính không có tiêu đề', 'Chỉ sắp xếp dòng đầu tiên', 'Tự động thêm tiêu đề mới'],
            correctIndex: 0,
            explanation: 'Tùy chọn này giúp dòng tiêu đề được giữ nguyên ở đầu bảng mà không bị đảo lộn xuống dưới.'
          },
          {
            id: 'eq-6-4',
            question: 'Công cụ nào trong Excel cho phép tự động đổi màu nền ô tính thành màu đỏ khi giá trị trong ô nhỏ hơn 5?',
            options: ['Format Cells', 'Data Validation', 'Conditional Formatting', 'AutoFormat'],
            correctIndex: 2,
            explanation: 'Conditional Formatting (Định dạng có điều kiện) tự động đổi màu dựa theo giá trị thực tế của ô.'
          },
          {
            id: 'eq-6-5',
            question: 'Khi muốn sắp xếp danh sách thí sinh: trước tiên theo Điểm thi giảm dần, nếu cùng điểm thì sắp theo Tên tăng dần, ta thực hiện ở đâu?',
            options: ['Bấm nút Sort A to Z', 'Bấm nút Sort Z to A', 'Mở hộp thoại Sort và bấm Add Level', 'Dùng hàm IF'],
            correctIndex: 2,
            explanation: 'Hộp thoại Data > Sort với chức năng Add Level cho phép thiết lập các cấp ưu tiên sắp xếp tuần tự.'
          }
        ]
      },
      {
        id: 'excel-lesson-7',
        moduleId: 'excel',
        order: 7,
        title: 'Vẽ & Tùy Biến Biểu Đồ Trực Quan (Charts)',
        summary: 'Lựa chọn biểu đồ hình cột, hình tròn hoặc đường gấp khúc phù hợp với dữ liệu và tùy biến các thành phần Chart Elements.',
        durationMinutes: 18,
        theories: [
          {
            id: 'et-7-1',
            title: 'Lựa Chọn Loại Biểu Đồ Phù Hợp',
            concept: 'Mỗi loại biểu đồ truyền tải một ý nghĩa số liệu riêng biệt; chọn sai loại biểu đồ sẽ làm sai lệch thông điệp báo cáo.',
            keyPoints: [
              'Biểu đồ cột (Column / Bar Chart): So sánh giá trị giữa các đối tượng độc lập (ví dụ: điểm số giữa các tổ, doanh số các tháng).',
              'Biểu đồ hình tròn (Pie Chart): Thể hiện tỷ lệ phần trăm cơ cấu trong một tổng thể 100% (ví dụ: cơ cấu chi tiêu).',
              'Biểu đồ đường (Line Chart): Thể hiện xu hướng biến thiên số liệu liên tục theo thời gian (ví dụ: nhiệt độ trong tuần).'
            ],
            shortcut: 'Bấm phím Alt + F1 để vẽ nhanh biểu đồ cột mặc định ngay tại trang tính hiện tại; phím F11 để vẽ biểu đồ ra một sheet riêng.',
            examTip: 'Biểu đồ hình tròn chỉ áp dụng hiệu quả khi có tối đa 5 đến 7 phần tử và tổng các phần tử bằng 100%.'
          },
          {
            id: 'et-7-2',
            title: 'Các Thành Phần Cốt Lõi Của Biểu Đồ (Chart Elements)',
            concept: 'Biểu đồ chuyên nghiệp phải đầy đủ các chú giải để người xem hiểu ngay số liệu mà không cần tra cứu bảng tính.',
            keyPoints: [
              'Chart Title: Tiêu đề biểu đồ nêu rõ nội dung đo lường.',
              'Axis Titles: Tên của trục tung (giá trị đo) và trục hoành (danh mục đo).',
              'Data Labels: Hiển thị con số giá trị cụ thể trên từng đỉnh cột.',
              'Legend: Bảng chú giải màu sắc đại diện cho từng chuỗi số liệu.'
            ],
            shortcut: 'Nhấp vào biểu tượng dấu cộng (+) màu xanh cạnh góc trên bên phải của biểu đồ để bật/tắt nhanh các thành phần.',
            examTip: 'Đề thi thường yêu cầu bật Data Labels ở vị trí Outside End (bên ngoài đỉnh cột).'
          },
          {
            id: 'et-7-3',
            title: 'Chuyển Đổi Hàng/Cột & Di Chuyển Biểu Đồ (Switch Row/Column & Move Chart)',
            concept: 'Khi biểu đồ hiển thị không đúng góc nhìn mong muốn, chỉ cần 1 click để hoán đổi góc nhìn giữa hàng và cột.',
            keyPoints: [
              'Chọn biểu đồ > Thẻ Chart Design > nhấp Switch Row/Column.',
              'Move Chart: Chuyển biểu đồ sang một trang tính mới (New sheet) hoặc gắn như một đối tượng trong sheet hiện hành.'
            ],
            shortcut: 'Alt + J, C, W để chuyển đổi nhanh hàng/cột.',
            examTip: 'Nếu các cột dữ liệu không hiển thị đúng nhóm, hãy kiểm tra lại nút Switch Row/Column.'
          }
        ],
        tasks: [
          {
            id: 'etask-7-1',
            title: 'Vẽ biểu đồ hình cột (Clustered Column Chart)',
            instruction: 'Bấm vào thẻ Insert trên Ribbon và chọn công cụ Insert Column Chart > Clustered Column.',
            hint: 'Nhấp Insert > nhóm Charts > Column Chart > Clustered Column.',
            targetType: 'ribbon-action',
            actionKey: 'excel-insert-chart-column'
          },
          {
            id: 'etask-7-2',
            title: 'Vẽ biểu đồ hình tròn cơ cấu (Pie Chart)',
            instruction: 'Bấm vào thẻ Insert và chọn Insert Pie Chart để trực quan hóa tỷ lệ phần trăm.',
            hint: 'Nhấp Insert > nhóm Charts > Pie Chart.',
            targetType: 'ribbon-action',
            actionKey: 'excel-insert-chart-pie'
          },
          {
            id: 'etask-7-3',
            title: 'Hiển thị nhãn số liệu cụ thể (Data Labels)',
            instruction: 'Bấm vào nút Add Chart Element trên thẻ Chart Design và chọn Data Labels > Outside End.',
            hint: 'Nhấp Chart Design > Add Chart Element > Data Labels > Outside End.',
            targetType: 'ribbon-action',
            actionKey: 'excel-chart-datalabels'
          }
        ],
        quiz: [
          {
            id: 'eq-7-1',
            question: 'Tổ hợp phím tắt nào giúp tạo nhanh một biểu đồ hình cột mặc định ngay trong trang tính hiện tại?',
            options: ['F1', 'Alt + F1', 'Ctrl + F1', 'Shift + F1'],
            correctIndex: 1,
            explanation: 'Alt + F1 tạo biểu đồ cột nhúng ngay trên sheet đang mở; trong khi phím F11 tạo một Chart Sheet riêng.'
          },
          {
            id: 'eq-7-2',
            question: 'Khi muốn thể hiện cơ cấu tỷ lệ phần trăm các khoản chi phí trong một đề tài nghiên cứu, loại biểu đồ nào thích hợp nhất?',
            options: ['Biểu đồ đường (Line Chart)', 'Biểu đồ tán xạ (Scatter Chart)', 'Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ bề mặt (Surface Chart)'],
            correctIndex: 2,
            explanation: 'Biểu đồ hình tròn (Pie Chart) chuyên dùng để mô tả cơ cấu các phần tạo nên một tổng thể 100%.'
          },
          {
            id: 'eq-7-3',
            question: 'Muốn hiển thị con số giá trị cụ thể ngay trên từng cột của biểu đồ, ta kích hoạt thành phần nào trong Chart Elements?',
            options: ['Axis Titles', 'Gridlines', 'Data Labels', 'Legend'],
            correctIndex: 2,
            explanation: 'Data Labels (Nhãn dữ liệu) in trực tiếp số liệu cụ thể lên các cột hoặc lát cắt hình tròn.'
          },
          {
            id: 'eq-7-4',
            question: 'Để thể hiện sự tăng trưởng hoặc suy giảm doanh số liên tục qua các tháng trong năm, loại biểu đồ nào tối ưu nhất?',
            options: ['Biểu đồ đường (Line Chart)', 'Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ radar', 'Biểu đồ Treemap'],
            correctIndex: 0,
            explanation: 'Biểu đồ đường (Line Chart) là lựa chọn tối ưu để quan sát xu hướng thay đổi liên tục theo dòng thời gian.'
          },
          {
            id: 'eq-7-5',
            question: 'Nút lệnh "Switch Row/Column" trên thẻ Chart Design có tác dụng gì?',
            options: ['Xóa bảng số liệu gốc', 'Đổi vị trí trục biểu diễn giữa các hàng và các cột dữ liệu', 'Đổi màu biểu đồ', 'Di chuyển biểu đồ sang sheet khác'],
            correctIndex: 1,
            explanation: 'Switch Row/Column giúp hoán đổi trục dữ liệu giữa chuỗi hàng và chuỗi cột để có góc nhìn so sánh khác nhau.'
          }
        ]
      }
    ]
  },
  powerpoint: {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint (Trình Chiếu Đa Phương Tiện)',
    shortDescription: 'Thiết kế bố cục Slide Master chuẩn, SmartArt hình khối, hiệu ứng chuyển trang Morph/Push và diễn hoạt hoạt họa chuyên nghiệp.',
    badgeName: 'Bậc Thầy Thuyết Trình',
    colorName: 'rose',
    accentClass: 'text-rose-600 dark:text-rose-400 bg-rose-600',
    badgeColorClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800',
    lessons: [
      {
        id: 'pp-lesson-1',
        moduleId: 'powerpoint',
        order: 1,
        title: 'Bố Cục Slide Chuẩn & Thiết Kế Đồng Bộ Với Slide Master',
        summary: 'Làm chủ các mẫu Layout chuẩn (Title, Title and Content) và quy hoạch phông chữ, logo đồng bộ với Slide Master.',
        durationMinutes: 16,
        theories: [
          {
            id: 'pt-1-1',
            title: 'Quy Chuẩn Bố Cục Slide (Slide Layouts)',
            concept: 'PowerPoint xây dựng các bố cục mẫu (Placeholders) sẵn sàng giúp nội dung luôn ngay ngắn và thống nhất trên toàn bài thuyết trình.',
            keyPoints: [
              'Title Slide: Dành riêng cho trang bìa đầu tiên (Tên chủ đề bài thuyết trình và Người thực hiện).',
              'Title and Content: Bố cục phổ biến nhất, gồm tiêu đề trên và vùng chứa chữ/bảng/ảnh bên dưới.',
              'Two Content / Comparison: So sánh đối chiếu hai vấn đề song song.',
              'Blank: Trang trắng hoàn toàn dành cho hình ảnh lớn hoặc video toàn màn hình.'
            ],
            shortcut: 'Ctrl + M để chèn một slide mới cùng bố cục; Ctrl + D để nhân bản (Duplicate) slide đang chọn.',
            examTip: 'Không nên chọn slide Blank rồi tự vẽ các khung Text Box rời rạc; luôn chọn Layout chuẩn để đảm bảo tính dễ đọc.'
          },
          {
            id: 'pt-1-2',
            title: 'Sức Mạnh Của Slide Master',
            concept: 'Slide Master là trang mẹ kiểm soát giao diện toàn bộ bài giảng: chỉ cần chèn logo hoặc đổi phông chữ tại đây, tất cả các slide con đều tự động cập nhật.',
            keyPoints: [
              'Mở Slide Master: Thẻ View > nhóm Master Views > Slide Master.',
              'Slide mẹ trên cùng: Áp dụng định dạng cho TOÀN BỘ bài trình chiếu.',
              'Các layout con bên dưới: Chỉ áp dụng cho kiểu layout tương ứng.',
              'Đóng Slide Master: Thẻ Slide Master > Close Master View.'
            ],
            shortcut: 'Giữ phím Shift và nhấp vào biểu tượng Normal View ở góc dưới màn hình để mở nhanh Slide Master.',
            examTip: 'Đề thi MOS luôn yêu cầu chèn hình ảnh logo ở góc trên bên phải của Slide Master để logo hiện diện trên mọi trang trình chiếu.'
          },
          {
            id: 'pt-1-3',
            title: 'Tỷ Lệ Màn Hình Trình Chiếu Chuẩn (Slide Size)',
            concept: 'Máy chiếu và màn hình hiện đại sử dụng chuẩn màn hình rộng Widescreen 16:9 thay cho chuẩn cũ Standard 4:3.',
            keyPoints: [
              'Vào thẻ Design > nhóm Customize > Slide Size.',
              'Standard (4:3): Thích hợp máy chiếu cũ thời trước, màn hình vuông.',
              'Widescreen (16:9): Tiêu chuẩn mặc định hiện đại cho tivi, laptop và máy chiếu HD.'
            ],
            shortcut: 'Alt + G, S để mở tùy chọn Slide Size.',
            examTip: 'Khi chuyển từ 16:9 sang 4:3, PowerPoint sẽ hỏi Ensure Fit (thu nhỏ để vừa khung) hay Maximize (cắt lề).'
          }
        ],
        tasks: [
          {
            id: 'ptask-1-1',
            title: 'Chèn thêm một Slide mới (New Slide)',
            instruction: 'Bấm vào nút New Slide trên thẻ Home để chèn thêm slide với bố cục Title and Content.',
            hint: 'Nhấp Home > nhóm Slides > New Slide.',
            targetType: 'ribbon-action',
            actionKey: 'pp-new-slide'
          },
          {
            id: 'ptask-1-2',
            title: 'Mở chế độ thiết kế Slide Master',
            instruction: 'Bấm vào thẻ View trên thanh công cụ và chọn công cụ Slide Master.',
            hint: 'Nhấp View > Master Views > Slide Master.',
            targetType: 'ribbon-action',
            actionKey: 'pp-open-slidemaster'
          },
          {
            id: 'ptask-1-3',
            title: 'Đổi bố cục slide thành Two Content',
            instruction: 'Trên thẻ Home, nhấp vào nút Layout và chọn kiểu bố cục Two Content.',
            hint: 'Nhấp Home > nhóm Slides > Layout > Two Content.',
            targetType: 'ribbon-action',
            actionKey: 'pp-change-layout-twocontent'
          }
        ],
        quiz: [
          {
            id: 'pq-1-1',
            question: 'Tổ hợp phím tắt nào dùng để chèn thêm một Slide mới vào bài thuyết trình?',
            options: ['Ctrl + N', 'Ctrl + M', 'Ctrl + Shift + N', 'Ctrl + S'],
            correctIndex: 1,
            explanation: 'Ctrl + M chèn thêm một slide mới; còn Ctrl + N tạo ra một tệp thuyết trình mới.'
          },
          {
            id: 'pq-1-2',
            question: 'Để chèn logo trường học sao cho logo tự động xuất hiện ở góc mọi trang slide mà không phải copy dán thủ công, ta dùng công cụ gì?',
            options: ['Slide Sorter', 'Reading View', 'Slide Master', 'Notes Master'],
            correctIndex: 2,
            explanation: 'Slide Master là trang khuôn mẫu gốc; mọi yếu tố đặt tại trang mẹ sẽ tự động xuất hiện trên tất cả các slide.'
          },
          {
            id: 'pq-1-3',
            question: 'Tỷ lệ kích thước slide tiêu chuẩn mặc định trong các phiên bản PowerPoint hiện nay là bao nhiêu?',
            options: ['Chuẩn Standard 4:3', 'Chuẩn Widescreen 16:9', 'Chuẩn Khổ giấy A4', 'Chuẩn Vuông 1:1'],
            correctIndex: 1,
            explanation: 'Chuẩn màn hình rộng Widescreen 16:9 là kích thước mặc định tương thích với hầu hết màn hình máy tính và tivi hiện nay.'
          },
          {
            id: 'pq-1-4',
            question: 'Phím tắt nào giúp nhân bản (tạo bản sao y hệt) slide đang chọn một cách tức thời?',
            options: ['Ctrl + D', 'Ctrl + C', 'Ctrl + K', 'Ctrl + Shift + D'],
            correctIndex: 0,
            explanation: 'Ctrl + D (Duplicate) nhân bản lập tức đối tượng hoặc slide đang được chọn.'
          },
          {
            id: 'pq-1-5',
            question: 'Bố cục slide nào phù hợp nhất để so sánh ưu điểm và nhược điểm của một giải pháp công nghệ?',
            options: ['Title Slide', 'Blank', 'Comparison hoặc Two Content', 'Section Header'],
            correctIndex: 2,
            explanation: 'Layout Comparison cung cấp sẵn 2 cột song song kèm tiêu đề con rất thuận tiện để đối chiếu so sánh.'
          }
        ]
      },
      {
        id: 'pp-lesson-2',
        moduleId: 'powerpoint',
        order: 2,
        title: 'Thiết Kế Trực Quan Với SmartArt & Hình Khối (Shapes)',
        summary: 'Chuyển hóa văn bản danh sách thành sơ đồ quy trình thông minh và tùy biến màu sắc, hiệu ứng 3D khối.',
        durationMinutes: 16,
        theories: [
          {
            id: 'pt-2-1',
            title: 'Biến Văn Bản Thành SmartArt Chỉ Trong 1 Click (Convert to SmartArt)',
            concept: 'PowerPoint có tính năng kỳ diệu cho phép biến danh sách gạch đầu dòng văn bản thành sơ đồ khối đồ họa lập tức.',
            keyPoints: [
              'Chọn khung văn bản gạch đầu dòng.',
              'Vào thẻ Home > nhóm Paragraph > nhấp nút Convert to SmartArt Graphic.',
              'Chọn sơ đồ Process (quy trình), Hierarchy (cây phân cấp) hoặc List (danh sách).',
              'Sơ đồ tự động nhận các đầu mục văn bản làm tiêu đề các khối.'
            ],
            shortcut: 'Alt + H, M để mở nhanh danh mục Convert to SmartArt.',
            examTip: 'Đây là câu hỏi thực hành quen thuộc trong bài thi MOS PowerPoint vì khả năng tiết kiệm thời gian thiết kế tối đa.'
          },
          {
            id: 'pt-2-2',
            title: 'Tùy Biến Màu Sắc & Kiểu Khối SmartArt (SmartArt Styles)',
            concept: 'Áp dụng các bảng màu chuyên nghiệp (Change Colors) và hiệu ứng nổi 3D khối giúp bài trình chiếu bắt mắt.',
            keyPoints: [
              'Thẻ SmartArt Design > Change Colors: Chọn bảng màu theo tông chủ đạo của slide.',
              'SmartArt Styles: Áp dụng hiệu ứng đổ bóng, viền sáng hoặc vát góc 3D (Metallic, Polished).',
              'Reset Graphic: Khôi phục lại trạng thái ban đầu nếu lỡ chỉnh sửa màu sắc quá phức tạp.'
            ],
            shortcut: 'Bấm phím Tab trong Text Pane để tăng cấp nhánh con của sơ đồ.',
            examTip: 'Không nên chọn hiệu ứng 3D nghiêng quá nhiều vì sẽ làm người xem ở xa khó đọc được chữ.'
          },
          {
            id: 'pt-2-3',
            title: 'Căn Chỉnh & Phân Phối Đối Tượng Ngay Ngắn (Align & Distribute)',
            concept: 'Khi vẽ nhiều hình khối hoặc hình ảnh, công cụ Align giúp các khối thẳng hàng và cách đều nhau tăm tắp.',
            keyPoints: [
              'Chọn đồng thời nhiều đối tượng bằng cách giữ phím Shift.',
              'Thẻ Shape Format > Align > Align Left / Center / Middle.',
              'Distribute Horizontally: Cách đều nhau theo chiều ngang.',
              'Distribute Vertically: Cách đều nhau theo chiều dọc.'
            ],
            shortcut: 'Alt + 1 hoặc Alt + H, G, A để mở bảng Align.',
            examTip: 'Không bao giờ kéo chuột căn bằng mắt thường; luôn sử dụng lệnh Align và Distribute để đạt độ chính xác pixel tuyệt đối.'
          }
        ],
        tasks: [
          {
            id: 'ptask-2-1',
            title: 'Chuyển văn bản thành đồ họa SmartArt',
            instruction: 'Chọn khối văn bản trên slide và bấm vào nút Convert to SmartArt trên thẻ Home.',
            hint: 'Nhấp Home > nhóm Paragraph > Convert to SmartArt.',
            targetType: 'ribbon-action',
            actionKey: 'pp-convert-smartart'
          },
          {
            id: 'ptask-2-2',
            title: 'Đổi bảng màu đồ họa SmartArt sinh động',
            instruction: 'Trên thẻ SmartArt Design, bấm vào nút Change Colors và chọn một bảng màu phối sẵn.',
            hint: 'Nhấp SmartArt Design > nhóm SmartArt Styles > Change Colors.',
            targetType: 'ribbon-action',
            actionKey: 'pp-change-smartart-colors'
          },
          {
            id: 'ptask-2-3',
            title: 'Phân phối khoảng cách đều nhau (Distribute Horizontally)',
            instruction: 'Bấm vào Shape Format > Align > Distribute Horizontally để các khối hình cách đều nhau.',
            hint: 'Nhấp Shape Format > Align > Distribute Horizontally.',
            targetType: 'ribbon-action',
            actionKey: 'pp-distribute-horizontally'
          }
        ],
        quiz: [
          {
            id: 'pq-2-1',
            question: 'Tính năng nào cho phép biến nhanh danh sách văn bản gạch đầu dòng thông thường thành sơ đồ khối trực quan?',
            options: ['SmartArt Styles', 'Convert to SmartArt Graphic', 'WordArt', 'Shapes Gallery'],
            correctIndex: 1,
            explanation: 'Convert to SmartArt Graphic trong thẻ Home chuyển đổi trực tiếp văn bản thành sơ đồ tư duy tương ứng.'
          },
          {
            id: 'pq-2-2',
            question: 'Lệnh nào dùng để chia đều khoảng cách giữa các hình khối theo chiều ngang một cách tự động?',
            options: ['Align Left', 'Align Middle', 'Distribute Horizontally', 'Distribute Vertically'],
            correctIndex: 2,
            explanation: 'Distribute Horizontally tự động tính toán và đặt khoảng trống giữa các đối tượng theo chiều ngang bằng nhau.'
          },
          {
            id: 'pq-2-3',
            question: 'Để chọn đồng thời nhiều hình khối nằm rải rác trên trang slide, ta thực hiện thao tác chuột kết hợp phím nào?',
            options: ['Giữ phím Shift hoặc phím Ctrl khi nhấp chuột', 'Giữ phím Alt khi nhấp chuột', 'Giữ phím Tab khi nhấp chuột', 'Nhấp đúp chuột liên tiếp'],
            correctIndex: 0,
            explanation: 'Giữ phím Shift hoặc Ctrl cho phép chọn thêm nhiều đối tượng cùng một lúc.'
          },
          {
            id: 'pq-2-4',
            question: 'Khi vẽ hình vuông hoặc hình tròn hoàn hảo, ta cần giữ phím nào trong lúc kéo rê chuột?',
            options: ['Giữ phím Ctrl', 'Giữ phím Shift', 'Giữ phím Alt', 'Giữ phím Space'],
            correctIndex: 1,
            explanation: 'Giữ phím Shift khi vẽ hình Rectangle sẽ cho hình vuông hoàn hảo; vẽ Oval sẽ cho hình tròn hoàn hảo.'
          },
          {
            id: 'pq-2-5',
            question: 'Trong sơ đồ SmartArt, muốn hiển thị cửa sổ gõ văn bản dạng danh sách (Text Pane) ở bên cạnh sơ đồ, ta làm thế nào?',
            options: ['Bấm vào nút Text Pane trên thẻ SmartArt Design', 'Vào View > Ruler', 'Nhấp chuột phải chọn Delete', 'Không thể gõ chữ được'],
            correctIndex: 0,
            explanation: 'Nút Text Pane trên thẻ SmartArt Design mở khung nhập liệu phân cấp trực quan cho sơ đồ.'
          }
        ]
      },
      {
        id: 'pp-lesson-3',
        moduleId: 'powerpoint',
        order: 3,
        title: 'Hiệu Ứng Chuyển Trang Slide Chuyên Nghiệp (Transitions & Morph)',
        summary: 'Áp dụng hiệu ứng chuyển slide điện ảnh Morph, Fade, Push và thiết lập thời lượng Duration, chuyển trang tự động.',
        durationMinutes: 16,
        theories: [
          {
            id: 'pt-3-1',
            title: 'Phân Biệt Transition (Chuyển Trang) & Animation (Hoạt Họa Đối Tượng)',
            concept: 'Học sinh rất hay nhầm lẫn: Transition áp dụng cho TOÀN BỘ slide khi đổi cảnh; còn Animation áp dụng cho TỪNG ĐỐI TƯỢNG bên trong slide.',
            keyPoints: [
              'Slide Transitions: Cách thức mà một slide xuất hiện khi kết thúc slide trước đó.',
              'Các hiệu ứng thanh lịch: Morph (biến hình), Fade (mờ dần), Push (đẩy lên), Wipe (lau qua).',
              'Tránh dùng các hiệu ứng quá diêm dúa như Origami, Airplane trong các bài thuyết trình học thuật.'
            ],
            shortcut: 'Alt + T để chuyển nhanh tới thẻ Transitions.',
            examTip: 'Đề thi luôn yêu cầu hiệu ứng chuyển trang thống nhất cho tất cả các slide bằng nút Apply to All.'
          },
          {
            id: 'pt-3-2',
            title: 'Hiệu Ứng Điện Ảnh Đột Phá Morph Transition',
            concept: 'Morph tự động phân tích các đối tượng giống nhau giữa 2 slide kế tiếp và tạo ra hiệu ứng di chuyển, phóng to, xoay mượt mà như kỹ xảo phim.',
            keyPoints: [
              'Nhân bản slide gốc (Ctrl + D) để có slide thứ 2.',
              'Tại slide thứ 2: Đổi vị trí, kích thước hoặc màu sắc của các hình khối.',
              'Tại slide thứ 2: Chọn thẻ Transitions > chọn hiệu ứng Morph.',
              'Khi trình chiếu, các vật thể sẽ tự động lướt mượt mà từ vị trí cũ sang vị trí mới.'
            ],
            shortcut: 'Transitions > Effect Options để chọn Morph theo Objects, Words hoặc Characters.',
            examTip: 'Để Morph nhận diện 2 hình khác nhau là một (ví dụ biến hình vuông thành hình tròn), đặt tên cho 2 hình bắt đầu bằng 2 dấu chấm than (ví dụ: !!Hinh1).'
          },
          {
            id: 'pt-3-3',
            title: 'Điều Khiển Thời Lượng (Duration) & Tự Động Sang Trang (After)',
            concept: 'Thiết lập tốc độ chuyển trang và hẹn giờ để bài thuyết trình tự động trình chiếu không cần bấm chuột.',
            keyPoints: [
              'Duration: Thời gian diễn ra hiệu ứng chuyển cảnh (chuẩn đẹp là từ 0.75s đến 1.5s).',
              'On Mouse Click: Chờ người thuyết trình bấm chuột mới sang slide mới.',
              'After: Tự động nhảy sang slide tiếp theo sau số giây định sẵn (dùng cho quầy quảng cáo hoặc video tự chạy).',
              'Apply to All: Áp dụng các thiết lập này cho mọi slide trong bài.'
            ],
            shortcut: 'Transitions > Timing > Duration.',
            examTip: 'Luôn kiểm tra nút Apply to All để tránh tình trạng mỗi slide lại mang một tốc độ và hiệu ứng khác nhau lộn xộn.'
          }
        ],
        tasks: [
          {
            id: 'ptask-3-1',
            title: 'Áp dụng hiệu ứng chuyển slide Morph thời thượng',
            instruction: 'Bấm vào thẻ Transitions trên Ribbon và chọn hiệu ứng Morph trong danh sách hiệu ứng.',
            hint: 'Nhấp Transitions > nhóm Transition to This Slide > Morph.',
            targetType: 'slide-transition',
            actionKey: 'pp-trans-morph'
          },
          {
            id: 'ptask-3-2',
            title: 'Áp dụng hiệu ứng cho tất cả các slide (Apply to All)',
            instruction: 'Bấm vào nút Apply to All trên nhóm Timing để đồng bộ hiệu ứng chuyển trang toàn bộ bài giảng.',
            hint: 'Nhấp Transitions > nhóm Timing > Apply to All.',
            targetType: 'ribbon-action',
            actionKey: 'pp-trans-apply-all'
          },
          {
            id: 'ptask-3-3',
            title: 'Chỉnh thời lượng hiệu ứng chuyển trang thành 1.5 giây',
            instruction: 'Trên ô Duration nhóm Timing thẻ Transitions, điều chỉnh thời lượng thành 1.50 giây.',
            hint: 'Nhấp Transitions > Timing > Duration > chọn 01.50.',
            targetType: 'ribbon-action',
            actionKey: 'pp-trans-duration'
          }
        ],
        quiz: [
          {
            id: 'pq-3-1',
            question: 'Sự khác biệt cốt lõi giữa Transition và Animation trong PowerPoint là gì?',
            options: [
              'Transition áp dụng cho toàn bộ slide; Animation áp dụng cho từng đối tượng trong slide',
              'Transition chỉ có âm thanh; Animation chỉ có hình ảnh',
              'Animation chỉ chạy trên máy tính Apple',
              'Cả hai là một tính năng không có gì khác nhau'
            ],
            correctIndex: 0,
            explanation: 'Transition là hiệu ứng chuyển tiếp giữa các trang chiếu; Animation là hiệu ứng diễn hoạt của từng phần tử nội dung.'
          },
          {
            id: 'pq-3-2',
            question: 'Hiệu ứng chuyển trang Morph yêu cầu điều kiện gì để tạo ra chuyển động biến hình mượt mà nhất?',
            options: [
              'Phải có kết nối Internet',
              'Hai slide kế tiếp nhau có chứa cùng các đối tượng với vị trí hoặc kích thước khác nhau',
              'Slide phải có độ dài trên 10 phút',
              'Phải chèn video vào slide'
            ],
            correctIndex: 1,
            explanation: 'Morph tự động tính toán tọa độ chênh lệch của cùng đối tượng giữa 2 slide liên tiếp để tạo hoạt cảnh chuyển động tự nhiên.'
          },
          {
            id: 'pq-3-3',
            question: 'Nút lệnh "Apply to All" trong thẻ Transitions có công dụng gì?',
            options: [
              'Xóa toàn bộ hiệu ứng trong bài',
              'Áp dụng cùng một kiểu hiệu ứng và thiết lập thời gian cho tất cả các slide trong bài',
              'Lưu bài thuyết trình',
              'Đổi màu nền tất cả các slide'
            ],
            correctIndex: 1,
            explanation: 'Apply to All giúp đồng bộ hóa phong cách chuyển cảnh trên toàn bộ bài thuyết trình.'
          },
          {
            id: 'pq-3-4',
            question: 'Để một slide tự động chuyển sang slide tiếp theo sau 5 giây mà không cần người dùng bấm chuột, ta thiết lập ở đâu?',
            options: [
              'Thẻ Slide Show > Set Up Slide Show',
              'Thẻ Transitions > nhóm Timing > bỏ chọn On Mouse Click và tích chọn After đặt 00:05.00',
              'Thẻ Design > Themes',
              'Thẻ Insert > Action'
            ],
            correctIndex: 1,
            explanation: 'Mục Timing > After cho phép hẹn giờ tự động chuyển cảnh chính xác từng giây.'
          },
          {
            id: 'pq-3-5',
            question: 'Tham số "Duration" trong nhóm Timing của thẻ Transitions chỉ định điều gì?',
            options: [
              'Thời gian slide dừng lại trên màn hình',
              'Tốc độ thời gian diễn ra của bản thân hiệu ứng chuyển động',
              'Thời gian bắt đầu thuyết trình',
              'Thời lượng pin máy tính'
            ],
            correctIndex: 1,
            explanation: 'Duration là khoảng thời gian để hiệu ứng chuyển động chạy từ lúc bắt đầu đến khi kết thúc (tính bằng giây).'
          }
        ]
      },
      {
        id: 'pp-lesson-4',
        moduleId: 'powerpoint',
        order: 4,
        title: 'Hiệu Ứng Diễn Hoạt Đối Tượng Chuyên Nghiệp (Animations & Animation Pane)',
        summary: 'Làm chủ 4 nhóm hiệu ứng Entrance, Emphasis, Exit, Motion Paths và bảng điều khiển Animation Pane chuyên sâu.',
        durationMinutes: 18,
        theories: [
          {
            id: 'pt-4-1',
            title: 'Bốn Nhóm Hiệu Ứng Hoạt Họa Đối Tượng',
            concept: 'PowerPoint phân chia hiệu ứng diễn hoạt thành 4 nhóm màu sắc trực quan với chức năng truyền tải riêng biệt.',
            keyPoints: [
              'Màu Xanh (Entrance): Hiệu ứng Xuất hiện - đưa vật thể từ bên ngoài vào màn hình (Fade, Fly In, Zoom).',
              'Màu Vàng (Emphasis): Hiệu ứng Nhấn mạnh - gây chú ý cho vật thể đang có sẵn (Pulse, Spin, Teeter).',
              'Màu Đỏ (Exit): Hiệu ứng Biến mất - đưa vật thể ra khỏi màn hình (Disappear, Fly Out).',
              'Đường Dẫn (Motion Paths): Di chuyển vật thể theo một lộ trình tự vẽ (Lines, Arcs, Custom Path).'
            ],
            shortcut: 'Alt + A để mở thẻ Animations; nút Add Animation để thêm hiệu ứng thứ hai cho cùng 1 vật thể.',
            examTip: 'Nếu muốn thêm hiệu ứng thứ 2 cho cùng 1 đối tượng, BẮT BUỘC phải dùng nút Add Animation. Nếu bấm vào danh sách sẽ làm thay thế mất hiệu ứng cũ.'
          },
          {
            id: 'pt-4-2',
            title: 'Bảng Điều Khiển Diễn Hoạt Animation Pane',
            concept: 'Animation Pane là trung tâm điều khiển thời gian, sắp xếp thứ tự và chỉnh sửa tinh chỉnh chi tiết cho mọi chuyển động.',
            keyPoints: [
              'Bật Animation Pane: Thẻ Animations > nhóm Advanced Animation > Animation Pane.',
              'Khung bên phải hiển thị danh sách các hiệu ứng theo thứ tự thời gian từ trên xuống.',
              'Kéo thả chuột để đổi thứ tự xuất hiện trước/sau giữa các đối tượng.',
              'Nhấp chuột phải vào một hiệu ứng để mở Effect Options (chỉnh hướng bay, âm thanh kèm theo).'
            ],
            shortcut: 'Bấm nút Play All trong Animation Pane để xem trước toàn bộ chuỗi diễn hoạt trên slide.',
            examTip: 'Đề thi MOS luôn yêu cầu kiểm tra thứ tự của các hiệu ứng trong bảng Animation Pane.'
          },
          {
            id: 'pt-4-3',
            title: 'Thiết Lập Khởi Chạy (Start: On Click, With Previous, After Previous)',
            concept: 'Kiểm soát nhịp độ thuyết trình bằng cách kết hợp chuyển động đồng thời hoặc tuần tự.',
            keyPoints: [
              'Start On Click: Hiệu ứng chỉ chạy khi người dùng nhấp chuột hoặc bấm phím cách (biểu tượng hình con chuột).',
              'Start With Previous: Chạy CÙNG LÚC đồng thời với hiệu ứng liền trước đó (không cần bấm chuột).',
              'Start After Previous: Tự động chạy NGAY SAU KHI hiệu ứng trước đó vừa kết thúc (tạo chuỗi chuyển động liên hoàn).'
            ],
            shortcut: 'Animations > Timing > Start.',
            examTip: 'Để các gạch đầu dòng xuất hiện lần lượt tự động sau nhau, chọn After Previous cho các dòng từ thứ 2 trở đi.'
          }
        ],
        tasks: [
          {
            id: 'ptask-4-1',
            title: 'Thêm hiệu ứng xuất hiện Fade cho tiêu đề',
            instruction: 'Chọn khối tiêu đề và chọn hiệu ứng Fade màu xanh trên nhóm Animation.',
            hint: 'Nhấp Animations > nhóm Animation > chọn hiệu ứng Fade.',
            targetType: 'slide-animation',
            actionKey: 'pp-anim-fade'
          },
          {
            id: 'ptask-4-2',
            title: 'Mở bảng điều khiển diễn hoạt Animation Pane',
            instruction: 'Bấm vào nút Animation Pane trên nhóm Advanced Animation thẻ Animations.',
            hint: 'Nhấp Animations > nhóm Advanced Animation > Animation Pane.',
            targetType: 'ribbon-action',
            actionKey: 'pp-open-animation-pane'
          },
          {
            id: 'ptask-4-3',
            title: 'Thiết lập hiệu ứng chạy tự động After Previous',
            instruction: 'Trên ô Start nhóm Timing thẻ Animations, chuyển từ On Click sang After Previous.',
            hint: 'Nhấp Animations > Timing > Start > chọn After Previous.',
            targetType: 'ribbon-action',
            actionKey: 'pp-anim-after-previous'
          }
        ],
        quiz: [
          {
            id: 'pq-4-1',
            question: 'Hiệu ứng hoạt họa màu XANH LÁ (Entrance Effects) trong PowerPoint có vai trò gì?',
            options: [
              'Làm cho đối tượng xuất hiện từ bên ngoài vào trong màn hình slide',
              'Làm cho đối tượng rung lắc nhấn mạnh',
              'Làm cho đối tượng biến mất khỏi slide',
              'Làm đổi màu nền slide'
            ],
            correctIndex: 0,
            explanation: 'Nhóm Entrance (Màu xanh) là nhóm hiệu ứng đưa đối tượng từ trạng thái ẩn ra xuất hiện trên trang.'
          },
          {
            id: 'pq-4-2',
            question: 'Khi muốn gán thêm một hiệu ứng thứ hai cho cùng một đối tượng đã có sẵn hiệu ứng, ta bắt buộc phải dùng nút lệnh nào?',
            options: ['Animation Pane', 'Add Animation', 'Trigger', 'Animation Painter'],
            correctIndex: 1,
            explanation: 'Nút Add Animation cho phép cộng thêm hiệu ứng mới; nếu chọn trực tiếp trong dải Animation chính sẽ bị ghi đè thay thế.'
          },
          {
            id: 'pq-4-3',
            question: 'Tùy chọn khởi chạy "Start: After Previous" mang ý nghĩa gì?',
            options: [
              'Hiệu ứng chỉ chạy khi người dùng nhấp chuột',
              'Hiệu ứng tự động bắt đầu ngay sau khi hiệu ứng phía trước nó vừa kết thúc',
              'Hiệu ứng chạy cùng lúc với hiệu ứng phía trước',
              'Hiệu ứng không bao giờ chạy'
            ],
            correctIndex: 1,
            explanation: 'After Previous giúp tự động hóa chuỗi hoạt họa nối tiếp nhau mà người thuyết trình không cần thao tác chuột.'
          },
          {
            id: 'pq-4-4',
            question: 'Công cụ nào trong PowerPoint cho phép sao chép nhanh toàn bộ các hiệu ứng hoạt họa từ một vật thể này sang vật thể khác?',
            options: ['Format Painter', 'Animation Painter', 'Copy Effects', 'Duplicate Animation'],
            correctIndex: 1,
            explanation: 'Animation Painter (hình cây chổi trong thẻ Animations) sao chép toàn bộ thuộc tính diễn hoạt giữa các đối tượng.'
          },
          {
            id: 'pq-4-5',
            question: 'Muốn kiểm tra tổng thể thứ tự thời gian và thời lượng của tất cả hiệu ứng trên một slide, ta mở khung cửa sổ nào?',
            options: ['Slide Sorter', 'Selection Pane', 'Animation Pane', 'Notes Pane'],
            correctIndex: 2,
            explanation: 'Animation Pane cung cấp dòng thời gian (timeline) trực quan để sắp xếp và quản lý toàn bộ hiệu ứng diễn hoạt.'
          }
        ]
      },
      {
        id: 'pp-lesson-5',
        moduleId: 'powerpoint',
        order: 5,
        title: 'Nút Liên Kết Tương Tác (Action Buttons) & Kỹ Năng Trình Chiếu Nâng Cao',
        summary: 'Tạo nút điều hướng thông minh (Action Buttons, Hyperlinks), chế độ thuyết trình Presenter View và phím tắt điều khiển.',
        durationMinutes: 16,
        theories: [
          {
            id: 'pt-5-1',
            title: 'Nút Tác Vụ Tương Tác (Action Buttons & Hyperlinks)',
            concept: 'Biến bài thuyết trình thành ứng dụng học tập tương tác cho phép học sinh nhấp vào các nút để nhảy tới slide tương ứng hoặc mở tài liệu ngoài.',
            keyPoints: [
              'Chèn Action Button: Thẻ Insert > Shapes > nhóm dưới cùng Action Buttons (nút Home, nút Next, nút Back).',
              'Hyperlink (Siêu liên kết): Chọn văn bản hoặc hình ảnh > Thẻ Insert > Link (Ctrl + K).',
              'Có thể liên kết tới: Slide cụ thể trong bài (Place in This Document), trang web, hoặc mở một file Word/Excel khác.'
            ],
            shortcut: 'Ctrl + K để mở hộp thoại tạo liên kết Hyperlink.',
            examTip: 'Trong các bài thi thực hành, đề bài hay yêu cầu tạo nút hình ngôi nhà ở góc slide để khi bấm vào sẽ nhảy về slide mục lục đầu tiên.'
          },
          {
            id: 'pt-5-2',
            title: 'Chế Độ Thuyết Trình Chuyên Nghiệp Presenter View',
            concept: 'Khi kết nối máy tính với máy chiếu, Presenter View cho phép người thuyết trình xem trước slide tiếp theo và đọc ghi chú bí mật mà khán giả không nhìn thấy.',
            keyPoints: [
              'Màn hình máy chiếu (khán giả): Chỉ thấy slide bài giảng toàn màn hình.',
              'Màn hình laptop (thuyết trình viên): Thấy slide hiện tại, đồng hồ đếm giờ, ghi chú Notes và ảnh thu nhỏ của slide tiếp theo.',
              'Bật chế độ: Thẻ Slide Show > tích chọn Use Presenter View.'
            ],
            shortcut: 'Alt + F5 để chạy thử chế độ Presenter View ngay trên màn hình đơn mà không cần cắm máy chiếu.',
            examTip: 'Học sinh thuyết trình báo cáo nên ghi chú các số liệu chi tiết vào ô Notes phía dưới để tự tin khi thuyết trình.'
          },
          {
            id: 'pt-5-3',
            title: 'Các Phím Tắt Sống Còn Khi Đang Trình Chiếu',
            concept: 'Làm chủ bài thuyết trình như một chuyên gia bằng các phím tắt điều khiển trực tiếp trên sân khấu.',
            keyPoints: [
              'Phím F5: Bắt đầu trình chiếu từ slide đầu tiên.',
              'Shift + F5: Bắt đầu trình chiếu từ slide hiện tại đang chọn.',
              'Phím B (Black screen): Tạm thời làm đen màn hình để khán giả tập trung vào lời nói người thuyết trình.',
              'Phím W (White screen): Tạm thời làm trắng màn hình.',
              'Ctrl + P: Biến con trỏ thành bút vẽ Pen để khoanh tròn số liệu trực tiếp trên slide.',
              'Ctrl + L: Biến con trỏ thành con trỏ laser Laser Pointer.',
              'Phím Esc: Kết thúc trình chiếu.'
            ],
            shortcut: 'Gõ số trang của slide rồi nhấn Enter để nhảy tức thì đến slide đó khi đang chiếu.',
            examTip: 'Phím B và phím W là những mẹo thuyết trình đỉnh cao giúp thu hút lại sự chú ý của người nghe.'
          }
        ],
        tasks: [
          {
            id: 'ptask-5-1',
            title: 'Chèn liên kết Hyperlink điều hướng (Insert Link)',
            instruction: 'Bấm vào thẻ Insert trên Ribbon và chọn công cụ Link để tạo liên kết tới trang đích.',
            hint: 'Nhấp Insert > nhóm Links > Link (hoặc Ctrl + K).',
            targetType: 'ribbon-action',
            actionKey: 'pp-insert-hyperlink'
          },
          {
            id: 'ptask-5-2',
            title: 'Kích hoạt chế độ Presenter View',
            instruction: 'Bấm vào thẻ Slide Show và tích chọn ô Use Presenter View để hỗ trợ thuyết trình chuyên nghiệp.',
            hint: 'Nhấp Slide Show > nhóm Monitors > tích chọn Use Presenter View.',
            targetType: 'ribbon-action',
            actionKey: 'pp-enable-presenter-view'
          },
          {
            id: 'ptask-5-3',
            title: 'Bắt đầu trình chiếu từ slide hiện tại',
            instruction: 'Bấm vào nút From Current Slide trên thẻ Slide Show để bắt đầu phát bài.',
            hint: 'Nhấp Slide Show > Start Slide Show > From Current Slide (Shift + F5).',
            targetType: 'ribbon-action',
            actionKey: 'pp-show-from-current'
          }
        ],
        quiz: [
          {
            id: 'pq-5-1',
            question: 'Phím tắt nào dùng để bắt đầu trình chiếu ngay từ Slide hiện tại đang chọn (không phải từ slide đầu)?',
            options: ['F5', 'Shift + F5', 'Ctrl + F5', 'Alt + F5'],
            correctIndex: 1,
            explanation: 'Phím F5 trình chiếu từ slide số 1; Shift + F5 trình chiếu ngay từ slide hiện hành.'
          },
          {
            id: 'pq-5-2',
            question: 'Khi đang trong chế độ trình chiếu toàn màn hình, phím tắt nào giúp tạm thời làm đen màn hình (Black screen) để khán giả chú ý vào người thuyết trình?',
            options: ['Phím B', 'Phím W', 'Phím Space', 'Phím Backspace'],
            correctIndex: 0,
            explanation: 'Phím B làm đen màn hình (Black) và phím W làm trắng màn hình (White); bấm lại phím đó để quay lại slide.'
          },
          {
            id: 'pq-5-3',
            question: 'Tổ hợp phím tắt nào dùng để tạo siêu liên kết (Hyperlink) cho một đối tượng trong PowerPoint và Word?',
            options: ['Ctrl + H', 'Ctrl + K', 'Ctrl + L', 'Ctrl + Shift + K'],
            correctIndex: 1,
            explanation: 'Ctrl + K là phím tắt chuẩn để mở hộp thoại Insert Hyperlink trong toàn bộ bộ ứng dụng Microsoft Office.'
          },
          {
            id: 'pq-5-4',
            question: 'Chế độ Presenter View đem lại lợi ích lớn nhất nào cho người đứng thuyết trình?',
            options: [
              'Tự động dịch bài thuyết trình sang tiếng Anh',
              'Xem được slide tiếp theo, đồng hồ đếm giờ và ghi chú bí mật trên màn hình laptop của mình',
              'Tự động ngắt kết nối máy chiếu',
              'Làm tăng tốc độ quạt làm mát máy tính'
            ],
            correctIndex: 1,
            explanation: 'Presenter View giúp diễn giả chủ động nội dung khi nhìn thấy slide kế tiếp và các ghi chú riêng tư mà khán giả không thấy.'
          },
          {
            id: 'pq-5-5',
            question: 'Khi đang trình chiếu, muốn biến con trỏ chuột thành cây bút màu (Pen) để viết vẽ chú thích trực tiếp lên slide, ta bấm tổ hợp phím nào?',
            options: ['Ctrl + P', 'Ctrl + B', 'Ctrl + A', 'Ctrl + E'],
            correctIndex: 0,
            explanation: 'Ctrl + P kích hoạt chế độ bút viết Pen; Ctrl + A trả về con trỏ mũi tên thông thường; phím E xóa các nét vẽ.'
          }
        ]
      }
    ]
  }
};
