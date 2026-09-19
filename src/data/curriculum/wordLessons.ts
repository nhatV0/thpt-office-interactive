import type { LessonUnit } from '../../types/curriculum';

export const wordLessons: LessonUnit[] = [
  // =========================================================================
  // BÀI 1: BẮT ĐẦU VỚI MICROSOFT WORD
  // =========================================================================
  {
    id: 'word-lesson-1',
    moduleId: 'word',
    order: 1,
    title: 'Bắt Đầu Với Microsoft Word',
    summary: 'Làm quen giao diện Word 2019, thanh công cụ truy cập nhanh QAT, dải lệnh Ribbon, chế độ Backstage, tạo, lưu, mở tệp, thuộc tính tài liệu và chuyển đổi tệp PDF.',
    durationMinutes: 25,
    theories: [
      {
        id: 'wt-1-1',
        title: 'Giao Diện Làm Việc, Ribbon & Quick Access Toolbar (QAT)',
        concept: 'Giao diện Microsoft Word 2019 được thiết kế theo cấu trúc dải lệnh (Ribbon) gồm các thẻ lệnh (Tabs), mỗi thẻ chứa các nhóm chức năng (Groups) chứa các nút lệnh liên quan. Thanh công cụ truy cập nhanh (Quick Access Toolbar - QAT) nằm trên cùng bên trái cho phép ghim các lệnh thường dùng nhất.',
        keyPoints: [
          'Thanh Ribbon gồm các Tab chính: Home, Insert, Draw, Design, Layout, References, Mailings, Review, View, Help.',
          'Mỗi nhóm (Group) có thể có nút Dialog Box Launcher (mũi tên nhỏ ở góc dưới bên phải) để mở hộp thoại nâng cao đầy đủ tính năng.',
          'ScreenTips: Khi rê chuột vào bất kỳ nút lệnh nào, một hộp chú thích nhỏ sẽ hiện ra hiển thị tên lệnh, phím tắt và mô tả công dụng.',
          'Tùy chỉnh Quick Access Toolbar (QAT): Bấm vào mũi tên Customize Quick Access Toolbar để thêm/bớt các lệnh như New, Open, Save, Undo, Redo, hoặc chọn "More Commands..." để thêm bất kỳ lệnh nào.',
          'Thu gọn Ribbon (Collapse Ribbon): Nhấp đúp vào tên tab bất kỳ hoặc nhấn phím tắt Ctrl + F1.'
        ],
        shortcut: 'Ctrl + F1 để ẩn/hiện dải lệnh Ribbon; Alt để hiển thị ký tự phím tắt (KeyTips) trên Ribbon.',
        examTip: 'Trong bài thi MOS, đề bài thường yêu cầu thêm một lệnh cụ thể (ví dụ: Print Preview, Spelling & Grammar) vào thanh Quick Access Toolbar thông qua mục Customize QAT.',
        checkpointQuestion: {
          question: 'Để ẩn hoặc hiện dải lệnh Ribbon trong Microsoft Word, tổ hợp phím tắt nhanh nào được sử dụng?',
          options: ['Ctrl + F1', 'Ctrl + Shift + R', 'Alt + F4', 'Ctrl + Shift + F1'],
          correctIndex: 0,
          explanation: 'Tổ hợp phím Ctrl + F1 dùng để thu gọn (Collapse) hoặc mở rộng hiển thị dải lệnh Ribbon trong Word.'
        }
      },
      {
        id: 'wt-1-2',
        title: 'Chế Độ Xem Backstage: Tạo Mới, Lưu & Mở Tài Liệu',
        concept: 'Khi bấm vào tab File trên Ribbon, bạn sẽ chuyển sang chế độ xem hậu trường (Backstage View). Đây là trung tâm quản lý toàn bộ tệp tài liệu: tạo văn bản mới từ mẫu, lưu trữ, mở tệp, in ấn, chia sẻ và cấu hình các tùy chọn hệ thống.',
        keyPoints: [
          'Tạo tài liệu mới: File > New > chọn Blank document (tài liệu trắng) hoặc tìm kiếm mẫu thiết kế sẵn (Templates) trực tuyến.',
          'Mở tài liệu: File > Open (Ctrl + O) > chọn Recent (tài liệu vừa mở gần đây), OneDrive hoặc Browse để duyệt thư mục trong máy tính.',
          'Lưu tài liệu: Phím tắt Ctrl + S (lưu nhanh các thay đổi). Nếu tài liệu mới lưu lần đầu, Word sẽ tự động chuyển sang màn hình Save As để đặt tên và vị trí lưu.',
          'Lưu dưới dạng tệp khác (Save As / F12): Cho phép đổi tên tệp, chọn vị trí thư mục mới hoặc chọn định dạng tệp khác.',
          'AutoRecover (Tự động khôi phục): Word tự động lưu bản sao tạm thời sau mỗi khoảng thời gian mặc định (thường là 10 phút), có thể tùy chỉnh trong File > Options > Save.'
        ],
        shortcut: 'Ctrl + N (Tạo mới), Ctrl + O (Mở tệp), Ctrl + S (Lưu tệp), F12 (Lưu dưới dạng mới - Save As).',
        examTip: 'Đề thi MOS thường yêu cầu lưu tài liệu hiện hành vào thư mục được chỉ định với định dạng Word Document (.docx), Plain Text (.txt), hoặc Word 97-2003 Document (.doc). Luôn kiểm tra kỹ đường dẫn thư mục đích.',
        checkpointQuestion: {
          question: 'Phím tắt nào sau đây cho phép mở trực tiếp hộp thoại "Save As" để lưu tài liệu dưới tên hoặc định dạng khác?',
          options: ['Ctrl + S', 'Ctrl + Shift + S', 'F12', 'Alt + F12'],
          correctIndex: 2,
          explanation: 'Phím chức năng F12 là phím tắt mặc định trong Microsoft Word để mở nhanh hộp thoại Save As.'
        }
      },
      {
        id: 'wt-1-3',
        title: 'Chuyển Đổi Định Dạng Tệp & Chỉnh Sửa Tệp PDF (PDF Reflow)',
        concept: 'Word 2019 hỗ trợ xuất và chuyển đổi linh hoạt giữa nhiều định dạng tệp khác nhau. Đặc biệt, tính năng PDF Reflow cho phép mở trực tiếp một tệp PDF như một tài liệu Word có thể chỉnh sửa tự do các đoạn văn, hình ảnh và bảng biểu.',
        keyPoints: [
          'Xuất sang tệp PDF/XPS: File > Export > Create PDF/XPS Document hoặc File > Save As > chọn Save as type là PDF (*.pdf).',
          'Chuyển đổi tệp PDF sang văn bản Word: Vào File > Open > Browse > chọn tệp .pdf. Word sẽ hiện hộp thoại cảnh báo chuyển đổi (convert), nhấp OK để phần mềm tái cấu trúc tài liệu.',
          'Lưu ở định dạng tương thích: Rich Text Format (.rtf), Plain Text (.txt), Web Page (.htm, .html), Word Template (.dotx).',
          'Chuyển đổi tài liệu cũ sang chuẩn mới: Nếu tệp mở ở chế độ Compatibility Mode (định dạng Word cũ .doc), vào File > Info > chọn nút Convert để nâng cấp lên các tính năng hiện đại nhất của Word 2019.'
        ],
        shortcut: 'Alt + F, E, A để mở nhanh chức năng tạo tệp PDF/XPS.',
        examTip: 'Khi mở tệp PDF trong Word, cấu trúc các bảng biểu hoặc ngắt trang có thể bị xê dịch nhẹ so với bản gốc do thuật toán Reflow. Cần rà soát lại bố cục trang sau khi mở.',
        checkpointQuestion: {
          question: 'Để chuyển đổi một tệp Word đang mở sang định dạng tài liệu cố định PDF, thao tác chuẩn xác trong Backstage View là gì?',
          options: ['File > Print > Print to PDF', 'File > Export > Create PDF/XPS Document', 'File > Share > Send as PDF', 'File > Save As > đổi đuôi tên tệp thành .pdf thủ công'],
          correctIndex: 1,
          explanation: 'Đường dẫn chính thức và tối ưu nhất là File > Export > Create PDF/XPS Document (hoặc chọn Save as type là PDF trong hộp thoại Save As).'
        }
      },
      {
        id: 'wt-1-4',
        title: 'Quản Lý Thuộc Tính Tài Liệu (Document Properties)',
        concept: 'Thuộc tính tài liệu (Metadata) lưu trữ các thông tin chi tiết về tệp văn bản như Tiêu đề (Title), Tác giả (Author), Chủ đề (Subject), Từ khóa (Tags/Keywords), Thể loại (Category)... giúp việc lập chỉ mục, tìm kiếm và phân loại hồ sơ tài liệu trở nên chuyên nghiệp và nhanh chóng.',
        keyPoints: [
          'Xem và chỉnh sửa thuộc tính: Vào File > chọn mục Info ở ngăn bên trái. Cột bên phải sẽ hiển thị Properties.',
          'Các thuộc tính cơ bản gồm: Size, Pages, Words, Total Editing Time, Title, Tags, Comments, Related Dates, Related People (Author, Last Modified By).',
          'Thuộc tính nâng cao (Advanced Properties): Nhấp vào chữ "Properties" ở đầu danh sách > chọn "Advanced Properties" để mở hộp thoại với các tab: General, Summary, Statistics, Contents, Custom.',
          'Tab Summary: Cho phép nhập chính xác Title, Subject, Author, Manager, Company, Category, Keywords và Comments.',
          'Tab Custom: Cho phép tạo các trường thuộc tính tùy biến người dùng định nghĩa.'
        ],
        shortcut: 'Alt + F, I để vào nhanh ngăn Info trong Backstage View.',
        examTip: 'Đề thi MOS 100% có câu hỏi yêu cầu sửa thuộc tính tài liệu (ví dụ: gán Title = "Báo Cáo Dự Án", Subject = "Kinh Doanh", thêm Tag = "MOS, THPT"). Nhập đúng chính xác từng ký tự chữ hoa/thường theo yêu cầu.',
        checkpointQuestion: {
          question: 'Để sửa thuộc tính Title (Tiêu đề) hoặc Tags (Thẻ từ khóa) của văn bản Word theo yêu cầu bài thi, ta thực hiện tại đâu?',
          options: ['Thẻ Home > nhóm Editing', 'Thẻ File > mục Info > vùng thuộc tính Properties bên phải', 'Thẻ Review > nhóm Tracking', 'Thẻ Layout > nhóm Page Setup'],
          correctIndex: 1,
          explanation: 'Tất cả các thông tin siêu dữ liệu (Metadata) như Title, Author, Tags, Subject đều được quản lý tại thẻ File > Info > Properties.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-1-1',
        title: 'Mở Chế Độ Xem Backstage & Thiết Lập Tệp',
        instruction: 'Nhấp chuột vào tab File trên thanh Ribbon để truy cập chế độ xem Backstage View.',
        hint: 'Nhấp chọn tab File (màu xanh dương) ở góc trên bên trái màn hình.',
        targetType: 'ribbon-action',
        actionKey: 'word-backstage-open'
      },
      {
        id: 'wtask-1-2',
        title: 'Tùy Chỉnh Thuộc Tính Tiêu Đề Văn Bản',
        instruction: 'Truy cập mục File > Info và tiến hành cập nhật thuộc tính Title của tài liệu.',
        hint: 'Trong Backstage Info, nhấp chuột vào trường Title trong vùng Properties.',
        targetType: 'ribbon-action',
        actionKey: 'word-document-properties'
      },
      {
        id: 'wtask-1-3',
        title: 'Lưu Tài Liệu Bằng Phím Tắt Tiêu Chuẩn',
        instruction: 'Thực hiện thao tác lưu tài liệu hiện hành để cập nhật các thay đổi mới nhất.',
        hint: 'Nhấn tổ hợp phím Ctrl + S hoặc bấm biểu tượng đĩa mềm trên thanh QAT.',
        targetType: 'ribbon-action',
        actionKey: 'word-save-doc'
      }
    ],
    quiz: [
      {
        id: 'wq-1-1',
        question: 'Dải lệnh nằm ngang phía trên cửa sổ Microsoft Word bao gồm các tab và các nhóm nút lệnh được gọi là gì?',
        options: ['Menu Bar', 'Ribbon', 'Status Bar', 'Task Pane'],
        correctIndex: 1,
        explanation: 'Dải lệnh Ribbon là giao diện đồ họa chính của các phần mềm Microsoft Office kể từ phiên bản 2007 đến nay.'
      },
      {
        id: 'wq-1-2',
        question: 'Nút nhỏ có hình mũi tên chéo nằm ở góc dưới bên phải của một số nhóm lệnh trên Ribbon có chức năng gì?',
        options: ['Thu nhỏ nhóm lệnh', 'Mở hộp thoại thiết lập chi tiết (Dialog Box Launcher)', 'Đóng nhóm lệnh đó lại', 'Xóa nhóm lệnh khỏi Ribbon'],
        correctIndex: 1,
        explanation: 'Nút Dialog Box Launcher dùng để mở các hộp thoại chuyên sâu chứa đầy đủ các tùy chọn của nhóm lệnh tương ứng.'
      },
      {
        id: 'wq-1-3',
        question: 'Tính năng nào của Word 2019 cho phép mở một tệp PDF và tự động chuyển đổi thành văn bản Word có thể chỉnh sửa?',
        options: ['PDF Reader', 'PDF Maker', 'PDF Reflow', 'PDF Converter Online'],
        correctIndex: 2,
        explanation: 'PDF Reflow là thuật toán tích hợp sẵn trong Word giúp phân tích và tái tạo văn bản, bảng biểu từ tệp PDF thành tài liệu Word chỉnh sửa được.'
      },
      {
        id: 'wq-1-4',
        question: 'Muốn lưu tài liệu hiện hành thành một tệp mẫu có thể tái sử dụng cho các lần sau, ta chọn kiểu định dạng nào trong Save as type?',
        options: ['Word Document (*.docx)', 'Word Template (*.dotx)', 'PDF (*.pdf)', 'Rich Text Format (*.rtf)'],
        correctIndex: 1,
        explanation: 'Định dạng .dotx là định dạng Word Template chuẩn dùng làm khuôn mẫu tạo các văn bản mới có cùng cấu trúc và định dạng.'
      }
    ]
  },

  // =========================================================================
  // BÀI 2: THAO TÁC VĂN BẢN
  // =========================================================================
  {
    id: 'word-lesson-2',
    moduleId: 'word',
    order: 2,
    title: 'Thao Tác Văn Bản',
    summary: 'Làm chủ các chế độ xem tài liệu Views, thu phóng Zoom, hiển thị ký tự ẩn Show/Hide ¶, kỹ thuật chọn khối văn bản nâng cao, thao tác Clipboard và tính năng Tìm kiếm & Thay thế (Find & Replace).',
    durationMinutes: 25,
    theories: [
      {
        id: 'wt-2-1',
        title: 'Các Chế Độ Xem (Views) & Thu Phóng Tài Liệu (Zoom)',
        concept: 'Word cung cấp nhiều chế độ xem tài liệu khác nhau để phục vụ các mục đích riêng: đọc sách, dàn trang in, soạn thảo thô hay xuất bản web. Thanh thu phóng Zoom giúp điều chỉnh kích thước hiển thị mà không làm thay đổi kích thước in thực tế.',
        keyPoints: [
          'Print Layout (Bố trí trang in): Chế độ mặc định, hiển thị tài liệu chính xác như khi được in ra giấy (WYSWYG) bao gồm lề, đồ họa, đầu trang và chân trang.',
          'Read Mode (Chế độ đọc): Tối ưu hóa cho việc đọc trên màn hình, ẩn các thanh công cụ thừa, hiển thị văn bản theo 2 cột dạng trang sách.',
          'Web Layout (Bố trí web): Hiển thị văn bản như một trang web trên trình duyệt, không có ranh giới chia trang.',
          'Outline (Chế độ dàn bài) & Draft (Bản nháp): Giúp tập trung vào cấu trúc tiêu đề phân cấp và nhập nội dung văn bản nhanh.',
          'Thu phóng Zoom: Tab View > nhóm Zoom > chọn 100%, One Page (toàn trang), Multiple Pages (nhiều trang), hoặc Page Width (vừa chiều ngang màn hình).'
        ],
        shortcut: 'Alt + W, P để chuyển về Print Layout; Alt + W, F để chuyển sang Read Mode; giữ phím Ctrl và lăn con cuộn chuột để phóng to/thu nhỏ nhanh.',
        examTip: 'Đề thi MOS thường yêu cầu đổi chế độ xem tài liệu sang Web Layout hoặc thiết lập độ thu phóng Zoom chính xác 100% hay Page Width. Thực hiện tại tab View > nhóm Zoom.',
        checkpointQuestion: {
          question: 'Chế độ xem nào trong Microsoft Word hiển thị tài liệu trực quan nhất, đúng y như kết quả khi in ra giấy?',
          options: ['Draft View', 'Web Layout', 'Print Layout', 'Outline View'],
          correctIndex: 2,
          explanation: 'Print Layout là chế độ xem mô phỏng chân thực nhất bố cục trang in thực tế của văn bản.'
        }
      },
      {
        id: 'wt-2-2',
        title: 'Ký Tự Ẩn Show/Hide ¶ & Chia Tách Cửa Sổ (Split Window)',
        concept: 'Ký hiệu định dạng ẩn (Non-printing characters / Formatting marks) hiển thị các dấu ngắt dòng, ngắt đoạn, dấu cách khoảng trống và điểm dừng Tab. Tính năng Split Window cho phép chia đôi màn hình soạn thảo để xem hai vùng cách xa nhau của cùng một tài liệu.',
        keyPoints: [
          'Nút Show/Hide ¶ (biểu tượng Pilcrow): Nằm tại tab Home > nhóm Paragraph. Khi bật, ký hiệu ¶ đại diện cho dấu ngắt đoạn (Enter), dấu chấm giữa các từ đại diện cho khoảng trắng (Space), mũi tên ngang đại diện cho phím Tab.',
          'Mục đích của Show/Hide ¶: Giúp phát hiện các khoảng trắng thừa, các dòng trống vô nghĩa và kiểm tra vị trí đặt dấu ngắt trang hay ngắt vùng Section Break.',
          'Chia đôi cửa sổ (Split Window): Tab View > nhóm Window > chọn Split. Một thanh ngang xuất hiện chia đôi màn hình, cho phép cuộn độc lập giữa phần đầu và phần cuối tài liệu.',
          'Hủy chia cửa sổ: Tab View > nhóm Window > chọn Remove Split (hoặc nhấp đúp vào thanh ngang chia cắt).'
        ],
        shortcut: 'Ctrl + Shift + * (hoặc Ctrl + *) để bật/tắt ký hiệu Show/Hide ¶; Alt + Ctrl + S để bật hoặc gỡ chia màn hình Split Window.',
        examTip: 'Luôn bật nút Show/Hide ¶ khi làm bài thi MOS hoặc định dạng văn bản chuyên nghiệp để dễ dàng quan sát chính xác vị trí chèn các dấu ngắt (Page Break, Section Break) và xóa bỏ các ký tự thừa.',
        checkpointQuestion: {
          question: 'Để kiểm tra xem văn bản có bị gõ thừa khoảng trắng hoặc thừa các dấu xuống dòng trống hay không, công cụ hữu ích nhất là gì?',
          options: ['Kiểm tra chính tả Spelling', 'Bật ký hiệu định dạng ẩn Show/Hide ¶ (Ctrl + *)', 'Thu nhỏ màn hình về 50%', 'Chuyển sang chế độ Draft'],
          correctIndex: 1,
          explanation: 'Nút Show/Hide ¶ hiển thị toàn bộ các ký tự điều khiển định dạng không in ra, giúp phát hiện khoảng trắng và đoạn trống dư thừa.'
        }
      },
      {
        id: 'wt-2-3',
        title: 'Kỹ Thuật Chọn Khối Văn Bản & Thao Tác Clipboard',
        concept: 'Nắm vững các thao tác chọn khối (Select text) giúp tăng tốc độ soạn thảo vượt bậc. Bộ nhớ đệm Clipboard của Office có thể lưu trữ đồng thời tới 24 đối tượng cắt/sao chép khác nhau từ mọi ứng dụng Office.',
        keyPoints: [
          'Chọn một từ: Nhấp đúp chuột (Double-click) vào từ đó.',
          'Chọn một câu hoàn chỉnh: Giữ phím Ctrl và nhấp chuột trái vào bất kỳ từ nào trong câu.',
          'Chọn một đoạn văn: Nhấp chuột 3 lần (Triple-click) vào vị trí bất kỳ trong đoạn hoặc nhấp đúp ở lề trái của đoạn.',
          'Chọn các đoạn văn không liên tục: Chọn khối văn bản thứ nhất, sau đó giữ phím Ctrl và dùng chuột bôi đen tiếp các khối văn bản khác.',
          'Chọn khối văn bản hình chữ nhật: Giữ phím Alt và kéo chuột qua vùng văn bản.',
          'Clipboard Task Pane: Nhấp vào nút mở rộng ở góc nhóm Clipboard (tab Home) để mở ngăn tác vụ. Có thể nhấp "Paste All" hoặc "Clear All".'
        ],
        shortcut: 'Ctrl + A (chọn toàn bộ), Ctrl + X (cắt), Ctrl + C (sao chép), Ctrl + V (dán), Ctrl + Z (hoàn tác Undo), Ctrl + Y (làm lại Redo).',
        examTip: 'Khi đề bài yêu cầu di chuyển (Move) một đoạn văn thì dùng Cut (Ctrl+X) rồi Paste (Ctrl+V). Nếu yêu cầu sao chép (Copy) thì dùng Copy (Ctrl+C). Phân biệt rõ hai yêu cầu này để không bị trừ điểm.',
        checkpointQuestion: {
          question: 'Để chọn nhanh một câu văn hoàn chỉnh bất kỳ trong tài liệu, thao tác chuột và bàn phím kết hợp là gì?',
          options: ['Nhấp đúp chuột vào giữa câu', 'Giữ phím Shift và nhấp chuột vào cuối câu', 'Giữ phím Ctrl và nhấp chuột trái vào câu đó', 'Nhấp chuột 3 lần liên tiếp'],
          correctIndex: 2,
          explanation: 'Thao tác giữ phím Ctrl + nhấp chuột trái vào câu văn sẽ bôi đen toàn bộ câu tính từ chữ đầu tiên đến dấu chấm kết câu.'
        }
      },
      {
        id: 'wt-2-4',
        title: 'Tìm Kiếm & Thay Thế Nâng Cao (Find & Replace)',
        concept: 'Công cụ Find & Replace giúp tìm nhanh từ khóa, thay thế tự động hàng loạt từ trong tài liệu, hoặc tìm và thay thế định dạng đặc biệt (phông chữ, kiểu dáng, dấu ngắt đoạn, ký tự đặc biệt).',
        keyPoints: [
          'Ngăn điều hướng tìm kiếm (Navigation Pane): Nhấn Ctrl + F để mở. Cho phép tìm theo đề mục (Headings), trang (Pages) hoặc kết quả tìm kiếm (Results).',
          'Hộp thoại Find and Replace: Nhấn phím tắt Ctrl + H để mở trực tiếp tab Replace (hoặc Ctrl + G để mở tab Go To).',
          'Tùy chọn nâng cao (nút More >>):',
          '- Match case: Phân biệt chính xác chữ hoa và chữ thường.',
          '- Find whole words only: Chỉ tìm các từ độc lập, không tìm từ con nằm trong từ khác.',
          '- Use wildcards: Sử dụng ký tự đại diện (* đại diện cho chuỗi ký tự, ? đại diện cho 1 ký tự).',
          '- Nút Format: Tìm kiếm và thay thế theo định dạng phông chữ, màu sắc, đoạn văn hoặc Style.',
          '- Nút Special: Tìm và thay thế các ký tự định dạng đặc biệt như Paragraph Mark (^p), Tab Character (^t), Section Break (^b)...'
        ],
        shortcut: 'Ctrl + F (Mở Navigation Pane), Ctrl + H (Mở hộp thoại Replace), Ctrl + G (Go To đến trang/dòng cụ thể).',
        examTip: 'Đề thi MOS thường yêu cầu thay thế một từ viết tắt bằng cụm từ đầy đủ trên toàn bộ tài liệu (dùng Replace All), hoặc tìm một từ và áp dụng định dạng in đậm màu sắc cho từ đó thông qua nút More > Format > Font.',
        checkpointQuestion: {
          question: 'Trong hộp thoại Find and Replace, ký hiệu đại diện nào được sử dụng trong trường Find What để tìm kiếm dấu ngắt đoạn (Paragraph Mark)?',
          options: ['^t', '^p', '^b', '^m'],
          correctIndex: 1,
          explanation: 'Ký hiệu ^p (Paragraph Mark) đại diện cho dấu ngắt đoạn (phím Enter) trong tính năng tìm kiếm của Microsoft Word.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-2-1',
        title: 'Bật Hiển Thị Ký Tự Định Dạng Ẩn (Show/Hide ¶)',
        instruction: 'Trên thanh Ribbon tại thẻ Home, nhấp vào nút Show/Hide ¶ trong nhóm Paragraph.',
        hint: 'Nhấp chuột vào biểu tượng ¶ tại tab Home > nhóm Paragraph.',
        targetType: 'ribbon-action',
        actionKey: 'word-show-hide-marks'
      },
      {
        id: 'wtask-2-2',
        title: 'Thực Hiện Tìm Kiếm & Thay Thế Văn Bản',
        instruction: 'Mở hộp thoại Replace và thực hiện thay thế từ khóa văn bản theo yêu cầu.',
        hint: 'Sử dụng phím tắt Ctrl + H hoặc nhấp vào nút Replace ở nhóm Editing trên tab Home.',
        targetType: 'ribbon-action',
        actionKey: 'word-find-replace'
      },
      {
        id: 'wtask-2-3',
        title: 'Chia Đôi Màn Hình Soạn Thảo (Split Window)',
        instruction: 'Truy cập tab View trên Ribbon và chọn công cụ Split để phân chia vùng làm việc.',
        hint: 'Vào tab View > nhóm Window > nhấp vào nút Split.',
        targetType: 'ribbon-action',
        actionKey: 'word-split-window'
      }
    ],
    quiz: [
      {
        id: 'wq-2-1',
        question: 'Tổ hợp phím tắt nào dùng để mở trực tiếp tab Thay thế (Replace) trong hộp thoại Find and Replace?',
        options: ['Ctrl + F', 'Ctrl + H', 'Ctrl + G', 'Ctrl + R'],
        correctIndex: 1,
        explanation: 'Ctrl + H mở trực tiếp tab Replace; trong khi Ctrl + F mở ngăn tìm kiếm Navigation Pane và Ctrl + G mở tab Go To.'
      },
      {
        id: 'wq-2-2',
        question: 'Ngăn nhớ đệm Office Clipboard có khả năng lưu trữ tối đa bao nhiêu mục cắt hoặc sao chép cùng một lúc?',
        options: ['12 mục', '16 mục', '24 mục', '50 mục'],
        correctIndex: 2,
        explanation: 'Office Clipboard hỗ trợ lưu trữ đồng thời tối đa 24 mục nội dung thu thập từ các ứng dụng Office.'
      },
      {
        id: 'wq-2-3',
        question: 'Tùy chọn nào trong hộp thoại Find and Replace đảm bảo phần mềm chỉ tìm chính xác các từ đứng độc lập, không tìm từ con nằm ghép trong từ khác?',
        options: ['Match case', 'Find whole words only', 'Use wildcards', 'Sounds like'],
        correctIndex: 1,
        explanation: 'Find whole words only chỉ khớp khi từ khóa đứng độc lập được bao quanh bởi khoảng trắng hoặc dấu câu.'
      },
      {
        id: 'wq-2-4',
        question: 'Phím tắt nào dùng để lặp lại thao tác vừa thực hiện gần nhất (Redo) hoặc thực hiện lại một lệnh lặp?',
        options: ['Ctrl + Y', 'Ctrl + Z', 'Ctrl + R', 'Ctrl + Shift + Z'],
        correctIndex: 0,
        explanation: 'Ctrl + Y (hoặc phím chức năng F4) dùng để Redo (làm lại thao tác vừa hoàn tác) hoặc Repeat Action.'
      }
    ]
  },

  // =========================================================================
  // BÀI 3: ĐỊNH DẠNG VĂN BẢN VÀ ĐOẠN VĂN
  // =========================================================================
  {
    id: 'word-lesson-3',
    moduleId: 'word',
    order: 3,
    title: 'Định Dạng Văn Bản Và Đoạn Văn',
    summary: 'Thuộc tính phông chữ, cỡ chữ, hiệu ứng ký tự, căn lề đoạn, khoảng cách dòng và đoạn, thụt lề Indentation, điểm dừng Tab, chổi sao chép định dạng Format Painter và danh sách Bullets & Numbering.',
    durationMinutes: 30,
    theories: [
      {
        id: 'wt-3-1',
        title: 'Định Dạng Ký Tự (Font Formatting) & Hiệu Ứng Ký Tự',
        concept: 'Định dạng ký tự bao gồm kiểu phông chữ, kích thước, kiểu dáng (đậm, nghiêng, gạch chân), màu sắc và các hiệu ứng chữ nghệ thuật. Nghị định 30/2020/NĐ-CP quy định văn bản hành chính bắt buộc dùng phông chữ Times New Roman, bộ mã Unicode.',
        keyPoints: [
          'Nhóm Font trên tab Home: Chứa Font (Times New Roman, Calibri, Arial), Font Size (cỡ chữ 13-14 pt cho nội dung chính), Font Color (màu chữ Automatic/Black).',
          'Kiểu chữ cơ bản: Bold (In đậm - Ctrl+B), Italic (In nghiêng - Ctrl+I), Underline (Gạch chân - Ctrl+U). Nhấp vào mũi tên bên cạnh Underline để chọn kiểu đường gạch (nét đôi, nét đứt, lượn sóng) và màu gạch Underline Color.',
          'Chỉ số trên/dưới: Subscript (Chỉ số dưới: $H_2O$ - Ctrl+=) và Superscript (Chỉ số trên: $X^2$ - Ctrl+Shift++).',
          'Đổi kiểu chữ hoa/thường (Change Case - Shift+F3): Sentence case (Viết hoa đầu câu), lowercase (chữ thường), UPPERCASE (CHỮ HOA), Capitalize Each Word (Viết Hoa Từng Từ), tOGGLE cASE.',
          'Xóa định dạng (Clear All Formatting): Biểu tượng chữ A kèm cục tẩy (Ctrl + Space) xóa sạch định dạng về phông chữ mặc định.'
        ],
        shortcut: 'Ctrl + B (Đậm), Ctrl + I (Nghiêng), Ctrl + U (Gạch chân), Shift + F3 (Đổi kiểu chữ hoa/thường), Ctrl + Space (Xóa định dạng ký tự).',
        examTip: 'Đề thi MOS thường yêu cầu áp dụng Text Effect (ví dụ: Fill: Blue, Accent color 1; Shadow) hoặc Character Spacing (Expanded/Condensed 1.5 pt) trong hộp thoại Font nâng cao (Ctrl + D > tab Advanced).',
        checkpointQuestion: {
          question: 'Để chuyển đổi nhanh chu kỳ giữa các kiểu chữ: chữ thường -> VIẾT HOA -> Viết Hoa Đầu Từ, tổ hợp phím tắt nào được sử dụng?',
          options: ['Ctrl + Shift + U', 'Shift + F3', 'Ctrl + F3', 'Alt + F3'],
          correctIndex: 1,
          explanation: 'Shift + F3 là phím tắt của tính năng Change Case, dùng để chuyển đổi luân phiên các kiểu chữ hoa và chữ thường.'
        }
      },
      {
        id: 'wt-3-2',
        title: 'Căn Lề Đoạn Văn, Giãn Khoảng Cách Dòng & Giãn Đoạn',
        concept: 'Định dạng đoạn văn (Paragraph Formatting) tác động lên toàn bộ đoạn văn bản chứa con trỏ soạn thảo. Bao gồm việc căn lề trái, phải, giữa, đều hai bên, giãn dòng (Line Spacing) và khoảng trống trước/sau đoạn (Paragraph Spacing).',
        keyPoints: [
          'Căn lề đoạn (Alignment): Căn trái (Left - Ctrl+L), Căn giữa (Center - Ctrl+E), Căn phải (Right - Ctrl+R), Căn đều 2 bên (Justify - Ctrl+J). Theo quy chuẩn, văn bản chính luôn căn đều hai bên (Justify).',
          'Giãn cách dòng (Line Spacing): Khoảng cách giữa các dòng trong cùng một đoạn văn. Thường dùng 1.15 lines hoặc 1.5 lines theo quy chuẩn.',
          'Giãn khoảng cách đoạn (Paragraph Spacing): Khoảng cách Before (phía trên đoạn) và After (phía dưới đoạn) tính bằng điểm (pt). Tiêu chuẩn hành chính thường đặt Before: 0-6 pt, After: 6 pt.',
          'Hộp thoại Paragraph: Nhấp vào nút Dialog Box Launcher ở góc nhóm Paragraph (tab Home hoặc tab Layout) để chỉnh thông số chính xác tuyệt đối.'
        ],
        shortcut: 'Ctrl + 1 (giãn dòng đơn 1.0), Ctrl + 2 (giãn dòng đôi 2.0), Ctrl + 5 (giãn dòng 1.5 lines), Ctrl + 0 (thêm/bớt 12pt khoảng cách phía trước đoạn).',
        examTip: 'Trong bài thi MOS, khi đề bài yêu cầu "Set line spacing to Exactly 14 pt" hoặc "Set spacing After to 8 pt", bạn bắt buộc phải mở hộp thoại Paragraph để nhập số chính xác.',
        checkpointQuestion: {
          question: 'Phím tắt nào dùng để căn lề đều cả hai mép trái và phải (Justify) cho đoạn văn bản đang chọn?',
          options: ['Ctrl + L', 'Ctrl + R', 'Ctrl + E', 'Ctrl + J'],
          correctIndex: 3,
          explanation: 'Ctrl + J kích hoạt chế độ căn đều hai bên (Justify), giúp văn bản thẳng đều ở cả lề trái và lề phải.'
        }
      },
      {
        id: 'wt-3-3',
        title: 'Thụt Lề Đoạn Văn (Indentation) & Điểm Dừng Tab (Tab Stops)',
        concept: 'Thụt lề (Indentation) điều khiển khoảng cách giữa mép văn bản với lề trang giấy. Điểm dừng Tab (Tab Stop) giúp gióng thẳng hàng các cột văn bản một cách chuyên nghiệp mà không bao giờ được dùng phím Space gõ thủ công.',
        keyPoints: [
          'Các loại thụt lề: Left Indent (thụt cả khối bên trái), Right Indent (thụt lề bên phải), First Line Indent (thụt dòng đầu tiên vào 1.0-1.27 cm), Hanging Indent (dòng đầu nhô ra ngoài, các dòng sau thụt vào).',
          'Con trượt trên thước Ruler: Con trượt tam giác trên (First Line), con trượt tam giác dưới (Hanging), hình hộp chữ nhật dưới cùng (Left Indent).',
          'Các loại Tab Stop trên Tab Selector (góc trái thước Ruler):',
          '- Left Tab (Căn trái tại mốc tab), Center Tab (Căn giữa tại mốc tab), Right Tab (Căn phải tại mốc tab - rất hay dùng cho cột số tiền hoặc ngày tháng).',
          '- Decimal Tab: Căn thẳng hàng theo dấu chấm thập phân của các con số.',
          '- Bar Tab: Chèn một đường kẻ dọc thẳng đứng.',
          'Tab Leader: Đường dẫn chấm chấm (....), gạch đứt (----) hoặc gạch dưới (____) tự động lấp đầy khoảng trống khi nhấn phím Tab (cài đặt trong hộp thoại Tabs).'
        ],
        shortcut: 'Tab (thụt lề sang phải 0.5 inch / nhảy đến tab stop kế tiếp), Shift + Tab (lùi thụt lề sang trái).',
        examTip: 'Đề thi MOS rất hay yêu cầu đặt Right Tab ở vị trí 6 inch hoặc 15 cm với Leader số 2 (chấm bi ....) để làm dòng ký tên hoặc mục lục mini.',
        checkpointQuestion: {
          question: 'Khi lập danh sách giá tiền hoặc các số thập phân cần gióng thẳng hàng theo dấu phẩy thập phân, loại Tab Stop nào là chuẩn xác nhất?',
          options: ['Left Tab', 'Center Tab', 'Right Tab', 'Decimal Tab'],
          correctIndex: 3,
          explanation: 'Decimal Tab (Tab thập phân) được thiết kế chuyên biệt để căn thẳng hàng các con số theo vị trí dấu chấm/phẩy thập phân.'
        }
      },
      {
        id: 'wt-3-4',
        title: 'Chổi Định Dạng (Format Painter) & Kiểu Mẫu Nhanh (Styles)',
        concept: 'Format Painter là công cụ sao chép toàn bộ thuộc tính định dạng của một khối văn bản mẫu và quét áp dụng cho khối văn bản khác. Quick Styles là các bộ định dạng chuẩn hóa được định nghĩa sẵn, nền tảng cho việc tạo mục lục tự động.',
        keyPoints: [
          'Sử dụng Format Painter:',
          '- Bước 1: Chọn khối văn bản đã được định dạng đẹp.',
          '- Bước 2: Bấm vào biểu tượng cây chổi Format Painter trên tab Home.',
          '- Bước 3: Rê chuột quét qua khối văn bản muốn nhận định dạng.',
          '- Mẹo: Nhấp đúp chuột (Double-click) vào cây chổi để khóa định dạng, cho phép quét áp dụng liên tục cho nhiều vị trí khác nhau. Nhấn phím Esc để thoát.',
          'Áp dụng Styles (tab Home > Styles gallery): Normal (văn bản thường), Heading 1 (tiêu đề cấp 1), Heading 2 (tiêu đề cấp 2), Title (tên tài liệu).',
          'Tùy biến Style: Nhấp chuột phải vào Style bất kỳ trong danh sách > chọn Modify để thay đổi vĩnh viễn phông chữ, màu sắc, khoảng cách cho toàn bộ tài liệu.'
        ],
        shortcut: 'Ctrl + Shift + C (Sao chép định dạng), Ctrl + Shift + V (Dán định dạng); Ctrl + Alt + 1 (Áp dụng Heading 1), Ctrl + Alt + 2 (Áp dụng Heading 2).',
        examTip: 'Để sao chép định dạng cho nhiều đoạn không liên tục, hãy nhấp đúp vào Format Painter. Nếu chỉ nhấp 1 lần, chổi sẽ tự tắt sau lần quét đầu tiên.',
        checkpointQuestion: {
          question: 'Tổ hợp phím tắt nào dùng để sao chép chỉ riêng các thuộc tính định dạng (không sao chép nội dung chữ) trong Microsoft Word?',
          options: ['Ctrl + C', 'Ctrl + Shift + C', 'Alt + C', 'Shift + F4'],
          correctIndex: 1,
          explanation: 'Ctrl + Shift + C sao chép định dạng (Copy Formatting) và Ctrl + Shift + V dùng để dán định dạng (Paste Formatting).'
        }
      },
      {
        id: 'wt-3-5',
        title: 'Tạo Danh Sách Đầu Dòng: Bullets & Numbering',
        concept: 'Danh sách giúp trình bày thông tin mạch lạc, rõ ràng. Word hỗ trợ danh sách có dấu đầu dòng (Bulleted list), danh sách đánh số thứ tự (Numbered list) và danh sách phân cấp đa cấp độ (Multilevel list).',
        keyPoints: [
          'Tạo danh sách: Chọn các đoạn văn bản > nhấp biểu tượng Bullets hoặc Numbering trên tab Home > nhóm Paragraph.',
          'Tùy biến Bullets (Define New Bullet): Cho phép chọn biểu tượng từ bảng ký tự Symbol (phông Wingdings/Webdings), ảnh (Picture) hoặc đổi màu Font của dấu đầu dòng.',
          'Tùy biến Numbering: Chọn kiểu 1, 2, 3 hoặc I, II, III hoặc A, B, C. Đặt số bắt đầu (Set Numbering Value) hoặc chọn Restart at 1 / Continue Numbering.',
          'Danh sách đa cấp độ (Multilevel List): Dùng phím Tab để tăng cấp độ thụt lề (Demote - hạ cấp thành nhánh con a, b, c) và phím Shift + Tab để giảm cấp độ (Promote - tăng cấp lên nhánh cha).'
        ],
        shortcut: 'Tab (Hạ cấp thụt lề trong danh sách), Shift + Tab (Tăng cấp thụt lề trong danh sách).',
        examTip: 'Đề thi MOS hay yêu cầu thay đổi ký tự Bullet thành biểu tượng từ phông chữ Wingdings (ví dụ: hình mũi tên, dấu tích) hoặc yêu cầu thiết lập Numbering bắt đầu lại từ số 5 (Set Numbering Value = 5).',
        checkpointQuestion: {
          question: 'Để hạ một mục trong danh sách có thứ tự xuống cấp con thấp hơn (tăng cấp độ thụt lề), ta đặt con trỏ ở đầu mục đó và nhấn phím gì?',
          options: ['Phím Space', 'Phím Enter', 'Phím Tab', 'Phím Shift'],
          correctIndex: 2,
          explanation: 'Nhấn phím Tab tại đầu mục danh sách sẽ làm thụt lề mục đó vào trong và hạ cấp xuống danh mục con cấp thấp hơn.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-3-1',
        title: 'Định Dạng Phông Chữ Times New Roman & In Đậm',
        instruction: 'Áp dụng phông chữ Times New Roman và kiểu chữ in đậm (Bold) cho văn bản đang chọn.',
        hint: 'Chọn phông chữ Times New Roman và nhấp vào biểu tượng Bold (B) trên tab Home.',
        targetType: 'ribbon-action',
        actionKey: 'word-font-times'
      },
      {
        id: 'wtask-3-2',
        title: 'Căn Lề Đều Cả Hai Bên Đoạn Văn (Justify)',
        instruction: 'Thực hiện căn đều hai bên cho toàn bộ nội dung khối văn bản được chỉ định.',
        hint: 'Nhấp vào nút Align Justify trên tab Home > nhóm Paragraph hoặc nhấn Ctrl + J.',
        targetType: 'ribbon-action',
        actionKey: 'word-align-justify'
      },
      {
        id: 'wtask-3-3',
        title: 'Áp Dụng Kiểu Dáng Heading 1 Nhanh',
        instruction: 'Gán kiểu dáng Heading 1 trong danh mục Styles cho dòng tiêu đề văn bản.',
        hint: 'Trên tab Home > nhóm Styles, nhấp chọn ô kiểu dáng Heading 1.',
        targetType: 'ribbon-action',
        actionKey: 'word-style-heading1'
      }
    ],
    quiz: [
      {
        id: 'wq-3-1',
        question: 'Theo quy định hiện hành về thể thức văn bản hành chính Việt Nam, kiểu phông chữ và cỡ chữ tiêu chuẩn cho phần nội dung là gì?',
        options: ['Arial, cỡ chữ 11-12 pt', 'Times New Roman, cỡ chữ 13-14 pt', 'Calibri, cỡ chữ 12 pt', 'Tahoma, cỡ chữ 10-11 pt'],
        correctIndex: 1,
        explanation: 'Quy định chuẩn tại Nghị định 30/2020/NĐ-CP yêu cầu sử dụng phông chữ Times New Roman, cỡ chữ từ 13 đến 14 pt cho phần nội dung chính.'
      },
      {
        id: 'wq-3-2',
        question: 'Muốn sao chép định dạng và áp dụng liên tục cho nhiều khối văn bản ở các vị trí khác nhau mà không bị ngắt quãng, ta thao tác thế nào trên nút Format Painter?',
        options: ['Nhấp chuột phải vào nút', 'Nhấp đúp chuột (Double-click) vào nút', 'Giữ phím Shift và nhấp nút', 'Kéo thả nút chổi đến văn bản'],
        correctIndex: 1,
        explanation: 'Nhấp đúp chuột vào cây chổi Format Painter sẽ giữ công cụ luôn kích hoạt, cho phép bạn quét áp dụng cho nhiều đoạn liên tiếp đến khi nhấn phím Esc.'
      },
      {
        id: 'wq-3-3',
        question: 'Để hủy bỏ toàn bộ các định dạng ký tự (màu sắc, in đậm, nghiêng, cỡ chữ...) và đưa văn bản trở về trạng thái nguyên bản mặc định, phím tắt nào được dùng?',
        options: ['Ctrl + Backspace', 'Ctrl + Space', 'Ctrl + Shift + N', 'Ctrl + Delete'],
        correctIndex: 1,
        explanation: 'Tổ hợp phím Ctrl + Space (Clear All Formatting) xóa bỏ mọi định dạng ký tự đang áp dụng.'
      },
      {
        id: 'wq-3-4',
        question: 'Đường dẫn chấm bi (....) tự động nối từ cuối văn bản đến điểm dừng Tab ở lề phải được gọi là gì trong hộp thoại Tabs?',
        options: ['Tab Leader', 'Tab Alignment', 'Tab Stop Position', 'Bar Tab'],
        correctIndex: 0,
        explanation: 'Tab Leader là tính năng tạo đường dẫn tự động (dạng chấm bi, nét gạch ngang hoặc gạch dưới) đi kèm với điểm dừng Tab.'
      }
    ]
  },

  // =========================================================================
  // BÀI 4: ĐỊNH DẠNG TÀI LIỆU ĐỂ IN
  // =========================================================================
  {
    id: 'word-lesson-4',
    moduleId: 'word',
    order: 4,
    title: 'Định Dạng Tài Liệu Để In',
    summary: 'Thiết lập kích thước trang A4, hướng giấy Portrait/Landscape, canh lề Margins, dấu ngắt trang & ngắt vùng Section Break, chia cột báo Columns, Header & Footer, hình mờ Watermark và đường viền trang Page Borders.',
    durationMinutes: 30,
    theories: [
      {
        id: 'wt-4-1',
        title: 'Thiết Lập Trang In (Page Setup): Kích Thước, Hướng & Căn Lề',
        concept: 'Thiết lập trang in (Page Setup) xác định kích thước vật lý của trang giấy, hướng in và các khoảng cách lề. Đây là khâu quan trọng hàng đầu trước khi tiến hành in ấn hoặc nộp báo cáo.',
        keyPoints: [
          'Khổ giấy (Paper Size): Tab Layout > nhóm Page Setup > nút Size > chọn khổ giấy tiêu chuẩn A4 (210 x 297 mm) hoặc Letter (8.5 x 11 inches).',
          'Hướng giấy (Orientation): Portrait (hướng dọc truyền thống) và Landscape (hướng ngang, dùng cho tài liệu có bảng biểu dữ liệu rộng).',
          'Căn lề (Margins): Các mẫu sẵn gồm Normal (Top/Bottom 2.54cm, Left/Right 2.54cm), Narrow (1.27cm), Moderate, Wide.',
          'Custom Margins theo chuẩn hành chính Việt Nam:',
          '- Lề trên (Top): 2.0 - 2.5 cm.',
          '- Lề dưới (Bottom): 2.0 - 2.5 cm.',
          '- Lề trái (Left): 3.0 - 3.5 cm (để lại khoảng trống đóng gáy sổ).',
          '- Lề phải (Right): 1.5 - 2.0 cm.'
        ],
        shortcut: 'Alt + P, S, P hoặc nhấp đúp chuột vào vùng màu xám trên thước kẻ dọc để mở ngay hộp thoại Page Setup.',
        examTip: 'Đề thi MOS thường yêu cầu đổi đơn vị đo sang Centimeters (File > Options > Advanced > Display > Show measurements in units of: Centimeters) rồi mới đặt lề Custom Margins.',
        checkpointQuestion: {
          question: 'Theo Nghị định 30/2020/NĐ-CP về công tác văn thư, khoảng cách lề trái (Left Margin) của văn bản hành chính quy chuẩn là bao nhiêu?',
          options: ['1.5 cm đến 2.0 cm', '2.0 cm đến 2.5 cm', '3.0 cm đến 3.5 cm', '3.5 cm đến 4.0 cm'],
          correctIndex: 2,
          explanation: 'Lề trái bắt buộc từ 3.0 cm đến 3.5 cm để dự phòng đóng gáy tập hồ sơ không bị che lấp nội dung chữ.'
        }
      },
      {
        id: 'wt-4-2',
        title: 'Dấu Ngắt Trang (Page Breaks) & Ngắt Vùng (Section Breaks)',
        concept: 'Dấu ngắt trang (Page Break) đẩy văn bản sau dấu ngắt sang trang kế tiếp. Dấu ngắt vùng (Section Break) chia văn bản thành các phân đoạn hoàn toàn độc lập về thiết lập trang, hướng giấy, lề, số cột và đầu trang/chân trang.',
        keyPoints: [
          'Ngắt trang thông thường (Page Break): Tab Layout > Breaks > Page (hoặc phím tắt Ctrl + Enter). Không thay đổi thuộc tính lề hay hướng giấy.',
          'Các loại dấu ngắt vùng (Section Breaks):',
          '- Next Page: Ngắt vùng và đẩy đoạn sau sang trang mới. Bắt buộc dùng khi muốn trang tiếp theo có hướng giấy nằm ngang hoặc số cột khác biệt.',
          '- Continuous: Ngắt vùng ngay tại vị trí hiện tại trên cùng một trang. Rất hay dùng để chia cột cho một đoạn văn bản nằm giữa trang.',
          '- Even Page / Odd Page: Đẩy phân vùng mới sang trang chẵn hoặc trang lẻ kế tiếp (dùng cho sách in 2 mặt).',
          'Xóa dấu ngắt: Bật Show/Hide ¶, đặt con trỏ trước dòng chữ "Page Break" hoặc "Section Break (...)" và nhấn phím Delete.'
        ],
        shortcut: 'Ctrl + Enter để chèn nhanh dấu ngắt trang Page Break.',
        examTip: 'Nếu đề bài yêu cầu chỉ đổi trang thứ 2 sang hướng nằm ngang (Landscape) trong khi trang 1 và 3 vẫn dọc, bạn phải chèn Section Break (Next Page) ở cuối trang 1 và cuối trang 2, sau đó đổi Orientation của trang 2.',
        checkpointQuestion: {
          question: 'Để chia một đoạn văn bản nằm giữa trang thành 2 cột báo mà phần văn bản trước và sau đó vẫn giữ nguyên 1 cột bình thường, loại dấu ngắt nào phải được áp dụng?',
          options: ['Page Break (Ctrl + Enter)', 'Section Break (Continuous)', 'Section Break (Next Page)', 'Column Break'],
          correctIndex: 1,
          explanation: 'Section Break (Continuous) cho phép tạo vùng mới ngay trên cùng trang giấy để áp dụng số cột khác biệt cho đoạn ở giữa.'
        }
      },
      {
        id: 'wt-4-3',
        title: 'Chia Cột Báo (Columns) & Đường Kẻ Ngăn Cách',
        concept: 'Chia cột (Columns) là định dạng chia dòng chữ chạy theo nhiều cột dọc song song như trên báo chí hoặc tạp chí, khi hết cột này chữ sẽ tự động chảy sang cột tiếp theo.',
        keyPoints: [
          'Cách chia cột: Chọn đoạn văn bản cần chia > vào tab Layout > nhóm Page Setup > bấm nút Columns > chọn Two, Three, Left (cột trái hẹp, phải rộng), Right.',
          'Tùy biến cột nâng cao (More Columns...):',
          '- Number of columns: Nhập số lượng cột tùy ý.',
          '- Line between: Tích chọn để xuất hiện đường kẻ dọc ngăn cách giữa các cột.',
          '- Width and Spacing: Điều chỉnh độ rộng từng cột và khoảng cách giữa các cột (mặc định các cột bằng nhau nếu tích Equal column width).',
          'Ngắt cột thủ công (Column Break): Đặt con trỏ tại vị trí muốn sang cột mới > Layout > Breaks > Column (Ctrl + Shift + Enter).'
        ],
        shortcut: 'Ctrl + Shift + Enter để chèn dấu ngắt cột Column Break.',
        examTip: 'Luôn bôi đen chọn chính xác đoạn văn bản (không bôi đen thừa dấu ngắt đoạn cuối cùng nếu có thể) trước khi bấm chia cột, để Word tự động chèn Continuous Section Break bao quanh đoạn đó.',
        checkpointQuestion: {
          question: 'Tùy chọn nào trong hộp thoại Columns cho phép hiển thị một đường kẻ dọc phân cách thanh mảnh giữa các cột báo?',
          options: ['Column Border', 'Vertical Line', 'Line between', 'Column Divider'],
          correctIndex: 2,
          explanation: 'Tùy chọn "Line between" trong hộp thoại More Columns sẽ tự động kẻ một đường dọc phân chia giữa các cột.'
        }
      },
      {
        id: 'wt-4-4',
        title: 'Đầu Trang, Chân Trang (Header & Footer) & Đánh Số Trang',
        concept: 'Header (đầu trang) và Footer (chân trang) là các khu vực nằm ở lề trên và lề dưới của trang, chứa các thông tin lặp lại ở mọi trang như tiêu đề tài liệu, tên tác giả, ngày tháng và số trang tự động.',
        keyPoints: [
          'Chèn Header/Footer: Tab Insert > nhóm Header & Footer > chọn Header hoặc Footer từ danh sách mẫu có sẵn, hoặc nhấp đúp chuột vào vùng lề trên/lề dưới của trang.',
          'Đánh số trang (Page Number): Insert > Page Number > chọn Top of Page (đầu trang), Bottom of Page (chân trang), hoặc Page Margins (ở lề). Chọn dạng số "Page X of Y" hoặc số đơn.',
          'Các tùy chọn chuyên sâu trên tab Header & Footer Design:',
          '- Different First Page: Trang bìa (trang 1) sẽ không hiển thị Header/Footer hoặc có Header/Footer riêng biệt.',
          '- Different Odd & Even Pages: Thiết lập đầu trang/chân trang khác nhau giữa trang chẵn và trang lẻ.',
          '- Link to Previous: Nút liên kết với phân vùng trước đó. Muốn Section sau có tiêu đề khác biệt với Section trước, bắt buộc phải TẮT nút Link to Previous.',
          'Định dạng số trang (Format Page Numbers): Cho phép đổi kiểu số (1,2,3 hoặc i,ii,iii) và đặt số bắt đầu (Start at).'
        ],
        shortcut: 'Nhấp đúp vào phần thân văn bản hoặc nhấn phím Esc để đóng chế độ chỉnh sửa Header & Footer.',
        examTip: 'Đề thi MOS thường yêu cầu: Đánh số trang ở chân trang (Bottom) căn giữa, không hiển thị số trang ở trang bìa (tích chọn Different First Page). Cần nhớ chính xác vị trí tích chọn này.',
        checkpointQuestion: {
          question: 'Muốn trang đầu tiên của tài liệu (trang bìa) không hiển thị số trang và đầu trang, ta chọn tùy chọn nào trong công cụ Header & Footer?',
          options: ['Remove First Page', 'Different First Page', 'Hide Header & Footer', 'Unlink First Page'],
          correctIndex: 1,
          explanation: 'Tùy chọn Different First Page tách biệt thiết kế của trang đầu tiên, cho phép để trống không hiển thị header/footer trên trang bìa.'
        }
      },
      {
        id: 'wt-4-5',
        title: 'Yếu Tố Nền: Hình Mờ (Watermark), Viền Trang & Chủ Đề',
        concept: 'Tab Design quản lý toàn bộ giao diện mỹ thuật của tài liệu: Áp dụng chủ đề màu sắc thống nhất (Themes), chèn hình mờ bản quyền (Watermark) và kẻ viền bao quanh trang (Page Borders).',
        keyPoints: [
          'Hình mờ bản quyền (Watermark): Tab Design > nhóm Page Background > nút Watermark. Có sẵn các mẫu CONFIDENTIAL (Tuyệt mật), DO NOT COPY (Không sao chép).',
          'Custom Watermark: Cho phép tạo hình mờ văn bản (Text Watermark) với nội dung tùy ý, phông chữ, kích thước, màu xám nhạt và độ mờ Semitransparent; hoặc hình mờ bằng ảnh logo (Picture Watermark) với tùy chọn Washout.',
          'Viền trang (Page Borders): Tab Design > Page Borders > chọn kiểu đường kẻ viền (Style), màu viền (Color), độ dày viền (Width) hoặc viền nghệ thuật hoa văn (Art).',
          'Chủ đề tài liệu (Document Themes): Gói tích hợp gồm bảng màu (Colors), phông chữ (Fonts) và hiệu ứng (Effects) giúp đồng bộ phong cách cho toàn bộ văn bản chỉ với một cú nhấp chuột.'
        ],
        shortcut: 'Alt + G, P, W để mở nhanh menu chèn Watermark.',
        examTip: 'Khi đề bài yêu cầu xóa hình mờ, vào Design > Watermark > chọn "Remove Watermark". Nếu yêu cầu tạo viền trang chỉ áp dụng cho trang đầu tiên, chọn "This section - First page only" trong mục Apply to của hộp thoại Page Borders.',
        checkpointQuestion: {
          question: 'Để chèn một dòng chữ mờ chìm dưới nền văn bản như chữ "BẢN THẢO" hoặc "CONFIDENTIAL", công cụ nào được sử dụng?',
          options: ['Page Color', 'Watermark (Design)', 'Text Box Behind', 'Header Background'],
          correctIndex: 1,
          explanation: 'Tính năng Watermark (tab Design) được thiết kế chuyên biệt để in chìm chữ hoặc logo bản quyền dưới nền văn bản.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-4-1',
        title: 'Thiết Lập Khổ Giấy Tiêu Chuẩn A4',
        instruction: 'Trên thanh Ribbon tại thẻ Layout, bấm vào nút Size và chọn kích thước khổ giấy A4.',
        hint: 'Vào tab Layout > nhóm Page Setup > Size > chọn A4 (210 x 297 mm).',
        targetType: 'ribbon-action',
        actionKey: 'word-size-a4'
      },
      {
        id: 'wtask-4-2',
        title: 'Chuyển Đổi Hướng Giấy Thành Hướng Ngang (Landscape)',
        instruction: 'Truy cập tab Layout, nhấp chọn công cụ Orientation và chọn chế độ Landscape.',
        hint: 'Nhấp chuột vào tab Layout > nhóm Page Setup > Orientation > Landscape.',
        targetType: 'ribbon-action',
        actionKey: 'word-orientation-landscape'
      },
      {
        id: 'wtask-4-3',
        title: 'Chèn Số Trang Vào Chân Trang (Page Number Bottom)',
        instruction: 'Thực hiện chèn số trang tự động vào vị trí chân trang (Bottom of Page).',
        hint: 'Vào tab Insert > nhóm Header & Footer > Page Number > Bottom of Page.',
        targetType: 'ribbon-action',
        actionKey: 'word-page-number-bottom'
      }
    ],
    quiz: [
      {
        id: 'wq-4-1',
        question: 'Điểm khác biệt cốt lõi giữa dấu ngắt trang thông thường (Page Break) và dấu ngắt vùng (Section Break) là gì?',
        options: [
          'Page Break xóa trang cũ, Section Break tạo trang mới',
          'Section Break cho phép thiết lập hướng giấy, căn lề và đầu trang/chân trang độc lập giữa các vùng',
          'Page Break chỉ dùng được trong bảng biểu',
          'Không có điểm khác biệt nào, hai lệnh hoàn toàn như nhau'
        ],
        correctIndex: 1,
        explanation: 'Section Break chia tài liệu thành các phân vùng độc lập, cho phép mỗi phân vùng sở hữu hướng giấy, lề, cột và header/footer hoàn toàn khác nhau.'
      },
      {
        id: 'wq-4-2',
        question: 'Tổ hợp phím tắt tiêu chuẩn nào dùng để chèn nhanh dấu ngắt trang (Page Break) sang trang mới ngay lập tức?',
        options: ['Shift + Enter', 'Ctrl + Enter', 'Alt + Enter', 'Ctrl + Shift + Enter'],
        correctIndex: 1,
        explanation: 'Ctrl + Enter là phím tắt của Page Break. (Shift + Enter là ngắt dòng Line Break, Ctrl + Shift + Enter là ngắt cột Column Break).'
      },
      {
        id: 'wq-4-3',
        question: 'Khi muốn ngắt sự liên kết của đầu trang (Header) ở phân vùng số 2 để không bị phụ thuộc vào phân vùng số 1, nút lệnh nào trên thanh công cụ cần phải tắt?',
        options: ['Different First Page', 'Link to Previous', 'Show Document Text', 'Go to Header'],
        correctIndex: 1,
        explanation: 'Nút "Link to Previous" (Liên kết với phân vùng trước) khi được tắt sẽ cho phép phân vùng hiện tại có nội dung header/footer độc lập.'
      },
      {
        id: 'wq-4-4',
        question: 'Khi tạo hình mờ văn bản (Text Watermark), tùy chọn "Semitransparent" có tác dụng gì?',
        options: ['Làm cho chữ có màu đen đặc', 'Làm cho chữ trong suốt một phần mờ ảo', 'Xoay nghiêng chữ 45 độ', 'Làm cho chữ nổi khối 3D'],
        correctIndex: 1,
        explanation: 'Semitransparent làm cho chữ mờ ảo bán trong suốt, đảm bảo hình mờ không che lấp mất nội dung văn bản chính phía trên.'
      }
    ]
  },

  // =========================================================================
  // BÀI 5: PHÂN PHỐI & HIỆU ĐÍNH TÀI LIỆU
  // =========================================================================
  {
    id: 'word-lesson-5',
    moduleId: 'word',
    order: 5,
    title: 'Phân Phối & Hiệu Đính Tài Liệu',
    summary: 'Công cụ soát lỗi chính tả & ngữ pháp Proofing, ngăn điều hướng Navigation Pane, siêu liên kết Hyperlinks, thiết lập in ấn nâng cao Print Setup và kiểm tra an toàn tài liệu (Document Inspector, Accessibility, Compatibility).',
    durationMinutes: 25,
    theories: [
      {
        id: 'wt-5-1',
        title: 'Soát Lỗi Chính Tả (Proofing), Từ Điển & Tự Động Sửa Lỗi',
        concept: 'Word tích hợp bộ công cụ hiệu đính (Proofing tools) mạnh mẽ giúp kiểm tra lỗi chính tả (Spelling), lỗi ngữ pháp (Grammar), đếm số từ (Word Count) và hệ thống viết tắt tự động thay thế AutoCorrect.',
        keyPoints: [
          'Kiểm tra chính tả & ngữ pháp: Tab Review > nhóm Proofing > nút Spelling & Grammar (hoặc nhấn phím F7).',
          '- Đường gợn sóng màu đỏ: Lỗi chính tả (từ không có trong từ điển).',
          '- Đường gợn sóng màu xanh lam: Lỗi ngữ pháp hoặc lỗi dùng từ ngữ cảnh.',
          'Các lựa chọn khi soát lỗi:',
          '- Ignore Once: Bỏ qua lỗi này tại vị trí hiện tại.',
          '- Ignore All: Bỏ qua từ này trên toàn bộ văn bản.',
          '- Add to Dictionary: Thêm từ riêng (ví dụ: tên riêng tiếng Việt) vào từ điển tùy chỉnh để không bao giờ bị báo đỏ nữa.',
          'AutoCorrect Options: Tự động sửa các lỗi gõ sai phổ biến hoặc gõ tắt (ví dụ: gõ "thpt" tự động đổi thành "Trung học phổ thông"). Cấu hình trong File > Options > Proofing > AutoCorrect Options.'
        ],
        shortcut: 'F7 để mở ngăn tác vụ kiểm tra chính tả và ngữ pháp Spelling & Grammar.',
        examTip: 'Trong bài thi tiếng Anh, đề bài thường yêu cầu Add a word to dictionary hoặc thiết lập AutoCorrect thay thế một từ viết tắt bằng cụm từ chỉ định.',
        checkpointQuestion: {
          question: 'Phím chức năng nào trên bàn phím dùng để kích hoạt nhanh công cụ kiểm tra chính tả và ngữ pháp (Spelling & Grammar)?',
          options: ['F4', 'F5', 'F7', 'F12'],
          correctIndex: 2,
          explanation: 'Phím F7 là phím tắt chuẩn của chức năng kiểm tra lỗi chính tả và ngữ pháp trên toàn bộ các ứng dụng Microsoft Office.'
        }
      },
      {
        id: 'wt-5-2',
        title: 'Điều Hướng Tài Liệu, Dấu Trang (Bookmarks) & Siêu Liên Kết (Hyperlinks)',
        concept: 'Để người đọc dễ dàng di chuyển nhanh giữa các phần trong tài liệu dài hoặc truy cập tài nguyên bên ngoài, Word cung cấp hệ thống liên kết phong phú gồm Navigation Pane, Bookmarks và Hyperlinks.',
        keyPoints: [
          'Ngăn điều hướng (Navigation Pane): Nhấn Ctrl + F > chọn tab Headings để xem cây phân cấp các tiêu đề và nhấp để nhảy đến trang tương ứng tức thì.',
          'Dấu trang (Bookmark): Đánh dấu một vị trí hoặc đoạn văn bản cụ thể để tham chiếu sau này.',
          '- Tạo Bookmark: Chọn văn bản > tab Insert > nhóm Links > Bookmark > đặt tên bookmark (lưu ý: tên không được chứa dấu cách khoảng trắng) > bấm Add.',
          'Siêu liên kết (Hyperlink): Tab Insert > nhóm Links > Link (Ctrl + K).',
          '- Existing File or Web Page: Liên kết đến trang web hoặc tệp tin khác trên máy tính.',
          '- Place in This Document: Liên kết nhảy đến một tiêu đề Heading hoặc một Bookmark đã tạo sẵn.',
          '- E-mail Address: Mở ứng dụng gửi thư điện tử.'
        ],
        shortcut: 'Ctrl + K để mở hộp thoại chèn siêu liên kết Hyperlink; Ctrl + F để mở Navigation Pane.',
        examTip: 'Đề thi MOS rất thường yêu cầu tạo Bookmark với tên cho trước (chú ý gõ đúng chữ hoa/thường và không có dấu cách), sau đó tạo Hyperlink tại một từ khác trỏ tới Bookmark vừa tạo (chọn Place in This Document).',
        checkpointQuestion: {
          question: 'Quy tắc bắt buộc nào sau đây phải tuân thủ khi đặt tên cho một dấu trang (Bookmark) trong Microsoft Word?',
          options: ['Tên phải bắt đầu bằng chữ số', 'Tên không được chứa dấu cách khoảng trắng', 'Tên không được dài quá 5 ký tự', 'Tên phải viết bằng chữ in hoa toàn bộ'],
          correctIndex: 1,
          explanation: 'Tên Bookmark trong Word bắt buộc phải bắt đầu bằng một chữ cái và tuyệt đối không được chứa ký tự dấu cách (space).'
        }
      },
      {
        id: 'wt-5-3',
        title: 'Thiết Lập In Ấn Nâng Cao (Print Setup)',
        concept: 'Màn hình Print trong Backstage View (File > Print) cung cấp bản xem trước trang in (Print Preview) cùng các tùy chọn điều khiển lệnh in chuyên nghiệp trước khi xuất lệnh ra máy in vật lý.',
        keyPoints: [
          'Xem trước khi in (Print Preview): Cửa sổ bên phải hiển thị chính xác trang in, cho phép cuộn xem từng trang và phóng to/thu nhỏ.',
          'Phạm vi in (Settings):',
          '- Print All Pages: In toàn bộ tài liệu.',
          '- Print Current Page: Chỉ in đúng trang mà con trỏ soạn thảo đang đứng.',
          '- Custom Print: Nhập các trang cụ thể cần in, ví dụ: "1, 3, 5-8" (in trang 1, trang 3 và từ trang 5 đến trang 8).',
          'In hai mặt (Print on Both Sides): In thủ công hoặc tự động lật theo cạnh dài (Flip on long edge) hoặc lật cạnh ngắn (Flip on short edge).',
          'Sắp xếp bộ trang in (Collate):',
          '- Collated (1,2,3; 1,2,3): In trọn vẹn từng bộ tài liệu từ đầu đến cuối trước khi in bộ tiếp theo.',
          '- Uncollated (1,1; 2,2; 3,3): In toàn bộ các bản của trang 1 rồi mới in sang trang 2.',
          'Số trang trên mỗi tờ giấy (Pages Per Sheet): Cho phép ghép 2, 4, 6, 8 trang văn bản lên cùng 1 mặt giấy để tiết kiệm giấy in.'
        ],
        shortcut: 'Ctrl + P để mở nhanh màn hình in ấn Print.',
        examTip: 'Khi đề bài yêu cầu cấu hình in chỉ in các trang lẻ hoặc in 2 trang trên 1 tờ giấy (2 Pages Per Sheet), bạn cấu hình trực tiếp trong menu Settings của màn hình Print.',
        checkpointQuestion: {
          question: 'Khi in 3 bản sao của một tài liệu gồm 5 trang, chế độ "Collated" sẽ xuất các trang ra máy in theo thứ tự nào?',
          options: ['Trang 1,1,1; 2,2,2; 3,3,3...', 'In trọn vẹn tập 1 (1,2,3,4,5), sau đó in tiếp tập 2 và tập 3', 'In các trang chẵn trước rồi đến trang lẻ', 'In ngẫu nhiên theo tốc độ máy in'],
          correctIndex: 1,
          explanation: 'Chế độ Collated sắp xếp in lần lượt từng bộ tài liệu hoàn chỉnh (tập 1: trang 1->5, tập 2: trang 1->5, tập 3: trang 1->5) rất thuận tiện cho việc đóng gáy tập.'
        }
      },
      {
        id: 'wt-5-4',
        title: 'Kiểm Tra An Toàn & Bảo Mật: Inspect, Accessibility & Compatibility',
        concept: 'Trước khi phân phối văn bản cho đối tác hoặc công chúng, Word cung cấp 3 công cụ rà soát quan trọng trong File > Info > Check for Issues để đảm bảo tài liệu không bị lộ thông tin nhạy cảm, thân thiện với người khiếm thị và tương thích phiên bản cũ.',
        keyPoints: [
          'Inspect Document (Rà soát tài liệu):',
          '- Quét và loại bỏ các thông tin ẩn nhạy cảm: bình luận (Comments), lịch sử sửa đổi (Revisions), thông tin thuộc tính cá nhân (Document Properties and Personal Information), tiêu đề chân trang ẩn...',
          '- Nhấn nút "Remove All" để loại bỏ vĩnh viễn các mục tìm thấy.',
          'Check Accessibility (Kiểm tra khả năng tiếp cận):',
          '- Tìm các yếu tố gây khó khăn cho người khiếm thị sử dụng máy đọc màn hình.',
          '- Các lỗi phổ biến: Thiếu văn bản thay thế cho hình ảnh (Missing Alternative Text), độ tương phản màu chữ kém (Hard-to-read text contrast)...',
          'Check Compatibility (Kiểm tra độ tương thích):',
          '- Rà soát các tính năng mới của Word 2019 có nguy cơ bị mất hoặc bị biến đổi khi mở bằng các phiên bản Word cũ hơn (Word 2003, 2007, 2010).'
        ],
        shortcut: 'Alt + F, I, C để mở nhanh danh sách Check for Issues trong Backstage Info.',
        examTip: 'Đề thi MOS 100% có câu hỏi: "Use Document Inspector to inspect the document and remove all Document Properties and Personal Information. Do not remove other items." - Hãy bỏ qua các mục khác và chỉ bấm Remove All ở đúng mục được yêu cầu.',
        checkpointQuestion: {
          question: 'Để loại bỏ toàn bộ các thông tin cá nhân của tác giả (Author) và thuộc tính ẩn của tệp trước khi gửi ra bên ngoài mà không làm mất nội dung văn bản, ta dùng công cụ nào?',
          options: ['Accessibility Checker', 'Document Inspector (Check for Issues)', 'Compatibility Checker', 'Clear All Formatting'],
          correctIndex: 1,
          explanation: 'Document Inspector tại File > Info > Check for Issues cho phép kiểm tra và xóa bỏ toàn bộ thuộc tính ẩn và thông tin cá nhân của tệp.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-5-1',
        title: 'Chèn Siêu Liên Kết (Hyperlink) Vào Văn Bản',
        instruction: 'Tạo liên kết Hyperlink trỏ tới địa chỉ trang web hoặc dấu trang trong tài liệu.',
        hint: 'Bôi đen từ cần liên kết > vào tab Insert > nhóm Links > bấm chọn nút Link (Ctrl+K).',
        targetType: 'ribbon-action',
        actionKey: 'word-insert-hyperlink'
      },
      {
        id: 'wtask-5-2',
        title: 'Chèn Dấu Ngắt Vùng Liên Tục (Continuous Section Break)',
        instruction: 'Chèn một dấu ngắt vùng Continuous Break để phân tách đoạn văn bản hiện tại.',
        hint: 'Vào tab Layout > nhóm Page Setup > Breaks > chọn Continuous.',
        targetType: 'ribbon-action',
        actionKey: 'word-break-continuous'
      },
      {
        id: 'wtask-5-3',
        title: 'Kích Hoạt Tùy Chọn Trang Đầu Khác Biệt (Different First Page)',
        instruction: 'Bật tùy chọn Different First Page trong công cụ Header & Footer.',
        hint: 'Nhấp đúp vào vùng Header/Footer hoặc chọn tab Layout > Page Setup > Different First Page.',
        targetType: 'ribbon-action',
        actionKey: 'word-different-first-page'
      }
    ],
    quiz: [
      {
        id: 'wq-5-1',
        question: 'Công cụ nào trong Microsoft Word có nhiệm vụ phát hiện các hình ảnh thiếu mô tả văn bản thay thế (Alt Text) dành cho người khiếm thị sử dụng máy đọc màn hình?',
        options: ['Document Inspector', 'Accessibility Checker', 'Compatibility Checker', 'Proofing Tool'],
        correctIndex: 1,
        explanation: 'Accessibility Checker (Kiểm tra khả năng tiếp cận) chuyên rà soát các vấn đề hỗ trợ người khuyết tật, điển hình là hình ảnh thiếu Alt Text.'
      },
      {
        id: 'wq-5-2',
        question: 'Trong thiết lập in ấn, tùy chọn "Print Current Page" có ý nghĩa gì?',
        options: [
          'In toàn bộ các trang của tài liệu',
          'Chỉ in duy nhất trang hiện tại đang chứa con trỏ soạn thảo',
          'Chỉ in các trang có chứa hình ảnh',
          'In trang đầu tiên của văn bản'
        ],
        correctIndex: 1,
        explanation: 'Print Current Page chỉ ra lệnh in đúng một trang giấy nơi con trỏ soạn thảo đang đứng.'
      },
      {
        id: 'wq-5-3',
        question: 'Khi sử dụng Document Inspector, nếu đề bài yêu cầu "Do not remove any other inspected content", bạn cần xử lý thế nào?',
        options: [
          'Nhấp Remove All ở tất cả các mục',
          'Chỉ nhấp nút Remove All ở đúng danh mục mà đề bài chỉ định, để nguyên các mục còn lại',
          'Tắt hộp thoại không kiểm tra nữa',
          'Xóa thủ công từng dòng chữ trong văn bản'
        ],
        correctIndex: 1,
        explanation: 'Quy tắc thi MOS nghiêm ngặt: chỉ bấm nút Remove All ở chính xác danh mục được yêu cầu (ví dụ: Document Properties), không bấm ở các mục khác.'
      },
      {
        id: 'wq-5-4',
        question: 'Để kiểm tra xem tài liệu Word 2019 có chứa tính năng nào không được hỗ trợ bởi các phiên bản Word 2003 hoặc 2010 hay không, ta chọn công cụ nào?',
        options: ['Check Compatibility', 'Inspect Document', 'Check Accessibility', 'Convert Document'],
        correctIndex: 0,
        explanation: 'Check Compatibility (Kiểm tra độ tương thích) phát hiện và thông báo các thành phần không tương thích với phiên bản Word cũ.'
      }
    ]
  },

  // =========================================================================
  // BÀI 6: SỬ DỤNG BẢNG (TABLES)
  // =========================================================================
  {
    id: 'word-lesson-6',
    moduleId: 'word',
    order: 6,
    title: 'Sử Dụng Bảng (Tables)',
    summary: 'Tạo bảng, cấu trúc hàng/cột/ô, gộp ô Merge & tách ô Split, căn chỉnh kích thước AutoFit, 9 vị trí căn lề trong ô, kiểu bảng Table Styles, lặp lại tiêu đề Repeat Header Rows, chuyển đổi qua lại giữa văn bản và bảng, sắp xếp dữ liệu Sort.',
    durationMinutes: 30,
    theories: [
      {
        id: 'wt-6-1',
        title: 'Tạo Bảng & Chuyển Đổi Văn Bản Thành Bảng (Convert Text to Table)',
        concept: 'Bảng (Table) là cấu trúc gồm các hàng (Rows) và cột (Columns) giao nhau tạo thành các ô (Cells) dùng để tổ chức thông tin trực quan, khoa học. Word hỗ trợ tạo bảng trực tiếp hoặc chuyển đổi khối văn bản có sẵn thành bảng.',
        keyPoints: [
          'Chèn bảng mới: Tab Insert > nhóm Tables > nút Table > rê chuột chọn số hàng/cột trên lưới ma trận hoặc chọn "Insert Table..." để nhập số cột (Number of columns) và số hàng (Number of rows).',
          'Chuyển văn bản thành bảng (Convert Text to Table):',
          '- Bôi đen đoạn văn bản được phân tách bằng dấu phẩy, dấu chấm phẩy hoặc dấu Tab.',
          '- Vào Insert > Table > Convert Text to Table...',
          '- Mục "Separate text at": Chọn dấu phân tách tương ứng (Commas, Tabs, Paragraphs hoặc Other).',
          'Chuyển bảng thành văn bản (Convert Table to Text):',
          '- Chọn bảng > tab Table Tools Layout > nhóm Data > Convert to Text > chọn dấu phân cách các cột (Tabs, Commas...).'
        ],
        shortcut: 'Bấm phím Tab ở ô cuối cùng phía dưới bên phải của bảng để tự động sinh thêm một hàng mới.',
        examTip: 'Đề thi MOS rất hay có câu: "Convert the tab-delimited text below into a table with 4 columns. Apply AutoFit to Window". Cần chọn đúng Separate text at = Tabs và tùy chọn AutoFit to Window.',
        checkpointQuestion: {
          question: 'Khi chuyển đổi một đoạn văn bản có sẵn thành bảng (Convert Text to Table), tùy chọn nào xác định ký tự ngăn cách giữa các cột dữ liệu?',
          options: ['Table size', 'AutoFit behavior', 'Separate text at', 'Column width'],
          correctIndex: 2,
          explanation: 'Mục "Separate text at" trong hộp thoại Convert Text to Table cho phép chọn dấu ngăn cách giữa các cột (Tabs, Commas, Paragraphs...).'
        }
      },
      {
        id: 'wt-6-2',
        title: 'Hiệu Chỉnh Cấu Trúc Bảng: Thêm/Xóa, Gộp & Tách Ô',
        concept: 'Khi làm việc với bảng, hai thẻ phụ ngữ cảnh (Contextual Tabs) sẽ xuất hiện trên Ribbon: Table Design (thiết kế kiểu dáng) và Layout (cấu trúc và căn chỉnh).',
        keyPoints: [
          'Thêm hàng và cột: Tab Layout > nhóm Rows & Columns:',
          '- Insert Above (Chèn hàng lên trên), Insert Below (Chèn hàng xuống dưới).',
          '- Insert Left (Chèn cột sang trái), Insert Right (Chèn cột sang phải).',
          'Xóa thành phần: Nút Delete > chọn Delete Cells, Delete Columns, Delete Rows, hoặc Delete Table.',
          'Gộp ô (Merge Cells): Chọn từ 2 ô liền kề trở lên > Layout > Merge Cells để hợp nhất thành 1 ô duy nhất.',
          'Tách ô (Split Cells): Chọn ô cần tách > Layout > Split Cells > nhập số cột và số hàng muốn phân chia.',
          'Tách bảng (Split Table): Đặt con trỏ tại hàng muốn bắt đầu bảng mới > Layout > Split Table (phím tắt Ctrl + Shift + Enter).'
        ],
        shortcut: 'Ctrl + Shift + Enter khi con trỏ ở trong hàng của bảng sẽ tách bảng thành hai bảng độc lập.',
        examTip: 'Để xóa nội dung trong bảng mà vẫn giữ lại khung lưới bảng: bôi đen các ô và nhấn phím Delete. Nếu muốn xóa cả hàng/cột khỏi bảng: bôi đen và nhấn phím Backspace.',
        checkpointQuestion: {
          question: 'Muốn hợp nhất 3 ô nằm ngang liên tiếp trên hàng tiêu đề của bảng thành một ô duy nhất, ta chọn lệnh nào?',
          options: ['Split Cells', 'Merge Cells', 'Combine Table', 'Group Cells'],
          correctIndex: 1,
          explanation: 'Lệnh Merge Cells (tab Layout của Table Tools) dùng để hợp nhất các ô được chọn thành một ô duy nhất.'
        }
      },
      {
        id: 'wt-6-3',
        title: 'Kích Thước Bảng, AutoFit & 9 Vị Trí Căn Lề Trong Ô',
        concept: 'Căn chỉnh kích thước và nội dung trong ô giúp bảng biểu cân đối, chuyên nghiệp. Một ô trong Word hỗ trợ 9 vị trí căn lề kết hợp giữa phương ngang (trái, giữa, phải) và phương dọc (trên, giữa, dưới).',
        keyPoints: [
          'Chế độ tự động co giãn AutoFit (tab Layout > nhóm Cell Size):',
          '- AutoFit Contents: Co giãn chiều rộng cột vừa khít với độ dài dữ liệu văn bản chứa trong ô.',
          '- AutoFit Window: Mở rộng toàn bộ chiều rộng bảng bằng đúng khoảng cách giữa hai mép lề trang giấy.',
          '- Fixed Column Width: Cố định độ rộng cột theo kích thước chỉ định.',
          'Phân bố đều hàng và cột (Distribute):',
          '- Distribute Rows: Điều chỉnh tất cả các hàng được chọn có chiều cao bằng nhau tuyệt đối.',
          '- Distribute Columns: Điều chỉnh tất cả các cột được chọn có chiều rộng bằng nhau tuyệt đối.',
          '9 Vị trí căn lề ô (Alignment): Nằm trong nhóm Alignment trên tab Layout. Chuẩn tiêu đề bảng thường dùng Align Center (căn chính giữa cả ngang và dọc).',
          'Hướng chữ trong ô (Text Direction): Xoay văn bản 90 độ hoặc 270 độ để tiết kiệm diện tích cho các cột hẹp.'
        ],
        shortcut: 'Nhấp đúp chuột vào đường viền phân cách giữa 2 cột trên thước Ruler để AutoFit độ rộng cột vừa với nội dung dài nhất.',
        examTip: 'Đề thi MOS rất hay yêu cầu "Configure the table to automatically resize to fit window" -> Chọn bảng > Layout > AutoFit > AutoFit Window. Hoặc "Set cell alignment to Align Center".',
        checkpointQuestion: {
          question: 'Một ô (Cell) trong bảng biểu Microsoft Word hỗ trợ tối đa bao nhiêu vị trí căn lề (Alignment) nội dung?',
          options: ['4 vị trí', '6 vị trí', '9 vị trí', '12 vị trí'],
          correctIndex: 2,
          explanation: 'Có 9 vị trí căn lề trong ô (kết hợp 3 vị trí ngang: Trái, Giữa, Phải với 3 vị trí dọc: Trên, Giữa, Dưới).'
        }
      },
      {
        id: 'wt-6-4',
        title: 'Kiểu Bảng (Table Styles), Lặp Lại Dòng Tiêu Đề & Sắp Xếp Dữ Liệu',
        concept: 'Thẻ Table Design cung cấp các mẫu phối màu chuyên nghiệp có sẵn. Tính năng Repeat Header Rows tự động nhân bản dòng tiêu đề khi bảng biểu kéo dài qua nhiều trang, và công cụ Sort giúp sắp xếp thứ tự dữ liệu bảng.',
        keyPoints: [
          'Áp dụng Table Styles: Chọn bảng > tab Table Design > chọn mẫu phong cách trong thư viện Table Styles (ví dụ: Grid Table 4 - Accent 1).',
          'Tùy chọn kiểu dáng (Table Style Options):',
          '- Header Row: Tô đậm và làm nổi bật dòng tiêu đề đầu tiên.',
          '- Total Row: Thêm định dạng hàng tổng kết ở cuối bảng.',
          '- Banded Rows / Banded Columns: Tô màu so le giữa các dòng/cột xen kẽ giúp người đọc không bị hoa mắt.',
          '- First Column / Last Column: Định dạng nổi bật cột đầu tiên hoặc cột cuối cùng.',
          'Lặp lại dòng tiêu đề bảng (Repeat Header Rows):',
          '- Đặt con trỏ ở dòng tiêu đề > tab Layout > nhóm Data > nhấp chọn "Repeat Header Rows". Khi bảng tràn sang trang 2, trang 3, dòng tiêu đề sẽ tự động hiển thị ở đầu mỗi trang.',
          'Sắp xếp bảng (Sort Table): Tab Layout > nhóm Data > Sort > chọn cột cần sắp xếp (Sort by), kiểu dữ liệu (Text, Number, Date), thứ tự Ascending (tăng dần A-Z) hoặc Descending (giảm dần Z-A).'
        ],
        shortcut: 'Alt + J, L, V để bật/tắt nhanh tính năng Repeat Header Rows.',
        examTip: 'Câu hỏi kinh điển trong đề thi MOS: "Configure the header row of Table 1 to repeat across pages". Bạn chỉ cần đặt con trỏ vào hàng tiêu đề đầu tiên của bảng và bấm nút "Repeat Header Rows" trên tab Layout.',
        checkpointQuestion: {
          question: 'Tính năng nào giúp dòng tiêu đề của một bảng biểu tự động hiển thị lặp lại ở đầu trang tiếp theo khi bảng dài tràn qua nhiều trang?',
          options: ['Header & Footer (Insert)', 'Repeat Header Rows (Table Tools Layout)', 'Split Table', 'AutoFit Window'],
          correctIndex: 1,
          explanation: 'Repeat Header Rows trong nhóm Data của thẻ Table Tools Layout tự động nhân bản dòng tiêu đề bảng ở mỗi trang mới.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-6-1',
        title: 'Chèn Bảng Biểu Tiêu Chuẩn Vào Văn Bản',
        instruction: 'Thực hiện chèn một bảng biểu mới vào vị trí con trỏ soạn thảo.',
        hint: 'Nhấp chọn tab Insert trên Ribbon > nhóm Tables > nhấp biểu tượng Table.',
        targetType: 'ribbon-action',
        actionKey: 'word-insert-table'
      },
      {
        id: 'wtask-6-2',
        title: 'Hợp Nhất Các Ô Trong Bảng (Merge Cells)',
        instruction: 'Bôi đen các ô liền kề và thực hiện hợp nhất thành một ô duy nhất.',
        hint: 'Chọn các ô cần gộp > chuyển sang tab Table Tools Layout > nhấp nút Merge Cells.',
        targetType: 'ribbon-action',
        actionKey: 'word-merge-cells'
      },
      {
        id: 'wtask-6-3',
        title: 'Bật Lặp Lại Dòng Tiêu Đề Bảng (Repeat Header Rows)',
        instruction: 'Cấu hình để hàng tiêu đề của bảng tự động lặp lại ở đầu mỗi trang mới.',
        hint: 'Đặt con trỏ ở hàng đầu tiên của bảng > vào tab Layout > nhóm Data > nhấp Repeat Header Rows.',
        targetType: 'ribbon-action',
        actionKey: 'word-repeat-header'
      }
    ],
    quiz: [
      {
        id: 'wq-6-1',
        question: 'Khi con trỏ soạn thảo đang đứng ở ô cuối cùng phía dưới bên phải của một bảng biểu, nhấn phím nào sẽ tự động chèn thêm một hàng mới?',
        options: ['Phím Enter', 'Phím Tab', 'Phím Space', 'Phím Shift'],
        correctIndex: 1,
        explanation: 'Nhấn phím Tab tại ô cuối cùng của bảng là phím tắt nhanh nhất để tạo thêm một hàng mới ở dưới cùng.'
      },
      {
        id: 'wq-6-2',
        question: 'Tùy chọn "Banded Rows" trong nhóm Table Style Options có tác dụng gì đối với bảng?',
        options: [
          'Khóa các hàng không cho chỉnh sửa',
          'Tô màu nền xen kẽ so le giữa các hàng chẵn và hàng lẻ để dễ đọc',
          'Gộp tất cả các hàng thành một khối',
          'Ẩn các đường viền ngang của hàng'
        ],
        correctIndex: 1,
        explanation: 'Banded Rows tạo màu nền xen kẽ giữa các dòng liên tiếp, giúp mắt người đọc dễ dàng theo dõi dữ liệu trên từng hàng mà không bị nhầm dòng.'
      },
      {
        id: 'wq-6-3',
        question: 'Để toàn bộ các cột được chọn trong bảng có độ rộng bằng nhau một cách tuyệt đối, ta sử dụng nút lệnh nào?',
        options: ['AutoFit Contents', 'Distribute Columns', 'Distribute Rows', 'Align Center'],
        correctIndex: 1,
        explanation: 'Distribute Columns (tab Layout) chia đều tổng chiều rộng cho các cột được chọn để chúng có kích cỡ hoàn toàn bằng nhau.'
      },
      {
        id: 'wq-6-4',
        question: 'Muốn xóa toàn bộ nội dung chữ số bên trong các ô của bảng nhưng vẫn giữ nguyên vẹn khung bảng, thao tác chuẩn là gì?',
        options: ['Chọn các ô và nhấn phím Backspace', 'Chọn các ô và nhấn phím Delete', 'Chọn bảng và vào Layout > Delete Table', 'Nhấn Ctrl + X'],
        correctIndex: 1,
        explanation: 'Phím Delete chỉ xóa dữ liệu bên trong các ô được chọn; trong khi phím Backspace sẽ xóa luôn cả hàng hoặc cột ra khỏi cấu trúc bảng.'
      }
    ]
  },

  // =========================================================================
  // BÀI 7: LÀM VIỆC VỚI HÌNH ẢNH MINH HỌA (ILLUSTRATIONS & GRAPHICS)
  // =========================================================================
  {
    id: 'word-lesson-7',
    moduleId: 'word',
    order: 7,
    title: 'Làm Việc Với Hình Ảnh Minh Họa (Illustrations & Graphics)',
    summary: 'Chèn và hiệu chỉnh ảnh Pictures, chụp màn hình Screenshots, định vị Position & bọc chữ Wrap Text, kiểu ảnh Picture Styles, xóa phông nền Remove Background, Alt Text, hình vẽ Shapes, hộp văn bản Text Boxes, đồ họa SmartArt và mô hình 3D Models.',
    durationMinutes: 30,
    theories: [
      {
        id: 'wt-7-1',
        title: 'Chèn & Hiệu Chỉnh Hình Ảnh (Pictures, Screenshots & Screen Clippings)',
        concept: 'Hình ảnh minh họa làm tăng tính trực quan và thẩm mỹ cho văn bản. Word 2019 cho phép chèn ảnh từ máy tính (This Device), ảnh trực tuyến, chụp nhanh cửa sổ đang mở (Screenshot) hoặc cắt một góc màn hình (Screen Clipping).',
        keyPoints: [
          'Chèn ảnh: Tab Insert > nhóm Illustrations > nút Pictures > chọn "This Device" (ảnh trên máy) hoặc "Stock Images / Online Pictures".',
          'Chụp màn hình (Screenshot): Insert > Screenshot > chọn một cửa sổ có sẵn trong "Available Windows", hoặc chọn "Screen Clipping" để tự khoanh vùng màn hình cần chụp.',
          'Cắt xén ảnh (Crop): Chọn ảnh > tab Picture Format > nút Crop. Kéo các góc đen để xén bỏ viền thừa, hoặc chọn "Crop to Shape" để xén ảnh theo khung hình tròn, trái tim, ngôi sao.',
          'Xóa phông nền ảnh (Remove Background): Tab Picture Format > nút Remove Background ở góc trái:',
          '- Mark Areas to Keep (bút xanh): Đánh dấu các vùng muốn giữ lại.',
          '- Mark Areas to Remove (bút đỏ): Đánh dấu các vùng phông nền muốn xóa bỏ.',
          '- Keep Changes: Hoàn tất việc xóa nền.'
        ],
        shortcut: 'Giữ phím Shift trong khi kéo các chốt tròn ở 4 góc ảnh để thay đổi kích thước mà không làm méo tỷ lệ khung hình.',
        examTip: 'Khi đề bài yêu cầu thay đổi kích thước ảnh chính xác (ví dụ: Height = 5 cm, Width = 8 cm), hãy mở hộp thoại Size (nút mở rộng góc nhóm Size) và bỏ tích chọn "Lock aspect ratio" nếu đề bài yêu cầu hai số đo không đồng tỉ lệ.',
        checkpointQuestion: {
          question: 'Để cắt xén một bức ảnh hình chữ nhật thành một khung hình elip hoặc hình ngôi sao trong Word 2019, tính năng nào được sử dụng?',
          options: ['Picture Styles', 'Crop to Shape (trong menu Crop)', 'Artistic Effects', 'Remove Background'],
          correctIndex: 1,
          explanation: 'Lựa chọn Crop > Crop to Shape trên thẻ Picture Format cho phép cắt xén ảnh theo đường viền của bất kỳ hình vẽ hình học nào.'
        }
      },
      {
        id: 'wt-7-2',
        title: 'Định Vị (Position) & Các Chế Độ Bọc Chữ (Wrap Text)',
        concept: 'Mặc định hình ảnh chèn vào Word ở dạng In Line with Text (nằm trên một dòng chữ như một ký tự lớn). Để di chuyển ảnh trôi nổi tự do và cho chữ uốn quanh ảnh, ta phải thay đổi chế độ Wrap Text.',
        keyPoints: [
          'Biểu tượng Layout Options: Xuất hiện ở góc trên bên phải của ảnh khi được chọn.',
          'Các chế độ Wrap Text (tab Picture Format > nhóm Arrange > Wrap Text):',
          '- In Line with Text: Nằm thẳng hàng với văn bản (không kéo thả tự do được).',
          '- Square: Chữ bao bọc xung quanh ảnh tạo thành một khối hình chữ nhật vuông vắn.',
          '- Tight: Chữ ôm sát theo đường viền thực tế của hình ảnh.',
          '- Through: Chữ len lỏi qua các khoảng trống bên trong ảnh.',
          '- Top and Bottom: Chữ chỉ nằm ở phía trên và phía dưới ảnh, không có chữ nằm hai bên hông.',
          '- Behind Text: Ảnh chìm xuống làm nền, chữ nằm đè lên trên ảnh.',
          '- In Front of Text: Ảnh nổi trôi tự do và che khuất chữ bên dưới.',
          'Định vị tự động (Position): Đặt ảnh vào các vị trí chuẩn mực của trang (Top Left, Top Center, Middle Center, Bottom Right...).'
        ],
        shortcut: 'Alt + P, T, W để mở nhanh menu tùy chọn Wrap Text.',
        examTip: 'Đề thi MOS cực kỳ hay yêu cầu: "Apply Tight text wrapping to the image" hoặc "Position the image in the Bottom Right with Square Text Wrapping". Cần vào đúng thẻ Picture Format > nhóm Arrange.',
        checkpointQuestion: {
          question: 'Chế độ Wrap Text nào cho phép văn bản uốn lượn ôm sát theo đường viền thực tế của đối tượng hình ảnh thay vì bao thành khối chữ nhật?',
          options: ['In Line with Text', 'Square', 'Tight', 'Top and Bottom'],
          correctIndex: 2,
          explanation: 'Chế độ Tight (ôm sát) cho phép các dòng chữ uốn lượn bám sát vào đường biên thực của hình ảnh đồ họa.'
        }
      },
      {
        id: 'wt-7-3',
        title: 'Kiểu Ảnh (Picture Styles), Hiệu Ứng Nghệ Thuật & Alt Text',
        concept: 'Thẻ Picture Format cung cấp bộ sưu tập Picture Styles giúp biến ảnh thô thành tác phẩm nghệ thuật có khung viền, bóng đổ hoặc phản chiếu gương. Văn bản thay thế (Alt Text) là tiêu chuẩn bắt buộc giúp người khiếm thị hiểu được nội dung ảnh.',
        keyPoints: [
          'Picture Styles: Bộ sưu tập có sẵn gồm Simple Frame (khung viền trắng/đen), Beveled Oval (hình bầu dục vát cạnh), Drop Shadow Rectangle (bóng đổ)...',
          'Hiệu ứng hình ảnh (Picture Effects): Preset, Shadow (bóng mờ), Reflection (phản chiếu), Glow (phát sáng), Soft Edges (làm mềm mép ảnh), Bevel (vát nổi 3D), 3D Rotation.',
          'Hiệu ứng nghệ thuật (Artistic Effects): Giả lập tranh vẽ chì (Pencil Grayscale), màu nước (Watercolor Sponge), tranh sơn dầu, kính mờ...',
          'Văn bản thay thế (Alt Text): Nhấp chuột phải vào ảnh > chọn "Edit Alt Text..." (hoặc bấm nút Alt Text trên tab Picture Format) > nhập nội dung mô tả bức ảnh vào ô Description. Tích "Mark as decorative" nếu ảnh chỉ mang tính trang trí thuần túy.'
        ],
        shortcut: 'Alt + J, P, A để mở nhanh ngăn tác vụ Alt Text.',
        examTip: 'Trong bài thi MOS, yêu cầu thêm Alt Text vào ảnh, hình vẽ hoặc bảng xuất hiện ở gần như mọi bài thi. Nhập đúng văn bản vào ô Description (không nhập vào ô Title nếu có).',
        checkpointQuestion: {
          question: 'Thuộc tính nào của hình ảnh cần phải được thiết lập để phần mềm đọc màn hình có thể mô tả nội dung bức ảnh cho người dùng khiếm thị?',
          options: ['Picture Title', 'Alternative Text (Alt Text)', 'ScreenTip', 'Caption'],
          correctIndex: 1,
          explanation: 'Alt Text (Văn bản thay thế) là tiêu chuẩn trợ năng quốc tế để cung cấp bản mô tả âm thanh về đối tượng hình ảnh cho người khiếm thị.'
        }
      },
      {
        id: 'wt-7-4',
        title: 'Hình Vẽ (Shapes), Hộp Văn Bản (Text Boxes) & Chú Thích (Captions)',
        concept: 'Shapes cung cấp các khối hình học cơ bản (mũi tên, hình chữ nhật, ngôi sao, biểu tượng ghi chú). Text Box là hộp văn bản độc lập có thể đặt ở bất kỳ đâu trên trang. Caption tự động đánh số thứ tự cho hình ảnh trong báo cáo.',
        keyPoints: [
          'Vẽ hình (Shapes): Tab Insert > Shapes > chọn hình muốn vẽ > nhấp và kéo chuột trên trang.',
          '- Thêm chữ vào Shape: Nhấp chuột phải vào hình > chọn "Add Text" (hoặc nhấp đúp vào hình và gõ chữ).',
          '- Điểm vàng (Adjustment Handles): Kéo điểm màu vàng để thay đổi hình dáng đặc thù (ví dụ: độ nhọn mũi tên, độ bo tròn góc).',
          'Hộp văn bản (Text Box): Tab Insert > Text Box > chọn Simple Text Box hoặc Draw Text Box để vẽ theo kích thước ý muốn.',
          'Chèn chú thích hình ảnh tự động (Insert Caption):',
          '- Chọn ảnh > vào tab References > nhóm Captions > Insert Caption.',
          '- Chọn nhãn (Label): Figure (Hình), Table (Bảng), Equation (Công thức) hoặc bấm "New Label" để tạo nhãn tiếng Việt "Hình ảnh".',
          '- Vị trí (Position): Below selected item (dưới đối tượng) hoặc Above selected item (trên đối tượng).'
        ],
        shortcut: 'Giữ phím Shift trong khi vẽ hình chữ nhật để tạo hình vuông hoàn hảo, hoặc vẽ đường thẳng để giữ thẳng hàng tuyệt đối.',
        examTip: 'Đề thi MOS hay yêu cầu vẽ một hình khối (ví dụ: Rounded Rectangle), căn chỉnh kích thước cụ thể và áp dụng kiểu dáng Shape Style (ví dụ: Intense Effect - Blue, Accent 1).',
        checkpointQuestion: {
          question: 'Để tự động đánh số thứ tự minh họa (ví dụ: "Hình 1: Sơ đồ tổ chức") đi kèm bên dưới một bức ảnh trong tài liệu, ta dùng công cụ nào?',
          options: ['Insert Footnote', 'Insert Caption (References)', 'Add Text Box', 'Page Number'],
          correctIndex: 1,
          explanation: 'Insert Caption tại tab References dùng để đánh số thứ tự tự động và gắn chú thích tiêu đề cho bảng biểu, hình ảnh trong tài liệu.'
        }
      },
      {
        id: 'wt-7-5',
        title: 'Đồ Họa Thông Minh (SmartArt) & Mô Hình Không Gian 3D (3D Models)',
        concept: 'SmartArt là công cụ trực quan hóa thông tin dạng sơ đồ tổ chức, quy trình, chu trình hoặc phân cấp. Mô hình 3D cho phép chèn và xoay các vật thể không gian 3 chiều 360 độ trực tiếp trong tài liệu Word 2019.',
        keyPoints: [
          'Chèn SmartArt: Tab Insert > nhóm Illustrations > SmartArt > chọn nhóm sơ đồ: List (danh sách), Process (quy trình), Cycle (chu trình), Hierarchy (sơ đồ tổ chức phân cấp cây), Relationship, Matrix, Pyramid.',
          'Nhập nội dung SmartArt qua Text Pane: Nhấp vào mũi tên nhỏ ở mép trái SmartArt để mở Text Pane. Nhập từng dòng chữ, dùng phím Enter để thêm nhánh, phím Tab để hạ cấp (Demote), phím Shift + Tab để tăng cấp (Promote).',
          'Định dạng SmartArt: Tab SmartArt Design > Change Colors (bảng phối màu) và SmartArt Styles (hiệu ứng 3D, bóng đổ). Nút Right to Left đảo ngược hướng sơ đồ.',
          'Chèn & Định dạng mô hình 3D (3D Models):',
          '- Tab Insert > 3D Models > chọn mô hình từ tệp máy tính hoặc thư viện trực tuyến.',
          '- Xoay 3D: Dùng chuột kéo núm xoay ở chính giữa mô hình (3D Rotation Control) để quay tự do mọi góc độ, hoặc chọn các góc nhìn chuẩn trên tab 3D Model Format.'
        ],
        shortcut: 'Tab và Shift + Tab trong Text Pane của SmartArt để thăng cấp/hạ cấp nhanh các nút sơ đồ.',
        examTip: 'Đề thi MOS 2019 rất chuộng các câu hỏi về SmartArt (đặc biệt là kiểu sơ đồ Hierarchy hoặc Process), yêu cầu đổi màu Change Colors thành "Colorful - Accent Colors" và áp dụng Style "Polished" hoặc "Intense Effect".',
        checkpointQuestion: {
          question: 'Khi chỉnh sửa nội dung sơ đồ SmartArt, phím tắt nào dùng để hạ cấp một mục thành nhánh con của mục đứng trước nó trong Text Pane?',
          options: ['Phím Enter', 'Phím Tab', 'Phím Space', 'Phím Backspace'],
          correctIndex: 1,
          explanation: 'Nhấn phím Tab trong Text Pane của SmartArt sẽ hạ cấp (Demote) mục hiện tại thành nhánh con phân cấp cấp dưới.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-7-1',
        title: 'Chèn Đồ Họa Thông Minh (SmartArt Graphics)',
        instruction: 'Thực hiện chèn một sơ đồ đồ họa SmartArt vào vị trí con trỏ soạn thảo.',
        hint: 'Nhấp chọn tab Insert trên Ribbon > nhóm Illustrations > chọn SmartArt.',
        targetType: 'ribbon-action',
        actionKey: 'word-insert-smartart'
      },
      {
        id: 'wtask-7-2',
        title: 'Thiết Lập Chế Độ Bọc Văn Bản Dạng Vuông (Wrap Text Square)',
        instruction: 'Đặt chế độ bọc văn bản xung quanh hình ảnh thành kiểu Square.',
        hint: 'Chọn ảnh > vào tab Picture Format > nhóm Arrange > Wrap Text > chọn Square.',
        targetType: 'ribbon-action',
        actionKey: 'word-wrap-square'
      },
      {
        id: 'wtask-7-3',
        title: 'Chèn Chú Thích Tự Động Cho Hình Ảnh (Insert Caption)',
        instruction: 'Gắn nhãn chú thích tiêu đề tự động bên dưới đối tượng minh họa.',
        hint: 'Chọn đối tượng > chuyển sang tab References > nhóm Captions > Insert Caption.',
        targetType: 'ribbon-action',
        actionKey: 'word-insert-caption'
      }
    ],
    quiz: [
      {
        id: 'wq-7-1',
        question: 'Chế độ bọc chữ Wrap Text nào đặt hình ảnh nằm trôi nổi tự do phía trên và che khuất các dòng chữ nằm bên dưới?',
        options: ['Square', 'Behind Text', 'In Front of Text', 'Top and Bottom'],
        correctIndex: 2,
        explanation: 'In Front of Text đưa hình ảnh lên lớp trên cùng, trôi nổi tự do và che mất lớp văn bản nằm bên dưới.'
      },
      {
        id: 'wq-7-2',
        question: 'Muốn đảo ngược toàn bộ sơ đồ quy trình SmartArt từ trái sang phải thành từ phải sang trái chỉ với một cú nhấp chuột, ta dùng nút lệnh nào?',
        options: ['Reverse Order', 'Right to Left (SmartArt Design)', 'Flip Horizontal', 'Rotate 180'],
        correctIndex: 1,
        explanation: 'Nút "Right to Left" trên tab SmartArt Design lập tức đảo chiều luồng hiển thị của toàn bộ sơ đồ thông minh.'
      },
      {
        id: 'wq-7-3',
        question: 'Để giữ đúng tỷ lệ khung hình (chiều rộng và chiều cao không bị méo) khi dùng chuột kéo giãn kích thước một bức ảnh, ta giữ phím gì?',
        options: ['Phím Ctrl', 'Phím Shift', 'Phím Alt', 'Phím Tab'],
        correctIndex: 1,
        explanation: 'Giữ phím Shift trong khi kéo chốt góc của đối tượng đồ họa sẽ khóa cố định tỷ lệ chiều cao/chiều rộng ban đầu.'
      },
      {
        id: 'wq-7-4',
        question: 'Công cụ nào trong thẻ Picture Format cho phép loại bỏ tự động phần phong cảnh nền xung quanh chủ thể chính của bức ảnh?',
        options: ['Crop', 'Color Saturation', 'Remove Background', 'Soft Edges'],
        correctIndex: 2,
        explanation: 'Tính năng Remove Background phân tích thông minh và tách bỏ lớp phông nền để giữ lại chủ thể của hình ảnh.'
      }
    ]
  },

  // =========================================================================
  // BÀI 8: TẠO TÀI LIỆU THAM KHẢO VÀ CỘNG TÁC TÀI LIỆU (REFERENCES & COLLABORATION)
  // =========================================================================
  {
    id: 'word-lesson-8',
    moduleId: 'word',
    order: 8,
    title: 'Tạo Tài Liệu Tham Khảo Và Cộng Tác Tài Liệu (References & Collaboration)',
    summary: 'Chú thích chân trang Footnotes & Endnotes, trích dẫn Citations & Thư mục tham khảo Bibliography, mục lục tự động Table of Contents & Update TOC, bình luận Comments và chế độ theo dõi chỉnh sửa Track Changes.',
    durationMinutes: 30,
    theories: [
      {
        id: 'wt-8-1',
        title: 'Chú Thích Chân Trang (Footnotes) & Chú Thích Cuối Tài Liệu (Endnotes)',
        concept: 'Footnotes và Endnotes dùng để giải nghĩa thuật ngữ, cung cấp chú giải bổ sung hoặc trích dẫn nguồn gốc mà không làm gián đoạn mạch đọc chính của tài liệu.',
        keyPoints: [
          'Footnote (Chú thích chân trang): Xuất hiện ở lề dưới cùng của chính trang giấy chứa từ được chú thích. Ký hiệu đánh số thường là 1, 2, 3...',
          '- Chèn Footnote: Đặt con trỏ sau từ cần chú thích > tab References > nhóm Footnotes > Insert Footnote (phím tắt Alt + Ctrl + F).',
          'Endnote (Chú thích cuối): Xuất hiện tập trung ở trang cuối cùng của tài liệu (hoặc cuối phân vùng Section). Ký hiệu đánh số mặc định là chữ số La Mã nhỏ i, ii, iii...',
          '- Chèn Endnote: References > Insert Endnote (phím tắt Alt + Ctrl + D).',
          'Tùy biến Footnote and Endnote Dialog Box: Nhấp nút mở rộng góc nhóm Footnotes để cấu hình:',
          '- Chuyển đổi qua lại giữa Footnote và Endnote (Convert).',
          '- Định dạng số (Number format: 1,2,3 hoặc a,b,c hoặc i,ii,iii).',
          '- Đánh số liên tục toàn văn bản (Continuous) hoặc khởi động lại từ đầu ở mỗi trang (Restart each page) hay mỗi phân vùng (Restart each section).'
        ],
        shortcut: 'Alt + Ctrl + F để chèn nhanh Footnote; Alt + Ctrl + D để chèn nhanh Endnote.',
        examTip: 'Đề thi MOS thường yêu cầu: "At the end of the first paragraph, insert a Footnote that reads...". Hãy đặt con trỏ chuột ngay sau dấu chấm câu cuối đoạn và bấm Insert Footnote.',
        checkpointQuestion: {
          question: 'Điểm khác biệt căn bản về vị trí hiển thị giữa Chú thích chân trang (Footnote) và Chú thích cuối (Endnote) là gì?',
          options: [
            'Footnote ở đầu trang, Endnote ở cuối trang',
            'Footnote hiển thị ở đáy của trang hiện tại, còn Endnote hiển thị tập trung ở trang cuối cùng của tài liệu',
            'Footnote chỉ dùng cho hình ảnh, Endnote dùng cho văn bản',
            'Không có khác biệt nào về vị trí'
          ],
          correctIndex: 1,
          explanation: 'Footnote luôn được in ở chân của trang hiện tại; trong khi Endnote được gom lại và in ở phần kết thúc của toàn bộ tài liệu (hoặc cuối Section).'
        }
      },
      {
        id: 'wt-8-2',
        title: 'Trích Dẫn Nguồn (Citations) & Danh Mục Tham Khảo (Bibliography)',
        concept: 'Để tránh đạo văn và đáp ứng các tiêu chuẩn nghiên cứu học thuật, Word tích hợp sẵn công cụ quản lý trích dẫn khoa học theo các quy chuẩn quốc tế như APA, MLA, Chicago, Harvard...',
        keyPoints: [
          'Chọn chuẩn trích dẫn (Style): Tab References > nhóm Citations & Bibliography > hộp Style > chọn kiểu trích dẫn (phổ biến nhất là APA 6th/7th Edition hoặc MLA).',
          'Chèn nguồn trích dẫn mới (Add New Source):',
          '- References > Insert Citation > Add New Source...',
          '- Type of Source: Chọn loại nguồn (Book - Sách, Journal Article - Bài báo khoa học, Website - Trang web, Report - Báo cáo...).',
          '- Điền thông tin: Author (Tác giả), Title (Tên tác phẩm), Year (Năm xuất bản), City (Thành phố), Publisher (Nhà xuất bản).',
          'Chèn đối tượng giữ chỗ (Add New Placeholder): Tạo vị trí trích dẫn tạm thời để điền thông tin chi tiết nguồn sau.',
          'Quản lý danh mục nguồn (Manage Sources): Cho phép sao chép, chỉnh sửa hoặc xóa các nguồn trích dẫn trong danh mục Master List và Current List.',
          'Chèn danh mục tài liệu tham khảo tự động (Bibliography): References > Bibliography > chọn kiểu tiêu đề Bibliography, References, hoặc Works Cited.'
        ],
        shortcut: 'Alt + S, C để mở menu Insert Citation.',
        examTip: 'Trong bài thi MOS, đề bài có thể cho sẵn thông tin của một cuốn sách và yêu cầu bạn tạo một Source mới với chuẩn APA, sau đó chèn Citation tại vị trí chỉ định.',
        checkpointQuestion: {
          question: 'Chuẩn định dạng trích dẫn học thuật phổ biến nào thường được yêu cầu lựa chọn trong mục References > Style của bài thi MOS Word?',
          options: ['ISO 9001', 'APA hoặc MLA', 'Unicode', 'TCVN3'],
          correctIndex: 1,
          explanation: 'APA (American Psychological Association) và MLA (Modern Language Association) là hai phong cách trích dẫn nguồn chuẩn mực phổ biến nhất.'
        }
      },
      {
        id: 'wt-8-3',
        title: 'Mục Lục Tự Động (Table of Contents - TOC) & Cập Nhật Mục Lục',
        concept: 'Mục lục tự động (Table of Contents) quét toàn bộ tài liệu để thu thập các đề mục được gán kiểu dáng Heading (Heading 1, Heading 2, Heading 3...) và số trang tương ứng, tạo nên bảng mục lục tương tác chính xác tuyệt đối.',
        keyPoints: [
          'Nguyên tắc vàng: Muốn mục lục tự động nhận diện đề mục, các dòng tiêu đề trong văn bản bắt buộc phải được gán Style Heading 1 (chương lớn), Heading 2 (mục con), Heading 3...',
          'Chèn bảng mục lục tự động: Tab References > nhóm Table of Contents > nút Table of Contents > chọn mẫu "Automatic Table 1" hoặc "Automatic Table 2".',
          'Tùy biến mục lục (Custom Table of Contents):',
          '- Show page numbers: Hiển thị hoặc ẩn số trang.',
          '- Right align page numbers: Căn lề số trang thẳng hàng mép phải.',
          '- Tab leader: Chọn đường dẫn chấm chấm (....).',
          '- Show levels: Thiết lập số cấp độ đề mục hiển thị (mặc định là 3 cấp).',
          'Cập nhật mục lục (Update Table): Khi có thay đổi về nội dung hoặc số trang:',
          '- Nhấp vào bảng mục lục > bấm nút "Update Table..." (hoặc nhấn phím F9).',
          '- Update page numbers only: Chỉ cập nhật lại số trang (nhanh hơn).',
          '- Update entire table: Cập nhật lại toàn bộ bao gồm cả tiêu đề mới thêm và số trang mới.'
        ],
        shortcut: 'Phím F9 khi chọn bảng mục lục để cập nhật (Update) tức thời; giữ phím Ctrl + nhấp chuột vào mục bất kỳ trên mục lục để nhảy tới trang đó.',
        examTip: 'Đề thi MOS rất hay yêu cầu: "Add a Table of Contents to the beginning of the document using Automatic Table 1" hoặc "Update the entire table of contents". Thực hiện nhanh chóng tại tab References.',
        checkpointQuestion: {
          question: 'Điều kiện tiên quyết để tính năng Table of Contents có thể tự động thu thập và tạo bảng mục lục chính xác là gì?',
          options: [
            'Văn bản phải được in đậm toàn bộ',
            'Các tiêu đề đề mục phải được gán các kiểu dáng Heading (Heading 1, 2, 3...)',
            'Tài liệu phải có ít nhất 10 trang',
            'Phải chèn bảng biểu ở đầu trang'
          ],
          correctIndex: 1,
          explanation: 'Table of Contents hoạt động bằng cách quét các khối văn bản được định dạng theo cấu trúc Style Heading để xây dựng cây mục lục.'
        }
      },
      {
        id: 'wt-8-4',
        title: 'Bình Luận (Comments) & Cộng Tác Xem Xét Tài Liệu',
        concept: 'Bình luận (Comments) cho phép người duyệt tài liệu để lại các ghi chú, nhận xét hoặc câu hỏi phản hồi bên lề phải văn bản mà không làm thay đổi trực tiếp nội dung bài viết.',
        keyPoints: [
          'Thêm bình luận mới (New Comment): Chọn khối văn bản cần góp ý > tab Review > nhóm Comments > nút New Comment (phím tắt Alt + Ctrl + M). Nhập nhận xét vào khung bong bóng ở lề phải.',
          'Xem và điều hướng bình luận: Nhóm Comments có các nút Previous (bình luận trước) và Next (bình luận kế tiếp).',
          'Trả lời bình luận (Reply): Nhấp vào ô Reply dưới bình luận của người khác để trao đổi thành chuỗi hội thoại (thread).',
          'Đánh dấu đã giải quyết (Resolve): Nhấp nút Resolve để làm mờ bình luận khi vấn đề đã được chỉnh sửa xong, giữ lại lịch sử trao đổi.',
          'Xóa bình luận (Delete Comment): Nhấp chuột phải vào bình luận > Delete Comment (hoặc nút Delete trên tab Review). Có tùy chọn "Delete All Comments in Document".'
        ],
        shortcut: 'Ctrl + Alt + M để chèn nhanh bình luận New Comment tại vị trí con trỏ.',
        examTip: 'Đề thi MOS có thể yêu cầu: "Delete the comment in the second section" hoặc "Reply to the comment with the text: Completed". Chú ý phân biệt giữa Delete (xóa hẳn) và Resolve (đánh dấu hoàn thành).',
        checkpointQuestion: {
          question: 'Tổ hợp phím tắt nhanh nào sau đây dùng để chèn một bình luận mới (New Comment) trong Microsoft Word?',
          options: ['Ctrl + C', 'Ctrl + Alt + M', 'Shift + F7', 'Alt + Ctrl + C'],
          correctIndex: 1,
          explanation: 'Ctrl + Alt + M là phím tắt mặc định để tạo nhanh một chú thích bình luận (New Comment) tại đoạn văn đang chọn.'
        }
      },
      {
        id: 'wt-8-5',
        title: 'Theo Dõi Chỉnh Sửa (Track Changes) & Khóa Theo Dõi (Lock Tracking)',
        concept: 'Track Changes là công cụ cộng tác tối quan trọng ghi lại mọi vết thay đổi trong tài liệu (thêm từ, xóa từ, đổi định dạng). Người chủ tài liệu sau đó có quyền chấp nhận (Accept) hoặc từ chối (Reject) từng thay đổi.',
        keyPoints: [
          'Bật/tắt theo dõi thay đổi: Tab Review > nhóm Tracking > bấm nút "Track Changes" (phím tắt Ctrl + Shift + E). Mọi chữ gõ mới sẽ được gạch chân có màu, chữ xóa sẽ bị gạch ngang.',
          'Các chế độ hiển thị vết sửa (Display for Review):',
          '- Simple Markup: Hiển thị văn bản sạch đẹp với vạch đỏ bên lề báo hiệu dòng có chỉnh sửa.',
          '- All Markup: Hiển thị chi tiết toàn bộ các vết gạch xóa, chữ thêm mới và bong bóng ghi chú.',
          '- No Markup: Xem tài liệu như thể mọi thay đổi đều đã được áp dụng.',
          '- Original: Xem tài liệu gốc nguyên bản trước khi chỉnh sửa.',
          'Khung xem xét (Reviewing Pane): Mở ngăn bên trái (Vertical) hoặc bên dưới (Horizontal) liệt kê tổng số và chi tiết từng chỉnh sửa.',
          'Khóa theo dõi (Lock Tracking): Bấm nút Lock Tracking và đặt mật khẩu bảo vệ để ngăn người khác tự ý tắt chế độ theo dõi.',
          'Duyệt thay đổi: Tab Review > nhóm Changes > chọn Accept (chấp nhận thay đổi) hoặc Reject (loại bỏ thay đổi, khôi phục như cũ). Có thể chọn "Accept All Changes" hoặc "Reject All Changes".'
        ],
        shortcut: 'Ctrl + Shift + E để bật hoặc tắt nhanh chế độ theo dõi Track Changes.',
        examTip: 'Trong bài thi MOS, khi đề bài yêu cầu: "Lock tracking with the password: MOS" -> Vào Review > Tracking > Lock Tracking > nhập mật khẩu. Hoặc "Accept all insertions and deletions, but do not stop tracking".',
        checkpointQuestion: {
          question: 'Khi nhận được một tài liệu có bật Track Changes, thao tác nào cho phép người duyệt phê duyệt và chấp nhận toàn bộ các thay đổi cùng một lúc?',
          options: [
            'Review > Accept > Accept All Changes',
            'Tắt nút Track Changes',
            'Lưu tệp dưới dạng PDF',
            'Review > Reject > Reject All Changes'
          ],
          correctIndex: 0,
          explanation: 'Lựa chọn Accept All Changes trên thẻ Review sẽ chính thức áp dụng toàn bộ các thay đổi được theo dõi vào tài liệu chính thức.'
        }
      }
    ],
    tasks: [
      {
        id: 'wtask-8-1',
        title: 'Gán Định Dạng Tiêu Đề Heading 1',
        instruction: 'Áp dụng kiểu dáng Heading 1 cho các dòng tiêu đề chính để chuẩn bị cấu trúc mục lục.',
        hint: 'Chọn dòng tiêu đề > tab Home > nhóm Styles > nhấp chọn kiểu Heading 1.',
        targetType: 'ribbon-action',
        actionKey: 'word-style-heading1'
      },
      {
        id: 'wtask-8-2',
        title: 'Chèn Bảng Mục Lục Tự Động (Table of Contents)',
        instruction: 'Thực hiện chèn một bảng mục lục tự động vào đầu tài liệu.',
        hint: 'Vào tab References > nhóm Table of Contents > nhấp chọn mẫu mục lục tự động.',
        targetType: 'ribbon-action',
        actionKey: 'word-insert-toc'
      },
      {
        id: 'wtask-8-3',
        title: 'Cập Nhật Toàn Bộ Bảng Mục Lục (Update Entire Table)',
        instruction: 'Tiến hành cập nhật lại toàn bộ bảng mục lục bao gồm cả số trang và tiêu đề mới.',
        hint: 'Nhấp vào bảng mục lục > References > Update Table > chọn Update entire table.',
        targetType: 'ribbon-action',
        actionKey: 'word-update-toc'
      }
    ],
    quiz: [
      {
        id: 'wq-8-1',
        question: 'Phím tắt nào giúp cập nhật lại trường dữ liệu của bảng mục lục tự động đang chọn một cách nhanh nhất?',
        options: ['F4', 'F5', 'F9', 'F12'],
        correctIndex: 2,
        explanation: 'Phím F9 là phím chức năng làm mới/cập nhật (Update Field) cho các trường tự động trong Word như Mục lục, Bảng số liệu, Tham chiếu chéo.'
      },
      {
        id: 'wq-8-2',
        question: 'Để di chuyển tức thời từ một dòng tiêu đề trên bảng mục lục tự động đến đúng vị trí trang nội dung trong tài liệu, thao tác chuột là gì?',
        options: [
          'Nhấp đúp chuột trái',
          'Giữ phím Ctrl và nhấp chuột trái vào mục đó',
          'Nhấp chuột phải chọn Go to',
          'Kéo thả mục đó xuống cuối trang'
        ],
        correctIndex: 1,
        explanation: 'Thao tác giữ phím Ctrl + nhấp chuột trái vào bất kỳ dòng mục lục nào sẽ kích hoạt siêu liên kết đưa con trỏ nhảy ngay tới trang chứa nội dung đó.'
      },
      {
        id: 'wq-8-3',
        question: 'Tổ hợp phím tắt tiêu chuẩn nào dùng để kích hoạt hoặc tắt nhanh chế độ theo dõi chỉnh sửa Track Changes?',
        options: ['Ctrl + T', 'Ctrl + Shift + E', 'Alt + F7', 'Ctrl + Alt + T'],
        correctIndex: 1,
        explanation: 'Ctrl + Shift + E là phím tắt của công cụ Track Changes trong Microsoft Word.'
      },
      {
        id: 'wq-8-4',
        question: 'Tính năng nào cho phép người biên tập đặt mật khẩu ngăn chặn những người dùng khác tự ý tắt chế độ theo dõi chỉnh sửa trong tài liệu?',
        options: ['Restrict Editing', 'Lock Tracking', 'Encrypt with Password', 'Mark as Final'],
        correctIndex: 1,
        explanation: 'Lock Tracking (nằm trong menu xổ xuống của nút Track Changes) cho phép khóa tính năng theo dõi bằng mật mã cá nhân.'
      }
    ]
  }
];
