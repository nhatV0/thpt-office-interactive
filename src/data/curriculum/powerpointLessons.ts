import type { LessonUnit } from '../../types/curriculum';

export const powerpointLessons: LessonUnit[] = [
  // =========================================================================
  // BÀI 1: BẮT ĐẦU VỚI MICROSOFT POWERPOINT
  // =========================================================================
  {
    id: 'pp-lesson-1',
    moduleId: 'powerpoint',
    order: 1,
    title: 'Bài 1: Bắt đầu với Microsoft PowerPoint',
    summary: 'Khởi động PowerPoint, tạo bản trình bày từ mẫu có sẵn, khám phá giao diện Ribbon & Backstage, tùy biến Quick Access Toolbar, nhập nội dung trong Placeholder và các chế độ xem Normal, Slide Sorter, Reading View.',
    durationMinutes: 45,
    theories: [
      {
        id: 'ppt-1-1',
        title: 'Khởi động PowerPoint và tạo bản trình bày từ Template',
        concept: 'Microsoft PowerPoint 2019 cho phép tạo bản trình bày mới từ trang trắng (Blank Presentation) hoặc lựa chọn từ hàng trăm mẫu thiết kế chuyên nghiệp (Themes & Templates) tích hợp sẵn phong cách màu sắc, phông chữ và bố cục hài hòa.',
        keyPoints: [
          'Vào thẻ File > New: Chọn Blank Presentation hoặc tìm kiếm mẫu template theo chủ đề (Business, Education, Infographics).',
          'Mỗi template cung cấp bộ màu sắc (Color Scheme) và hệ thống phông chữ (Typography) đồng bộ xuyên suốt.',
          'Sử dụng Recent để mở nhanh các file làm việc gần đây hoặc Pin (Ghim) các bài thuyết trình thường xuyên truy cập.'
        ],
        shortcut: 'Ctrl + N để tạo nhanh một bản trình bày trắng mới; Ctrl + O để mở tệp trình chiếu có sẵn.',
        examTip: 'Trong bài thi MOS, khi đề yêu cầu tạo bản trình bày mới từ mẫu template cụ thể (ví dụ: Ion Boardroom, Celestial), hãy vào File > New và gõ chính xác tên mẫu vào ô tìm kiếm.',
        checkpointQuestion: {
          question: 'Để tạo một bài thuyết trình mới hoàn toàn dựa trên mẫu thiết kế có sẵn theo chủ đề trong PowerPoint, thao tác chuẩn là gì?',
          options: [
            'Vào thẻ Home > New Slide',
            'Vào thẻ File > New rồi chọn mẫu Theme/Template mong muốn',
            'Vào thẻ Insert > Themes',
            'Vào thẻ Design > Variants'
          ],
          correctIndex: 1,
          explanation: 'Thẻ File đưa người dùng vào Backstage View, nơi chứa mục New để tạo bài trình chiếu từ trang trắng hoặc từ kho thư viện Template đa dạng.'
        }
      },
      {
        id: 'ppt-1-2',
        title: 'Giao diện PowerPoint, ScreenTips và thanh Quick Access Toolbar',
        concept: 'Giao diện PowerPoint 2019 gồm thanh tiêu đề (Title Bar), thanh công cụ truy cập nhanh (Quick Access Toolbar - QAT), hệ thống Ribbon theo ngữ cảnh, vùng soạn thảo Slide Pane, bảng Slide Navigation bên trái và thanh trạng thái Status Bar.',
        keyPoints: [
          'Quick Access Toolbar nằm ở góc trên cùng bên trái, cho phép ghim các lệnh thường dùng như Save, Undo, Redo, Start From Beginning.',
          'Tùy biến QAT: Nhấp vào mũi tên Customize Quick Access Toolbar > More Commands... để thêm hoặc xóa bất kỳ lệnh nào từ Ribbon.',
          'Enhanced ScreenTips hiển thị tên nút lệnh, tổ hợp phím tắt tương ứng và mô tả ngắn gọn công dụng của tính năng khi rê chuột qua biểu tượng.',
          'Thu gọn Ribbon (Collapse Ribbon): Nhấp đúp chuột vào bất kỳ tên thẻ hoặc bấm Ctrl + F1 để tăng diện tích hiển thị slide.'
        ],
        shortcut: 'Ctrl + F1 để ẩn/hiện thanh công cụ Ribbon; F12 để mở hộp thoại Save As.',
        examTip: 'Đề thi MOS thường yêu cầu: "Add the [lệnh cụ thể] button to the Quick Access Toolbar" hoặc "Show Quick Access Toolbar Below the Ribbon".',
        checkpointQuestion: {
          question: 'Làm thế nào để thêm một nút lệnh chưa có sẵn trên thanh Ribbon vào thanh Quick Access Toolbar?',
          options: [
            'Kéo thả trực tiếp biểu tượng vào màn hình chiếu',
            'Nhấp chuột phải vào nút lệnh đó trên Ribbon và chọn "Add to Quick Access Toolbar"',
            'Chuyển sang chế độ Slide Master',
            'Nhấn tổ hợp phím Ctrl + Shift + A'
          ],
          correctIndex: 1,
          explanation: 'Nhấp chuột phải vào bất kỳ lệnh nào trên thanh Ribbon và chọn "Add to Quick Access Toolbar" là cách nhanh nhất để đưa lệnh đó lên thanh truy cập nhanh.'
        }
      },
      {
        id: 'ppt-1-3',
        title: 'Nhập nội dung trên Placeholder và tỷ lệ kích thước Slide',
        concept: 'Slide trong PowerPoint sử dụng các khung chứa nội dung thông minh gọi là Placeholder (Click to add title / subtitle / text). Slide Size quyết định tỷ lệ khung hình hiển thị phù hợp với thiết bị trình chiếu.',
        keyPoints: [
          'Placeholder là các khung nét đứt có sẵn trên slide, giữ chỗ cho tiêu đề, nội dung dạng danh sách (bulleted text), bảng, biểu đồ hoặc video.',
          'Khi văn bản dài vượt quá khung, tính năng AutoFit Options sẽ tự động thu nhỏ cỡ chữ để vừa vặn với kích thước Placeholder.',
          'Tỷ lệ slide: Widescreen (16:9) là tỷ lệ màn hình rộng mặc định hiện nay; Standard (4:3) dùng cho máy chiếu hoặc màn hình vuông đời cũ.',
          'Thay đổi tỷ lệ: Thẻ Design > nhóm Customize > Slide Size > chọn Standard (4:3) hoặc Widescreen (16:9). Khi đổi cỡ slide, chọn Maximize hoặc Ensure Fit.'
        ],
        shortcut: 'Alt + G, S để mở trình đơn lựa chọn Slide Size trong thẻ Design.',
        examTip: 'Đề thi MOS hay yêu cầu đổi Slide Size sang Standard (4:3) và chỉ định rõ lựa chọn "Ensure Fit" để không làm tràn nội dung ra ngoài rìa slide.',
        checkpointQuestion: {
          question: 'Khi chuyển đổi tỷ lệ Slide từ Widescreen (16:9) sang Standard (4:3), lựa chọn nào đảm bảo toàn bộ nội dung nằm gọn bên trong slide mà không bị cắt xén?',
          options: [
            'Maximize',
            'Ensure Fit',
            'Scale to Paper',
            'Stretch Content'
          ],
          correctIndex: 1,
          explanation: 'Ensure Fit sẽ thu nhỏ tỷ lệ của các đối tượng và nội dung trên slide để đảm bảo chúng nằm trọn vẹn trong khung hình 4:3 mà không bị mất lề.'
        }
      },
      {
        id: 'ppt-1-4',
        title: 'Các chế độ xem bản trình bày (Presentation Views)',
        concept: 'PowerPoint cung cấp nhiều chế độ xem khác nhau phục vụ từng mục đích: soạn thảo chi tiết, sắp xếp lại trật tự slide, xem ghi chú hoặc đọc nội dung không làm gián đoạn.',
        keyPoints: [
          'Normal View: Chế độ soạn thảo mặc định, gồm khung hiển thị slide chính và thanh thu nhỏ (Thumbnails) bên trái.',
          'Slide Sorter: Hiển thị toàn bộ các slide dưới dạng lưới thu nhỏ, lý tưởng để kéo thả thay đổi vị trí, sao chép hoặc xóa nhiều slide cùng lúc.',
          'Reading View: Trình chiếu bài giảng trong một cửa sổ có thanh điều khiển đơn giản, không chiếm trọn toàn bộ màn hình máy tính.',
          'Notes Page: Hiển thị slide kèm toàn bộ phần ghi chú của diễn giả (Speaker Notes) ở nửa dưới trang, thuận tiện cho việc in ấn bản chuẩn bị phát biểu.'
        ],
        shortcut: 'Bấm các nút chuyển đổi View nhanh ở góc dưới bên phải thanh Status Bar hoặc vào thẻ View > Presentation Views.',
        examTip: 'Câu hỏi thi MOS thường yêu cầu đổi chế độ xem sang Slide Sorter để di chuyển vị trí một slide từ đầu về cuối bài thuyết trình.',
        checkpointQuestion: {
          question: 'Chế độ xem nào hiển thị tất cả các slide dưới dạng lưới ảnh thu nhỏ, giúp người dùng dễ dàng bao quát và sắp xếp lại thứ tự các slide?',
          options: [
            'Normal View',
            'Outline View',
            'Slide Sorter View',
            'Reading View'
          ],
          correctIndex: 2,
          explanation: 'Slide Sorter View hiển thị toàn bộ các trang slide thành dạng các ô lưới nhỏ, rất thuận tiện để quan sát cấu trúc và kéo thả hoán đổi vị trí slide.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-1-1',
        title: 'Tạo một Slide mới bố cục tiêu chuẩn',
        instruction: 'Trên thanh Ribbon tại thẻ Home, nhấp vào nút New Slide để thêm một slide mới vào bài thuyết trình.',
        hint: 'Nhấp chuột vào tab Home > nhóm Slides > New Slide (Ctrl + M).',
        targetType: 'ribbon-action',
        actionKey: 'pp-new-slide'
      },
      {
        id: 'ptask-1-2',
        title: 'Đổi bố cục slide hiện tại sang Two Content',
        instruction: 'Tại thẻ Home trên thanh Ribbon, nhấn vào nút Layout và chọn kiểu bố cục Two Content để hiển thị 2 cột nội dung.',
        hint: 'Nhấp Home > nhóm Slides > Layout > Two Content.',
        targetType: 'ribbon-action',
        actionKey: 'pp-change-layout-twocontent'
      },
      {
        id: 'ptask-1-3',
        title: 'Mở chế độ trình chiếu từ slide hiện hành',
        instruction: 'Chuyển sang thẻ Slide Show trên thanh Ribbon và chọn nút From Current Slide để kiểm tra giao diện trình chiếu.',
        hint: 'Nhấp tab Slide Show > nhóm Start Slide Show > From Current Slide (Shift + F5).',
        targetType: 'ribbon-action',
        actionKey: 'pp-show-from-current'
      }
    ],
    quiz: [
      {
        id: 'pq-1-1',
        question: 'Tổ hợp phím tắt nào dùng để chèn thêm một slide mới vào bài thuyết trình hiện tại?',
        options: ['Ctrl + N', 'Ctrl + M', 'Ctrl + Shift + N', 'Ctrl + S'],
        correctIndex: 1,
        explanation: 'Ctrl + M chèn thêm một slide mới vào bài đang làm việc, trong khi Ctrl + N tạo ra một tệp thuyết trình mới.'
      },
      {
        id: 'pq-1-2',
        question: 'Tỷ lệ kích thước slide mặc định trong Microsoft PowerPoint 2019 là bao nhiêu?',
        options: ['Standard (4:3)', 'Widescreen (16:9)', 'A4 Paper', 'Letter Size'],
        correctIndex: 1,
        explanation: 'Kể từ phiên bản PowerPoint 2013 trở đi, tỷ lệ màn hình rộng Widescreen 16:9 được đặt làm mặc định để tương thích với màn hình hiện đại.'
      },
      {
        id: 'pq-1-3',
        question: 'Vùng nét đứt trên slide có dòng chữ "Click to add title" hoặc "Click to add text" được gọi là gì?',
        options: ['Bounding Box', 'Placeholder', 'Content Shape', 'Smart Frame'],
        correctIndex: 1,
        explanation: 'Placeholder là khung chứa định sẵn trên bố cục slide để người dùng điền văn bản, bảng, đồ thị hoặc hình ảnh minh họa.'
      },
      {
        id: 'pq-1-4',
        question: 'Muốn kiểm tra bài thuyết trình trong một cửa sổ có thanh cuộn và thanh trạng thái mà không chiếm toàn bộ màn hình, ta chọn chế độ xem nào?',
        options: ['Slide Show View', 'Slide Sorter View', 'Reading View', 'Notes Page View'],
        correctIndex: 2,
        explanation: 'Reading View hiển thị nội dung gần như Slide Show nhưng gói gọn trong cửa sổ ứng dụng, giúp bạn dễ dàng theo dõi các cửa sổ khác.'
      }
    ]
  },

  // =========================================================================
  // BÀI 2: LÀM VIỆC VỚI TRANG CHIẾU (SLIDE LAYOUTS & SLIDE MASTER)
  // =========================================================================
  {
    id: 'pp-lesson-2',
    moduleId: 'powerpoint',
    order: 2,
    title: 'Bài 2: Làm việc với Trang chiếu (Slide Layouts & Slide Master)',
    summary: 'Áp dụng Themes & Variants, tùy chỉnh màu nền Background Styles, quản lý Slide Master mẹ và các Layouts con, căn chỉnh đối tượng với Gridlines & Guides, đánh số trang Slide Numbers, ẩn/hiện slide và phân nhóm Sections.',
    durationMinutes: 50,
    theories: [
      {
        id: 'ppt-2-1',
        title: 'Áp dụng Themes, Biến thể (Variants) và Background Styles',
        concept: 'Theme là bộ định dạng hoàn chỉnh bao gồm bảng màu (Colors), phông chữ tiêu đề/thân bài (Fonts) và hiệu ứng hình họa (Effects). Variants cho phép thay đổi tông màu hoặc phong cách nền mà không làm thay đổi cấu trúc Theme.',
        keyPoints: [
          'Áp dụng Theme: Thẻ Design > nhóm Themes > chọn một mẫu Theme phù hợp.',
          'Tùy chỉnh biến thể: Thẻ Design > nhóm Variants > chọn màu nền (Colors), phông chữ (Fonts) hoặc hiệu ứng (Effects).',
          'Đổi màu nền cho một slide: Thẻ Design > Format Background > chọn Solid Fill, Gradient Fill, Picture or Texture Fill, hoặc Pattern Fill.',
          'Nhấn Apply to All trong bảng Format Background nếu muốn áp dụng màu nền vừa chọn cho toàn bộ bài thuyết trình.'
        ],
        shortcut: 'Alt + G để mở thẻ Design chọn nhanh Theme và Variant.',
        examTip: 'Đề thi MOS rất hay yêu cầu: "Apply the [Tên Theme] theme to all slides" hoặc "Change the theme colors to [Tên bảng màu]". Chú ý kiểm tra chính xác tên bằng ScreenTip.',
        checkpointQuestion: {
          question: 'Khi muốn áp dụng một màu nền vừa thiết lập trong bảng Format Background cho TẤT CẢ các slide trong bài thuyết trình, nút lệnh nào cần được nhấn?',
          options: [
            'Reset Background',
            'Apply to All',
            'Close Master View',
            'Set as Default Theme'
          ],
          correctIndex: 1,
          explanation: 'Nút "Apply to All" nằm ở chân bảng Format Background sẽ sao chép thiết lập nền vừa chọn cho toàn bộ các slide trong tệp trình chiếu.'
        }
      },
      {
        id: 'ppt-2-2',
        title: 'Sức mạnh Slide Master và tùy biến Custom Layout',
        concept: 'Slide Master là trang slide mẹ nằm trên cùng kiểm soát toàn bộ bài thuyết trình. Khi chèn logo, chân trang hoặc định dạng phông chữ trên Slide Master mẹ, tất cả các slide con sẽ tự động đồng bộ.',
        keyPoints: [
          'Mở Slide Master: Thẻ View > nhóm Master Views > Slide Master.',
          'Slide mẹ trên cùng (Master Slide lớn nhất): Định dạng tại đây áp dụng cho TẤT CẢ slide.',
          'Các slide layout con bên dưới: Chỉ tác động đến những slide sử dụng chính xác kiểu layout đó (như Title Slide, Title and Content).',
          'Thêm Placeholder vào Layout: Thẻ Slide Master > Insert Placeholder (chọn Text, Picture, Chart, Table...).',
          'Đóng chế độ Slide Master: Bấm nút Close Master View trên thẻ Slide Master.'
        ],
        shortcut: 'Giữ phím Shift và nhấp vào biểu tượng Normal View ở thanh trạng thái để mở nhanh Slide Master.',
        examTip: 'Trong bài thi MOS, nếu đề bài yêu cầu chèn logo hoặc thay đổi phông chữ "so that it appears on all slides", bạn BẮT BUỘC phải làm trên Slide Master mẹ (slide số 1 cao nhất).',
        checkpointQuestion: {
          question: 'Để chèn logo trường học sao cho hình ảnh tự động xuất hiện ở góc trên bên phải của TẤT CẢ các trang chiếu, thao tác đúng là gì?',
          options: [
            'Sao chép và dán ảnh thủ công vào từng trang slide',
            'Vào thẻ View > Slide Master, chọn slide mẹ trên cùng và chèn logo tại đây',
            'Vào thẻ Design > Background Styles',
            'Sử dụng công cụ Section Header'
          ],
          correctIndex: 1,
          explanation: 'Slide Master mẹ (slide lớn trên cùng trong ngăn Slide Master) quản lý toàn bộ slide con. Mọi yếu tố đặt tại đây sẽ hiển thị tự động trên tất cả các slide.'
        }
      },
      {
        id: 'ppt-2-3',
        title: 'Đánh số trang chiếu, ngày tháng và chân trang (Headers & Footers)',
        concept: 'Chân trang giúp hiển thị thông tin bài thuyết trình, bản quyền, ngày cập nhật và số thứ tự trang chiếu (Slide Number) một cách chuyên nghiệp và nhất quán.',
        keyPoints: [
          'Mở hộp thoại Header and Footer: Thẻ Insert > nhóm Text > Header & Footer.',
          'Tùy chọn Date and time: Có thể chọn Update automatically (cập nhật theo ngày mở file) hoặc Fixed (ngày cố định).',
          'Tùy chọn Slide number: Tự động đánh số thứ tự cho từng trang slide.',
          'Tùy chọn Footer: Nhập văn bản ghi chú bản quyền hoặc tên tác giả.',
          'Tùy chọn Don\'t show on title slide: Tích chọn để ẩn số trang và chân trang trên slide mở đầu (trang bìa).'
        ],
        shortcut: 'Alt + N, H để mở nhanh hộp thoại Header and Footer.',
        examTip: 'Hãy chú ý yêu cầu "Apply to All" so với "Apply" (chỉ áp dụng cho slide hiện hành) và kiểm tra kỹ ô "Don\'t show on title slide" trong đề thi MOS.',
        checkpointQuestion: {
          question: 'Làm thế nào để hiển thị số trang trên mọi slide nhưng KHÔNG hiển thị số trang trên slide bìa đầu tiên?',
          options: [
            'Xóa số trang thủ công trên slide 1',
            'Trong hộp thoại Header and Footer, tích chọn "Slide number" và tích chọn "Don\'t show on title slide"',
            'Chỉ bấm nút "Apply" thay vì "Apply to All"',
            'Đặt số trang trong Slide Sorter'
          ],
          correctIndex: 1,
          explanation: 'Tùy chọn "Don\'t show on title slide" trong hộp thoại Header and Footer sẽ ẩn toàn bộ thông tin ngày tháng, số trang và chân trang trên slide có bố cục Title Slide.'
        }
      },
      {
        id: 'ppt-2-4',
        title: 'Quản lý cấu trúc slide: Ẩn slide và phân nhóm Sections',
        concept: 'Khi bài thuyết trình có số lượng slide lớn, tính năng Sections giúp gom nhóm các slide theo từng phần nội dung/chủ đề. Tính năng Hide Slide giúp tạm ẩn slide mà không cần xóa.',
        keyPoints: [
          'Tạo Section: Chuột phải vào khoảng trống giữa 2 slide trong bảng điều hướng > chọn Add Section (hoặc Home > Section > Add Section).',
          'Đổi tên Section: Chuột phải vào tên Section > Rename Section > nhập tên mới.',
          'Thu gọn/mở rộng Section: Nhấp vào mũi tên tam giác bên cạnh tên Section để thu gọn danh sách slide, giúp bài trình bày gọn gàng.',
          'Ẩn Slide (Hide Slide): Chuột phải vào slide cần ẩn > Hide Slide. Số thứ tự slide sẽ bị gạch chéo và slide này bị bỏ qua khi trình chiếu.'
        ],
        shortcut: 'Nhấp chuột phải vào slide trong khung Thumbnail để chọn Hide Slide hoặc Add Section nhanh chóng.',
        examTip: 'Đề thi MOS thường yêu cầu chia bài thuyết trình thành các phần như "Introduction", "Body Content", "Conclusion" bằng tính năng Section.',
        checkpointQuestion: {
          question: 'Khi một trang slide được thiết lập chế độ "Hide Slide", điều gì sẽ xảy ra trong buổi thuyết trình thực tế?',
          options: [
            'Slide đó bị xóa vĩnh viễn khỏi tệp trình chiếu',
            'Slide đó vẫn được hiển thị bình thường nhưng không có hiệu ứng',
            'Slide đó bị bỏ qua khi trình chiếu và chỉ hiển thị lại khi người dùng chủ động chuyển tới',
            'Slide đó bị chuyển thành trang trắng hoàn toàn'
          ],
          correctIndex: 2,
          explanation: 'Hide Slide chỉ ẩn trang chiếu trong quá trình trình chiếu toàn màn hình (Slide Show), dữ liệu bên trong vẫn được giữ nguyên vẹn trong tệp tin.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-2-1',
        title: 'Mở giao diện Slide Master',
        instruction: 'Bấm vào thẻ View trên thanh công cụ Ribbon và nhấp chọn lệnh Slide Master để mở giao diện quản lý trang mẫu.',
        hint: 'Nhấp View > Master Views > Slide Master.',
        targetType: 'ribbon-action',
        actionKey: 'pp-open-slidemaster'
      },
      {
        id: 'ptask-2-2',
        title: 'Thêm một trang slide mới',
        instruction: 'Tại thẻ Home trên thanh Ribbon, chọn New Slide để bổ sung slide nội dung vào danh sách.',
        hint: 'Nhấp Home > nhóm Slides > New Slide (Ctrl + M).',
        targetType: 'ribbon-action',
        actionKey: 'pp-new-slide'
      },
      {
        id: 'ptask-2-3',
        title: 'Chuyển bố cục sang Two Content',
        instruction: 'Nhấp vào nút Layout trên thẻ Home và chọn Two Content để phân chia nội dung trang chiếu.',
        hint: 'Nhấp Home > Layout > Two Content.',
        targetType: 'ribbon-action',
        actionKey: 'pp-change-layout-twocontent'
      }
    ],
    quiz: [
      {
        id: 'pq-2-1',
        question: 'Muốn thay đổi phông chữ và logo một lần duy nhất mà áp dụng tự động cho TẤT CẢ các slide trong bài, ta cần vào chế độ nào?',
        options: ['Slide Sorter', 'Slide Master', 'Reading View', 'Outline View'],
        correctIndex: 1,
        explanation: 'Slide Master là trang chủ đạo định nghĩa cấu trúc và phong cách đồ họa chung cho toàn bộ các slide con trong bài trình chiếu.'
      },
      {
        id: 'pq-2-2',
        question: 'Tính năng nào cho phép phân chia bài thuyết trình có hàng chục slide thành các phân đoạn có tên gọi như "Giới thiệu", "Nội dung chính", "Tổng kết"?',
        options: ['Slide Sorter', 'Custom Layouts', 'Sections', 'Themes'],
        correctIndex: 2,
        explanation: 'Section giúp tổ chức các slide thành từng khối chủ đề logic, cho phép thu gọn/mở rộng hoặc gán hiệu ứng đồng bộ theo từng phân đoạn.'
      },
      {
        id: 'pq-2-3',
        question: 'Khi muốn áp dụng một Theme thiết kế chỉ cho một vài slide đang được chọn (không áp dụng cho cả bài), ta làm thế nào?',
        options: [
          'Nhấp đúp chuột trái vào Theme đó',
          'Nhấp chuột phải vào Theme trong thư viện Themes và chọn "Apply to Selected Slides"',
          'Nhấn phím Ctrl + T',
          'Chuyển sang chế độ Slide Master'
        ],
        correctIndex: 1,
        explanation: 'Nhấp chuột phải vào mẫu Theme và chọn "Apply to Selected Slides" sẽ giới hạn phạm vi áp dụng chỉ trên những trang slide đang bôi chọn.'
      },
      {
        id: 'pq-2-4',
        question: 'Khi chèn chân trang (Header & Footer), lựa chọn nào giúp số trang không bị xuất hiện trên trang bìa mở đầu?',
        options: ['Fixed Date', 'Don\'t show on title slide', 'Apply to All', 'Update automatically'],
        correctIndex: 1,
        explanation: '"Don\'t show on title slide" loại bỏ phần hiển thị số trang, ngày tháng và chân trang khỏi slide bìa có bố cục Title Slide.'
      }
    ]
  },

  // =========================================================================
  // BÀI 3: LÀM VIỆC VỚI VĂN BẢN (TEXT & FORMATTING)
  // =========================================================================
  {
    id: 'pp-lesson-3',
    moduleId: 'powerpoint',
    order: 3,
    title: 'Bài 3: Làm việc với Văn bản (Text & Formatting)',
    summary: 'Nhập nội dung qua Outline View, chèn dàn bài từ Word (.docx, .txt), kiểm tra chính tả Spelling, định dạng phông chữ và danh sách Bullets & Numbering, công cụ sao chép định dạng Format Painter, chia cột báo Columns và căn chỉnh Text Boxes.',
    durationMinutes: 45,
    theories: [
      {
        id: 'ppt-3-1',
        title: 'Chế độ Outline View và nhập dàn ý từ tệp Word (.docx, .txt)',
        concept: 'Outline View hiển thị bài thuyết trình dưới dạng cây dàn ý phân cấp (tiêu đề và nội dung gạch đầu dòng), giúp biên soạn văn bản tập trung mà không bị phân tâm bởi hình ảnh hay bố cục trang trí.',
        keyPoints: [
          'Mở Outline View: Thẻ View > nhóm Presentation Views > Outline View.',
          'Phân cấp nội dung: Phím Tab để thụt lề vào trong (hạ cấp - Demote), tổ hợp Shift + Tab để thụt lề ra ngoài (nâng cấp - Promote). Một dòng ở cấp cao nhất sẽ tự động trở thành tiêu đề của một slide mới.',
          'Nhập dàn bài từ file Word: Thẻ Home > nhấp mũi tên cạnh nút New Slide > chọn Slides from Outline... > chọn file .docx hoặc .txt.',
          'Trong tệp Word, các đoạn văn định dạng Heading 1 sẽ trở thành tiêu đề slide, Heading 2 và 3 trở thành các cấp gạch đầu dòng nội dung.'
        ],
        shortcut: 'Tab để hạ cấp dòng văn bản (Demote); Shift + Tab để nâng cấp dòng văn bản (Promote) trong Outline.',
        examTip: 'Đề thi MOS luôn có câu hỏi: "At the end of the presentation, insert slides from the outline file [tên file].docx". Sử dụng đúng nút New Slide > Slides from Outline.',
        checkpointQuestion: {
          question: 'Để chèn thêm các trang slide tự động tạo từ một tệp dàn bài Microsoft Word có sẵn (.docx), thao tác chuẩn xác là gì?',
          options: [
            'Vào thẻ Insert > Object > Create from file',
            'Vào thẻ Home > New Slide > chọn "Slides from Outline..."',
            'Mở file Word lên rồi copy dán từng đoạn vào slide',
            'Vào thẻ File > Open > Word Document'
          ],
          correctIndex: 1,
          explanation: 'Lệnh Home > New Slide > Slides from Outline... sẽ đọc cấu trúc tiêu đề Heading của file Word để tự động chia thành các slide tương ứng.'
        }
      },
      {
        id: 'ppt-3-2',
        title: 'Định dạng phông chữ, giãn cách ký tự và danh sách Bullets & Numbering',
        concept: 'Văn bản trình chiếu cần đảm bảo tính rõ ràng, tương phản cao và dễ đọc từ khoảng cách xa. PowerPoint hỗ trợ tùy biến các ký hiệu đầu dòng (Bullets) bằng hình ảnh hoặc số tự động.',
        keyPoints: [
          'Định dạng phông: Thẻ Home > nhóm Font (Font Family, Font Size, Bold, Italic, Shadow, Character Spacing).',
          'Nút Character Spacing: Tùy chỉnh khoảng cách giữa các ký tự (Very Tight, Tight, Normal, Loose, Very Loose).',
          'Đổi kiểu chữ hoa/thường: Nút Change Case (Sentence case, lowercase, UPPERCASE, Capitalize Each Word, tOGGLE cASE).',
          'Tùy chỉnh Bullets: Thẻ Home > nhóm Paragraph > nhấp mũi tên cạnh biểu tượng Bullets > Bullets and Numbering... để đổi kích thước, màu sắc hoặc chọn biểu tượng ký tự (Character/Picture).'
        ],
        shortcut: 'Ctrl + Shift + > để tăng cỡ chữ; Ctrl + Shift + < để giảm cỡ chữ nhanh.',
        examTip: 'Trong bài thi MOS, yêu cầu "Change the bullet character to a checkbox/star symbol" đòi hỏi mở hộp thoại Bullets and Numbering và chọn nút Customize.',
        checkpointQuestion: {
          question: 'Muốn thay đổi khoảng cách giữa các ký tự chữ trong một tiêu đề slide để chữ giãn rộng hơn (Loose hoặc Very Loose), công cụ nào được sử dụng?',
          options: [
            'Line Spacing',
            'Character Spacing (AV)',
            'Change Case',
            'Text Direction'
          ],
          correctIndex: 1,
          explanation: 'Nút Character Spacing (biểu tượng chữ AV có mũi tên 2 chiều) trong nhóm Font trên thẻ Home dùng để điều chỉnh độ giãn cách giữa các chữ cái.'
        }
      },
      {
        id: 'ppt-3-3',
        title: 'Chia cột văn bản (Columns) và định dạng khung Text Box',
        concept: 'Khung Text Box giúp đặt chữ tự do ở bất kỳ vị trí nào trên slide. Để trình bày danh sách dài mà không chiếm nhiều khoảng trống dọc, ta có thể chia văn bản trong Text Box thành 2 hoặc 3 cột.',
        keyPoints: [
          'Chèn khung văn bản tự do: Thẻ Insert > nhóm Text > Text Box > kéo thả trên slide.',
          'Chia cột văn bản: Chọn khung Text Box > thẻ Home > nhóm Paragraph > nhấp nút Add or Remove Columns > chọn One Column, Two Columns, hoặc Three Columns.',
          'Định vị Text Box: Thẻ ngữ cảnh Shape Format > nhóm Arrange > Align (Align Left, Center, Right, Top, Middle, Bottom).',
          'Tự động căn chỉnh văn bản trong khung: Chuột phải vào viền Text Box > Format Shape > Text Options > chọn "Do not Autofit", "Shrink text on overflow" hoặc "Resize shape to fit text".'
        ],
        shortcut: 'Alt + H, J để mở nhanh bảng chọn chia cột Columns trong thẻ Home.',
        examTip: 'Đề thi MOS thường yêu cầu: "Format the text in the placeholder into two columns with a spacing of 0.5 inches". Chọn More Columns... để nhập thông số khoảng cách Spacing.',
        checkpointQuestion: {
          question: 'Làm thế nào để chia một danh sách gạch đầu dòng dài bên trong một khung Text Box thành 2 cột đều nhau?',
          options: [
            'Tạo 2 khung Text Box riêng rồi copy chia đôi danh sách',
            'Vào thẻ Home > nhóm Paragraph > chọn biểu tượng Columns và chọn "Two Columns"',
            'Chuyển bố cục slide sang Comparison',
            'Nhấn phím Tab ở đầu mỗi dòng'
          ],
          correctIndex: 1,
          explanation: 'Nút Columns trong nhóm Paragraph trên thẻ Home cho phép chia trực tiếp văn bản trong khung chứa thành 2 hoặc 3 cột mà không cần tạo nhiều Text Box.'
        }
      },
      {
        id: 'ppt-3-4',
        title: 'Căn chỉnh đối tượng (Align & Distribute) và sao chép định dạng Format Painter',
        concept: 'Một bản trình bày chuyên nghiệp đòi hỏi các khung văn bản và hình khối phải thẳng hàng và cách đều nhau. Công cụ Align & Distribute giúp tự động hóa việc căn chỉnh này.',
        keyPoints: [
          'Chọn nhiều đối tượng: Giữ phím Shift hoặc Ctrl và nhấp chuột lần lượt vào từng khung đối tượng.',
          'Căn thẳng hàng (Align): Thẻ Shape Format > Align > chọn Align Left, Align Center, Align Top, Align Middle...',
          'Phân bổ khoảng cách đều nhau (Distribute): Chọn Distribute Horizontally (chia đều khoảng cách ngang) hoặc Distribute Vertically (chia đều khoảng cách dọc).',
          'Sao chép định dạng: Chọn đối tượng nguồn > bấm Format Painter trên thẻ Home > nhấp vào đối tượng đích. Nhấp đúp chuột vào Format Painter để áp dụng liên tục cho nhiều đối tượng.'
        ],
        shortcut: 'Ctrl + Shift + C để sao chép định dạng (Copy Format); Ctrl + Shift + V để dán định dạng (Paste Format).',
        examTip: 'MOS rất hay kiểm tra lệnh "Distribute Horizontally" kết hợp với "Align Top" cho 3-4 hình khối hoặc hộp văn bản nằm cạnh nhau.',
        checkpointQuestion: {
          question: 'Khi có 3 khung Text Box nằm ngang trên slide nhưng khoảng cách giữa chúng không đều nhau, tính năng nào giúp tự động chia đều khoảng cách giữa chúng?',
          options: [
            'Align Center',
            'Distribute Horizontally',
            'Distribute Vertically',
            'Group Objects'
          ],
          correctIndex: 1,
          explanation: '"Distribute Horizontally" tính toán khoảng cách giữa các mép đối tượng ngoài cùng và dàn đều khoảng trống cho các đối tượng ở giữa theo chiều ngang.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-3-1',
        title: 'Phân bổ đều các đối tượng theo chiều ngang',
        instruction: 'Trên thanh Ribbon tại thẻ Insert (hoặc Shape Format), sử dụng công cụ Distribute Horizontally để căn đều khoảng cách giữa các khung nội dung.',
        hint: 'Nhấp thẻ Insert > Illustrations > Distribute Horizontally.',
        targetType: 'ribbon-action',
        actionKey: 'pp-distribute-horizontally'
      },
      {
        id: 'ptask-3-2',
        title: 'Chèn thêm một Slide mới',
        instruction: 'Nhấp vào nút New Slide trên thẻ Home để bổ sung trang chiếu phục vụ soạn thảo văn bản.',
        hint: 'Nhấp Home > nhóm Slides > New Slide.',
        targetType: 'ribbon-action',
        actionKey: 'pp-new-slide'
      },
      {
        id: 'ptask-3-3',
        title: 'Chuyển đổi văn bản thành sơ đồ SmartArt',
        instruction: 'Tại thẻ Home, nhấp vào nút Convert to SmartArt để chuyển danh sách gạch đầu dòng thành đồ họa trực quan.',
        hint: 'Nhấp Home > nhóm Paragraph > Convert to SmartArt.',
        targetType: 'ribbon-action',
        actionKey: 'pp-convert-smartart'
      }
    ],
    quiz: [
      {
        id: 'pq-3-1',
        question: 'Khi đang soạn thảo trong chế độ Outline View, phím tắt nào dùng để hạ cấp phân cấp thụt lề (Demote) của dòng văn bản hiện tại?',
        options: ['Phím Enter', 'Phím Tab', 'Shift + Tab', 'Ctrl + Tab'],
        correctIndex: 1,
        explanation: 'Phím Tab hạ cấp dòng văn bản vào trong 1 mức (Demote); còn tổ hợp phím Shift + Tab nâng cấp dòng văn bản ra ngoài 1 mức (Promote).'
      },
      {
        id: 'pq-3-2',
        question: 'Để sao chép định dạng màu chữ, phông chữ và kích thước từ một đoạn văn bản sang nhiều đoạn khác nhau liên tục, ta thực hiện thao tác nào với cây chổi Format Painter?',
        options: [
          'Nhấp chuột phải vào biểu tượng Format Painter',
          'Nhấp đúp chuột (Double-click) vào biểu tượng Format Painter',
          'Giữ phím Ctrl khi nhấp chuột 1 lần vào Format Painter',
          'Kéo thả biểu tượng Format Painter ra ngoài slide'
        ],
        correctIndex: 1,
        explanation: 'Nhấp đúp chuột vào Format Painter sẽ ghim công cụ này ở trạng thái kích hoạt, cho phép nhấp chuột để áp dụng định dạng cho nhiều đối tượng liên tiếp đến khi nhấn phím Esc.'
      },
      {
        id: 'pq-3-3',
        question: 'Trong tệp dàn bài Microsoft Word (.docx), kiểu định dạng Heading nào sẽ được PowerPoint tự động nhận diện để tạo thành tiêu đề chính của một Slide mới?',
        options: ['Heading 1', 'Heading 2', 'Heading 3', 'Normal'],
        correctIndex: 0,
        explanation: 'PowerPoint quy ước các đoạn văn có style Heading 1 trong Word sẽ trở thành Title của từng slide mới khi nhập qua tính năng Slides from Outline.'
      },
      {
        id: 'pq-3-4',
        question: 'Để các hình khối hoặc khung văn bản thẳng hàng trên cùng một đường mép ngang phía trên, lệnh căn lề nào cần sử dụng?',
        options: ['Align Left', 'Align Middle', 'Align Top', 'Distribute Horizontally'],
        correctIndex: 2,
        explanation: 'Align Top căn chỉnh mép trên của tất cả các đối tượng được chọn thẳng hàng với mép trên của đối tượng nằm cao nhất.'
      }
    ]
  },

  // =========================================================================
  // BÀI 4: LÀM VIỆC VỚI BIỂU ĐỒ VÀ BẢNG (CHARTS & TABLES)
  // =========================================================================
  {
    id: 'pp-lesson-4',
    moduleId: 'powerpoint',
    order: 4,
    title: 'Bài 4: Làm việc với Biểu đồ và Bảng (Charts & Tables)',
    summary: 'Chèn bảng Table và áp dụng Table Styles, thêm/xóa hàng cột, gộp ô Merge Cells, vẽ biểu đồ trực quan (Column, Pie, Line), chỉnh sửa dữ liệu trong cửa sổ Excel nhúng, thêm bớt Chart Elements và định dạng biểu đồ chuyên nghiệp.',
    durationMinutes: 50,
    theories: [
      {
        id: 'ppt-4-1',
        title: 'Tạo Bảng (Tables) và áp dụng Table Styles',
        concept: 'Bảng trong PowerPoint giúp trình bày dữ liệu so sánh, số liệu thống kê hoặc lịch trình một cách ngăn nắp và rõ ràng. Bảng hỗ trợ các mẫu màu Table Styles chuyên nghiệp đi kèm theo Theme.',
        keyPoints: [
          'Chèn bảng: Thẻ Insert > nhóm Tables > Table > rê chuột chọn số dòng và số cột (hoặc nhấp Insert Table).',
          'Tùy chọn Table Style Options: Header Row (hàng tiêu đề nổi bật), Total Row (hàng tổng kết cuối), Banded Rows (xen kẽ màu các dòng), First Column (cột đầu in đậm), Banded Columns (xen kẽ màu các cột).',
          'Áp dụng phong cách: Chọn bảng > thẻ ngữ cảnh Table Design > nhóm Table Styles > chọn kiểu dáng màu sắc mong muốn.',
          'Tô màu nền ô (Shading) và kẻ đường viền (Borders) thủ công tại nhóm Table Styles trên thẻ Table Design.'
        ],
        shortcut: 'Bấm phím Tab để di chuyển đến ô tiếp theo bên phải; tại ô cuối cùng của bảng, phím Tab sẽ tự động chèn thêm một hàng mới.',
        examTip: 'Đề thi MOS thường yêu cầu: "Apply the [Tên Table Style] to the table and turn on Banded Columns, turn off Banded Rows". Hãy kiểm tra đúng các ô tích trong Table Style Options.',
        checkpointQuestion: {
          question: 'Khi muốn làm nổi bật hàng đầu tiên của bảng biểu với nền màu đậm hơn để làm tiêu đề các cột, tùy chọn nào trong Table Style Options cần được bật?',
          options: [
            'Banded Rows',
            'Header Row',
            'First Column',
            'Total Row'
          ],
          correctIndex: 1,
          explanation: 'Tùy chọn "Header Row" áp dụng định dạng đặc biệt (thường là màu nền đậm hơn và chữ in hoa/in đậm) cho hàng trên cùng của bảng để phân biệt tiêu đề cột.'
        }
      },
      {
        id: 'ppt-4-2',
        title: 'Chỉnh sửa cấu trúc bảng: Thêm, xóa, gộp ô (Merge & Split Cells)',
        concept: 'Thẻ ngữ cảnh Layout (Table Tools) cung cấp các công cụ kiểm soát chi tiết về kích thước hàng cột, căn lề văn bản trong ô và phân tách/gộp các ô của bảng.',
        keyPoints: [
          'Thêm hàng/cột: Thẻ Layout > nhóm Rows & Columns > Insert Above (chèn lên trên), Insert Below (chèn xuống dưới), Insert Left (chèn sang trái), Insert Right (chèn sang phải).',
          'Gộp ô (Merge Cells): Quét chọn các ô liền kề > thẻ Layout > nhóm Merge > Merge Cells.',
          'Tách ô (Split Cells): Chọn ô cần tách > thẻ Layout > Split Cells > chỉ định số dòng và cột muốn chia.',
          'Căn lề ô (Cell Alignment): Hỗ trợ 9 vị trí căn chỉnh ngang/dọc (Align Top, Center Vertically, Align Bottom, Align Left, Center, Align Right).'
        ],
        shortcut: 'Chuột phải vào ô trong bảng để mở nhanh trình đơn ngữ cảnh chèn/xóa hàng cột và gộp ô.',
        examTip: 'Trong bài thi MOS, luôn chú ý yêu cầu "Distribute Rows" (chia đều chiều cao các dòng) hoặc "Distribute Columns" (chia đều chiều rộng các cột) trong nhóm Cell Size.',
        checkpointQuestion: {
          question: 'Để gộp 3 ô liên tiếp trên cùng một hàng của bảng thành một ô duy nhất để chứa tiêu đề chính, thao tác nào sau đây là chính xác?',
          options: [
            'Xóa vách ngăn giữa các ô bằng phím Delete',
            'Chọn 3 ô đó > Thẻ Table Layout > nhóm Merge > chọn "Merge Cells"',
            'Vào thẻ Table Design > Eraser',
            'Chọn Split Cells rồi nhập số 1'
          ],
          correctIndex: 1,
          explanation: 'Lệnh "Merge Cells" trên thẻ Table Layout kết hợp nhiều ô được chọn liền kề thành một ô duy nhất.'
        }
      },
      {
        id: 'ppt-4-3',
        title: 'Tạo Biểu đồ (Charts) và chỉnh sửa dữ liệu Excel nhúng',
        concept: 'Biểu đồ trực quan hóa số liệu giúp khán giả nắm bắt xu hướng và tỷ lệ nhanh chóng. Khi chèn biểu đồ trong PowerPoint, một bảng tính Excel nhỏ gọn sẽ xuất hiện để bạn nhập số liệu thực tế.',
        keyPoints: [
          'Chèn biểu đồ: Thẻ Insert > nhóm Illustrations > Chart > chọn dạng biểu đồ (Clustered Column, Line, Pie, Bar...).',
          'Cửa sổ Excel nhúng: Điền dữ liệu các Series (chuỗi số liệu) và Categories (danh mục so sánh). Đóng cửa sổ Excel khi nhập xong.',
          'Chỉnh sửa dữ liệu đã có: Chọn biểu đồ > thẻ Chart Design > nhóm Data > chọn Edit Data (mở bảng tính Excel để sửa số liệu).',
          'Đổi hàng thành cột: Nút Switch Row/Column giúp hoán đổi trục hoành và các chuỗi số liệu trên biểu đồ.'
        ],
        shortcut: 'Alt + N, C để mở nhanh hộp thoại chèn biểu đồ Insert Chart.',
        examTip: 'Đề thi MOS thường yêu cầu thay đổi kiểu biểu đồ (Change Chart Type) hoặc chỉnh sửa số liệu của một dòng cụ thể trong bảng tính Edit Data.',
        checkpointQuestion: {
          question: 'Khi muốn cập nhật hoặc sửa lại các con số dữ liệu của một biểu đồ đã vẽ sẵn trên slide, nút lệnh nào trong thẻ Chart Design cần được chọn?',
          options: [
            'Add Chart Element',
            'Quick Layout',
            'Edit Data',
            'Change Chart Type'
          ],
          correctIndex: 2,
          explanation: 'Nút "Edit Data" trên thẻ Chart Design sẽ mở lại bảng tính Excel chứa dữ liệu nguồn của biểu đồ để bạn chỉnh sửa con số.'
        }
      },
      {
        id: 'ppt-4-4',
        title: 'Tùy biến thành phần biểu đồ (Chart Elements & Styles)',
        concept: 'Các thành phần của biểu đồ (Chart Elements) như Tiêu đề (Chart Title), Nhãn dữ liệu (Data Labels), Bảng dữ liệu (Data Table), Chú giải (Legend) giúp số liệu minh bạch và dễ giải thích.',
        keyPoints: [
          'Thêm/bớt thành phần: Nhấp vào biểu tượng dấu cộng (+) màu xanh ở góc trên bên phải biểu đồ (hoặc thẻ Chart Design > Add Chart Element).',
          'Vị trí chú giải (Legend): Có thể đặt ở Top (trên), Bottom (dưới), Left (trái), Right (phải).',
          'Hiển thị giá trị cụ thể (Data Labels): Hiển thị số liệu trực tiếp trên đỉnh các cột hoặc các lát bánh pie.',
          'Đổi kiểu dáng: Thẻ Chart Design > nhóm Chart Styles > chọn mẫu phong cách hiển thị có sẵn, hoặc nhấp nút Change Colors để chọn tông màu đồng bộ với Theme.'
        ],
        shortcut: 'Nhấp chuột vào biểu tượng cây cọ vẽ cạnh biểu đồ để chọn nhanh Chart Style và Color Scheme.',
        examTip: 'Bài thi MOS hay có yêu cầu: "Add Data Labels to the Outside End of the chart bars" hoặc "Position the Legend at the Bottom of the chart".',
        checkpointQuestion: {
          question: 'Muốn hiển thị con số giá trị cụ thể ngay trên đầu mỗi cột của biểu đồ hình cột, thành phần nào cần được bật trong Add Chart Element?',
          options: [
            'Gridlines',
            'Legend',
            'Data Labels',
            'Axis Titles'
          ],
          correctIndex: 2,
          explanation: '"Data Labels" hiển thị chính xác giá trị số liệu tương ứng trên từng cột biểu đồ, điểm dữ liệu hoặc lát cắt biểu đồ tròn.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-4-1',
        title: 'Chuyển bố cục sang Two Content để chứa Bảng và Biểu đồ',
        instruction: 'Trên thanh Ribbon tại thẻ Home, nhấp vào Layout và chọn kiểu Two Content.',
        hint: 'Nhấp Home > Layout > Two Content.',
        targetType: 'ribbon-action',
        actionKey: 'pp-change-layout-twocontent'
      },
      {
        id: 'ptask-4-2',
        title: 'Chuyển đổi danh sách số liệu thành SmartArt',
        instruction: 'Tại thẻ Home, nhấn nút Convert to SmartArt để biểu diễn dữ liệu trực quan hơn.',
        hint: 'Nhấp Home > nhóm Paragraph > Convert to SmartArt.',
        targetType: 'ribbon-action',
        actionKey: 'pp-convert-smartart'
      },
      {
        id: 'ptask-4-3',
        title: 'Phân bổ đều khoảng cách đối tượng',
        instruction: 'Sử dụng công cụ Distribute Horizontally trên thanh Ribbon để các thành phần trên slide được dàn đều.',
        hint: 'Nhấp Insert > Illustrations > Distribute Horizontally.',
        targetType: 'ribbon-action',
        actionKey: 'pp-distribute-horizontally'
      }
    ],
    quiz: [
      {
        id: 'pq-4-1',
        question: 'Khi con trỏ soạn thảo đang nằm ở ô góc dưới cùng bên phải của bảng trong PowerPoint, phím nào sẽ tự động tạo thêm một hàng mới?',
        options: ['Phím Enter', 'Phím Space', 'Phím Tab', 'Phím Shift'],
        correctIndex: 2,
        explanation: 'Nhấn phím Tab tại ô cuối cùng của bảng sẽ tạo thêm một hàng mới ở dưới cùng với định dạng kế thừa từ hàng trước.'
      },
      {
        id: 'pq-4-2',
        question: 'Trong thiết kế Bảng biểu (Table Design), tùy chọn "Banded Rows" mang lại tác dụng gì cho người xem?',
        options: [
          'In đậm toàn bộ các hàng',
          'Tô màu xen kẽ giữa các hàng để mắt dễ theo dõi số liệu không bị lệch dòng',
          'Khóa không cho người khác chỉnh sửa bảng',
          'Tự động tính tổng cho các hàng'
        ],
        correctIndex: 1,
        explanation: '"Banded Rows" áp dụng màu nền xen kẽ (sáng/tối so le) cho các dòng giúp người đọc dễ dàng đối chiếu số liệu theo chiều ngang.'
      },
      {
        id: 'pq-4-3',
        question: 'Muốn thay đổi vị trí của phần Chú giải (Legend) từ bên phải (Right) xuống dưới đáy biểu đồ (Bottom), ta vào đâu?',
        options: [
          'Kéo thả tùy tiện bằng chuột',
          'Thẻ Chart Design > Add Chart Element > Legend > chọn Bottom',
          'Vào thẻ View > Slide Master',
          'Vào File > Options'
        ],
        correctIndex: 1,
        explanation: 'Add Chart Element > Legend cung cấp các vị trí chuẩn mực: Top, Bottom, Left, Right giúp biểu đồ luôn cân đối.'
      },
      {
        id: 'pq-4-4',
        question: 'Để thay đổi dạng biểu đồ từ hình cột (Column) sang biểu đồ hình tròn (Pie) mà không làm mất dữ liệu đã nhập, ta dùng lệnh nào?',
        options: [
          'Xóa biểu đồ cũ và vẽ lại cái mới',
          'Thẻ Chart Design > Change Chart Type',
          'Thẻ Chart Design > Switch Row/Column',
          'Thẻ Format > Reset to Match Style'
        ],
        correctIndex: 1,
        explanation: 'Nút "Change Chart Type" cho phép chuyển đổi tức thời giữa các loại biểu đồ khác nhau mà vẫn giữ nguyên vẹn toàn bộ bảng số liệu gốc.'
      }
    ]
  },

  // =========================================================================
  // BÀI 5: THÊM CÁC YẾU TỐ ĐA PHƯƠNG TIỆN (SHAPES, MEDIA, SMARTART & 3D)
  // =========================================================================
  {
    id: 'pp-lesson-5',
    moduleId: 'powerpoint',
    order: 5,
    title: 'Bài 5: Thêm các yếu tố đa phương tiện (Shapes, Media, SmartArt & 3D)',
    summary: 'Chèn và tùy biến hình khối Shapes, chỉnh sửa điểm Edit Points, tối ưu hóa hình ảnh (Crop, Picture Styles, Artistic Effects, Remove Background), tạo đồ họa thông minh SmartArt, mô hình 3D Models và gán siêu liên kết Hyperlinks.',
    durationMinutes: 50,
    theories: [
      {
        id: 'ppt-5-1',
        title: 'Vẽ và tùy biến hình khối (Shapes & Edit Points)',
        concept: 'Shapes cung cấp thư viện các khối hình học, mũi tên chỉ dẫn, biểu tượng chú thích và băng rôn (Banners). Bạn có thể kết hợp các hình khối hoặc chỉnh sửa các điểm nút (Edit Points) để tạo ra các hình đồ họa độc đáo.',
        keyPoints: [
          'Vẽ hình: Thẻ Insert > nhóm Illustrations > Shapes > chọn hình mong muốn rồi kéo rê trên slide.',
          'Giữ phím Shift khi vẽ để tạo hình vuông hoàn hảo hoặc hình tròn đều tuyệt đối.',
          'Điểm điều chỉnh màu vàng (Adjustment Handle): Kéo để thay đổi độ bo góc của hình chữ nhật hoặc độ nhọn của mũi tên.',
          'Edit Points: Chuột phải vào hình > Edit Points để chỉnh sửa trực tiếp các đỉnh và đường cong tiếp tuyến của hình dạng vector.',
          'Thêm chữ vào hình khối: Nhấp chuột thẳng vào hình và gõ nội dung (không cần chèn thêm Text Box).'
        ],
        shortcut: 'Giữ phím Shift khi vẽ hình để khóa tỷ lệ 1:1; giữ phím Ctrl để vẽ đối xứng từ tâm ra ngoài.',
        examTip: 'Đề thi MOS thường yêu cầu đổi hình dạng có sẵn sang hình dạng khác: Thẻ Shape Format > Edit Shape > Change Shape > chọn hình dạng mới theo yêu cầu.',
        checkpointQuestion: {
          question: 'Khi vẽ một hình chữ nhật bo tròn góc, ta muốn thay đổi độ cong của 4 góc thì thực hiện thao tác nào?',
          options: [
            'Kéo các nút tròn màu trắng ở góc hình',
            'Kéo điểm nút điều chỉnh hình thoi màu vàng (Yellow handle) trên cạnh hình',
            'Vào thẻ View > Gridlines',
            'Nhấn tổ hợp phím Ctrl + Shift + R'
          ],
          correctIndex: 1,
          explanation: 'Nút điều chỉnh màu vàng (Adjustment Handle) trên các hình Shapes dùng để thay đổi đặc tính hình học riêng biệt như độ bo góc hoặc độ dày mũi tên.'
        }
      },
      {
        id: 'ppt-5-2',
        title: 'Hiệu chỉnh hình ảnh: Crop, Picture Styles và Artistic Effects',
        concept: 'Hình ảnh minh họa chất lượng cao làm tăng sức thuyết phục cho bài trình bày. PowerPoint cung cấp bộ công cụ xử lý ảnh mạnh mẽ như cắt cúp theo hình khối, tách nền và bộ lọc nghệ thuật.',
        keyPoints: [
          'Chèn ảnh: Thẻ Insert > Pictures (This Device hoặc Stock Images/Online Pictures).',
          'Cắt cúp ảnh (Crop): Thẻ Picture Format > nhóm Size > Crop. Chọn "Crop to Shape" để cắt ảnh lọt vào bên trong một hình khối (hình tròn, ngôi sao...).',
          'Picture Styles: Áp dụng khung viền, bóng đổ (Shadow), phản chiếu (Reflection) và xoay 3D có sẵn.',
          'Artistic Effects: Áp dụng các bộ lọc hiệu ứng nghệ thuật như tranh vẽ chì, tranh sơn dầu, mờ nét hoặc phấn màu.',
          'Văn bản thay thế (Alt Text): Bắt buộc cho tính năng trợ năng; mô tả ngắn gọn nội dung bức ảnh cho người khiếm thị đọc qua phần mềm đọc màn hình.'
        ],
        shortcut: 'Alt + J, P để truy cập nhanh thẻ ngữ cảnh Picture Format khi đang chọn một bức ảnh.',
        examTip: 'Trong bài thi MOS luôn có câu hỏi thêm Alt Text cho hình ảnh hoặc biểu đồ: Chọn ảnh > Picture Format > Alt Text > nhập dòng mô tả vào khung Description.',
        checkpointQuestion: {
          question: 'Làm thế nào để cắt một bức ảnh phong cảnh hình chữ nhật thành hình tròn elip mà không làm biến dạng tỷ lệ ảnh gốc?',
          options: [
            'Dùng công cụ vẽ hình Oval đè lên bức ảnh',
            'Chọn ảnh > Thẻ Picture Format > bấm mũi tên dưới nút Crop > chọn "Crop to Shape" > chọn hình Oval',
            'Vào thẻ Picture Format > Artistic Effects',
            'Xóa phông nền ảnh bằng Remove Background'
          ],
          correctIndex: 1,
          explanation: '"Crop to Shape" tự động cắt ảnh khớp theo đường viền của bất kỳ hình khối Shape nào được chọn mà giữ nguyên nội dung bên trong.'
        }
      },
      {
        id: 'ppt-5-3',
        title: 'Đồ họa thông minh SmartArt và mô hình 3D Models',
        concept: 'SmartArt biến danh sách chữ nhàm chán thành các sơ đồ quy trình (Process), phân cấp (Hierarchy/Org Chart) hoặc chu trình (Cycle). Mô hình 3D Models mang lại khả năng xoay quan sát 360 độ chân thực.',
        keyPoints: [
          'Chuyển danh sách thành SmartArt: Chọn khung văn bản > thẻ Home > Convert to SmartArt > chọn kiểu sơ đồ thích hợp.',
          'Ngăn nhập liệu (Text Pane): Bấm vào mũi tên ở mép trái SmartArt để mở bảng nhập chữ phân cấp nhanh chóng.',
          'Đổi bảng màu SmartArt: Thẻ SmartArt Design > Change Colors > chọn bảng màu Colorful để các khối có màu sắc khác nhau dễ phân biệt.',
          'Chèn mô hình 3D: Thẻ Insert > 3D Models (From This Device hoặc Stock 3D Models). Sử dụng nút xoay 3D ở chính giữa mô hình để xoay góc nhìn theo mọi hướng.'
        ],
        shortcut: 'Bấm phím Tab trong Text Pane của SmartArt để thụt cấp (Demote); Shift + Tab để nâng cấp (Promote).',
        examTip: 'Đề thi MOS thường yêu cầu: "Convert the bulleted list on slide 3 to a [Tên SmartArt, ví dụ: Vertical Process] SmartArt graphic and apply the [Tên SmartArt Style] style".',
        checkpointQuestion: {
          question: 'Để mỗi nhánh hình khối trong sơ đồ SmartArt có một màu sắc phân biệt khác nhau thay vì đơn điệu một màu, công cụ nào cần được áp dụng?',
          options: [
            'Shape Fill từng hình thủ công',
            'Thẻ SmartArt Design > nhóm SmartArt Styles > chọn nút "Change Colors" và chọn nhóm Colorful',
            'Vào thẻ Design > Variants',
            'Chuyển sang chế độ Slide Master'
          ],
          correctIndex: 1,
          explanation: 'Nút "Change Colors" trên thẻ SmartArt Design cung cấp các bộ phối màu Colorful, tự động gán các sắc thái màu khác nhau cho từng nhánh của sơ đồ.'
        }
      },
      {
        id: 'ppt-5-4',
        title: 'Tạo siêu liên kết (Hyperlinks) và nút tương tác Action Buttons',
        concept: 'Hyperlinks và Action Buttons biến bài thuyết trình thành một ấn phẩm tương tác, cho phép nhảy nhanh đến một slide cụ thể, mở trang web ngoài hoặc kích hoạt âm thanh/chương trình khác.',
        keyPoints: [
          'Chèn Hyperlink: Chọn văn bản hoặc đối tượng > thẻ Insert > nhóm Links > Link (hoặc bấm Ctrl + K).',
          'Các loại liên kết: Existing File or Web Page (địa chỉ web hoặc file ngoài), Place in This Document (chuyển tới một slide cụ thể trong bài), Create New Document, E-mail Address.',
          'Action Buttons: Thẻ Insert > Shapes > cuộn xuống nhóm Action Buttons ở dưới cùng (nút Home, Back/Previous, Forward/Next, Help...).',
          'Hộp thoại Action Settings: Cung cấp tùy chọn khi nhấp chuột (Mouse Click) hoặc rê chuột qua (Mouse Over).'
        ],
        shortcut: 'Ctrl + K là phím tắt tiêu chuẩn toàn cầu để mở hộp thoại Insert Hyperlink trong Office.',
        examTip: 'Đề thi MOS thường yêu cầu: "Add a hyperlink to the text \'Visit our website\' that links to \'http://example.com\'" hoặc liên kết tới một slide cụ thể trong bài.',
        checkpointQuestion: {
          question: 'Phím tắt nào giúp mở nhanh hộp thoại chèn liên kết Hyperlink cho đối tượng đang chọn trong PowerPoint?',
          options: ['Ctrl + H', 'Ctrl + L', 'Ctrl + K', 'Ctrl + Shift + K'],
          correctIndex: 2,
          explanation: 'Ctrl + K là phím tắt kinh điển để chèn liên kết Hyperlink trong toàn bộ các ứng dụng Microsoft Office.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-5-1',
        title: 'Chuyển danh sách chữ thành SmartArt',
        instruction: 'Trên thanh công cụ thẻ Home, bấm vào biểu tượng Convert to SmartArt để tạo sơ đồ tư duy trực quan.',
        hint: 'Nhấp Home > nhóm Paragraph > Convert to SmartArt.',
        targetType: 'ribbon-action',
        actionKey: 'pp-convert-smartart'
      },
      {
        id: 'ptask-5-2',
        title: 'Đổi bảng màu trực quan cho SmartArt',
        instruction: 'Trên thanh Ribbon tại thẻ Insert, nhấp chọn Change Colors để phối lại màu sắc sinh động cho sơ đồ.',
        hint: 'Nhấp Insert > Illustrations > Change Colors.',
        targetType: 'ribbon-action',
        actionKey: 'pp-change-smartart-colors'
      },
      {
        id: 'ptask-5-3',
        title: 'Chèn siêu liên kết tương tác (Hyperlink)',
        instruction: 'Chọn thẻ Insert trên thanh Ribbon và bấm nút Insert Link để tạo đường liên kết thông minh.',
        hint: 'Nhấp Insert > nhóm Links > Insert Link (Ctrl + K).',
        targetType: 'ribbon-action',
        actionKey: 'pp-insert-hyperlink'
      }
    ],
    quiz: [
      {
        id: 'pq-5-1',
        question: 'Khi muốn vẽ một hình tròn hoàn hảo hoặc một đường thẳng ngang tuyệt đối bằng công cụ Shapes, ta cần giữ phím nào trong lúc rê chuột?',
        options: ['Giữ phím Alt', 'Giữ phím Ctrl', 'Giữ phím Shift', 'Giữ phím Tab'],
        correctIndex: 2,
        explanation: 'Giữ phím Shift trong khi vẽ hình Shapes giúp khóa tỷ lệ khung hình 1:1, tạo ra hình tròn đều, hình vuông vắn hoặc đường thẳng tuyệt đối.'
      },
      {
        id: 'pq-5-2',
        question: 'Tính năng Alt Text (Alternative Text) cho hình ảnh và biểu đồ trong PowerPoint có ý nghĩa quan trọng nhất đối với điều gì?',
        options: [
          'Tăng độ phân giải cho ảnh in ấn',
          'Hỗ trợ khả năng tiếp cận (Accessibility) cho người khiếm thị đọc nội dung qua phần mềm chuyên dụng',
          'Giảm dung lượng tệp tin bài thuyết trình',
          'Tự động sao lưu ảnh lên dịch vụ đám mây'
        ],
        correctIndex: 1,
        explanation: 'Alt Text là yêu cầu cốt lõi về trợ năng (Accessibility); cung cấp mô tả văn bản để phần mềm đọc màn hình truyền đạt lại cho người khiếm thị.'
      },
      {
        id: 'pq-5-3',
        question: 'Muốn tạo một nút điều hướng khi nhấp chuột vào sẽ đưa người nghe quay trở về ngay trang bìa (slide đầu tiên), ta nên chèn đối tượng nào?',
        options: [
          'Một khung Text Box gõ chữ Quay về',
          'Chèn hình Action Button: Home từ thư viện Shapes và chọn Hyperlink to: First Slide',
          'Tạo thêm một Slide Master mới',
          'Chèn một bảng Table có 1 ô'
        ],
        correctIndex: 1,
        explanation: 'Action Button: Home nằm trong thư viện Shapes được thiết lập sẵn hành vi đưa người dùng về slide đầu tiên một cách trực quan và đồng bộ.'
      },
      {
        id: 'pq-5-4',
        question: 'Điểm khác biệt nổi bật của đối tượng 3D Model so với hình ảnh thông thường (Pictures) trong PowerPoint là gì?',
        options: [
          '3D Model không thể đổi kích thước',
          '3D Model có thể xoay 360 độ tự do trong không gian 3 chiều để quan sát mọi góc độ',
          '3D Model bắt buộc phải có âm thanh đi kèm',
          '3D Model chỉ xem được trên điện thoại'
        ],
        correctIndex: 1,
        explanation: 'Mô hình 3D cho phép người dùng xoay lật đa chiều (Tilt, Rotate 360) để trình chiếu các chi tiết giải phẫu hoặc kiến trúc từ mọi góc nhìn thực tế.'
      }
    ]
  },

  // =========================================================================
  // BÀI 6: NÂNG CAO BÀI THUYẾT TRÌNH (TRANSITIONS & ANIMATIONS)
  // =========================================================================
  {
    id: 'pp-lesson-6',
    moduleId: 'powerpoint',
    order: 6,
    title: 'Bài 6: Nâng cao bài thuyết trình (Transitions & Animations)',
    summary: 'Phân biệt chuyển trang Transitions và diễn hoạt đối tượng Animations, khai thác hiệu ứng điện ảnh Morph, 4 nhóm hiệu ứng Entrance, Emphasis, Exit, Motion Paths, bảng điều khiển Animation Pane, thiết lập kích hoạt Trigger và sao chép hiệu ứng Animation Painter.',
    durationMinutes: 50,
    theories: [
      {
        id: 'ppt-6-1',
        title: 'Hiệu ứng chuyển trang (Slide Transitions) và hiệu ứng đột phá Morph',
        concept: 'Transition là hiệu ứng xảy ra khi di chuyển từ slide này sang slide tiếp theo. Hiệu ứng Morph là bước đột phá trong PowerPoint, tự động phân tích và tạo chuyển động biến hình mượt mà cho các đối tượng cùng tên giữa 2 slide.',
        keyPoints: [
          'Áp dụng Transition: Chọn slide > thẻ Transitions > chọn hiệu ứng trong thư viện (Fade, Push, Wipe, Split, Morph...).',
          'Tùy chọn Effect Options: Thay đổi hướng di chuyển của hiệu ứng (từ trái, từ phải, từ trên xuống...).',
          'Thiết lập thời gian (Timing): Duration kiểm soát tốc độ chạy của hiệu ứng (tính bằng giây).',
          'Nút Apply to All: Áp dụng cùng một kiểu hiệu ứng và thời gian cho toàn bộ các slide trong bài thuyết trình.',
          'Hiệu ứng Morph: Nhân bản (Duplicate) slide, sau đó thay đổi kích cỡ, vị trí hoặc màu sắc của đối tượng ở slide thứ hai; áp dụng Morph cho slide thứ hai để tạo hoạt cảnh mượt mà.'
        ],
        shortcut: 'Alt + T để mở thẻ Transitions; chọn Apply to All để đồng bộ hiệu ứng chuyển trang.',
        examTip: 'Đề thi MOS thường yêu cầu: "Apply the [Tên Transition, ví dụ: Push] transition to all slides with a duration of 1.50 seconds". Nhớ bấm "Apply to All" sau khi chỉnh Duration.',
        checkpointQuestion: {
          question: 'Hiệu ứng chuyển trang Morph tạo ra chuyển động biến hình mượt mà dựa trên nguyên lý nào?',
          options: [
            'Cần phải kết nối mạng Internet để xử lý đám mây',
            'Tự động so sánh vị trí, kích thước và hình dáng của các đối tượng giống nhau giữa 2 slide liên tiếp',
            'Bắt buộc phải chuyển đổi slide thành video MP4',
            'Chỉ áp dụng được cho chữ cái, không áp dụng cho hình khối'
          ],
          correctIndex: 1,
          explanation: 'Morph tự động dò tìm các đối tượng trùng khớp trên slide trước và slide sau, rồi tính toán chuyển động biến đổi vị trí, kích cỡ mượt mà như một thước phim hoạt hình.'
        }
      },
      {
        id: 'ppt-6-2',
        title: 'Bốn nhóm hiệu ứng hoạt họa đối tượng (Animations)',
        concept: 'Animation là hiệu ứng diễn hoạt áp dụng cho từng đối tượng cụ thể (chữ, ảnh, khối, biểu đồ) bên trong một trang slide. PowerPoint phân loại thành 4 nhóm màu sắc đặc trưng.',
        keyPoints: [
          'Entrance (Màu xanh lá): Hiệu ứng xuất hiện của đối tượng từ ngoài vào màn hình (Appear, Fade, Fly In, Zoom...).',
          'Emphasis (Màu vàng): Hiệu ứng nhấn mạnh đối tượng đang có sẵn trên màn hình (Pulse, Spin, Grow/Shrink, Color Wave...).',
          'Exit (Màu đỏ): Hiệu ứng biến mất của đối tượng rời khỏi màn hình (Disappear, Fade, Fly Out...).',
          'Motion Paths: Đường dẫn chuyển động đưa đối tượng di chuyển từ điểm A đến điểm B theo đường thẳng, vòng cung hoặc đường tự vẽ (Custom Path).',
          'Thêm hiệu ứng thứ hai: BẮT BUỘC dùng nút Add Animation (nếu chọn trực tiếp từ bảng hiệu ứng sẽ làm mất hiệu ứng thứ nhất).'
        ],
        shortcut: 'Alt + A để mở thẻ Animations trên thanh công cụ Ribbon.',
        examTip: 'Bẫy thi MOS phổ biến nhất: Để gán thêm hiệu ứng thứ hai cho cùng một đối tượng, bạn PHẢI dùng nút "Add Animation" trong nhóm Advanced Animation, không được chọn ở khung thư viện chính.',
        checkpointQuestion: {
          question: 'Khi muốn gán thêm một hiệu ứng biến mất (Exit) cho một hình ảnh đã có sẵn hiệu ứng xuất hiện (Entrance), ta phải bấm vào nút lệnh nào?',
          options: [
            'Chọn trực tiếp hiệu ứng Exit từ danh mục Animation chính',
            'Bấm nút "Add Animation" trong nhóm Advanced Animation',
            'Bấm nút "Animation Pane"',
            'Bấm nút "Trigger"'
          ],
          correctIndex: 1,
          explanation: 'Nếu chọn trực tiếp trong danh mục Animation thì hiệu ứng mới sẽ ghi đè lên hiệu ứng cũ. Nút "Add Animation" cho phép cộng dồn nhiều hiệu ứng trên cùng một đối tượng.'
        }
      },
      {
        id: 'ppt-6-3',
        title: 'Bảng điều khiển Animation Pane và tùy chọn khởi chạy Timing',
        concept: 'Animation Pane là trung tâm chỉ huy kiểm soát trình tự thời gian, thời lượng và cách kích hoạt của tất cả các hiệu ứng diễn hoạt trên trang slide.',
        keyPoints: [
          'Mở Animation Pane: Thẻ Animations > nhóm Advanced Animation > Animation Pane (ngăn hiển thị danh sách hiệu ứng ở mép phải).',
          'Khởi chạy hiệu ứng (Start): On Click (chờ người dùng nhấp chuột), With Previous (chạy đồng thời cùng lúc với hiệu ứng trước), After Previous (tự động chạy ngay khi hiệu ứng trước kết thúc).',
          'Thời lượng & Độ trễ: Duration (thời gian hiệu ứng diễn ra), Delay (thời gian chờ trước khi hiệu ứng bắt đầu chạy).',
          'Thay đổi thứ tự: Kéo thả các dòng hiệu ứng lên/xuống trong Animation Pane hoặc bấm nút Move Earlier / Move Later.',
          'Sao chép hiệu ứng (Animation Painter): Sao chép toàn bộ các hiệu ứng từ đối tượng này sang đối tượng khác chỉ bằng một cú nhấp chuột.'
        ],
        shortcut: 'Alt + Shift + D để kích hoạt công cụ sao chép hoạt cảnh Animation Painter.',
        examTip: 'Đề thi MOS luôn kiểm tra cấu hình Start: "Configure the animation to start After Previous with a Delay of 0.5 seconds".',
        checkpointQuestion: {
          question: 'Để một dòng chữ tự động xuất hiện ngay sau khi hình ảnh vừa hoàn thành hiệu ứng mà người thuyết trình KHÔNG cần bấm chuột, tùy chọn Start nào cần thiết lập?',
          options: [
            'Start: On Click',
            'Start: With Previous',
            'Start: After Previous',
            'Start: By Paragraph'
          ],
          correctIndex: 2,
          explanation: '"After Previous" ra lệnh cho hiệu ứng tự động kích hoạt ngay thời điểm hiệu ứng liền trước nó kết thúc thời gian chạy.'
        }
      },
      {
        id: 'ppt-6-4',
        title: 'Chèn và quản lý tệp Media (Audio & Video)',
        concept: 'Chèn video và âm thanh làm cho bài trình chiếu sống động. PowerPoint 2019 cho phép cắt tỉa đoạn phim (Trim Video), đặt ảnh đại diện (Poster Frame) và thiết lập phát nhạc tự động xuyên suốt các slide.',
        keyPoints: [
          'Chèn video: Thẻ Insert > nhóm Media > Video (This Device hoặc Online Video).',
          'Chèn âm thanh: Thẻ Insert > nhóm Media > Audio (Audio on My PC hoặc Record Audio).',
          'Thẻ Video/Audio Playback: Cắt bớt đoạn thừa với Trim Video/Trim Audio; thiết lập âm lượng Volume (Low, Medium, High, Mute).',
          'Tùy chọn phát: Start (Automatically hoặc When Clicked On), Play Full Screen, Loop until Stopped (lặp lại liên tục cho đến khi dừng).',
          'Play in Background: Nút một chạm cho âm thanh, giúp nhạc nền phát tự động xuyên suốt từ slide đầu đến slide cuối bài thuyết trình.'
        ],
        shortcut: 'Alt + J, N để mở thẻ ngữ cảnh Playback khi đang chọn một tệp âm thanh hoặc video.',
        examTip: 'MOS hay có yêu cầu: "Set the audio clip to play across all slides and hide the audio icon during the show". Chọn nút Play in Background hoặc tích ô "Play Across Slides" và "Hide During Show".',
        checkpointQuestion: {
          question: 'Muốn một đoạn nhạc nền tự động phát từ slide đầu tiên xuyên suốt toàn bộ các slide trong bài và ẩn biểu tượng chiếc loa khi trình chiếu, tùy chọn nhanh nào được sử dụng?',
          options: [
            'Loop until Stopped',
            'Play in Background',
            'Trim Audio',
            'Fade Duration'
          ],
          correctIndex: 1,
          explanation: 'Nút "Play in Background" trong thẻ Audio Tools Playback tự động bật cả 3 tính năng: Tự phát (Automatically), phát xuyên suốt các slide (Play Across Slides) và ẩn biểu tượng loa (Hide During Show).'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-6-1',
        title: 'Áp dụng hiệu ứng chuyển trang Morph',
        instruction: 'Trên thanh Ribbon tại thẻ Transitions, nhấp chọn hiệu ứng Morph để tạo chuyển động biến hình mượt mà giữa các slide.',
        hint: 'Nhấp Transitions > nhóm Transition to This Slide > Morph.',
        targetType: 'ribbon-action',
        actionKey: 'pp-trans-morph'
      },
      {
        id: 'ptask-6-2',
        title: 'Đồng bộ hiệu ứng cho tất cả các slide (Apply to All)',
        instruction: 'Nhấp vào nút Apply to All trong nhóm Timing trên thẻ Transitions để đồng bộ hiệu ứng chuyển trang cho toàn bài.',
        hint: 'Nhấp Transitions > nhóm Timing > Apply to All.',
        targetType: 'ribbon-action',
        actionKey: 'pp-trans-apply-all'
      },
      {
        id: 'ptask-6-3',
        title: 'Gán hiệu ứng xuất hiện Fade và mở Animation Pane',
        instruction: 'Chuyển sang thẻ Animations, gán hiệu ứng Fade cho đối tượng và nhấp mở bảng quản lý Animation Pane.',
        hint: 'Nhấp Animations > chọn Fade, sau đó nhấn nút Animation Pane.',
        targetType: 'ribbon-action',
        actionKey: 'pp-open-animation-pane'
      }
    ],
    quiz: [
      {
        id: 'pq-6-1',
        question: 'Sự khác biệt căn bản giữa Transition và Animation trong Microsoft PowerPoint là gì?',
        options: [
          'Transition áp dụng cho toàn bộ trang slide; Animation áp dụng cho từng đối tượng cụ thể bên trong slide',
          'Transition chỉ dùng cho hình ảnh; Animation chỉ dùng cho văn bản chữ',
          'Transition có màu đỏ; Animation có màu xanh lá cây',
          'Transition bắt buộc phải có loa âm thanh đi kèm'
        ],
        correctIndex: 0,
        explanation: 'Transition là sự chuyển dịch giữa các trang slide; Animation là diễn hoạt chuyển động của các thành phần (text, shapes, ảnh) bên trong một trang slide.'
      },
      {
        id: 'pq-6-2',
        question: 'Trong thẻ Animations, nhóm hiệu ứng màu VÀNG (Emphasis Effects) có chức năng gì?',
        options: [
          'Làm cho đối tượng xuất hiện vào trong slide',
          'Nhấn mạnh đối tượng đang hiển thị trên slide (như rung lắc, đổi màu, quay tròn)',
          'Làm cho đối tượng biến mất khỏi slide',
          'Di chuyển đối tượng từ vị trí này sang vị trí khác'
        ],
        correctIndex: 1,
        explanation: 'Nhóm Emphasis (màu vàng) tập trung thu hút sự chú ý vào đối tượng đang có mặt trên màn hình mà không làm xuất hiện hay biến mất đối tượng đó.'
      },
      {
        id: 'pq-6-3',
        question: 'Công cụ nào trong PowerPoint cho phép sao chép nhanh toàn bộ các hiệu ứng diễn hoạt từ đối tượng này sang đối tượng khác tương tự như Format Painter?',
        options: ['Effect Options', 'Animation Painter', 'Trigger', 'Add Animation'],
        correctIndex: 1,
        explanation: 'Animation Painter sao chép nguyên vẹn loại hiệu ứng, thời gian duration, độ trễ delay và cách khởi chạy sang đối tượng mới chỉ bằng một cú nhấp.'
      },
      {
        id: 'pq-6-4',
        question: 'Khi thiết lập hiệu ứng chuyển trang, nút "Apply to All" có công dụng gì?',
        options: [
          'Xóa toàn bộ hiệu ứng trên mọi slide',
          'Áp dụng kiểu hiệu ứng và các thông số thời gian hiện tại cho tất cả các slide trong toàn bộ bài trình chiếu',
          'Chạy thử toàn bộ các slide từ đầu đến cuối',
          'Lưu bài trình chiếu thành video'
        ],
        correctIndex: 1,
        explanation: '"Apply to All" nhân bản thiết lập Transition hiện hành sang tất cả các slide khác trong bài, tạo tính đồng nhất cho bài thuyết trình.'
      }
    ]
  },

  // =========================================================================
  // BÀI 7: CHUẨN BỊ TRÌNH CHIẾU (PRESENTER VIEW & DELIVERY)
  // =========================================================================
  {
    id: 'pp-lesson-7',
    moduleId: 'powerpoint',
    order: 7,
    title: 'Bài 7: Chuẩn bị trình chiếu (Presenter View & Delivery)',
    summary: 'Sử dụng khung ghi chú Notes Pane cho diễn giả, quản lý bình luận Comments & Review, nhúng phông chữ Embed Fonts chống lỗi font, diễn tập thời gian Rehearse Timings, ghi hình Record Slide Show, tạo Custom Slide Show, trình diễn chuyên nghiệp với Presenter View và liên kết phóng to tương tác Zoom slides.',
    durationMinutes: 45,
    theories: [
      {
        id: 'ppt-7-1',
        title: 'Ghi chú cho diễn giả (Speaker Notes) và quản lý Comments',
        concept: 'Khung Notes cho phép diễn giả lưu lại dàn ý bài nói, số liệu chi tiết mà khán giả không nhìn thấy. Công cụ Comments giúp giáo viên hoặc đồng nghiệp nhận xét và trao đổi trực tiếp trên slide.',
        keyPoints: [
          'Bật khung Notes: Bấm nút Notes trên thanh trạng thái (Status Bar) ở đáy màn hình hoặc vào View > Notes.',
          'Nội dung Notes chỉ hiển thị trên màn hình riêng của người thuyết trình trong chế độ Presenter View hoặc khi in theo dạng Notes Pages.',
          'Thêm nhận xét (Comments): Thẻ Review > nhóm Comments > New Comment (hoặc chuột phải chọn New Comment).',
          'Trả lời và giải quyết: Bấm Reply để trả lời phản hồi; bấm Delete để xóa nhận xét khi đã hoàn thành chỉnh sửa.'
        ],
        shortcut: 'Alt + R, C để chèn nhanh nhận xét New Comment trong thẻ Review.',
        examTip: 'Đề thi MOS thường yêu cầu: "Add a comment to slide 2 with the text [Nội dung]" hoặc "Add the speaker note [Nội dung ghi chú] to slide 4". Chú ý gõ chính xác từng ký tự.',
        checkpointQuestion: {
          question: 'Khi người thuyết trình nhập văn bản vào khung Notes Pane ở phía dưới slide, khán giả theo dõi trên màn chiếu lớn có nhìn thấy nội dung này không?',
          options: [
            'Có, khán giả nhìn thấy chữ hiển thị đè lên slide',
            'Không, khán giả chỉ thấy nội dung slide, chỉ người thuyết trình nhìn thấy Notes trên màn hình laptop nhờ Presenter View',
            'Khán giả chỉ nhìn thấy nếu bật chế độ Slide Sorter',
            'Nội dung Notes sẽ bị xóa tự động khi bấm F5'
          ],
          correctIndex: 1,
          explanation: 'Speaker Notes được thiết kế riêng tư cho người diễn thuyết; trong chế độ Presenter View, chỉ màn hình riêng của diễn giả mới hiển thị phần ghi chú này.'
        }
      },
      {
        id: 'ppt-7-2',
        title: 'Nhúng phông chữ (Embed Fonts) và thiết lập trình chiếu tùy chỉnh (Custom Show)',
        concept: 'Khi mang bài thuyết trình sang máy tính khác, nếu máy đó thiếu phông chữ thì slide sẽ bị vỡ bố cục. Tính năng Embed Fonts giải quyết triệt để lỗi này. Custom Slide Show cho phép tạo nhiều kịch bản trình chiếu khác nhau từ cùng một file.',
        keyPoints: [
          'Nhúng phông chữ: Vào thẻ File > Options > mục Save > tích chọn "Embed fonts in the file".',
          'Lựa chọn nhúng: "Embed only the characters used in the presentation" (chỉ nhúng ký tự đã dùng, dung lượng file nhẹ hơn) hoặc "Embed all characters" (nhúng toàn bộ phông để máy khác có thể sửa tiếp).',
          'Custom Slide Show: Thẻ Slide Show > Custom Slide Show > Custom Shows... > bấm New.',
          'Chọn lọc slide: Tích chọn các slide cần dùng cho đối tượng khán giả cụ thể (ví dụ: bản trình bày 10 phút tóm tắt hoặc bản đầy đủ 45 phút) mà không cần tạo nhiều file trùng lặp.'
        ],
        shortcut: 'Alt + S, C để mở hộp thoại quản lý Custom Slide Show.',
        examTip: 'Câu hỏi MOS rất phổ biến: "Create a custom slide show named \'Short Pitch\' that includes slides 1, 3, and 5".',
        checkpointQuestion: {
          question: 'Để đảm bảo bài thuyết trình không bao giờ bị lỗi phông chữ khi mang sang trình chiếu trên máy tính khác của trường học, thao tác kỹ thuật quan trọng nhất là gì?',
          options: [
            'Chuyển tất cả các chữ cái thành hình ảnh',
            'Vào File > Options > Save và tích chọn "Embed fonts in the file"',
            'Chỉ sử dụng phông chữ VnTime',
            'Lưu bài thuyết trình ra đĩa CD'
          ],
          correctIndex: 1,
          explanation: 'Embed fonts in the file sẽ đóng gói trực tiếp bộ tệp phông chữ vào trong tệp tin PowerPoint, giúp hiển thị chuẩn xác 100% trên bất kỳ máy tính nào.'
        }
      },
      {
        id: 'ppt-7-3',
        title: 'Chế độ Presenter View và phím tắt điều khiển trình diễn',
        concept: 'Presenter View biến laptop của diễn giả thành trung tâm điều khiển tối tân: hiển thị slide hiện tại, slide kế tiếp, đồng hồ bấm giờ đếm ngược, phần ghi chú và các công cụ bút vẽ laser.',
        keyPoints: [
          'Bật Presenter View: Thẻ Slide Show > nhóm Monitors > tích chọn "Use Presenter View" (yêu cầu máy tính kết nối với màn hình thứ hai hoặc máy chiếu).',
          'Bút vẽ & Con trỏ: Nhấp biểu tượng cây bút ở góc dưới màn hình chiếu để chọn Laser Pointer (chấm đỏ), Pen (bút mực vẽ tự do) hoặc Highlighter (bút dạ quang tô sáng).',
          'Phím tắt làm tối màn hình: Phím B (Black screen) biến màn hình thành màu đen; phím W (White screen) biến màn hình thành màu trắng để khán giả tập trung vào lời nói của bạn.',
          'Xem tất cả slide: Bấm phím G hoặc biểu tượng See all slides để nhảy nhanh tới bất kỳ slide nào mà khán giả không thấy trật tự lật trang.'
        ],
        shortcut: 'F5 để chiếu từ slide đầu tiên; Shift + F5 để chiếu từ slide đang chọn; phím B để tắt màn hình tạm thời sang màu đen.',
        examTip: 'Đề thi MOS hay hỏi phím tắt trong khi đang trình chiếu: Phím B (Black screen), phím W (White screen), phím Esc (kết thúc trình chiếu), phím số + Enter (nhảy đến slide số tương ứng).',
        checkpointQuestion: {
          question: 'Khi đang thuyết trình toàn màn hình, muốn tạm thời làm đen toàn bộ màn hình máy chiếu để lôi kéo toàn bộ sự chú ý của người nghe về phía mình, bạn bấm phím nào trên bàn phím?',
          options: ['Phím D', 'Phím B', 'Phím W', 'Phím Space'],
          correctIndex: 1,
          explanation: 'Bấm phím B (Black) sẽ chuyển màn hình sang màu đen hoàn toàn; bấm lại phím B lần nữa để trở lại nội dung slide bình thường.'
        }
      },
      {
        id: 'ppt-7-4',
        title: 'Tính năng phóng to tương tác hiện đại (Zoom Slides)',
        concept: 'Zoom cho phép tạo ra bài thuyết trình phi tuyến tính (non-linear) hiện đại: bạn có thể bấm vào một hình thu nhỏ trên trang tổng quan để phóng to vào chi tiết, sau đó tự động thu nhỏ quay về trang chủ.',
        keyPoints: [
          'Summary Zoom: Thẻ Insert > nhóm Links > Zoom > Summary Zoom. Tự động gom các Section thành một slide trang mục lục tương tác ấn tượng.',
          'Section Zoom: Liên kết trực tiếp tới một phân đoạn cụ thể trong bài thuyết trình.',
          'Slide Zoom: Thẻ Insert > Zoom > Slide Zoom. Kéo thả các slide con vào slide chính để tạo các ô xem trước có thể nhấp chuột vào để phóng to.',
          'Tùy chọn Return to Zoom: Trong thẻ ngữ cảnh Zoom, tích chọn "Return to Zoom" để sau khi trình bày xong slide con, màn hình tự động thu nhỏ trở về slide tổng quan.'
        ],
        shortcut: 'Alt + N, Z để mở công cụ chèn Zoom trên thẻ Insert.',
        examTip: 'MOS 2019 bổ sung tính năng kiểm tra Zoom: "Insert a Summary Zoom slide containing the specified sections" là câu hỏi phân loại điểm cao rất đặc trưng.',
        checkpointQuestion: {
          question: 'Tính năng nào trong PowerPoint giúp tạo ra một slide mục lục chứa các hình thu nhỏ tương tác, khi nhấp vào hình nào thì slide đó sẽ tự động phóng to toàn màn hình?',
          options: ['Hyperlinks', 'Action Buttons', 'Summary Zoom', 'Custom Slide Show'],
          correctIndex: 2,
          explanation: 'Summary Zoom tạo ra một trang tổng quan trực quan chứa các hình thu nhỏ của các phần; khi thuyết trình chỉ cần nhấp vào hình để phóng to mượt mà.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-7-1',
        title: 'Kích hoạt chế độ thuyết trình Presenter View',
        instruction: 'Trên thanh công cụ tại thẻ Slide Show, nhấp vào nút Use Presenter View để kích hoạt màn hình hỗ trợ riêng cho diễn giả.',
        hint: 'Nhấp Slide Show > nhóm Monitors > Use Presenter View.',
        targetType: 'ribbon-action',
        actionKey: 'pp-enable-presenter-view'
      },
      {
        id: 'ptask-7-2',
        title: 'Trình chiếu bài giảng từ slide hiện tại',
        instruction: 'Nhấp chọn nút From Current Slide trên thẻ Slide Show để kiểm tra hiển thị slide đang làm việc.',
        hint: 'Nhấp Slide Show > From Current Slide (Shift + F5).',
        targetType: 'ribbon-action',
        actionKey: 'pp-show-from-current'
      },
      {
        id: 'ptask-7-3',
        title: 'Gán siêu liên kết điều hướng',
        instruction: 'Chuyển sang thẻ Insert và nhấp chọn Insert Link để tạo liên kết chuyển trang linh hoạt.',
        hint: 'Nhấp Insert > Links > Insert Link (Ctrl + K).',
        targetType: 'ribbon-action',
        actionKey: 'pp-insert-hyperlink'
      }
    ],
    quiz: [
      {
        id: 'pq-7-1',
        question: 'Tổ hợp phím tắt nào dùng để bắt đầu trình chiếu ngay từ trang slide ĐANG ĐƯỢC CHỌN (thay vì chiếu từ trang đầu tiên)?',
        options: ['F5', 'Shift + F5', 'Ctrl + F5', 'Alt + F5'],
        correctIndex: 1,
        explanation: 'Phím F5 trình chiếu từ trang slide đầu tiên; tổ hợp Shift + F5 trình chiếu ngay tại trang slide hiện hành bạn đang thao tác.'
      },
      {
        id: 'pq-7-2',
        question: 'Khi sử dụng chế độ Presenter View trong buổi báo cáo, người thuyết trình nhận được những lợi thế hỗ trợ nào sau đây?',
        options: [
          'Tự động sửa lỗi chính tả trên slide',
          'Xem được slide hiện tại, slide sắp tới, đồng hồ bấm giờ và đọc phần ghi chú riêng (Speaker Notes)',
          'Tự động tăng âm lượng loa hội trường',
          'Khóa chuột máy tính của khán giả'
        ],
        correctIndex: 1,
        explanation: 'Presenter View hiển thị màn hình kép chuyên nghiệp: khán giả chỉ thấy slide lớn, còn diễn giả quan sát được thời gian, ghi chú và slide kế tiếp để làm chủ bài nói.'
      },
      {
        id: 'pq-7-3',
        question: 'Trong khi đang trình chiếu toàn màn hình, phím tắt nào giúp bạn mở danh sách lưới tất cả các slide (See all slides) để nhảy nhanh đến một trang bất kỳ?',
        options: ['Phím G', 'Phím S', 'Phím Tab', 'Phím M'],
        correctIndex: 0,
        explanation: 'Bấm phím G trong khi trình chiếu sẽ hiển thị lưới thu nhỏ toàn bộ các slide trên màn hình để bạn chọn nhảy đến slide bất kỳ.'
      },
      {
        id: 'pq-7-4',
        question: 'Tính năng Custom Slide Show mang lại lợi ích gì cho việc quản lý bài thuyết trình?',
        options: [
          'Tạo ra một bài thuyết trình chứa các slide chọn lọc từ tệp gốc mà không cần phải tạo thêm nhiều file trùng lặp',
          'Xóa vĩnh viễn các slide không cần thiết',
          'Tự động dịch bài thuyết trình sang ngôn ngữ khác',
          'Chuyển đổi bài thuyết trình thành một website'
        ],
        correctIndex: 0,
        explanation: 'Custom Slide Show giúp bạn linh hoạt tạo các kịch bản báo cáo ngắn/dài cho các nhóm khán giả khác nhau từ một tệp tin duy nhất.'
      }
    ]
  },

  // =========================================================================
  // BÀI 8: CHIA SẺ BẢN TRÌNH BÀY (FINALIZING & SHARING)
  // =========================================================================
  {
    id: 'pp-lesson-8',
    moduleId: 'powerpoint',
    order: 8,
    title: 'Bài 8: Chia sẻ bản trình bày (Finalizing & Sharing)',
    summary: 'Nén hình ảnh và tối ưu hóa tệp media, kiểm tra thông tin cá nhân và dữ liệu ẩn với Document Inspector, đánh dấu hoàn thiện Mark as Final, bảo vệ tệp bằng mật khẩu Encrypt with Password, xuất bản sang PDF/Video MP4 và thiết lập in ấn Handouts/Notes Pages chuyên nghiệp.',
    durationMinutes: 45,
    theories: [
      {
        id: 'ppt-8-1',
        title: 'Nén hình ảnh và tối ưu hóa dung lượng đa phương tiện (Media Compression)',
        concept: 'Các bài thuyết trình chứa nhiều ảnh độ phân giải cao và video có thể nặng hàng trăm Megabyte, khó gửi qua Email. PowerPoint cung cấp công cụ nén ảnh và nén video tự động mà vẫn giữ nguyên chất lượng hiển thị tốt.',
        keyPoints: [
          'Nén hình ảnh: Chọn bất kỳ ảnh nào > thẻ Picture Format > nhóm Adjust > Compress Pictures.',
          'Tùy chọn nén ảnh: Bỏ tích "Apply only to this picture" để nén TẤT CẢ các bức ảnh trong bài; tích chọn "Delete cropped areas of pictures" để xóa vĩnh viễn các phần rìa đã cắt xén, giảm dung lượng tối đa.',
          'Chọn độ phân giải: E-mail (96 ppi), Web (150 ppi), HD (220 ppi), Print (330 ppi).',
          'Nén video/audio: Thẻ File > mục Info > Compress Media > chọn chất lượng Standard (480p), HD (720p), hoặc Full HD (1080p).'
        ],
        shortcut: 'Alt + F, I để vào mục Info trong Backstage kiểm tra kích thước file và nén media.',
        examTip: 'Đề thi MOS luôn có câu hỏi nén ảnh: "Compress all images in the presentation to [Web (150 ppi)] and delete cropped areas". Phải bỏ tích ô "Apply only to this picture".',
        checkpointQuestion: {
          question: 'Để giảm dung lượng tối đa cho bài thuyết trình khi nén ảnh, thao tác nào đảm bảo các phần hình ảnh đã bị cắt cúp (Crop) không còn lưu ngầm trong tệp?',
          options: [
            'Chọn định dạng file .pptx',
            'Tích chọn ô "Delete cropped areas of pictures" trong hộp thoại Compress Pictures',
            'Giảm độ sáng của bức ảnh',
            'Chuyển ảnh sang dạng Grayscale'
          ],
          correctIndex: 1,
          explanation: '"Delete cropped areas of pictures" sẽ xóa triệt để các pixel thừa ngoài vùng nhìn thấy của ảnh, giúp tệp tin nhẹ đi đáng kể và bảo mật nội dung không muốn lộ.'
        }
      },
      {
        id: 'ppt-8-2',
        title: 'Kiểm tra tệp tin (Inspect Presentation) và các tính năng tương thích',
        concept: 'Trước khi gửi bài thuyết trình cho khách hàng hoặc đối tác, cần loại bỏ các dữ liệu nhạy cảm như tên tác giả, bình luận riêng tư, slide ẩn hoặc ghi chú nháp bằng công cụ Document Inspector.',
        keyPoints: [
          'Kiểm tra dữ liệu ẩn (Inspect Document): Thẻ File > mục Info > Check for Issues > Inspect Document > bấm Inspect > chọn Remove All bên cạnh các mục tìm thấy (như Comments, Document Properties).',
          'Kiểm tra khả năng tiếp cận (Accessibility): File > Info > Check for Issues > Check Accessibility để phát hiện các ảnh thiếu Alt Text hoặc bảng biểu khó đọc.',
          'Kiểm tra tính tương thích (Compatibility): Check for Issues > Check Compatibility để phát hiện các tính năng mới (như Morph, Zoom, 3D) sẽ bị vô hiệu hóa khi mở trên bản Office cũ (PowerPoint 97-2003).'
        ],
        shortcut: 'Alt + F, I, I để kích hoạt nhanh công cụ Check for Issues trong Backstage.',
        examTip: 'Trong bài thi MOS, câu hỏi thường yêu cầu: "Inspect the presentation and remove all Document Properties and Personal Information. Do not remove other items". Hãy bấm nút Remove All đúng dòng được chỉ định.',
        checkpointQuestion: {
          question: 'Công cụ nào trong thẻ File > Info giúp tự động phát hiện và xóa sạch tên tác giả, thuộc tính cá nhân và các bình luận trao đổi nội bộ trước khi xuất bản file?',
          options: [
            'Accessibility Checker',
            'Document Inspector',
            'Compatibility Checker',
            'Version History'
          ],
          correctIndex: 1,
          explanation: 'Document Inspector quét toàn bộ tệp để phát hiện các thuộc tính ẩn (Metadata), tên người tạo, bình luận nháp và cho phép xóa an toàn chỉ bằng một nút bấm.'
        }
      },
      {
        id: 'ppt-8-3',
        title: 'Bảo vệ bài trình chiếu: Mark as Final và Encrypt with Password',
        concept: 'Để ngăn người nhận vô tình chỉnh sửa nội dung hoặc hạn chế người không có phận sự mở file, PowerPoint cung cấp các cơ chế bảo vệ từ mức độ nhắc nhở (Mark as Final) đến mã hóa bảo mật cao cấp (Mật khẩu).',
        keyPoints: [
          'Đánh dấu hoàn thiện (Mark as Final): Thẻ File > mục Info > Protect Presentation > Mark as Final. Tệp sẽ trở thành chế độ Chỉ đọc (Read-only), thanh công cụ chuyển màu vàng cảnh báo rằng bài giảng đã được hoàn tất.',
          'Đặt mật khẩu mở file (Encrypt with Password): File > Info > Protect Presentation > Encrypt with Password > nhập mật khẩu xác nhận hai lần.',
          'Lưu ý quan trọng: Nếu quên mật khẩu mã hóa, Microsoft hoàn toàn không thể hỗ trợ khôi phục dữ liệu bên trong tệp.',
          'Hủy mật khẩu: Vào lại Encrypt with Password, xóa trắng toàn bộ các dấu chấm mật khẩu trong ô và bấm OK.'
        ],
        shortcut: 'Alt + F, I, P để mở trình đơn Protect Presentation.',
        examTip: 'Đề thi MOS thường yêu cầu: "Protect the presentation by marking it as final" hoặc "Encrypt the presentation with the password [mật khẩu]". Chú ý phân biệt chữ hoa và chữ thường.',
        checkpointQuestion: {
          question: 'Khi một bài thuyết trình được thiết lập chế độ "Mark as Final", hiện tượng gì sẽ xuất hiện trên màn hình khi người dùng mở tệp?',
          options: [
            'Tệp tin yêu cầu phải nhập mật khẩu mới xem được',
            'Một thanh thông báo màu vàng xuất hiện thông báo bài thuyết trình ở chế độ Chỉ đọc (Read-only) để hạn chế chỉnh sửa',
            'Tất cả các hiệu ứng diễn hoạt bị xóa bỏ',
            'Tệp tin tự động in ra máy in'
          ],
          correctIndex: 1,
          explanation: '"Mark as Final" vô hiệu hóa các nút chỉnh sửa trên thanh Ribbon và hiện thanh cảnh báo màu vàng thông báo rằng tác giả đã hoàn tất bài thuyết trình.'
        }
      },
      {
        id: 'ppt-8-4',
        title: 'Xuất bản sang PDF/Video và thiết lập in ấn phát tay (Handouts)',
        concept: 'PowerPoint hỗ trợ xuất bản tệp trình chiếu thành tệp PDF cố định hoặc tạo thành video MP4 tự động chạy kèm thuyết minh. Thiết lập in ấn Handouts giúp in nhiều slide trên một trang giấy tiết kiệm chi phí.',
        keyPoints: [
          'Xuất bản PDF: Thẻ File > Export > Create PDF/XPS Document > bấm Create PDF/XPS.',
          'Xuất bản Video: Thẻ File > Export > Create a Video > chọn chất lượng (Ultra HD 4K, Full HD 1080p, HD 720p, Standard 480p) > chọn thời gian dừng mỗi slide > bấm Create Video.',
          'Thiết lập in ấn: Thẻ File > Print (hoặc Ctrl + P).',
          'In tài liệu phát tay (Handouts): Tại mục Print Layout, chọn 1 Slide, 2 Slides, 3 Slides (có kèm dòng kẻ ghi chú cạnh slide), 4 Slides, 6 Slides hoặc 9 Slides per page.',
          'Màu sắc in ấn: Chọn Color (in màu), Grayscale (in sắc thái xám) hoặc Pure Black and White (trắng đen thuần túy tiết kiệm mực in).'
        ],
        shortcut: 'Ctrl + P để mở màn hình Print; Alt + F, E để mở nhanh mục Export trong Backstage.',
        examTip: 'Đề thi MOS luôn có câu hỏi cấu hình in ấn: "Configure print settings to print 3 slides per page (Handouts) in Grayscale mode".',
        checkpointQuestion: {
          question: 'Kiểu in tài liệu phát tay (Handouts) nào trong mục Print Layout sẽ tự động in 3 slide trên một trang giấy và có sẵn các dòng kẻ ngang bên cạnh để người tham dự ghi chép?',
          options: [
            'Full Page Slides',
            'Notes Pages',
            '3 Slides',
            '6 Slides Horizontal'
          ],
          correctIndex: 2,
          explanation: 'Bố cục Handouts "3 Slides" là thiết kế độc đáo nhất trong PowerPoint: đặt 3 slide ở cột bên trái và tạo sẵn 3 cụm dòng kẻ ngang ở cột bên phải cho khán giả ghi chép.'
        }
      }
    ],
    tasks: [
      {
        id: 'ptask-8-1',
        title: 'Khởi động bài thuyết trình từ đầu',
        instruction: 'Trên thanh Ribbon tại thẻ Slide Show, nhấp chọn nút From Beginning để kiểm tra toàn diện bài trình bày trước khi xuất bản.',
        hint: 'Nhấp Slide Show > From Beginning (F5).',
        targetType: 'ribbon-action',
        actionKey: 'pp-show-from-beginning'
      },
      {
        id: 'ptask-8-2',
        title: 'Mở giao diện Slide Master để rà soát mẫu chung',
        instruction: 'Chuyển sang thẻ View trên thanh công cụ và chọn Slide Master để kiểm tra tính đồng bộ toàn bài.',
        hint: 'Nhấp View > Master Views > Slide Master.',
        targetType: 'ribbon-action',
        actionKey: 'pp-open-slidemaster'
      },
      {
        id: 'ptask-8-3',
        title: 'Đồng bộ hiệu ứng cho tất cả các slide',
        instruction: 'Tại thẻ Transitions, nhấp vào nút Apply to All để đảm bảo tính nhất quán của chuyển trang trước khi đóng gói tệp.',
        hint: 'Nhấp Transitions > Timing > Apply to All.',
        targetType: 'ribbon-action',
        actionKey: 'pp-trans-apply-all'
      }
    ],
    quiz: [
      {
        id: 'pq-8-1',
        question: 'Khi muốn nén toàn bộ hình ảnh trong bài thuyết trình để giảm dung lượng file gửi qua Email, ta nên chọn độ phân giải tiêu chuẩn nào trong Compress Pictures?',
        options: ['HD (220 ppi)', 'Print (330 ppi)', 'E-mail (96 ppi)', 'Ultra HD (4K)'],
        correctIndex: 2,
        explanation: 'Mức 96 ppi (E-mail) nén kích thước ảnh tối đa xuống mức tối thiểu, phù hợp hoàn hảo để đính kèm thư điện tử mà vẫn hiển thị rõ ràng trên màn hình.'
      },
      {
        id: 'pq-8-2',
        question: 'Để lưu bài thuyết trình PowerPoint thành một video hoàn chỉnh có định dạng chuẩn xem được trên mọi thiết bị và tải lên mạng xã hội, ta chọn định dạng xuất nào?',
        options: ['Video định dạng MP4 (*.mp4)', 'File Flash (*.swf)', 'File GIF tĩnh', 'File văn bản TXT'],
        correctIndex: 0,
        explanation: 'Tính năng File > Export > Create a Video hỗ trợ xuất ra định dạng MP4 độ nét cao, tương thích phổ quát với mọi nền tảng thiết bị di động và máy tính.'
      },
      {
        id: 'pq-8-3',
        question: 'Nếu người nhận mở bài thuyết trình được bảo vệ bằng "Mark as Final", họ có thể chỉnh sửa tiếp được không nếu họ vẫn muốn?',
        options: [
          'Không bao giờ, file đã bị mã hóa vĩnh viễn',
          'Có thể, chỉ cần bấm vào nút "Edit Anyway" trên thanh thông báo màu vàng ở đầu cửa sổ',
          'Phải cài lại toàn bộ bộ ứng dụng Office',
          'Phải gửi yêu cầu cấp mã mở khóa lên Microsoft'
        ],
        correctIndex: 1,
        explanation: '"Mark as Final" chỉ là một cảnh báo trạng thái chứ không phải khóa mã hóa mật khẩu; người dùng có thể nhấp vào nút "Edit Anyway" để tiếp tục chỉnh sửa nếu cần.'
      },
      {
        id: 'pq-8-4',
        question: 'Khi in ấn bài thuyết trình cho hội thảo, tùy chọn in nào giúp in slide kèm toàn bộ phần ghi chú của diễn giả (Speaker Notes) ở bên dưới trang giấy?',
        options: ['Outline', 'Handouts (3 Slides)', 'Notes Pages', 'Full Page Slides'],
        correctIndex: 2,
        explanation: 'Tùy chọn "Notes Pages" trong màn hình in Print sẽ in mỗi trang gồm nửa trên là hình ảnh slide và nửa dưới là toàn bộ phần nội dung ghi chú của diễn giả.'
      }
    ]
  }
];
