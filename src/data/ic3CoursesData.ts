import type { IC3CourseData } from '../types/ic3Course';

export const IC3_COURSES_DATA: Record<string, IC3CourseData> = {
  'ic3-level-1': {
    id: 'ic3-level-1',
    title: 'IC3 GS6 Level 1: Nền Tảng Công Nghệ Số',
    subtitle: 'Nắm vững kiến thức nền tảng về thiết bị, hệ điều hành, mạng và an toàn số',
    levelBadge: 'Cấp độ 1 (Foundation)',
    badgeColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20 dark:text-cyan-400',
    description: 'Đo lường kiến thức về các khái niệm cơ bản và các thành phần thiết yếu của thế giới số: phần cứng, phần mềm, hệ điều hành Windows, mạng Internet/Wi-Fi, danh tính số, bản quyền nội dung và bảo mật thông tin.',
    accentColor: 'cyan',
    accentClass: 'from-cyan-500 to-blue-600',
    durationHours: 16,
    topics: [
      {
        id: 'ic3-l1-chude-1',
        order: 1,
        code: 'TB',
        title: 'Căn bản về công nghệ',
        englishTitle: 'Technology Basics',
        summary: 'Tổng quan về hệ điều hành, trình duyệt web, cấu tạo phần cứng/phần mềm máy tính, mạng máy tính, kết nối Wi-Fi và khắc phục sự cố cơ bản.',
        durationMinutes: 179,
        pdfFileName: 'ic3-level-1-chude-1.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-1.pdf',
        coreKnowledge: [
          {
            title: 'Hệ điều hành & Giao diện Windows',
            details: [
              'Hệ điều hành (OS) là phần mềm hệ thống quản lý tài nguyên phần cứng máy tính và cung cấp giao diện tương tác cho người dùng.',
              'Các hệ điều hành phổ biến: Microsoft Windows, macOS, Linux, Android, iOS.',
              'Giao diện Windows gồm Desktop, Taskbar (Thanh tác vụ), Start Menu, File Explorer và Notification Center.',
              'Các thao tác điều hướng cơ bản: Phím tắt Windows + E mở File Explorer, Alt + Tab chuyển đổi cửa sổ, Ctrl + Shift + Esc mở Task Manager.'
            ]
          },
          {
            title: 'Phần cứng & Thiết bị ngoại vi',
            details: [
              'Thiết bị nhập (Input): Bàn phím (Keyboard), Chuột (Mouse), Máy quét (Scanner), Microphone, Webcam.',
              'Thiết bị xuất (Output): Màn hình (Monitor), Máy in (Printer), Loa (Speaker), Máy chiếu (Projector).',
              'Bộ xử lý trung tâm (CPU): "Bộ não" của máy tính, điều khiển và thực thi mọi phép toán số học & logic.',
              'Bộ nhớ chính: RAM (Random Access Memory - lưu tạm thời, mất khi tắt nguồn) và ROM (Read Only Memory - lưu BIOS/firmware cố định).',
              'Thiết bị lưu trữ ngoài: Ổ cứng SSD/HDD, thẻ nhớ SD, USB Flash Drive.'
            ]
          },
          {
            title: 'Phần mềm & Cấp phép bản quyền',
            details: [
              'Phần mềm hệ thống (System Software): Hệ điều hành, Driver thiết bị, Tiện ích hệ thống.',
              'Phần mềm ứng dụng (Application Software): Bộ xử lý văn bản, trình duyệt web, bảng tính, ứng dụng đồ họa.',
              'Phần mềm độc quyền (Proprietary Software): Bản quyền đóng, cần mua bản quyền sử dụng (Microsoft Office, Adobe Photoshop).',
              'Phần mềm mã nguồn mở (Open Source Software): Cho phép xem, sửa và phân phối mã nguồn tự do (Linux, LibreOffice, Firefox).'
            ]
          },
          {
            title: 'Mạng máy tính & Kết nối không dây',
            details: [
              'Mạng LAN (Local Area Network): Mạng cục bộ trong phạm vi nhỏ như văn phòng, gia đình, trường học.',
              'Mạng WAN (Wide Area Network): Mạng diện rộng kết nối xuyên thành phố, quốc gia (Internet là mạng WAN lớn nhất).',
              'Wi-Fi (Wireless Fidelity): Chuẩn kết nối không dây tần số 2.4 GHz (phạm vi xa, xuyên vật cản tốt) và 5 GHz (tốc độ cao, băng thông lớn).',
              'Khắc phục sự cố mạng cơ bản: Khởi động lại Router/Modem, kiểm tra cáp mạng, kiểm tra chế độ Airplane Mode, cấp phát lại địa chỉ IP qua lệnh ipconfig /renew.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Operating System (OS)', definition: 'Hệ thống phần mềm quản lý phần cứng, phân phối tài nguyên bộ nhớ và tạo môi trường chạy cho các ứng dụng.' },
          { term: 'RAM (Random Access Memory)', definition: 'Bộ nhớ truy xuất ngẫu nhiên tạm thời dùng để nạp dữ liệu khi hệ điều hành và các ứng dụng đang hoạt động.' },
          { term: 'CPU (Central Processing Unit)', definition: 'Bộ vi xử lý trung tâm thực thi tất cả các câu lệnh logic, số học và điều khiển luồng dữ liệu.' },
          { term: 'Open-Source Software', definition: 'Phần mềm có mã nguồn công khai, người dùng được quyền nghiên cứu, chỉnh sửa và chia sẻ miễn phí.' },
          { term: 'SSID (Service Set Identifier)', definition: 'Tên định danh của một mạng không dây (Wi-Fi) để các thiết bị nhận biết và kết nối.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t1-q1',
            question: 'Thành phần nào sau đây được coi là "bộ não" thực hiện xử lý dữ liệu và tính toán trong máy tính?',
            options: ['RAM (Random Access Memory)', 'CPU (Central Processing Unit)', 'Ổ đĩa cứng SSD', 'Bộ nguồn (Power Supply)'],
            correctIndex: 1,
            explanation: 'CPU (Central Processing Unit) là bộ xử lý trung tâm, tiếp nhận và xử lý mọi chỉ thị, phép tính logic trong hệ thống.',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q2',
            question: 'Khi bạn tắt nguồn máy tính, dữ liệu được lưu trữ ở thành phần nào sau đây sẽ bị xóa hoàn toàn?',
            options: ['Ổ cứng SSD', 'Ổ đĩa cứng HDD', 'RAM', 'Thẻ nhớ USB'],
            correctIndex: 2,
            explanation: 'RAM là bộ nhớ khả biến (volatile memory), chỉ duy trì dữ liệu khi có nguồn điện. Khi mất điện hoặc tắt máy, toàn bộ dữ liệu trong RAM sẽ bị mất.',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q3',
            question: 'Thiết bị nào sau đây vừa là thiết bị nhập (Input) vừa có thể là thiết bị xuất (Output)?',
            options: ['Màn hình cảm ứng (Touchscreen)', 'Máy quét (Scanner)', 'Máy in laser đơn năng', 'Bàn phím cơ'],
            correctIndex: 0,
            explanation: 'Màn hình cảm ứng nhận thao tác chạm/vuốt của người dùng (Input) đồng thời hiển thị hình ảnh đồ họa (Output).',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q4',
            question: 'Đặc điểm nào sau đây là ưu điểm nổi bật của tần số sóng Wi-Fi 2.4 GHz so với 5 GHz?',
            options: ['Tốc độ truyền dữ liệu nhanh gấp 5 lần', 'Khả năng xuyên qua tường và vật cản tốt hơn, phạm vi phủ sóng rộng hơn', 'Không bao giờ bị nghẽn sóng bởi thiết bị khác', 'Băng thông rộng hơn nhiều kênh truyền'],
            correctIndex: 1,
            explanation: 'Sóng Wi-Fi băng tần 2.4 GHz có bước sóng dài hơn, giúp xuyên qua tường và vật cản tốt hơn với tầm phủ sóng xa hơn so với 5 GHz.',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q5',
            question: 'Hệ điều hành mã nguồn mở (Open-Source OS) nào sau đây rất phổ biến trên các máy chủ và thiết bị di động?',
            options: ['Microsoft Windows 11', 'Apple macOS Ventura', 'Linux (và nhân Linux trong Android)', 'Microsoft Windows Server'],
            correctIndex: 2,
            explanation: 'Linux là hệ điều hành mã nguồn mở nổi tiếng, cung cấp nền tảng mã nguồn cho hàng triệu máy chủ và là nền tảng cốt lõi của Android.',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q6',
            question: 'Tổ hợp phím tắt nhanh nào trên Windows giúp mở nhanh trình quản lý tập tin File Explorer?',
            options: ['Ctrl + Alt + Del', 'Windows + E', 'Windows + D', 'Alt + F4'],
            correctIndex: 1,
            explanation: 'Phím Windows + E là phím tắt tiêu chuẩn để mở cửa sổ File Explorer trong hệ điều hành Windows.',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q7',
            question: 'Khi máy tính báo lỗi không thể truy cập Internet nhưng vẫn kết nối với Router qua Wi-Fi, bước khắc phục đầu tiên hợp lý nhất là gì?',
            options: ['Cài đặt lại toàn bộ hệ điều hành Windows', 'Kiểm tra đường truyền modem/router và khởi động lại modem/router', 'Thay thế ngay cạc mạng máy tính', 'Mua một máy tính mới'],
            correctIndex: 1,
            explanation: 'Khởi động lại modem/router giúp làm mới kết nối của nhà cung cấp dịch vụ mạng (ISP) và cấp phát lại địa chỉ IP cho thiết bị.',
            domain: 'Technology Basics'
          },
          {
            id: 'l1-t1-q8',
            question: 'Ứng dụng nào sau đây được phân loại là "Phần mềm hệ thống" (System Software)?',
            options: ['Microsoft Word 2019', 'Trình điều khiển thiết bị (Device Driver)', 'Google Chrome Browser', 'Adobe Photoshop'],
            correctIndex: 1,
            explanation: 'Device Driver (trình điều khiển thiết bị) là phần mềm hệ thống giúp hệ điều hành giao tiếp và điều khiển phần cứng.',
            domain: 'Technology Basics'
          }
        ]
      },
      {
        id: 'ic3-l1-chude-2',
        order: 2,
        code: 'DC',
        title: 'Công dân số',
        englishTitle: 'Digital Citizenship',
        summary: 'Tìm hiểu danh tính kỹ thuật số, dấu chân số, hành vi trực tuyến có đạo đức và các tiêu chí đánh giá tài nguyên thông tin trên mạng.',
        durationMinutes: 70,
        pdfFileName: 'ic3-level-1-chude-2.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-2.pdf',
        coreKnowledge: [
          {
            title: 'Danh tính kỹ thuật số & Dấu chân số (Digital Footprint)',
            details: [
              'Danh tính kỹ thuật số (Digital Identity): Tất cả thông tin đại diện cho bạn trên không gian mạng (tên người dùng, ảnh đại diện, lịch sử tìm kiếm, email, tài khoản mạng xã hội).',
              'Dấu chân số chủ động: Các bài viết, hình ảnh, video bạn tự nguyện đăng tải hoặc bình luận công khai.',
              'Dấu chân số thụ động: Dữ liệu được ghi lại tự động như địa chỉ IP, cookie duyệt web, lịch sử vị trí GPS.',
              'Một khi thông tin đã đăng tải lên Internet, rất khó để xóa hoàn toàn vì có thể được chụp màn hình hoặc lưu trữ bởi máy chủ lưu trữ (Web Archive).'
            ]
          },
          {
            title: 'Quy tắc ứng xử trực tuyến (Netiquette)',
            details: [
              'Tôn trọng quan điểm người khác, tránh dùng ngôn từ thù hận, phân biệt đối xử hoặc xúc phạm cá nhân.',
              'Không viết hoa toàn bộ câu chữ (ALL CAPS) vì bị coi là hành vi quát tháo/la hét.',
              'Không phát tán tin đồn chưa kiểm chứng, không tiếp tay cho bạo lực mạng (Cyberbullying).'
            ]
          },
          {
            title: 'Đánh giá độ tin cậy của tài nguyên trực tuyến',
            details: [
              'Tiêu chí đánh giá tính xác thực của thông tin trên mạng (Mô hình đánh giá AAOCC):',
              '- Authority (Tác giả/Thẩm quyền): Ai là tác giả hoặc tổ chức phát hành? Họ có chuyên môn không?',
              '- Accuracy (Độ chính xác): Thông tin có nguồn trích dẫn, bằng chứng kiểm chứng được không?',
              '- Objectivity (Tính khách quan): Bài viết có thiên vị, mang tính thương mại quảng cáo trá hình không?',
              '- Currency (Tính cập nhật): Ngày xuất bản/cập nhật gần đây nhất là khi nào?',
              '- Coverage (Mức độ bao quát): Nội dung có đáp ứng đầy đủ yêu cầu tìm kiếm không?'
            ]
          }
        ],
        keyTerms: [
          { term: 'Digital Footprint (Dấu chân số)', definition: 'Dấu vết dữ liệu mà người dùng để lại khi duyệt web, sử dụng mạng xã hội và tương tác trực tuyến.' },
          { term: 'Cyberbullying', definition: 'Hành vi bắt nạt, đe dọa, làm nhục hoặc quấy rối người khác thông qua các phương tiện kỹ thuật số.' },
          { term: 'Netiquette (Nghi thức mạng)', definition: 'Quy tắc xã hội và đạo đức về hành vi ứng xử đúng mực khi giao tiếp trong môi trường trực tuyến.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t2-q1',
            question: 'Thuật ngữ "Dấu chân kỹ thuật số" (Digital Footprint) dùng để chỉ điều gì?',
            options: ['Kích thước của bàn phím và chuột khi sử dụng', 'Mọi dấu vết dữ liệu, hành vi và bài đăng mà bạn để lại khi tham gia môi trường Internet', 'Tốc độ bước chân khi đi bộ mang theo điện thoại thông minh', 'Lịch sử bảo hành của thiết bị vi tính'],
            correctIndex: 1,
            explanation: 'Dấu chân số là tập hợp tất cả thông tin, vết tích kỹ thuật số bạn để lại qua các tương tác, tìm kiếm và bài đăng trên Internet.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l1-t2-q2',
            question: 'Hành vi nào sau đây được coi là dấu chân kỹ thuật số THỤ ĐỘNG (Passive Digital Footprint)?',
            options: ['Đăng tải một video clip biểu diễn lên TikTok', 'Bình luận ý kiến cá nhân vào bài viết trên diễn đàn', 'Trang web tự động thu thập địa chỉ IP và lịch sử các trang bạn đã bấm xem qua Cookie', 'Gửi một email phản hồi bài giảng cho giáo viên'],
            correctIndex: 2,
            explanation: 'Dấu chân số thụ động là dữ liệu được thu thập một cách tự động khi bạn duyệt web mà bạn không trực tiếp chủ động gửi hay đăng nhập.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l1-t2-q3',
            question: 'Trong quy tắc văn hóa giao tiếp trực tuyến (Netiquette), việc gõ toàn bộ văn bản bằng CHỮ HOA (CAPS LOCK) thường mang ý nghĩa gì?',
            options: ['Thể hiện sự tôn trọng tối đa đối với người nghe', 'Được hiểu như hành động đang la hét hoặc giận dữ quát tháo', 'Giúp người nhận đọc nhanh hơn', 'Quy định bắt buộc trong email học tập'],
            correctIndex: 1,
            explanation: 'Theo nghi thức mạng, việc gõ toàn chữ in hoa được xem là tương đương với hành động quát tháo, gây khó chịu cho người đọc.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l1-t2-q4',
            question: 'Khi đánh giá độ tin cậy của một bài viết khoa học trên Internet, yếu tố nào dưới đây thể hiện "Tính thẩm quyền" (Authority)?',
            options: ['Trang web có nhiều quảng cáo đồ chơi', 'Tác giả có học hàm, bằng cấp chuyên ngành liên quan và thuộc một viện nghiên cứu uy tín', 'Bài viết được đăng trên một blog nặc danh', 'Bài viết có nhiều màu sắc và hình ảnh động'],
            correctIndex: 1,
            explanation: 'Tính thẩm quyền được xác định qua uy tín khoa học, chức danh, bằng cấp và tổ chức chủ quản của tác giả bài viết.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l1-t2-q5',
            question: 'Nếu bạn phát hiện một tài khoản mạng xã hội liên tục tung ảnh riêng tư của bạn học để chế giễu và xúc phạm, hành động đúng đắn nhất là gì?',
            options: ['Bình luận thêm vào bài đăng để chửi lại tài khoản đó', 'Lưu lại bằng chứng (chụp ảnh màn hình), báo cáo (Report) với quản trị viên và báo ngay cho thầy cô/cha mẹ', 'Im lặng chia sẻ bài viết cho nhiều người khác xem cùng', 'Lập tài khoản ẩn danh để trả đũa tương tự'],
            correctIndex: 1,
            explanation: 'Lưu bằng chứng vi phạm và báo cáo với người có thẩm quyền/nền tảng là biện pháp an toàn và đúng quy chuẩn phòng chống bắt nạt mạng.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l1-t2-q6',
            question: 'Để bảo vệ danh tính số và sự an toàn cá nhân, điều nào sau đây KHÔNG NÊN chia sẻ công khai trên mạng xã hội?',
            options: ['Bức ảnh chụp phong cảnh thiên nhiên bạn chụp', 'Căn cước công dân, số điện thoại riêng, thẻ ngân hàng và địa chỉ nhà', 'Một bài hát bạn yêu thích', 'Cảm nghĩ tích cực về một bộ phim'],
            correctIndex: 1,
            explanation: 'Thông tin định danh cá nhân nhạy cảm (PII) như số CCCD, địa chỉ, số thẻ tuyệt đối không được công khai để tránh bị đánh cắp danh tính hoặc lừa đảo.',
            domain: 'Digital Citizenship'
          }
        ]
      },
      {
        id: 'ic3-l1-chude-3',
        order: 3,
        code: 'IM',
        title: 'Quản lý thông tin',
        englishTitle: 'Information Management',
        summary: 'Kỹ năng tìm kiếm dữ liệu nâng cao, toán tử tìm kiếm logic, phân biệt phạm vi công cộng (Public Domain) và giấy phép Creative Commons.',
        durationMinutes: 86,
        pdfFileName: 'ic3-level-1-chude-3.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-3.pdf',
        coreKnowledge: [
          {
            title: 'Kỹ thuật tìm kiếm thông tin trên Web',
            details: [
              'Công cụ tìm kiếm (Search Engine): Google, Bing, DuckDuckGo, Yahoo.',
              'Sử dụng dấu ngoặc kép "" để tìm kiếm cụm từ chính xác nguyên văn (ví dụ: "chứng chỉ IC3 GS6").',
              'Sử dụng dấu trừ (-) để loại trừ từ khóa không mong muốn (ví dụ: virus máy tính -sinh học).',
              'Sử dụng toán tử site: để giới hạn tìm kiếm trong một tên miền cụ thể (ví dụ: site:edu.vn hoặc site:gov).',
              'Sử dụng toán tử filetype: để tìm chính xác định dạng tệp (ví dụ: filetype:pdf).'
            ]
          },
          {
            title: 'Bản quyền & Sử dụng tài nguyên hợp pháp',
            details: [
              'Bản quyền (Copyright): Quyền pháp lý độc quyền của tác giả đối với tác phẩm gốc của họ.',
              'Phạm vi công cộng (Public Domain): Tác phẩm đã hết hạn bản quyền hoặc tác giả chủ động từ bỏ bản quyền, ai cũng có thể sử dụng miễn phí mà không cần xin phép.',
              'Giấy phép Creative Commons (CC): Cho phép tác giả chia sẻ tác phẩm với các điều kiện cụ thể:',
              '  - BY (Attribution): Phải ghi nhận công lao tác giả.',
              '  - NC (Non-Commercial): Chỉ sử dụng cho mục đích phi thương mại.',
              '  - ND (No Derivatives): Không được phép sửa đổi, phái sinh tác phẩm.',
              '  - SA (Share-Alike): Tác phẩm phái sinh phải chia sẻ theo cùng giấy phép gốc.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Search Engine', definition: 'Hệ thống phần mềm tìm kiếm thông tin trên World Wide Web theo các chỉ mục từ khóa.' },
          { term: 'Public Domain', definition: 'Trạng thái của các tác phẩm sáng tạo không còn được bảo vệ bởi bản quyền và thuộc về toàn thể công chúng.' },
          { term: 'Creative Commons (CC)', definition: 'Tổ chức phi lợi nhuận cung cấp các giấy phép bản quyền miễn phí chuẩn hóa giúp tác giả chia sẻ tài nguyên hợp pháp.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t3-q1',
            question: 'Khi bạn muốn tìm kiếm chính xác nguyên văn cụm từ "an toàn thông tin số" trên Google, cú pháp nào sau đây là chuẩn xác nhất?',
            options: ['an toàn thông tin số', '[an toàn thông tin số]', '"an toàn thông tin số"', 'find: an toàn thông tin số'],
            correctIndex: 2,
            explanation: 'Đặt từ khóa trong dấu ngoặc kép "" yêu cầu công cụ tìm kiếm trả về đúng thứ tự các từ một cách nguyên văn.',
            domain: 'Information Management'
          },
          {
            id: 'l1-t3-q2',
            question: 'Cú pháp tìm kiếm nào giúp bạn tìm kiếm các tài liệu bài giảng ở định dạng tệp PDF trên Google?',
            options: ['filetype:pdf bài giảng tin học', 'extension.pdf + bài giảng', 'pdf:open:bài giảng tin học', 'search.format(pdf) bài giảng'],
            correctIndex: 0,
            explanation: 'Toán tử filetype:pdf giúp lọc trực tiếp các kết quả có phần mở rộng tệp là PDF.',
            domain: 'Information Management'
          },
          {
            id: 'l1-t3-q3',
            question: 'Khái niệm "Phạm vi công cộng" (Public Domain) đối với một tác phẩm văn hóa/nghệ thuật mang ý nghĩa gì?',
            options: ['Tác phẩm thuộc sở hữu bí mật của chính phủ', 'Tác phẩm không được bảo vệ bản quyền, bất kỳ ai cũng có thể tự do sao chép, phân phối và sử dụng mà không cần trả phí bản quyền', 'Tác phẩm chỉ được xem tại các thư viện công cộng', 'Tác phẩm bắt buộc phải mua qua ngân sách nhà nước'],
            correctIndex: 1,
            explanation: 'Tài liệu thuộc Public Domain không chịu ràng buộc bản quyền, cho phép mọi người tự do tái sử dụng và chia sẻ.',
            domain: 'Information Management'
          },
          {
            id: 'l1-t3-q4',
            question: 'Ký hiệu "BY" trong hệ thống giấy phép Creative Commons (CC BY) yêu cầu người sử dụng phải làm gì?',
            options: ['Phải mua bản quyền bằng tiền', 'Phải ghi công và trích dẫn nguồn tác giả gốc', 'Không được sao chép', 'Chỉ được mở trên trình duyệt của tác giả'],
            correctIndex: 1,
            explanation: 'Ký hiệu BY (Attribution) quy định bắt buộc phải ghi rõ tác giả gốc khi sử dụng lại tác phẩm.',
            domain: 'Information Management'
          },
          {
            id: 'l1-t3-q5',
            question: 'Bạn muốn tìm kiếm tài liệu về dịch bệnh trên các trang tin cậy của Bộ Y tế Việt Nam (tên miền moh.gov.vn). Cú pháp tìm kiếm thích hợp là gì?',
            options: ['dịch bệnh website:moh.gov.vn', 'site:moh.gov.vn dịch bệnh', 'in:moh.gov.vn dịch bệnh', 'domain(moh.gov.vn) + dịch bệnh'],
            correctIndex: 1,
            explanation: 'Cú pháp site:<tên miền> giới hạn phạm vi tìm kiếm của Google bên trong địa chỉ web đó.',
            domain: 'Information Management'
          },
          {
            id: 'l1-t3-q6',
            question: 'Hành vi tự ý tải một bài hát độc quyền từ trang web lậu rồi chèn vào video kiếm tiền trên mạng mà không mua bản quyền hay xin phép vi phạm điều gì?',
            options: ['Vi phạm chính sách công nghệ Wi-Fi', 'Vi phạm luật Sở hữu trí tuệ và Bản quyền tác giả (Copyright Infringement)', 'Vi phạm tốc độ mạng', 'Vi phạm quy ước màn hình'],
            correctIndex: 1,
            explanation: 'Sử dụng tác phẩm có bản quyền cho mục đích thương mại mà không có sự đồng ý của tác giả là hành vi xâm phạm quyền tác giả.',
            domain: 'Information Management'
          }
        ]
      },
      {
        id: 'ic3-l1-chude-4',
        order: 4,
        code: 'CC',
        title: 'Sáng tạo nội dung',
        englishTitle: 'Content Creation',
        summary: 'Kỹ năng làm việc cơ bản với văn bản, bảng biểu, bài thuyết trình đa phương tiện, xử lý hình ảnh, định dạng và in ấn chuẩn.',
        durationMinutes: 364,
        pdfFileName: 'ic3-level-1-chude-4.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-4.pdf',
        coreKnowledge: [
          {
            title: 'Xử lý văn bản (Word Processing)',
            details: [
              'Tạo mới, lưu tệp (.docx) và lưu tệp dưới dạng mẫu hoặc PDF (.pdf).',
              'Định dạng phông chữ (Font, Size, Bold, Italic, Underline), màu sắc và căn lề (Left, Center, Right, Justify).',
              'Thiết lập khoảng cách dòng (Line Spacing) và khoảng cách đoạn (Paragraph Spacing).',
              'Chèn và chỉnh sửa bảng biểu (Tables), hình ảnh (Images), hình dạng (Shapes) và đầu trang/chân trang (Header/Footer).'
            ]
          },
          {
            title: 'Thiết kế bài thuyết trình (Presentation Basics)',
            details: [
              'Tạo slide thuyết trình mới, áp dụng Layout thích hợp (Title Slide, Title and Content, Two Content).',
              'Áp dụng Theme màu sắc và thiết kế thống nhất cho toàn bộ bài thuyết trình.',
              'Chèn hiệu ứng chuyển tiếp slide (Transitions) và hiệu ứng xuất hiện đối tượng (Animations).',
              'Quy tắc thiết kế 6x6: Không quá 6 dòng chữ trên một slide và không quá 6 từ trên một dòng chữ để tránh quá tải thị giác.'
            ]
          },
          {
            title: 'Định dạng in ấn & Tránh đạo văn (Plagiarism)',
            details: [
              'Xem trước khi in (Print Preview): Kiểm tra bố cục, lề trang (Margins), hướng giấy (Portrait/Landscape) và số trang.',
              'Đạo văn (Plagiarism): Sử dụng từ ngữ, hình ảnh hoặc ý tưởng của người khác mà không ghi rõ nguồn trích dẫn.',
              'Cách trích dẫn chuẩn: Sử dụng dấu ngoặc trích dẫn trực tiếp hoặc viết lại bằng lời văn của mình (paraphrase) kèm ghi chú nguồn tham khảo.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Plagiarism (Đạo văn)', definition: 'Hành vi sao chép công trình, ý tưởng hoặc ngôn từ của tác giả khác và giả mạo thành của chính mình.' },
          { term: 'Slide Transition', definition: 'Hiệu ứng thị giác diễn ra khi chuyển đổi giữa trang chiếu này sang trang chiếu tiếp theo.' },
          { term: 'Print Preview', definition: 'Chế độ xem trước bố cục chính xác của trang tài liệu khi được in ra giấy.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t4-q1',
            question: 'Khi soạn thảo tài liệu trong Microsoft Word, chế độ căn chỉnh văn bản nào giúp các mép chữ ở cả hai bên lề trái và phải đều thẳng hàng đẹp mắt?',
            options: ['Align Left (Căn lề trái)', 'Align Right (Căn lề phải)', 'Center (Căn giữa)', 'Justify (Căn đều hai bên)'],
            correctIndex: 3,
            explanation: 'Justify (Ctrl + J) tự động căn chỉnh khoảng cách giữa các từ để các dòng thẳng đều ở cả hai bên mép lề trái và phải.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q2',
            question: 'Trong PowerPoint, hiệu ứng diễn ra khi di chuyển từ slide này sang slide kế tiếp được gọi là gì?',
            options: ['Custom Animation', 'Slide Transition', 'Layout Master', 'Trigger Action'],
            correctIndex: 1,
            explanation: 'Slide Transition là hiệu ứng chuyển cảnh giữa hai slide liên tiếp, còn Animation là hiệu ứng tác động lên từng đối tượng trên slide.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q3',
            question: 'Hành vi sao chép nguyên văn một đoạn văn từ một trang web vào bài thuyết trình của mình mà KHÔNG ghi chú tác giả hay nguồn trích dẫn được gọi là gì?',
            options: ['Bản quyền sáng tạo', 'Đạo văn (Plagiarism)', 'Trích dẫn hợp pháp', 'Phạm vi công cộng'],
            correctIndex: 1,
            explanation: 'Đạo văn là hành vi chiếm đoạt ngôn từ, ý tưởng của người khác mà không trích dẫn nguồn công khai.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q4',
            question: 'Trước khi bấm lệnh in tài liệu ra giấy thật, tính năng nào giúp bạn kiểm tra toàn bộ lỗi tràn trang, lệch lề và bố cục hình ảnh để tránh lãng phí giấy?',
            options: ['Print Preview (Xem trước khi in)', 'Spell Check (Kiểm tra chính tả)', 'Track Changes', 'Save As'],
            correctIndex: 0,
            explanation: 'Print Preview hiển thị chính xác những gì sẽ xuất hiện trên giấy in, giúp người dùng chỉnh lề và số trang trước khi in.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q5',
            question: 'Trong phần mềm soạn thảo, tính năng Header và Footer có tác dụng gì?',
            options: ['Dùng để vẽ các hình 3D phức tạp', 'Tự động hiển thị nội dung cố định ở mép trên cùng (Header) và mép dưới cùng (Footer) của tất cả các trang văn bản (như số trang, tiêu đề sách)', 'Dùng để quét virus tài liệu', 'Tự động gửi email tài liệu'],
            correctIndex: 1,
            explanation: 'Header và Footer là vùng đầu trang và chân trang xuất hiện lặp lại trên mọi trang tài liệu để chứa số trang, ngày tháng, tên tác phẩm.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q6',
            question: 'Định dạng tệp nào sau đây thích hợp nhất để xuất bản tài liệu giúp người nhận xem được nguyên vẹn định dạng trên mọi thiết bị mà không bị nhảy dòng hay lỗi phông?',
            options: ['.txt', '.pdf', '.bmp', '.bat'],
            correctIndex: 1,
            explanation: 'PDF (Portable Document Format) giữ nguyên vẹn bố cục chữ, ảnh và phông chữ trên mọi hệ điều hành và thiết bị.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q7',
            question: 'Quy tắc nào sau đây là nguyên tắc thiết kế trình chiếu slide hiệu quả?',
            options: ['Chèn thật nhiều chữ đặc kín toàn bộ slide', 'Sử dụng phông chữ rõ ràng, độ tương phản cao giữa màu chữ và màu nền, nội dung cô đọng súc tích', 'Sử dụng 10 phông chữ khác nhau trên cùng một trang', 'Không sử dụng bất kỳ hình ảnh minh họa nào'],
            correctIndex: 1,
            explanation: 'Slide trình chiếu cần rõ ràng, tương phản tốt, chữ cô đọng và có hình ảnh minh họa phù hợp để người nghe dễ tiếp thu.',
            domain: 'Content Creation'
          },
          {
            id: 'l1-t4-q8',
            question: 'Tổ hợp phím tắt tiêu chuẩn nào trong các ứng dụng soạn thảo dùng để hoàn tác (lùi lại một thao tác vừa làm nhầm)?',
            options: ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z', 'Ctrl + S'],
            correctIndex: 2,
            explanation: 'Ctrl + Z là phím tắt lệnh Undo (hoàn tác thao tác vừa thực hiện).',
            domain: 'Content Creation'
          }
        ]
      },
      {
        id: 'ic3-l1-chude-5',
        order: 5,
        code: 'COMM',
        title: 'Giao tiếp',
        englishTitle: 'Communication',
        summary: 'Các phương thức giao tiếp số, chính sách sử dụng chấp nhận được (AUP), nghi thức gửi email chuyên nghiệp và an toàn khi họp trực tuyến.',
        durationMinutes: 70,
        pdfFileName: 'ic3-level-1-chude-5.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-5.pdf',
        coreKnowledge: [
          {
            title: 'Các kênh truyền thông & giao tiếp số',
            details: [
              'Email (Thư điện tử): Kênh giao tiếp trang trọng, lưu vết lịch sử làm việc tốt, gửi kèm tài liệu.',
              'Nhắn tin tức thời (Instant Messaging): Trao đổi nhanh, phản hồi tức thời (Zalo, Teams, Messenger).',
              'Hội nghị trực tuyến (Video Conferencing): Họp mặt và thảo luận qua camera/microphone từ xa (Zoom, Microsoft Teams, Google Meet).',
              'Diễn đàn thảo luận (Forums) & Mạng xã hội: Giao tiếp diện rộng theo cộng đồng.'
            ]
          },
          {
            title: 'Chính sách sử dụng chấp nhận được (AUP - Acceptable Use Policy)',
            details: [
              'Tài liệu quy định các hành vi được phép và bị cấm khi sử dụng thiết bị, mạng internet của trường học hoặc cơ quan.',
              'Nghiêm cấm: Truy cập trang web độc hại, phát tán mã độc, sử dụng mạng cơ quan để kinh doanh cá nhân phi pháp hoặc tải nội dung vi phạm bản quyền.',
              'Người dùng có trách nhiệm bảo vệ mật khẩu tài khoản và báo cáo các sự cố an ninh.'
            ]
          },
          {
            title: 'Quy tắc gửi Email chuyên nghiệp',
            details: [
              'Dòng tiêu đề (Subject line): Rõ ràng, ngắn gọn, phản ánh đúng nội dung thư.',
              'Trường To (Người nhận chính), CC (Carbon Copy - người nhận để biết thông tin), BCC (Blind Carbon Copy - ẩn danh người nhận khác).',
              'Lời chào đầu thư trang trọng, lời cảm ơn và chữ ký thư (Email Signature) chuyên nghiệp.'
            ]
          }
        ],
        keyTerms: [
          { term: 'AUP (Acceptable Use Policy)', definition: 'Văn bản thỏa thuận nêu rõ quy định sử dụng máy tính, mạng Internet an toàn tại trường học hoặc công ty.' },
          { term: 'BCC (Blind Carbon Copy)', definition: 'Chế độ gửi bản sao email đến người nhận mà các người nhận khác trong danh sách không nhìn thấy địa chỉ của họ.' },
          { term: 'Video Conferencing', definition: 'Công nghệ cho phép nhiều người ở các địa điểm khác nhau tổ chức cuộc họp tương tác trực tiếp qua video và âm thanh.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t5-q1',
            question: 'Khi gửi email cho nhiều khách hàng hoặc phụ huynh nhưng cần bảo mật địa chỉ email của từng người để họ không nhìn thấy email của nhau, bạn nên đặt danh sách địa chỉ vào trường nào?',
            options: ['To', 'CC (Carbon Copy)', 'BCC (Blind Carbon Copy)', 'Subject'],
            correctIndex: 2,
            explanation: 'BCC ẩn danh sách địa chỉ email của những người nhận trong ô này đối với toàn bộ các người nhận khác.',
            domain: 'Communication'
          },
          {
            id: 'l1-t5-q2',
            question: 'Chính sách sử dụng được chấp nhận (AUP - Acceptable Use Policy) tại các trường học có vai trò gì?',
            options: ['Hướng dẫn cách lắp ráp vỏ máy tính', 'Quy định các quy tắc về quyền lợi và trách nhiệm của học sinh khi sử dụng máy tính và mạng mạng của trường', 'Quy định giá bán các loại linh kiện điện tử', 'Là bài kiểm tra lập trình nâng cao'],
            correctIndex: 1,
            explanation: 'AUP là bản quy chế quy định rõ những hành vi được phép và nghiêm cấm khi học sinh sử dụng máy tính, mạng Internet của nhà trường.',
            domain: 'Communication'
          },
          {
            id: 'l1-t5-q3',
            question: 'Hành động nào sau đây là văn minh và lịch sự khi tham gia một lớp học trực tuyến qua Zoom hoặc Google Meet?',
            options: ['Bật nhạc loa ngoài thật to trong suốt buổi học', 'Tắt micro (Mute) khi không phát biểu để tránh tiếng ồn xung quanh làm ảnh hưởng lớp học', 'Vẽ bậy liên tục lên màn hình trình chiếu của thầy cô', 'Mở nhiều trò chơi game online chạy ngầm'],
            correctIndex: 1,
            explanation: 'Tắt micro khi lắng nghe giúp loại bỏ tiếng ồn nền của môi trường xung quanh, thể hiện sự tôn trọng với lớp học.',
            domain: 'Communication'
          },
          {
            id: 'l1-t5-q4',
            question: 'Yếu tố nào sau đây là quan trọng nhất cần có trong dòng "Tiêu đề thư" (Subject) của một email học tập?',
            options: ['Để trống không ghi gì', 'Ghi ngắn gọn, rõ ràng chủ đề cần trao đổi (ví dụ: [Lớp 10A1] Nộp bài tập thực hành Tin học tuần 3)', 'Ghi một biểu tượng cảm xúc duy nhất', 'Ghi toàn bộ nội dung bức thư vào dòng tiêu đề'],
            correctIndex: 1,
            explanation: 'Tiêu đề thư rõ ràng giúp người nhận nắm bắt ngay nội dung khẩn cấp và dễ dàng phân loại email.',
            domain: 'Communication'
          },
          {
            id: 'l1-t5-q5',
            question: 'Khi bạn nhận được một email từ người lạ chứa tệp đính kèm có đuôi lạ như .exe hoặc .scr kèm lời giục giã mở gấp, bạn nên xử lý thế nào?',
            options: ['Mở tệp ngay lập tức để xem quà tặng', 'Không mở tệp, xóa email và báo cáo thư rác (Spam/Phishing)', 'Chuyển tiếp cho tất cả bạn bè trong danh bạ', 'Nhập ngay mật khẩu cá nhân vào'],
            correctIndex: 1,
            explanation: 'Tệp đính kèm khả nghi dạng thực thi (.exe, .scr) từ người lạ thường chứa mã độc hoặc virus, tuyệt đối không được mở.',
            domain: 'Communication'
          },
          {
            id: 'l1-t5-q6',
            question: 'Phương thức giao tiếp nào sau đây là giao tiếp không đồng bộ (Asynchronous Communication)?',
            options: ['Cuộc gọi điện thoại video trực tiếp', 'Gửi thư điện tử (Email)', 'Trò chuyện thoại trực tiếp hai người qua điện thoại', 'Họp trực tuyến qua Zoom'],
            correctIndex: 1,
            explanation: 'Email là giao tiếp không đồng bộ vì người gửi và người nhận không cần phải có mặt trực tuyến cùng một thời điểm để phản hồi.',
            domain: 'Communication'
          }
        ]
      },
      {
        id: 'ic3-l1-chude-6',
        order: 6,
        code: 'COL',
        title: 'Cộng tác',
        englishTitle: 'Collaboration',
        summary: 'Các công cụ cộng tác trực tuyến trên đám mây, chia sẻ tài liệu nhóm, quản lý quyền truy cập và nghi thức làm việc nhóm hiệu quả.',
        durationMinutes: 56,
        pdfFileName: 'ic3-level-1-chude-6.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-6.pdf',
        coreKnowledge: [
          {
            title: 'Nền tảng & Công cụ cộng tác đám mây',
            details: [
              'Các nền tảng làm việc nhóm phổ biến: Google Workspace (Docs, Sheets, Drive), Microsoft 365 (Word Online, OneDrive, Teams).',
              'Lợi ích: Cho phép nhiều thành viên cùng chỉnh sửa một tài liệu theo thời gian thực (Real-time Co-authoring) mà không sợ trùng lặp phiên bản.',
              'Lịch sử phiên bản (Version History): Giúp theo dõi ai đã sửa những nội dung gì và có thể khôi phục lại trạng thái cũ bất cứ lúc nào.'
            ]
          },
          {
            title: 'Quản lý quyền chia sẻ tài liệu',
            details: [
              'Quyền xem (Viewer): Người nhận chỉ được đọc tài liệu, không thể sửa hay để lại bình luận.',
              'Quyền bình luận (Commenter): Được phép để lại nhận xét, góp ý nhưng không thể trực tiếp thay đổi nội dung gốc.',
              'Quyền chỉnh sửa (Editor): Có toàn quyền gõ, xóa, thêm hình ảnh và định dạng tài liệu.',
              'Chia sẻ liên kết: Cần thận trọng khi bật chế độ "Bất kỳ ai có liên kết đều có thể xem/sửa" để tránh rò rỉ dữ liệu nhạy cảm.'
            ]
          },
          {
            title: 'Nghi thức cộng tác nhóm số',
            details: [
              'Sử dụng tính năng @mention để giao nhiệm vụ cụ thể cho từng thành viên trong nhóm.',
              'Tôn trọng công việc của bạn học, không tùy tiện xóa nội dung thành viên khác đang viết mà chưa trao đổi.',
              'Sử dụng tính năng Theo dõi thay đổi (Track Changes) hoặc Gợi ý (Suggesting mode) khi biên tập lại bài của người khác.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Cloud Collaboration', definition: 'Làm việc cùng nhau trên cùng các tài liệu lưu trữ trên máy chủ đám mây thông qua kết nối Internet.' },
          { term: 'Real-time Co-authoring', definition: 'Khả năng cho phép nhiều người dùng cùng mở và đồng thời gõ/sửa một tệp văn bản hoặc trang tính.' },
          { term: 'Version History', definition: 'Bản ghi lịch sử các thay đổi của tệp tin theo từng mốc thời gian kèm người thực hiện.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t6-q1',
            question: 'Khi chia sẻ một tài liệu báo cáo nghiên cứu cho bạn cùng lớp để họ đọc và góp ý nhưng KHÔNG ĐƯỢC PHÉP thay đổi nội dung chính của bạn, bạn nên cấp quyền truy cập nào?',
            options: ['Viewer (Người xem) hoặc Commenter (Người nhận xét)', 'Editor (Người chỉnh sửa)', 'Owner (Chủ sở hữu)', 'Administrator (Quản trị viên)'],
            correctIndex: 0,
            explanation: 'Quyền Commenter cho phép bạn học thêm nhận xét gợi ý bên lề mà không làm thay đổi trực tiếp nội dung văn bản gốc.',
            domain: 'Collaboration'
          },
          {
            id: 'l1-t6-q2',
            question: 'Tính năng nào trên Google Docs hoặc Microsoft Word 365 cho phép bạn xem lại nội dung tài liệu trước khi bị một thành viên trong nhóm lỡ tay xóa mất?',
            options: ['Font Size', 'Version History (Lịch sử phiên bản)', 'Spelling & Grammar', 'Translate Document'],
            correctIndex: 1,
            explanation: 'Version History lưu lại từng phiên bản tệp tin theo ngày giờ và cho phép bạn xem lại hoặc hoàn tác về phiên bản cũ nguyên vẹn.',
            domain: 'Collaboration'
          },
          {
            id: 'l1-t6-q3',
            question: 'Ưu điểm lớn nhất của việc lưu trữ tài liệu trên dịch vụ điện toán đám mây (Google Drive, OneDrive) khi làm bài tập nhóm là gì?',
            options: ['Không cần kết nối mạng vẫn gửi được bài cho nhóm', 'Tất cả thành viên có thể cùng mở, đồng tác giả theo thời gian thực và đồng bộ dữ liệu tức thì từ bất kỳ đâu', 'Máy tính không bao giờ bị hỏng', 'Tự động làm bài tập thay cho học sinh'],
            correctIndex: 1,
            explanation: 'Đám mây cho phép nhiều người dùng cộng tác đồng thời trên cùng một tệp dữ liệu mà không cần phải gửi qua lại các tệp đính kèm thủ công.',
            domain: 'Collaboration'
          },
          {
            id: 'l1-t6-q4',
            question: 'Khi để lại bình luận trên tài liệu nhóm, cú pháp nào sau đây thường được dùng để gắn thẻ (tag) và gửi thông báo trực tiếp đến tài khoản email của một thành viên?',
            options: ['#tên', '@tên (hoặc @email)', '*tên', '$tên'],
            correctIndex: 1,
            explanation: 'Ký hiệu @ (mention) là chuẩn chung trên các nền tảng cộng tác để thông báo đến người được chỉ định.',
            domain: 'Collaboration'
          },
          {
            id: 'l1-t6-q5',
            question: 'Hành động nào sau đây KHÔNG PHÙ HỢP với văn hóa cộng tác trực tuyến?',
            options: ['Tự ý xóa bài làm của thành viên khác mà không thảo luận trước', 'Để lại lời nhận xét mang tính xây dựng', 'Hoàn thành đúng phần việc được giao trong dự án nhóm', 'Chủ động thông báo khi có lỗi phát sinh'],
            correctIndex: 0,
            explanation: 'Tự ý xóa sản phẩm của người khác mà không có sự đồng thuận vi phạm nghiêm trọng quy tắc làm việc nhóm.',
            domain: 'Collaboration'
          },
          {
            id: 'l1-t6-q6',
            question: 'Ứng dụng nào sau đây KHÔNG PHẢI là nền tảng lưu trữ đám mây hỗ trợ làm việc cộng tác?',
            options: ['Microsoft OneDrive', 'Google Drive', 'Dropbox', 'Windows Notepad (ghi chú offline đơn giản)'],
            correctIndex: 3,
            explanation: 'Windows Notepad là ứng dụng soạn thảo văn bản thô cục bộ trên máy tính, không có tính năng lưu trữ đám mây hay đồng tác giả trực tuyến.',
            domain: 'Collaboration'
          }
        ]
      },
      {
        id: 'ic3-l1-chude-7',
        order: 7,
        code: 'SS',
        title: 'An toàn & Bảo mật',
        englishTitle: 'Safety and Security',
        summary: 'Nhận biết các mối đe dọa bảo mật, phòng chống phần mềm độc hại, công thái học (Ergonomics) và bảo vệ sức khỏe khi sử dụng máy tính.',
        durationMinutes: 133,
        pdfFileName: 'ic3-level-1-chude-7.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-1-chude-7.pdf',
        coreKnowledge: [
          {
            title: 'Mối đe dọa bảo mật & Phần mềm độc hại (Malware)',
            details: [
              'Virus: Đoạn mã tự nhân bản bằng cách lây nhiễm vào các tệp tin khác khi người dùng kích hoạt tệp.',
              'Worm (Sâu máy tính): Tự động lây lan qua mạng máy tính mà không cần sự can thiệp của người dùng.',
              'Trojan Horse: Đội lốt phần mềm tiện ích hữu ích để đánh lừa người dùng cài đặt, từ đó mở cửa sau (backdoor) cho tin tặc.',
              'Spyware (Phần mềm gián điệp) & Keylogger: Âm thầm theo dõi thói quen duyệt web và ghi lại phím bấm để đánh cắp mật khẩu.',
              'Ransomware (Mã độc tống tiền): Mã hóa toàn bộ dữ liệu trên máy và đòi tiền chuộc để giải mã.'
            ]
          },
          {
            title: 'Các biện pháp phòng thủ & Bảo vệ mật khẩu',
            details: [
              'Mật khẩu mạnh: Ít nhất 8-12 ký tự, kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt (@, #, $...). Không dùng ngày sinh hay tên.',
              'Xác thực hai yếu tố (2FA - Two-Factor Authentication): Kết hợp mật khẩu cùng mã OTP gửi về điện thoại hoặc ứng dụng Authenticator.',
              'Bật tường lửa (Firewall) và cập nhật thường xuyên phần mềm diệt virus (Antivirus).',
              'Luôn cập nhật bản vá bảo mật (Security Updates) của hệ điều hành.'
            ]
          },
          {
            title: 'Công thái học (Ergonomics) & Bảo vệ sức khỏe',
            details: [
              'Tư thế ngồi chuẩn: Lưng thẳng, tựa vào lưng ghế; bàn chân đặt phẳng trên sàn nhà; đùi song song với sàn.',
              'Vị trí màn hình: Đặt ngang tầm mắt hoặc thấp hơn mắt một chút (10-20 độ), khoảng cách từ mắt đến màn hình khoảng 50-70 cm (chiều dài một cánh tay).',
              'Chống mỏi mắt: Quy tắc 20-20-20 (Sau mỗi 20 phút nhìn màn hình, hãy nhìn vào một vật cách xa 20 feet (~6 mét) trong ít nhất 20 giây).',
              'Phòng ngừa hội chứng chấn thương do căng thẳng lặp đi lặp lại (RSI - Repetitive Strain Injury) bằng cách thả lỏng cổ tay và sử dụng miếng lót chuột đệm êm.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Ergonomics (Công thái học)', definition: 'Khoa học nghiên cứu thiết kế nơi làm việc và thiết bị sao cho phù hợp với cơ thể con người nhằm giảm chấn thương và tăng năng suất.' },
          { term: '2FA (Two-Factor Authentication)', definition: 'Phương thức bảo mật yêu cầu người dùng cung cấp hai yếu tố xác thực khác nhau trước khi cấp quyền truy cập.' },
          { term: 'Ransomware', definition: 'Phần mềm độc hại tống tiền bằng cách mã hóa toàn bộ dữ liệu máy tính của nạn nhân cho đến khi nạn nhân nộp tiền.' },
          { term: 'RSI (Repetitive Strain Injury)', definition: 'Chấn thương căng thẳng lặp đi lặp lại ở cơ, gân và dây thần kinh do thao tác máy tính liên tục trong thời gian dài.' }
        ],
        quizQuestions: [
          {
            id: 'l1-t7-q1',
            question: 'Loại phần mềm độc hại nào âm thầm ghi lại từng phím bấm của người dùng trên bàn phím nhằm đánh cắp mật khẩu và số thẻ ngân hàng?',
            options: ['Worm', 'Keylogger (loại Spyware)', 'Adware', 'Phần mềm diệt virus'],
            correctIndex: 1,
            explanation: 'Keylogger theo dõi và ghi nhận lại mọi thao tác gõ phím để gửi về máy chủ của tin tặc nhằm thu thập mật khẩu bí mật.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q2',
            question: 'Mật khẩu nào sau đây được đánh giá là MẠNH và AN TOÀN nhất?',
            options: ['12345678', 'password2023', 'nguyenvana123', 'Tr@ngAn#2024!K'],
            correctIndex: 3,
            explanation: 'Mật khẩu mạnh kết hợp chữ hoa, chữ thường, số, ký tự đặc biệt và có độ dài trên 10 ký tự, không chứa thông tin cá nhân dễ đoán.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q3',
            question: 'Tính năng Xác thực hai yếu tố (2FA) bảo vệ tài khoản của bạn như thế nào?',
            options: ['Yêu cầu bạn đổi mật khẩu 2 lần mỗi ngày', 'Yêu cầu thêm một bằng chứng xác thực thứ hai (như mã OTP gửi về điện thoại) bên cạnh mật khẩu tĩnh', 'Cần 2 người cùng nhập mật khẩu mới mở được máy', 'Tự động sao lưu dữ liệu máy tính 2 lần'],
            correctIndex: 1,
            explanation: '2FA bổ sung một lớp bảo vệ vững chắc: dù kẻ gian biết mật khẩu nhưng không có thiết bị nhận mã OTP thứ hai thì vẫn không thể đăng nhập.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q4',
            question: 'Theo nguyên tắc công thái học (Ergonomics), vị trí mép trên cùng của màn hình máy tính nên được đặt ở độ cao nào là tốt nhất cho mắt và cổ?',
            options: ['Đặt sát xuống mặt sàn', 'Ngang hoặc thấp hơn tầm mắt nhìn thẳng một chút', 'Cao hơn đỉnh đầu 30 cm để ngửa cổ nhìn lên', 'Đặt lệch hẳn sang một bên vai'],
            correctIndex: 1,
            explanation: 'Mép trên màn hình ngang hoặc thấp hơn tầm mắt giúp cổ giữ ở tư thế tự nhiên, mắt nhìn hơi hạ xuống tránh căng cơ cổ và khô mắt.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q5',
            question: 'Quy tắc 20-20-20 trong chăm sóc mắt khi làm việc với máy vi tính được hiểu là gì?',
            options: ['Cứ 20 phút làm việc, nhìn vào một vật cách xa 20 feet (khoảng 6 mét) trong 20 giây', 'Chỉ dùng máy tính 20 phút một ngày', 'Chớp mắt 20 lần trong 20 giây', 'Đặt màn hình cách xa 20 cm'],
            correctIndex: 0,
            explanation: 'Quy tắc 20-20-20 giúp cơ điều tiết của mắt được thả lỏng sau khi tập trung nhìn gần vào màn hình quá lâu.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q6',
            question: 'Hội chứng chấn thương do căng thẳng lặp đi lặp lại (RSI - Repetitive Strain Injury) khi sử dụng máy vi tính thường ảnh hưởng nặng nhất đến bộ phận nào?',
            options: ['Đầu gối chân', 'Cổ tay, ngón tay và cánh tay do thao tác chuột và bàn phím sai tư thế liên tục', 'Răng và hàm', 'Bàn chân'],
            correctIndex: 1,
            explanation: 'RSI gây viêm gân, hội chứng ống cổ tay ở bàn tay và cổ tay do thao tác bấm chuột và gõ phím liên tục không có điểm tỳ nghỉ ngơi.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q7',
            question: 'Phần mềm độc hại (Ransomware) gây nguy hiểm cho người dùng như thế nào?',
            options: ['Tự động tăng độ sáng màn hình lên mức tối đa', 'Mã hóa khóa chặt toàn bộ tài liệu cá nhân và hiển thị thông báo đòi tiền chuộc để lấy lại chìa khóa giải mã', 'Tắt kết nối âm thanh của máy', 'Tự động gỡ cài đặt hình nền máy tính'],
            correctIndex: 1,
            explanation: 'Ransomware là mã độc tống tiền, chúng mã hóa các tệp dữ liệu quan trọng và đe dọa phá hủy vĩnh viễn nếu không trả tiền chuộc.',
            domain: 'Safety and Security'
          },
          {
            id: 'l1-t7-q8',
            question: 'Tường lửa (Firewall) trên hệ điều hành máy tính đóng vai trò gì trong hệ thống an ninh?',
            options: ['Làm mát thùng máy tính khi bị nóng', 'Kiểm soát và giám sát lưu lượng dữ liệu mạng ra vào, ngăn chặn các kết nối đáng ngờ và truy cập trái phép', 'Dập tắt đám cháy phần cứng', 'Tự động sao lưu dữ liệu sang đám mây'],
            correctIndex: 1,
            explanation: 'Firewall là rào chắn an ninh lọc các gói tin mạng, ngăn chặn các xâm nhập bất hợp pháp từ bên ngoài vào máy tính.',
            domain: 'Safety and Security'
          }
        ]
      }
    ]
  },

  'ic3-level-2': {
    id: 'ic3-level-2',
    title: 'IC3 GS6 Level 2: Kỹ Năng Kỹ Thuật Số Thực Hành',
    subtitle: 'Nâng cao năng lực sử dụng máy tính thực hành, quản lý tập tin, bảng tính Excel và an toàn giao dịch',
    levelBadge: 'Cấp độ 2 (Intermediate)',
    badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20 dark:text-indigo-400',
    description: 'Yêu cầu kiến thức làm việc thực tế của từng nhóm kỹ năng: Cài đặt thiết bị và máy in, điện toán đám mây, nén tập tin, quản lý danh tính cá nhân vs nghề nghiệp, thu thập dữ liệu trực tuyến, Microsoft Excel nâng cao, giao dịch bảo mật và phòng chống lừa đảo trực tuyến.',
    accentColor: 'indigo',
    accentClass: 'from-indigo-500 to-purple-600',
    durationHours: 16,
    topics: [
      {
        id: 'ic3-l2-chude-1',
        order: 1,
        code: 'TB',
        title: 'Căn bản về công nghệ',
        englishTitle: 'Technology Basics',
        summary: 'Cài đặt Windows 10, cấu hình thiết bị ngoại vi và máy in, quản lý tập tin nâng cao, nén tệp, cài đặt trình duyệt, tự động hóa và lịch kỹ thuật số.',
        durationMinutes: 361,
        pdfFileName: 'ic3-level-2-chude-1.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-1.pdf',
        coreKnowledge: [
          {
            title: 'Cài đặt hệ điều hành & Quản trị phần cứng',
            details: [
              'Menu Settings và Control Panel trong Windows 10: Tùy biến hiển thị, thiết lập âm thanh, quản lý ứng dụng và cập nhật hệ thống.',
              'Cài đặt máy in (Printers & Scanners): Thêm máy in mạng (Network Printer qua địa chỉ IP) và máy in cục bộ qua cổng USB.',
              'Xử lý kẹt lệnh in (Print Queue): Cách hủy (Cancel), tạm dừng (Pause) và khởi động lại dịch vụ Print Spooler khi máy in bị treo.'
            ]
          },
          {
            title: 'Quản lý & Nén tập tin (File Compression)',
            details: [
              'Cấu trúc đường dẫn tệp (File Path) tuyệt đối và tương đối (ví dụ: C:\\\\Users\\\\Student\\\\Documents\\\\report.docx).',
              'Hiểu đuôi tệp (File Extensions): .docx, .xlsx, .pptx, .pdf, .zip, .rar, .exe, .png, .jpg.',
              'Nén tập tin (ZIP/RAR): Giảm dung lượng lưu trữ, gom nhiều tệp thành một tệp duy nhất để dễ dàng đính kèm gửi qua email.',
              'Giải nén (Extract All): Khôi phục các tệp tin về trạng thái ban đầu trước khi sử dụng.'
            ]
          },
          {
            title: 'Tự động hóa & Lịch kỹ thuật số cá nhân',
            details: [
              'Phương pháp tự động hóa: Sử dụng Task Scheduler trên Windows để đặt lịch tự động quét virus, dọn rác đĩa hoặc sao lưu định kỳ.',
              'Sử dụng ứng dụng Lịch (Calendar - Google Calendar, Outlook Calendar): Tạo sự kiện, thiết lập thời gian nhắc nhở (Reminders), lịch lặp lại (Recurring events) và mời người khác tham gia sự kiện.'
            ]
          }
        ],
        keyTerms: [
          { term: 'File Compression', definition: 'Quá trình mã hóa thông tin để giảm kích thước tệp tin bằng các thuật toán nén dữ liệu.' },
          { term: 'Print Spooler', definition: 'Dịch vụ hệ thống trong Windows có nhiệm vụ lưu trữ các lệnh in trong bộ nhớ đệm và lần lượt gửi tới máy in.' },
          { term: 'Task Scheduler', definition: 'Công cụ hệ điều hành cho phép tự động thực thi các tập lệnh hoặc ứng dụng theo thời gian đặt trước.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t1-q1',
            question: 'Khi nhiều tài liệu gửi tới máy in bị tắc nghẽn trong hàng đợi in (Print Queue) và máy in không phản hồi, giải pháp xử lý kỹ thuật nào sau đây là phù hợp nhất?',
            options: ['Đập mạnh vào thân máy in', 'Mở danh sách hàng đợi in, chọn Cancel all documents rồi khởi động lại dịch vụ Print Spooler', 'Cài đặt lại toàn bộ hệ điều hành máy tính', 'Đổi sang một dây nguồn điện mới'],
            correctIndex: 1,
            explanation: 'Hủy các lệnh in lỗi và khởi động lại dịch vụ đệm in Print Spooler giúp giải phóng hàng đợi in bị tắc nghẽn.',
            domain: 'Technology Basics'
          },
          {
            id: 'l2-t1-q2',
            question: 'Lợi ích chính của việc nén một thư mục chứa 50 bức ảnh thành một tệp có định dạng .ZIP trước khi gửi qua email là gì?',
            options: ['Làm tăng độ phân giải của hình ảnh lên gấp đôi', 'Giảm tổng kích thước dung lượng tệp và gộp toàn bộ thành một tệp duy nhất giúp đính kèm nhanh chóng', 'Khóa mật mã không cho ai xem được hình', 'Tự động chỉnh sửa màu sắc ảnh'],
            correctIndex: 1,
            explanation: 'Nén tệp giúp giảm dung lượng dữ liệu và gom nhiều tệp nhỏ thành một tệp duy nhất thuận tiện cho việc chia sẻ.',
            domain: 'Technology Basics'
          },
          {
            id: 'l2-t1-q3',
            question: 'Phần mở rộng (File Extension) của một tệp tin đóng vai trò gì đối với hệ điều hành Windows?',
            options: ['Quyết định màu sắc hiển thị của tệp', 'Giúp hệ điều hành xác định định dạng nội dung của tệp và ứng dụng mặc định phù hợp để mở tệp đó', 'Cho biết giá tiền của tệp tin', 'Không có tác dụng gì'],
            correctIndex: 1,
            explanation: 'Đuôi tệp (như .docx, .xlsx, .pdf) cho hệ điều hành biết kiểu dữ liệu và chương trình tương thích để mở tệp.',
            domain: 'Technology Basics'
          },
          {
            id: 'l2-t1-q4',
            question: 'Công cụ nào tích hợp sẵn trên hệ điều hành Windows cho phép người dùng lên lịch tự động chạy các chương trình dọn dẹp đĩa hoặc sao lưu vào lúc 2 giờ sáng hàng ngày?',
            options: ['Task Scheduler', 'Paint 3D', 'Windows Media Player', 'Calculator'],
            correctIndex: 0,
            explanation: 'Task Scheduler là tiện ích quản trị hệ thống cho phép tạo các tác vụ tự động thực thi theo lịch trình thời gian.',
            domain: 'Technology Basics'
          },
          {
            id: 'l2-t1-q5',
            question: 'Khi tạo một cuộc họp định kỳ vào mỗi thứ Hai đầu tuần trên Google Calendar hoặc Outlook Calendar, tính năng nào cần được chọn?',
            options: ['All-day event', 'Recurring / Repeat event (Sự kiện lặp lại)', 'Time zone conversion', 'Private appointment'],
            correctIndex: 1,
            explanation: 'Tính năng Repeat/Recurring event tự động lặp lại sự kiện theo chu kỳ ngày, tuần hoặc tháng đã định sẵn.',
            domain: 'Technology Basics'
          },
          {
            id: 'l2-t1-q6',
            question: 'Đặc điểm cơ bản của công nghệ "Điện toán đám mây" (Cloud Computing) là gì?',
            options: ['Bắt buộc phải có trời mưa mới truy cập được', 'Cung cấp tài nguyên tính toán, lưu trữ và phần mềm theo yêu cầu qua Internet mà không cần người dùng trực tiếp sở hữu phần cứng', 'Chỉ hoạt động trên các máy bay chở khách', 'Chỉ dùng để lưu trữ các bài hát'],
            correctIndex: 1,
            explanation: 'Điện toán đám mây phân phối dịch vụ máy chủ, lưu trữ, cơ sở dữ liệu và phần mềm qua mạng Internet.',
            domain: 'Technology Basics'
          },
          {
            id: 'l2-t1-q7',
            question: 'Để gỡ bỏ triệt để một ứng dụng không còn sử dụng trên Windows 10, người dùng nên thực hiện thao tác nào?',
            options: ['Kéo biểu tượng Shortcut trên màn hình Desktop vào thùng rác Recycle Bin', 'Vào Settings > Apps > Apps & features, chọn ứng dụng rồi bấm Uninstall', 'Tắt màn hình máy tính', 'Đổi tên thư mục cài đặt'],
            correctIndex: 1,
            explanation: 'Xóa shortcut ngoài desktop không gỡ bỏ phần mềm; quy trình chuẩn là sử dụng tính năng Uninstall trong Settings hoặc Control Panel.',
            domain: 'Technology Basics'
          }
        ]
      },
      {
        id: 'ic3-l2-chude-2',
        order: 2,
        code: 'DC',
        title: 'Công dân số',
        englishTitle: 'Digital Citizenship',
        summary: 'Phân biệt danh tính cá nhân và danh tính nghề nghiệp, xây dựng hồ sơ số chuyên nghiệp, quy tắc ứng xử nơi làm việc số và quản lý danh tiếng trực tuyến.',
        durationMinutes: 120,
        pdfFileName: 'ic3-level-2-chude-2.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-2.pdf',
        coreKnowledge: [
          {
            title: 'Danh tính cá nhân vs Danh tính nghề nghiệp',
            details: [
              'Danh tính cá nhân (Personal Identity): Thể hiện sở thích, bạn bè, hoạt động thường ngày trên các mạng xã hội giải trí (Facebook, Instagram, TikTok).',
              'Danh tính nghề nghiệp (Professional Identity): Thể hiện kỹ năng, chứng chỉ, kinh nghiệm làm việc, học vấn trên các nền tảng nghề nghiệp (LinkedIn, hồ sơ CV điện tử).',
              'Ranh giới và tác động: Nhà tuyển dụng và các trường đại học thường xuyên kiểm tra dấu vết số của ứng viên; các phát ngôn thiếu suy nghĩ trên mạng xã hội cá nhân có thể hủy hoại cơ hội nghề nghiệp.'
            ]
          },
          {
            title: 'Quy tắc ứng xử nơi làm việc số (Workplace Etiquette)',
            details: [
              'Giao tiếp chuyên nghiệp trong giờ làm việc: Sử dụng kênh chat nội bộ đúng mục đích, phản hồi tin nhắn trong khung giờ quy định.',
              'Quyền riêng tư tại nơi làm việc: Thiết bị và email do cơ quan cấp có thể được giám sát hợp pháp bởi tổ chức theo chính sách nội bộ.',
              'Bảo mật thông tin nội bộ: Tuyệt đối không chia sẻ dữ liệu khách hàng, tài liệu mật hoặc thông tin dự án chưa công bố ra mạng xã hội cá nhân.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Professional Identity', definition: 'Hình ảnh và uy tín chuyên môn của một cá nhân trong môi trường công việc và ngành nghề.' },
          { term: 'Online Reputation', definition: 'Đánh giá, cái nhìn tổng thể của cộng đồng mạng về độ tin cậy và đạo đức của một người hoặc thương hiệu.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t2-q1',
            question: 'Sự khác biệt căn bản giữa nền tảng mạng xã hội chuyên nghiệp (như LinkedIn) và mạng xã hội cá nhân (như Instagram) là gì?',
            options: ['LinkedIn không cho phép đăng ảnh', 'LinkedIn tập trung vào hồ sơ năng lực, bằng cấp, kinh nghiệm làm việc và kết nối quan hệ đối tác nghề nghiệp', 'Instagram chỉ dành cho các giáo sư đại học', 'LinkedIn là mạng xã hội ngầm'],
            correctIndex: 1,
            explanation: 'LinkedIn được thiết kế chuyên biệt cho việc xây dựng thương hiệu cá nhân trong công việc, tìm kiếm việc làm và kết nối đối tác kinh doanh.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l2-t2-q2',
            question: 'Một học sinh chuẩn bị nộp hồ sơ xin học bổng du học quốc tế. Hành động nào sau đây là KHÔN NGOAN NHẤT đối với dấu chân số của mình?',
            options: ['Đăng tải nhiều bài viết gây tranh cãi và bình luận tiêu cực để gây sự chú ý', 'Rà soát và làm sạch trang cá nhân, ẩn hoặc xóa các hình ảnh/bình luận phản cảm, cập nhật các hoạt động xã hội và dự án tích cực', 'Xóa toàn bộ kết nối Internet của gia đình', 'Bỏ học Tin học'],
            correctIndex: 1,
            explanation: 'Hội đồng xét tuyển thường tra cứu dấu vết số của ứng viên; xây dựng hình ảnh tích cực, văn minh thể hiện năng lực công dân toàn cầu.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l2-t2-q3',
            question: 'Khi sử dụng máy tính xách tay và tài khoản email do công ty hoặc nhà trường cấp phát, bạn cần lưu ý điều gì về quyền riêng tư?',
            options: ['Hoàn toàn bí mật tuyệt đối, không ai có quyền kiểm tra', 'Tổ chức có quyền giám sát, sao lưu và kiểm tra hoạt động trên thiết bị và email theo quy chế nội bộ', 'Bạn có thể dùng máy tính này để mở trang web lừa đảo mà không sợ bị phát hiện', 'Mọi thứ tải về tự động thành tài sản riêng của bạn'],
            correctIndex: 1,
            explanation: 'Thiết bị và tài nguyên của tổ chức cấp thuộc quyền quản trị của tổ chức và có thể được giám sát tuân thủ theo chính sách AUP.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l2-t2-q4',
            question: 'Việc một nhân viên chụp ảnh tài liệu kế hoạch kinh doanh nội bộ của công ty đăng lên story Facebook cá nhân vi phạm điều gì?',
            options: ['Vi phạm quy tắc công thái học', 'Vi phạm nghĩa vụ bảo mật thông tin nội bộ (Confidentiality) và đạo đức nghề nghiệp', 'Vi phạm tốc độ xử lý của RAM', 'Không vi phạm gì nếu bài đăng biến mất sau 24h'],
            correctIndex: 1,
            explanation: 'Bảo mật thông tin doanh nghiệp là nghĩa vụ pháp lý và đạo đức, không được phép tiết lộ ra bên ngoài dù dưới bất kỳ hình thức nào.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l2-t2-q5',
            question: 'Thế nào là "Danh tiếng trực tuyến" (Online Reputation)?',
            options: ['Số lượng máy vi tính một người sở hữu', 'Đánh giá, nhận thức và mức độ tín nhiệm của người khác đối với bạn dựa trên các hành vi, bài đăng và dấu vết số của bạn trên mạng', 'Tốc độ bấm bàn phím của một lập trình viên', 'Dung lượng RAM tối đa của điện thoại'],
            correctIndex: 1,
            explanation: 'Danh tiếng trực tuyến là sự tín nhiệm của cộng đồng đối với bạn qua các tương tác và nội dung bạn đăng tải trên Internet.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l2-t2-q6',
            question: 'Hành động ứng xử nào sau đây là văn minh khi tham gia nhóm chat công việc cơ quan vào ngày nghỉ cuối tuần?',
            options: ['Gửi liên tục hàng chục tin nhắn đùa cợt không liên quan', 'Chỉ gửi tin nhắn trong trường hợp thực sự khẩn cấp và tôn trọng thời gian nghỉ ngơi của đồng nghiệp', 'Gọi điện thoại liên tục ép đồng nghiệp trả lời ngay', 'Xóa tất cả các thành viên khỏi nhóm chat'],
            correctIndex: 1,
            explanation: 'Tôn trọng ranh giới giữa thời gian làm việc và nghỉ ngơi là một tiêu chuẩn văn hóa quan trọng trong môi trường làm việc hiện đại.',
            domain: 'Digital Citizenship'
          }
        ]
      },
      {
        id: 'ic3-l2-chude-3',
        order: 3,
        code: 'IM',
        title: 'Quản lý thông tin',
        englishTitle: 'Information Management',
        summary: 'Tìm kiếm dữ liệu chuyên sâu, thu thập dữ liệu trực tuyến qua biểu mẫu khảo sát (Online Forms), tổ chức dữ liệu và đánh giá độ tin cậy nguồn tin.',
        durationMinutes: 40,
        pdfFileName: 'ic3-level-2-chude-3.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-3.pdf',
        coreKnowledge: [
          {
            title: 'Thu thập dữ liệu trực tuyến qua biểu mẫu',
            details: [
              'Công cụ tạo biểu mẫu trực tuyến: Google Forms, Microsoft Forms.',
              'Các dạng câu hỏi: Trắc nghiệm (Multiple choice), Hộp kiểm (Checkboxes - chọn nhiều đáp án), Thang đo tuyến tính (Linear scale), Đoạn văn ngắn/dài.',
              'Quản lý dữ liệu phản hồi: Tự động trích xuất dữ liệu trả lời ra bảng tính (Google Sheets hoặc Excel) để tiến hành phân tích số liệu.'
            ]
          },
          {
            title: 'Tổ chức & Lưu trữ thông tin hiệu quả',
            details: [
              'Đặt tên tệp và thư mục theo quy tắc chuẩn hóa (ví dụ: YYYYMMDD_TenDuAn_PhienBan.ext).',
              'Sử dụng thẻ nhãn (Tags) và siêu dữ liệu (Metadata) để tăng tốc độ tìm kiếm tệp.',
              'Chiến lược sao lưu 3-2-1: Giữ 3 bản sao dữ liệu, trên 2 phương tiện lưu trữ khác nhau, và 1 bản lưu ở vị trí ngoại vi (Đám mây).'
            ]
          }
        ],
        keyTerms: [
          { term: 'Online Forms', definition: 'Công cụ web cho phép tạo biểu mẫu câu hỏi khảo sát và tự động thu thập kết quả vào bảng tính.' },
          { term: '3-2-1 Backup Strategy', definition: 'Quy tắc sao lưu dữ liệu tiêu chuẩn: 3 bản sao, 2 loại phương tiện lưu trữ, 1 bản sao lưu trên đám mây ngoài cơ sở.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t3-q1',
            question: 'Khi tạo khảo sát thu thập ý kiến học sinh bằng Google Forms, loại câu hỏi nào cho phép người trả lời chọn ĐỒNG THỜI NHIỀU phương án?',
            options: ['Multiple Choice (Trắc nghiệm tròn)', 'Checkboxes (Hộp kiểm vuông)', 'Short Answer (Trả lời ngắn)', 'Dropdown (Menu thả xuống)'],
            correctIndex: 1,
            explanation: 'Hộp kiểm (Checkboxes) cho phép người tham gia khảo sát tích chọn một hoặc nhiều lựa chọn cùng lúc.',
            domain: 'Information Management'
          },
          {
            id: 'l2-t3-q2',
            question: 'Quy tắc sao lưu dữ liệu tiêu chuẩn "3-2-1" khuyên bạn điều gì?',
            options: ['Lưu dữ liệu trong 3 giây, 2 phút và 1 ngày', 'Giữ ít nhất 3 bản sao dữ liệu, lưu trên 2 loại thiết bị lưu trữ khác nhau, và có 1 bản sao lưu ở nơi khác (như Đám mây)', 'Chỉ dùng 3 máy tính, 2 ổ cứng và 1 cáp mạng', 'Xóa 3 tệp, giữ lại 2 tệp và nén 1 tệp'],
            correctIndex: 1,
            explanation: 'Quy tắc 3-2-1 là tiêu chuẩn vàng trong an toàn dữ liệu: 3 bản sao, 2 loại môi trường (HDD, Cloud), 1 bản ở xa phòng hỏa hoạn/thiên tai.',
            domain: 'Information Management'
          },
          {
            id: 'l2-t3-q3',
            question: 'Cách đặt tên tệp nào sau đây tuân thủ quy chuẩn quản lý tập tin khoa học, dễ tìm kiếm và sắp xếp theo thứ tự thời gian nhất?',
            options: ['bai_tap_moi_nhat_final_cuoi_cung.docx', '20240415_BaoCaoKinhDoanh_v1.0.docx', 'tailieu(1)(1).docx', 'abcxyz.docx'],
            correctIndex: 1,
            explanation: 'Đặt tên theo cấu trúc NămThángNgày_TênNộiDung_PhiênBản giúp việc sắp xếp theo thứ tự thời gian và kiểm soát phiên bản chính xác.',
            domain: 'Information Management'
          },
          {
            id: 'l2-t3-q4',
            question: 'Dữ liệu phản hồi thu được từ biểu mẫu Google Forms hoặc Microsoft Forms có thể liên kết tự động trực tiếp sang định dạng nào để vẽ biểu đồ phân tích?',
            options: ['Tệp âm thanh MP3', 'Bảng tính điện tử (Google Sheets hoặc Microsoft Excel)', 'Tệp cài đặt .EXE', 'Tệp ảnh Photoshop .PSD'],
            correctIndex: 1,
            explanation: 'Biểu mẫu trực tuyến có tính năng tự động trích xuất bảng câu trả lời sang bảng tính để xử lý số liệu thống kê.',
            domain: 'Information Management'
          },
          {
            id: 'l2-t3-q5',
            question: 'Thuật ngữ "Metadata" (Siêu dữ liệu) của một tệp tin hình ảnh có nghĩa là gì?',
            options: ['Dữ liệu mô tả về tệp như ngày chụp, kích thước điểm ảnh, thông số camera và địa điểm GPS', 'Tên của người thợ sửa máy tính', 'Giá bán chiếc máy ảnh', 'Mã độc ẩn trong ảnh'],
            correctIndex: 0,
            explanation: 'Metadata là dữ liệu cung cấp thông tin về dữ liệu khác (như EXIF data trong hình ảnh chứa thông số kỹ thuật máy ảnh, thời gian).',
            domain: 'Information Management'
          },
          {
            id: 'l2-t3-q6',
            question: 'Khi cần kiểm tra xem thông tin một bài báo mạng có phải là tin giả (Fake News) hay không, bước nào sau đây là hiệu quả nhất?',
            options: ['Tin ngay nếu bài viết có tiêu đề giật gân, câu like', 'Kiểm tra chéo với các cơ quan thông tấn chính thống (như Thông tấn xã Việt Nam, báo chí uy tín) và nguồn tin gốc của cơ quan chức năng', 'Bấm like và chia sẻ thật nhanh cho bạn bè', 'Chỉ nhìn vào bức ảnh bìa minh họa'],
            correctIndex: 1,
            explanation: 'Kiểm tra chéo với các nguồn tin chính thống độc lập là phương pháp cốt lõi để xác minh tính chân thực của thông tin trên Internet.',
            domain: 'Information Management'
          }
        ]
      },
      {
        id: 'ic3-l2-chude-4',
        order: 4,
        code: 'CC',
        title: 'Sáng tạo nội dung',
        englishTitle: 'Content Creation',
        summary: 'Khai thác các tính năng chung của bộ phần mềm văn phòng, làm chủ Microsoft Excel (hàm, công thức, biểu đồ) và cấu trúc tài liệu nhiều trang.',
        durationMinutes: 180,
        pdfFileName: 'ic3-level-2-chude-4.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-4.pdf',
        coreKnowledge: [
          {
            title: 'Làm việc với bảng tính Microsoft Excel',
            details: [
              'Cấu trúc bảng tính: Ô (Cell), Cột (Column - A, B, C...), Hàng (Row - 1, 2, 3...) và Địa chỉ ô (ví dụ: B5).',
              'Địa chỉ tương đối (A1) và Địa chỉ tuyệt đối ($A$1 - cố định bằng phím F4 khi sao chép công thức).',
              'Các hàm tính toán thống kê cơ bản: =SUM() (tổng), =AVERAGE() (trung bình), =MIN() (nhỏ nhất), =MAX() (lớn nhất), =COUNT() (đếm số).',
              'Hàm điều kiện logic: =IF(Logical_test, Value_if_true, Value_if_false).',
              'Biểu diễn dữ liệu bằng Biểu đồ (Charts): Biểu đồ cột (Column chart), Biểu đồ đường (Line chart), Biểu đồ hình tròn (Pie chart).'
            ]
          },
          {
            title: 'Cấu trúc tài liệu văn bản nâng cao',
            details: [
              'Ngắt trang (Page Break) và Ngắt phần (Section Break): Phân tách tài liệu thành các phần độc lập để thiết lập hướng giấy hoặc số trang khác nhau.',
              'Sử dụng Styles (Heading 1, Heading 2, Normal) để xây dựng mục lục tự động (Automatic Table of Contents).',
              'Trộn thư (Mail Merge): Tạo hàng loạt thư mời, chứng chỉ từ một danh sách dữ liệu Excel có sẵn.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Absolute Cell Reference ($A$1)', definition: 'Địa chỉ ô được cố định cột và hàng, không bị thay đổi khi sao chép công thức sang ô khác.' },
          { term: 'Section Break', definition: 'Dấu phân đoạn chia tài liệu thành nhiều phần riêng biệt để định dạng lề, đầu trang, chân trang độc lập.' },
          { term: 'Mail Merge', definition: 'Tính năng tự động điền danh sách dữ liệu từ bảng tính vào biểu mẫu tài liệu để tạo hàng loạt văn bản cá nhân hóa.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t4-q1',
            question: 'Trong Microsoft Excel, ký tự nào sau đây BẮT BUỘC phải được gõ ở đầu tiên trong một ô để báo cho chương trình biết đó là một công thức toán học?',
            options: ['Dấu thăng (#)', 'Dấu cộng (+)', 'Dấu bằng (=)', 'Dấu hai chấm (:)'],
            correctIndex: 2,
            explanation: 'Mọi công thức hoặc hàm tính toán trong Excel đều phải bắt đầu bằng dấu bằng (=).',
            domain: 'Content Creation'
          },
          {
            id: 'l2-t4-q2',
            question: 'Công thức nào sau đây tính điểm trung bình cộng của các ô từ B2 đến B10 trong bảng tính Excel?',
            options: ['=SUM(B2:B10)', '=AVERAGE(B2:B10)', '=COUNT(B2:B10)', '=MAX(B2:B10)'],
            correctIndex: 1,
            explanation: 'Hàm =AVERAGE(B2:B10) tính giá trị trung bình số học của phạm vi ô từ B2 đến B10.',
            domain: 'Content Creation'
          },
          {
            id: 'l2-t4-q3',
            question: 'Khi sao chép công thức chứa địa chỉ ô $C$5 sang các ô khác, địa chỉ này sẽ thay đổi như thế nào?',
            options: ['Tự động đổi thành C6', 'Tự động đổi thành D5', 'Giữ nguyên không bao giờ đổi vì có dấu $ cố định cả cột và hàng (địa chỉ tuyệt đối)', 'Báo lỗi #REF!'],
            correctIndex: 2,
            explanation: 'Dấu $ trước tên cột và chỉ số hàng tạo ra địa chỉ tuyệt đối, giúp giá trị tham chiếu cố định khi sao chép.',
            domain: 'Content Creation'
          },
          {
            id: 'l2-t4-q4',
            question: 'Để tạo một trang tài liệu nằm ngang (Landscape) nằm xen giữa các trang tài liệu đứng (Portrait) trong Microsoft Word, bạn phải chèn dấu ngắt nào?',
            options: ['Page Break (Ngắt trang thường)', 'Section Break (Next Page)', 'Column Break (Ngắt cột)', 'Line Break (Ngắt dòng)'],
            correctIndex: 1,
            explanation: 'Section Break chia tài liệu thành các phân đoạn độc lập, cho phép áp dụng hướng giấy và lề trang khác biệt cho từng phân đoạn.',
            domain: 'Content Creation'
          },
          {
            id: 'l2-t4-q5',
            question: 'Để tạo mục lục tự động (Table of Contents) nhanh chóng và chuẩn xác trong Word, văn bản cần phải được áp dụng định dạng nào cho các tiêu đề?',
            options: ['Đổi màu chữ đỏ', 'Tô đậm (Bold) thủ công', 'Gán các kiểu định dạng Heading (Heading 1, Heading 2...) trong tab Home', 'Tăng kích thước chữ lên 24pt'],
            correctIndex: 2,
            explanation: 'Tính năng Table of Contents quét các đoạn văn bản được áp dụng định dạng Heading 1, 2, 3 để tự động biên soạn cây mục lục.',
            domain: 'Content Creation'
          },
          {
            id: 'l2-t4-q6',
            question: 'Loại biểu đồ nào trong Excel phù hợp nhất để thể hiện tỉ lệ phần trăm cơ cấu của các khoản chi tiêu trong một gia đình?',
            options: ['Biểu đồ phân tán (Scatter Chart)', 'Biểu đồ hình tròn (Pie Chart)', 'Biểu đồ mạng nhện (Radar Chart)', 'Biểu đồ thác nước (Waterfall Chart)'],
            correctIndex: 1,
            explanation: 'Biểu đồ hình tròn (Pie Chart) là lựa chọn chuẩn mực để mô tả tỉ lệ đóng góp của từng phần cấu thành nên tổng thể 100%.',
            domain: 'Content Creation'
          },
          {
            id: 'l2-t4-q7',
            question: 'Tính năng "Mail Merge" trong Word thường được ứng dụng hiệu quả nhất trong trường hợp nào sau đây?',
            options: ['Chơi trò chơi trực tuyến', 'In hàng loạt giấy báo trúng tuyển hoặc thư mời có tên và thông tin riêng cho 500 học sinh từ danh sách Excel', 'Quét virus toàn bộ máy vi tính', 'Soạn thảo một trang hợp đồng đơn giản'],
            correctIndex: 1,
            explanation: 'Mail Merge tự động trộn danh sách dữ liệu để tạo ra số lượng lớn tài liệu có nội dung cá nhân hóa nhanh chóng.',
            domain: 'Content Creation'
          }
        ]
      },
      {
        id: 'ic3-l2-chude-5',
        order: 5,
        code: 'COMM',
        title: 'Giao tiếp',
        englishTitle: 'Communication',
        summary: 'Tương tác đa kênh trong môi trường số, gọi điện thoại Internet (VoIP), hội nghị trực tuyến, diễn đàn, giao dịch bảo mật (HTTPS, SSL) và phát trực tiếp (Live Streaming).',
        durationMinutes: 70,
        pdfFileName: 'ic3-level-2-chude-5.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-5.pdf',
        coreKnowledge: [
          {
            title: 'Hội nghị trực tuyến & VoIP chuyên sâu',
            details: [
              'VoIP (Voice over Internet Protocol): Công nghệ truyền giọng nói qua mạng Internet (như Skype, WhatsApp, Zalo).',
              'Chia sẻ màn hình (Screen Sharing): Chọn chia sẻ toàn màn hình (Entire Screen) hoặc chia sẻ cửa sổ ứng dụng cụ thể (Application Window) để bảo mật thông báo riêng tư.',
              'Tính năng phòng chờ (Waiting Room) và mật khẩu cuộc họp để ngăn chặn hành vi xâm nhập phá hoại (Zoombombing).'
            ]
          },
          {
            title: 'Giao dịch an toàn & Thương mại điện tử',
            details: [
              'Giao thức HTTPS (Hypertext Transfer Protocol Secure): Dữ liệu truyền tải giữa trình duyệt và máy chủ web được mã hóa bảo vệ bởi chứng chỉ SSL/TLS.',
              'Biểu tượng ổ khóa trên thanh địa chỉ URL: Báo hiệu kết nối bảo mật, an toàn khi nhập thông tin thẻ thanh toán hoặc mật khẩu.',
              'Tránh mua sắm hoặc đăng nhập ngân hàng số trên các mạng Wi-Fi công cộng không có mật khẩu bảo vệ.'
            ]
          }
        ],
        keyTerms: [
          { term: 'VoIP (Voice over IP)', definition: 'Công nghệ truyền tín hiệu âm thanh đàm thoại qua giao thức mạng Internet thay vì mạng viễn thông truyền thống.' },
          { term: 'HTTPS', definition: 'Giao thức truyền siêu văn bản an toàn, tích hợp mã hóa SSL/TLS để bảo mật thông tin người dùng.' },
          { term: 'Zoombombing', definition: 'Hành vi kẻ xấu tự ý xâm nhập vào các cuộc họp trực tuyến công khai để quấy rối hoặc phá hoại.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t5-q1',
            question: 'Khi thực hiện mua sắm trực tuyến hoặc đăng nhập vào ngân hàng, dấu hiệu nào trên thanh địa chỉ của trình duyệt cho biết kết nối được mã hóa an toàn?',
            options: ['Dòng chữ http:// màu đỏ', 'Biểu tượng chiếc ổ khóa đóng và địa chỉ bắt đầu bằng https://', 'Trang web có nhiều hình động quảng cáo', 'Trang web không có thanh cuộn'],
            correctIndex: 1,
            explanation: 'Giao thức https:// cùng biểu tượng ổ khóa chứng minh trang web có chứng chỉ bảo mật SSL/TLS và dữ liệu gửi đi được mã hóa.',
            domain: 'Communication'
          },
          {
            id: 'l2-t5-q2',
            question: 'Tại sao các chuyên gia an ninh mạng khuyến cáo KHÔNG NÊN thực hiện giao dịch ngân hàng trực tuyến khi đang kết nối vào mạng Wi-Fi công cộng miễn phí ở quán cà phê?',
            options: ['Mạng Wi-Fi công cộng có tốc độ quá nhanh làm đơ máy', 'Tin tặc có thể dùng các kỹ thuật nghe lén (Man-in-the-Middle) trên cùng mạng Wi-Fi không bảo mật để đánh cắp thông tin thẻ và tài khoản', 'Điện thoại sẽ bị hết pin ngay lập tức', 'Ngân hàng cấm dùng Wi-Fi'],
            correctIndex: 1,
            explanation: 'Mạng Wi-Fi công cộng mở không mã hóa lưu lượng, tạo điều kiện cho kẻ xấu bắt trọn các gói tin dữ liệu truyền qua mạng.',
            domain: 'Communication'
          },
          {
            id: 'l2-t5-q3',
            question: 'Khi bạn cần thuyết trình một tệp PowerPoint trong cuộc họp trực tuyến nhưng không muốn khán giả vô tình nhìn thấy các tin nhắn thông báo riêng tư trên máy tính, bạn nên chọn chế độ chia sẻ nào?',
            options: ['Chia sẻ toàn bộ màn hình (Entire Screen)', 'Chỉ chia sẻ một cửa sổ ứng dụng PowerPoint (Window)', 'Tắt luôn camera của máy tính', 'Ngắt kết nối Internet'],
            correctIndex: 1,
            explanation: 'Chia sẻ theo cửa sổ ứng dụng (Window) giới hạn hiển thị chỉ trong khung phần mềm đó, các thông báo riêng tư khác trên màn hình sẽ không bị lộ.',
            domain: 'Communication'
          },
          {
            id: 'l2-t5-q4',
            question: 'Biện pháp nào giúp người chủ trì cuộc họp trực tuyến ngăn chặn tình trạng người lạ xâm nhập và phá hoại cuộc họp (Zoombombing)?',
            options: ['Bật tính năng Phòng chờ (Waiting Room) và yêu cầu mật khẩu tham gia cuộc họp', 'Gửi công khai liên kết cuộc họp lên các hội nhóm mạng xã hội mở', 'Cho phép tất cả người tham gia tự do chia sẻ màn hình bất kỳ lúc nào', 'Tắt phần mềm diệt virus'],
            correctIndex: 0,
            explanation: 'Phòng chờ cho phép chủ tọa kiểm duyệt danh tính từng người trước khi duyệt vào phòng họp, ngăn chặn kẻ lạ phá rối.',
            domain: 'Communication'
          },
          {
            id: 'l2-t5-q5',
            question: 'Công nghệ VoIP viết tắt của cụm từ tiếng Anh nào sau đây?',
            options: ['Voice of Internet People', 'Voice over Internet Protocol', 'Video on Internet Presentation', 'Virtual Online Internet Provider'],
            correctIndex: 1,
            explanation: 'VoIP là Voice over Internet Protocol, công nghệ chuyển đổi âm thanh đàm thoại thành các gói dữ liệu số truyền qua mạng IP.',
            domain: 'Communication'
          },
          {
            id: 'l2-t5-q6',
            question: 'Khác biệt chính giữa việc phát video trực tuyến (Streaming) thông thường và phát trực tiếp (Live Streaming) là gì?',
            options: ['Streaming là xem video ghi sẵn lưu trên máy chủ (như xem Netflix), còn Live Streaming là phát sóng và tương tác theo thời gian thực khi sự kiện đang diễn ra', 'Live Streaming không cần kết nối mạng', 'Streaming chỉ xem được trên TV đen trắng', 'Không có điểm khác nhau'],
            correctIndex: 0,
            explanation: 'Streaming phát lại các nội dung đa phương tiện đã được ghi hình và lưu trữ, còn Live Streaming truyền tải trực tiếp ngay tại thời điểm ghi hình.',
            domain: 'Communication'
          }
        ]
      },
      {
        id: 'ic3-l2-chude-6',
        order: 6,
        code: 'COL',
        title: 'Cộng tác',
        englishTitle: 'Collaboration',
        summary: 'Các công cụ làm việc cộng tác nhóm chuyên nghiệp, đồng tác giả nội dung, điều phối cuộc họp ảo và tiêu chuẩn ứng xử kỹ thuật số khi cộng tác.',
        durationMinutes: 20,
        pdfFileName: 'ic3-level-2-chude-6.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-6.pdf',
        coreKnowledge: [
          {
            title: 'Quy trình đồng tác giả & Điều phối cuộc họp ảo',
            details: [
              'Quản lý xung đột chỉnh sửa: Hiểu cách các nền tảng đám mây xử lý khi hai người cùng chỉnh sửa một dòng văn bản cùng một giây.',
              'Giao tiếp phi ngôn ngữ trong cuộc họp ảo: Sử dụng biểu tượng giơ tay (Raise Hand), phản ứng cảm xúc (Reactions) và hộp thoại trò chuyện bên lề (In-call Chat).',
              'Biên bản cuộc họp (Meeting Minutes): Phân công người ghi chú tóm tắt các quyết định và hạn chót (Deadlines) phân công công việc.'
            ]
          },
          {
            title: 'Tiêu chuẩn ứng xử khi làm việc nhóm từ xa',
            details: [
              'Đúng giờ khi tham gia các phiên làm việc trực tuyến.',
              'Chuẩn bị trước tài liệu cần thảo luận và chia sẻ quyền truy cập cho các thành viên trước giờ họp.',
              'Lắng nghe tích cực, không ngắt lời khi người khác đang phát biểu qua micro.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Meeting Minutes', definition: 'Văn bản ghi chép chính thức tóm tắt các nội dung thảo luận, quyết định và phân công nhiệm vụ trong cuộc họp.' },
          { term: 'Asynchronous Collaboration', definition: 'Cộng tác làm việc mà các thành viên không cần có mặt cùng một thời điểm, làm việc theo thời gian biểu linh hoạt của từng người.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t6-q1',
            question: 'Khi tham gia một cuộc họp nhóm trực tuyến đông người, hành động nào sau đây giúp giữ trật tự và thể hiện văn hóa chuyên nghiệp khi bạn muốn phát biểu ý kiến?',
            options: ['Bật micro lên và nói to chen ngang lời người đang trình bày', 'Sử dụng tính năng "Giơ tay phát biểu" (Raise Hand) và chờ người điều phối mời bật mic', 'Tự ý đá người đang nói ra khỏi phòng họp', 'Gõ liên tục các dấu chấm vào ô chat'],
            correctIndex: 1,
            explanation: 'Tính năng Raise Hand thông báo lịch sự cho người chủ trì biết bạn muốn đóng góp ý kiến mà không làm gián đoạn bài trình bày.',
            domain: 'Collaboration'
          },
          {
            id: 'l2-t6-q2',
            question: 'Văn bản ghi nhận tóm tắt các nội dung đã thảo luận, các quyết định được thông qua và phân công nhiệm vụ kèm hạn chót cho từng thành viên sau cuộc họp được gọi là gì?',
            options: ['Biên bản cuộc họp (Meeting Minutes)', 'Hóa đơn bán hàng', 'Bản thảo luận cá nhân', 'Lịch trình máy bay'],
            correctIndex: 0,
            explanation: 'Biên bản cuộc họp (Meeting Minutes) lưu vết chính thức các quyết định và đầu mối trách nhiệm của các thành viên trong nhóm.',
            domain: 'Collaboration'
          },
          {
            id: 'l2-t6-q3',
            question: 'Ưu điểm lớn nhất của mô hình "Cộng tác không đồng bộ" (Asynchronous Collaboration) đối với các nhóm làm việc ở nhiều múi giờ khác nhau là gì?',
            options: ['Mọi người bắt buộc phải thức trắng đêm làm việc cùng nhau', 'Các thành viên có thể xem tài liệu, để lại phản hồi và đóng góp công việc vào thời gian phù hợp với thời gian biểu của riêng họ', 'Không ai cần phải hoàn thành nhiệm vụ', 'Giảm tiền cước Internet'],
            correctIndex: 1,
            explanation: 'Cộng tác không đồng bộ cho phép mỗi thành viên tự chủ thời gian làm việc độc lập mà vẫn đồng bộ kết quả trên nền tảng dùng chung.',
            domain: 'Collaboration'
          },
          {
            id: 'l2-t6-q4',
            question: 'Khi bạn và đồng nghiệp cùng lúc mở một tệp văn bản Google Docs để cùng soạn thảo, điều gì sẽ xảy ra?',
            options: ['Máy tính sẽ tự động bốc khói', 'Hệ thống hiển thị con trỏ soạn thảo có tên và màu sắc riêng của từng người, cho phép cả hai cùng gõ theo thời gian thực', 'Chương trình lập tức khóa tệp và xóa sạch dữ liệu', 'Chỉ người đầu tiên mở được gõ, người thứ hai bị đuổi ra ngoài'],
            correctIndex: 1,
            explanation: 'Công nghệ đồng tác giả thời gian thực hiển thị con trỏ màu sắc riêng cho từng người dùng, đồng bộ ký tự gõ tức thì.',
            domain: 'Collaboration'
          },
          {
            id: 'l2-t6-q5',
            question: 'Hành động nào sau đây của nhóm trưởng thể hiện kỹ năng điều phối cộng tác tốt?',
            options: ['Một mình tự làm hết mọi việc không chia sẻ cho ai', 'Lập kế hoạch rõ ràng, phân chia nhiệm vụ theo năng lực, ấn định hạn chót (Deadline) và chủ động hỗ trợ giải quyết khó khăn cho thành viên', 'Chỉ chỉ trích và phạt tiền thành viên', 'Không bao giờ tổ chức họp'],
            correctIndex: 1,
            explanation: 'Phân công minh bạch, hỗ trợ đồng đội và giám sát tiến độ là các phẩm chất cốt lõi của người điều phối dự án hiệu quả.',
            domain: 'Collaboration'
          },
          {
            id: 'l2-t6-q6',
            question: 'Khi nhận được tài liệu do bạn học gửi để nhờ phản biện, cách ứng xử văn minh và chuyên nghiệp là gì?',
            options: ['Sử dụng chế độ Gợi ý (Suggesting) hoặc Thêm nhận xét (Comments) để nêu rõ lý do góp ý mang tính xây dựng', 'Xóa sạch toàn bộ bài của bạn và thay bằng bài của mình', 'Chê bai công khai lên mạng xã hội', 'Im lặng và bỏ qua không xem'],
            correctIndex: 0,
            explanation: 'Sử dụng công cụ nhận xét để đưa ra các phân tích mang tính xây dựng giúp nâng cao chất lượng sản phẩm chung và tôn trọng công sức bạn học.',
            domain: 'Collaboration'
          }
        ]
      },
      {
        id: 'ic3-l2-chude-7',
        order: 7,
        code: 'SS',
        title: 'An toàn & Bảo mật',
        englishTitle: 'Safety and Security',
        summary: 'Bảo vệ sức khỏe thể chất và tâm lý trước công nghệ số, nhận diện các bẫy lừa đảo trực tuyến (Phishing, Social Engineering), bảo vệ thiết bị và mã hóa tài liệu.',
        durationMinutes: 165,
        pdfFileName: 'ic3-level-2-chude-7.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-2-chude-7.pdf',
        coreKnowledge: [
          {
            title: 'Nhận diện bẫy lừa đảo trực tuyến (Phishing & Scam)',
            details: [
              'Tấn công giả mạo (Phishing): Kẻ xấu tạo các email, tin nhắn hoặc trang web mạo danh ngân hàng, cơ quan công an để dụ nạn nhân nhập mật khẩu/mã OTP.',
              'Kỹ thuật thao túng tâm lý (Social Engineering): Khai thác nỗi sợ hãi, lòng tham hoặc sự thiếu hiểu biết để thao túng người dùng tự giao nộp thông tin mật.',
              'Các dấu hiệu nhận biết email lừa đảo: Địa chỉ email người gửi không khớp với tên miền chính thức, lời chào chung chung, tạo cảm giác cấp bách đe dọa khóa tài khoản trong 24h, kèm đường link độc hại.'
            ]
          },
          {
            title: 'Bảo vệ thiết bị & Mã hóa tài liệu',
            details: [
              'Khóa màn hình tự động (Screen Lock/Sleep timer) khi rời khỏi máy vi tính.',
              'Đặt mật khẩu bảo vệ tệp văn bản (Password Protect Document) trong Word và Excel: Mã hóa tài liệu để chỉ những ai có mật khẩu mới mở được.',
              'Mã hóa toàn bộ ổ đĩa: Sử dụng BitLocker trên Windows để bảo vệ dữ liệu trong trường hợp máy tính xách tay bị đánh cắp.'
            ]
          },
          {
            title: 'Sức khỏe tâm thần & Quản lý thời gian số',
            details: [
              'Hội chứng sợ bỏ lỡ (FOMO - Fear Of Missing Out) khi sử dụng mạng xã hội quá mức.',
              'Căng thẳng thần kinh và gián đoạn giấc ngủ do ánh sáng xanh (Blue light) phát ra từ màn hình điện tử vào ban đêm.',
              'Biện pháp: Kích hoạt chế độ Night Light (giảm ánh sáng xanh), thiết lập giới hạn thời gian sử dụng ứng dụng (Screen Time) và dành thời gian cho các hoạt động thể thao ngoài trời.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Phishing', definition: 'Hình thức lừa đảo qua mạng trong đó kẻ tấn công giả mạo các tổ chức uy tín để chiếm đoạt thông tin nhạy cảm của nạn nhân.' },
          { term: 'BitLocker', definition: 'Tính năng bảo mật của Windows giúp mã hóa toàn bộ dữ liệu trên ổ cứng để chống truy cập trái phép khi mất cắp thiết bị.' },
          { term: 'Social Engineering', definition: 'Nghệ thuật thao túng tâm lý con người nhằm lừa họ thực hiện các hành động hoặc tiết lộ thông tin bí mật.' }
        ],
        quizQuestions: [
          {
            id: 'l2-t7-q1',
            question: 'Bạn nhận được một email tự xưng là từ ngân hàng thông báo tài khoản của bạn đang bị khóa và yêu cầu nhấp vào một đường liên kết có địa chỉ "http://ngan-hang-xyz-security-login.top" để xác thực mật khẩu. Bạn nên làm gì?',
            options: ['Bấm vào link và nhập ngay mật khẩu tài khoản ngân hàng', 'Nhận diện đây là một chiêu trò lừa đảo mạo danh (Phishing), tuyệt đối không bấm vào link và báo cáo thư rác', 'Chuyển tiếp cho người thân nhờ nhập hộ', 'Gửi thêm số thẻ căn cước vào email đó'],
            correctIndex: 1,
            explanation: 'Tên miền kỳ lạ và lời đe dọa khóa tài khoản là dấu hiệu kinh điển của một vụ lừa đảo Phishing nhằm chiếm đoạt tài khoản.',
            domain: 'Safety and Security'
          },
          {
            id: 'l2-t7-q2',
            question: 'Tính năng BitLocker tích hợp sẵn trên hệ điều hành Windows Pro/Enterprise có tác dụng gì?',
            options: ['Tăng tốc độ kết nối Wi-Fi', 'Mã hóa toàn bộ dữ liệu trên ổ cứng máy tính, bảo vệ an toàn ngay cả khi kẻ trộm tháo ổ cứng cắm sang máy khác', 'Tự động tải các trò chơi miễn phí', 'Làm sạch bụi trong thùng máy'],
            correctIndex: 1,
            explanation: 'BitLocker mã hóa toàn bộ phân vùng ổ đĩa, ngăn chặn việc đọc trộm dữ liệu khi máy tính xách tay hoặc ổ cứng bị đánh cắp.',
            domain: 'Safety and Security'
          },
          {
            id: 'l2-t7-q3',
            question: 'Ánh sáng xanh (Blue Light) phát ra từ màn hình máy tính và điện thoại thông minh vào ban đêm gây tác hại sinh học gì cho cơ thể?',
            options: ['Làm cơ thể phát sáng', 'Ức chế sản sinh hormone Melatonin gây khó ngủ, mất ngủ và làm rối loạn nhịp sinh học tự nhiên của cơ thể', 'Làm răng bị vàng', 'Làm tăng thính giác'],
            correctIndex: 1,
            explanation: 'Ánh sáng xanh ức chế tiết hormone Melatonin (hormone điều hòa giấc ngủ), gây mất ngủ và suy giảm chất lượng giấc ngủ.',
            domain: 'Safety and Security'
          },
          {
            id: 'l2-t7-q4',
            question: 'Để bảo mật một tệp tài liệu kế toán nhạy cảm trong Microsoft Word hoặc Excel, thao tác nào sau đây giúp đặt mật khẩu mã hóa tệp?',
            options: ['Đổi tên tệp thành mật khẩu', 'Vào File > Info > Protect Document > Encrypt with Password', 'Chụp ảnh màn hình tệp', 'Gửi tệp vào thùng rác'],
            correctIndex: 1,
            explanation: 'Tính năng Encrypt with Password trong menu File > Info mã hóa tệp bằng thuật toán tiêu chuẩn, bắt buộc phải có mật khẩu mới giải mã được.',
            domain: 'Safety and Security'
          },
          {
            id: 'l2-t7-q5',
            question: 'Tấn công phi kỹ thuật (Social Engineering) trong lĩnh vực an ninh mạng chủ yếu dựa vào yếu tố nào để xâm nhập hệ thống?',
            options: ['Giải mã siêu máy tính lượng tử', 'Thao túng tâm lý, sự tin tưởng, nỗi sợ hãi hoặc lòng tham của con người để họ tự nguyện cung cấp mật khẩu hoặc thông tin mật', 'Cắt đứt dây cáp quang biển', 'Phá hủy nguồn điện trạm biến áp'],
            correctIndex: 1,
            explanation: 'Social Engineering nhắm vào "mắt xích yếu nhất" là con người thông qua các đòn tâm lý lừa gạt hơn là tấn công vào lỗ hổng phần mềm.',
            domain: 'Safety and Security'
          },
          {
            id: 'l2-t7-q6',
            question: 'Khi bạn đứng dậy rời bàn làm việc ở văn phòng để đi ăn trưa, thao tác bảo mật nhanh nhất nào trên Windows giúp khóa màn hình ngay lập tức?',
            options: ['Bấm phím tắt Windows + L', 'Rút dây cắm điện máy tính', 'Tắt loa máy tính', 'Bấm phím Space'],
            correctIndex: 0,
            explanation: 'Phím tắt Windows + L (Lock) lập tức khóa phiên làm việc, yêu cầu phải nhập lại mật khẩu/PIN mới truy cập tiếp vào máy.',
            domain: 'Safety and Security'
          },
          {
            id: 'l2-t7-q7',
            question: 'Hội chứng tâm lý FOMO (Fear Of Missing Out) thường gặp ở những người trẻ lạm dụng mạng xã hội quá mức là gì?',
            options: ['Nỗi sợ hãi bóng tối khi tắt máy tính', 'Cảm giác lo lắng, bồn chồn sợ rằng mình đang bỏ lỡ các thông tin, sự kiện thú vị mà bạn bè đang trải nghiệm nếu không lướt mạng liên tục', 'Sợ không nhớ bảng cửu chương', 'Sợ ăn đồ ăn nhanh'],
            correctIndex: 1,
            explanation: 'FOMO là cảm giác ám ảnh sợ bỏ lỡ trào lưu hoặc sự kiện trên mạng xã hội, thúc đẩy người dùng kiểm tra điện thoại liên tục gây căng thẳng thần kinh.',
            domain: 'Safety and Security'
          }
        ]
      }
    ]
  },

  'ic3-level-3': {
    id: 'ic3-level-3',
    title: 'IC3 GS6 Level 3: Làm Chủ Công Nghệ & Dự Án Số',
    subtitle: 'Năng lực chuyên sâu về xử lý sự cố, cấp phép phần mềm, quản lý dự án số, sở hữu trí tuệ và an ninh nâng cao',
    levelBadge: 'Cấp độ 3 (Advanced)',
    badgeColor: 'bg-rose-500/10 text-rose-500 border-rose-500/20 dark:text-rose-400',
    description: 'Xác nhận sự hiểu biết nâng cao về kiến thức kỹ thuật số và chỉ ra rằng học viên có nền tảng kỹ thuật vững chắc: Xử lý sự cố phần cứng/phần mềm phức tạp, mô hình cấp phép phần mềm, khả năng tiếp cận (Accessibility), quyền sở hữu trí tuệ (IP), lập kế hoạch dự án kỹ thuật số, chuyển giao thiết bị an toàn và đánh giá tác động công nghệ.',
    accentColor: 'rose',
    accentClass: 'from-pink-500 to-rose-600',
    durationHours: 16,
    topics: [
      {
        id: 'ic3-l3-chude-1',
        order: 1,
        code: 'TB',
        title: 'Căn bản về công nghệ',
        englishTitle: 'Technology Basics',
        summary: 'Xử lý sự cố phần cứng/phần mềm nâng cao, mô hình cấp phép bản quyền phần mềm (SaaS, OEM, Perpetual), cài đặt mặc định và tối ưu hệ thống.',
        durationMinutes: 146,
        pdfFileName: 'ic3-level-3-chude-1.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-1.pdf',
        coreKnowledge: [
          {
            title: 'Chẩn đoán & Xử lý sự cố máy tính nâng cao',
            details: [
              'Quy trình xử lý sự cố tiêu chuẩn: Nhận diện triệu chứng -> Phân lập nguyên nhân (Phần cứng vs Phần mềm) -> Thiết lập giả thuyết -> Kiểm tra giải pháp -> Ghi nhận tài liệu.',
              'Sử dụng công cụ hệ thống: Task Manager (kiểm tra CPU/RAM/Disk nghẽn 100%), Event Viewer (xem nhật ký lỗi hệ thống), Device Manager (chẩn đoán xung đột driver thiết bị).',
              'Khởi động chế độ an toàn (Safe Mode): Khởi chạy hệ điều hành với tập hợp driver và dịch vụ tối thiểu để gỡ bỏ phần mềm độc hại hoặc driver bị lỗi.',
              'Màn hình xanh chết chóc (BSOD - Blue Screen of Death): Nhận diện mã lỗi (Bugcheck code) như MEMORY_MANAGEMENT, CRITICAL_PROCESS_DIED để khoanh vùng hư hỏng RAM hoặc hỏng file hệ thống.'
            ]
          },
          {
            title: 'Mô hình cấp phép phần mềm (Software Licensing)',
            details: [
              'Giấy phép vĩnh viễn (Perpetual License): Mua đứt một lần và sở hữu quyền sử dụng phiên bản đó trọn đời.',
              'Mô hình thuê bao (Subscription / SaaS - Software as a Service): Trả phí định kỳ hàng tháng/năm, luôn được tự động cập nhật tính năng mới nhất (như Microsoft 365, Adobe Creative Cloud).',
              'Giấy phép OEM (Original Equipment Manufacturer): Đi liền với bo mạch chủ của máy tính khi xuất xưởng, không thể chuyển sang máy tính khác.',
              'Giấy phép số lượng lớn (Volume Licensing): Dành cho các trường học và tập đoàn triển khai cài đặt hàng nghìn máy với khóa kích hoạt tập trung.'
            ]
          }
        ],
        keyTerms: [
          { term: 'SaaS (Software as a Service)', definition: 'Mô hình phân phối phần mềm dạng dịch vụ trên nền tảng đám mây dựa trên hình thức trả phí thuê bao định kỳ.' },
          { term: 'Safe Mode', definition: 'Chế độ chẩn đoán của hệ điều hành khởi động với cấu hình tối thiểu để phát hiện và cô lập các sự cố hệ thống.' },
          { term: 'Device Manager', definition: 'Bảng điều khiển cho phép xem, cập nhật driver hoặc vô hiệu hóa các thiết bị phần cứng kết nối với máy tính.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t1-q1',
            question: 'Khi máy tính chạy rất chậm và quạt tản nhiệt quay ầm ĩ, công cụ nào trong Windows giúp bạn kiểm tra ngay tiến trình nào đang chiếm dụng 100% dung lượng CPU hoặc RAM?',
            options: ['Task Manager (Ctrl + Shift + Esc)', 'Disk Cleanup', 'Windows Media Player', 'Notepad'],
            correctIndex: 0,
            explanation: 'Task Manager hiển thị chi tiết mức sử dụng tài nguyên (CPU, Memory, Disk, Network) của từng ứng dụng và dịch vụ đang chạy.',
            domain: 'Technology Basics'
          },
          {
            id: 'l3-t1-q2',
            question: 'Sự khác biệt cốt lõi giữa mô hình phần mềm dịch vụ SaaS (như Microsoft 365) so với mô hình mua bản quyền vĩnh viễn (Perpetual License) là gì?',
            options: ['SaaS bắt buộc phải cài đặt bằng đĩa mềm floppy', 'SaaS trả phí thuê bao định kỳ và luôn được cập nhật các phiên bản, tính năng mới nhất; còn bản quyền vĩnh viễn trả một lần và không được nâng cấp miễn phí lên bản kế tiếp', 'SaaS không dùng được mạng Internet', 'Bản quyền vĩnh viễn tự động xóa sau 1 năm'],
            correctIndex: 1,
            explanation: 'SaaS hoạt động theo thuê bao định kỳ (subscription) và được bảo dưỡng nâng cấp liên tục, trong khi giấy phép mua đứt cố định theo phiên bản đã mua.',
            domain: 'Technology Basics'
          },
          {
            id: 'l3-t1-q3',
            question: 'Khi máy tính bị lỗi màn hình xanh (BSOD) liên tục sau khi vừa cài đặt một trình điều khiển cạc đồ họa mới, phương án cứu hộ hợp lý nhất là gì?',
            options: ['Khởi động máy tính vào chế độ Safe Mode (Chế độ an toàn) và gỡ bỏ hoặc Roll Back lại phiên bản driver cũ', 'Thay luôn bo mạch chủ', 'Đổ nước vào thùng máy để làm mát', 'Cắm lại dây chuột'],
            correctIndex: 0,
            explanation: 'Safe Mode khởi chạy hệ thống mà không nạp driver của bên thứ ba, cho phép người dùng khôi phục lại driver hệ thống ổn định trước đó.',
            domain: 'Technology Basics'
          },
          {
            id: 'l3-t1-q4',
            question: 'Trong trình quản lý thiết bị (Device Manager), biểu tượng dấu chấm than màu vàng xuất hiện bên cạnh tên một linh kiện phần cứng biểu thị điều gì?',
            options: ['Thiết bị đang hoạt động với hiệu suất tối đa', 'Thiết bị đang gặp sự cố driver (chưa cài driver, driver lỗi thời hoặc xung đột phần cứng)', 'Thiết bị là phần cứng của tương lai', 'Thiết bị có giá trị cao'],
            correctIndex: 1,
            explanation: 'Dấu chấm than màu vàng trong Device Manager là cảnh báo hệ điều hành nhận diện thiết bị nhưng gặp lỗi giao tiếp do thiếu driver phù hợp.',
            domain: 'Technology Basics'
          },
          {
            id: 'l3-t1-q5',
            question: 'Khái niệm bản quyền phần mềm OEM (Original Equipment Manufacturer) thường đi kèm với điều kiện nào?',
            options: ['Bản quyền gắn chặt vào phần cứng của chiếc máy tính cụ thể đó và không được chuyển giao bản quyền sang một máy tính khác', 'Cho phép cài đặt lên 100 máy tính tùy thích', 'Mã nguồn mở miễn phí hoàn toàn', 'Chỉ dùng được trong 30 ngày'],
            correctIndex: 0,
            explanation: 'Giấy phép OEM được bán kèm theo máy tính của các nhà sản xuất phần cứng và gắn liền với bo mạch chủ của máy đó, không thể chuyển đổi.',
            domain: 'Technology Basics'
          },
          {
            id: 'l3-t1-q6',
            question: 'Quy trình xử lý sự cố kỹ thuật chuẩn mực bắt đầu bằng bước nào sau đây?',
            options: ['Cài đặt lại toàn bộ hệ điều hành ngay lập tức', 'Xác định và nhận diện rõ triệu chứng vấn đề cần giải quyết thông qua việc đặt câu hỏi và ghi nhận hiện tượng', 'Mua linh kiện mới về thay thế', 'Đổ lỗi cho người dùng'],
            correctIndex: 1,
            explanation: 'Bước đầu tiên luôn là thu thập thông tin và nhận diện chính xác triệu chứng sự cố trước khi thiết lập giả thuyết chẩn đoán.',
            domain: 'Technology Basics'
          }
        ]
      },
      {
        id: 'ic3-l3-chude-2',
        order: 2,
        code: 'DC',
        title: 'Công dân số',
        englishTitle: 'Digital Citizenship',
        summary: 'Bảo vệ danh tính số chuyên sâu, quản lý quyền riêng tư đa nền tảng, trở thành công dân số kiểu mẫu và xử lý các vấn đề đạo đức công nghệ phức tạp.',
        durationMinutes: 131,
        pdfFileName: 'ic3-level-3-chude-2.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-2.pdf',
        coreKnowledge: [
          {
            title: 'Bảo vệ danh tính số chuyên sâu',
            details: [
              'Quản lý dữ liệu định danh cá nhân (PII - Personally Identifiable Information): Hiểu cách các nền tảng công nghệ lớn khai thác và kiếm tiền từ dữ liệu cá nhân của bạn.',
              'Quyền được lãng quên (Right to be Forgotten) và quy trình yêu cầu gỡ bỏ thông tin sai lệch trên các công cụ tìm kiếm.',
              'Sử dụng trình quản lý mật khẩu (Password Managers) và khóa bảo mật phần cứng (FIDO2 / YubiKey) để triệt tiêu nguy cơ bị đánh cắp tài khoản.'
            ]
          },
          {
            title: 'Đạo đức công nghệ & Trách nhiệm công dân số toàn cầu',
            details: [
              'Nhận diện thiên kiến thuật toán (Algorithmic Bias) trong các hệ thống trí tuệ nhân tạo và bộ lọc mạng xã hội.',
              'Hiệu ứng phòng vang (Echo Chamber) và bong bóng lọc (Filter Bubble): Xu hướng thuật toán chỉ hiển thị các nội dung củng cố quan điểm sẵn có của bạn, gây chia rẽ nhận thức xã hội.',
              'Đóng góp tích cực cho cộng đồng số: Hỗ trợ phổ cập kỹ năng số, bảo vệ môi trường trước rác thải điện tử (E-waste).'
            ]
          }
        ],
        keyTerms: [
          { term: 'PII (Personally Identifiable Information)', definition: 'Thông tin có thể dùng riêng lẻ hoặc kết hợp để nhận dạng, liên hệ hoặc định vị một cá nhân cụ thể.' },
          { term: 'Filter Bubble (Bong bóng lọc)', definition: 'Trạng thái cô lập về mặt thông tin khi thuật toán cá nhân hóa chỉ cung cấp những nội dung bạn thích nghe.' },
          { term: 'E-waste (Rác thải điện tử)', definition: 'Các thiết bị điện tử cũ, hỏng bị vứt bỏ, chứa nhiều kim loại nặng độc hại cần được tái chế theo quy trình đặc biệt.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t2-q1',
            question: 'Hiện tượng "Bong bóng lọc" (Filter Bubble) trên các nền tảng mạng xã hội và công cụ tìm kiếm gây ra tác động tiêu cực nào đối với nhận thức của người dùng?',
            options: ['Làm máy tính bị bẩn màn hình', 'Chỉ cung cấp những thông tin trùng khớp với quan điểm sẵn có của người dùng, cô lập họ khỏi những góc nhìn đa chiều và làm gia tăng sự thiên kiến, chia rẽ', 'Làm tăng dung lượng pin điện thoại', 'Tự động sửa lỗi chính tả'],
            correctIndex: 1,
            explanation: 'Filter Bubble do thuật toán tối ưu hóa sở thích tạo ra, khiến người dùng chỉ tiếp xúc với thông tin phiến diện củng cố định kiến của họ.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l3-t2-q2',
            question: 'Khái niệm "Thông tin nhận dạng cá nhân" (PII - Personally Identifiable Information) bao gồm nhóm dữ liệu nào sau đây?',
            options: ['Màu sắc yêu thích và phong cảnh thiên nhiên', 'Số thẻ Căn cước công dân, số tài khoản ngân hàng, dấu vân tay, hồ sơ bệnh án và địa chỉ cư trú', 'Danh sách tên các hành tinh trong hệ mặt trời', 'Tốc độ quay của ổ cứng'],
            correctIndex: 1,
            explanation: 'PII là các dữ liệu nhạy cảm cho phép xác định trực tiếp danh tính pháp lý và sinh trắc học của một con người.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l3-t2-q3',
            question: 'Hành vi nào sau đây góp phần giảm thiểu rác thải điện tử (E-waste) và bảo vệ môi trường sống?',
            options: ['Ném pin và điện thoại cũ vào đống rác sinh hoạt thông thường để đốt', 'Đem các thiết bị vi tính và pin cũ đến các điểm thu hồi rác thải công nghệ chuyên trách để tái chế linh kiện an toàn', 'Vứt máy in hỏng xuống sông ngòi', 'Thay điện thoại mới mỗi tuần một lần dù máy cũ vẫn dùng tốt'],
            correctIndex: 1,
            explanation: 'Thiết bị điện tử chứa chì, thủy ngân và kim loại nặng độc hại, cần được bàn giao cho các cơ sở tái chế chuyên trách để xử lý an toàn.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l3-t2-q4',
            question: 'Sử dụng một phần mềm quản lý mật khẩu chuyên nghiệp (Password Manager) mang lại lợi ích bảo mật cốt lõi nào?',
            options: ['Tự động gửi mật khẩu của bạn lên các diễn đàn công cộng', 'Cho phép tạo và lưu trữ an toàn các mật khẩu ngẫu nhiên phức tạp, duy nhất cho từng trang web mà không sợ bị quên', 'Giúp máy tính không bao giờ bị nhiễm virus', 'Cho phép truy cập máy tính không cần nguồn điện'],
            correctIndex: 1,
            explanation: 'Password Manager giúp người dùng duy trì thói quen sử dụng mật khẩu mạnh, độc nhất cho mỗi dịch vụ mà chỉ cần ghi nhớ một Master Password.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l3-t2-q5',
            question: 'Trách nhiệm xã hội nào của một công dân số là quan trọng khi tiếp cận thông tin gây sốc hoặc có tính kích động trên mạng?',
            options: ['Bấm chia sẻ ngay lập tức để người khác hoang mang', 'Kiểm chứng tính xác thực từ các nguồn tin chính thống, giữ bình tĩnh và không lan truyền tin giả chưa được xác nhận', 'Kêu gọi tẩy chay vô căn cứ', 'Tạo tài khoản ảo để chửi bới'],
            correctIndex: 1,
            explanation: 'Công dân số văn minh có trách nhiệm phản biện, kiểm chứng sự thật và dập tắt tin giả thay vì tiếp tay lan truyền hoang mang.',
            domain: 'Digital Citizenship'
          },
          {
            id: 'l3-t2-q6',
            question: 'Khóa bảo mật phần cứng (Hardware Security Key như YubiKey) bảo vệ tài khoản người dùng vượt trội hơn tin nhắn mã OTP qua SMS như thế nào?',
            options: ['Khóa phần cứng không thể bị tin tặc đánh cắp qua tấn công tráo SIM (SIM Swap) hoặc qua các trang web lừa đảo Phishing', 'Khóa phần cứng có thể dùng làm sạc dự phòng', 'Khóa phần cứng làm tăng tốc độ tải phim', 'Khóa phần cứng miễn phí ở mọi nơi'],
            correctIndex: 0,
            explanation: 'Khóa bảo mật chuẩn FIDO2/WebAuthn giao tiếp mã hóa trực tiếp với trình duyệt và tên miền xác thực, miễn nhiễm hoàn toàn với tấn công Phishing và tráo SIM.',
            domain: 'Digital Citizenship'
          }
        ]
      },
      {
        id: 'ic3-l3-chude-3',
        order: 3,
        code: 'IM',
        title: 'Quản lý thông tin',
        englishTitle: 'Information Management',
        summary: 'Kỹ thuật tìm kiếm thông tin học thuật hiệu quả, phân tích dữ liệu đa nguồn và các nguyên tắc đánh giá tính toàn vẹn của dữ liệu.',
        durationMinutes: 97,
        pdfFileName: 'ic3-level-3-chude-3.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-3.pdf',
        coreKnowledge: [
          {
            title: 'Tìm kiếm nghiên cứu & Dữ liệu chuyên sâu',
            details: [
              'Khai thác cơ sở dữ liệu học thuật: Google Scholar, JSTOR, thư viện điện tử quốc gia.',
              'Toán tử tìm kiếm Boole nâng cao: AND, OR, NOT kết hợp nhóm ngoặc đơn (ví dụ: ("trí tuệ nhân tạo" OR "AI") AND y_học NOT "trò chơi").',
              'Tìm kiếm dữ liệu thống kê mở (Open Data): World Bank Data, cổng dữ liệu chính phủ (data.gov.vn).'
            ]
          },
          {
            title: 'Đánh giá tính toàn vẹn & Phân tích dữ liệu',
            details: [
              'Xác thực tính toàn vẹn của dữ liệu: Kiểm tra nguồn dữ liệu sơ cấp (Primary Sources) so với nguồn thứ cấp (Secondary Sources).',
              'Nhận diện mối tương quan (Correlation) và mối quan hệ nhân quả (Causation) để tránh kết luận sai lệch.',
              'Kiểm tra tính thiên vị của bộ mẫu khảo sát (Sampling Bias) trong các báo cáo số liệu.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Boolean Operators', definition: 'Các từ khóa logic (AND, OR, NOT) dùng để mở rộng hoặc thu hẹp phạm vi tìm kiếm dữ liệu.' },
          { term: 'Primary Source', definition: 'Tài liệu chứa thông tin gốc sơ cấp, được tạo ra tại thời điểm diễn ra sự kiện mà không qua giải thích hay biên dịch lại.' },
          { term: 'Correlation vs Causation', definition: 'Quy tắc thống kê: hai biến số có mối tương quan cùng tăng/giảm không nhất thiết có nghĩa là biến này gây ra biến kia.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t3-q1',
            question: 'Khi thực hiện tìm kiếm học thuật với biểu thức Boole: ("năng lượng tái tạo" OR "năng lượng mặt trời") AND Việt Nam NOT "điện than", kết quả tìm kiếm sẽ trả về những gì?',
            options: ['Tất cả các bài viết về điện than ở Việt Nam', 'Các bài viết về năng lượng tái tạo hoặc năng lượng mặt trời tại Việt Nam, nhưng loại trừ hoàn toàn các tài liệu có nhắc đến điện than', 'Chỉ những bài viết ở nước ngoài', 'Báo lỗi cú pháp không tìm được'],
            correctIndex: 1,
            explanation: 'Toán tử OR lấy một trong hai từ khóa, AND yêu cầu có từ khóa đi kèm, và NOT loại trừ dứt điểm cụm từ không mong muốn.',
            domain: 'Information Management'
          },
          {
            id: 'l3-t3-q2',
            question: 'Trong nghiên cứu thông tin khoa học, nguồn tài liệu nào sau đây được coi là "Nguồn sơ cấp" (Primary Source)?',
            options: ['Một bài viết tóm tắt của phóng viên kể lại sự việc', 'Nhật ký gốc, dữ liệu thô thu được từ cảm biến thí nghiệm hoặc văn bản hiệp định ký kết ban đầu', 'Một bài phê bình sách của nhà xuất bản', 'Bài viết trên bách khoa toàn thư mở Wikipedia'],
            correctIndex: 1,
            explanation: 'Nguồn sơ cấp là tư liệu gốc trực tiếp được ghi nhận ngay tại hiện trường hoặc kết quả thí nghiệm thô chưa qua phân tích lại.',
            domain: 'Information Management'
          },
          {
            id: 'l3-t3-q3',
            question: 'Sai lầm thống kê phổ biến "Đánh đồng tương quan với nhân quả" (Confusing Correlation with Causation) thể hiện ở trường hợp nào sau đây?',
            options: ['Tính toán đúng công thức cộng', 'Thấy số lượng bán kem và số vụ cháy rừng cùng tăng vào mùa hè nên kết luận rằng ăn kem là nguyên nhân gây ra cháy rừng', 'Kiểm tra chéo hai bài báo uy tín', 'Sử dụng phần mềm bảng tính Excel để vẽ biểu đồ'],
            correctIndex: 1,
            explanation: 'Hai hiện tượng cùng xảy ra đồng thời (tương quan do thời tiết nóng) không có nghĩa là cái này là nguyên nhân sinh ra cái kia (nhân quả).',
            domain: 'Information Management'
          },
          {
            id: 'l3-t3-q4',
            question: 'Cổng thông tin nào sau đây là địa chỉ chuyên phục vụ tìm kiếm các bài báo nghiên cứu, luận văn và tài liệu học thuật khoa học?',
            options: ['Google Scholar (scholar.google.com)', 'TikTok Video Search', 'Shopee Product Search', 'Facebook Watch'],
            correctIndex: 0,
            explanation: 'Google Scholar là công cụ tìm kiếm miễn phí chỉ lập chỉ mục các bài báo khoa học, luận án, sách học thuật và tài liệu hội thảo.',
            domain: 'Information Management'
          },
          {
            id: 'l3-t3-q5',
            question: 'Khi thu thập mẫu khảo sát chỉ từ 10 học sinh giỏi trường chuyên rồi đưa ra kết luận về học lực chung của toàn bộ thanh thiếu niên trên cả nước, nghiên cứu này phạm phải sai lầm gì?',
            options: ['Lỗi phần cứng máy tính', 'Thiên lệch chọn mẫu (Sampling Bias) làm mất tính đại diện cho tổng thể', 'Lỗi bản quyền phần mềm', 'Lỗi bộ nhớ cache'],
            correctIndex: 1,
            explanation: 'Mẫu nghiên cứu không mang tính đại diện ngẫu nhiên cho toàn bộ cộng đồng dẫn đến kết quả phân tích bị sai lệch nghiêm trọng.',
            domain: 'Information Management'
          },
          {
            id: 'l3-t3-q6',
            question: 'Thuật ngữ "Dữ liệu mở" (Open Data) của chính phủ hoặc các tổ chức quốc tế mang ý nghĩa gì?',
            options: ['Dữ liệu bí mật không ai được xem', 'Dữ liệu được công khai tự do cho bất kỳ ai cũng có thể truy cập, sử dụng, phân tích và chia sẻ lại mà không bị ràng buộc bản quyền khắt khe', 'Dữ liệu chỉ bán bằng ngoại tệ', 'Dữ liệu bị virus mã hóa'],
            correctIndex: 1,
            explanation: 'Open Data là dữ liệu công mở cho xã hội khai thác nhằm tăng tính minh bạch và thúc đẩy đổi mới sáng tạo xã hội.',
            domain: 'Information Management'
          }
        ]
      },
      {
        id: 'ic3-l3-chude-4',
        order: 4,
        code: 'CC',
        title: 'Sáng tạo nội dung',
        englishTitle: 'Content Creation',
        summary: 'Xử lý đa phương tiện số, trực quan hóa dữ liệu phức tạp, đảm bảo khả năng tiếp cận (Accessibility), quyền sở hữu trí tuệ (IP) và lập kế hoạch dự án số.',
        durationMinutes: 263,
        pdfFileName: 'ic3-level-3-chude-4.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-4.pdf',
        coreKnowledge: [
          {
            title: 'Khả năng tiếp cận tài liệu số (Digital Accessibility - A11y)',
            details: [
              'Văn bản thay thế cho hình ảnh (Alt Text): Cung cấp mô tả bằng lời cho các hình ảnh để phần mềm đọc màn hình (Screen Reader) có thể đọc cho người khiếm thị.',
              'Độ tương phản màu sắc (Color Contrast): Đảm bảo tỷ lệ tương phản tối thiểu giữa màu chữ và nền (chuẩn WCAG AA tối thiểu 4.5:1).',
              'Cấu trúc tài liệu ngữ nghĩa: Sử dụng cấu trúc tiêu đề (Headings) phân cấp rõ ràng để người khuyết tật dễ điều hướng tài liệu bằng bàn phím.'
            ]
          },
          {
            title: 'Quyền sở hữu trí tuệ (IP) & Bằng sáng chế',
            details: [
              'Sở hữu công nghiệp: Bằng sáng chế (Patent), Kiểu dáng công nghiệp (Industrial Design), Nhãn hiệu (Trademark).',
              'Quyền tác giả (Copyright): Bảo hộ hình thức thể hiện của tác phẩm văn học, nghệ thuật, âm nhạc và phần mềm máy tính.',
              'Sử dụng hợp lý (Fair Use): Quy định cho phép sử dụng một phần nhỏ tác phẩm có bản quyền cho mục đích giảng dạy, nghiên cứu, bình luận phê bình mà không vi phạm pháp luật.'
            ]
          },
          {
            title: 'Lập kế hoạch & Quản trị dự án kỹ thuật số',
            details: [
              'Vòng đời phát triển dự án: Khởi tạo -> Lập kế hoạch -> Thực thi -> Giám sát -> Đóng dự án.',
              'Biểu đồ Gantt (Gantt Chart): Trực quan hóa tiến độ các nhiệm vụ theo dòng thời gian và các mốc phụ thuộc.',
              'Tam giác quản trị dự án: Phạm vi (Scope) - Thời gian (Time) - Chi phí (Cost). Thay đổi một yếu tố sẽ ảnh hưởng đến chất lượng (Quality).'
            ]
          }
        ],
        keyTerms: [
          { term: 'Alt Text (Alternative Text)', definition: 'Đoạn văn bản mô tả ngắn gọn nội dung và mục đích của hình ảnh phục vụ cho công cụ đọc màn hình của người khiếm thị.' },
          { term: 'Accessibility (A11y)', definition: 'Thiết kế sản phẩm hoặc dịch vụ để người khuyết tật có thể tiếp cận và sử dụng bình đẳng như người bình thường.' },
          { term: 'Gantt Chart', definition: 'Biểu đồ thanh ngang biểu diễn tiến độ các công việc của dự án theo trục thời gian.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t4-q1',
            question: 'Khi chèn hình ảnh vào tài liệu hoặc trang web, thao tác nào sau đây là BẮT BUỘC để đảm bảo khả năng tiếp cận (Accessibility) cho người khiếm thị sử dụng phần mềm đọc màn hình?',
            options: ['Chỉnh ảnh sang màu đen trắng', 'Thêm văn bản thay thế (Alt Text) mô tả nội dung ý nghĩa của bức ảnh', 'Tăng độ tương phản màn hình lên 100%', 'Xóa bỏ phần mở rộng của ảnh'],
            correctIndex: 1,
            explanation: 'Alt Text cung cấp nội dung bằng văn bản mô tả bức ảnh, giúp các phần mềm trợ năng (Screen Reader) đọc to cho người khiếm thị nghe.',
            domain: 'Content Creation'
          },
          {
            id: 'l3-t4-q2',
            question: 'Trong quản trị dự án số, công cụ biểu đồ nào hiển thị các nhiệm vụ dưới dạng các thanh ngang chạy dọc theo trục thời gian lịch biểu giúp theo dõi tiến độ công việc trực quan?',
            options: ['Biểu đồ tròn (Pie Chart)', 'Biểu đồ Gantt (Gantt Chart)', 'Biểu đồ cột ma trận', 'Biểu đồ Venn'],
            correctIndex: 1,
            explanation: 'Gantt Chart là công cụ trực quan hóa kinh điển trong quản lý dự án, hiển thị nhiệm vụ, thời gian bắt đầu, kết thúc và các mối phụ thuộc.',
            domain: 'Content Creation'
          },
          {
            id: 'l3-t4-q3',
            question: 'Ba yếu tố cấu thành nên "Tam giác ràng buộc trong quản trị dự án" (Project Management Triangle) là gì?',
            options: ['Chuột - Bàn phím - Màn hình', 'Phạm vi (Scope) - Thời gian (Time) - Chi phí/Nguồn lực (Cost)', 'CPU - RAM - Ổ cứng', 'Windows - macOS - Linux'],
            correctIndex: 1,
            explanation: 'Tam giác quản trị dự án gồm Phạm vi, Thời gian và Chi phí; ba yếu tố này cùng ràng buộc và quyết định Chất lượng của dự án.',
            domain: 'Content Creation'
          },
          {
            id: 'l3-t4-q4',
            question: 'Quy tắc "Sử dụng hợp lý" (Fair Use) trong luật bản quyền cho phép điều nào sau đây?',
            options: ['Tải toàn bộ bộ phim có bản quyền về bán đĩa lậu', 'Trích dẫn một đoạn văn ngắn từ cuốn sách có bản quyền để làm tư liệu phân tích, giảng dạy hoặc phê bình học thuật có ghi rõ nguồn', 'Sao chép toàn bộ mã nguồn trò chơi thương mại của người khác rồi tự nhận là của mình', 'Bán lại các bài hát bản quyền để lấy tiền'],
            correctIndex: 1,
            explanation: 'Fair Use cho phép trích dẫn có giới hạn vì mục đích học thuật, nghiên cứu và phê bình mà không cần xin phép bản quyền.',
            domain: 'Content Creation'
          },
          {
            id: 'l3-t4-q5',
            question: 'Biểu tượng chữ R trong vòng tròn (®) xuất hiện bên cạnh tên gọi hoặc logo của một thương hiệu công nghệ (như Microsoft®) mang ý nghĩa gì?',
            options: ['Tác phẩm thuộc phạm vi công cộng', 'Nhãn hiệu hàng hóa đã được đăng ký bảo hộ độc quyền chính thức với cơ quan nhà nước (Registered Trademark)', 'Phần mềm được tải miễn phí', 'Tài liệu chỉ dành cho trẻ em'],
            correctIndex: 1,
            explanation: 'Ký hiệu ® biểu thị Registered Trademark - nhãn hiệu thương mại đã được bảo hộ sở hữu trí tuệ chính thức theo pháp luật.',
            domain: 'Content Creation'
          },
          {
            id: 'l3-t4-q6',
            question: 'Khi thiết kế bài thuyết trình hoặc trang web, tại sao việc đảm bảo tỷ lệ tương phản màu sắc (Color Contrast) giữa màu chữ và màu nền là cực kỳ quan trọng?',
            options: ['Giúp máy tính tiêu thụ ít điện năng hơn', 'Giúp người có thị lực yếu hoặc người bị mù màu có thể đọc rõ nội dung mà không bị mờ nhòe, chói mắt', 'Làm cho tệp tin có dung lượng nhỏ hơn', 'Tăng tốc độ Internet'],
            correctIndex: 1,
            explanation: 'Độ tương phản màu sắc đạt chuẩn (WCAG AA) là tiêu chuẩn thiết kế nhân văn giúp những người có khiếm khuyết thị giác dễ dàng tiếp cận nội dung.',
            domain: 'Content Creation'
          }
        ]
      },
      {
        id: 'ic3-l3-chude-5',
        order: 5,
        code: 'COMM',
        title: 'Giao tiếp',
        englishTitle: 'Communication',
        summary: 'Quản lý truyền thông kỹ thuật số đa kênh, chiến lược truyền thông thương hiệu, xử lý khủng hoảng và giải quyết xung đột giao tiếp trong môi trường trực tuyến.',
        durationMinutes: 98,
        pdfFileName: 'ic3-level-3-chude-5.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-5.pdf',
        coreKnowledge: [
          {
            title: 'Chiến lược & Kênh truyền thông số',
            details: [
              'Lựa chọn kênh truyền thông theo đối tượng mục tiêu: Bản tin Email (Newsletters), Mạng xã hội, Podcast, Thông cáo báo chí trực tuyến.',
              'Đo lường hiệu quả truyền thông số: Tỷ lệ mở thư (Open Rate), Tỷ lệ nhấp chuột (CTR - Click-Through Rate), Mức độ tương tác (Engagement Rate).',
              'Quản lý thương hiệu số: Duy trì tính nhất quán về giọng văn, màu sắc nhận diện và thông điệp trên tất cả các kênh.'
            ]
          },
          {
            title: 'Giải quyết xung đột & Xử lý khủng hoảng truyền thông',
            details: [
              'Kỹ năng giảm leo thang căng thẳng (De-escalation): Lắng nghe thấu cảm, phản hồi bình tĩnh, không tranh cãi công kích cá nhân.',
              'Quy trình xử lý phản hồi tiêu cực trên mạng: Tiếp nhận -> Xác minh sự thật -> Xin lỗi chân thành (nếu có lỗi) -> Đưa ra giải pháp khắc phục cụ thể.',
              'Chuyển hướng thảo luận nhạy cảm sang kênh giao tiếp riêng tư (email hoặc điện thoại trực tiếp) để tránh gây ồn ào dư luận.'
            ]
          }
        ],
        keyTerms: [
          { term: 'CTR (Click-Through Rate)', definition: 'Tỷ lệ phần trăm số người nhấp vào một liên kết cụ thể so với tổng số người nhìn thấy liên kết đó.' },
          { term: 'Crisis Management', definition: 'Quy trình và chiến lược ứng phó với các sự kiện tiêu cực bất ngờ đe dọa uy tín của một tổ chức hoặc cá nhân trên môi trường truyền thông.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t5-q1',
            question: 'Khi nhận được một lời phàn nàn gay gắt, giận dữ từ khách hàng trên fanpage công khai của trường học, bước xử lý ban đầu chuyên nghiệp nhất là gì?',
            options: ['Xóa ngay bình luận của khách hàng và chặn (block) tài khoản của họ', 'Bình luận cãi tay đôi công khai để phân bua ai đúng ai sai', 'Phản hồi bình tĩnh, lịch sự, lắng nghe vấn đề và mời khách hàng nhắn tin riêng hoặc gọi điện để được hỗ trợ giải quyết thỏa đáng', 'Lập tức đóng cửa trường học'],
            correctIndex: 2,
            explanation: 'Phản hồi nhã nhặn công khai thể hiện sự chuyên nghiệp và chuyển hướng sang kênh riêng giúp bảo mật thông tin và giải quyết triệt để sự việc.',
            domain: 'Communication'
          },
          {
            id: 'l3-t5-q2',
            question: 'Chỉ số đo lường hiệu quả truyền thông trực tuyến "CTR" là viết tắt của thuật ngữ nào sau đây?',
            options: ['Control The Router', 'Click-Through Rate (Tỷ lệ nhấp chuột)', 'Cancel Total Report', 'Computer Transmission Rate'],
            correctIndex: 1,
            explanation: 'CTR (Click-Through Rate) đo lường tỷ lệ người dùng nhấp vào một liên kết quảng cáo hoặc email trên tổng lượt hiển thị.',
            domain: 'Communication'
          },
          {
            id: 'l3-t5-q3',
            question: 'Phương pháp giao tiếp nào sau đây giúp giảm leo thang căng thẳng (De-escalation) khi nảy sinh mâu thuẫn trong nhóm làm việc trực tuyến?',
            options: ['Sử dụng từ ngữ quy chụp, đổ lỗi cá nhân', 'Lắng nghe chủ động, thừa nhận cảm xúc của đối phương và tập trung bàn vào giải pháp tháo gỡ công việc', 'Rời nhóm chat không nói một lời', 'Gửi các hình ảnh chế nhạo'],
            correctIndex: 1,
            explanation: 'Lắng nghe chủ động và tập trung vào giải pháp khách quan giúp hạ nhiệt cảm xúc và giải quyết mâu thuẫn hiệu quả.',
            domain: 'Communication'
          },
          {
            id: 'l3-t5-q4',
            question: 'Trong chiến lược truyền thông số, việc duy trì "Tính nhất quán của thương hiệu" (Brand Consistency) được thể hiện qua điều gì?',
            options: ['Mỗi tuần đổi một logo và một màu sắc hoàn toàn mới', 'Sử dụng thống nhất bảng màu chuẩn, phong cách thiết kế, logo và thông điệp cốt lõi trên tất cả các kênh mạng xã hội và trang web', 'Chỉ đăng bài vào lúc nửa đêm', 'Không bao giờ trả lời tin nhắn của người theo dõi'],
            correctIndex: 1,
            explanation: 'Tính nhất quán về hình ảnh nhận diện và thông điệp giúp xây dựng sự tin cậy và nhận diện thương hiệu sâu sắc trong mắt công chúng.',
            domain: 'Communication'
          },
          {
            id: 'l3-t5-q5',
            question: 'Hình thức truyền thông kỹ thuật số "Podcast" là gì?',
            options: ['Một bức ảnh chụp phong cảnh', 'Chuỗi các tệp âm thanh kỹ thuật số phát hành theo tập mà người dùng có thể tải về hoặc nghe trực tuyến theo yêu cầu', 'Một tệp bảng tính Excel', 'Một loại phần mềm diệt virus'],
            correctIndex: 1,
            explanation: 'Podcast là nội dung âm thanh kỹ thuật số dạng chuỗi tập về các chủ đề chuyên sâu, thuận tiện cho người nghe trên các thiết bị di động.',
            domain: 'Communication'
          },
          {
            id: 'l3-t5-q6',
            question: 'Khi tổ chức một hội thảo trực tuyến quy mô hàng nghìn người (Webinar), tính năng quản lý giao tiếp nào sau đây cần được thiết lập?',
            options: ['Mở micro cho toàn bộ 1000 người cùng nói tự do', 'Sử dụng tính năng Q&A (Hỏi & Đáp có kiểm duyệt) và quản lý chặt quyền bật micro của người tham dự', 'Tắt hoàn toàn đường truyền mạng', 'Không phân công người chủ tọa'],
            correctIndex: 1,
            explanation: 'Tính năng Q&A có kiểm duyệt cho phép ban tổ chức lọc câu hỏi trùng lặp và duy trì trật tự cho sự kiện trực tuyến quy mô lớn.',
            domain: 'Communication'
          }
        ]
      },
      {
        id: 'ic3-l3-chude-6',
        order: 6,
        code: 'COL',
        title: 'Cộng tác',
        englishTitle: 'Collaboration',
        summary: 'Cộng tác số để giải quyết các bài toán phức tạp, phân bổ nguồn lực nhóm, quản lý quy trình làm việc (Workflows) và đóng góp vào các dự án quy mô lớn.',
        durationMinutes: 98,
        pdfFileName: 'ic3-level-3-chude-6.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-6.pdf',
        coreKnowledge: [
          {
            title: 'Hệ thống quản lý công việc & Quy trình Agile/Kanban',
            details: [
              'Bảng Kanban số (như Trello, Jira, Microsoft Planner): Quản lý luồng công việc qua các cột trực quan (To Do -> In Progress -> Done).',
              'Quản lý khối lượng công việc (Workload Management): Phân bổ nhiệm vụ công bằng, tránh tình trạng thành viên bị quá tải hoặc thiếu việc.',
              'Tự động hóa quy trình làm việc: Sử dụng các luồng tự động (như Power Automate hoặc Zapier) để tự động gửi thông báo khi một nhiệm vụ hoàn thành.'
            ]
          },
          {
            title: 'Đóng góp vào các dự án mã nguồn mở & Cộng đồng số',
            details: [
              'Hệ thống quản lý phiên bản phân tán (Git / GitHub): Hiểu khái niệm Kho lưu trữ (Repository), Phân nhánh (Branch), Cam kết (Commit) và Yêu cầu kéo gộp (Pull Request).',
              'Đóng góp vào cộng đồng: Đóng góp mã nguồn, báo cáo lỗi phần mềm (Bug report) hoặc dịch thuật tài liệu hướng dẫn.',
              'Quy tắc ứng xử cộng đồng (Code of Conduct): Tuân thủ tiêu chuẩn văn hóa và đạo đức đóng góp trong các dự án công nghệ mở.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Kanban Board', definition: 'Công cụ trực quan hóa tiến độ công việc dựa trên các thẻ nhiệm vụ di chuyển qua các cột trạng thái.' },
          { term: 'Pull Request (PR)', definition: 'Phương thức đề xuất và đánh giá mã nguồn hoặc nội dung mới trước khi được chính thức gộp vào dự án chung trên Git.' },
          { term: 'Workflow Automation', definition: 'Thiết lập các quy tắc tự động hóa các tác vụ lặp đi lặp lại giữa các ứng dụng và dịch vụ khác nhau.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t6-q1',
            question: 'Ba cột trạng thái công việc cơ bản nhất trên một bảng quản lý tiến độ Kanban (như Trello hoặc Jira) là gì?',
            options: ['Đỏ - Vàng - Xanh', 'To Do (Cần làm) - In Progress (Đang làm) - Done (Đã hoàn thành)', 'Bắt đầu - Ngủ - Kết thúc', 'Mua sắm - Nấu nướng - Rửa bát'],
            correctIndex: 1,
            explanation: 'Bảng Kanban mô hình hóa trực quan dòng chảy công việc từ khi được lên kế hoạch (To Do), đang xử lý (In Progress) đến khi nghiệm thu (Done).',
            domain: 'Collaboration'
          },
          {
            id: 'l3-t6-q2',
            question: 'Trong hệ thống quản lý phiên bản mã nguồn Git (hoặc nền tảng GitHub), hành động "Pull Request" (PR) có ý nghĩa gì?',
            options: ['Kéo dây mạng máy tính ra khỏi ổ cắm', 'Đề xuất các thay đổi nội dung hoặc mã nguồn mà bạn vừa viết để nhóm dự án xem xét, kiểm thử trước khi sáp nhập vào nhánh chính', 'Xóa vĩnh viễn toàn bộ dự án', 'Yêu cầu thanh toán tiền mặt'],
            correctIndex: 1,
            explanation: 'Pull Request là cơ chế cộng tác trung tâm của Git, cho phép các lập trình viên rà soát chất lượng code của nhau trước khi tích hợp vào dự án chính.',
            domain: 'Collaboration'
          },
          {
            id: 'l3-t6-q3',
            question: 'Công cụ tự động hóa quy trình làm việc (như Power Automate hoặc Zapier) giúp ích gì cho một nhóm dự án số?',
            options: ['Tự động hoàn thành bài tập toán', 'Tự động kích hoạt các thao tác liên kết giữa các ứng dụng (ví dụ: tự gửi email thông báo khi có người nộp biểu mẫu mới) giúp tiết kiệm thời gian', 'Làm máy in chạy nhanh hơn gấp 10 lần', 'Tự tạo mật khẩu ngân hàng'],
            correctIndex: 1,
            explanation: 'Workflow Automation loại bỏ các công việc thủ công lặp lại bằng cách thiết lập các luồng kích hoạt và hành động tự động giữa các phần mềm.',
            domain: 'Collaboration'
          },
          {
            id: 'l3-t6-q4',
            question: 'Khái niệm "Code of Conduct" (Quy tắc ứng xử) trong các dự án nguồn mở và cộng tác công nghệ có vai trò gì?',
            options: ['Quy định màu sắc trang phục của nhân viên', 'Xác lập các tiêu chuẩn về hành vi được hoan nghênh và các hành vi bị nghiêm cấm nhằm xây dựng môi trường cộng tác thân thiện, hòa nhập và tôn trọng', 'Hướng dẫn cách gõ phím mười ngón', 'Là thuật toán mã hóa dữ liệu'],
            correctIndex: 1,
            explanation: 'Code of Conduct tạo môi trường làm việc an toàn, bình đẳng và tôn trọng sự đa dạng cho mọi người tham gia đóng góp.',
            domain: 'Collaboration'
          },
          {
            id: 'l3-t6-q5',
            question: 'Khi phát hiện một lỗi nghiêm trọng trong phần mềm mã nguồn mở đang sử dụng, hành động đóng góp đúng đắn nhất cho cộng đồng là gì?',
            options: ['Im lặng và âm thầm khai thác lỗi để kiếm tiền bất chính', 'Tạo một báo cáo lỗi chi tiết (Bug Report) trên trang dự án nêu rõ các bước tái hiện lỗi để các nhà phát triển khắc phục', 'Đăng bài chửi bới lên mạng xã hội', 'Xóa máy tính của mình'],
            correctIndex: 1,
            explanation: 'Gửi Bug Report chất lượng kèm mô tả chi tiết các bước xảy ra lỗi giúp đội ngũ bảo trì sửa chữa lỗi phần mềm nhanh chóng.',
            domain: 'Collaboration'
          },
          {
            id: 'l3-t6-q6',
            question: 'Yếu tố nào sau đây là quan trọng nhất để duy trì sự thành công của một nhóm dự án làm việc từ xa (Remote Team)?',
            options: ['Bắt buộc các thành viên phải bật camera 24/24 giờ', 'Mục tiêu rõ ràng, giao tiếp minh bạch, có công cụ theo dõi tiến độ chung và sự tin tưởng lẫn nhau', 'Không bao giờ phân công công việc', 'Chỉ dùng một máy tính duy nhất'],
            correctIndex: 1,
            explanation: 'Làm việc từ xa đòi hỏi tính minh bạch về mục tiêu, kỷ luật cá nhân và công cụ quản lý dự án tin cậy để gắn kết các thành viên.',
            domain: 'Collaboration'
          }
        ]
      },
      {
        id: 'ic3-l3-chude-7',
        order: 7,
        code: 'SS',
        title: 'An toàn & Bảo mật',
        englishTitle: 'Safety and Security',
        summary: 'Bảo mật thiết bị chuyên sâu, quét lỗ hổng hệ thống, quy trình dọn dẹp chuyển giao thiết bị an toàn và đánh giá tác động công nghệ số.',
        durationMinutes: 130,
        pdfFileName: 'ic3-level-3-chude-7.pdf',
        pdfUrl: '/ic3-assets/giao-trinh/ic3-level-3-chude-7.pdf',
        coreKnowledge: [
          {
            title: 'Quét & Đánh giá an ninh thiết bị (Vulnerability Assessment)',
            details: [
              'Quét lỗ hổng bảo mật: Kiểm tra các cổng mạng đang mở (Open ports), các phần mềm đã lỗi thời chưa cập nhật bản vá.',
              'Nhận diện các cuộc tấn công mạng nguy hiểm: Tấn công từ chối dịch vụ phân tán (DDoS), Tấn công trung gian (Man-in-the-middle), Tấn công ngày số 0 (Zero-day exploits).',
              'Quản trị quyền truy cập tối thiểu (Principle of Least Privilege): Không bao giờ sử dụng tài khoản Quản trị viên (Administrator) cho các nhu cầu duyệt web hay giải trí thông thường.'
            ]
          },
          {
            title: 'Quy trình dọn dẹp & Chuyển giao thiết bị an toàn (Decommissioning)',
            details: [
              'Hiểu về việc xóa dữ liệu: Lệnh xóa thông thường hoặc format nhanh (Quick Format) KHÔNG làm mất dữ liệu, các phần mềm phục hồi tệp vẫn có thể khôi phục lại nguyên vẹn.',
              'Quy trình xóa sạch dữ liệu an toàn (Secure Data Wiping): Ghi đè ngẫu nhiên nhiều lần lên toàn bộ bề mặt ổ đĩa (chuẩn DoD 5220.22-M) hoặc mã hóa ổ đĩa rồi hủy khóa.',
              'Khôi phục cài đặt gốc của nhà sản xuất (Factory Reset): Đưa thiết bị về trạng thái ban đầu trước khi bán hoặc cho tặng.',
              'Tiêu hủy vật lý (Physical Destruction): Khoan thủng hoặc nghiền nát đĩa từ đối với các ổ cứng chứa dữ liệu mật quốc gia/cơ quan.'
            ]
          },
          {
            title: 'Đánh giá tác động xã hội của công nghệ số',
            details: [
              'Trí tuệ nhân tạo (AI) và Tự động hóa: Tác động sâu rộng đến cơ cấu việc làm, đòi hỏi người lao động phải liên tục học tập suốt đời.',
              'Khoảng cách số (Digital Divide): Khoảng cách về cơ hội tiếp cận công nghệ giữa các vùng miền phát triển và vùng sâu vùng xa.',
              'Chính sách công nghệ xanh (Green Computing): Tối ưu hóa tiêu thụ năng lượng của các trung tâm dữ liệu và tái chế thiết bị số bền vững.'
            ]
          }
        ],
        keyTerms: [
          { term: 'Zero-day Exploit', definition: 'Lỗ hổng bảo mật phần mềm chưa được nhà sản xuất biết đến hoặc chưa kịp phát hành bản vá, bị tin tặc khai thác bí mật.' },
          { term: 'Secure Data Wiping', definition: 'Phương pháp xóa sạch dữ liệu vĩnh viễn bằng cách ghi đè các dãy bit ngẫu nhiên lên toàn bộ ổ đĩa để ngăn chặn mọi khả năng phục hồi.' },
          { term: 'Principle of Least Privilege', definition: 'Nguyên tắc an ninh chỉ cấp cho người dùng hoặc ứng dụng những quyền tối thiểu cần thiết để hoàn thành công việc.' },
          { term: 'Digital Divide', definition: 'Sự chênh lệch về điều kiện kinh tế và xã hội trong việc tiếp cận và ứng dụng công nghệ thông tin giữa các nhóm dân cư.' }
        ],
        quizQuestions: [
          {
            id: 'l3-t7-q1',
            question: 'Trước khi bán hoặc đem tặng chiếc máy tính xách tay cũ của bạn cho người lạ, thao tác nào sau đây đảm bảo dữ liệu cá nhân nhạy cảm của bạn KHÔNG THỂ bị khôi phục lại?',
            options: ['Chỉ bấm chuột phải xóa tệp rồi làm rỗng thùng rác Recycle Bin', 'Format nhanh (Quick Format) ổ đĩa C', 'Thực hiện xóa dữ liệu an toàn bằng cách ghi đè nhiều lần (Secure Wipe) hoặc đặt lại cài đặt gốc kèm tùy chọn xóa sạch toàn bộ ổ đĩa (Clean the drive)', 'Đổi hình nền máy tính'],
            correctIndex: 2,
            explanation: 'Xóa thường hoặc Quick format chỉ xóa chỉ mục bảng tệp, dữ liệu gốc vẫn còn trên đĩa. Cần dùng phương pháp Secure Wipe ghi đè để triệt tiêu khả năng phục hồi.',
            domain: 'Safety and Security'
          },
          {
            id: 'l3-t7-q2',
            question: 'Lỗ hổng bảo mật "Zero-day" (Ngày số 0) trong thế giới an ninh mạng là gì?',
            options: ['Lỗi phần mềm đã tồn tại 0 ngày', 'Lỗ hổng phần mềm vừa bị phát hiện mà nhà sản xuất chưa kịp phát hành bản vá bảo mật, khiến hệ thống rất dễ bị tin tặc tấn công', 'Một loại máy vi tính không có ngày tháng', 'Lỗi do đồng hồ hệ thống chạy sai'],
            correctIndex: 1,
            explanation: 'Zero-day là lỗ hổng chưa được vá, nhà phát triển có 0 ngày để chuẩn bị phòng thủ trước khi nó bị khai thác.',
            domain: 'Safety and Security'
          },
          {
            id: 'l3-t7-q3',
            question: 'Nguyên tắc "Đặc quyền tối thiểu" (Principle of Least Privilege) trong quản trị an ninh hệ thống khuyến cáo điều gì?',
            options: ['Cấp toàn quyền Quản trị viên (Administrator) cho tất cả mọi người kể cả khách vãng lai', 'Chỉ cấp cho người dùng hoặc ứng dụng các quyền hạn tối thiểu vừa đủ để họ thực hiện công việc của mình, hạn chế sử dụng tài khoản quản trị khi không cần thiết', 'Không bao giờ cấp mật khẩu cho nhân viên', 'Chỉ dùng máy tính vào ban đêm'],
            correctIndex: 1,
            explanation: 'Giới hạn quyền hạn tối thiểu giúp giảm thiểu tối đa thiệt hại nếu tài khoản của người dùng bị mã độc chiếm quyền kiểm soát.',
            domain: 'Safety and Security'
          },
          {
            id: 'l3-t7-q4',
            question: 'Hình thức tấn công từ chối dịch vụ phân tán (DDoS - Distributed Denial of Service) làm tê liệt máy chủ của một trang web như thế nào?',
            options: ['Đến cắt đứt dây điện của máy chủ', 'Huy động hàng triệu thiết bị máy tính ma (Botnet) đồng loạt gửi lượng khổng lồ yêu cầu giả mạo tới máy chủ khiến hệ thống quá tải và sập đường truyền', 'Gửi một bức thư giấy đe dọa', 'Đổi tên miền của trang web'],
            correctIndex: 1,
            explanation: 'DDoS sử dụng mạng lưới botnet để làm ngập lụt băng thông và tài nguyên máy chủ mục tiêu khiến người dùng hợp pháp không thể truy cập.',
            domain: 'Safety and Security'
          },
          {
            id: 'l3-t7-q5',
            question: 'Khái niệm "Khoảng cách số" (Digital Divide) đề cập đến vấn đề xã hội nào?',
            options: ['Khoảng cách vật lý giữa hai chiếc máy tính xách tay', 'Sự bất bình đẳng về cơ hội tiếp cận công nghệ thông tin, thiết bị số và Internet giữa các khu vực địa lý, tầng lớp xã hội và điều kiện kinh tế khác nhau', 'Khoảng cách giữa chuột và bàn phím', 'Tốc độ quay của đĩa cứng'],
            correctIndex: 1,
            explanation: 'Digital Divide phản ánh sự chênh lệch giàu nghèo trong tiếp cận công nghệ và kỹ năng số, tạo ra rào cản phát triển xã hội.',
            domain: 'Safety and Security'
          },
          {
            id: 'l3-t7-q6',
            question: 'Hành vi nào sau đây góp phần thực hành "Điện toán xanh" (Green Computing) trong việc sử dụng công nghệ số?',
            options: ['Bật máy tính chạy tối đa công suất 24/7 kể cả khi đi ngủ', 'Bật chế độ tiết kiệm điện (Power Saving / Sleep mode) khi không sử dụng, tắt màn hình và bảo dưỡng thiết bị để kéo dài vòng đời phần cứng', 'Thường xuyên vứt bỏ máy vi tính cũ ra bãi rác', 'Bật độ sáng màn hình 100% liên tục'],
            correctIndex: 1,
            explanation: 'Green Computing hướng tới việc sử dụng tài nguyên công nghệ hiệu quả, tiết kiệm năng lượng và giảm thiểu tác động môi trường.',
            domain: 'Safety and Security'
          }
        ]
      }
    ]
  }
};
