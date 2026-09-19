import type { LessonUnit } from '../../types/curriculum';

export const excelLessons: LessonUnit[] = [
  // ==========================================
  // BÀI 1: GIỚI THIỆU VỀ EXCEL
  // ==========================================
  {
    id: 'excel-lesson-1',
    moduleId: 'excel',
    order: 1,
    title: 'Giới thiệu về Microsoft Excel',
    summary: 'Làm quen với khái niệm bảng tính điện tử, các thành phần giao diện, cấu trúc Workbook/Worksheet, phương pháp nhập và nhận diện kiểu dữ liệu, chế độ Backstage và tương thích phiên bản.',
    durationMinutes: 20,
    theories: [
      {
        id: 'et-1-1',
        title: 'Khái Niệm Bảng Tính Điện Tử & Giao Diện Excel',
        concept: 'Microsoft Excel là phần mềm bảng tính điện tử mạnh mẽ, cho phép tổ chức, tính toán, phân tích số liệu và trực quan hóa dữ liệu qua biểu đồ.',
        keyPoints: [
          'Workbook (Sổ làm việc): Là tệp tin chính của Excel (phần mở rộng .xlsx), có thể chứa một hoặc nhiều Worksheet.',
          'Worksheet (Trang tính): Là lưới làm việc gồm 1.048.576 hàng (đánh số 1, 2, 3...) và 16.384 cột (đánh chữ A, B... XFD).',
          'Ô tính (Cell): Giao điểm giữa một cột và một hàng, được định danh bằng địa chỉ ô (Cell Reference), ví dụ: A1, C10, XFD1048576.',
          'Formula Bar (Thanh công thức): Hiển thị nội dung thực tế hoặc công thức tính toán của ô đang chọn (Active Cell).',
          'Name Box (Hộp tên): Hiển thị địa chỉ của ô hiện hành hoặc tên của vùng ô được chọn.'
        ],
        shortcut: 'Ctrl + Home: Về ngay ô A1; Ctrl + End: Nhảy đến ô có dữ liệu cuối cùng; F5 hoặc Ctrl + G: Mở hộp thoại Go To để nhảy tới địa chỉ ô bất kỳ.',
        examTip: 'Trong bài thi MOS Excel, đề thi thường yêu cầu điều hướng nhanh đến một ô hoặc vùng ô cụ thể thông qua Name Box thay vì dùng chuột cuộn màn hình.',
        checkpointQuestion: {
          question: 'Địa chỉ của ô nằm ở giao điểm giữa cột D và hàng 8 được viết chuẩn xác là gì?',
          options: ['8D', 'D8', 'D-8', '$8$D'],
          correctIndex: 1,
          explanation: 'Quy ước địa chỉ ô trong Excel luôn luôn viết tên Cột trước, sau đó đến chỉ số Hàng (ví dụ: D8).'
        }
      },
      {
        id: 'et-1-2',
        title: 'Quy Tắc Nhập Dữ Liệu & Căn Lề Mặc Định Của Các Kiểu Dữ Liệu',
        concept: 'Excel tự động nhận biết kiểu dữ liệu khi người dùng nhập vào ô tính và áp dụng quy tắc căn lề mặc định để phân biệt bản chất dữ liệu.',
        keyPoints: [
          'Dữ liệu kiểu Văn bản (Text): Tự động căn sát lề TRÁI của ô tính.',
          'Dữ liệu kiểu Số (Number), Tiền tệ, Phần trăm: Tự động căn sát lề PHẢI của ô tính.',
          'Dữ liệu kiểu Ngày tháng (Date) và Thời gian (Time): Thực chất được lưu trữ dưới dạng số serial và tự động căn sát lề PHẢI.',
          'Dữ liệu Logic (TRUE, FALSE) hoặc Thông báo Lỗi (#N/A, #VALUE!...): Tự động căn GIỮA ô.',
          'Nhập số dưới dạng chuỗi ký tự: Đặt dấu nháy đơn (\') ở đầu chuỗi (ví dụ: \'0987654321) để giữ nguyên số 0 ở đầu.'
        ],
        shortcut: 'Ctrl + ; (dấu chấm phẩy): Chèn nhanh ngày hiện tại; Ctrl + Shift + ; : Chèn nhanh giờ hiện tại.',
        examTip: 'Nếu một số bị căn sát lề trái, đó là dấu hiệu nó đang bị lưu dưới dạng Text, các hàm tính toán như SUM, AVERAGE sẽ bỏ qua giá trị này dẫn đến kết quả sai lệch.',
        checkpointQuestion: {
          question: 'Theo quy tắc mặc định của Excel, dữ liệu kiểu Số (Number) khi nhập vào ô sẽ được căn lề như thế nào?',
          options: ['Căn thẳng lề trái', 'Căn thẳng lề phải', 'Căn chính giữa', 'Căn đều hai bên'],
          correctIndex: 1,
          explanation: 'Dữ liệu số mặc định luôn căn sát lề bên phải để các hàng đơn vị, hàng chục, hàng trăm thẳng cột với nhau.'
        }
      },
      {
        id: 'et-1-3',
        title: 'Chế Độ Backstage & Quản Lý Tính Tương Thích (Compatibility)',
        concept: 'Chế độ Backstage (Thẻ File) quản lý toàn diện các tác vụ cấp độ tệp: Tạo mới từ mẫu (Templates), Lưu trữ, Xuất bản và kiểm tra tương thích với các phiên bản Excel cũ hơn.',
        keyPoints: [
          'Tạo sổ tính từ Mẫu có sẵn (Templates): File > New > Tìm kiếm mẫu thiết kế sẵn (Budget, Calendar, Invoice...).',
          'Lưu tệp ở định dạng phiên bản trước: File > Save As > Chọn kiểu tệp "Excel 97-2003 Workbook (*.xls)".',
          'Kiểm tra tính tương thích (Check Compatibility): File > Info > Check for Issues > Check Compatibility nhằm phát hiện các tính năng mới không hỗ trợ trên Excel cũ.',
          'Chuyển đổi sổ tính (Convert): Nâng cấp tệp .xls cũ lên định dạng .xlsx mới không làm mất định dạng hiện đại.'
        ],
        shortcut: 'Ctrl + N: Tạo nhanh một sổ làm việc trống mới; F12 hoặc Ctrl + S: Mở hộp thoại Save As / Lưu tệp.',
        examTip: 'Đề thi MOS thường yêu cầu lưu Workbook dưới dạng Excel 97-2003 hoặc template .xltx và duy trì tính tương thích tối đa.',
        checkpointQuestion: {
          question: 'Để kiểm tra xem sổ tính có sử dụng tính năng nào không tương thích với các phiên bản Excel cũ hay không, ta thực hiện thao tác nào?',
          options: [
            'File > Info > Check for Issues > Check Compatibility',
            'Home > Editing > Clear All',
            'Data > Data Validation > Circle Invalid Data',
            'Review > Proofing > Spelling'
          ],
          correctIndex: 0,
          explanation: 'Tính năng Check Compatibility trong nhóm Check for Issues tại Backstage chuyên dùng để rà soát xung đột phiên bản.'
        }
      },
      {
        id: 'et-1-4',
        title: 'Điều Hướng & Kỹ Thuật Chọn Khối Ô (Selection Techniques)',
        concept: 'Thao tác lựa chọn đối tượng chính xác là bước tiên quyết trước khi áp dụng bất kỳ định dạng, công thức hoặc vẽ biểu đồ.',
        keyPoints: [
          'Chọn một ô: Nhấp chuột trái vào ô đó hoặc nhập địa chỉ vào Name Box rồi nhấn Enter.',
          'Chọn vùng ô liền kề (Range): Nhấp giữ chuột từ góc trên bên trái kéo đến góc dưới bên phải (ví dụ A1:C10), hoặc nhấp ô đầu, giữ Shift rồi nhấp ô cuối.',
          'Chọn các vùng ô không liền kề: Giữ phím Ctrl trong khi nhấp chọn từng ô hoặc từng vùng tách biệt.',
          'Chọn toàn bộ hàng/cột: Nhấp vào số thứ tự hàng (Row Header) hoặc chữ cái cột (Column Header).',
          'Chọn toàn bộ trang tính: Nhấp vào nút hình tam giác tại góc giao giữa tiêu đề hàng 1 và cột A.'
        ],
        shortcut: 'Ctrl + A: Chọn toàn bộ vùng dữ liệu hiện hành (nhấn lần 2 để chọn cả trang tính); Shift + Phím mũi tên: Mở rộng vùng chọn.',
        examTip: 'Khi đề thi yêu cầu chọn 2 vùng không liên tục như A1:A10 và D1:D10 để vẽ biểu đồ, bắt buộc phải dùng phím Ctrl.',
        checkpointQuestion: {
          question: 'Để chọn đồng thời hai vùng ô không liền nhau A2:A8 và D2:D8, ta phải giữ phím nào trên bàn phím khi chọn vùng thứ hai?',
          options: ['Phím Alt', 'Phím Shift', 'Phím Ctrl', 'Phím Tab'],
          correctIndex: 2,
          explanation: 'Phím Ctrl cho phép chọn nhiều vùng dữ liệu phân tán, không nằm liền kề nhau.'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-1-1',
        title: 'Căn chỉnh định dạng số phân cách hàng nghìn (Comma Style)',
        instruction: 'Nhấp chọn nút lệnh Comma Style (biểu tượng dấu phẩy) trên nhóm Number của thẻ Home.',
        hint: 'Nhấp Home > nhóm Number > chọn biểu tượng dấu phẩy ",".',
        targetType: 'ribbon-action',
        actionKey: 'excel-format-comma'
      },
      {
        id: 'etask-1-2',
        title: 'Gộp các ô tiêu đề và căn giữa (Merge & Center)',
        instruction: 'Bấm chọn nút lệnh Merge & Center trên nhóm Alignment của thẻ Home.',
        hint: 'Nhấp Home > nhóm Alignment > Merge & Center.',
        targetType: 'ribbon-action',
        actionKey: 'excel-merge-center'
      },
      {
        id: 'etask-1-3',
        title: 'Nhập công thức nhân cơ bản cho ô tính',
        instruction: 'Nhập công thức =A4*B4 vào ô tính hoặc thanh công thức để tính thành tiền.',
        hint: 'Gõ chính xác chuỗi: =A4*B4',
        targetType: 'cell-formula',
        actionKey: 'formula-multiply',
        expectedValue: '=A4*B4',
        targetRef: 'C4'
      }
    ],
    quiz: [
      {
        id: 'eq-1-1',
        question: 'Một trang tính (Worksheet) trong Microsoft Excel 2019 chứa tối đa bao nhiêu hàng?',
        options: ['65.536 hàng', '256.000 hàng', '1.048.576 hàng', 'Không giới hạn'],
        correctIndex: 2,
        explanation: 'Từ phiên bản Excel 2007 trở đi, mỗi trang tính có chính xác 1.048.576 hàng và 16.384 cột (đến cột XFD).'
      },
      {
        id: 'eq-1-2',
        question: 'Thành phần nào trên màn hình Excel dùng để hiển thị địa chỉ ô hiện hành hoặc gán tên cho một vùng ô?',
        options: ['Formula Bar', 'Name Box', 'Status Bar', 'Title Bar'],
        correctIndex: 1,
        explanation: 'Name Box (Hộp tên) nằm ở bên trái thanh công thức, hiển thị địa chỉ của ô hiện hành hoặc tên vùng ô đã đặt.'
      },
      {
        id: 'eq-1-3',
        question: 'Khi gõ chuỗi ký tự số "01234" vào một ô rỗng, số 0 biến mất và chỉ còn "1234". Để giữ lại số 0, ta nhập như thế nào?',
        options: ['Nhập "01234"', "Nhập '01234", 'Nhập =01234', 'Nhập [01234]'],
        correctIndex: 1,
        explanation: 'Gõ dấu nháy đơn (\') ở đầu sẽ ép Excel hiểu nội dung tiếp theo là dạng Text (chuỗi ký tự), từ đó giữ nguyên chữ số 0 đầu tiên.'
      },
      {
        id: 'eq-1-4',
        question: 'Tổ hợp phím tắt nào giúp con trỏ nhảy ngay lập tức về ô A1 đầu tiên của trang tính?',
        options: ['Ctrl + Home', 'Ctrl + Up Arrow', 'Alt + Home', 'Shift + Home'],
        correctIndex: 0,
        explanation: 'Ctrl + Home luôn đưa con trỏ ô về vị trí ô góc trên cùng bên trái (ô A1).'
      },
      {
        id: 'eq-1-5',
        question: 'Tệp bảng tính chuẩn được tạo bởi Microsoft Excel 2019 có phần mở rộng mặc định là gì?',
        options: ['.doc', '.xlsx', '.xls', '.pptx'],
        correctIndex: 1,
        explanation: 'Định dạng tệp sổ làm việc mặc định từ Excel 2007 đến nay là .xlsx (sử dụng chuẩn nén OpenXML).'
      }
    ]
  },

  // ==========================================
  // BÀI 2: XÂY DỰNG DỮ LIỆU Ô (DATA CELLS & WORKSHEETS)
  // ==========================================
  {
    id: 'excel-lesson-2',
    moduleId: 'excel',
    order: 2,
    title: 'Xây dựng dữ liệu ô (Data Cells & Worksheets)',
    summary: 'Chỉnh sửa ô, hoàn tác tác vụ, kỹ thuật dán đặc biệt Paste Special, điều chỉnh kích thước cột hàng với AutoFit, sao chép chuỗi bằng AutoFill và quản lý trang tính toàn diện.',
    durationMinutes: 22,
    theories: [
      {
        id: 'et-2-1',
        title: 'Chỉnh Sửa Ô, Hoàn Tác & Thao Tác Cắt / Sao Chép / Dán Đặc Biệt (Paste Special)',
        concept: 'Thao tác chỉnh sửa nội dung ô có thể thực hiện trên ô hoặc qua thanh công thức. Paste Special cho phép trích xuất linh hoạt chỉ công thức, giá trị, hoặc định dạng từ dữ liệu nguồn.',
        keyPoints: [
          'Chế độ sửa ô: Nhấp đúp chuột vào ô hoặc nhấn phím F2 để kích hoạt chế độ Edit Mode.',
          'Hoàn tác (Undo) và Làm lại (Redo): Ctrl + Z để hủy bỏ hành động vừa làm; Ctrl + Y để phục hồi lại thao tác đã hoàn tác.',
          'Dán giá trị (Paste Values): Chỉ lấy kết quả tính toán của công thức, loại bỏ hoàn toàn biểu thức nguồn.',
          'Dán định dạng (Paste Formats): Chỉ áp dụng kiểu màu, viền, phông chữ của ô nguồn sang ô đích.',
          'Hoán đổi chiều dữ liệu (Transpose): Chuyển đổi dữ liệu từ dạng hàng ngang thành cột dọc và ngược lại.'
        ],
        shortcut: 'Ctrl + Alt + V hoặc Alt + E, S: Mở nhanh hộp thoại Paste Special; F2: Vào chế độ chỉnh sửa ô.',
        examTip: 'Đề thi MOS cực kỳ hay yêu cầu: "Sao chép công thức nhưng chỉ dán Giá trị (Values) sang ô đích" để cố định số liệu báo cáo.',
        checkpointQuestion: {
          question: 'Khi muốn sao chép kết quả của một công thức sang vị trí khác mà không muốn công thức bị lỗi khi dữ liệu gốc thay đổi, ta dùng tùy chọn Paste nào?',
          options: ['Paste Formulas', 'Paste Values', 'Paste Formats', 'Paste Link'],
          correctIndex: 1,
          explanation: 'Paste Values sẽ loại bỏ công thức gốc và chỉ dán giá trị kết quả cố định vào ô mới.'
        }
      },
      {
        id: 'et-2-2',
        title: 'Kích Thước Hàng Cột, Tự Động Co Giãn (AutoFit) & Ẩn/Hiện Dòng Cột',
        concept: 'Điều chỉnh độ rộng cột và chiều cao hàng giúp dữ liệu hiển thị trọn vẹn, giải quyết triệt để lỗi hiển thị số ##### và trình bày báo cáo thẩm mỹ.',
        keyPoints: [
          'Lỗi #####: Xuất hiện khi cột quá hẹp không đủ hiển thị con số hoặc ngày tháng.',
          'AutoFit Column Width: Tự động căn chỉnh độ rộng cột vừa khít với nội dung dài nhất trong cột đó.',
          'Thao tác AutoFit: Rê chuột vào đường phân cách giữa 2 tiêu đề cột (ví dụ giữa A và B) khi con trỏ đổi thành mũi tên 2 chiều, nhấp đúp chuột.',
          'Đặt kích thước chính xác: Home > nhóm Cells > Format > Column Width... (hoặc Row Height...).',
          'Ẩn/Hiện hàng cột (Hide & Unhide): Nhấp chuột phải vào tiêu đề cột/hàng cần giấu > chọn Hide. Để hiện lại, chọn 2 cột/hàng bao quanh > nhấp chuột phải chọn Unhide.'
        ],
        shortcut: 'Alt + H, O, I: AutoFit độ rộng cột; Alt + H, O, A: AutoFit chiều cao hàng.',
        examTip: 'Đề bài yêu cầu chỉnh độ rộng cột thành số cụ thể (ví dụ 15 pt), hãy vào Home > Cells > Format > Column Width để gõ giá trị chính xác.',
        checkpointQuestion: {
          question: 'Nguyên nhân chính khiến một ô chứa dữ liệu kiểu số hiển thị toàn bộ ký hiệu "#####" là gì?',
          options: [
            'Công thức chia cho số 0',
            'Độ rộng cột quá hẹp so với độ dài của số',
            'Dữ liệu số bị lỗi cú pháp',
            'Ô bị xóa định dạng'
          ],
          correctIndex: 1,
          explanation: 'Chuỗi ##### chỉ xuất hiện khi ô số không đủ bề rộng để hiển thị đầy đủ các chữ số, cần nới rộng cột hoặc AutoFit.'
        }
      },
      {
        id: 'et-2-3',
        title: 'Tự Động Điền Chuỗi Dữ Liệu Thông Minh Với AutoFill',
        concept: 'AutoFill là công cụ tiết kiệm thời gian nhất trong Excel, tự động điền nhanh các chuỗi số tăng dần, ngày tháng, thứ trong tuần hoặc sao chép hàng loạt công thức.',
        keyPoints: [
          'Fill Handle: Là chấm vuông nhỏ màu xanh đậm ở góc dưới bên phải của ô đang chọn (Active Cell).',
          'Điền chuỗi ngày tháng / thứ: Nhập "Thứ Hai" và kéo Fill Handle, Excel tự động điền "Thứ Ba", "Thứ Tư"...',
          'Điền chuỗi số tăng dần: Nhập giá trị 1 ở ô trên, 2 ở ô dưới; chọn cả 2 ô rồi kéo Fill Handle, hoặc giữ phím Ctrl khi kéo một ô số.',
          'Nút AutoFill Options: Sau khi kéo, nhấp vào biểu tượng nhỏ xuất hiện cạnh đó để chọn Copy Cells, Fill Series, Fill Formatting Only hoặc Fill Without Formatting.',
          'Flash Fill (Ctrl + E): Tự động nhận diện quy luật văn bản để tách họ tên, ghép chuỗi mà không cần dùng hàm phức tạp.'
        ],
        shortcut: 'Nhấp đúp chuột vào Fill Handle: Tự động điền dữ liệu dọc xuống dưới hết bảng tính; Ctrl + E: Kích hoạt tính năng Flash Fill.',
        examTip: 'Nhấp đúp vào Fill Handle chỉ có tác dụng khi cột bên cạnh có dữ liệu liên tục để Excel nhận diện được dòng kết thúc.',
        checkpointQuestion: {
          question: 'Để sao chép nhanh một công thức xuống toàn bộ các dòng còn lại của một bảng dữ liệu gồm 1.000 dòng một cách nhanh nhất, ta làm gì?',
          options: [
            'Kéo chuột rê qua 1.000 dòng',
            'Nhấp đúp chuột vào điểm chốt Fill Handle (dấu vuông nhỏ góc dưới ô)',
            'Gõ lại công thức ở từng ô',
            'Dùng phím Page Down'
          ],
          correctIndex: 1,
          explanation: 'Nhấp đúp chuột vào Fill Handle sẽ tự động phủ công thức xuống đến dòng cuối cùng của bảng dữ liệu tiếp giáp.'
        }
      },
      {
        id: 'et-2-4',
        title: 'Quản Lý Toàn Diện Trang Tính (Worksheet Management)',
        concept: 'Tổ chức các trang tính một cách khoa học giúp cấu trúc sổ làm việc logic, dễ phân loại phòng ban hoặc kỳ kế toán.',
        keyPoints: [
          'Thêm trang tính mới: Nhấp vào dấu cộng (+) bên cạnh thanh thẻ Sheet hoặc nhấn Shift + F11.',
          'Đổi tên Sheet (Rename): Nhấp đúp chuột vào thẻ Sheet hoặc nhấp chuột phải chọn Rename. Tên Sheet tối đa 31 ký tự và không chứa ký tự cấm: \ / ? * : [ ].',
          'Tô màu Tab Sheet (Tab Color): Nhấp chuột phải vào thẻ Sheet > Tab Color > Chọn màu mong muốn.',
          'Di chuyển / Sao chép Sheet (Move or Copy): Nhấp chuột phải vào thẻ Sheet > Move or Copy... Đánh dấu tích vào ô "Create a copy" nếu muốn nhân bản trang tính.',
          'Xóa trang tính (Delete): Nhấp chuột phải > Delete. Lưu ý: Thao tác xóa Sheet không thể hoàn tác (Undo) bằng Ctrl + Z.'
        ],
        shortcut: 'Shift + F11: Chèn nhanh một Worksheet mới ngay trước sheet hiện hành; Ctrl + PageDown / PageUp: Di chuyển qua lại giữa các sheet.',
        examTip: 'Đề thi MOS thường yêu cầu: "Đổi màu Tab của Sheet DanhMuc thành Blue, Accent 1 và đặt vị trí của nó ra sau cùng".',
        checkpointQuestion: {
          question: 'Ký tự nào sau đây KHÔNG ĐƯỢC PHÉP xuất hiện trong tên của một trang tính (Worksheet)?',
          options: ['Dấu gạch dưới (_)', 'Dấu gạch chéo (/ hoặc \)', 'Dấu gạch nối (-)', 'Dấu cách (Khoảng trắng)'],
          correctIndex: 1,
          explanation: 'Tên Sheet không được chứa các ký tự đặc biệt của hệ thống tệp như / \ ? * : [ ].'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-2-1',
        title: 'Tự động co giãn độ rộng cột (AutoFit)',
        instruction: 'Nhấp chọn nút Comma Style để định dạng các số tiền theo chuẩn kế toán trước khi tự động co giãn cột.',
        hint: 'Nhấp Home > nhóm Number > Comma Style.',
        targetType: 'ribbon-action',
        actionKey: 'excel-format-comma'
      },
      {
        id: 'etask-2-2',
        title: 'Gộp ô và căn giữa tiêu đề phân đoạn',
        instruction: 'Nhấp chọn công cụ Merge & Center trên nhóm Alignment của thẻ Home.',
        hint: 'Nhấp Home > nhóm Alignment > Merge & Center.',
        targetType: 'ribbon-action',
        actionKey: 'excel-merge-center'
      },
      {
        id: 'etask-2-3',
        title: 'Nhập công thức nhân đơn giá và số lượng',
        instruction: 'Nhập công thức =A4*B4 vào ô C4 để tính tổng chi phí.',
        hint: 'Gõ: =A4*B4',
        targetType: 'cell-formula',
        actionKey: 'formula-multiply',
        expectedValue: '=A4*B4',
        targetRef: 'C4'
      }
    ],
    quiz: [
      {
        id: 'eq-2-1',
        question: 'Tùy chọn nào trong tính năng Paste Special cho phép chuyển đổi dữ liệu từ dạng một hàng ngang thành một cột dọc?',
        options: ['Paste Values', 'Transpose', 'Paste Formulas', 'Paste Link'],
        correctIndex: 1,
        explanation: 'Tính năng Transpose (Hoán vị) dùng để đổi hướng dữ liệu từ hàng sang cột hoặc từ cột sang hàng.'
      },
      {
        id: 'eq-2-2',
        question: 'Tổ hợp phím tắt nào giúp kích hoạt tính năng thông minh Flash Fill để tự động nhận diện quy luật trích xuất chuỗi?',
        options: ['Ctrl + E', 'Ctrl + F', 'Ctrl + D', 'Ctrl + R'],
        correctIndex: 0,
        explanation: 'Ctrl + E là phím tắt kích hoạt Flash Fill, tự động tách họ tên, ngày tháng theo dữ liệu mẫu người dùng nhập vào ô đầu.'
      },
      {
        id: 'eq-2-3',
        question: 'Để tạo một bản sao nhân đôi (Duplicate) của một Worksheet hiện có, trong hộp thoại Move or Copy ta phải đánh dấu vào ô nào?',
        options: ['Duplicate sheet', 'Create a copy', 'Make new clone', 'Keep source formatting'],
        correctIndex: 1,
        explanation: 'Hộp kiểm "Create a copy" trong cửa sổ Move or Copy bắt buộc phải được tích chọn để tạo bản sao mới thay vì di chuyển sheet gốc.'
      },
      {
        id: 'eq-2-4',
        question: 'Hành động nào sau đây trong Excel KHÔNG THỂ phục hồi lại bằng tổ hợp phím hoàn tác Ctrl + Z?',
        options: [
          'Đổi màu nền một vùng ô',
          'Xóa một trang tính (Delete Worksheet)',
          'Nhập sai công thức vào ô tính',
          'Xóa nội dung của một hàng'
        ],
        correctIndex: 1,
        explanation: 'Thao tác xóa trang tính (Delete Sheet) là vĩnh viễn và Excel sẽ đưa ra cảnh báo không thể Undo trước khi người dùng đồng ý xóa.'
      },
      {
        id: 'eq-2-5',
        question: 'Độ dài tối đa cho phép của tên một trang tính (Sheet Tab) trong Microsoft Excel là bao nhiêu ký tự?',
        options: ['15 ký tự', '31 ký tự', '64 ký tự', '255 ký tự'],
        correctIndex: 1,
        explanation: 'Microsoft Excel quy định tên của một trang tính tối đa chỉ được chứa 31 ký tự.'
      }
    ]
  },

  // ==========================================
  // BÀI 3: SỬ DỤNG CÔNG THỨC (FORMULAS & FUNCTIONS)
  // ==========================================
  {
    id: 'excel-lesson-3',
    moduleId: 'excel',
    order: 3,
    title: 'Sử dụng công thức & hàm (Formulas & Functions)',
    summary: 'Nắm vững toán tử toán học, thứ tự ưu tiên, hàm thống kê cơ bản (SUM, AVERAGE, MIN, MAX, COUNT/COUNTA/COUNTBLANK), hàm điều kiện IF, hàm văn bản và phân biệt địa chỉ ô tương đối, tuyệt đối ($).',
    durationMinutes: 25,
    theories: [
      {
        id: 'et-3-1',
        title: 'Bản Chất Công Thức, Toán Tử & Thứ Tự Ưu Tiên Tính Toán',
        concept: 'Mọi công thức trong Excel luôn luôn bắt đầu bằng dấu bằng (=). Excel tuân thủ nghiêm ngặt các quy tắc ưu tiên toán học chuẩn quốc tế.',
        keyPoints: [
          'Toán tử số học: Dấu cộng (+), trừ (-), nhân (*), chia (/), lũy thừa (^), phần trăm (%).',
          'Toán tử nối chuỗi: Ký tự (&). Ví dụ: ="Hà Nội " & "Việt Nam" cho ra chuỗi "Hà Nội Việt Nam".',
          'Toán tử so sánh: = (bằng), > (lớn hơn), < (nhỏ hơn), >= (lớn hơn hoặc bằng), <= (nhỏ hơn hoặc bằng), <> (khác).',
          'Thứ tự ưu tiên tính toán: Biểu thức trong dấu ngoặc đơn () -> Dấu trừ âm (-) -> Lũy thừa (^) -> Nhân (*) và Chia (/) -> Cộng (+) và Trừ (-) -> Nối chuỗi (&) -> So sánh.',
          'Hiển thị công thức (Show Formulas): Bật/tắt chế độ xem công thức thay vì xem kết quả số bằng phím Ctrl + ` (dấu ngã).'
        ],
        shortcut: 'Ctrl + ` (dấu ngã dưới phím Esc): Bật hoặc tắt chế độ hiển thị toàn bộ công thức trên trang tính.',
        examTip: 'Đề thi MOS thường yêu cầu hiển thị toàn bộ công thức trong trang tính trước khi in ấn bằng tính năng Show Formulas trên thẻ Formulas.',
        checkpointQuestion: {
          question: 'Trong biểu thức Excel: =2 + 3 * 4 ^ 2, kết quả tính toán trả về là bao nhiêu theo đúng thứ tự ưu tiên?',
          options: ['80', '50', '400', '38'],
          correctIndex: 1,
          explanation: 'Lũy thừa 4^2 = 16 thực hiện trước; sau đó nhân: 3 * 16 = 48; cuối cùng cộng: 2 + 48 = 50.'
        }
      },
      {
        id: 'et-3-2',
        title: 'Địa Chỉ Ô Tương Đối, Tuyệt Đối ($) & Hỗn Hợp',
        concept: 'Dấu đô-la ($) dùng để cố định (khóa cứng) chỉ số cột hoặc hàng khi công thức được sao chép sang các ô khác.',
        keyPoints: [
          'Địa chỉ tương đối (A1): Khi copy công thức sang ô khác, cả cột và hàng đều tự động dịch chuyển theo khoảng cách tương ứng.',
          'Địa chỉ tuyệt đối ($A$1): Cả cột A và hàng 1 đều bị khóa cứng, không thay đổi dù công thức được copy đến bất kỳ vị trí nào.',
          'Địa chỉ hỗn hợp cố định cột ($A1): Cột A cố định không đổi, hàng 1 sẽ tự do thay đổi khi copy dọc.',
          'Địa chỉ hỗn hợp cố định hàng (A$1): Cột A tự do thay đổi khi copy ngang, hàng 1 luôn cố định.',
          'Tham chiếu ô từ trang tính khác: Cú pháp TênSheet!ĐịaChỉÔ (ví dụ: DanhMuc!$B$2).'
        ],
        shortcut: 'Phím F4: Khi con trỏ đang ở tên ô trong thanh công thức, nhấn F4 để luân chuyển nhanh các kiểu địa chỉ: A1 -> $A$1 -> A$1 -> $A1 -> A1.',
        examTip: 'Khi tính tỷ lệ phần trăm phân bổ hoặc tra cứu một ô chứa hệ số chung (như thuế VAT, tỷ giá), ô hệ số đó BẮT BUỘC phải dùng địa chỉ tuyệt đối $A$1.',
        checkpointQuestion: {
          question: 'Khi con trỏ soạn thảo đặt tại tên ô "B5" trong thanh công thức, nhấn phím F4 hai lần liên tiếp sẽ cho ra dạng địa chỉ nào?',
          options: ['$B$5', 'B$5', '$B5', 'B5'],
          correctIndex: 1,
          explanation: 'Nhấn F4 lần 1 cho $B$5 (tuyệt đối); nhấn F4 lần 2 cho B$5 (hỗn hợp cố định hàng).'
        }
      },
      {
        id: 'et-3-3',
        title: 'Nhóm Hàm Thống Kê Chuẩn (SUM, AVERAGE, MIN, MAX, COUNT)',
        concept: 'Các hàm thống kê cơ bản xử lý tập hợp dãy số nhanh chóng, là nền tảng cốt lõi của mọi báo cáo kế toán và thống kê THPT.',
        keyPoints: [
          'SUM(number1, [number2]...): Tính tổng các giá trị số trong danh sách hoặc vùng ô chỉ định.',
          'AVERAGE(number1, [number2]...): Tính trung bình cộng của các ô chứa giá trị số (bỏ qua ô văn bản và ô rỗng).',
          'MIN / MAX(range): Trả về giá trị nhỏ nhất / lớn nhất trong vùng dữ liệu.',
          'COUNT(range): Chỉ đếm các ô có chứa dữ liệu kiểu SỐ.',
          'COUNTA(range): Đếm tất cả các ô KHÔNG RỖNG (chứa số, chữ, ký tự đặc biệt, dấu cách...).',
          'COUNTBLANK(range): Đếm số lượng các ô hoàn toàn TRỐNG trong vùng chọn.'
        ],
        shortcut: 'Alt + = : Tự động chèn nhanh hàm tính tổng AutoSum cho các ô số liền kề phía trên hoặc bên trái.',
        examTip: 'Chú ý phân biệt kỹ giữa COUNT (chỉ đếm số) và COUNTA (đếm cả ô chứa văn bản).',
        checkpointQuestion: {
          question: 'Cho dãy ô A1:A5 lần lượt chứa các giá trị: 10, "Tin học", [Ô trống], 25, "Đỗ". Hàm =COUNTA(A1:A5) trả về kết quả là bao nhiêu?',
          options: ['2', '3', '4', '5'],
          correctIndex: 2,
          explanation: 'COUNTA đếm tất cả các ô không rỗng: gồm 2 ô số (10, 25) và 2 ô chữ ("Tin học", "Đỗ"), tổng cộng có 4 ô có nội dung.'
        }
      },
      {
        id: 'et-3-4',
        title: 'Hàm Điều Kiện IF & Nhóm Hàm Xử Lý Văn Bản (Text Functions)',
        concept: 'Hàm logic IF giúp đưa ra quyết định dựa trên điều kiện, kết hợp với các hàm chuỗi để chuẩn hóa văn bản đầu vào.',
        keyPoints: [
          'Cú pháp hàm IF: =IF(logical_test, value_if_true, [value_if_false]). Kiểm tra điều kiện logic, trả về giá trị 1 nếu đúng, giá trị 2 nếu sai.',
          'LEFT(text, [num_chars]): Trích xuất các ký tự từ phía BÊN TRÁI của chuỗi.',
          'RIGHT(text, [num_chars]): Trích xuất các ký tự từ phía BÊN PHẢI của chuỗi.',
          'MID(text, start_num, num_chars): Trích xuất ký tự từ VỊ TRÍ BẤT KỲ ở giữa chuỗi.',
          'CONCAT / TEXTJOIN(text1, text2...): Nối các chuỗi ký tự từ nhiều ô thành một chuỗi duy nhất; TEXTJOIN hỗ trợ thêm ký tự phân cách (delimiter) và bỏ qua ô trống.'
        ],
        shortcut: 'Shift + F3: Mở hộp thoại Insert Function (Chèn hàm) kèm hướng dẫn từng đối số.',
        examTip: 'Trong hàm IF, các giá trị trả về dạng văn bản (như "Đạt", "Khá") bắt buộc phải đặt trong cặp dấu ngoặc kép ("").',
        checkpointQuestion: {
          question: 'Nếu ô A1 chứa chuỗi "THPT-2024", công thức =RIGHT(A1, 4) sẽ trả về kết quả nào?',
          options: ['"THPT"', '"2024"', '"-2024"', '"PT-2"'],
          correctIndex: 1,
          explanation: 'Hàm RIGHT lấy ra 4 ký tự tính từ phía bên phải ngoài cùng của chuỗi, thu được "2024".'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-3-1',
        title: 'Tính tổng điểm tự động với hàm SUM',
        instruction: 'Nhập công thức =SUM(B3:B6) vào ô B7 hoặc thanh công thức để tính tổng điểm số.',
        hint: 'Gõ chính xác chuỗi: =SUM(B3:B6)',
        targetType: 'cell-formula',
        actionKey: 'formula-sum',
        expectedValue: '=SUM(B3:B6)',
        targetRef: 'B7'
      },
      {
        id: 'etask-3-2',
        title: 'Tính điểm trung bình với hàm AVERAGE',
        instruction: 'Nhập công thức =AVERAGE(B3:B6) vào ô tính để xác định điểm trung bình môn.',
        hint: 'Gõ: =AVERAGE(B3:B6)',
        targetType: 'cell-formula',
        actionKey: 'formula-average',
        expectedValue: '=AVERAGE(B3:B6)',
        targetRef: 'D3'
      },
      {
        id: 'etask-3-3',
        title: 'Bật hiển thị toàn bộ công thức trên trang tính',
        instruction: 'Nhấp chọn nút lệnh Show Formulas trên thẻ Formulas để kiểm tra các công thức toán học.',
        hint: 'Nhấp Formulas > nhóm Formula Auditing > Show Formulas.',
        targetType: 'ribbon-action',
        actionKey: 'excel-show-formulas'
      }
    ],
    quiz: [
      {
        id: 'eq-3-1',
        question: 'Dấu ký hiệu nào trong công thức Excel được dùng để khóa cố định một địa chỉ ô khi sao chép?',
        options: ['Dấu thăng (#)', 'Dấu và (&)', 'Dấu đô la ($)', 'Dấu phần trăm (%)'],
        correctIndex: 2,
        explanation: 'Dấu đô la ($) trước chữ cái cột hoặc chữ số hàng dùng để khóa tuyệt đối tọa độ đó.'
      },
      {
        id: 'eq-3-2',
        question: 'Tổ hợp phím tắt nào dùng để kích hoạt tính năng tự động chèn nhanh hàm tính tổng AutoSum?',
        options: ['Ctrl + S', 'Alt + =', 'Shift + =', 'Ctrl + Alt + S'],
        correctIndex: 1,
        explanation: 'Alt + = tự động phân tích và sinh ra hàm =SUM(...) cho dãy số liền kề.'
      },
      {
        id: 'eq-3-3',
        question: 'Hàm nào sau đây chỉ đếm các ô có chứa dữ liệu kiểu SỐ trong một vùng dữ liệu?',
        options: ['=COUNTA()', '=COUNT()', '=COUNTBLANK()', '=COUNTIF()'],
        correctIndex: 1,
        explanation: 'Hàm COUNT chỉ đếm những ô chứa giá trị dạng số hoặc ngày tháng, bỏ qua các ô chứa chữ hoặc ô trống.'
      },
      {
        id: 'eq-3-4',
        question: 'Hàm nào dùng để trích xuất một số lượng ký tự nhất định bắt đầu từ vị trí bất kỳ ở giữa chuỗi văn bản?',
        options: ['=LEFT()', '=RIGHT()', '=MID()', '=MIDDLE()'],
        correctIndex: 2,
        explanation: 'Hàm MID(text, start_num, num_chars) trích xuất chuỗi ký tự từ vị trí bắt đầu chỉ định.'
      },
      {
        id: 'eq-3-5',
        question: 'Tổ hợp phím nào dùng để bật/tắt chế độ hiển thị toàn bộ công thức trên các ô thay vì hiển thị kết quả?',
        options: ['Ctrl + ` (dấu ngã)', 'Ctrl + F9', 'Alt + F8', 'Shift + F5'],
        correctIndex: 0,
        explanation: 'Ctrl + ` (nằm ngay dưới phím Esc) bật hoặc tắt nhanh chế độ Show Formulas trong trang tính.'
      }
    ]
  },

  // ==========================================
  // BÀI 4: ĐỊNH DẠNG TRANG TÍNH (FORMATTING WORKSHEETS)
  // ==========================================
  {
    id: 'excel-lesson-4',
    moduleId: 'excel',
    order: 4,
    title: 'Định dạng trang tính (Formatting Worksheets)',
    summary: 'Làm chủ định dạng số, vị trí thập phân, căn chỉnh và xoay hướng chữ (Orientation), Wrap Text, Merge & Center, viền bảng Borders, màu nền Fill, chổi định dạng Format Painter, Cell Styles và Conditional Formatting.',
    durationMinutes: 22,
    theories: [
      {
        id: 'et-4-1',
        title: 'Định Dạng Số, Tiền Tệ & Vị Trí Thập Phân (Number Formats)',
        concept: 'Định dạng số chỉ thay đổi cách con số hiển thị ra màn hình mà không làm biến đổi giá trị toán học thực tế được lưu trữ bên trong ô tính.',
        keyPoints: [
          'General: Định dạng mặc định, hiển thị số nguyên thủy không có ký hiệu đặc biệt.',
          'Number: Định dạng số có thể tùy biến số chữ số thập phân (Decimals) và dấu phân tách hàng nghìn (Use 1000 Separator).',
          'Currency & Accounting: Định dạng tiền tệ kèm ký hiệu ($, đ, €). Điểm khác biệt: Kế toán (Accounting) căn thẳng lề trái ký hiệu tiền và hiển thị số 0 thành dấu gạch ngang (-).',
          'Percentage: Nhân giá trị ô với 100 và thêm ký hiệu phần trăm (%). Ví dụ 0.25 hiển thị thành 25%.',
          'Increase / Decrease Decimal: Tăng hoặc giảm nhanh một chữ số thập phân sau dấu phẩy.'
        ],
        shortcut: 'Ctrl + Shift + $ : Định dạng tiền tệ nhanh; Ctrl + Shift + % : Định dạng phần trăm; Ctrl + 1 : Mở hộp thoại Format Cells.',
        examTip: 'Khi đề thi yêu cầu hiển thị 2 chữ số thập phân, sử dụng các nút Increase/Decrease Decimal trên nhóm Number thẻ Home.',
        checkpointQuestion: {
          question: 'Nếu ô A1 đang chứa số thập phân 0.15, khi ta bấm chọn nút định dạng Percentage (%), ô A1 sẽ hiển thị giá trị nào?',
          options: ['0.15%', '15%', '1.5%', '150%'],
          correctIndex: 1,
          explanation: 'Định dạng phần trăm sẽ nhân giá trị trong ô với 100 và đính kèm ký hiệu % vào cuối số.'
        }
      },
      {
        id: 'et-4-2',
        title: 'Căn Chỉnh Ô, Xoay Chữ (Orientation), Ngắt Dòng (Wrap Text) & Hợp Nhất Ô',
        concept: 'Nhóm lệnh Alignment giúp bố trí văn bản trong ô tính khoa học, tránh trường hợp chữ quá dài tràn sang ô bên cạnh.',
        keyPoints: [
          'Căn lề 6 hướng: Kết hợp 3 vị trí ngang (Left, Center, Right) và 3 vị trí dọc (Top, Middle, Bottom). Tiêu đề bảng chuẩn thường chọn Middle Align & Center.',
          'Wrap Text (Ngắt dòng văn bản): Tự động gãy văn bản thành nhiều dòng bên trong cùng một ô khi độ rộng cột không đủ, làm tăng chiều cao hàng.',
          'Xoay chữ (Orientation): Nghiêng chữ theo góc (Angle Counterclockwise, Vertical Text...) để tiết kiệm bề ngang cho các cột có tiêu đề dài.',
          'Merge & Center: Hợp nhất các ô được chọn thành một ô duy nhất và căn dữ liệu vào chính giữa. Lưu ý: Chỉ giữ lại nội dung của ô góc trên bên trái, dữ liệu các ô khác sẽ bị xóa bỏ.',
          'Merge Across: Gộp các ô theo từng hàng ngang riêng biệt.'
        ],
        shortcut: 'Alt + Enter: Ngắt dòng thủ công ngay tại vị trí con trỏ bên trong một ô tính.',
        examTip: 'Để ngắt dòng tại một từ cụ thể trong tiêu đề ô, nhấn Alt + Enter thay vì bật Wrap Text tự động.',
        checkpointQuestion: {
          question: 'Khi sử dụng lệnh "Merge & Center" để gộp nhiều ô đang có dữ liệu thành một ô duy nhất, dữ liệu ở những ô nào sẽ được giữ lại?',
          options: [
            'Dữ liệu ở tất cả các ô được ghép nối lại với nhau',
            'Chỉ giữ lại dữ liệu của ô ở góc trên cùng bên trái',
            'Chỉ giữ lại dữ liệu của ô ở góc dưới cùng bên phải',
            'Toàn bộ dữ liệu của tất cả các ô đều bị xóa sạch'
          ],
          correctIndex: 1,
          explanation: 'Excel đưa ra cảnh báo rằng việc Merge cells chỉ giữ lại duy nhất giá trị của ô phía trên bên trái và loại bỏ toàn bộ dữ liệu ở các ô còn lại.'
        }
      },
      {
        id: 'et-4-3',
        title: 'Kẻ Viền (Borders), Màu Nền (Fill), Chổi Định Dạng & Cell Styles',
        concept: 'Tăng cường tính trực quan và chuyên nghiệp của trang tính thông qua bảng màu, đường viền kẻ bảng và hệ thống mẫu Cell Styles có sẵn.',
        keyPoints: [
          'Đường viền bảng (Borders): Đường lưới mờ (Gridlines) của Excel mặc định sẽ không xuất hiện khi in, do đó cần kẻ viền Borders (All Borders, Thick Outside Border...).',
          'Tô màu nền (Fill Color): Dùng màu pastel nhẹ nhàng cho tiêu đề bảng và các dòng tổng kết (Total Row).',
          'Cell Styles: Bộ sưu tập mẫu định dạng chuyên nghiệp chuẩn Microsoft (như Title, Heading 1, Good, Bad, Neutral, 20% Accent 1...).',
          'Format Painter (Cây chổi định dạng): Sao chép toàn bộ định dạng từ ô mẫu sang các ô khác; nhấp đúp để giữ trạng thái sao chép liên tục.',
          'Xóa định dạng (Clear Formats): Home > Editing > Clear > Clear Formats để đưa ô về trạng thái trắng mà không làm mất dữ liệu.'
        ],
        shortcut: 'Alt + H, B, A: Kẻ nhanh đường viền All Borders cho toàn bộ vùng chọn; Ctrl + Shift + _ : Xóa bỏ mọi đường viền.',
        examTip: 'Đề thi MOS thường yêu cầu: "Áp dụng Cell Style là Accent 1 cho vùng tiêu đề A2:F2" - tìm đúng tên Style trong thư viện Cell Styles.',
        checkpointQuestion: {
          question: 'Để áp dụng định dạng có sẵn chuẩn hóa như "Heading 1" hay "Accent 1" cho một ô tiêu đề, ta sử dụng tính năng nào trên thẻ Home?',
          options: ['Format Cells', 'Cell Styles', 'Conditional Formatting', 'AutoFormat'],
          correctIndex: 1,
          explanation: 'Thư viện Cell Styles trên nhóm Styles thẻ Home chứa các kiểu mẫu trình bày chuyên nghiệp định sẵn của Excel.'
        }
      },
      {
        id: 'et-4-4',
        title: 'Định Dạng Có Điều Kiện (Conditional Formatting)',
        concept: 'Tự động áp dụng màu sắc, biểu tượng hoặc thanh dữ liệu cho các ô thỏa mãn tiêu chí quy định, giúp làm nổi bật ngay lập tức các xu hướng và ngoại lệ số liệu.',
        keyPoints: [
          'Highlight Cells Rules: Đổi màu các ô Lớn hơn (Greater Than), Nhỏ hơn (Less Than), Nằm giữa (Between), Bằng (Equal To) hoặc Chứa văn bản (Text that Contains).',
          'Top/Bottom Rules: Nổi bật Top 10 mục lớn nhất (Top 10 Items), Top 10% hoặc Dưới mức trung bình (Below Average).',
          'Data Bars: Chèn thanh màu bên trong ô tương ứng với độ lớn của con số, tạo hiệu ứng giống biểu đồ mini.',
          'Color Scales: Dải màu nhiệt (ví dụ từ Xanh lục đến Đỏ) thể hiện mức độ cao thấp của dữ liệu.',
          'Xóa quy tắc (Clear Rules): Home > Conditional Formatting > Clear Rules from Selected Cells (hoặc Entire Sheet).'
        ],
        shortcut: 'Alt + H, L : Mở nhanh menu Conditional Formatting.',
        examTip: 'Đề thi thường yêu cầu: "Tạo định dạng có điều kiện tô màu Light Red Fill with Dark Red Text cho các ô có giá trị dưới 5".',
        checkpointQuestion: {
          question: 'Tính năng nào trong Excel cho phép tự động đổi màu nền của các ô thành màu đỏ nếu điểm thi của học sinh nhỏ hơn 5.0?',
          options: ['Data Validation', 'Format Painter', 'Conditional Formatting', 'Cell Styles'],
          correctIndex: 2,
          explanation: 'Conditional Formatting (Định dạng có điều kiện) sẽ tự động kiểm tra giá trị và áp dụng định dạng khi thỏa mãn điều kiện < 5.0.'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-4-1',
        title: 'Áp dụng định dạng có điều kiện cho ô điểm dưới 5',
        instruction: 'Nhấp chọn nút Conditional Formatting < 5 trên nhóm Styles thẻ Home.',
        hint: 'Nhấp Home > nhóm Styles > Conditional Formatting < 5.',
        targetType: 'ribbon-action',
        actionKey: 'excel-cond-format-lessthan'
      },
      {
        id: 'etask-4-2',
        title: 'Gộp ô và căn giữa tiêu đề bảng',
        instruction: 'Nhấp chọn nút lệnh Merge & Center trên nhóm Alignment thẻ Home.',
        hint: 'Nhấp Home > nhóm Alignment > Merge & Center.',
        targetType: 'ribbon-action',
        actionKey: 'excel-merge-center'
      },
      {
        id: 'etask-4-3',
        title: 'Định dạng dấu phân cách hàng nghìn (Comma Style)',
        instruction: 'Bấm chọn nút Comma Style trên nhóm Number thẻ Home.',
        hint: 'Nhấp Home > nhóm Number > Comma Style.',
        targetType: 'ribbon-action',
        actionKey: 'excel-format-comma'
      }
    ],
    quiz: [
      {
        id: 'eq-4-1',
        question: 'Muốn định dạng một con số 1500000 thành dạng "1,500,000" có dấu phân cách hàng nghìn nhanh nhất trên thẻ Home, ta chọn nút lệnh nào?',
        options: ['Percent Style (%)', 'Comma Style (,)', 'Currency ($)', 'Increase Decimal'],
        correctIndex: 1,
        explanation: 'Nút lệnh Comma Style (biểu tượng dấu phẩy) tự động thêm phân tách hàng nghìn và 2 chữ số thập phân mặc định.'
      },
      {
        id: 'eq-4-2',
        question: 'Tổ hợp phím nào dùng để ngắt dòng chủ động tại một vị trí mong muốn bên trong cùng một ô tính?',
        options: ['Shift + Enter', 'Alt + Enter', 'Ctrl + Enter', 'Tab + Enter'],
        correctIndex: 1,
        explanation: 'Alt + Enter chèn một dấu ngắt dòng cứng tại vị trí con trỏ chuột bên trong ô tính.'
      },
      {
        id: 'eq-4-3',
        question: 'Công cụ nào dùng để sao chép toàn bộ định dạng phông chữ, màu sắc, viền kẻ từ một ô mẫu sang các ô khác?',
        options: ['AutoFill', 'Format Painter (Cây chổi)', 'Copy Values', 'Cell Styles'],
        correctIndex: 1,
        explanation: 'Format Painter (biểu tượng cây chổi quét sơn trên thẻ Home) dùng để sao chép nhanh định dạng giữa các đối tượng.'
      },
      {
        id: 'eq-4-4',
        question: 'Đường viền lưới mặc định (Gridlines) của trang tính Excel có tự động hiển thị trên giấy khi in ra không?',
        options: [
          'Luôn luôn tự động in ra giấy',
          'Mặc định không in ra giấy trừ khi được bật tùy chọn Print Gridlines trong Page Setup',
          'Chỉ in ra khi có màu nền',
          'Chỉ in ra với các ô có công thức'
        ],
        correctIndex: 1,
        explanation: 'Đường lưới mặc định chỉ phục vụ việc quan sát trên màn hình, khi in muốn có viền ta phải kẻ Borders hoặc tích chọn Print Gridlines.'
      },
      {
        id: 'eq-4-5',
        question: 'Khi muốn xóa bỏ hoàn toàn tất cả các quy tắc định dạng có điều kiện trên trang tính hiện hành, ta vào đâu?',
        options: [
          'Home > Editing > Clear All',
          'Home > Conditional Formatting > Clear Rules > Clear Rules from Entire Sheet',
          'Data > Data Validation > Clear All',
          'Review > Delete All'
        ],
        correctIndex: 1,
        explanation: 'Vào Conditional Formatting > Clear Rules > Clear Rules from Entire Sheet để dọn sạch mọi quy tắc màu mà vẫn giữ nguyên dữ liệu gốc.'
      }
    ]
  },

  // ==========================================
  // BÀI 5: XEM VÀ IN ẤN WORKBOOKS (VIEWS & PRINTING)
  // ==========================================
  {
    id: 'excel-lesson-5',
    moduleId: 'excel',
    order: 5,
    title: 'Xem và in ấn sổ tính (Views & Printing)',
    summary: 'Làm việc với các cửa sổ, chia màn hình (Split Panes), cố định hàng cột (Freeze Panes), Zoom, chế độ xem Page Layout/Page Break Preview, ngắt trang, thiết lập trang in Page Setup, in lặp tiêu đề (Print Titles) và tùy biến Header/Footer.',
    durationMinutes: 20,
    theories: [
      {
        id: 'et-5-1',
        title: 'Cố Định Hàng Cột (Freeze Panes) & Chia Cửa Sổ (Split Panes)',
        concept: 'Khi làm việc với các bảng dữ liệu hàng nghìn dòng, cố định tiêu đề giúp người dùng luôn nhận biết được ý nghĩa của từng cột khi cuộn màn hình xuống dưới.',
        keyPoints: [
          'Freeze Top Row: Khóa cố định hàng đầu tiên (Hàng 1) của trang tính luôn hiển thị khi cuộn dọc.',
          'Freeze First Column: Khóa cố định cột đầu tiên (Cột A) luôn hiển thị khi cuộn ngang.',
          'Freeze Panes (Tùy chọn): Khóa toàn bộ các hàng phía trên và các cột bên trái của ô đang chọn (Active Cell). Ví dụ: Muốn khóa hàng 1, 2 và cột A, đặt con trỏ tại ô B3 rồi chọn Freeze Panes.',
          'Unfreeze Panes: Hủy bỏ trạng thái đóng băng để trang tính cuộn bình thường.',
          'Split Panes: Chia cửa sổ hiển thị thành 2 hoặc 4 khung nhìn độc lập, cho phép so sánh 2 vùng dữ liệu xa nhau trên cùng một sheet.'
        ],
        shortcut: 'Alt + W, F, F: Kích hoạt hoặc hủy bỏ Freeze Panes; Alt + W, S: Bật hoặc tắt chia khung Split.',
        examTip: 'Đề thi MOS thường yêu cầu: "Cố định từ hàng 1 đến hàng 3 để luôn nhìn thấy tiêu đề". Hãy đặt con trỏ chuột ở ô A4 trước khi chọn View > Freeze Panes.',
        checkpointQuestion: {
          question: 'Để khóa cố định 2 hàng đầu tiên (Hàng 1 và Hàng 2) cùng với cột đầu tiên (Cột A), ta đặt con trỏ tại ô nào trước khi chọn View > Freeze Panes?',
          options: ['Ô A2', 'Ô B2', 'Ô B3', 'Ô C3'],
          correctIndex: 2,
          explanation: 'Ô B3 nằm ngay dưới hàng 2 và nằm ngay bên phải cột A; do đó chọn Freeze Panes tại ô B3 sẽ khóa toàn bộ hàng 1-2 và cột A.'
        }
      },
      {
        id: 'et-5-2',
        title: 'Các Chế Độ Xem Bảng Tính & Ngắt Trang (Page Breaks)',
        concept: 'Excel cung cấp nhiều dạng xem linh hoạt phục vụ các giai đoạn: Nhập liệu, Căn chỉnh bố cục in ấn và Kiểm soát ranh giới từng trang in.',
        keyPoints: [
          'Normal View: Chế độ xem tiêu chuẩn mặc định, tối ưu hóa tốc độ nhập liệu và tính toán công thức.',
          'Page Layout View: Hiển thị trang tính dưới dạng từng trang giấy thực tế, cho phép chèn và xem trực quan Header, Footer và thước đo lề.',
          'Page Break Preview: Hiển thị các đường nét đứt màu xanh thể hiện ranh giới phân trang in; cho phép kéo thả đường ranh giới để ép nội dung vào số trang mong muốn.',
          'Chèn ngắt trang thủ công (Insert Page Break): Page Layout > Page Setup > Breaks > Insert Page Break.',
          'Reset All Page Breaks: Khôi phục lại ranh giới phân trang tự động ban đầu của Excel.'
        ],
        shortcut: 'Alt + W, I : Mở chế độ xem Page Break Preview; Alt + W, P : Mở chế độ Page Layout.',
        examTip: 'Khi đề bài yêu cầu chỉ in dữ liệu trên đúng 1 trang rộng và 1 trang cao, hãy dùng Page Break Preview kéo đường viền xanh bao trọn vùng dữ liệu.',
        checkpointQuestion: {
          question: 'Chế độ xem nào trong Excel hiển thị ranh giới các trang in bằng các đường nét đứt màu xanh cho phép kéo thả trực quan để điều chỉnh?',
          options: ['Normal View', 'Page Layout View', 'Page Break Preview', 'Custom Views'],
          correctIndex: 2,
          explanation: 'Page Break Preview (Xem trước ngắt trang) hiển thị ranh giới trang in bằng các đường màu xanh và số thứ tự Page 1, Page 2.'
        }
      },
      {
        id: 'et-5-3',
        title: 'Thiết Lập Trang In (Page Setup), Khổ Giấy & In Lặp Tiêu Đề (Print Titles)',
        concept: 'Cấu hình trang in chuẩn đảm bảo tài liệu bảng tính in ra đầy đủ, không bị rớt cột sang trang thừa và tiêu đề bảng luôn xuất hiện ở đầu mỗi trang in.',
        keyPoints: [
          'Margins, Orientation & Size: Thiết lập lề giấy (Normal, Narrow, Wide), hướng giấy (Portrait - dọc, Landscape - ngang) và khổ giấy (A4, Letter).',
          'Vùng in chỉ định (Set Print Area): Chỉ in đúng vùng ô được chọn thay vì in toàn bộ trang tính khổng lồ.',
          'In lặp lại tiêu đề hàng/cột (Print Titles): Thiết lập mục "Rows to repeat at top" (ví dụ: $1:$2) để khi in tài liệu nhiều trang, hàng tiêu đề tự động xuất hiện ở đầu mọi trang.',
          'In lưới và tiêu đề hàng cột: Tích chọn "Gridlines" và "Headings" trong nhóm Sheet Options trên thẻ Page Layout.',
          'Tỷ lệ thu phóng in (Scale to Fit): Ép bảng tính vừa khít 1 trang ngang (Width: 1 page).'
        ],
        shortcut: 'Ctrl + F2 hoặc Ctrl + P : Mở ngay cửa sổ Print Preview (Xem trước bản in) trong Backstage.',
        examTip: 'Đề thi MOS cực kỳ hay gặp câu hỏi: "Cấu hình để hàng 1 tự động in lặp lại ở đầu tất cả các trang in" -> Page Layout > Print Titles > Rows to repeat at top: $1:$1.',
        checkpointQuestion: {
          question: 'Muốn khi in một bảng dữ liệu dài 20 trang giấy thì hàng tiêu đề bảng luôn tự động lặp lại ở đầu mỗi trang in, ta sử dụng tính năng nào?',
          options: ['Freeze Panes', 'Print Titles', 'Set Print Area', 'Page Break'],
          correctIndex: 1,
          explanation: 'Tính năng Print Titles trên thẻ Page Layout có mục "Rows to repeat at top" dùng để in lặp lại hàng tiêu đề trên mọi trang giấy.'
        }
      },
      {
        id: 'et-5-4',
        title: 'Tùy Biến Đầu Trang & Chân Trang (Header & Footer)',
        concept: 'Đầu trang và chân trang cung cấp thông tin phụ trợ quan trọng như số trang, tổng số trang, tên tệp, ngày in hoặc tên cơ quan.',
        keyPoints: [
          'Ba phần riêng biệt: Header và Footer đều được chia thành 3 khung: Left Section (trái), Center Section (giữa), Right Section (phải).',
          'Mã trường tự động (Elements): &[Page] (Số trang hiện tại), &[Pages] (Tổng số trang), &[Date] (Ngày hiện tại), &[File] (Tên tệp), &[Sheet] (Tên trang tính).',
          'Chèn Header/Footer: Vào chế độ Page Layout View hoặc qua hộp thoại Page Setup > thẻ Header/Footer.',
          'Different First Page: Đánh dấu nếu muốn trang đầu tiên không có Header/Footer.',
          'Different Odd & Even Pages: Thiết lập đầu trang/chân trang khác nhau giữa trang chẵn và trang lẻ.'
        ],
        shortcut: 'Thẻ ngữ cảnh Header & Footer Tools tự động xuất hiện trên Ribbon khi nhấp vào vùng Header/Footer trong chế độ Page Layout.',
        examTip: 'Khi đề thi yêu cầu chèn định dạng số trang dạng "Page 1 of ?" ở chân trang giữa, chọn mẫu Footer có sẵn: Page 1 of ?.',
        checkpointQuestion: {
          question: 'Mã trường nào sau đây trong phần Header/Footer của Excel sẽ tự động chèn tổng số trang của tài liệu?',
          options: ['&[Page]', '&[Pages]', '&[Total]', '&[NumPages]'],
          correctIndex: 1,
          explanation: '&[Page] trả về số trang hiện hành, trong khi &[Pages] trả về tổng số trang của toàn bộ tài liệu in.'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-5-1',
        title: 'Bật kiểm tra công thức trước khi in ấn',
        instruction: 'Nhấp chọn nút Show Formulas trên thẻ Formulas để rà soát các công thức trước khi xuất bản.',
        hint: 'Nhấp Formulas > nhóm Formula Auditing > Show Formulas.',
        targetType: 'ribbon-action',
        actionKey: 'excel-show-formulas'
      },
      {
        id: 'etask-5-2',
        title: 'Định dạng dấu phẩy phân cách hàng nghìn cho bảng in',
        instruction: 'Nhấp chọn Comma Style trên nhóm Number của thẻ Home.',
        hint: 'Nhấp Home > nhóm Number > Comma Style.',
        targetType: 'ribbon-action',
        actionKey: 'excel-format-comma'
      },
      {
        id: 'etask-5-3',
        title: 'Căn giữa tiêu đề chính của báo cáo',
        instruction: 'Nhấp chọn nút Merge & Center trên nhóm Alignment thẻ Home.',
        hint: 'Nhấp Home > nhóm Alignment > Merge & Center.',
        targetType: 'ribbon-action',
        actionKey: 'excel-merge-center'
      }
    ],
    quiz: [
      {
        id: 'eq-5-1',
        question: 'Để cuộn xem bảng tính dài mà hàng tiêu đề trên cùng không bao giờ bị trôi khuất khỏi màn hình, ta sử dụng tính năng nào?',
        options: ['Split Panes', 'Freeze Panes > Freeze Top Row', 'Hide Rows', 'Group Rows'],
        correctIndex: 1,
        explanation: 'Freeze Top Row khóa cứng dòng đầu tiên để nó luôn hiển thị trên đỉnh màn hình khi cuộn chuột xuống dưới.'
      },
      {
        id: 'eq-5-2',
        question: 'Trong hộp thoại Page Setup, mục nào cho phép khai báo các hàng sẽ tự động in lặp lại ở đầu tất cả các trang giấy in?',
        options: ['Print area', 'Rows to repeat at top', 'Columns to repeat at left', 'Gridlines'],
        correctIndex: 1,
        explanation: 'Mục "Rows to repeat at top" trên thẻ Sheet của hộp thoại Page Setup (hoặc nút Print Titles) chịu trách nhiệm in lặp tiêu đề hàng.'
      },
      {
        id: 'eq-5-3',
        question: 'Tổ hợp phím tắt nhanh nào giúp mở ngay chế độ xem trước khi in (Print Preview) của Excel?',
        options: ['Ctrl + P hoặc Ctrl + F2', 'Ctrl + Shift + P', 'Alt + P', 'F12'],
        correctIndex: 0,
        explanation: 'Ctrl + P hoặc Ctrl + F2 mở ngay màn hình Print Preview trong Backstage.'
      },
      {
        id: 'eq-5-4',
        question: 'Tính năng nào giúp chia màn hình trang tính thành 4 góc nhìn độc lập để so sánh các phần dữ liệu ở xa nhau?',
        options: ['Freeze Panes', 'Split Panes', 'Arrange All', 'New Window'],
        correctIndex: 1,
        explanation: 'Nút lệnh Split (chia khung) trên thẻ View chia cửa sổ làm việc thành 2 hoặc 4 phần có thanh cuộn độc lập.'
      },
      {
        id: 'eq-5-5',
        question: 'Khi in ấn, nếu muốn chỉ in duy nhất một vùng ô từ A1 đến E20 thay vì in toàn bộ bảng tính, ta thực hiện thao tác nào?',
        options: [
          'Chọn A1:E20 rồi xóa tất cả các ô khác',
          'Chọn A1:E20 > Page Layout > Print Area > Set Print Area',
          'Ẩn tất cả các cột từ F trở đi',
          'Chuyển sang chế độ xem Page Break Preview'
        ],
        correctIndex: 1,
        explanation: 'Tính năng Set Print Area trên thẻ Page Layout giới hạn khu vực in ấn chính xác theo vùng ô được chọn.'
      }
    ]
  },

  // ==========================================
  // BÀI 6: LÀM VIỆC VỚI BIỂU ĐỒ (CHARTS & SPARKLINES)
  // ==========================================
  {
    id: 'excel-lesson-6',
    moduleId: 'excel',
    order: 6,
    title: 'Làm việc với Biểu đồ (Charts)',
    summary: 'Tạo các loại biểu đồ chuẩn (Cột Clustered Column, Tròn Pie, Đường Line), quản lý Chart Sheet, hoán đổi hàng/cột (Switch Row/Column), tùy biến các thành phần Chart Elements (Tiêu đề, Nhãn số liệu Data Labels, Chú giải Legend), kiểu dáng Chart Styles, biểu đồ thu nhỏ Sparklines và Quick Analysis.',
    durationMinutes: 24,
    theories: [
      {
        id: 'et-6-1',
        title: 'Lựa Chọn Loại Biểu Đồ Chuẩn Phù Hợp Mục Tiêu',
        concept: 'Biểu đồ trực quan hóa các dãy số phức tạp thành hình ảnh trực giác. Chọn đúng biểu đồ giúp người xem nắm bắt ngay thông điệp so sánh hoặc cơ cấu.',
        keyPoints: [
          'Biểu đồ cột (Column / Bar Chart): Dùng để so sánh giá trị giữa các danh mục độc lập (ví dụ: so sánh doanh số giữa các chi nhánh, điểm số giữa các tổ).',
          'Biểu đồ đường (Line Chart): Thể hiện xu hướng biến thiên liên tục của dữ liệu theo chuỗi thời gian (ví dụ: biến động nhiệt độ, tăng trưởng dân số).',
          'Biểu đồ hình tròn (Pie Chart): Thể hiện tỷ lệ phần trăm đóng góp của các phần tử trong một tổng thể 100%. Tối ưu nhất khi có dưới 7 phần tử.',
          'Tạo Chart Sheet riêng: Di chuyển biểu đồ sang một trang tính chuyên biệt độc lập bằng lệnh Move Chart > New sheet.',
          'Phím tắt tạo biểu đồ tức thì: Chọn bảng dữ liệu và nhấn Alt + F1 để chèn biểu đồ cột mặc định trên sheet hiện tại.'
        ],
        shortcut: 'Alt + F1 : Vẽ nhanh biểu đồ cột nhúng ngay trên trang tính; F11 : Tạo biểu đồ toàn màn hình trên một Chart Sheet riêng.',
        examTip: 'Đề thi MOS thường yêu cầu: "Chuyển biểu đồ sang một sheet biểu đồ mới có tên là Chart1" -> Chọn biểu đồ > Chart Design > Move Chart > New sheet: Chart1.',
        checkpointQuestion: {
          question: 'Để vẽ nhanh một biểu đồ hình cột mặc định nhúng ngay trong trang tính hiện hành từ vùng dữ liệu đang chọn, ta nhấn tổ hợp phím nào?',
          options: ['F1', 'Alt + F1', 'Ctrl + F1', 'Shift + F1'],
          correctIndex: 1,
          explanation: 'Alt + F1 chèn ngay biểu đồ cột vào sheet hiện tại; trong khi phím đơn F11 sẽ tạo ra một Chart Sheet độc lập.'
        }
      },
      {
        id: 'et-6-2',
        title: 'Tùy Biến Các Thành Phần Cốt Lõi Của Biểu Đồ (Chart Elements)',
        concept: 'Các thành phần chú giải giúp người đọc tự giải mã được toàn bộ thông số trên biểu đồ mà không cần nhìn lại bảng dữ liệu thô.',
        keyPoints: [
          'Chart Title: Tiêu đề biểu đồ nêu bật nội dung so sánh; có thể liên kết động với một ô tính bằng cách gõ = rồi nhấp vào ô đó.',
          'Axis Titles: Tiêu đề trục tung (đơn vị đo) và trục hoành (tên danh mục).',
          'Data Labels (Nhãn dữ liệu): Hiển thị con số giá trị thực tế ngay trên từng đỉnh cột hoặc lát cắt hình tròn (các vị trí: Outside End, Inside End, Center...).',
          'Legend (Chú giải): Bảng giải thích màu sắc đại diện cho từng chuỗi dữ liệu (vị trí: Top, Bottom, Left, Right).',
          'Data Table: Hiển thị bảng số liệu chi tiết đính kèm ngay phía dưới trục hoành của biểu đồ.'
        ],
        shortcut: 'Nhấp vào biểu tượng dấu cộng (+) màu xanh lá cây ở góc trên bên phải của biểu đồ để thêm/bớt nhanh Chart Elements.',
        examTip: 'Đề bài thường yêu cầu: "Thêm Data Labels ở vị trí Outside End cho chuỗi dữ liệu" -> Nhấp biểu tượng (+) > Data Labels > Outside End.',
        checkpointQuestion: {
          question: 'Thành phần nào trong biểu đồ có chức năng hiển thị con số giá trị cụ thể ngay trên từng cột dữ liệu hoặc lát cắt hình tròn?',
          options: ['Axis Titles', 'Data Labels', 'Legend', 'Gridlines'],
          correctIndex: 1,
          explanation: 'Data Labels (Nhãn dữ liệu) in trực tiếp số liệu hoặc phần trăm lên từng phần tử của biểu đồ.'
        }
      },
      {
        id: 'et-6-3',
        title: 'Chuyển Đổi Hàng/Cột (Switch Row/Column), Bố Cục Nhanh & Chart Styles',
        concept: 'Khi biểu đồ hiển thị không đúng nhóm dữ liệu mong muốn, thao tác hoán đổi hàng/cột và thay đổi Style giúp làm mới hoàn toàn giao diện biểu đồ.',
        keyPoints: [
          'Switch Row/Column: Hoán đổi dữ liệu giữa trục hoành (Category) và các chuỗi số liệu (Legend Series) chỉ bằng 1 cú nhấp chuột.',
          'Quick Layout: Áp dụng các bố cục chuẩn định sẵn gồm sự kết hợp giữa tiêu đề, chú giải, nhãn và đường gióng.',
          'Chart Styles: Bộ sưu tập phong cách thẩm mỹ của biểu đồ (hiệu ứng bóng đổ, cột 3D, nền tối, hoa văn viền...).',
          'Change Colors: Thay đổi bảng màu đơn sắc hoặc đa sắc theo chủ đề của sổ tính.',
          'Văn bản thay thế (Alt Text): Nhập mô tả trợ năng cho biểu đồ để hỗ trợ người khiếm thị đọc nội dung qua phần mềm đọc màn hình.'
        ],
        shortcut: 'Thẻ ngữ cảnh Chart Design và Format tự động kích hoạt trên Ribbon khi người dùng nhấp chọn biểu đồ.',
        examTip: 'MOS 2019 rất chú trọng mục Alt Text: Nhấp chuột phải vào biểu đồ > Edit Alt Text > Nhập phần mô tả đúng như đề bài yêu cầu.',
        checkpointQuestion: {
          question: 'Nút lệnh "Switch Row/Column" trên thẻ Chart Design có chức năng gì?',
          options: [
            'Xóa dữ liệu nguồn',
            'Hoán đổi trục dữ liệu giữa các hàng và các cột trong bảng số liệu nguồn',
            'Đổi loại biểu đồ từ cột sang tròn',
            'Di chuyển biểu đồ sang trang tính mới'
          ],
          correctIndex: 1,
          explanation: 'Switch Row/Column hoán vị các hàng và các cột để thay đổi góc nhìn phân tích dữ liệu trên biểu đồ.'
        }
      },
      {
        id: 'et-6-4',
        title: 'Biểu Đồ Thu Nhỏ Trong Ô (Sparklines) & Công Cụ Phân Tích Nhanh (Quick Analysis)',
        concept: 'Sparklines là các biểu đồ tí hon nằm gọn bên trong một ô tính đơn lẻ, cho phép quan sát xu hướng của từng dòng dữ liệu cạnh nhau.',
        keyPoints: [
          'Ba loại Sparkline: Line (đường), Column (cột) và Win/Loss (thắng/thua dùng cho lãi/lỗ).',
          'Chèn Sparkline: Insert > nhóm Sparklines > Chọn loại biểu đồ > Chỉ định Data Range (vùng dữ liệu) và Location Range (ô chứa biểu đồ).',
          'Đánh dấu điểm đặc biệt: Tích chọn High Point (điểm cao nhất), Low Point (điểm thấp nhất), First Point, Last Point trên thẻ Sparkline.',
          'Xóa Sparkline: Không thể xóa bằng phím Delete thông thường; phải vào thẻ Sparkline > Clear > Clear Selected Sparklines.',
          'Quick Analysis (Ctrl + Q): Nút icon nhỏ xuất hiện ở góc dưới khối ô vừa chọn, cho phép áp dụng nhanh Formatting, Charts, Totals, Tables và Sparklines.'
        ],
        shortcut: 'Ctrl + Q : Kích hoạt nhanh bảng công cụ Quick Analysis cho vùng dữ liệu vừa chọn.',
        examTip: 'Để xóa Sparkline, tuyệt đối không dùng phím Delete trên bàn phím vì sẽ không có tác dụng; bắt buộc phải dùng lệnh Clear trên thẻ Sparkline.',
        checkpointQuestion: {
          question: 'Điểm đặc trưng nổi bật nhất của biểu đồ thu nhỏ Sparklines trong Excel là gì?',
          options: [
            'Nó là một tệp hình ảnh độc lập',
            'Nó nằm gọn hoàn toàn bên trong một ô tính đơn lẻ',
            'Nó bắt buộc phải nằm trên một sheet riêng',
            'Nó chỉ hỗ trợ dữ liệu kiểu chữ'
          ],
          correctIndex: 1,
          explanation: 'Sparkline là biểu đồ mini được vẽ trực tiếp bên trong một ô tính duy nhất để mô tả trực quan xu hướng của dòng số liệu đó.'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-6-1',
        title: 'Chèn biểu đồ hình cột Clustered Column',
        instruction: 'Bấm chọn nút Clustered Column trên nhóm Charts thẻ Insert.',
        hint: 'Nhấp Insert > nhóm Charts > Clustered Column.',
        targetType: 'ribbon-action',
        actionKey: 'excel-insert-chart-column'
      },
      {
        id: 'etask-6-2',
        title: 'Chèn biểu đồ hình tròn cơ cấu (Pie Chart)',
        instruction: 'Bấm chọn nút Pie Chart trên nhóm Charts thẻ Insert.',
        hint: 'Nhấp Insert > nhóm Charts > Pie Chart.',
        targetType: 'ribbon-action',
        actionKey: 'excel-insert-chart-pie'
      },
      {
        id: 'etask-6-3',
        title: 'Hiển thị nhãn số liệu cụ thể (Data Labels)',
        instruction: 'Bấm chọn nút Add Data Labels trên nhóm Charts thẻ Insert để in số liệu lên đỉnh các cột.',
        hint: 'Nhấp Insert > nhóm Charts > Add Data Labels.',
        targetType: 'ribbon-action',
        actionKey: 'excel-chart-datalabels'
      }
    ],
    quiz: [
      {
        id: 'eq-6-1',
        question: 'Khi muốn thể hiện cơ cấu tỷ lệ phần trăm các loại chi phí trong một dự án nghiên cứu, loại biểu đồ nào thích hợp nhất?',
        options: ['Biểu đồ đường (Line Chart)', 'Biểu đồ tán xạ (Scatter Chart)', 'Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ dạng sóng'],
        correctIndex: 2,
        explanation: 'Biểu đồ hình tròn (Pie Chart) chuyên dùng để mô tả cơ cấu các phần tạo nên một tổng thể 100%.'
      },
      {
        id: 'eq-6-2',
        question: 'Để thể hiện xu hướng tăng trưởng hoặc suy giảm liên tục qua các tháng trong năm, loại biểu đồ nào tối ưu nhất?',
        options: ['Biểu đồ đường (Line Chart)', 'Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ Treemap', 'Biểu đồ phễu (Funnel)'],
        correctIndex: 0,
        explanation: 'Biểu đồ đường (Line Chart) là lựa chọn tối ưu để quan sát xu hướng thay đổi liên tục theo dòng thời gian.'
      },
      {
        id: 'eq-6-3',
        question: 'Tổ hợp phím tắt nào dùng để mở nhanh công cụ Phân tích nhanh (Quick Analysis) cho một vùng ô vừa chọn?',
        options: ['Ctrl + Q', 'Ctrl + A', 'Ctrl + W', 'Ctrl + Shift + A'],
        correctIndex: 0,
        explanation: 'Ctrl + Q mở công cụ Quick Analysis để tạo nhanh biểu đồ, định dạng điều kiện hoặc hàm tổng kết.'
      },
      {
        id: 'eq-6-4',
        question: 'Làm thế nào để xóa bỏ một biểu đồ thu nhỏ (Sparkline) ra khỏi một ô tính?',
        options: [
          'Chọn ô đó rồi bấm phím Delete trên bàn phím',
          'Vào thẻ ngữ cảnh Sparkline > chọn Clear > Clear Selected Sparklines',
          'Nhấp chuột phải chọn Cut',
          'Dùng phím Backspace'
        ],
        correctIndex: 1,
        explanation: 'Phím Delete không thể xóa Sparkline; bắt buộc phải dùng công cụ Clear trên thẻ ngữ cảnh Sparkline.'
      },
      {
        id: 'eq-6-5',
        question: 'Phím tắt nào giúp vẽ biểu đồ toàn màn hình sang một trang tính riêng biệt (Chart Sheet)?',
        options: ['F1', 'F5', 'F11', 'Alt + F1'],
        correctIndex: 2,
        explanation: 'Phím F11 tự động tạo một biểu đồ cột trên một Chart Sheet độc lập hoàn toàn.'
      }
    ]
  },

  // ==========================================
  // BÀI 7: TỔ CHỨC DỮ LIỆU (TABLES, SORT & FILTER)
  // ==========================================
  {
    id: 'excel-lesson-7',
    moduleId: 'excel',
    order: 7,
    title: 'Tổ chức dữ liệu (Tables, Sort & Filter)',
    summary: 'Đặt tên vùng dữ liệu (Named Ranges) và điều hướng Go To, chuyển đổi vùng ô thành bảng chuẩn Excel Table, tùy biến Table Styles, bật hàng tổng kết Total Row, chuyển đổi Table về vùng ô chuẩn, sắp xếp đa cấp (Multi-level Sort) và lọc dữ liệu với AutoFilter.',
    durationMinutes: 22,
    theories: [
      {
        id: 'et-7-1',
        title: 'Đặt Tên Vùng Dữ Liệu (Named Ranges) & Điều Hướng Nhanh',
        concept: 'Gán một cái tên có ý nghĩa (ví dụ: BangGia, TyGiaUSD) cho một ô hoặc vùng ô giúp công thức trở nên rõ nghĩa, dễ đọc và dễ quản lý.',
        keyPoints: [
          'Cách đặt tên nhanh: Chọn vùng ô cần đặt tên > Nhấp chuột vào ô Name Box (bên trái thanh công thức) > Nhập tên viết liền không dấu > Nhấn Enter.',
          'Quy tắc đặt tên: Tên phải bắt đầu bằng chữ cái hoặc dấu gạch dưới (_); không chứa khoảng trắng; không trùng với địa chỉ ô (như A1, C10); không phân biệt chữ hoa chữ thường.',
          'Quản lý tên (Name Manager): Formulas > Name Manager (Ctrl + F3) để chỉnh sửa tọa độ vùng tham chiếu hoặc xóa tên.',
          'Sử dụng tên trong công thức: Ví dụ thay vì viết =SUM(C2:C100), ta có thể viết =SUM(DoanhThu).',
          'Điều hướng với Go To: Nhấn phím F5 > Chọn tên vùng trong danh sách để con trỏ nhảy ngay đến vùng dữ liệu đó.'
        ],
        shortcut: 'Ctrl + F3 : Mở hộp thoại Name Manager; F3 : Mở danh sách Paste Name để dán tên vào công thức; F5 : Mở hộp thoại Go To.',
        examTip: 'Đề thi MOS luôn có câu hỏi: "Đặt tên cho vùng ô B2:E20 là BangDiem". Sau khi gõ tên vào Name Box bắt buộc phải nhấn phím Enter để lưu.',
        checkpointQuestion: {
          question: 'Tên vùng nào sau đây là HỢP LỆ theo quy tắc đặt tên Named Range của Microsoft Excel?',
          options: ['1_BangDiem', 'Bang Diem', 'Bang_Diem_2024', 'A1'],
          correctIndex: 2,
          explanation: 'Tên vùng phải bắt đầu bằng chữ cái/gạch dưới, không chứa khoảng trắng và không trùng với địa chỉ ô.'
        }
      },
      {
        id: 'et-7-2',
        title: 'Tạo Bảng Chuẩn Excel Table, Table Styles & Hàng Tổng Kết (Total Row)',
        concept: 'Chuyển đổi một vùng ô thông thường thành Bảng Excel chuyên nghiệp (Excel Table) mang lại hàng loạt tính năng tự động: Tự động mở rộng khi thêm dữ liệu, tự động sao chép công thức và định dạng sọc dòng.',
        keyPoints: [
          'Tạo bảng: Chọn vùng dữ liệu > Nhấn Ctrl + T hoặc Home > Format as Table. Đánh dấu tích vào "My table has headers" nếu bảng đã có hàng tiêu đề.',
          'Đặt tên bảng (Table Name): Chọn bảng > Thẻ Table Design > Nhập tên vào ô Table Name ở góc trái.',
          'Total Row (Hàng tổng kết): Tích chọn "Total Row" trên thẻ Table Design; ở dòng cuối cùng sẽ xuất hiện menu thả xuống cho phép chọn nhanh hàm SUM, AVERAGE, COUNT, MAX, MIN...',
          'Tùy chọn phong cách bảng: Header Row, Banded Rows (sọc hàng xen kẽ), First Column, Last Column, Banded Columns.',
          'Chuyển bảng thành vùng ô thường (Convert to Range): Table Design > Convert to Range để hủy bỏ cấu trúc bảng mà vẫn giữ nguyên màu sắc và dữ liệu.'
        ],
        shortcut: 'Ctrl + T hoặc Ctrl + L : Chuyển nhanh vùng dữ liệu thành Excel Table; Ctrl + Shift + T : Bật hoặc tắt hàng Total Row.',
        examTip: 'Đề thi thường yêu cầu: "Chuyển bảng Table1 thành vùng ô thông thường nhưng vẫn giữ nguyên định dạng" -> Table Design > Convert to Range.',
        checkpointQuestion: {
          question: 'Tổ hợp phím tắt nào dùng để chuyển đổi nhanh một vùng ô dữ liệu đang chọn thành bảng chuẩn Excel Table?',
          options: ['Ctrl + T', 'Ctrl + B', 'Alt + T', 'Ctrl + Shift + B'],
          correctIndex: 0,
          explanation: 'Ctrl + T (hoặc Ctrl + L) mở nhanh hộp thoại Create Table để biến vùng ô thành bảng thông minh.'
        }
      },
      {
        id: 'et-7-3',
        title: 'Sắp Xếp Dữ Liệu Đơn Cấp & Đa Cấp (Sort Data)',
        concept: 'Sắp xếp giúp tái cấu trúc bảng dữ liệu theo một trật tự logic: Tăng dần, giảm dần, theo thứ tự bảng chữ cái hoặc theo nhiều tiêu chí kết hợp.',
        keyPoints: [
          'Sắp xếp đơn cấp nhanh: Chọn một ô trong cột cần sắp xếp > Nhấp nút Sort A to Z (Tăng dần) hoặc Sort Z to A (Giảm dần) trên thẻ Data.',
          'Sắp xếp đa cấp (Multi-level Sort): Data > nhóm Sort & Filter > Sort. Cho phép thêm nhiều cấp độ (Add Level), ví dụ: Sắp xếp theo Lớp (tăng dần), nếu trùng Lớp thì sắp xếp theo Điểm (giảm dần).',
          'Tùy chọn "My data has headers": Bắt buộc phải tích chọn để Excel nhận diện hàng đầu là tiêu đề và không bị xáo trộn vào danh sách sắp xếp.',
          'Sắp xếp theo màu sắc (Sort by Color): Cho phép đưa các ô được tô màu đặc biệt lên trên cùng hoặc xuống dưới cùng.'
        ],
        shortcut: 'Alt + D, S hoặc Alt + A, S, S : Mở nhanh hộp thoại cấu hình sắp xếp đa cấp Sort.',
        examTip: 'Khi sắp xếp bảng dữ liệu, chỉ cần đặt con trỏ vào 1 ô trong cột rồi bấm Sort; tuyệt đối không bôi đen chỉ một cột vì có thể làm lệch dữ liệu của các cột khác.',
        checkpointQuestion: {
          question: 'Trong hộp thoại Sort, tùy chọn "My data has headers" mang ý nghĩa gì quan trọng?',
          options: [
            'Bảng tính không có tiêu đề',
            'Hàng đầu tiên là hàng tiêu đề cột, không tham gia vào quá trình xáo trộn sắp xếp',
            'Tự động tạo thêm một hàng tiêu đề mới',
            'Chỉ sắp xếp hàng đầu tiên'
          ],
          correctIndex: 1,
          explanation: 'Tùy chọn này bảo vệ hàng tiêu đề không bị cuốn vào quá trình sắp xếp dữ liệu.'
        }
      },
      {
        id: 'et-7-4',
        title: 'Lọc Dữ Liệu Tự Động Với AutoFilter',
        concept: 'AutoFilter cho phép lọc và chỉ hiển thị các dòng thỏa mãn điều kiện nhất định, tạm thời ẩn đi các dòng dữ liệu không liên quan.',
        keyPoints: [
          'Bật/tắt bộ lọc: Chọn bảng dữ liệu > Data > Filter (hoặc Home > Sort & Filter > Filter). Các mũi tên tam giác sẽ xuất hiện trên hàng tiêu đề.',
          'Lọc theo giá trị: Nhấp vào mũi tên lọc > Bỏ chọn (Select All) > Tích chọn những giá trị cụ thể muốn hiển thị.',
          'Lọc văn bản (Text Filters): Equals, Does Not Equal, Begins With, Ends With, Contains...',
          'Lọc số (Number Filters): Greater Than, Less Than, Between, Top 10, Above Average...',
          'Xóa bộ lọc (Clear Filter): Nhấp vào biểu tượng phễu trên cột đó > Clear Filter from... để hiển thị lại toàn bộ dữ liệu.'
        ],
        shortcut: 'Ctrl + Shift + L : Bật hoặc tắt nhanh tính năng lọc AutoFilter trên hàng tiêu đề; Alt + Mũi tên xuống : Mở menu lọc tại ô tiêu đề đang chọn.',
        examTip: 'Đề thi thường yêu cầu: "Lọc cột Điểm thi chỉ hiển thị những học sinh có điểm Lớn hơn hoặc bằng 8.0" -> Nhấp phễu cột Điểm > Number Filters > Greater Than Or Equal To: 8.0.',
        checkpointQuestion: {
          question: 'Tổ hợp phím tắt nào dùng để bật hoặc tắt nhanh tính năng lọc tự động AutoFilter trên hàng tiêu đề?',
          options: ['Ctrl + F', 'Ctrl + Shift + L', 'Ctrl + L', 'Alt + F'],
          correctIndex: 1,
          explanation: 'Ctrl + Shift + L bật hoặc tắt các nút mũi tên lọc AutoFilter trên dòng tiêu đề của bảng dữ liệu.'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-7-1',
        title: 'Bật tính năng lọc tự động AutoFilter',
        instruction: 'Nhấp chọn nút Filter (Ctrl+Shift+L) trên thẻ Data để bật các nút phễu lọc trên hàng tiêu đề.',
        hint: 'Nhấp Data > nhóm Sort & Filter > Filter.',
        targetType: 'ribbon-action',
        actionKey: 'excel-filter-toggle'
      },
      {
        id: 'etask-7-2',
        title: 'Sắp xếp danh sách theo thứ tự tăng dần',
        instruction: 'Nhấp chọn nút Sort A to Z trên thẻ Data để sắp xếp bảng tính.',
        hint: 'Nhấp Data > nhóm Sort & Filter > Sort A to Z.',
        targetType: 'ribbon-action',
        actionKey: 'excel-sort-asc'
      },
      {
        id: 'etask-7-3',
        title: 'Tính tổng cột điểm bằng hàm SUM',
        instruction: 'Nhập công thức =SUM(B3:B6) vào ô tính để tổng kết số liệu sau khi lọc.',
        hint: 'Gõ: =SUM(B3:B6)',
        targetType: 'cell-formula',
        actionKey: 'formula-sum',
        expectedValue: '=SUM(B3:B6)',
        targetRef: 'B7'
      }
    ],
    quiz: [
      {
        id: 'eq-7-1',
        question: 'Phím tắt nào giúp mở hộp thoại Name Manager để xem, sửa và xóa các vùng dữ liệu đã đặt tên?',
        options: ['Ctrl + F3', 'Alt + F3', 'Shift + F3', 'F3'],
        correctIndex: 0,
        explanation: 'Ctrl + F3 là phím tắt mở trực tiếp cửa sổ Name Manager.'
      },
      {
        id: 'eq-7-2',
        question: 'Khi một vùng ô đã được chuyển thành bảng chuẩn Excel Table, làm thế nào để hiển thị hàng tính tổng kết Total Row?',
        options: [
          'Gõ chữ "Total" vào dòng cuối',
          'Vào thẻ Table Design và tích chọn mục Total Row',
          'Chèn thêm một hàng mới và nhập hàm SUM',
          'Nhấp chuột phải chọn Insert Total'
        ],
        correctIndex: 1,
        explanation: 'Tích chọn ô "Total Row" trong nhóm Table Style Options trên thẻ ngữ cảnh Table Design.'
      },
      {
        id: 'eq-7-3',
        question: 'Lệnh nào dùng để hủy bỏ cấu trúc bảng Excel Table để đưa bảng về dạng các ô tính thông thường mà vẫn giữ nguyên màu sắc và dữ liệu?',
        options: ['Delete Table', 'Clear All', 'Convert to Range', 'Ungroup'],
        correctIndex: 2,
        explanation: 'Convert to Range trên thẻ Table Design đưa bảng trở lại thành vùng ô bình thường.'
      },
      {
        id: 'eq-7-4',
        question: 'Khi muốn sắp xếp bảng theo 2 tiêu chí: ưu tiên sắp xếp theo Cột A, nếu Cột A trùng nhau thì sắp xếp theo Cột B, ta chọn nút nào trong hộp thoại Sort?',
        options: ['Add Level', 'Options', 'Copy Level', 'Delete Level'],
        correctIndex: 0,
        explanation: 'Nút Add Level (Thêm cấp độ) cho phép bổ sung tiêu chí sắp xếp phụ (Then by...).'
      },
      {
        id: 'eq-7-5',
        question: 'Sau khi áp dụng bộ lọc AutoFilter, các dòng không thỏa mãn điều kiện lọc sẽ như thế nào?',
        options: [
          'Bị xóa vĩnh viễn khỏi trang tính',
          'Tạm thời bị ẩn đi và có thể hiển thị lại khi xóa bộ lọc',
          'Bị chuyển sang một sheet mới',
          'Bị bôi đen toàn bộ chữ'
        ],
        correctIndex: 1,
        explanation: 'AutoFilter chỉ tạm thời ẩn (hide) các dòng không thỏa mãn, số thứ tự hàng sẽ chuyển sang màu xanh dương.'
      }
    ]
  },

  // ==========================================
  // BÀI 8: SỬ DỤNG CÔNG CỤ DỮ LIỆU & CỘNG TÁC (DATA TOOLS & COLLABORATION)
  // ==========================================
  {
    id: 'excel-lesson-8',
    moduleId: 'excel',
    order: 8,
    title: 'Sử dụng công cụ dữ liệu & cộng tác (Data Tools & Collaboration)',
    summary: 'Tùy biến thanh công cụ truy cập nhanh Quick Access Toolbar (QAT), tìm kiếm và thay thế (Find & Replace), siêu liên kết Hyperlinks, nhập dữ liệu từ tệp .txt/.csv, thuộc tính tài liệu Document Properties, kiểm tra thông tin ẩn Document Inspector và kiểm tra trợ năng Accessibility Checker.',
    durationMinutes: 20,
    theories: [
      {
        id: 'et-8-1',
        title: 'Tùy Biến Thanh Công Cụ Truy Cập Nhanh (Quick Access Toolbar - QAT)',
        concept: 'Thanh QAT nằm ở góc trên cùng bên trái màn hình Excel, chứa các nút lệnh thường dùng nhất giúp người dùng thao tác chỉ với 1 cú nhấp chuột bất kể đang ở thẻ nào.',
        keyPoints: [
          'Các lệnh mặc định: AutoSave, Save, Undo, Redo.',
          'Thêm lệnh vào QAT: Nhấp chuột phải vào bất kỳ nút lệnh nào trên Ribbon > Chọn "Add to Quick Access Toolbar".',
          'Tùy biến nâng cao: File > Options > Quick Access Toolbar. Cho phép chọn các lệnh từ danh sách "Commands Not in the Ribbon".',
          'Vị trí hiển thị: Có thể chọn "Show Below the Ribbon" (hiển thị dưới Ribbon) hoặc "Show Above the Ribbon" (hiển thị trên thanh tiêu đề).',
          'Khôi phục mặc định: Nhấp nút Reset > Reset only Quick Access Toolbar.'
        ],
        shortcut: 'Alt + 1, Alt + 2, Alt + 3... : Kích hoạt nhanh các nút lệnh theo thứ tự từ trái sang phải trên thanh QAT.',
        examTip: 'Đề thi thường yêu cầu: "Thêm lệnh New hoặc Quick Print vào thanh Quick Access Toolbar" -> Nhấp mũi tên trỏ xuống ở góc QAT > Tích chọn lệnh tương ứng.',
        checkpointQuestion: {
          question: 'Làm thế nào để thêm nhanh một nút lệnh bất kỳ từ thanh Ribbon vào thanh công cụ Quick Access Toolbar?',
          options: [
            'Kéo thả nút lệnh lên thanh tiêu đề',
            'Nhấp chuột phải vào nút lệnh đó rồi chọn "Add to Quick Access Toolbar"',
            'Nhấn phím F12',
            'Nhấp đúp chuột trái vào nút lệnh'
          ],
          correctIndex: 1,
          explanation: 'Nhấp chuột phải vào bất kỳ công cụ nào và chọn "Add to Quick Access Toolbar" là cách nhanh nhất.'
        }
      },
      {
        id: 'et-8-2',
        title: 'Tìm Kiếm, Thay Thế Dữ Liệu (Find & Replace) & Siêu Liên Kết (Hyperlinks)',
        concept: 'Find & Replace giúp rà soát và sửa đổi hàng loạt chuỗi ký tự nhanh chóng; Hyperlinks kết nối sổ tính với website hoặc vị trí khác trong tài liệu.',
        keyPoints: [
          'Tìm kiếm (Find - Ctrl + F): Tìm các ô chứa giá trị số hoặc văn bản chỉ định; nút "Find All" liệt kê toàn bộ danh sách kết quả kèm địa chỉ ô.',
          'Thay thế (Replace - Ctrl + H): Tìm và tự động thay thế chuỗi ký tự này bằng chuỗi ký tự khác; nút "Replace All" thay thế toàn bộ trong 1 click.',
          'Tùy chọn tìm kiếm mở rộng (Options): Match case (phân biệt hoa thường), Match entire cell contents (khớp toàn bộ nội dung ô), Within (tìm trong Sheet hoặc toàn bộ Workbook).',
          'Ký tự đại diện (Wildcards): Dấu hỏi (?) đại diện cho đúng 1 ký tự; dấu sao (*) đại diện cho một chuỗi ký tự bất kỳ.',
          'Chèn Siêu liên kết (Hyperlinks - Ctrl + K): Tạo liên kết dẫn tới: Trang web bên ngoài (Existing File or Web Page), Vị trí khác trong cùng sổ tính (Place in This Document), hoặc Địa chỉ Email.'
        ],
        shortcut: 'Ctrl + F : Mở hộp thoại Find; Ctrl + H : Mở hộp thoại Replace; Ctrl + K : Mở hộp thoại Insert Hyperlink.',
        examTip: 'Khi đề thi yêu cầu chèn liên kết nhảy đến ô A1 của Sheet khác trong cùng tệp: Chọn Place in This Document > Chọn tên Sheet > Nhập ô A1.',
        checkpointQuestion: {
          question: 'Tổ hợp phím tắt chuẩn để mở trực tiếp hộp thoại Tìm kiếm và Thay thế (Find and Replace) tại thẻ Replace là gì?',
          options: ['Ctrl + F', 'Ctrl + H', 'Ctrl + K', 'Ctrl + G'],
          correctIndex: 1,
          explanation: 'Ctrl + H mở trực tiếp hộp thoại tại thẻ Replace; trong khi Ctrl + F mở thẻ Find.'
        }
      },
      {
        id: 'et-8-3',
        title: 'Nhập Dữ Liệu Từ Tệp Văn Bản Ngoài (.txt, .csv)',
        concept: 'Trong thực tế doanh nghiệp, số liệu xuất ra từ phần mềm quản lý thường ở dạng văn bản ngăn cách bằng dấu phẩy (.csv) hoặc tab (.txt), cần nhập vào Excel để phân tích.',
        keyPoints: [
          'Định dạng CSV (Comma Separated Values): Tệp văn bản thuần túy với các giá trị được phân tách nhau bằng dấu phẩy.',
          'Nhập tệp: Data > nhóm Get & Transform Data > From Text/CSV.',
          'Trình hướng dẫn xem trước: Excel tự động nhận diện bộ mã (File Origin: Unicode UTF-8) và ký tự phân cách (Delimiter: Comma, Semicolon, Tab...).',
          'Tải dữ liệu (Load): Nhấp Load để đưa dữ liệu vào một Worksheet mới dưới dạng Excel Table, hoặc nhấp mũi tên chọn "Load To..." để chỉ định vị trí ô bắt đầu trên sheet hiện hành.',
          'Làm mới dữ liệu (Refresh - Alt + F5): Cập nhật lại số liệu bảng tính khi tệp nguồn .csv bên ngoài có sự thay đổi.'
        ],
        shortcut: 'Alt + A, F, T : Mở công cụ From Text/CSV trên thẻ Data.',
        examTip: 'Đề thi MOS 2019 luôn có câu hỏi nhập tệp .txt hoặc .csv: Data > From Text/CSV > Chọn tệp > Chọn Comma làm Delimiter > Load To ô cụ thể.',
        checkpointQuestion: {
          question: 'Tệp có phần mở rộng .csv (Comma Separated Values) là định dạng tệp như thế nào?',
          options: [
            'Tệp bảng tính nhị phân có chứa macro',
            'Tệp văn bản thuần túy chứa các giá trị dữ liệu được phân cách bằng dấu phẩy',
            'Tệp hình ảnh biểu đồ nén',
            'Tệp mẫu giao diện Word'
          ],
          correctIndex: 1,
          explanation: 'CSV là định dạng văn bản đơn giản phân tách các trường dữ liệu bằng dấu phẩy, rất phổ biến khi trao đổi số liệu giữa các hệ thống.'
        }
      },
      {
        id: 'et-8-4',
        title: 'Thuộc Tính Tài Liệu & Các Bộ Kiểm Tra Kiểm Định (Inspection & Accessibility)',
        concept: 'Trước khi gửi báo cáo cho cấp trên hoặc phát hành công khai, cần làm sạch các thông tin cá nhân ẩn và đảm bảo tài liệu thân thiện với người khuyết tật.',
        keyPoints: [
          'Thuộc tính tài liệu (Document Properties): File > Info > Properties (Title, Subject, Author, Keywords, Company...). Giúp tìm kiếm và phân loại tệp nhanh chóng trên Windows.',
          'Kiểm tra thông tin ẩn (Inspect Document): File > Info > Check for Issues > Inspect Document. Dò tìm và loại bỏ thông tin cá nhân, bình luận ẩn (Comments), thuộc tính tài liệu và nội dung nhạy cảm.',
          'Kiểm tra khả năng tiếp cận (Accessibility Checker): File > Info > Check for Issues > Check Accessibility. Phát hiện các hình ảnh thiếu Alt Text, độ tương phản màu kém hoặc cấu trúc bảng gây khó đọc.',
          'Bảo vệ sổ tính (Protect Workbook): Đặt mật khẩu mã hóa hoặc khóa cấu trúc các Sheet không cho người khác thêm bớt.'
        ],
        shortcut: 'Alt + F, I : Mở nhanh màn hình Info trong Backstage để truy cập Properties và Check for Issues.',
        examTip: 'Đề thi thường yêu cầu: "Sử dụng Document Inspector để xóa bỏ toàn bộ Document Properties and Personal Information".',
        checkpointQuestion: {
          question: 'Để dò tìm và loại bỏ sạch các thông tin cá nhân của tác giả cùng các bình luận ẩn trước khi gửi sổ tính ra bên ngoài, ta dùng công cụ nào?',
          options: [
            'Check Compatibility',
            'Inspect Document',
            'Check Accessibility',
            'Protect Workbook'
          ],
          correctIndex: 1,
          explanation: 'Công cụ Inspect Document trong mục Check for Issues chuyên dùng để rà soát và xóa vĩnh viễn các thông tin ẩn, metadata và ghi chú.'
        }
      }
    ],
    tasks: [
      {
        id: 'etask-8-1',
        title: 'Bật bộ lọc dữ liệu tự động cho bảng báo cáo',
        instruction: 'Nhấp chọn nút Filter trên thẻ Data để chuẩn bị trích xuất số liệu.',
        hint: 'Nhấp Data > nhóm Sort & Filter > Filter.',
        targetType: 'ribbon-action',
        actionKey: 'excel-filter-toggle'
      },
      {
        id: 'etask-8-2',
        title: 'Sắp xếp danh mục dữ liệu tăng dần A đến Z',
        instruction: 'Nhấp chọn nút Sort A to Z trên thẻ Data.',
        hint: 'Nhấp Data > nhóm Sort & Filter > Sort A to Z.',
        targetType: 'ribbon-action',
        actionKey: 'excel-sort-asc'
      },
      {
        id: 'etask-8-3',
        title: 'Hiển thị công thức để phục vụ kiểm tra tài liệu',
        instruction: 'Nhấp chọn Show Formulas trên thẻ Formulas để rà soát công thức tính toán.',
        hint: 'Nhấp Formulas > nhóm Formula Auditing > Show Formulas.',
        targetType: 'ribbon-action',
        actionKey: 'excel-show-formulas'
      }
    ],
    quiz: [
      {
        id: 'eq-8-1',
        question: 'Tổ hợp phím tắt chuẩn dùng để mở hộp thoại chèn Siêu liên kết (Insert Hyperlink) là gì?',
        options: ['Ctrl + H', 'Ctrl + K', 'Ctrl + L', 'Ctrl + Shift + K'],
        correctIndex: 1,
        explanation: 'Ctrl + K là phím tắt tiêu chuẩn trong toàn bộ hệ sinh thái Microsoft Office để chèn Hyperlink.'
      },
      {
        id: 'eq-8-2',
        question: 'Trong hộp thoại Find and Replace, ký tự đại diện nào đại diện cho một chuỗi ký tự bất kỳ có độ dài tùy ý?',
        options: ['Dấu hỏi (?)', 'Dấu sao (*)', 'Dấu thăng (#)', 'Dấu và (&)'],
        correctIndex: 1,
        explanation: 'Dấu sao (*) đại diện cho chuỗi ký tự bất kỳ, còn dấu hỏi (?) đại diện cho chính xác 1 ký tự đơn lẻ.'
      },
      {
        id: 'eq-8-3',
        question: 'Để nhập dữ liệu từ một tệp văn bản .csv hoặc .txt vào trang tính hiện tại, ta truy cập vào thẻ nào trên thanh Ribbon?',
        options: ['Home', 'Insert', 'Data', 'Review'],
        correctIndex: 2,
        explanation: 'Thẻ Data chứa nhóm Get & Transform Data với công cụ From Text/CSV.'
      },
      {
        id: 'eq-8-4',
        question: 'Công cụ nào trong Backstage cho phép dò tìm và gỡ bỏ hoàn toàn các thông tin tác giả, thuộc tính tài liệu và ghi chú ẩn trước khi xuất bản?',
        options: ['Document Inspector', 'Accessibility Checker', 'Compatibility Checker', 'Formula Auditing'],
        correctIndex: 0,
        explanation: 'Document Inspector (Kiểm tra tài liệu) quét và xóa các siêu dữ liệu, thuộc tính cá nhân và bình luận ẩn.'
      },
      {
        id: 'eq-8-5',
        question: 'Mục đích chính của công cụ Accessibility Checker (Kiểm tra khả năng tiếp cận) trong Excel là gì?',
        options: [
          'Kiểm tra tốc độ tính toán của công thức',
          'Dò tìm các lỗi định dạng khiến người khuyết tật khó tiếp cận nội dung (như thiếu Alt Text)',
          'Kiểm tra bản quyền phần mềm',
          'Kiểm tra tương thích với các máy in đời cũ'
        ],
        correctIndex: 1,
        explanation: 'Accessibility Checker đảm bảo tài liệu tuân thủ các quy chuẩn hỗ trợ người khiếm thị hoặc người khuyết tật sử dụng công nghệ trợ năng.'
      }
    ]
  }
];
