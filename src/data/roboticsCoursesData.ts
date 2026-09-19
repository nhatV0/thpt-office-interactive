import type { RoboticsCourseData } from '../types/roboticsCourse';

export const ROBOTICS_COURSES_DATA: Record<string, RoboticsCourseData> = {
  'robotics-basic': {
    id: 'robotics-basic',
    title: 'Robotics Cơ Bản: VEX IQ Foundation',
    subtitle: 'Nhập Môn Lắp Ráp Cơ Điện Tử & Lập Trình Khối Lệnh VEXcode IQ',
    levelBadge: 'Cơ Bản (Khóa 1)',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    description: 'Trang bị kiến thức nền tảng về bộ kit VEX IQ thế hệ 2, cơ cấu truyền động cơ khí (bánh răng, tỷ số truyền), lập trình di chuyển Drivetrain và tích hợp các cảm biến tương tác cơ bản (Bumper, Distance, Optical, Touch LED).',
    accentColor: 'orange',
    accentHex: '#F97316',
    lessons: [
      {
        id: 'robotics-basic-lesson-1',
        order: 1,
        title: 'Bài 1: Bộ kit VEX IQ & Phần Mềm VEXcode IQ',
        shortTitle: 'Bộ Kit VEX IQ & Cài Đặt',
        summary: 'Khám phá bộ linh kiện VEX IQ, cấu trúc Não Robot (Brain), pin sạc, kết nối cáp USB và giao diện lập trình trực quan VEXcode IQ.',
        theoryPdfFileName: 'robotics-basic-lesson-1.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-1.pdf',
        objectives: [
          'Khám phá bộ kit VEX IQ và phân loại các chi tiết dầm, chốt, bánh xe, motor, cảm biến.',
          'Tìm hiểu giao diện ứng dụng VEXcode IQ và thao tác tạo dự án, tải code về Não.',
          'Lắp ráp mô hình cơ bản đầu tiên và thực hiện kết nối Brain với máy tính qua cáp USB.',
          'Lập trình hiển thị thông tin chữ và số trên màn hình của Não Robot.'
        ],
        hardwareKit: ['VEX IQ Brain thế hệ 2', 'Pin sạc Robot Battery', 'Cáp USB Type-C', 'Dầm dẹt & Chốt nhựa', 'Mô hình cơ bản'],
        vexBlocks: [
          {
            category: 'Looks',
            color: '#A855F7',
            blockText: 'print [Hello VEX IQ!]',
            description: 'In văn bản hoặc giá trị cảm biến lên màn hình Brain.',
            exampleSnippet: 'print("Hello VEX IQ!");\nsetCursor(2, 1);'
          },
          {
            category: 'Events',
            color: '#EAB308',
            blockText: 'when started',
            description: 'Khối lệnh khởi động khi bấm Run trên Brain hoặc phần mềm.',
            exampleSnippet: 'int main() {\n  // Code starts here\n}'
          }
        ],
        challenges: [
          {
            id: 'c1-challenge-1',
            title: 'Khởi động & Hiển thị Tên Đội Thi',
            difficulty: 'Cơ bản',
            arenaDescription: 'Khu vực thử nghiệm bàn học. Robot đặt cố định trên bàn.',
            hardwareRequired: ['VEX IQ Brain', 'Pin Robot', 'Màn hình hiển thị'],
            rules: [
              'Khởi động Brain và kết nối thành công với máy tính.',
              'Lập trình in Tên Đội Thi ở dòng 1 và Slogan ở dòng 2.',
              'Màn hình duy trì hiển thị trong ít nhất 10 giây.'
            ],
            evaluationRubric: [
              { criteria: 'Kết nối Brain và nạp code thành công', points: 40 },
              { criteria: 'Hiển thị chính xác tên đội và định dạng rõ nét', points: 40 },
              { criteria: 'Thao tác tháo lắp pin an toàn chuẩn kỹ thuật', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng khối [print "Team 01"] kèm [set cursor to next row] và [wait 10 seconds].'
          }
        ],
        stemApplications: ['Kỹ thuật máy tính (Computer Engineering)', 'Giao tiếp người máy (HMI Screen Display)', 'Bảo toàn năng lượng pin']
      },
      {
        id: 'robotics-basic-lesson-2',
        order: 2,
        title: 'Bài 2: Robot Di Chuyển & Điều Khiển Base Bot',
        shortTitle: 'Robot Di Chuyển',
        summary: 'Lắp ráp mô hình xe Base Bot 2 động cơ, thiết lập cấu hình hệ dẫn động Drivetrain 2-Motor và lập trình điều khiển tiến, lùi, xoay góc chính xác.',
        theoryPdfFileName: 'robotics-basic-lesson-2.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-2.pdf',
        objectives: [
          'Tìm hiểu các thẻ lệnh di chuyển cơ bản: tiến (forward), lùi (reverse).',
          'Lắp ráp hoàn thiện khung gầm xe Base Bot tiêu chuẩn thi đấu.',
          'Lập trình điều khiển xoay trái (turn left), xoay phải (turn right) theo góc độ độ (degrees).',
          'Tìm hiểu cơ chế hãm phanh (brake mode: coast, brake, hold).'
        ],
        hardwareKit: ['VEX Base Bot', '2x Smart Motor', '4x Bánh xe cao su 200mm', 'Trục thép', 'VEX Brain'],
        vexBlocks: [
          {
            category: 'Drivetrain',
            color: '#3B82F6',
            blockText: 'drive [forward] for (200) [mm]',
            description: 'Di chuyển hệ dẫn động tiến hoặc lùi theo quãng đường mm hoặc inches xác định.',
            exampleSnippet: 'Drivetrain.driveFor(forward, 200, mm);'
          },
          {
            category: 'Drivetrain',
            color: '#3B82F6',
            blockText: 'turn [right] for (90) [degrees]',
            description: 'Quay robot tại chỗ theo góc độ chỉ định nhờ vận hành 2 motor ngược chiều.',
            exampleSnippet: 'Drivetrain.turnFor(right, 90, degrees);'
          }
        ],
        challenges: [
          {
            id: 'c2-challenge-1',
            title: 'Hành trình Hình Vuông Hoàn Hảo (Square Lap)',
            difficulty: 'Cơ bản',
            arenaDescription: 'Sa bàn phẳng kích thước 120cm x 120cm có vạch xuất phát.',
            hardwareRequired: ['Base Bot 2-Motor', 'Thước dây đo đạc', 'Băng keo dán sàn'],
            rules: [
              'Robot xuất phát từ góc vuông A.',
              'Đi thẳng 400mm, rẽ phải 90 độ, lặp lại 4 cạnh để trở về đúng vị trí A ban đầu.',
              'Sai số lệch tâm không vượt quá 5cm sau 4 lượt rẽ.'
            ],
            evaluationRubric: [
              { criteria: 'Hoàn thành 4 cạnh hình vuông liên tục', points: 50 },
              { criteria: 'Độ chính xác góc rẽ 90 độ (sai số < 5 độ)', points: 30 },
              { criteria: 'Cấu trúc khối lệnh tối ưu, ngắn gọn', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng vòng lặp [repeat 4 times] bao quanh [drive forward 400mm] và [turn right 90 degrees].'
          }
        ],
        stemApplications: ['Hình học phẳng (Geometry - Polygon Angles)', 'Động học chất điểm (Kinematics)', 'Hệ số ma sát bánh xe']
      },
      {
        id: 'robotics-basic-lesson-3',
        order: 3,
        title: 'Bài 3: Cấu Trúc Truyền Động & Hộp Số M.A.D Box',
        shortTitle: 'Cấu Trúc Truyền Động',
        summary: 'Tìm hiểu các loại bánh răng (12T, 24T, 36T, 60T), tỷ số truyền tăng tốc độ (speed) vs tăng lực kéo (torque), lắp ráp mô hình M.A.D Box.',
        theoryPdfFileName: 'robotics-basic-lesson-3.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-3.pdf',
        objectives: [
          'Tìm hiểu về các loại bánh răng truyền động trong bộ kit VEX IQ và ứng dụng thực tế.',
          'Thực hành lắp ráp mô hình cơ cấu bánh răng M.A.D. Box (Mechanical Advantage Demonstrator).',
          'Tính toán tỷ số truyền Gear Ratio và mối quan hệ nghịch đảo giữa lực kéo và vận tốc.',
          'Ứng dụng cơ cấu truyền động giảm tốc tăng lực kéo vào xe kéo vật nặng.'
        ],
        hardwareKit: ['Bánh răng 12 răng (Pinion Gear)', 'Bánh răng 36 răng', 'Bánh răng 60 răng', 'Trục truyền động', 'Khung dầm M.A.D Box'],
        vexBlocks: [
          {
            category: 'Motion',
            color: '#10B981',
            blockText: 'set [Motor] velocity to (100) [%]',
            description: 'Thiết lập vận tốc quay danh định của động cơ từ 1% đến 100%.',
            exampleSnippet: 'Motor1.setVelocity(100, percent);'
          },
          {
            category: 'Motion',
            color: '#10B981',
            blockText: 'spin [Motor] [forward]',
            description: 'Quay động cơ liên tục theo chiều thuận hoặc nghịch.',
            exampleSnippet: 'Motor1.spin(forward);'
          }
        ],
        challenges: [
          {
            id: 'c3-challenge-1',
            title: 'Thử Thách Kéo Vật Nặng (Heavy Cargo Pull)',
            difficulty: 'Trung bình',
            arenaDescription: 'Đường đua thẳng dài 1000mm, xe kéo tải trọng hộp linh kiện 500g.',
            hardwareRequired: ['Base Bot gắn hộp số giảm tốc', 'Hộp quả cân/linh kiện 500g', 'Dây kéo'],
            rules: [
              'Lắp ráp bộ truyền động bánh răng tăng lực kéo (tỷ số truyền > 1:3).',
              'Kéo khối tải trọng qua vạch đích 1000mm mà bánh xe không bị trượt hoặc kẹt động cơ.',
              'Ghi lại thời gian hoàn thành hành trình.'
            ],
            evaluationRubric: [
              { criteria: 'Lắp ráp đúng cấu trúc bánh răng tăng mô-men lực', points: 40 },
              { criteria: 'Kéo thành công tải trọng về đích an toàn', points: 40 },
              { criteria: 'Giải thích đúng công thức tỷ số truyền Gear Ratio', points: 20 }
            ],
            sampleSolutionHint: 'Bánh răng chủ động 12T dẫn động bánh răng bị động 60T (tỷ số 1:5 giúp tăng lực kéo lên 5 lần).'
          }
        ],
        stemApplications: ['Vật lý cơ học (Mechanical Advantage & Torque)', 'Kỹ thuật chế tạo máy', 'Bảo toàn cơ năng']
      },
      {
        id: 'robotics-basic-lesson-4',
        order: 4,
        title: 'Bài 4: Thực Hành: Hành Trình Robot & Tránh Vật Cản',
        shortTitle: 'Thực Hành: Hành Trình Robot',
        summary: 'Thực hành kết hợp điều khiển hệ thống bánh xe Base Bot vượt qua sa bàn đường ngoằn ngoèo, tính toán quỹ đạo và cuộc thi kéo co robot.',
        theoryPdfFileName: 'robotics-basic-lesson-4.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-4.pdf',
        objectives: [
          'Thực hành sáng tạo robot với 2 motor dẫn động độc lập.',
          'Lập trình điều khiển robot di chuyển chính xác về đích và tránh các khối chướng ngại vật.',
          'Áp dụng chiến thuật tối ưu hóa quãng đường và thời gian di chuyển.',
          'Tham gia thử thách đối kháng Kéo Co Robot giữa các nhóm học tập.'
        ],
        hardwareKit: ['Base Bot tinh chỉnh trọng tâm', 'Các chướng ngại vật hình hộp', 'Sa bàn sa lưới ô vuông', 'Dây thi đấu kéo co'],
        vexBlocks: [
          {
            category: 'Drivetrain',
            color: '#3B82F6',
            blockText: 'set drive velocity to (75) [%]',
            description: 'Thiết lập tốc độ di chuyển tổng thể của xe trên sa bàn.',
            exampleSnippet: 'Drivetrain.setDriveVelocity(75, percent);'
          },
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'wait (1) [seconds]',
            description: 'Dừng thực thi chương trình trong khoảng thời gian xác định trước lệnh kế tiếp.',
            exampleSnippet: 'wait(1, seconds);'
          }
        ],
        challenges: [
          {
            id: 'c4-challenge-1',
            title: 'Mê Cung Chướng Ngại Vật (Obstacle Slalom)',
            difficulty: 'Trung bình',
            arenaDescription: 'Sa bàn có 3 chướng ngại vật đặt so le cách nhau 30cm.',
            hardwareRequired: ['Base Bot hoàn chỉnh', '3 cột mốc hình nón/khối gỗ'],
            rules: [
              'Robot xuất phát từ vạch Start, lượn hình chữ S qua 3 vật cản.',
              'Không được va chạm làm đổ bất kỳ vật cản nào.',
              'Cán đích Stop trong thời gian dưới 25 giây.'
            ],
            evaluationRubric: [
              { criteria: 'Hoàn thành đường chạy chữ S không chạm vật cản', points: 50 },
              { criteria: 'Thời gian di chuyển mượt mà và tối ưu (< 20s)', points: 30 },
              { criteria: 'Kỹ năng căn chỉnh tọa độ ban đầu chuẩn xác', points: 20 }
            ],
            sampleSolutionHint: 'Tính toán góc cua 45 độ và quãng đường chéo trước khi rẽ ngược lại để ôm cua sát vật cản.'
          }
        ],
        stemApplications: ['Quy hoạch quỹ đạo di chuyển (Trajectory Planning)', 'Điều hướng tự động', 'Tối ưu hóa thời gian']
      },
      {
        id: 'robotics-basic-lesson-5',
        order: 5,
        title: 'Bài 5: Cảm Biến Chạm Bumper Switch',
        shortTitle: 'Bumper Switch',
        summary: 'Khám phá cảm biến công tắc hành trình Bumper Switch, nguyên lý tiếp điểm đóng/mở (Pressed / Released) và lập trình nút bấm khẩn cấp/chạm tường đổi hướng.',
        theoryPdfFileName: 'robotics-basic-lesson-5.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-5.pdf',
        objectives: [
          'Tìm hiểu về nguyên lý cảm biến công tắc chạm Bumper Switch trong công nghiệp và robot hút bụi.',
          'Tìm hiểu các thẻ lệnh tương tác với Bumper Switch: [is pressing], [wait until pressing].',
          'Lập trình nút bấm khởi động / dừng khẩn cấp cho Robot.',
          'Lập trình xe tự động lùi lại và đổi hướng khi va chạm vào thành tường.'
        ],
        hardwareKit: ['Cảm biến Bumper Switch', 'Cáp kết nối cảm biến Smart Cable', 'Dầm giảm chấn phía trước xe', 'Base Bot'],
        vexBlocks: [
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: '<[BumperSwitch] is pressed?>',
            description: 'Trả về giá trị Logic Đúng (True) nếu công tắc đang bị nhấn, ngược lại trả về Sai (False).',
            exampleSnippet: 'if (Bumper1.pressing()) { ... }'
          },
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'wait until <[BumperSwitch] is pressed>',
            description: 'Tạm dừng toàn bộ chương trình cho tới khi công tắc Bumper Switch được bấm vào.',
            exampleSnippet: 'waitUntil(Bumper1.pressing());'
          }
        ],
        challenges: [
          {
            id: 'c5-challenge-1',
            title: 'Xe Tự Hành Phản Xạ Va Chạm (Bumper Bounce)',
            difficulty: 'Trung bình',
            arenaDescription: 'Khu vực kín có tường bao 4 phía kích thước 1.5m x 1.5m.',
            hardwareRequired: ['Base Bot có gắn Bumper Switch trước mũi xe', 'Hộp chắn làm tường'],
            rules: [
              'Xe tiến thẳng cho đến khi va chạm vào tường làm kích hoạt Bumper Switch.',
              'Ngay khi chạm, xe phải tự động lùi lại 150mm và xoay góc 90 độ sang phải.',
              'Tiếp tục hành trình tương tự ít nhất 3 lần va chạm liên tiếp mà không bị kẹt.'
            ],
            evaluationRubric: [
              { criteria: 'Phát hiện va chạm tức thời và dừng xe an toàn', points: 40 },
              { criteria: 'Lùi và đổi góc chính xác không va quẹt thân xe', points: 40 },
              { criteria: 'Cơ cấu gá lắp Bumper chắc chắn chịu lực va đập', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng vòng lặp [forever]: [drive forward] -> [wait until Bumper is pressed] -> [drive reverse 150mm] -> [turn right 90 deg].'
          }
        ],
        stemApplications: ['Hệ thống an toàn cơ khí (Fail-Safe Mechanisms)', 'Tín hiệu số nhị phân (Binary Digital Inputs)', 'Cảm biến tiếp xúc']
      },
      {
        id: 'robotics-basic-lesson-6',
        order: 6,
        title: 'Bài 6: Cảm Biến Đo Khoảng Cách Distance Sensor',
        shortTitle: 'Distance Sensor',
        summary: 'Tìm hiểu cảm biến sóng âm/quang học đo khoảng cách Distance Sensor, lập trình phát hiện vật cản từ xa không tiếp xúc và chế tạo máy đo chiều cao tự động.',
        theoryPdfFileName: 'robotics-basic-lesson-6.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-6.pdf',
        objectives: [
          'Tìm hiểu về công dụng của công nghệ đo khoảng cách bằng sóng siêu âm/laser trong xe ô tô tự lái.',
          'Tìm hiểu về Distance Sensor và các thẻ lệnh đọc khoảng cách [distance in mm] hoặc [is object found].',
          'Lắp ráp và lập trình mô hình "Máy đo chiều cao/thước đo kỹ thuật số" hiển thị số đo trên Brain.',
          'Lập trình xe tự động giảm tốc và dừng cách vật cản đúng 100mm.'
        ],
        hardwareKit: ['Cảm biến Distance Sensor', 'Base Bot', 'Trụ đo chiều cao', 'Vật cản phẳng', 'Smart Cable'],
        vexBlocks: [
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: '(Distance in [mm])',
            description: 'Trả về khoảng cách từ cảm biến tới vật cản gần nhất (từ 20mm đến 2000mm).',
            exampleSnippet: 'double dist = DistanceSensor.objectDistance(mm);'
          },
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: '<[Distance] found object?>',
            description: 'Kiểm tra xem có vật thể xuất hiện trong tầm quét của cảm biến hay không.',
            exampleSnippet: 'if (DistanceSensor.isObjectDetected()) { ... }'
          }
        ],
        challenges: [
          {
            id: 'c6-challenge-1',
            title: 'Hệ Thống Phanh Khẩn Cấp Tự Động (AEB System)',
            difficulty: 'Trung bình',
            arenaDescription: 'Đường băng thẳng dài 1500mm có tấm bia chắn ở cuối đường.',
            hardwareRequired: ['Base Bot có gắn Distance Sensor hướng ra trước', 'Tấm bia chắn vật cản'],
            rules: [
              'Xe chạy với tốc độ cao 80% về phía tấm bia chắn.',
              'Khi phát hiện vật cản cách < 200mm, xe phải kích hoạt phanh dừng hoàn toàn.',
              'Sau khi dừng, khoảng cách còn lại từ mũi xe tới bia phải trong khoảng 50mm - 120mm (không được chạm vào bia).'
            ],
            evaluationRubric: [
              { criteria: 'Dừng thành công trước bia chắn không va chạm', points: 50 },
              { criteria: 'Độ chính xác cự ly dừng xe (50mm - 120mm)', points: 30 },
              { criteria: 'Khả năng hiển thị khoảng cách đo được lên màn hình Não', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng vòng lặp: [while Distance > 200mm] -> [drive forward] -> sau vòng lặp thực hiện [stop drivetrain].'
          }
        ],
        stemApplications: ['Hệ thống trợ lái nâng cao (ADAS / AEB in Cars)', 'Sóng phản xạ âm (Sonar/Radar)', 'Xử lý ngưỡng giá trị cảm biến (Threshold)']
      },
      {
        id: 'robotics-basic-lesson-7',
        order: 7,
        title: 'Bài 7: Cảm Biến Quang Học Optical Sensor & Touch LED',
        shortTitle: 'Optical Sensor & Touch LED',
        summary: 'Tìm hiểu cảm biến màu sắc và quang học Optical Sensor, đèn báo đa sắc Touch LED, lập trình nhận diện màu giao thông và phản hồi ánh sáng.',
        theoryPdfFileName: 'robotics-basic-lesson-7.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-7.pdf',
        objectives: [
          'Tìm hiểu cấu tạo cảm biến màu sắc Optical Sensor (đo màu sắc Hue, độ sáng Brightness, cảm nhận vật thể).',
          'Tìm hiểu đèn chỉ báo cảm ứng Touch LED (đổi màu RGB, nhận cảm ứng chạm tay).',
          'Lập trình mô phỏng cột đèn giao thông thông minh: Đỏ thì dừng, Xanh thì đi, Vàng giảm tốc.',
          'Kết hợp Touch LED làm đèn xi-nhan và công tắc chọn chế độ hoạt động.'
        ],
        hardwareKit: ['Cảm biến Optical Sensor', 'Đèn Touch LED RGB', 'Thẻ màu VEX IQ (Đỏ, Xanh lá, Xanh dương)', 'Base Bot'],
        vexBlocks: [
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: '<[Optical] detects [red]?>',
            description: 'Trả về Đúng khi cảm biến quang học nhận diện màu sắc chỉ định.',
            exampleSnippet: 'if (OpticalSensor.color() == color::red) { ... }'
          },
          {
            category: 'Looks',
            color: '#A855F7',
            blockText: 'set [TouchLED] color to [green]',
            description: 'Thiết lập màu sắc phát sáng của đèn Touch LED (Red, Green, Blue, Yellow, Orange...).',
            exampleSnippet: 'TouchLED.setColor(color::green);'
          }
        ],
        challenges: [
          {
            id: 'c7-challenge-1',
            title: 'Xe Tuân Thủ Tín Hiệu Đèn Giao Thông (Smart Traffic Bot)',
            difficulty: 'Thử thách',
            arenaDescription: 'Đường đi có các tấm thẻ màu Đỏ, Vàng, Xanh lá đặt trên lộ trình.',
            hardwareRequired: ['Base Bot tích hợp Optical Sensor chúc xuống và Touch LED trên nóc xe', 'Bộ 3 thẻ màu'],
            rules: [
              'Gặp thẻ Xanh lá: Touch LED sáng Xanh và xe tiếp tục chạy tốc độ 60%.',
              'Gặp thẻ Vàng: Touch LED sáng Vàng và xe giảm tốc còn 25%.',
              'Gặp thẻ Đỏ: Touch LED sáng Đỏ và xe dừng hẳn trong 3 giây trước khi kiểm tra lại.'
            ],
            evaluationRubric: [
              { criteria: 'Phân loại chính xác cả 3 màu sắc', points: 50 },
              { criteria: 'Touch LED đổi màu đồng bộ tức thời với trạng thái xe', points: 30 },
              { criteria: 'Thời gian dừng đúng chuẩn khi gặp thẻ đỏ', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng cấu trúc rẽ nhánh [if <Optical detects red>] -> [stop] / [else if detects yellow] -> [slow down] / [else] -> [normal].'
          }
        ],
        stemApplications: ['Quang phổ ánh sáng (Color Spectrum & Wavelength)', 'Giao thông thông minh (ITS)', 'Giao diện trực quan người dùng (Visual Feedback)']
      },
      {
        id: 'robotics-basic-lesson-8',
        order: 8,
        title: 'Bài 8: Thực Hành: Cuộc Thi Đóng Băng (Freeze Challenge)',
        shortTitle: 'Cuộc Thi Đóng Băng',
        summary: 'Đồ án tổng hợp cuối Khóa 1: Tích hợp đầy đủ động cơ, Bumper Switch, Optical Sensor và Touch LED để tham gia trận đấu Đóng Băng (Freeze Challenge).',
        theoryPdfFileName: 'robotics-basic-lesson-8.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-basic-lesson-8.pdf',
        objectives: [
          'Sáng tạo mô hình robot hoàn thiện kết hợp 2 motor truyền động, Bumper Switch trước và Touch LED trên nóc.',
          'Lập trình điều khiển robot tự động di chuyển tự do trong đấu trường sa bàn.',
          'Khi bị đối thủ chạm vào Bumper Switch, xe phải bị "Đóng băng" (Freeze): Touch LED chuyển màu đỏ và xe dừng hoạt động 5 giây.',
          'Hết 5 giây "hồi sinh", Touch LED chuyển xanh lá và xe tiếp tục thi đấu tính điểm.'
        ],
        hardwareKit: ['VEX Base Bot trang bị đầy đủ', 'Bumper Switch có cản bảo vệ', 'Touch LED', 'Đấu trường sa bàn VEX IQ Arena'],
        vexBlocks: [
          {
            category: 'Events',
            color: '#EAB308',
            blockText: 'when [BumperSwitch] pressed',
            description: 'Sự kiện ngắt ưu tiên kích hoạt ngay khi công tắc cản trước bị va chạm.',
            exampleSnippet: 'Bumper1.pressed(onBumperHit);'
          },
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'stop [Drivetrain]',
            description: 'Lệnh dừng khẩn cấp toàn bộ hệ thống động cơ dẫn động của robot.',
            exampleSnippet: 'Drivetrain.stop(brake);'
          }
        ],
        challenges: [
          {
            id: 'c8-challenge-1',
            title: 'Trận Đấu Đóng Băng Đấu Trường (The Arena Freeze Tag)',
            difficulty: 'Thử thách',
            arenaDescription: 'Sa bàn đấu trường VEX IQ tiêu chuẩn 6ft x 8ft có viền bảo vệ.',
            hardwareRequired: ['Robot dự thi của nhóm', 'Đồng hồ bấm giờ', 'Chướng ngại vật ngẫu nhiên'],
            rules: [
              'Trận đấu diễn ra trong 90 giây.',
              'Mỗi lần xe đâm phải chướng ngại hoặc bị kích hoạt Bumper phải dừng bất động 5 giây.',
              'Đội nào giữ được số giây di chuyển hiệu quả cao nhất và ít lần bị đóng băng nhất sẽ chiến thắng.'
            ],
            evaluationRubric: [
              { criteria: 'Lập trình logic đóng băng - hồi sinh chính xác tuyệt đối', points: 40 },
              { criteria: 'Độ bền kết cấu khung xe khi xảy ra va chạm thi đấu', points: 30 },
              { criteria: 'Tinh thần làm việc nhóm và thuyết trình giải pháp kỹ thuật', points: 30 }
            ],
            sampleSolutionHint: 'Thiết kế hàm con (Function/My Block) [Freeze_State] chứa lệnh dừng xe, bật LED đỏ, delay 5000ms rồi trả về LED xanh.'
          }
        ],
        stemApplications: ['Lập trình hướng sự kiện (Event-Driven Programming)', 'Thiết kế chiến thuật thi đấu Robotics', 'Đánh giá độ tin cậy hệ thống (System Reliability)']
      }
    ]
  },
  'robotics-intermediate': {
    id: 'robotics-intermediate',
    title: 'Robotics Nâng Cao: Vận Hành Tự Động',
    subtitle: 'Rẽ Nhánh Điều Kiện Logic, Vòng Lặp An Toàn & Robot Dò Đường Tự Hành',
    levelBadge: 'Nâng Cao (Khóa 2)',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    description: 'Nâng cấp kỹ năng với các thuật toán tự hành: Rẽ nhánh điều kiện lồng nhau (Nested If-Else), vòng lặp an toàn chống rơi mép bàn (Anti-Fall Algorithm) và thực hành thuật toán dò đường Line Tracking chuyên sâu.',
    accentColor: 'indigo',
    accentHex: '#6366F1',
    lessons: [
      {
        id: 'robotics-intermediate-lesson-9',
        order: 9,
        title: 'Bài 9: Robot Tự Động & Rẽ Nhánh Điều Kiện Logic',
        shortTitle: 'Robot Tự Động',
        summary: 'Tìm hiểu thuật toán logic rẽ nhánh If - Then - Else, đọc giá trị cường độ sáng phản xạ (Reflected Light / Brightness) từ Optical Sensor để tự động quyết định lộ trình.',
        theoryPdfFileName: 'robotics-intermediate-lesson-9.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-intermediate-lesson-9.pdf',
        objectives: [
          'Tìm hiểu ý nghĩa và cách xây dựng khối điều kiện rẽ nhánh (If - Else) trong điều khiển tự động.',
          'Tìm hiểu về thẻ lệnh đo giá trị độ sáng phản xạ (% Brightness) từ Optical Sensor.',
          'Phân biệt bề mặt màu đen (hấp thụ ánh sáng, % thấp) và màu trắng (phản xạ ánh sáng, % cao).',
          'Sáng tạo mô hình robot với 2 motor và Optical Sensor hướng xuống đất để phân loại đường đi.'
        ],
        hardwareKit: ['Base Bot hoàn chỉnh', 'Optical Sensor gắn sát mặt đất (cách 5mm-10mm)', 'Tấm sa bàn vạch đen trên nền trắng', 'VEX Brain'],
        vexBlocks: [
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'if <condition> then ... else ...',
            description: 'Cấu trúc rẽ nhánh điều khiển luồng chương trình theo điều kiện logic.',
            exampleSnippet: 'if (OpticalSensor.brightness() < 30) {\n  // Black Line\n} else {\n  // White Ground\n}'
          },
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: '(Optical [brightness] in %)',
            description: 'Đo cường độ ánh sáng phản xạ từ mặt sàn với giá trị từ 0% (tối nhất) đến 100% (sáng nhất).',
            exampleSnippet: 'int lightLevel = OpticalSensor.brightness();'
          }
        ],
        challenges: [
          {
            id: 'c9-challenge-1',
            title: 'Phân Tuyến Ranh Giới Tự Động (Boundary Guard)',
            difficulty: 'Trung bình',
            arenaDescription: 'Mặt sàn trắng có một vạch kẻ đen ngang đường rộng 5cm.',
            hardwareRequired: ['Base Bot có Optical Sensor hướng xuống sàn', 'Sa bàn vạch đen'],
            rules: [
              'Robot tiến lên với tốc độ 50%.',
              'Khi Optical Sensor phát hiện độ sáng giảm xuống dưới 30% (chạm vạch đen), robot phải lùi lại 10cm và quay đầu 180 độ.',
              'Hoạt động liên tục trong 1 phút không vượt qua vạch đen.'
            ],
            evaluationRubric: [
              { criteria: 'Nhận diện vạch đen chính xác và dừng xe kịp thời', points: 50 },
              { criteria: 'Xử lý rẽ nhánh If-Else mượt mà không bị giật lag', points: 30 },
              { criteria: 'Căn chỉnh độ cao cảm biến hợp lý (khoảng 8mm)', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng vòng lặp vô hạn [forever]: nếu brightness < 30% thì lùi và quay, ngược lại thì tiến.'
          }
        ],
        stemApplications: ['Hệ thống phân loại tự động (Automated Optical Sorting)', 'Ngưỡng nhị phân hóa ảnh (Thresholding in Vision)', 'Điều khiển logic học (Fuzzy/Boolean Control)']
      },
      {
        id: 'robotics-intermediate-lesson-10',
        order: 10,
        title: 'Bài 10: An Toàn Robot & Vòng Lặp Chống Rơi Mép Bàn',
        shortTitle: 'An Toàn Robot',
        summary: 'Tìm hiểu vòng lặp lặp lại (Repeat) và vòng lặp vô hạn (Forever), kết hợp Distance Sensor / Optical Sensor hướng xuống để lập trình hệ thống chống rơi bàn (Cliff Detection).',
        theoryPdfFileName: 'robotics-intermediate-lesson-10.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-intermediate-lesson-10.pdf',
        objectives: [
          'Tìm hiểu ý nghĩa của thẻ lệnh lặp với số lần nhất định (Repeat N times) và lặp vô hạn lần (Forever).',
          'Sáng tạo mô hình robot với 2 motor, Touch LED và Distance Sensor hoặc Optical Sensor hướng chúc xuống mép sàn.',
          'Phân tích hiện tượng mất tín hiệu phản xạ khi đến mép bàn (vực sâu / hố rơi).',
          'Lập trình thuật toán điều khiển robot tuần tra an toàn trên mặt bàn mà không bao giờ bị rơi.'
        ],
        hardwareKit: ['Base Bot', 'Distance Sensor gá lắp chúc góc 45 độ xuống mặt bàn', 'Touch LED báo động', 'Bàn thực hành có gờ mép'],
        vexBlocks: [
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'forever [ ... ]',
            description: 'Vòng lặp vĩnh viễn duy trì chương trình tuần tra liên tục không ngừng.',
            exampleSnippet: 'while (true) {\n  checkEdgeSafety();\n}'
          },
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: '<[Distance] > (150) [mm]>',
            description: 'Điều kiện phát hiện mép vực: Khi khoảng cách đo được vượt quá độ cao mặt sàn bình thường.',
            exampleSnippet: 'if (DistanceSensor.objectDistance(mm) > 150) { ... }'
          }
        ],
        challenges: [
          {
            id: 'c10-challenge-1',
            title: 'Người Canh Gác Mặt Bàn (Tabletop Rover Guard)',
            difficulty: 'Thử thách',
            arenaDescription: 'Mặt bàn thí nghiệm phẳng cao 75cm so với mặt đất, không có lan can viền.',
            hardwareRequired: ['Base Bot tích hợp Distance Sensor chống rơi + Touch LED còi báo', 'Bàn thí nghiệm'],
            rules: [
              'Robot chạy tự do trên bàn tìm đường tuần tra.',
              'Bất kể robot tiếp cận mép bàn ở góc nào, ngay khi cảm biến phát hiện hẫng hụt sàn, xe phải dừng ngay lập tức, bật Touch LED Đỏ, lùi lại và chuyển hướng khác.',
              'Thực hiện thử nghiệm liên tục trong 3 phút không được để rơi bánh xe nào khỏi mép bàn.'
            ],
            evaluationRubric: [
              { criteria: 'Xe tuyệt đối không rơi khỏi bàn trong suốt 3 phút', points: 60 },
              { criteria: 'Hệ thống báo hiệu LED Đỏ nhấp nháy chuẩn mực khi phát hiện mép bàn', points: 20 },
              { criteria: 'Kỹ năng thiết kế giá gá cảm biến phía trước nhô xa hợp lý', points: 20 }
            ],
            sampleSolutionHint: 'Lắp cảm biến Distance Sensor nhô ra trước mũi xe chúc xuống. Nếu khoảng cách > 80mm nghĩa là hụt đất -> lập tức phanh ngắt và lùi khẩn cấp.'
          }
        ],
        stemApplications: ['Robot hút bụi gia dụng (Cliff Sensors in Vacuums)', 'An toàn hàng không & xe tự hành', 'Hệ thống phản ứng thời gian thực (Real-time Critical Systems)']
      },
      {
        id: 'robotics-intermediate-lesson-11',
        order: 11,
        title: 'Bài 11: Thực Hành: Robot Dò Đường Line Tracker (Phần 1)',
        shortTitle: 'Robot Dò Đường - Phần 1',
        summary: 'Thực hành chế tạo xe dò đường Line Tracker với Optical Sensor, tìm hiểu thuật toán dò cạnh đường (Edge Following) và vượt sa bàn vạch đen cơ bản.',
        theoryPdfFileName: 'robotics-intermediate-lesson-11.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-intermediate-lesson-11.pdf',
        objectives: [
          'Sáng tạo mô hình robot gọn nhẹ với 2 motor và 1 Optical Sensor bố trí sát tâm quay trước mũi xe.',
          'Phân tích thuật toán dò mép đường (Two-State Bang-Bang Controller): Thấy đen thì rẽ trái, thấy trắng thì rẽ phải.',
          'Lập trình điều khiển robot di chuyển bám theo đường cong màu đen từ vạch xuất phát Xanh đến đích Đỏ.',
          'Tinh chỉnh tỷ số vận tốc giữa 2 bánh xe để hạn chế hiện tượng rung lắc (Wobbling).'
        ],
        hardwareKit: ['Base Bot cấu hình Line Tracker', 'Optical Sensor có đèn trợ sáng LED tích hợp', 'Sa bàn đường kẻ màu đen rộng 2.5cm', 'VEX Brain'],
        vexBlocks: [
          {
            category: 'Motion',
            color: '#10B981',
            blockText: 'spin [LeftMotor] at (50)% and [RightMotor] at (15)%',
            description: 'Tạo độ chênh lệch vận tốc giữa 2 motor để robot ôm cua mềm mại theo đường cong.',
            exampleSnippet: 'LeftMotor.spin(forward, 50, percent);\nRightMotor.spin(forward, 15, percent);'
          },
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'if <Optical brightness < (35)%> then ... else ...',
            description: 'Điều kiện phân định mép đường đen / nền trắng dựa trên ngưỡng 35%.',
            exampleSnippet: 'if (Optical.brightness() < 35) {\n  spinLeft();\n} else {\n  spinRight();\n}'
          }
        ],
        challenges: [
          {
            id: 'c11-challenge-1',
            title: 'Hành Trình Đường Cong Số 8 (Figure-8 Line Track)',
            difficulty: 'Thử thách',
            arenaDescription: 'Sa bàn vẽ đường line màu đen uốn lượn hình số 8 có các khúc cua bán kính 20cm.',
            hardwareRequired: ['Robot Line Tracker 1 cảm biến quang', 'Sa bàn số 8'],
            rules: [
              'Xe xuất phát từ vạch Xanh và phải tự động bám theo đường line đen.',
              'Không được để bánh xe rời khỏi phạm vi đường line quá 3 giây.',
              'Về đích tại ô Đỏ và tự động dừng xe.'
            ],
            evaluationRubric: [
              { criteria: 'Bám đường liên tục không mất dấu vạch', points: 50 },
              { criteria: 'Xe di chuyển mượt mà, ít dao động giật cục', points: 30 },
              { criteria: 'Thời gian hoàn thành vòng chạy số 8 nhanh nhất', points: 20 }
            ],
            sampleSolutionHint: 'Thay vì dừng hẳn 1 bánh, hãy để bánh nhanh 40% và bánh chậm 15% để xe liên tục tiến về phía trước.'
          }
        ],
        stemApplications: ['Xe tự hành trong nhà kho thông minh (AGV - Automated Guided Vehicle)', 'Lý thuyết điều khiển tự động (Control Theory)', 'Cảm biến quang điện tử']
      },
      {
        id: 'robotics-intermediate-lesson-12',
        order: 12,
        title: 'Bài 12: Thực Hành: Robot Dò Đường Nâng Cao (Phần 2)',
        shortTitle: 'Robot Dò Đường - Phần 2',
        summary: 'Nâng cấp hệ thống dò đường với đa cảm biến: Tích hợp đồng thời Optical Sensor, Distance Sensor và Touch LED để xử lý ngã ba, khúc đứt đoạn và vật cản trên đường line.',
        theoryPdfFileName: 'robotics-intermediate-lesson-12.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-intermediate-lesson-12.pdf',
        objectives: [
          'Sáng tạo mô hình robot nâng cao sử dụng 2 motor, Distance Sensor, Touch LED và cảm biến Optical Sensor.',
          'Phát triển thuật toán nhận diện ngã 3 rẽ nhánh và các đoạn vạch bị đứt quãng (Gap Crossing).',
          'Xử lý tình huống gặp vật cản bất ngờ chặn trên đường line: Dừng lại chờ hoặc vòng tránh chướng ngại vật rồi bắt lại đường line.',
          'Tối ưu hóa thời gian chạy và quy chế thi đấu tính điểm.'
        ],
        hardwareKit: ['Robot Line Tracker hoàn chỉnh', 'Distance Sensor phía trước', 'Optical Sensor phía dưới', 'Touch LED trạng thái', 'Sa bàn sa lưới phức hợp'],
        vexBlocks: [
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'if <Distance < (100)mm> then [Bypass Obstacle] else [Track Line]',
            description: 'Cấu trúc kết hợp điều kiện kép: Vừa ưu tiên an toàn vật cản, vừa duy trì bám line.',
            exampleSnippet: 'if (Distance.objectDistance(mm) < 100) {\n  avoidObstacle();\n} else {\n  followLine();\n}'
          },
          {
            category: 'Looks',
            color: '#A855F7',
            blockText: 'set [TouchLED] color to [yellow]',
            description: 'Báo hiệu trạng thái đang xử lý đoạn ngắt quãng hoặc vượt chướng ngại vật.',
            exampleSnippet: 'TouchLED.setColor(color::yellow);'
          }
        ],
        challenges: [
          {
            id: 'c12-challenge-1',
            title: 'Thử Thách Sa Bàn Siêu Trí Tuệ (Ultimate Line Arena)',
            difficulty: 'Nâng cao',
            arenaDescription: 'Sa bàn tổng hợp có khúc cua gấp 90 độ, đoạn line đứt 10cm và 1 khối vật cản đặt giữa lộ trình.',
            hardwareRequired: ['Robot đa cảm biến VEX IQ', 'Khối vật cản 10cm x 10cm', 'Sa bàn nâng cao'],
            rules: [
              'Xe xuất phát tự động từ vạch Start.',
              'Vượt qua đoạn đứt quãng 10cm bằng cách giữ quán tính đi thẳng cho đến khi bắt lại vạch.',
              'Gặp vật cản: dừng chờ 3 giây, nếu vật cản không dời đi thì lách cua tránh sang bên phải rồi bám lại đường line.',
              'Hoàn thành sa bàn và chạm đích trong thời gian hợp lệ.'
            ],
            evaluationRubric: [
              { criteria: 'Vượt qua thành công đoạn vạch đứt quãng', points: 40 },
              { criteria: 'Xử lý chính xác vật cản không gây đổ vỡ', points: 40 },
              { criteria: 'Tối ưu mã nguồn sử dụng My Blocks (hàm con tự tạo)', points: 20 }
            ],
            sampleSolutionHint: 'Chia nhỏ bài toán thành các hàm: [TrackLine], [CrossGap], [AvoidObstacle] và kết nối trong vòng lặp chính.'
          }
        ],
        stemApplications: ['Vận tải thông minh tự hành (Autonomous Logistics)', 'Thuật toán tái lập quỹ đạo (Path Recovery Algorithms)', 'Tích hợp đa cảm biến (Sensor Fusion)']
      }
    ]
  },
  'robotics-advanced': {
    id: 'robotics-advanced',
    title: 'Robotics Chuyên Sâu: Cơ Điện Tử & AI',
    subtitle: 'Con Quay Hồi Chuyển Gyro, Servo Motor, Bộ Điều Khiển Controller & Thuật Toán Mê Cung',
    levelBadge: 'Chuyên Sâu (Khóa 3)',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    description: 'Chinh phục đỉnh cao lập trình Robotics thi đấu quốc tế: Điều khiển định vị góc quay tuyệt đối bằng Con quay hồi chuyển Gyro & Não quán tính (Brain Inertial), lập trình Servo Motor và cánh tay gắp hàng ClawBot, kết nối tay cầm Controller từ xa và lập trình thuật toán giải mê cung (Wall Following).',
    accentColor: 'rose',
    accentHex: '#E11D48',
    lessons: [
      {
        id: 'robotics-advanced-lesson-13',
        order: 13,
        title: 'Bài 13: Con Quay Hồi Chuyển Gyro Sensor & Brain Inertial',
        shortTitle: 'Gyro Sensor & Brain Inertial',
        summary: 'Tìm hiểu con quay hồi chuyển Gyro Sensor và cảm biến quán tính tích hợp trong Não Robot (Brain Inertial Sensor), nguyên lý đo gia tốc và góc nghiêng/hướng quay (Heading/Pitch/Roll) để giữ robot chạy thẳng tuyệt đối và quay góc 90 độ chuẩn xác 100%.',
        theoryPdfFileName: 'robotics-advanced-lesson-13.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-advanced-lesson-13.pdf',
        objectives: [
          'Tìm hiểu về cảm biến con quay hồi chuyển (Gyro) và cảm biến quán tính não (Brain Inertial Sensor).',
          'Khám phá ứng dụng con quay hồi chuyển trong điện thoại thông minh, flycam và phi thuyền vũ trụ.',
          'Lập trình hiệu chỉnh cân bằng (Calibrate Inertial) khi khởi động robot.',
          'Lập trình điều khiển robot quay góc chính xác tuyệt đối theo góc la bàn (Heading 0 - 360 độ).'
        ],
        hardwareKit: ['VEX IQ Brain thế hệ 2 tích hợp Inertial Sensor', 'Base Bot chuẩn thi đấu', 'Thước đo góc hình cung tròn', 'Cáp Smart Cable'],
        vexBlocks: [
          {
            category: 'Sensing',
            color: '#06B6D4',
            blockText: 'calibrate [Inertial]',
            description: 'Hiệu chuẩn cảm biến quán tính trong 2 giây để xác lập hệ quy chiếu góc 0 độ.',
            exampleSnippet: 'Brain.Inertial.calibrate();\nwhile (Brain.Inertial.isCalibrating()) {\n  wait(50, msec);\n}'
          },
          {
            category: 'Drivetrain',
            color: '#3B82F6',
            blockText: 'turn to heading (90) [degrees]',
            description: 'Tự động xoay robot cho tới khi góc phương vị la bàn đạt đúng 90 độ, bù trừ ma sát trượt bánh xe.',
            exampleSnippet: 'Drivetrain.turnToHeading(90, degrees);'
          }
        ],
        challenges: [
          {
            id: 'c13-challenge-1',
            title: 'Hành Trình Giữ Thẳng Tuyệt Đối (Dead Reckoning Straight Line)',
            difficulty: 'Nâng cao',
            arenaDescription: 'Đường băng dài 3000mm với bề mặt trơn trượt có gờ kênh nhẹ.',
            hardwareRequired: ['Base Bot có bật Inertial Gyro', 'Thước cuộn đo độ lệch phương vị'],
            rules: [
              'Robot phải chạy thẳng 3000mm trên bề mặt có một bên bánh trơn hơn bên còn lại.',
              'Thuật toán liên tục đọc góc Heading từ Gyro để tự bù ga cho motor bên yếu, giữ xe luôn đi thẳng song song vạch chuẩn.',
              'Sai số lệch trục ngang ở điểm cuối 3000mm không được vượt quá 2cm.'
            ],
            evaluationRubric: [
              { criteria: 'Thuật toán bù hướng liên tục dựa vào cảm biến Gyro', points: 50 },
              { criteria: 'Độ lệch trục ngang tại đích < 20mm', points: 30 },
              { criteria: 'Quy trình hiệu chuẩn cảm biến Calibrate ban đầu chuẩn xác', points: 20 }
            ],
            sampleSolutionHint: 'Tính sai số error = TargetHeading - CurrentHeading; MotorLeft = BaseSpeed - K*error; MotorRight = BaseSpeed + K*error.'
          }
        ],
        stemApplications: ['Hệ thống dẫn đường quán tính (Inertial Navigation System - INS)', 'Tự động cân bằng trong Hàng Không Vũ Trụ', 'Thuật toán điều khiển tỷ lệ P-Controller']
      },
      {
        id: 'robotics-advanced-lesson-14',
        order: 14,
        title: 'Bài 14: Điều Khiển Động Cơ Servo Motor & Cánh Tay ClawBot',
        shortTitle: 'Servo Motor & ClawBot',
        summary: 'Tìm hiểu động cơ Servo thông minh Smart Motor (tích hợp Encoder đo góc quay và cảm biến dòng tải), lắp ráp cánh tay gắp hàng ClawBot và lập trình tự động gắp thả vật phẩm.',
        theoryPdfFileName: 'robotics-advanced-lesson-14.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-advanced-lesson-14.pdf',
        objectives: [
          'Tìm hiểu cấu tạo động cơ Servo Motor tích hợp Encoder đo góc quay chính xác đến từng độ.',
          'Lập trình các lệnh thiết lập nâng cao: Giới hạn mô-men xoắn (Torque Limit), vị trí góc tuyệt đối (spin to position).',
          'Lắp ráp cấu trúc cánh tay nâng (Arm) và kẹp gắp (Claw) trên mô hình ClawBot.',
          'Kết hợp cảm biến khoảng cách và cánh tay gắp để lập trình nhiệm vụ tự động giao hàng.'
        ],
        hardwareKit: ['VEX ClawBot hoàn chỉnh', 'Cánh tay đòn Arm Motor', 'Đầu kẹp Claw Motor', 'Vật thể khối lập phương VEX Cube', 'Smart Cables'],
        vexBlocks: [
          {
            category: 'Motion',
            color: '#10B981',
            blockText: 'spin [ArmMotor] to position (180) [degrees]',
            description: 'Điều khiển động cơ nâng cánh tay quay đến đúng góc vị trí 180 độ so với điểm gốc.',
            exampleSnippet: 'ArmMotor.spinToPosition(180, degrees, true);'
          },
          {
            category: 'Motion',
            color: '#10B981',
            blockText: 'set [ClawMotor] stopping to [hold]',
            description: 'Thiết lập chế độ khóa giữ (Hold) giúp kẹp chặt vật phẩm không bị rơi khi di chuyển.',
            exampleSnippet: 'ClawMotor.setStopping(hold);'
          }
        ],
        challenges: [
          {
            id: 'c14-challenge-1',
            title: 'Nhiệm Vụ Robot Giao Hàng Kho Hàng (Warehouse Logistics Bot)',
            difficulty: 'Nâng cao',
            arenaDescription: 'Khu vực bốc dỡ hàng có bàn để hàng cao 10cm và ô giao hàng đích.',
            hardwareRequired: ['VEX ClawBot', '2 khối lập phương VEX Cube', 'Sa bàn kho hàng'],
            rules: [
              'Robot tự động tiến đến vị trí khối hàng.',
              'Hạ cánh tay, đóng kẹp Claw gắp khối Cube lên độ cao an toàn (15cm).',
              'Di chuyển đến ô giao hàng, hạ tay và nhả kẹp đặt khối Cube ngay ngắn.',
              'Lùi lại và báo hiệu hoàn thành nhiệm vụ.'
            ],
            evaluationRubric: [
              { criteria: 'Gắp và giữ vật thể chắc chắn không làm rơi', points: 40 },
              { criteria: 'Đặt khối hàng chính xác vào tâm vùng trả hàng', points: 40 },
              { criteria: 'Điều khiển motor mượt mà không gây quá dòng bảo vệ', points: 20 }
            ],
            sampleSolutionHint: 'Thiết lập [set Claw stopping to hold] để duy trì lực kẹp khi nâng cánh tay [spin Arm to 120 degrees].'
          }
        ],
        stemApplications: ['Cánh tay robot công nghiệp (Robotic Arm Manipulators)', 'Điều khiển vị trí vòng kín (Closed-loop Position Control)', 'Quản lý tải trọng và mô-men']
      },
      {
        id: 'robotics-advanced-lesson-15',
        order: 15,
        title: 'Bài 15: Robot Điều Khiển Từ Xa Với Controller (Phần 1)',
        shortTitle: 'Robot Điều Khiển Controller - Phần 1',
        summary: 'Tìm hiểu tay cầm điều khiển từ xa VEX Controller, các nút bấm L/R và cần gạt Joystick 2 trục, lập trình gán kênh truyền sóng vô radio và thuật toán điều khiển cơ bản.',
        theoryPdfFileName: 'robotics-advanced-lesson-15.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-advanced-lesson-15.pdf',
        objectives: [
          'Tìm hiểu cấu tạo và nguyên lý giao tiếp không dây giữa VEX Controller và VEX Brain.',
          'Lập trình điều khiển chế độ 1 cần gạt Arcade Drive (1 cần điều khiển cả tiến lùi và quay cua).',
          'Lập trình điều khiển chế độ 2 cần gạt Tank Drive (mỗi cần điều khiển 1 bên bánh xe).',
          'Lập trình gán các nút bấm L1, L2, R1, R2 để đóng/mở cánh tay gắp hàng.'
        ],
        hardwareKit: ['VEX Controller thế hệ 2', 'Pin Controller sạc Li-ion', 'VEX ClawBot', 'Ăng-ten vô tuyến Radio Link'],
        vexBlocks: [
          {
            category: 'Events',
            color: '#EAB308',
            blockText: 'when [Controller] AxisA changed',
            description: 'Sự kiện thay đổi vị trí cần gạt Joystick để điều chỉnh vận tốc tức thời của động cơ.',
            exampleSnippet: 'LeftMotor.spin(forward, Controller.AxisA.position(), percent);'
          },
          {
            category: 'Events',
            color: '#EAB308',
            blockText: 'when [Controller] ButtonRUp pressed',
            description: 'Sự kiện khi bấm nút R1 trên tay cầm điều khiển.',
            exampleSnippet: 'ClawMotor.spin(forward, 100, percent);'
          }
        ],
        challenges: [
          {
            id: 'c15-challenge-1',
            title: 'Thử Thách Lái Xe Vượt Sa Bàn Zíc-Zắc (Driver Skills Course)',
            difficulty: 'Nâng cao',
            arenaDescription: 'Đường đua sa bàn thi đấu gồm 5 cổng hẹp và dốc nghiêng.',
            hardwareRequired: ['ClawBot kết nối Controller không dây', 'Đồng hồ bấm giờ'],
            rules: [
              'Người điều khiển đứng tại khu vực lái (Driver Station).',
              'Sử dụng Controller lái xe xuất phát từ ô xanh, luồn lách qua các cổng hẹp mà không chạm vào thành chắn.',
              'Gắp 1 khối cube trên đường và mang về đặt tại ô đích.',
              'Thời gian tối đa 60 giây.'
            ],
            evaluationRubric: [
              { criteria: 'Khả năng làm chủ tay cầm Controller mượt mà, phản xạ nhanh', points: 40 },
              { criteria: 'Gắp và vận chuyển khối cube về đích thành công', points: 40 },
              { criteria: 'Cấu hình gán phím thuận tiện, tiện dụng cho người lái', points: 20 }
            ],
            sampleSolutionHint: 'Sử dụng cấu hình Arcade Drive với độ trễ lọc nhiễu cần gạt (Deadband filter) để tránh xe bị giật khi thả tay.'
          }
        ],
        stemApplications: ['Điều khiển từ xa vô tuyến (RF Wireless Teleoperation)', 'Giao diện tương tác người dùng (Ergonomic UX & Joysticks)', 'Hệ thống điều khiển máy bay không người lái (UAV Fly-by-wire)']
      },
      {
        id: 'robotics-advanced-lesson-16',
        order: 16,
        title: 'Bài 16: Robot Điều Khiển Từ Xa Nâng Cao Với Controller (Phần 2)',
        shortTitle: 'Robot Điều Khiển Controller - Phần 2',
        summary: 'Phát triển các tính năng hỗ trợ lái thông minh trên Controller: Chế độ tăng tốc Turbo Mode, giới hạn góc an toàn cho cánh tay nâng và tích hợp hiển thị trạng thái pin lên màn hình Controller LCD.',
        theoryPdfFileName: 'robotics-advanced-lesson-16.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-advanced-lesson-16.pdf',
        objectives: [
          'Tìm hiểu cách gửi dữ liệu phản hồi từ Brain ngược về màn hình hiển thị LCD của Controller (Telemetry).',
          'Lập trình chế độ giới hạn phần mềm (Software Limits) chống quá tải động cơ cánh tay.',
          'Lập trình chuyển đổi chế độ lái linh hoạt: Chế độ chính xác (Precision 30%) vs Chế độ tốc độ cao (Turbo 100%).',
          'Rung phản hồi cảnh báo trên tay cầm khi pin yếu hoặc khi va chạm cảm biến.'
        ],
        hardwareKit: ['VEX Controller', 'ClawBot đa cảm biến', 'Vật thể thi đấu chuyên dụng'],
        vexBlocks: [
          {
            category: 'Looks',
            color: '#A855F7',
            blockText: 'print on [Controller] [Battery: (Battery%)]',
            description: 'Hiển thị phần trăm dung lượng pin của Brain lên màn hình nhỏ của Controller.',
            exampleSnippet: 'Controller.Screen.print("Battery: %d%%", Brain.Battery.capacity());'
          },
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'rumble [Controller] [ . - . ]',
            description: 'Kích hoạt mô-tơ rung phản hồi xúc giác trên tay cầm Controller theo mẫu xung nhịp.',
            exampleSnippet: 'Controller.rumble(".-.");'
          }
        ],
        challenges: [
          {
            id: 'c16-challenge-1',
            title: 'Trận Thi Đấu Xếp Chồng Khối Hộp (Tower Stacking Showdown)',
            difficulty: 'Nâng cao',
            arenaDescription: 'Sa bàn đấu trường có 4 khối hộp kích thước khác nhau.',
            hardwareRequired: ['ClawBot hỗ trợ chức năng lái nâng cao', 'Bộ khối hộp thi đấu', 'Controller có phản hồi rung'],
            rules: [
              'Trong 2 phút, người lái phải điều khiển robot gắp và xếp chồng 3 khối hộp lên nhau tạo thành tòa tháp.',
              'Mỗi lần kẹp vật phẩm thành công, Controller phải rung nhẹ báo hiệu.',
              'Tòa tháp phải đứng vững trong ít nhất 10 giây sau khi buông tay kẹp.'
            ],
            evaluationRubric: [
              { criteria: 'Xếp chồng thành công 3 tầng tháp vững chãi', points: 50 },
              { criteria: 'Tích hợp đầy đủ phản hồi rung và thông số pin lên tay cầm', points: 30 },
              { criteria: 'Kỹ năng vận hành thuần thục, không làm đổ tháp', points: 20 }
            ],
            sampleSolutionHint: 'Thiết lập nút chuyển đổi [Toggle Precision Mode] khi tiếp cận tháp để hạ tốc độ motor xuống 20% giúp thao tác đặt hộp cực kỳ chính xác.'
          }
        ],
        stemApplications: ['Hệ thống truyền tin hai chiều (Telemetry & Bilateral Communication)', 'Phản hồi xúc giác (Haptic Feedback)', 'An toàn cơ điện tử công nghiệp']
      },
      {
        id: 'robotics-advanced-lesson-17',
        order: 17,
        title: 'Bài 17: Thuật Toán Robot Giải Mê Cung (Wall Following Algorithm)',
        shortTitle: 'Thuật Toán Robot Mê Cung',
        summary: 'Tìm hiểu thuật toán kinh điển bám tường bên phải/trái (Right/Left Wall Following Rule), kết hợp cảm biến siêu âm Distance Sensor bên hông và cảm biến Bumper trước mặt để giải quyết mê cung phức tạp không cần bản đồ trước.',
        theoryPdfFileName: 'robotics-advanced-lesson-17.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-advanced-lesson-17.pdf',
        objectives: [
          'Tìm hiểu lý thuyết đồ thị và cách thức robot định hướng trong môi trường mê cung không biết trước.',
          'Phân tích chi tiết thuật toán bám tường một bên (Wall Following Rule).',
          'Bố trí cảm biến tối ưu: Distance Sensor quay 90 độ sang sườn xe, Bumper Switch bảo vệ mặt trước.',
          'Lập trình cỗ máy trạng thái (State Machine): Bám tường thẳng, Rẽ bo góc tường lồi, Xoay tránh ngõ cụt.'
        ],
        hardwareKit: ['Base Bot cấu hình giải mê cung', '1x Distance Sensor gắn sườn phải xe', '1x Bumper Switch cản trước', 'Mô hình mê cung vách gỗ cao 25cm'],
        vexBlocks: [
          {
            category: 'Control',
            color: '#F59E0B',
            blockText: 'repeat until <[ExitReached] == [true]>',
            description: 'Vòng lặp bám tường liên tục cho đến khi chạm tới cửa thoát hiểm của mê cung.',
            exampleSnippet: 'while (!isAtExit()) {\n  runWallFollowerStep();\n}'
          },
          {
            category: 'Motion',
            color: '#10B981',
            blockText: 'drive with steering at (15)%',
            description: 'Lệnh vừa tiến vừa uốn lái nhẹ để duy trì khoảng cách ổn định cách tường 100mm.',
            exampleSnippet: 'Drivetrain.drive(forward);\n// Adjust steering based on wall distance'
          }
        ],
        challenges: [
          {
            id: 'c17-challenge-1',
            title: 'Thoát Khỏi Mê Cung Bí Ẩn (The Labyrinth Escape)',
            difficulty: 'Nâng cao',
            arenaDescription: 'Mê cung kích thước 2m x 2m gồm ít nhất 4 ngã rẽ và 2 ngõ cụt.',
            hardwareRequired: ['Robot bám tường tự động', 'Mê cung vách dựng thẳng đứng'],
            rules: [
              'Robot được đặt ngẫu nhiên tại cửa vào mê cung.',
              'Robot phải hoàn toàn tự hành thoát ra khỏi cửa Exit mà không có sự can thiệp từ người điều khiển.',
              'Không được va đập mạnh làm xê dịch vách mê cung.',
              'Thời gian thoát hiểm tối đa 90 giây.'
            ],
            evaluationRubric: [
              { criteria: 'Thoát ra khỏi mê cung thành công 100% tự động', points: 60 },
              { criteria: 'Khả năng quay đầu thoát ngõ cụt mượt mà', points: 20 },
              { criteria: 'Giữ cự ly cách tường ổn định trong suốt hành trình', points: 20 }
            ],
            sampleSolutionHint: 'Nguyên lý bám tường phải: Nếu quá gần tường (< 80mm) -> lái hơi sang trái; Nếu quá xa tường (> 140mm) -> lái hơi sang phải; Nếu phía trước chạm cản -> rẽ trái 90 độ.'
          }
        ],
        stemApplications: ['Trí tuệ nhân tạo tìm đường (AI Pathfinding & Heuristics)', 'Robot thám hiểm hang động & cứu hộ hầm mỏ', 'Cỗ máy trạng thái hữu hạn (Finite State Machine - FSM)']
      },
      {
        id: 'robotics-advanced-lesson-18',
        order: 18,
        title: 'Bài 18: Đồ Án Cuối Khóa: Thiết Kế & Chế Tạo Robot Hoàn Chỉnh',
        shortTitle: 'Đồ Án: Thiết Kế Robot Hoàn Chỉnh',
        summary: 'Đồ án tốt nghiệp chuyên sâu: Tự lên ý tưởng, phác thảo thiết kế cơ khí CAD/vẽ tay, phân bổ trọng tâm, đấu nối toàn bộ hệ thống động cơ và cảm biến, lập trình phối hợp cả chế độ Tự động (Autonomous) và Điều khiển tay cầm (Driver Control) theo chuẩn thi đấu VEX IQ Robotics quốc tế.',
        theoryPdfFileName: 'robotics-advanced-lesson-18.pdf',
        theoryPdfUrl: '/robotics-assets/giao-trinh/robotics-advanced-lesson-18.pdf',
        objectives: [
          'Ứng dụng toàn bộ quy trình thiết kế kỹ thuật (Engineering Design Process) để chế tạo mô hình robot thi đấu hoàn chỉnh.',
          'Tính toán phân bổ trọng tâm, tỷ số truyền cơ khí và tối ưu hóa hệ thống dây dẫn (Cable Management).',
          'Lập trình chiến thuật thi đấu gồm 2 giai đoạn: 15 giây Tự Hành (Autonomous) + 45 giây Lái Tay Cầm (Driver Control).',
          'Thuyết trình và phản biện giải pháp kỹ thuật trước hội đồng giám khảo.'
        ],
        hardwareKit: ['Bộ Kit VEX IQ Competition Super Kit', 'VEX Brain 2nd Gen', 'Bộ cảm biến toàn diện (Gyro, Optical, Distance, Bumper, Touch LED)', 'VEX Controller', 'Đấu trường VEX IQ Challenge Arena'],
        vexBlocks: [
          {
            category: 'Events',
            color: '#EAB308',
            blockText: 'when Autonomous Mode',
            description: 'Hàm xử lý tự động trong giai đoạn thi đấu tự hành không chạm tay.',
            exampleSnippet: 'void autonomous() {\n  // 15 seconds of autonomous tasks\n}'
          },
          {
            category: 'Events',
            color: '#EAB308',
            blockText: 'when Driver Control Mode',
            description: 'Hàm kích hoạt chế độ điều khiển tay cầm khi tín hiệu trận đấu chuyển sang giai đoạn lái tự do.',
            exampleSnippet: 'void usercontrol() {\n  // 45 seconds of teleoperation\n}'
          }
        ],
        challenges: [
          {
            id: 'c18-challenge-1',
            title: 'Chung Kết Đấu Trường VEX IQ Championship',
            difficulty: 'Nâng cao',
            arenaDescription: 'Đấu trường thi đấu VEX IQ tiêu chuẩn quốc tế có các trạm nạp banh/hộp và trụ leo cao (Hang Bar).',
            hardwareRequired: ['Robot hoàn thiện của nhóm thi đấu', 'Sổ tay kỹ thuật (Engineering Notebook)', 'Đồng hồ trận đấu'],
            rules: [
              'Trận đấu kéo dài 60 giây (15s tự động + 45s lái tay).',
              'Giai đoạn tự động: Robot tự đi ghi điểm mục tiêu.',
              'Giai đoạn lái tay: Thu thập tối đa vật phẩm vào ô ghi điểm và đu lên thanh leo Hang Bar ở những giây cuối.',
              'Tổng điểm được tính dựa trên số vật phẩm hợp lệ và cấp độ đu xà.'
            ],
            evaluationRubric: [
              { criteria: 'Hiệu quả ghi điểm trong giai đoạn Tự Hành (Autonomous)', points: 30 },
              { criteria: 'Kỹ năng vận hành và độ ổn định cơ cấu trong giai đoạn Lái Tay', points: 30 },
              { criteria: 'Chất lượng Sổ tay Kỹ thuật (Engineering Notebook)', points: 20 },
              { criteria: 'Khả năng thuyết trình, giải quyết sự cố và tinh thần đồng đội', points: 20 }
            ],
            sampleSolutionHint: 'Thiết kế cơ cấu gắp 4 thanh liên kết (4-Bar Linkage) kết hợp kẹp tự khóa góc để nâng vật phẩm lên cao mà không làm nghiêng đổ.'
          }
        ],
        stemApplications: ['Quy trình thiết kế kỹ thuật (Engineering Design Process - EDP)', 'Quản lý dự án kỹ thuật (Project Management)', 'Robotics thi đấu quốc tế (VEX Robotics World Championship)']
      }
    ]
  }
};
