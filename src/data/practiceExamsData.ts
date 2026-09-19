import type { PracticeExam } from '../types/practice';

export const MOS_WORD_PRACTICE_EXAMS: PracticeExam[] = [
  {
    id: 'mos-word-exam-1',
    title: 'Đề Luyện Thi MOS Word 2019 - Practice Exam 01',
    summary: 'Bộ 7 dự án chuẩn Multi-Project mô phỏng kỳ thi Certiport quốc tế kèm tệp dữ liệu thực hành gốc (.docx) và hướng dẫn giải chi tiết từng bước.',
    durationMinutes: 50,
    downloadUrl: '/downloads/MOS_Word_2019_Exam_1.zip',
    downloadSize: '5.0 MB',
    projects: [
      {
        id: 'exam1-proj1',
        projectNumber: 1,
        name: '2019_Word_101_Cabins',
        sourceFile: '2019_Word_101_Cabins.docx',
        description: 'Chuyên đề văn bản giới thiệu khu nghỉ dưỡng: xử lý bảng biểu, liên kết hyperlink, ngắt section liên tục và định dạng ảnh.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Trên trang cuối, bên dưới tiêu đề "Weekly Rental", chuyển bảng thành văn bản. Dữ liệu được phân tách bằng Tab.',
            guideSteps: [
              'Chọn bảng ở trang cuối (nhấp dấu cộng góc trên bên trái bảng).',
              'Vào thẻ Table Tools Layout (hoặc Layout của Bảng).',
              'Trong nhóm Data, nhấp Convert to Text.',
              'Chọn Tabs tại mục Separate text with rồi nhấn OK.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Trên trang đầu tiên, trong câu thứ hai, liên kết cụm từ "log cabin" đến địa chỉ web: https://en.wikipedia.org/wiki/Log_cabin',
            guideSteps: [
              'Bôi đen chọn cụm từ "log cabin" ở cuối câu thứ hai.',
              'Vào thẻ Insert > nhóm Links > chọn Link (hoặc bấm Ctrl + K).',
              'Tại ô Address phía dưới, nhập chính xác: https://en.wikipedia.org/wiki/Log_cabin rồi nhấn OK.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Trên trang thứ hai, chèn ngắt đoạn liên tục (Continuous Section Break) ngay trước tiêu đề "Affordable Pricing".',
            guideSteps: [
              'Đặt con trỏ chuột ngay trước chữ "A" của tiêu đề "Affordable Pricing".',
              'Vào thẻ Layout > nhóm Page Setup > nhấp vào Breaks.',
              'Trong mục Section Breaks, chọn Continuous.'
            ]
          },
          {
            taskNumber: 4,
            description: 'Trong danh sách đầu tiên, thay thế dấu đầu dòng của đoạn văn từ "Living area...dryer" bằng hình ảnh Trees.png trong thư mục đính kèm.',
            guideSteps: [
              'Bôi đen đoạn văn từ "Living area with a couch" đến "dryer".',
              'Vào thẻ Home > nhóm Paragraph > nhấp mũi tên cạnh nút Bullets > chọn Define New Bullet.',
              'Nhấp vào nút Picture... > Browse tìm tệp Trees.png > Insert > OK.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Trên trang đầu tiên, áp dụng kiểu Simple Frame, Black cho hình ảnh sơ đồ mặt bằng.',
            guideSteps: [
              'Nhấp chuột chọn hình ảnh sơ đồ mặt bằng trên trang 1.',
              'Vào thẻ Picture Format (hoặc Format của Ảnh).',
              'Trong nhóm Picture Styles, chọn kiểu Simple Frame, Black.'
            ]
          }
        ]
      },
      {
        id: 'exam1-proj2',
        projectNumber: 2,
        name: '2019_Word_102_Apps',
        sourceFile: '2019_Word_102_Apps.docx',
        description: 'Chuyên đề ứng dụng di động: hộp văn bản Text Box, lề tài liệu Custom Margins, bộ kiểu Style Set và đường viền trang Page Borders.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Đặt đoạn văn cuối cùng bắt đầu bằng "Note:" vào hộp văn bản (text box) ở cuối trang.',
            guideSteps: [
              'Bôi đen đoạn văn cuối cùng từ "Note:" đến "smartphone apps."',
              'Cắt đoạn văn (Ctrl + X) hoặc kéo thả vào bên trong khung Text Box ở dưới đáy trang (Ctrl + V).'
            ]
          },
          {
            taskNumber: 2,
            description: 'Chỉnh sửa toàn bộ tài liệu sao cho lề trên và dưới là 1.0 inch (2.54 cm), lề trái và phải là 1.5 inch (3.81 cm).',
            guideSteps: [
              'Vào thẻ Layout > nhóm Page Setup > nhấp vào Margins > chọn Custom Margins...',
              'Tại thẻ Margins: đặt Top = 1.0", Bottom = 1.0", Left = 1.5", Right = 1.5".',
              'Đảm bảo mục Apply to là Whole document rồi nhấn OK.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Áp dụng bộ kiểu "Lines (Simple)" cho tài liệu.',
            guideSteps: [
              'Vào thẻ Design > nhóm Document Formatting.',
              'Nhấp vào mũi tên mở rộng More ở thư viện kiểu dáng và chọn bộ kiểu Lines (Simple).'
            ]
          },
          {
            taskNumber: 4,
            description: 'Áp dụng đường viền kiểu hộp (Box) cho toàn bộ tài liệu với đường kẻ liền, độ dày 1 1/2 pt, màu xanh nhạt (Light Blue).',
            guideSteps: [
              'Vào thẻ Design > nhóm Page Background > chọn Page Borders.',
              'Tại thẻ Page Border: chọn Setting = Box, Style = đường kẻ liền, Color = Light Blue, Width = 1 1/2 pt > OK.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Chèn ảnh Apps.jpg vào giữa tiêu đề và đoạn văn đầu tiên. Áp dụng kiểu bọc văn bản Tight.',
            guideSteps: [
              'Đặt con trỏ trước câu đầu tiên "Users of Android phones".',
              'Vào thẻ Insert > Pictures > This Device... chọn Apps.jpg > Insert.',
              'Bấm vào biểu tượng Layout Options bên cạnh ảnh > chọn kiểu Tight.'
            ]
          }
        ]
      },
      {
        id: 'exam1-proj3',
        projectNumber: 3,
        name: '2019_Word_103_IceCream',
        sourceFile: '2019_Word_103_IceCream.docx',
        description: 'Chuyên đề giới thiệu sản phẩm kem: sắp xếp bảng Sort A-Z, hộp trích dẫn Austin Quote, hiệu ứng tranh vẽ Artistic Effects và xoay 3-D Rotation.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Trên trang đầu tiên, sắp xếp bảng theo thứ tự chữ cái A to Z theo cột Flavor.',
            guideSteps: [
              'Chọn toàn bộ bảng bên dưới tiêu đề "Our Most Popular Flavors!".',
              'Vào thẻ Table Tools Layout > nhóm Data > chọn Sort.',
              'Tại Sort by chọn cột Flavor, Type = Text, thứ tự Ascending > nhấn OK.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Trên trang thứ hai, bên dưới tiêu đề "Key Clients", chuyển đoạn văn thành danh sách có dấu đầu dòng mặc định.',
            guideSteps: [
              'Bôi đen từ "The Party People" đến "I Scream, U Scream".',
              'Vào thẻ Home > nhóm Paragraph > nhấp nút Bullets.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Trên trang đầu tiên, ngay trước câu trích dẫn "We love the unique...", chèn hộp văn bản kiểu Austin Quote và đưa câu trích dẫn vào đó.',
            guideSteps: [
              'Đặt con trỏ đầu câu "We love the unique...".',
              'Vào thẻ Insert > nhóm Text > Text Box > chọn mẫu Austin Quote.',
              'Di chuyển đoạn trích dẫn vào bên trong hộp văn bản vừa chèn.'
            ]
          },
          {
            taskNumber: 4,
            description: 'Áp dụng hiệu ứng nghệ thuật Paint Brush cho hình ảnh kem.',
            guideSteps: [
              'Nhấp chọn hình ảnh cây kem.',
              'Vào thẻ Picture Format > nhóm Adjust > nhấp vào Artistic Effects > chọn Paint Brush.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Áp dụng hiệu ứng xoay 3-D kiểu Off Axis 1: Right cho hình ảnh kem.',
            guideSteps: [
              'Chọn hình ảnh kem > thẻ Picture Format > nhóm Picture Styles > Picture Effects.',
              'Chọn 3-D Rotation > trong nhóm Parallel chọn Off Axis 1: Right.'
            ]
          }
        ]
      },
      {
        id: 'exam1-proj4',
        projectNumber: 4,
        name: '2019_Word_104_SkiResorts',
        sourceFile: '2019_Word_104_SkiResorts.docx',
        description: 'Chuyên đề khu nghỉ dưỡng trượt tuyết: đánh dấu Bookmark, mục lục nâng cao Custom Table of Contents, Convert Text to Table và Resolve Comment.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Trên trang cuối cùng, đánh dấu tiêu đề "WORLD-CLASS SKI RESORTS" bằng Bookmark có tên là "Resorts".',
            guideSteps: [
              'Bôi đen tiêu đề "WORLD-CLASS SKI RESORTS" ở trang cuối.',
              'Vào thẻ Insert > nhóm Links > nhấp Bookmark.',
              'Nhập tên Resorts vào ô Bookmark name rồi nhấn Add.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Ngay bên dưới tiêu đề "TABLE OF CONTENTS", chèn mục lục tùy chỉnh định dạng Formal với các cấp độ chỉ định.',
            guideSteps: [
              'Đặt con trỏ dưới tiêu đề "TABLE OF CONTENTS".',
              'Vào References > Table of Contents > Custom Table of Contents...',
              'Tại mục Formats chọn Formal > bấm nút Options... gán cấp TOC: Title = 1, Heading 1 = 2, Heading 2 = 3, Caption = 4 > OK > OK.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Ở cuối trang cuối, chuyển đoạn văn từ Resort Name đến hết thành bảng 5 cột phân tách bằng Tab và áp dụng kiểu Grid Table 5 Dark - Accent 1.',
            guideSteps: [
              'Bôi đen từ Resort Name đến hết tài liệu.',
              'Vào Insert > Table > Convert Text to Table... đặt số cột = 5, Separate text at = Tabs > OK.',
              'Vào thẻ Table Design > Table Styles > chọn Grid Table 5 Dark - Accent 1.'
            ]
          },
          {
            taskNumber: 4,
            description: 'Trong phần sidebar ở trang 3, đổi dấu đầu dòng của danh sách SKI RESORTS thành hình vuông đặc.',
            guideSteps: [
              'Bôi đen danh sách từ Alta đến Sundance trong ô khung bên hông trang 3.',
              'Vào Home > nhóm Paragraph > nhấp mũi tên Bullets > chọn biểu tượng hình vuông đặc.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Trên trang cuối, trong hộp bình luận bên phải, nhấp vào nút Resolve để đánh dấu là đã giải quyết.',
            guideSteps: [
              'Nhấp vào khung bình luận hiển thị ở lề bên phải trang cuối.',
              'Bấm nút Resolve ở góc trên bình luận.'
            ]
          }
        ]
      },
      {
        id: 'exam1-proj5',
        projectNumber: 5,
        name: '2019_Word_105_Journalism',
        sourceFile: '2019_Word_105_Journalism.docx',
        description: 'Chuyên đề đạo đức báo chí: chia 2 cột báo Layout Columns, chèn chú thích cuối tài liệu Endnote và tùy biến sơ đồ SmartArt.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Định dạng tài liệu thành 2 cột bắt đầu từ tiêu đề "1.1 SEEK TRUTH AND REPORT IT" đến hết tài liệu.',
            guideSteps: [
              'Bôi đen toàn bộ văn bản từ dòng 1.1 SEEK TRUTH AND REPORT IT đến cuối bài.',
              'Vào thẻ Layout > nhóm Page Setup > Columns > chọn Two.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Đổi định dạng số chú thích cuối thành 1, 2, 3... và sau tiêu đề phụ chèn Endnote với nội dung: http://www.spj.org/index.asp',
            guideSteps: [
              'Đặt con trỏ ngay sau dòng "Improving and protecting journalism since 1909".',
              'Vào thẻ References > nhấp mũi tên mở rộng nhóm Footnotes.',
              'Chọn Endnotes > Number format: 1, 2, 3... > Insert > gõ nội dung http://www.spj.org/index.asp.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Trên trang thứ hai, áp dụng màu Colorful Range - Accent Colors 5 to 6 cho sơ đồ SmartArt.',
            guideSteps: [
              'Chọn sơ đồ SmartArt ở cuối trang 2.',
              'Vào thẻ SmartArt Design > nhóm SmartArt Styles > Change Colors > chọn Colorful Range - Accent Colors 5 to 6.'
            ]
          },
          {
            taskNumber: 4,
            description: 'Thêm một hình thứ tư vào sơ đồ SmartArt và nhập nội dung: Be Accountable and Transparent.',
            guideSteps: [
              'Chọn SmartArt > thẻ SmartArt Design > nhấp Add Shape.',
              'Mở khung nhập chữ Text Pane, tại hình mới thêm gõ chính xác: Be Accountable and Transparent.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Di chuyển sơ đồ SmartArt từ trang thứ hai lên trang đầu tiên, đặt giữa tiêu đề phụ và tiêu đề "1 Code of Ethics".',
            guideSteps: [
              'Chọn viền sơ đồ SmartArt ở trang 2 và kéo chuột (hoặc cắt dán) lên trang 1.',
              'Đặt vào khoảng giữa dòng phụ và tiêu đề 1 Code of Ethics.'
            ]
          }
        ]
      },
      {
        id: 'exam1-proj6',
        projectNumber: 6,
        name: '2019_Word_106_PetCare',
        sourceFile: '2019_Word_106_PetCare.docx',
        description: 'Chuyên đề chăm sóc thú cưng: hiển thị ký hiệu đoạn văn Show/Hide, Document Inspector xóa Header/Watermark, áp dụng Heading 2 và AutoFit Contents.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Hiển thị các ký hiệu đoạn văn (paragraph marks) trên toàn bộ tài liệu.',
            guideSteps: [
              'Vào thẻ Home > nhóm Paragraph > nhấp vào biểu tượng Show/Hide (¶).'
            ]
          },
          {
            taskNumber: 2,
            description: 'Sử dụng Document Inspector để xóa toàn bộ Headers, Footers, and Watermarks khỏi tài liệu.',
            guideSteps: [
              'Vào File > Info > Check for Issues > Inspect Document > Inspect.',
              'Tìm dòng Headers, Footers, and Watermarks > nhấp Remove All > Close.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Trả lời bình luận bằng cách nhập từ "Green".',
            guideSteps: [
              'Nhấp vào ô bình luận bên phải trang.',
              'Bấm nút Reply > gõ từ Green > bấm gửi phản hồi.'
            ]
          },
          {
            taskNumber: 4,
            description: 'Trên trang đầu tiên, áp dụng kiểu Heading 2 cho tiêu đề "Preventing Fleas and Ticks".',
            guideSteps: [
              'Bôi đen tiêu đề "Preventing Fleas and Ticks".',
              'Vào Home > nhóm Styles > nhấp chọn Heading 2.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Thay đổi kích thước bảng để tự động vừa vặn với nội dung bên trong (AutoFit to Contents).',
            guideSteps: [
              'Chọn toàn bộ bảng bằng dấu cộng góc trên bên trái.',
              'Vào thẻ Table Tools Layout > nhóm Cell Size > nhấp AutoFit > chọn AutoFit Contents.'
            ]
          }
        ]
      },
      {
        id: 'exam1-proj7',
        projectNumber: 7,
        name: '2019_Word_107_LegalTerms',
        sourceFile: '2019_Word_107_LegalTerms.docx',
        description: 'Chuyên đề văn bản pháp lý: thuộc tính Status = Draft, ký hiệu đặc biệt Registered ®, hiệu ứng phông chữ Small Caps và khóa theo dõi Track Changes.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Thay đổi thuộc tính Trạng thái (Status) của tài liệu thành "Draft".',
            guideSteps: [
              'Vào thẻ File > Info > ở góc dưới bên phải nhấp Show All Properties.',
              'Tìm ô Status và gõ từ: Draft.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Chèn ký hiệu thương hiệu đã đăng ký (®) ngay sau tiêu đề "Registered".',
            guideSteps: [
              'Đặt con trỏ chuột ngay sau chữ "Registered".',
              'Vào thẻ Insert > Symbols > More Symbols... > thẻ Special Characters > chọn Registered (®) > Insert > Close.'
            ]
          },
          {
            taskNumber: 3,
            description: 'Áp dụng hiệu ứng chữ in hoa nhỏ (Small Caps) cho 3 tiêu đề: Trademark, Registered và Copyright.',
            guideSteps: [
              'Giữ Ctrl bôi đen cả 3 tiêu đề.',
              'Vào Home > nhấp mũi tên mở rộng nhóm Font (Ctrl + D) > tích chọn ô Small caps > OK.'
            ]
          },
          {
            taskNumber: 4,
            description: 'Bật chế độ theo dõi thay đổi (Track Changes) và khóa theo dõi bằng mật khẩu "Legal".',
            guideSteps: [
              'Vào thẻ Review > nhóm Tracking > nhấp nút Track Changes > chọn Lock Tracking.',
              'Nhập mật khẩu: Legal > xác nhận lại mật khẩu Legal > OK.'
            ]
          },
          {
            taskNumber: 5,
            description: 'Ở cuối trang, thêm một bình luận vào cụm từ "Fair Use Law" với nội dung: Should we explain Fair Use Law?',
            guideSteps: [
              'Bôi đen cụm từ "Fair Use Law" ở cuối tài liệu.',
              'Vào thẻ Review (hoặc Insert) > chọn New Comment > gõ nội dung: Should we explain Fair Use Law?'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mos-word-exam-2',
    title: 'Đề Luyện Thi MOS Word 2019 - Practice Exam 02',
    summary: 'Bộ 7 dự án nâng cao kiểm tra toàn diện các kỹ năng Word Associate 2019: Technician, Computer Health, Ancient Cultures, Easy Landscaping...',
    durationMinutes: 50,
    downloadUrl: '/downloads/MOS_Word_2019_Exam_2.zip',
    downloadSize: '4.5 MB',
    projects: [
      {
        id: 'exam2-proj1',
        projectNumber: 1,
        name: '2019_Word_201_Technician',
        sourceFile: '2019_Word_201_Technician.docx',
        description: 'Tài liệu hướng dẫn kỹ thuật viên: chỉnh sửa thuộc tính Subject, thay đổi lề Narrow, định dạng bảng và tìm kiếm thay thế.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Thêm từ "Technician Guide" vào thuộc tính Chủ đề (Subject) của tài liệu.',
            guideSteps: [
              'Vào thẻ File > Info > nhấp Show All Properties.',
              'Tìm trường Subject và nhập: Technician Guide.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Thay đổi kiểu lề của tài liệu thành lề hẹp (Narrow Margins).',
            guideSteps: [
              'Vào thẻ Layout > nhóm Page Setup > Margins > chọn Narrow (0.5 inch / 1.27 cm).'
            ]
          },
          {
            taskNumber: 3,
            description: 'Áp dụng kiểu bảng List Table 3 - Accent 1 cho bảng dữ liệu.',
            guideSteps: [
              'Chọn bảng > thẻ Table Design > nhóm Table Styles > chọn List Table 3 - Accent 1.'
            ]
          }
        ]
      },
      {
        id: 'exam2-proj2',
        projectNumber: 2,
        name: '2019_Word_202_ComputerHealth',
        sourceFile: '2019_Word_202_ComputerHealth.docx',
        description: 'Cẩm nang sức khỏe khi dùng máy tính: tạo danh sách số thứ tự nhiều cấp, chèn trích dẫn và ngắt trang.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Tạo danh sách đánh số thứ tự 1, 2, 3 cho các mẹo bảo vệ thị lực.',
            guideSteps: [
              'Bôi đen các đoạn mẹo thị lực > thẻ Home > nhóm Paragraph > nhấp Numbering.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Chèn ngắt trang Page Break ngay trước tiêu đề "Ergonomic Setup".',
            guideSteps: [
              'Đặt con trỏ trước tiêu đề "Ergonomic Setup".',
              'Bấm tổ hợp phím Ctrl + Enter hoặc vào thẻ Insert > Page Break.'
            ]
          }
        ]
      },
      {
        id: 'exam2-proj3',
        projectNumber: 3,
        name: '2019_Word_203_GameOver',
        sourceFile: '2019_Word_203_GameOver.docx',
        description: 'Đánh giá ngành công nghiệp trò chơi điện tử: thiết lập Heading Styles và tạo mục lục tự động chuẩn.',
        tasks: [
          {
            taskNumber: 1,
            description: 'Gán kiểu Heading 1 cho các tiêu đề chính trong tài liệu.',
            guideSteps: [
              'Bôi đen tiêu đề chính > thẻ Home > nhóm Styles > chọn Heading 1.'
            ]
          },
          {
            taskNumber: 2,
            description: 'Chèn mục lục tự động kiểu Automatic Table 2 ở đầu tài liệu.',
            guideSteps: [
              'Đặt con trỏ ở trang đầu tiên > thẻ References > Table of Contents > Automatic Table 2.'
            ]
          }
        ]
      }
    ]
  }
];
