// Data file for Competitive Programming Courses (CP Bronze & CP Silver)
// Auto-generated from source curriculum directories

import type { CPCourseData } from '../types/cpCourse';

export const CP_COURSES_DATA: Record<'cp-bronze' | 'cp-silver', CPCourseData> = {
  'cp-bronze': {
  "id": "cp-bronze",
  "title": "Lập Trình Thi Đấu Nâng Cao (Khóa Đồng)",
  "subtitle": "Thuật toán kinh điển & Nền tảng Olympic Tin học",
  "levelBadge": "Khóa Đồng - CP Bronze",
  "description": "Trang bị tư duy thuật toán vững chắc: Mô phỏng, Sắp xếp, Binary Search, Prefix Sum, Two Pointers, Tham lam, Toán học, Quay lui, Quy hoạch động cơ bản và Đồ thị BFS/DFS.",
  "accentColor": "amber",
  "accentClass": "from-amber-500 to-orange-600",
  "lessons": [
    {
      "id": "cp-bronze-lesson-1",
      "order": 1,
      "title": "Mô phỏng & Cài đặt (Simulation)",
      "theoryPdfFileName": "Mô phỏng & Cài đặt (Simulation).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/M%C3%B4%20ph%E1%BB%8Fng%20%26%20C%C3%A0i%20%C4%91%E1%BA%B7t%20(Simulation).pdf",
      "theorySummary": "Rèn luyện kỹ năng đọc đề, phân tích quy luật, chuyển hóa tư duy thuật toán thành mã nguồn chính xác. Nắm vững cấu trúc lặp, điều kiện biên và kỹ thuật xử lý số nguyên lớn.",
      "coreConcepts": [
        "Mô phỏng từng bước (Step-by-step)",
        "Kiểm tra biên & tràn số nguyên 64-bit (long long)",
        "Quy luật toán học ẩn sau dãy biến đổi",
        "Độ phức tạp thời gian O(N) và O(log N)"
      ],
      "problems": [
        {
          "id": "cp-bronze-l1-p1-weird-algorithm-thuat-toan-la",
          "title": "Weird Algorithm Thuật toán lạ",
          "fileName": "Bài 1_ Weird Algorithm _ Thuật toán lạ.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Weird Algorithm Thuật toán lạ. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/B%C3%A0i%201_%20Weird%20Algorithm%20_%20Thu%E1%BA%ADt%20to%C3%A1n%20l%E1%BA%A1.pdf"
        },
        {
          "id": "cp-bronze-l1-p2-missing-number",
          "title": "Missing Number",
          "fileName": "Bài 2_Missing Number.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Missing Number. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/B%C3%A0i%202_Missing%20Number.pdf"
        },
        {
          "id": "cp-bronze-l1-p3-coin-piles-coc-xu",
          "title": "Coin Piles Cọc xu",
          "fileName": "Coin Piles _ Cọc xu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Coin Piles Cọc xu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Coin%20Piles%20_%20C%E1%BB%8Dc%20xu.pdf"
        },
        {
          "id": "cp-bronze-l1-p4-collecting-numbers-thu-thap-so",
          "title": "Collecting Numbers Thu thập số",
          "fileName": "Collecting Numbers _ Thu thập số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Collecting Numbers Thu thập số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Collecting%20Numbers%20_%20Thu%20th%E1%BA%ADp%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l1-p5-gray-code-ma-gray",
          "title": "Gray Code Mã Gray",
          "fileName": "Gray Code _ Mã Gray.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Gray Code Mã Gray. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Gray%20Code%20_%20M%C3%A3%20Gray.pdf"
        },
        {
          "id": "cp-bronze-l1-p6-increasing-array-day-tang",
          "title": "Increasing Array Dãy tăng",
          "fileName": "Increasing Array _ Dãy tăng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Increasing Array Dãy tăng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Increasing%20Array%20_%20D%C3%A3y%20t%C4%83ng.pdf"
        },
        {
          "id": "cp-bronze-l1-p7-number-spiral-xoan-oc-so",
          "title": "Number Spiral Xoắn ốc số",
          "fileName": "Number Spiral _ Xoắn ốc số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Number Spiral Xoắn ốc số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Number%20Spiral%20_%20Xo%E1%BA%AFn%20%E1%BB%91c%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l1-p8-permutations-hoan-vi",
          "title": "Permutations Hoán vị",
          "fileName": "Permutations _ Hoán vị.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Permutations Hoán vị. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Permutations%20_%20Ho%C3%A1n%20v%E1%BB%8B.pdf"
        },
        {
          "id": "cp-bronze-l1-p9-repetitions-lap-lai",
          "title": "Repetitions Lặp lại",
          "fileName": "Repetitions _ Lặp lại.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Repetitions Lặp lại. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Repetitions%20_%20L%E1%BA%B7p%20l%E1%BA%A1i.pdf"
        },
        {
          "id": "cp-bronze-l1-p10-two-sets-hai-tap-hop",
          "title": "Two Sets Hai tập hợp",
          "fileName": "Two Sets _ Hai tập hợp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Two Sets Hai tập hợp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/Two%20Sets%20_%20Hai%20t%E1%BA%ADp%20h%E1%BB%A3p.pdf"
        },
        {
          "id": "cp-bronze-l1-p11-tim-so-anh-ca",
          "title": "Tìm số anh cả",
          "fileName": "Tìm số anh cả.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tìm số anh cả. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%201/T%C3%ACm%20s%E1%BB%91%20anh%20c%E1%BA%A3.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-2",
      "order": 2,
      "title": "Kỹ thuật Sắp xếp (Sorting)",
      "theoryPdfFileName": "Sắp xếp (Sorting).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BA%AFp%20x%E1%BA%BFp%20(Sorting).pdf",
      "theorySummary": "Làm chủ các thuật toán sắp xếp kinh điển (Merge Sort, Quick Sort, Counting Sort) và tận dụng triệt để hàm std::sort trong C++ với custom comparator.",
      "coreConcepts": [
        "std::sort & Hàm so sánh tùy biến (Custom Comparator)",
        "Counting Sort với độ phức tạp O(N + K)",
        "Tìm phần tử thứ k (k-th smallest/largest)",
        "Sắp xếp tọa độ & đối tượng nhiều trường"
      ],
      "problems": [
        {
          "id": "cp-bronze-l2-p1-apartments-can-ho",
          "title": "Apartments Căn hộ",
          "fileName": "Apartments _ Căn hộ.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Apartments Căn hộ. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Apartments%20_%20C%C4%83n%20h%E1%BB%99.pdf"
        },
        {
          "id": "cp-bronze-l2-p2-distinct-numbers-gia-tri-phan-biet",
          "title": "Distinct Numbers Giá trị phân biệt",
          "fileName": "Distinct Numbers _ Giá trị phân biệt.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Distinct Numbers Giá trị phân biệt. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Distinct%20Numbers%20_%20Gi%C3%A1%20tr%E1%BB%8B%20ph%C3%A2n%20bi%E1%BB%87t.pdf"
        },
        {
          "id": "cp-bronze-l2-p3-lmht",
          "title": "LMHT",
          "fileName": "LMHT.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán LMHT. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/LMHT.pdf"
        },
        {
          "id": "cp-bronze-l2-p4-luyen-tap",
          "title": "Luyện tập",
          "fileName": "Luyện tập.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Luyện tập. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Luy%E1%BB%87n%20t%E1%BA%ADp.pdf"
        },
        {
          "id": "cp-bronze-l2-p5-sap-xep-khong-giam",
          "title": "Sắp xếp không giảm",
          "fileName": "Sắp xếp không giảm.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sắp xếp không giảm. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BA%AFp%20x%E1%BA%BFp%20kh%C3%B4ng%20gi%E1%BA%A3m.pdf",
          "hasTestCases": true,
          "testCaseZipUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Sap_Xep_Khong_Giam_Testcases.zip",
          "solutionCodeUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Sap_Xep_Khong_Giam_Tests/solution.cpp"
        },
        {
          "id": "cp-bronze-l2-p6-sap-xep-khong-tang",
          "title": "Sắp xếp không tăng",
          "fileName": "Sắp xếp không tăng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sắp xếp không tăng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BA%AFp%20x%E1%BA%BFp%20kh%C3%B4ng%20t%C4%83ng.pdf",
          "hasTestCases": true,
          "testCaseZipUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Test%20case/Sap_Xep_Khong_Tang_Testcases.zip",
          "solutionCodeUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Test%20case/Sap_Xep_Khong_Tang_Tests/solution.cpp"
        },
        {
          "id": "cp-bronze-l2-p7-sap-xep-so-trong-xau-ts10-lqd-da-nang-2016",
          "title": "Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016)",
          "fileName": "Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016).pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BA%AFp%20x%E1%BA%BFp%20s%E1%BB%91%20trong%20x%C3%A2u%20(TS10%20LQ%C4%90%2C%20%C4%90%C3%A0%20N%E1%BA%B5ng%202016).pdf"
        },
        {
          "id": "cp-bronze-l2-p8-sap-xep-dem",
          "title": "Sắp xếp đếm",
          "fileName": "Sắp xếp đếm.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sắp xếp đếm. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BA%AFp%20x%E1%BA%BFp%20%C4%91%E1%BA%BFm.pdf"
        },
        {
          "id": "cp-bronze-l2-p9-so-lon-thu-k",
          "title": "Số lớn thứ k",
          "fileName": "Số lớn thứ k.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Số lớn thứ k. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BB%91%20l%E1%BB%9Bn%20th%E1%BB%A9%20k.pdf",
          "hasTestCases": true,
          "testCaseZipUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Test%20case/So_Lon_Thu_K_Testcases.zip",
          "solutionCodeUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Test%20case/So_Lon_Thu_K_Tests/solution.cpp"
        },
        {
          "id": "cp-bronze-l2-p10-so-nho-thu-k",
          "title": "Số nhỏ thứ k",
          "fileName": "Số nhỏ thứ k.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Số nhỏ thứ k. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/S%E1%BB%91%20nh%E1%BB%8F%20th%E1%BB%A9%20k.pdf",
          "hasTestCases": true,
          "testCaseZipUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Test%20case/So_Nho_Thu_K_Testcases.zip",
          "solutionCodeUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Test%20case/So_Nho_Thu_K_Tests/solution.cpp"
        },
        {
          "id": "cp-bronze-l2-p11-yugioh",
          "title": "Yugioh",
          "fileName": "Yugioh.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Yugioh. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/Yugioh.pdf"
        },
        {
          "id": "cp-bronze-l2-p12-o-cam",
          "title": "Ổ cắm",
          "fileName": "Ổ cắm.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ổ cắm. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20bai%202/%E1%BB%94%20c%E1%BA%AFm.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-3",
      "order": 3,
      "title": "Tìm kiếm nhị phân (Binary Search)",
      "theoryPdfFileName": "Tìm kiếm nhị phân (Binary Search).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/T%C3%ACm%20ki%E1%BA%BFm%20nh%E1%BB%8B%20ph%C3%A2n%20(Binary%20Search).pdf",
      "theorySummary": "Kỹ thuật tìm kiếm tối ưu trên không gian đã sắp xếp với O(log N). Mở rộng sang kỹ thuật chặt nhị phân trên không gian nghiệm (Binary Search on Answer).",
      "coreConcepts": [
        "std::lower_bound & std::upper_bound",
        "Binary Search trên mảng đã sắp xếp",
        "Hàm kiểm tra tính khả thi check(mid)",
        "Tìm kiếm nhị phân kết quả tối ưu"
      ],
      "problems": [
        {
          "id": "cp-bronze-l3-p1-bang-nhan",
          "title": "Bảng nhân",
          "fileName": "Bảng nhân.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bảng nhân. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/B%E1%BA%A3ng%20nh%C3%A2n.pdf"
        },
        {
          "id": "cp-bronze-l3-p2-factory-machines-may-trong-xuong",
          "title": "Factory Machines Máy trong xưởng",
          "fileName": "Factory Machines _ Máy trong xưởng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Factory Machines Máy trong xưởng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/Factory%20Machines%20_%20M%C3%A1y%20trong%20x%C6%B0%E1%BB%9Fng.pdf"
        },
        {
          "id": "cp-bronze-l3-p3-hoc-sinh-ham-choi",
          "title": "Học sinh ham chơi",
          "fileName": "Học sinh ham chơi.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Học sinh ham chơi. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/H%E1%BB%8Dc%20sinh%20ham%20ch%C6%A1i.pdf"
        },
        {
          "id": "cp-bronze-l3-p4-maxle",
          "title": "maxle",
          "fileName": "maxle.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán maxle. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/maxle.pdf"
        },
        {
          "id": "cp-bronze-l3-p5-minge",
          "title": "minge",
          "fileName": "minge.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán minge. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/minge.pdf"
        },
        {
          "id": "cp-bronze-l3-p6-nho-hon",
          "title": "Nhỏ hơn",
          "fileName": "Nhỏ hơn.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Nhỏ hơn. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/Nh%E1%BB%8F%20h%C6%A1n.pdf"
        },
        {
          "id": "cp-bronze-l3-p7-obnoxious",
          "title": "OBNOXIOUS",
          "fileName": "OBNOXIOUS.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán OBNOXIOUS. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/OBNOXIOUS.pdf"
        },
        {
          "id": "cp-bronze-l3-p8-tim-so-trong-mang",
          "title": "Tìm số trong mảng",
          "fileName": "Tìm số trong mảng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tìm số trong mảng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/T%C3%ACm%20s%E1%BB%91%20trong%20m%E1%BA%A3ng.pdf"
        },
        {
          "id": "cp-bronze-l3-p9-tap-xe",
          "title": "Tập xe",
          "fileName": "Tập xe.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tập xe. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/T%E1%BA%ADp%20xe.pdf"
        },
        {
          "id": "cp-bronze-l3-p10-vi-tri-zero-cuoi-cung",
          "title": "Vị trí zero cuối cùng",
          "fileName": "Vị trí zero cuối cùng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Vị trí zero cuối cùng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/V%E1%BB%8B%20tr%C3%AD%20zero%20cu%E1%BB%91i%20c%C3%B9ng.pdf"
        },
        {
          "id": "cp-bronze-l3-p11-dem-cap-doi-hsg-20",
          "title": "Đếm cặp đôi (HSG'20)",
          "fileName": "Đếm cặp đôi (HSG'20).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đếm cặp đôi (HSG'20). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/%C4%90%E1%BA%BFm%20c%E1%BA%B7p%20%C4%91%C3%B4i%20(HSG'20).pdf"
        },
        {
          "id": "cp-bronze-l3-p12-dem-so",
          "title": "Đếm số",
          "fileName": "Đếm số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đếm số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%203/%C4%90%E1%BA%BFm%20s%E1%BB%91.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-4",
      "order": 4,
      "title": "Mảng tiền tố & Tổng dồn (Prefix Sum)",
      "theoryPdfFileName": "Mảng tiền tố (Prefix Sum).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/M%E1%BA%A3ng%20ti%E1%BB%81n%20t%E1%BB%91%20(Prefix%20Sum).pdf",
      "theorySummary": "Tiền xử lý mảng trong O(N) để trả lời các truy vấn tính tổng đoạn con trong O(1). Kết hợp mảng hiệu (Difference Array) để cập nhật đoạn thần tốc.",
      "coreConcepts": [
        "Mảng cộng dồn 1D: pref[i] = pref[i-1] + a[i]",
        "Truy vấn tổng đoạn [L, R] trong O(1)",
        "Đếm số đoạn con có tổng bằng K (Prefix Sum + Hash Map)",
        "Mảng hiệu (Difference Array) cập nhật đoạn O(1)"
      ],
      "problems": [
        {
          "id": "cp-bronze-l4-p1-ambatukam",
          "title": "Ambatukam",
          "fileName": "Ambatukam.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ambatukam. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/Ambatukam.pdf"
        },
        {
          "id": "cp-bronze-l4-p2-bai-de-dhbb-2021",
          "title": "Bài dễ (DHBB 2021)",
          "fileName": "Bài dễ (DHBB 2021).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bài dễ (DHBB 2021). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/B%C3%A0i%20d%E1%BB%85%20(DHBB%202021).pdf"
        },
        {
          "id": "cp-bronze-l4-p3-dai-so",
          "title": "Dải số",
          "fileName": "Dải số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dải số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/D%E1%BA%A3i%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l4-p4-maximum-subarray-sum-tong-doan-con-lon-nhat",
          "title": "Maximum Subarray Sum Tổng đoạn con lớn nhất",
          "fileName": "Maximum Subarray Sum _ Tổng đoạn con lớn nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Maximum Subarray Sum Tổng đoạn con lớn nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/Maximum%20Subarray%20Sum%20_%20T%E1%BB%95ng%20%C4%91o%E1%BA%A1n%20con%20l%E1%BB%9Bn%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-bronze-l4-p5-mini-candy",
          "title": "MINI CANDY",
          "fileName": "MINI CANDY.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán MINI CANDY. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/MINI%20CANDY.pdf"
        },
        {
          "id": "cp-bronze-l4-p6-restaurant-customers-khach-nha-hang",
          "title": "Restaurant Customers Khách nhà hàng",
          "fileName": "Restaurant Customers _ Khách nhà hàng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Restaurant Customers Khách nhà hàng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/Restaurant%20Customers%20_%20Kh%C3%A1ch%20nh%C3%A0%20h%C3%A0ng.pdf"
        },
        {
          "id": "cp-bronze-l4-p7-static-range-sum-queries-truy-van-tong-mang-tinh",
          "title": "Static Range Sum Queries Truy vấn tổng mảng tĩnh",
          "fileName": "Static Range Sum Queries _ Truy vấn tổng mảng tĩnh.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Static Range Sum Queries Truy vấn tổng mảng tĩnh. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/Static%20Range%20Sum%20Queries%20_%20Truy%20v%E1%BA%A5n%20t%E1%BB%95ng%20m%E1%BA%A3ng%20t%C4%A9nh.pdf"
        },
        {
          "id": "cp-bronze-l4-p8-subarray-sums-i-tong-doan-con-i",
          "title": "Subarray Sums I Tổng đoạn con I",
          "fileName": "Subarray Sums I _ Tổng đoạn con I.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Subarray Sums I Tổng đoạn con I. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/Subarray%20Sums%20I%20_%20T%E1%BB%95ng%20%C4%91o%E1%BA%A1n%20con%20I.pdf"
        },
        {
          "id": "cp-bronze-l4-p9-tong-bang-0",
          "title": "Tổng bằng 0",
          "fileName": "Tổng bằng 0.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tổng bằng 0. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/T%E1%BB%95ng%20b%E1%BA%B1ng%200.pdf"
        },
        {
          "id": "cp-bronze-l4-p10-tong-day-con",
          "title": "Tổng dãy con",
          "fileName": "Tổng dãy con.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tổng dãy con. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/T%E1%BB%95ng%20d%C3%A3y%20con.pdf"
        },
        {
          "id": "cp-bronze-l4-p11-tong-k-so",
          "title": "Tổng k số",
          "fileName": "Tổng k số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tổng k số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/T%E1%BB%95ng%20k%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l4-p12-tong-lien-tiep-khong-qua-t",
          "title": "Tổng liên tiếp không quá t",
          "fileName": "Tổng liên tiếp không quá t.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tổng liên tiếp không quá t. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%204/T%E1%BB%95ng%20li%C3%AAn%20ti%E1%BA%BFp%20kh%C3%B4ng%20qu%C3%A1%20t.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-5",
      "order": 5,
      "title": "Kỹ thuật Hai con trỏ (Two Pointers)",
      "theoryPdfFileName": "Hai con trỏ (Two Pointers).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Hai%20con%20tr%E1%BB%8F%20(Two%20Pointers).pdf",
      "theorySummary": "Tối ưu độ phức tạp từ O(N^2) xuống O(N) bằng cách duy trì hai con trỏ di chuyển có định hướng trên dãy số hoặc cửa sổ trượt (Sliding Window).",
      "coreConcepts": [
        "Hai con trỏ đối đầu (Opposite Direction)",
        "Cửa sổ trượt (Sliding Window / Same Direction)",
        "Duy trì điều kiện thỏa mãn trong cửa sổ",
        "Tổng hai số, tổng ba số mục tiêu"
      ],
      "problems": [
        {
          "id": "cp-bronze-l5-p1-day-con-min-max",
          "title": "Dãy con min max",
          "fileName": "Dãy con min max.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dãy con min max. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/D%C3%A3y%20con%20min%20max.pdf"
        },
        {
          "id": "cp-bronze-l5-p2-ferris-wheel-banh-xe-ferris",
          "title": "Ferris Wheel Bánh xe Ferris",
          "fileName": "Ferris Wheel _ Bánh xe Ferris.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ferris Wheel Bánh xe Ferris. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Ferris%20Wheel%20_%20B%C3%A1nh%20xe%20Ferris.pdf"
        },
        {
          "id": "cp-bronze-l5-p3-playlist-danh-sach-phat",
          "title": "Playlist Danh sách phát",
          "fileName": "Playlist _ Danh sách phát.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Playlist Danh sách phát. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Playlist%20_%20Danh%20s%C3%A1ch%20ph%C3%A1t.pdf"
        },
        {
          "id": "cp-bronze-l5-p4-sum-of-three-values-tong-ba-gia-tri",
          "title": "Sum of Three Values Tổng ba giá trị",
          "fileName": "Sum of Three Values _ Tổng ba giá trị.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sum of Three Values Tổng ba giá trị. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Sum%20of%20Three%20Values%20_%20T%E1%BB%95ng%20ba%20gi%C3%A1%20tr%E1%BB%8B.pdf"
        },
        {
          "id": "cp-bronze-l5-p5-sum-of-two-values-tong-hai-gia-tri",
          "title": "Sum of Two Values Tổng hai giá trị",
          "fileName": "Sum of Two Values _ Tổng hai giá trị.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sum of Two Values Tổng hai giá trị. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Sum%20of%20Two%20Values%20_%20T%E1%BB%95ng%20hai%20gi%C3%A1%20tr%E1%BB%8B.pdf"
        },
        {
          "id": "cp-bronze-l5-p6-two-pointer-1a",
          "title": "Two pointer 1A",
          "fileName": "Two pointer 1A.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Two pointer 1A. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Two%20pointer%201A.pdf"
        },
        {
          "id": "cp-bronze-l5-p7-two-pointer-1b",
          "title": "Two pointer 1B",
          "fileName": "Two pointer 1B.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Two pointer 1B. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Two%20pointer%201B.pdf"
        },
        {
          "id": "cp-bronze-l5-p8-two-pointer-1c",
          "title": "Two pointer 1C",
          "fileName": "Two pointer 1C.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Two pointer 1C. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Two%20pointer%201C.pdf"
        },
        {
          "id": "cp-bronze-l5-p9-tim-cap-so",
          "title": "Tìm cặp số",
          "fileName": "Tìm cặp số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tìm cặp số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/T%C3%ACm%20c%E1%BA%B7p%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l5-p10-xin-chao-2",
          "title": "Xin chào 2",
          "fileName": "Xin chào 2.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xin chào 2. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/Xin%20ch%C3%A0o%202.pdf"
        },
        {
          "id": "cp-bronze-l5-p11-dem-cap",
          "title": "Đếm cặp",
          "fileName": "Đếm cặp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đếm cặp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%205/%C4%90%E1%BA%BFm%20c%E1%BA%B7p.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-6",
      "order": 6,
      "title": "Thuật toán Tham lam (Greedy)",
      "theoryPdfFileName": "Tham lam (Greedy).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Tham%20lam%20(Greedy).pdf",
      "theorySummary": "Chiến lược đưa ra lựa chọn tối ưu cục bộ tại mỗi bước với hy vọng đạt được lời giải tối ưu toàn cục. Chứng minh tính đúng đắn bằng phương pháp đổi chỗ.",
      "coreConcepts": [
        "Lựa chọn tối ưu địa phương (Local Optimum)",
        "Bài toán chọn khoảng không giao nhau (Interval Scheduling)",
        "Bài toán đổi tiền xu & phân phối tối ưu",
        "Chứng minh tính đúng đắn bằng Exchange Argument"
      ],
      "problems": [
        {
          "id": "cp-bronze-l6-p1-bien-doi-so",
          "title": "Biến đổi số",
          "fileName": "Biến đổi số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Biến đổi số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Bi%E1%BA%BFn%20%C4%91%E1%BB%95i%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l6-p2-bien-doi-xau-doi-xung",
          "title": "Biến đổi xâu đối xứng",
          "fileName": "Biến đổi xâu đối xứng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Biến đổi xâu đối xứng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Bi%E1%BA%BFn%20%C4%91%E1%BB%95i%20x%C3%A2u%20%C4%91%E1%BB%91i%20x%E1%BB%A9ng.pdf"
        },
        {
          "id": "cp-bronze-l6-p3-cau-hoi-so-99",
          "title": "Câu hỏi số 99",
          "fileName": "Câu hỏi số 99.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Câu hỏi số 99. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/C%C3%A2u%20h%E1%BB%8Fi%20s%E1%BB%91%2099.pdf"
        },
        {
          "id": "cp-bronze-l6-p4-gau-nuoc",
          "title": "Gàu nước",
          "fileName": "Gàu nước.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Gàu nước. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Ga%CC%80u%20n%C6%B0%C6%A1%CC%81c.pdf"
        },
        {
          "id": "cp-bronze-l6-p5-hieu-hai-so-nho-nhat-thta-son-tra-2022",
          "title": "Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022)",
          "fileName": "Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Hi%E1%BB%87u%20hai%20s%E1%BB%91%20nh%E1%BB%8F%20nh%E1%BA%A5t%20(THTA%20S%C6%A1n%20Tr%C3%A0%202022).pdf"
        },
        {
          "id": "cp-bronze-l6-p6-missing-coin-sum-tong-xu-bi-thieu",
          "title": "Missing Coin Sum Tổng xu bị thiếu",
          "fileName": "Missing Coin Sum _ Tổng xu bị thiếu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Missing Coin Sum Tổng xu bị thiếu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Missing%20Coin%20Sum%20_%20T%E1%BB%95ng%20xu%20b%E1%BB%8B%20thi%E1%BA%BFu.pdf"
        },
        {
          "id": "cp-bronze-l6-p7-movie-festival-le-hoi-phim",
          "title": "Movie Festival Lễ hội phim",
          "fileName": "Movie Festival _ Lễ hội phim.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Movie Festival Lễ hội phim. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Movie%20Festival%20_%20L%E1%BB%85%20h%E1%BB%99i%20phim.pdf"
        },
        {
          "id": "cp-bronze-l6-p8-mua-xang",
          "title": "Mua xăng",
          "fileName": "Mua xăng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Mua xăng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Mua%20x%C4%83ng.pdf"
        },
        {
          "id": "cp-bronze-l6-p9-palindrome-reorder-sap-xep-lai-xau-doi-xung",
          "title": "Palindrome Reorder Sắp xếp lại xâu đối xứng",
          "fileName": "Palindrome Reorder _ Sắp xếp lại xâu đối xứng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Palindrome Reorder Sắp xếp lại xâu đối xứng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Palindrome%20Reorder%20_%20S%E1%BA%AFp%20x%E1%BA%BFp%20l%E1%BA%A1i%20x%C3%A2u%20%C4%91%E1%BB%91i%20x%E1%BB%A9ng.pdf"
        },
        {
          "id": "cp-bronze-l6-p10-sua-diem",
          "title": "Sửa điểm",
          "fileName": "Sửa điểm.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sửa điểm. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/S%E1%BB%ADa%20%C4%91i%E1%BB%83m.pdf"
        },
        {
          "id": "cp-bronze-l6-p11-xin-chao-1",
          "title": "Xin chào 1",
          "fileName": "Xin chào 1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xin chào 1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/Xin%20ch%C3%A0o%201.pdf"
        },
        {
          "id": "cp-bronze-l6-p12-xau-min",
          "title": "Xâu min",
          "fileName": "Xâu min.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xâu min. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/X%C3%A2u%20min.pdf"
        },
        {
          "id": "cp-bronze-l6-p13-xau-doi-xung-hsg-20",
          "title": "Xâu đối xứng (HSG'20)",
          "fileName": "Xâu đối xứng (HSG'20).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xâu đối xứng (HSG'20). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%206/X%C3%A2u%20%C4%91%E1%BB%91i%20x%E1%BB%A9ng%20(HSG'20).pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-7",
      "order": 7,
      "title": "Toán học cơ bản (Basic Math)",
      "theoryPdfFileName": "Toán cơ bản (Basic Math).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/To%C3%A1n%20c%C6%A1%20b%E1%BA%A3n%20(Basic%20Math).pdf",
      "theorySummary": "Nền tảng lý thuyết số trong lập trình: Số nguyên tố, Sàng Eratosthenes, Ước chung lớn nhất (Euclid), Lũy thừa nhị phân và số học modulo.",
      "coreConcepts": [
        "Thuật toán Euclid tìm GCD và LCM",
        "Sàng số nguyên tố Eratosthenes O(N log log N)",
        "Lũy thừa nhị phân (Binary Exponentiation) O(log P)",
        "Phân tích thừa số nguyên tố O(sqrt(N))"
      ],
      "problems": [
        {
          "id": "cp-bronze-l7-p1-bit-strings-xau-nhi-phan",
          "title": "Bit Strings Xâu nhị phân",
          "fileName": "Bit Strings _ Xâu nhị phân.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bit Strings Xâu nhị phân. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/Bit%20Strings%20_%20X%C3%A2u%20nh%E1%BB%8B%20ph%C3%A2n.pdf"
        },
        {
          "id": "cp-bronze-l7-p2-counting-divisor-dem-uoc",
          "title": "Counting Divisor Đếm ước",
          "fileName": "Counting Divisor _ Đếm ước.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Counting Divisor Đếm ước. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/Counting%20Divisor%20_%20%C4%90%E1%BA%BFm%20%C6%B0%E1%BB%9Bc.pdf"
        },
        {
          "id": "cp-bronze-l7-p3-exponentiation-luy-thua",
          "title": "Exponentiation Lũy thừa",
          "fileName": "Exponentiation _ Lũy thừa.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Exponentiation Lũy thừa. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/Exponentiation%20_%20L%C5%A9y%20th%E1%BB%ABa.pdf"
        },
        {
          "id": "cp-bronze-l7-p4-kt-so-nguyen-to",
          "title": "KT Số nguyên tố",
          "fileName": "KT Số nguyên tố.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán KT Số nguyên tố. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/KT%20S%E1%BB%91%20nguy%C3%AAn%20t%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l7-p5-so-luong-uoc-so-cua-n",
          "title": "Số lượng ước số của n",
          "fileName": "Số lượng ước số của n.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Số lượng ước số của n. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/S%E1%BB%91%20l%C6%B0%E1%BB%A3ng%20%C6%B0%E1%BB%9Bc%20s%E1%BB%91%20c%E1%BB%A7a%20n.pdf"
        },
        {
          "id": "cp-bronze-l7-p6-so-nguyen-to",
          "title": "Số nguyên tố",
          "fileName": "Số nguyên tố.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Số nguyên tố. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/S%E1%BB%91%20nguy%C3%AAn%20t%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l7-p7-trailing-zeros-so-khong-o-cuoi",
          "title": "Trailing Zeros Số không ở cuối",
          "fileName": "Trailing Zeros _ Số không ở cuối.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Trailing Zeros Số không ở cuối. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/Trailing%20Zeros%20_%20S%E1%BB%91%20kh%C3%B4ng%20%E1%BB%9F%20cu%E1%BB%91i.pdf"
        },
        {
          "id": "cp-bronze-l7-p8-two-knights-hai-quan-ma",
          "title": "Two Knights Hai quân mã",
          "fileName": "Two Knights _ Hai quân mã.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Two Knights Hai quân mã. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/Two%20Knights%20_%20Hai%20qu%C3%A2n%20m%C3%A3.pdf"
        },
        {
          "id": "cp-bronze-l7-p9-tim-ucln-bcnn",
          "title": "Tìm UCLN, BCNN",
          "fileName": "Tìm UCLN, BCNN.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tìm UCLN, BCNN. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/T%C3%ACm%20UCLN%2C%20BCNN.pdf"
        },
        {
          "id": "cp-bronze-l7-p10-uoc-so-chung-ban-nang-cao",
          "title": "Ước số chung bản nâng cao",
          "fileName": "Ước số chung bản nâng cao.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ước số chung bản nâng cao. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/%C6%AF%E1%BB%9Bc%20s%E1%BB%91%20chung%20b%E1%BA%A3n%20n%C3%A2ng%20cao.pdf"
        },
        {
          "id": "cp-bronze-l7-p11-uoc-so-chung-lon-nhat-kho",
          "title": "Ước số chung lớn nhất (Khó)",
          "fileName": "Ước số chung lớn nhất (Khó).pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ước số chung lớn nhất (Khó). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/%C6%AF%E1%BB%9Bc%20s%E1%BB%91%20chung%20l%E1%BB%9Bn%20nh%E1%BA%A5t%20(Kh%C3%B3).pdf"
        },
        {
          "id": "cp-bronze-l7-p12-uoc-so-cua-n",
          "title": "Ước số của n",
          "fileName": "Ước số của n.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ước số của n. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%207/%C6%AF%E1%BB%9Bc%20s%E1%BB%91%20c%E1%BB%A7a%20n.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-8",
      "order": 8,
      "title": "Quay lui & Duyệt toàn bộ (Complete Search)",
      "theoryPdfFileName": "Quay lui & Duyệt toàn bộ (Complete Search).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Quay%20lui%20%26%20Duy%E1%BB%87t%20to%C3%A0n%20b%E1%BB%99%20(Complete%20Search).pdf",
      "theorySummary": "Phương pháp thử và sai có hệ thống để duyệt qua toàn bộ không gian nghiệm. Xây dựng cây đệ quy, kỹ thuật quay lui (Backtracking) và nhánh cận.",
      "coreConcepts": [
        "Sinh dãy nhị phân, tổ hợp, hoán vị",
        "Kỹ thuật đệ quy quay lui (Backtracking)",
        "Nhánh cận (Branch and Bound) cắt tỉa không gian tìm kiếm",
        "Bài toán N quân hậu và chia tập hợp"
      ],
      "problems": [
        {
          "id": "cp-bronze-l8-p1-apple-division-chia-tao",
          "title": "Apple Division Chia táo",
          "fileName": "Apple Division _ Chia táo.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Apple Division Chia táo. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Apple%20Division%20_%20Chia%20t%C3%A1o.pdf"
        },
        {
          "id": "cp-bronze-l8-p2-bieu-thuc-1",
          "title": "Biểu thức 1",
          "fileName": "Biểu thức 1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Biểu thức 1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Bi%E1%BB%83u%20th%E1%BB%A9c%201.pdf"
        },
        {
          "id": "cp-bronze-l8-p3-chessboard-and-queens-ban-co-va-quan-hau",
          "title": "Chessboard and Queens Bàn cờ và quân hậu",
          "fileName": "Chessboard and Queens _ Bàn cờ và quân hậu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chessboard and Queens Bàn cờ và quân hậu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Chessboard%20and%20Queens%20_%20B%C3%A0n%20c%E1%BB%9D%20v%C3%A0%20qu%C3%A2n%20h%E1%BA%ADu.pdf"
        },
        {
          "id": "cp-bronze-l8-p4-chia-bo-sua",
          "title": "Chia Bò Sữa",
          "fileName": "Chia Bò Sữa.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chia Bò Sữa. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Chia%20B%C3%B2%20S%E1%BB%AFa.pdf"
        },
        {
          "id": "cp-bronze-l8-p5-creating-strings-tao-xau",
          "title": "Creating Strings Tạo xâu",
          "fileName": "Creating Strings _ Tạo xâu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Creating Strings Tạo xâu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Creating%20Strings%20_%20T%E1%BA%A1o%20x%C3%A2u.pdf"
        },
        {
          "id": "cp-bronze-l8-p6-co-phai-so-fibo",
          "title": "Có phải số Fibo",
          "fileName": "Có phải số Fibo_.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Có phải số Fibo. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/C%C3%B3%20ph%E1%BA%A3i%20s%E1%BB%91%20Fibo_.pdf"
        },
        {
          "id": "cp-bronze-l8-p7-day-ngoac",
          "title": "Dãy ngoặc",
          "fileName": "Dãy ngoặc.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dãy ngoặc. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/D%C3%A3y%20ngo%E1%BA%B7c.pdf"
        },
        {
          "id": "cp-bronze-l8-p8-sinh-hoan-vi",
          "title": "Sinh hoán vị",
          "fileName": "Sinh hoán vị.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sinh hoán vị. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Sinh%20ho%C3%A1n%20v%E1%BB%8B.pdf"
        },
        {
          "id": "cp-bronze-l8-p9-sinh-nhi-phan",
          "title": "Sinh nhị phân",
          "fileName": "Sinh nhị phân.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sinh nhị phân. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Sinh%20nh%E1%BB%8B%20ph%C3%A2n.pdf"
        },
        {
          "id": "cp-bronze-l8-p10-sinh-to-hop",
          "title": "Sinh tổ hợp",
          "fileName": "Sinh tổ hợp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sinh tổ hợp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Sinh%20t%E1%BB%95%20h%E1%BB%A3p.pdf"
        },
        {
          "id": "cp-bronze-l8-p11-tower-of-hanoi-thap-ha-noi",
          "title": "Tower of Hanoi Tháp Hà Nội",
          "fileName": "Tower of Hanoi _ Tháp Hà Nội.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tower of Hanoi Tháp Hà Nội. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/Tower%20of%20Hanoi%20_%20Th%C3%A1p%20H%C3%A0%20N%E1%BB%99i.pdf"
        },
        {
          "id": "cp-bronze-l8-p12-tong-day-con-bang-k",
          "title": "Tổng dãy con bằng K",
          "fileName": "Tổng dãy con bằng K.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tổng dãy con bằng K. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%208/T%E1%BB%95ng%20d%C3%A3y%20con%20b%E1%BA%B1ng%20K.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-9",
      "order": 9,
      "title": "Quy hoạch động cơ bản (Basic DP)",
      "theoryPdfFileName": "Quy hoạch động cơ bản (Basic DP).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Quy%20ho%E1%BA%A1ch%20%C4%91%E1%BB%99ng%20c%C6%A1%20b%E1%BA%A3n%20(Basic%20DP).pdf",
      "theorySummary": "Phương pháp giải quyết bài toán lớn bằng cách phân rã thành các bài toán con gối nhau và lưu trữ kết quả. Xác định trạng thái và công thức truy hồi.",
      "coreConcepts": [
        "Tính chất gối nhau (Overlapping Subproblems)",
        "Cấu trúc con tối ưu (Optimal Substructure)",
        "Bài toán cái túi (0/1 Knapsack & Unbounded Knapsack)",
        "Dãy con tăng dài nhất (LIS O(N^2) và O(N log N))"
      ],
      "problems": [
        {
          "id": "cp-bronze-l9-p1-atcoder-educational-dp-contest-problem-a-frog-1",
          "title": "Atcoder Educational DP Contest - Problem A Frog 1",
          "fileName": "Atcoder Educational DP Contest - Problem A_ Frog 1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Atcoder Educational DP Contest - Problem A Frog 1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Atcoder%20Educational%20DP%20Contest%20-%20Problem%20A_%20Frog%201.pdf"
        },
        {
          "id": "cp-bronze-l9-p2-atcoder-educational-dp-contest-problem-b-frog-2",
          "title": "Atcoder Educational DP Contest - Problem B Frog 2",
          "fileName": "Atcoder Educational DP Contest - Problem B_ Frog 2.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Atcoder Educational DP Contest - Problem B Frog 2. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Atcoder%20Educational%20DP%20Contest%20-%20Problem%20B_%20Frog%202.pdf"
        },
        {
          "id": "cp-bronze-l9-p3-atcoder-educational-dp-contest-problem-c-vacation",
          "title": "Atcoder Educational DP Contest - Problem C Vacation",
          "fileName": "Atcoder Educational DP Contest - Problem C_ Vacation.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Atcoder Educational DP Contest - Problem C Vacation. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Atcoder%20Educational%20DP%20Contest%20-%20Problem%20C_%20Vacation.pdf"
        },
        {
          "id": "cp-bronze-l9-p4-bai-toan-ba-lo-1",
          "title": "Bài toán ba lô 1",
          "fileName": "Bài toán ba lô 1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bài toán ba lô 1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/B%C3%A0i%20to%C3%A1n%20ba%20l%C3%B4%201.pdf"
        },
        {
          "id": "cp-bronze-l9-p5-coin-combinations-i-ket-hop-dong-xu-i",
          "title": "Coin Combinations I Kết hợp đồng xu I",
          "fileName": "Coin Combinations I _ Kết hợp đồng xu I.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Coin Combinations I Kết hợp đồng xu I. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Coin%20Combinations%20I%20_%20K%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20xu%20I.pdf"
        },
        {
          "id": "cp-bronze-l9-p6-coin-combinations-ii-ket-hop-dong-xu-ii",
          "title": "Coin Combinations II Kết hợp đồng xu II",
          "fileName": "Coin Combinations II _ Kết hợp đồng xu II.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Coin Combinations II Kết hợp đồng xu II. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Coin%20Combinations%20II%20_%20K%E1%BA%BFt%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%20xu%20II.pdf"
        },
        {
          "id": "cp-bronze-l9-p7-dice-combinations-ket-hop-xuc-xac",
          "title": "Dice Combinations Kết hợp xúc xắc",
          "fileName": "Dice Combinations _ Kết hợp xúc xắc.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dice Combinations Kết hợp xúc xắc. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Dice%20Combinations%20_%20K%E1%BA%BFt%20h%E1%BB%A3p%20x%C3%BAc%20x%E1%BA%AFc.pdf"
        },
        {
          "id": "cp-bronze-l9-p8-day-con-tang-dai-nhat-ban-de",
          "title": "Dãy con tăng dài nhất (bản dễ)",
          "fileName": "Dãy con tăng dài nhất (bản dễ).pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dãy con tăng dài nhất (bản dễ). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/D%C3%A3y%20con%20t%C4%83ng%20d%C3%A0i%20nh%E1%BA%A5t%20(b%E1%BA%A3n%20d%E1%BB%85).pdf"
        },
        {
          "id": "cp-bronze-l9-p9-grid-paths-duong-di-tren-luoi",
          "title": "Grid Paths Đường đi trên lưới",
          "fileName": "Grid Paths _ Đường đi trên lưới.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Grid Paths Đường đi trên lưới. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Grid%20Paths%20_%20%C4%90%C6%B0%E1%BB%9Dng%20%C4%91i%20tr%C3%AAn%20l%C6%B0%E1%BB%9Bi.pdf"
        },
        {
          "id": "cp-bronze-l9-p10-minimizing-coins-giam-thieu-dong-xu",
          "title": "Minimizing Coins Giảm thiểu đồng xu",
          "fileName": "Minimizing Coins _ Giảm thiểu đồng xu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Minimizing Coins Giảm thiểu đồng xu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Minimizing%20Coins%20_%20Gi%E1%BA%A3m%20thi%E1%BB%83u%20%C4%91%E1%BB%93ng%20xu.pdf"
        },
        {
          "id": "cp-bronze-l9-p11-money-sums-khoan-tien",
          "title": "Money Sums Khoản tiền",
          "fileName": "Money Sums _ Khoản tiền.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Money Sums Khoản tiền. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Money%20Sums%20_%20Kho%E1%BA%A3n%20ti%E1%BB%81n.pdf"
        },
        {
          "id": "cp-bronze-l9-p12-removing-digits-loai-bo-chu-so",
          "title": "Removing Digits Loại bỏ chữ số",
          "fileName": "Removing Digits _ Loại bỏ chữ số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Removing Digits Loại bỏ chữ số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/Removing%20Digits%20_%20Lo%E1%BA%A1i%20b%E1%BB%8F%20ch%E1%BB%AF%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-bronze-l9-p13-tinh-so-fibo-thu-n",
          "title": "Tính số Fibo thứ n",
          "fileName": "Tính số Fibo thứ n.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tính số Fibo thứ n. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/T%C3%ADnh%20s%E1%BB%91%20Fibo%20th%E1%BB%A9%20n.pdf"
        },
        {
          "id": "cp-bronze-l9-p14-do-nuoc",
          "title": "Đo nước",
          "fileName": "Đo nước.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đo nước. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%209/%C4%90o%20n%C6%B0%E1%BB%9Bc.pdf"
        }
      ]
    },
    {
      "id": "cp-bronze-lesson-10",
      "order": 10,
      "title": "Đồ thị cơ bản (BFS & DFS)",
      "theoryPdfFileName": "Đồ thị cơ bản (BFS_DFS).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/%C4%90%E1%BB%93%20th%E1%BB%8B%20c%C6%A1%20b%E1%BA%A3n%20(BFS_DFS).pdf",
      "theorySummary": "Biểu diễn đồ thị bằng danh sách kề. Hai thuật toán duyệt đồ thị nền tảng: DFS (duyệt theo chiều sâu) và BFS (duyệt theo chiều rộng, tìm đường đi ngắn nhất không trọng số).",
      "coreConcepts": [
        "Biểu diễn đồ thị: Ma trận kề & Danh sách kề (Adjacency List)",
        "Duyệt theo chiều sâu (DFS) & Đếm thành phần liên thông",
        "Duyệt theo chiều rộng (BFS) & Đường đi ngắn nhất đồ thị vô hướng",
        "Kiểm tra chu trình và sắp xếp topo (Topological Sort)"
      ],
      "problems": [
        {
          "id": "cp-bronze-l10-p1-bfs-co-ban",
          "title": "BFS Cơ bản",
          "fileName": "BFS Cơ bản.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán BFS Cơ bản. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/BFS%20C%C6%A1%20b%E1%BA%A3n.pdf"
        },
        {
          "id": "cp-bronze-l10-p2-building-roads-xay-duong",
          "title": "Building Roads Xây đường",
          "fileName": "Building Roads _ Xây đường.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Building Roads Xây đường. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Building%20Roads%20_%20X%C3%A2y%20%C4%91%C6%B0%E1%BB%9Dng.pdf"
        },
        {
          "id": "cp-bronze-l10-p3-building-teams-xay-doi",
          "title": "Building Teams Xây đội",
          "fileName": "Building Teams _ Xây đội.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Building Teams Xây đội. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Building%20Teams%20_%20X%C3%A2y%20%C4%91%E1%BB%99i.pdf"
        },
        {
          "id": "cp-bronze-l10-p4-cj-thanh-toan-ballas",
          "title": "CJ thanh toán BALLAS",
          "fileName": "CJ thanh toán BALLAS.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán CJ thanh toán BALLAS. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/CJ%20thanh%20to%C3%A1n%20BALLAS.pdf"
        },
        {
          "id": "cp-bronze-l10-p5-counting-rooms-dem-phong",
          "title": "Counting Rooms Đếm phòng",
          "fileName": "Counting Rooms _ Đếm phòng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Counting Rooms Đếm phòng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Counting%20Rooms%20_%20%C4%90%E1%BA%BFm%20ph%C3%B2ng.pdf"
        },
        {
          "id": "cp-bronze-l10-p6-course-schedule-sap-xep-khoa-hoc",
          "title": "Course Schedule Sắp xếp khóa học",
          "fileName": "Course Schedule _ Sắp xếp khóa học.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Course Schedule Sắp xếp khóa học. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Course%20Schedule%20_%20S%E1%BA%AFp%20x%E1%BA%BFp%20kh%C3%B3a%20h%E1%BB%8Dc.pdf"
        },
        {
          "id": "cp-bronze-l10-p7-dfs-co-ban",
          "title": "DFS cơ bản",
          "fileName": "DFS cơ bản.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán DFS cơ bản. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/DFS%20c%C6%A1%20b%E1%BA%A3n.pdf"
        },
        {
          "id": "cp-bronze-l10-p8-eva",
          "title": "EVA",
          "fileName": "EVA.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán EVA. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/EVA.pdf"
        },
        {
          "id": "cp-bronze-l10-p9-labyrinth-me-cung",
          "title": "Labyrinth Mê cung",
          "fileName": "Labyrinth _ Mê cung.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Labyrinth Mê cung. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Labyrinth%20_%20M%C3%AA%20cung.pdf"
        },
        {
          "id": "cp-bronze-l10-p10-message-route-duong-truyen-tin-nhan",
          "title": "Message Route Đường truyền tin nhắn",
          "fileName": "Message Route _ Đường truyền tin nhắn.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Message Route Đường truyền tin nhắn. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Message%20Route%20_%20%C4%90%C6%B0%E1%BB%9Dng%20truy%E1%BB%81n%20tin%20nh%E1%BA%AFn.pdf"
        },
        {
          "id": "cp-bronze-l10-p11-quan-ly-vung-ballas",
          "title": "Quản lý vùng BALLAS",
          "fileName": "Quản lý vùng BALLAS.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Quản lý vùng BALLAS. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Qu%E1%BA%A3n%20l%C3%BD%20v%C3%B9ng%20BALLAS.pdf"
        },
        {
          "id": "cp-bronze-l10-p12-round-trip-chuyen-di-vong-tron",
          "title": "Round Trip Chuyến đi vòng tròn",
          "fileName": "Round Trip _ Chuyến đi vòng tròn.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Round Trip Chuyến đi vòng tròn. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-1/Ch%C6%B0%C6%A1ng%201%20b%C3%A0i%2010/Round%20Trip%20_%20Chuy%E1%BA%BFn%20%C4%91i%20v%C3%B2ng%20tr%C3%B2n.pdf"
        }
      ]
    }
  ]
},
  'cp-silver': {
  "id": "cp-silver",
  "title": "Lập Trình Thi Đấu Chuyên Sâu (Khóa Bạc)",
  "subtitle": "Thuật toán nâng cao & Luyện thi HSG Tỉnh / Quốc Gia",
  "levelBadge": "Khóa Bạc - CP Silver",
  "description": "Chinh phục kỹ thuật lập trình đỉnh cao: Monotonic Queue, 2D Difference Array, Cấu trúc dữ liệu nâng cao, String Hashing, Multi-source BFS, Cây & Tree DFS, Dijkstra và DP dãy xâu.",
  "accentColor": "cyan",
  "accentClass": "from-cyan-500 to-blue-600",
  "lessons": [
    {
      "id": "cp-silver-lesson-1",
      "order": 1,
      "title": "Class & Struct - Đóng gói đối tượng & Sắp xếp",
      "theoryPdfFileName": "Class & Struct - gói code thành đối tượng.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/b%C3%A0i%201/Class%20%26%20Struct%20-%20g%C3%B3i%20code%20th%C3%A0nh%20%C4%91%E1%BB%91i%20t%C6%B0%E1%BB%A3ng.pdf",
      "theorySummary": "Tổ chức dữ liệu chuyên nghiệp với struct và class trong C++. Nạp chồng toán tử so sánh để áp dụng sắp xếp đa tiêu chí cho các bài toán thi đấu.",
      "coreConcepts": [
        "Định nghĩa Struct & Class đa trường dữ liệu",
        "Nạp chồng toán tử operator< cho std::sort",
        "Hàm khởi tạo (Constructor) và phương thức thành viên",
        "Quản lý mảng đối tượng trong bài toán hình học / tọa độ"
      ],
      "problems": [
        {
          "id": "cp-silver-l1-p1-doraemon-va-nhung-chu-khi-kha-la-khong-lien-quan",
          "title": "Doraemon và những chú khỉ khá là không liên quan",
          "fileName": "Doraemon và những chú khỉ khá là không liên quan.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Doraemon và những chú khỉ khá là không liên quan. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/b%C3%A0i%201/Doraemon%20v%C3%A0%20nh%E1%BB%AFng%20ch%C3%BA%20kh%E1%BB%89%20kh%C3%A1%20l%C3%A0%20kh%C3%B4ng%20li%C3%AAn%20quan.pdf"
        },
        {
          "id": "cp-silver-l1-p2-findmax1",
          "title": "FINDMAX1",
          "fileName": "FINDMAX1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán FINDMAX1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/b%C3%A0i%201/FINDMAX1.pdf"
        },
        {
          "id": "cp-silver-l1-p3-queryarray",
          "title": "QUERYARRAY",
          "fileName": "QUERYARRAY.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán QUERYARRAY. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/b%C3%A0i%201/QUERYARRAY.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-2",
      "order": 2,
      "title": "Mảng tiền tố 2D & Difference Array",
      "theoryPdfFileName": "Mảng tiền tố 2D & Difference Array.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/M%E1%BA%A3ng%20ti%E1%BB%81n%20t%E1%BB%91%202D%20%26%20Difference%20Array.pdf",
      "theorySummary": "Mở rộng kỹ thuật cộng dồn và mảng hiệu lên lưới 2 chiều. Tính tổng hình chữ nhật con bất kỳ trong O(1) và cập nhật vùng chữ nhật hiệu quả.",
      "coreConcepts": [
        "Công thức 2D Prefix Sum: S[i][j] = S[i-1][j] + S[i][j-1] - S[i-1][j-1] + A[i][j]",
        "Truy vấn tổng hình chữ nhật con [x1, y1] đến [x2, y2] trong O(1)",
        "2D Difference Array (Mảng hiệu 2 chiều) cập nhật O(1)",
        "Ứng dụng trong xử lý ảnh và bài toán đếm ô vuông"
      ],
      "problems": [
        {
          "id": "cp-silver-l2-p1-bang-con",
          "title": "Bảng con",
          "fileName": "Bảng con.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bảng con. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/B%E1%BA%A3ng%20con.pdf"
        },
        {
          "id": "cp-silver-l2-p2-cong-tang-dan-vao-doan",
          "title": "Cộng tăng dần vào đoạn",
          "fileName": "Cộng tăng dần vào đoạn.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Cộng tăng dần vào đoạn. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/C%E1%BB%99ng%20t%C4%83ng%20d%E1%BA%A7n%20v%C3%A0o%20%C4%91o%E1%BA%A1n.pdf"
        },
        {
          "id": "cp-silver-l2-p3-forest-queries-truy-van-khu-rung",
          "title": "Forest Queries Truy vấn Khu rừng",
          "fileName": "Forest Queries _ Truy vấn Khu rừng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Forest Queries Truy vấn Khu rừng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/Forest%20Queries%20_%20Truy%20v%E1%BA%A5n%20Khu%20r%E1%BB%ABng.pdf"
        },
        {
          "id": "cp-silver-l2-p4-hinh-chu-nhat-thtb-tq-2017",
          "title": "Hình chữ nhật (THTB TQ 2017)",
          "fileName": "Hình chữ nhật (THTB TQ 2017).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hình chữ nhật (THTB TQ 2017). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/H%C3%ACnh%20ch%E1%BB%AF%20nh%E1%BA%ADt%20(THTB%20TQ%202017).pdf"
        },
        {
          "id": "cp-silver-l2-p5-hinh-chu-nhat-con",
          "title": "Hình chữ nhật con",
          "fileName": "Hình chữ nhật con.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hình chữ nhật con. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/H%C3%ACnh%20ch%E1%BB%AF%20nh%E1%BA%ADt%20con.pdf"
        },
        {
          "id": "cp-silver-l2-p6-range-xor-queries-truy-van-xor-doan",
          "title": "Range Xor Queries Truy vấn Xor đoạn",
          "fileName": "Range Xor Queries _ Truy vấn Xor đoạn.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Range Xor Queries Truy vấn Xor đoạn. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/Range%20Xor%20Queries%20_%20Truy%20v%E1%BA%A5n%20Xor%20%C4%91o%E1%BA%A1n.pdf"
        },
        {
          "id": "cp-silver-l2-p7-truy-van-tong-2d",
          "title": "Truy vấn tổng 2D",
          "fileName": "Truy vấn tổng 2D.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Truy vấn tổng 2D. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/Truy%20v%E1%BA%A5n%20t%E1%BB%95ng%202D.pdf"
        },
        {
          "id": "cp-silver-l2-p8-tang-doan-con-lien-tiep",
          "title": "Tăng đoạn con liên tiếp",
          "fileName": "Tăng đoạn con liên tiếp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tăng đoạn con liên tiếp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%202/T%C4%83ng%20%C4%91o%E1%BA%A1n%20con%20li%C3%AAn%20ti%E1%BA%BFp.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-3",
      "order": 3,
      "title": "Cấu trúc dữ liệu: Set, Map, Multiset",
      "theoryPdfFileName": "Cấu trúc dữ liệu_ Set, Map, Multiset.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/C%E1%BA%A5u%20tr%C3%BAc%20d%E1%BB%AF%20li%E1%BB%87u_%20Set%2C%20Map%2C%20Multiset.pdf",
      "theorySummary": "Sử dụng thuần thục cây đỏ đen (Red-Black Tree) thông qua std::set, std::multiset, std::map và bảng băm std::unordered_map trong thư viện STL C++.",
      "coreConcepts": [
        "std::set & std::multiset: Tìm kiếm, chèn, xóa trong O(log N)",
        "Kỹ thuật xóa một phần tử trong multiset: ms.erase(ms.find(x))",
        "std::map & std::unordered_map: Đếm tần suất và nén tọa độ",
        "Tìm kiếm giá trị cận trên / cận dưới: lower_bound / upper_bound trên set"
      ],
      "problems": [
        {
          "id": "cp-silver-l3-p1-basic-set",
          "title": "BASIC SET",
          "fileName": "BASIC SET.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán BASIC SET. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/BASIC%20SET.pdf"
        },
        {
          "id": "cp-silver-l3-p2-can-bang-hsg-9-ha-noi-2025-2026",
          "title": "Cân bằng (HSG 9 Hà Nội 2025-2026)",
          "fileName": "Bài 2. Cân bằng (HSG 9 Hà Nội 2025-2026).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Cân bằng (HSG 9 Hà Nội 2025-2026). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/B%C3%A0i%202.%20C%C3%A2n%20b%E1%BA%B1ng%20(HSG%209%20H%C3%A0%20N%E1%BB%99i%202025-2026).pdf"
        },
        {
          "id": "cp-silver-l3-p3-concert-tickets-ve-hoa-nhac",
          "title": "Concert Tickets Vé hòa nhạc",
          "fileName": "Concert Tickets _ Vé hòa nhạc.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Concert Tickets Vé hòa nhạc. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/Concert%20Tickets%20_%20V%C3%A9%20h%C3%B2a%20nh%E1%BA%A1c.pdf"
        },
        {
          "id": "cp-silver-l3-p4-ket-noi-dutpc-21",
          "title": "Kết nối (DUTPC'21)",
          "fileName": "Kết nối (DUTPC'21).pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Kết nối (DUTPC'21). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/K%E1%BA%BFt%20n%E1%BB%91i%20(DUTPC'21).pdf"
        },
        {
          "id": "cp-silver-l3-p5-minict26",
          "title": "minict26",
          "fileName": "minict26.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán minict26. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/minict26.pdf"
        },
        {
          "id": "cp-silver-l3-p6-mat-ma-hsg-9-ha-noi-2022-2023",
          "title": "Mật mã (HSG 9 Hà Nội 2022-2023)",
          "fileName": "Mật mã (HSG 9 Hà Nội 2022-2023).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Mật mã (HSG 9 Hà Nội 2022-2023). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/M%E1%BA%ADt%20m%C3%A3%20(HSG%209%20H%C3%A0%20N%E1%BB%99i%202022-2023).pdf"
        },
        {
          "id": "cp-silver-l3-p7-sap-xep-theo-tan-suat",
          "title": "Sắp xếp theo tần suất",
          "fileName": "Sắp xếp theo tần suất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sắp xếp theo tần suất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/S%E1%BA%AFp%20x%E1%BA%BFp%20theo%20t%E1%BA%A7n%20su%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l3-p8-traffic-lights-den-giao-thong",
          "title": "Traffic Lights Đèn giao thông",
          "fileName": "Traffic Lights _ Đèn giao thông.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Traffic Lights Đèn giao thông. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/Traffic%20Lights%20_%20%C4%90%C3%A8n%20giao%20th%C3%B4ng.pdf"
        },
        {
          "id": "cp-silver-l3-p9-xoa-k-phan-tu",
          "title": "Xóa k phần tử",
          "fileName": "Xóa k phần tử.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xóa k phần tử. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/X%C3%B3a%20k%20ph%E1%BA%A7n%20t%E1%BB%AD.pdf"
        },
        {
          "id": "cp-silver-l3-p10-dem-luy-thua",
          "title": "Đếm lũy thừa",
          "fileName": "Đếm lũy thừa.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đếm lũy thừa. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%203/%C4%90%E1%BA%BFm%20l%C5%A9y%20th%E1%BB%ABa.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-4",
      "order": 4,
      "title": "Stack, Queue & Monotonic Deque",
      "theoryPdfFileName": "Stack, Queue & Monotonic Deque.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Stack%2C%20Queue%20%26%20Monotonic%20Deque.pdf",
      "theorySummary": "Làm chủ ngăn xếp đơn điệu (Monotonic Stack) và hàng đợi hai đầu đơn điệu (Monotonic Deque) để giải quyết các bài toán tìm phần tử nhỏ hơn/lớn hơn gần nhất trong O(N).",
      "coreConcepts": [
        "Monotonic Stack: Tìm phần tử nhỏ hơn/lớn hơn gần nhất O(N)",
        "Bài toán hình chữ nhật lớn nhất trong biểu đồ cột (Largest Rectangle in Histogram)",
        "Monotonic Deque: Tìm giá trị cực trị trong cửa sổ trượt kích thước K",
        "Ứng dụng trong tối ưu hóa quy hoạch động"
      ],
      "problems": [
        {
          "id": "cp-silver-l4-p1-advertisement-quang-cao",
          "title": "Advertisement Quảng cáo",
          "fileName": "Advertisement _ Quảng cáo.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Advertisement Quảng cáo. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Advertisement%20_%20Qu%E1%BA%A3ng%20c%C3%A1o.pdf"
        },
        {
          "id": "cp-silver-l4-p2-bieu-thuc-hau-to",
          "title": "Biểu thức hậu tố",
          "fileName": "Biểu thức hậu tố.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Biểu thức hậu tố. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Bi%E1%BB%83u%20th%E1%BB%A9c%20h%E1%BA%ADu%20t%E1%BB%91.pdf"
        },
        {
          "id": "cp-silver-l4-p3-gia-tri-nho-nhat",
          "title": "Giá trị nhỏ nhất",
          "fileName": "Giá trị nhỏ nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Giá trị nhỏ nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Gi%C3%A1%20tr%E1%BB%8B%20nh%E1%BB%8F%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l4-p4-hist",
          "title": "HIST",
          "fileName": "HIST.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán HIST. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/HIST.pdf"
        },
        {
          "id": "cp-silver-l4-p5-hinh-chu-nhat-0-1",
          "title": "Hình chữ nhật 0 1",
          "fileName": "Hình chữ nhật 0 1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hình chữ nhật 0 1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/H%C3%ACnh%20ch%E1%BB%AF%20nh%E1%BA%ADt%200%201.pdf"
        },
        {
          "id": "cp-silver-l4-p6-hinh-chu-nhat-lon-nhat",
          "title": "Hình chữ nhật lớn nhất",
          "fileName": "Hình chữ nhật lớn nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hình chữ nhật lớn nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/H%C3%ACnh%20ch%E1%BB%AF%20nh%E1%BA%ADt%20l%E1%BB%9Bn%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l4-p7-nearest-smaller-values-gia-tri-nho-hon-gan-nhat",
          "title": "Nearest Smaller Values Giá trị nhỏ hơn gần nhất",
          "fileName": "Nearest Smaller Values _ Giá trị nhỏ hơn gần nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Nearest Smaller Values Giá trị nhỏ hơn gần nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Nearest%20Smaller%20Values%20_%20Gi%C3%A1%20tr%E1%BB%8B%20nh%E1%BB%8F%20h%C6%A1n%20g%E1%BA%A7n%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l4-p8-thuc-hien-bieu-thuc",
          "title": "Thực hiện biểu thức",
          "fileName": "Thực hiện biểu thức.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Thực hiện biểu thức. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Th%E1%BB%B1c%20hi%E1%BB%87n%20bi%E1%BB%83u%20th%E1%BB%A9c.pdf"
        },
        {
          "id": "cp-silver-l4-p9-tram-xang",
          "title": "Trạm xăng",
          "fileName": "Trạm xăng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Trạm xăng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/Tr%E1%BA%A1m%20x%C4%83ng.pdf"
        },
        {
          "id": "cp-silver-l4-p10-xau-ami",
          "title": "Xâu Ami",
          "fileName": "Xâu Ami.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xâu Ami. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/X%C3%A2u%20Ami.pdf"
        },
        {
          "id": "cp-silver-l4-p11-xay-dung-mang",
          "title": "Xây dựng mảng",
          "fileName": "Xây dựng mảng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xây dựng mảng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/X%C3%A2y%20d%E1%BB%B1ng%20m%E1%BA%A3ng.pdf"
        },
        {
          "id": "cp-silver-l4-p12-xep-hang",
          "title": "Xếp hàng",
          "fileName": "Xếp hàng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xếp hàng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/X%E1%BA%BFp%20h%C3%A0ng.pdf"
        },
        {
          "id": "cp-silver-l4-p13-du-chat",
          "title": "Đủ chất",
          "fileName": "Đủ chất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đủ chất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%204/%C4%90%E1%BB%A7%20ch%E1%BA%A5t.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-5",
      "order": 5,
      "title": "Đếm đoạn con & Cửa sổ trượt có trạng thái",
      "theoryPdfFileName": "Đếm đoạn con & cửa sổ với trạng thái.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/%C4%90%E1%BA%BFm%20%C4%91o%E1%BA%A1n%20con%20%26%20c%E1%BB%ADa%20s%E1%BB%95%20v%E1%BB%9Bi%20tr%E1%BA%A1ng%20th%C3%A1i.pdf",
      "theorySummary": "Kỹ thuật duy trì trạng thái phức tạp (số lượng phần tử phân biệt, tần suất chẵn lẻ, tổng chia hết) trên cửa sổ trượt hai con trỏ hoặc mảng cộng dồn.",
      "coreConcepts": [
        "Đếm đoạn con có đúng K phần tử phân biệt (atMost(K) - atMost(K-1))",
        "Cửa sổ trượt với bảng băm tần suất trạng thái",
        "Mảng cộng dồn Modulo: Tìm đoạn con có tổng chia hết cho K",
        "Bài toán phân phối và duy trì điều kiện biên"
      ],
      "problems": [
        {
          "id": "cp-silver-l5-p1-chum-den-hsg-9-da-nang-2023-2024",
          "title": "Chùm đèn (HSG 9 Đà Nẵng 2023-2024)",
          "fileName": "Chùm đèn (HSG 9 Đà Nẵng 2023-2024).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chùm đèn (HSG 9 Đà Nẵng 2023-2024). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/Ch%C3%B9m%20%C4%91%C3%A8n%20(HSG%209%20%C4%90%C3%A0%20N%E1%BA%B5ng%202023-2024).pdf"
        },
        {
          "id": "cp-silver-l5-p2-day-dai-nhat",
          "title": "Dãy dài nhất",
          "fileName": "Dãy dài nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dãy dài nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/D%C3%A3y%20d%C3%A0i%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l5-p3-subarray-distinct-values-gia-tri-phan-biet-trong-doan-con",
          "title": "Subarray Distinct Values Giá trị phân biệt trong đoạn con",
          "fileName": "Subarray Distinct Values _ Giá trị phân biệt trong đoạn con.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Subarray Distinct Values Giá trị phân biệt trong đoạn con. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/Subarray%20Distinct%20Values%20_%20Gi%C3%A1%20tr%E1%BB%8B%20ph%C3%A2n%20bi%E1%BB%87t%20trong%20%C4%91o%E1%BA%A1n%20con.pdf"
        },
        {
          "id": "cp-silver-l5-p4-subarray-divisibility-tinh-chia-het-cua-doan-con",
          "title": "Subarray Divisibility Tính chia hết của đoạn con",
          "fileName": "Subarray Divisibility _ Tính chia hết của đoạn con.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Subarray Divisibility Tính chia hết của đoạn con. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/Subarray%20Divisibility%20_%20T%C3%ADnh%20chia%20h%E1%BA%BFt%20c%E1%BB%A7a%20%C4%91o%E1%BA%A1n%20con.pdf"
        },
        {
          "id": "cp-silver-l5-p5-subarray-sums-ii-tong-doan-con-ii",
          "title": "Subarray Sums II Tổng đoạn con II",
          "fileName": "Subarray Sums II _ Tổng đoạn con II.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Subarray Sums II Tổng đoạn con II. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/Subarray%20Sums%20II%20_%20T%E1%BB%95ng%20%C4%91o%E1%BA%A1n%20con%20II.pdf"
        },
        {
          "id": "cp-silver-l5-p6-doan-con-hsg-thpt-ha-tinh-2023",
          "title": "Đoạn con (HSG THPT Hà Tĩnh 2023)",
          "fileName": "Đoạn con (HSG THPT Hà Tĩnh 2023).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đoạn con (HSG THPT Hà Tĩnh 2023). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/%C4%90o%E1%BA%A1n%20con%20(HSG%20THPT%20H%C3%A0%20T%C4%A9nh%202023).pdf"
        },
        {
          "id": "cp-silver-l5-p7-doan-duong-nham-chan",
          "title": "Đoạn đường nhàm chán",
          "fileName": "Đoạn đường nhàm chán.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đoạn đường nhàm chán. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/%C4%90o%E1%BA%A1n%20%C4%91%C6%B0%E1%BB%9Dng%20nh%C3%A0m%20ch%C3%A1n.pdf"
        },
        {
          "id": "cp-silver-l5-p8-dem-ki-tu",
          "title": "Đếm Kí Tự",
          "fileName": "Đếm Kí Tự.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đếm Kí Tự. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%205/%C4%90%E1%BA%BFm%20K%C3%AD%20T%E1%BB%B1.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-6",
      "order": 6,
      "title": "Tìm kiếm nhị phân trên không gian nghiệm",
      "theoryPdfFileName": "Tìm kiếm nhị phân trên đáp án.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/T%C3%ACm%20ki%E1%BA%BFm%20nh%E1%BB%8B%20ph%C3%A2n%20tr%C3%AAn%20%C4%91%C3%A1p%20%C3%A1n.pdf",
      "theorySummary": "Chuyển hóa bài toán tối ưu hóa (Optimization Problem) thành bài toán kiểm tra tính khả thi (Decision Problem) thông qua hàm check(mid) đơn điệu.",
      "coreConcepts": [
        "Nhận diện tính đơn điệu của hàm mục tiêu (Monotonicity)",
        "Kỹ thuật thiết kế hàm check(mid) bằng tham lam hoặc duyệt mảng",
        "Xác định khoảng tìm kiếm [low, high] và xử lý số thực / số nguyên",
        "Bài toán chia mảng thành K đoạn có tổng lớn nhất nhỏ nhất"
      ],
      "problems": [
        {
          "id": "cp-silver-l6-p1-caiwindao-va-3-em-gai",
          "title": "CaiWinDao và 3 em gái",
          "fileName": "CaiWinDao và 3 em gái.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán CaiWinDao và 3 em gái. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/CaiWinDao%20v%C3%A0%203%20em%20g%C3%A1i.pdf"
        },
        {
          "id": "cp-silver-l6-p2-chia-doan",
          "title": "Chia đoạn",
          "fileName": "Chia đoạn.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chia đoạn. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/Chia%20%C4%91o%E1%BA%A1n.pdf"
        },
        {
          "id": "cp-silver-l6-p3-chia-dat-olp-10-2018",
          "title": "Chia đất (OLP 10 - 2018)",
          "fileName": "Chia đất (OLP 10 - 2018).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chia đất (OLP 10 - 2018). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/Chia%20%C4%91%E1%BA%A5t%20(OLP%2010%20-%202018).pdf"
        },
        {
          "id": "cp-silver-l6-p4-du-lich",
          "title": "Du lịch",
          "fileName": "Du lịch.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Du lịch. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/Du%20l%E1%BB%8Bch.pdf"
        },
        {
          "id": "cp-silver-l6-p5-milktea",
          "title": "MILKTEA",
          "fileName": "MILKTEA.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán MILKTEA. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/MILKTEA.pdf"
        },
        {
          "id": "cp-silver-l6-p6-minecraft",
          "title": "Minecraft",
          "fileName": "Minecraft.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Minecraft. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/Minecraft.pdf"
        },
        {
          "id": "cp-silver-l6-p7-trau-an-co",
          "title": "Trâu ăn cỏ",
          "fileName": "Trâu ăn cỏ.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Trâu ăn cỏ. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/Tr%C3%A2u%20%C4%83n%20c%E1%BB%8F.pdf"
        },
        {
          "id": "cp-silver-l6-p8-tai-bai-giang",
          "title": "Tải bài giảng",
          "fileName": "Tải bài giảng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tải bài giảng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/T%E1%BA%A3i%20b%C3%A0i%20gi%E1%BA%A3ng.pdf"
        },
        {
          "id": "cp-silver-l6-p9-van-toc-truc-ox",
          "title": "Vận tốc trục Ox",
          "fileName": "Vận tốc trục Ox.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Vận tốc trục Ox. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/V%E1%BA%ADn%20t%E1%BB%91c%20tr%E1%BB%A5c%20Ox.pdf"
        },
        {
          "id": "cp-silver-l6-p10-xep-que-diem-thta-so-khao-toan-quoc-2024",
          "title": "Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024)",
          "fileName": "Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%206/X%E1%BA%BFp%20que%20di%C3%AAm%20(THTA%20S%C6%A1%20kh%E1%BA%A3o%20To%C3%A0n%20Qu%E1%BB%91c%202024).pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-7",
      "order": 7,
      "title": "Thuật toán Băm xâu (String Hashing)",
      "theoryPdfFileName": "Băm xâu (String Hashing).pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/B%C4%83m%20x%C3%A2u%20(String%20Hashing).pdf",
      "theorySummary": "Kỹ thuật Polynomial Rolling Hash cho phép so sánh hai xâu con bất kỳ trong O(1). Giải quyết các bài toán tìm kiếm mẫu xâu, chu kỳ và đối xứng siêu tốc.",
      "coreConcepts": [
        "Polynomial Rolling Hash: Hash(S) = sum(S[i] * base^(len-1-i)) mod MOD",
        "Tiền xử lý mảng băm và mảng lũy thừa base^k",
        "Lấy giá trị băm của xâu con [L, R] trong O(1)",
        "Kỹ thuật băm kép (Double Hashing) triệt tiêu nguy cơ xung đột (Collision)"
      ],
      "problems": [
        {
          "id": "cp-silver-l7-p1-finding-borders-tim-bien",
          "title": "Finding Borders Tìm biên",
          "fileName": "Finding Borders _ Tìm biên.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Finding Borders Tìm biên. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/Finding%20Borders%20_%20T%C3%ACm%20bi%C3%AAn.pdf"
        },
        {
          "id": "cp-silver-l7-p2-finding-periods-tim-chu-ki",
          "title": "Finding Periods Tìm chu kì",
          "fileName": "Finding Periods _ Tìm chu kì.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Finding Periods Tìm chu kì. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/Finding%20Periods%20_%20T%C3%ACm%20chu%20k%C3%AC.pdf"
        },
        {
          "id": "cp-silver-l7-p3-ghep-xau",
          "title": "Ghép xâu",
          "fileName": "Ghép xâu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ghép xâu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/Gh%C3%A9p%20x%C3%A2u.pdf"
        },
        {
          "id": "cp-silver-l7-p4-longest-palindrome-xau-doi-xung-dai-nhat",
          "title": "Longest Palindrome Xâu đối xứng dài nhất",
          "fileName": "Longest Palindrome _ Xâu đối xứng dài nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Longest Palindrome Xâu đối xứng dài nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/Longest%20Palindrome%20_%20X%C3%A2u%20%C4%91%E1%BB%91i%20x%E1%BB%A9ng%20d%C3%A0i%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l7-p5-pattern-positions-vi-tri-xau-con",
          "title": "Pattern Positions Vị trí xâu con",
          "fileName": "Pattern Positions _ Vị trí xâu con.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Pattern Positions Vị trí xâu con. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/Pattern%20Positions%20_%20V%E1%BB%8B%20tr%C3%AD%20x%C3%A2u%20con.pdf"
        },
        {
          "id": "cp-silver-l7-p6-repeating-substring-xau-con-lap",
          "title": "Repeating Substring Xâu con lặp",
          "fileName": "Repeating Substring _ _Xâu con lặp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Repeating Substring Xâu con lặp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/Repeating%20Substring%20_%20_X%C3%A2u%20con%20l%E1%BA%B7p.pdf"
        },
        {
          "id": "cp-silver-l7-p7-rut-gon-xau",
          "title": "Rút gọn xâu",
          "fileName": "Rút gọn xâu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Rút gọn xâu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/R%C3%BAt%20g%E1%BB%8Dn%20x%C3%A2u.pdf"
        },
        {
          "id": "cp-silver-l7-p8-string-matching-khop-xau",
          "title": "String Matching Khớp xâu",
          "fileName": "String Matching _ Khớp xâu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán String Matching Khớp xâu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/String%20Matching%20_%20Kh%E1%BB%9Bp%20x%C3%A2u.pdf"
        },
        {
          "id": "cp-silver-l7-p9-tao-palindrome",
          "title": "Tạo palindrome",
          "fileName": "Tạo palindrome.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tạo palindrome. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/T%E1%BA%A1o%20palindrome.pdf"
        },
        {
          "id": "cp-silver-l7-p10-xau-con-lap",
          "title": "Xâu con lặp",
          "fileName": "Xâu con lặp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xâu con lặp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/X%C3%A2u%20con%20l%E1%BA%B7p.pdf"
        },
        {
          "id": "cp-silver-l7-p11-uoc-chung-cua-chuoi",
          "title": "Ước chung của chuỗi",
          "fileName": "Ước chung của chuỗi.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ước chung của chuỗi. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%207/%C6%AF%E1%BB%9Bc%20chung%20c%E1%BB%A7a%20chu%E1%BB%97i.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-8",
      "order": 8,
      "title": "BFS/DFS trên lưới - Loang & Multi-source",
      "theoryPdfFileName": "BFS_DFS trên lưới - Floodfill & Multi-source.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/BFS_DFS%20tr%C3%AAn%20l%C6%B0%E1%BB%9Bi%20-%20Floodfill%20%26%20Multi-source.pdf",
      "theorySummary": "Áp dụng BFS và DFS trực tiếp trên ma trận 2 chiều. Thuật toán loang vùng (Flood Fill) và BFS đa nguồn (Multi-source BFS) tìm khoảng cách từ nhiều điểm xuất phát.",
      "coreConcepts": [
        "Mảng hướng di chuyển dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1}",
        "Flood Fill đếm diện tích ao hồ và phân chia vùng liên thông",
        "Multi-source BFS: Khởi tạo hàng đợi với toàn bộ điểm nguồn ban đầu",
        "Bài toán quái vật săn đuổi và thoát mê cung"
      ],
      "problems": [
        {
          "id": "cp-silver-l8-p1-ao-lang",
          "title": "Ao làng",
          "fileName": "Ao làng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Ao làng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/Ao%20l%C3%A0ng.pdf"
        },
        {
          "id": "cp-silver-l8-p2-bien-doi-ve-zero",
          "title": "Biến đổi về Zero",
          "fileName": "Biến đổi về Zero.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Biến đổi về Zero. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/Bi%E1%BA%BFn%20%C4%91%E1%BB%95i%20v%E1%BB%81%20Zero.pdf"
        },
        {
          "id": "cp-silver-l8-p3-bang-so",
          "title": "Bảng số",
          "fileName": "Bảng số.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bảng số. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/B%E1%BA%A3ng%20s%E1%BB%91.pdf"
        },
        {
          "id": "cp-silver-l8-p4-doraemon-tu-ky-voi-tro-choi-moi",
          "title": "Doraemon tự kỷ với trò chơi mới",
          "fileName": "Doraemon tự kỷ với trò chơi mới.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Doraemon tự kỷ với trò chơi mới. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/Doraemon%20t%E1%BB%B1%20k%E1%BB%B7%20v%E1%BB%9Bi%20tr%C3%B2%20ch%C6%A1i%20m%E1%BB%9Bi.pdf"
        },
        {
          "id": "cp-silver-l8-p5-hanh-tinh-dam-lay",
          "title": "Hành tinh đầm lầy",
          "fileName": "Hành tinh đầm lầy.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hành tinh đầm lầy. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/H%C3%A0nh%20tinh%20%C4%91%E1%BA%A7m%20l%E1%BA%A7y.pdf"
        },
        {
          "id": "cp-silver-l8-p6-king",
          "title": "KING",
          "fileName": "KING.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán KING. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/KING.pdf"
        },
        {
          "id": "cp-silver-l8-p7-knight",
          "title": "KNIGHT",
          "fileName": "KNIGHT.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán KNIGHT. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/KNIGHT.pdf"
        },
        {
          "id": "cp-silver-l8-p8-magic",
          "title": "MAGIC",
          "fileName": "MAGIC.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán MAGIC. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/MAGIC.pdf"
        },
        {
          "id": "cp-silver-l8-p9-monsters-quai-vat",
          "title": "Monsters Quái vật",
          "fileName": "Monsters _ Quái vật.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Monsters Quái vật. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/Monsters%20_%20Qu%C3%A1i%20v%E1%BA%ADt.pdf"
        },
        {
          "id": "cp-silver-l8-p10-so-tan",
          "title": "Sơ tán",
          "fileName": "Sơ tán.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Sơ tán. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/S%C6%A1%20t%C3%A1n.pdf"
        },
        {
          "id": "cp-silver-l8-p11-tim-duong-di-ngan-nhat-trong-me-cung",
          "title": "Tìm đường đi ngắn nhất trong mê cung",
          "fileName": "Tìm đường đi ngắn nhất trong mê cung.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tìm đường đi ngắn nhất trong mê cung. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/T%C3%ACm%20%C4%91%C6%B0%E1%BB%9Dng%20%C4%91i%20ng%E1%BA%AFn%20nh%E1%BA%A5t%20trong%20m%C3%AA%20cung.pdf"
        },
        {
          "id": "cp-silver-l8-p12-day-hop",
          "title": "Đẩy hộp",
          "fileName": "Đẩy hộp.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đẩy hộp. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%208/%C4%90%E1%BA%A9y%20h%E1%BB%99p.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-9",
      "order": 9,
      "title": "Cây cơ bản & Kỹ thuật DFS trên cây",
      "theoryPdfFileName": "Cây cơ bản & DFS trên cây.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/C%C3%A2y%20c%C6%A1%20b%E1%BA%A3n%20%26%20DFS%20tr%C3%AAn%20c%C3%A2y.pdf",
      "theorySummary": "Tính chất đặc biệt của cấu trúc cây (N đỉnh, N-1 cạnh, liên thông, không chu trình). Kỹ thuật DFS trên cây không cần mảng visited, tính đường kính cây và trọng tâm cây.",
      "coreConcepts": [
        "Duyệt cây với dfs(u, p): đỉnh hiện tại u và cha p",
        "Tính kích thước cây con: subtree_size[u] = 1 + sum(subtree_size[v])",
        "Đường kính của cây (Tree Diameter) bằng 2 lần BFS/DFS",
        "Tìm trọng tâm cây (Centroid of Tree) và ứng dụng phân rã"
      ],
      "problems": [
        {
          "id": "cp-silver-l9-p1-con-chau",
          "title": "Con cháu",
          "fileName": "Con cháu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Con cháu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/Con%20ch%C3%A1u.pdf"
        },
        {
          "id": "cp-silver-l9-p2-duyet-thu-muc",
          "title": "Duyệt thư mục",
          "fileName": "Duyệt thư mục.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Duyệt thư mục. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/Duy%E1%BB%87t%20th%C6%B0%20m%E1%BB%A5c.pdf"
        },
        {
          "id": "cp-silver-l9-p3-finding-a-centroid-tim-mot-trong-tam",
          "title": "Finding a Centroid Tìm một Trọng tâm",
          "fileName": "Finding a Centroid _ Tìm một Trọng tâm.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Finding a Centroid Tìm một Trọng tâm. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/Finding%20a%20Centroid%20_%20T%C3%ACm%20m%E1%BB%99t%20Tr%E1%BB%8Dng%20t%C3%A2m.pdf"
        },
        {
          "id": "cp-silver-l9-p4-he-thong-thung-chua-nuoc",
          "title": "Hệ thống thùng chứa nước",
          "fileName": "Hệ thống thùng chứa nước.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hệ thống thùng chứa nước. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/H%E1%BB%87%20th%E1%BB%91ng%20th%C3%B9ng%20ch%E1%BB%A9a%20n%C6%B0%E1%BB%9Bc.pdf"
        },
        {
          "id": "cp-silver-l9-p5-nuoc-lanh",
          "title": "Nước lạnh",
          "fileName": "Nước lạnh.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Nước lạnh. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/N%C6%B0%E1%BB%9Bc%20l%E1%BA%A1nh.pdf"
        },
        {
          "id": "cp-silver-l9-p6-software-olympic-30-4-k10-2023",
          "title": "Software (Olympic 30 4 K10 - 2023)",
          "fileName": "Software (Olympic 30_4 K10 - 2023).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Software (Olympic 30 4 K10 - 2023). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/Software%20(Olympic%2030_4%20K10%20-%202023).pdf"
        },
        {
          "id": "cp-silver-l9-p7-subordinates-cap-duoi",
          "title": "Subordinates Cấp dưới",
          "fileName": "Subordinates _ Cấp dưới.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Subordinates Cấp dưới. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/Subordinates%20_%20C%E1%BA%A5p%20d%C6%B0%E1%BB%9Bi.pdf"
        },
        {
          "id": "cp-silver-l9-p8-tree-diameter-duong-kinh-cua-cay",
          "title": "Tree Diameter Đường kính của cây",
          "fileName": "Tree Diameter _ Đường kính của cây.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tree Diameter Đường kính của cây. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/Tree%20Diameter%20_%20%C4%90%C6%B0%E1%BB%9Dng%20k%C3%ADnh%20c%E1%BB%A7a%20c%C3%A2y.pdf"
        },
        {
          "id": "cp-silver-l9-p9-tam-cua-cay",
          "title": "Tâm của cây",
          "fileName": "Tâm của cây.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tâm của cây. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%209/T%C3%A2m%20c%E1%BB%A7a%20c%C3%A2y.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-10",
      "order": 10,
      "title": "Đường đi ngắn nhất: Thuật toán Dijkstra",
      "theoryPdfFileName": "Đường đi ngắn nhất - Dijkstra.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/%C4%90%C6%B0%E1%BB%9Dng%20%C4%91i%20ng%E1%BA%AFn%20nh%E1%BA%A5t%20-%20Dijkstra.pdf",
      "theorySummary": "Thuật toán tìm đường đi ngắn nhất từ một đỉnh nguồn trên đồ thị có trọng số không âm sử dụng hàng đợi ưu tiên (std::priority_queue) với độ phức tạp O((V + E) log V).",
      "coreConcepts": [
        "std::priority_queue<pair<long long, int>, vector<...>, greater<...>>",
        "Mảng khoảng cách dist[] và kỹ thuật thư giãn cạnh (Edge Relaxation)",
        "Đếm số lượng đường đi ngắn nhất và khôi phục vết đường đi",
        "Dijkstra trên đồ thị trạng thái mở rộng (State Graph)"
      ],
      "problems": [
        {
          "id": "cp-silver-l10-p1-bao-yagi",
          "title": "Bão Yagi",
          "fileName": "Bão Yagi.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bão Yagi. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/B%C3%A3o%20Yagi.pdf"
        },
        {
          "id": "cp-silver-l10-p2-chuyen-di-da-ngoai",
          "title": "Chuyến đi dã ngoại",
          "fileName": "Chuyến đi dã ngoại.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chuyến đi dã ngoại. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Chuy%E1%BA%BFn%20%C4%91i%20d%C3%A3%20ngo%E1%BA%A1i.pdf"
        },
        {
          "id": "cp-silver-l10-p3-cj-du-tiec",
          "title": "CJ dự tiệc",
          "fileName": "CJ dự tiệc.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán CJ dự tiệc. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/CJ%20d%E1%BB%B1%20ti%E1%BB%87c.pdf"
        },
        {
          "id": "cp-silver-l10-p4-cj-khao-sat",
          "title": "CJ Khảo sát",
          "fileName": "CJ Khảo sát.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán CJ Khảo sát. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/CJ%20Kh%E1%BA%A3o%20s%C3%A1t.pdf"
        },
        {
          "id": "cp-silver-l10-p5-cj-o-vung-cao",
          "title": "CJ ở vùng cao",
          "fileName": "CJ ở vùng cao.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán CJ ở vùng cao. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/CJ%20%E1%BB%9F%20v%C3%B9ng%20cao.pdf"
        },
        {
          "id": "cp-silver-l10-p6-cycle-finding-tim-chu-trinh",
          "title": "Cycle Finding Tìm chu trình",
          "fileName": "Cycle Finding _ Tìm chu trình.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Cycle Finding Tìm chu trình. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Cycle%20Finding%20_%20T%C3%ACm%20chu%20tr%C3%ACnh.pdf"
        },
        {
          "id": "cp-silver-l10-p7-flight-discount-khuyen-mai-chuyen-bay",
          "title": "Flight Discount Khuyến mãi chuyến bay",
          "fileName": "Flight Discount _ Khuyến mãi chuyến bay.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Flight Discount Khuyến mãi chuyến bay. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Flight%20Discount%20_%20Khuy%E1%BA%BFn%20m%C3%A3i%20chuy%E1%BA%BFn%20bay.pdf"
        },
        {
          "id": "cp-silver-l10-p8-flight-routes-lo-trinh-bay",
          "title": "Flight Routes Lộ trình bay",
          "fileName": "Flight Routes _ Lộ trình bay.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Flight Routes Lộ trình bay. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Flight%20Routes%20_%20L%E1%BB%99%20tr%C3%ACnh%20bay.pdf"
        },
        {
          "id": "cp-silver-l10-p9-high-score-diem-cao",
          "title": "High Score Điểm cao",
          "fileName": "High Score _ Điểm cao.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán High Score Điểm cao. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/High%20Score%20_%20%C4%90i%E1%BB%83m%20cao.pdf"
        },
        {
          "id": "cp-silver-l10-p10-investigation-nghien-cuu",
          "title": "Investigation Nghiên cứu",
          "fileName": "Investigation _ Nghiên cứu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Investigation Nghiên cứu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Investigation%20_%20Nghi%C3%AAn%20c%E1%BB%A9u.pdf"
        },
        {
          "id": "cp-silver-l10-p11-logistics",
          "title": "Logistics",
          "fileName": "Logistics.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Logistics. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Logistics.pdf"
        },
        {
          "id": "cp-silver-l10-p12-nong-san",
          "title": "Nông san",
          "fileName": "Nông san.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Nông san. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/N%C3%B4ng%20san.pdf"
        },
        {
          "id": "cp-silver-l10-p13-shortest-routes-i-tuyen-duong-ngan-nhat-i",
          "title": "Shortest Routes I Tuyến đường ngắn nhất I",
          "fileName": "Shortest Routes I _ Tuyến đường ngắn nhất I.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Shortest Routes I Tuyến đường ngắn nhất I. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Shortest%20Routes%20I%20_%20Tuy%E1%BA%BFn%20%C4%91%C6%B0%E1%BB%9Dng%20ng%E1%BA%AFn%20nh%E1%BA%A5t%20I.pdf"
        },
        {
          "id": "cp-silver-l10-p14-shortest-routes-ii-tuyen-duong-ngan-nhat-ii",
          "title": "Shortest Routes II Tuyến đường ngắn nhất II",
          "fileName": "Shortest Routes II _ Tuyến đường ngắn nhất II.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Shortest Routes II Tuyến đường ngắn nhất II. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/Shortest%20Routes%20II%20_%20Tuy%E1%BA%BFn%20%C4%91%C6%B0%E1%BB%9Dng%20ng%E1%BA%AFn%20nh%E1%BA%A5t%20II.pdf"
        },
        {
          "id": "cp-silver-l10-p15-so-duong-di-ngan-nhat",
          "title": "Số đường đi ngắn nhất",
          "fileName": "Số đường đi ngắn nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Số đường đi ngắn nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/S%E1%BB%91%20%C4%91%C6%B0%E1%BB%9Dng%20%C4%91i%20ng%E1%BA%AFn%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l10-p16-travel1",
          "title": "TRAVEL1",
          "fileName": "TRAVEL1.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán TRAVEL1. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2010/TRAVEL1.pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-11",
      "order": 11,
      "title": "Quy hoạch động nâng cao trên dãy & xâu",
      "theoryPdfFileName": "Quy hoạch động nâng cao trên dãy & xâu.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Quy%20ho%E1%BA%A1ch%20%C4%91%E1%BB%99ng%20n%C3%A2ng%20cao%20tr%C3%AAn%20d%C3%A3y%20%26%20x%C3%A2u.pdf",
      "theorySummary": "Các bài toán quy hoạch động kinh điển chuyên sâu: Xâu con chung dài nhất (LCS), Khoảng cách biên tập (Edit Distance), LIS O(N log N) và tối ưu hóa không gian lưu trữ.",
      "coreConcepts": [
        "Longest Common Subsequence (LCS) 2 chiều và khôi phục vết",
        "Khoảng cách biên tập (Edit Distance / Levenshtein Distance)",
        "Dãy con tăng dài nhất LIS bằng Binary Search O(N log N)",
        "Tối ưu bộ nhớ mảng quy hoạch động (Rolling Array / 2 dòng)"
      ],
      "problems": [
        {
          "id": "cp-silver-l11-p1-bien-doi-xau",
          "title": "Biến đổi xâu",
          "fileName": "Biến đổi xâu.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Biến đổi xâu. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Bi%E1%BA%BFn%20%C4%91%E1%BB%95i%20x%C3%A2u.pdf"
        },
        {
          "id": "cp-silver-l11-p2-book-shop-hieu-sach",
          "title": "Book Shop Hiệu sách",
          "fileName": "Book Shop _ Hiệu sách.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Book Shop Hiệu sách. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Book%20Shop%20_%20Hi%E1%BB%87u%20s%C3%A1ch.pdf"
        },
        {
          "id": "cp-silver-l11-p3-bai-toan-ba-lo-2",
          "title": "Bài toán ba lô 2",
          "fileName": "Bài toán ba lô 2.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bài toán ba lô 2. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/B%C3%A0i%20to%C3%A1n%20ba%20l%C3%B4%202.pdf"
        },
        {
          "id": "cp-silver-l11-p4-bai-toan-ba-lo-3",
          "title": "Bài toán ba lô 3",
          "fileName": "Bài toán ba lô 3.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bài toán ba lô 3. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/B%C3%A0i%20to%C3%A1n%20ba%20l%C3%B4%203.pdf"
        },
        {
          "id": "cp-silver-l11-p5-day-con-tang-dai-nhat-ban-kho",
          "title": "Dãy con tăng dài nhất (bản khó)",
          "fileName": "Dãy con tăng dài nhất (bản khó).pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dãy con tăng dài nhất (bản khó). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/D%C3%A3y%20con%20t%C4%83ng%20d%C3%A0i%20nh%E1%BA%A5t%20(b%E1%BA%A3n%20kh%C3%B3).pdf"
        },
        {
          "id": "cp-silver-l11-p6-day-con-don-dieu-tang-dai-nhat",
          "title": "Dãy con đơn điệu tăng dài nhất",
          "fileName": "Dãy con đơn điệu tăng dài nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Dãy con đơn điệu tăng dài nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/D%C3%A3y%20con%20%C4%91%C6%A1n%20%C4%91i%E1%BB%87u%20t%C4%83ng%20d%C3%A0i%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l11-p7-edit-distance-khoang-cach-chinh-sua",
          "title": "Edit Distance Khoảng cách chỉnh sửa",
          "fileName": "Edit Distance _ Khoảng cách chỉnh sửa.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Edit Distance Khoảng cách chỉnh sửa. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Edit%20Distance%20_%20Kho%E1%BA%A3ng%20c%C3%A1ch%20ch%E1%BB%89nh%20s%E1%BB%ADa.pdf"
        },
        {
          "id": "cp-silver-l11-p8-increasing-subsequence-day-con-tang",
          "title": "Increasing Subsequence Dãy con tăng",
          "fileName": "Increasing Subsequence _ Dãy con tăng.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Increasing Subsequence Dãy con tăng. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Increasing%20Subsequence%20_%20D%C3%A3y%20con%20t%C4%83ng.pdf"
        },
        {
          "id": "cp-silver-l11-p9-rectangle-cutting-cat-hinh-chu-nhat",
          "title": "Rectangle Cutting Cắt hình chữ nhật",
          "fileName": "Rectangle Cutting _ Cắt hình chữ nhật.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Rectangle Cutting Cắt hình chữ nhật. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Rectangle%20Cutting%20_%20C%E1%BA%AFt%20h%C3%ACnh%20ch%E1%BB%AF%20nh%E1%BA%ADt.pdf"
        },
        {
          "id": "cp-silver-l11-p10-so-hieu-hoan-vi",
          "title": "Số hiệu hoán vị",
          "fileName": "Số hiệu hoán vị.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Số hiệu hoán vị. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/S%E1%BB%91%20hi%E1%BB%87u%20ho%C3%A1n%20v%E1%BB%8B.pdf"
        },
        {
          "id": "cp-silver-l11-p11-tien-te",
          "title": "Tiền tệ",
          "fileName": "Tiền tệ.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Tiền tệ. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Ti%E1%BB%81n%20t%E1%BB%87.pdf"
        },
        {
          "id": "cp-silver-l11-p12-tra-tien",
          "title": "Trả tiền",
          "fileName": "Trả tiền.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Trả tiền. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/Tr%E1%BA%A3%20ti%E1%BB%81n.pdf"
        },
        {
          "id": "cp-silver-l11-p13-xau-con-chung-dai-nhat",
          "title": "Xâu con chung dài nhất",
          "fileName": "Xâu con chung dài nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xâu con chung dài nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/X%C3%A2u%20con%20chung%20d%C3%A0i%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l11-p14-xau-con-chung-khong-lien-ke-dai-nhat",
          "title": "Xâu con chung không liền kề dài nhất",
          "fileName": "Xâu con chung không liền kề dài nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Xâu con chung không liền kề dài nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/X%C3%A2u%20con%20chung%20kh%C3%B4ng%20li%E1%BB%81n%20k%E1%BB%81%20d%C3%A0i%20nh%E1%BA%A5t.pdf"
        },
        {
          "id": "cp-silver-l11-p15-doan-con-hsg-thpt-ha-tinh-2023",
          "title": "Đoạn con (HSG THPT Hà Tĩnh 2023)",
          "fileName": "Đoạn con (HSG THPT Hà Tĩnh 2023).pdf",
          "source": "HSG",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Đoạn con (HSG THPT Hà Tĩnh 2023). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2011/%C4%90o%E1%BA%A1n%20con%20(HSG%20THPT%20H%C3%A0%20T%C4%A9nh%202023).pdf"
        }
      ]
    },
    {
      "id": "cp-silver-lesson-12",
      "order": 12,
      "title": "Toán số học & Tổ hợp chuyên sâu",
      "theoryPdfFileName": "Toán số học & tổ hợp.pdf",
      "theoryPdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/To%C3%A1n%20s%E1%BB%91%20h%E1%BB%8Dc%20%26%20t%E1%BB%95%20h%E1%BB%A3p.pdf",
      "theorySummary": "Công cụ toán học đỉnh cao cho kỳ thi HSG: Tổ hợp C(n, k) mod P, Định lý Fermat nhỏ tính nghịch đảo modulo (Modular Inverse), Dãy ngoặc đúng và số Catalan.",
      "coreConcepts": [
        "Nghịch đảo modulo bằng Fermat nhỏ: a^(P-2) mod P với P nguyên tố",
        "Tiền xử lý giai thừa fact[] và nghịch đảo giai thừa invFact[] O(N)",
        "Tính tổ hợp C(N, K) trong O(1) sau tiền xử lý",
        "Số Catalan và ứng dụng trong đếm dãy ngoặc hợp lệ"
      ],
      "problems": [
        {
          "id": "cp-silver-l12-p1-04-phan-tich-thua-so-nguyen-to",
          "title": "#04 - Phân tích thừa số nguyên tố",
          "fileName": "#04 - Phân tích thừa số nguyên tố.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán #04 - Phân tích thừa số nguyên tố. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/%2304%20-%20Ph%C3%A2n%20t%C3%ADch%20th%E1%BB%ABa%20s%E1%BB%91%20nguy%C3%AAn%20t%E1%BB%91.pdf"
        },
        {
          "id": "cp-silver-l12-p2-binomial-coefficients-he-so-nhi-thuc",
          "title": "Binomial Coefficients Hệ số nhị thức",
          "fileName": "Binomial Coefficients _ Hệ số nhị thức.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Binomial Coefficients Hệ số nhị thức. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Binomial%20Coefficients%20_%20H%E1%BB%87%20s%E1%BB%91%20nh%E1%BB%8B%20th%E1%BB%A9c.pdf"
        },
        {
          "id": "cp-silver-l12-p3-bracket-sequences-i-day-ngoac-i",
          "title": "Bracket Sequences I Dãy ngoặc I",
          "fileName": "Bracket Sequences I _ Dãy ngoặc I.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Bracket Sequences I Dãy ngoặc I. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Bracket%20Sequences%20I%20_%20D%C3%A3y%20ngo%E1%BA%B7c%20I.pdf"
        },
        {
          "id": "cp-silver-l12-p4-chia-het-cho-abc",
          "title": "Chia hết cho ABC",
          "fileName": "Chia hết cho ABC.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Chia hết cho ABC. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Chia%20h%E1%BA%BFt%20cho%20ABC.pdf"
        },
        {
          "id": "cp-silver-l12-p5-creating-strings-ii-tao-xau-ii",
          "title": "Creating Strings II Tạo xâu II",
          "fileName": "Creating Strings II _ Tạo xâu II.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Creating Strings II Tạo xâu II. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Creating%20Strings%20II%20_%20T%E1%BA%A1o%20x%C3%A2u%20II.pdf"
        },
        {
          "id": "cp-silver-l12-p6-distributing-apples-phan-phoi-tao",
          "title": "Distributing Apples Phân phối táo",
          "fileName": "Distributing Apples _ Phân phối táo.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Distributing Apples Phân phối táo. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Distributing%20Apples%20_%20Ph%C3%A2n%20ph%E1%BB%91i%20t%C3%A1o.pdf"
        },
        {
          "id": "cp-silver-l12-p7-exponentiation-ii-luy-thua-ii",
          "title": "Exponentiation II Lũy thừa II",
          "fileName": "Exponentiation II _ Lũy thừa II.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Exponentiation II Lũy thừa II. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Exponentiation%20II%20_%20L%C5%A9y%20th%E1%BB%ABa%20II.pdf"
        },
        {
          "id": "cp-silver-l12-p8-grid-paths-duong-di-tren-luoi",
          "title": "Grid Paths Đường đi trên lưới",
          "fileName": "Grid Paths _ Đường đi trên lưới.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Grid Paths Đường đi trên lưới. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Grid%20Paths%20_%20%C4%90%C6%B0%E1%BB%9Dng%20%C4%91i%20tr%C3%AAn%20l%C6%B0%E1%BB%9Bi.pdf"
        },
        {
          "id": "cp-silver-l12-p9-hoan-vi-khong-bat-dong-thtc-vong-khu-vuc-2021",
          "title": "Hoán vị không bất động (THTC Vòng Khu vực 2021)",
          "fileName": "Hoán vị không bất động (THTC Vòng Khu vực 2021).pdf",
          "source": "Olympic",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hoán vị không bất động (THTC Vòng Khu vực 2021). Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Ho%C3%A1n%20v%E1%BB%8B%20kh%C3%B4ng%20b%E1%BA%A5t%20%C4%91%E1%BB%99ng%20(THTC%20V%C3%B2ng%20Khu%20v%E1%BB%B1c%202021).pdf"
        },
        {
          "id": "cp-silver-l12-p10-he-so-bac-k",
          "title": "Hệ số bậc k",
          "fileName": "Hệ số bậc k.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Hệ số bậc k. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/H%E1%BB%87%20s%E1%BB%91%20b%E1%BA%ADc%20k.pdf"
        },
        {
          "id": "cp-silver-l12-p11-ln-ngam-trai",
          "title": "LN ngắm trai",
          "fileName": "LN ngắm trai.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán LN ngắm trai. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/LN%20ng%E1%BA%AFm%20trai.pdf"
        },
        {
          "id": "cp-silver-l12-p12-luy-thua-nhieu-lan",
          "title": "Lũy thừa nhiều lần",
          "fileName": "Lũy thừa nhiều lần.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Lũy thừa nhiều lần. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/L%C5%A9y%20th%E1%BB%ABa%20nhi%E1%BB%81u%20l%E1%BA%A7n.pdf"
        },
        {
          "id": "cp-silver-l12-p13-prime-multiples-boi-so-nguyen-to",
          "title": "Prime Multiples Bội số nguyên tố",
          "fileName": "Prime Multiples _ Bội số nguyên tố.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Prime Multiples Bội số nguyên tố. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Prime%20Multiples%20_%20B%E1%BB%99i%20s%E1%BB%91%20nguy%C3%AAn%20t%E1%BB%91.pdf"
        },
        {
          "id": "cp-silver-l12-p14-thua-so-nguyen-to-nho-nhat",
          "title": "Thừa số nguyên tố nhỏ nhất",
          "fileName": "Thừa số nguyên tố nhỏ nhất.pdf",
          "source": "Thuật toán",
          "timeLimit": "1.0s",
          "memoryLimit": "512MB",
          "point": 100,
          "preview": "Bài toán thuật toán Thừa số nguyên tố nhỏ nhất. Yêu cầu thiết kế giải thuật tối ưu theo đúng giới hạn thời gian và bộ nhớ.",
          "pdfUrl": "/cp-assets/chuong-2/B%C3%A0i%2012/Th%E1%BB%ABa%20s%E1%BB%91%20nguy%C3%AAn%20t%E1%BB%91%20nh%E1%BB%8F%20nh%E1%BA%A5t.pdf"
        }
      ]
    }
  ]
}
};

export const getCPCourseData = (courseId: string): CPCourseData | undefined => {
  if (courseId === 'cp-bronze' || courseId === 'cp-silver') {
    return CP_COURSES_DATA[courseId];
  }
  return undefined;
};
