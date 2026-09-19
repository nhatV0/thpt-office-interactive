import type { CPCourse } from '../types/cpCourse';

export const CP_COURSES_DATA: Record<string, CPCourse> = {
  "cp-basic": {
    "id": "cp-basic",
    "title": "Lập Trình Cơ Bản (C++ & Python)",
    "subtitle": "Nền tảng cú pháp, cấu trúc dữ liệu & tư duy lập trình",
    "levelBadge": "Khóa Cơ Bản",
    "description": "Trang bị nền móng vững chắc cho học sinh: Nhập xuất & biểu thức, Câu lệnh rẽ nhánh if/else, Vòng lặp for/while, Mảng 1 chiều, Xâu ký tự, Hàm & đệ quy, Xử lý chữ số và Kỹ thuật sắp xếp cơ bản.",
    "accentColor": "emerald",
    "accentClass": "from-emerald-500 to-teal-600",
    "lessons": [
      {
        "id": "cp-basic-lesson-1",
        "order": 1,
        "title": "Nhập xuất dữ liệu và biểu thức toán học",
        "theoryPdfFileName": "Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
        "theorySummary": "Làm quen với lập trình thi đấu, cấu trúc chương trình C++ và Python, các kiểu dữ liệu cơ bản, nhập xuất cin/cout/print và các phép toán số học.",
        "theoryContent": "Nhập xuất & Biểu thức (I/O & Expressions)\nNội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\nGiải thích:\n• C++:#include <iostream>cho phép sử dụngcout(xuất) vàcin(nhập).using\nnamespace std;giúp viết gọn hơn. Hàmmain()là điểm bắt đầu chương trình.\n• Python:Chỉ cần gọi *print()*— đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output — không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int,long long int 42, -7, 1000000\nSố thực float,double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• intchứa được giá trị tới khoảng2×10 9 (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùnglong long(tới khoảng9.2×10 18).\n• Dùngdoublethay vìfloatđể có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyênavàbtừ input:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input()đọc một dòng từ input dưới dạng xâu (string).\n• input().split()tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int, ...)chuyển từng phần tử sang số nguyên.\n• a, b = ...gán các giá trị vào biếnavàb.\nMẹo C++:Thêm dòng sau vào đầumain()để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"— chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endlhoặc\\ntrong C++,print()trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5−3 = 2\nNhân a * b a * b 5∗3 = 15\nChia (thực) (double)a / b a / b 7/2 = 3.5\nChia nguyên a / b a // b 7//2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++:Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu:(double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài:Cho hai số nguyênavàb. In ra tổng của chúng.\nInput:Một dòng chứa hai số nguyênavàb.\nOutput:In ra tổnga+b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài:Cho chiều dàiavà chiều rộngbcủa hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc()để\nthay đổi thứ tự:\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *,/,% Nhân, chia, chia dư\n3 (thấp nhất) +,- Cộng, trừ\nVí dụ:\n• 2 + 3∗4 = 2 + 12 = 14(không phải 20!)\n• (2 + 3)∗4 = 5∗4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai sốintnhân nhau, kết quả có thể vượt quá giới hạn củaint(2×109):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số — số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"— online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code — chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùnglong longnếu kết quả có thể lớn hơn2×10 9.",
        "coreConcepts": [
          "Cú pháp C++ & Python",
          "Kiểu dữ liệu nguyên & thực",
          "Nhập xuất cơ bản",
          "Định dạng số thập phân",
          "Biểu thức toán học"
        ],
        "problems": [
          {
            "id": "cp-basic-l1-p1-s-g-p-i",
            "title": "Số gấp đôi",
            "fileName": "Số gấp đôi.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Số gấp đôi. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/1. Số gấp đôi/Số gấp đôi.pdf",
            "problemContent": "Viết chương trình nhập vào số nguyên x, in ra màn hình số gấp đôi x.\n\nInput\n• Số nguyên x (| x |≤ 10^{9}).\n\nOutput\n• In ra số nguyên thỏa mãn.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p1.zip",
            "sampleInput": "12",
            "sampleOutput": "24\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "12",
                "output": "24\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p2-bi-u-th-c-1",
            "title": "Biểu thức #1",
            "fileName": "Biểu thức.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Biểu thức #1. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/2. Biểu thức 1/Biểu thức.pdf",
            "problemContent": "Viết chương trình nhập vào 3 số nguyên x, y và z. Hãy in ra màn hình giá trị biểu\nthức (x − y) × z.\n\nInput\n• Ba số nguyên x, y, z, mỗi số trên 1 dòng (| x |, | y |, | z |≤ 10^{9}).\n\nOutput\n• In ra số nguyên là đáp án.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p2.zip",
            "sampleInput": "10\n1\n3",
            "sampleOutput": "27\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "10\n1\n3",
                "output": "27\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p3-t-ch-hai-s",
            "title": "Tích hai số",
            "fileName": "Tích 2 số.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tích hai số. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/3. Tích 2 số/Tích 2 số.pdf",
            "problemContent": "Cho hai số nguyên A, B. Tính và in ra tích A × B.\n\nInput\n• Một dòng ghi hai số nguyên A, B (| A |, | B |≤ 10^{6}).\n\nOutput\n• In ra một số nguyên là tích A × B.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p3.zip",
            "sampleInput": "2 3",
            "sampleOutput": "6",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 3",
                "output": "6"
              },
              {
                "id": "Test 2",
                "input": "60 81",
                "output": "4860\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p4-t-ng-ba-s",
            "title": "Tổng ba số",
            "fileName": "Tongorr 3 số.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tổng ba số. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/4. Tổng 3 số/Tongorr 3 số.pdf",
            "problemContent": "Nhập vào 3 số nguyên. Tính và in ra tổng, tổng bình phương ba số.\n\nInput\n• Gồm ba dòng mỗi dòng ghi một số nguyên có giá trị tuyệt đối không quá 10^{6}.\n\nOutput\n• Dòng đầu ghi tổng ba số đã cho.\n• Dòng thứ hai ghi tổng bình phương ba số đã cho (theo định dạng như ví dụ mẫu).",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p4.zip",
            "sampleInput": "2\n4\n7",
            "sampleOutput": "Tong ba so: 13\nTong binh phuong ba so: 69",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n4\n7",
                "output": "Tong ba so: 13\nTong binh phuong ba so: 69"
              },
              {
                "id": "Test 2",
                "input": "-1\n5\n5",
                "output": "Tong ba so: 9\nTong binh phuong ba so: 51\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p5-i-kilo-rapound",
            "title": "Đổi kilo rapound",
            "fileName": "Đổi kilo ra pound.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đổi kilo rapound. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/5. Đổi kilo ra pound/Đổi kilo ra pound.pdf",
            "problemContent": "Cho một số là khối lượng ở đơn vị ki-lô-gam. Hãy đổi sang đơn vị pound biết rằng\n1 kg = 2. 205 pound.\n\nInput\n• Một số thực là khối lượng ở đơn vị kg.\n\nOutput\n• Một số thực là giá trị ở đơn vị pound được quy đổi. Lấy 2 chữ số phần thập phân.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p5.zip",
            "sampleInput": "4.5",
            "sampleOutput": "9.92\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "4.5",
                "output": "9.92\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p6-ph-p-to-n-s-h-c",
            "title": "Phép toán số học",
            "fileName": "phép toán số học.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Phép toán số học. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/6. phép toán số học/phép toán số học.pdf",
            "problemContent": "Viết chương trình nhập vào hai số nguyên, in ra kết quả của phép (+), phép trừ (-),\nphép nhân (∗), phép chia (/).\nChú ý đến kết quả chia 2 số nguyên.\n\nInput\n• Số nguyên a, b (1 ≤ a, b ≤ 10^{9}), mỗi số trên 1 dòng.\n\nOutput\n• Dòng đầu tiên in kết quả phép cộng a + b.\n• Dòng thứ hai in kết quả phép trừ a − b.\n• Dòng thứ ba in kết quả phép nhân a ∗ b.\n• Dòng cuối cùng in kết quả phép chia a/b (chỉ lấy phần nguyên như: 7 / 5 = 1).",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p6.zip",
            "sampleInput": "8\n4",
            "sampleOutput": "12\n4\n32\n2",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n4",
                "output": "12\n4\n32\n2"
              },
              {
                "id": "Test 2",
                "input": "13\n6",
                "output": "19\n7\n78\n2\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p7-t-m-ph-n",
            "title": "Tìm phần",
            "fileName": "Phép chia.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tìm phần. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/7. phép chia/Phép chia.pdf",
            "problemContent": "nguyên, phần dư phép chia\nCho hai số nguyên a, b. Tính và in ra phần nguyên, phần dư của phép chia a/b.\n\nInput\n• Dòng đầu ghi số a.\n• Dòng thứ hai ghi số b (| a |, | b |≤ 10^{6}).\n\nOutput\n• Một dòng ghi hai số nguyên lần lượt là phần nguyên, phần dư của phép chia a/b.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p7.zip",
            "sampleInput": "6\n2",
            "sampleOutput": "3 0",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n2",
                "output": "3 0"
              },
              {
                "id": "Test 2",
                "input": "9\n5",
                "output": "1 4\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p8-di-n-t-ch-chu-vi",
            "title": "Diện tích, chu vi",
            "fileName": "Diện tích chu vi.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Diện tích, chu vi. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/8. Diện tích, chu vi/Diện tích chu vi.pdf",
            "problemContent": "Cho hình chữ nhật có chiều dài và chiều rộng lần lượt là 7. 8 và 6. 4. Bạn hãy viết\nchương trình hiển thị ra màn hình thông tin sau:\nDT = {P1}\nCV = {P2}\nVới { P 1 } và { P 2 } lần lượt là diện tích và chu vi của hình chữ nhật cho trước.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p8.zip",
            "sampleInput": "7.8 6.4",
            "sampleOutput": "DT = 49.92\nCV = 28.4\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "7.8 6.4",
                "output": "DT = 49.92\nCV = 28.4\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p9-h-nh-tr-n",
            "title": "Hình tròn",
            "fileName": "Hình tròn.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Hình tròn. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/9. Hình tròn/Hình tròn.pdf",
            "problemContent": "Viết chương trình nhập vào số thực R là bán kính hình tròn, in ra chu vi và diện tích\nhình tròn (lấy 1 chữ số phần thập phân), với π = 3. 14.\n\nInput\n• Gồm một dòng chứa một số thực R là bán kính hình tròn (0 ≤ R ≤ 10^{4}).\n\nOutput\n• Dòng đầu tiên gồm 1 số thực là chu vi hình tròn.\n• Dòng tiếp theo gồm 1 số thực là diện tích hình tròn.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p9.zip",
            "sampleInput": "1",
            "sampleOutput": "6.3\n3.1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "1",
                "output": "6.3\n3.1"
              }
            ]
          },
          {
            "id": "cp-basic-l1-p10-t-ng-t-i-j",
            "title": "Tổng từ i -> j",
            "fileName": "Sum i j .pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tổng từ i -> j. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L1 - Nhập xuất/10. Tổng từ i - j/Sum i j .pdf",
            "problemContent": "Nhập 2 số nguyên dương i, j, in ra tổng các số nguyên dương từ i đến j.\nS = i + (i + 1) + (i + 2) + · · · + j\n(1 ≤ i ≤ j ≤ 10^{18})\n\nInput\n• Dòng 1 chứa số i.\n• Dòng 2 chứa số j.\n\nOutput\n• Chứa một số nguyên là tổng của dãy số S.\n\nScoring\n• Subtask 1 (80% số điểm): j ≤ 10^{9}.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l1-p10.zip",
            "sampleInput": "3\n5",
            "sampleOutput": "12",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n5",
                "output": "12"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-2",
        "order": 2,
        "title": "Câu lệnh rẽ nhánh (if/else)",
        "theoryPdfFileName": "Chapter 1 lesson 2 - Câu lệnh rẽ nhánh If else.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 2 - Câu lệnh rẽ nhánh If else.pdf",
        "theorySummary": "Toán tử so sánh, cấu trúc if, if-else, chuỗi if-elif-else, toán tử logic and/or/not và các bài toán phân loại điều kiện.",
        "theoryContent": "Câu lệnh rẽ nhánh (If/Else)\nNội dung\n1. Toán tử so sánh\n2. Câu lệnh if\n3. Câu lệnh if-else\n4. Chuỗi if-elif-else (nhiều nhánh)\n5. Toán tử logic\n6. Câu lệnh if lồng nhau\n7. Các mẫu (pattern) thường gặp\n• Tìm số lớn nhất (max) của hai số\n• Tìm số lớn nhất của ba số\n• Sắp xếp 2 số (in theo thứ tự tăng dần)\n• Kiểm tra năm nhuận\n• Kiểm tra số chính phương\n8. Mẹo và lỗi thường gặp\n• Lỗi 1: Nhầm = (gán) với == (so sánh)\n• Lỗi 2: Thiếu ngoặc nhọn trong C++\n• Lỗi 3: Thiếu thụt lề (indent) trong Python\n• Lỗi 4: Sai logic khi kết hợp điều kiện\n• Lỗi 5: So sánh số thực\n• Mẹo chung\n1. Toán tử so sánh\nTrước khi họcif, ta cần biết cách so sánh các giá trị. Kết quả của phép so sánh là đúng\n(true) hoặc sai (false).\nTOÁN TỬ Ý NGHĨA VÍ DỤ (TRUE)\n== Bằng nhau 5 == 5\n!= Khác nhau 5 != 3\n< Nhỏ hơn 3 < 5\n> Lớn hơn 5 > 3\n<= Nhỏ hơn hoặc bằng 5 <= 5\n>= Lớn hơn hoặc bằng 5 >= 3\nLưu ý quan trọng:==là so sánh,=là gán. Đây là lỗi rất phổ biến!\n2. Câu lệnh if\nCú pháp cơ bản:\nC++\nif (điều_kiện) {\n// Thực hiện nếu điều kiện đúng\n}\nPython\nif điều_kiện:\n# Thực hiện nếu điều kiện đúng (thụt vào 4 dấu cách)\nVí dụ: Kiểm tra số dương:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nif (n > 0) {\ncout << \"So duong\" << endl;\n}\nreturn 0;\n}\nPython\nn = int(input())\nif n > 0:\nprint(\"So duong\")\n3. Câu lệnh if-else\nKhi muốn xử lý cả hai trường hợp — điều kiện đúng và điều kiện sai:\nC++\nif (điều_kiện) {\n// Thực hiện nếu ĐÚNG\n} else {\n// Thực hiện nếu SAI\n}\nPython\nif điều_kiện:\n# Thực hiện nếu ĐÚNG\nelse:\n# Thực hiện nếu SAI\nVí dụ: Kiểm tra chẵn hay lẻ:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nif (n % 2 == 0) {\ncout << \"Chan\" << endl;\n} else {\ncout << \"Le\" << endl;\n}\nreturn 0;\n}\nPython\nn = int(input())\nif n % 2 == 0:\nprint(\"Chan\")\nelse:\nprint(\"Le\")\nGiải thích:n % 2là phần dư khi chia *n*cho2. Nếu dư0thìnchẵn, ngược lạinlẻ.\n4. Chuỗi if-elif-else (nhiều nhánh)\nKhi có nhiều trường hợp cần xét:\nC++\nif (điều_kiện_1) {\n// Trường hợp 1\n} else if (điều_kiện_2) {\n// Trường hợp 2\n} else if (điều_kiện_3) {\n// Trường hợp 3\n} else {\n// Trường hợp còn lại\n}\nPython\nif điều_kiện_1:\n# Trường hợp 1\nelif điều_kiện_2:\n# Trường hợp 2\nelif điều_kiện_3:\n# Trường hợp 3\nelse:\n# Trường hợp còn lại\nVí dụ: Xếp loại điểm:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint diem;\ncin >> diem;\nif (diem >= 9) {\ncout << \"Xuat sac\" << endl;\n} else if (diem >= 7) {\ncout << \"Kha\" << endl;\n} else if (diem >= 5) {\ncout << \"Trung binh\" << endl;\n} else {\ncout << \"Yeu\" << endl;\n}\nreturn 0;\n}\nPython\ndiem = int(input())\nif diem >= 9:\nprint(\"Xuat sac\")\nelif diem >= 7:\nprint(\"Kha\")\nelif diem >= 5:\nprint(\"Trung binh\")\nelse:\nprint(\"Yeu\")\nLưu ý:Các điều kiện được kiểm tra từ trên xuống. Khi một điều kiện đúng, cácelif\n/else ifbên dưới sẽ bị bỏ qua. Vì vậy, ta không cần viếtdiem >= 7 && diem < 9—\nchỉ cầndiem >= 7vì nếudiem >= 9thì đã rẽ vào nhánh trên rồi.\n5. Toán tử logic\nKhi cần kết hợp nhiều điều kiện:\nTOÁN TỬ C++ PYTHON Ý NGHĨA\nVÀ (AND) && and Đúng khi cả hai đều đúng\nHOẶC (OR) || or Đúng khi ít nhất một đúng\nPHỦ ĐỊNH (NOT) ! not Đảo ngược: đúng thành sai, sai thành đúng\nVí dụ: Kiểm tra số trong đoạn[1,100]:\nC++\nint n;\ncin >> n;\nif (n >= 1 && n <= 100) {\ncout << \"Trong doan [1, 100]\" << endl;\n} else {\ncout << \"Ngoai doan\" << endl;\n}\nPython\nn = int(input())\nif n >= 1 and n <= 100:\nprint(\"Trong doan [1, 100]\")\nelse:\nprint(\"Ngoai doan\")\nBảng chân trị (truth table):\nA B A AND B A OR B NOT A\ntrue true true true false\ntrue false false true false\nfalse true false true true\nfalse false false false true\n6. Câu lệnh if lồng nhau\nTa có thể đặtifbên trongifkhác:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b, c;\ncin >> a >> b >> c;\nif (a + b > c && b + c > a && a + c > b) {\n// Là tam giác — xét loại\nif (a == b && b == c) {\ncout << \"Tam giac deu\" << endl;\n} else if (a == b || b == c || a == c) {\ncout << \"Tam giac can\" << endl;\n} else {\ncout << \"Tam giac thuong\" << endl;\n}\n} else {\ncout << \"Khong la tam giac\" << endl;\n}\nreturn 0;\n}\nPython\na, b, c = map(int, input().split())\nif a + b > c and b + c > a and a + c > b:\n# Là tam giác — xét loại\nif a == b == c:\nprint(\"Tam giac deu\")\nelif a == b or b == c or a == c:\nprint(\"Tam giac can\")\nelse:\nprint(\"Tam giac thuong\")\nelse:\nprint(\"Khong la tam giac\")\n7. Các mẫu (pattern) thường gặp\nTìm số lớn nhất (max) của hai số\nC++\nint a, b;\ncin >> a >> b;\nint max_val;\nif (a > b) {\nmax_val = a;\n} else {\nmax_val = b;\n}\ncout << max_val << endl;\n// Hoặc dùng hàm có sẵn:\ncout << max(a, b) << endl;\nPython\na, b = map(int, input().split())\nif a > b:\nmax_val = a\nelse:\nmax_val = b\nprint(max_val)\n# Hoặc dùng hàm có sẵn:\nprint(max(a, b))\nTìm số lớn nhất của ba số\nC++\nint a, b, c;\ncin >> a >> b >> c;\ncout << max({a, b, c}) << endl;\n// Hoặc tự viết:\nint m = a;\nif (b > m) m = b;\nif (c > m) m = c;\ncout << m << endl;\nPython\na, b, c = map(int, input().split())\nprint(max(a, b, c))\n# Hoặc tự viết:\nm = a\nif b > m:\nm = b\nif c > m:\nm = c\nprint(m)\nSắp xếp 2 số (in theo thứ tự tăng dần)\nC++\nint a, b;\ncin >> a >> b;\nif (a > b) {\n// Hoán đổi (swap)\nint temp = a;\na = b;\nb = temp;\n// Hoặc: swap(a, b);\n}\ncout << a << \" \" << b << endl;\nPython\na, b = map(int, input().split())\nif a > b:\na, b = b, a # Python swap rất gọn!\nprint(a, b)\nKiểm tra năm nhuận\nMột năm là năm nhuận nếu:\n• Chia hết cho 4 VÀ không chia hết cho 100, HOẶC\n• Chia hết cho 400.\nC++\nint year;\ncin >> year;\nif ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\ncout << \"Leap year\" << endl;\n} else {\ncout << \"Not leap year\" << endl;\n}\nPython\nyear = int(input())\nif (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\nprint(\"Leap year\")\nelse:\nprint(\"Not leap year\")\nKiểm tra số chính phương\nMột sốnlà số chính phương nếu tồn tại số nguyênksao chok2 =n.\nC++\n#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nint k = (int)sqrt((double)n);\n// Kiểm tra cả k và k+1 để tránh sai số làm tròn của sqrt\nif (k * k == n || (k + 1) * (k + 1) == n) {\ncout << \"YES\" << endl;\n} else {\ncout << \"NO\" << endl;\n}\nreturn 0;\n}\nPython\nimport math\nn = int(input())\nk = int(math.sqrt(n))\n# Kiểm tra cả k và k+1 để tránh sai số làm tròn\nif k * k == n or (k + 1) * (k + 1) == n:\nprint(\"YES\")\nelse:\nprint(\"NO\")\n8. Mẹo và lỗi thường gặp\nLỗi 1: Nhầm = (gán) với == (so sánh)\nC++\n// SAI — đây là phép gán, không phải so sánh!\nif (x = 5) { // Luôn \"đúng\" vì gán x = 5, giá trị 5 != 0\ncout << \"x bang 5\" << endl;\n}\n// ĐÚNG\nif (x == 5) {\ncout << \"x bang 5\" << endl;\n}\nTrong Python,if x = 5:sẽ gây lỗi cú pháp (SyntaxError), nên dễ phát hiện hơn.\nLỗi 2: Thiếu ngoặc nhọn trong C++\nC++\n// SAI — chỉ dòng đầu tiên thuộc if, dòng thứ hai LUÔN chạy!\nif (x > 0)\ncout << \"Duong\" << endl;\ncout << \"Chac chan duong\" << endl; // Dòng này luôn chạy!\n// ĐÚNG — luôn dùng ngoặc nhọn\nif (x > 0) {\ncout << \"Duong\" << endl;\ncout << \"Chac chan duong\" << endl;\n}\nMẹo: Luôn dùng{}trong C++ dù chỉ có 1 dòng lệnh — tránh bug khó tìm.\nLỗi 3: Thiếu thụt lề (indent) trong Python\nPython\n# SAI — Python dựa vào thụt lề, thiếu sẽ lỗi!\nif x > 0:\nprint(\"Duong\") # IndentationError!\n# ĐÚNG\nif x > 0:\nprint(\"Duong\") # Thụt vào 4 dấu cách\nLỗi 4: Sai logic khi kết hợp điều kiện\nC++\n// SAI — muốn kiểm tra x trong [1, 10] nhưng viết sai\nif (x >= 1 || x <= 10) // Điều kiện này LUÔN đúng với mọi x!\n// ĐÚNG\nif (x >= 1 && x <= 10) // Dùng AND, không phải OR\nLỗi 5: So sánh số thực\nSố thực có sai số làm tròn, nên so sánh==có thể sai:\nC++\ndouble a = 0.1 + 0.2;\n// SAI — a có thể là 0.30000000000000004\nif (a == 0.3) { ... }\n// ĐÚNG — so sánh với sai số nhỏ (epsilon)\nif (abs(a - 0.3) < 1e-9) { ... }\nMẹo chung\n• Luôn xét các trường hợp biên: số 0, số âm, giá trị min/max.\n• Khi có nhiều nhánh, vẽ ra giấy hoặc liệt kê tất cả trường hợp trước khi code.\n• Kiểm tra kỹ thứ tự các điều kiện trong if-elif — điều kiện chặt hơn nên đứng trước.\n• Test chương trình với nhiều input khác nhau, đặc biệt các trường hợp giáp ranh.",
        "coreConcepts": [
          "Toán tử so sánh",
          "Cấu trúc rẽ nhánh if/else",
          "Logic AND / OR / NOT",
          "Tìm Max/Min nhiều số",
          "Kiểm tra điều kiện hình học"
        ],
        "problems": [
          {
            "id": "cp-basic-l2-p1-t-nh-ch-n-l",
            "title": "Tính chẵn/lẻ",
            "fileName": "tính chẵn lẻ.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tính chẵn/lẻ. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/1. Tính chẳn lẻ/tính chẵn lẻ.pdf",
            "problemContent": "Viết chương trình nhập vào một số nguyên dương x. In ra chữ YES nếu x là số chẵn,\nngược lại in chữ NO.\n\nInput\n• Một số nguyên dương x không vượt quá 10^{15} = 1. 000. 000. 000. 000. 000.\n\nOutput\n• In ra chữ YES nếu x là số chẵn, ngược lại in chữ NO.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p1.zip",
            "sampleInput": "1",
            "sampleOutput": "NO",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "1",
                "output": "NO"
              },
              {
                "id": "Test 2",
                "input": "12",
                "output": "YES\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p2-max-3-s",
            "title": "Max 3 số",
            "fileName": "Max 3 số.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Max 3 số. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/2. Max 3 số/Max 3 số.pdf",
            "problemContent": "Viết chương trình nhập vào ba số nguyên a, b, c. In ra số lớn nhất của 3 số đó.\n\nInput\n• Ba số nguyên a, b, c mỗi số trên 1 dòng.\n\nOutput\n• Một số nguyên là giá trị lớn nhất của 3 số.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p2.zip",
            "sampleInput": "2\n6\n3",
            "sampleOutput": "6",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n6\n3",
                "output": "6"
              },
              {
                "id": "Test 2",
                "input": "-243\n-543\n-123",
                "output": "-123\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p3-min-4-s",
            "title": "Min 4 số",
            "fileName": "Min 4 số.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Min 4 số. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/3. Min 4 số/Min 4 số.pdf",
            "problemContent": "Viết chương trình nhập vào bốn số nguyên a, b, c, d. In ra số nhỏ nhất của 4 số đó.\n\nInput\n• Bốn số nguyên a, b, c, d mỗi số trên 1 dòng.\n\nOutput\n• Một số nguyên là giá trị nhỏ nhất của 4 số.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p3.zip",
            "sampleInput": "2\n6\n3\n9",
            "sampleOutput": "2",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n6\n3\n9",
                "output": "2"
              },
              {
                "id": "Test 2",
                "input": "-243\n-543\n-123\n232",
                "output": "-543\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p4-s-p-x-p-2-s",
            "title": "Sắp xếp 2 số",
            "fileName": "Sắp xếp 2 số.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Sắp xếp 2 số. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/4. Sắp xếp 2 số/Sắp xếp 2 số.pdf",
            "problemContent": "Viết chương trình nhập vào hai số nguyên a, b. In ra hai số đó theo thứ tự nhỏ đến\nlớn.\n\nInput\n• Hai số nguyên a, b mỗi số trên 1 dòng.\n\nOutput\n• In ra hai số đó theo thứ tự nhỏ đến lớn.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p4.zip",
            "sampleInput": "2\n6",
            "sampleOutput": "2 6",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n6",
                "output": "2 6"
              },
              {
                "id": "Test 2",
                "input": "-243\n-543",
                "output": "-543 -243\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p5-s-ch-nh-ph-ng",
            "title": "Số chính phương",
            "fileName": "Số chính phương.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Số chính phương. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/5. Số chính phương/Số chính phương.pdf",
            "problemContent": "Viết chương trình nhập vào một số nguyên n. Kiểm tra xem n có phải là số chính\nphương hay không?\n(Số chính phương là bình phương của một số nguyên ví dụ như 16 = 4 2).\n\nInput\n• Một số nguyên dương n.\n\nOutput\n• Nếu n là số chính phương thì in YES, ngược lại in NO.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p5.zip",
            "sampleInput": "16",
            "sampleOutput": "YES",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "16",
                "output": "YES"
              },
              {
                "id": "Test 2",
                "input": "10",
                "output": "NO\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p6-ki-m-tra-n-m",
            "title": "Kiểm tra năm",
            "fileName": "Năm nhuận.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Kiểm tra năm. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/6. Kiểm tra năm nhuận/Năm nhuận.pdf",
            "problemContent": "nhuận (T76)\nNăm nhuận là những năm chia hết cho 400 hoặc là những năm chia hết cho 4 mà\nkhông chia hết cho 100. Nhập vào một số nguyên dương n, hãy đưa thông báo \"Khong la\nnam nhuan\"nếu năm n không phải năm nhuận; \"Nam nhuan\"nếu n là năm nhuận.\n\nInput\n• Một số nguyên n (1 ≤ n ≤ 10^{6}).\n\nOutput\n• In ra kết quả.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p6.zip",
            "sampleInput": "2000",
            "sampleOutput": "Nam nhuan\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2000",
                "output": "Nam nhuan\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p7-chia-k-o",
            "title": "Chia kẹo",
            "fileName": "Chia kẹo.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Chia kẹo. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/7. Chia kẹo/Chia kẹo.pdf",
            "problemContent": "Có n gói kẹo, mỗi gói có số lượng kẹo bằng nhau. Người ta đem chia đều tất cả số kẹo\nnày cho m em thiếu nhi sao cho em nào cũng nhận được số lượng kẹo như nhau và số kẹo\ncòn dư là ít nhất. Hỏi mỗi em nhận được bao nhiêu gói kẹo và còn dư mấy gói kẹo?\n\nInput\n• Một dòng ghi hai số nguyên n, m (1 ≤ n, m ≤ 10^{9}).\n\nOutput\n• Gồm một dòng ghi hai số nguyên lần lượt là số gói kẹo mỗi em nhận được và số gói\nkẹo còn dư.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p7.zip",
            "sampleInput": "11 4",
            "sampleOutput": "2 3\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "11 4",
                "output": "2 3\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p8-i-m-trung-b-nh-m-n",
            "title": "Điểm trung bình môn",
            "fileName": "Điểm trung bình môn.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Điểm trung bình môn. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/8. Điểm trung bình môn/Điểm trung bình môn.pdf",
            "problemContent": "Khôi vừa nhận được điểm học kỳ vừa rồi. 3 điểm Toán, Văn, Anh tương ứng với a, b, c.\nHãy tính xem kỳ này Khôi được hạnh kiểm gì nhé!\nBiết rằng điểm Toán, Văn thuộc hệ số 2.\n\nInput\nGồm 3 dòng:\n• Dòng thứ nhất chứa số a\n• Dòng thứ hai chứa số b\n• Dòng thứ ba chứa số c\n\nOutput\n• Nếu điểm trung bình của Khôi ≥ 8 thì in ra \"gioi\", ngược lại nếu dtb của Khôi\n≥ 6. 5 thì in ra \"kha banh\", ngược lại nếu dtb của Khôi ≥ 5. 0 thì in ra \"trung binh\",\nngược lại in ra \"yeu\".\n\nScoring\n• 0 ≤ a, b, c ≤ 10",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p8.zip",
            "sampleInput": "8.1\n8.2\n8.3",
            "sampleOutput": "gioi\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "8.1\n8.2\n8.3",
                "output": "gioi\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p9-t-nh-ch-s-c-n-n-ng",
            "title": "Tính chỉ số cân nặng",
            "fileName": "Tính BMI.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tính chỉ số cân nặng. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/9. Tính BMI/Tính BMI.pdf",
            "problemContent": "Một người cân nặng w (kg) và cao h (m) sẽ có chỉ số BM I = w/h 2. Bảng dưới đây là\nbảng đánh giá sức khoẻ cho người Châu Á theo chỉ số BM I. Hãy viết chương trình đánh\ngiá sức khoẻ của một người dựa vào giá trị w, h của họ.\n• BM I < 18. 5 = ⇒ Thiếu cân.\n• 18. 5 ≤ BM I ≤ 22. 9 = ⇒ Bình thường.\n• BM I > 22. 9 = ⇒ Thừa cân.\n\nInput\n• Dòng đầu ghi w là số cân nặng ở đơn vị kg.\n• Dòng thứ hai ghi h là chiều cao ở đơn vị m. Các giá trị đều là số thực dương.\n\nOutput\n• Gồm một dòng ghi Thieu can, Binh thuong hoặc Thua can tuỳ theo giá trị BM I\ncủa người đó.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p9.zip",
            "sampleInput": "55\n1.65",
            "sampleOutput": "Binh thuong\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "55\n1.65",
                "output": "Binh thuong\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p10-tam-gi-c-kh-ng-c-n",
            "title": "Tam giác không cân",
            "fileName": "Tam giác không cân.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tam giác không cân. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/10. Tam giác không cân/Tam giác không cân.pdf",
            "problemContent": "Để tham gia câu lạc bộ Origami của trường, Huy phải:\n\"Viết chương trình kiểm tra xem 3 số nguyên dương nhập vào có thể là 3 cạnh của\nmột tam giác KHÔNG cân hay không.\"\nVì laptop của Huy đã bị hỏng, bạn hãy giúp Huy giải bài tập trên. Biết rằng tam giác\nđều là tam giác cân.\n\nInput\n• Một dòng duy nhất gồm 3 số nguyên dương a, b, c (a, b, c ≤ 10^{18}). Các số được ghi\ncách nhau bởi dấu cách.\n\nOutput\n• Ghi ra \"YES\"nếu 3 số nguyên dương là 3 cạnh của một tam giác KHÔNG cân,\nngược lại in ra \"NO\".",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p10.zip",
            "sampleInput": "3 4 5",
            "sampleOutput": "YES\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 4 5",
                "output": "YES\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l2-p11-tam-gi-c-kh-ng-vu-ng",
            "title": "Tam giác không vuông",
            "fileName": "Tam giác không vuông.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tam giác không vuông. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L2 - Câu lệnh rẽ nhánh/11. Tam giác không vuông/Tam giác không vuông.pdf",
            "problemContent": "Để tham gia câu lạc bộ Origami của trường, Huy phải:\n\"Viết chương trình kiểm tra xem 3 số nguyên dương nhập vào có thể là 3 cạnh của\nmột tam giác KHÔNG vuông hay không.\"\nVì laptop của Huy đã bị hỏng, bạn hãy giúp Huy giải bài tập trên.\n\nInput\n• Dòng đầu tiên chứa 1 số nguyên dương T - số test (T ≤ 10).\n• Gồm T dòng, mỗi dòng chứa 3 số nguyên dương a, b, c (a, b, c ≤ 10^{18}). Các số trên\nmột dòng của input file được ghi cách nhau bởi dấu cách.\n\nOutput\n• Ghi ra \"YES\"nếu 3 số nguyên dương là 3 cạnh của một tam giác KHÔNG vuông,\nngược lại in ra \"NO\".",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l2-p11.zip",
            "sampleInput": "2\n3 4 5\n6 6 6",
            "sampleOutput": "NO\nYES\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n3 4 5\n6 6 6",
                "output": "NO\nYES\n1"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-3",
        "order": 3,
        "title": "Vòng lặp (for, while) và vòng lặp lồng nhau",
        "theoryPdfFileName": "Chapter 1 lesson 3 - Vòng lặp.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 3 - Vòng lặp.pdf",
        "theorySummary": "Cấu trúc lặp for và while, kỹ thuật tích lũy giá trị (Accumulator), điều khiển vòng lặp break/continue và kỹ thuật duyệt lồng nhau.",
        "theoryContent": "Vòng lặp cơ bản (Basic Loops)\nNội dung\nTrong các bài trước, mỗi lệnh trong chương trình chỉ được thực hiện đúng một lần. Nhưng\ntrong thực tế, ta thường cần lặp lại một hành động nhiều lần: in ra100số, tính tổng1000\nphần tử, đọc dữ liệu cho đến khi hết,... Đó chính là lúc ta cần vòng lặp.\n1. Tại sao cần vòng lặp?\n2. Vòng lặp for\n• Cú pháp\n• Ví dụ 1: In các số từ 1 đến n\n• Ví dụ 2: Đếm ngược từ n về 1\n• Ví dụ 3: In các số chẵn từ 2 đến n\n3. Vòng lặp while\n• Cú pháp\n• Ví dụ 4: Đọc số cho đến khi gặp số 0 (sentinel value)\n4. Mẫu tích lũy (Accumulator Pattern)\n• Tính tổng\n• Đếm số phần tử thỏa điều kiện\n• Tính tổng các số lẻ\n5. Vòng lặp với điều kiện lọc\n• Ví dụ: Tìm các số chia hết cho 3 trong đoạn[a, b]\n• Ví dụ: Tìm các ước của n\n6. Xử lý chữ số bằng while\n• Ví dụ: Đếm số chữ số và tính tổng chữ số\n7. break và continue\n• break — Thoát khỏi vòng lặp ngay lập tức\n• continue — Bỏ qua phần còn lại, sang lần lặp tiếp theo\n8. Bài toán mẫu: Số hoàn hảo\n9. Bài toán mẫu: Phân tích thừa số nguyên tố\n10. Mẹo và lỗi thường gặp\n• Lỗi lệch 1 (Off-by-one error)\n• Lặp vô hạn (Infinite loop)\n• Quên khởi tạo biến tích lũy\n• Nhầm lẫn giữa for và while\n• Kiểu dữ liệu tràn số\n1. Tại sao cần vòng lặp?\nGiả sử ta muốn in các số từ1đến5. Không có vòng lặp, ta phải viết:\nC++\ncout << 1 << endl;\ncout << 2 << endl;\ncout << 3 << endl;\ncout << 4 << endl;\ncout << 5 << endl;\nPython\nprint(1)\nprint(2)\nprint(3)\nprint(4)\nprint(5)\nNếu muốn in từ1đến1000thì sao? Ta không thể viết1000dòng! Vòng lặp giúp ta\nviết một lần nhưng chạy nhiều lần:\nC++\nfor (int i = 1; i <= 1000; i++) {\ncout << i << endl;\n}\nPython\nfor i in range(1, 1001):\nprint(i)\nChỉ3dòng code thay vì1000dòng!\n2. Vòng lặp for\nVòng lặpfordùng khi ta biết trước số lần lặp (hoặc phạm vi lặp).\nCú pháp\nC++\nfor (khởi_tạo; điều_kiện; cập_nhật) {\n// thân vòng lặp — chạy khi điều_kiện đúng\n}\nGiải thích:\n• Khởi tạo: chạy1lần duy nhất ở đầu (ví dụint i = 0)\n• Điều kiện: kiểm tra trước mỗi lần lặp; nếu đúng thì chạy thân, nếu sai thì dừng\n• Cập nhật: chạy sau mỗi lần lặp (ví dụi++)\nPython\nfor biến in range(bắt_đầu, kết_thúc):\n# thân vòng lặp\nGiải thích:\n• range(n)tạo dãy số0,1,2, . . . , n−1\n• range(a, b)tạo dãy sốa, a+ 1, . . . , b−1(không bao gồmb)\n• range(a, b, step)tạo dãy với bước nhảystep\nVí dụ 1: In các số từ 1 đến n\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nfor (int i = 1; i <= n; i++) {\ncout << i << \" \";\n}\nreturn 0;\n}\nPython\nn = int(input())\nfor i in range(1, n + 1):\nprint(i, end=\" \")\nChạy tay với *n*= 5:\nBƯỚC I ĐIỀU KIỆN IN RA\n1 1 1≤5✓ 1\n2 2 2≤5✓ 2\n3 3 3≤5✓ 3\n4 4 4≤5✓ 4\n5 5 5≤5✓ 5\n6 6 6≤5×(dừng)\nVí dụ 2: Đếm ngược từ n về 1\nC++\nfor (int i = n; i >= 1; i--) {\ncout << i << \" \";\n}\nPython\nfor i in range(n, 0, -1):\nprint(i, end=\" \")\nVí dụ 3: In các số chẵn từ 2 đến n\nC++\n// Cách 1: dùng bước nhảy 2\nfor (int i = 2; i <= n; i += 2) {\ncout << i << \" \";\n}\n// Cách 2: dùng if kiểm tra\nfor (int i = 1; i <= n; i++) {\nif (i % 2 == 0) {\ncout << i << \" \";\n}\n}\nPython\n# Cách 1: dùng bước nhảy 2\nfor i in range(2, n + 1, 2):\nprint(i, end=\" \")\n# Cách 2: dùng if kiểm tra\nfor i in range(1, n + 1):\nif i % 2 == 0:\nprint(i, end=\" \")\n3. Vòng lặp while\nVòng lặpwhiledùng khi ta không biết trước số lần lặp — lặp cho đến khi một điều kiện\nnào đó không còn đúng.\nCú pháp\nC++\nwhile (điều_kiện) {\n// thân vòng lặp — chạy khi điều_kiện đúng\n}\nPython\nwhile điều_kiện:\n# thân vòng lặp\nLưu ý quan trọng:Trong thân vòng lặp, phải có lệnh làm thay đổi điều kiện, nếu\nkhông sẽ bị lặp vô hạn!\nVí dụ 4: Đọc số cho đến khi gặp số 0 (sentinel value)\nĐề bài:Nhập các số nguyên cho đến khi gặp số0, in ra tổng các số đã nhập.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint x, tong = 0;\ncin >> x;\nwhile (x != 0) {\ntong += x;\ncin >> x;\n}\ncout << tong << endl;\nreturn 0;\n}\nPython\ntong = 0\nx = int(input())\nwhile x != 0:\ntong += x\nx = int(input())\nprint(tong)\nChạy tay với input3 7−2 0:\nBƯỚC X ĐIỀU KIỆN TONG\nĐầu 3 3̸= 0✓ 0 + 3 = 3\n2 7 7̸= 0✓ 3 + 7 = 10\n3 -2 −2̸= 0✓ 10 + (−2) = 8\n4 0 0̸= 0× (dừng, in 8)\n4. Mẫu tích lũy (Accumulator Pattern)\nĐây là kỹ thuật cực kỳ phổ biến: dùng một biến để tích lũy kết quả qua mỗi lần lặp.\nTrước tiên, hãy biết về toán tử gán kết hợp — cách viết tắt rất hay dùng:\nVIẾT TẮT TƯƠNG ĐƯƠNG Ý NGHĨA\na += b a = a + b Cộng thêmbvàoa\na -= b a = a - b Trừ bớtbkhỏia\na *= b a = a * b Nhânavớib\na /= b a = a / b Chiaachob\na %= b a = a % b Lấy phần dưachiab\nCú pháp này giống nhau trong cả C++ và Python. Trong C++, còn cóa++(tăng1)\nvàa–(giảm1).\nTính tổng\nC++\nint tong = 0; // khởi tạo tổng = 0\nfor (int i = 1; i <= n; i++) {\ntong += i; // cộng dồn\n}\ncout << tong << endl;\nPython\ntong = 0\nfor i in range(1, n + 1):\ntong += i\nprint(tong)\nĐếm số phần tử thỏa điều kiện\nVí dụ: Đếm có bao nhiêu số lẻ trong các số từ1đếnn.\nC++\nint dem = 0; // khởi tạo bộ đếm = 0\nfor (int i = 1; i <= n; i++) {\nif (i % 2 != 0) {\ndem++; // tăng bộ đếm\n}\n}\ncout << dem << endl;\nPython\ndem = 0\nfor i in range(1, n + 1):\nif i % 2 != 0:\ndem += 1\nprint(dem)\nTính tổng các số lẻ\nKết hợp tích lũy và điều kiện: chỉ cộng dồn khi phần tử thỏa mãn.\nC++\nint tong_le = 0;\nfor (int i = 1; i <= n; i++) {\nif (i % 2 != 0) {\ntong_le += i;\n}\n}\ncout << tong_le << endl;\nPython\ntong_le = 0\nfor i in range(1, n + 1):\nif i % 2 != 0:\ntong_le += i\nprint(tong_le)\n5. Vòng lặp với điều kiện lọc\nNhiều bài toán yêu cầu ta duyệt qua một phạm vi và chỉ xử lý các phần tử thỏa mãn\nđiều kiện nào đó.\nVí dụ: Tìm các số chia hết cho 3 trong đoạn [a, b]\nC++\nfor (int i = a; i <= b; i++) {\nif (i % 3 == 0) {\ncout << i << \" \";\n}\n}\nPython\nfor i in range(a, b + 1):\nif i % 3 == 0:\nprint(i, end=\" \")\nVí dụ: Tìm các ước của n\nC++\nfor (int i = 1; i <= n; i++) {\nif (n % i == 0) {\ncout << i << \" \";\n}\n}\nPython\nfor i in range(1, n + 1):\nif n % i == 0:\nprint(i, end=\" \")\n6. Xử lý chữ số bằng while\nMột ứng dụng kinh điển củawhilelà tách từng chữ số của một số nguyên.\nÝ tưởng:\n• Chữ số cuối cùng=n(mod 10)\n• Bỏ chữ số cuối=n/10(chia nguyên)\n• Lặp cho đến khin== 0\nVí dụ: Đếm số chữ số và tính tổng chữ số\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nint so_chu_so = 0;\nint tong_chu_so = 0;\nint tmp = n;\nif (tmp == 0) {\nso_chu_so = 1; // số 0 có 1 chữ số\n}\nwhile (tmp > 0) {\nint chu_so = tmp % 10;\ntong_chu_so += chu_so;\nso_chu_so++;\ntmp /= 10;\n}\ncout << \"So chu so: \" << so_chu_so << endl;\ncout << \"Tong chu so: \" << tong_chu_so << endl;\nreturn 0;\n}\nPython\nn = int(input())\nso_chu_so = 0\ntong_chu_so = 0\ntmp = n\nif tmp == 0:\nso_chu_so = 1\nwhile tmp > 0:\nchu_so = tmp % 10\ntong_chu_so += chu_so\nso_chu_so += 1\ntmp //= 10\nprint(\"So chu so:\", so_chu_so)\nprint(\"Tong chu so:\", tong_chu_so)\nChạy tay với *n*= 1234:\nBƯỚC TMP CHU_SO (TMP%10) TONG_CHU_SO SO_CHU_SO\n1 1234 4 4 1\n2 123 3 7 2\n3 12 2 9 3\n4 1 1 10 4\n5 0 (dừng) 10 4\n7. break và continue\nHai lệnh đặc biệt giúp kiểm soát luồng bên trong vòng lặp.\nbreak — Thoát khỏi vòng lặp ngay lập tức\nC++\n// Tìm bội số của 7 đầu tiên lớn hơn 100\nfor (int i = 101; i <= 1000; i++) {\nif (i % 7 == 0) {\ncout << \"Tim thay: \" << i << endl;\nbreak; // thoát ngay, không cần kiểm tra tiếp\n}\n}\n// Kết quả: Tim thay: 105\nPython\nfor i in range(101, 1001):\nif i % 7 == 0:\nprint(\"Tim thay:\", i)\nbreak\n# Kết quả: Tim thay: 105\ncontinue — Bỏ qua phần còn lại, sang lần lặp tiếp theo\nC++\n// In tất cả số từ 1 đến 10, bỏ qua bội của 3\nfor (int i = 1; i <= 10; i++) {\nif (i % 3 == 0) {\ncontinue; // bỏ qua, nhảy sang i tiếp theo\n}\ncout << i << \" \";\n}\n// Kết quả: 1 2 4 5 7 8 10\nPython\nfor i in range(1, 11):\nif i % 3 == 0:\ncontinue\nprint(i, end=\" \")\n# Kết quả: 1 2 4 5 7 8 10\nLưu ý:breakvàcontinuechỉ ảnh hưởng đến vòng lặp gần nhất chứa chúng.\n8. Bài toán mẫu: Số hoàn hảo\nĐề bài:Kiểm tra xem số nguyên dươngncó phải là số hoàn hảo không. Số hoàn hảo\nlà số bằng tổng các ước dương của nó (không tính chính nó). Ví dụ:6 = 1 + 2 + 3.\nPhân tích:\n1. Duyệt tất cả số từ1đếnn−1\n2. Nếuilà ước củan(tứcn % i == 0), cộng vào tổng\n3. So sánh tổng với *n*\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nint tong = 0;\nfor (int i = 1; i < n; i++) {\nif (n % i == 0) {\ntong += i;\n}\n}\nif (tong == n) {\ncout << \"YES\" << endl;\n} else {\ncout << \"NO\" << endl;\n}\nreturn 0;\n}\nPython\nn = int(input())\ntong = 0\nfor i in range(1, n):\nif n % i == 0:\ntong += i\nif tong == n:\nprint(\"YES\")\nelse:\nprint(\"NO\")\n9. Bài toán mẫu: Phân tích thừa số nguyên tố\nĐề bài:Cho số nguyên dươngn, phân tíchnthành tích các thừa số nguyên tố. Ví dụ:\n12 = 2×2×3, hay viết gọn12 = 2 2×3.\nThuật toán:\n1. Duyệtitừ2trở đi\n2. Khinchia hết choi: chia *n*choi(lặp lại cho đến khi không chia hết nữa)\n3. Sangitiếp theo\n4. Dừng khin= 1\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nfor (int i = 2; i * i <= n; i++) {\nwhile (n % i == 0) {\ncout << i << \" \";\nn /= i;\n}\n}\nif (n > 1) {\ncout << n; // n còn lại là thừa số nguyên tố\n}\ncout << endl;\nreturn 0;\n}\nPython\nn = int(input())\ni = 2\nwhile i * i <= n:\nwhile n % i == 0:\nprint(i, end=\" \")\nn //= i\ni += 1\nif n > 1:\nprint(n, end=\"\")\nprint()\nTại sao chỉ cần duyệt đến√n(tứci * i <= n)?Vì nếu có thừa số nguyên tố\np >√n, thì chỉ có duy nhất một thừa số như vậy (đó chính làncòn lại sau khi chia hết\ncác thừa số nhỏ). Dòngif (n > 1)ở cuối xử lý trường hợp đó.\n10. Mẹo và lỗi thường gặp\nLỗi lệch 1 (Off-by-one error)\nĐây là lỗi phổ biến nhất khi viết vòng lặp!\nMuốn lặpnlần:\n• C++:for (int i = 0; i < n; i++)✓(0,1, . . . , n−1)\n• C++:for (int i = 1; i <= n; i++)✓(1,2, . . . , n)\n• C++:for (int i = 0; i <= n; i++)×(lặpn+ 1lần!)\n• Python:for i in range(n)✓(0,1, . . . , n−1)\n• Python:for i in range(1, n+1)✓(1,2, . . . , n)\n• Python:for i in range(1, n)×(chỉ lặpn−1lần!)\nMẹo: Luôn chạy tay với giá trị nhỏ (n= 3hoặcn= 1) để kiểm tra biên.\nLặp vô hạn (Infinite loop)\nC++\nwhile (x > 0) {\ncout << x;\n// Quên x-- -> lặp mãi mãi!\n}\nMẹo: Khi viếtwhile, hãy tự hỏi: \"Điều gì trong thân vòng lặp sẽ làm điều kiện trở\nthành sai?\"Nếu không trả lời được, bạn đang có bug.\nQuên khởi tạo biến tích lũy\nC++\nint tong; // Chưa khởi tạo! Có thể chứa giá trị rác\nfor (int i = 1; i <= n; i++) {\ntong += i;\n}\n// Sửa: int tong = 0;\nPython\n# Python sẽ báo lỗi nếu dùng biến chưa gán\n# tong += i -> NameError: name ’tong’ is not defined\n# Sửa: khởi tạo tong = 0 trước vòng lặp\nNhầm lẫn giữa for và while\n• Dùngforkhi biết trước số lần lặp hoặc phạm vi\n• Dùngwhilekhi lặp đến khi một điều kiện thỏa mãn\nKiểu dữ liệu tràn số\nKhi tính tổng nhiều số, kết quả có thể vượt quá giới hạn củaint(khoảng2×109). Trong\ntrường hợp đó, dùnglong long(C++) hoặc Python tự xử lý số lớn.\nC++\nlong long tong = 0; // dùng long long thay vì int\nfor (int i = 1; i <= n; i++) {\ntong += i;\n}\nPython\n# Python tự xử lý số lớn, không cần lo\ntong = 0\nfor i in range(1, n + 1):\ntong += i",
        "coreConcepts": [
          "Vòng lặp for",
          "Vòng lặp while",
          "Mẫu tích lũy",
          "Lệnh break & continue",
          "Vòng lặp lồng nhau"
        ],
        "problems": [
          {
            "id": "cp-basic-l3-p1-in-n-s-t-nhi-n",
            "title": "In n số tự nhiên",
            "fileName": "bài_1.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán In n số tự nhiên. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/1. In n số tự nhiên/bài_1.pdf",
            "problemContent": "Viết chương trình nhập vào một số nguyên dương n. Hãy in ra n số tự nhiên đầu tiên.\n\nInput\n• Một số nguyên dương n (n ≤ 10^{5}).\n\nOutput\n• In n số tự nhiên đầu tiên.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p1.zip",
            "sampleInput": "5",
            "sampleOutput": "1 2 3 4 5",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5",
                "output": "1 2 3 4 5"
              },
              {
                "id": "Test 2",
                "input": "7",
                "output": "1 2 3 4 5 6 7\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p2-t-ng-l",
            "title": "Tổng lẻ",
            "fileName": "Tổng lẻ.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tổng lẻ. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/2. Tổng lẻ/Tổng lẻ.pdf",
            "problemContent": "Viết chương trình nhập vào một số nguyên dương n. Hãy in ra tổng các số lẻ trong n\nsố tự nhiên đầu tiên.\n\nInput\n• Một số nguyên dương n.\n\nOutput\n• In tổng lẻ của n số tự nhiên đầu tiên.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p2.zip",
            "sampleInput": "5",
            "sampleOutput": "9",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5",
                "output": "9"
              },
              {
                "id": "Test 2",
                "input": "10",
                "output": "25\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p3-ch-o-nhi-u-l-n",
            "title": "Chào nhiều lần",
            "fileName": "Chào nhiều lần.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Chào nhiều lần. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/3. Chào nhiều lần/Chào nhiều lần.pdf",
            "problemContent": "Hãy in ra màn hình câu chào Hello world!, mỗi câu trên một dòng với số N được\nnhập vào từ bàn phím.\n\nInput\n• Một số nguyên N (1 ≤ N ≤ 10^{6}).\n\nOutput\n• Gồm N dòng theo mô tả ở trên.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p3.zip",
            "sampleInput": "3",
            "sampleOutput": "Hello world!\nHello world!\nHello world!\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "3",
                "output": "Hello world!\nHello world!\nHello world!\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p4-m-ng-c",
            "title": "Đếm ngược",
            "fileName": "Đếm ngược.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đếm ngược. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/4. Đếm ngược/Đếm ngược.pdf",
            "problemContent": "(dùng for)\nCho số nguyên N. Hãy viết chương trình đếm ngược, in ra các số nguyên theo thứ tự\ngiảm dần từ N về 0.\n\nInput\n• Một số nguyên N (1 ≤ N ≤ 10^{6}).\n\nOutput\n• In ra N + 1 dòng, mỗi dòng ghi một số nguyên.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p4.zip",
            "sampleInput": "5",
            "sampleOutput": "5\n4\n3\n2\n1\n0\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5",
                "output": "5\n4\n3\n2\n1\n0\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p5-t-nh-t-ng",
            "title": "Tính tổng",
            "fileName": "Tính tổng.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tính tổng. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/5. Tính tổng/Tính tổng.pdf",
            "problemContent": "Viết chương trình tính tổng các số nguyên được nhập từ bàn phím cho đến khi nhập\nsố 0 thì dừng.\n\nInput\n• Nhập các số nguyên, mỗi số trên một dòng.\n\nOutput\n• Tổng các số vừa nhập.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p5.zip",
            "sampleInput": "7\n3\n2\n4\n0",
            "sampleOutput": "16\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "7\n3\n2\n4\n0",
                "output": "16\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p6-t-nh-t-ng-c-c-s",
            "title": "Tính tổng các số",
            "fileName": "Tổng số nguyên .pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tính tổng các số. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/6. Tính tổng các số nguyên liên tiếp từ 1 tới n/Tổng số nguyên .pdf",
            "problemContent": "nguyên liên tiếp từ 1 tới N\nNhập vào số nguyên dương N. Tính và in ra tổng N số nguyên liên tiếp từ 1 tới N.\n\nInput\n• Gồm một số nguyên dương N (N ≤ 10^{6}).\n\nOutput\n• Gồm một số nguyên là tổng cần tìm.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p6.zip",
            "sampleInput": "5",
            "sampleOutput": "15\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5",
                "output": "15\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p7-t-m-c-c-s-chia-h-t-cho-3",
            "title": "Tìm các số chia hết cho 3",
            "fileName": "Các số chia hết cho 3.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tìm các số chia hết cho 3. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/7. Tìm các số chia hết cho 3/Các số chia hết cho 3.pdf",
            "problemContent": "Cho một số tự nhiên N. Hãy đếm xem từ 1 đến N có bao nhiêu số chia hết cho 3.\n\nInput\n• Một số tự nhiên N.\n\nOutput\n• Một số là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p7.zip",
            "sampleInput": "10",
            "sampleOutput": "3\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "3\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p8-chia-h-t-v-kh-ng-chia-h-t",
            "title": "Chia hết và không chia hết",
            "fileName": "chia hết và không chia hết.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Chia hết và không chia hết. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/8. chia hết và không chia hết/chia hết và không chia hết.pdf",
            "problemContent": "Viết chương trình tìm tất cả các số chia hết cho 3 nhưng không phải bội số của 5,\nnằm trong đoạn 1 và n (tính cả 1 và n).\nCác số thu được sẽ được in thành chuỗi trên một dòng, cách nhau bằng dấu cách.\n\nInput\n• Một dòng duy nhất chứa số n (1 ≤ n ≤ 5000).\n\nOutput\n• In ra đáp án cần tìm.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p8.zip",
            "sampleInput": "10",
            "sampleOutput": "3 6 9\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "3 6 9\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p9-ch-s-c-a-n",
            "title": "Chữ số của N",
            "fileName": "Chữ số của N.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Chữ số của N. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/9. Chữ số của N/Chữ số của N.pdf",
            "problemContent": "Viết chương trình nhập vào một số nguyên dương n (n ≤ 10^{15} = 1. 000. 000. 000. 000. 000).\nHãy in ra các yêu cầu sau:\n• Số chữ số của n.\n• Tổng các chữ số của n.\n\nInput\n• Nhập số nguyên dương n.\n\nOutput\n• Dòng 1 in ra số chữ số của n.\n• Dòng 2 in ra tổng các chữ số của n.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p9.zip",
            "sampleInput": "4326",
            "sampleOutput": "4\n15\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "4326",
                "output": "4\n15\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p10-in-ra-c-c-b-i-s-c-a-k",
            "title": "In ra các bội số của k",
            "fileName": "In các bội số của k.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán In ra các bội số của k. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/10. In các bội số của k/In các bội số của k.pdf",
            "problemContent": "Cho một số nguyên n và k (1 ≤ n, k ≤ 100). In ra các bội số của k trong đoạn từ 1\nđến n, mỗi số in trên 1 dòng.\n\nInput\n• Một dòng chứa số nguyên n.\n• Một dòng chứa số nguyên k.\n\nOutput\n• Các bội số của k trong đoạn từ 1 đến n.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p10.zip",
            "sampleInput": "10\n3",
            "sampleOutput": "3\n6\n9\n1",
            "totalTests": 1,
            "testCases": [
              {
                "id": "Test 1",
                "input": "10\n3",
                "output": "3\n6\n9\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p11-s-ho-n-h-o",
            "title": "Số hoàn hảo",
            "fileName": "Số hoàn hảo.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Số hoàn hảo. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/11. Số Hoàn hảo/Số hoàn hảo.pdf",
            "problemContent": "Số hoàn hảo là số mà tổng các ước của nó bằng 2 lần chính nó. Ví dụ: 6 là số hoàn\nhảo vì 6 có tổng ước là 1 + 2 + 3 + 6 = 12 = 2 × 6.\nYêu cầu: Viết chương trình nhập vào số nguyên n. In ra chữ YES nếu n là số hoàn\nhảo, ngược lại ghi chữ NO.\n\nInput\n• Một số nguyên dương n (n ≤ 10^{9}).\n\nOutput\n• In ra chữ YES nếu n là số hoàn hảo, ngược lại ghi chữ NO.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p11.zip",
            "sampleInput": "6",
            "sampleOutput": "YES",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "6",
                "output": "YES"
              },
              {
                "id": "Test 2",
                "input": "36",
                "output": "NO\n1"
              }
            ]
          },
          {
            "id": "cp-basic-l3-p12-ph-n-t-ch-th-a-s-nguy-n-t",
            "title": "Phân tích thừa số nguyên tố",
            "fileName": "phân tích thừa số nguyên tố.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Phân tích thừa số nguyên tố. Yêu cầu đọc kỹ đặc tả nhập xuất và giới hạn dữ liệu.",
            "pdfUrl": "/cp-assets/chuong-0/C1L3 - vòng lặp/12. Phân tich thừa số nguyên tố/phân tích thừa số nguyên tố.pdf",
            "problemContent": "Cho số nguyên dương N (N ≤ 2. 000. 000. 000).\nYêu cầu: Hãy phân tích N thành thừa số nguyên tố và đếm ước số của N.\n\nInput\n• Gồm một dòng duy nhất chứa số nguyên dương N.\n\nOutput\n• Dòng thứ nhất ghi phân tích thừa số của N (ngăn cách bởi dấu *).\n• Dòng thứ hai ghi số lượng ước số của N.",
            "hasTestCases": true,
            "testCaseZipUrl": "/testcases/cp-basic-l3-p12.zip",
            "sampleInput": "10",
            "sampleOutput": "2*5\n4",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "2*5\n4"
              },
              {
                "id": "Test 2",
                "input": "100",
                "output": "2*2*5*5\n9\n1"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-4",
        "order": 4,
        "title": "Mảng một chiều và xử lý dãy số",
        "theoryPdfFileName": "Chapter 1 lesson 4 - Mảng một chiều và xử lý dãy số.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 4 - Mảng một chiều và xử lý dãy số.pdf",
        "theorySummary": "Khai báo và thao tác trên mảng tĩnh và vector, duyệt mảng, tìm kiếm Max/Min, tính tổng và kỹ thuật mảng đếm tần suất.",
        "theoryContent": "Mảng một chiều và xử lý dãy số (1D Arrays)\nNội dung\n1. Tại sao cần mảng một chiều?\n2. Khai báo và khởi tạo mảng trong C++ và Python\n• C++: Mảng tĩnh `int a[100005]` và `vector<int>`\n• Python: Cấu trúc `list`\n3. Duyệt mảng và nhập/xuất các phần tử\n4. Các bài toán kinh điển trên mảng:\n• Tìm giá trị lớn nhất (Max) và nhỏ nhất (Min)\n• Tính tổng và trung bình cộng các phần tử\n• Đếm số lượng phần tử thỏa mãn điều kiện (số chẵn, số nguyên tố)\n• Đảo ngược mảng\n5. Kỹ thuật mảng đánh dấu (Frequency Array / Counting)\n6. Mẹo và bẫy thường gặp:\n• Lỗi tràn chỉ số (Out of Bounds)\n• Kích thước mảng tĩnh cần khai báo dư (ví dụ `N + 5`)\n• Lưu ý về chỉ số 0-indexed và 1-indexed\n\n1. Khai báo và khởi tạo mảng:\nC++\n```cpp\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> a(n);\n    for (int i = 0; i < n; i++) {\n        cin >> a[i];\n    }\n    // Tìm max\n    int maxVal = a[0];\n    for (int i = 1; i < n; i++) {\n        if (a[i] > maxVal) maxVal = a[i];\n    }\n    cout << \"Max = \" << maxVal << endl;\n    return 0;\n}\n```\nPython\n```python\nn = int(input())\na = list(map(int, input().split()))\nprint(\"Max =\", max(a))\n```",
        "coreConcepts": [
          "Mảng tĩnh & Vector",
          "Duyệt và cập nhật phần tử",
          "Tìm kiếm Max / Min",
          "Đảo ngược mảng",
          "Mảng đánh dấu tần suất"
        ],
        "problems": [
          {
            "id": "cp-basic-l4-p1-tim-max-min",
            "title": "Tìm Max và Min trong mảng",
            "fileName": "Tìm Max và Min trong mảng.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tìm Max và Min trong mảng. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n3 1 7 2 5",
            "sampleOutput": "7 1",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 1 7 2 5",
                "output": "7 1"
              },
              {
                "id": "Test 2",
                "input": "4\n-10 -20 -5 -30",
                "output": "-5 -30"
              },
              {
                "id": "Test 3",
                "input": "1\n42",
                "output": "42 42"
              },
              {
                "id": "Test 4",
                "input": "6\n9 9 9 9 9 9",
                "output": "9 9"
              },
              {
                "id": "Test 5",
                "input": "7\n0 100 -100 50 -50 25 -25",
                "output": "100 -100"
              }
            ]
          },
          {
            "id": "cp-basic-l4-p2-tong-phan-tu-chan",
            "title": "Tổng các phần tử chẵn",
            "fileName": "Tổng các phần tử chẵn.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tổng các phần tử chẵn. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n1 2 3 4 5",
            "sampleOutput": "6",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 2 3 4 5",
                "output": "6"
              },
              {
                "id": "Test 2",
                "input": "4\n1 3 5 7",
                "output": "0"
              },
              {
                "id": "Test 3",
                "input": "4\n2 4 6 8",
                "output": "20"
              },
              {
                "id": "Test 4",
                "input": "3\n-2 -4 -6",
                "output": "-12"
              },
              {
                "id": "Test 5",
                "input": "5\n0 0 1 2 3",
                "output": "2"
              }
            ]
          },
          {
            "id": "cp-basic-l4-p3-dao-nguoc-mang",
            "title": "Đảo ngược mảng",
            "fileName": "Đảo ngược mảng.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đảo ngược mảng. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n1 2 3 4 5",
            "sampleOutput": "5 4 3 2 1",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 2 3 4 5",
                "output": "5 4 3 2 1"
              },
              {
                "id": "Test 2",
                "input": "3\n10 20 30",
                "output": "30 20 10"
              },
              {
                "id": "Test 3",
                "input": "1\n99",
                "output": "99"
              },
              {
                "id": "Test 4",
                "input": "4\n-1 0 1 2",
                "output": "2 1 0 -1"
              }
            ]
          },
          {
            "id": "cp-basic-l4-p4-dem-so-lan-xuat-hien",
            "title": "Đếm số lần xuất hiện của X",
            "fileName": "Đếm số lần xuất hiện của X.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đếm số lần xuất hiện của X. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "6 3\n1 3 5 3 7 3",
            "sampleOutput": "3",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 3\n1 3 5 3 7 3",
                "output": "3"
              },
              {
                "id": "Test 2",
                "input": "4 10\n1 2 3 4",
                "output": "0"
              },
              {
                "id": "Test 3",
                "input": "5 0\n0 0 0 0 0",
                "output": "5"
              },
              {
                "id": "Test 4",
                "input": "5 -2\n-2 3 -2 4 -2",
                "output": "3"
              }
            ]
          },
          {
            "id": "cp-basic-l4-p5-kiem-tra-mang-tang-dan",
            "title": "Kiểm tra mảng tăng dần",
            "fileName": "Kiểm tra mảng tăng dần.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Kiểm tra mảng tăng dần. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n1 3 5 8 10",
            "sampleOutput": "YES",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 3 5 8 10",
                "output": "YES"
              },
              {
                "id": "Test 2",
                "input": "5\n1 3 3 8 10",
                "output": "NO"
              },
              {
                "id": "Test 3",
                "input": "4\n5 4 3 2",
                "output": "NO"
              },
              {
                "id": "Test 4",
                "input": "1\n100",
                "output": "YES"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-5",
        "order": 5,
        "title": "Xâu ký tự (string)",
        "theoryPdfFileName": "Chapter 1 lesson 5 - Xâu ký tự string.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 5 - Xâu ký tự string.pdf",
        "theorySummary": "Bản chất xâu ký tự, bảng mã ASCII, các phương thức xử lý chuỗi cắt/ghép/tìm kiếm và thuật toán kiểm tra xâu đối xứng Palindrome.",
        "theoryContent": "Xâu ký tự (Strings)\nNội dung\n1. Bản chất của xâu ký tự (Mảng các ký tự `char`)\n2. Bảng mã ASCII và các thao tác chuyển đổi ký tự\n3. Khai báo và nhập xuất xâu ký tự:\n• C++: `std::string`, đọc cả dòng với `getline(cin, s)`\n• Python: Kiểu dữ liệu `str` bất biến\n4. Các hàm và phương thức xử lý xâu quan trọng:\n• Độ dài: `s.length()` / `len(s)`\n• Cắt xâu con: `s.substr(pos, len)` / `s[start:end]`\n• Tìm kiếm xâu con: `s.find()` / `s.find()`\n• Nối xâu: Toán tử `+`\n5. Các bài toán mẫu kinh điển:\n• Kiểm tra xâu đối xứng (Palindrome)\n• Đếm số từ trong câu và chuẩn hóa khoảng trắng\n• Đếm tần số xuất hiện của từng chữ cái 'a'..'z'\n• Chuyển đổi chữ hoa / chữ thường (`toupper`, `tolower`)\n\nCode mẫu C++ (Kiểm tra xâu đối xứng):\n```cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    int l = 0, r = s.length() - 1;\n    while (l < r) {\n        if (s[l] != s[r]) return false;\n        l++; r--;\n    }\n    return true;\n}\n\nint main() {\n    string s;\n    if (cin >> s) {\n        if (isPalindrome(s)) cout << \"YES\n\";\n        else cout << \"NO\n\";\n    }\n    return 0;\n}\n```",
        "coreConcepts": [
          "Kiểu xâu std::string & str",
          "Mã ASCII & ký tự",
          "Cắt ghép xâu con",
          "Xâu đối xứng Palindrome",
          "Chuẩn hóa xâu"
        ],
        "problems": [
          {
            "id": "cp-basic-l5-p1-kiem-tra-xau-doi-xung",
            "title": "Kiểm tra xâu đối xứng",
            "fileName": "Kiểm tra xâu đối xứng.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Kiểm tra xâu đối xứng. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "racecar",
            "sampleOutput": "YES",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "racecar",
                "output": "YES"
              },
              {
                "id": "Test 2",
                "input": "hello",
                "output": "NO"
              },
              {
                "id": "Test 3",
                "input": "a",
                "output": "YES"
              },
              {
                "id": "Test 4",
                "input": "abccba",
                "output": "YES"
              },
              {
                "id": "Test 5",
                "input": "abacaba",
                "output": "YES"
              }
            ]
          },
          {
            "id": "cp-basic-l5-p2-dem-ky-tu-nguyen-am",
            "title": "Đếm số ký tự nguyên âm",
            "fileName": "Đếm số ký tự nguyên âm.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đếm số ký tự nguyên âm. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "programming",
            "sampleOutput": "3",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "programming",
                "output": "3"
              },
              {
                "id": "Test 2",
                "input": "aeiou",
                "output": "5"
              },
              {
                "id": "Test 3",
                "input": "bcdfgh",
                "output": "0"
              },
              {
                "id": "Test 4",
                "input": "algorithmic",
                "output": "4"
              }
            ]
          },
          {
            "id": "cp-basic-l5-p3-dao-nguoc-xau",
            "title": "Đảo ngược xâu ký tự",
            "fileName": "Đảo ngược xâu ký tự.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đảo ngược xâu ký tự. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "competitive",
            "sampleOutput": "evititepmoc",
            "totalTests": 3,
            "testCases": [
              {
                "id": "Test 1",
                "input": "competitive",
                "output": "evititepmoc"
              },
              {
                "id": "Test 2",
                "input": "hsg",
                "output": "gsh"
              },
              {
                "id": "Test 3",
                "input": "12345",
                "output": "54321"
              }
            ]
          },
          {
            "id": "cp-basic-l5-p4-chuan-hoa-chu-hoa-thuong",
            "title": "Chuyển đổi in hoa in thường",
            "fileName": "Chuyển đổi in hoa in thường.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Chuyển đổi in hoa in thường. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "Hello World",
            "sampleOutput": "hELLO wORLD",
            "totalTests": 3,
            "testCases": [
              {
                "id": "Test 1",
                "input": "Hello World",
                "output": "hELLO wORLD"
              },
              {
                "id": "Test 2",
                "input": "LQDOJ",
                "output": "lqdoj"
              },
              {
                "id": "Test 3",
                "input": "abcXYZ",
                "output": "ABCxyz"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-6",
        "order": 6,
        "title": "Hàm và đệ quy cơ bản",
        "theoryPdfFileName": "Chapter 1 lesson 6 - Hàm và đệ quy cơ bản.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 6 - Hàm và đệ quy cơ bản.pdf",
        "theorySummary": "Định nghĩa hàm, truyền tham số tham trị và tham chiếu, tư duy đệ quy với bài toán cơ sở và giải thuật chia để trị kinh điển.",
        "theoryContent": "Hàm và Đệ quy cơ bản (Functions & Basic Recursion)\nNội dung\n1. Khái niệm hàm và tư duy chia để trị trong lập trình\n2. Cú pháp định nghĩa và gọi hàm:\n• Kiểu trả về, danh sách tham số, lệnh `return`\n• C++: Truyền tham trị (Pass by Value) vs Truyền tham chiếu (Pass by Reference `&`)\n3. Phạm vi của biến: Biến toàn cục (Global) vs Biến cục bộ (Local)\n4. Đệ quy là gì?\n• Bản chất: Hàm tự gọi chính nó với bài toán con nhỏ hơn\n• Hai thành phần bắt buộc: Điều kiện dừng (Base Case) và Bước đệ quy (Recursive Step)\n• Ngăn xếp hàm (Call Stack) và lỗi tràn bộ nhớ (Stack Overflow)\n5. Các thuật toán đệ quy kinh điển:\n• Tính giai thừa: $n! = n \times (n-1)!$\n• Dãy số Fibonacci: $F(n) = F(n-1) + F(n-2)$\n• Thuật toán Euclid tìm ước chung lớn nhất $\\gcd(a, b)$\n• Lũy thừa nhị phân nhanh: $a^b$ trong $O(\\log b)$\n\nCode mẫu C++ (GCD & Đệ quy):\n```cpp\n#include <iostream>\nusing namespace std;\n\nlong long gcd(long long a, long long b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\n\nlong long fibo(int n) {\n    if (n <= 1) return n;\n    return fibo(n - 1) + fibo(n - 2);\n}\n\nint main() {\n    long long a, b;\n    cin >> a >> b;\n    cout << \"GCD = \" << gcd(a, b) << endl;\n    return 0;\n}\n```",
        "coreConcepts": [
          "Định nghĩa & Gọi hàm",
          "Tham chiếu vs Tham trị",
          "Bản chất đệ quy & Call Stack",
          "Dãy Fibonacci & Giai thừa",
          "Thuật toán Euclid GCD"
        ],
        "problems": [
          {
            "id": "cp-basic-l6-p1-tinh-giai-thua",
            "title": "Tính giai thừa n!",
            "fileName": "Tính giai thừa n!.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tính giai thừa n!. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5",
            "sampleOutput": "120",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5",
                "output": "120"
              },
              {
                "id": "Test 2",
                "input": "0",
                "output": "1"
              },
              {
                "id": "Test 3",
                "input": "1",
                "output": "1"
              },
              {
                "id": "Test 4",
                "input": "10",
                "output": "3628800"
              },
              {
                "id": "Test 5",
                "input": "15",
                "output": "1307674368000"
              }
            ]
          },
          {
            "id": "cp-basic-l6-p2-uoc-chung-lon-nhat",
            "title": "Ước chung lớn nhất GCD(A, B)",
            "fileName": "Ước chung lớn nhất GCD(A, B).pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Ước chung lớn nhất GCD(A, B). Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "24 36",
            "sampleOutput": "12",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "24 36",
                "output": "12"
              },
              {
                "id": "Test 2",
                "input": "17 19",
                "output": "1"
              },
              {
                "id": "Test 3",
                "input": "100 25",
                "output": "25"
              },
              {
                "id": "Test 4",
                "input": "1000000000000 500000000000",
                "output": "500000000000"
              }
            ]
          },
          {
            "id": "cp-basic-l6-p3-so-fibonacci-thu-n",
            "title": "Số Fibonacci thứ n",
            "fileName": "Số Fibonacci thứ n.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Số Fibonacci thứ n. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "7",
            "sampleOutput": "13",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "7",
                "output": "13"
              },
              {
                "id": "Test 2",
                "input": "0",
                "output": "0"
              },
              {
                "id": "Test 3",
                "input": "1",
                "output": "1"
              },
              {
                "id": "Test 4",
                "input": "10",
                "output": "55"
              },
              {
                "id": "Test 5",
                "input": "30",
                "output": "832040"
              }
            ]
          },
          {
            "id": "cp-basic-l6-p4-luy-thua-nhi-phan",
            "title": "Lũy thừa nhanh (a^b mod m)",
            "fileName": "Lũy thừa nhanh (a^b mod m).pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Lũy thừa nhanh (a^b mod m). Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "2 10 1000",
            "sampleOutput": "24",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 10 1000",
                "output": "24"
              },
              {
                "id": "Test 2",
                "input": "3 5 100",
                "output": "43"
              },
              {
                "id": "Test 3",
                "input": "5 0 1000",
                "output": "1"
              },
              {
                "id": "Test 4",
                "input": "2 30 1000000007",
                "output": "73741817"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-7",
        "order": 7,
        "title": "Xử lý chữ số và toán đơn giản",
        "theoryPdfFileName": "Chapter 1 lesson 7 - Xử lý chữ số và toán đơn giản.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 7 - Xử lý chữ số và toán đơn giản.pdf",
        "theorySummary": "Tách chữ số chia lấy dư, số nguyên tố, số chính phương, số hoàn hảo, phân tích thừa số nguyên tố và tính chất chia hết.",
        "theoryContent": "Xử lý chữ số & Toán số học đơn giản\nNội dung\n1. Kỹ thuật tách và duyệt từng chữ số của số nguyên $N$:\n• Lấy chữ số hàng đơn vị: `digit = n % 10`\n• Xóa chữ số hàng đơn vị: `n = n / 10`\n• Đếm số lượng chữ số, tính tổng các chữ số\n2. Số thuận nghịch (Palindrome Number)\n3. Số nguyên tố (Prime Numbers):\n• Định nghĩa và thuật toán kiểm tra số nguyên tố trong $O(\\sqrt{N})$\n• Sàng nguyên tố Eratosthenes cơ bản cho $N \\le 10^7$\n4. Số chính phương và căn bậc hai nguyên (`sqrt`)\n5. Phân tích thừa số nguyên tố:\n• Chia dần cho các ước từ 2 đến $\\sqrt{N}$\n6. Ước chung lớn nhất ($\\gcd$) và Bội chung nhỏ nhất ($\text{lcm}$):\n• Công thức: $\text{lcm}(a, b) = \frac{a \times b}{\\gcd(a, b)}$ (chú ý tránh tràn số bằng cách chia trước nhân sau `(a / gcd) * b`).\n\nCode mẫu C++:\n```cpp\n#include <iostream>\nusing namespace std;\n\nbool isPrime(long long n) {\n    if (n < 2) return false;\n    for (long long i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    long long n;\n    cin >> n;\n    long long sumDigit = 0, temp = n;\n    while (temp > 0) {\n        sumDigit += temp % 10;\n        temp /= 10;\n    }\n    cout << \"Tong chu so: \" << sumDigit << endl;\n    cout << (isPrime(n) ? \"La so nguyen to\" : \"Khong la so nguyen to\") << endl;\n    return 0;\n}\n```",
        "coreConcepts": [
          "Tách chữ số n % 10",
          "Kiểm tra số nguyên tố O(sqrt(n))",
          "Đếm ước số",
          "Phân tích thừa số nguyên tố",
          "Số chính phương"
        ],
        "problems": [
          {
            "id": "cp-basic-l7-p1-tong-cac-chu-so",
            "title": "Tổng các chữ số của N",
            "fileName": "Tổng các chữ số của N.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Tổng các chữ số của N. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "12345",
            "sampleOutput": "15",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "12345",
                "output": "15"
              },
              {
                "id": "Test 2",
                "input": "100000",
                "output": "1"
              },
              {
                "id": "Test 3",
                "input": "9999",
                "output": "36"
              },
              {
                "id": "Test 4",
                "input": "7",
                "output": "7"
              }
            ]
          },
          {
            "id": "cp-basic-l7-p2-kiem-tra-so-nguyen-to",
            "title": "Kiểm tra số nguyên tố",
            "fileName": "Kiểm tra số nguyên tố.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Kiểm tra số nguyên tố. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "29",
            "sampleOutput": "YES",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "29",
                "output": "YES"
              },
              {
                "id": "Test 2",
                "input": "1",
                "output": "NO"
              },
              {
                "id": "Test 3",
                "input": "4",
                "output": "NO"
              },
              {
                "id": "Test 4",
                "input": "999999999989",
                "output": "YES"
              },
              {
                "id": "Test 5",
                "input": "1000000000000",
                "output": "NO"
              }
            ]
          },
          {
            "id": "cp-basic-l7-p3-dem-uoc-so",
            "title": "Đếm số lượng ước của N",
            "fileName": "Đếm số lượng ước của N.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Đếm số lượng ước của N. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "12",
            "sampleOutput": "6",
            "totalTests": 5,
            "testCases": [
              {
                "id": "Test 1",
                "input": "12",
                "output": "6"
              },
              {
                "id": "Test 2",
                "input": "1",
                "output": "1"
              },
              {
                "id": "Test 3",
                "input": "7",
                "output": "2"
              },
              {
                "id": "Test 4",
                "input": "36",
                "output": "9"
              },
              {
                "id": "Test 5",
                "input": "100",
                "output": "9"
              }
            ]
          },
          {
            "id": "cp-basic-l7-p4-phan-tich-thua-so-nguyen-to",
            "title": "Phân tích thừa số nguyên tố",
            "fileName": "Phân tích thừa số nguyên tố.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Phân tích thừa số nguyên tố. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "12",
            "sampleOutput": "2 2 3 1",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "12",
                "output": "2 2 3 1"
              },
              {
                "id": "Test 2",
                "input": "18",
                "output": "2 1 3 2"
              },
              {
                "id": "Test 3",
                "input": "13",
                "output": "13 1"
              },
              {
                "id": "Test 4",
                "input": "100",
                "output": "2 2 5 2"
              }
            ]
          }
        ]
      },
      {
        "id": "cp-basic-lesson-8",
        "order": 8,
        "title": "Sắp xếp và sử dụng thư viện chuẩn",
        "theoryPdfFileName": "Chapter 1 lesson 8 - Sắp xếp và sử dụng thư viện chuẩn STL.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 1 lesson 8 - Sắp xếp và sử dụng thư viện chuẩn STL.pdf",
        "theorySummary": "Sử dụng std::sort trong <algorithm>, hàm so sánh tùy biến Comparator, sắp xếp cấu trúc pair và các hàm tìm kiếm nhị phân STL.",
        "theoryContent": "Sắp xếp & Sử dụng Thư viện Chuẩn (Sorting & STL)\nNội dung\n1. Tại sao sắp xếp là bài toán nền tảng trong lập trình?\n2. Giới thiệu hàm `std::sort` trong thư viện `<algorithm>` của C++:\n• Độ phức tạp tối ưu: $O(N \\log N)$ (Introsort kết hợp Quick Sort và Heap Sort)\n• Cú pháp: `sort(a, a + n)` hoặc `sort(v.begin(), v.end())`\n3. Sắp xếp giảm dần:\n• `sort(v.begin(), v.end(), greater<int>())`\n4. Hàm so sánh tùy biến (Custom Comparator):\n• Viết hàm so sánh tự định nghĩa `bool cmp(const T &a, const T &b)`\n• Sắp xếp cấu trúc `pair<int, int>` hoặc `struct`\n5. Tìm kiếm nhị phân có sẵn trong STL:\n• `lower_bound`, `upper_bound`, `binary_search`\n6. Các cấu trúc bổ trợ hữu ích trong thư viện chuẩn:\n• `pair`, `vector`, `tuple`, `reverse`, `min_element`, `max_element`\n\nCode mẫu C++:\n```cpp\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nbool cmp(pair<int, int> a, pair<int, int> b) {\n    if (a.first != b.first) return a.first < b.first;\n    return a.second > b.second; // Nếu phần tử đầu bằng nhau, ưu tiên phần tử thứ 2 giảm dần\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<pair<int, int>> v(n);\n    for (int i = 0; i < n; i++) cin >> v[i].first >> v[i].second;\n    sort(v.begin(), v.end(), cmp);\n    for (auto p : v) cout << p.first << \" \" << p.second << endl;\n    return 0;\n}\n```",
        "coreConcepts": [
          "Hàm std::sort O(N log N)",
          "Hàm so sánh tùy biến cmp",
          "Sắp xếp kiểu dữ liệu Pair",
          "lower_bound & upper_bound",
          "Thư viện STL"
        ],
        "problems": [
          {
            "id": "cp-basic-l8-p1-sap-xep-tang-dan",
            "title": "Sắp xếp dãy số tăng dần",
            "fileName": "Sắp xếp dãy số tăng dần.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Sắp xếp dãy số tăng dần. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n4 2 5 1 3",
            "sampleOutput": "1 2 3 4 5",
            "totalTests": 4,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n4 2 5 1 3",
                "output": "1 2 3 4 5"
              },
              {
                "id": "Test 2",
                "input": "4\n10 -5 20 0",
                "output": "-5 0 10 20"
              },
              {
                "id": "Test 3",
                "input": "3\n1 1 1",
                "output": "1 1 1"
              },
              {
                "id": "Test 4",
                "input": "6\n9 8 7 6 5 4",
                "output": "4 5 6 7 8 9"
              }
            ]
          },
          {
            "id": "cp-basic-l8-p2-sap-xep-giam-dan",
            "title": "Sắp xếp dãy số giảm dần",
            "fileName": "Sắp xếp dãy số giảm dần.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Sắp xếp dãy số giảm dần. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n1 4 2 5 3",
            "sampleOutput": "5 4 3 2 1",
            "totalTests": 3,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 4 2 5 3",
                "output": "5 4 3 2 1"
              },
              {
                "id": "Test 2",
                "input": "3\n-1 -5 0",
                "output": "0 -1 -5"
              },
              {
                "id": "Test 3",
                "input": "4\n7 7 2 9",
                "output": "9 7 7 2"
              }
            ]
          },
          {
            "id": "cp-basic-l8-p3-sap-xep-theo-gia-tri-tuyet-doi",
            "title": "Sắp xếp theo giá trị tuyệt đối",
            "fileName": "Sắp xếp theo giá trị tuyệt đối.pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Sắp xếp theo giá trị tuyệt đối. Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "5\n-3 2 -1 1 4",
            "sampleOutput": "-1 1 2 -3 4",
            "totalTests": 3,
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n-3 2 -1 1 4",
                "output": "-1 1 2 -3 4"
              },
              {
                "id": "Test 2",
                "input": "4\n5 -5 2 -2",
                "output": "-2 2 -5 5"
              },
              {
                "id": "Test 3",
                "input": "3\n0 -1 1",
                "output": "0 -1 1"
              }
            ]
          },
          {
            "id": "cp-basic-l8-p4-sap-xep-toa-do-diem",
            "title": "Sắp xếp tọa độ các điểm (x, y)",
            "fileName": "Sắp xếp tọa độ các điểm (x, y).pdf",
            "source": "Thuật toán",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 100,
            "preview": "Bài toán Sắp xếp tọa độ các điểm (x, y). Yêu cầu áp dụng kiến thức nền tảng để giải quyết.",
            "pdfUrl": "/cp-assets/chuong-0/theories/Chapter 1 lesson 1 - Nhập xuất và biểu thức (IO & Expressions).pdf",
            "problemContent": "Nội dung\n1. Lập trình là gì? Chương trình đầu tiên\n2. Biến và kiểu dữ liệu\n3. Nhập dữ liệu (Input)\n4. Xuất dữ liệu (Output)\n5. Các phép toán số học\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\n7. Xuất số thực với độ chính xác\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\n9. Thứ tự ưu tiên phép toán\n10. Mẹo và lỗi thường gặp\n• Lỗi 1: Tràn số (Overflow) trong C++\n• Lỗi 2: Chia nguyên bất ngờ trong C++\n• Lỗi 3: In thừa hoặc thiếu\n• Lỗi 4: Quên đọc hết input\n• Mẹo chung\n1. Lập trình là gì? Chương trình đầu tiên\nLập trình là viết các chỉ thị để máy tính thực hiện theo. Một chương trình đơn giản nhất\nlà in một dòng chữ ra màn hình:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\ncout << \"Hello, World!\" << endl;\nreturn 0;\n}\nPython\nprint(\"Hello, World!\")\n1\nGiải thích:\n• C++: #include <iostream> cho phép sử dụng cout (xuất) và cin (nhập). using\nnamespace std; giúp viết gọn hơn. Hàm main() là điểm bắt đầu chương trình.\n• Python: Chỉ cần gọi print() - đơn giản hơn nhiều!\nTrên LQDOJ (và các online judge khác), chương trình của bạn sẽ đọc dữ liệu từ input\nvà in kết quả ra output - không có giao diện đồ họa, chỉ có văn bản (text).\n2. Biến và kiểu dữ liệu\nBiến (variable) là \"hộp chứa\"lưu trữ giá trị trong bộ nhớ. Mỗi biến có một kiểu dữ liệu\nxác định loại giá trị nó chứa.\nKIỂU DỮ LIỆU C++ PYTHON VÍ DỤ\nSố nguyên int, long long int 42, -7, 1000000\nSố thực float, double float 3.14, -0.5\nXâu ký tự string str \"Hello\", \"LQDOJ\"\nKhai báo biến:\nC++\nint a = 10; // Số nguyên\ndouble pi = 3.14159; // Số thực (dùng double cho chính xác)\nstring name = \"LQDOJ\"; // Xâu ký tự\nlong long big = 1000000000000LL; // Số nguyên lớn (tới ~9.2 * 10^18)\nPython\na = 10 # Số nguyên (tự động, không giới hạn kích thước!)\npi = 3.14159 # Số thực\nname = \"LQDOJ\" # Xâu ký tự\nbig = 1000000000000 # Python xử lý số lớn tự động\nLưu ý quan trọng về C++:\n• int chứa được giá trị tới khoảng 2 × 10^{9} (2 tỷ).\n• Nếu bài toán có số lớn hơn, dùng long long (tới khoảng 9. 2 × 10^{18}).\n• Dùng double thay vì float để có độ chính xác cao hơn với số thực.\n3. Nhập dữ liệu (Input)\nTrên online judge, chương trình đọc dữ liệu từ standard input (stdin). Mỗi bài toán sẽ\nmô tả rõ format input.\nVí dụ: Đọc hai số nguyên a và b từ input:\n2\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\n// Bây giờ a và b đã chứa giá trị từ input\nreturn 0;\n}\nPython\n# Cách 1: Đọc 2 số trên cùng 1 dòng, cách nhau bởi dấu cách\na, b = map(int, input().split())\n# Cách 2: Đọc mỗi số trên 1 dòng riêng\na = int(input())\nb = int(input())\nGiải thích cách đọc input trong Python:\n• input() đọc một dòng từ input dưới dạng xâu (string).\n• input().split() tách xâu thành danh sách các phần tử (theo dấu cách).\n• map(int,...) chuyển từng phần tử sang số nguyên.\n• a, b =... gán các giá trị vào biến a và b.\nMẹo C++: Thêm dòng sau vào đầu main() để tăng tốc nhập/xuất:\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\n4. Xuất dữ liệu (Output)\nIn kết quả ra standard output (stdout):\nC++\nint x = 42;\ncout << x << endl; // In số, xuống dòng\ncout << \"Ket qua: \" << x; // In kèm chữ\ncout << x << \" \" << x * 2 << endl; // In nhiều giá trị\nPython\n3\nx = 42\nprint(x) # In số, tự xuống dòng\nprint(\"Ket qua:\", x) # In kèm chữ (tự thêm dấu cách)\nprint(x, x * 2) # In nhiều giá trị, cách bởi dấu cách\nQuan trọng trên Online Judge:\n• In đúng format theo yêu cầu đề bài (dấu cách, xuống dòng).\n• Không in thêm dòng chữ thừa như \"Nhap a: \"- chỉ in kết quả.\n• Thường cuối output cần có xuống dòng (endl hoặc \\n trong C++, print() trong\nPython tự thêm).\n5. Các phép toán số học\nĐây là các phép toán cơ bản bạn sẽ dùng thường xuyên:\nPHÉP TOÁN C++ PYTHON VÍ DỤ\nCộng a + b a + b 5 + 3 = 8\nTrừ a - b a - b 5 − 3 = 2\nNhân a * b a * b 5 ∗ 3 = 15\nChia (thực) (double)a / b a / b 7 / 2 = 3. 5\nChia nguyên a / b a // b 7 // 2 = 3\nChia dư a % b a % b 7%2 = 1\nVí dụ tổng hợp:\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a = 17, b = 5;\ncout << \"Tong: \" << a + b << endl; // 22\ncout << \"Hieu: \" << a - b << endl; // 12\ncout << \"Tich: \" << a * b << endl; // 85\ncout << \"Chia nguyen: \" << a / b << endl; // 3 (không phải 3.4!)\ncout << \"Chia du: \" << a % b << endl; // 2\n// Muốn chia thực, phải ép kiểu:\ncout << \"Chia thuc: \" << (double)a / b << endl; // 3.4\nreturn 0;\n}\nPython\na = 17\nb = 5\nprint(\"Tong:\", a + b) # 22\n4\nprint(\"Hieu:\", a - b) # 12\nprint(\"Tich:\", a * b) # 85\nprint(\"Chia thuc:\", a / b) # 3.4 (Python tự chia thực!)\nprint(\"Chia nguyen:\", a // b) # 3\nprint(\"Chia du:\", a % b) # 2\nCảnh báo phép chia trong C++: Khi chia hai số nguyên trong C++, kết quả luôn là\nsố nguyên (phần thập phân bị cắt bỏ). Nếu muốn kết quả thực, phải ép kiểu: (double)a\n/ b.\n6. Ví dụ hoàn chỉnh: Bài toán \"Tổng hai số\"\nĐề bài: Cho hai số nguyên a và b. In ra tổng của chúng.\nInput: Một dòng chứa hai số nguyên a và b.\nOutput: In ra tổng a + b.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint a, b;\ncin >> a >> b;\ncout << a + b << endl;\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a + b)\n7. Xuất số thực với độ chính xác\nNhiều bài toán yêu cầu in số thực với số chữ số thập phân cố định. Ví dụ, in kết quả với\n2 chữ số sau dấu chấm:\nC++\n#include <iostream>\n#include <iomanip> // Cần cho fixed và setprecision\nusing namespace std;\nint main() {\ndouble x = 3.14159;\n5\ncout << fixed << setprecision(2) << x << endl;\n// Output: 3.14\ndouble y = 10.0 / 3.0;\ncout << fixed << setprecision(4) << y << endl;\n// Output: 3.3333\nreturn 0;\n}\nPython\nx = 3.14159\nprint(f\"{x:.2f}\")\n# Output: 3.14\ny = 10 / 3\nprint(f\"{y:.4f}\")\n# Output: 3.3333\n# Cách khác dùng format():\nprint(\"{:.2f}\".format(x))\n# Output: 3.14\n8. Ví dụ: Tính diện tích và chu vi hình chữ nhật\nĐề bài: Cho chiều dài a và chiều rộng b của hình chữ nhật. In ra diện tích và chu vi,\nmỗi số trên một dòng.\nC++\n#include <iostream>\nusing namespace std;\nint main() {\nint a, b;\ncin >> a >> b;\ncout << a * b << endl; // Diện tích\ncout << 2 * (a + b) << endl; // Chu vi\nreturn 0;\n}\nPython\na, b = map(int, input().split())\nprint(a * b) # Diện tích\nprint(2 * (a + b)) # Chu vi\n9. Thứ tự ưu tiên phép toán\nGiống như toán học, phép nhân/chia được tính trước phép cộng/trừ. Dùng ngoặc () để\nthay đổi thứ tự:\n6\nƯU TIÊN PHÉP TOÁN MÔ TẢ\n1 (cao nhất) () Ngoặc\n2 *, /, % Nhân, chia, chia dư\n3 (thấp nhất) +, - Cộng, trừ\nVí dụ:\n• 2 + 3 ∗ 4 = 2 + 12 = 14 (không phải 20!)\n• (2 + 3) ∗ 4 = 5 ∗ 4 = 20\n10. Mẹo và lỗi thường gặp\nLỗi 1: Tràn số (Overflow) trong C++\nKhi hai số int nhân nhau, kết quả có thể vượt quá giới hạn của int (2 × 10^{9}):\nC++\nint a = 100000, b = 100000;\n// SAI: a * b = 10^10, vượt quá int!\nint c = a * b; // Kết quả SAI (tràn số)\n// ĐÚNG: Dùng long long\nlong long d = (long long)a * b; // Kết quả đúng: 10000000000\nPython\n# Python không bị tràn số - số nguyên có kích thước tùy ý!\na = 100000\nb = 100000\nc = a * b # 10000000000, không vấn đề gì\nLỗi 2: Chia nguyên bất ngờ trong C++\nC++\n// SAI: 7 / 2 = 3 (mất phần thập phân!)\nint a = 7, b = 2;\ncout << a / b; // In ra 3\n// ĐÚNG: Ép kiểu sang double\ncout << (double)a / b; // In ra 3.5\nLỗi 3: In thừa hoặc thiếu\n• Không in \"Nhap so: \"hay \"Ket qua la: \"- online judge so khớp output chính xác.\n• Kiểm tra kỹ: có cần xuống dòng cuối không, dấu cách giữa các số ra sao.\n7\nLỗi 4: Quên đọc hết input\nNếu đề bảo input có 3 số mà bạn chỉ đọc 2, chương trình có thể cho kết quả sai.\nMẹo chung\n• Luôn đọc kỹ đề bài trước khi code - chú ý giới hạn dữ liệu và format output.\n• Test với ví dụ mẫu trước khi nộp.\n• Nghĩ về trường hợp đặc biệt: số 0, số âm, số rất lớn.\n• Trong C++, nên dùng long long nếu kết quả có thể lớn hơn 2 × 10^{9}.\n8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "sampleInput": "4\n2 3\n1 5\n2 1\n1 2",
            "sampleOutput": "1 2\n1 5\n2 1\n2 3",
            "totalTests": 2,
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n2 3\n1 5\n2 1\n1 2",
                "output": "1 2\n1 5\n2 1\n2 3"
              },
              {
                "id": "Test 2",
                "input": "3\n0 0\n-1 -1\n1 1",
                "output": "-1 -1\n0 0\n1 1"
              }
            ]
          }
        ]
      }
    ]
  },
  "cp-bronze": {
    "id": "cp-bronze",
    "title": "Lập Trình Thi Đấu Nâng Cao",
    "subtitle": "Thuật toán kinh điển & Nền tảng Olympic Tin học",
    "levelBadge": "Khóa Nâng Cao",
    "description": "Trang bị tư duy thuật toán vững chắc: Mô phỏng, Sắp xếp, Binary Search, Prefix Sum, Two Pointers, Tham lam, Toán học, Quay lui, Quy hoạch động cơ bản và Đồ thị BFS/DFS.",
    "accentColor": "amber",
    "accentClass": "from-amber-500 to-orange-600",
    "lessons": [
      {
        "id": "cp-bronze-lesson-1",
        "order": 1,
        "title": "Mô phỏng & Cài đặt (Simulation)",
        "theoryPdfFileName": "Chapter 2 lesson 1 - Mô phỏng & Cài đặt.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 1 - Mô phỏng & Cài đặt.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Mô phỏng & Cài đặt (Simulation) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Mô phỏng & Cài đặt (Simulation)\nNội dung\n1. Lập trình thi đấu là gì?\n• Cách hoạt động của Online Judge\n• Các kết quả phổ biến\n2. Mô phỏng & Cài đặt là gì?\n3. Quy trình giải một bài CP\n• Bước 1: Đọc đề cẩn thận\n• Bước 2: Chạy tay ví dụ\n4. Độ phức tạp thuật toán (Big O) - Thuật toán của bạn nhanh hay chậm?\n• Big O là gì?\n• Các bậc phổ biến (từ nhanh đến chậm)\n• Cách tính Big O của code\n• Quy tắc10 8 - Thuật toán cần nhanh cỡ nào?\n5. Template code C++\n• Ghi chú cho Python\n• Kiểu dữ liệu: int vs long long\n6. Ví dụ 1: Bài \"Weird Algorithm\"(Thuật toán lạ)\n• Chạy tay với *n*= 3\n• Phân tích\n• Code\n7. Ví dụ 2: Bài \"Missing Number\"(Số bị thiếu)\n• Chạy tay\n• Phân tích\n• Code\n8. Ví dụ 3: Bài \"Repetitions\"(Chuỗi lặp dài nhất)\n• Chạy tay\n• Phân tích\n• Code\n9. Các lỗi phổ biến cần tránh\n• Lỗi 1: Tràn số (Integer Overflow)\n• Lỗi 2: Sai chỉ số (Off-by-one Error)\n• Lỗi 3: Không đọc kỹ đề\n• Lỗi 4: Quên xử lý edge case\n• Lỗi 5: Dùng endl thay vì \"\\n\"\n• Lỗi 6: Input chậm trong Python\n10. Mẹo khi nộp bài\n• Tóm tắt bài học\nChào mừng bạn đến với bài học đầu tiên của khóa Lập trình thi đấu - Đồng! Nếu\nđây là lần đầu bạn tiếp xúc với lập trình thi đấu (competitive programming - viết tắt\nlà CP), thì đây chính là nơi bắt đầu. Hãy yên tâm, chúng ta sẽ đi từng bước một.\n1. Lập trình thi đấu là gì?\nLập trình thi đấu (Competitive Programming) là hình thức giải các bài toán thuật toán\nbằng cách viết chương trình, rồi nộp lên một hệ thống chấm tự động (online judge). Hệ\nthống sẽ chạy chương trình của bạn với nhiều bộ test, và cho biết kết quả: đúng (AC),\nsai (WA), quá thời gian (TLE), lỗi chạy (RE),...\nCách hoạt động của Online Judge\nBạn viết code→Nộp bài→Hệ thống biên dịch→Chạy với nhiều test→Trả kết quả\nMỗi bài toán có:\n• Đề bài:Mô tả bài toán, giới hạn dữ liệu, ví dụ input/output.\n• Giới hạn thời gian (Time Limit):Thường 1-2 giây. Chương trình phải chạy\nxong trong thời gian này.\n• Giới hạn bộ nhớ (Memory Limit):Thường 256MB.\n• Nhiều test ẩn:Bạn chỉ thấy 1-2 ví dụ, nhưng hệ thống có 10-20 test (hoặc hơn)\nđể kiểm tra.\nCác kết quả phổ biến\nKẾT QUẢ Ý NGHĨA\nAC (Accepted) Đúng tất cả test - chúc mừng!\nWA (Wrong Answer) Sai đáp án ở ít nhất 1 test\nTLE (Time Limit Exceeded) Chạy quá thời gian - thuật toán chậm\nRE (Runtime Error) Lỗi khi chạy (truy cập ngoài mảng, chia cho 0,...)\nMLE (Memory Limit Exceeded) Dùng quá nhiều bộ nhớ\n2. Mô phỏng & Cài đặt là gì?\nDạng bài Simulation / Implementation là dạng bài mà đề bài mô tả rõ ràng quy trình\ncần làm, và nhiệm vụ của bạn là chuyển mô tả thành code một cách chính xác. Không\ncần thuật toán phức tạp - chỉ cần đọc hiểu đề và cài đặt cẩn thận.\nTại sao đây là bài học đầu tiên? Vì trước khi học các thuật toán nâng cao, bạn cần\nrèn luyện khả năng:\n• Đọc hiểu đề bài (đặc biệt là phần giới hạn và ví dụ)\n• Viết code sạch, đúng, không bug\n• Test và debug hiệu quả\n3. Quy trình giải một bài CP\nDù là bài dễ hay khó, quy trình luôn gồm 6 bước:\nBước 1: Đọc đề (ít nhất 2 lần!)\nBước 2: Phân tích - chạy tay ví dụ\nBước 3: Thiết kế thuật toán - ước lượng độ phức tạp\nBước 4: Viết code\nBước 5: Test với ví dụ trong đề + tự nghĩ thêm test\nBước 6: Kiểm tra edge case→Nộp bài\nBước 1: Đọc đề cẩn thận\nĐọc ít nhất 2 lần. Lần đầu để hiểu tổng quát, lần sau để chú ý chi tiết. Đặc biệt chú ý:\n• Giới hạn dữ liệu (n, m, giá trị tối đa):Quyết định thuật toán nào được phép.\n• Định dạng input/output:Input có bao nhiêu dòng? Các số cách nhau bởi dấu\ncách hay xuống dòng? Output có cần xuống dòng cuối không?\n• Các ví dụ:Tự chạy tay trước khi viết code. Nếu bạn không hiểu tại sao ví dụ cho\nkết quả đó, thì bạn chưa hiểu đề!\nBước 2: Chạy tay ví dụ\nLấy giấy bút (hoặc text editor) và tự tay mô phỏng quá trình xử lý với ví dụ trong đề.\nĐây là bước nhiều người bỏ qua, nhưng lại cực kỳ quan trọng. Chạy tay giúp bạn:\n• Xác nhận bạn đã hiểu đúng đề\n• Phát hiện các trường hợp đặc biệt\n• Hình dung cách viết code\n4. Độ phức tạp thuật toán (Big O) - Thuật toán của\nbạn nhanh hay chậm?\nTrong CP, viết code đúng chưa đủ - code còn phải đủ nhanh. Để đánh giá tốc độ, ta\ndùng khái niệm Big O.\nBig O là gì?\nBig O mô tả số phép tính mà thuật toán cần thực hiện, tính theo kích thước đầu vàon.\nTa chỉ quan tâm đến phần tăng nhanh nhất (bỏ hằng số và bậc thấp hơn).\nVí dụ trực quan: Giả sử bạn cần tìm một tên trong danh sáchnhọc sinh.\n• Duyệt từ đầu đến cuối:Kiểm tra từng tên, tối đanlần→O(n).\n• Nếu danh sách đã sắp xếp theo ABC:Mở giữa sách, so sánh, bỏ nửa không\ncần→mỗi bước loại nửa danh sách→chỉ cầnlog 2 nlần→O(logn).\nVớin= 1,000,000:\n• O(n) = 1,000,000phép tính\n• O(logn) = 20phép tính (vìlog 2 106≈20)\nChênh lệch50,000lần! Đó là lý do Big O quan trọng.\nCác bậc phổ biến (từ nhanh đến chậm)\nO(1)< O(logn)< O(n)< O(nlogn)< O(n 2)< O(n 3)< O(2 n)< O(n!)\nHãy hình dung với *n*= 10 6:\nBẬC SỐ PHÉP TÍNH (ƯỚC LƯỢNG)NHANH?\nO(1) 1 Cực nhanh\nO(logn) 20 Cực nhanh\nO(n) 106 Nhanh (<1giây)\nO(nlogn) 2×10 7 Nhanh (<1giây)\nO(n2) 1012 QUÁ CHẬM (hàng giờ)\nCách tính Big O của code\nQuy tắc 1: Một vòng lặp đơn chạynlần→O(n)\nC++\nfor (int i = 0; i < n; i++) { ... } // O(n)\nPython\nfor i in range(n):\n... # O(n)\nQuy tắc 2: Hai vòng lặp lồng nhau→O(n2)\nC++\nfor (int i = 0; i < n; i++)\nfor (int j = 0; j < n; j++) { ... } // O(n^2)\nPython\nfor i in range(n):\nfor j in range(n):\n... # O(n^2)\nQuy tắc 3: Vòng lặp mà biến nhân đôi hoặc chia đôi→O(logn)\nC++\nfor (int i = 1; i < n; i *= 2) { ... } // O(log n)\nPython\ni = 1\nwhile i < n:\n...\ni *= 2 # O(log n)\nQuy tắc 4: Nối tiếp nhau→lấy cái lớn nhất\nC++\nsort(a.begin(), a.end()); // O(n log n)\nfor (int i = 0; i < n; i++) { ... } // O(n)\n// Tổng: O(n log n) (bỏ O(n) vì nhỏ hơn)\nPython\na.sort() # O(n log n)\nfor x in a: # O(n)\n...\n# Tổng: O(n log n)\nQuy tắc10 8 - Thuật toán cần nhanh cỡ nào?\nMáy tính thực hiện khoảng108 phép tính mỗi giây (ước lượng an toàn). Thời gian giới\nhạn thường là 1-2 giây. Dựa vào giới hạnntrong đề bài, tra bảng sau:\nGIỚI HẠNn ĐỘ PHỨC TẠP CHẤP NHẬN ĐƯỢCVÍ DỤ THUẬT TOÁN\nn≤10 O(n!), O(2n) Duyệt hoán vị, duyệt tập con\nn≤20 O(2n), O(n2·2 n) Bitmask, meet in the middle\nn≤500 O(n3) Ba vòng lặp lồng nhau\nn≤5,000 O(n2) Hai vòng lặp lồng nhau\nn≤10 6 O(nlogn) Sắp xếp, cây nhị phân\nn≤10 8 O(n) Duyệt 1 lần, prefix sum\nn≤10 18 O(logn)hoặcO(1) Binary search, công thức toán\nCách dùng bảng này:Nhìn giới hạnntrong đề→tra cột giữa→biết cần thuật toán\nnhanh cỡ nào.\nVí dụ: Đề chon≤10 5. Tra bảng→cầnO(nlogn)hoặc tốt hơn. Thuật toánO(n 2) =\n(105)2 = 10 10 phép tính→chạy khoảng 100 giây→TLE!\nMẹo cho người mới:Ở giai đoạn đầu, đừng lo quá nhiều về Big O. Cứ code cách đơn\ngiản nhất trước. Nếu bị TLE, quay lại đọc giới hạn và nghĩ cách nhanh hơn. Dần dần\nbạn sẽ có trực giác!\nGhi chú cho Python:\n• Python thường chậm hơn C++, nên ở cùng một giới hạn, bạn cần cẩn thận hơn với\nthuật toán.\n• Vớin≤2×10 5 hay10 6, Python vẫn xử lý tốt nếu thuật toán làO(n)hoặcO(nlogn)\nvà code gọn.\n• Tránh các vòng lặpO(n 2)lồng nhau khinlớn.\n5. Template code C++\nHầu hết các bạn CP dùng C++ vì tốc độ nhanh và thư viện chuẩn (STL) rất mạnh. Đây\nlà template cơ bản:\nC++\n#include <bits/stdc++.h> // Include tất cả thư viện chuẩn\nusing namespace std; // Không cần viết std:: trước mỗi hàm\nint main() {\nios_base::sync_with_stdio(false); // Tăng tốc nhập/xuất\ncin.tie(NULL); // Bỏ đồng bộ cin/cout\n// File I/O (nếu đề yêu cầu)\n// freopen(\"input.txt\", \"r\", stdin);\n// freopen(\"output.txt\", \"w\", stdout);\n// Đọc input\nint n;\ncin >> n;\n// Xử lý\n// ... viết thuật toán ở đây ...\n// Xuất output\n// cout << ans << \"\\n\";\nreturn 0;\n}\nGiải thích từng dòng:\nDÒNG Ý NGHĨA\n#include <bits/stdc++.h> Include toàn bộ thư viện C++ (chỉ dùng trong CP,\nkhông dùng trong thực tế)\nusing namespace std; Cho phép viếtcoutthay vìstd::cout\nios_base::sync_with_stdio(false); Tắt đồng bộ C/C++ I/O→nhanh hơn 5-10 lần\ncin.tie(NULL); Bỏ flushcouttrước mỗicin→nhanh hơn\n\"\\n\"thayendl endlflush buffer (chậm),\"\\n\"không flush\n(nhanh)\nGhi chú cho Python\nPython Template\nimport sys\ndef main():\ninput = sys.stdin.readline\n# File I/O (nếu đề yêu cầu)\n# sys.stdin = open(\"input.txt\", \"r\")\n# sys.stdout = open(\"output.txt\", \"w\")\n# Đọc input\nn = int(input())\n# Xử lý\n# ... viết thuật toán ở đây ...\n# Xuất output\n# print(ans)\nif __name__ == \"__main__\":\nmain()\n• sys.stdin.readline: Cách đọc input nhanh trong Python.\n• Python không bị tràn số nguyên như C++int; số nguyên của Python có thể lớn\ntùy ý.\n• Tuy nhiên, Python chậm hơn C++, nên cần chú ý tối ưu input/output.\n• Vớioutputlớn,cóthểgomkếtquảvàolistrồidùng\"\".join(...)hoặc\"\\n\".join(...).\nKiểu dữ liệu: int vs long long\nKIỂU PHẠM VI KHI NÀO DÙNG\nint −2×10 9 đến2×10 9 Giá trị≤2×10 9\nlong long −9×10 18 đến9×10 18 Giá trị hoặc tổng có thể>2×10 9\nQuy tắc đơn giản:Nếu không chắc, dùnglong longcho an toàn. Hoặc dùng quy tắc:\nnếun×max_value có thể vượt2×10 9, dùnglong long.\nVí dụ: Tính tổngnsố, mỗi số đến10 9,nđến10 5. Tổng tối đa= 105×10 9 = 10 14→\ncầnlong long!\nGhi chú Python:Trong Python, kiểuintđã hỗ trợ số nguyên lớn, nên bạn không cần\nlolong long. Vấn đề chính của Python là tốc độ, không phải tràn số.\n6. Ví dụ 1: Bài \"Weird Algorithm\"(Thuật toán lạ)\nĐề bài:Cho số nguyên dươngn. Lặp lại quy trình sau cho đến khin= 1:\n• Nếunchẵn:n=n/2\n• Nếunlẻ:n= 3n+ 1\nIn ra tất cả các giá trị củantrong quá trình.\nGiới hạn:1≤n≤10 6.\nChạy tay với *n*= 3\n• n= 3(lẻ)→n= 3×3 + 1 = 10\n• n= 10(chẵn)→n= 10/2 = 5\n• n= 5(lẻ)→n= 3×5 + 1 = 16\n• n= 16(chẵn)→n= 16/2 = 8\n• n= 8(chẵn)→n= 8/2 = 4\n• n= 4(chẵn)→n= 4/2 = 2\n• n= 2(chẵn)→n= 2/2 = 1\n• →Dừng!\nOutput:3 10 5 16 8 4 2 1\nPhân tích\n• Đây là bài mô phỏng thuần túy: làm đúng theo mô tả, không cần sáng tạo thuật\ntoán.\n• Bẫy:Dùn≤10 6, trong quá trình tính,ncó thể tăng rất lớn trước khi giảm về 1.\nVí dụ:n= 113383sẽ tăng lên hơn2.5×10 9→trànint! Phải dùnglong long.\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nlong long n; // PHẢI dùng long long!\ncin >> n;\nwhile (true) {\ncout << n;\nif (n == 1) break;\ncout << \" \";\nif (n % 2 == 0) n /= 2;\nelse n = 3 * n + 1;\n}\ncout << \"\\n\";\n}\nPython\nn = int(input())\nans = []\nwhile True:\nans.append(str(n))\nif n == 1:\nbreak\nif n % 2 == 0:\nn //= 2\nelse:\nn = 3 * n + 1\nprint(\" \".join(ans))\nGhi chú Python:\n• Dùng//để chia nguyên.\n• Thường nên lưu kết quả vào listans, rồi cuối cùngprint(\"\".join(ans))để output\ngọn và nhanh.\n7. Ví dụ 2: Bài \"Missing Number\"(Số bị thiếu)\nĐề bài:Chon−1số phân biệt, mỗi số nằm trong đoạn[1, n]. Tìm số bị thiếu.\nGiới hạn:2≤n≤2×10 5.\nChạy tay\nInput:n= 5, các số:2 3 1 5\n• Tổng1 + 2 + 3 + 4 + 5 = 15\n• Tổng các số cho:2 + 3 + 1 + 5 = 11\n• Số thiếu= 15−11 = 4\nPhân tích\nTổng các số từ1đếnnlà n(n+1)\n2 . Trừ đi tổng các số đã cho, ta được số bị thiếu.\nĐộ phức tạp:O(n)- duyệt 1 lần để tính tổng.\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nlong long total = (long long)n * (n + 1) / 2;\nlong long sum = 0;\nfor (int i = 0; i < n - 1; i++) {\nint x;\ncin >> x;\nsum += x;\n}\ncout << total - sum << \"\\n\";\n}\nPython\nn = int(input())\narr = list(map(int, input().split()))\ntotal = n * (n + 1) // 2\ns = sum(arr)\nprint(total - s)\nLưu ý:(long long)n * (n + 1) / 2- ép kiểulong longtrước khi nhân để tránh\ntràn số. Nếun= 2×10 5 thìn×(n+ 1)≈4×10 10→trànint!\nGhi chú Python:\n• Python không lo tràn số ở phép tính này.\n• Có thể viết cực ngắn:\nn = int(input())\nprint(n * (n + 1) // 2 - sum(map(int, input().split())))\nTuy nhiên với người mới, nên viết tách biếntotal,scho dễ đọc.\n8. Ví dụ 3: Bài \"Repetitions\"(Chuỗi lặp dài nhất)\nĐề bài:Cho một xâu DNA gồm các ký tự A, C, G, T. Tìm độ dài của đoạn liên tiếp\ndài nhất gồm cùng một ký tự.\nChạy tay\nInput:ATTCGGGA\nA T T C G G G A\n^ -> A: độ dài 1\n^ ^ -> T: độ dài 2\n^ -> C: độ dài 1\n^ ^ ^ -> G: độ dài 3\n^ -> A: độ dài 1\nĐoạn dài nhất:GGG, độ dài= 3. Output:3.\nPhân tích\nDuyệt từ trái sang phải, duy trì biến đếmcnt:\n• Nếu ký tự hiện tại giống ký tự trước→tăngcnt\n• Nếu khác→resetcnt = 1\n• Luôn cập nhậtans = max(ans, cnt)\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nstring s;\ncin >> s;\nint ans = 1, cnt = 1;\nfor (int i = 1; i < (int)s.size(); i++) {\nif (s[i] == s[i - 1]) cnt++;\nelse cnt = 1;\nans = max(ans, cnt);\n}\ncout << ans << \"\\n\";\n}\nPython\ns = input().strip()\nans = 1\ncnt = 1\nfor i in range(1, len(s)):\nif s[i] == s[i - 1]:\ncnt += 1\nelse:\ncnt = 1\nans = max(ans, cnt)\nprint(ans)\nGhi chú Python:input().strip()giúp bỏ ký tự xuống dòng/thừa khoảng trắng ở\nhai đầu.\n9. Các lỗi phổ biến cần tránh\nDưới đây là những lỗi mà rất nhiều người mới mắc phải. Hãy đọc kỹ để tránh!\nLỗi 1: Tràn số (Integer Overflow)\nC++\n// SAI - tràn số khi n lớn!\nint n = 100000;\nint total = n * (n + 1) / 2; // n * (n+1) = 10^10 -> tràn int!\n// ĐÚNG\nlong long total = (long long)n * (n + 1) / 2;\nPython\n# Python không bị tràn số nguyên kiểu này\nn = 100000\ntotal = n * (n + 1) // 2\nGhi chú:Python tránh được lỗi tràn số nguyên thông thường, nhưng điều đó không có\nnghĩa là mọi code Python đều đủ nhanh.\nLỗi 2: Sai chỉ số (Off-by-one Error)\nC++\n// Mảng n phần tử, chỉ số từ 0 đến n-1\nint a[100];\nfor (int i = 0; i <= n; i++) // SAI! i <= n truy cập a[n] - ngoài mảng\nfor (int i = 0; i < n; i++) // ĐÚNG\nPython\na = [0] * n\nfor i in range(n + 1): # SAI nếu truy cập a[i] khi i = n\n...\nfor i in range(n): # ĐÚNG: i chạy từ 0 đến n-1\n...\nLỗi 3: Không đọc kỹ đề\n• Đề nói \"in mỗi số trên một dòng\"→dùng\"\\n\", không phải\"\".\n• Đề nói \"in trên cùng một dòng, cách nhau bởi dấu cách\"→nhớ không có dấu cách\nthừa ở cuối.\n• Đề nói \"1-indexed\"(đánh số từ 1) hay \"0-indexed\"(đánh số từ 0)?\nLỗi 4: Quên xử lý edge case\n• n= 0hoặcn= 1- mảng rỗng hoặc chỉ có 1 phần tử.\n• Tất cả phần tử giống nhau.\n• Giá trị lớn nhất hoặc nhỏ nhất theo giới hạn.\nLỗi 5: Dùng endl thay vì \"\\n\"\nTrong các bài có output lớn,endlflush buffer mỗi lần→chậm gấp nhiều lần. Khi nộp\nbài, thường nên dùng\"\\n\"thay vìendl.\nLưu ý:endlvẫn hữu ích khi debug vì nó ép in dữ liệu ra ngay lập tức (flush buffer).\nĐiều này giúp bạn thấy output ngay tại thời điểm chương trình đang chạy. Nhưng trong\nlời giải chính thức để nộp, hãy ưu tiên\"\\n\"để tránh chậm không cần thiết.\nLỗi 6: Input chậm trong Python\nimport sys\ninput = sys.stdin.readline\nKhi dữ liệu lớn, cách này thường nhanh hơninput()thông thường.\n10. Mẹo khi nộp bài\n1. Test với ví dụ trong đề trước - nếu sai ví dụ, chắc chắn sai test ẩn.\n2. Tự nghĩ thêm test - test nhỏ nhất (n= 1), test lớn nhất (giới hạn max), test đặc\nbiệt.\n3. Đọc lại code một lần trước khi nộp - nhiều khi phát hiện bug ngay lập tức.\n4. Nếu WA: thử test nhỏ, in ra giá trị trung gian để debug.\n5. Nếu TLE: kiểm tra độ phức tạp, có thể cần thuật toán tốt hơn.\n6. Nếu RE: kiểm tra truy cập ngoài mảng, chia cho 0, stack overflow (đệ quy quá sâu).\nMẹo thêm cho Python:\n• Với output rất lớn, thay vì print trong vòng lặp nhiều lần, hãy gom vào list rồi in\nmột lần.\n• Tránh dùng đệ quy sâu nếu không cần.\n• Ưu tiên built-in nhưsum,max,sortvì chúng thường nhanh hơn tự viết vòng lặp\nPython thuần.\nTóm tắt bài học\nKHÁI NIỆM NỘI DUNG CHÍNH\nCP là gì Giải bài thuật toán, nộp lên online judge\nSimulation Đọc đề→chuyển mô tả thành code\nĐánh giá độ phức tạp Dựa vàonđể chọn thuật toán phù hợp\nTemplate C++ / Python bits/stdc++.h,ios_base,sys.stdin.readline\nLỗi phổ biến Tràn số, off-by-one, không đọc kỹ đề, input chậm",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b1-p1-weird-algorithm",
            "title": "Weird Algorithm",
            "fileName": "Bài 1_ Weird Algorithm _ Thuật toán lạ.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 800,
            "preview": "Bài toán Weird Algorithm. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/Bài 1_ Weird Algorithm _ Thuật toán lạ.pdf",
            "problemContent": "Xét thuật toán sau nhận đầu vào là một số nguyên dương n. Nếu n chẵn, thuật toán sẽ chia\nnó cho hai, và nếu n lẻ, thuật toán nhân ba nó lên rồi cộng thêm một đơn vị. Thuật toán trên\nlặp lại điều này cho tới khi n bằng 1. Ví dụ, dãy số thực hiện với n = 3 là:\n3 → 10 → 5 → 16 → 8 → 4 → 2 → 1\nViệc của bạn là hãy mô phỏng lại cách hoạt động của thuật toán với một giá trị n cho trước.\n\nInput\n• Một dòng duy nhất chứa số n\n• 1 ≤ n ≤ 10^6\n\nOutput\n• In ra một dòng lần lượt chứa từng giá trị của n trong khi chạy thuật toán",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3",
            "sampleOutput": "3 10 5 16 8 4 2 1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3",
                "output": "3 10 5 16 8 4 2 1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p2-missing-number",
            "title": "Missing Number",
            "fileName": "Bài 2_Missing Number.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 800,
            "preview": "Bài toán Missing Number. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/Bài 2_Missing Number.pdf",
            "problemContent": "Bạn nhận được tất cả các số từ 1 đến n trừ một số. Nhiệm vụ của bạn là tìm số bị thiếu đó.\n\nInput\n• Dòng đầu tiên chứa một số nguyên n\n• Dòng thứ hai chứa n − 1 số. Các số khác nhau đôi một và mỗi số có giá trị từ 1 đến n\n\nOutput\n• In ra số còn thiếu\n\nScoring\n• 2 ≤ n ≤ 2 \times 10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n2 3 1 5",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n2 3 1 5",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p3-coin-piles",
            "title": "Coin Piles",
            "fileName": "CSES - Coin Piles _ Cọc xu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Coin Piles. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Coin Piles _ Cọc xu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có hai cọc xu lần lượt chứa a và b đồng xu. Với mỗi lượt, bạn có thể loại bỏ 1 đồng xu ở\ncọc bên trái và 2 đồng xu ở cọc bên phải, hoặc loại bỏ 2 đồng xu ở cọc bên trái và 1 đồng xu\nở cọc bên phải.\nNhiệm vụ của bạn đó chính là tìm ra liệu bạn có thể loại bỏ tất cả các đồng xu ở cả hai cọc.\n\nInput\n• Ở dòng đầu tiên chứa một số nguyên t: số lượng test\n• Sau đó, có t dòng, mỗi dòng chứa hai số nguyên a và b: là số lượng đồng xu ở mỗi túi\n• Giới hạn:\n• 1 ≤ t ≤ 10^5\n• 0 ≤ a, b ≤ 10^9\n\nOutput\n• Với mỗi test, hãy in YES nếu bạn có thể loại bỏ tất cả các đồng xu ở cả hai cọc và in\nNO nếu ngược lại",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n2 1\n2 2\n3 3",
            "sampleOutput": "YES\nNO\nYES",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n2 1\n2 2\n3 3",
                "output": "YES\nNO\nYES"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p4-collecting-numbers",
            "title": "Collecting Numbers",
            "fileName": "CSES - Collecting Numbers _ Thu thập số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Collecting Numbers. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Collecting Numbers _ Thu thập số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một mảng mà chứa mỗi số giữa 1 … n chính xác một lần. Nhiệm vụ của bạn là\nthu thập các số từ 1 đến n theo thứ tự tăng dần.\nTrong mỗi vòng, bạn đi qua mảng từ trái sang phải và thu thập nhiều số nhất có thể. Tổng số\nlượng vòng sẽ là bao nhiêu?\n\nInput\n• Dòng đầu tiên có một số nguyên n là kích thước mảng\n• Dòng tiếp theo có n số nguyên x 1, x 2, …, x n là các số trong mảng\n\nOutput\n• In một số nguyên duy nhất là số lượng vòng\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n4 2 1 5 3",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n4 2 1 5 3",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p5-gray-code",
            "title": "Gray Code",
            "fileName": "CSES - Gray Code _ Mã Gray - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Gray Code. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Gray Code _ Mã Gray - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Mã Gray là danh sách gồm tất cả 2 n xâu nhị phân độ dài n, trong đó bất kỳ hai xâu liên tiếp\nnào khác nhau tại chính xác một vị trí (tức là khoảng cách Hamming của chúng là một).\nNhiệm vụ của bạn là tạo mã Gray cho một độ dài n được cho.\n\nInput\n• Dòng đầu vào duy nhất có một số nguyên n.\n\nOutput\n• In 2 n dòng mô tả mã Gray. Bạn có thể in bất kì lời giải hợp lệ nào.\n\nScoring\n• 1 ≤ n ≤ 16",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2",
            "sampleOutput": "00\n01\n11\n10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2",
                "output": "00\n01\n11\n10"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p6-increasing-array",
            "title": "Increasing Array",
            "fileName": "CSES - Increasing Array _ Dãy tăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 800,
            "preview": "Bài toán Increasing Array. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Increasing Array _ Dãy tăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một mảng gồm n số nguyên dương. Bạn cần biến đổi sao cho mảng này được\nsắp xếp theo trình tự tăng dần, và mọi phần tử trong mảng đều không nhỏ hơn phần tử đứng\ntrước.\nTrong mỗi lần biến đổi, bạn có thể tăng một phần tử lên một đơn vị. Hãy tìm số lần biến đổi ít\nnhất để thoả mản điều kiện trên.\n\nInput\n• Dòng đầu chỉ chứa số nguyên dương n là độ dài của mảng\n• Dòng thứ hai gồm n số nguyên dương x 1, x 2, …, x n, là các phần tử của mảng\n\nOutput\n• In ra số lần biến đổi ít nhất\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n3 2 5 1 7",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 2 5 1 7",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p7-number-spiral",
            "title": "Number Spiral",
            "fileName": "CSES - Number Spiral _ Xoắn ốc số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Number Spiral. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Number Spiral _ Xoắn ốc số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một xoắn ốc số là một lưới vô hạn có ô vuông trái trên chứa số 1. Dưới đây là năm lớp đầu\ntiên của xoắn ốc:\nNhiệm vụ của bạn là tìm ra số trong hàng y và cột x.\n\nInput\n• Dòng đầu chứa một số nguyên t: số lượng test\n• Tiếp theo là t dòng, mỗi dòng chứa hai số nguyên y và x\n• Ràng buộc:\n• 1 ≤ t ≤ 10^5\n• 1 ≤ y, x ≤ 10^9\n\nOutput\n• Với mỗi test, in ra số ở hàng y và cột x",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n2 3\n1 1\n4 2",
            "sampleOutput": "8\n1\n15",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n2 3\n1 1\n4 2",
                "output": "8\n1\n15"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p8-permutations",
            "title": "Permutations",
            "fileName": "CSES - Permutations _ Hoán vị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 800,
            "preview": "Bài toán Permutations. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Permutations _ Hoán vị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một hoán vị của các số nguyên 1, 2, 3, …, n được gọi là đẹp nếu không có hai phần tử liền\nkề nào chênh lệch đúng 1 đơn vị.\nCho số nguyên dương n, hãy tìm một hoán vị đẹp nếu tồn tại một dãy như thế.\n\nInput\n• Chỉ một dòng duy nhất chứa số nguyên dương n.\n\nOutput\n• In ra một hoán vị đẹp của các số tự nhiên 1, 2, 3, …, n. Nếu có nhiều kết quả, hãy in ra\nmột hoán vị bất kì. Nếu không có hoán vị thoả mãn, hãy in ra NO SOLUTION.\n\nScoring\n• 1 ≤ n ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5",
            "sampleOutput": "4 2 5 3 1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5",
                "output": "4 2 5 3 1"
              },
              {
                "id": "Test 2",
                "input": "3",
                "output": "NO SOLUTION"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b1-p9-repetitions",
            "title": "Repetitions",
            "fileName": "CSES - Repetitions _ Lặp lại - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 800,
            "preview": "Bài toán Repetitions. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Repetitions _ Lặp lại - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có một dãy ADN: một xâu kí tự chỉ gồm các chữ cái A, T, G, C. Hãy tìm đoạn\nADN con dài nhất chỉ gồm các kí tự giống nhau.\n\nInput\n• Một dòng duy nhất chứa xâu s\n• Độ dài xâu s thỏa mãn: 1 ≤ n ≤ 10^6\n\nOutput\n• In ra độ dài của đoạn ADN con dài nhất tìm được.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "ATTCGGGA",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "ATTCGGGA",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b1-p10-two-sets",
            "title": "Two Sets",
            "fileName": "CSES - Two Sets _ Hai tập hợp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Two Sets. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/CSES - Two Sets _ Hai tập hợp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Việc của bạn là chia các số 1, 2, …, n thành hai dãy số có tổng bằng nhau.\n\nInput\n• Một dòng duy nhất là số nguyên n (1 ≤ n ≤ 10^6).\n\nOutput\n• In ra YES, nếu tồn tại cách chia, ngược lại in ra NO.\n• Trong trường hợp có cách chia như thế, in ra một ví dụ về cách tạo ra hai dãy. Đầu tiên,\nin ra số lượng phần tử của dãy thứ nhất theo sau là các phần tử đó ở dòng tiếp theo. Sau\nđó in ra dãy thứ hai theo cách tương tự.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "7",
            "sampleOutput": "YES\n4\n1 2 4 7\n3\n3 5 6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "7",
                "output": "YES\n4\n1 2 4 7\n3\n3 5 6"
              },
              {
                "id": "Test 2",
                "input": "6",
                "output": "NO"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b1-p11-t-m-s-anh-c",
            "title": "Tìm số anh cả",
            "fileName": "Tìm số anh cả - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Tìm số anh cả. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 1/Tìm số anh cả - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho số nguyên dương n. Gọi S là tập hợp tất cả các số nguyên dương được tạo thành từ các\nchữ số của số nguyên n. Số \"anh cả\" được định nghĩa là số lớn nhất trong tập S\nYêu cầu: Cho số nguyên dương n (0 ≤ n ≤ 1 0 100). Hãy in ra số \"anh cả\" cần tìm.\n\nInput\n• Dòng thứ nhất chứa số t (1 ≤ t ≤ 20) - Thể hiện số testcase\n• t dòng tiếp theo, mỗi dòng chứa số nguyên dương n (0 ≤ n ≤ 1 0 100)\n\nOutput\n• Ứng với mỗi testcase, in ra đáp án cần tìm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2\n1254\n3225",
            "sampleOutput": "5421\n5322",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n1254\n3225",
                "output": "5421\n5322"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-2",
        "order": 2,
        "title": "Kỹ thuật Sắp xếp (Sorting)",
        "theoryPdfFileName": "Chapter 2 lesson 2 - Sắp xếp.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 2 - Sắp xếp.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Kỹ thuật Sắp xếp (Sorting) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Sắp xếp (Sorting)\nNội dung\n1. Tại sao sắp xếp quan trọng?\n2. Sử dụngsort()\n• 2.1. Sắp xếp tăng dần (mặc định)\n• 2.2. Sắp xếp giảm dần\n• 2.3. Sắp xếp một phần mảng\n• 2.4. Sắp xếp mảng / danh sách thông thường\n3. Custom Comparator (Sắp xếp theo tiêu chí riêng)\n• 3.1. C++\n-Dùng hàm (function)\n-Dùng lambda (viết gọn hơn)\n-Dùng operator<(overload toán tử)\n• 3.2. Python\n-Dùngkey=\n-Với dictionary / object\n-Lưu ý quan trọng\n4. Sắp xếp với pair, tuple\n• 4.1. Sắp xếp pair / tuple\n• 4.2. Mẹo: Sắp xếp \"ngược\"một thành phần\n• 4.3. Sắp xếp theo chỉ số (index sort)\n5. Counting Sort (Sắp xếp đếm)\n• Ý tưởng\n• Ví dụ trực quan\n• Code\n• Khi nào dùng counting sort?\n6. Stable Sort (Sắp xếp ổn định)\n7. Loại bỏ phần tử trùng lặp\n8. Ví dụ chi tiết: Bài \"Chênh lệch nhỏ nhất\"(Closest Pair)\n• Phân tích\n• Chạy tay\n• Code\n9. Các lỗi phổ biến khi sắp xếp\n• Ghi chú Python:sorted()vs.sort()\n• Tóm tắt bài học\nSắp xếp là một trong những công cụ nền tảng và quan trọng nhất trong lập trình thi\nđấu. Bạn sẽ ngạc nhiên khi biết rằng rất nhiều bài toán tưởng phức tạp, nhưng chỉ cần\nsắp xếp dữ liệu là trở nên đơn giản hơn rất nhiều!\nTrong bài học này, chúng ta sẽ tìm hiểu cách dùng hàm *sort*()trong C++ và Python,\ncách sắp xếp theo tiêu chí riêng, và các ứng dụng phổ biến của sắp xếp trong CP.\n1. Tại sao sắp xếp quan trọng?\nHãy xem một ví dụ đơn giản. Cho mảnga= [5,2,8,1,9,3]. Hỏi: \"Hai số gần nhau nhất\nchênh lệch bao nhiêu?\"\n• Không sort:phải so sánh mọi cặp→O(n 2)\n• Có sort:sau khi sort ta được[1,2,3,5,8,9]. Hai số gần nhau nhất chắc chắn nằm\nkề nhau trong mảng đã sort→chỉ cần duyệt 1 lần→O(nlogn)\nĐó là sức mạnh của sắp xếp: biến bài toán phức tạp thành đơn giản!\n2. Sử dụng sort()\nCả C++ và Python đều có hàm sắp xếp rất mạnh, thường đủ dùng cho hầu hết các bài\nCP với độ phức tạpO(nlogn).\n• C++: dùng *sort*(begin, end)\n• Python: dùnga.sort()hoặcsorted(a)\n2.1. Sắp xếp tăng dần (mặc định)\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<int> a(n);\nfor (int &x : a) cin >> x;\nsort(a.begin(), a.end()); // Sắp xếp tăng dần\nfor (int x : a) cout << x << \" \";\ncout << \"\\n\";\n}\nPython\nn = int(input())\na = list(map(int, input().split()))\na.sort() # Sắp xếp tăng dần\nprint(*a)\n2.2. Sắp xếp giảm dần\nC++\n// Cách 1: Dùng greater<int>()\nsort(a.begin(), a.end(), greater<int>());\n// Cách 2: Sort tăng rồi reverse\nsort(a.begin(), a.end());\nreverse(a.begin(), a.end());\nPython\n# Cách 1: Dùng reverse=True\na.sort(reverse=True)\n# Cách 2: sorted() trả về list mới\nb = sorted(a, reverse=True)\n2.3. Sắp xếp một phần mảng\nC++\n// Sort từ vị trí 2 đến vị trí 5 (không bao gồm 5)\nsort(a.begin() + 2, a.begin() + 5);\n// Ví dụ: a = [5, 2, 8, 1, 9, 3]\n// Sau khi sort vị trí 2-4: a = [5, 2, 1, 8, 9, 3]\nPython\n# Python không có sort trực tiếp trên đoạn con như C++\n# Ta có thể gán lại slice đã được sort\na[2:5] = sorted(a[2:5])\n# Ví dụ: a = [5, 2, 8, 1, 9, 3]\n# Sau khi sort a[2:5]: a = [5, 2, 1, 8, 9, 3]\n2.4. Sắp xếp mảng / danh sách thông thường\nC++\nint a[] = {5, 2, 8, 1, 9, 3};\nint n = 6;\nsort(a, a + n); // Sort toàn bộ mảng\nPython\na = [5, 2, 8, 1, 9, 3]\na.sort()\n3. Custom Comparator (Sắp xếp theo tiêu chí riêng)\nMặc địnhsort()sắp xếp tăng dần. Nhưng nếu bạn muốn sắp xếp theo cách khác (ví dụ:\ntheo điểm giảm dần, nếu cùng điểm thì theo tên tăng dần), bạn cần viết tiêu chí sắp xếp\nriêng.\n3.1. C++\nDùng hàm (function)\nstruct Student {\nstring name;\nint score;\n};\n// Hàm so sánh: trả về true nếu a nên đứng TRƯỚC b\nbool compare(const Student &a, const Student &b) {\nif (a.score != b.score) return a.score > b.score; // điểm giảm dần\nreturn a.name < b.name; // tên tăng dần\n}\nint main() {\nvector<Student> v = {{\"An\", 85}, {\"Binh\", 92}, {\"Cuc\", 85}, {\"Dung\", 92}};\nsort(v.begin(), v.end(), compare);\n// Kết quả: Binh(92), Dung(92), An(85), Cuc(85)\n}\nDùng lambda (viết gọn hơn)\nsort(v.begin(), v.end(), [](const Student &a, const Student &b) {\nif (a.score != b.score) return a.score > b.score;\nreturn a.name < b.name;\n});\nDùng operator<(overload toán tử)\nstruct Student {\nstring name;\nint score;\nbool operator<(const Student &other) const {\nif (score != other.score) return score > other.score;\nreturn name < other.name;\n}\n};\n// Giờ chỉ cần:\nsort(v.begin(), v.end()); // Tự dùng operator<\n3.2. Python\nPython không dùng comparator kiểu C++ trong *sort*()thông thường. Thay vào đó, ta\ndùngkey=.\nDùng key=\nstudents = [(\"An\", 85), (\"Binh\", 92), (\"Cuc\", 85), (\"Dung\", 92)]\n# Sort theo điểm giảm dần, nếu bằng nhau thì tên tăng dần\nstudents.sort(key=lambda s: (-s[1], s[0]))\n# Kết quả:\n# [(\"Binh\", 92), (\"Dung\", 92), (\"An\", 85), (\"Cuc\", 85)]\nVới dictionary / object\nstudents = [\n{\"name\": \"An\", \"score\": 85},\n{\"name\": \"Binh\", \"score\": 92},\n{\"name\": \"Cuc\", \"score\": 85},\n{\"name\": \"Dung\", \"score\": 92},\n]\nstudents.sort(key=lambda s: (-s[\"score\"], s[\"name\"]))\nLưu ý quan trọng:\n• C++ thường dùng comparator\n• Python thường dùng key function\n• keytrong Python rất mạnh và thường dễ viết hơn comparator\n4. Sắp xếp với pair, tuple\npairtrong C++ vàtupletrong Python/C++ đều tự động so sánh theo thứ tự các thành\nphần (lexicographic order). Đây là kỹ thuật RẤT hữu ích để tránh viết comparator phức\ntạp.\n4.1. Sắp xếp pair / tuple\nC++\nvector<pair<int, string>> v = {{85, \"An\"}, {92, \"Binh\"}, {85, \"Cuc\"}};\nsort(v.begin(), v.end());\n// Kết quả: (85, \"An\"), (85, \"Cuc\"), (92, \"Binh\")\n// Sort theo first trước, nếu bằng thì theo second\nPython\nv = [(85, \"An\"), (92, \"Binh\"), (85, \"Cuc\")]\nv.sort()\n# Kết quả: (85, \"An\"), (85, \"Cuc\"), (92, \"Binh\")\n4.2. Mẹo: Sắp xếp \"ngược\"một thành phần\nNếu muốn sort theo điểm giảm dần, tên tăng dần, dùng mẹo đảo dấu:\nC++\nvector<pair<int, string>> v;\nfor (auto &s : students) {\nv.push_back({-s.score, s.name}); // Đảo dấu điểm!\n}\nsort(v.begin(), v.end());\nPython\nstudents = [(\"An\", 85), (\"Binh\", 92), (\"Cuc\", 85)]\nv = [(-score, name) for name, score in students]\nv.sort()\n4.3. Sắp xếp theo chỉ số (index sort)\nĐôi khi bạn muốn biết \"sau khi sort, phần tử gốc ở vị trí nào\":\nC++\nint a[] = {50, 20, 80, 10, 40};\nint n = 5;\nvector<int> idx(n);\niota(idx.begin(), idx.end(), 0); // idx = {0, 1, 2, 3, 4}\nsort(idx.begin(), idx.end(), [&](int i, int j) {\nreturn a[i] < a[j];\n});\n// idx = {3, 1, 4, 0, 2}\nPython\na = [50, 20, 80, 10, 40]\nidx = list(range(len(a)))\nidx.sort(key=lambda i: a[i])\n# idx = [3, 1, 4, 0, 2]\n5. Counting Sort (Sắp xếp đếm)\nKhi giá trị nằm trong khoảng nhỏ (ví dụ0≤ai≤10 6), ta có thể dùng counting sort với\nđộ phức tạpO(n+max_val), nhanh hơnO(nlogn).\nÝ tưởng\n1. Đếm số lần xuất hiện của mỗi giá trị.\n2. Dựng lại mảng từ bảng đếm.\nVí dụ trực quan\nMảng gốc:[3,1,4,1,5,9,2,6,5,3]\nBước 1: Đếm\nGiá trị: 0 1 2 3 4 5 6 7 8 9\nSố lần: 0 2 1 2 1 2 1 0 0 1\nBước 2: Dựng lạiLấy 2 số 1, 1 số 2, 2 số 3, 1 số 4, 2 số 5, 1 số 6, 1 số 9\n→[1,1,2,3,3,4,5,5,6,9]\nCode\nC++\nconst int MAX_VAL = 1000000;\nint cnt[MAX_VAL + 1] = {};\n// Bước 1: Đếm\nfor (int i = 0; i < n; i++) cnt[a[i]]++;\n// Bước 2: Dựng lại\nint idx = 0;\nfor (int v = 0; v <= MAX_VAL; v++) {\nwhile (cnt[v] > 0) {\na[idx++] = v;\ncnt[v]--;\n}\n}\nPython\nMAX_VAL = 10**6\ncnt = [0] * (MAX_VAL + 1)\n# Bước 1: Đếm\nfor x in a:\ncnt[x] += 1\n# Bước 2: Dựng lại\nres = []\nfor v in range(MAX_VAL + 1):\nif cnt[v] > 0:\nres.extend([v] * cnt[v])\na = res\nKhi nào dùng counting sort?\n• Giá trị nhỏ (≤10 6 hoặc10 7)\n• Cần tốc độ tối đa\n• Muốn đếm tần suất (không cần dựng lại mảng)\nGhi chú Python:Counting sort trong Python không phải lúc nào cũng nhanh hơn\nsort()built-in, vìsort()của Python được tối ưu rất tốt. Chỉ nên dùng counting sort\nkhi miền giá trị nhỏ và thật sự phù hợp.\n6. Stable Sort (Sắp xếp ổn định)\nSắp xếp ổn định (stable sort) đảm bảo: nếu hai phần tử có cùng giá trị so sánh, thì thứ\ntự ban đầu của chúng được giữ nguyên.\nVí dụ: Sắp xếp sinh viên theo điểm. Nếu cùng điểm, muốn giữ thứ tự nhập vào:\nC++\n// sort() KHÔNG đảm bảo stable\nsort(v.begin(), v.end());\n// stable_sort() đảm bảo stable\nstable_sort(v.begin(), v.end());\nPython\n# sort() của Python là stable\nv.sort()\n# sorted(v) cũng stable\nw = sorted(v)\n• Trước: An(85), Binh(92), Cuc(85), Dung(90)\n• Sort theo điểm giảm dần:\n-sort()của C++: có thể ra Binh(92), Dung(90), Cuc(85), An(85)\n-stable_sort()của C++: chắc chắn ra Binh(92), Dung(90), An(85), Cuc(85)\n-sort()của Python: giữ ổn định nhưstable_sort\n7. Loại bỏ phần tử trùng lặp\nMột kỹ thuật rất hay dùng: sort rồi loại bỏ trùng.\nC++\nvector<int> a = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3};\nsort(a.begin(), a.end());\n// a = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]\na.erase(unique(a.begin(), a.end()), a.end());\n// a = [1, 2, 3, 4, 5, 6, 9]\nPython\na = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]\na.sort()\n# a = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]\nres = []\nfor x in a:\nif not res or res[-1] != x:\nres.append(x)\na = res\n# a = [1, 2, 3, 4, 5, 6, 9]\nLưu ý:\n• Nếu không cần tự cài đặt quá trình loại trùng, một cách ngắn gọn là dùng cấu trúc\nset tập hợp rồi sắp xếp lại.\n• Tuy nhiên, cách duyệt sau khi sort giúp bạn hiểu rõ hơn ý tưởng của thuật toán.\n8. Ví dụ chi tiết: Bài \"Chênh lệch nhỏ nhất\"(Closest\nPair)\nĐề bài:Cho mảngagồmnsố nguyên. Tìm chênh lệch nhỏ nhất giữa hai phần tử bất\nkỳ trong mảng.\nGiới hạn:2≤n≤2×10 5.\nVí dụ:a= [7,2,9,4,1]. Các cặp chênh lệch:|7−2|= 5,|7−9|= 2,|2−4|= 2,\n|4−1|= 3,|2−1|= 1, ...Đáp án:1.\nPhân tích\n• Cách \"ngây thơ\":Thử tất cả cặp(i, j)→O(n 2). Vớin= 2×10 5, quá chậm!\n• Ý tưởng với sort:Sau khi sort mảng tăng dần, hai phần tử gần nhau nhất về giá\ntrị chắc chắn nằm kề nhau trong mảng đã sort. Vì vậy chỉ cần duyệt các cặp liền\nkề!\nChạy tay\na= [7,2,9,4,1]\n• Bước 1:Sort→[1,2,4,7,9]\n• Bước 2:Duyệt các cặp liền kề:\n|a[1]−a[0]|=|2−1|= 1\n|a[2]−a[1]|=|4−2|= 2\n|a[3]−a[2]|=|7−4|= 3\n|a[4]−a[3]|=|9−7|= 2\n• Đáp án:min(1,2,3,2) = 1.\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<int> a(n);\nfor (int &x : a) cin >> x;\nsort(a.begin(), a.end());\nint min_diff = INT_MAX;\nfor (int i = 1; i < n; i++) {\nmin_diff = min(min_diff, a[i] - a[i - 1]);\n}\ncout << min_diff << \"\\n\";\n}\nPython\nn = int(input())\na = list(map(int, input().split()))\na.sort()\nmin_diff = 10**18\nfor i in range(1, n):\nmin_diff = min(min_diff, a[i] - a[i - 1])\nprint(min_diff)\nĐộ phức tạp:O(nlogn)cho sort+O(n)cho duyệt=O(nlogn). So vớiO(n 2)ban\nđầu - nhanh hơn rất nhiều!\nBài học rút ra:Sort biến bài toán \"so sánh mọi cặp\"thành \"chỉ cần xét cặp liền kề\"-\nđây là pattern rất phổ biến.\n9. Các lỗi phổ biến khi sắp xếp\nLỖI GIẢI THÍCH CÁCH TRÁNH\nDùng<=trong\ncomparator (C++)\nVi phạm strict weak\nordering→UB\nLuôn dùng<hoặc>\nQuên sort trước khi dùng\nlower_bound/ binary\nsearch\nChỉ đúng trên mảng đã sortLuôn sort trước\nSort sai kiểu (intvs\nlong long)\nGiá trị lớn bị tràn khi so\nsánh\nDùng đúng kiểu dữ liệu\nQuên rằng sort thay đổi\nmảng gốc\nMất thông tin vị trí ban đầuDùng index sort hoặc\ncopy mảng\nDùng bubble sort tự viết Quá chậmO(n 2) Luôn dùng *sort*()/\n.sort()\nNhầm giữasorted(a)và\na.sort()trong Python\nMột cái tạo list mới, một cái\nsửa tại chỗ\nDùng đúng theo mục\nđích\nGhi chú Python: sorted() vs .sort()\na = [3, 1, 2]\nb = sorted(a) # b = [1, 2, 3], a vẫn là [3, 1, 2]\na.sort() # a trở thành [1, 2, 3]\n• sorted(a)trả về list mới\n• a.sort()sắp xếp ngay trên list hiện tại\n• Trong CP, nếu không cần giữ mảng gốc,a.sort()thường tiện hơn\nTóm tắt bài học\nHÀM / KỸ\nTHUẬT\nC++ PYTHON ĐỘ PHỨC TẠP\nSắp xếp tăng dần sort(begin, end) a.sort()/\nsorted(a)\nO(nlogn)\nSắp xếp theo tiêu chí\nriêng\nsort(begin, end,\ncomp)\nsort(key=...) O(nlogn)\nSắp xếp ổn định stable_sort(begin,\nend)\nsort()đã stable O(nlogn)\nCounting sort Tự cài đặt Tự cài đặt O(n+max_val)\nLoại bỏ trùng lặp sort + unique +\nerase\nsortrồi duyệt /\nsorted(set(a))\nO(nlogn)\nIndex sort sorttrên mảng chỉ\nsố\nsorttrên list chỉ số O(nlogn)\nBây giờ hãy thử sức với các bài tập bên dưới! Bắt đầu từ các bài sort cơ bản, rồi tiến\nđến bài cần kết hợp sort với các kỹ thuật khác nhé.",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b2-p1-apartments",
            "title": "Apartments",
            "fileName": "CSES - Apartments _ Căn hộ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Apartments. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/CSES - Apartments _ Căn hộ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n người đăng ký và m căn hộ trống. Nhiệm vụ của bạn là phân phối các căn hộ để nhiều\nngười có căn hộ nhất có thể.\nMỗi người đăng ký có một kích thước căn hộ mong muốn, và họ sẽ chấp nhận bất kỳ căn hộ\nnào có kích thước đủ gần với kích thước mong muốn.\n\nInput\n• Dòng đầu vào đầu tiên có ba số nguyên n, m và k: số lượng người đăng ký, số lượng\ncăn hộ và chênh lệch tối đa cho phép.\n• Dòng tiếp theo chứa n số nguyên a 1, a 2, …, a n: kích thước căn hộ mong muốn của\nmỗi người đăng ký. Nếu kích thước mong muốn của người đăng ký là x, người đó sẽ\nchấp nhận bất kỳ căn hộ nào có kích thước từ x − k đến x + k.\n• Dòng cuối cùng chứa m số nguyên b 1, b 2, …, b m: kích thước của mỗi căn hộ.\n\nOutput\n• In một số nguyên: số lượng người sẽ có được một căn hộ.\n\nScoring\n• 1 ≤ n, m ≤ 2 \times 10^5\n• 0 ≤ k ≤ 10^9\n• 1 ≤ a i, b i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 3 5\n60 45 80 60\n30 60 75",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 3 5\n60 45 80 60\n30 60 75",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p2-distinct-numbers",
            "title": "Distinct Numbers",
            "fileName": "CSES - Distinct Numbers _ Giá trị phân biệt - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Distinct Numbers. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/CSES - Distinct Numbers _ Giá trị phân biệt - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một danh sách gồm n số nguyên và nhiệm vụ của bạn là tính toán số lượng giá\ntrị phân biệt trong danh sách.\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: số lượng giá trị\n• Dòng thứ hai có n số nguyên x 1, x 2, …, x n\n\nOutput\n• In một số nguyên: số lượng giá trị phân biệt\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n2 3 2 2 3",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n2 3 2 2 3",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p3-lmht",
            "title": "LMHT",
            "fileName": "LMHT - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán LMHT. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/LMHT - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong Liên minh huyền thoại có N vị tướng, vị tướng thứ i có 2 sát thương vật lý và sát\nthương phép.\nVị tướng thứ i được cho là mạnh hơn vị tướng thứ j nếu có sát thương vật lý mạnh hơn.\nHai vị tướng có cùng sát thương vật lý thì vị tướng mạnh hơn sẽ có sát thương phép lớn hơn.\nHãy cho biết chỉ số sát thương vật lý và phép của vị tướng mạnh thứ m.\n\nInput\n• Dòng đầu chứa số n, m (1 ≤ m ≤ n ≤ 10000)\n• n dòng, mỗi dòng chứa 2 số nguyên A_i (vật lý), B i (phép) (0 ≤ A_i, B i ≤ 10000).\n\nOutput\n• Chỉ số sát thương",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3  2\n1  2\n3  2\n1  3",
            "sampleOutput": "1  3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3  2\n1  2\n3  2\n1  3",
                "output": "1  3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p4-luy-n-t-p",
            "title": "Luyện tập",
            "fileName": "Luyện tập - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.1s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Luyện tập. Giới hạn thời gian 1.1s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Luyện tập - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Để hỗ trợ các bạn học sinh chuẩn bị tốt cho kỳ thi HSG cấp Thành phố sắp đến, thầy giáo bồi\ndưỡng chuẩn bị n bài tập (1 ≤ n ≤ 10^5). Các bài được đánh số từ 1 đến n. Mỗi bài tập\nnhằm rèn luyện một số kỹ năng cho thí sinh, ví dụ như kỹ thuật lập trình, giải thuật, cấu trúc\ndữ liệu…\nNhằm định hướng cho quá trình tự luyện tập được hiệu quả, mỗi bài tập có một yêu cầu tối\nthiểu về trình độ kỹ năng. Để giải được bài thứ i, bạn cần có trình độ kỹ năng tối thiểu là a i.\nĐiều này có nghĩa là học sinh có thể giải được bài thứ i khi và chỉ khi có trình độ kỹ năng\nbằng hoặc lớn hơn a i. Nếu giải được bài thứ i trình độ kỹ năng của học sinh sẽ tăng thêm\nmột lượng là b i (1 ≤ a i, b i ≤ 10^9). Giả sử ban đầu, trình độ kỹ năng của bạn trước khi làm\nbài tập là c (0 ≤ c ≤ 10^9). Các bài tập có thể được làm theo trình tự bất kỳ tùy chọn.\nVí dụ, với trình độ kỹ năng ban đầu c = 1, n = 4 và các giá trị a i, b i tương ứng là\n(1, 10), (21, 5), (1, 10), (100, 100), bạn sẽ giải bài 1, sau đó làm bài 3 và cuối cùng làm\nbài 2. Như vậy bạn sẽ làm được tất cả là 3 bài.\nYêu cầu: Cho các số nguyên n, c và các cặp giá trị (a i, b i), 1 ≤ i ≤ n. Hãy xác định số lượng\nbài tối đa có thể được giải.\n\nInput\n• Dòng đầu tiên chứa 2 số nguyên n và c.\n• Dòng thứ i trong n dòng tiếp theo (1 ≤ i ≤ n) chứa 2 số nguyên a i và b i. Các số trên\ncùng một dòng được ghi cách nhau bởi 1 khoảng trắng.\n\nOutput\n• Là một số nguyên xác định số lượng bài tối đa có thể được giải.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 1\n1 10\n21 5\n1 10\n100 100",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 1\n1 10\n21 5\n1 10\n100 100",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p5-s-p-x-p-kh-ng-gi-m",
            "title": "Sắp xếp không giảm",
            "fileName": "Sắp xếp không giảm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 500,
            "preview": "Bài toán Sắp xếp không giảm. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Sắp xếp không giảm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy gồm n số nguyên dương A 1, A 2, …, A n. (N ≤ 1 0 4, A_i ≤ 10^9). Hãy in ra\ndãy số sau khi sắp xếp dãy số tăng dần (A_i ≤ A_i + 1).\n\nInput\n• Dòng đầu chứa số n,\n• Dòng thứ hai chứa n số nguyên dương A 1, A 2, …, A n.\n\nOutput\n• Một dòng chứa dãy số đã sắp xếp tăng dần.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n91 451 43 3 451 54",
            "sampleOutput": "3 43 54 91 451 451",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n91 451 43 3 451 54",
                "output": "3 43 54 91 451 451"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p6-s-p-x-p-kh-ng-t-ng",
            "title": "Sắp xếp không tăng",
            "fileName": "Sắp xếp không tăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "10.0s",
            "memoryLimit": "256MB",
            "point": 500,
            "preview": "Bài toán Sắp xếp không tăng. Giới hạn thời gian 10.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Sắp xếp không tăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy gồm n số nguyên dương A 1, A 2, …, A n. (N ≤ 1 0 4, A_i ≤ 10^9). Hãy in ra\ndãy số sau khi sắp xếp dãy số giảm dần (A_i ≥ A_i + 1).\n\nInput\n• Dòng đầu chứa số n,\n• Dòng thứ hai chứa n số nguyên dương A 1, A 2, …, A n.\n\nOutput\n• Một dòng chứa dãy số đã sắp xếp giảm dần.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n91 451 43 3 451 54",
            "sampleOutput": "451 451 91 54 43 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n91 451 43 3 451 54",
                "output": "451 451 91 54 43 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p7-s-p-x-p-s-trong-x-u-ts10-lq-n-ng-2016",
            "title": "Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016)",
            "fileName": "Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Sắp xếp số trong xâu (TS10 LQĐ, Đà Nẵng 2016) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một xâu S có chứa các kí tự số. Hãy sắp xếp các ký tự số trong S theo thứ tự\nkhông giảm nhưng giữ nguyên vị trí ban đầu của các kí tự khác (nếu có) trong xâu.\n\nInput\n• Dòng đầu tiên và duy nhất chứa 1 xâu S (∣ S ∣ ≤ 255).\n\nOutput\n• In ra màn hình xâu đã được sắp xếp theo yêu cầu trên.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "744",
            "sampleOutput": "447",
            "testCases": [
              {
                "id": "Test 1",
                "input": "744",
                "output": "447"
              },
              {
                "id": "Test 2",
                "input": "Acb27h1h92gg",
                "output": "Acb12h2h79gg"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b2-p8-s-p-x-p-m",
            "title": "Sắp xếp đếm",
            "fileName": "Sắp xếp đếm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Sắp xếp đếm. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Sắp xếp đếm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy a gồm n số nguyên. Hãy in ra dãy a sau khi đã sắp xếp không giảm (a i ≤\na i + 1 ∀1 ≤ i < n).\n\nInput\n• Dòng đầu tiên chứa số nguyên n (1 ≤ n ≤ 10^5).\n• Dòng tiếp theo chứa n số nguyên a 1, a i, …, a n (1 ≤ a i ≤ 10^5).\n\nOutput\n• Một dòng duy nhất gồm n số nguyên là dãy a sau khi đã sắp xếp không giảm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n3 1 2 2 1",
            "sampleOutput": "1 1 2 2 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 1 2 2 1",
                "output": "1 1 2 2 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p9-s-l-n-th-k",
            "title": "Số lớn thứ k",
            "fileName": "Số lớn thứ k - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Số lớn thứ k. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Số lớn thứ k - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy gồm N số nguyên dương A 1, A 2, …, A N.(N ≤ 1 0 4, A_i ≤ 10^9) và số K (K ≤ N). Hãy in ra số lớn thứ K trong dãy.\n\nInput\n• Dòng đầu chứa số N, K,\n• Dòng thứ hai chứa N số nguyên dương A 1, A 2, …, A N.\n\nOutput\n• Một dòng chứa dãy số lớn thứ K trong dãy.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 2\n91 451 43 3 452 54",
            "sampleOutput": "451",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 2\n91 451 43 3 452 54",
                "output": "451"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p10-s-nh-th-k",
            "title": "Số nhỏ thứ k",
            "fileName": "Số nhỏ thứ k - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Số nhỏ thứ k. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Số nhỏ thứ k - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy gồm N số nguyên dương A 1, A 2, …, A N.(N ≤ 1 0 4, A_i ≤ 10^9) và số K (K ≤ N). Hãy in ra số nhỏ thứ K trong dãy.\n\nInput\n• Dòng đầu chứa số N, K,\n• Dòng thứ hai chứa N số nguyên dương A 1, A 2, …, A N.\n\nOutput\n• Một dòng chứa dãy số nhỏ thứ K trong dãy.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 4\n91 451 43 3 452 54",
            "sampleOutput": "91",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 4\n91 451 43 3 452 54",
                "output": "91"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p11-yugioh",
            "title": "Yugioh",
            "fileName": "Yugioh - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Yugioh. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Yugioh - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Yugi có N lá bài, lá bài thứ i có sức mạnh như sau:\nNếu A_i ≥ 0 máu của Yugi sẽ được cộng thêm A_i.\nNếu A_i < 0 máu của Kaiba sẽ trừ đi ∣ A_i ∣.\nTuy nhiên, Yugi luôn thích tấn công nên anh ta muốn trừ máu Kaiba nhiều nhất có thể.\nHãy cho biết Yugi có thể trừ Kaiba nhiều nhất là bao nhiêu khi sử dụng nhiều nhất m lá bài\n\nInput\n• Dòng đầu chứa số n, m (1 ≤ m ≤ n ≤ 10000)\n• Dòng thứ hai chứa n số nguyên A 1, A 2, …, A n (− 10000 ≤ A_i ≤ 10000).\n\nOutput\n• Số máu Kaiba bị trừ.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n-6 0 35 -2 4",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n-6 0 35 -2 4",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b2-p12-c-m",
            "title": "Ổ cắm",
            "fileName": "Ổ cắm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.1s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Ổ cắm. Giới hạn thời gian 1.1s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bai 2/Ổ cắm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong nhà Nam hiện đang có n ổ cắm điện rời. Số lượng chỗ cắm trên mỗi ổ cắm điện này lần\nlượt là a 1, a 2, a 3, …, a n chỗ cắm. Trên tường nhà Nam có một chỗ cắm cố định đang có\nđiện. Vậy để cho một ổ cắm điện rời có điện thì phải cắm ổ cắm đó vào chỗ cắm cố định trên\ntường. Chúng ta cũng có thể cắm ổ cắm điện rời này vào một ổ cắm điện rời khác đang có\nđiện.\nNam có m thiết bị sử dụng điện, để sử dụng thì các thiết bị này cần được cắm vào ổ cắm trên\ntường hoặc ổ cắm rời đang có điện. Bạn hãy giúp Nam tìm ra số ổ cắm rời ít nhất cần dùng\nđể có thể sử dụng tất cả m thiết bị điện này.\n\nInput\n• Dòng thứ nhất gồm 2 số nguyên n,m cách nhau một khoảng trắng, dữ liệu vào đảm bảo\n1 ≤ n, m ≤ 10000, n là số lượng ổ cắm và m là số lượng thiết bị.\n• Dòng thứ hai gồm n số nguyên a 1, a 2, a 3, …, a n là số chỗ cắm trên các ổ cắm rời\ntương ứng, mỗi số cách nhau một khoảng trắng, dữ liệu vào đảm bảo 1 ≤ a i ≤ 50.\n\nOutput\n• Là số nguyên cho biết số ổ cắm rời ít nhất cần sử dụng là bao nhiêu. Nếu đã sử dụng hết\ntất cả ổ cắm rời mà vẫn không đủ, in ra − 1.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 4\n3 2 2",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 4\n3 2 2",
                "output": "2"
              },
              {
                "id": "Test 2",
                "input": "4 7\n3 3 2 4",
                "output": "3"
              }
            ],
            "totalTests": 2
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-3",
        "order": 3,
        "title": "Tìm kiếm nhị phân (Binary Search)",
        "theoryPdfFileName": "Chapter 2 lesson 3 - Tìm kiếm nhị phân.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 3 - Tìm kiếm nhị phân.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Tìm kiếm nhị phân (Binary Search) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Tìm kiếm nhị phân (Binary Search)\nNội dung\nTrong bài học này, chúng ta sẽ tìm hiểu một trong những kỹ thuật quan trọng nhất trong\nlập trình thi đấu: Tìm kiếm nhị phân (Binary Search). Đây là kỹ thuật giúp bạn tìm kiếm\ncực kỳ nhanh - thay vì kiểm tra từng phần tử một, ta có thể loại bỏ một nửa dữ liệu\nsau mỗi bước.\n1. Tại sao cần tìm kiếm nhị phân?\n• Tìm kiếm tuyến tính (Linear Search) - cách \"thô\"\n• Tìm kiếm nhị phân (Binary Search) - cách thông minh\n2. Tìm phần tử trong mảng đã sắp xếp\n• Thuật toán\n• Ví dụ trực quan\n• Code\n3. Lower Bound và Upper Bound\n• Ví dụ minh họa\n• Cách sử dụng\n• Các ứng dụng thường gặp\n4. Chặt nhị phân đáp án (Binary Search on Answer)\n• Ý tưởng cốt lõi\n• Tính đơn điệu là gì?\n• Dạng code tổng quát\n• Ví dụ chi tiết: Bài \"Factory Machines\"(CSES 1620)\n• Code hoàn chỉnh\n• Mẹo nhận biết bài Binary Search on Answer\n5. Ví dụ bổ sung: Chia mảng thànhkđoạn\n• Hàmcheck(S)\n6. Sai lầm thường gặp\n• Sai lầm 1: Vòng lặp vô tận\n• Sai lầm 2: Chọn biên sai\n• Sai lầm 3: Quên kiểu số lớn\n• Sai lầm 4: Nhầm hướng binary search\n7. Tóm tắt\n1. Tại sao cần tìm kiếm nhị phân?\nTìm kiếm tuyến tính (Linear Search) - cách \"thô\"\nGiả sử bạn có một mảngnphần tử và cần tìm xem sốxcó trong mảng hay không. Cách\nđơn giản nhất là duyệt từ đầu đến cuối:\nC++\nbool found = false;\nfor (int i = 0; i < n; i++) {\nif (a[i] == x) {\nfound = true;\nbreak;\n}\n}\nPython\nfound = False\nfor value in a:\nif value == x:\nfound = True\nbreak\nCách này có độ phức tạpO(n). Nếun= 10 6, ta cần đến 1 triệu phép so sánh trong\ntrường hợp xấu nhất. Với 1 truy vấn thì ổn, nhưng nếu cóq= 105 truy vấn thì tổng cộng\nlà10 11 phép tính - quá chậm.\nTìm kiếm nhị phân (Binary Search) - cách thông minh\nÝ tưởng cốt lõi: Nếu mảng đã được sắp xếp, ta có thể tìm kiếm nhanh hơn rất nhiều.\nHãy nghĩ về ví dụ thực tế: Khi bạn tra từ điển (sách giấy), bạn có dò từ trang 1 đến\ntrang cuối không? Không. Bạn sẽ:\n1. Mở giữa cuốn từ điển.\n2. Nếu từ cần tìm nằm trước trang hiện tại→lật sang nửa trái.\n3. Nếu từ cần tìm nằm sau trang hiện tại→lật sang nửa phải.\n4. Lặp lại cho đến khi tìm thấy.\nĐây chính là tìm kiếm nhị phân. Mỗi bước ta loại bỏ một nửa phần còn lại. Với mảng\nn= 10 6 phần tử, ta chỉ cần khoảnglog2(106)≈20bước. 20 bước thay vì 1 triệu bước.\nSỐ PHẦN TỬN LINEAR SEARCH (XẤU NHẤT) BINARY SEARCH (XẤU NHẤT)\n1,000 1,000bước 10 bước\n1,000,000 1,000,000bước 20 bước\n109 109 bước 30 bước\n2. Tìm phần tử trong mảng đã sắp xếp\nThuật toán\nCho mảngađã sắp xếp tăng dần và sốxcần tìm. Ta duy trì hai biến:\n• lo: chỉ số trái\n• hi: chỉ số phải\nBan đầulo= 0,hi=n−1. Tại mỗi bước:\n1. Tínhmid- vị trí giữa.\n2. Nếua[mid] ==x→tìm thấy.\n3. Nếua[mid]< x→xnằm ở nửa phải→lo=mid+ 1.\n4. Nếua[mid]> x→xnằm ở nửa trái→hi=mid−1.\n5. Nếulo>hi→không tìm thấy.\nVí dụ trực quan\nCho mảnga= [2,5,8,12,16,23,38,56,72,91](10phần tử). Tìmx= 23.\nBước 1:lo= 0,hi= 9,mid= 4.\nChỉ số: [0] [1] [2] [3] [4] [5] [6] [7] [8] [9]\nGiá trị: 2 5 8 12 16 23 38 56 72 91\nlo mid hi\na[4] = 16<23→xnằm bên phải→lo= 5.\nBước 2:lo= 5,hi= 9,mid= 7.\nChỉ số: [0] [1] [2] [3] [4] [5] [6] [7] [8] [9]\nGiá trị: 2 5 8 12 16 23 38 56 72 91\nlo mid hi\na[7] = 56>23→xnằm bên trái→hi= 6.\nBước 3:lo= 5,hi= 6,mid= 5.\nChỉ số: [0] [1] [2] [3] [4] [5] [6] [7] [8] [9]\nGiá trị: 2 5 8 12 16 23 38 56 72 91\nlo/mid hi\na[5] = 23 == 23→Tìm thấy. Chỉ mất 3 bước thay vì 6 bước nếu dò tuyến tính.\nCode\nC++\nint lo = 0, hi = n - 1;\nbool found = false;\nwhile (lo <= hi) {\nint mid = lo + (hi - lo) / 2; // tránh tràn số\nif (a[mid] == x) {\nfound = true;\nbreak;\n} else if (a[mid] < x) {\nlo = mid + 1;\n} else {\nhi = mid - 1;\n}\n}\nPython\nlo, hi = 0, n - 1\nfound = False\nwhile lo <= hi:\nmid = (lo + hi) // 2\nif a[mid] == x:\nfound = True\nbreak\nelif a[mid] < x:\nlo = mid + 1\nelse:\nhi = mid - 1\nLưu ý:\n• Trong C++, nên viếtmid = lo + (hi - lo) / 2thay vìmid = (lo + hi) / 2\nđể tránh tràn số.\n• Trong Python thì số nguyên không bị tràn theo kiểuintcủa C++, nhưng bạn vẫn\ncó thể dùng cùng công thức để giữ thói quen nhất quán.\n3. Lower Bound và Upper Bound\nTrong thực tế, ta không chỉ muốn biết “có hay không”, mà còn muốn biết vị trí phần tử\ntrong mảng đã sắp xếp.\n• lower_bound(x): vị trí đầu tiên có giá trị≥x.\n• upper_bound(x): vị trí đầu tiên có giá trị> x.\nVí dụ minh họa\nMảnga:[1,3,3,3,5,7,9](chỉ số:0,1,2,3,4,5,6).\nHÀM x= 3 x= 4 x= 0 x= 10\nlower_bound chỉ số 1 (giá trị 3)chỉ số 4 (giá trị 5)chỉ số 0 (giá trị 1)chỉ số 7 (quá cuối mảng)\nupper_bound chỉ số 4 (giá trị 5)chỉ số 4 (giá trị 5)chỉ số 0 (giá trị 1)chỉ số 7 (quá cuối mảng)\nCách sử dụng\nC++\nvector<int> a = {1, 3, 3, 3, 5, 7, 9};\nauto it = lower_bound(a.begin(), a.end(), 3);\nint pos = it - a.begin(); // pos = 1\nauto it2 = upper_bound(a.begin(), a.end(), 3);\nint pos2 = it2 - a.begin(); // pos2 = 4\nPython\nfrom bisect import bisect_left, bisect_right\na = [1, 3, 3, 3, 5, 7, 9]\npos = bisect_left(a, 3) # 1\npos2 = bisect_right(a, 3) # 4\nCác ứng dụng thường gặp\n1. Đếm số phần tử=x:\nC++\nint count_x = upper_bound(a.begin(), a.end(), x)\n- lower_bound(a.begin(), a.end(), x);\nPython\ncount_x = bisect_right(a, x) - bisect_left(a, x)\n2. Đếm số phần tử≤x:\nC++\nint count_le = upper_bound(a.begin(), a.end(), x) - a.begin();\nPython\ncount_le = bisect_right(a, x)\n3. Đếm số phần tử< x:\nC++\nint count_lt = lower_bound(a.begin(), a.end(), x) - a.begin();\nPython\ncount_lt = bisect_left(a, x)\n4. Đếm số phần tử trong đoạn[l, r]:\nC++\nint count_range = upper_bound(a.begin(), a.end(), r)\n- lower_bound(a.begin(), a.end(), l);\nPython\ncount_range = bisect_right(a, r) - bisect_left(a, l)\nMẹo nhớ:\n• lower_bound(x)/bisect_left(a, x)là vị trí chèn vào bên trái các phần tử bằng\nx.\n• upper_bound(x)/bisect_right(a, x)là vị trí chèn vào bên phải các phần tử\nbằngx.\n4. Chặt nhị phân đáp án (Binary Search on Answer)\nĐâylàdạngmạnhnhấtvàphổbiếnnhấtcủabinarysearchtrongcompetitiveprogramming.\nÝ tưởng cốt lõi\nThay vì tìm kiếm trong mảng, ta tìm kiếm trên miền giá trị của đáp án:\n• Đề bài hỏi: “Tìm giá trị nhỏ nhất hoặc lớn nhất sao cho một điều kiện nào đó đúng”.\n• Ta nhận thấy điều kiện này có tính đơn điệu.\n• Khi đó, ta có thể dùng binary search để tìm ranh giới.\nTính đơn điệu là gì?\nHãy tưởng tượng với mỗi giá trịk, ta đánh dấu:\n• NO nếu chưa thỏa.\n• OK nếu đã thỏa.\nVí dụ:\nk = 1 2 3 4 5 6 7 8 9 10\nNO NO NO NO OK OK OK OK OK OK\nNếu tất cả NO nằm một phía và tất cả OK nằm phía còn lại, thì ta có thể dùng binary\nsearch. Nếu kết quả lộn xộn kiểu NO, OK, NO, OK thì không dùng được.\nDạng code tổng quát\nTìm giá trị nhỏ nhất thỏa mãn:\nC++\nint lo = /* giá trị nhỏ nhất có thể */;\nint hi = /* giá trị lớn nhất có thể */;\nint ans = hi;\nwhile (lo <= hi) {\nint mid = lo + (hi - lo) / 2;\nif (check(mid)) {\nans = mid;\nhi = mid - 1;\n} else {\nlo = mid + 1;\n}\n}\nPython\nlo = ...\nhi = ...\nans = hi\nwhile lo <= hi:\nmid = (lo + hi) // 2\nif check(mid):\nans = mid\nhi = mid - 1\nelse:\nlo = mid + 1\nTìm giá trị lớn nhất thỏa mãn:\nC++\nint lo = /* giá trị nhỏ nhất có thể */;\nint hi = /* giá trị lớn nhất có thể */;\nint ans = lo;\nwhile (lo <= hi) {\nint mid = lo + (hi - lo) / 2;\nif (check(mid)) {\nans = mid;\nlo = mid + 1;\n} else {\nhi = mid - 1;\n}\n}\nPython\nlo = ...\nhi = ...\nans = lo\nwhile lo <= hi:\nmid = (lo + hi) // 2\nif check(mid):\nans = mid\nlo = mid + 1\nelse:\nhi = mid - 1\nVí dụ chi tiết: Bài \"Factory Machines\"(CSES 1620)\nĐề bài:Cónmáy sản xuất. Máy thứicầnt i giây để sản xuất 1 sản phẩm. Hỏi thời\ngian ít nhất để sản xuất đủksản phẩm.\nVí dụ:n= 3,k= 7,t= [3,2,5].\nPhân tích:\n• Nếu thửT= 6:\n-Máy 1 làm được⌊6/3⌋= 2\n-Máy 2 làm được⌊6/2⌋= 3\n-Máy 3 làm được⌊6/5⌋= 1\nTổng là2 + 3 + 1 = 6<7→chưa đủ.\n• Nếu thửT= 8:\n-Máy 1 làm được2\n-Máy 2 làm được4\n-Máy 3 làm được1\nTổng là7→đủ.\nTa thấy:\n• NếuTgiây đủ, thìT+ 1giây cũng đủ.\n• NếuTgiây không đủ, thì giá trị nhỏ hơn cũng không đủ.\nĐó chính là tính đơn điệu:\nT = 1 2 3 4 5 6 7 8 9 10 ...\nNO NO NO NO NO NO NO OK OK OK ...\n^\nđáp án = 8\nCode hoàn chỉnh\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, k;\ncin >> n >> k;\nvector<long long> t(n);\nfor (auto &x : t) cin >> x;\nauto check = [&](long long T) -> bool {\nlong long total = 0;\nfor (int i = 0; i < n; i++) {\ntotal += T / t[i];\nif (total >= k) return true;\n}\nreturn false;\n};\nlong long lo = 1;\nlong long hi = 1LL * (*min_element(t.begin(), t.end())) * k;\nlong long ans = hi;\nwhile (lo <= hi) {\nlong long mid = lo + (hi - lo) / 2;\nif (check(mid)) {\nans = mid;\nhi = mid - 1;\n} else {\nlo = mid + 1;\n}\n}\ncout << ans << ’\\n’;\nreturn 0;\n}\nPython\nn, k = map(int, input().split())\nt = list(map(int, input().split()))\ndef check(T):\ntotal = 0\nfor x in t:\ntotal += T // x\nif total >= k:\nreturn True\nreturn False\nlo = 1\nhi = min(t) * k\nans = hi\nwhile lo <= hi:\nmid = (lo + hi) // 2\nif check(mid):\nans = mid\nhi = mid - 1\nelse:\nlo = mid + 1\nprint(ans)\nMẹo nhận biết bài Binary Search on Answer\nKhi đề bài hỏi các dạng như sau, hãy nghĩ ngay đến binary search on answer:\n• Tìm giá trị nhỏ nhất / lớn nhất sao cho...\n• Tìm thời gian ít nhất để...\n• Có thể đạt được một giá trị nào đó hay không.\n• Tối ưu một đáp án số và có thể kiểm tra bằng hàmcheck(...).\n5. Ví dụ bổ sung: Chia mảng thànhkđoạn\nBài toán:Cho mảngagồmnsố nguyên dương. Chia mảng thànhkđoạn liên tiếp sao\ncho tổng lớn nhất trong các đoạn là nhỏ nhất có thể.\nVí dụ:a= [2,1,5,3,4],k= 3:\n• Chia[2,1]|[5]|[3,4]: max tổng= max(3,5,7) = 7\n• Chia[2,1,5]|[3]|[4]: max tổng= max(8,3,4) = 8\n• Chia[2]|[1,5]|[3,4]: max tổng= max(2,6,7) = 7\nĐáp án tối ưu là7.\nTa binary search giá trịS=“tổng lớn nhất cho phép của mỗi đoạn”. Nếu một giá trị\nSlà đủ tốt, thì mọi giá trị lớn hơn cũng đủ tốt. Vậy ta có thể binary search trênS.\nHàm check(S)\nC++\nbool check(long long S) {\nint groups = 1;\nlong long cur_sum = 0;\nfor (int i = 0; i < n; i++) {\nif (a[i] > S) return false;\nif (cur_sum + a[i] > S) {\ngroups++;\ncur_sum = a[i];\n} else {\ncur_sum += a[i];\n}\n}\nreturn groups <= k;\n}\nPython\ndef check(S):\ngroups = 1\ncur_sum = 0\nfor x in a:\nif x > S:\nreturn False\nif cur_sum + x > S:\ngroups += 1\ncur_sum = x\nelse:\ncur_sum += x\nreturn groups <= k\n6. Sai lầm thường gặp\nSai lầm 1: Vòng lặp vô tận\nKhi viết binary search, phải đảm bảolohoặchithay đổi sau mỗi bước.\nC++\n// SAI\nwhile (lo < hi) {\nint mid = (lo + hi) / 2;\nif (check(mid)) hi = mid;\nelse lo = mid;\n}\nPython\n# SAI\nwhile lo < hi:\nmid = (lo + hi) // 2\nif check(mid):\nhi = mid\nelse:\nlo = mid\nKhilo+ 1 ==hithìmid=lo, nênlokhông đổi và vòng lặp chạy mãi.\nCách đúng:\nC++\nwhile (lo < hi) {\nint mid = (lo + hi) / 2;\nif (check(mid)) hi = mid;\nelse lo = mid + 1;\n}\nPython\nwhile lo < hi:\nmid = (lo + hi) // 2\nif check(mid):\nhi = mid\nelse:\nlo = mid + 1\nSai lầm 2: Chọn biên sai\n• Nếuloquá lớn hoặchiquá nhỏ, đáp án thật có thể nằm ngoài phạm vi tìm kiếm.\n• Hãy chọn biên sao cho chắc chắn đáp án nằm trong đoạn đang xét.\nSai lầm 3: Quên kiểu số lớn\nTrong C++, nếu đáp án có thể rất lớn, hãy dùnglong long.\nC++\nlong long lo = 1, hi = 1e18, ans = -1;\nwhile (lo <= hi) {\nlong long mid = lo + (hi - lo) / 2;\n}\nSai lầm 4: Nhầm hướng binary search\n• Tìm nhỏ nhất thỏa mãn→nếucheck(mid)đúng thì đi sang trái.\n• Tìm lớn nhất thỏa mãn→nếucheck(mid)đúng thì đi sang phải.\n7. Tóm tắt\nDẠNG BÀI KỸ THUẬT ĐỘ PHỨC TẠP\nTìm phần tử trong mảng đã sort Binary search cơ bản O(logn)\nĐếm phần tử trong khoảng lower_bound/upper_bound O(logn)\nTìm min/max thỏa mãn điều kiệnBinary search on answer O(log(range)×T check)\nQuy trình giải bài Binary Search on Answer:\n1. Xác định đáp án cần tìm là gì.\n2. Kiểm tra tính đơn điệu.\n3. Viết hàmcheck(mid).\n4. Chọn biênlo,hi.\n5. Viết vòng lặp binary search.\nChúc các bạn luyện tập vui vẻ! Binary search nhìn đơn giản nhưng rất dễ sai ở chi\ntiết. Càng luyện nhiều, bạn sẽ càng thấy đây là một công cụ cực kỳ mạnh.\nBài tập",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b3-p1-b-ng-nh-n",
            "title": "Bảng nhân",
            "fileName": "Bảng nhân - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.1s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Bảng nhân. Giới hạn thời gian 1.1s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Bảng nhân - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một ma trận các số nguyên gồm n dòng m cột. Các dòng được đánh số từ 1 đến n từ\ntrên xuống dưới. Các cột được đánh số từ 1 đến m từ trái qua phải. Giá trị của số nguyên tại\ndòng i cột j là phép nhân i × j. Lấy tất cả các số trong ma trận và sắp xếp tăng dần. Hãy tìm\nsố nguyên thứ k trong dãy đã sắp xếp.\n\nInput\n• Là ba số nguyên n, m, k cách nhau một khoảng trắng (1 ≤ n, m ≤ 1000; 1 ≤ k ≤\nn ∗ m).\n\nOutput\n• Là số nguyên thứ k sau khi sắp xếp các số trong ma trận.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 3 4",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 3 4",
                "output": "3"
              },
              {
                "id": "Test 2",
                "input": "3 4 6",
                "output": "4"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b3-p2-factory-machines",
            "title": "Factory Machines",
            "fileName": "CSES - Factory Machines _ Máy trong xưởng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Factory Machines. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/CSES - Factory Machines _ Máy trong xưởng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một xưởng có n máy có thể được sử dụng để làm sản phẩm. Mục tiêu của bạn là tạo ra tổng\ncộng t sản phẩm.\nĐối với mỗi máy, bạn biết số giây cần thiết để tạo ra một sản phẩm duy nhất. Các máy có thể\nhoạt động đồng thời, và bạn có thể tự do quyết định lịch trình của chúng.\nThời gian cần thiết ngắn nhất để tạo ra t sản phẩm là bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và t: số lượng máy và sản phẩm\n• Dòng tiếp theo có n số nguyên k 1, k 2, …, k n: thời gian cần thiết để tạo ra một sản\nphẩm bằng mỗi máy\n\nOutput\n• In một số nguyên: thời gian tối thiểu cần thiết để tạo ra t sản phẩm\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ t ≤ 10^9\n• 1 ≤ a i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 7\n3 2 5",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 7\n3 2 5",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p3-h-c-sinh-ham-ch-i",
            "title": "Học sinh ham chơi",
            "fileName": "Học sinh ham chơi - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 500,
            "preview": "Bài toán Học sinh ham chơi. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Học sinh ham chơi - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hôm nay thầy giáo quyết định ra một bài tập về tính trung bình công cho cả lớp làm. Đề bài\nyêu cầu các bạn hãy tìm một dãy con liên tiếp sao cho trung bình cộng của dãy là lớn nhất có\nthể. T là một là một học sinh trong lớp, vì quá ham chơi, trốn học quá nhiều nên câu ta không\ngiải được bài này nên cậu ấy đã quyết định nhờ các bạn giúp đỡ. Các bạn hãy giúp bạn ấy\nnhé!\n\nInput\n• Dòng đầu tiên gồm một số nguyên dương N (1 ≤ N ≤ 10^5).\n• Dòng tiếp gồm N số nguyên dương x (1 ≤ x ≤ 10^5).\n\nOutput\n• Gồm một dòng duy nhất chính là kết quả của bài toán.\n\nScoring\n• Subtask 1 (70% số điểm): n ≤ 5000\n• Subtask 2 (30% số điểm): n ≤ 10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n1 1 1 3 3 3",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n1 1 1 3 3 3",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p4-nh-h-n",
            "title": "Nhỏ hơn",
            "fileName": "Nhỏ hơn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Nhỏ hơn. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Nhỏ hơn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên dương gồm N phần tử a 1, a 2,..., a N. Với mỗi chỉ số 1 ≤ i ≤ N đếm\nxem có bao nhiêu phần tử bé hơn a i.\n\nInput\n• Dòng đầu tiên gồm số nguyên dương N (2 ≤ N ≤ 10^5)\n• Dòng thứ hai gồm N số nguyên dương a 1, a 2,..., a N (a i ≤ 10^9)\n\nOutput\n• In ra N số nguyên, số thứ i cho biết số phần tử nhỏ hơn a i.\n\nScoring\n• Subtask 1 (50% số điểm): n ≤ 1 0 3\n• Subtask 2 (50% số điểm): không ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n3 2 1 1 2",
            "sampleOutput": "4 2 0 0 2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 2 1 1 2",
                "output": "4 2 0 0 2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p5-obnoxious",
            "title": "OBNOXIOUS",
            "fileName": "OBNOXIOUS - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán OBNOXIOUS. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/OBNOXIOUS - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Đăng rất ghét những số nguyên dương chia hết cho 3 và những số có chữ số tận cùng bằng\n3. Những số có cả hai yếu tố trên, Đăng càng ghét đậm hơn.\nĐăng bắt đầu viết một dãy số (bắt đầu từ 1) chỉ bao gồm các số mà Đăng thích là\n1, 2, 4, 5, 7, 8, 10, 11,....\nYêu cầu: In ra số thứ k trong dãy trên.\n\nInput\n• Dòng đầu ghi số q (q < 101) - số câu hỏi.\n• q block tiếp theo, mỗi block nhập số k, mỗi số trên 1 dòng. (k ≤ 1000)\n\nOutput\n• Ứng với mỗi câu hỏi, in ra kết quả tương ứng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10\n1\n2\n3\n4\n5\n6\n7\n8\n9\n1000",
            "sampleOutput": "1\n2\n4\n5\n7\n8\n10\n11\n14\n1666",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10\n1\n2\n3\n4\n5\n6\n7\n8\n9\n1000",
                "output": "1\n2\n4\n5\n7\n8\n10\n11\n14\n1666"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p6-t-m-s-trong-m-ng",
            "title": "Tìm số trong mảng",
            "fileName": "Tìm số trong mảng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 1100,
            "preview": "Bài toán Tìm số trong mảng. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Tìm số trong mảng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên a gồm n phần tử được sắp xếp tăng dần. Hãy xác định giá trị x có xuất\nhiện trong mảng hay không ?\n\nInput\n• Dòng đâu tiên chứa số hai số nguyên dương n và k - độ dài của dãy, số câu hỏi.\n(n, k ≤ 100000)\n• n số, các phần tử dãy a (− 10^9 ≤ a i ≤ 10^9)\n• k số nguyên dương x (− 10^9 ≤ x ≤ 10^9).\n\nOutput\n• Gồm k dòng, mỗi dòng chứa câu trả lời cho mỗi câu hỏi.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10 10\n1 61 126 217 2876 6127 39162 98126 712687 1000000000\n100 6127 1 61 200 -10000 1 217 10000 1000000000",
            "sampleOutput": "NO\nYES\nYES\nYES\nNO\nNO\nYES\nYES\nNO\nYES",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10 10\n1 61 126 217 2876 6127 39162 98126 712687 1000000000\n100 6127 1 61 200 -10000 1 217 10000 1000000000",
                "output": "NO\nYES\nYES\nYES\nNO\nNO\nYES\nYES\nNO\nYES"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p7-t-p-xe",
            "title": "Tập xe",
            "fileName": "Tập xe - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1600,
            "preview": "Bài toán Tập xe. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Tập xe - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cô giáo trường tiểu học X đang dạy n học sinh tập xe đạp, các học sinh được đánh số từ 1\ntới n, học sinh thứ j có trọng lượng là a j. Có một xe đạp duy nhất với tải trọng là m, hai học\nsinh chỉ có thể cùng lên xe nếu tổng trọng lượng của hai học sinh không vượt quá m.\nCô giáo tự hỏi có bao nhiêu cách chọn hai học sinh khác nhau cho cùng lên xe, sau nhiều giờ\ntính toán không có kết quả, cô quyết định hỏi các chuyên gia lập trình giải bài toán Counting\nStudent Pairs (CSP)\nYêu cầu: Đếm số cặp chỉ số i, j trong đó i < j và a i + a j ≤ m\n\nInput\n• Dòng 1 chứa hai số nguyên dương n, m (m ≤ 10^6)\n• Dòng 2 chứa n số nguyên dương a 1, a 2, …, a n (∀ i: a i ≤ 10^6)\n\nOutput\nGhi một số nguyên duy nhất là đáp số\n\nScoring\n• Subtask #1 (60% số điểm): n ≤ 1 0 4.\n• Subtask #2 (20% số điểm): n ≤ 10^5.\n• Subtask #3 (20% số điểm): n ≤ 10^6.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 6\n1 2 3 4 5",
            "sampleOutput": "6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 6\n1 2 3 4 5",
                "output": "6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p8-v-tr-zero-cu-i-c-ng",
            "title": "Vị trí zero cuối cùng",
            "fileName": "Vị trí zero cuối cùng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 500,
            "preview": "Bài toán Vị trí zero cuối cùng. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Vị trí zero cuối cùng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu kí tự S chỉ toàn kí tự số 0 và 1. Biết rằng các kí tự số 0 đứng trước các ký tự số 1: 000 … 0011 … 11\nHãy cho biết vị trí của ký tự số 0 cuối cùng trong dãy.\n\nInput\n• Chứa xâu kí tự S (Độ dài của xâu S ≤ 1 0 7 và luôn có ký tự số 0 và ký tự số 1)\n\nOutput\n• Một số nguyên dương là vị trí của ký tự số 0 cuối cùng trong dãy.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "0000011111",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "0000011111",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p9-maxle",
            "title": "maxle",
            "fileName": "maxle - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 900,
            "preview": "Bài toán maxle. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/maxle - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên a gồm n phần tử được sắp xếp tăng dần. Hãy xác định giá trị lớn nhất\ncủa i sao cho a i ≤ x. Nếu không có vị trí thõa mãn in ra 0.\n\nInput\n• Dòng đâu tiên chứa số hai số nguyên dương n và k - độ dài của dãy, số câu hỏi.\n(n, k ≤ 100000)\n• n số, các phần tử dãy a (− 10^9 ≤ a i ≤ 10^9)\n• k số nguyên dương x (− 10^9 ≤ x ≤ 10^9).\n\nOutput\n• Gồm k dòng, mỗi dòng chứa câu trả lời cho mỗi câu hỏi.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 5\n3 3 5 8 9\n2 4 8 1 10",
            "sampleOutput": "0\n2\n4\n0\n5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 5\n3 3 5 8 9\n2 4 8 1 10",
                "output": "0\n2\n4\n0\n5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p10-minge",
            "title": "minge",
            "fileName": "minge - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 900,
            "preview": "Bài toán minge. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/minge - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên a gồm n phần tử được sắp xếp tăng dần. Hãy xác định giá trị nhỏ nhất\ncủa i sao cho a i ≥ x. Nếu không có vị trí thỏa mãn in ra n + 1.\n\nInput\n• Dòng đâu tiên chứa số hai số nguyên dương n và k - độ dài của dãy, số câu hỏi.\n(n, k ≤ 100000)\n• n số, các phần tử dãy a (− 10^9 ≤ a i ≤ 10^9)\n• k số nguyên dương x (− 10^9 ≤ x ≤ 10^9).\n\nOutput\n• Gồm k dòng, mỗi dòng chứa câu trả lời cho mỗi câu hỏi.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 5\n3 3 5 8 9\n2 4 8 1 10",
            "sampleOutput": "1\n3\n4\n1\n6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 5\n3 3 5 8 9\n2 4 8 1 10",
                "output": "1\n3\n4\n1\n6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p11-m-c-p-i-hsg-20",
            "title": "Đếm cặp đôi (HSG'20)",
            "fileName": "Đếm cặp đôi (HSG'20) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "977MB",
            "point": 900,
            "preview": "Bài toán Đếm cặp đôi (HSG'20). Giới hạn thời gian 1.0s, bộ nhớ 977MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Đếm cặp đôi (HSG'20) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số A gồm n phần tử nguyên dương A 1, A 2, …, A n. Mỗi phần tử có giá trị không\nvượt quá 10^9 và n ≤ 10^5. Một cặp số được gọi là cặp tương đồng với x, nếu cặp số này có\ntổng bằng số x cho trước nào đó.\nYêu cầu: Hãy đếm xem trong dãy số A có bao nhiêu cặp số (A_i; A j) tương đồng với x (có\nnghĩa là A_i + A j = x) với i < j.\n\nInput\n• Dòng đầu tiên chứa dãy số n, x (n ≤ 10^5, x ≤ 10^6).\n• Dòng thứ 2 chứa n phần tử của dãy số A (A_i ≤ 10^9).\n\nOutput\n• Ghi ra một số nguyên là cặp đôi tương đồng của dãy số.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "7 6\n1 2 4 3 4 5 3",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "7 6\n1 2 4 3 4 5 3",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b3-p12-m-s",
            "title": "Đếm số",
            "fileName": "Đếm số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 400,
            "preview": "Bài toán Đếm số. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 3/Đếm số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy gồm n số nguyên dương A 1, A 2, …, A n. (N ≤ 10^5, A_i ≤ 10^9) và số x.\nYêu cầu: Hãy đếm số lần xuất hiện của giá trị x trong mảng A.\n\nInput\n• Dòng đầu chứa số n và x.\n• Dòng thứ hai chứa n số nguyên dương A 1, A 2, …, A n.\n\nOutput\n• Số lần xuất hiện số x trong mảng A.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 451\n91 451 43 3 451 54",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 451\n91 451 43 3 451 54",
                "output": "2"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-4",
        "order": 4,
        "title": "Mảng tiền tố & Tổng dồn (Prefix Sum)",
        "theoryPdfFileName": "Chapter 2 lesson 4 - Mảng tiền tố.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 4 - Mảng tiền tố.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Mảng tiền tố & Tổng dồn (Prefix Sum) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Mảng tiền tố (Prefix Sum)\nNội dung\n1. Bài toán mở đầu: Truy vấn tổng đoạn\n• Cách \"thô\": Duyệt từng phần tử\n• Câu hỏi: Có cách nào trả lời mỗi truy vấn trongO(1)không?\n2. Xây dựng mảng tiền tố\n• Định nghĩa\n• Ví dụ trực quan từng bước\n• Công thức tính tổng đoạn\n• Kiểm tra lại với ví dụ\n• Code\n3. Prefix Sum với mảng đánh số từ 0\n4. Ví dụ ứng dụng: Tìm đoạn con có tổng bằngS\n5. Mảng hiệu (Difference Array)\n• Bài toán mở đầu\n• Ý tưởng Difference Array\n• Ví dụ trực quan\n• Code\n6. Tổng đoạn con lớn nhất (Kadane’s Algorithm)\n• Bài toán\n• Cách \"thô\": Thử mọi đoạn con -O(n2)\n• Kadane’s Algorithm -O(n)\n• Ví dụ trực quan từng bước\n• Code\n7. Prefix Sum 2D (mở rộng)\n8. Sai lầm thường gặp\n• Sai lầm 1: Quênpre[0] = 0\n• Sai lầm 2: Nhầm chỉ số 0-indexed và 1-indexed\n• Sai lầm 3: Tràn số khi tính tổng\n• Sai lầm 4: Difference array - quên +2 kích thước mảng\n9. Tóm tắt\nTrong bài học này, chúng ta sẽ học một kỹ thuật vô cùng hữu ích và xuất hiện cực kỳ\nthường xuyên trong competitive programming: Mảng tiền tố (Prefix Sum). Kỹ thuật này\nbiến bài toán tính tổng đoạn từ chậm thành cực nhanh.\n1. Bài toán mở đầu: Truy vấn tổng đoạn\nCho mảngagồmnsố nguyên. Bạn cần trả lờiqtruy vấn, mỗi truy vấn cho hai sốlvàr,\nhỏi tổnga[l] +a[l+ 1] +···+a[r].\nVí dụ:a= [3,1,4,1,5,9,2,6]\n• Truy vấn[2,5]:1 + 4 + 1 + 5 = 11\n• Truy vấn[1,8]:3 + 1 + 4 + 1 + 5 + 9 + 2 + 6 = 31\n• Truy vấn[4,4]:1\nCách \"thô\": Duyệt từng phần tử\nC++\n// Với mỗi truy vấn (l, r):\nlong long sum = 0;\nfor (int i = l; i <= r; i++) {\nsum += a[i];\n}\nPython\n# Với mỗi truy vấn (l, r):\ntotal = 0\nfor i in range(l, r + 1):\ntotal += a[i]\nMỗi truy vấn mấtO(n). Nếun= 10 5 vàq= 10 5, tổng cộngO(n×q) =O(10 10)→\nquá chậm!\nCâu hỏi: Có cách nào trả lời mỗi truy vấn trongO(1)không?\nCó! Đó chính là Prefix Sum.\n2. Xây dựng mảng tiền tố\nĐịnh nghĩa\nCho mảnga[1], a[2], . . . , a[n](đánh số từ 1). Ta xây mảngpre(prefix sum) như sau:\npre[0] = 0\npre[1] =a[1]\npre[2] =a[1] +a[2]\npre[3] =a[1] +a[2] +a[3]\n. . .\npre[i] =a[1] +a[2] +···+a[i] =pre[i−1] +a[i]\nNói cách khác,pre[i]là tổng củaiphần tử đầu tiên của mảng.\nVí dụ trực quan từng bước\nCho mảnga= [3,1,4,1,5](đánh số từ 1 đến 5).\nBước xây dựng:\n• pre[0] = 0(quy ước)\n• pre[1] =pre[0] +a[1] = 0 + 3 = 3(tổng 1 phần tử đầu)\n• pre[2] =pre[1] +a[2] = 3 + 1 = 4(tổng 2 phần tử đầu)\n• pre[3] =pre[2] +a[3] = 4 + 4 = 8(tổng 3 phần tử đầu)\n• pre[4] =pre[3] +a[4] = 8 + 1 = 9(tổng 4 phần tử đầu)\n• pre[5] =pre[4] +a[5] = 9 + 5 = 14(tổng 5 phần tử đầu)\nKết quả:\nChỉ số: 0 1 2 3 4 5\na: - 3 1 4 1 5\npre: 0 3 4 8 9 14\nCông thức tính tổng đoạn\nTổng đoạn[l, r] =pre[r]−pre[l−1]\nTại sao công thức này đúng?\npre[r] =a[1] +a[2] +···+a[l−1] +a[l] +···+a[r]\npre[l−1] =a[1] +a[2] +···+a[l−1]\npre[r]−pre[l−1] =a[l] +a[l+ 1] +···+a[r]\nTa \"cắt bỏ\"phần đầu mà ta không cần!\nKiểm tra lại với ví dụ\nChoa= [3,1,4,1,5],pre= [0,3,4,8,9,14]:\n• Tổng[2,4] =pre[4]−pre[1] = 9−3 = 6✓(kiểm tra:1 + 4 + 1 = 6)\n• Tổng[1,5] =pre[5]−pre[0] = 14−0 = 14✓(kiểm tra:3 + 1 + 4 + 1 + 5 = 14)\n• Tổng[3,3] =pre[3]−pre[2] = 8−4 = 4✓(kiểm tra:a[3] = 4)\n• Tổng[1,1] =pre[1]−pre[0] = 3−0 = 3✓(kiểm tra:a[1] = 3)\nTất cả đều đúng! Và mỗi truy vấn chỉ cần 1 phép trừ -O(1)!\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, q;\ncin >> n >> q;\nvector<long long> a(n + 1), pre(n + 1, 0);\nfor (int i = 1; i <= n; i++) {\ncin >> a[i];\n}\n// Xây dựng mảng tiền tố - O(n)\nfor (int i = 1; i <= n; i++) {\npre[i] = pre[i - 1] + a[i];\n}\n// Trả lời q truy vấn - O(1) mỗi truy vấn\nwhile (q--) {\nint l, r;\ncin >> l >> r;\ncout << pre[r] - pre[l - 1] << \"\\n\";\n}\nreturn 0;\n}\nPython\nn, q = map(int, input().split())\na = [0] + list(map(int, input().split()))\npre = [0] * (n + 1)\n# Xây dựng mảng tiền tố - O(n)\nfor i in range(1, n + 1):\npre[i] = pre[i - 1] + a[i]\n# Trả lời q truy vấn - O(1) mỗi truy vấn\nfor _ in range(q):\nl, r = map(int, input().split())\nprint(pre[r] - pre[l - 1])\nPhân tích độ phức tạp:\n• Tiền xử lý:O(n)\n• Mỗi truy vấn:O(1)\n• Tổng:O(n+q)- nhanh gấp nhiều lần so vớiO(n×q)!\n3. Prefix Sum với mảng đánh số từ 0\nTrong nhiều bài, mảng đánh số từ 0 (a[0], a[1], . . . , a[n−1]). Khi đó ta vẫn xây prefix sum\ntương tự:\nC++\nvector<long long> pre(n + 1, 0);\nfor (int i = 0; i < n; i++) {\npre[i + 1] = pre[i] + a[i];\n}\n// Tổng đoạn a[l..r] (0-indexed):\nlong long sum_lr = pre[r + 1] - pre[l];\nPython\npre = [0] * (n + 1)\nfor i in range(n):\npre[i + 1] = pre[i] + a[i]\n# Tổng đoạn a[l..r] (0-indexed):\nsum_lr = pre[r + 1] - pre[l]\nLưu ý:Khi đánh số từ 0, công thức hơi khác một chút. Hãy cẩn thận và luôn test với\nví dụ nhỏ để kiểm tra.\n4. Ví dụ ứng dụng: Tìm đoạn con có tổng bằngS\nBài toán:Cho mảngagồmnsố nguyên dương. Đếm số đoạn con[l, r]có tổng bằngS.\nCách giải:Tổng[l, r] =pre[r]−pre[l−1] =S⇐⇒pre[l−1] =pre[r]−S.\nTa duyệtrtừ 1 đếnn, và đếm xem có bao nhiêu giá trịpre[l−1](với0≤l−1< r)\nbằngpre[r]−S. Dùng map để lưu số lần xuất hiện:\nC++\nmap<long long, int> cnt;\ncnt[0] = 1; // pre[0] = 0 xuất hiện 1 lần\nlong long pre = 0, ans = 0;\nfor (int i = 1; i <= n; i++) {\npre += a[i];\nans += cnt[pre - S];\ncnt[pre]++;\n}\ncout << ans << endl;\nPython\nfrom collections import defaultdict\ncnt = defaultdict(int)\ncnt[0] = 1 # pre[0] = 0 xuất hiện 1 lần\npre = 0\nans = 0\nfor i in range(1, n + 1):\npre += a[i]\nans += cnt[pre - S]\ncnt[pre] += 1\nprint(ans)\n5. Mảng hiệu (Difference Array)\nBài toán mở đầu\nCho mảngagồmnphần tử, ban đầu tất cả bằng 0. Thực hiệnqphép biến đổi, mỗi phép\ncộng giá trịvvào tất cả phần tử trong đoạn[l, r]. Sau tất cả phép biến đổi, in mảng kết\nquả.\nCách \"thô\":Mỗi phép biến đổi, duyệt từlđếnrvà cộngv:\nC++\nfor (int i = l; i <= r; i++) a[i] += v;\nPython\nfor i in range(l, r + 1):\na[i] += v\nMỗi phép mấtO(n)→tổngO(n×q)→chậm!\nÝ tưởng Difference Array\nThay vì cộng vào từng phần tử, ta chỉ đánh dấu ở 2 vị trí:\n• Cộngvvào vị tríl(bắt đầu tác dụng)\n• Trừvở vị trír+ 1(hết tác dụng)\nSau tất cả phép biến đổi, tính prefix sum của mảng đánh dấu để ra kết quả.\nVí dụ trực quan\nMảng 5 phần tử, ban đầu toàn 0. Thực hiện 3 phép:\n1. Cộng+2vào đoạn[2,4]\n2. Cộng+3vào đoạn[1,3]\n3. Cộng−1vào đoạn[3,5]\nMảng diff (mảng hiệu):\nChỉ số: 1 2 3 4 5 6\nBan đầu: 0 0 0 0 0 0\nPhép 1: [2,4] +2→diff[2] += 2, diff[5] -= 2\ndiff: 0 2 0 0 -2 0\nPhép 2: [1,3] +3→diff[1] += 3, diff[4] -= 3\ndiff: 3 2 0 -3 -2 0\nPhép 3: [3,5] -1→diff[3] += (-1), diff[6] -= (-1)\ndiff: 3 2 -1 -3 -2 1\nTính prefix sum của diff:\nChỉ số: 1 2 3 4 5\ndiff: 3 2 -1 -3 -2\nprefix sum: 3 5 4 1 -1\nKiểm tra bằng cách thủ công:\nChỉ số: 1 2 3 4 5\nBan đầu: 0 0 0 0 0\nPhép 1: 0 2 2 2 0 (+2 ở [2,4])\nPhép 2: 3 5 5 2 0 (+3 ở [1,3])\nPhép 3: 3 5 4 1 -1 (-1 ở [3,5])\nKết quả:[3,5,4,1,−1]- khớp hoàn toàn!\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, q;\ncin >> n >> q;\nvector<long long> diff(n + 2, 0); // +2 để tránh truy cập ngoài mảng\nwhile (q--) {\nint l, r;\nlong long v;\ncin >> l >> r >> v;\ndiff[l] += v;\ndiff[r + 1] -= v;\n}\n// Tính prefix sum để ra mảng kết quả\nfor (int i = 1; i <= n; i++) {\ndiff[i] += diff[i - 1];\ncout << diff[i] << \" \";\n}\ncout << endl;\nreturn 0;\n}\nPython\nn, q = map(int, input().split())\ndiff = [0] * (n + 2) # +2 để tránh truy cập ngoài mảng\nfor _ in range(q):\nl, r, v = map(int, input().split())\ndiff[l] += v\ndiff[r + 1] -= v\n# Tính prefix sum để ra mảng kết quả\nfor i in range(1, n + 1):\ndiff[i] += diff[i - 1]\nprint(*diff[1:n + 1])\nPhân tích:\n• Mỗi phép biến đổi:O(1)(chỉ cập nhật 2 vị trí)\n• Tính kết quả cuối:O(n)\n• Tổng:O(n+q)- nhanh hơn rất nhiều so vớiO(n×q)!\nMối liên hệ:Prefix sum và Difference array là phép ngược của nhau. Nếuprelà prefix\nsum củaa, thìachính là difference array củapre. Ngược lại, nếudif flà difference array,\nthì prefix sum củadif fcho ta mảng gốc.\n6. Tổng đoạn con lớn nhất (Kadane’s Algorithm)\nBài toán\nCho mảngagồmnsố nguyên (có thể âm). Tìm đoạn con liên tiếp[l, r](1≤l≤r≤n)\ncó tổng lớn nhất.\nVí dụ:a= [−2,1,−3,4,−1,2,1,−5,4]\nĐoạn con có tổng lớn nhất là[4,−1,2,1]với tổng= 6.\nCách \"thô\": Thử mọi đoạn con -O(n2)\nC++\nlong long max_sum = a[1];\nfor (int l = 1; l <= n; l++) {\nlong long sum = 0;\nfor (int r = l; r <= n; r++) {\nsum += a[r];\nmax_sum = max(max_sum, sum);\n}\n}\nPython\nmax_sum = a[1]\nfor l in range(1, n + 1):\ntotal = 0\nfor r in range(l, n + 1):\ntotal += a[r]\nmax_sum = max(max_sum, total)\nVớin= 10 5,O(n 2) = 10 10→quá chậm!\nKadane’s Algorithm -O(n)\nÝ tưởng chính:Duyệt mảng từ trái sang phải, duy trì biếncur= tổng đoạn con kết\nthúc tại vị trí hiện tại.\nTại mỗi vị tríi, ta có 2 lựa chọn:\n1. Nối tiếp đoạn cũ:cur + a[i](mở rộng đoạn hiện tại)\n2. Bắt đầu mới từa[i]: chỉ lấya[i](bỏ đoạn cũ)\nTa chọn cách nào cho tổng lớn hơn. Nếucur < 0thì bắt đầu mới luôn tốt hơn (vì\ncộng thêm số âm chỉ làm giảm tổng).\nVí dụ trực quan từng bước\nMảng:a= [−2,1,−3,4,−1,2,1,−5,4]\n• i= 1:a[i] =−2\ncur= 0 + (−2) =−2→cur <0→resetcur= 0\nmax_sum= max(−INF,−2) =−2\n(Ghi chú: ta vẫn cập nhậtmax_sumTRƯỚC khi reset)\n• i= 2:a[i] = 1\ncur= 0 + 1 = 1→cur≥0→giữ\nmax_sum= max(−2,1) = 1\n• i= 3:a[i] =−3\ncur= 1 + (−3) =−2→cur <0→resetcur= 0\nmax_sum= max(1,−2) = 1\n• i= 4:a[i] = 4\ncur= 0 + 4 = 4→cur≥0→giữ\nmax_sum= max(1,4) = 4\n• i= 5:a[i] =−1\ncur= 4 + (−1) = 3→cur≥0→giữ\nmax_sum= max(4,3) = 4\n• i= 6:a[i] = 2\ncur= 3 + 2 = 5→cur≥0→giữ\nmax_sum= max(4,5) = 5\n• i= 7:a[i] = 1\ncur= 5 + 1 = 6→cur≥0→giữ\nmax_sum= max(5,6) = 6\n• i= 8:a[i] =−5\ncur= 6 + (−5) = 1→cur≥0→giữ\nmax_sum= max(6,1) = 6\n• i= 9:a[i] = 4\ncur= 1 + 4 = 5→cur≥0→giữ\nmax_sum= max(6,5) = 6\nKết quả:max_sum= 6(đoạn[4,−1,2,1])✓\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<long long> a(n);\nfor (auto &x : a) cin >> x;\nlong long max_sum = a[0], cur = 0;\nfor (int i = 0; i < n; i++) {\ncur += a[i];\nmax_sum = max(max_sum, cur);\nif (cur < 0) cur = 0;\n}\ncout << max_sum << endl;\nreturn 0;\n}\nPython\nn = int(input())\na = list(map(int, input().split()))\nmax_sum = a[0]\ncur = 0\nfor x in a:\ncur += x\nmax_sum = max(max_sum, cur)\nif cur < 0:\ncur = 0\nprint(max_sum)\nTại sao khởi tạomax_sum = a[0]?Vì nếu tất cả phần tử đều âm (ví dụ[−3,−2,−1]),\nta vẫn phải chọn ít nhất 1 phần tử.a[0]đảm bảo đáp án không phải 0 (mà là số âm lớn\nnhất).\nTại sao resetcur = 0khicur < 0?Vì một đoạn có tổng âm sẽ chỉ làm giảm tổng\ncủa bất kỳ đoạn nào nối tiếp sau nó. Bắt đầu mới từ đầu luôn tốt hơn.\n7. Prefix Sum 2D (mở rộng)\nKỹ thuật prefix sum có thể mở rộng cho bảng 2 chiều. Cho bảnga[1..n][1..m], ta xây:\npre[i][j] =tổng các phần tửa[x][y]với1≤x≤ivà1≤y≤j\nCông thức xây dựng:\npre[i][j] =pre[i−1][j] +pre[i][j−1]−pre[i−1][j−1] +a[i][j]\nTổng hình chữ nhật từ[r1, c1]đến[r 2, c2]:\nsum=pre[r 2][c2]−pre[r 1−1][c 2]−pre[r 2][c1−1] +pre[r 1−1][c 1−1]\nĐây là dạng nâng cao - bạn sẽ gặp lại ở các bài khó hơn.\n8. Sai lầm thường gặp\nSai lầm 1: Quênpre[0] = 0\nC++\n// SAI - nếu không có pre[0] = 0:\npre[1] = a[1]; // OK\n// Nhưng tổng [1, r] = pre[r] - pre[0] sẽ sai nếu pre[0] chưa được gán!\n// ĐÚNG:\nvector<long long> pre(n + 1, 0); // pre[0] = 0 tự động\nfor (int i = 1; i <= n; i++)\npre[i] = pre[i - 1] + a[i];\nPython\n# SAI - nếu không có pre[0] = 0:\n# tổng [1, r] = pre[r] - pre[0] sẽ sai nếu pre[0] chưa được gán!\n# ĐÚNG:\npre = [0] * (n + 1)\nfor i in range(1, n + 1):\npre[i] = pre[i - 1] + a[i]\nSai lầm 2: Nhầm chỉ số 0-indexed và 1-indexed\nNếu mảng đánh số từ 0 (a[0], . . . , a[n−1]) mà bạn dùng công thức 1-indexed, kết quả sẽ\nlệch 1. Hãy thống nhất cách đánh số và luôn test với ví dụ nhỏ.\nSai lầm 3: Tràn số khi tính tổng\nNếun= 10 5 và mỗia[i]có thể đến10 9, thì prefix sum có thể đến1014→phải dùnglong\nlong!\nC++\n// SAI:\nvector<int> pre(n + 1, 0); // int chỉ chứa đến ~2 x 10^9\n// ĐÚNG:\nvector<long long> pre(n + 1, 0);\nPython\n# Python int không bị tràn số theo kiểu int 32-bit,\n# nhưng trong C++ thì phải dùng long long.\nSai lầm 4: Difference array - quên +2 kích thước mảng\nKhi cộng giá trị vào đoạn[l, r], ta cần truy cậpdiff[r + 1]. Nếur=n, ta truy cập\ndiff[n + 1]. Vì vậy mảng diff cần kích thước ít nhấtn+ 2.\nC++\n// SAI:\nvector<long long> diff(n + 1, 0); // diff[n+1] sẽ truy cập ngoài mảng!\n// ĐÚNG:\nvector<long long> diff(n + 2, 0); // an toàn\nPython\n# SAI:\ndiff = [0] * (n + 1) # diff[n+1] sẽ vượt chỉ số\n# ĐÚNG:\ndiff = [0] * (n + 2)\n9. Tóm tắt\nKỸ THUẬT BÀI TOÁN TIỀN XỬ LÝ MỖI TRUY VẤN\n/ PHÉP BIẾN\nĐỔI\nPrefix Sum Tổng đoạn[l, r] O(n) O(1)\nDifference Array Cộngvvào đoạn[l, r] O(1)mỗi phép O(n)tổng kết\nKadane’s Algorithm Tổng đoạn con lớn nhất- O(n)\nMẹo ghi nhớ:\n• Prefix sum = \"tổng tích lũy\"- dùng khi cần hỏi tổng nhiều lần\n• Difference array = \"ngược lại\"của prefix sum - dùng khi cần cập nhật nhiều lần\n• Kadane = \"đi từ trái sang phải, giữ lại nếu tốt, bỏ đi nếu xấu\"",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b4-p1-ambatukam",
            "title": "Ambatukam",
            "fileName": "Ambatukam - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 400,
            "preview": "Bài toán Ambatukam. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Ambatukam - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Anh Ba mở quán cơm ngay giữa thành phố, đã thu hút được rất nhiều khách đến ghế thăm\nQuán của anh Ba có N thực khách đang chờ xếp hàng, thực khách thứ i mua một tô cơm giá\nx_i đồng.\nNhiệm vụ của bạn là: với mỗi thực khách thứ i, tổng tiền mà quán anh Ba đã thu về được là\nbao nhiêu đồng?\n\nInput\n• Dòng thứ nhất chứa số nguyên dương n (n ≤ 10^6) - số thực khách.\n• Dòng thứ hai chứa n số nguyên dương x 1, x 2, …, x n (x_i ≤ 1 0 7).\n\nOutput\n• Gồm n số nguyên, tương ứng với tổng số tiền mà quán của anh Ba thu được ở thực\nkhách thứ i.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 2 3 4 5",
            "sampleOutput": "1 3 6 10 15",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 2 3 4 5",
                "output": "1 3 6 10 15"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p2-b-i-d-dhbb-2021",
            "title": "Bài dễ (DHBB 2021)",
            "fileName": "Bài dễ (DHBB 2021) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Bài dễ (DHBB 2021). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Bài dễ (DHBB 2021) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong một kỳ thi, việc sáng tạo bài dễ nhất trong đề thi nhiều khi cũng mất không ít thời gian.\nTrong đề thi Duyên Hải năm 2021, Ban giám khảo muốn tạo một bài dễ thao tác trên dãy số\ncho các học sinh khối 10. Bài toán dưới đây đã được sáng tạo và chọn vào đề thi, bài toán này\ncó thể giải được bằng nhiều thuật toán khác nhau.\nCho dãy số nguyên a 1, a 2,..., a n, một đoạn a L, a L + 1,..., a R (1 ≤ L ≤ R ≤ N) được gọi\nlà đoạn đẹp nếu L, R đều là số nguyên tố. Hãy tìm đoạn đẹp có tổng lớn nhất.\n\nInput\nVào từ thiết bị vào chuẩn theo khuôn dạng:\n• Dòng đầu chứa số nguyên dương n (n ≥ 2);\n• Dòng thứ hai chứa n số nguyên a 1, a 2,..., a n (∣ a i ∣ ≤ 10^6)\n\nOutput\n• Ghi ra thiết bị ra chuẩn một số nguyên là tổng lớn nhất của đoạn đẹp tìm được.\n\nScoring\n• Subtask 1 (40% số điểm): n ≤ 100;\n• Subtask 2 (30% số điểm): n ≤ 3000;\n• Subtask 3 (30% số điểm): n ≤ 10^6;",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n9 5 -2 6 -1 1",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n9 5 -2 6 -1 1",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p3-maximum-subarray-sum",
            "title": "Maximum Subarray Sum",
            "fileName": "CSES - Maximum Subarray Sum _ Tổng đoạn con lớn nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Maximum Subarray Sum. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/CSES - Maximum Subarray Sum _ Tổng đoạn con lớn nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên, nhiệm vụ của bạn là tìm tổng giá trị tối đa của một đoạn\ncon khác rỗng.\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: kích thước của mảng.\n• Dòng thứ hai có n số nguyên x 1, x 2, …, x n: các giá trị của mảng.\n\nOutput\n• In một số nguyên duy nhất là tổng đoạn con lớn nhất.\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• − 10^9 ≤ x_i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n-1 3 -2 5 3 -5 2 2",
            "sampleOutput": "9",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n-1 3 -2 5 3 -5 2 2",
                "output": "9"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p4-restaurant-customers",
            "title": "Restaurant Customers",
            "fileName": "CSES - Restaurant Customers _ Khách nhà hàng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Restaurant Customers. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/CSES - Restaurant Customers _ Khách nhà hàng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho thời gian đến và rời đi của n khách hàng trong một nhà hàng.\nSố lượng khách hàng tối đa trong nhà hàng bất cứ lúc nào là bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: số lượng khách hàng.\n• Sau này, có n dòng mô tả khách hàng. Mỗi dòng có hai số nguyên a và b: thời gian đến\nvà rời của khách hàng.\n• Bạn có thể giả định rằng tất cả thời gian đến và đi là khác nhau.\n\nOutput\n• In một số nguyên: số lượng khách hàng tối đa.\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ a < b ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n5 8\n2 4\n3 9",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n5 8\n2 4\n3 9",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p5-static-range-sum-queries",
            "title": "Static Range Sum Queries",
            "fileName": "CSES - Static Range Sum Queries _ Truy vấn tổng mảng tĩnh - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Static Range Sum Queries. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/CSES - Static Range Sum Queries _ Truy vấn tổng mảng tĩnh - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên, nhiệm vụ của bạn là xử lý q truy vấn có dạng: tổng các\nphần tử trong đoạn [ a, b ] là bao nhiêu?\n\nInput\n• Dòng đầu tiên là hai số nguyên n và q: số phần tử và truy vấn\n• Dòng thứ hai là n số nguyên x 1, x 2, …, x n: các phần tử của mảng\n• q dòng cuối cùng là các truy vấn. Mỗi dòng là hai số nguyên a và b: tổng các phần tử\ntrong đoạn [ a, b ] là bao nhiêu?\n\nOutput\n• In ra đáp án của mỗi truy vấn\n\nScoring\n• 1 ≤ n, q ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9\n• 1 ≤ a ≤ b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8 4\n3 2 4 5 1 1 5 3\n2 4\n5 6\n1 8\n3 3",
            "sampleOutput": "11\n2\n24\n4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8 4\n3 2 4 5 1 1 5 3\n2 4\n5 6\n1 8\n3 3",
                "output": "11\n2\n24\n4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p6-subarray-sums-i",
            "title": "Subarray Sums I",
            "fileName": "CSES - Subarray Sums I _ Tổng đoạn con I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Subarray Sums I. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/CSES - Subarray Sums I _ Tổng đoạn con I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên dương, nhiệm vụ của bạn là đếm số lượng đoạn con có\ntổng x.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và x: kích thước của mảng và tổng x\n• Dòng tiếp theo có n số nguyên a 1, a 2, …, a n: nội dung của mảng\n• Các ràng buộc:\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x, a i ≤ 10^9\n\nOutput\n• In một số nguyên: số lượng đoạn con được yêu cầu",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 7\n2 4 1 2 7",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 7\n2 4 1 2 7",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p7-d-i-s",
            "title": "Dải số",
            "fileName": "Dải số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Dải số. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Dải số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một số nguyên dương n và một mảng A chứa n số nguyên (có thể âm). Bạn muốn cắt\nmột nhát cắt trên mảng đó để chia mảng đó thành hai đoạn trái và phải, sao cho cả hai đoạn\nđều có ít nhất một phần tử và tổng các phần tử của hai đoạn bằng nhau.\nĐề bài yêu cầu đếm có bao nhiêu cách cắt thỏa mãn điều kiện trên.\n\nInput\n• Dòng đầu tiên chứa một số nguyên dương n (1 ≤ n ≤ 2 ∗ 10^5)\n• Dòng thứ hai chứa n số nguyên A_i, là số thứ i của mảng A (∣ A_i ∣ ≤ 10^9)\n\nOutput\n• Số cách cắt mảng A cho trước, sao cho tổng của phân đoạn trái và phân đoạn phải sau\nkhi cắt có tổng các phần tử bằng nhau.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n1 2 2 1",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n1 2 2 1",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p8-mini-candy",
            "title": "MINI CANDY",
            "fileName": "MINI CANDY - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 800,
            "preview": "Bài toán MINI CANDY. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/MINI CANDY - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "An và Bình là hai anh em.\nBa của An sau một chuyến đi công tác xa nhà trở về, mua cho An và Bình N gói kẹo, gói thứ i\ncó A_i viên kẹo.\nĐể tránh việc tranh giành kẹo lẫn nhau, ba của An đã thống nhất việc chia kẹo theo cách sau:\n- Trước hết, ba của An chọn ra một số nguyên k (với 1 ≤ k ≤ N)\n- An sẽ được chia các gói kẹo từ 1 đến k. Phần còn lại (các gói kẹo từ k + 1 đến N) sẽ được\nchia cho Bình.\nĐể tránh sự phân bua giữa hai anh em, ba của An muốn lựa chọn chỉ số k sao cho chênh lệch\ngiữa tổng số lượng viên kẹo của hai anh em là nhỏ nhất có thể. Hãy giúp ông thực hiện điều\nnày.\n\nInput\n• Dòng đầu tiên gồm số nguyên N (2 ≤ N ≤ 200000) - số gói kẹo.\n• Dòng thứ hai gồm N số nguyên A 1, A 2,..., A N (1 ≤ A_i ≤ 10^9) - số viên kẹo trong\ntừng gói kẹo.\n\nOutput\n• In ra chênh lệch lượng kẹo nhỏ nhất có thể.\n\nScoring\n• Subtask 1 (50% số điểm): N ≤ 2000.\n• Subtask 2 (50% số điểm): không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n5 1 3 2 6",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n5 1 3 2 6",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p9-t-ng-b-ng-0",
            "title": "Tổng bằng 0",
            "fileName": "Tổng bằng 0 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 1000,
            "preview": "Bài toán Tổng bằng 0. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Tổng bằng 0 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một dãy số a gồm n số nguyên. Nhiệm vụ của bạn là tìm số cặp số (i, j) 1 ≤\ni ≤ j ≤ n sao cho a i + a i + 1 +... + a j = 0\n\nInput\n• Dòng đầu tiên chứa số nguyên dương n (1 ≤ n ≤ 10^5) - là số phần tử của mảng.\n• Dòng thứ hai chứa n số nguyên, số thứ i là a i (∣ a i ∣≤ 10^9)\n\nOutput\n• Số lượng cặp số (i, j) thõa mãn điều kiện trên",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n-3 3 -4 4",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n-3 3 -4 4",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p10-t-ng-d-y-con",
            "title": "Tổng dãy con",
            "fileName": "Tổng dãy con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Tổng dãy con. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Tổng dãy con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên gồm n phần tử a 1, a 2, ⋯, a n (∣ a i ∣ ≤ 10^9). Cho giá trị x và q câu hỏi\ncó dạng S (u, v). Với S (u, v) là tổng các giá trị của các phần tử từ u đến v.\nYêu cầu: Đếm xem trong q câu hỏi đó có bao câu hỏi có giá trị nhỏ hơn x.\n\nInput\n• Dòng đầu tiên chứa ba số nguyên dương n, x, q (x ≤ 10^9, q ≤ 10^5).\n• Dòng thứ hai chứa a 1, a 2, ⋯, a n (∣ a i ∣ ≤ 10^9).\n• q dòng tiếp theo, mỗi dòng chứa hai số nguyên dương u, v (1 ≤ u ≤ v ≤ n).\n\nOutput\n• In ra một số nguyên là số lượng câu hỏi có giá trị nhỏ hơn x\n\nScoring\n• Subtask 1 (50% số điểm): n ≤ 500\n• Subtask 2 (30% số điểm): n ≤ 1 0 4\n• Subtask 3 (30% số điểm): n ≤ 10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 6 3\n7 2 1 6 5\n2 3\n3 4\n5 5",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 6 3\n7 2 1 6 5\n2 3\n3 4\n5 5",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p11-t-ng-k-s",
            "title": "Tổng k số",
            "fileName": "Tổng k số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.5s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Tổng k số. Giới hạn thời gian 0.5s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Tổng k số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên dương gồm N phần tử a 1, a 2,.., a N và số nguyên dương K. Chọn ra K\nphần tử liên tiếp sao cho tổng của chúng là lớn nhất. In ra giá trị đó\n\nInput\n• Dòng 1: hai số nguyên dương N và K (K ≤ N ≤ 10^5);\n• Dòng 2: gồm N số nguyên dương a 1, a 2,..., a N (a i ≤ 10^9)\n\nOutput\n• In ra đáp án thỏa mãn yêu cầu đề bài.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 2\n2 4 5 2 9 1",
            "sampleOutput": "11",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 2\n2 4 5 2 9 1",
                "output": "11"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b4-p12-t-ng-li-n-ti-p-kh-ng-qu-t",
            "title": "Tổng liên tiếp không quá t",
            "fileName": "Tổng liên tiếp không quá t - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Tổng liên tiếp không quá t. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 4/Tổng liên tiếp không quá t - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên và số nguyên t.\nYêu cầu: Tìm mảng con gồm những phần tử liên tiếp dài nhất sao cho tổng tất cả các phần tử\ncủa mảng này không quá t. Và số lượng phần tử của mảng này chính là kết quả cần tìm.\n\nInput\n• Dòng thứ nhất chứa hai số nguyên n, t (1 ≤ n ≤ 10^5; 1 ≤ t ≤ 10^9)\n• Dòng thứ hai chứa n số nguyên a 1, a 2,..., a n (1 ≤ a i ≤ 1 0 4)\n\nOutput\n• In ra giá trị cần tìm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 4\n1 2 1 2",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 4\n1 2 1 2",
                "output": "3"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-5",
        "order": 5,
        "title": "Kỹ thuật Hai con trỏ (Two Pointers)",
        "theoryPdfFileName": "Chapter 2 lesson 5 - Hai con trỏ.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 5 - Hai con trỏ.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Kỹ thuật Hai con trỏ (Two Pointers) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Hai con trỏ (Two Pointers)\nNội dung\nChào mừng bạn đến với bài học về kỹ thuật Hai con trỏ (Two Pointers)! Đây là một trong\nnhững kỹ thuật quan trọng nhất trong lập trình thi đấu, giúp bạn giải quyết rất nhiều\nbài toán về đoạn con và cặp phần tử một cách hiệu quả.\n1. Tại sao cần kỹ thuật hai con trỏ?\n2. Ý tưởng cốt lõi\n3. Hai con trỏ cùng chiều (Sliding Window)\n• Tính chất quan trọng (tính đơn điệu)\n• Template cơ bản\n• Ví dụ chi tiết: Đoạn con dài nhất có tổng ≤ *S*\n• Tại sao chỉO(n)?\n• Ví dụ 2: Đoạn con dài nhất không có phần tử trùng\n4. Hai con trỏ ngược chiều\n• Ý tưởng\n• Ví dụ chi tiết: Two Sum trên mảng đã sắp xếp\n• Tại sao cách này đúng? (Rất quan trọng!)\n• Code hoàn chỉnh\n5. Trộn hai mảng đã sắp xếp (Merge)\n• Ý tưởng\n• Ví dụ chi tiết\n• Code hoàn chỉnh\n6. Bài toán mẫu hoàn chỉnh: Ferris Wheel (CSES 1090)\n7. Sai lầm thường gặp và mẹo\n• Sai lầm 1: Quên xử lý cửa sổ rỗng\n• Sai lầm 2: Không duy trì bất biến (invariant)\n• Sai lầm 3: Dùng two pointers khi không có tính đơn điệu\n• Mẹo 1: Đếm thay vì tìm max\n• Mẹo 2: Dùng map/set cho điều kiện phức tạp\n8. Tổng kết\n1. Tại sao cần kỹ thuật hai con trỏ?\nHãy bắt đầu với một câu hỏi đơn giản:\nBài toán:Cho mảngagồmnsố nguyên dương và sốS. Tìm đoạn con liên tiếp dài\nnhất có tổng ≤ *S*.\nCách \"ngây thơ\"(brute force) -O(n2):Thử tất cả các cặp(l, r), tính tổng đoạn\n[l, r], kiểm tra xem≤Skhông:\nC++\nint ans = 0;\nfor (int l = 0; l < n; l++) {\nlong long sum = 0;\nfor (int r = l; r < n; r++) {\nsum += a[r];\nif (sum <= S) ans = max(ans, r - l + 1);\nelse break;\n}\n}\nPython\nans = 0\nfor l in range(n):\ntotal = 0\nfor r in range(l, n):\ntotal += a[r]\nif total <= S:\nans = max(ans, r - l + 1)\nelse:\nbreak\nVớin= 10 5, cách này cần khoảng1010 phép tính - quá chậm! (nhớ rằng máy tính\nchỉ xử lý khoảng108 phép tính mỗi giây).\nCâu hỏi đặt ra: Liệu có cách nào chỉ cầnO(n)- tức là duyệt mảng một lần - mà\nvẫn tìm được đáp án?\nCâu trả lời là CÓ, nhờ kỹ thuật hai con trỏ!\n2. Ý tưởng cốt lõi\nKỹ thuật hai con trỏ dùng hai biến (thường gọi làlvàr) để đại diện cho hai \"vị trí\"trên\nmảng. Thay vì thử tất cả các cặp(l, r), ta tận dụng tính đơn điệu của bài toán để di\nchuyểnlvàrmột cách thông minh.\nHình ảnh trực quan:Hãy tưởng tượng bạn đang nhìn qua một cửa sổ trượt (sliding\nwindow) trên mảng. Cửa sổ này có thể mở rộng (kéorsang phải) hoặc thu hẹp (kéol\nsang phải). Bạn không bao giờ kéo sang trái - cửa sổ chỉ \"trượt\"về phía trước.\nVí dụ đời thường:Bạn đang đọc một trang sách dài. Bạn dùng hai ngón tay đánh\ndấu đoạn đang đọc: ngón trái (l) đánh dấu đầu đoạn, ngón phải (r) đánh dấu cuối đoạn.\nKhi muốn đọc thêm, bạn kéo ngón phải sang phải. Khi đoạn quá dài, bạn kéo ngón trái\nsang phải. Cả hai ngón tay đều chỉ di chuyển sang phải - không bao giờ quay lại.\nCó ba dạng phổ biến:\n• Hai con trỏ cùng chiều (Sliding Window):lvàrcùng đi từ trái sang phải\n• Hai con trỏ ngược chiều:lđi từ trái,rđi từ phải, gặp nhau ở giữa\n• Trộn hai mảng đã sắp xếp:hai con trỏ trên hai mảng khác nhau\n3. Hai con trỏ cùng chiều (Sliding Window)\nĐây là dạng phổ biến nhất. Dùng khi cần tìm đoạn con thỏa mãn một điều kiện nào đó.\nTính chất quan trọng (tính đơn điệu)\nKỹ thuật này hoạt động khi bài toán có tính chất sau:\n\"Nếu đoạn[l, r]không thỏa mãn điều kiện, thì đoạn[l, r+ 1],[l, r+ 2], . . .cũng không\nthỏa mãn.\"\nNói cách khác: khi cửa sổ[l, r]đã vi phạm, mở rộng thêm chỉ làm tệ hơn. Ta phải thu\nhẹp cửa sổ (tăngl) để có thể thỏa mãn lại.\nTemplate cơ bản\nC++\nint l = 0;\nfor (int r = 0; r < n; r++) {\n// Bước 1: Thêm a[r] vào cửa sổ [l, r]\n// (cập nhật biến theo dõi: tổng, đếm, map, ...)\n// Bước 2: Thu hẹp cửa sổ nếu vi phạm\nwhile (/* cửa sổ [l, r] vi phạm điều kiện */) {\n// Loại a[l] khỏi cửa sổ\nl++;\n}\n// Bước 3: Cập nhật đáp án\n// Đoạn [l, r] giờ thỏa mãn điều kiện\nans = max(ans, r - l + 1); // hoặc ans += r - l + 1, tùy bài\n}\nPython\nl = 0\nfor r in range(n):\n# Bước 1: Thêm a[r] vào cửa sổ [l, r]\n# (cập nhật biến theo dõi: tổng, đếm, dict, ...)\n# Bước 2: Thu hẹp cửa sổ nếu vi phạm\nwhile False: # thay bằng điều kiện vi phạm\n# Loại a[l] khỏi cửa sổ\nl += 1\n# Bước 3: Cập nhật đáp án\n# Đoạn [l, r] giờ thỏa mãn điều kiện\nans = max(ans, r - l + 1) # hoặc ans += r - l + 1, tùy bài\nVí dụ chi tiết: Đoạn con dài nhất có tổng ≤ *S*\nĐề bài:Cho mảnga= [2,1,3,5,1,2]vàS= 7. Tìm đoạn con liên tiếp dài nhất có tổng\n≤7.\nHãy mô phỏng từng bước (chỉ số bắt đầu từ 0):\nBƯỚC r a[r] THÊM sum VI PHẠM? ĐOẠN[l, r] ĐỘ DÀI\n1 0 a[0] = 2 2 2 ≤7✓ [0,0] 1\n2 1 a[1] = 1 1 3 ≤7✓ [0,1] 2\n3 2 a[2] = 3 3 6 ≤7✓ [0,2] 3\n4 3 a[3] = 5 5 11 11>7×:ltăng0→1\n(sum= 9),1→2\n(sum= 8),2→3\n(sum= 5)\n[3,3] 1\n5 4 a[4] = 1 1 6 ≤7✓ [3,4] 2\n6 5 a[5] = 2 2 8 8>7×:ltăng3→4\n(sum= 3)\n[4,5] 2\nKết quả: Đoạn dài nhất là[0,2] ={2,1,3}có tổng 6, độ dài 3.\nCode hoàn chỉnh:\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\nlong long S;\ncin >> n >> S;\nvector<int> a(n);\nfor (int &x : a) cin >> x;\nlong long sum = 0;\nint l = 0, ans = 0;\nfor (int r = 0; r < n; r++) {\nsum += a[r]; // Thêm a[r] vào cửa sổ\nwhile (sum > S) { // Nếu tổng vượt quá S\nsum -= a[l]; // Loại a[l] ra\nl++; // Thu hẹp cửa sổ\n}\nans = max(ans, r - l + 1); // Cập nhật đáp án\n}\ncout << ans << endl;\n}\nPython\nn, S = map(int, input().split())\na = list(map(int, input().split()))\ntotal = 0\nl = 0\nans = 0\nfor r in range(n):\ntotal += a[r] # Thêm a[r] vào cửa sổ\nwhile total > S: # Nếu tổng vượt quá S\ntotal -= a[l] # Loại a[l] ra\nl += 1 # Thu hẹp cửa sổ\nans = max(ans, r - l + 1) # Cập nhật đáp án\nprint(ans)\nTại sao chỉO(n)?\nNhiều bạn lo lắng: \"Có vòngwhilebên trong vòngfor, không phảiO(n2)sao?\"\nKhông! Hãy nhìn biếnl: nó chỉ tăng, không bao giờ giảm. Trong suốt quá trình:\n• rđi từ0đếnn−1: tổng cộngnbước\n• lđi từ0đến tối đan−1: tổng cộng tối đanbước\nVậy tổng số phép tính làn+n= 2n=O(n). Mỗi phần tử được thêm vào cửa sổ đúng 1\nlần và bị loại ra đúng 1 lần.\nVí dụ 2: Đoạn con dài nhất không có phần tử trùng\nĐề bài:Cho mảnga= [1,3,2,3,4,1]. Tìm đoạn con liên tiếp dài nhất mà tất cả các\nphần tử đều khác nhau.\nÝ tưởng:Dùng set hoặc map để theo dõi các phần tử trong cửa sổ hiện tại. Khi thêm\na[r]vào mà nó đã có trong cửa sổ, thu hẹplcho đến khi loại bỏ phần tử trùng.\nMô phỏng:\nr a[r] CỬA SỔ TRƯỚC TRÙNG? SAU KHI LOẠI ĐOẠN DÀI\n0 1 ∅ Không {1} [0,0] 1\n1 3 {1} Không {1,3} [0,1] 2\n2 2 {1,3} Không {1,3,2} [0,2] 3\n3 3 {1,3,2} Có (3!) Loại 1, loại 3→{2,3} [2,3] 2\n4 4 {2,3} Không {2,3,4} [2,4] 3\n5 1 {2,3,4} Không {2,3,4,1} [2,5] 4\nĐáp án: Đoạn[2,5] ={2,3,4,1}, dài 4.\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<int> a(n);\nfor (int &x : a) cin >> x;\nset<int> window;\nint l = 0, ans = 0;\nfor (int r = 0; r < n; r++) {\nwhile (window.count(a[r])) {\nwindow.erase(a[l]);\nl++;\n}\nwindow.insert(a[r]);\nans = max(ans, r - l + 1);\n}\ncout << ans << endl;\n}\nPython\nn = int(input())\na = list(map(int, input().split()))\nwindow = set()\nl = 0\nans = 0\nfor r in range(n):\nwhile a[r] in window:\nwindow.remove(a[l])\nl += 1\nwindow.add(a[r])\nans = max(ans, r - l + 1)\nprint(ans)\n4. Hai con trỏ ngược chiều\nDùng trên mảng đã sắp xếp để tìm cặp phần tử thỏa mãn điều kiện.\nÝ tưởng\nĐặt con trỏlở đầu mảng (phần tử nhỏ nhất) vàrở cuối mảng (phần tử lớn nhất). Dựa\nvào kết quả so sánh, quyết định di chuyểnlsang phải (tăng tổng) hoặcrsang trái (giảm\ntổng).\nVí dụ chi tiết: Two Sum trên mảng đã sắp xếp\nĐề bài:Cho mảng đã sắp xếpa= [1,3,5,7,10,12]vàx= 13. Tìm hai số có tổng bằng\nx.\nMô phỏng:\n• Bước 1:l= 0, r= 5→a[0] +a[5] = 1 + 12 = 13 =x→TÌM THẤY!✓\nỞ ví dụ này ta may mắn tìm thấy ngay. Hãy thử vớix= 8:\n• Bước 1:l= 0, r= 5→a[0] +a[5] = 1 + 12 = 13>8→giảmr\n• Bước 2:l= 0, r= 4→a[0] +a[4] = 1 + 10 = 11>8→giảmr\n• Bước 3:l= 0, r= 3→a[0] +a[3] = 1 + 7 = 8 =x→TÌM THẤY!✓\nThử vớix= 20:\n• Bước 1:l= 0, r= 5→1 + 12 = 13<20→tăngl\n• Bước 2:l= 1, r= 5→3 + 12 = 15<20→tăngl\n• Bước 3:l= 2, r= 5→5 + 12 = 17<20→tăngl\n• Bước 4:l= 3, r= 5→7 + 12 = 19<20→tăngl\n• Bước 5:l= 4, r= 5→10 + 12 = 22>20→giảmr\n• Bước 6:l= 4, r= 4→l≥r→KHÔNG TÌM THẤY×\nTại sao cách này đúng? (Rất quan trọng!)\nGiả sử mảng đã sort tăng dần. Ta cần tìma[i] +a[j] =xvớii < j.\n• Nếua[l] +a[r] =x: tìm thấy!\n• Nếua[l] +a[r]< x: ta cần tổng lớn hơn. Vìa[r]đã là số lớn nhất ta đang xét, cách\nduy nhất là tănga[l]→tăngl. Lúc này, ta loại bỏa[l]- nhưnga[l]kết hợp với\nbất kỳa[j]nào (j≤r) đều cho tổng≤a[l] +a[r]< x, nêna[l]không thể là phần\ntử trái trong đáp án.\n• Nếua[l] +a[r]> x: tương tự, giảmr.a[r]kết hợp với bất kỳa[i]nào (i≥l) đều\ncho tổng≥a[l] +a[r]> x.\nMỗi bước loại bỏ đúng một phần tử mà chắc chắn không nằm trong đáp án→ta\nkhông bỏ sót nghiệm!\nCode hoàn chỉnh\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, x;\ncin >> n >> x;\nvector<int> a(n);\nfor (int &v : a) cin >> v;\nsort(a.begin(), a.end());\nint l = 0, r = n - 1;\nwhile (l < r) {\nint s = a[l] + a[r];\nif (s == x) {\ncout << a[l] << \" \" << a[r] << endl;\nbreak;\n} else if (s < x) {\nl++;\n} else {\nr--;\n}\n}\nif (l >= r) cout << \"IMPOSSIBLE\" << endl;\n}\nPython\nn, x = map(int, input().split())\na = list(map(int, input().split()))\na.sort()\nl, r = 0, n - 1\nfound = False\nwhile l < r:\ns = a[l] + a[r]\nif s == x:\nprint(a[l], a[r])\nfound = True\nbreak\nelif s < x:\nl += 1\nelse:\nr -= 1\nif not found:\nprint(\"IMPOSSIBLE\")\n5. Trộn hai mảng đã sắp xếp (Merge)\nĐây là thao tác nền tảng trong Merge Sort và cũng là dạng hai con trỏ.\nÝ tưởng\nCho hai mảng đã sắp xếpAvàB. Dùng hai con trỏi(trênA) vàj(trênB). Tại mỗi\nbước, so sánhA[i]vàB[j], lấy phần tử nhỏ hơn đưa vào kết quả.\nVí dụ chi tiết\nA= [1,4,7,9],B= [2,3,5,8]\n• Bước 1:i= 0, j= 0→A[0] = 1< B[0] = 2→lấy 1,i+ +→result= [1]\n• Bước 2:i= 1, j= 0→A[1] = 4> B[0] = 2→lấy 2,j+ +→result= [1,2]\n• Bước 3:i= 1, j= 1→A[1] = 4> B[1] = 3→lấy 3,j+ +→result= [1,2,3]\n• Bước 4:i= 1, j= 2→A[1] = 4< B[2] = 5→lấy 4,i+ +→result= [1,2,3,4]\n• Bước 5:i= 2, j= 2→A[2] = 7> B[2] = 5→lấy 5,j+ +→result= [1,2,3,4,5]\n• Bước 6:i= 2, j= 3→A[2] = 7< B[3] = 8→lấy 7,i++→result= [1,2,3,4,5,7]\n• Bước 7:i= 3, j= 3→A[3] = 9> B[3] = 8→lấy 8,j+ +→result=\n[1,2,3,4,5,7,8]\n• Bước 8:jhết→lấyA[3] = 9→result= [1,2,3,4,5,7,8,9]\nCode hoàn chỉnh\nC++\nvector<int> merge_sorted(vector<int> &A, vector<int> &B) {\nint i = 0, j = 0;\nvector<int> result;\nwhile (i < (int)A.size() && j < (int)B.size()) {\nif (A[i] <= B[j]) result.push_back(A[i++]);\nelse result.push_back(B[j++]);\n}\nwhile (i < (int)A.size()) result.push_back(A[i++]);\nwhile (j < (int)B.size()) result.push_back(B[j++]);\nreturn result;\n}\nPython\ndef merge_sorted(A, B):\ni, j = 0, 0\nresult = []\nwhile i < len(A) and j < len(B):\nif A[i] <= B[j]:\nresult.append(A[i])\ni += 1\nelse:\nresult.append(B[j])\nj += 1\nwhile i < len(A):\nresult.append(A[i])\ni += 1\nwhile j < len(B):\nresult.append(B[j])\nj += 1\nreturn result\nĐộ phức tạp:O(n+m)- mỗi phần tử được xét đúng 1 lần.\n6.Bàitoánmẫuhoànchỉnh:FerrisWheel(CSES1090)\nĐề bài:Cóntrẻ em muốn lên đu quay. Trẻ thứinặngw i kg. Mỗi cabin chứa tối đa 2\ntrẻ và chịu được tối đaxkg. Tìm số cabin ít nhất.\nInput:4 10và7 2 3 9.Output:3.\nPhân tích:Ghép trẻ nặng nhất với trẻ nhẹ nhất. Nếu không ghép được, trẻ nặng nhất\nngồi một mình. Đây là bài hai con trỏ ngược chiều sau khi sắp xếp!\nMô phỏng vớiw= [2,3,7,9](sau sort),x= 10:\n• Bước 1:l= 0, r= 3→2 + 9 = 11>10→Trẻ 9kg ngồi một mình,r−−→\ncabins= 1\n• Bước 2:l= 0, r= 2→2 + 7 = 9≤10→Ghép (2,7),l+ +, r−−→cabins= 2\n• Bước 3:l= 1, r= 1→l==r→Trẻ 3kg ngồi một mình→cabins= 3\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, x;\ncin >> n >> x;\nvector<int> w(n);\nfor (int &v : w) cin >> v;\nsort(w.begin(), w.end());\nint l = 0, r = n - 1, cabins = 0;\nwhile (l <= r) {\nif (l == r) { cabins++; break; }\nif (w[l] + w[r] <= x) { l++; r--; }\nelse { r--; }\ncabins++;\n}\ncout << cabins << endl;\n}\nPython\nn, x = map(int, input().split())\nw = list(map(int, input().split()))\nw.sort()\nl, r = 0, len(w) - 1\ncabins = 0\nwhile l <= r:\nif l == r:\ncabins += 1\nbreak\nif w[l] + w[r] <= x:\nl += 1\nr -= 1\nelse:\nr -= 1\ncabins += 1\nprint(cabins)\n7. Sai lầm thường gặp và mẹo\nSai lầm 1: Quên xử lý cửa sổ rỗng\nKhil > r,r−l+ 1cho ra số âm. Đảm bảolkhông vượtr+ 1.\nSai lầm 2: Không duy trì bất biến (invariant)\nC++\n// SAI: cập nhật đáp án TRƯỚC khi kiểm tra\nfor (int r = 0; r < n; r++) {\nsum += a[r];\nans = max(ans, r - l + 1);\nwhile (sum > S) sum -= a[l++];\n}\n// ĐÚNG: kiểm tra trước, cập nhật sau\nfor (int r = 0; r < n; r++) {\nsum += a[r];\nwhile (sum > S) sum -= a[l++];\nans = max(ans, r - l + 1);\n}\nPython\n# SAI: cập nhật đáp án TRƯỚC khi kiểm tra\nfor r in range(n):\ntotal += a[r]\nans = max(ans, r - l + 1)\nwhile total > S:\ntotal -= a[l]\nl += 1\n# ĐÚNG: kiểm tra trước, cập nhật sau\nfor r in range(n):\ntotal += a[r]\nwhile total > S:\ntotal -= a[l]\nl += 1\nans = max(ans, r - l + 1)\nSai lầm 3: Dùng two pointers khi không có tính đơn điệu\nNếu mảng có số âm, \"tổng đoạn≤S\"không có tính đơn điệu và kỹ thuật này sẽ cho kết\nquả sai.\nMẹo 1: Đếm thay vì tìm max\nĐếm số đoạn con thỏa mãn: với mỗi *r*, cộngr−l+ 1(tất cả đoạn[l, r],[l+ 1, r], . . . ,[r, r]).\nMẹo 2: Dùng map/set cho điều kiện phức tạp\nKhi điều kiện là \"tất cả phần tử khác nhau\", \"max−min≤k\", v.v., dùng *map*,set, hoặc\nmultisetđể theo dõi cửa sổ.\n8. Tổng kết\nDẠNG KHI NÀO DÙNG ĐỘ PHỨC TẠP\nCùng chiều (Sliding Window) Tìm đoạn conthỏa mãnđiều kiệnđơn điệu O(n)\nNgược chiều Tìm cặp trên mảng đã sort O(n)\nMerge Trộn/so sánh hai mảng đã sort O(n+m)",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b5-p1-ferris-wheel",
            "title": "Ferris Wheel",
            "fileName": "CSES - Ferris Wheel _ Bánh xe Ferris - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Ferris Wheel. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/CSES - Ferris Wheel _ Bánh xe Ferris - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n đứa trẻ muốn đi đến một bánh xe Ferris, và nhiệm vụ của bạn là tìm một chiếc gondola\ncho mỗi đứa trẻ.\nMỗi chiếc gondola có thể có một hoặc hai đứa trẻ trong đó, và ngoài ra, tổng trọng lượng\ntrong một chiếc gondola không được vượt quá x. Bạn biết cân nặng của mỗi đứa trẻ.\nSố lượng chiếc gondola tối thiểu cần thiết cho những đứa trẻ là bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên chứa hai số nguyên n và x: số lượng đứa trẻ và trọng lượng tối\nđa cho phép\n• Dòng tiếp theo chứa n số nguyên p 1, p 2, …, p n: trọng lượng của mỗi đứa trẻ\n\nOutput\n• In một số nguyên: số lượng gondola tối thiểu\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x ≤ 10^9\n• 1 ≤ p i ≤ x",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 10\n7 2 3 9",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 10\n7 2 3 9",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p2-playlist",
            "title": "Playlist",
            "fileName": "CSES - Playlist _ Danh sách phát - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Playlist. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/CSES - Playlist _ Danh sách phát - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho biết danh sách phát của một đài phát thanh kể từ khi thành lập. Danh sách phát có tổng\ncộng n bài hát.\nDãy các bài hát liên tiếp dài nhất, mà mỗi bài trong đó đều độc nhất là dãy nào?\n\nInput\n• Dòng đầu vào đầu tiên chứa một số nguyên n: số lượng bài hát\n• Dòng tiếp theo có n số nguyên k 1, k 2, …, k n: mã số của mỗi bài hát\n\nOutput\n• In độ dài của dãy dài nhất mà mỗi bài hát là duy nhất\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ k i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n1 2 1 3 2 7 4 2",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n1 2 1 3 2 7 4 2",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p3-sum-of-three-values",
            "title": "Sum of Three Values",
            "fileName": "CSES - Sum of Three Values _ Tổng ba giá trị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Sum of Three Values. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/CSES - Sum of Three Values _ Tổng ba giá trị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một mảng gồm n số nguyên và nhiệm vụ của bạn là tìm ba giá trị (tại các vị trí\nphân biệt) có tổng là x.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và x: kích thước mảng và tổng mong muốn\n• Dòng thứ hai có n số nguyên a 1, a 2, …, a n: các giá trị của mảng\n\nOutput\n• In ba số nguyên: vị trí của các giá trị. Nếu có một số lời giải, bạn có thể in bất kỳ lời giải\nnào trong số đó. Nếu không có lời giải nào, in IMPOSSIBLE\n\nScoring\n• 1 ≤ n ≤ 5000\n• 1 ≤ x, a i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 8\n2 7 5 1",
            "sampleOutput": "1 3 4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 8\n2 7 5 1",
                "output": "1 3 4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p4-sum-of-two-values",
            "title": "Sum of Two Values",
            "fileName": "CSES - Sum of Two Values _ Tổng hai giá trị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Sum of Two Values. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/CSES - Sum of Two Values _ Tổng hai giá trị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một mảng gồm n số nguyên và nhiệm vụ của bạn là tìm hai giá trị (tại các vị trí\nphân biệt) có tổng là x.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và x: kích thước mảng và tổng mong muốn\n• Dòng thứ hai có n số nguyên a 1, a 2, …, a n: các giá trị của mảng\n\nOutput\n• In hai số nguyên: vị trí của các giá trị. Nếu có một số lời giải, bạn có thể in bất kỳ lời giải\nnào trong số đó. Nếu không có lời giải nào, in IMPOSSIBLE\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x, a i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 8\n2 7 5 1",
            "sampleOutput": "2 4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 8\n2 7 5 1",
                "output": "2 4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p5-d-y-con-min-max",
            "title": "Dãy con min max",
            "fileName": "Dãy con min max - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "977MB",
            "point": 900,
            "preview": "Bài toán Dãy con min max. Giới hạn thời gian 1.0s, bộ nhớ 977MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Dãy con min max - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy gồm n số nguyên A = (a 1, a 2, …, a n). Ta định nghĩa: đoạn con của dãy A là\nmột dãy các phần tử liên tiếp nhau thuộc A. Hoặc có thể viết (a i, a i + 1, …, a j) là một đoạn\ncon của A với i ≤ j. Độ dài của đoạn con được tính là số phần tử của đoạn con đó, ví dụ,\nđoạn con trên có độ dài là j − i + 1.\nYêu cầu: Tìm một đoạn con có độ dài ngắn nhất chứa cả số lớn nhất và số nhỏ nhất của dãy\nA.\n\nInput\n• Dòng đầu chứa số nguyên dương n (1 ≤ n ≤ 10^5).\n• Dòng tiếp theo chứa n số nguyên a 1, a 2, …., a n.\n\nOutput\n• Một số duy nhất là độ dài của đoạn con tìm được thỏa mãn yêu cầu đề bài.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n1 3 6 2 8 1 3 8",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n1 3 6 2 8 1 3 8",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p6-two-pointer-1a",
            "title": "Two pointer 1A",
            "fileName": "Two pointer 1A - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Two pointer 1A. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Two pointer 1A - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có 2 mảng số nguyên không âm được sắp xếp theo thứ tự không giảm a gồm n phần tử\nvà b gồm m phần tử.\nHãy ghép a và b thành một mảng số nguyên c gồm n + m phần tử.\nHãy cho biết mảng c theo thứ tự không giảm.\nConstants\n• 1 ≤ n, m ≤ 10^5\n• 0 ≤ a i, b i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 7\n1 6 9 13 18 18\n2 3 8 13 15 21 25",
            "sampleOutput": "1 2 3 6 8 9 13 13 15 18 18 21 25",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 7\n1 6 9 13 18 18\n2 3 8 13 15 21 25",
                "output": "1 2 3 6 8 9 13 13 15 18 18 21 25"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p7-two-pointer-1b",
            "title": "Two pointer 1B",
            "fileName": "Two pointer 1B - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Two pointer 1B. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Two pointer 1B - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có 2 mảng số nguyên không âm được sắp xếp theo thứ tự không giảm a gồm n phần tử\nvà b gồm m phần tử.\nMảng c gồm m phần tử được xác định như sau:\nc i = số phần tử trong mảng a có giá trị nhỏ hơn b i\nHãy xác định mảng c\nConstants\n• 1 ≤ n, m ≤ 10^5\n• 0 ≤ a i, b i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 7\n1 6 9 13 18 18\n2 3 8 13 15 21 25",
            "sampleOutput": "1 1 2 3 4 6 6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 7\n1 6 9 13 18 18\n2 3 8 13 15 21 25",
                "output": "1 1 2 3 4 6 6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p8-two-pointer-1c",
            "title": "Two pointer 1C",
            "fileName": "Two pointer 1C - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Two pointer 1C. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Two pointer 1C - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có 2 mảng số nguyên không âm được sắp xếp theo thứ tự không giảm a gồm n phần tử\nvà b gồm m phần tử.\nĐếm số cặp (i, j) sao cho a i = b j\n1 ≤ n, m ≤ 10^5\n0 ≤ a i, b i ≤ 10^9\n\nInput\n8 7\n1 1 3 3 3 5 8 8\n1 3 3 4 5 5 5\n\nOutput\n11",
            "hasTestCases": false,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "",
            "sampleOutput": "",
            "testCases": [],
            "totalTests": 0
          },
          {
            "id": "c1-b5-p9-t-m-c-p-s",
            "title": "Tìm cặp số",
            "fileName": "Tìm cặp số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 900,
            "preview": "Bài toán Tìm cặp số. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Tìm cặp số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng số nguyên A có N phần tử, mảng này đã được sắp xếp tăng dần. Hãy tìm vị\ntrí của hai phần tử khác nhau bất kỳ sao cho tổng của chúng có giá trị là X. Nếu trong dãy\nA không tồn tại hai phần tử khác nhau có tổng là X thì in ra \"No solution\".\n\nInput\n• Dòng đầu chứa 2 số nguyên N và X.\n• Dòng tiếp theo chứa N số nguyên A_i.\n\nOutput\n• Hai vị trí i và j khác nhau sao cho tổng ở hai vị trí này có giá là X. In vị trí phần tử nhỏ\nhơn trước phần tử lớn hơn.\n• Nếu không tồn tại in ra \"No solution\".\nConstants\n• 2 ≤ N ≤ 10^6 và 0 ≤ A_i, X ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 16\n2 3 5 7 9 12",
            "sampleOutput": "4 5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 16\n2 3 5 7 9 12",
                "output": "4 5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p10-xin-ch-o-2",
            "title": "Xin chào 2",
            "fileName": "Xin chào 2 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Xin chào 2. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Xin chào 2 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nam là người thích chat với bạn bè trên Internet. Cậu ấy đã lập ra một phòng chat với điều\nkiện rằng trước khi vào phòng chat, mọi người phải chào hỏi trước.\nMột câu chào được định nghĩa rằng, câu chào đó phải là một xâu kí tự, chỉ gồm các chữ cái,\nkhông chứa kí tự trắng, sao cho khi xóa đi một số chữ cái, nó sẽ trở thành một xâu từ khóa\nKey cho trước, tất nhiên là sẽ không được phép tráo đổi vị trí các chữ cái, mà chỉ được xóa\nbớt một số chữ cái.\nVí dụ: Với từ khóa là Key là x_inchao khi Bình muốn vào phòng chat, Bình gõ\nchox_iancaihao thì hệ thống sẽ xem xét xâu này và sẽ tự động loại bỏ các chữ cái để trở\nthành từ x_inchao. Như vậy Bình được vào phòng chat.\nNhưng khi Bình gõ chox_ian, hệ thống không thể làm cách nào xóa bớt chữ cái để trở\nthành từ x_inchao được. Như vậy, Bình không được vào phòng chat.\nYêu cầu: Cho từ khóa Key và N câu chào, hãy xác định xem câu chào nào được chấp nhận?\n\nInput\n• Dòng thứ nhất chứa số nguyên dương N (N ≤ 100)\n• Dòng thứ hai chứa từ khóa Key (có độ dài ≤ 1 0 4)\n• N dòng tiếp theo, mỗi dòng chứa xâu chữ cái mà Bình định gõ (có độ dài ≤ 10^6).\n\nOutput\n• Gồm N dòng, mỗi dòng tương ứng với câu chào, câu chào được đồng ý xuất YES, còn\nkhông, xuất NO.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\nhello\nahhellllloou\nhlelo\nhelhcludoo\nHelhcLudoo",
            "sampleOutput": "YES\nNO\nYES\nNO",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\nhello\nahhellllloou\nhlelo\nhelhcludoo\nHelhcLudoo",
                "output": "YES\nNO\nYES\nNO"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b5-p11-m-c-p",
            "title": "Đếm cặp",
            "fileName": "Đếm cặp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Đếm cặp. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 5/Đếm cặp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một ngày lướt fb, TN thấy một đôi couple chia sẻ bài bói toán online, rằng đôi couple kia hợp\nnhau thế nào, yêu nhau ra sao, vân vân và mây mây. Tò mò không biết âm dương ngũ hành,\nyêu nhau hợp tình nghĩa không, TN cũng bảo Ami cùng mình tham gia bói toán online.\nNhưng Ami đời nào tin những thuật toán tào lao ấy? “Bởi vì không một thuật toán nào định\nnghĩa được tình yêu cả” - Ami nói. Cậu bèn dẫn TN đến cặp thầy bói nổi danh thiên hạ -\nzerolifes và huy_yeu_minh_nghia. Hai lúc nào cũng hơn một mà:)).\nSau khi xem chỉ tay, tướng số, ngũ hành, chiêm tinh, zerolifes không nói không rằng. Anh đọc\nliên tục 1 câu thần chú chỉ toàn những con số vô nghĩa nhưng không giảm. Đột nhiên zerolife\ndừng lại, huy_yeu_minh_nghia hét lên một số:”30”. “Nhưng 30 là gì ? Không lẽ 2 vị này cao\nthâm đến mức biết ngày mình và TN quen nhau sao ?”, Ami thầm nghĩ, “Hay 30 là số tỉ USD\nmà sau này mình tậu được ? Không, không thể ít như vậy được.” Không thể kìm nén, Ami\nthỉnh cầu 2 vị cao nhân. Zerolifes nói:”Đơn giản thôi, âm dương hòa hợp, trong cương có\nnhu, trong nhu có cương, cậu hãy ghi nhớ dãy số của ta và số mà huy_yeu_minh_nghia vừa\nđọc, hãy đếm xem trong dãy số của ta có bao nhiêu cặp số có tổng đúng bằng k. Nếu số cặp\ncàng lớn, khả năng hai người bền lâu càng nhiều.” Tất nhiên, Ami không dám làm ngay lập\ntức, vì sợ sự thật có thể làm cậu suy sụp.\nTóm lại, có một dãy gồm n số nguyên dương không giảm a 1, a 2, a 3, …, a n và một số k,\nAmi muốn đếm số cặp (i, j) không trùng nhau mà a i + a j = k, lưu ý rằng (i, j) và (j, i)\nđược tính là 1 cặp.\n\nInput\n• Dòng đầu gồm 2 số nguyên dương n và k (n ≤ 10^6, k ≤ 10^9).\n• Dòng thứ hai gồm n số nguyên dương không giảm a 1, a 2, a 3, …, a n (a i ≤ 10^9).\n\nOutput\n• Hãy in ra một số nguyên là kết quá của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 6\n1 1 5 5",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 6\n1 1 5 5",
                "output": "4"
              },
              {
                "id": "Test 2",
                "input": "6 5\n1 1 1 4 5 5",
                "output": "3"
              }
            ],
            "totalTests": 2
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-6",
        "order": 6,
        "title": "Thuật toán Tham lam (Greedy)",
        "theoryPdfFileName": "chapter 2 lesson 6 - Tham lam.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/chapter 2 lesson 6 - Tham lam.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Thuật toán Tham lam (Greedy) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Tham lam (Greedy)\nNội dung\n1. Tham lam là gì?\n• Ví dụ đời thường: Đổi tiền\n• Tại sao gọi là \"tham lam\"?\n2. Khi nào tham lam đúng, khi nào sai?\n• Khi tham lam ĐÚNG:\n• Khi tham lam SAI - Ví dụ phản chứng:\n• Bài học rút ra:\n3. Bài toán kinh điển: Activity Selection (Chọn hoạt động)\n• Đề bài\n• Ví dụ\n• Thử các chiến lược tham lam khác nhau\n• Tại sao \"kết thúc sớm nhất\"là chiến lược đúng?\n• Code hoàn chỉnh (Movie Festival - CSES 1629):\n4. Dạng \"Sort rồi xử lý\"(Sort-then-Greedy)\n• Ví dụ: Hiệu hai số nhỏ nhất\n• Ví dụ: Ghép cặp với chênh lệch tối đa\n5. Kỹ thuật chứng minh: Exchange Argument (Lập luận hoán đổi)\n• Ý tưởng\n• Ví dụ đơn giản\n6. Bài toán mẫu hoàn chỉnh: Missing Coin Sum (CSES 2183)\n7. Các dạng tham lam phổ biến\n8. Sai lầm thường gặp và mẹo\n• Sai lầm 1: Giả định tham lam đúng mà không suy nghĩ kỹ\n• Sai lầm 2: Sort sai tiêu chí\n• Sai lầm 3: Quên edge case\n• Mẹo: Nếu không chắc, thử brute force trước\n9. Tổng kết\nChào mừng bạn đến với bài học về thuật toán tham lam (Greedy)! Đây là một trong\nnhững kỹ thuật \"đẹp\"nhất trong lập trình thi đấu - code thường ngắn gọn, chạy nhanh,\nnhưng đòi hỏi tư duy sắc bén để nhận ra lựa chọn đúng tại mỗi bước.\n1. Tham lam là gì?\nThuật toán tham lam là chiến lược giải bài toán bằng cách: tại mỗi bước, đưa ra lựa chọn\ntốt nhất lúc đó (lựa chọn \"tham lam\") mà không nhìn lại, không xem xét các bước tương\nlai.\nVí dụ đời thường: Đổi tiền\nBạn cần trả 37.000đ bằng các tờ tiền mệnh giá 20.000đ, 10.000đ, 5.000đ, 2.000đ, 1.000đ.\nBạn muốn dùng ít tờ nhất.\nCách bạn làm tự nhiên:\n1. Lấy 1 tờ 20.000đ→còn 17.000đ\n2. Lấy 1 tờ 10.000đ→còn 7.000đ\n3. Lấy 1 tờ 5.000đ→còn 2.000đ\n4. Lấy 1 tờ 2.000đ→còn 0đ\nTổng: 4 tờ. Đây chính là chiến lược tham lam: luôn chọn tờ tiền lớn nhất có thể.\nTại sao gọi là \"tham lam\"?\nVì thuật toán luôn \"tham\"- luôn lấy cái tốt nhất ngay lập tức, không cần suy nghĩ lâu\ndài. Giống như một người tham ăn: thấy miếng nào ngon nhất thì lấy trước!\n2. Khi nào tham lam đúng, khi nào sai?\nCâu hỏi quan trọng nhất: Không phải lúc nào tham lam cũng cho đáp án đúng!\nKhi tham lam ĐÚNG:\nVới hệ tiền tệ thông thường (1, 2, 5, 10, 20, 50, 100, 200, 500...), lấy tờ lớn nhất luôn cho\nđáp án tối ưu. Đây là nhờ tính chất đặc biệt: mỗi mệnh giá lớn hơn đều là bội hoặc gần\nbội của mệnh giá nhỏ hơn.\nKhi tham lam SAI - Ví dụ phản chứng:\nGiả sử các mệnh giá là: 1đ, 3đ, 4đ. Cần trả 6đ.\nTham lam: Lấy tờ lớn nhất trước:\n• 4đ→còn 2đ\n• 1đ→còn 1đ\n• 1đ→còn 0đ\n• Tổng: 3 tờ (4 + 1 + 1)\nTối ưu: 3đ + 3đ = 2 tờ!\nTham lam SAI vì lấy tờ 4đ đã \"đóng cánh cửa\"dẫn đến nghiệm tốt hơn. Để giải đúng\nbài đổi tiền tổng quát, ta cần quy hoạch động (DP) - bạn sẽ học ở bài sau.\nBài học rút ra:\nTham lam chỉ đúng khi ta có thể CHỨNG MINH nó đúng. Nếu\nkhông chắc, hãy dùng DP hoặc brute force.\n3. Bài toán kinh điển: Activity Selection (Chọn hoạt\nđộng)\nĐây là bài toán tham lam nổi tiếng nhất, xuất hiện trong hầu hết mọi sách giáo khoa.\nĐề bài\nCónbộ phim chiếu tại rạp. Bộ phim thứibắt đầu lúcs i và kết thúc lúcei. Bạn muốn\nxem nhiều bộ phim nhất, nhưng không thể xem hai phim cùng lúc (nếu phim A kết thúc\nlúct, bạn có thể xem phim B bắt đầu lúct).\nVí dụ\nInput: 4 phim:(1,2),(2,4),(1,5),(4,6)\nThời gian: 1 2 3 4 5 6\nPhim 1: [==]\nPhim 2: [====]\nPhim 3: [=========]\nPhim 4: [====]\nThử các chiến lược tham lam khác nhau\n• Chiến lược 1:Chọn phim bắt đầu sớm nhất→Phim 1(1-2), rồi Phim 2(2-4), Phim\n4(4-6)→3 phim. Nhưng chiến lược này thất bại nếu có phim(0,100)- phim dài\nchoán hết!\n• Chiến lược 2:Chọn phim ngắn nhất→Phim 1 (dài 1), Phim 2 (dài 2), Phim 4\n(dài 2)→3 phim. Cũng có phản ví dụ.\n• Chiến lược 3:Chọn phim kết thúc sớm nhất→Sort theo kết thúc:(1,2),(2,4),\n(1,5),(4,6).\n-Chọn(1,2). last_end= 2.\n-(2,4): bắt đầu2≥2→chọn! last_end= 4.\n-(1,5): bắt đầu1<4→bỏ.\n-(4,6): bắt đầu4≥4→chọn! last_end= 6.\nKết quả: 3 phim✓\nTại sao \"kết thúc sớm nhất\"là chiến lược đúng?\nTrực giác:Phim kết thúc sớm nhất \"tốn\"ít thời gian nhất→để lại nhiều thời gian\nnhất cho các phim còn lại→ta có thể chọn thêm nhiều phim hơn.\nChứng minh (tóm tắt):Giả sử nghiệm tối ưuO∗ không chọn phim kết thúc sớm nhất\nf. Phim đầu tiên trongO∗ kết thúc muộn hơnf. Ta thay phim đầu tiên đó bằngf→số\nphim không đổi, nhưng thời gian kết thúc sớm hơn→không ảnh hưởng các phim sau→\nnghiệm mới cũng tối ưu.\nCode hoàn chỉnh (Movie Festival - CSES 1629):\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<pair<int,int>> movies(n); // (end, start)\nfor (int i = 0; i < n; i++) {\nint s, e;\ncin >> s >> e;\nmovies[i] = {e, s}; // Lưu end trước để sort theo end\n}\nsort(movies.begin(), movies.end()); // Sort theo end tăng dần\nint count = 0, last_end = -1;\nfor (auto &[e, s] : movies) {\nif (s >= last_end) { // Phim này bắt đầu sau khi phim trước kết thúc\ncount++;\nlast_end = e;\n}\n}\ncout << count << endl;\n}\nPython\nn = int(input())\nmovies = []\nfor _ in range(n):\ns, e = map(int, input().split())\nmovies.append((e, s)) # (end, start)\nmovies.sort() # sort theo end tăng dần\ncount = 0\nlast_end = -1\nfor e, s in movies:\nif s >= last_end:\ncount += 1\nlast_end = e\nprint(count)\n4. Dạng \"Sort rồi xử lý\"(Sort-then-Greedy)\nRất nhiều bài tham lam bắt đầu bằng bước sắp xếp. Sau khi sort, ta xử lý từ trái sang\nphải theo một chiến lược nào đó.\nVí dụ: Hiệu hai số nhỏ nhất\nĐề bài:Cho mảngagồmnsố. Tìm hiệu nhỏ nhất giữa hai phần tử bất kỳ (tức\nmin|a i−a j|vớii̸=j).\nPhân tích:\n• Nếu duyệt tất cả cặp:O(n 2)→quá chậm với *n*lớn.\n• Nhận xét: Sau khi sắp xếp, hiệu nhỏ nhất chắc chắn nằm ở hai phần tử liền kề!\n• Tại sao? Nếua≤b≤c, thìc−a≥c−bvàc−a≥b−a. Vậy hiệuc−akhông\nbao giờ nhỏ hơn hiệu hai phần tử liền kề.\nC++\nsort(a.begin(), a.end());\nint min_diff = INT_MAX;\nfor (int i = 1; i < n; i++)\nmin_diff = min(min_diff, a[i] - a[i-1]);\nPython\na.sort()\nmin_diff = float(’inf’)\nfor i in range(1, n):\nmin_diff = min(min_diff, a[i] - a[i - 1])\nĐộ phức tạp:O(nlogn)cho sort+O(n)cho duyệt=O(nlogn).\nVí dụ: Ghép cặp với chênh lệch tối đa\nĐề bài:Cónhọc sinh cần đi taxi. Mỗi taxi chở tối đa 2 người. Hai người chở chung\nphải có chiều cao chênh lệch không quák. Tìm số taxi ít nhất.\nChiến lược tham lam:\n1. Sắp xếp theo chiều cao.\n2. Duyệt từ trái sang phải. Nếu hai người liên tiếp chênh lệch≤k→ghép cặp, nhảy\n2. Ngược lại→người hiện tại đi 1 mình, nhảy 1.\nTại sao đúng?Nếu ngườiicó thể ghép với ngườii+ 1(liền kề sau khi sort), thì đó là\nlựa chọn tốt nhất vì ghép với người xa hơn (i+ 2, i+ 3, . . .) sẽ \"lãng phí\"- ngườii+ 1\nmất cơ hội ghép cặp.\nC++\nsort(h.begin(), h.end());\nint taxis = 0;\nfor (int i = 0; i < n; ) {\nif (i + 1 < n && h[i + 1] - h[i] <= k) {\ni += 2; // ghép cặp\n} else {\ni += 1; // đi một mình\n}\ntaxis++;\n}\nPython\nh.sort()\ntaxis = 0\ni = 0\nwhile i < n:\nif i + 1 < n and h[i + 1] - h[i] <= k:\ni += 2 # ghép cặp\nelse:\ni += 1 # đi một mình\ntaxis += 1\n5. Kỹ thuật chứng minh: Exchange Argument (Lập\nluận hoán đổi)\nĐây là kỹ thuật chứng minh phổ biến nhất cho thuật toán tham lam.\nÝ tưởng\n1. Giả sử có một nghiệm tối ưuO∗ khác với nghiệm tham lamGtại một bước nào đó.\n2. Chỉ ra rằng: hoán đổi lựa chọn củaO∗ thành lựa chọn củaGtại bước đó→nghiệm\nkhông tệ hơn.\n3. Lặp lại cho tất cả các bước khác nhau→biếnO∗ thànhGmà không tệ hơn→G\ncũng tối ưu.\nVí dụ đơn giản\nBài toán:Cho dãya. Sắp xếp lại dãy để tổng|a 1−a 2|+|a 2−a 3|+···+|a n−1−a n|\nnhỏ nhất.\nTham lam:Sắp xếp dãy tăng dần.\nChứng minh bằng exchange argument:\n• Giả sử trong nghiệm tối ưuO∗, có vị tríimàO ∗[i]> O ∗[i+ 1](hai phần tử liền kề\nngược thứ tự).\n• Hoán đổiO ∗[i]vàO ∗[i+ 1].\n• Có thể chứng minh rằng tổng chênh lệch không tăng.\n• Lặp lại (giống Bubble Sort)→biếnO ∗ thành dãy tăng dần→dãy tăng dần là tối\nưu.\nNói đơn giản: \"Nếu hoán đổi bất kỳ hai phần tử nào để gần với thứ tự tham lam hơn\nmà đáp án không tệ hơn, thì thứ tự tham lam là tối ưu.\"\n6. Bài toán mẫu hoàn chỉnh: Missing Coin Sum (CSES\n2183)\nĐề bài:Chonđồng xu với mệnh giác 1, c2, . . . , cn. Tìm tổng nhỏ nhất mà bạn không\nthể tạo ra từ một tập con các đồng xu.\nInput:5và2 9 1 2 7.Output:6.\nPhân tích:\n1. Sắp xếp các đồng xu tăng dần:[1,2,2,7,9].\n2. GọiSlà tổng lớn nhất mà ta đã có thể tạo ra (tức là mọi giá trị từ1đếnSđều tạo\nđược).\n3. Xét đồng xu tiếp theo có giá trịc:\n4. Nếuc≤S+ 1: ta có thể tạo mọi giá trị từ1đếnS+c. Cập nhậtS=S+c.\n5. Nếuc > S+ 1: ta không thể tạo giá trịS+ 1! Đáp án làS+ 1.\nMô phỏng với[1,2,2,7,9]:\nBƯỚC c STRƯỚC c≤S+ 1? SSAU\nBắt đầu - 0 - 0\n1 1 0 1≤1✓ 0 + 1 = 1\n2 2 1 2≤2✓ 1 + 2 = 3\n3 2 3 2≤4✓ 3 + 2 = 5\n4 7 5 7≤6? KHÔNG! Dừng lại\nĐáp án:S+ 1 = 5 + 1 = 6.\nKiểm tra: Với[1,2,2], ta tạo được: 1, 2, 1+2=3, 2+2=4, 1+2+2=5. Đúng là1đến5\nđều OK, nhưng6thì không.\nCode hoàn chỉnh:\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<long long> c(n);\nfor (auto &x : c) cin >> x;\nsort(c.begin(), c.end());\nlong long S = 0;\nfor (int i = 0; i < n; i++) {\nif (c[i] > S + 1) break;\nS += c[i];\n}\ncout << S + 1 << endl;\n}\nPython\nn = int(input())\nc = list(map(int, input().split()))\nc.sort()\nS = 0\nfor coin in c:\nif coin > S + 1:\nbreak\nS += coin\nprint(S + 1)\n7. Các dạng tham lam phổ biến\nDẠNG CHIẾN LƯỢC VÍ DỤ\nActivity Selection Sort theo thời gian kết thúc Movie Festival, lịch phòng\nhọp\nGhép cặp Sort rồi ghép nhỏ nhất với lớn nhấtFerris Wheel, taxi\nXây dựng xâu Ưu tiên ký tự nhỏ nhất/lớn nhất Xâu nhỏ nhất, xâu đối xứng\nPhân phối tài nguyên Sort theo nhu cầu, phân phối lần\nlượt\nApartments, phân chia\nXây dựng số Chọn chữ số tối ưu tại mỗi vị trí Số lớn nhất chia hết cho 30\n8. Sai lầm thường gặp và mẹo\nSai lầm 1: Giả định tham lam đúng mà không suy nghĩ kỹ\nĐây là sai lầm phổ biến nhất! Bạn thấy bài \"có vẻ\"greedy, nhanh chóng code, nộp→\nWrong Answer.\nCách phòng tránh:\n• Trước khi code, thử ít nhất 3-5 ví dụ nhỏ bằng tay, bao gồm cả edge case.\n• Vớinnhỏ, viết brute force kiểm tra xem tham lam có cho cùng đáp án không.\n• Cố gắng nghĩ phản ví dụ trước khi code.\nSai lầm 2: Sort sai tiêu chí\nRất nhiều bài tham lam phụ thuộc vào cách sắp xếp. Sort theo tiêu chí sai→đáp án sai\nhoàn toàn.\nVí dụ Activity Selection:\n• Sort theo bắt đầu sớm nhất→SAI (phản ví dụ: phim dài choán hết)\n• Sort theo ngắn nhất→SAI (phản ví dụ: phim ngắn nằm giữa hai phim khác)\n• Sort theo kết thúc sớm nhất→ĐÚNG✓\nSai lầm 3: Quên edge case\n• Mảng rỗng hoặc chỉ có 1 phần tử\n• Tất cả phần tử giống nhau\n• Giá trị rất lớn (cầnlong long)\n• Không có nghiệm hợp lệ\nMẹo: Nếu không chắc, thử brute force trước\nVớin≤15, bạn có thể viết brute force (duyệt tất cả hoán vị, tất cả tập con) để tìm đáp\nán đúng, rồi so sánh với chiến lược tham lam trên nhiều test ngẫu nhiên.\n9. Tổng kết\nThuật toán tham lam là công cụ mạnh mẽ nhưng cần dùng cẩn thận:\n1.Nhận diện:Bài yêu cầu tối ưu (min/max), dữ liệu có thể sort, mỗi bước có lựa\nchọn \"hiển nhiên\".\n2.Kiểm tra:Thử nhiều ví dụ, tìm phản ví dụ.\n3.Chứng minh:Dùng exchange argument hoặc trực giác rõ ràng.\n4.Cài đặt:Thường rất ngắn gọn - sort + duyệt.\nNếu tham lam không đúng→chuyển sang DP (bài học tiếp theo) hoặc brute force\n(nếunnhỏ).",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b6-p1-bi-n-i-s",
            "title": "Biến đổi số",
            "fileName": "Biến đổi số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 900,
            "preview": "Bài toán Biến đổi số. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Biến đổi số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Vào một buổi sáng, rất tình cờ Nam nhìn thấy một số nguyên dương N trên đường từ nhà\nđến trường. Vì Nam rất thích số 30 nên Nam muốn biến đổi số N thành số M có dạng là số\nlớn nhất và là bội của số 30 bằng cách thay đổi vị trí của các chữ số trong số N mà Nam nhìn\nthấy.\nBạn hãy hỗ trợ Nam bằng cách viết chương trình để tìm số M (nếu nó tồn tại).\n\nInput\n• Gồm một dòng duy nhất chứa số nguyên N (N có tối đa là 10^5 chữ số).\n\nOutput\n• In ra số M tìm được. Nếu không tồn tại M thì in ra − 1.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "30",
            "sampleOutput": "30",
            "testCases": [
              {
                "id": "Test 1",
                "input": "30",
                "output": "30"
              },
              {
                "id": "Test 2",
                "input": "102",
                "output": "210"
              },
              {
                "id": "Test 3",
                "input": "3333333333333333333333333333",
                "output": "-1"
              }
            ],
            "totalTests": 3
          },
          {
            "id": "c1-b6-p2-bi-n-i-x-u-i-x-ng",
            "title": "Biến đổi xâu đối xứng",
            "fileName": "Biến đổi xâu đối xứng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 800,
            "preview": "Bài toán Biến đổi xâu đối xứng. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Biến đổi xâu đối xứng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu con độ dài n. Hãy tìm cách thay thế nhiều nhất 2 kí tự để thu được 1 xâu đối\nxứng.\n\nInput\nGồm T testcase (T ≤ 10), mỗi testcase nằm trên một dòng:\n• Mỗi dòng gồm 1 xâu s (∣ s ∣ ≤ 600)\n\nOutput\n• Hãy in ra T dòng, mỗi dòng là YES nếu có cách thực hiện yêu cầu trên, hoặc NO nếu\nkhông tồn tại cách nào.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "zcxxxc\nxxczxx\nzxcvbn",
            "sampleOutput": "YES\nYES\nNO",
            "testCases": [
              {
                "id": "Test 1",
                "input": "zcxxxc\nxxczxx\nzxcvbn",
                "output": "YES\nYES\nNO"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p3-missing-coin-sum",
            "title": "Missing Coin Sum",
            "fileName": "CSES - Missing Coin Sum _ Tổng xu bị thiếu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1200,
            "preview": "Bài toán Missing Coin Sum. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/CSES - Missing Coin Sum _ Tổng xu bị thiếu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có n đồng xu với các giá trị nguyên dương. Số tiền nhỏ nhất bạn không thể tạo bằng\ncách sử dụng một tập hợp con của các đồng xu là bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: số lượng đồng xu\n• Dòng thứ hai có n số nguyên x 1, x 2, …, x n: giá trị của mỗi đồng xu\n\nOutput\n• In một số nguyên: tổng tiền xu nhỏ nhất\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n2 9 1 2 7",
            "sampleOutput": "6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n2 9 1 2 7",
                "output": "6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p4-movie-festival",
            "title": "Movie Festival",
            "fileName": "CSES - Movie Festival _ Lễ hội phim - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Movie Festival. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/CSES - Movie Festival _ Lễ hội phim - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong một lễ hội phim, n bộ phim sẽ được chiếu. Bạn biết thời gian bắt đầu và kết thúc của\nmỗi bộ phim. Số lượng phim tối đa bạn có thể xem trọn vẹn là bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: số lượng bộ phim\n• Sau đó có n dòng mô tả các bộ phim. Mỗi dòng có hai số nguyên a và b: thời gian bắt\nđầu và kết thúc của một bộ phim\n\nOutput\n• In một số nguyên: số lượng phim tối đa\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ a < b ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n3 5\n4 9\n5 8",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n3 5\n4 9\n5 8",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p5-palindrome-reorder",
            "title": "Palindrome Reorder",
            "fileName": "CSES - Palindrome Reorder _ Sắp xếp lại xâu đối xứng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Palindrome Reorder. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/CSES - Palindrome Reorder _ Sắp xếp lại xâu đối xứng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu, nhiệm vụ của bạn là sắp xếp lại các kí tự của nó sao cho xâu đó trở thành một\nxâu đối xứng. Xâu đối xứng là xâu khi đọc xuôi hoặc ngược đều như nhau.\n\nInput\n• Một dòng duy nhất gồm một xâu độ dài n chỉ chứa các kí tự A - Z\n• 1 ≤ n ≤ 10^6\n\nOutput\n• In ra một xâu đối xứng chứa các kí tự của xâu ban đầu. Bạn có thể in ra bất kỳ đáp án\nthỏa mãn nào. Nếu không có đáp án, in NO SOLUTION.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "AAAACACBA",
            "sampleOutput": "AACABACAA",
            "testCases": [
              {
                "id": "Test 1",
                "input": "AAAACACBA",
                "output": "AACABACAA"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p6-c-u-h-i-s-99",
            "title": "Câu hỏi số 99",
            "fileName": "Câu hỏi số 99 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.5s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Câu hỏi số 99. Giới hạn thời gian 1.5s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Câu hỏi số 99 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Rùa có rất nhiều thắc mắc trong đầu. Hôm nay Rùa đặc biệt thắc mắc đến câu hỏi số 99, với\nnội dung như sau:\nCó một số nguyên dương N, số nguyên dương nhỏ nhất có tổng các chữ số của nó\n“\nbằng N là số mấy?\n\nInput\nSố nguyên dương N (1 ≤ N ≤ 10^6)\n\nOutput\nSố nguyên dương nhỏ nhất mà có tổng các chữ của nó bằng N.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10",
            "sampleOutput": "19",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "19"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p7-g-u-n-c",
            "title": "Gàu nước",
            "fileName": "Gàu nước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Gàu nước. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Gàu nước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Rùa có một cái xô nước đang chứa L lít nước. Rùa muốn lấy cái xô làm việc khác nên Rùa\nmuốn chuyển lượng nước sang những chiếc gàu nước.\nBiết rằng, nhà Rùa có vô tận những chiếc gàu thuộc 2 loại, loại chứa được 5 lít và loại chứa\nđược 2 lít. Hỏi, tổng số gàu ít nhất Rùa cần sử dụng để đong ít nhất L lít nước là bao nhiêu?\n\nInput\n• Một dòng duy nhất chứa một số nguyên L (1 ≤ L ≤ 10^{18})\n\nOutput\n• In ra tổng số gàu ít nhất Rùa cần sử dụng",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "27",
            "sampleOutput": "6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "27",
                "output": "6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p8-hi-u-hai-s-nh-nh-t-thta-s-n-tr-2022",
            "title": "Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022)",
            "fileName": "Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 400,
            "preview": "Bài toán Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Hiệu hai số nhỏ nhất (THTA Sơn Trà 2022) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho trước 4 số nguyên a, b, c, d. Chúng ta sẽ chọn các số nguyên x và y sao cho a ≤ x ≤ b\nvà c ≤ y ≤ d.\nYêu cầu: Tìm giá trị nhỏ nhất có thể có của x − y.\n\nInput\n• Dòng thứ nhất chưa 2 số nguyên a, b (0 < a, b ≤ 1 0 12).\n• Dòng thứ hai chưa 2 số nguyên c, d (0 < c, d ≤ 1 0 12).\n\nOutput\n• In ra giá x − y nhỏ nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "0\n10\n0\n10",
            "sampleOutput": "-10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "0\n10\n0\n10",
                "output": "-10"
              },
              {
                "id": "Test 2",
                "input": "10\n15\n7\n9",
                "output": "1"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b6-p9-mua-x-ng",
            "title": "Mua xăng",
            "fileName": "Mua xăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.5s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Mua xăng. Giới hạn thời gian 0.5s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Mua xăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn muốn mua N lít xăng, không thừa không thiếu. Tại một tiệm xăng nọ có hai phương\nthức mua xăng:\n• 1L: Mua 1 lít với giá a đồng\n• 2L: Mua 2 lít với giá b đồng\nCho ba số N, a, b. Hãy tính chi phí ít nhất cần để mua đúng chính xác N lít xăng.\n\nInput\n• Dòng đầu tiên chứa một số nguyên dương N (1 ≤ N ≤ 10^9)\n• Dòng thứ hai chứa hai số nguyên dương lần lượt là a và b (1 ≤ a, b ≤ 10^9)\n\nOutput\nIn ra một số nguyên, là số tiền tối thiểu cần để mua đúng chính xác N lít xăng tại tiệm xăng\nđó.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 1",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 1",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p10-s-a-i-m",
            "title": "Sửa điểm",
            "fileName": "Sửa điểm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Sửa điểm. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Sửa điểm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn là một hacker chuyên nghiệp, hiện tại đã một cách thành công xâm nhập vào cơ sở dữ\nliệu nơi chứa điểm của bạn. Điểm của bạn là một danh sách gồm N số thực, có giá trị trong\nđoạn [ 0.0, 10.0 ] và chỉ có một chữ số ở hàng thập phân.\nTrong khả năng của mình, bạn có thể sửa một số trong N số đó mà không bị phát hiện. Hỏi,\ntổng điểm sau khi đã sửa cao nhất có thể là bao nhiêu?\nLưu ý, không thể sửa một điểm quá 10.0 hoặc thấp hơn 0.0.\n\nInput\n• Dòng đầu tiên chứa một số nguyên dương N (1 ≤ N ≤ 10^5)\n• Dòng thứ hai chứa N số thực cách nhau bởi 1 ký tự khoảng trống, có giá trị trong đoạn\n[ 0.0, 10.0 ] và chỉ có một chữ số ở phần thập phân.\n\nOutput\n• Gồm một dòng, trên đó có một số thực là tổng điểm cao nhất có thể sau khi sửa 1 con\nđiểm.\n• Đáp án sẽ được chấp nhận đúng nếu output của bạn và output của bộ test lệch nhau\nkhông quá 0.0001.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n10.0 10.0 8.0",
            "sampleOutput": "30.0",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n10.0 10.0 8.0",
                "output": "30.0"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p11-xin-ch-o-1",
            "title": "Xin chào 1",
            "fileName": "Xin chào 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Xin chào 1. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Xin chào 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nam là người thích chat với bạn bè trên Internet. Cậu ấy đã lập ra một phòng chat với điều\nkiện rằng trước khi vào phòng chat, mọi người phải chào hỏi trước.\nMột câu chào được định nghĩa rằng, câu chào đó phải là một xâu kí tự, chỉ gồm các chữ cái,\nkhông chứa kí tự trắng, sao cho khi xóa đi một số chữ cái, nó sẽ trở thành từ hello, tất\nnhiên là sẽ không được phép tráo đổi vị trí các chữ cái, mà chỉ được xóa bớt một số chữ cái.\nVí dụ khi Bình muốn vào phòng chat, Bình gõ ahhellllloou thì hệ thống sẽ xem xét xâu\nnày và sẽ tự động loại bỏ các chữ cái để trở thành từ hello. Như vậy Bình được vào phòng\nchat.\nNhưng khi Bình gõ hlelo, hệ thống không thể làm cách nào xóa bớt chữ cái để trở thành\ntừ hello được. Như vậy, Bình không được vào phòng chat.\nYêu cầu: Cho N câu chào, hãy xác định xem câu chào nào được chấp nhận?\n\nInput\n• Dòng thứ nhất chứa số nguyên dương N (N ≤ 100)\n• N dòng tiếp theo, mỗi dòng chứa xâu chữ cái mà Bình định gõ, với chiều dài từ 1 đến\n100 chữ cái.\n\nOutput\n• Gồm N dòng, mỗi dòng tương ứng với câu chào, câu chào được đồng ý xuất YES, còn\nkhông, xuất NO.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\nahhellllloou\nhlelo\nhelhcludoo\nHelhcLudoo",
            "sampleOutput": "YES\nNO\nYES\nNO",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\nahhellllloou\nhlelo\nhelhcludoo\nHelhcLudoo",
                "output": "YES\nNO\nYES\nNO"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p12-x-u-min",
            "title": "Xâu min",
            "fileName": "Xâu min - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Xâu min. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Xâu min - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho xâu S chứa các kí tự 1 … 9 (∣ S ∣ ≤ 1000 kí tự) và số nguyên K (1 ≤ K ≤ ∣ S ∣). (∣ S ∣ độ\ndài của xâu S)\nYêu cầu: Chọn K kí tự trong xâu S theo thứ tự ban đầu để tạo thành số X gồm K chữ số có\ngiá trị bé nhất.\n\nInput\n• Dòng 1: Ghi số K.\n• Dòng 2: Ghi xâu S.\n\nOutput\n• Ghi một số duy nhất X.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n89678982",
            "sampleOutput": "672",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n89678982",
                "output": "672"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b6-p13-x-u-i-x-ng-hsg-20",
            "title": "Xâu đối xứng (HSG'20)",
            "fileName": "Xâu đối xứng (HSG'20) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 800,
            "preview": "Bài toán Xâu đối xứng (HSG'20). Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 6/Xâu đối xứng (HSG'20) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu ký tự S chỉ gồm các chữ cái thường a.. z. Xâu đối xứng là xâu kí tự mà khi\nviết từ phải qua trái hay từ trái qua phải thì xâu đó không thay đổi. Ví dụ: ma d am, i o i là các\nxâu đối xứng.\nYêu cầu: Với xâu ký tự S cho trước, hãy tính số ký tự bỏ đi ít nhất để các ký tự còn lại có thể\nsắp xếp được thành một xâu đối xứng.\nVí dụ:\n• Cho xâu aammmda thì cần bỏ 2 ký tự a và m thì xâu còn lại là ammda và xếp lại\nthành madam là xâu đối xứng.\n• Cho xâu aaabbcc thì không cần bỏ ký tự thì xâu đó xếp lại thành bcaaacb là xâu đối\nxứng.\n\nInput\n• Một xâu ký tự S có n ký tự (n ≤ 10^5) chỉ gồm các ký tự chữ cái thường a.. z.\n\nOutput\n• Một số nguyên là số lượng ký tự ít nhất cần bỏ để các ký tự còn lại có thể sắp xếp được\nthành một xâu đối xứng.\n\nScoring\n• Subtask 1: (30% số điểm): chỉ chứa 2 ký tự a và b.\n• Subtask 2: (30% số điểm): chỉ chứa 3 loại ký tự bất kỳ.\n• Subtask 3: (40% số điểm): trường hợp còn lại.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "aammmda",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "aammmda",
                "output": "2"
              },
              {
                "id": "Test 2",
                "input": "aaabbcc",
                "output": "0"
              }
            ],
            "totalTests": 2
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-7",
        "order": 7,
        "title": "Toán học cơ bản (Basic Math)",
        "theoryPdfFileName": "chapter 2 lesson 7 - Basic Math.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/chapter 2 lesson 7 - Basic Math.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Toán học cơ bản (Basic Math) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Toán cơ bản (Basic Math)\nToán học là nền tảng không thể thiếu trong lập trình thi đấu[cite: 1, 2]. Rất nhiều bài toán CP\nđòi hỏi kiến thức toán cơ bản: từ ước số, UCLN, BCNN, đến số nguyên tố, số học modular, và\nlũy thừa nhanh[cite: 1, 2]. Đừng lo nếu bạn chưa giỏi toán - bài học này sẽ đi từng bước một,\ntừ khái niệm đến code, với nhiều ví dụ minh họa chi tiết[cite: 1, 2]. Mỗi phần đều có giải thích\n\"tại sao\"chứ không chỉ \"làm sao\"![cite: 1, 2]\n1. Ước số (Divisors)\n1.1. Ước số là gì?\nƯớc số của một số nguyên dươngnlà số nguyên dươngdmànchia hết chod(tứcnmodd= 0\nhay nói cách khácn/dlà số nguyên)[cite: 1, 2].\nVí dụ: Các ước số của12là:1,2,3,4,6,12[cite: 1, 2].\nTa kiểm tra từng số:[cite: 1, 2]\nD 12÷D CHIA HẾT? LÀ ƯỚC?\n1 12 Có Ước\n2 6 Có Ước\n3 4 Có Ước\n4 3 Có Ước\n5 2.4 Không Không\n6 2 Có Ước\n7 1.71... Không Không\n12 1 Có Ước\nVậy12có6ước:{1,2,3,4,6,12}[cite: 1, 2].\n1.2. Cách liệt kê ước số \"ngây thơ-O(n)\nCách đơn giản nhất: thử tất cả số từ1đếnn[cite: 1, 2].\nC++\nvector < int > divisors ;\nfor ( int i = 1; i <= n ; i ++) {\nif ( n % i == 0) {\ndivisors . pu sh _ba ck ( i ) ;\n}\n}\nPython\ndivisors = []\nfor i in range (1 , n + 1) :\nif n % i == 0:\ndivisors . append ( i )\nCách này chạy được khinnhỏ (ví dụn≤10 6)[cite: 1, 2]. Nhưng nếun= 10 12 thì sao? Vòng\nlặp chạy10 12 lần - quá chậm![cite: 1, 2]\n1.3. Liệt kê ước số nhanh -O(√n)\nQuan sát cốt lõi: Nếudlà ước củan, thìn/dcũng là ước củan[cite: 1, 2]. Các ước luôn đi\nthành cặp:(d, n/d)[cite: 1, 2].\nVí dụ với *n*= 36:[cite: 1, 2]\n• 1×36 = 36→cặp(1,36)[cite: 1, 2]\n• 2×18 = 36→cặp(2,18)[cite: 1, 2]\n• 3×12 = 36→cặp(3,12)[cite: 1, 2]\n• 4×9 = 36→cặp(4,9)[cite: 1, 2]\n• 6×6 = 36←cặp(6,6)(d=n/d=\n√\n36)[cite: 1, 2]\nNhận xét: trong mỗi cặp(d, n/d), ít nhất một số≤√n[cite: 1, 2].\nChứng minh: Giả sử phản chứng: cảd >√nvàn/d > √n[cite: 1, 2]. Khi đó:\nd×(n/d)> √n×√n=n\nNhưngd×(n/d) =n, mâu thuẫn![cite: 1, 2]\nVì vậy, ta chỉ cần thửdtừ1đến√n[cite: 1, 2]. Mỗi khi tìm được ướcd, ta có luôn ướcn/d[cite:\n1, 2].\nC++\nvector < long long > divisors ;\nfor ( long long i = 1; i * i <= n ; i ++) {\nif ( n % i == 0) {\ndivisors . pu sh _ba ck ( i ) ;\nif ( i != n / i ) divisors . pu sh _ba ck ( n / i ) ;// tranh trung khi\ni = sqrt ( n )\n}\n}\nsort ( divisors . begin () , divisors . end () ) ;\nPython\ndivisors = []\ni = 1\nwhile i * i <= n :\nif n % i == 0:\ndivisors . append ( i )\nif i != n // i :\ndivisors . append ( n // i )\ni += 1\ndivisors . sort ()\nSo sánh tốc độ:[cite: 1, 2]\nN O(N)- DUYỆT HẾT O(\n√\nN)- DUYỆT CẶP\n106 106 bước 103 bước\n1012 1012 bước (TLE!) 106 bước (OK!)\n1.4. Đếm số ước\nNếu chỉ cần đếm mà không cần liệt kê:[cite: 1, 2]\nC++\nint c o u n t _ d i v i s o r s ( long long n ) {\nint count = 0;\nfor ( long long i = 1; i * i <= n ; i ++) {\nif ( n % i == 0) {\ncount ++;\nif ( i != n / i ) count ++;\n}\n}\nreturn count ;\n}\nPython\ndef c o u n t _ d i v i s o r s ( n ) :\ncount = 0\ni = 1\nwhile i * i <= n :\nif n % i == 0:\ncount += 1\nif i != n // i :\ncount += 1\ni += 1\nreturn count\n2. GCD (Ước chung lớn nhất) và LCM (Bội chung nhỏ\nnhất)\n2.1. GCD - Ước chung lớn nhất\ngcd(a, b)là số nguyên dương lớn nhất mà cảavàbđều chia hết[cite: 1, 2].\nVí dụ:gcd(12,18) = 6:[cite: 1, 2]\n• Ước của 12:{1,2,3,4,6,12}[cite: 1, 2]\n• Ước của 18:{1,2,3,6,9,18}[cite: 1, 2]\n• Ước chung:{1,2,3,6}[cite: 1, 2]\n• Lớn nhất:6[cite: 1, 2]\n2.2. Thuật toán Euclid - Tìm GCD siêu nhanh\nThay vì liệt kê tất cả ước, ta dùng thuật toán Euclid dựa trên tính chất:[cite: 1, 2]\ngcd(a, b) = gcd(b, amodb)\nLặp lại cho đến khib= 0, khi đógcd(a,0) =a[cite: 1, 2].\nChạy tay:gcd(48,18)[cite: 1, 2]\n• Bước 1:gcd(48,18)→48 mod 18 = 12→gcd(18,12)[cite: 1, 2]\n• Bước 2:gcd(18,12)→18 mod 12 = 6→gcd(12,6)[cite: 1, 2]\n• Bước 3:gcd(12,6)→12 mod 6 = 0→gcd(6,0)[cite: 1, 2]\n• Bước 4:gcd(6,0)→b= 0trả vềa= 6[cite: 1, 2]\nKết quả:gcd(48,18) = 6.[cite: 1, 2]\nCode\nC++ (recursive)\nint gcd ( int a , int b ) {\nreturn b == 0 ? a : gcd (b , a % b ) ;\n}\nC++ (iterative)\nint gcd ( int a , int b ) {\nwhile ( b != 0) {\nint temp = b ;\nb = a % b ;\na = temp ;\n}\nreturn a ;\n}\nPython\ndef gcd (a , b ) :\nwhile b != 0:\na , b = b , a % b\nreturn a\nTrong C++17 trở lên, có thể dùngstd::gcdtrong<numeric>[cite: 1, 2].\nĐộ phức tạp:O(log(min(a, b)))[cite: 1, 2].\n2.3. Ví dụ khác:gcd(252,105)\n• gcd(252,105):252 mod 105 = 42→gcd(105,42)[cite: 1, 2]\n• gcd(105,42):105 mod 42 = 21→gcd(42,21)[cite: 1, 2]\n• gcd(42,21):42 mod 21 = 0→gcd(21,0) = 21[cite: 1, 2]\nKết quả:gcd(252,105) = 21.[cite: 1, 2]\n2.4. LCM - Bội chung nhỏ nhất\nlcm(a, b)là số nguyên dương nhỏ nhất mà cảavàbđều là ước[cite: 1, 2].\nCông thức:[cite: 1, 2]\nlcm(a, b) = a×b\ngcd(a, b)\nVí dụ:[cite: 1, 2]\nlcm(12,18) = 12×18\n6 = 36\nCode - chú ý tránh tràn số[cite: 1, 2]\nC++\nlong long lcm ( long long a , long long b ) {\nreturn a / gcd (a , b ) * b ;// chia truoc , nhan sau\n}\n// SAI - co the tran so\nlong long lc m_ wr ong ( long long a , long long b ) {\nreturn a * b / gcd (a , b ) ;\n}\nPython\ndef lcm (a , b ) :\nreturn a // gcd (a , b ) * b\n3. Số nguyên tố (Prime Numbers)\n3.1. Số nguyên tố là gì?\nSố nguyên tố là số nguyên>1mà chỉ có đúng 2 ước:1và chính nó[cite: 1, 2].\nCác số nguyên tố đầu tiên:2,3,5,7,11,13,17,19,23,29, . . .[cite: 1, 2]\nLưu ý:[cite: 1, 2]\n• 1không phải số nguyên tố[cite: 1, 2].\n• 2là số nguyên tố chẵn duy nhất[cite: 1, 2].\n3.2. Kiểm tra số nguyên tố -O(√n)\nC++\nbool is_prime ( long long n ) {\nif ( n < 2) return false ;\nfor ( long long i = 2; i * i <= n ; i ++) {\nif ( n % i == 0) return false ;\n}\nreturn true ;\n}\nPython\ndef is_prime ( n ) :\nif n < 2:\nreturn False\ni = 2\nwhile i * i <= n :\nif n % i == 0:\nreturn False\ni += 1\nreturn True\n3.3. Phiên bản tối ưu hơn\nC++\nbool is_prime ( long long n ) {\nif ( n < 2) return false ;\nif ( n < 4) return true ;// 2 , 3\nif ( n % 2 == 0) return false ;\nif ( n % 3 == 0) return false ;\nfor ( long long i = 5; i * i <= n ; i += 6) {\nif ( n % i == 0 || n % ( i + 2) == 0) return false ;\n}\nreturn true ;\n}\nPython\ndef is_prime ( n ) :\nif n < 2:\nreturn False\nif n < 4:\nreturn True\nif n % 2 == 0 or n % 3 == 0:\nreturn False\ni = 5\nwhile i * i <= n :\nif n % i == 0 or n % ( i + 2) == 0:\nreturn False\ni += 6\nreturn True\nGiải thích: Mọi số nguyên tố lớn hơn3đều có dạng6k±1[cite: 1, 2].\n3.4. Ví dụ kiểm tra\nis_prime(17)?[cite: 1, 2]\n• i= 2: không chia hết[cite: 1, 2]\n• i= 3: không chia hết[cite: 1, 2]\n• i= 4: không chia hết[cite: 1, 2]\n• i= 5:5×5>17→dừng[cite: 1, 2]\n→17là số nguyên tố[cite: 1, 2].\nis_prime(15)?[cite: 1, 2]\n• i= 2: không chia hết[cite: 1, 2]\n• i= 3:15 mod 3 = 0→dừng[cite: 1, 2]\n→15không phải số nguyên tố[cite: 1, 2].\n4. Sàng Eratosthenes - Tìm tất cả số nguyên tố đếnN\n4.1. Ý tưởng\nTìm tất cả số nguyên tố đếnNtrongO(Nlog logN)[cite: 1, 2].\n4.2. Thuật toán\n1. Tạo mảngis_prime[0..N], ban đầu gántrue[cite: 1, 2].\n2. Gánis_prime[0] = is_prime[1] = false[cite: 1, 2].\n3. Duyệtitừ2đến\n√\nN[cite: 1, 2].\n4. Nếuis_prime[i] = true, đánh dấu các bội củaitừi 2 làfalse[cite: 1, 2].\n4.3. Minh họa vớiN= 30\nBan đầu, coi mọi số từ 2 đến 30 là nguyên tố[cite: 1, 2].\n• Bướci= 2: loại4,6,8,10, . . . ,30[cite: 1, 2]\n• Bướci= 3: loại thêm9,15,21,27[cite: 1, 2]\n• Bướci= 4: đã bị loại, bỏ qua[cite: 1, 2]\n• Bướci= 5: loại thêm25[cite: 1, 2]\nKết quả:{2,3,5,7,11,13,17,19,23,29}[cite: 1, 2].\n4.4. Code\nC++\nconst int MAXN = 10 00 00 00;\nbool is_prime [ MAXN + 1];\nvoid sieve () {\nfill ( is_prime , is_prime + MAXN + 1 , true ) ;\nis_prime [0] = is_prime [1] = false ;\nfor ( int i = 2; 1 LL * i * i <= MAXN ; i ++) {\nif ( is_prime [ i ]) {\nfor ( int j = i * i ; j <= MAXN ; j += i ) {\nis_prime [ j ] = false ;\n}\n}\n}\n}\nPython\ndef sieve ( n ) :\nis_prime = [ True ] * ( n + 1)\nif n >= 0:\nis_prime [0] = False\nif n >= 1:\nis_prime [1] = False\ni = 2\nwhile i * i <= n :\nif is_prime [ i ]:\nj = i * i\nwhile j <= n :\nis_prime [ j ] = False\nj += i\ni += 1\nreturn is_prime\nTại sao bắt đầu từi2? Vì các bội nhỏ hơni2 (i×2, i×3, . . . , i×(i−1)) đã bị loại bởi các số\nnhỏ hơn trước đó rồi[cite: 1, 2].\n5. Số học Modular (Modular Arithmetic)\n5.1. Tại sao cần modular?\nTrong CP, đáp án có thể rất lớn, nên đề thường yêu cầu in kết quả theo modulo109 + 7[cite:\n1, 2].\n109 + 7 = 1000000007\nĐây là một số nguyên tố rất hay dùng[cite: 1, 2].\n5.2. Các tính chất cơ bản\n• (a+b) modm= ((amodm) + (bmodm)) modm[cite: 1, 2]\n• (a×b) modm= ((amodm)×(bmodm)) modm[cite: 1, 2]\n• (a−b) modm= ((amodm)−(bmodm) +m) modm[cite: 1, 2]\nLưu ý: Phép chia không áp dụng kiểu này một cách trực tiếp[cite: 1, 2].\n5.3. Code\nC++\nconst int MOD = 1 e9 + 7;\nint add ( int a , int b ) {\nreturn (( long long ) a + b ) % MOD ;\n}\nint mul ( int a , int b ) {\nreturn (1 LL * a * b ) % MOD ;\n}\nint sub ( int a , int b ) {\nreturn (( long long ) a - b + MOD ) % MOD ;\n}\nPython\nMOD = 10**9 + 7\ndef add (a , b ) :\nreturn ( a + b ) % MOD\ndef mul (a , b ) :\nreturn ( a * b ) % MOD\ndef sub (a , b ) :\nreturn ( a - b + MOD ) % MOD\nLỗi phổ biến: quên éplong longtrong C++ khi nhân hai số lớn[cite: 1, 2].\n6. Lũy thừa nhanh (Fast Exponentiation)\n6.1. Bài toán\nTínha b modmvớibrất lớn, có thể tới10 18[cite: 1, 2].\nCách nhânavới chính nóblần làO(b), quá chậm[cite: 1, 2].\n6.2. Ý tưởng\n• Nếubchẵn:a b = (a b/2)2[cite: 1, 2]\n• Nếublẻ:a b =a×a b−1[cite: 1, 2]\nMỗi bước giảm số mũ đi khoảng một nửa, nên tổng thời gian làO(logb)[cite: 1, 2].\n6.3. Chạy tay:313 mod 100\nTa có:[cite: 1, 2]\n13 = (1101) 2 = 8 + 4 + 1\nNên:[cite: 1, 2]\n313 = 3 8×3 4×3 1\nTính lần lượt:[cite: 1, 2]\n• 3 1 mod 100 = 3[cite: 1, 2]\n• 3 2 mod 100 = 9[cite: 1, 2]\n• 3 4 mod 100 = 81[cite: 1, 2]\n• 3 8 mod 100 = 61[cite: 1, 2]\nRồi nhân các phần cần thiết:[cite: 1, 2]\n3×81×61 mod 100 = 23\nVậy3 13 mod 100 = 23[cite: 1, 2].\n6.4. Code\nC++\nlong long power ( long long a , long long b , long long m ) {\nlong long res = 1;\na %= m ;\nwhile ( b > 0) {\nif ( b % 2 == 1) {\nres = ( res * a ) % m ;\n}\na = ( a * a ) % m ;\nb /= 2;\n}\nreturn res ;\n}\nPython\ndef power (a , b , m ) :\nres = 1\na %= m\nwhile b > 0:\nif b % 2 == 1:\nres = ( res * a ) % m\na = ( a * a ) % m\nb //= 2\nreturn res\n6.5. Ví dụ sử dụng\nC++\ncout << power (2 , 100 , 1 0 0 0 0 0 0 0 0 7 ) << endl ;// 9 76 37 12 85\ncout << power (3 , 1000000 , 1 0 0 0 0 0 0 0 0 7 ) << endl ;\nPython\nprint ( power (2 , 100 , 1 0 0 0 0 0 0 0 0 7 ) )# 97 63 71 28 5\nprint ( power (3 , 1000000 , 1 0 0 0 0 0 0 0 0 7 ) )\n7. Tổng hợp: Các lỗi phổ biến\nLỖI HẬU QUẢ CÁCH TRÁNH\nDuyệt ước đếnnthay vì√n TLE khinlớn Dùngi×i≤n\nLCM: nhân trước chia sau Trànlong long a/gcd(a, b)×b\nQuên1không phải nguyên tố WA Kiểm tran <2\nSàng: bắt đầu từ2ithay vìi 2 Chậm hơn Bắt đầu từi×i\nModular: quên éplong longkhi nhân Trànint Dùng1LL * a * b\nModular: quên cộng MOD khi trừ Kết quả âm (a−b+MOD) modMOD\nLũy thừa: dùng vòng lặpO(b) TLE Dùng binary exponentiation\nTóm tắt bài học\nKHÁI NIỆM KỸ THUẬT CHÍNH ĐỘ PHỨC TẠP\nLiệt kê ước số Duyệt đến√n, thêm cặp O(√n)\nGCD Thuật toán Euclid O(log(min(a, b)))\nLCM a/gcd(a, b)×b O(log(min(a, b)))\nKiểm tra nguyên tố Duyệt đến√n O(√n)\nSàng nguyên tố Sàng Eratosthenes O(Nlog logN)\nModular arithmetic Mod sau mỗi phép tính O(1)mỗi phép\nLũy thừa nhanh Bình phương liên tiếp O(logb)\nBây giờ hãy thử sức với các bài tập[cite: 1, 2]. Bắt đầu từ các bài về ước số và GCD, rồi tiến\nđến bài modular và lũy thừa nhanh nhé![cite: 1, 2]\nBài tập\n• Tìm UCLN, BCNN (0/10)[cite: 1, 2]\n• Số nguyên tố (0/10)[cite: 1, 2]\n• Ước số chung bản nâng cao (0/15)[cite: 1, 2]\n• Ước số chung lớn nhất (Khó) (0/15)[cite: 1, 2]\n• CSES - Trailing Zeros | Số không ở cuối (0/15)[cite: 1, 2]\n• CSES - Bit Strings | Xâu nhị phân (0/15)[cite: 1, 2]\n• Số lượng ước số của n (0/20)[cite: 1, 2]\n• KT Số nguyên tố (0/20)[cite: 1, 2]\n• CSES - Exponentiation | Lũy thừa (0/20)[cite: 1, 2]\n• CSES - Two Knights | Hai quân mã (0/20)[cite: 1, 2]\n• CSES - Counting Divisors | Đếm ước (0/25)[cite: 1, 2]",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b7-p1-bit-strings",
            "title": "Bit Strings",
            "fileName": "CSES - Bit Strings _ Xâu nhị phân - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 600,
            "preview": "Bài toán Bit Strings. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/CSES - Bit Strings _ Xâu nhị phân - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Lần này bài tập bạn được giao là: hãy tính số lượng dãy bit có độ dài là n.\nVí dụ: nếu n = 3, thì câu trả lời đúng lẽ là 8, vì các dãy bit thoả mãn là 000, 001, 010,\n011, 100, 101, 110, và 111.\n\nInput\n• Chỉ một dòng duy nhất chứa số nguyên n (1 ≤ n ≤ 10^6).\n\nOutput\n• In kết quả chia lấy dư cho 10^9 + 7.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p2-counting-divisor",
            "title": "Counting Divisor",
            "fileName": "CSES - Counting Divisor _ Đếm ước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1200,
            "preview": "Bài toán Counting Divisor. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/CSES - Counting Divisor _ Đếm ước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho n số nguyên. Với mỗi số, hãy cho biết số lượng ước của nó.\nVí dụ, nếu x = 18, câu trả lời đúng là 6 vì các ước của nó là 1, 2, 3, 6, 9, 18.\n\nInput\n• Dòng đầu tiên chứa một số nguyên n\n• Sau đó là n dòng, mỗi dòng chứa một số nguyên x\n• Ràng buộc:\n• 1 ≤ n ≤ 10^5\n• 1 ≤ x ≤ 10^6\n\nOutput\n• Đối với mỗi số nguyên, in ra số lượng ước của nó.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n16\n17\n18",
            "sampleOutput": "5\n2\n6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n16\n17\n18",
                "output": "5\n2\n6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p3-exponentiation",
            "title": "Exponentiation",
            "fileName": "CSES - Exponentiation _ Lũy thừa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Exponentiation. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/CSES - Exponentiation _ Lũy thừa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hãy tính toán các giá trị a b mod 10^9 + 7 một cách hiệu quả.\nLưu ý: Trong bài này, ta giả định rằng 0 0 = 1.\n\nInput\n• Dòng đầu tiên chứa một số nguyên n: số lượng câu hỏi\n• Sau đó là n dòng, mỗi dòng chứa hai số a, b\n\nOutput\n• In ra các giá trị a b mod 10^9 + 7\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 0 ≤ a, b ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n3 4\n2 8\n123 123",
            "sampleOutput": "81\n256\n921450052",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n3 4\n2 8\n123 123",
                "output": "81\n256\n921450052"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p4-trailing-zeros",
            "title": "Trailing Zeros",
            "fileName": "CSES - Trailing Zeros _ Số không ở cuối - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Trailing Zeros. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/CSES - Trailing Zeros _ Số không ở cuối - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là đếm số lượng chữ số 0 ở cuối trong n !.\nVí dụ: 20 ! = 2432902008176640000 và nó có 4 chữ số không ở cuối.\n\nInput\n• Chỉ một dòng duy nhất chứa một số nguyên n (1 ≤ n ≤ 10^9).\n\nOutput\n• In ra số lượng chữ số không ở cuối của n !.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "20",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "20",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p5-two-knights",
            "title": "Two Knights",
            "fileName": "CSES - Two Knights _ Hai quân mã - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Two Knights. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/CSES - Two Knights _ Hai quân mã - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là với mỗi số k = 1, 2, …, n, đếm số cách đặt hai con mã trên bàn cờ\nvua k × k sao cho bọn chúng không tấn công được nhau (trong một bước).\n\nInput\n• Chỉ một dòng duy nhất chứa số tự nhiên n (1 ≤ n ≤ 10000).\n\nOutput\n• In n dòng. Mỗi dòng gồm một số nguyên dương là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8",
            "sampleOutput": "0\n6\n28\n96\n252\n550\n1056\n1848",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8",
                "output": "0\n6\n28\n96\n252\n550\n1056\n1848"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p6-kt-s-nguy-n-t",
            "title": "KT Số nguyên tố",
            "fileName": "KT Số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 900,
            "preview": "Bài toán KT Số nguyên tố. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/KT Số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong ngày thực tập đầu tiên, thầy Hải có một câu đố nho nhỏ cho các học sinh của mình.\nCho một số nguyên n, hãy kiểm tra n có phải là số nguyên tố hay không?\nSố nguyên tố là số tự nhiên lớn hơn 1 chỉ có hai ước số dương phân biệt là 1 và chính nó.\nInput:\n• Gồm một dòng duy nhất là số nguyên n (∣ n ∣ ≤ 1 0 12)\nOutput:\n• In ra YES nếu n là số nguyên tố. Ngược lại in ra NO.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "9",
            "sampleOutput": "NO",
            "testCases": [
              {
                "id": "Test 1",
                "input": "9",
                "output": "NO"
              },
              {
                "id": "Test 2",
                "input": "7",
                "output": "YES"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b7-p7-s-l-ng-c-s-c-a-n",
            "title": "Số lượng ước số của n",
            "fileName": "Số lượng ước số của n - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 500,
            "preview": "Bài toán Số lượng ước số của n. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/Số lượng ước số của n - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Viết chương trình nhập vào số nguyên n (n ≤ 1 0 7). In ra số lượng ước số của n. (Ước số của\nn là các số nguyên mà n chia hết)\nVí dụ: n = 10 thì 4 ước số: 1 2 5 10\n\nInput\n• Một số nguyên dương n.\n\nOutput\n• In ra số lượng ước số của n.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "4"
              },
              {
                "id": "Test 2",
                "input": "36",
                "output": "9"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c1-b7-p8-s-nguy-n-t",
            "title": "Số nguyên tố",
            "fileName": "Số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "1023MB",
            "point": 800,
            "preview": "Bài toán Số nguyên tố. Giới hạn thời gian 2.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/Số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên (a 1, a 2,..., a n), 1 ≤ n ≤ 10000; với mọi i sao cho a i ≤ 1 0 8.\nYêu cầu:\n• Hãy tìm số nguyên tố lớn nhất trong dãy trên.\n\nInput\n• Dòng thứ nhất chứa số nguyên dương n.\n• Dòng thứ hai chứa n số nguyên a 1, a 2,..., a n.\n\nOutput\n• Dòng thứ nhất ghi số nguyên tố lớn nhất.\n• Dòng thứ hai ghi các chỉ số trong dãy mà giá trị của nó là số nguyên tố lớn nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "9\n19 7 81 33 17 4 19 21 13",
            "sampleOutput": "19\n1 7",
            "testCases": [
              {
                "id": "Test 1",
                "input": "9\n19 7 81 33 17 4 19 21 13",
                "output": "19\n1 7"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p9-t-m-ucln-bcnn",
            "title": "Tìm UCLN, BCNN",
            "fileName": "Tìm UCLN, BCNN - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 600,
            "preview": "Bài toán Tìm UCLN, BCNN. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/Tìm UCLN, BCNN - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho hai số nguyên dương a và b (a, b ≤ 2.000.000.000).\nYêu cầu: Hãy viết chương trình tìm ước chung lớn nhất (UCLN), bội chung nhỏ nhất (BCNN)\ncủa hai số a và b.\n\nInput\n• Chứa số nguyên dương a và b.\n\nOutput\n• Chứa hai số UCLN, BCNN.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 8",
            "sampleOutput": "2 24",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 8",
                "output": "2 24"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p10-c-s-chung-b-n-n-ng-cao",
            "title": "Ước số chung bản nâng cao",
            "fileName": "Ước số chung bản nâng cao - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 900,
            "preview": "Bài toán Ước số chung bản nâng cao. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/Ước số chung bản nâng cao - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Số nguyên dương p gọi là ước số chung của n 𝑣 à m khi m 𝑣 à n cùng chia hết cho p.\nViết chương trình nhập vào một số nguyên dương n, m (n, m ≤ 1 0 7).\nHãy in ra tất cả các ước số chung của n 𝑣 à m.\n\nInput\n• Nhập 2 số nguyên dương n, m.\n\nOutput\n• In ra các ước số chung của chúng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "54 72",
            "sampleOutput": "1 2 3 6 9 18",
            "testCases": [
              {
                "id": "Test 1",
                "input": "54 72",
                "output": "1 2 3 6 9 18"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p11-c-s-chung-l-n-nh-t-kh",
            "title": "Ước số chung lớn nhất (Khó)",
            "fileName": "Ước số chung lớn nhất (Khó) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 800,
            "preview": "Bài toán Ước số chung lớn nhất (Khó). Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/Ước số chung lớn nhất (Khó) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Số nguyên dương p gọi là ước số chung lớn nhất của a và b khi a và b cùng chia hết cho p và\np là lớn nhất.\nViết chương trình nhập vào một số nguyên dương a, b (min (a, b) ≤ 1 0 12).\nHãy in ra ước số chung lớn nhất của a 𝑣 à b.\n\nInput\n• Nhập 2 số nguyên dương a, b.\n\nOutput\n• In ra ước số chung lớn nhất của chúng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "54 72",
            "sampleOutput": "18",
            "testCases": [
              {
                "id": "Test 1",
                "input": "54 72",
                "output": "18"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b7-p12-c-s-c-a-n",
            "title": "Ước số của n",
            "fileName": "Ước số của n - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 600,
            "preview": "Bài toán Ước số của n. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 7/Ước số của n - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Viết chương trình nhập vào số nguyên n (n ≤ 1 0 7). In ra tất cả các ước số của n. (Ước số của\nn là các số nguyên mà n chia hết)\nVí dụ: n = 10 thì in ra các số: 1 2 5 10\n\nInput\n• Một số nguyên dương n.\n\nOutput\n• In ra các ước số của n.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10",
            "sampleOutput": "1 2 5 10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "1 2 5 10"
              },
              {
                "id": "Test 2",
                "input": "36",
                "output": "1 2 3 4 6 9 12 18 36"
              }
            ],
            "totalTests": 2
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-8",
        "order": 8,
        "title": "Quay lui & Duyệt toàn bộ (Complete Search)",
        "theoryPdfFileName": "Chapter 2 lesson 8 - Quay lui & Duyệt toàn bộ.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 8 - Quay lui & Duyệt toàn bộ.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Quay lui & Duyệt toàn bộ (Complete Search) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Quay lui & Duyệt toàn bộ (Complete\nSearch)\nNội dung\n1. Ý tưởng: Giống như tìm đường trong mê cung\n2. Template tổng quát của Backtracking\n3. Sinh tất cả xâu nhị phân độ dàin\n• 3.1. Bài toán\n• 3.2. Ý tưởng\n• 3.3. Cây đệ quy chon= 3\n• 3.4. Code\n4. Sinh hoán vị (Permutations)\n• 4.1. Bài toán\n• 4.2. Ý tưởng\n• 4.3. Cây đệ quy chon= 3\n• 4.4. Code\n• 4.5. Cách khác: next_permutation\n5. Duyệt tập con bằng Bitmask\n• 5.1. Ý tưởng\n• 5.2. Ví dụ với *n*= 3, tập{5,3,7}\n• 5.3. Các phép bit cơ bản\n• 5.4. Code duyệt tất cả tập con\n• 5.5. Ví dụ: chia tập thành 2 nhóm có chênh lệch nhỏ nhất\n6. Ví dụ kinh điển: N-Queens (Xếp Hậu)\n• 6.1. Bài toán\n• 6.2. Phân tích\n• 6.3. Code\n• 6.4. Giải thích đường chéo\n• 6.5. Số lời giải một vài giá trị nhỏ\n7. Pruning - Cắt tỉa để tăng tốc\n• 7.1. Pruning là gì?\n• 7.2. Ví dụ: tìm tập con có tổng bằngS\n• 7.3. Các kỹ thuật pruning phổ biến\n8. Sinh tổ hợpC(n, k)\n• 8.1. Ý tưởng\n• 8.2. Code\n• 8.3. Pruning cho tổ hợp\n9. Các lỗi phổ biến\n10. Tóm tắt bài học\nTrong bài học này, chúng ta sẽ tìm hiểu kỹ thuật Backtracking (quay lui) - một kỹ\nthuật duyệt có hệ thống tất cả các khả năng. Khi giới hạn đủ nhỏ, thay vì tìm thuật toán\nthông minh, ta có thể thử tất cả và chọn đáp án tốt nhất!\n1. Ý tưởng: Giống như tìm đường trong mê cung\nHãy tưởng tượng bạn đang đứng trong một mê cung và cần tìm đường ra. Bạn sẽ làm gì?\n• Bước 1: Đi theo một hướng (ví dụ: rẽ trái)\n• Bước 2: Nếu đi tiếp được→tiếp tục đi\n• Bước 3: Nếu gặp ngõ cụt→QUAY LUI về ngã rẽ trước đó\n• Bước 4: Thử hướng khác (ví dụ: rẽ phải)\n• Bước 5: Lặp lại cho đến khi tìm thấy lối ra (hoặc đã thử hết)\nĐó chính là backtracking: thử một lựa chọn→đi sâu→nếu thất bại→quay lui\n(undo)→thử lựa chọn khác.\nKhi nào dùng backtracking?\n• Khinnhỏ\n• Khi cần tìm tất cả lời giải\n• Khi không có thuật toán hiệu quả hơn\n• Khi bài toán có dạng \"thử mọi khả năng nhưng có điều kiện\"\nBảng tham khảo:\nDẠNG BÀI SỐ KHẢ NĂNG GIỚI HẠN AN TOÀN\nXâu nhị phân 2n n≤20\nTập con 2n n≤20\nHoán vị n! n≤10\nTổ hợp C(n, k) =\n\u0000n\nk\n\u0001\nTùyn, k\n2. Template tổng quát của Backtracking\nHầu hết các bài backtracking đều theo cấu trúc sau:\nC++\n// Biến toàn cục lưu trạng thái\nint result[MAXN]; // Lời giải đang xây dựng\nbool used[MAXN]; // Đánh dấu đã dùng chưa (nếu cần)\nvoid backtrack(int pos) {\n// Bước 1: Kiểm tra đã hoàn thành chưa\nif (pos == n) {\n// Xử lý lời giải (in, cập nhật đáp án, ...)\nreturn;\n}\n// Bước 2: Thử tất cả lựa chọn cho vị trí pos\nfor (/* mỗi lựa chọn c */) {\nif (/* c hợp lệ */) {\n// Bước 3: Chọn\nresult[pos] = c;\n// Bước 4: Đi tiếp\nbacktrack(pos + 1);\n// Bước 5: QUAY LUI\n}\n}\n}\nPython\nresult = [0] * n\nused = [False] * (n + 1)\ndef backtrack(pos):\nif pos == n:\n# xử lý lời giải\nreturn\nfor c in choices:\nif valid(c):\nresult[pos] = c\nbacktrack(pos + 1)\n# quay lui nếu cần\nĐiểm mấu chốt:bước quay lui là bắt buộc nếu bạn có thay đổi trạng thái toàn cục\nnhưused,sum,path, ...\n3. Sinh tất cả xâu nhị phân độ dài n\n3.1. Bài toán\nIn tất cả xâu gồmnký tự, mỗi ký tự là ’0’ hoặc ’1’. Có đúng2n xâu.\n3.2. Ý tưởng\nTại mỗi vị trí, ta có 2 lựa chọn:\n• đặt ’0’\n• đặt ’1’\nThử cả hai lựa chọn bằng đệ quy.\n3.3. Cây đệ quy chon= 3\n\"\"\n/ \\\n\"0\" \"1\"\n/ \\ / \\\n\"00\" \"01\" \"10\" \"11\"\n/ \\ / \\ / \\ / \\\n000 001 010 011 100 101 110 111\n3.4. Code\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint n;\nstring s;\nvoid generate(int pos) {\nif (pos == n) {\ncout << s << \"\\n\";\nreturn;\n}\ns[pos] = ’0’;\ngenerate(pos + 1);\ns[pos] = ’1’;\ngenerate(pos + 1);\n}\nint main() {\ncin >> n;\ns.resize(n);\ngenerate(0);\n}\nPython\nn = int(input())\ns = [’’] * n\ndef generate(pos):\nif pos == n:\nprint(’’.join(s))\nreturn\ns[pos] = ’0’\ngenerate(pos + 1)\ns[pos] = ’1’\ngenerate(pos + 1)\ngenerate(0)\nInput:3\nOutput:\n000\n001\n010\n011\n100\n101\n110\n111\n4. Sinh hoán vị (Permutations)\n4.1. Bài toán\nIn tất cả hoán vị của{1,2, . . . , n}. Cón!hoán vị.\n4.2. Ý tưởng\nỞ vị trípos, thử đặt từng số từ1đếnnmà chưa dùng. Sau khi đệ quy xong, nhớ bỏ\nđánh dấu để thử số khác.\n4.3. Cây đệ quy chon= 3\n[ ]\n/ | \\\n[1] [2] [3]\n/ \\ / \\ / \\\n[1,2] [1,3] [2,1] [2,3] [3,1] [3,2]\n| | | | | |\n[1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2] [3,2,1]\n4.4. Code\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nconst int MAXN = 15;\nint n;\nint perm[MAXN];\nbool used[MAXN];\nvoid generate(int pos) {\nif (pos == n) {\nfor (int i = 0; i < n; i++) {\ncout << perm[i] << \" \";\n}\ncout << \"\\n\";\nreturn;\n}\nfor (int i = 1; i <= n; i++) {\nif (!used[i]) {\nused[i] = true;\nperm[pos] = i;\ngenerate(pos + 1);\nused[i] = false; // quay lui\n}\n}\n}\nint main() {\ncin >> n;\ngenerate(0);\n}\nPython\nn = int(input())\nperm = [0] * n\nused = [False] * (n + 1)\ndef generate(pos):\nif pos == n:\nprint(*perm)\nreturn\nfor i in range(1, n + 1):\nif not used[i]:\nused[i] = True\nperm[pos] = i\ngenerate(pos + 1)\nused[i] = False # quay lui\ngenerate(0)\n4.5. Cách khác: next_permutation\nNếuchỉcầnduyệttấtcảhoánvịtheothứtựtừđiển,C++cóthểdùngnext_permutation.\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<int> a(n);\niota(a.begin(), a.end(), 1); // a = {1, 2, ..., n}\ndo {\nfor (int i = 0; i < n; i++) {\ncout << a[i] << \" \";\n}\ncout << \"\\n\";\n} while (next_permutation(a.begin(), a.end()));\n}\n5. Duyệt tập con bằng Bitmask\n5.1. Ý tưởng\nMỗi tập con củanphần tử có thể biểu diễn bằng một số nguyên gồmnbit.\n• Bit thứibằng 1: chọn phần tửa i\n• Bit thứibằng 0: không chọn\nVì có 2 lựa chọn cho mỗi phần tử, tổng cộng có2n tập con.\n5.2. Ví dụ với *n*= 3, tập{5,3,7}\nMASK (NHỊ PHÂN) MASK (THẬP PHÂN) TẬP CON TỔNG\n000 0 ∅ 0\n001 1 {5} 5\n010 2 {3} 3\n011 3 {5,3} 8\n100 4 {7} 7\n101 5 {5,7} 12\n110 6 {3,7} 10\n111 7 {5,3,7} 15\n5.3. Các phép bit cơ bản\nPHÉP TOÁN Ý NGHĨA\nmask » i & 1 Kiểm tra bit thứi\nmask | (1 « i) Bật bit thứi\nmask & ~(1 « i) Tắt bit thứi\nmask ˆ (1 « i) Đảo bit thứi\n1 « n Bằng2 n\n__builtin_popcount(mask) Đếm số bit 1\n5.4. Code duyệt tất cả tập con\nC++\nint n;\nint a[25];\nfor (int mask = 0; mask < (1 << n); mask++) {\nint sum = 0;\nvector<int> subset;\nfor (int i = 0; i < n; i++) {\nif (mask >> i & 1) {\nsum += a[i];\nsubset.push_back(a[i]);\n}\n}\n// xử lý subset hoặc sum\n}\nPython\nfor mask in range(1 << n):\nsubset = []\ntotal = 0\nfor i in range(n):\nif (mask >> i) & 1:\nsubset.append(a[i])\ntotal += a[i]\n# xử lý subset hoặc total\n5.5. Ví dụ: chia tập thành 2 nhóm có chênh lệch nhỏ nhất\nC++\nint total = 0;\nfor (int i = 0; i < n; i++) total += a[i];\nint min_diff = total;\nfor (int mask = 0; mask < (1 << n); mask++) {\nint sum = 0;\nfor (int i = 0; i < n; i++) {\nif (mask >> i & 1) sum += a[i];\n}\nmin_diff = min(min_diff, abs(total - 2 * sum));\n}\ncout << min_diff << \"\\n\";\nPython\ntotal = sum(a)\nmin_diff = total\nfor mask in range(1 << n):\ns = 0\nfor i in range(n):\nif (mask >> i) & 1:\ns += a[i]\nmin_diff = min(min_diff, abs(total - 2 * s))\nprint(min_diff)\n6. Ví dụ kinh điển: N-Queens (Xếp Hậu)\n6.1. Bài toán\nĐặtNquân Hậu lên bàn cờN×Nsao cho không quân nào tấn công quân nào. Một\nquân Hậu tấn công theo:\n• cùng hàng\n• cùng cột\n• cùng đường chéo\n6.2. Phân tích\nVì mỗi hàng chỉ cần đặt 1 Hậu, ta sẽ duyệt từng hàng một. Ở hàngrow, thử đặt Hậu vào\ntừng cộtcnếu:\n• cộtcchưa có Hậu\n• đường chéo chính chưa bị chiếm\n• đường chéo phụ chưa bị chiếm\n6.3. Code\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint n, count_solutions = 0;\nint col[20];\nbool used_col[20];\nbool used_diag1[40];\nbool used_diag2[40];\nvoid solve(int row) {\nif (row == n) {\ncount_solutions++;\nreturn;\n}\nfor (int c = 0; c < n; c++) {\nif (!used_col[c] && !used_diag1[row - c + n] && !used_diag2[row + c]) {\ncol[row] = c;\nused_col[c] = true;\nused_diag1[row - c + n] = true;\nused_diag2[row + c] = true;\nsolve(row + 1);\nused_col[c] = false;\nused_diag1[row - c + n] = false;\nused_diag2[row + c] = false;\n}\n}\n}\nint main() {\ncin >> n;\nsolve(0);\ncout << count_solutions << \"\\n\";\n}\nPython\nn = int(input())\ncount_solutions = 0\nused_col = [False] * n\nused_diag1 = [False] * (2 * n)\nused_diag2 = [False] * (2 * n)\ndef solve(row):\nglobal count_solutions\nif row == n:\ncount_solutions += 1\nreturn\nfor c in range(n):\nd1 = row - c + n\nd2 = row + c\nif not used_col[c] and not used_diag1[d1] and not used_diag2[d2]:\nused_col[c] = True\nused_diag1[d1] = True\nused_diag2[d2] = True\nsolve(row + 1)\nused_col[c] = False\nused_diag1[d1] = False\nused_diag2[d2] = False\nsolve(0)\nprint(count_solutions)\n6.4. Giải thích đường chéo\n• Đường chéo chính: các ô có cùng giá trịrow−col. Vìrow−colcó thể âm, ta cộng\nthêmnđể tránh chỉ số âm.\n• Đường chéo phụ: các ô có cùng giá trịrow+col.\n6.5. Số lời giải một vài giá trị nhỏ\nN SỐ LỜI GIẢI\n1 1\n2 0\n3 0\n4 2\n5 10\n6 4\n7 40\n8 92\n7. Pruning - Cắt tỉa để tăng tốc\n7.1. Pruning là gì?\nPruning là kỹ thuật bỏ qua những nhánh mà ta biết chắc sẽ không tạo ra đáp án tốt hoặc\nkhông thể tạo ra lời giải hợp lệ. Ý tưởng là: không cần thử hết nếu biết trước nhánh đó\nvô ích.\n7.2. Ví dụ: tìm tập con có tổng bằngS\nKhông pruning:\nC++\nvoid backtrack(int pos, int current_sum) {\nif (pos == n) {\nif (current_sum == S) count++;\nreturn;\n}\nbacktrack(pos + 1, current_sum + a[pos]);\nbacktrack(pos + 1, current_sum);\n}\nPython\ndef backtrack(pos, current_sum):\nglobal count\nif pos == n:\nif current_sum == S:\ncount += 1\nreturn\nbacktrack(pos + 1, current_sum + a[pos])\nbacktrack(pos + 1, current_sum)\nCó pruning:\nC++\nvoid backtrack(int pos, int current_sum) {\nif (current_sum > S) return;\nif (current_sum + remaining_sum[pos] < S) return;\nif (pos == n) {\nif (current_sum == S) count++;\nreturn;\n}\nbacktrack(pos + 1, current_sum + a[pos]);\nbacktrack(pos + 1, current_sum);\n}\nPython\ndef backtrack(pos, current_sum):\nglobal count\nif current_sum > S:\nreturn\nif current_sum + remaining_sum[pos] < S:\nreturn\nif pos == n:\nif current_sum == S:\ncount += 1\nreturn\nbacktrack(pos + 1, current_sum + a[pos])\nbacktrack(pos + 1, current_sum)\n7.3. Các kỹ thuật pruning phổ biến\n1. Vượt giới hạn: ví dụ tổng đã lớn hơnS.\n2. Không đủ khả năng đạt đáp án: kể cả lấy hết phần còn lại vẫn không đủ.\n3. Sắp xếp trước: để tìm lời giải tốt sớm hơn.\n4. Loại bỏ đối xứng: tránh duyệt hai nhánh tương đương nhau.\n8. Sinh tổ hợpC(n, k)\nBài toán:chọnkphần tử từ{1,2, . . . , n}.\n8.1. Ý tưởng\nTa chọn phần tử đầu tiên, rồi chọn phần tử tiếp theo lớn hơn nó để tránh trùng.\n8.2. Code\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint n, k;\nint combo[25];\nvoid generate(int pos, int start) {\nif (pos == k) {\nfor (int i = 0; i < k; i++) {\ncout << combo[i] << \" \";\n}\ncout << \"\\n\";\nreturn;\n}\nfor (int i = start; i <= n; i++) {\ncombo[pos] = i;\ngenerate(pos + 1, i + 1);\n}\n}\nint main() {\ncin >> n >> k;\ngenerate(0, 1);\n}\nPython\nn, k = map(int, input().split())\ncombo = [0] * k\ndef generate(pos, start):\nif pos == k:\nprint(*combo)\nreturn\nfor i in range(start, n + 1):\ncombo[pos] = i\ngenerate(pos + 1, i + 1)\ngenerate(0, 1)\nVí dụ:C(4,2)\n1 2\n1 3\n1 4\n2 3\n2 4\n3 4\n8.3. Pruning cho tổ hợp\nC++\nvoid generate(int pos, int start) {\nif (n - start + 1 < k - pos) return;\nif (pos == k) {\nfor (int i = 0; i < k; i++) {\ncout << combo[i] << \" \";\n}\ncout << \"\\n\";\nreturn;\n}\nfor (int i = start; i <= n; i++) {\ncombo[pos] = i;\ngenerate(pos + 1, i + 1);\n}\n}\nPython\ndef generate(pos, start):\nif n - start + 1 < k - pos:\nreturn\nif pos == k:\nprint(*combo)\nreturn\nfor i in range(start, n + 1):\ncombo[pos] = i\ngenerate(pos + 1, i + 1)\n9. Các lỗi phổ biến\nLỖI HẬU QUẢ CÁCH TRÁNH\nQuên quay lui Kết quả sai hoặc thiếu lời\ngiải\nLuôn hoàn tác sau đệ quy\nnquá lớn cho brute force TLE Ước lượng2 n, n!trước\nSinh trùng lặp Đếm thừa, output sai Dùngusedhoặcstart\nKhông xử lý edge case WA / RE Kiểm tran= 0, k= 0, . . .\nĐệ quy quá sâu Stack overflow Cẩn thận khinlớn\nTóm tắt bài học\nKỸ THUẬT SỐ TRẠNG THÁI GIỚI HẠN AN TOÀN KHI NÀO DÙNG\nXâu nhị phân / Tập con 2n n≤20 Chọn / không chọn\nHoán vị n! n≤10 Sắp xếp thứ tự\nBitmask 2n n≤20 Duyệt tập con\nTổ hợp C(n, k) =\n\u0000n\nk\n\u0001\nTùy bài (k≤n≤15) Chọnkphần tử\nN-Queens Phụ thuộc pruning n≤15 Bài toán ràng buộc\nPruning Giảm đáng kể - Tăng tốc duyệt",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b8-p1-bi-u-th-c-1",
            "title": "Biểu thức 1",
            "fileName": "Biểu thức 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Biểu thức 1. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Biểu thức 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho 1 danh sách A gồm n số nguyên và một số nguyên m. Bạn được quyền thực\nhiện các thao tác thỏa mãn điều kiện sau:\n• Không được thay đổi thứ tự các phần tử của danh sách này.\n• Bạn phải chèn thêm một trong hai dấu { +, − } vào giữa các phần tử của tập hợp.\n• Có n − 1 khoảng giữa các phần tử mà bạn có thể chèn dấu vào.\nVí dụ, với a = [ 3, 4, 5 ] bạn có thể thêm vào các dấu biến nó trở thành biểu thứ 3 + 4 − 5.\nGiá trị của biểu thức này là 2.\nHãy liệt kê hết các cách chèn dấu mà giá trị của biểu thức được tạo ra là m.\n\nInput\n• Dòng thứ nhất chứa hai số nguyên n, m (1 ≤ n < 22, ∣ m ∣ ≤ 5 ∗ 10^9)\n• Dòng thứ hai chứa n số nguyên A 1, A 2, …, A n (∣ A_i ∣ ≤ 10^9)\n\nOutput\n• In ra nhiều dòng, mỗi dòng là một biểu thức hợp lệ. Các biểu thức in tăng dần theo thứ\ntự từ điển. Xem ví dụ để in đáp án được chính xác.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 0\n0 -4 -1 0 -3",
            "sampleOutput": "0+4-1+0-3\n0+4-1-0-3\n0-4+1+0+3\n0-4+1-0+3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 0\n0 -4 -1 0 -3",
                "output": "0+4-1+0-3\n0+4-1-0-3\n0-4+1+0+3\n0-4+1-0+3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p2-apple-division",
            "title": "Apple Division",
            "fileName": "CSES - Apple Division _ Chia táo - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Apple Division. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/CSES - Apple Division _ Chia táo - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n quả táo với trọng lượng đã biết. Nhiệm vụ của bạn là chia những quả táo thành hai\nnhóm sao cho chênh lệch trọng lượng giữa hai nhóm là tối thiểu.\n\nInput\n• Dòng đầu tiên là một số nguyên n: số lượng táo\n• Dòng tiếp theo chứa n số nguyên p 1, p 2, …, p n: trọng lượng của mỗi quả táo\n\nOutput\n• In ra một số nguyên: chênh lệch trọng lượng tối thiểu giữa hai nhóm\n\nScoring\n• 1 ≤ n ≤ 20\n• 1 ≤ p i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n3 2 7 4 1",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 2 7 4 1",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p3-chessboard-and-queens",
            "title": "Chessboard and Queens",
            "fileName": "CSES - Chessboard and Queens _ Bàn cờ và quân hậu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Chessboard and Queens. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/CSES - Chessboard and Queens _ Bàn cờ và quân hậu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn cần phải đặt 8 quân hậu lên một bàn cờ vua, sao cho không có hai quân hậu nào tấn\ncông lẫn nhau. Để tăng phần thử thách, mỗi ô vuông sẽ được đánh dấu là ô trống hoặc ô bị\ncấm, và bạn chỉ được xếp các quân hậu trên những ô trống. Tuy nhiên, những ô bị cấm\nkhông chặn đường chiếu của các quân hậu.\nCó bao nhiêu cách để đặt các quân hậu?\n\nInput\n• Gồm 8 dòng, mỗi dòng chứa 8 kí tự. Mỗi ô vuông là trống nếu kí tự tại đó là., hoặc\nbị cấm nếu là *.\n\nOutput\n• In ra một số nguyên: số lượng cách xếp hậu.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "........\n........\n..*.....\n........\n........\n.....**.\n...*....\n........",
            "sampleOutput": "65",
            "testCases": [
              {
                "id": "Test 1",
                "input": "........\n........\n..*.....\n........\n........\n.....**.\n...*....\n........",
                "output": "65"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p4-creating-strings",
            "title": "Creating Strings",
            "fileName": "CSES - Creating Strings _ Tạo xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Creating Strings. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/CSES - Creating Strings _ Tạo xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu, nhiệm vụ của bạn là đưa ra kết quả của tất cả các xâu có thể được tạo ra sử\ndụng những kí tự của xâu đã cho.\n\nInput\n• Một dòng chứa một xâu có độ dài n. Các kí tự nằm trong phạm vi từ a - z.\n\nOutput\n• Dòng đầu tiên in ra số k (với k là số xâu có thể được tạo ra từ xâu ban đầu)\n• Sau đó, in ra k dòng là các xâu được sắp xếp theo thứ tự từ điển\n\nScoring\n• 1 ≤ n ≤ 8",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "aabac",
            "sampleOutput": "20\naaabc\naaacb\naabac\naabca\naacab\naacba\nabaac\nabaca\nabcaa\nacaab\nacaba\nacbaa\nbaaac\nbaaca\nbacaa\nbcaaa\ncaaab\ncaaba\ncabaa\ncbaaa",
            "testCases": [
              {
                "id": "Test 1",
                "input": "aabac",
                "output": "20\naaabc\naaacb\naabac\naabca\naacab\naacba\nabaac\nabaca\nabcaa\nacaab\nacaba\nacbaa\nbaaac\nbaaca\nbacaa\nbcaaa\ncaaab\ncaaba\ncabaa\ncbaaa"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p5-tower-of-hanoi",
            "title": "Tower of Hanoi",
            "fileName": "CSES - Tower of Hanoi _ Tháp Hà Nội - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Tower of Hanoi. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/CSES - Tower of Hanoi _ Tháp Hà Nội - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trò chơi Tháp Hà Nội gồm có 3 ngăn xếp (số 1 bên trái, số 2 ở giữa, và số 3 bên phải) và n\ntấm đĩa tròn có kích thước khác nhau. Lúc đầu, ngăn xếp bên trái chứa tất cả đĩa theo thứ tự\ntăng dần về kích thước theo thứ tự từ trên xuống dưới đáy.\nMục tiêu là di chuyển tất cả tấm đĩa về ngăn xếp bên phải qua việc sử dụng ngăn xếp ở giữa.\nỞ mỗi lượt, bạn có thể chọn đĩa ở trên cùng của một ngăn xếp để chuyển nó tới một ngăn\nxếp khác. Ngoài ra, bạn không được phép đặt một chiếc đĩa lớn nằm trên một chiếc đĩa nhỏ\nhơn.\nNhiệm vụ của bạn là tìm ra lời giải sử dụng ít nước đi nhất.\n\nInput\n• Gồm một dòng duy nhất chứa số nguyên n: số lượng đĩa\n• Ràng buộc: 1 ≤ n ≤ 16\n\nOutput\n• Dòng đầu tiên in số nguyên duy nhất k là số lượng nước đi tối thiểu tìm được\n• Sau đó, in ra k dòng miêu tả các nước đi. Mỗi dòng có hai số nguyên a và b: bạn di\nchuyển tấm đĩa từ ngăn xếp a sang ngăn xếp b",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2",
            "sampleOutput": "3\n1 2\n1 3\n2 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2",
                "output": "3\n1 2\n1 3\n2 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p6-chia-b-s-a",
            "title": "Chia Bò Sữa",
            "fileName": "Chia Bò Sữa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Chia Bò Sữa. Giới hạn thời gian 2.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Chia Bò Sữa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trải qua kì thi quan trọng xong, Sắn về quê bắt tay làm kinh doanh với mảnh đất quê hương.\nSắn bắt đầu làm nông trại với N chú bò sữa. Chú bò thứ i sản xuất a i đơn vị sữa mỗi ngày.\nMỗi sáng sớm Sắn lùa lũ bò ra đồng cỏ để ăn những ngọn cỏ ngon nhất, tối Sắn lại lùa bò về\nchuồng. Lần này Sắn nâng cấp máy và mua thêm một máy nữa. Bây giờ Sắn có hai máy vắt\nsữa phục vụ để vắt hết N chú bò. Để đảm bảo công suất hoạt động của hai máy vắt sữa, mỗi\nlần vắt Sắn sẽ chia đều N chú bò vào hai máy sao cho lượng sữa hai máy vắt được tương\nđương nhau. Bạn hãy liệt kê cho Sắn biết tất cả cách sắp N chú bò vào hai máy để đạt được\nđiều này.\n\nInput\n• Dòng thứ nhất chứa 1 số nguyên N (1 ≤ N ≤ 20)\n• Dòng thứ hai chứa N số nguyên dương a 1, a 2, … a N (1 ≤ a i ≤ 10^9), là sản lượng\nsữa của N chú bò.\n\nOutput\n• Nếu không có cách nào thỏa mãn, hãy in ra − 1.\n• Ngược lại hãy in ra mỗi đáp án trên 1 dòng riêng: Mỗi cách gồm N số nguyên\nx 1, x 2, … x N, (x_i ∈ { 1, 2 }), là máy mà chú bò thứ i được phân vào. Các cách được in\ntheo thứ tự từ điển.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n2 1 2 1 2",
            "sampleOutput": "11212\n12122\n12221\n21112\n21211\n22121",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n2 1 2 1 2",
                "output": "11212\n12122\n12221\n21112\n21211\n22121"
              },
              {
                "id": "Test 2",
                "input": "5\n2 1 2 1 8",
                "output": "-1"
              },
              {
                "id": "Test 3",
                "input": "5\n1 5 1 3 4",
                "output": "11122\n22211"
              }
            ],
            "totalTests": 3
          },
          {
            "id": "c1-b8-p7-c-ph-i-s-fibo",
            "title": "Có phải số Fibo?",
            "fileName": "Có phải số Fibo_ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 900,
            "preview": "Bài toán Có phải số Fibo?. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Có phải số Fibo_ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho 1 số nguyên dương N. Hãy viết chương trình kiểm tra N có phải số Fibo hay\nkhông ?\nBiết rằng số Fibo là số thuộc trong dãy số có quy luật như sau: 0, 1, 1, 2, 3, 5, 8, 13,...\n\nInput\n• Dòng đầu tiên chứa số nguyên T (T ≤ 10^5) - là số câu hỏi\n• T dòng tiếp theo,mỗi chứa 1 số nguyên dương N (1 ≤ N ≤ 1 0 10)\n\nOutput\n• T dòng, in ra IsFibo nếu N là số Fibo, ngược lại in ra IsNotFibo",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n5\n7\n8",
            "sampleOutput": "IsFibo\nIsNotFibo\nIsFibo",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n5\n7\n8",
                "output": "IsFibo\nIsNotFibo\nIsFibo"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p8-d-y-ngo-c",
            "title": "Dãy ngoặc",
            "fileName": "Dãy ngoặc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Dãy ngoặc. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Dãy ngoặc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có thể định nghĩa khái niệm dãy ngoặc đúng dưới dạng đệ quy như sau:\n1. \" () \" là dãy ngoặc đúng\n2. C là dãy ngoặc đúng nếu C = (A) hay C = A B với A, B là các dãy ngoặc đúng.\nVí dụ dãy ngoặc đúng: (), (()), () (), (()) ()\nVí dụ dãy ngoặc sai:) (, ((((, () ((,)))),) () (Bạn hãy viết chương trình liệt kê tất cả các dãy ngoặc đúng có chiều dài n (n chẵn)\n\nInput\n• Là số nguyên n (n chẵn, 2 ≤ n ≤ 30)\n\nOutput\n• In số m là số lượng các dãy ngoặc đúng có chiều dài n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p9-sinh-ho-n-v",
            "title": "Sinh hoán vị",
            "fileName": "Sinh hoán vị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "977MB",
            "point": 500,
            "preview": "Bài toán Sinh hoán vị. Giới hạn thời gian 1.0s, bộ nhớ 977MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Sinh hoán vị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Sinh các hoán vị của các số tự nhiên từ 1 đến n.\nYêu cầu: Cho n hãy in tất cả các hoán vị của n số tự nhiên đầu tiên theo thứ tự từ điển.\n\nInput\n• Số nguyên dương n (n ≤ 9).\n\nOutput\n• Tất cả các hoán vị của n số tự nhiên đầu tiên theo thứ tự từ điển.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3",
            "sampleOutput": "123\n132\n213\n231\n312\n321",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3",
                "output": "123\n132\n213\n231\n312\n321"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p10-sinh-nh-ph-n",
            "title": "Sinh nhị phân",
            "fileName": "Sinh nhị phân - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "977MB",
            "point": 400,
            "preview": "Bài toán Sinh nhị phân. Giới hạn thời gian 1.0s, bộ nhớ 977MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Sinh nhị phân - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Sinh xâu nhị phân độ dài n.\nYêu cầu: Cho n hẫy in tất cả các xâu nhị phân theo thứ tự từ điển.\n\nInput\n• Số nguyên dương n (n ≤ 12).\n\nOutput\n• Tất cả các xâu nhị phân theo thứ tự từ điển.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3",
            "sampleOutput": "000\n001\n010\n011\n100\n101\n110\n111",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3",
                "output": "000\n001\n010\n011\n100\n101\n110\n111"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p11-sinh-t-h-p",
            "title": "Sinh tổ hợp",
            "fileName": "Sinh tổ hợp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Sinh tổ hợp. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Sinh tổ hợp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho n số tự nhiên 1, 2, 3, 4,..., n. Tổ hợp chập k của n số này là một cách chọn ra k số\nkhác nhau trong n số, không kể thứ tự (tức là: chọn [ 1, 2, 3 ] cũng giống như chọn\n[ 3, 2, 1 ], [ 2, 3, 1 ], [ 1, 3, 2 ],...).\nCho biết trước n, k. Em hãy in ra tất cả tổ hợp chập k của n theo thứ tự từ điển.\nNhắc lại, hai dãy số s, t có cùng độ dài k, s có thứ tự từ điển bé hơn t khi tồn tại duy nhất\ni (1 ≤ i ≤ k)\n• s [ j ] = t [ j ] với mọi 1 ≤ j < i\n• s [ i ] < t [ i ]\nNói cách khác, s < t khi tại vị trí i đầu tiên mà s [ i ] =  t [ i ], ta có s [ i ] < t [ i ].\nTrong tất cả các tổ hợp (cách chọn), có bao nhiêu cách mà tích của các số được chọn là một\nsố chính phương?\n\nInput\n• Một dòng duy nhất chứa hai số n, k (1 ≤ k ≤ n ≤ 16)\n\nOutput\n• In ra các tổ hợp, mỗi cách trên một dòng\n• Ở dòng cuối cùng, in ra số lượng tích là số chính phương",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3",
            "sampleOutput": "1 2 3\n1 2 4\n1 2 5\n1 3 4\n1 3 5\n1 4 5\n2 3 4\n2 3 5\n2 4 5\n3 4 5\n0",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3",
                "output": "1 2 3\n1 2 4\n1 2 5\n1 3 4\n1 3 5\n1 4 5\n2 3 4\n2 3 5\n2 4 5\n3 4 5\n0"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b8-p12-t-ng-d-y-con-b-ng-k",
            "title": "Tổng dãy con bằng K",
            "fileName": "Tổng dãy con bằng K - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Tổng dãy con bằng K. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 8/Tổng dãy con bằng K - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy số nguyên dương gồm N phần tử và một số nguyên K. Hãy đếm số lượng dãy\ncon có tổng bằng K.\nMột dãy số A được gọi là dãy con của dãy số B, nếu B loại bỏ một số phần tử thì thu được\nA.\nVD: { 1, 3 } là dãy con của { 1, 2, 3 }, còn { 2, 1 } không phải dãy con của { 1, 2, 3 }.\n\nInput\n• Dòng đầu tiên chứa 2 số nguyên dương N, K.\n• Dòng thứ 2 gồm N số nguyên dương A_i.\n\nOutput\n• Một số nguyên là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 2\n1 2 1",
            "sampleOutput": "2\nConstraints\nTrong tất cả test, ta có:\n• N ≤ 20\n• 1 ≤ K , A i ≤ 100\nNguồn: 2019 CHY",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 2\n1 2 1",
                "output": "2\nConstraints\nTrong tất cả test, ta có:\n• N ≤ 20\n• 1 ≤ K , A i ≤ 100\nNguồn: 2019 CHY"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-9",
        "order": 9,
        "title": "Quy hoạch động cơ bản (Basic DP)",
        "theoryPdfFileName": "Chapter 2 lesson 9 - Quy hoạch động cơ bản.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 lesson 9 - Quy hoạch động cơ bản.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Quy hoạch động cơ bản (Basic DP) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Quy hoạch động cơ bản (Basic DP)\nNội dung\nChào mừng các bạn đến với Quy hoạch động (Dynamic Programming, viết tắt là DP)\n- một trong những kỹ thuật quan trọng nhất và mạnh mẽ nhất trong lập trình thi đấu!\nĐừng lo nếu bạn thấy DP khó hiểu lúc đầu - ai cũng vậy cả. Hãy đọc chậm, làm theo\ntừng bước, và bạn sẽ nắm được.\n1. Tại sao cần DP? Bắt đầu từ bài toán Fibonacci\n• Cách 1: Đệ quy thuần (CHẬM!)\n2. Hai cách tiếp cận DP\n• Cách A: Ghi nhớ (Memoization) - Tiếp cận top-down\n• Cách B: Bảng phương (Tabulation) - Tiếp cận bottom-up\n• So sánh hai cách\n3. Ba bước giải bài DP\n4. Ví dụ chi tiết: Bài toán đồng xu (Coin Change)\n• Bước 1: Xác định trạng thái\n• Bước 2: Viết công thức truy hồi\n• Bước 3: Cơ sở\n• Truy vết từng bước\n• Code hoàn chỉnh\n5. DP trên lưới (Grid Paths)\n• Bước 1: Trạng thái\n• Bước 2: Công thức truy hồi\n• Bước 3: Cơ sở\n• Truy vết trực quan\n• Code hoàn chỉnh\n6. Dãy con tăng dài nhất (LIS - Longest Increasing Subsequence)\n• Bước 1: Trạng thái\n• Bước 2: Công thức truy hồi\n• Bước 3: Cơ sở\n• Truy vết từng bước\n• Code hoàn chỉnh\n7. Bài toán ba lô (0/1 Knapsack)\n• Tại sao phải có chiềui?\n• Một cách nghĩ rất quan trọng\n• Tóm tắt trực giác\n• Bước 1: Trạng thái (phiên bản 2D)\n• Bước 2: Công thức truy hồi\n• Bước 3: Cơ sở\n• Truy vết bảng DP\n• Code (2D DP)\n• Tối ưu bộ nhớ: Bước trung gian - dp_old / dp_new\n• Tối ưu bộ nhớ: Gộp thành mảng 1D\n8. Khi nào dùng DP?\n9. Sai lầm phổ biến khi làm DP\n10. Mẹo luyện tập\n1. Tại sao cần DP? Bắt đầu từ bài toán Fibonacci\nTrước khi học DP, hãy xem một ví dụ quen thuộc: dãy Fibonacci.\nF(0) = 0, F(1) = 1, F(n) =F(n−1) +F(n−2)\nCách 1: Đệ quy thuần (CHẬM!)\nC++\nint fib(int n) {\nif (n <= 1) return n;\nreturn fib(n - 1) + fib(n - 2);\n}\nPython\ndef fib(n):\nif n <= 1:\nreturn n\nreturn fib(n - 1) + fib(n - 2)\nCách này rất chậm. Tại sao? Hãy xem cây đệ quy khi tínhfib(5):\nfib(5)\n/ \\\nfib(4) fib(3)\n/ \\ / \\\nfib(3) fib(2) fib(2) fib(1)\n/ \\ / \\ / \\\nfib(2) fib(1) ...\n/ \\\nfib(1) fib(0)\nNhìn thấy không?fib(3)được tính 2 lần,fib(2)được tính 3 lần,fib(1)được tính\n5 lần! Vớinlớn, số lần tính lặp lại tăng theo cấp số nhân. Độ phức tạp làO(2n)- với\nn= 50, cần khoảng10 15 phép tính, máy tính chạy cả ngày cũng không xong!\nVấn đề cốt lõi:Cùng một bài toán con (ví dụfib(3)) bị tính đi tính lại nhiều lần.\nĐây gọi làbài toán con chồng chéo (overlapping subproblems).\nGiải pháp:Lần đầu tính xong→lưu kết quả lại→lần sau cần thì lấy ra dùng,\nkhông tính lại nữa. Đó chính là ý tưởng cốt lõi của DP!\n2. Hai cách tiếp cận DP\nCách A: Ghi nhớ (Memoization) - Tiếp cận top-down\nVẫn dùng đệ quy, nhưng thêm một bảng ghi nhớ. Trước khi tính, kiểm tra xem đã tính\ntrước đó chưa.\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nlong long memo[105];\nbool computed[105];\nlong long fib(int n) {\nif (n <= 1) return n;\nif (computed[n]) return memo[n];\ncomputed[n] = true;\nmemo[n] = fib(n - 1) + fib(n - 2);\nreturn memo[n];\n}\nint main() {\nint n;\ncin >> n;\nmemset(computed, false, sizeof computed);\ncout << fib(n) << endl;\n}\nPython\nmemo = {}\ndef fib(n):\nif n <= 1:\nreturn n\nif n in memo:\nreturn memo[n]\nmemo[n] = fib(n - 1) + fib(n - 2)\nreturn memo[n]\nn = int(input())\nprint(fib(n))\nCây đệ quy bây giờ (tínhfib(5)):\nfib(5)\n/ \\\nfib(4) fib(3) <-- đã lưu, trả luôn!\n/ \\\nfib(3) fib(2) <-- đã lưu, trả luôn!\n/ \\\nfib(2) fib(1)\n/ \\\nfib(1) fib(0)\nMỗi giá trị chỉ tính đúng 1 lần→Độ phức tạpO(n). Nhanh hơn hàng tỷ lần!\nCách B: Bảng phương (Tabulation) - Tiếp cận bottom-up\nThay vì đệ quy, ta dùng vòng lặp tính từ nhỏ đến lớn:\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<long long> dp(n + 1);\ndp[0] = 0;\ndp[1] = 1;\nfor (int i = 2; i <= n; i++) {\ndp[i] = dp[i - 1] + dp[i - 2];\n}\ncout << dp[n] << endl;\n}\nPython\nn = int(input())\nif n == 0:\nprint(0)\nelse:\ndp = [0] * (n + 1)\ndp[1] = 1\nfor i in range(2, n + 1):\ndp[i] = dp[i - 1] + dp[i - 2]\nprint(dp[n])\nQuá trình tính:\ndp[0] = 0\ndp[1] = 1\ndp[2] =dp[1] +dp[0] = 1 + 0 = 1\ndp[3] =dp[2] +dp[1] = 1 + 1 = 2\ndp[4] =dp[3] +dp[2] = 2 + 1 = 3\ndp[5] =dp[4] +dp[3] = 3 + 2 = 5\nĐơn giản, nhanh, dễ hiểu!\nSo sánh hai cách\nTOP-DOWN\n(MEMOIZATION)\nBOTTOM-UP\n(TABULATION)\nCách viết Đệ quy + ghi nhớ Vòng lặp\nƯu điểm Dễ nghĩ, chỉ tính trạng thái cần Thường nhanh hơn (không có\noverhead đệ quy)\nNhược điểm Có thể bị tràn stack Phải xác định đúng thứ tự tính\nKhi nào dùng Khi không chắc thứ tự tính Hầu hết các trường hợp (khuyến\nkhích)\nTrong lập trình thi đấu, cách bottom-up phổ biến hơn vì nhanh hơn và tránh được\nstack overflow. Nhưng top-down đôi khi dễ nghĩ hơn cho bài phức tạp. Bạn nên biết cả\nhai!\n3. Ba bước giải bài DP\nMọi bài DP đều tuân theo 3 bước:\nBƯỚC CÂU HỎI CẦN TRẢ LỜIVÍ DỤ\n(FIBONACCI)\n1. Xác định trạng thái dp[i](hoặcdp[i][j]...) đại diện\ncho cái gì?\ndp[i] =số Fibonacci thứ\ni\n2.Viếtcôngthứctruyhồi dp[i]được tính từ những trạng\nthái nào?\ndp[i] =dp[i−1]+dp[i−2]\n3. Xác định cơ sở Những giá trị ban đầu nào ta\nbiết sẵn?\ndp[0] = 0, dp[1] = 1\nMẹo:Bước 1 là quan trọng nhất và khó nhất. Nếu xác định sai trạng thái, mọi thứ sau\nđó đều sai. Hãy dành nhiều thời gian cho bước này!\n4. Ví dụ chi tiết: Bài toán đồng xu (Coin Change)\nĐề bài:Chokloại đồng xu có mệnh giác 1, c2, . . . , ck (mỗi loại có vô hạn). Tìm số đồng\nxu ít nhất cần dùng để tạo tổng đúng bằngn. Nếu không thể, in−1.\nVí dụ:Đồng xu mệnh giá{1,3,4},n= 6.\n• Dùng đồng 1:1 + 1 + 1 + 1 + 1 + 1 = 6→6đồng\n• Dùng đồng 3:3 + 3 = 6→2đồng\n• Dùng 1 đồng 4 + đồng 1 + ... Nhiều cách khác\n• Đáp án tối ưu:3 + 3 = 6→2đồng\nTại sao Greedy sai?Nếu dùng tham lam (luôn chọn đồng lớn nhất trước): chọn 4,\ncòn 2, chọn 1, còn 1, chọn 1→4 + 1 + 1 = 6→3đồng. Nhưng đáp án tối ưu là 2 đồng\n(3 + 3). Greedy cho sai!\nBước 1: Xác định trạng thái\ndp[i] =số đồng xu ít nhất cần dùng để tạo tổng đúng bằngi.\n• dp[0] =?Để tạo tổng 0, không cần đồng nào→dp[0] = 0.\n• dp[6] =?Đó chính là đáp án ta cần tìm.\nBước 2: Viết công thức truy hồi\nĐể tạo tổngi, đồng xu cuối cùng ta dùng phải là một trongc1, c2, . . . , ck.\n• Nếu đồng cuối cùng làcj (vớic j≤i), thì trước đó ta đã tạo tổngi−cj, cầndp[i−c j]\nđồng. Thêm đồngcj nữa→tổng cộngdp[i−c j] + 1đồng.\n• Ta muốn ít đồng nhất→lấy min trên tất cả lựa chọn:\ndp[i] =\nk\nmin\nj=1\n(dp[i−c j] + 1)với mọic j≤i\nBước 3: Cơ sở\n• dp[0] = 0(tổng 0 cần 0 đồng)\n• dp[i] = +∞ban đầu choi >0(chưa biết có tạo được không)\nTruy vết từng bước\nĐồng xu:{1,3,4},n= 6.\nBan đầu: dp = [0, INF, INF, INF, INF, INF, INF]\ni = 1:\nThử c=1: dp[1-1] + 1 = dp[0] + 1 = 0 + 1 = 1 (nhận)\nThử c=3: 3 > 1 -> bỏ qua\nThử c=4: 4 > 1 -> bỏ qua\ndp[1] = 1\ni = 2:\nThử c=1: dp[2-1] + 1 = dp[1] + 1 = 1 + 1 = 2 (nhận)\nThử c=3: 3 > 2 -> bỏ qua\nThử c=4: 4 > 2 -> bỏ qua\ndp[2] = 2\ni = 3:\nThử c=1: dp[3-1] + 1 = dp[2] + 1 = 2 + 1 = 3\nThử c=3: dp[3-3] + 1 = dp[0] + 1 = 0 + 1 = 1 (tốt nhất!)\nThử c=4: 4 > 3 -> bỏ qua\ndp[3] = 1\ni = 4:\nThử c=1: dp[3] + 1 = 1 + 1 = 2\nThử c=3: dp[1] + 1 = 1 + 1 = 2\nThử c=4: dp[0] + 1 = 0 + 1 = 1 (tốt nhất!)\ndp[4] = 1\ni = 5:\nThử c=1: dp[4] + 1 = 1 + 1 = 2 (nhận)\nThử c=3: dp[2] + 1 = 2 + 1 = 3\nThử c=4: dp[1] + 1 = 1 + 1 = 2 (nhận)\ndp[5] = 2\ni = 6:\nThử c=1: dp[5] + 1 = 2 + 1 = 3\nThử c=3: dp[3] + 1 = 1 + 1 = 2 (tốt nhất!)\nThử c=4: dp[2] + 1 = 2 + 1 = 3\ndp[6] = 2\nKết quả:dp= [0,1,2,1,1,2,2]. Đáp án làdp[6] = 2, tức dùng 2 đồng (3 + 3).\nCode hoàn chỉnh\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n, k;\ncin >> n >> k;\nvector<int> coins(k);\nfor (int &c : coins) cin >> c;\n// dp[i] = số đồng xu ít nhất để tạo tổng i\nvector<int> dp(n + 1, 1e9); // 1e9 đại diện cho \"không thể\"\ndp[0] = 0; // Cơ sở: tổng 0 cần 0 đồng\nfor (int i = 1; i <= n; i++) {\nfor (int c : coins) {\nif (c <= i && dp[i - c] + 1 < dp[i]) {\ndp[i] = dp[i - c] + 1;\n}\n}\n}\nif (dp[n] >= 1e9) cout << -1 << endl;\nelse cout << dp[n] << endl;\n}\nPython\nn, k = map(int, input().split())\ncoins = list(map(int, input().split()))\nINF = 10**9\ndp = [INF] * (n + 1)\ndp[0] = 0\nfor i in range(1, n + 1):\nfor c in coins:\nif c <= i and dp[i - c] + 1 < dp[i]:\ndp[i] = dp[i - c] + 1\nif dp[n] >= INF:\nprint(-1)\nelse:\nprint(dp[n])\nInput mẫu:\n6 3\n1 3 4\nOutput mẫu:\n5. DP trên lưới (Grid Paths)\nĐề bài:Cho lướin×n. Một số ô là chướng ngại vật (’*’). Đếm số đường đi từ ô(1,1)\n(góc trên-trái) đến ô(n, n)(góc dưới-phải), chỉ được đi sang phải hoặc xuống dưới. In kết\nquả modulo10 9 + 7.\nVí dụ lưới4×4:\n. . . .\n. * . .\n. . . *\n. . . .\nBước 1: Trạng thái\ndp[i][j] =số đường đi từ(1,1)đến(i, j).\nBước 2: Công thức truy hồi\nĐể đến ô(i, j), ta chỉ có thể đến từ:\n• Ô phía trên:(i−1, j)- đi xuống\n• Ô bên trái:(i, j−1)- đi sang phải\nVậy:\ndp[i][j] =dp[i−1][j] +dp[i][j−1]\nNếu(i, j)là chướng ngại vật:dp[i][j] = 0(không thể đến đây).\nBước 3: Cơ sở\ndp[1][1] = 1(nếu(1,1)không phải chướng ngại vật).\nTruy vết trực quan\nĐiền giá trị vào lưới (ô chướng ngại vật= 0):\nLưới: Bảng dp:\n. . . .. * . .. . . *. . . .\n1 1 1 1\n1 0 1 2\n1 1 2 0\n1 2 4 4\nGiải thích từng ô:\n• dp[1][1] = 1(cơ sở)\n• Hàng đầu tiên: mỗi ô chỉ có thể đến từ bên trái→dp[1][j] =dp[1][j−1] = 1\n• Cột đầu tiên: mỗi ô chỉ có thể đến từ trên→dp[i][1] =dp[i−1][1] = 1\n• dp[2][2] = 0vì(2,2)là chướng ngại vật\n• dp[2][3] =dp[1][3] +dp[2][2] = 1 + 0 = 1\n• dp[2][4] =dp[1][4] +dp[2][3] = 1 + 1 = 2\n• dp[3][3] =dp[2][3] +dp[3][2] = 1 + 1 = 2\n• dp[3][4] = 0(chướng ngại vật)\n• dp[4][3] =dp[3][3] +dp[4][2] = 2 + 2 = 4\n• dp[4][4] =dp[3][4] +dp[4][3] = 0 + 4 = 4\nĐáp án: 4 đường đi.\nCode hoàn chỉnh\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nconst int MOD = 1e9 + 7;\nint main() {\nint n;\ncin >> n;\nvector<string> grid(n);\nfor (auto &row : grid) cin >> row;\nvector<vector<long long>> dp(n, vector<long long>(n, 0));\n// Cơ sở\nif (grid[0][0] == ’*’) {\ncout << 0 << endl;\nreturn 0;\n}\ndp[0][0] = 1;\n// Điền bảng theo thứ tự từ trên xuống, trái qua phải\nfor (int i = 0; i < n; i++) {\nfor (int j = 0; j < n; j++) {\nif (grid[i][j] == ’*’) {\ndp[i][j] = 0;\ncontinue;\n}\nif (i > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;\nif (j > 0) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;\n}\n}\ncout << dp[n - 1][n - 1] << endl;\n}\nPython\nMOD = 10**9 + 7\nn = int(input())\ngrid = [input().strip() for _ in range(n)]\ndp = [[0] * n for _ in range(n)]\nif grid[0][0] == ’*’:\nprint(0)\nelse:\ndp[0][0] = 1\nfor i in range(n):\nfor j in range(n):\nif grid[i][j] == ’*’:\ndp[i][j] = 0\ncontinue\nif i > 0:\ndp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD\nif j > 0:\ndp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD\nprint(dp[n - 1][n - 1])\nLưu ý:Nhớ lấy modulo10 9 + 7ở mỗi bước cộng để tránh tràn số!\n6. Dãy con tăng dài nhất (LIS - Longest Increasing\nSubsequence)\nĐề bài:Cho dãya 1, a2, . . . , an. Tìm dãy con (không cần liên tiếp) tăng nghiêm ngặt\ndài nhất.\nVí dụ:a= [3,1,4,1,5,9,2,6]. Dãy con tăng dài nhất là[1,4,5,9]hoặc[1,4,5,6]hoặc\n[3,4,5,9](LIS = 4).\nLưu ý:\"Dãy con\"(subsequence) khác \"đoạn con\"(subarray). Dãy con không cần liên\ntiếp, chỉ cần giữ nguyên thứ tự.\nBước 1: Trạng thái\ndp[i] =độ dài dãy con tăng dài nhất kết thúc tại vị tríi.\nTại sao lại \"kết thúc tạii\"?Vì khi mở rộng dãy con, ta cần biết phần tử cuối cùng\nlà gì để so sánh.\nBước 2: Công thức truy hồi\nĐể mở rộng dãy con kết thúc tạii, ta tìm tất cả vị tríj < isao choa[j]< a[i](để nối\ntiếp được):\ndp[i] = max(dp[j] + 1)với mọij < isao choa[j]< a[i]\nNếu không cójnào thỏa mãn,dp[i] = 1(dãy con chỉ gồma[i]).\nBước 3: Cơ sở\ndp[i] = 1cho mọii(mỗi phần tử tự nó là dãy con tăng độ dài 1).\nTruy vết từng bước\na= [3,1,4,1,5,9,2,6](đánh số từ 0).\ni=0, a[0]=3: Không có j < 0 -> dp[0] = 1 [3]\ni=1, a[1]=1: j=0: a[0]=3 > 1 (loại) -> dp[1] = 1 [1]\ni=2, a[2]=4: j=0: a[0]=3 < 4 (thỏa) dp[0]+1=2\nj=1: a[1]=1 < 4 (thỏa) dp[1]+1=2\n-> dp[2] = 2 [3,4] hoặc [1,4]\ni=3, a[3]=1: j=0: a[0]=3 > 1 (loại)\nj=1: a[1]=1 = 1 (loại, cần nghiêm ngặt <)\nj=2: a[2]=4 > 1 (loại)\n-> dp[3] = 1 [1]\ni=4, a[4]=5: j=0: 3<5 (thỏa) dp[0]+1=2\nj=1: 1<5 (thỏa) dp[1]+1=2\nj=2: 4<5 (thỏa) dp[2]+1=3 <-- tốt nhất!\nj=3: 1<5 (thỏa) dp[3]+1=2\n-> dp[4] = 3 [1,4,5] hoặc [3,4,5]\ni=5, a[5]=9: dp[0]+1=2, dp[1]+1=2, dp[2]+1=3,\ndp[3]+1=2, dp[4]+1=4 <-- tốt nhất!\n-> dp[5] = 4 [1,4,5,9]\ni=6, a[6]=2: j=1: 1<2 (thỏa) dp[1]+1=2\nj=3: 1<2 (thỏa) dp[3]+1=2\n-> dp[6] = 2 [1,2]\ni=7, a[7]=6: dp[0]+1=2, dp[1]+1=2, dp[2]+1=3,\ndp[3]+1=2, dp[4]+1=4, dp[6]+1=3\n-> dp[7] = 4 [1,4,5,6]\nBảngdp:\na: 3 1 4 1 5 9 2 6\ndp: 1 1 2 1 3 4 2 4\nLIS= max(dp) = 4.\nCode hoàn chỉnh\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n;\ncin >> n;\nvector<int> a(n);\nfor (int &x : a) cin >> x;\nvector<int> dp(n, 1); // Cơ sở: mỗi phần tử tự nó là dãy con độ dài 1\nfor (int i = 1; i < n; i++) {\nfor (int j = 0; j < i; j++) {\nif (a[j] < a[i]) {\ndp[i] = max(dp[i], dp[j] + 1);\n}\n}\n}\nint lis = *max_element(dp.begin(), dp.end());\ncout << lis << endl;\n}\nPython\nn = int(input())\na = list(map(int, input().split()))\ndp = [1] * n\nfor i in range(1, n):\nfor j in range(i):\nif a[j] < a[i]:\ndp[i] = max(dp[i], dp[j] + 1)\nprint(max(dp))\nĐộ phức tạp:O(n 2). Vớin≤5000, cách này đủ nhanh. (Có cáchO(nlogn)nhưng\nthuộc mức nâng cao hơn.)\n7. Bài toán ba lô (0/1 Knapsack)\nĐề bài:Cónđồ vật. Đồ vật thứicó trọng lượngw i và giá trịvi. Ba lô chứa được tối\nđaWkg. Mỗi đồ vật chỉ lấy hoặc không (không lấy một phần). Tìm tổng giá trị lớn nhất\ncó thể mang đi.\nVí dụ:W= 7,n= 4đồ vật:\nĐỒ VẬT TRỌNG LƯỢNG (wi) GIÁ TRỊ (vi)\n1 1 1\n2 3 4\n3 4 5\n4 5 7\nKnapsack là bài rất điển hình cho tư duy \"ra quyết định từng bước\". Khi đứng trước\nmột đồ vật, ta chỉ có 2 lựa chọn:\n• Lấy nó\n• Không lấy nó\nĐiều này gợi ý rằng ta nên xử lý các đồ vật theo thứ tự, và tại mỗi bước chỉ cần biết:\n1. Ta đã xét đến bao nhiêu đồ vật.\n2. Ba lô còn (hoặc có) bao nhiêu sức chứa.\nVì vậy, trạng thái tự nhiên nhất là:\ndp[i][j] =giá trị lớn nhất khi xétiđồ vật đầu tiên, với sức chứa tối đaj.\nTại sao trạng thái này hợp lý?\n• Nếu biết ta đang ở đồ vật thứi.\n• Và biết ba lô có sức chứa tối đaj.\n• Thì mọi quyết định tiếp theo chỉ phụ thuộc vào 2 thông tin đó.\nTa không cần nhớ chính xác đã lấy những đồ vật nào, chỉ cần nhớ: đã xét đến đâu và còn\nbao nhiêu khả năng chứa. Đó là dấu hiệu của một trạng thái DP tốt: nó chứa đủ thông\ntin để ra quyết định tiếp, nhưng không chứa thông tin thừa.\nTại sao phải có chiềui?\nNhiều bạn mới học hay hỏi:\"Sao không đặt luôndp[j]là đáp án với sức chứaj?\"\nThật ra có thể, nhưng đó là phiên bản tối ưu bộ nhớ sau này. Ban đầu, dùngdp[i][j]\ndễ hiểu hơn vì:\n• icho biết ta đang xét đồ vật nào.\n• Khi đó, với đồ vật thứi, ta có đúng 2 lựa chọn:\n-Không lấy: quay về bài toán vớii−1đồ vật.\n-Lấy: cũng quay về bài toán vớii−1đồ vật, nhưng giảm sức chứa điwi.\nNói cách khác, chiềuigiúp ta diễn đạt rất rõ ý tưởng:\"Đáp án hiện tại được xây từ đáp\nán của bài toán nhỏ hơn.\"\nMột cách nghĩ rất quan trọng\nHãy tưởng tượng:\n• dp[i][j]là đáp án tốt nhất sau khi đã quyết định xong vớiiđồ vật đầu tiên.\n• Đồ vật thứilà đồ vật \"mới nhất\"vừa được xét.\n• Không lấy đồ vậti→đáp án giữ nguyên như cũ:dp[i−1][j].\n• Lấy đồ vậti→ta phải dành raw i đơn vị sức chứa→phần còn lại là bài toán:\ndùngi−1đồ vật đầu để đạt giá trị tốt nhất với sức chứaj−w i→giá trị nhận\nđược làdp[i−1][j−w i] +v i.\nTừ trực giác này, công thức truy hồi gần như \"tự rơi ra\":\ndp[i][j] = max(dp[i−1][j], dp[i−1][j−w i] +v i)\nTóm tắt trực giác\nTrạng thái Knapsack có dạngdp[i][j]vì bài toán có đúng 2 chiều thông tin quan trọng:\n• Đã xét bao nhiêu đồ vật.\n• Còn/có bao nhiêu sức chứa.\nĐây là cách mô tả ngắn gọn nhưng đủ mạnh để biểu diễn mọi lời giải con của bài toán.\nBước 1: Trạng thái (phiên bản 2D)\ndp[i][j] =giá trị lớn nhất có thể đạt được khi xétiđồ vật đầu tiên và ba lô có sức chứa\ntối đaj.\nBước 2: Công thức truy hồi\nVới đồ vật thứi, ta có 2 lựa chọn:\n• Không lấy đồ vậti:dp[i][j] =dp[i−1][j].\n• Lấy đồ vậti(nếuj≥w i):dp[i][j] =dp[i−1][j−w i] +v i.\nLấy max:\ndp[i][j] = max(dp[i−1][j], dp[i−1][j−w i] +v i)\nBước 3: Cơ sở\ndp[0][j] = 0cho mọij(chưa xét đồ vật nào→giá trị= 0).\nTruy vết bảng DP\nBảngdp[i][j](hàng = đồ vật, cột = sức chứa 0-7):\nj: 0 1 2 3 4 5 6 7\ni= 0(-) 0 0 0 0 0 0 0 0\ni= 1(w= 1, v= 1) 0 1 1 1 1 1 1 1\ni= 2(w= 3, v= 4) 0 1 1 4 5 5 5 5\ni= 3(w= 4, v= 5) 0 1 1 4 5 6 6 9\ni= 4(w= 5, v= 7) 0 1 1 4 5 7 8 9\nGiải thích một số ô:\n• dp[2][3]: Xét vật 1, 2; sức chứa 3.\n-Lấy vật 2 (w= 3, v= 4):dp[1][0] + 4 = 0 + 4 = 4.\n-Không lấy:dp[1][3] = 1.\n-Max= 4.\n• dp[2][4]:\n-Lấy vật 2:dp[1][1] + 4 = 1 + 4 = 5.\n-Không lấy:dp[1][4] = 1.\n-Max= 5.\n• dp[3][7]:\n-Lấy vật 3 (w= 4):dp[2][3] + 5 = 4 + 5 = 9.\n-Không lấy:dp[2][7] = 5.\n-Max= 9.\nĐáp án:dp[4][7] = 9(lấy vật 2 và vật 3: trọng lượng3 + 4 = 7, giá trị4 + 5 = 9).\nCode (2D DP)\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint knapsack(int n, int W, vector<int>& w, vector<int>& v) {\nvector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));\nfor (int i = 1; i <= n; i++) {\nfor (int j = 0; j <= W; j++) {\ndp[i][j] = dp[i - 1][j]; // không lấy vật i\nif (j >= w[i]) {\ndp[i][j] = max(dp[i][j], dp[i - 1][j - w[i]] + v[i]); // lấy vật i\n}\n}\n}\nreturn dp[n][W];\n}\nint main() {\nint n = 4, W = 7;\nvector<int> w = {0, 1, 3, 4, 5}; // 1-indexed\nvector<int> v = {0, 1, 4, 5, 7}; // 1-indexed\ncout << knapsack(n, W, w, v) << \"\\n\";\nreturn 0;\n}\nPython\ndef knapsack(n, W, w, v):\ndp = [[0] * (W + 1) for _ in range(n + 1)]\nfor i in range(1, n + 1):\nfor j in range(W + 1):\ndp[i][j] = dp[i - 1][j] # không lấy vật i\nif j >= w[i]:\ndp[i][j] = max(dp[i][j], dp[i - 1][j - w[i]] + v[i]) # lấy vật i\nreturn dp[n][W]\nn, W = 4, 7\nw = [0, 1, 3, 4, 5] # 1-indexed\nv = [0, 1, 4, 5, 7] # 1-indexed\nprint(knapsack(n, W, w, v))\nTối ưu bộ nhớ: Bước trung gian - dp_old / dp_new\nNhận xét:để tính hàngi, ta chỉ cần hàngi−1. Vì vậy, thay vì lưu toàn bộ bảng\n(n+ 1)×(W+ 1), ta có thể dùng 2 mảng 1D:\n• dp_old[j]- lưu kết quả hàngi−1(đã tính xong)\n• dp_new[j]- lưu kết quả hàngi(đang tính)\nCông thức lúc này:\ndp_new[j] = max(dp_old[j],dp_old[j−w i] +v i)\nĐiểm mấu chốt:khi tínhdp_new[j], ta chỉ đọc từdp_old- không bao giờ ghi đè nó.\nĐây là điều sẽ thay đổi ở bước tiếp theo.\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint knapsack(int n, int W, vector<int>& w, vector<int>& v) {\nvector<int> dp_old(W + 1, 0);\nvector<int> dp_new(W + 1, 0);\nfor (int i = 1; i <= n; i++) {\nfor (int j = 0; j <= W; j++) {\ndp_new[j] = dp_old[j]; // không lấy vật i\nif (j >= w[i]) {\ndp_new[j] = max(dp_new[j], dp_old[j - w[i]] + v[i]); // lấy vật i\n}\n}\nswap(dp_old, dp_new); // dp_old <- hàng vừa tính\n}\nreturn dp_old[W]; // sau swap cuối, dp_old chứa kết quả hàng n\n}\nint main() {\nint n = 4, W = 7;\nvector<int> w = {0, 1, 3, 4, 5}; // 1-indexed\nvector<int> v = {0, 1, 4, 5, 7}; // 1-indexed\ncout << knapsack(n, W, w, v) << \"\\n\";\nreturn 0;\n}\nPython\ndef knapsack(n, W, w, v):\ndp_old = [0] * (W + 1)\ndp_new = [0] * (W + 1)\nfor i in range(1, n + 1):\nfor j in range(W + 1):\ndp_new[j] = dp_old[j] # không lấy vật i\nif j >= w[i]:\ndp_new[j] = max(dp_new[j], dp_old[j - w[i]] + v[i]) # lấy vật i\ndp_old, dp_new = dp_new, dp_old # dp_old <- hàng vừa tính\nreturn dp_old[W] # sau swap cuối, dp_old chứa kết quả hàng n\nn, W = 4, 7\nw = [0, 1, 3, 4, 5] # 1-indexed\nv = [0, 1, 4, 5, 7] # 1-indexed\nprint(knapsack(n, W, w, v))\nBộ nhớ giảm từO(nW)xuốngO(W), và code vẫn trực quan:dp_oldluôn là \"hàng\ntrước\",dp_newluôn là \"hàng đang tính\".\nTối ưu bộ nhớ: Gộp thành mảng 1D\nNhìn lại công thức:\ndp_new[j] = max(dp_old[j],dp_old[j−w i] +v i)\nKhi tínhdp_new[j], ta cầndp_old[j - w_i]- một vị trí nhỏ hơnj(vìw i >0).\nĐiều này có nghĩa: nếu ta gộp thành 1 mảngdp[]vàduyệtjtừ lớn đến nhỏ(từ\nWvềw i), thì khi cập nhậtdp[j]:\n• dp[j - w_i]chưa được cập nhật trong vòng lặp hiện tại (vìj−wi < jvà ta chưa\nduyệt đến đó)\n• →nó vẫn là giá trị cũ≡dp_old[j - w_i]✓\nNgược lại, nếu duyệt xuôi (từwi đếnW), khi tínhdp[j],dp[j - w_i]đã bị ghi đè bởi\nvòng lặp hiện tại→ta vô tình lấy vậtinhiều lần (Unbounded Knapsack).\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, W;\ncin >> n >> W;\nvector<int> w(n), v(n);\nfor (int i = 0; i < n; i++) cin >> w[i] >> v[i];\nvector<int> dp(W + 1, 0);\nfor (int i = 0; i < n; i++) {\nfor (int j = W; j >= w[i]; j--) { // duyệt ngược\ndp[j] = max(dp[j], dp[j - w[i]] + v[i]);\n}\n}\ncout << dp[W] << \"\\n\";\n}\nPython\nn, W = map(int, input().split())\nw, v = [], []\nfor _ in range(n):\nwi, vi = map(int, input().split())\nw.append(wi)\nv.append(vi)\ndp = [0] * (W + 1)\nfor i in range(n):\nfor j in range(W, w[i] - 1, -1): # duyệt ngược\ndp[j] = max(dp[j], dp[j - w[i]] + v[i])\nprint(dp[W])\n8. Khi nào dùng DP?\nHãy tự hỏi:\n1. Bài toán có tính tối ưu không? (tìm min, max, đếm số cách...)\n2. Có bài toán con chồng chéo không? (cùng tính toán lặp lại nhiều lần?)\n3. Greedy có cho sai không? (nếu greedy đúng, không cần DP)\n4. Có thể tìm công thức truy hồi không? (dp[i]tính từdp[. . .]?)\nNếu câu trả lời là \"có\"→rất có thể đây là bài DP!\n9. Sai lầm phổ biến khi làm DP\n• Sai lầm 1: Sai cơ sở (base case)\n-Quên khởi tạodp[0], hoặc khởi tạo sai.\n-Ví dụ: Coin Change phải códp[0] = 0, nếu quên thì mọi giá trị đều sai.\n• Sai lầm 2: Sai thứ tự tính\n-Bottom-up phải tính từ nhỏ đến lớn (hoặc theo thứ tự mà các trạng thái phụ\nthuộc đã được tính xong).\n-Knapsack0/1phảiduyệtngượcj,nếuduyệtxuôisẽthànhunboundedknapsack.\n• Sai lầm 3: Quên dùng long long\n-Khi đề bài yêu cầu modulo→kết quả trung gian có thể vượtint.\n-Khi đếm số cách mà không modulo→kết quả cực lớn.\n• Sai lầm 4: Tràn mảng\n-Truy cậpdp[i−1]khii= 0→lỗi.\n-Truy cậpdp[i−c]khii < c→lỗi.\n• Sai lầm 5: Nhầm lẫn \"đếm cách\"và \"tìm min/max\"\n-Đếm cách→khởi tạodp[0] = 1, cộng dồn.\n-Tìm min→khởi tạo INF, dùng min.\n-Tìm max→khởi tạo 0 hoặc -INF, dùng max.\n10. Mẹo luyện tập\n• Bắt đầu từ bài đơn giản: Fibonacci→Coin Change→Grid Paths→LIS→\nKnapsack.\n• Luôn viết truy hồi trên giấy trước khi code.\n• Tự chạy tay bảng DP với ví dụ nhỏ để kiểm tra.\n• Nếu stuck: thử suy nghĩ \"nếu đồng xu cuối cùng / vật cuối cùng / phần tử cuối\ncùng là gì?\".\n• Đừng nản! DP cần thời gian để quen. Giải 20-30 bài DP, bạn sẽ bắt đầu nhìn ra\npattern.",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b9-p1-atcoder-educational-dp-contest-problem-a-frog-1",
            "title": "Atcoder Educational DP Contest - Problem A: Frog 1",
            "fileName": "Atcoder Educational DP Contest - Problem A_ Frog 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1100,
            "preview": "Bài toán Atcoder Educational DP Contest - Problem A: Frog 1. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Atcoder Educational DP Contest - Problem A_ Frog 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có N hòn đá được đánh số từ 1, 2, …, N. Hòn đá thứ i có chiều cao là h i.\nBan đầu, có một con ếch đang ngồi ở hòn đá thứ nhất. Con ếch sẽ lặp đi lặp lại thao tác sau\nnhiều lần để đến được hòn đá thứ N:\n• Nếu con ếch đang ở hòn đá thứ i, nó có thể nhảy đến hòn đá thứ i + 1 hoặc hòn đá\nthứ i + 2 với chi phí là ∣ h i − h j ∣ (j là hòn đá mà con ếch nhảy đến).\nBạn hãy giúp con ếch tìm chi phí tối thiểu để nhảy từ hòn đá thứ nhất tới hòn đá thứ N nhé.\n\nInput\n• Dòng thứ nhất chứa một số nguyên dương N (2 ≤ N ≤ 10^5).\n• Dòng thứ hai chứa N số nguyên h 1, h 2, …, h N (1 ≤ h i ≤ 1 0 4).\n\nOutput\n• Một dòng chứa một số nguyên duy nhất là kết quả bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n10 30 40 20",
            "sampleOutput": "30",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n10 30 40 20",
                "output": "30"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p2-atcoder-educational-dp-contest-problem-b-frog-2",
            "title": "Atcoder Educational DP Contest - Problem B: Frog 2",
            "fileName": "Atcoder Educational DP Contest - Problem B_ Frog 2 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Atcoder Educational DP Contest - Problem B: Frog 2. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Atcoder Educational DP Contest - Problem B_ Frog 2 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có N hòn đá, được đánh số từ 1, 2,..., N. Độ cao của hòn đá thứ i là h i.\nCó một con ếch ban đầu ở hòn đá thứ 1. Nó sẽ lặp lại các thao tác sau nhiều lần để tới được\nhòn đá thứ N.\n• Nếu con ếch đang ở hòn đá thứ i, nó có thể nhảy đến hòn đá thứ i + 1, i + 2,..., i +\nK. Với chi phí cho mỗi lần nhảy là ∣ h i − h j ∣ (j là hòn đá mà con ếch nhảy đến)\nBạn hãy giúp con ếch tìm chi phí tối thiểu để nhảy từ hòn đá thứ nhất tới hòn đá thứ N nhé.\n\nInput\n• Dòng 1: Ghi hai số nguyên N và K (2 ≤ N ≤ 10^5, 1 ≤ K ≤ 100).\n• Dòng 2: ghi N số nguyên dương h 1, h 2,..., h N (1 ≤ h i ≤ 1 0 4).\n\nOutput\n• Ghi một số nguyên duy nhất là chi phí tối thiểu để nhảy từ hòn đá thứ nhất đến hòn đá\nthứ N.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n10 30 40 50 20",
            "sampleOutput": "30",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n10 30 40 50 20",
                "output": "30"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p3-atcoder-educational-dp-contest-problem-c-vacation",
            "title": "Atcoder Educational DP Contest - Problem C: Vacation",
            "fileName": "Atcoder Educational DP Contest - Problem C_ Vacation - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Atcoder Educational DP Contest - Problem C: Vacation. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Atcoder Educational DP Contest - Problem C_ Vacation - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Kì nghỉ hè của Taro sẽ bắt đầu vào ngày mai và cậu bé đã quyết định lên kế hoạch cho kì\nnghỉ ngay từ bây giờ.\nKì nghỉ gồm N ngày. Ngày thứ i, Taro sẽ chọn một trong các hoạt động sau:\n• A: Bơi ở biển. Đạt được a i điểm hạnh phúc.\n• B: Bắt côn trùng trên núi. Đạt được b i điểm hạnh phúc.\n• C: Làm bài tập về nhà. Đạt được c i điểm hạnh phúc.\nVì Taro dễ chán nên cậu bé không thể làm cùng một hoạt động trong 2 ngày liên tiếp trở lên.\nHãy tính điểm hạnh phúc lớn nhất mà Taro có thể đạt được.\n\nInput\n• Dòng đầu: Ghi số nguyên N (1 ≤ N ≤ 10^5).\n• N dòng tiếp theo, mỗi dòng ghi 3 số nguyên a i, b i, c i (1 ≤ a i, b i, c i ≤ 1 0 4).\n\nOutput\n• Ghi một số nguyên duy nhất là tổng điểm hạnh phúc lớn nhất mà Taro có thể đạt được.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n10 40 70\n20 50 80\n30 60 90",
            "sampleOutput": "210",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n10 40 70\n20 50 80\n30 60 90",
                "output": "210"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p4-b-i-to-n-ba-l-1",
            "title": "Bài toán ba lô 1",
            "fileName": "Bài toán ba lô 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Bài toán ba lô 1. Giới hạn thời gian 2.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Bài toán ba lô 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có N viên bi, được đánh số 1, 2, 3,..., N. Với mỗi i (1 ≤ i ≤ N), viên bi thứ i có khối\nlượng là w i và có giá trị là v i.\nK aninh o quyết định chọn một số viên bi từ N viên bi trên và bỏ vào ba lô để đi chơi. Sức\nchứa của ba lô là W, có nghĩa là tổng khối lượng của các viên bi được chọn phải không được\nquá W.\nTìm tổng giá trị lớn nhất có thể của các viên bi được chọn để bỏ vào ba lô.\n\nInput\n• Dòng thứ nhất chứa hai số nguyên N, W (1 ≤ N ≤ 100, 1 ≤ W ≤ 10^5)\n• N dòng tiếp theo, mỗi dòng chứa hai số nguyên w i, v i (1 ≤ w i ≤ W, 1 ≤ v i ≤ 10^9)\n\nOutput\n• In ra giá trị cần tìm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 8\n3 30\n4 50\n5 60",
            "sampleOutput": "90",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 8\n3 30\n4 50\n5 60",
                "output": "90"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p5-coin-combinations-i",
            "title": "Coin Combinations I",
            "fileName": "CSES - Coin Combinations I _ Kết hợp đồng xu I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Coin Combinations I. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Coin Combinations I _ Kết hợp đồng xu I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hãy xem xét một hệ thống tiền bao gồm n đồng xu. Mỗi đồng xu có giá trị là một số nguyên\ndương. Nhiệm vụ của bạn là tính số lượng các cách khác nhau mà bạn có thể tạo ra một\nkhoản tiền x bằng cách sử dụng các đồng xu có sẵn.\nVí dụ: nếu các đồng xu là { 2, 3, 5 } và tổng mong muốn là 9, có 8 cách:\n• 2 + 2 + 5\n• 2 + 5 + 2\n• 5 + 2 + 2\n• 3 + 3 + 3\n• 2 + 2 + 2 + 3\n• 2 + 2 + 3 + 2\n• 2 + 3 + 2 + 2\n• 3 + 2 + 2 + 2\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và x: số lượng đồng xu và tổng số tiền mong\nmuốn.\n• Dòng thứ hai có n số nguyên phân biệt biệt c 1, c 2, …, c n: giá trị của mỗi đồng xu.\n\nOutput\n• In một số nguyên: số lượng cách, chia lấy dư cho 10^9 + 7.\n\nScoring\n• 1 ≤ n ≤ 100\n• 1 ≤ x ≤ 10^6\n• 1 ≤ c i ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 9\n2 3 5",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 9\n2 3 5",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p6-coin-combinations-ii",
            "title": "Coin Combinations II",
            "fileName": "CSES - Coin Combinations II _ Kết hợp đồng xu II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Coin Combinations II. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Coin Combinations II _ Kết hợp đồng xu II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Xét một hệ thống tiền tệ với n loại đồng xu. Mỗi đồng xu có giá trị là một số nguyên dương.\nHãy tính số cách khác nhau, không kể thứ tự để tạo ra tổng tiền x từ những đồng này.\nVí dụ: nếu các đồng xu là { 2, 3, 5 } và tổng mong muốn là 9, có 3 cách:\n• 2 + 2 + 5\n• 3 + 3 + 3\n• 2 + 2 + 2 + 3\n\nInput\n• Dòng đầu tiên chứa hai số nguyên n và x: số lượng đồng xu và tổng số tiền mong\nmuốn\n• Dòng thứ hai chứa n số nguyên riêng biệt c 1, c 2, …, c n: giá trị của mỗi đồng xu\n\nOutput\n• In một số nguyên duy nhất: số lượng cách, chia lấy dư cho 10^9 + 7\n\nScoring\n• 1 ≤ n ≤ 100\n• 1 ≤ x ≤ 10^6\n• 1 ≤ c i ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 9\n2 3 5",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 9\n2 3 5",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p7-dice-combinations",
            "title": "Dice Combinations",
            "fileName": "CSES - Dice Combinations _ Kết hợp xúc xắc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Dice Combinations. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Dice Combinations _ Kết hợp xúc xắc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là đếm số cách tạo ra tổng n bằng cách gieo xúc xắc một hoặc nhiều lần.\nMỗi lần gieo cho ra số từ 1 đến 6.\nVí dụ, nếu n = 3, có 4 cách:\n• 1 + 1 + 1\n• 1 + 2\n• 2 + 1\n• 3\n\nInput\n• Dòng đầu vào duy nhất có số nguyên n.\n• Giới hạn: 1 ≤ n ≤ 10^6\n\nOutput\n• In số cách chia lấy dư cho 10^9 + 7.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p8-grid-paths",
            "title": "Grid Paths",
            "fileName": "CSES - Grid Paths _ Đường đi trên lưới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Grid Paths. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Grid Paths _ Đường đi trên lưới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Xét một lưới ô vuông kích thước n × n, trong đó một số ô có thể có bẫy. Ta không được\nphép đi qua một ô có bẫy.\nHãy tính số lượng đường đi từ góc trên trái đến góc dưới phải của lưới, biết rằng ta chỉ được\nđi sang phải hoặc đi xuống dưới.\n\nInput\n• Dòng đầu tiên chứa một số nguyên n: kích thước của lưới.\n• n dòng sau, mỗi dòng chứa n kí tự mô tả lưới:. biểu thị một ô trống và * biểu thị\nmột cái bẫy.\n\nOutput\n• In ra một số nguyên duy nhất là số lượng đường đi chia lấy dư cho 10^9 + 7.\n\nScoring\n• 1 ≤ n ≤ 1000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n....\n.*..\n...*\n*...",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n....\n.*..\n...*\n*...",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p9-minimizing-coins",
            "title": "Minimizing Coins",
            "fileName": "CSES - Minimizing Coins _ Giảm thiểu đồng xu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Minimizing Coins. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Minimizing Coins _ Giảm thiểu đồng xu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hãy xét một hệ thống tiền bao gồm n đồng xu. Mỗi đồng xu có giá trị là một số nguyên\ndương. Nhiệm vụ của bạn là tạo ra một khoản tiền x bằng cách sử dụng các đồng xu có sẵn\nsao cho số lượng đồng xu là tối thiểu.\nVí dụ: nếu các đồng xu là { 1, 5, 7 } và tổng mong muốn là 11, một giải pháp tối ưu là 5 +\n5 + 1, cần 3 đồng xu.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và x: số lượng đồng xu và tổng số tiền mong\nmuốn\n• Dòng thứ hai có n số nguyên phân biệt c 1, c 2, …, c n: giá trị của mỗi đồng xu\n\nOutput\n• In một số nguyên: số lượng đồng xu tối thiểu. Nếu không thể tạo ra tổng mong muốn,\nhãy in − 1\n\nScoring\n• 1 ≤ n ≤ 100\n• 1 ≤ x ≤ 10^6\n• 1 ≤ c i ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 11\n1 5 7",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 11\n1 5 7",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p10-money-sums",
            "title": "Money Sums",
            "fileName": "CSES - Money Sums _ Khoản tiền - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Money Sums. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Money Sums _ Khoản tiền - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn có n đồng xu với các giá trị nhất định. Nhiệm vụ của bạn là tìm tất cả các khoản tiền bạn\ncó thể tạo bằng những đồng xu này.\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: số lượng đồng xu\n• Dòng tiếp theo có n số nguyên x 1, x 2, …, x n: giá trị của các đồng xu\n\nOutput\n• Dòng đầu tiên in ra một số nguyên k: số lượng khoản tiền khác nhau có thể tạo\n• Dòng tiếp theo in ra k số nguyên: các khoản tiền có thể tạo được, theo thứ tự tăng dần\n\nScoring\n• 1 ≤ n ≤ 100\n• 1 ≤ x_i ≤ 1000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n4 2 5 2",
            "sampleOutput": "9\n2 4 5 6 7 8 9 11 13",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n4 2 5 2",
                "output": "9\n2 4 5 6 7 8 9 11 13"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p11-removing-digits",
            "title": "Removing Digits",
            "fileName": "CSES - Removing Digits _ Loại bỏ chữ số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Removing Digits. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/CSES - Removing Digits _ Loại bỏ chữ số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một số nguyên n. Ở mỗi bước, bạn có thể trừ n đi một lượng bằng một trong\ncác chữ số của nó.\nCần bao nhiêu bước để làm cho n bằng 0 ?\n\nInput\n• Gồm một dòng duy nhất chứa số nguyên n (1 ≤ n ≤ 10^6).\n\nOutput\n• In ra một số nguyên duy nhất là số bước tối thiểu cần dùng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "27",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "27",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p12-d-y-con-t-ng-d-i-nh-t-b-n-d",
            "title": "Dãy con tăng dài nhất (bản dễ)",
            "fileName": "Dãy con tăng dài nhất (bản dễ) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Dãy con tăng dài nhất (bản dễ). Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Dãy con tăng dài nhất (bản dễ) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy số nguyên gồm N phần tử A [ 1 ], A [ 2 ],... A [ N ].\nBiết rằng dãy con tăng đơn điệu là 1 dãy A [ i 1 ],... A [ i k ] thỏa mãn\ni 1 < i 2 <... < i k và A [ i 1 ] < A [ i 2 ] <.. < A [ i k ].\nYêu cầu:\n• Hãy cho biết dãy con tăng đơn điệu dài nhất của dãy này có bao nhiêu phần tử.\n\nInput\n• Dòng đầu tiên chứa số nguyên dương N (1 ≤ N ≤ 1000)\n• Dòng thứ 2 ghi N số nguyên A [ 1 ], A [ 2 ],.. A [ N ] (1 ≤ A [ i ] ≤ 1000000).\n\nOutput\n• Ghi ra độ dài của dãy con tăng đơn điệu dài nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n1 2 5 4 6 2",
            "sampleOutput": "4\nNguồn: vn.spoj",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n1 2 5 4 6 2",
                "output": "4\nNguồn: vn.spoj"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p13-t-nh-s-fibo-th-n",
            "title": "Tính số Fibo thứ n",
            "fileName": "Tính số Fibo thứ n - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 600,
            "preview": "Bài toán Tính số Fibo thứ n. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Tính số Fibo thứ n - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "F 1 = F 2 = 1\nF n = F n − 1 + F n − 2 với n > 2\nTính F n\n\nInput\n• Số test t (t ≤ 5)\n• t dòng, mỗi dòng 1 số nguyên dương n (n ≤ 50)\n\nOutput\n• t dòng, F n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n1\n2\n3",
            "sampleOutput": "1\n1\n2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n1\n2\n3",
                "output": "1\n1\n2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b9-p14-o-n-c",
            "title": "Đo nước",
            "fileName": "Đo nước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Đo nước. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 9/Đo nước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bờm đang nghiên cứu mực nước biển ở hành tinh Quạt Mo. Sau nhiều ngày theo dõi, Bờm\nnhận thấy rằng quy luật của mực nước biển là: mực nước biển của một ngày bất kì bằng\ntrung bình cộng mực nước biển của ngày hôm trước và ngày hôm sau. Dựa vào ghi chép\nmực nước biển hai ngày đầu của Bờm, hãy tính toán mực nước biển ngày thứ N.\n\nInput\n• Dòng 1: chứa 2 số nguyên b, a là mực nước biển 2 ngày đầu (− 100 ≤ a, b ≤ 100). Số\na là mực nước ngày thứ nhất, số b là mực nước ngày thứ 2.\n• Dòng 2: chứa số nguyên dương N (3 ≤ N ≤ 1 0 12).\n\nOutput\n• Mực nước biển ngày thứ N.\n\nScoring\n• Subtask 1 (50% số điểm): n ≤ 1 0 7\n• Subtask 2 (50% số điểm): 1 0 7 < n ≤ 1 0 12",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1 2\n3",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1 2\n3",
                "output": "3"
              },
              {
                "id": "Test 2",
                "input": "3 1\n3",
                "output": "-1"
              }
            ],
            "totalTests": 2
          }
        ]
      },
      {
        "id": "cp-bronze-lesson-10",
        "order": 10,
        "title": "Đồ thị cơ bản (BFS & DFS)",
        "theoryPdfFileName": "Chapter 2 leson 10 - Đồ thị cơ bản.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 2 leson 10 - Đồ thị cơ bản.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Đồ thị cơ bản (BFS & DFS) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Đồ thị cơ bản (BFS/DFS)\nNội dung\n1. Đồ thị là gì? Ví dụ thực tế\n2. Biểu diễn đồ thị bằng danh sách kề (Adjacency List)\n• Code đọc đồ thị\n3. DFS (Depth-First Search) - Tìm kiếm theo chiều sâu\n• Ý tưởng\n• Thuật toán\n• Truy vết trực quan\n• Code DFS\n• Ứng dụng quan trọng: Đếm thành phần liên thông\n4. BFS (Breadth-First Search) - Tìm kiếm theo chiều rộng\n• Ý tưởng\n• Thuật toán\n• Truy vết trực quan\n• Tại sao BFS tìm được đường đi ngắn nhất?\n• Code BFS\n5. Flood Fill trên lưới - Đếm phòng (Counting Rooms)\n• Cách giải\n6. BFS tìm đường đi ngắn nhất + Truy vết đường đi\n• Cách giải\n7. Đồ thị hai phía (Bipartite Graph) - Tô 2 màu\n• Đồ thị hai phía là gì?\n• Cách kiểm tra: BFS/DFS tô màu\n• Code kiểm tra Bipartite bằng BFS\n8. Topological Sort - Sắp xếp topo (Đồ thị có hướng không chu trình)\n• Bài toán thực tế\n• Thuật toán Kahn (BFS-based)\n• Truy vết\n• Code\n9. Sai lầm phổ biến khi làm bài đồ thị\n10. Mẹo luyện tập\nChào mừng các bạn đến với đồ thị (Graph) - một trong những cấu trúc dữ liệu quan\ntrọng nhất trong khoa học máy tính và lập trình thi đấu! Rất nhiều bài toán thực tế\ncó thể mô hình hóa bằng đồ thị, và BFS/DFS là hai thuật toán nền tảng nhất để xử lý\nchúng.\n1. Đồ thị là gì? Ví dụ thực tế\nĐồ thị gồm hai thành phần:\n• Đỉnh (vertex/node): đại diện cho các đối tượng.\n• Cạnh (edge): đại diện cho mối quan hệ giữa hai đối tượng.\nVí dụ thực tế:\nBÀI TOÁN ĐỈNH CẠNH\nBản đồ giao thông Thành phố Đường nối 2 thành phố\nMạng xã hội Người dùng Quan hệ bạn bè\nInternet Máy tính Kết nối mạng\nLịch học Môn học Môn A phải học trước môn B\nMê cung Ô trong lưới 2 ô liền kề đi được\nPhân loại:\n• Đồ thị vô hướng (undirected): cạnh(u, v)đi được cả hai chiều. Ví dụ: đường hai\nchiều, quan hệ bạn bè.\n• Đồ thị có hướng (directed): cạnh(u, v)chỉ đi được từuđếnv. Ví dụ: đường một\nchiều, môn tiên quyết.\nHãyxemmộtđồthịvôhướngđơngiảnvới5đỉnhvà6cạnh:Cáccạnh:(1,2),(1,3),(2,3),(2,4),(3,4),(4,5).\n2. Biểu diễn đồ thị bằng danh sách kề (Adjacency List)\nCó nhiều cách lưu đồ thị trong máy tính. Cách phổ biến nhất trong CP là danh sách kề\n(adjacency list).\nÝ tưởng:Với mỗi đỉnhu, lưu danh sách các đỉnhvkề vớiu(tức các đỉnhvsao cho có\ncạnh(u, v)).\nVí dụ với đồ thị trên:\nadj[1] = {2, 3}\nadj[2] = {1, 3, 4}\nadj[3] = {1, 2, 4}\nadj[4] = {2, 3, 5}\nadj[5] = {4}\nCode đọc đồ thị\nInput mẫu (5 đỉnh, 6 cạnh):\n5 6\n1 2\n1 3\n2 3\n2 4\n3 4\n4 5\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, m; // n đỉnh, m cạnh\ncin >> n >> m;\n// Tạo danh sách kề (đánh số đỉnh từ 1 đến n)\nvector<vector<int>> adj(n + 1);\nfor (int i = 0; i < m; i++) {\nint u, v;\ncin >> u >> v;\nadj[u].push_back(v); // thêm v vào danh sách kề của u\nadj[v].push_back(u); // thêm u vào danh sách kề của v (đồ thị vô hướng)\n// Nếu đồ thị CÓ HƯỚNG: chỉ giữ dòng adj[u].push_back(v)\n}\n}\nPython\nn, m = map(int, input().split())\n# Tạo danh sách kề, đánh số đỉnh từ 1 đến n\nadj = [[] for _ in range(n + 1)]\nfor _ in range(m):\nu, v = map(int, input().split())\nadj[u].append(v) # thêm v vào danh sách kề của u\nadj[v].append(u) # thêm u vào danh sách kề của v (đồ thị vô hướng)\n# Nếu đồ thị CÓ HƯỚNG: chỉ giữ dòng adj[u].append(v)\nBộ nhớ:O(n+m)- rất tiết kiệm!\nLưu ý:Còn cách biểu diễn bằng ma trận kề (O(n2)bộ nhớ), nhưng chỉ phù hợp khi\nn≤1000. Trong CP, danh sách kề là lựa chọn tiêu chuẩn.\n3. DFS (Depth-First Search) - Tìm kiếm theo chiều\nsâu\nÝ tưởng\nDFS đi sâu nhất có thể trước khi quay lui. Giống như bạn đi vào mê cung: luôn rẽ theo\nmột hướng cho đến khi đụng tường, rồi quay lại và thử hướng khác.\nThuật toán\n1. Bắt đầu từ đỉnhu.\n2. Đánh dấuulà \"đã thăm\".\n3. Với mỗi đỉnhvkều:\n4. Nếuvchưa thăm→đệ quy DFS(v).\n5. Khi không còn đỉnh kề chưa thăm→quay lui.\nTruy vết trực quan\nDFS bắt đầu từ đỉnh 1:\n• Bước 1:Thăm 1 (đánh dấuvisited[1] = true). Hàng xóm:[2,3]. Chọn 2 (chưa\nthăm)→đệ quy DFS(2).\n• Bước 2:Thăm 2 (đánh dấuvisited[2] = true). Hàng xóm:[1,3,4]. 1 đã thăm\n→bỏ qua. Chọn 3→đệ quy DFS(3).\n• Bước 3:Thăm 3 (đánh dấuvisited[3] = true). Hàng xóm:[1,2,4]. 1 đã thăm,\n2 đã thăm. Chọn 4→đệ quy DFS(4).\n• Bước 4:Thăm 4 (đánh dấuvisited[4] = true). Hàng xóm:[2,3,5]. 2 đã thăm,\n3 đã thăm. Chọn 5→đệ quy DFS(5).\n• Bước 5:Thăm 5 (đánh dấuvisited[5] = true). Hàng xóm:[4]. 4 đã thăm→\nkhông đi đâu được→Quay lui về 4.\n• Quay lui về 4: Không còn hàng xóm chưa thăm→quay lui về 3.\n• Quay lui về 3: Không còn→quay lui về 2.\n• Quay lui về 2: Không còn→quay lui về 1.\n• Quay lui về 1: Không còn→KẾT THÚC.\nThứ tự thăm:1→2→3→4→5.\nNgăn xếp đệ quy (recursion stack) tại bước 5:\n| DFS(5) | <- đỉnh stack\n| DFS(4) |\n| DFS(3) |\n| DFS(2) |\n| DFS(1) | <- đáy stack\nCode DFS\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nconst int MAXN = 100005;\nvector<int> adj[MAXN];\nbool visited[MAXN];\nvoid dfs(int u) {\nvisited[u] = true; // Đánh dấu đã thăm\ncout << u << \" \"; // In ra thứ tự thăm (tùy bài)\nfor (int v : adj[u]) { // Duyệt tất cả hàng xóm\nif (!visited[v]) { // Nếu chưa thăm\ndfs(v); // Đệ quy DFS\n}\n}\n}\nint main() {\nint n, m;\ncin >> n >> m;\nfor (int i = 0; i < m; i++) {\nint u, v;\ncin >> u >> v;\nadj[u].push_back(v);\nadj[v].push_back(u);\n}\nmemset(visited, false, sizeof visited);\ndfs(1); // Bắt đầu DFS từ đỉnh 1\n}\nPython\nimport sys\nsys.setrecursionlimit(10**6)\nn, m = map(int, input().split())\nadj = [[] for _ in range(n + 1)]\nfor _ in range(m):\nu, v = map(int, input().split())\nadj[u].append(v)\nadj[v].append(u)\nvisited = [False] * (n + 1)\ndef dfs(u):\nvisited[u] = True # Đánh dấu đã thăm\nprint(u, end=’ ’) # In ra thứ tự thăm (tùy bài)\nfor v in adj[u]: # Duyệt tất cả hàng xóm\nif not visited[v]: # Nếu chưa thăm\ndfs(v) # Đệ quy DFS\ndfs(1) # Bắt đầu DFS từ đỉnh 1\nĐộ phức tạp:O(n+m)- mỗi đỉnh và mỗi cạnh được xét đúng 1 lần.\nỨng dụng quan trọng: Đếm thành phần liên thông\nThành phần liên thông (connected component) là nhóm các đỉnh mà từ bất kỳ đỉnh nào\ntrong nhóm đều có thể đi đến các đỉnh khác.\nVí dụ đồ thị với 7 đỉnh có 3 thành phần liên thông:{1,2,3},{4,5,6},{7}.\nCách đếm: Lặp qua tất cả đỉnh, nếu đỉnh chưa thăm→gọi DFS→tăng bộ đếm.\nC++\nint components = 0;\nfor (int u = 1; u <= n; u++) {\nif (!visited[u]) {\ndfs(u);\ncomponents++;\n}\n}\ncout << components << endl;\nPython\ncomponents = 0\nfor u in range(1, n + 1):\nif not visited[u]:\ndfs(u)\ncomponents += 1\nprint(components)\n4. BFS (Breadth-First Search) - Tìm kiếm theo chiều\nrộng\nÝ tưởng\nBFS duyệt từng lớp (level): thăm tất cả đỉnh cách gốc 1 bước trước, rồi tất cả đỉnh cách\ngốc 2 bước, rồi 3 bước... Giống như sóng lan tỏa từ tâm: sóng lan đến đâu thì thăm đến\nđó.\nBFS dùng hàng đợi (queue) - cấu trúc FIFO (vào trước, ra trước).\nThuật toán\n1. Đưa đỉnh nguồn vào queue, đánh dấu khoảng cách = 0.\n2. Lặp cho đến khi queue rỗng:\na. Lấy đỉnhura khỏi đầu queue.\nb. Với mỗi đỉnh kềvchưa thăm củau:\n• Khoảng cáchv=khoảng cáchu+ 1.\n• Đưavvào cuối queue.\nTruy vết trực quan\nCùng đồ thị, BFS từ đỉnh 1:\n• Bước 0:Queue =[1], dist =[−,0,−,−,−,−]. Lấy 1 ra. Hàng xóm chưa thăm: 2,\n3. Thêm 2 và 3 vào queue→Queue =[2,3], dist =[−,0,1,1,−,−].\n• Bước 1:Lấy 2 ra. Hàng xóm: 1 (đã thăm), 3 (đã thăm), 4 (chưa). Thêm 4 vào\nqueue→Queue =[3,4], dist =[−,0,1,1,2,−].\n• Bước 2:Lấy 3 ra. Hàng xóm: 1 (đã thăm), 2 (đã thăm), 4 (đã thăm). Không thêm\ngì→Queue =[4], dist =[−,0,1,1,2,−].\n• Bước 3:Lấy 4 ra. Hàng xóm: 2 (đã thăm), 3 (đã thăm), 5 (chưa). Thêm 5 vào\nqueue→Queue =[5], dist =[−,0,1,1,2,3].\n• Bước 4:Lấy 5 ra. Hàng xóm: 4 (đã thăm). Không thêm gì→Queue =[ ]→KẾT\nTHÚC.\nKết quả khoảng cách (số cạnh ngắn nhất từ đỉnh 1):\nĐỉnh: 1 2 3 4 5\ndist: 0 1 1 2 3\nTại sao BFS tìm được đường đi ngắn nhất?\nVì BFS duyệt theo từng lớp: tất cả đỉnh cách nguồnkbước được thăm trước tất cả đỉnh\ncách nguồnk+ 1bước. Nên lần đầu tiên ta đến một đỉnh, đó chắc chắn là đường ngắn\nnhất!\nLưu ý quan trọng:BFS chỉ tìm đường ngắn nhất khi mỗi cạnh có trọng số bằng nhau\n(hoặc không trọng số). Nếu cạnh có trọng số khác nhau, phải dùng thuật toán Dijkstra.\nCode BFS\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nconst int MAXN = 100005;\nvector<int> adj[MAXN];\nint dist[MAXN]; // dist[v] = khoảng cách ngắn nhất từ nguồn đến v\nvoid bfs(int start, int n) {\nmemset(dist, -1, sizeof dist); // -1 = chưa thăm\nqueue<int> q;\ndist[start] = 0;\nq.push(start);\nwhile (!q.empty()) {\nint u = q.front();\nq.pop();\nfor (int v : adj[u]) {\nif (dist[v] == -1) { // v chưa thăm?\ndist[v] = dist[u] + 1; // Khoảng cách = khoảng cách u + 1\nq.push(v); // Đưa v vào queue\n}\n}\n}\n}\nint main() {\nint n, m;\ncin >> n >> m;\nfor (int i = 0; i < m; i++) {\nint u, v;\ncin >> u >> v;\nadj[u].push_back(v);\nadj[v].push_back(u);\n}\nbfs(1, n); // BFS từ đỉnh 1\n// In khoảng cách từ đỉnh 1 đến tất cả đỉnh khác\nfor (int i = 1; i <= n; i++) {\ncout << \"Đỉnh \" << i << \": \" << dist[i] << endl;\n}\n}\nPython\nfrom collections import deque\nn, m = map(int, input().split())\nadj = [[] for _ in range(n + 1)]\nfor _ in range(m):\nu, v = map(int, input().split())\nadj[u].append(v)\nadj[v].append(u)\ndist = [-1] * (n + 1) # dist[v] = khoảng cách ngắn nhất từ nguồn đến v\ndef bfs(start):\nq = deque()\ndist[start] = 0\nq.append(start)\nwhile q:\nu = q.popleft()\nfor v in adj[u]:\nif dist[v] == -1: # v chưa thăm?\ndist[v] = dist[u] + 1 # khoảng cách = khoảng cách u + 1\nq.append(v) # đưa v vào queue\nbfs(1) # BFS từ đỉnh 1\nfor i in range(1, n + 1):\nprint(f\"Đỉnh {i}: {dist[i]}\")\n5.FloodFilltrênlưới-Đếmphòng(CountingRooms)\nFlood fill là ứng dụng kinh điển của DFS/BFS trên lưới 2D.\nĐề bài:Cho bản đồn×mgồm’.’(sàn) và’#’(tường). Đếm số phòng (một phòng\nlà một vùng sàn liên thông theo 4 hướng).\nVí dụ:\n########\n#..#...#\n####.#.#\n#..#...#\n########\nCó 3 phòng:\n########\n#AA#BBB#\n####B#B#\n#CC#BBB#\n########\nPhòng A: 2 ô. Phòng B: 7 ô. Phòng C: 2 ô.\nCách giải\nBiến lưới thành đồ thị: mỗi ô’.’là một đỉnh, hai ô’.’kề nhau (lên/xuống/trái/phải)\ncó cạnh nối. Đếm thành phần liên thông = đếm phòng.\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint n, m;\nchar grid[1005][1005];\nbool visited[1005][1005];\n// 4 hướng: lên, xuống, trái, phải\nint dx[] = {-1, 1, 0, 0};\nint dy[] = {0, 0, -1, 1};\nvoid dfs(int x, int y) {\nvisited[x][y] = true;\nfor (int d = 0; d < 4; d++) {\nint nx = x + dx[d];\nint ny = y + dy[d];\n// Kiểm tra: trong lưới, là sàn, chưa thăm\nif (nx >= 0 && nx < n && ny >= 0 && ny < m\n&& grid[nx][ny] == ’.’ && !visited[nx][ny]) {\ndfs(nx, ny);\n}\n}\n}\nint main() {\ncin >> n >> m;\nfor (int i = 0; i < n; i++)\ncin >> grid[i];\nmemset(visited, false, sizeof visited);\nint rooms = 0;\nfor (int i = 0; i < n; i++) {\nfor (int j = 0; j < m; j++) {\nif (grid[i][j] == ’.’ && !visited[i][j]) {\ndfs(i, j); // Flood fill: đánh dấu toàn bộ phòng\nrooms++; // Tìm thấy 1 phòng mới\n}\n}\n}\ncout << rooms << endl;\n}\nPython\nimport sys\nsys.setrecursionlimit(10**6)\nn, m = map(int, input().split())\ngrid = [list(input().strip()) for _ in range(n)]\nvisited = [[False] * m for _ in range(n)]\n# 4 hướng: lên, xuống, trái, phải\ndx = [-1, 1, 0, 0]\ndy = [0, 0, -1, 1]\ndef dfs(x, y):\nvisited[x][y] = True\nfor d in range(4):\nnx = x + dx[d]\nny = y + dy[d]\n# Kiểm tra: trong lưới, là sàn, chưa thăm\nif 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == ’.’ and not visited[nx][ny]:\ndfs(nx, ny)\nrooms = 0\nfor i in range(n):\nfor j in range(m):\nif grid[i][j] == ’.’ and not visited[i][j]:\ndfs(i, j) # Flood fill: đánh dấu toàn bộ phòng\nrooms += 1 # Tìm thấy 1 phòng mới\nprint(rooms)\nMẹo:Thay vì dùng mảngvisited, bạn có thể đổi ô’.’thành’#’sau khi thăm (tiết\nkiệm bộ nhớ):\nC++\nvoid dfs(int x, int y) {\ngrid[x][y] = ’#’; // Đánh dấu bằng cách \"lấp\" ô\nfor (int d = 0; d < 4; d++) {\nint nx = x + dx[d], ny = y + dy[d];\nif (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == ’.’)\ndfs(nx, ny);\n}\n}\nPython\ndef dfs(x, y):\ngrid[x][y] = ’#’ # Đánh dấu bằng cách \"lấp\" ô\nfor d in range(4):\nnx = x + dx[d]\nny = y + dy[d]\nif 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == ’.’:\ndfs(nx, ny)\n6. BFS tìm đường đi ngắn nhất + Truy vết đường đi\nĐề bài:Cho mê cungn×m. Tìm đường đi ngắn nhất từ ô ’A’ đến ô ’B’. In ra đường\nđi dưới dạng chuỗi L/R/U/D.\nVí dụ:\n#.######\n#.A....#\n#.####.#\n#......#\n#.##.#B#\n########\nCách giải\nBFS từ ô A. Ngoài mảngdist, ta lưu thêm mảngparentđể biết \"ô này đến từ ô nào\",\ntừ đó truy vết đường đi.\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, m;\ncin >> n >> m;\nvector<string> grid(n);\npair<int,int> A, B;\nfor (int i = 0; i < n; i++) {\ncin >> grid[i];\nfor (int j = 0; j < m; j++) {\nif (grid[i][j] == ’A’) A = {i, j};\nif (grid[i][j] == ’B’) B = {i, j};\n}\n}\nvector<vector<int>> dist(n, vector<int>(m, -1));\nvector<vector<pair<int,int>>> parent(n, vector<pair<int,int>>(m, {-1, -1}));\nint dx[] = {-1, 1, 0, 0};\nint dy[] = {0, 0, -1, 1};\nchar dc[] = {’U’, ’D’, ’L’, ’R’};\nqueue<pair<int,int>> q;\nq.push(A);\ndist[A.first][A.second] = 0;\nwhile (!q.empty()) {\nauto [r, c] = q.front(); q.pop();\nfor (int d = 0; d < 4; d++) {\nint nr = r + dx[d], nc = c + dy[d];\nif (0 <= nr && nr < n && 0 <= nc && nc < m\n&& grid[nr][nc] != ’#’ && dist[nr][nc] == -1) {\ndist[nr][nc] = dist[r][c] + 1;\nparent[nr][nc] = {r, c};\nq.push({nr, nc});\n}\n}\n}\nauto [er, ec] = B;\nif (dist[er][ec] == -1) {\ncout << \"NO\\n\";\nreturn 0;\n}\ncout << \"YES\\n\" << dist[er][ec] << ’\\n’;\nstring path;\nfor (auto [r, c] = B; make_pair(r, c) != A; ) {\nauto [pr, pc] = parent[r][c];\nfor (int d = 0; d < 4; d++) {\nif (pr + dx[d] == r && pc + dy[d] == c) {\npath += dc[d];\nbreak;\n}\n}\nr = pr; c = pc;\n}\nreverse(path.begin(), path.end());\ncout << path << ’\\n’;\n}\nPython\nfrom collections import deque\nn, m = map(int, input().split())\ngrid = [input().strip() for _ in range(n)]\ndist = [[-1] * m for _ in range(n)]\nparent = [[(-1, -1) for _ in range(m)] for _ in range(n)]\ndx = [-1, 1, 0, 0]\ndy = [0, 0, -1, 1]\ndc = [’U’, ’D’, ’L’, ’R’]\nfor i in range(n):\nfor j in range(m):\nif grid[i][j] == ’A’:\nA = (i, j)\nif grid[i][j] == ’B’:\nB = (i, j)\nq = deque([A])\ndist[A[0]][A[1]] = 0\nwhile q:\nr, c = q.popleft()\nfor d in range(4):\nnr, nc = r + dx[d], c + dy[d]\nif 0 <= nr < n and 0 <= nc < m and grid[nr][nc] != ’#’ and dist[nr][nc] == -1:\ndist[nr][nc] = dist[r][c] + 1\nparent[nr][nc] = (r, c)\nq.append((nr, nc))\ner, ec = B\nif dist[er][ec] == -1:\nprint(\"NO\")\nelse:\nprint(\"YES\")\nprint(dist[er][ec])\npath = []\nr, c = B\nwhile (r, c) != A:\npr, pc = parent[r][c]\nfor d in range(4):\nif (pr + dx[d], pc + dy[d]) == (r, c):\npath.append(dc[d])\nbreak\nr, c = pr, pc\nprint(’’.join(reversed(path)))\nTruy vết hoạt động như thế nào?Giả sử BFS tìm được đườngA→(2,3)→\n(3,3)→(3,4)→B. Ta lưu:\nparent[B] = (3,4)\nparent[(3,4)] = (3,3)\nparent[(3,3)] = (2,3)\nparent[(2,3)] =A\nTruy ngược:B→(3,4)→(3,3)→(2,3)→A, rồi đảo ngược thànhA→(2,3)→\n(3,3)→(3,4)→B.\n7. Đồ thị hai phía (Bipartite Graph) - Tô 2 màu\nĐồ thị hai phía là gì?\nĐồ thị hai phía (bipartite graph) là đồ thị mà ta có thể tô 2 màu cho các đỉnh sao cho\nkhông có cạnh nào nối 2 đỉnh cùng màu.\nVí dụ thực tế: Chia học sinh thành 2 đội sao cho không có ai trong cùng đội là bạn\nthân.\nVí dụ đồ thị hai phía:\n• Đỏ: 1, 3\n• Xanh: 2, 4, 5\n• Cạnh:(1,2),(1,4),(3,2),(3,4),(4,5)→Không cạnh nào nối 2 đỉnh cùng màu✓\nVí dụ KHÔNG phải đồ thị hai phía: tam giác 1-2-3 (cạnh 1-2, 2-3, 3-1). Dù tô thế\nnào, luôn có 2 đỉnh kề cùng màu.\nCách kiểm tra: BFS/DFS tô màu\nThuật toán:\n1. Bắt đầu từ một đỉnh, tô màu 0.\n2. Tất cả hàng xóm tô màu 1.\n3. Tất cả hàng xóm của hàng xóm tô màu 0.\n4. Nếu gặp đỉnh đã tô mà cùng màu với đỉnh hiện tại→KHÔNG phải đồ thị hai phía.\nTruy vết ví dụ - Đồ thị: 1-2, 2-3, 3-4, 4-1, 2-4\n• Bước 1: Tô đỉnh 1 màu 0.\n• Bước 2: Hàng xóm 1 ={2,4}. Tô 2 màu 1, tô 4 màu 1.\n• Bước 3: Hàng xóm 2 ={1,3,4}.\n-1 đã tô màu 0, khác màu 2 (màu 1)→OK✓\n-Tô 3 màu 0.\n-4 đã tô màu 1, cùng màu 2 (màu 1)→XUNG ĐỘT!×\n→Không phải đồ thị hai phía.\nCode kiểm tra Bipartite bằng BFS\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nconst int MAXN = 100005;\nvector<int> adj[MAXN];\nint color[MAXN]; // -1 = chưa tô, 0 hoặc 1\nbool bfs_bipartite(int start) {\nqueue<int> q;\ncolor[start] = 0;\nq.push(start);\nwhile (!q.empty()) {\nint u = q.front();\nq.pop();\nfor (int v : adj[u]) {\nif (color[v] == -1) {\n// Chưa tô -> tô màu khác u\ncolor[v] = 1 - color[u];\nq.push(v);\n} else if (color[v] == color[u]) {\n// Đã tô cùng màu -> không phải bipartite!\nreturn false;\n}\n}\n}\nreturn true;\n}\nint main() {\nint n, m;\ncin >> n >> m;\nfor (int i = 0; i < m; i++) {\nint u, v;\ncin >> u >> v;\nadj[u].push_back(v);\nadj[v].push_back(u);\n}\nmemset(color, -1, sizeof color);\nbool is_bipartite = true;\n// Kiểm tra từng thành phần liên thông\nfor (int u = 1; u <= n; u++) {\nif (color[u] == -1) {\nif (!bfs_bipartite(u)) {\nis_bipartite = false;\nbreak;\n}\n}\n}\ncout << (is_bipartite ? \"YES\" : \"NO\") << endl;\n}\nPython\nfrom collections import deque\nn, m = map(int, input().split())\nadj = [[] for _ in range(n + 1)]\nfor _ in range(m):\nu, v = map(int, input().split())\nadj[u].append(v)\nadj[v].append(u)\ncolor = [-1] * (n + 1) # -1 = chưa tô, 0 hoặc 1\ndef bfs_bipartite(start):\nq = deque()\ncolor[start] = 0\nq.append(start)\nwhile q:\nu = q.popleft()\nfor v in adj[u]:\nif color[v] == -1:\n# Chưa tô -> tô màu khác u\ncolor[v] = 1 - color[u]\nq.append(v)\nelif color[v] == color[u]:\n# Đã tô cùng màu -> không phải bipartite\nreturn False\nreturn True\nis_bipartite = True\n# Kiểm tra từng thành phần liên thông\nfor u in range(1, n + 1):\nif color[u] == -1:\nif not bfs_bipartite(u):\nis_bipartite = False\nbreak\nprint(\"YES\" if is_bipartite else \"NO\")\nTính chất quan trọng:Đồ thị hai phía nếu và chỉ nếu không chứa chu trình có độ\ndài lẻ.\n8. Topological Sort - Sắp xếp topo (Đồ thị có hướng\nkhông chu trình)\nBài toán thực tế\nLịch học: Bạn cónmôn học, một số môn phải học trước môn khác. Tìm thứ tự học sao\ncho mọi điều kiện tiên quyết đều được thỏa mãn.\nVí dụ 6 môn học:\n• Toán rời rạc (1)→Cấu trúc dữ liệu (3)\n• Lập trình C (2)→Cấu trúc dữ liệu (3)\n• Cấu trúc dữ liệu (3)→Thuật toán (5)\n• Cấu trúc dữ liệu (3)→Cơ sở dữ liệu (4)\n• Thuật toán (5)→AI (6)\n• Cơ sở dữ liệu (4)→AI (6)\nĐồ thị có hướng:\n1 -> 3 -> 5 -> 6\n2 4\nThứ tự hợp lệ: 1, 2, 3, 4, 5, 6 hoặc 2, 1, 3, 5, 4, 6 (nhiều đáp án đúng).\nThuật toán Kahn (BFS-based)\nÝ tưởng:Dùng bậc vào (in-degree) - số cạnh đi vào mỗi đỉnh.\n1. Tính bậc vào (in-degree) cho tất cả đỉnh.\n2. Đưa tất cả đỉnh có bậc vào = 0 vào queue (đây là những đỉnh không có tiên quyết).\n3. Lặp:\n4. Lấy đỉnhura khỏi queue→thêm vào kết quả.\n5. Với mỗi đỉnhvmàuchỉ đến: giảm in-degree[v] đi 1.\n6. Nếu in-degree[v] = 0→đưavvào queue.\n7. Nếu kết quả có đủnđỉnh→topo sort thành công. Nếu không→có chu trình!\nTruy vết\nBan đầu: in-degree =[−,0,0,2,1,1,2](Đỉnh 1: 0, Đỉnh 2: 0, Đỉnh 3: 2, ...)\n• Bước 1:Queue =[1,2](in-degree = 0). Lấy 1. Con: 3. in-degree[3] =2−1 = 1.\nKết quả:[1].\n• Bước 2:Queue =[2]. Lấy 2. Con: 3. in-degree[3] =1−1 = 0→thêm 3 vào queue.\nKết quả:[1,2].\n• Bước 3:Queue =[3]. Lấy 3. Con: 5, 4. in-degree[5] = 0→thêm. in-degree[4] = 0\n→thêm. Kết quả:[1,2,3].\n• Bước 4:Queue =[5,4]. Lấy 5. Con: 6. in-degree[6] =2−1 = 1. Kết quả:[1,2,3,5].\n• Bước 5:Queue =[4]. Lấy 4. Con: 6. in-degree[6] =1−1 = 0→thêm. Kết quả:\n[1,2,3,5,4].\n• Bước 6:Queue =[6]. Lấy 6. Không có con. Kết quả:[1,2,3,5,4,6].\nThứ tự topo: 1, 2, 3, 5, 4, 6✓\nCode\nC++\n#include <bits/stdc++.h>\nusing namespace std;\nint main() {\nint n, m;\ncin >> n >> m;\nvector<vector<int>> adj(n + 1);\nvector<int> in_degree(n + 1, 0);\nfor (int i = 0; i < m; i++) {\nint u, v;\ncin >> u >> v;\nadj[u].push_back(v);\nin_degree[v]++;\n}\n// Đưa đỉnh có in-degree = 0 vào queue\nqueue<int> q;\nfor (int i = 1; i <= n; i++) {\nif (in_degree[i] == 0) {\nq.push(i);\n}\n}\nvector<int> topo_order;\nwhile (!q.empty()) {\nint u = q.front();\nq.pop();\ntopo_order.push_back(u);\nfor (int v : adj[u]) {\nin_degree[v]--;\nif (in_degree[v] == 0) {\nq.push(v);\n}\n}\n}\nif ((int)topo_order.size() != n) {\ncout << \"IMPOSSIBLE\" << endl; // Có chu trình!\n} else {\nfor (int x : topo_order) {\ncout << x << \" \";\n}\ncout << endl;\n}\n}\nPython\nfrom collections import deque\nn, m = map(int, input().split())\nadj = [[] for _ in range(n + 1)]\nin_degree = [0] * (n + 1)\nfor _ in range(m):\nu, v = map(int, input().split())\nadj[u].append(v)\nin_degree[v] += 1\n# Đưa đỉnh có in-degree = 0 vào queue\nq = deque()\nfor i in range(1, n + 1):\nif in_degree[i] == 0:\nq.append(i)\ntopo_order = []\nwhile q:\nu = q.popleft()\ntopo_order.append(u)\nfor v in adj[u]:\nin_degree[v] -= 1\nif in_degree[v] == 0:\nq.append(v)\nif len(topo_order) != n:\nprint(\"IMPOSSIBLE\") # Có chu trình\nelse:\nprint(*topo_order)\n9. Sai lầm phổ biến khi làm bài đồ thị\nSai lầm 1: Quên kiểm tra visited\nC++\n// SAI - sẽ lặp vô hạn hoặc thăm đỉnh nhiều lần!\nvoid dfs(int u) {\nfor (int v : adj[u])\ndfs(v);\n}\n// ĐÚNG\nvoid dfs(int u) {\nvisited[u] = true;\nfor (int v : adj[u])\nif (!visited[v])\ndfs(v);\n}\nPython\n# SAI - sẽ lặp vô hạn hoặc thăm đỉnh nhiều lần!\ndef dfs(u):\nfor v in adj[u]:\ndfs(v)\n# ĐÚNG\ndef dfs(u):\nvisited[u] = True\nfor v in adj[u]:\nif not visited[v]:\ndfs(v)\nSai lầm 2: Tràn stack (Stack Overflow) với DFS đệ quy\nKhi đồ thị là đường thẳng (1-2-3-...-100000), DFS đệ quy sẽ gọi 100000 lần lồng nhau→\ntràn stack! Tuy nhiên điều này chỉ diễn ra trên máy tính cá nhân, còn các online judge\nđều có stack lớn nên không lo bị tràn.\nGiải pháp:Dùng BFS (luôn an toàn), hoặc DFS dùng stack thủ công:\nC++\nvoid dfs_iterative(int start) {\nstack<int> st;\nst.push(start);\nvisited[start] = true;\nwhile (!st.empty()) {\nint u = st.top();\nst.pop();\nfor (int v : adj[u]) {\nif (!visited[v]) {\nvisited[v] = true;\nst.push(v);\n}\n}\n}\n}\nPython\ndef dfs_iterative(start):\nst = [start]\nvisited[start] = True\nwhile st:\nu = st.pop()\nfor v in adj[u]:\nif not visited[v]:\nvisited[v] = True\nst.append(v)\nHoặc tăng stack/giới hạn chạy tùy môi trường:\n• Linux/macOS: chạy chương trình với stack lớn hơn, ví dụ:ulimit -s unlimited\nrồi./a.out\n• Windows(MinGWg++):thêmcờkhibiêndịch:g++ -Wl,-stack,268435456 main.cpp\n-o main\n• Python:import sys; sys.setrecursionlimit(10**6)\nSai lầm 3: Nhầm lẫn đánh số 0-indexed và 1-indexed\nĐề bài thường đánh số đỉnh từ1đếnn, nhưng lưới thường đánh số từ0đếnn−1. Nếu\ndùng sai, sẽ bị lỗi truy cập ngoài mảng.\nC++\n// Nếu đỉnh đánh số 1..n -> khai báo mảng kích thước n+1\nvector<vector<int>> adj(n + 1);\nbool visited[n + 1];\n// Nếu lưới đánh số 0..n-1 -> chú ý kiểm tra biên\nif (nx >= 0 && nx < n && ny >= 0 && ny < m) // ĐÚNG\nif (nx >= 1 && nx <= n && ny >= 1 && ny <= m) // Nếu đánh số từ 1\nPython\n# Nếu đỉnh đánh số 1..n -> thường tạo mảng kích thước n+1\nadj = [[] for _ in range(n + 1)]\nvisited = [False] * (n + 1)\n# Nếu lưới đánh số 0..n-1 -> chú ý kiểm tra biên\nif 0 <= nx < n and 0 <= ny < m: # ĐÚNG\npass\n# Nếu bạn cố dùng kiểu 1..n cho lưới thì phải cực kỳ nhất quán,\n# nhưng thông thường grid trong Python nên dùng 0-indexed\nSai lầm 4: Đồ thị vô hướng nhưng chỉ thêm cạnh một chiều\nC++\n// SAI - đồ thị vô hướng cần cạnh hai chiều!\nadj[u].push_back(v);\n// ĐÚNG\nadj[u].push_back(v);\nadj[v].push_back(u);\nPython\n# SAI - đồ thị vô hướng cần cạnh hai chiều!\nadj[u].append(v)\n# ĐÚNG\nadj[u].append(v)\nadj[v].append(u)\nSai lầm 5: BFS nhưng đánh dấu visited SAU khi lấy ra khỏi queue\nC++\n// SAI - cùng đỉnh có thể được thêm vào queue nhiều lần!\nwhile (!q.empty()) {\nint u = q.front(); q.pop();\nvisited[u] = true; // <- quá muộn!\nfor (int v : adj[u])\nif (!visited[v])\nq.push(v);\n}\n// ĐÚNG - đánh dấu NGAY KHI thêm vào queue\nwhile (!q.empty()) {\nint u = q.front(); q.pop();\nfor (int v : adj[u]) {\nif (dist[v] == -1) { // Dùng dist == -1 thay cho visited\ndist[v] = dist[u] + 1;\nq.push(v);\n}\n}\n}\nPython\n# SAI - cùng đỉnh có thể được thêm vào queue nhiều lần!\nwhile q:\nu = q.popleft()\nvisited[u] = True # <- quá muộn!\nfor v in adj[u]:\nif not visited[v]:\nq.append(v)\n# ĐÚNG - đánh dấu NGAY KHI thêm vào queue\nwhile q:\nu = q.popleft()\nfor v in adj[u]:\nif dist[v] == -1: # Dùng dist == -1 thay cho visited\ndist[v] = dist[u] + 1\nq.append(v)\n10. Mẹo luyện tập\n• Bắt đầu từ bài DFS/BFS thuần: đếm thành phần liên thông, flood fill.\n• Luôn vẽ đồ thị ra giấy khi đọc đề - nhiều bài trông phức tạp nhưng vẽ ra sẽ rõ.\n• Khi bài cho lưới: nghĩ ngay đến BFS/DFS trên grid với 4 hướngdx/dy.\n• Khi bài yêu cầu đường đi ngắn nhất (không trọng số): BFS.\n• Khi bài yêu cầu kiểm tra liên thông, đếm vùng: DFS.\n• Khi bài có thứ tự phụ thuộc: topological sort.\n• Khi bài yêu cầu chia 2 nhóm: kiểm tra bipartite.\nĐồ thị là chủ đề rất rộng - BFS và DFS chỉ là bước khởi đầu. Nhưng chỉ với hai\nthuật toán này, các bạn đã có thể giải được rất nhiều bài!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c1-b10-p1-bfs-c-b-n",
            "title": "BFS Cơ bản",
            "fileName": "BFS Cơ bản - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 1000,
            "preview": "Bài toán BFS Cơ bản. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/BFS Cơ bản - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một đồ thị vô hướng gồm N đỉnh đánh số từ 1 tới N và M cạnh. Độ dài của mỗi cạnh\ncó giá trị là 1. Một đồ thị sẽ có 1 nút trung tâm S.\nYêu cầu: với mỗi đỉnh có thể tới được từ đỉnh S, tính khoảng cách ngắn nhất\ntừ đỉnh đó tới S và in ra các đỉnh theo thứ tự khoảng cách ngắn nhất tăng\ndần. Lưu ý: nếu 2 đỉnh có khoảng cách bằng nhau thì nhãn nào nhỏ hơn sẽ\nđứng trước.\n\nInput\n• Dòng đầu gồm 3 số nguyên N, M, S (N ≤ 100000, M ≤ 100000, 1 ≤ S ≤ N)\n• M dòng sau mỗi dòng gồm 2 số thể hiện 2 đầu của một cạnh.\n\nOutput\n• In ra số dòng tương ứng với số đỉnh có thể tới được từ S theo thứ tự khoảng cách ngắn\nnhất tăng dần.\n• Trên mỗi dòng in ra nhãn của đỉnh đó và khoảng cách ngắn nhất của đỉnh đó tới S.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "7 6 1\n1 2\n2 3\n3 4\n4 5\n5 6\n1 3",
            "sampleOutput": "1 0\n2 1\n3 1\n4 2\n5 3\n6 4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "7 6 1\n1 2\n2 3\n3 4\n4 5\n5 6\n1 3",
                "output": "1 0\n2 1\n3 1\n4 2\n5 3\n6 4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p2-cj-thanh-to-n-ballas",
            "title": "CJ thanh toán BALLAS",
            "fileName": "CJ thanh toán BALLAS - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán CJ thanh toán BALLAS. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CJ thanh toán BALLAS - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Khu vực SAN ANDREAS có N ngôi nhà và M đường giao thông một chiều. Mỗi con đường\nkết nối trực tiếp giữa 2 ngôi nhà. Các ngôi nhà được đánh số từ 1 tới N. CJ đang chuẩn bị\nthanh toán nhóm BALLAS ở một ngôi nhà trong khu vực, và sẽ bắt đầu tại nhà của CJ. Nhà\ncủa CJ có chỉ số là s, nhà của nhóm BALLAS có chỉ số là t. Một đường đi gọi là đường đi đơn\nnếu trong quá trình đi từ nhà CJ tới nhà của nhóm BALLAS, tất cả ngôi nhà đi qua nhiều nhất\nmột lần. Và tồn tại ít nhất một đường đi từ s tới t (vì thế CJ mới có thể đi thanh toán được).\nHãy tìm cho CJ đường đi đơn ngắn nhất để CJ nhanh chóng thanh toán nhóm BALLAS càng\nnhanh càng tốt (CJ còn nhiều việc chưa giải quyết xong). Nếu có nhiều đường đi đơn ngắn\nnhất, thì chỉ ra đường đi có thứ tự từ điển nhỏ nhất trong số đó.\n\nInput\n• Dòng đầu tiên chứa 4 số nguyên dương N, M, s, t (1 ≤ s, t ≤ N, s =  t).\n• M dòng tiếp theo, mỗi dòng chứa hai số nguyên dương u, v (1 ≤ u, v ≤ N, u =  v)\nthể hiện có đường đi một chiều nối từ ngôi nhà u tới ngôi nhà v trong khu vực.\n\nOutput\n• Ghi ra trên một dòng các ngôi nhà theo đúng thứ tự trên đường đi ngắn nhất tìm được,\nbắt đầu từ ngôi nhà s, kết thúc ở ngôi nhà t theo thứ tự từ điển nhỏ nhất (Ví dụ 10 có\nthứ tự từ điển lớn hơn 5, 5 có thứ tự từ điển lớn hơn 1).\n\nScoring\n• Subtask 1 (30% số điểm): N ≤ 1 0 3, M ≤ 1 0 4.\n• Subtask 2 (70% số điểm): N ≤ 10^5, M ≤ 10^6.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8 12 1 8\n1 3\n3 5\n7 6\n1 2\n2 4\n2 3\n3 1\n3 7\n6 8\n4 6\n6 2\n7 8",
            "sampleOutput": "1 3 7 8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8 12 1 8\n1 3\n3 5\n7 6\n1 2\n2 4\n2 3\n3 1\n3 7\n6 8\n4 6\n6 2\n7 8",
                "output": "1 3 7 8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p3-building-roads",
            "title": "Building Roads",
            "fileName": "CSES - Building Roads _ Xây đường - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1200,
            "preview": "Bài toán Building Roads. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Building Roads _ Xây đường - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Byteland có n thành phố, và m con đường đường giữa chúng. Mục tiêu là xây dựng các con\nđường mới để có một tuyến đường giữa hai thành phố bất kỳ.\nNhiệm vụ của bạn là tìm ra số lượng đường tối thiểu cần thiết, đồng thời xác định những con\nđường nào nên được xây dựng.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng thành phố và con đường\nđường. Các thành phố được đánh số 1, 2, …, n\n• Sau đó, có m dòng mô tả các con đường. Mỗi dòng có hai số nguyên a và b: có một\nđường giữa các thành phố đó\n• Một con đường luôn kết nối hai thành phố khác nhau, và có nhiều nhất một con đường\ngiữa hai thành phố bất kỳ\n• Ràng buộc:\n• 1 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n\n\nOutput\n• Đầu tiên in một số nguyên k: số lượng con đường cần thiết\n• Sau đó, in k dòng mô tả các con đường mới. Bạn có thể in bất kỳ giải pháp hợp lệ nào",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 2\n1 2\n3 4",
            "sampleOutput": "1\n2 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 2\n1 2\n3 4",
                "output": "1\n2 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p4-building-teams",
            "title": "Building Teams",
            "fileName": "CSES - Building Teams _ Xây đội - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1200,
            "preview": "Bài toán Building Teams. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Building Teams _ Xây đội - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n học sinh trong lớp của Uolevi, và m tình bạn giữa họ. Nhiệm vụ của bạn là chia học\nsinh thành hai đội theo cách mà không có hai học sinh nào trong một đội là bạn bè. Bạn có\nthể thoải mái lựa chọn kích thước của các đội.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng học sinh và tình bạn. Các học\nsinh được đánh số 1, 2, …, n\n• Sau đó, có m dòng mô tả các tình bạn. Mỗi dòng có hai số nguyên a và b: học sinh a và\nb là bạn bè\n• Mỗi tình bạn là giữa hai học sinh khác nhau. Bạn có thể giả định rằng có nhiều nhất một\ntình bạn giữa bất kỳ hai học sinh nào\n\nOutput\n• In một ví dụ về cách xây dựng các nhóm. Đối với mỗi học sinh, in 1 hoặc 2 tùy thuộc vào\nđội nào học sinh sẽ được chỉ định. Bạn có thể in bất kỳ đội hợp lệ nào\n• Nếu không có giải pháp nào, hãy in IMPOSSIBLE\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n1 2\n1 3\n4 5",
            "sampleOutput": "1 2 2 1 2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n1 2\n1 3\n4 5",
                "output": "1 2 2 1 2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p5-counting-rooms",
            "title": "Counting Rooms",
            "fileName": "CSES - Counting Rooms _ Đếm phòng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Counting Rooms. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Counting Rooms _ Đếm phòng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho trước bản đồ của một tòa nhà, và nhiệm vụ của bạn là đếm số lượng phòng của nó. Kích\nthước của bản đồ là n × m hình vuông, và mỗi hình vuông là sàn hoặc tường. Bạn có thể đi\nbộ sang trái, phải, lên trên và xuống dưới qua các ô sàn nhà.\n\nInput\n• Dòng đầu tiên chứa hai số nguyên n và m: kích thước của bản đồ\n• n dòng tiếp theo, mỗi dòng gồm m ký tự mô tả bản đồ. Mỗi ký tự là. (sàn) hoặc #\n(tường)\n• Ràng buộc:\n• 1 ≤ n, m ≤ 1000\n\nOutput\n• In một số nguyên: số lượng phòng",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 8\n########\n#..#...#\n####.#.#\n#..#...#\n########",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 8\n########\n#..#...#\n####.#.#\n#..#...#\n########",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p6-course-schedule",
            "title": "Course Schedule",
            "fileName": "CSES - Course Schedule _ Sắp xếp khóa học - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Course Schedule. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Course Schedule _ Sắp xếp khóa học - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn phải hoàn thành n khóa học. Có m yêu cầu thuộc dạng \"khóa học a phải được hoàn\nthành trước khóa học b \". Nhiệm vụ của bạn là tìm một thứ tự mà bạn có thể hoàn thành các\nkhóa học.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng khóa học và yêu cầu. Các\nkhóa học được đánh số 1, 2, …, n\n• Sau này, có m dòng mô tả các yêu cầu. Mỗi dòng có hai số nguyên a và b: khóa học a\nphải được hoàn thành trước khóa học b\n\nOutput\n• In một thứ tự mà bạn có thể hoàn thành các khóa học. Bạn có thể in bất kỳ thứ tự hợp lệ\nnào mà chứa tất cả các khóa học\n• Nếu không có lời giải nào, in IMPOSSIBLE\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n1 2\n3 1\n4 5",
            "sampleOutput": "3 4 1 5 2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n1 2\n3 1\n4 5",
                "output": "3 4 1 5 2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p7-labyrinth",
            "title": "Labyrinth",
            "fileName": "CSES - Labyrinth _ Mê cung - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Labyrinth. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Labyrinth _ Mê cung - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho bản đồ của một mê cung, nhiệm vụ của bạn là tìm ra một đường đi từ vị trí bắt đầu đến\nvị trí kết thúc. Bạn có thể đi sang trái, phải, lên trên và xuống dưới.\n\nInput\n• Dòng đầu tiên chứa hai số nguyên n và m: chiều cao và chiều rộng của bản đồ\n• n dòng tiếp theo, mỗi dòng gồm m ký tự mô tả mê cung. Mỗi ký tự là. (sàn), #\n(tường), A (bắt đầu) hoặc B (kết thúc)\n\nOutput\n• Đầu tiên in YES nếu tồn tại đường đi và NO nếu ngược lại\n• Nếu có đường đi, dòng tiếp theo in độ dài của đường đi ngắn nhất\n• Dòng cuối in mô tả của đường đi đó dưới dạng một xâu bao gồm các ký tự L (trái),\nR (phải), U (lên) và D (xuống). Bạn có thể in bất kỳ giải pháp hợp lệ nào\n\nScoring\n• 1 ≤ n, m ≤ 1000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 8\n########\n#.A#...#\n#.##.#B#\n#......#\n########",
            "sampleOutput": "YES\n9\nLDDRRRRRU",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 8\n########\n#.A#...#\n#.##.#B#\n#......#\n########",
                "output": "YES\n9\nLDDRRRRRU"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p8-message-route",
            "title": "Message Route",
            "fileName": "CSES - Message Route _ Đường truyền tin nhắn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1200,
            "preview": "Bài toán Message Route. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Message Route _ Đường truyền tin nhắn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Mạng của Syrjälä có n máy tính và m kết nối. Nhiệm vụ của bạn là tìm hiểu xem Uolevi có\nthể gửi tin nhắn cho Maija hay không, và nếu có thể, số lượng máy tính tối thiểu trên một\nđường tuyền như vậy là bao nhiêu.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng máy tính và kết nối. Các máy\ntính được đánh số 1, 2, …, n. Máy tính của Uolevi là 1 và máy tính của Maija là n.\n• Sau đó, có m dòng mô tả các kết nối. Mỗi dòng có hai số nguyên a và b: có một kết nối\ngiữa các máy tính đó.\n• Mỗi kết nối là giữa hai máy tính khác nhau và có nhiều nhất một kết nối giữa hai máy\ntính bất kỳ.\n\nOutput\n• Nếu có thể gửi tin nhắn, trước tiên hãy in k: số lượng máy tính tối thiểu trên một đường\ntruyền hợp lệ. Sau này, in một ví dụ về một đường truyền như vậy. Bạn có thể in bất kỳ\ngiải pháp hợp lệ nào.\n• Nếu không có đường truyền, in IMPOSSIBLE.\n\nScoring\n• 2 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 5\n1 2\n1 3\n1 4\n2 3\n5 4",
            "sampleOutput": "3\n1 4 5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 5\n1 2\n1 3\n1 4\n2 3\n5 4",
                "output": "3\n1 4 5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p9-round-trip",
            "title": "Round Trip",
            "fileName": "CSES - Round Trip _ Chuyến đi vòng tròn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Round Trip. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/CSES - Round Trip _ Chuyến đi vòng tròn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Byteland có n thành phố và m con đường giữa chúng. Nhiệm vụ của bạn là thiết kế một\nchuyến đi vòng tròn bắt đầu trong một thành phố, đi qua hai hoặc nhiều thành phố khác và\ncuối cùng trở về thành phố bắt đầu. Mỗi thành phố trung gian trên tuyến đường phải phân\nbiệt.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng thành phố và con đường. Các\nthành phố được đánh số 1, 2, …, n\n• Sau đó, có m dòng mô tả các con đường. Mỗi dòng có hai số nguyên a và b: có một\nđường giữa các thành phố đó\n• Mỗi con đường nằm giữa hai thành phố khác nhau, và có nhiều nhất một con đường\ngiữa hai thành phố bất kỳ\n\nOutput\n• Đầu tiên in một số nguyên k: số thành phố trên tuyến đường. Sau đó in k thành phố\ntheo thứ tự chúng sẽ được truy cập. Bạn có thể in bất kỳ giải pháp hợp lệ nào\n• Nếu không có giải pháp, hãy in IMPOSSIBLE\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 6\n1 3\n1 2\n5 3\n1 5\n2 4\n4 5",
            "sampleOutput": "4\n3 5 1 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 6\n1 3\n1 2\n5 3\n1 5\n2 4\n4 5",
                "output": "4\n3 5 1 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p10-dfs-c-b-n",
            "title": "DFS cơ bản",
            "fileName": "DFS cơ bản - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1000,
            "preview": "Bài toán DFS cơ bản. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/DFS cơ bản - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Đồ thị: Gồm một tập các đỉnh được nối với nhau bằng các cạnh. Nếu không không được chỉ\nrõ trong ngữ cảnh, đồ thị được hiểu là đồ thị đơn.\nLiên thông: Nếu giữa hai điểm bất kỳ của một đồ thị đều có thể thiết lập một đường đi từ\nđỉnh này đến đỉnh kia, đồ thị được coi là liên thông; nếu không, đồ thị được coi là không liên\nthông. Một đồ thị được coi là hoàn toàn không liên thông nếu không có đường đi giữa hai\nđỉnh bất kỳ trong đồ thị. Đây chỉ là một cái tên khác để miêu tả một đồ thị rỗng hoặc một\ntập độc lập.\nYêu cầu: Cho đơn đồ thị vô hướng G = (V, E) gồm n đỉnh và m cạnh, các đỉnh được đánh\nsố từ 1 tới n và các cạnh được đánh số từ 1 tới m. Tìm số thành phần liên thông của đồ thị.\n\nInput\n• Dòng 1: Chứa hai số n, m.\n• M dòng tiếp theo: Dòng thứ i có dạng 2 số nguyên u, v. Trong đó u, v là chỉ số hai\nđỉnh đầu mút của cạnh thứ i.\n\nOutput\n• Ghi số k là số thành phần liên thông của đồ thị.\n\nScoring\n• 1 ≤ n ≤ 100000\n• 1 ≤ m ≤ 100000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "7 6\n1 2\n1 3\n2 3\n5 6\n6 7\n5 7",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "7 6\n1 2\n1 3\n2 3\n5 6\n6 7\n5 7",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p11-eva",
            "title": "EVA",
            "fileName": "EVA - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1100,
            "preview": "Bài toán EVA. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/EVA - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một Trung tâm nghiên cứu tuyệt mật (mà chúng ta không có quyền nói rõ tên ở đây) có n\nphòng thí nghiệm đặt ngầm trong lòng đất. Các phòng thí nghiệm được đánh số từ 1 đến n\n(1 ≤ n ≤ 10^5). Giữa một số phòng có đường hầm nối với nhau, sao cho từ một phòng bất\nkỳ có thể đi đến phòng bất kỳ khác (có thể phải đi qua một số phòng nào đó). Độ dài mỗi\nđường hầm là như nhau và thời gian đi hết một đường hầm là 1. Không có đường hầm nào\nnối một phòng với chính nó, nhưng có thể có nhiều đường hầm cùng nối 2 phòng với nhau\nvà tổng cộng trong Trung tâm có tất cả m đường hầm (1 ≤ m ≤ 10^5). Đường hầm cho\nphép đi lại theo cả hai chiều. Có k phòng có lối thoát hiểm lên mặt đất (1 ≤ k ≤ n). Trong\ntrường hợp sơ tán khẩn cấp, tất cả các nhân viên phải tập trung ở những phòng có lối thoát\nhiểm.\nYêu cầu:\nHãy xác định thời gian tối thiểu để nhân viên mỗi phòng tập trung về phòng có lối thoát\nhiểm trong trường hợp phải sơ tán khẩn cấp.\nInput:\n• Dòng đầu tiên chứa 2 số nguyên n và k\n• Dòng thứ 2 chứa k số nguyên khác nhau cho biết các phòng có cửa thoát hiểm\n• Dòng thứ 3 chứa số nguyên m, mỗi dòng trong m dòng tiếp theo chứa 2 số nguyên xác\nđịnh cặp phòng có đường hầm nối trực tiếp.\nOutput:\n• Một dòng chứa n số nguyên, số thứ i xác định thời gian tối thiểu để nhân viên phòng i\nđi được tới phòng có lối thoát hiểm",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10 2\n10 8\n9\n6 7\n7 5\n5 8\n8 1\n1 10\n10 3\n3 4\n4 9\n9 2",
            "sampleOutput": "1 4 1 2 1 3 2 0 3 0",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10 2\n10 8\n9\n6 7\n7 5\n5 8\n8 1\n1 10\n10 3\n3 4\n4 9\n9 2",
                "output": "1 4 1 2 1 3 2 0 3 0"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c1-b10-p12-qu-n-l-v-ng-ballas",
            "title": "Quản lý vùng BALLAS",
            "fileName": "Quản lý vùng BALLAS - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Quản lý vùng BALLAS. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-1/Chương 1 bài 10/Quản lý vùng BALLAS - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Sau khi thanh toán hết băng nhóm BALLAS, CJ đã tịch thu những nơi do băng BALLAS làm\nchủ. Là một trong những người đứng đầu nhóm GROVE STREET FAMILIES, nên CJ đã ra lệnh\ncho một số lính thăm dò về vùng đất bị thu hồi này. Sau khi thăm dò, thì CJ biết trong vùng\ncó N ngôi nhà, đánh số từ 1 tới N, và có M tuyến đường giao thông hai chiều nối trực tiếp\nhai ngôi nhà với nhau. Lúc này CJ ra lệnh cho một số lính quản lý vùng đã được thu hồi với\ncác điều kiện sau:\n• Mỗi ngôi nhà chỉ chịu quản lý của một lính của CJ.\n• Tập hợp các ngôi nhà có thể kết nối được với nhau (bất kỳ hai ngôi nhà nào cũng có thể\nkết nối với nhau) thì cũng chỉ chịu quản lý bởi một lính của CJ.\n• Định nghĩa ngôi nhà u với ngôi nhà v kết nối được với nhau là tồn tại một đường đi\ngiữa hai ngôi nhà u và v, tức là tồn tại dãy các ngôi nhà P = ⟨ u = p 0, p 1, …, p k =\nv ⟩ sao cho ∀ i: 1 < i ≤ k thì tồn tại tuyến đường trực tiếp giữa hai ngôi nhà p i − 1 và\np i trong khu vực.\n• Số lính quản lý là ít nhất.\nYêu cầu: hãy tìm số lính quản lý thoả mãn các điều kiện của CJ, và chỉ ra rõ ra những ngôi nhà\nmà từng lính quản lý. Nếu có nhiều cách quản lý, chỉ ra một cách bất kì.\n\nInput\n• Gồm M + 1 dòng:\n• Dòng đầu tiên chứa 2 số nguyên dương N, M.\n• M dòng tiếp theo, mỗi dòng chứa hai số nguyên dương u, v thể hiện có tuyến\nđường hai chiều nối trực tiếp từ ngôi nhà u tới ngôi nhà v trong vùng.\n\nOutput\n• Gọi K là số đàn em quản lý thoả mãn các điều kiện của CJ. Ghi ra K + 1 dòng:\n• Dòng đầu tiên ghi ra số nguyên dương K.\n• K dòng tiếp theo, dòng thứ i ghi ra số đầu tiên là số X - số ngôi nhà do lính i\nquản lý, X số tiếp theo là số hiệu ngôi nhà do lính i quản lý.\n\nScoring\n• Subtask 1 (30% số điểm): N ≤ 1 0 3, M ≤ 1 0 4.\n• Subtask 2 (70% số điểm): N ≤ 10^5, M ≤ 10^6.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "12 10\n1 4\n2 3\n3 6\n4 5\n6 7\n8 9\n8 10\n9 11\n11 8\n11 12",
            "sampleOutput": "3\n3 1 4 5\n4 2 3 6 7\n5 8 9 10 11 12",
            "testCases": [
              {
                "id": "Test 1",
                "input": "12 10\n1 4\n2 3\n3 6\n4 5\n6 7\n8 9\n8 10\n9 11\n11 8\n11 12",
                "output": "3\n3 1 4 5\n4 2 3 6 7\n5 8 9 10 11 12"
              }
            ],
            "totalTests": 1
          }
        ]
      }
    ]
  },
  "cp-silver": {
    "id": "cp-silver",
    "title": "Lập Trình Thi Đấu Chuyên Sâu",
    "subtitle": "Thuật toán nâng cao & Luyện thi HSG Tỉnh / Quốc Gia",
    "levelBadge": "Khóa Chuyên Sâu",
    "description": "Chinh phục kỹ thuật lập trình đỉnh cao: Monotonic Queue, 2D Difference Array, Cấu trúc dữ liệu nâng cao, String Hashing, Multi-source BFS, Cây & Tree DFS, Dijkstra và DP dãy xâu.",
    "accentColor": "cyan",
    "accentClass": "from-cyan-500 to-blue-600",
    "lessons": [
      {
        "id": "cp-silver-lesson-1",
        "order": 1,
        "title": "Class & Struct - Đóng gói đối tượng & Sắp xếp",
        "theoryPdfFileName": "Chapter 3 lesson 1 - Class & Struct.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 1 - Class & Struct.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Class & Struct - Đóng gói đối tượng & Sắp xếp với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Class & Struct - gói code thành đối tượng\nVấn đề\nTại sao bài này quan trọng? Khi bài toán phức tạp dần (Hasher cho xâu, Segment Tree\nở Vàng, đồ thị, ...), code rời rạc bằng các mảng toàn cục sẽ trở nên rối, khó tái sử dụng,\ndễ sai. Gói tất cả với dữ liệu và các thao tác liên quan ở chung một chỗ vào một class -\ncode gọn, rõ ràng, và dễ đem sang bài khác.\nSau bài này bạn sẽ biết: cách viết một class / struct đơn giản, cách dùng nó nhiều lần\ntrong code, và cách áp dụng vào những cấu trúc dữ liệu thực tế như Hasher (băm xâu,\nbài 7).\n1. Vấn đề: code \"phẳng\"với biến toàn cục\nGiả sử bạn cần viết một stack tự cài đặt. Cách \"trực tiếp\":\nC++\nint st [100005] , top_idx = 0;\nvoid push ( int x ) { st [ top_idx ++] = x ; }\nint pop () { return st [ - - top_idx ]; }\nint top () { return st [ top_idx - 1]; }\nbool empty () { return top_idx == 0; }\nHỏi: nếu bài cần 2 stack thì sao? Phải copy mọi thứ rast1,top_idx1,push1, ... - code\ndài, lặp, dễ sai.\nĐây là lúc class/struct giải cứu.\n2. Struct trong C++ - gộp dữ liệu\n*struct* là kiểu dữ liệu gộp nhiều biến thành một \"khối\". Mặc định, mọi thành viên là\npublic (truy cập tự do).\nC++\n*struct Point* {\nint x , y ;\n};\nPoint p ;\np . x = 3;\np . y = 5;\nPoint q = {1 , 2};// Khoi tao gon\ncout << p . x << ’ ’ << q . y ;\nKhi nào dùng *struct*? Bất cứ khi nào bài toán có đối tượng có nhiều thuộc tính: điểm\n(x, y), cạnh (u, v, w), học sinh (tên, điểm), ...\nstruct có thể có hàm\nC++\n*struct Point* {\nint x , y ;\nint distSq ( Point other ) {// Ham thanh vien\nint dx = x - other .x , dy = y - other . y ;\nreturn dx * dx + dy * dy ;\n}\n};\nPoint a = {1 , 2} , b = {4 , 6};\ncout << a . distSq ( b ) ;// 25\nBên trong hàm thành viên,xvàytự động trỏ tới thành viên của đối tượng đang gọi.\n3. class trong C++ - struct \"có tường ngăn\"\n*class* giốngstructnhưng mặc định mọi thành viên là private (không truy cập từ ngoài).\nBạn dùngpublic:để công khai phần \"API\".\nTrong CP, cảstructvàclassđều phổ biến - sự khác nhau chỉ là quyền truy cập mặc\nđịnh. Nhiều CP-er dùng *struct*để khỏi phải gõpublic:.\nC++\nclass Stack {\nprivate :\nvector < int > data ;\npublic :\nvoid push ( int x ) { data . pu sh _b ac k ( x ) ; }\nvoid pop () { data . pop_back () ; }\nint top () { return data . back () ; }\nbool empty () { return data . empty () ; }\nint size () { return data . size () ; }\n};\nStack a , b ;// Hai stack doc lap !\na . push (5) ; a . push (7) ;\nb . push (3) ;\ncout << a . top () << ’ ’ << b . top () ;// 7 3\nGiờ bạn có thể tạo bao nhiêu stack tùy ý - mỗi cái có dữ liệu riêng biệt.\nConstructor - khởi tạo\nConstructor là hàm đặc biệt được gọi khi tạo đối tượng. Tên trùng với tênstruct/\nclass, không có kiểu trả về:\nC++\nstruct Counter {\nint value ;\nCounter () { value = 0; }// C o n s t r u c t o r mac dinh\nCounter ( int start ) { value = start ; }// C o n s t r u c t o r co tham\nso\nvoid inc () { value ++; }\n};\nCounter a ;// value = 0\nCounter b (100) ;// value = 100\nb . inc () ;// 101\n4. Class trong Python\nPython dùng từ khóa *class*. Method đầu tiên đặc biệt là__init__(constructor). Tham\nsố đầu tiên của mọi method luôn làself(tương đươngthisngầm trong C++).\nPython\nclass Stack :\ndef __init__ ( self ) :\nself . data = []# Thuoc tinh cua doi tuong\ndef push ( self , x ) :\nself . data . append ( x )\ndef pop ( self ) :\nreturn self . data . pop ()\ndef top ( self ) :\nreturn self . data [ -1]\ndef empty ( self ) :\nreturn len ( self . data ) == 0\na = Stack ()\nb = Stack ()\na . push (5) ; a . push (7)\nb . push (3)\nprint ( a . top () , b . top () )# 7 3\nLưu ý quan trọng: trong Python, mọi truy cập thuộc tính trong method phải qua *self.*\nViết *data* mà không có *self.* sẽ tạo biến cục bộ mới (bug âm thầm).\n5. Ví dụ thứ hai: gói các thuộc tính của một đối tượng\nMột dạng dùng *struct*rất phổ biến trong CP: gom các thuộc tính của một thực thể.\nGiả sử bài cónhọc sinh, mỗi học sinh có tên và điểm; cần sắp theo điểm giảm dần, đồng\nđiểm thì theo tên.\nC++\nstruct Student {\nstring name ;\nint score ;\nbool operator <( const Student & o ) const {\nif ( score != o . score ) return score > o . score ;// Diem giam\nreturn name < o . name ;// Ten alphabet\n}\n};\nvector < Student > v ( n ) ;\nfor ( auto & s : v ) cin >> s . name >> s . score ;\nsort ( v . begin () , v . end () ) ;\nfor ( auto & s : v ) cout << s . name << ’ ’ << s . score << ’\\ n ’;\nPython\nclass Student :\ndef __init__ ( self , name , score ) :\nself . name = name\nself . score = score\nv = [ Student (* input () . split () ) for _ in range ( n ) ]\nfor s in v : s . score = int ( s . score )\nv . sort ( key = lambda s : ( - s . score , s . name ) )# Diem giam , ten alphabet\nfor s in v : print ( s . name , s . score )\n(Cách viết Python \"thuần CP\"thường chỉ dùng tuple(name, score)cho gọn nhưng\nclassrõ nghĩa hơn khi đối tượng có nhiều trường.)\n6. Nhìn trước: Hasher sẽ trông thế nào?\nỞ bài 7 ta sẽ học String Hashing - kỹ thuật băm xâu để so sánh đoạn con xâu trong\nO(1). Khi đó, bạn có thể đóng gói toàn bộ Hasher vào mộtstruct/classđể dùng đi\ndùng lại:\nC++\nstruct Hasher {\nvector < long long > h , pw ;\nHasher ( const string & s ) {/* se hoc bai 7 */}\nlong long get ( int l , int r ) {/* hash doan [ l .. r ] se hoc bai 7\n*/}\n};\n// Su dung - ngan va ro :\nHasher H ( s ) ;\nif ( H . get ( l1 , r1 ) == H . get ( l2 , r2 ) ) {\n/* hai doan bang nhau ( xac suat rat cao ) */\n}\nPython\nclass Hasher :\ndef __init__ ( self , s ) :\n# se hoc bai 7\npass\ndef get ( self , l , r ) :\n# se hoc bai 7\npass\nH = Hasher ( s )\nif H . get ( l1 , r1 ) == H . get ( l2 , r2 ) :\n# hai doan bang nhau ( xac suat rat cao )\npass\nĐoạn code trên chỉ là khung mẫu - không chạy được vì các phương thức để trống. Đừng\ncố compile/chạy ngay; bạn sẽ điền đầy đủ ở bài 7. Điểm cần nhớ ở đây là phong cách:\nthay vì 4-5 mảng toàn cụch[],pw[],build(),get(), ta gói thành mộtclass. Lợi ích:\n• Có thể tạo nhiều Hasher độc lập trong cùng một bài (ví dụ: hash của hai xâu khác\nnhau).\n• CodeH.get(l, r)tự nói lên ý nghĩa.\n• Copyclasssang bài khác là một khối duy nhất.\n7. Khi nào nên (và không nên) dùng *class* trong CP?\nNên dùng *class* khi:\n• Bài cần nhiều instance của cùng một cấu trúc (nhiều Hasher, nhiều stack, ...).\n• Cấu trúc dữ liệu phức tạp (Hasher, Segment Tree, Trie, ...) - code \"phẳng\"sẽ rối.\n• Bạn muốn tái sử dụng code giữa các bài.\nKhông nên dùng *class* khi:\n• Bài chỉ cần một mảng đơn giản với 1-2 thao tác - viết hàm rời cũng được.\n• Constructor làm chậm (Python) - nếu thực sự cần tốc độ đỉnh, có thể quay lại code\n\"phẳng\".\nTrong CP nói chung: học thuộc một class Hasher và một class Segment Tree rồi dán vào\nbài khi cần - đây là phong cách của hầu hết CP-er có kinh nghiệm.\n8. Bẫy thường gặp\n• Quên *self.* trong method Python - tạo biến cục bộ, không thay đổi thuộc tính.\n• *struct* tham trị: trong C++, truyền *struct* vào hàm mặc định là copy - chậm cho\ncấu trúc lớn. Dùng tham chiếu *Hasher&* để truyền.\n• Constructor nặng: code đặt mọi thứ trong constructor có thể gây TLE nếu khởi tạo\nnhiều instance. Cân nhắc khởi tạo lười (lazy).\n• Đệ quy đụng giới hạn stack: Python có giới hạn đệ quy mặc định (∼1000) - với\ncây/đồ thị lớn, có thể tăng bằng *sys.setrecursionlimit(...)* hoặc cài lại bằng\nvòng lặp. Sẽ thấy chi tiết ở các bài có DFS sâu (BFS/DFS lưới bài 9, cây bài 10).\n9. Tổng kết\nKHÁI NIỆM C++ PYTHON\nGộp dữ liệu struct Foo { }; class Foo:\nHàm thành viên Trong *struct/class* Method với *self*\nKhởi tạo Constructor *Foo()* __init__(self)\nTruy cập obj.field obj.field\nClass/struct là bước nhảy về phong cách lập trình - khi đã quen, code của bạn sẽ trông\ngọn gàng và \"chuyên nghiệp\"hơn rất nhiều. Hãy luyện tập ngay từ bài 7 (Hasher) viết\nHasher dưới dạng class!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b1-p1-doraemon-v-nh-ng-ch-kh-kh-l-kh-ng-li-n-quan",
            "title": "Doraemon và những chú khỉ khá là không liên quan",
            "fileName": "Doraemon và những chú khỉ khá là không liên quan - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Doraemon và những chú khỉ khá là không liên quan. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/bài 1/Doraemon và những chú khỉ khá là không liên quan - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong lúc Doraemon và những người bạn vẫn còn vui vẻ dưới ánh nắng tươi vàng trong một\ntiết trời hè nóng nực bên bãi biển tươi xanh thơm ngát mùi muối và những cánh chim trên\ncao bay dập dờn, dập dờn báo hiệu một mùa thu sắp đến và kết thúc một chuỗi ngày hè\nnóng nực nhưng cực kì đẹp đẽ và vui tươi thì ở phía bên kia xa xăm của hòn đảo tươi đẹp,\ndưới những tán cây dừa, một đàn khỉ nhí nhố gồm N chú đang háo hức xách cặp đến trường\nđể đón lễ khai giảng nửa năm học mới 2019,5 - 2020.\nNhưng đâu phải chú nào cũng có tốc độ ngang nhau nên có chú đến sớm và có chú đến\nmuộn và không có chú nào đến cùng thời điểm. Biết rằng khi chú thứ i đến thì có A_i chú khỉ\nkhác có mặt trong lớp (tính cả chú thứ i). Hiệu trưởng kiêm giáo viên chủ nhiệm đã nhờ bác\nbảo vệ xây dựng lại thứ tự đến trường của các chú khỉ để có biện pháp xử lí thích đáng với\nnhững chú khỉ đi trễ.\n\nInput\n• Dòng đầu tiên chứa một số N là sĩ số của lớp (1 ≤ N ≤ 10^6)\n• N dòng tiếp theo, dòng thứ i chứa một số duy nhất A_i (1 ≤ A_i ≤ N).\n\nOutput\n• Một dòng duy nhất gồm N số, số thứ i là thứ tự đến trường của các chú khỉ i.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n5 4 2 1 6 3",
            "sampleOutput": "4 3 6 2 1 5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n5 4 2 1 6 3",
                "output": "4 3 6 2 1 5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b1-p2-findmax1",
            "title": "FINDMAX1",
            "fileName": "FINDMAX1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "1GB",
            "point": 800,
            "preview": "Bài toán FINDMAX1. Giới hạn thời gian 2.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/bài 1/FINDMAX1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy a gồm N số nguyên, được đánh số từ 1 đến N, số thứ i có giá trị là a i ban đầu\ntất cả các số đều có giá trị bằng 0. Ta có Q thao tác. Có hai loại thao tác\n• Loại 1: Gồm hai số i, v: gán a i = v\n• Loại 2: Gồm hai số l, r: trả về số có giá trị lớn nhất trong đoạn từ l đến r.\n\nInput\n• Dòng đầu tiền gồm 2 hai số nguyên dương N, Q (N, Q ≤ 2000)\n• Dòng thứ hai gồm N số, là giá trị ban đầu của dãy a\n• Q dòng tiếp theo mỗi dòng là gồm 3 số, số đầu tiên là t (1 ≤ t ≤ 2), là loại thao tác\ncủa thao tác hiện tại. Nếu t = 1, hai số tiếp theo sẽ là i và v (1 ≤ i ≤ N, 1 ≤ v ≤ 10^9). Nếu t = 2, hai số tiếp theo sẽ là l và r (1 ≤ l ≤ r ≤ n).\n\nOutput\n• Dòng nhiều dòng là đáp án cho các thao tác loại 2, mỗi số in trên một dòng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 6\n1 2 3 4 5\n2 1 5\n1 1 6\n2 1 5\n2 2 4\n1 2 5\n2 2 4",
            "sampleOutput": "5\n6\n4\n5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 6\n1 2 3 4 5\n2 1 5\n1 1 6\n2 1 5\n2 2 4\n1 2 5\n2 2 4",
                "output": "5\n6\n4\n5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b1-p3-queryarray",
            "title": "QUERYARRAY",
            "fileName": "QUERYARRAY - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán QUERYARRAY. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/bài 1/QUERYARRAY - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Lại là thực hiện truy vấn!\nLần này, bạn được cho một mảng a có n phần tử. Ban đầu, tất cả các phần tử trong mảng a\ncó giá trị bằng 0. Bạn phải thực hiện Q truy vấn, mỗi truy vấn thuộc một trong hai dạng:\n• 1 l r x: Tăng toàn bộ các phần tử trong mảng a từ vị trí l đến vị trí r một giá trị\nbằng x.\n• 2 l r x: Giảm toàn bộ các phần tử trong mảng a từ vị trí l đến vị trí r một giá trị\nbằng x.\nYêu cầu: In ra dãy a sau Q truy vấn?\n\nInput\n• Dòng thứ nhất chứa hai số nguyên dương n, Q (n, Q ≤ 10^5).\n• Q dòng tiếp theo, mỗi dòng chứa một truy vấn mô tả như trên (1 ≤ l ≤ r ≤ n, 1 ≤\nx ≤ 1 0 3).\n\nOutput\n• Một dòng chứa n số nguyên là dãy a sau truy vấn. Lưu ý nếu có tồn tại các số 0 đằng\nsau cũng cần in đủ.\n\nScoring\n• Subtask 1 (30% số điểm): n, Q ≤ 100.\n• Subtask 2 (70% số điểm): không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n1 1 2 1\n1 2 3 1\n2 4 5 1",
            "sampleOutput": "1 2 1 -1 -1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n1 1 2 1\n1 2 3 1\n2 4 5 1",
                "output": "1 2 1 -1 -1"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-2",
        "order": 2,
        "title": "Mảng tiền tố 2D & Difference Array",
        "theoryPdfFileName": "Chapter 3 lesson 2 - Mảng tiền tố 2D & Difference Array.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 2 - Mảng tiền tố 2D & Difference Array.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Mảng tiền tố 2D & Difference Array với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Mảng tiền tố 2D & Difference Array\nVấn đề\nTrong chapter 2 bạn đã học prefix sum 1D - tính tổng đoạn[l, r]trongO(1)sau tiền xử\nlýO(n). Đây là một trong những kỹ thuật đơn giản nhất nhưng mạnh nhất trong lập\ntrình thi đấu. Bài này mở rộng ý tưởng đó lên 2 chiều (truy vấn tổng hình chữ nhật trong\nma trận) và giới thiệu kỹ thuật đối ngẫu: difference array - cho phép cộng vào cả một\nđoạn trongO(1).\n1. Prefix Sum 2D - tổng hình chữ nhật\nĐề: Cho ma trậnakích thướcn×m. Cóqtruy vấn, mỗi truy vấn cho hình chữ nhật\n(r1, c1, r2, c2), hỏi tổng các phần tử trong hình chữ nhật đó.\nÝ tưởng: Định nghĩaS[r][c]là tổng các phần tử trong hình chữ nhật từ(1,1)tới(r, c).\nTa tínhSbằng công thức bao hàm-loại trừ:\nS[r][c] =a[r][c] +S[r−1][c] +S[r][c−1]−S[r−1][c−1]\nTổng hình chữ nhật(r1, c1, r2, c2):\nSum=S[r 2][c2]−S[r 1−1][c 2]−S[r 2][c1−1] +S[r 1−1][c 1−1]\nHãy hình dung công thức như bao hàm-loại trừ: bắt đầu với hình chữ nhật lớn từ(1,1)\ntới(r 2, c2)(vùng xanh lá), trừ đi phần phía trên và phần bên trái (hai vùng đỏ), nhưng\ngiao của hai phần đó - vùng xanh dương ở góc trên-trái - đã bị trừ hai lần, nên cộng lại.\nCode\nC++\nvoid build () {\nfor ( int i = 1; i <= n ; i ++)\nfor ( int j = 1; j <= m ; j ++)\nS [ i ][ j ] = a [ i ][ j ] + S [i -1][ j ] + S [ i ][ j -1] - S [i -1][ j\n-1];\n}\nint query ( int r1 , int c1 , int r2 , int c2 ) {\nreturn S [ r2 ][ c2 ] - S [ r1 -1][ c2 ] - S [ r2 ][ c1 -1] + S [ r1 -1][ c1 -1];\n}\nPython\n# a la ma tran ( n +1) x ( m +1) , index tu 1\nS = [[0] * ( m + 1) for _ in range ( n + 1) ]\nfor i in range (1 , n + 1) :\nfor j in range (1 , m + 1) :\nS [ i ][ j ] = a [ i ][ j ] + S [i -1][ j ] + S [ i ][ j -1] - S [i -1][ j -1]\ndef query ( r1 , c1 , r2 , c2 ) :\nreturn S [ r2 ][ c2 ] - S [ r1 -1][ c2 ] - S [ r2 ][ c1 -1] + S [ r1 -1][ c1 -1]\nLợi ích: Tiền xử lýO(nm), mỗi truy vấnO(1).\nKhi nào dùng?\n• Đếm số phần tử thỏa điều kiện trong vùng chữ nhật\n• Tính tổng vùng chữ nhật\n• Bài toán liên quan đến lưới: số ô đen trong hình chữ nhật, v.v.\n2. Difference Array 1D - cộng đoạn nhanh\nĐề: Cho mảngakích thướcnban đầu toàn 0. Cóqthao tác(l, r, v): cộngvvào tất cả\na[l..r]. Sau cùng, in mảng.\nCách ngây thơ:O(qn)- chậm.\nÝ tưởng difference array: Định nghĩad[i] =a[i]−a[i−1]. Khi đó \"cộngvvàoa[l..r]\"tương\nđương:\n• d[l]+ =v\n• d[r+ 1]−=v\nTất cả cácd[i]khác không đổi! Sau khi làm hếtqthao tác, lấy prefix sum củadđể khôi\nphụca.\nC++\nlong long d [ N + 2] = {0};\nvoid update ( int l , int r , long long v ) {\nd [ l ] += v ;\nd [ r + 1] -= v ;\n}\nvoid build () {\nfor ( int i = 1; i <= n ; i ++) d [ i ] += d [ i - 1];// Prefix sum\nra gia tri that\n}\nPython\nd = [0] * ( n + 2)\ndef update (l , r , v ) :\nd [ l ] += v\nd [ r + 1] -= v\ndef build () :\nfor i in range (1 , n + 1) :\nd [ i ] += d [ i - 1]\nTổng độ phức tạp:O(n+q)- cực nhanh.\nTổng quan: Prefix sum & Difference array là đối ngẫu\n• Prefix sum: nhiều truy vấn tổng đoạn, không có cập nhật.\n• Difference array: nhiều cập nhật cộng đoạn, sau cùng truy vấn 1 lần.\nNếu cả hai cùng có (online)→cần Fenwick / Segment Tree (Vàng).\n3. Difference Array 2D\nĐề: Cộng giá trịvvào hình chữ nhật(r1, c1, r2, c2)nhiều lần. Sau cùng, in toàn ma trận.\nÝ tưởng: Mở rộng difference array 1D - chỉ cần 4 cập nhật điểm.\nC++\nvoid update ( int r1 , int c1 , int r2 , int c2 , int v ) {\nd [ r1 ][ c1 ] += v ;\nd [ r2 + 1][ c1 ] -= v ;\nd [ r1 ][ c2 + 1] -= v ;\nd [ r2 + 1][ c2 + 1] += v ;\n}\nvoid build () {\nfor ( int i = 1; i <= n ; i ++)\nfor ( int j = 1; j <= m ; j ++)\nd [ i ][ j ] += d [ i - 1][ j ] + d [ i ][ j - 1] - d [ i - 1][ j -\n1];\n}\nPython\nd = [[0] * ( m + 2) for _ in range ( n + 2) ]\ndef update ( r1 , c1 , r2 , c2 , v ) :\nd [ r1 ][ c1 ] += v\nd [ r2 + 1][ c1 ] -= v\nd [ r1 ][ c2 + 1] -= v\nd [ r2 + 1][ c2 + 1] += v\ndef build () :\nfor i in range (1 , n + 1) :\nfor j in range (1 , m + 1) :\nd [ i ][ j ] += d [ i - 1][ j ] + d [ i ][ j - 1] - d [ i - 1][ j - 1]\nMỗi cập nhật chỉ chạm 4 điểm→O(1)mỗi update,O(nm)build.\nTại sao 4 điểm hoạt động?\nTưởng tượng \"lan tỏa\": dấu+lan từ(r1, c1)xuống dưới-phải mãi mãi. Dấu−ở(r 2 +1, c1)\nvà(r 1, c2 + 1)chặn vùng lan ngoài hình chữ nhật. Dấu+ở góc(r2 + 1, c2 + 1)bù lại vùng\nbị trừ hai lần.\n4. Mẫu bài toán điển hình\nMẫu 1: Số ô đen trong hình chữ nhật\nĐặta[i][j] = 1nếu ô đen,0nếu trắng. Tính prefix sum 2D, mỗi truy vấnO(1).\nMẫu 2: Hình vuông tổng cao nhất\nTìm hình vuông kích thướcktrong ma trậnn×ncó tổng lớn nhất. Tiền xử lý prefix\nsum 2D, duyệtO((n−k) 2)vị trí.\nMẫu 3: Đếm số người ở mỗi điểm\nCóqngười, mỗi người ở vùng chữ nhật. Hỏi tại điểm(i, j)có bao nhiêu người. Difference\narray 2D + prefix sum.\n5. Bẫy thường gặp\n• Lỗi off-by-one:r 2 + 1vàc 2 + 1phải hợp lệ. Khai báo mảng dư 2 hàng/cột để tránh\nout-of-bounds.\n• Index 0 vs 1: Prefix sum 2D dễ nhầm. Khuyên: index từ 1, đểS[0][∗] =S[∗][0] = 0.\n• Tràn số (overflow): Tổng có thể rất lớn - dùnglong long.\n6. Tổng kết\nKỸ THUẬT MỤC ĐÍCH TIỀN XỬ LÝ MỖI THAO TÁC\nPrefix sum 1D Truy vấn tổng đoạn O(n) O(1)\nPrefix sum 2D Truy vấn tổng hình\nchữ nhật\nO(nm) O(1)\nDifference 1D Cộng đoạn (offline) O(n+q) O(1)update\nDifference 2D Cộng hình chữ nhật\n(offline)\nO(nm+q) O(1)update\nChỉ cần nhớ: prefix sum cho truy vấn, difference cho cập nhật, công thức bao hàm-loại\ntrừ là chìa khóa!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b2-p1-b-ng-con",
            "title": "Bảng con",
            "fileName": "Bảng con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Bảng con. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/Bảng con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một ma trận gồm n hàng, m cột. Các hàng được đánh số từ 1 đến n, các cột được đánh\nsố từ 1 đến m. Ô nằm trên hàng i, cột j được kí hiệu là ô (i, j). Bảng con (x, y, u, v) là tập\nhợp các ô (i, j) thỏa mãn x ≤ i ≤ u và y ≤ j ≤ v. Bảng con (x, y, u, v) được gọi là bảng\nvuông khi và chỉ khi u − x = v − y.\nVới mỗi ô (i, j) của ma trận, người ta gán một số nguyên a_{i,j}. Hãy tìm bảng vuông có diện\ntích lớn nhất có thể, sao cho tổng a_{ij} của các ô (i, j) không vượt quá S.\n\nInput\n• Dòng đầu tiên gồm ba số nguyên dương n, m, S (1 ≤ n, m ≤ 3000, 0 ≤ S ≤ 10^{10}).\n• n dòng tiếp theo, dòng thứ i (1 ≤ i ≤ n) chứa m số nguyên a_{i1}, a_{i2}, …, a_{im} (0 ≤\na_{ij} ≤ 10^{6}).\n\nOutput\n• Gồm một số nguyên duy nhất là diện tích lớn nhất có thể của một bảng vuông thỏa mãn\nđiều kiện trên.\n\nScoring\n• Subtask 1 (15% số điểm): n, m ≤ 100.\n• Subtask 2 (15% số điểm): n, m ≤ 500.\n• Subtask 3 (25% số điểm): n, m ≤ 1000.\n• Subtask 4 (45% số điểm): n, m ≤ 3000.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 5 9\n1 1 1 1 1\n1 1 2 1 1\n1 1 2 1 1\n1 1 1 1 1",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 5 9\n1 1 1 1 1\n1 1 2 1 1\n1 1 2 1 1\n1 1 1 1 1",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b2-p2-forest-queries",
            "title": "Forest Queries",
            "fileName": "CSES - Forest Queries _ Truy vấn Khu rừng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Forest Queries. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/CSES - Forest Queries _ Truy vấn Khu rừng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một lưới n × n thể hiện bản đồ của một khu rừng. Mỗi ô vuông có thể trống\nhoặc chứa một cái cây. Ô phía trên bên trái có tọa độ (1, 1), và ô phía dưới bên phải có tọa\nđộ (n, n).\nNhiệm vụ của bạn là xử lí q truy vấn dưới dạng: có bao nhiêu cây trong một hình chữ nhật đã\ncho của khu rừng?\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và q: kích thước của khu rừng và số lượng\ntruy vấn.\n• Kế tiếp, có n dòng mô tả khu rừng. Mỗi dòng có n kí tự:. là một ô trống và * là\nmột cái cây.\n• Cuối cùng, có q dòng mô tả các truy vấn. Mỗi dòng có bốn số nguyên y 1, x 1, y 2, x 2\ntương ứng với các góc của một hình chữ nhật.\n\nOutput\n• In ra số lượng cây trong mỗi hình chữ nhật.\n\nScoring\n• 1 ≤ n ≤ 1000\n• 1 ≤ q ≤ 2 \times 10^5\n• 1 ≤ y 1 ≤ y 2 ≤ n\n• 1 ≤ x 1 ≤ x 2 ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 3\n.*..\n*.**\n**..\n****\n2 2 3 4\n3 1 3 1\n1 1 2 2",
            "sampleOutput": "3\n1\n2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 3\n.*..\n*.**\n**..\n****\n2 2 3 4\n3 1 3 1\n1 1 2 2",
                "output": "3\n1\n2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b2-p3-range-xor-queries",
            "title": "Range Xor Queries",
            "fileName": "CSES - Range Xor Queries _ Truy vấn Xor đoạn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Range Xor Queries. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/CSES - Range Xor Queries _ Truy vấn Xor đoạn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho 1 dãy n số nguyên, nhiệm vụ của bạn là hãy xử lí q truy vấn dưới dạng: tính tổng xor của\ncác giá trị trong khoảng [ a, b ].\n\nInput\n• Dòng đầu tiên gồm hai số nguyên n và q: số lượng giá trị của dãy và truy vấn\n• Dòng thứ hai gồm n số nguyên x 1, x 2,..., x n: giá trị dãy số\n• Cuối cùng, có q dòng truy vấn. Mỗi dòng gồm 2 số nguyên a và b: tính tổng xor của các\ngiá trị trong khoảng [ a, b ]\n\nOutput\n• In ra kết quả của các truy vấn loại 2\n\nScoring\n• 1 ≤ n, q ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9\n• 1 ≤ a ≤ b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8 4\n3 2 4 5 1 1 5 3\n2 4\n5 6\n1 8\n3 3",
            "sampleOutput": "3\n0\n6\n4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8 4\n3 2 4 5 1 1 5 3\n2 4\n5 6\n1 8\n3 3",
                "output": "3\n0\n6\n4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b2-p4-c-ng-t-ng-d-n-v-o-o-n",
            "title": "Cộng tăng dần vào đoạn",
            "fileName": "Cộng tăng dần vào đoạn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Cộng tăng dần vào đoạn. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/Cộng tăng dần vào đoạn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hôm nay, các học sinh tại trường mầm non SuperKids được học về phép cộng. Nhằm mục\nđích vừa giải trí, vừa luyện tập, thầy giáo bày ra một trò chơi như sau:\n\"Thầy có một dãy a gồm n số. Ban đầu, các số này đều bằng 0. Sau đó, thầy sẽ lần lượt chọn\nra những đoạn con liên tiếp. Yêu cầu các em phải cộng vào số đầu tiên của đoạn con đó lên 1\nđơn vị, số thứ hai lên 2 đơn vị, số thứ ba lên 3 đơn vị, …, cứ như thế cho tới khi hết đoạn\ncon. Sau khi cộng xong, mỗi bạn phải đưa cho thầy dãy a mà bạn ấy đã tính được. Nếu giống\nvới đáp án của thầy thì các bạn ấy sẽ được thưởng 5 phiếu bé ngoan mỗi tháng cho cả học\nkì.\"\nQuả không hổ danh là những thần đồng với IQ 400 và tốc độ tính toán lên tới 5GHz, bài tập\ntrên chỉ là chuyện nhỏ với các bạn mầm non. Hóa ra người bị đánh đố lại là bạn, những người\nđang đọc đề bài này.\nBạn hãy in ra dãy a mà mình đã tính được nhé.\n\nInput\n• Dòng đầu tiên chứa hai số nguyên dương n và m, lần lượt là độ dài dãy và số lần cộng\nvào các đoạn con.\n• m dòng tiếp theo, mỗi dòng chứa hai số l, r là vị trí đầu & cuối của đoạn con cần được\ncộng vào.\n\nOutput\n• Một dòng duy nhất chứa dãy a gồm n số\n\nScoring\n• 1 ≤ n, m ≤ 2 × 10^5\n• 1 ≤ l ≤ r ≤ n",
            "hasTestCases": false,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "",
            "sampleOutput": "",
            "testCases": [],
            "totalTests": 0
          },
          {
            "id": "c2-b2-p5-h-nh-ch-nh-t-thtb-tq-2017",
            "title": "Hình chữ nhật (THTB TQ 2017)",
            "fileName": "Hình chữ nhật (THTB TQ 2017) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Hình chữ nhật (THTB TQ 2017). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/Hình chữ nhật (THTB TQ 2017) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Giờ học toán tiếp theo, Cam vẽ một trục tọa độ Oxy lên giấy và dùng 3 màu đen, xám, trăng\nđể tô màu góc phần tư thứ nhất. Đầu tiên Cam tô hình vuông có tọa độ góc trái trên (0, 1)\nvà tọa độ góc phải dưới (1, 0) là màu đen. Tiếp theo bé tô nhưng ô đen bằng màu xám, sau\nđó lại tô những ô kề đỉnh với ô xám mà chưa được tô màu trắng, sau đó lại tô những ô kề\nđỉnh với ô màu trắng mà chưa được tô bằng màu đen và cứ tiếp tục như vậy...\nSau đó Cam sẽ cắt tờ giấy và chỉ giữ lại 1 hình chữ nhật có tọa độ góc trái trên là (x, y) và\ntọa độ góc phải dưới là (u, v). Bé muốn biết trong hình chữ nhật được giữ lại có bao nhiêu ô\nmàu trắng. Vì tọa độ có thể rất lớn nên các bạn hãy lập trình để tìm kết quả giúp bé nhé.\nHình bên dưới mô tả cho góc phần tư thứ nhất khi được tô và hình chữ nhật cắt ra có tọa độ\ngóc trái trên là (4, 8) và tọa độ góc phải dưới là (9, 1). Khi đó bé Cam sẽ nhận được 13 ô\ntrắng.\n\nInput\n• Một dòng duy nhất là 4 số nguyên x, y, u, v (x ≤ u và y ≥ v).\n\nOutput\n• Số ô vuông màu trắng trong hình chữ nhật có tọa độ góc trái trên là (x, y) và tọa độ\ngóc phải dưới là (u, v).\n\nScoring\n• Subtask 1 (30% số điểm): 1 ≤ x, y, u, v ≤ 1000.\n• Subtask 2 (70% số điểm): 1 ≤ x, y, u, v ≤ 10^6.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 8 9 1",
            "sampleOutput": "13",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 8 9 1",
                "output": "13"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b2-p6-h-nh-ch-nh-t-con",
            "title": "Hình chữ nhật con",
            "fileName": "Hình chữ nhật con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Hình chữ nhật con. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/Hình chữ nhật con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một hình chữ nhật có n dòng m cột. Bé Bi muốn tìm tổng các phần tử một hình chữ\nnhật con của hình chữ nhật đó, hãy giúp bé Bi nhé!\n\nInput\n• Dòng đầu tiên ghi n và m. (1 ≤ n, m ≤ 1000)\n• n dòng tiếp theo, mỗi dòng gồm m số nguyên cách nhau bởi dấu cách (∣ a [ i, j ] ∣ ≤\n1000)\n• Dòng cùng ghi tọa độ góc trái nên (x 1, y 1) và phải dưới (x 2, y 2) của một hình chữ\nnhật nhỏ hơn bên trong hình chữ nhật ban đầu (1 ≤ x 1 ≤ x 2 ≤ n, 1 ≤ y 1 ≤ y 2 ≤\nm)\n\nOutput\n• In ra kết quả mà bé Bi cần",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 3\n1 1 9\n8 2 9\n1 1 2 2",
            "sampleOutput": "12\n`",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 3\n1 1 9\n8 2 9\n1 1 2 2",
                "output": "12\n`"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b2-p7-truy-v-n-t-ng-2d",
            "title": "Truy vấn tổng 2D",
            "fileName": "Truy vấn tổng 2D - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Truy vấn tổng 2D. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/Truy vấn tổng 2D - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một hình chữ nhật có N hàng và M cột có số thứ tự được đánh từ trên xuống và từ trái\nsang phải.\nTrên mỗi ô có viết một số nguyên và nhiệm vụ chúng ta phải trả lời Q truy vấn. Mỗi truy vấn\nsẽ gồm bốn số nguyên là x 1, y 1, x 2, y 2, sẽ mô tả một khu vực con trong hình chữ nhật. Ứng\nvới mỗi truy vấn, hãy in ra tổng của của khu vực con đó, có điểm (x 1, y 1) là ô góc trái trên và\ncó điểm (x 2, y 2) là ô ở góc phải dưới của khu vực.\n\nInput\n• Dòng đầu tiên chứa hai số nguyên N (chiều rộng) và M (chiều dài) (1 ≤ N, M ≤\n1000)\n• N dòng sau, mỗi dòng chứa M số nguyên, giá trị tuyệt đối của mỗi số nguyên này\nkhông vượt quá 10^9\n• Dòng kế tiếp, chứa một số nguyên Q (số truy vấn) (1 ≤ Q ≤ 10^5)\n• Q dòng kết tiếp, mỗi dòng chứa bốn số nguyên x 1, y 1, x 2, y 2. (1 ≤ x 1 ≤ x 2 ≤ N),\n(1 ≤ y 1 ≤ y 2 ≤ M)\n\nOutput\n• In ra Q dòng, ứng với truy vấn thứ i, in ra một số nguyên là tổng của khu vực hình chữ\nnhật được nhắc đến bởi truy vấn thứ i.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 3\n1 2 3\n-4 -5 -6\n7 8 9\n4\n1 1 2 3\n2 3 3 3\n1 1 2 2\n1 1 1 3",
            "sampleOutput": "-9\n3\n-6\n6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 3\n1 2 3\n-4 -5 -6\n7 8 9\n4\n1 1 2 3\n2 3 3 3\n1 1 2 2\n1 1 1 3",
                "output": "-9\n3\n-6\n6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b2-p8-t-ng-o-n-con-li-n-ti-p",
            "title": "Tăng đoạn con liên tiếp",
            "fileName": "Tăng đoạn con liên tiếp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1500,
            "preview": "Bài toán Tăng đoạn con liên tiếp. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 2/Tăng đoạn con liên tiếp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho 1 dãy số A gồm có n số tự nhiên và 1 số tự nhiên l thỏa mãn 0 ≤ l ≤ ⌊ n 2 ⌋.\nBạn được cho thêm 1 dãy số B cũng có n số nhưng toàn là số 0. Bạn có nhiệm vụ biến đổi\ndãy B thành dãy A theo các bước như sau:\n• Bước 1: Chọn 1 vị trí bất kì trên mảng B sao cho cả bên trái và bên phải vị trí này đều\nchứa không ít hơn l phần tử;\n• Bước 2: Từ 2 vị trí cách vị trí đó l đơn vị, tăng các phần tử mảng B trong khoảng đó 1\nđơn vị.\nLặp lại quy trình 2 bước này sao cho thu được mảng A. Các bạn nên biết rằng, nếu như chỉ\ncần sai 1 bước chọn vị trí thì có khi kết quả sẽ sai và không thể sửa chữa lại nữa (vì chỉ có\ntăng chứ làm gì có chuyện giảm), nên hãy cẩn thận nhé:))\nVD: Với dãy A = 1 2 2 1 và l = 1 thì nếu như tăng dãy B = 0 0 0 0 tại 2 vị trí 2 và 3\nthì ta sẽ thu được dãy A, tổng cộng cần 2 bước. Quy trình như sau:\n0 0 0 0 => 1 1 1 0 => 1 2 2 1.\n\nInput\n• Dòng 1 gồm 1 số n và 1 số l, 2 số cách nhau 1 khoảng trắng;\n• Dòng 2 gồm n số tự nhiên của dãy A, 2 số cách nhau 1 khoảng trắng.\n\nOutput\n• In ra số bước 2 cần thực hiện để tạo ra mảng A.\n(!!!): Test luôn tồn tại 1 cách thực hiện hợp lệ.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 1\n1 2 2 1",
            "sampleOutput": "2\nConstants\n• n ≤ 1 0 6\n• A i ≤ 1 0 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 1\n1 2 2 1",
                "output": "2\nConstants\n• n ≤ 1 0 6\n• A i ≤ 1 0 3"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-3",
        "order": 3,
        "title": "Cấu trúc dữ liệu: Set, Map, Multiset",
        "theoryPdfFileName": "Chapter 3 lesson 3 - Cấu trúc dữ liệu Set, Map, Multiset.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 3 - Cấu trúc dữ liệu Set, Map, Multiset.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Cấu trúc dữ liệu: Set, Map, Multiset với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Cấu trúc dữ liệu: Set, Map, Multiset\n1. Tại sao cần set và map?\nHãy xem bài toán: Cho dãynsố. Với mỗi truy vấn, hỏi xem một sốxcó trong dãy không.\nNếu dùng mảng:\n• Tìm kiếm tuyến tính:O(n)mỗi truy vấn. Vớiq= 10 5, n= 10 5→10 10 phép tính→\nTLE!\n• Sắp xếp + binary search:O(nlogn+qlogn)- tốt, nhưng nếu có thêm thao tác\nthêm/xóa phần tử xen kẽ truy vấn thì sao? Mảng sẽ bị chậm khi chèn/xóa (O(n)).\nCách dùng set: Đặt tất cả số vào set, kiểm tra trongO(logn)- tổngO((n+q) logn)≈\n2×10 6→AC!\nĐó là một trong rất nhiều ví dụ. set và map giúp:\n• Kiểm tra phần tử có tồn tại không\n• Đếm số phần tử khác nhau\n• Tìm phần tử lớn nhất/nhỏ nhất≥hoặc> x\n• Lưu key-value mà key tự động được sắp xếp\n2. std::set - tập hợp các giá trị khác nhau, đã sắp xếp\nset lưu các phần tử khác nhau từng đôi, tự động sắp xếp tăng dần.\nLưu ý cho người dùng Python: Python không có cấu trúc tương đươngstd::set/\nstd::mapđã sắp xếp trong thư viện chuẩn.set/dictcủa Python là bảng băm -O(1)\ntrung bình nhưng không có thứ tự, không cólower_bound. Đối với các bài cần tập/map\ncó thứ tự (đây là lý do chính của bài học này), hãy dùng C++. Toàn bộ ví dụ trong bài\nnày được viết bằng C++.\nKhai báo và thao tác cơ bản\nC++\nset<int> s;\ns.insert(5); // O(log n)\ns.insert(3);\ns.insert(5); // Khong them nua, vi 5 da co\ns.erase(3); // Xoa gia tri 3, O(log n)\nif (s.count(5)) {} // Kiem tra co ton tai khong, O(log n)\ncout << s.size(); // So phan tu\nfor (int x : s) cout << x << ’ ’; // Duyet theo thu tu tang dan\nThời gian các thao tác chính:insert,erase,find,countđềuO(logn).\nTìm phần tử lớn nhất / nhỏ nhất\nC++\nint mn = *s.begin(); // Nho nhat\nint mx = *s.rbegin(); // Lon nhat (rbegin = reverse begin)\nlower_bound và upper_bound - siêu mạnh!\nC++\n• s.lower_bound(x): trỏ tới phần tử nhỏ nhất≥x\n• s.upper_bound(x): trỏ tới phần tử nhỏ nhất> x\nauto it = s.lower_bound(7);\nif (it != s.end()) cout << *it; // So nho nhat >= 7\nLưu ý: Phải dùngs.lower_bound(x), không phảilower_bound(s.begin(), s.end(),\nx)- cái sau làO(n)vì set không phải mảng truy cập ngẫu nhiên!\nVí dụ: Tìm số lớn nhất nhỏ hơn x\nC++\nauto it = s.lower_bound(x);\nif (it != s.begin()) {\n--it;\ncout << *it; // So lon nhat < x\n}\n3. std::multiset - cho phép trùng\nmultiset giống set nhưng cho phép phần tử trùng nhau.\nC++\nmultiset<int> ms;\nms.insert(5);\nms.insert(5); // OK, co 2 phan tu 5\nms.insert(3);\ncout << ms.count(5); // 2\nms.erase(ms.find(5)); // Xoa MOT phan tu 5 (quan trong!)\n// ms.erase(5) se xoa TAT CA phan tu 5 -- can than!\nBẫy thường gặp:ms.erase(value)xóa tất cả phần tử bằngvalue. Để xóa chỉ một, dùng\nms.erase(ms.find(value)).\n4. std::map - ánh xạ key→value\nmap lưu các cặp (key, value), key tự động sắp xếp.\nC++\nmap<string, int> cnt;\ncnt[\"apple\"] = 3;\ncnt[\"banana\"] = 5;\ncnt[\"apple\"]++; // Gio apple = 4\nif (cnt.count(\"apple\")) {} // Kiem tra key ton tai\nfor (auto [k, v] : cnt) { // C++17, duyet theo thu tu key\ncout << k << ’ ’ << v << ’\\n’;\n}\nBẫy:cnt[key]màkeychưa tồn tại sẽ tự động tạo với giá trị mặc định (0choint). Nếu\nchỉ muốn kiểm tra, dùngcnt.count(key)hoặccnt.find(key).\nĐếm tần suất (cực kỳ phổ biến!)\nC++\nmap<int, int> freq;\nfor (int x : a) freq[x]++;\n// So khac nhau\ncout << freq.size();\nint mx = 0;\nfor (auto [k, v] : freq) mx = max(mx, v);\n5.unordered_set/unordered_map-bảngbăm(hash)\n• set / map: cây cân bằng (Red-Black Tree),O(logn)có thứ tự\n• unordered_set / unordered_map: bảng băm,O(1)trung bình, không có thứ tự\nC++\nunordered_map<int, int> cnt;\ncnt[x]++; // O(1) trung binh\nKhi nào dùng cái nào?\n• Cần thứ tự (lower_bound, duyệt tăng dần)→set / map\n• Không cần thứ tự, chỉ cần tra cứu nhanh→unordered_set / unordered_map\nCảnh báo: unordered_map có thể bị anti-hash attack (TLE do chủ ý). Trong CP an toàn\nnhất là dùng map trừ khi thực sự cầnO(1).\n6. Mẫu bài toán điển hình\nMẫu 1: Số khác nhau trong mảng\nC++\nset<int> s(a.begin(), a.end());\ncout << s.size();\nMẫu 2: Có cặp(i, j)vớia i +a j =Tkhông?\nDuyệti, kiểm traT−a i trong set:\nC++\nset<int> seen;\nfor (int x : a) {\nif (seen.count(T - x)) { /* tim thay */ }\nseen.insert(x);\n}\nMẫu 3: Online - sau mỗi lần thêm 1 số, hỏi số nhỏ thứk\nVớik= 1(nhỏ nhất): chỉ cần*ms.begin().\nVớikbất kỳ:multisetkhông hỗ trợ truy cập theo chỉ số trongO(logn). Cần dùng\nPolicy-based data structure (__gnu_pbds::tree).\nMẫu 4: Đếm nghịch thế (số cặpi < jvớia i > a j)\nBài toán này cần đếm nhanh số phần tử lớn hơnaj trong tập đã thấy. set / map thường\nkhông hỗ trợ trực tiếp (O(n)). Cần Fenwick tree hoặc Policy-based tree (__gnu_pbds) sẽ\nhọc ở khóa Vàng.\nMẫu 5: Hai cấu trúc song song - duy trì cả phần tử và \"khoảng\ncách\"giữa các phần tử\nMột số bài cần không chỉ tập các giá trị, mà còn các khoảng trống/khoảng cách giữa các\ngiá trị liền kề. Mẹo: duy trì hai cấu trúc song song:\n• set<int> S- chứa các giá trị hiện có (sắp xếp).\n• multiset<int> gaps- chứa các khoảng cách giữa hai phần tử kề nhau trong S.\nKhi thêm/xóaxvàoS:\n1. Tìm hai phần tửl, rkềxtrongS.\n2. Xóa khoảng cũr−lkhỏigaps.\n3. Thêm hai khoảng mớix−lvàr−xvàogaps.\n4. Cập nhậtS.\nKhoảng dài nhất hiện tại =*gaps.rbegin()trongO(1).\nC++\nset<int> S = {0, L}; // hai bien\nmultiset<int> gaps = {L};\nvoid addPoint(int x) {\nauto it = S.lower_bound(x);\nint r = *it, l = *prev(it);\ngaps.erase(gaps.find(r - l)); // xoa MOT khoang cu\ngaps.insert(x - l);\ngaps.insert(r - x);\nS.insert(x);\n}\nint longestGap() { return *gaps.rbegin(); } // Lon nhat\nBài luyện tập kinh điển là CSES Traffic Lights (cses1163).\n7. Bẫy thường gặp & Mẹo\n• setkhôngcórandomaccess:khôngcós[i].Phảidùngiteratorhoặcnext(s.begin(),\ni)- và cái sau làO(i)!\n• Iterator bị invalid khi erase: lưu lại trước hoặc dùngit = s.erase(it).\n• Hằng số lớn: set / map chậm hơn array khoảng 5-10 lần. Nếunlớn (≥106) và chỉ\ncần kiểm tra tồn tại trong tập hợp số nhỏ, hãy dùng *vector*<bool>hoặcbitset.\n• map[key]tạo entry: nếu chỉ tra cứu, dùngfindhoặccount.\n8. Tổng kết\nCẤU TRÚC CHO PHÉP TRÙNG CÓ THỨ TỰ THAO TÁC\nset Không Có O(logn)\nmultiset Có Có O(logn)\nmap Key không trùng Có O(logn)\nunordered_set/map tùy Không O(1)TB\nKhi nào dùng set / map?\n• Cần kiểm tra tồn tại nhanh\n• Cầnlower_bound/upper_bound(tìm \"gần nhất\")\n• Cần phần tử min/max trong tập đang biến đổi (insert/erase)\n• Đếm tần suất với key bất kỳ (string, pair, ...)\nHãy luyện thật nhiều - set / map sẽ trở thành công cụ mặc định trong tay bạn!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b3-p1-basic-set",
            "title": "BASIC SET",
            "fileName": "BASIC SET - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán BASIC SET. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/BASIC SET - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một set X.\nCác bạn có thể vào link này để tìm hiểu về CTDL se t trong C++. (link đã chết) (Update\n“\n3/12/2022: link đã sống lại)(Update 5/4/2025: Link lại chết rồi)\nNhập nhiều dòng, mỗi dòng nhập hai số nguyên Γ và Δ.\nỞ mỗi lần nhập, hãy đưa vào set số nguyên lớn hơn trong hai số Γ và Δ. Nếu Γ = Δ, đưa\nvào set 1 trong 2 số đó.\nNhập hai số 0 (cách nhau 1 dấu cách) để kết thúc quá trình nhập.\nYêu cầu: In ra set X sau khi nhập xong, mỗi số trên 1 dòng, theo thứ tự tăng dần.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 2\n4 4\n8 9\n0 0",
            "sampleOutput": "3\n4\n9",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 2\n4 4\n8 9\n0 0",
                "output": "3\n4\n9"
              },
              {
                "id": "Test 2",
                "input": "92 17\n92 19\n0 0",
                "output": "92"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c2-b3-p2-c-n-b-ng-hsg-9-h-n-i-2025-2026",
            "title": ". Cân bằng (HSG 9 Hà Nội 2025-2026)",
            "fileName": "Bài 2. Cân bằng (HSG 9 Hà Nội 2025-2026) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán . Cân bằng (HSG 9 Hà Nội 2025-2026). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/Bài 2. Cân bằng (HSG 9 Hà Nội 2025-2026) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên A gồm N phần tử phân biệt A 1, A 2,..., A N và số nguyên dương K.\nPhần tử A_i được gọi là \"cân bằng K \" nếu trong dãy xuất hiện phần tử có giá trị bằng A_i +\nK và A_i − K. Ví dụ dãy số 5, 2, 4, 6 và K = 1 thì có 1 phần tử cân bằng là 5 vì dãy số có\nphần tử là 5 − 1 = 4 và 5 + 1 = 6.\nYêu cầu: Đếm số lượng phần tử \"cân bằng K \" của dãy số A.\n\nInput\n• Dòng đầu tiên chứa hai số nguyên dương N và K (N ≤ 10^5; K ≤ 10^9)\n• Dòng thứ hai chứa N số nguyên A 1, A 2,..., A N (∣ A_i ∣ ≤ 10^9, 1 ≤ i ≤ N)\n\nOutput\n• In ra một số nguyên là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 1\n4 1 7 8 5 6",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 1\n4 1 7 8 5 6",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p3-concert-tickets",
            "title": "Concert Tickets",
            "fileName": "CSES - Concert Tickets _ Vé hòa nhạc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Concert Tickets. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/CSES - Concert Tickets _ Vé hòa nhạc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n vé hòa nhạc có sẵn, mỗi vé có một mức giá nhất định. Sau đó, m khách hàng đến, lần\nlượt đến.\nMỗi khách hàng thông báo mức giá tối đa mà họ sẵn sàng trả cho một vé, và sau đó, họ sẽ\nnhận được một vé với giá lớn nhất có thể sao cho nó không vượt quá giá tối đa.\n\nInput\n• Dòng đầu vào đầu tiên chứa các số nguyên n và m: số lượng vé và khách hàng\n• Dòng tiếp theo chứa n số nguyên h 1, h 2, …, h n: mức giá của mỗi vé\n• Dòng cuối cùng chứa m số nguyên t 1, t 2, …, t m: mức giá tối đa của mỗi khách hàng\ntheo thứ tự họ đến\n\nOutput\n• In, đối với mỗi khách hàng, mức giá mà họ sẽ trả cho vé của họ. Sau này, vé không thể\nđược mua lại\n• Nếu khách hàng không thể nhận được bất kỳ vé nào, hãy in − 1\n\nScoring\n• 1 ≤ n, m ≤ 2 \times 10^5\n• 1 ≤ h i, t i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n5 3 7 8 5\n4 8 3",
            "sampleOutput": "3\n8\n-1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n5 3 7 8 5\n4 8 3",
                "output": "3\n8\n-1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p4-traffic-lights",
            "title": "Traffic Lights",
            "fileName": "CSES - Traffic Lights _ Đèn giao thông - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Traffic Lights. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/CSES - Traffic Lights _ Đèn giao thông - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có một con đường chiều dài x mà các vị trí của nó được đánh số 0, 1, …, x. Ban đầu không\ncó đèn giao thông, nhưng n bộ đèn giao thông lần lượt được thêm vào con đường.\nNhiệm vụ của bạn là tính toán chiều dài của đoạn đường dài nhất mà không có đèn giao\nthông sau mỗi lần thêm.\n\nInput\n• Dòng đầu vào đầu tiên chứa hai số nguyên x và n: chiều dài của đường phố và số lượng\nbộ đèn giao thông\n• Sau đó, dòng tiếp theo chứa n số nguyên p 1, p 2, …, p n: vị trí của mỗi bộ đèn giao\nthông. Mỗi vị trí là phân biệt\n\nOutput\n• In chiều dài của đoạn đường dài nhất mà không có đèn giao thông sau mỗi lần thêm\n\nScoring\n• 1 ≤ x ≤ 10^9\n• 1 ≤ n ≤ 2 \times 10^5\n• 0 < p i < x",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8 3\n3 6 2",
            "sampleOutput": "5 3 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8 3\n3 6 2",
                "output": "5 3 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p5-k-t-n-i-dutpc-21",
            "title": "Kết nối (DUTPC'21)",
            "fileName": "Kết nối (DUTPC'21) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Kết nối (DUTPC'21). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/Kết nối (DUTPC'21) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong một lớp học về lập trình mạng khoa CNTT, thầy Tuấn cho các học sinh chơi một trò\nchơi. Các học sinh phải viết chương trình kết nối với nhau bằng giao thức TCP qua mạng LAN\nvà phải báo cáo lại mình đã kết nối bao nhiêu lần.\nThầy Tuấn có danh sách các lượt kết nối của các cặp học sinh. Lượt kết nối thứ i cho biết học\nsinh a i kết nối với học sinh b i và kết nối c i lần.\nHãy giúp thầy Tuấn thống kê các học sinh của mình đã kết nối chính xác bao nhiêu lần.\n\nInput\n• Dòng đầu chứa số nguyên n (1 ≤ n ≤ 1 0 4) là số lượt kết nối.\n• n dòng tiếp theo, dòng thứ i gồm hai string a i, b i và số nguyên c i cách nhau bởi các\ndấu cách. (a i, b i là tên học sinh, chỉ gồm các kí tự latin thường và không quá 10 kí tự và\na i =  b i, 1 ≤ c i ≤ 10^9 là số lần kết nối tại thời điểm này).\n\nOutput\n• Gồm nhiều dòng, mỗi dòng là tên học sinh và tổng số lần kết nối của học sinh đó, các\nhọc sinh được in ra theo thứ tự từ điển.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\nfixers join 15\nyh bones 10\ndragon khoi 9\nkhoi yh 1\ndragon yh 5",
            "sampleOutput": "bones 10\ndragon 14\nfixers 15\njoin 15\nkhoi 10\nyh 16",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\nfixers join 15\nyh bones 10\ndragon khoi 9\nkhoi yh 1\ndragon yh 5",
                "output": "bones 10\ndragon 14\nfixers 15\njoin 15\nkhoi 10\nyh 16"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p6-m-t-m-hsg-9-h-n-i-2022-2023",
            "title": "Mật mã (HSG 9 Hà Nội 2022-2023)",
            "fileName": "Mật mã (HSG 9 Hà Nội 2022-2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 800,
            "preview": "Bài toán Mật mã (HSG 9 Hà Nội 2022-2023). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/Mật mã (HSG 9 Hà Nội 2022-2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một mật thư chứa mật mã bí ẩn được tạo ra là một xâu kí tự chỉ gồm các chữ số và các kí tự\nin thường. Mật mã bí ẩn là số lượng các số nguyên phân biệt xuất hiện trong thư.\nVí dụ: Với mật thư as00023dkrf23smk1asd23sam09aa9 chứa 3 số nguyên phân biệt\n23, 1, 9. Nên mật mã là 3.\nYêu cầu: Hãy lập trình đưa ra mật mã bí ẩn.\n\nInput\n• Một xâu (độ dài xâu ≤ 100) gồm các chữ số và các kí tự in thường. Tất cả các số\nnguyên trong xâu có nhiều nhất 3 chứ số.\n\nOutput\n• Một số nguyên duy nhất là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "abc123abc2a3a1",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "abc123abc2a3a1",
                "output": "4"
              },
              {
                "id": "Test 2",
                "input": "as00023dkrf23smk1asd23sam09aa9",
                "output": "3"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c2-b3-p7-s-p-x-p-theo-t-n-su-t",
            "title": "Sắp xếp theo tần suất",
            "fileName": "Sắp xếp theo tần suất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Sắp xếp theo tần suất. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/Sắp xếp theo tần suất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho mảng A gồm N số nguyên. Nhiệm vụ của bạn là sắp xếp mảng theo số lần xuất hiện các\nphần tử của mảng. Số xuất hiện nhiều lần nhất đứng trước. Nếu hai phần tử có số lần xuất\nhiện như nhau, số nhỏ hơn đứng trước. Ví dụ A = 5, 5, 4, 6, 4, ta nhận được kết quả là\nA [ ] = 4, 4, 5, 5, 6.\n\nInput\n• Dòng đầu tiên đưa vào số lượng bộ test T (1 ≤ T ≤ 100).\n• Những dòng kế tiếp đưa vào T bộ test. Mỗi bộ test gồm hai dòng:\n• Dòng đầu tiên đưa vào N (1 ≤ N ≤ 1 0 4), tương ứng với số phần tử của mảng A;\n• Dòng tiếp theo là N số A_i (1 ≤ i ≤ N, 1 ≤ A_i ≤ 10^5); các số được viết cách\nnhau một vài khoảng trống.\n\nOutput\n• Đưa ra kết quả mỗi test theo từng dòng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2\n5\n5 5 4 6 4\n5\n9 9 9 2 5",
            "sampleOutput": "4 4 5 5 6\n9 9 9 2 5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n5\n5 5 4 6 4\n5\n9 9 9 2 5",
                "output": "4 4 5 5 6\n9 9 9 2 5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p8-x-a-k-ph-n-t",
            "title": "Xóa k phần tử",
            "fileName": "Xóa k phần tử - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Xóa k phần tử. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/Xóa k phần tử - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "• Cho một mảng gồm N phần tử và số nguyên K (0 ≤ K < N).\n• Nhiệm vụ của chúng ta là xóa đi K phần tử từ mảng A sao cho số lượng phần tử còn lại\nkhác nhau là nhiều nhất và in ra giá trị lớn nhất đó\n\nInput\n• Dòng thứ nhất chứa số nguyên T - thể hiện số lượng testcase (1 ≤ T ≤ 100)\n• T block tiếp theo,mỗi block có dạng như sau:\n• Dòng thứ nhất chứa số nguyên N (0 < N ≤ 10000)\n• Dòng thứ hai chứa N số nguyên a 1, a 2,..., a N (1 ≤ a i ≤ N)\n• Dòng thứ ba chứa số nguyên K (0 ≤ K < N)\n\nOutput\n• Ứng với mỗi block, in ra đáp án cần tìm.\n\nScoring\n• 20%: 0 < N ≤ 10\n• 40%: 11 ≤ N ≤ 100\n• 40%: 101 ≤ N ≤ 1 0 4",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1\n3\n1 1 2\n1",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1\n3\n1 1 2\n1",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p9-minict26",
            "title": "minict26",
            "fileName": "minict26 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 900,
            "preview": "Bài toán minict26. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/minict26 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "kid2201 có n hộp lập phương trống, hộp thứ i có kích thước là a i.\nkid2201 có thể bỏ hộp thứ i vào trong hộp thứ j nếu như:\n• hộp thứ i chưa được bỏ vào bất kì hộp nào\n• hộp thứ j chưa chứa bất kì hộp nào bên trong\n• hộp thứ i nhỏ hơn hộp thứ j (a i < a j)\nkid2201 là một học sinh chuyên về thuật toán, muốn bỏ các hộp vào nhau sao cho số lượng\nhộp có thể nhìn thấy là ít nhất có thể.\n\nInput\n• Dòng đầu tiên là số nguyên n (1 ≤ n ≤ 100000) - số lượng hộp lập phương\n• Dòng thứ hai gồm n số nguyên a 1, a 2,..., a n (1 ≤ a i ≤ 10^9).\n\nOutput\n• In ra số lượng hộp tối thiểu có thể nhìn thấy sao khi sắp xếp các hộp vào nhau.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n1 2 3",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n1 2 3",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b3-p10-m-l-y-th-a",
            "title": "Đếm lũy thừa",
            "fileName": "Đếm lũy thừa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 600,
            "preview": "Bài toán Đếm lũy thừa. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 3/Đếm lũy thừa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho hai số nguyên dương a, b. Hỏi có thể sinh ra được bao nhiêu số khác nhau có dạng x y\nvới 2 ≤ x ≤ a và 2 ≤ y ≤ b.\nInput:\n• Một dòng duy nhất chứa hai số nguyên dương a, b (2 ≤ a, b ≤ 100)\nOutput:\n• In ra kết quả cần tìm\nVí dụ:",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 3",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 3",
                "output": "4"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-4",
        "order": 4,
        "title": "Stack, Queue & Monotonic Deque",
        "theoryPdfFileName": "Chapter 3 lesson 4 - Stack, Queue & Monotonic Deque.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 4 - Stack, Queue & Monotonic Deque.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Stack, Queue & Monotonic Deque với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Stack, Queue & Monotonic Deque\n1. Stack & Queue cơ bản\n• Stack (LIFO - Last In First Out): push, pop, top đềuO(1).\n• Queue (FIFO - First In First Out): push, pop, front đềuO(1).\n• Deque (Double-Ended Queue): thêm/xóa cả hai đầu trongO(1).\nC++\n# include < stack >\n# include < queue >\n# include < deque >\nstack < int > st ;\nst . push (5) ; st . top () ; st . pop () ;\nqueue < int > q ;\nq . push (5) ; q . front () ; q . pop () ;\ndeque < int > dq ;\ndq . p us h_ ba ck (5) ; dq . p u s h _ f r o n t (3) ;\ndq . pop_back () ; dq . pop _f ro nt () ;\nPython\nfrom c o l l e c t i o n s import deque\n# Stack : dung list , append / pop o cuoi deu O (1)\nst = []\nst . append (5) ; st [ -1]; st . pop ()\n# Queue : dung deque , KHONG dung list ( list . pop (0) la O ( n ) !)\nq = deque ()\nq . append (5) ; q [0]; q . popleft ()\n# Deque : them / xoa ca hai dau trong O (1)\ndq = deque ()\ndq . append (5) ; dq . pop () ; dq . a p p e n d l e f t (3) ; dq . popleft ()\nBẫy Python: KHÔNG dùng List làm queue. List.pop(0) làO(n)vì phải dịch chuyển toàn bộ\nphần tử. Luôn dùngcollections.dequecho queue và deque.\n2. Bài toán mở đầu: Dấu ngoặc hợp lệ\nĐề: Cho xâu gồm()[]{}. Kiểm tra xem có hợp lệ không.\nÝ tưởng: Mở thì push, đóng thì pop và so sánh.\nC++\nfor ( char c : s ) {\nif ( c == ’( ’ || c == ’[ ’ || c == ’{ ’) st . push ( c ) ;\nelse {\nif ( st . empty () ) return false ;\nchar x = st . top () ; st . pop () ;\nif (( c == ’) ’ && x != ’( ’) ||\n( c == ’] ’ && x != ’[ ’) ||\n( c == ’} ’ && x != ’{ ’) ) return false ;\n}\n}\nreturn st . empty () ;\nPython\npair = { ’) ’: ’( ’ , ’] ’: ’[ ’ , ’} ’: ’{ ’}\nst = []\nfor c in s :\nif c in ’ ([{ ’:\nst . append ( c )\nelse :\nif not st or st . pop () != pair [ c ]:\nreturn False\nreturn not st\nĐây là mẫu kinh điển - nhớ thật kỹ!\n3. Monotonic Stack - Stack đơn điệu\nÝ tưởng: Duy trì một stack mà các phần tử bên trong luôn tăng (hoặc luôn giảm) từ đáy lên\nđỉnh.\nBài toán: Nearest Smaller Value (giá trị nhỏ hơn gần nhất bên trái)\nĐề: Cho dãya1, a2, . . . , an. Với mỗii, tìmjlớn nhất vớij < ivàa j < a i. Nếu không có, in 0.\nCáchO(n 2): Với mỗii, duyệt ngượcj- quá chậm.\nCáchO(n)với monotonic stack: Duy trì stack lưu các indexjvớia j tăng dần. Khi xétimới:\n1. Bật (pop) khỏi stack mọijcóa j≥a i.\n2. Đỉnh stack hiện tại (nếu có) chính là đáp án.\n3. Pushivào stack.\nStack luôn giữ giá trị tăng dần (đáy→đỉnh). Phần tử mới bật mọi giá trị≥chính nó.\nHình dung - chạy tay vớia= [3,1,4,1,5]:\nStack chứa chỉ số sao cho giá trị tương ứng tăng dần từ đáy→đỉnh.\ni= 1,a[1] = 3:\n• stack rỗng→ans[1] = 0\n• push 1\n• stack idx: [1], stack val: [3]\ni= 2,a[2] = 1:\n• a[1] = 3≥1→pop1\n• stack rỗng→ans[2] = 0\n• push 2\n• stack idx: [2], stack val: [1]\ni= 3,a[3] = 4:\n• a[2] = 1<4→KHÔNG pop\n• top= 2→ans[3] = 2\n• push 3\n• stack idx: [2, 3], stack val: [1, 4]\ni= 4,a[4] = 1:\n• a[3] = 4≥1→pop3\n• a[2] = 1≥1→pop2\n• stack rỗng→ans[4] = 0\n• push 4\n• stack idx: [4], stack val: [1]\ni= 5,a[5] = 5:\n• a[4] = 1<5→KHÔNG pop\n• top= 4→ans[5] = 4\n• push 5\n• stack idx: [4, 5], stack val: [1, 5]\nĐáp án:ans= [0,0,2,0,4]. Mỗi chỉ số được push 1 lần, pop tối đa 1 lần⇒tổngO(n)amortized.\nC++\nstack < int > st ;\nfor ( int i = 1; i <= n ; i ++) {\nwhile (! st . empty () && a [ st . top () ] >= a [ i ]) st . pop () ;\nans [ i ] = st . empty () ? 0 : st . top () ;\nst . push ( i ) ;\n}\nPython\nans = [0] * ( n + 1)\nfor i in range (1 , n + 1) :\nwhile st and a [ st [ -1]] >= a [ i ]:\nst . pop ()\nans [ i ] = st [ -1] if st else 0\nst . append ( i )\nTại saoO(n)? Mỗi phần tử được push 1 lần và pop tối đa 1 lần→amortizedO(n).\nKhi nào dùng monotonic stack?\n• Tìm \"phần tử gần nhất bên trái/phải nhỏ hơn / lớn hơn\"\n• Tính diện tích lớn nhất hình chữ nhật trong histogram\n• Dạng \"với mỗii, tìm khoảng[l, r]màa i là min/max\"\n4. Monotonic Deque cho cửa sổ trượt\nBài toán: Cho dãya1, . . . , an vàk. Với mỗi cửa sổ độ dàikliên tiếp, in giá trị lớn nhất.\nCách ngây thơ:O(nk)- chậm.\nCáchO(n)với deque: Duy trì deque chứa index với giá trịagiảm dần từ đầu đến cuối deque.\nKhi trượt sang phải tớii:\n1. Xóa từ đuôi các phần tử cóanhỏ hơnai (chúng không bao giờ là max trong cửa sổ chứai).\n2. Pushivào đuôi.\n3. Xóa từ đầu nếu index≤i−k(đã ngoài cửa sổ).\n4. Đầu deque là index của max.\nBất biến: giá trị trong deque GIẢM DẦN từ đầu xuống đuôi. Đầu deque luôn = max của cửa\nsổ.\nHình dung - chạy tay vớia= [3,1,5,2,4],k= 3:\nDeque luôn chứa chỉ số sao cho giá trị tương ứng giảm dần từ đầu→cuối.\ni= 1,a[1] = 3:\n• Pop đuôi (rỗng): skip\n• Push 1→deque (idx): [1]→giá trị: [3]\ni= 2,a[2] = 1:\n• a[1] = 3> a[2] = 1→KHÔNG pop\n• Push 2→deque (idx): [1, 2]→giá trị: [3, 1]\ni= 3,a[3] = 5:\n• a[2] = 1≤5→pop2→[1]\n• a[1] = 3≤5→pop1→[]\n• Push 3→deque (idx): [3]→giá trị: [5]\n• Cửa sổ [1..3]: max=a[dq.front()] =a[3] = 5\ni= 4,a[4] = 2:\n• a[3] = 5>2→KHÔNG pop\n• Push 4→deque (idx): [3, 4]→giá trị: [5, 2]\n• Front= 3≥i−k+ 1 = 2→trong cửa sổ\n• Cửa sổ [2..4]: max=a[3] = 5\ni= 5,a[5] = 4:\n• a[4] = 2≤4→pop4→[3]\n• a[3] = 5>4→KHÔNG pop\n• Push 5→deque (idx): [3, 5]→giá trị: [5, 4]\n• Front= 3< i−k+ 1 = 3? Không (3 = 3)→vẫn trong cửa sổ\n• Cửa sổ [3..5]: max=a[3] = 5\nQuan sát: giá trị trong deque luôn giảm dần→front=max. Mỗi chỉ số chỉ bị push 1 lần và\npop tối đa 1 lần⇒tổngO(n).\nC++\nfor ( int i = 1; i <= n ; i ++) {\nwhile (! dq . empty () && a [ dq . back () ] <= a [ i ]) dq . pop_back () ;\ndq . p us h_ ba ck ( i ) ;\nif ( dq . front () <= i - k ) dq . pop _f ro nt () ;\nif ( i >= k ) cout << a [ dq . front () ] << ’ ’;\n}\nPython\nfrom c o l l e c t i o n s import deque\ndq = deque ()\nout = []\nfor i in range ( n ) :\nwhile dq and a [ dq [ -1]] <= a [ i ]:\ndq . pop ()\ndq . append ( i )\nif dq [0] <= i - k :\ndq . popleft ()\nif i >= k - 1:\nout . append ( a [ dq [0]])\nprint (* out )\nĐổi<=thành>=để tìm min.\nCốt lõi của ý tưởng\nKhia i vào cửa sổ, mọi phần tử nhỏ hơnai và đứng trước đều vô dụng mãi mãi (vìai vừa lớn\nhơn vừa \"sống lâu\"hơn trong cửa sổ). Vậy ta xóa chúng.\n5. Histogram & Maximum Rectangle (mẫu khó hơn)\nĐề: Cho histogram với cột caoh1, . . . , hn (rộng 1). Tìm hình chữ nhật có diện tích lớn nhất\nnằm gọn trong histogram.\nÝ tưởng: Với mỗi cộti, tìmLi =vị trí cột thấp hơn gần nhất bên trái,Ri =bên phải. Khi đó,\nhình chữ nhật caohi rộng nhất là từLi + 1tớiR i−1, diện tích=h i×(R i−L i−1).\nCảLvàRđều tính bằng monotonic stack trongO(n)- đây là bài toán quan trọng đáng nhớ.\nCài đặt (gói trong một hàm)\nMẹo cài đặt gọn: thêm hai cột \"ảo\"cao−1ở đầu và cuối. Khi đó mọi cột thực sẽ có thấp hơn\nở cả hai phía - không cần xử lý biên đặc biệt.\nC++\nlong long l a r g e s t R e c t a n g l e I n H i s t o g r a m ( vector < int > h ) {\nint n = h . size () ;\nh . pu sh _b ac k ( -1) ;// Cot \" ao \" thap hon moi cot -> buoc pop het\nstack < int > st ;\nlong long ans = 0;\nfor ( int i = 0; i <= n ; i ++) {\nwhile (! st . empty () && h [ st . top () ] >= h [ i ]) {\nint j = st . top () ; st . pop () ;\nint left = st . empty () ? -1 : st . top () ;\nans = max ( ans , ( long long ) h [ j ] * ( i - left - 1) ) ;\n}\nst . push ( i ) ;\n}\nreturn ans ;\n}\nPython\ndef l a r g e s t _ r e c t a n g l e _ i n _ h i s t o g r a m ( h ) :\nh = h + [ -1]# Cot \" ao \" thap hon moi cot\nst = []\nans = 0\nfor i , x in en um er ate ( h ) :\nwhile st and h [ st [ -1]] >= x :\nj = st . pop ()\nleft = st [ -1] if st else -1\nans = max ( ans , h [ j ] * ( i - left - 1) )\nst . append ( i )\nreturn ans\nCách hoạt động: khi pop cộtj, vì cộti\"thấp hơn (hoặc bằng)\", ta biếtichính là biên phảiRj\nvà đỉnh stack mới là biên tráiLj. Hình chữ nhật caoh[j]rộng từL j + 1tớiR j−1.\nMở rộng: Hình chữ nhật lớn nhất toàn 1 trong ma trận nhị phân\nĐề: Cho ma trậnm×ngồm 0 và 1. Tìm hình chữ nhật con lớn nhất chỉ chứa toàn 1.\nÝ tưởng: quy về histogram trên từng dòng:\n1. Với mỗi ô(i, j),h i[j]là số số 1 liên tiếp đi lên từ ô(i, j).\n2.h i[j] =h i−1[j] + 1nếua[i][j] = 1.\n3.h i[j] = 0nếua[i][j] = 0.\n4. Sau đó dòngitrở thành một histogram với các cột caohi[1], hi[2], . . . , hi[n]. Hình chữ nhật\ntoàn 1 lớn nhất kết thúc ở dòngichính là max rectangle trong histogram đó.\n5. Đáp án = max qua mọi dòng.\nPhức tạp:O(mn)- mỗi dòng dùng histogram max rect trongO(n).\nC++\nint h [ N ] = {0} , ans = 0;\nfor ( int i = 1; i <= m ; i ++) {\nfor ( int j = 1; j <= n ; j ++) {\nh [ j ] = ( a [ i ][ j ] == 1) ? h [ j ] + 1 : 0;\n}\nans = max ( ans , ( int ) l a r g e s t R e c t a n g l e I n H i s t o g r a m ( vector < int >( h + 1 ,\nh + n + 1) ) ) ;\n}\nPython\nh = [0] * ( n + 1)\nans = 0\nfor i in range (1 , m + 1) :\nfor j in range (1 , n + 1) :\nh [ j ] = h [ j ] + 1 if a [ i ][ j ] == 1 else 0\nans = max ( ans , l a r g e s t _ r e c t a n g l e _ i n _ h i s t o g r a m ( h [1:]) )\nĐây là kỹ thuật giảm bài toán 2D về 1D - một mẫu rất phổ biến trong CP. Hãy nhớ kỹ!\n6. Tổng kết & Mẹo\n• Stack giải bài \"ngoặc\", \"histogram\", \"nearest smaller/greater\".\n• Queue dùng cho BFS (sẽ thấy trong bài 9).\n• Monotonic Deque giải sliding window min/max trongO(n).\n• Thao tác cốt lõi: \"phần tử mới đến→xóa hết phần tử ở đuôi mà ’vô dụng’→push\".\n• Khi gặp \"max/min trong mọi cửa sổ kích thướck\", hãy nghĩ monotonic deque.\nLuyện tập là chìa khóa - làm 5-7 bài bạn sẽ nhận ra pattern ngay!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b4-p1-bi-u-th-c-h-u-t",
            "title": "Biểu thức hậu tố",
            "fileName": "Biểu thức hậu tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 900,
            "preview": "Bài toán Biểu thức hậu tố. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Biểu thức hậu tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một biểu thức hậu tố với số hạng là các số nguyên dương và ba toán tử +, −, ∗. Hãy\ntính giá trị của biểu thức hậu tố.\nVí dụ: biểu thức hậu tố: 2 3 4 + ∗ 5 − 2 2 ∗ + có giá trị là 13.\n\nInput\n• Gồm nhiều dòng thể hiện biểu thức hậu tố, mỗi dòng có một chuối các số hạng là một\nsố nguyên dương trong phạm vi từ 1 đến 100. Giữa hai số hạng, hoặc giữa hai toán tử,\nhoặc giữa số hạng và toán tử, cách nhau một khoảng trắng. Chiều dài biểu thức không\nquá 100 ký tự.\nDữ liệu đề bài cho đảm bảo biểu thức hậu tố là hợp lệ. Trong quá trình tính toán đảm bảo trị\ntuyệt đối các giá trị trung gian không vượt quá 10^9.\n\nOutput\n• Mỗi dòng là giá trị của biểu thức hậu tố tương ứng với dữ liệu vào.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 3 4 + * 5 - 2 2 * +",
            "sampleOutput": "13",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 3 4 + * 5 - 2 2 * +",
                "output": "13"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p2-advertisement",
            "title": "Advertisement",
            "fileName": "CSES - Advertisement _ Quảng cáo - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Advertisement. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/CSES - Advertisement _ Quảng cáo - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một hàng rào bao gồm n bảng dọc. Chiều rộng của mỗi bảng là 1 và chiều cao của chúng có\nthể khác nhau.\nBạn muốn gắn một quảng cáo hình chữ nhật lên hàng rào. Diện tích tối đa của một quảng\ncáo như vậy là gì?\n\nInput\n• Dòng đầu vào đầu tiên chứa một số nguyên n: chiều rộng của hàng rào\n• Sau đó có n số nguyên k 1, k 2, …, k n: chiều cao của mỗi bảng dọc\n\nOutput\n• In một số nguyên: diện tích tối đa của quảng cáo\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ k i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n4 1 5 3 3 2 4 1",
            "sampleOutput": "10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n4 1 5 3 3 2 4 1",
                "output": "10"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p3-nearest-smaller-values",
            "title": "Nearest Smaller Values",
            "fileName": "CSES - Nearest Smaller Values _ Giá trị nhỏ hơn gần nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1200,
            "preview": "Bài toán Nearest Smaller Values. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/CSES - Nearest Smaller Values _ Giá trị nhỏ hơn gần nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên, nhiệm vụ của bạn là với mỗi vị trí của mảng, tìm vị trí gần\nnhất bên trái của nó mà có giá trị nhỏ hơn.\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: kích thước của mảng\n• Dòng thứ hai có n số nguyên x 1, x 2, …, x n: các giá trị của mảng\n\nOutput\n• In n số nguyên: vị trí gần nhất nhỏ hơn cho mỗi vị trí trong mảng. Nếu không có, in 0\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n2 5 1 4 8 3 2 5",
            "sampleOutput": "0 1 0 3 4 3 3 7",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n2 5 1 4 8 3 2 5",
                "output": "0 1 0 3 4 3 3 7"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p4-gi-tr-nh-nh-t",
            "title": "Giá trị nhỏ nhất",
            "fileName": "Giá trị nhỏ nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1300,
            "preview": "Bài toán Giá trị nhỏ nhất. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Giá trị nhỏ nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên A = (a 1, a 2, …, a n) và một số nguyên dương k ≤ n. Với mỗi giá trị\ni (1 ≤ i ≤ n − k + 1), hãy xác định giá trị nhỏ nhất trong k phần tử liên tiếp:\na i, a i + 1, …, a i + k − 1\n\nInput\n• Dòng 1 chứa hai số nguyên dương n ≤ 5.10^5, k ≤ n\n• Dòng 2 chứa n số nguyên dương a 1, a 2, …, a n (∀ i: a i ≤ 10^6)\n\nOutput\n• Ghi ra n − k + 1 dòng, dòng thứ i ghi giá trị nhỏ nhất trong các phần tử\na i, a i + 1, …, a i + k − 1\nCác số trên một dòng của Input files được ghi cách nhau ít nhất một dấu cách\n\nScoring\n• Subtask 1 (33.3% số điểm): n ≤ 1 0 3, k ≤ n\n• Subtask 2 (19.1% số điểm): n × k ≤ 1 0 7, k ≤ n\n• Subtask 3 (47.6% số điểm): n ≤ 5 × 10^5, k ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n2 1 5 3 4",
            "sampleOutput": "1\n1\n3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n2 1 5 3 4",
                "output": "1\n1\n3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p5-hist",
            "title": "HIST",
            "fileName": "HIST - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "500MB",
            "point": 1400,
            "preview": "Bài toán HIST. Giới hạn thời gian 1.0s, bộ nhớ 500MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/HIST - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Lỗ Ban là một vị thợ mộc nổi tiếng bậc nhất thời Tống của Trung Quốc với đôi bàn tay cực kỳ\ntài hoa\nkhéo léo. Ngưỡng mộ tài năng của Lỗ Ban, Vua Tống mời Lỗ Ban vào triều làm quan chuyên\nquản lý\nviệc thiết kế cung điện và chế tác vật dụng tinh xảo. Vua Tống trong một chuyến du ngoạn ở\nnúi Ngũ\nNhạc tình cờ phát hiện một phiến đá ngũ sắc tuyệt đẹp, Vua Tống nảy ra ý định đem phiến đá\nnày về\ncung để chế tác thành một bàn cờ. Nhưng Vua Tống nhanh chóng phát hiện ra rằng, phiến\nđá này có\nhình dạng kỳ lạ rất khó để có thể cắt ra phần diện tích vuông vắn đủ lớn cho bàn cờ. Vậy là\nVua Tống\ntriệu Lỗ Ban vào triều để thương lượng:\nBề mặt phiến đá có thể được mô tả như là một hình đa giác được ghép thành từ nhiều phiến\nđá nhỏ\nhình chữ nhật có chung nhau một mép, có các chiều dài khác nay nhưng giống nhau về chiều\nrộng và\nbằng 1 đơn vị. Trong hình vẽ dưới đây, phiến đá đa giác gồm các hình chữ nhật có chiều cao\nlần lượt từ\ntrái qua phải là 2, 1, 4, 5, 1, 3, 3 và chiều rộng đều bằng 1.k\nnote: đây có ảnh\nYêu cầu: Bạn cần giúp Lỗ Ban tìm ra hình chữ nhật chung mép với các hình chữ nhật nhỏ và\ncó diện\ntích lớn nhất nằm trong phiến đá đa giác nói trên. Ở hình vẽ dưới, hình chữ nhật lớn nhất là\nhình được\ngạch chéo.\n\nInput\n• Chứa một hoặc nhiều test. Mỗi test mô tả một đa giác bắt đầu bằng số nguyên n (1 ≤\nn ≤ 1000000) là\nsố lượng hình chữ nhật nhỏ cấu thành đa giác. Tiếp theo sau là n số nguyên l 1, l 2,..., l n\nvới 0 ≤ l i ≤ 100000000 lần lượt từ trái sang phải biểu thị chiều dài của các hình chữ\nnhật. Chiều rộng của các hình\nchữ nhật bằng nhau và bằng 1. File kết thúc với dòng ghi duy nhất một số 0.\n\nOutput\n• Với mỗi test ghi trên một dòng diện tích của hình chữ nhật nằm trong đa giác thỏa mãn\nđiều kiện đề\nbài.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "7 2 1 4 5 1 3 3\n4 1000 1000 1000 1000\n0",
            "sampleOutput": "8\n4000",
            "testCases": [
              {
                "id": "Test 1",
                "input": "7 2 1 4 5 1 3 3\n4 1000 1000 1000 1000\n0",
                "output": "8\n4000"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p6-h-nh-ch-nh-t-0-1",
            "title": "Hình chữ nhật 0 1",
            "fileName": "Hình chữ nhật 0 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.2s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Hình chữ nhật 0 1. Giới hạn thời gian 0.2s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Hình chữ nhật 0 1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một bảng kích thước M × N, được chia thành lưới ô vuông đơn vị M dòng N cột (1 ≤ M, N ≤ 1000)\nTrên các ô của bảng ghi số 0 hoặc 1. Các dòng của bảng được đánh số 1, 2,..., M theo thứ\ntự từ trên xuống dưới và các cột của bảng được đánh số 1, 2,..., N theo thứ tự từ trái qua\nphải\nYêu cầu Hãy tìm một hình chữ nhật gồm các ô của bảng thoả mãn các điều kiện sau:\n• 1 - Hình chữ nhật đó chỉ gồm các số 1\n• 2 - Cạnh hình chữ nhật song song với cạnh bảng\n• 3 - Diện tích hình chữ nhật là lớn nhất có thể\n\nInput\n• Dòng 1: Ghi hai số M, N\n• M dòng tiếp theo, dòng thứ i ghi N số mà số thứ j là số ghi trên ô (i, j) của bảng\n\nOutput\n• Gồm 1 dòng duy nhất ghi diện tích của hình chữ nhật tìm được",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "11 13\n0 0 0 0 0 1 0 0 0 0 0 0 0\n0 0 0 0 1 1 1 0 0 0 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 1 1 1 1 1 1 1 1 1 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 0 0\n0 1 1 1 1 1 1 1 1 1 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 0 0 0 1 1 1 0 0 0 0 1 1\n0 0 0 0 0 1 0 0 0 0 0 1 1",
            "sampleOutput": "49",
            "testCases": [
              {
                "id": "Test 1",
                "input": "11 13\n0 0 0 0 0 1 0 0 0 0 0 0 0\n0 0 0 0 1 1 1 0 0 0 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 1 1 1 1 1 1 1 1 1 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 0 0\n0 1 1 1 1 1 1 1 1 1 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 0 1 1 1 1 1 1 1 0 0 0 0\n0 0 0 0 1 1 1 0 0 0 0 1 1\n0 0 0 0 0 1 0 0 0 0 0 1 1",
                "output": "49"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p7-h-nh-ch-nh-t-l-n-nh-t",
            "title": "Hình chữ nhật lớn nhất",
            "fileName": "Hình chữ nhật lớn nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.5s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Hình chữ nhật lớn nhất. Giới hạn thời gian 0.5s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Hình chữ nhật lớn nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một bảng kích thước m × n được chia thành lưới ô vuông đơn vị. Các hàng của bảng\nđược đánh số từ 1 tới m từ trên xuống và các cột của bảng được đánh số từ 1 tới n từ trái\nqua phải. Ô nằm trên hàng i và cột j của bảng gọi là ô (i, j). Mỗi ô được tô bởi một trong\nhai màu: Đen (B) hoặc Trắng (W).\nHãy tìm một hình chữ nhật có diện tích lớn nhất thỏa mãn các điều kiện sau:\n• Cạnh hình chữ nhật song song với cạnh bảng,\n• Hình chữ nhật chiếm trọn một số ô của bảng và chỉ gồm các ô trắng.\n\nInput\nVào từ file văn bản MAXRECT.INP\n• Dòng 1 chứa hai số nguyên dương m, n ≤ 1000 cách nhau bởi dấu cách.\n• m dòng tiếp theo, dòng thứ i chứa n ký tự liền nhau, ký tự thứ j là B nếu ô (i, j) là ô\nđen, là W nếu ô (i, j) là ô trắng.\n\nOutput\nGhi ra file văn bản MAXRECT.OUT một số nguyên duy nhất là diện tích (số ô nằm trong) hình\nchữ nhật tìm được (ghi số 0 nếu bảng đã cho không có ô trắng).",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "Vào từ file văn bản MAXRECT.INP",
            "sampleOutput": "Ghi ra file văn bản MAXRECT.OUT  một số nguyên duy nhất là diện tích (số ô nằm trong) hình\nchữ nhật tìm được (ghi số  nếu bảng đã cho không có ô trắng).\nExample\nĐiểm: 1400 (p) Thời gian: 0.5s Bộ nhớ: 1G Input: MAXRECT.INP Output: MAXRECT.OUT\nm × n\n1 m 1 n\ni j (i, j)\nCạnh hình chữ nhật song song với cạnh bảng,• Hình chữ nhật chiếm trọn một số ô của bảng và chỉ gồm các ô trắng.• Dòng 1 chứa hai số nguyên dương  cách nhau bởi dấu cách.• m, n ≤ 1000\n dòng tiếp theo, dòng thứ  chứa  ký tự liền nhau, ký tự thứ  là B  nếu ô  là ô\nđen, là W  nếu ô  là ô trắng.",
            "testCases": [
              {
                "id": "Test 1",
                "input": "Vào từ file văn bản MAXRECT.INP",
                "output": "Ghi ra file văn bản MAXRECT.OUT  một số nguyên duy nhất là diện tích (số ô nằm trong) hình\nchữ nhật tìm được (ghi số  nếu bảng đã cho không có ô trắng).\nExample\nĐiểm: 1400 (p) Thời gian: 0.5s Bộ nhớ: 1G Input: MAXRECT.INP Output: MAXRECT.OUT\nm × n\n1 m 1 n\ni j (i, j)\nCạnh hình chữ nhật song song với cạnh bảng,• Hình chữ nhật chiếm trọn một số ô của bảng và chỉ gồm các ô trắng.• Dòng 1 chứa hai số nguyên dương  cách nhau bởi dấu cách.• m, n ≤ 1000\n dòng tiếp theo, dòng thứ  chứa  ký tự liền nhau, ký tự thứ  là B  nếu ô  là ô\nđen, là W  nếu ô  là ô trắng."
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p8-th-c-hi-n-bi-u-th-c",
            "title": "Thực hiện biểu thức",
            "fileName": "Thực hiện biểu thức - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Thực hiện biểu thức. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Thực hiện biểu thức - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho xâu S chỉ gồm các số nguyên dương và các dấu +, −, *, /, trong S không có dấu khoảng\ntrống. Bạn cần tính giá trị của biểu thức được biểu diễn bởi xâu đó.\nKết quả của biểu thức luôn là số nguyên.\n\nInput\nMột xâu S chứa các số nguyên dương 1 ≤ n ≤ 100 và các dấu +, -, *, /. 1 ≤ ∣ s ∣ ≤ 1 0 7.\n\nOutput\nMột số nguyên là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1+2+3*5-2/2+6",
            "sampleOutput": "23",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1+2+3*5-2/2+6",
                "output": "23"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p9-tr-m-x-ng",
            "title": "Trạm xăng",
            "fileName": "Trạm xăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Trạm xăng. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Trạm xăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Giáo sư X dự định thực hiện một chuyến đi bằng ô tô trên con đường dài n km tính từ km 0\n(nơi xuất phát) tới\nkm n (nơi kết thúc). Ô tô của giáo sư X có bình xăng dung tích là k lít, mỗi lít xăng cho phép\nô tô đi được quãng\nđường dài đúng 1 km.\nTại mỗi mốc km, từ mốc km 0 tới mốc km n − 1, có một trạm xăng, tại đó giáo sư X có thể\nmua thêm xăng nạp vào\nbình, tuy nhiên bình xăng không thể chứa quá k lít tính cả lượng xăng còn lại trong xe trước\nkhi mua. Giá xăng ở\ntrạm xăng tại mốc km thứ i là c i một lít (∀ i: 0 ≤ i < n).\nHãy tìm cách thực hiện chuyến đi với tổng số tiền mua xăng thấp nhất. Biết rằng giáo sư X\nxuất phát từ 𝑘𝑚 số 0\nvới một bình xăng rỗng.\n\nInput\n• Dòng 1 chứa hai số nguyên dương n, k (k ≤ n ≤ 10^6)\n• Dòng 2 chứa 𝑛 số nguyên dương c 0, c 1, …, c n − 1 (∀ i: c i ≤ 10^9)\nCác số trên một dòng của input file được ghi cách nhau bởi dấu cách\n\nOutput\n• Ghi ra một số nguyên duy nhất là tổng số tiền mua xăng theo phương án tìm được.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "9 3\n1 7 2 9 3 6 8 5 4",
            "sampleOutput": "22",
            "testCases": [
              {
                "id": "Test 1",
                "input": "9 3\n1 7 2 9 3 6 8 5 4",
                "output": "22"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p10-x-u-ami",
            "title": "Xâu Ami",
            "fileName": "Xâu Ami - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Xâu Ami. Giới hạn thời gian 2.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Xâu Ami - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Xâu kí tự ami được định nghĩa đệ quy như sau:\n• Xâu rỗng là một xâu ami.\n• Nếu A và B là các xâu ami thì một xâu mới C được tạo ra bằng cách ghép hai xâu này\nvới nhau cũng là một xâu ami (AB và BA là xâu ami).\n• Nếu A là một xâu ami thì một xâu mới C được tạo ra bằng cách thêm vào vị trí đầu và\ncuối của A cùng một kí tự x cũng là một xâu ami (xAx là một xâu ami).\nVí dụ, một số xâu ami là aabb, ab cc ba. Các xâu ami, c u o m không phải là xâu ami.\nCác bạn có một xâu S chỉ gồm các kí tự tiếng Anh thường. Hãy xác định xem đây có phải là\nmột xâu ami hay không.\n\nInput\n• Một dòng chứa xâu kí tự S.\n\nOutput\n• Hãy in ra 1 nếu xâu S là xâu ami và in ra 0 trong trường hợp ngược lại.\n\nScoring\nGọi n là độ dài xâu S.\n• Subtask 1 (60% số điểm): 1 ≤ n ≤ 100.\n• Subtask 2 (10% số điểm): 1 ≤ n ≤ 1000.\n• Subtask 3 (30% số điểm): 1 ≤ n ≤ 10^5.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "caabbc",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "caabbc",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p11-x-y-d-ng-m-ng",
            "title": "Xây dựng mảng",
            "fileName": "Xây dựng mảng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.5s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Xây dựng mảng. Giới hạn thời gian 0.5s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Xây dựng mảng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy số nguyên A gồm n phần tử. Ta định nghĩa mảng B gồm n phần tử, với B [ i ]\nđược tính như sau:\n• Bằng A [ j ] là phần tử gần nhất bên trái A [ i ] và nhỏ hơn hoặc bằng A [ i ] (với 1 ≤ j <\ni, j lớn nhất có thể, A [ j ] ≤ A [ i ]).\n• Bằng 0 khi không tồn tại A [ j ] như trên.\nVí dụ: Với A = 2, 5, 3, 6 thì B = 0, 2, 2, 3\n1.\nA [ 1 ] là số đầu tiên trong dãy ⇒ B [ 1 ] = 0\n2.\nSố gần nhất bên trái nhỏ hơn hoặc bằng 5 là 2 ⇒ B [ 2 ] = 2\n3.\nSố gần nhất bên trái nhỏ hơn hoặc bằng 3 là 2 ⇒ B [ 3 ] = 2\n4.\nSố gần nhất bên trái nhỏ hơn hoặc bằng 6 là 3 ⇒ B [ 4 ] = 3\nYêu cầu: Cho mảng A, hãy tìm và in ra mảng B thõa mãn điều kiện trên.\n\nInput\n• Dòng đầu tiên là số nguyên n.\n• Dòng thứ hai gồm n số nguyên là các phần tử của mảng A.\n\nOutput\n• Gồm n số nguyên là các phần tử của mảng B.\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ A [ i ] ≤ 10^9\n• Subtasks 1 (33, 33% số điểm): n ≤ 1 0 4\n• Subtasks 2 (66, 67% số điểm): Không có ràng buộc gì thêm",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n2 5 3 6",
            "sampleOutput": "0 2 2 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n2 5 3 6",
                "output": "0 2 2 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p12-x-p-h-ng",
            "title": "Xếp hàng",
            "fileName": "Xếp hàng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.5s",
            "memoryLimit": "1GB",
            "point": 1000,
            "preview": "Bài toán Xếp hàng. Giới hạn thời gian 0.5s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Xếp hàng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong giờ học đội ngũ, có n người xếp hàng dọc đánh số từ 1 tới n, người thứ i có chiều cao\nlà h i. Người có chỉ số nhỏ hơn đứng trước.\nSau khi xếp hàng, có một số người phàn nàn rằng anh ta bị người khác chắn tầm mắt. Cụ thể\nlà người i bị người j chắn tầm mắt nếu:\n• Người j đứng trước người i (j < i),\n• Người j cao hơn người i (h j > h i),\n• Người j đứng gần người i nhất (j lớn nhất có thể).\nYêu cầu: Với mỗi người, cho biết anh ta bị người nào chắn tầm mắt.\n\nInput\nVào từ file văn bản LINEUP.INP\n• Dòng 1 chứa số nguyên dương n ≤ 10^5.\n• Dòng 2 chứa n số nguyên dương h 1, h 2, …, h n cách nhau bởi dấu cách (∀ i: h i ≤\n10^9).\n\nOutput\nGhi ra file văn bản LINEUP.OUT n số k 1, k 2, …, k n cách nhau bởi dấu cách. Trong đó k i là\nsố hiệu người chắn tầm mắt của người i. Nếu người i không bị ai chắn tầm mắt, thì quy ước\nk i = 0.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "Vào từ file văn bản LINEUP.INP",
            "sampleOutput": "Ghi ra file văn bản LINEUP.OUT   số  cách nhau bởi dấu cách. Trong đó  là\nsố hiệu người chắn tầm mắt của người . Nếu người  không bị ai chắn tầm mắt, thì quy ước\n.\nExample\nĐiểm: 1000 (p) Thời gian: 0.5s Bộ nhớ: 1G Input: LINEUP.INP Output: LINEUP.OUT\nn 1 n i\nh  \ni\ni j\nNgười  đứng trước người  ,• j i (j < i)\nNgười  cao hơn người  ,• j i (h  >j h  )i\nNgười  đứng gần người  nhất (  lớn nhất có thể).• j i j\nDòng 1 chứa số nguyên dương .• n ≤ 105\nDòng 2 chứa  số nguyên dương  cách nhau bởi dấu cách \n.",
            "testCases": [
              {
                "id": "Test 1",
                "input": "Vào từ file văn bản LINEUP.INP",
                "output": "Ghi ra file văn bản LINEUP.OUT   số  cách nhau bởi dấu cách. Trong đó  là\nsố hiệu người chắn tầm mắt của người . Nếu người  không bị ai chắn tầm mắt, thì quy ước\n.\nExample\nĐiểm: 1000 (p) Thời gian: 0.5s Bộ nhớ: 1G Input: LINEUP.INP Output: LINEUP.OUT\nn 1 n i\nh  \ni\ni j\nNgười  đứng trước người  ,• j i (j < i)\nNgười  cao hơn người  ,• j i (h  >j h  )i\nNgười  đứng gần người  nhất (  lớn nhất có thể).• j i j\nDòng 1 chứa số nguyên dương .• n ≤ 105\nDòng 2 chứa  số nguyên dương  cách nhau bởi dấu cách \n."
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b4-p13-ch-t",
            "title": "Đủ chất",
            "fileName": "Đủ chất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 1200,
            "preview": "Bài toán Đủ chất. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 4/Đủ chất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cũng như mọi học sinh, Trà cố gắng đảm bảo ăn uống điều độ, đủ chất và tiết kiệm. Đã mấy\nnăm rồi, sáng nào Trà cũng ăn hai cái bánh mỳ tròn và uống một cốc sữa đậu nành.\nSữa đậu nành đóng hộp có thể giữ khá lâu, nhưng bánh mỳ thì không để dành được quá k\nngày. Giá bánh mỳ thường xuyên biến động. Nhờ tính tình vui vẻ cởi mở, Trà có quan hệ rất\ntốt với người bán hàng và biết được giá bánh trong m ngày tính từ hôm nay. Từ đó Trà có thể\nlên kế hoạch để tiết kiệm nhất trong việc mua bánh mỳ.\nVí dụ, bánh có thể giữ được trong hai ngày. Giá bánh hôm này là 3 đồng/chiếc, giá ngày mai\nlà 1 đồng/chiếc và giá ngày kia sẽ là 2 đồng/ chiếc. Kế hoạch chi tiết kiệm của Trà sẽ là: hôm\nnay mua hai chiếc bánh mỳ tròn, ngày mai - sẽ mua 4 chiếc vừa ăn vừa để dành cho ngày kia.\nNhư vậy Trà phải chi tất cả là 3 × 2 + 1 × 4 = 10.\nYêu cầu: Cho m, k, c i, i = 1 ÷ m, trong đó c i - giá một chiếc bánh mỳ tròn bán ngày thứ\ni (1 ≤ m, k, c i ≤ 10^5). Hãy xác định số tiền tối thiểu cần có.\n\nInput\n• Dòng thứ nhất chứa 2 số nguyên m, k,\n• Dòng thứ 2 chứa m số nguyên c 1, c 2,..., c n.\n\nOutput\n• Ghi một số nguyên - chi phí tối thiểu,",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 2\n3 1 2",
            "sampleOutput": "10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 2\n3 1 2",
                "output": "10"
              },
              {
                "id": "Test 2",
                "input": "2 1\n1 2",
                "output": "6"
              }
            ],
            "totalTests": 2
          }
        ]
      },
      {
        "id": "cp-silver-lesson-5",
        "order": 5,
        "title": "Đếm đoạn con & Cửa sổ trượt có trạng thái",
        "theoryPdfFileName": "Chapter 3 lesson 5 - Đếm đoạn con & cửa sổ với trạng thái.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 5 - Đếm đoạn con & cửa sổ với trạng thái.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Đếm đoạn con & Cửa sổ trượt có trạng thái với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Đếm đoạn con & cửa sổ với trạng thái\nTrong chapter 2 bạn đã học two pointers / sliding window cơ bản - tìm đoạn[l, r]tốt\nnhất thỏa điều kiện. Bài này tập trung vào hai kỹ thuật mới và mạnh hơn ở mức Bạc:\n1. Đếm số đoạn con thỏa một tính chất - thường dùng prefix sum + hash map.\n2. Cửa sổ với trạng thái phức tạp - duy trì tần suất, số phần tử phân biệt, max/min bên\ntrong cửa sổ.\nKỹ thuật chính: biến đổi bài toán \"với mỗi *r*, có bao nhiêu *l* thỏa?\"thành phép tra cứu\ntrongO(1)trung bình.\n1. Đếm đoạn con qua prefix sum + hash map\nĐề kinh điển: Cho dãya 1, . . . , an (có thể chứa số âm) vàK. Đếm số đoạn[l, r]vớiPr\ni=l ai =K.\nTại sao two-pointers KHÔNG đủ? Khi mảng có số âm, tổng đoạn không đơn điệu theo\ncửa sổ - không thể \"chỉ kéoltiến lên.\"Cần kỹ thuật khác.\nÝ tưởng: ĐặtP[i] =a 1 +a 2 +···+a i (prefix sum,P[0] = 0). Khi đó:\nrX\ni=l\nai =P[r]−P[l−1]\nPr\ni=l ai =K⇔P[r]−P[l−1] =K⇔P[l−1] =P[r]−K.\nDuyệtrtừ trái sang phải, dùng *map*<long long, int>đếm tần suất các giá trịP[j]đã\nthấy.\nC++\nmap < long long , long long > cnt ;\ncnt [0] = 1;// Prefix rong tuong ung P [0] = 0\nlong long P = 0 , ans = 0;\nfor ( int r = 1; r <= n ; r ++) {\nP += a [ r ];\nans += cnt [ P - K ];// So j < r voi P [ j ] = P [ r ] - K\ncnt [ P ]++;\n}\ncout << ans ;\nPython\nfrom c o l l e c t i o n s import d e f a u l t d i c t\ncnt = d e f a u l t d i c t ( int )\ncnt [0] = 1\nP , ans = 0 , 0\nfor x in a :\nP += x\nans += cnt [ P - K ]\ncnt [ P ] += 1\nprint ( ans )\nPhức tạp:O(n)trung bình.\nBiến thể quan trọng\n• Sum chia hết choM:P[r]≡P[l−1] (modM). Đếm tần suấtP[i] (modM).\n• XOR:Plà prefix XOR, đoạn có XOR=K⇔P[r]⊕P[l−1] =K.\n2. Cửa sổ với trạng thái: số phần tử phân biệt\nĐề: Tìm đoạn liên tiếp dài nhất có không quá *K*giá trị phân biệt.\nÝ tưởng: Dùng two-pointers / sliding window. Duy trì mộtmapđếm tần suất các phần\ntử trong[l, r]. Độ dàimap(hoặc số key cócount>0) = số phân biệt.\nC++\nmap < int , int > freq ;\nint l = 1 , ans = 0;\nfor ( int r = 1; r <= n ; r ++) {\nfreq [ a [ r ]]++;// Them vao cua so\nwhile (( int ) freq . size () > K ) {\nif ( - - freq [ a [ l ]] == 0) freq . erase ( a [ l ]) ;\nl ++;\n}\nans = max ( ans , r - l + 1) ;\n}\nPython\nfrom c o l l e c t i o n s import d e f a u l t d i c t\nfreq = d e f a u l t d i c t ( int )\nl = 0\nans = 0\nfor r in range ( n ) :\nfreq [ a [ r ]] += 1\nwhile len ( freq ) > K :\nfreq [ a [ l ]] -= 1\nif freq [ a [ l ]] == 0:\ndel freq [ a [ l ]]\nl += 1\nans = max ( ans , r - l + 1)\nPhức tạp:O(nlogn)với *map*,O(n)trung bình vớiunordered_map/dict.\n3. Mẹo \"đúng *K*- \"≤K\"trừ \"≤(K−1)\"\nĐề: Đếm số đoạn có đúng *K* giá trị phân biệt (hoặc đúng *K* số lẻ, đúng *K*số chẵn, ...).\nVấn đề: Sliding window tự nhiên đếm không quá *K*, không phải đúng *K*.\nMẹo:\n#(đúng *K*) = #(≤K)−#(≤K−1)\nGọi *atMost(K)* =  hàm đếm số đoạn có không quá *K*giá trị phân biệt (dùng sliding\nwindow + map). Đáp án =*atMost(K)* - *atMost(K - 1)*.\nC++\nlong long atMost ( int K ) {\nmap < int , int > freq ;\nint l = 1;\nlong long ans = 0;\nfor ( int r = 1; r <= n ; r ++) {\nfreq [ a [ r ]]++;\nwhile (( int ) freq . size () > K ) {\nif ( - - freq [ a [ l ]] == 0) freq . erase ( a [ l ]) ;\nl ++;\n}\nans += r - l + 1;\n}\nreturn ans ;\n}\nlong long exactlyK = atMost ( K ) - atMost ( K - 1) ;\nPython\ndef at_most ( K ) :\nfreq = d e f a u l t d i c t ( int )\nl , ans = 0 , 0\nfor r in range ( n ) :\nfreq [ a [ r ]] += 1\nwhile len ( freq ) > K :\nfreq [ a [ l ]] -= 1\nif freq [ a [ l ]] == 0:\ndel freq [ a [ l ]]\nl += 1\nans += r - l + 1\nreturn ans\nex ac tl y_ K = at_most ( K ) - at_most ( K - 1)\nĐây là mẹo cực kỳ phổ biến - gặp trong hàng trăm bài. Hãy nhớ thật kỹ!\nBiến thể tương tự\n• Đếm số đoạn có đúng *K* số lẻ: *atMostKOdd(K)* - *atMostKOdd(K - 1)* với *atMostKOdd*\nđếm bằng sliding window đếm số lẻ.\n• Đếm số đoạn có tổng = *K*→đã giải bằng prefix + map ở phần 1.\n4. \"Với mỗi *r*, đếm số *l* thỏa\"\nKhi điều kiện đơn điệu (không có số âm/đặc biệt): dùng sliding window thẳng, đếm\nr−l+ 1 ở mỗi bước.\nĐề: Đếm số đoạn có tổng ≤ *S*(giả sử *a_i > 0*).\nC++\nint l = 1;\nlong long sum = 0 , ans = 0;\nfor ( int r = 1; r <= n ; r ++) {\nsum += a [ r ];\nwhile ( sum > S ) sum -= a [ l ++];\nans += r - l + 1;\n}\nPython\nsum_val , ans = 0 , 0\nl = 0\nfor r in range ( n ) :\nsum_val += a [ r ]\nwhile sum_val > S :\nsum_val -= a [ l ]\nl += 1\nans += r - l + 1\nLý do: sau khillà vị trí nhỏ nhất sao cho[l..r]vẫn thỏa, mọi đoạn[l..r],[l+ 1..r], . . . ,[r..r]\nđều có tổng ≤ *S*(ngắn hơn→tổng nhỏ hơn).\n5. Mẫu nhận diện bài\nĐỀ BÀI KỸ THUẬT\nĐếm đoạn có tổng = *K*(có số âm) Prefix sum + hashmap\nĐếm đoạn có tổng chia hết choM Prefix modM+ hashmap\nĐếm đoạn có XOR=K Prefix XOR + hashmap\nĐoạn dài nhất có≤Kphân biệt Sliding + map đếm tần suất\nĐếm đoạn có đúng *K* phân biệt *atMost(K)* - *atMost(K - 1)*\nĐếm đoạn tổng ≤ *S*(a i >0) Sliding, P(r−l+ 1)\nMax/min trong mọi cửa sổ độ dàik Monotonic deque\n6. Bẫy thường gặp\n• Quêncnt[0] = 1trong prefix-sum hashmap - bỏ sót đoạn bắt đầu từ vị trí 1.\n• Trànlong long: tổng prefix có thể lớn - luôn dùnglong long.\n• Hash collision attack:unordered_mapcó thể bị TLE - đổi sangmapnếunvừa phải\nhoặc dùng custom hash.\n• At-most-K: nhớ trừatMost(K-1), không phảiatMost(K) - 1.\n• Sliding cần đơn điệu: nếu mảng có số âm và bài hỏi tổng, two-pointers thông thường\nKHÔNG dùng được - phải prefix + map.\n7. Tổng kết\nBài này nâng cấp two-pointers / sliding window từ \"tìm cửa sổ tốt nhất\"sang đếm tất cả\ncác cửa sổ và duy trì trạng thái phức tạp trong cửa sổ. Hai chiến thuật chính:\n• Prefix sum + hashmap: cho bài toán đếm tổng/XOR/mod (xử lý được số âm).\n• Sliding window + map/multiset: cho bài toán có \"trạng thái\"trong cửa sổ (số phân\nbiệt, tần suất).\n• At-most-Ktrick: chuyển \"đúng *K*\"về hai lần \"≤K\".\nĐây là những kỹ thuật bạn sẽ gặp rất nhiều ở các bài tầm trung trở lên!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b5-p1-subarray-distinct-values",
            "title": "Subarray Distinct Values",
            "fileName": "CSES - Subarray Distinct Values _ Giá trị phân biệt trong đoạn con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Subarray Distinct Values. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/CSES - Subarray Distinct Values _ Giá trị phân biệt trong đoạn con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Với một mảng gồm n số nguyên, nhiệm vụ của bạn là tính toán số lượng đoạn con có nhiều\nnhất k giá trị phân biệt.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và k: kích thước của mảng và số lượng giá trị\nphân biệt tối đa\n• Dòng tiếp theo có n số nguyên x 1, x 2, …, x n: nội dung của mảng\n• Các ràng buộc:\n• 1 ≤ k ≤ n ≤ 2 \times 10^5\n• 1 ≤ x_i ≤ 10^9\n\nOutput\n• In một số nguyên: số lượng đoạn con.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 2\n1 2 3 1 1",
            "sampleOutput": "10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 2\n1 2 3 1 1",
                "output": "10"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p2-subarray-divisibility",
            "title": "Subarray Divisibility",
            "fileName": "CSES - Subarray Divisibility _ Tính chia hết của đoạn con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Subarray Divisibility. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/CSES - Subarray Divisibility _ Tính chia hết của đoạn con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên, nhiệm vụ của bạn là đếm số lượng đoạn con trong đó tổng\ncác giá trị chia hết cho n.\n\nInput\n• Dòng đầu vào đầu tiên có một số nguyên n: kích thước của mảng.\n• Dòng tiếp theo có n số nguyên x 1, x 2, …, x n: nội dung của mảng.\n\nOutput\n• In một số nguyên: số lượng đoạn con được yêu cầu.\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• − 10^9 ≤ a i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n3 1 2 7 4",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 1 2 7 4",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p3-subarray-sums-ii",
            "title": "Subarray Sums II",
            "fileName": "CSES - Subarray Sums II _ Tổng đoạn con II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Subarray Sums II. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/CSES - Subarray Sums II _ Tổng đoạn con II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một mảng gồm n số nguyên, nhiệm vụ của bạn là đếm số lượng đoạn con có tổng x.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và x: kích thước của mảng và tổng x\n• Dòng tiếp theo có n số nguyên a 1, a 2, …, a n: nội dung của mảng\n\nOutput\n• In một số nguyên: số lượng đoạn con được yêu cầu\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• − 10^9 ≤ x, a i ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 7\n2 -1 3 5 -2",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 7\n2 -1 3 5 -2",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p4-ch-m-n-hsg-9-n-ng-2023-2024",
            "title": "Chùm đèn (HSG 9 Đà Nẵng 2023-2024)",
            "fileName": "Chùm đèn (HSG 9 Đà Nẵng 2023-2024) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Chùm đèn (HSG 9 Đà Nẵng 2023-2024). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/Chùm đèn (HSG 9 Đà Nẵng 2023-2024) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Tóm tắt: Cho mảng số nguyên A có N phần tử và một số nguyên dương K.\nYêu cầu: Hãy đếm số đoạn con liên tiếp có đúng K số lẻ.\n\nInput\nĐọc từ file văn bản CHUMDEN.INP:\n• Dòng 1 chứa N, K, (1 ≤ K ≤ N ≤ 10^6)\n• Dòng 2 chứa các số nguyên của mảng A, (1 ≤ A_i ≤ 10^6).\n\nOutput\nGhi ra file văn bản CHUMDEN.OUT một số nguyên duy nhất là kết quả bài toán.\n\nScoring\n• Subtask 1 (30% số điểm): N ≤ 100.\n• Subtask 2 (30% số điểm): N ≤ 5 × 1 0 3.\n• Subtask 2 (40% số điểm): không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 2\n1 3 2 3",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 2\n1 3 2 3",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p5-d-y-d-i-nh-t",
            "title": "Dãy dài nhất",
            "fileName": "Dãy dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1500,
            "preview": "Bài toán Dãy dài nhất. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/Dãy dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên A = (a 0, a 1, …, a n − 1) hãy tìm một dãy con dài nhất gồm các phần tử\nliên tiếp trong A sao cho độ chênh lệch giữa phần tử lớn nhất và phần tử nhỏ nhất của dãy\ncon đó không vượt quá Δ.\n\nInput\n• Dòng 1 chứa số nguyên dương n ≤ 10^6 và số nguyên không âm Δ ≤ 2 × 10^9\n• Dòng 2 chứa n số nguyên a 0, a 1, …, a n − 1 cách nhau bởi dấu cách (∀ i: ∣ a i ∣ ≤ 10^9)\n\nOutput\n• Ghi ra một số nguyên duy nhất là độ dài dãy con tìm được",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10 6\n10 5 4 3 2 1 9 8 7 6",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10 6\n10 5 4 3 2 1 9 8 7 6",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p6-o-n-con-hsg-thpt-h-t-nh-2023",
            "title": "Đoạn con (HSG THPT Hà Tĩnh 2023)",
            "fileName": "Đoạn con (HSG THPT Hà Tĩnh 2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1100,
            "preview": "Bài toán Đoạn con (HSG THPT Hà Tĩnh 2023). Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/Đoạn con (HSG THPT Hà Tĩnh 2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Đoạn con của một dãy số nguyên là tập hợp các phần tử liên tiếp từ điểm đầu L đến điểm\ncuối R (1 ≤ L ≤ R ≤ n) của dãy số nguyên đó.\nCho một dãy số nguyên A gồm n phần tử a 1, a 2, a 3, …, a n là các số nguyên.\nHãy đếm số đoạn con có tổng tất cả giá trị các phần tử bằng 0.\n\nInput\n• Dòng đầu là số tự nhiên n ≤ 10^5;\n• Dòng thứ 2 là n số nguyên a 1, a 2, a 3, …, a n (∣ a i ∣ ≤ 10^9);\n\nOutput\n• Ghi ra 1 số duy nhất là số lượng đoạn con thỏa mãn điều kiện bài toán.\nCác số trên một dòng của tệp input/output phải cách nhau ít nhất một dấu cách.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n-3 1 0 -1 3",
            "sampleOutput": "3\nScoring\n• Có 50% số test ứng với 50% số điểm có n ≤ 100 ;\n• Có 30% số test ứng với 30% số điểm có 100 < n ≤ 1000 ;\n• Có 20% số test ứng với 20% số điểm có 1000 < n ≤ 100000 .",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n-3 1 0 -1 3",
                "output": "3\nScoring\n• Có 50% số test ứng với 50% số điểm có n ≤ 100 ;\n• Có 30% số test ứng với 30% số điểm có 100 < n ≤ 1000 ;\n• Có 20% số test ứng với 20% số điểm có 1000 < n ≤ 100000 ."
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p7-o-n-ng-nh-m-ch-n",
            "title": "Đoạn đường nhàm chán",
            "fileName": "Đoạn đường nhàm chán - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Đoạn đường nhàm chán. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/Đoạn đường nhàm chán - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "(Ở một tương lai xa xôi) Trên con đường mới được quy hoạch của thành phố X, có n tòa nhà\ncao tầng nằm trên một con đường (tạm coi như một đường thẳng). Nhà thứ i có độ cao là h i\nmét.\nViệt không thích những tòa nhà có cùng độ cao nằm gần nhau. Cậu định nghĩa một dãy nhà\n[ l, r ] (l ≤ r) là \"nhàm chán\" nếu như trong toàn bộ những căn nhà thứ l, l + 1, l +\n2, …, r − 1, r chỉ có không quá k độ cao khác nhau.\nNhằm đánh giá con đường này, Việt cần tính số lượng dãy nhà nhàm chán. Vì đã thấm mệt\nsau khi đi từ đầu đường tới cuối đường để lấy thông tin về chiều cao của các tòa nhà, Việt\nnhờ bạn lập trình giải quyết vấn đề trên. Hãy giúp Việt nhé!\nBonus: sau khi hỏi thị trưởng, Việt đã có được một số thông tin giúp việc tính toán trở nên dễ\ndàng hơn. Thông tin này được kí hiệu bởi số θ\n\nInput\n• Dòng đầu tiên chứa θ (θ ∈ { 1, 2, 3, 4, 5 }): thông tin mới có được từ thị trưởng\n• Dòng thứ hai chứa n, k (1 ≤ n, k ≤ 10^5): số tòa nhà, và số định nghĩa sự \"nhàm chán\"\n• Dòng tiếp theo chứa n số nguyên dương h 1, h 2, h 3, …, h n (1 ≤ h i ≤ 10^9)\n\nOutput\n• Dòng duy nhất chứa số dãy nhà nhàm chán mà bạn đếm được\n\nScoring\n• Subtask 1 (20% số điểm): θ = 1, h i ≤ n ≤ 100\n• Subtask 2 (30% số điểm): θ = 2, h i ≤ n ≤ 1000\n• Subtask 3 (15% số điểm): θ = 3 và các tòa nhà có chiều cao khác nhau đôi một.\n• Subtask 4 (15% số điểm): θ = 4, k = 1\n• Subtask 5 (20% số điểm): θ = 5, không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1\n5 2\n1 2 3 1 1",
            "sampleOutput": "10",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1\n5 2\n1 2 3 1 1",
                "output": "10"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b5-p8-m-k-t",
            "title": "Đếm Kí Tự",
            "fileName": "Đếm Kí Tự - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.1s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Đếm Kí Tự. Giới hạn thời gian 0.1s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 5/Đếm Kí Tự - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "lethienquan28052006 từ nhỏ đã rất đẹp trai, phong độ, rất nhiều cô gái theo đuổi. Nhưng\nlethienquan28052006 chỉ theo đuổi một người con gái x_inh đệp duy nhất là phuongthao.\nphuongthao là một cô gái pro coder nên đã quyết định đưa ra một bài tập siêu dễ để thử\nsức của lethienquan28052006, bài tập có nội dung như sau:\nCho xâu S gồm N kí tự latinh thường.\nYêu cầu: Gồm Q truy vấn, mỗi truy vấn gồm bộ ba (L, R, C) và bạn phải in ra số lượng kí tự\nC trong các kí tự S L, S L + 1, …, S R.\n\nInput\n• Dòng đầu chứa hai số nguyên dương N và Q;\n• Dòng thứ hai chứa xâu 𝑆 gồm 𝑁 kí tự latinh thường;\n• Q dòng sau, mỗi dòng chứa bộ ba (L, R, C) (1 \\leq L \\leq R \\leq N; C ∈ a, b, …, z).\n\nOutput\n• Gồm Q dòng, mỗi dòng là kết quả tương ứng với mỗi truy vấn.\n\nScoring\n• Subtask 1 (30% số điểm): N, Q ≤ 1 0 3.\n• Subtask 2 (70% số điểm): N, Q ≤ 10^5.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 2\nunhi\n1 1 u\n2 4 h",
            "sampleOutput": "1\n1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 2\nunhi\n1 1 u\n2 4 h",
                "output": "1\n1"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-6",
        "order": 6,
        "title": "Tìm kiếm nhị phân trên không gian nghiệm",
        "theoryPdfFileName": "Chapter 3 lesson 6 - Tìm kiếm nhị phân trên đáp án.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 6 - Tìm kiếm nhị phân trên đáp án.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Tìm kiếm nhị phân trên không gian nghiệm với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Tìm kiếm nhị phân trên đáp án\nTrong chapter trước bạn đã học binary search trên mảng - tìm vị trí của giá trị. Bài học\nnày giới thiệu kỹ thuật nâng cao và quan trọng nhất liên quan tới binary search: tìm kiếm\nnhị phân trên đáp án (parametric search).\nĐây là kỹ thuật giải hàng trăm bài toán tối ưu (min/max), miễn là kiểm tra được \"đáp\nán có khả thi không\"trong thời gian hợp lý.\n1. Ý tưởng cốt lõi\nNhiều bài toán có dạng: \"Tìm giá trịxnhỏ nhất (hoặc lớn nhất) sao cho một điều kiện\nP(x)đúng\".\nNếuPcó tính đơn điệu tức là tồn tại một ngưỡngx0 sao cho:\n• Vớix≥x 0 :P(x)đúng\n• Vớix < x 0 :P(x)sai\n(hoặc ngược lại) - thì ta có thể binary search trên giá trịx, mỗi bước chỉ cần kiểm tra\nP(mid).\nMẫu code chuẩn (tìmxnhỏ nhất thỏaP)\nC++\nint lo = LO , hi = HI ;// [ LO , HI ] chua dap an\nwhile ( lo < hi ) {\nint mid = ( lo + hi ) / 2;\nif ( check ( mid ) ) hi = mid ;// Thoa -> thu nho\nelse lo = mid + 1;// Khong thoa -> tang len\n}\n// lo == hi == dap an\nPython\nlo , hi = LO , HI\nwhile lo < hi :\nmid = ( lo + hi ) // 2\nif check ( mid ) :\nhi = mid\nelse :\nlo = mid + 1\n# lo == hi == dap an\nMẫu tìmxlớn nhất thỏaP\nC++\nint lo = LO , hi = HI ;\nwhile ( lo < hi ) {\nint mid = ( lo + hi + 1) / 2;// (+1 de tranh vong lap vo han !)\nif ( check ( mid ) ) lo = mid ;\nelse hi = mid - 1;\n}\nPython\nwhile lo < hi :\nmid = ( lo + hi + 1) // 2# +1 de tranh vong lap vo han\nif check ( mid ) :\nlo = mid\nelse :\nhi = mid - 1\nBẫy quen thuộc: Quên+1trongmid→vòng lặp vô hạn khilo = mid.\n2. Bài toán mẫu 1: Chia gói hàng\nĐề: Cóngói hàng, gói thứinặngw i. Cókngười chuyển hàng. Mỗi người được nhận\nmột dãy liên tiếp các gói. Hỏi: chia thế nào để tổng nặng nhất một người phải vác là nhỏ\nnhất?\nPhân tích:\n• Đáp án nằm trong[maxw i, P wi].\n• VớiXcố định, kiểm tra: \"có chia được sao cho không ai vác> Xkhông? greedy: gộp\nliên tiếp đến khi tổng vượtX, sang người mới.\n• Nếu chia được vớiX→cũng chia được với mọiX ′ > X. Tính đơn điệu OK!\nC++\nbool can ( long long X ) {\nint people = 1;\nlong long load = 0;\nfor ( int i = 1; i <= n ; i ++) {\nif ( w [ i ] > X ) return false ;\nif ( load + w [ i ] > X ) { people ++; load = w [ i ]; }\nelse load += w [ i ];\n}\nreturn people <= k ;\n}\nlong long lo = * m a x _ e l e m e n t ( w + 1 , w + n + 1) ;\nlong long hi = a c c u m u l a t e ( w + 1 , w + n + 1 , 0 LL ) ;\nwhile ( lo < hi ) {\nlong long mid = ( lo + hi ) / 2;\nif ( can ( mid ) ) hi = mid ;\nelse lo = mid + 1;\n}\ncout << lo ;\nPython\ndef can ( X ) :\npeople , load = 1 , 0\nfor wi in w :\nif wi > X :\nreturn False\nif load + wi > X :\npeople += 1\nload = wi\nelse :\nload += wi\nreturn people <= k\nlo , hi = max ( w ) , sum ( w )\nwhile lo < hi :\nmid = ( lo + hi ) // 2\nif can ( mid ) :\nhi = mid\nelse :\nlo = mid + 1\nprint ( lo )\nĐộ phức tạp:O(nlogW)vớiW= P wi.\n3. Bài toán mẫu 2: Cây bán kẹo (Aggressive Cows)\nĐề: Cónvị trí trên trục số (đã sắp xếp). Đặtkcon bò vàoktrongnvị trí. Tìm cách đặt\nsao cho khoảng cách giữa hai con bò gần nhất là lớn nhất.\nPhân tích:\n• Đáp ánD- kiểm tra: \"có đặt đượckcon bò sao cho mỗi cặp cách nhau≥D?\"Greedy:\nđặt ở vị trí đầu, đi từ trái qua, đặt khi khoảng cách≥D.\n• NếuDkhả thi→mọiD ′ < Dcũng khả thi. Đơn điệu (ngược chiều)→tìmDlớn nhất\nthỏa.\nC++\nauto canPlace = [&]( long long D ) {\nint placed = 1;\nlong long last = pos [1];// Dat con dau o pos [1]\nfor ( int i = 2; i <= n ; i ++) {\nif ( pos [ i ] - last >= D ) {\nplaced ++;\nlast = pos [ i ];\n}\n}\nreturn placed >= k ;\n};\nlong long lo = 1 , hi = pos [ n ] - pos [1];\nwhile ( lo < hi ) {\nlong long mid = ( lo + hi + 1) / 2;// Tim max -> +1\nif ( canPlace ( mid ) ) lo = mid ;\nelse hi = mid - 1;\n}\ncout << lo ;\nPython\ndef c an _p la ce ( D ) :\nplaced , last = 1 , pos [0]\nfor i in range (1 , n ) :\nif pos [ i ] - last >= D :\nplaced += 1\nlast = pos [ i ]\nreturn placed >= k\nlo , hi = 1 , pos [ -1] - pos [0]\nwhile lo < hi :\nmid = ( lo + hi + 1) // 2\nif c an _p lac e ( mid ) :\nlo = mid\nelse :\nhi = mid - 1\nprint ( lo )\n4. Khi check chậm - cẩn thận với độ phức tạp\nNếucheck(mid)làO(n)thì tổngO(nlogV)- thường rất nhanh.\nNếucheck(mid)làO(n 2)→có thể TLE. Hãy luôn ước lượng tổng.\n5. Binary search trên số thực (real binary search)\nKhi đáp án là số thực, dùng vòng lặp cố định (thường 100-200 lần) thay vì so sánhlo <\nhi:\nC++\ndouble lo = LO , hi = HI ;\nfor ( int it = 0; it < 100; it ++) {\ndouble mid = ( lo + hi ) / 2;\nif ( check ( mid ) ) hi = mid ;\nelse lo = mid ;\n}\ncout << fixed << s e t p r e c i s i o n (6) << lo ;\nPython\nlo , hi = LO , HI\nfor _ in range (100) :\nmid = ( lo + hi ) / 2\nif check ( mid ) :\nhi = mid\nelse :\nlo = mid\nprint ( f \" { lo :.6 f } \" )\n100 lần lặp→sai số≤(hi−lo)/2 100 - siêu nhỏ.\n6. Khi nào áp dụng được?\nHãy đặt câu hỏi: \"Nếu tôi đoán đáp án làX, kiểm tra có khả thi không có dễ không?\"→\nsearch on answer là lựa chọn tuyệt vời!\nCác dấu hiệu\n• \"Tìm giá trị nhỏ nhất sao cho ...\"\n• \"Tối thiểu hóa giá trị tối đa\"/ \"Tối đa hóa giá trị tối thiểu\"\n• \"Cók... sao cho ...\"\n• Thử ngược: nếu đề bài hỏi \"tìmX\"mà ta không biết cách, nhưng \"vớiXcho trước,\nkiểm tra dễ\"→binary search.\n7. Bẫy thường gặp\n• Off-by-one trong tínhmid: tìm max→(lo+hi+ 1)/2.\n• Vòng lặp vô hạn: domidkhông thay đổi.\n• Phạm vi[lo, hi]sai: phải bao trùm đáp án.\n• Tràn số:(lo+hi)có thể tràn→dùnglo+ (hi−lo)/2.\n• Hiểu sai tính đơn điệu: nếu không đơn điệu, BS không áp dụng được!\n8. Tổng kết\nBinary search on answer là một trong những kỹ thuật quan trọng nhất ở mức Bạc. Nó\nbiến bài toán tối ưu thành bài toán kiểm tra - thường dễ hơn rất nhiều.\nKhi gặp bài tối ưu, hãy luôn tự hỏi: \"Có thể kiểm tra đáp án không?\"Nếu có, thử BS\ntrước!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b6-p1-caiwindao-v-3-em-g-i",
            "title": "CaiWinDao và 3 em gái",
            "fileName": "CaiWinDao và 3 em gái - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán CaiWinDao và 3 em gái. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/CaiWinDao và 3 em gái - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "CaiWinDao có n bao kẹo, bao kẹo thứ i có a i viên kẹo. Nhân dịp 8/3, CaiWinDao chuẩn bị\nđón 3 em gái đến nhà chơi. Anh muốn xé một số bao kẹo để làm quà các em. Để công bằng,\nlượng kẹo mỗi em nhận được phải bằng nhau và nhiều nhất có thể. Vì CaiWinDao rất ghét đồ\nthừa nên anh muốn rằng đã xé bao nào thì phải cho hết bao đó. Các bạn hãy giúp CaiWinDao\nchia kẹo nào!\n\nInput\n• Dòng đầu chứa 1 số tự nhiên là n (1 ≤ n ≤ 100000)\n• Dòng thứ hai chứa n số tự nhiên a i (0 ≤ a i ≤ 10^9)\n\nOutput\n• In ra số kẹo mà mỗi em gái được nhận.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 2 3 2 2",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 2 3 2 2",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p2-chia-o-n",
            "title": "Chia đoạn",
            "fileName": "Chia đoạn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1000,
            "preview": "Bài toán Chia đoạn. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Chia đoạn - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong một buổi tham quan dã ngoại, các bạn học sinh chuẩn bị n thanh gỗ đánh số từ 1 tới\nn, thanh thứ i có độ dài là một số nguyên a i. Mỗi thanh gỗ có thể được cưa ra thành những\nthanh ngắn hơn với độ dài tùy chọn.\nĐể dựng trại, các bạn học sinh cần có 𝑘 thanh gỗ độ dài bằng nhau. Câu hỏi đặt ra là có thể\ntạo ra k thanh gỗ dài bằng nhau với độ dài nguyên lớn nhất là bao nhiêu.\n\nInput\nVào từ file văn bản PART.INP\n• Dòng 1 chứa hai số nguyên dương n ≤ 10^5; k ≤ 10^9.\n• Dòng 2 chứa n số nguyên dương a 1, a 2, …, a n (∀ i: a i ≤ 10^9).\n• Các số trên một dòng của input được ghi cách nhau bởi dấu cách\n\nOutput\n• Ghi ra file văn bản PART.OUT một số nguyên duy nhất là độ dài lớn nhất của các thanh\ngỗ bằng nhau sau khi cưa ra. Ghi số 0 nếu không thể cưa ra được k thanh gỗ bằng\nnhau với độ dài nguyên.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "Vào từ file văn bản PART.INP",
            "sampleOutput": "Example\nĐiểm: 1000 Thời gian: 1.0s Bộ nhớ: 1G Input: PART.INP Output: PART.OUT\nn 1\nn i a  \ni\nk\nDòng 1 chứa hai số nguyên dương .• n ≤ 10 ; k ≤5 109\nDòng 2 chứa  số nguyên dương  .• n a\n \n, a\n \n, … , a\n \n1 2 n (∀i : a\n \n≤i 10 )9\nCác số trên một dòng của input được ghi cách nhau bởi dấu cách• Ghi ra file văn bản PART.OUT  một số nguyên duy nhất là độ dài lớn nhất của các thanh\ngỗ bằng nhau sau khi cưa ra. Ghi số 0  nếu không thể cưa ra được  thanh gỗ bằng\nnhau với độ dài nguyên.",
            "testCases": [
              {
                "id": "Test 1",
                "input": "Vào từ file văn bản PART.INP",
                "output": "Example\nĐiểm: 1000 Thời gian: 1.0s Bộ nhớ: 1G Input: PART.INP Output: PART.OUT\nn 1\nn i a  \ni\nk\nDòng 1 chứa hai số nguyên dương .• n ≤ 10 ; k ≤5 109\nDòng 2 chứa  số nguyên dương  .• n a\n \n, a\n \n, … , a\n \n1 2 n (∀i : a\n \n≤i 10 )9\nCác số trên một dòng của input được ghi cách nhau bởi dấu cách• Ghi ra file văn bản PART.OUT  một số nguyên duy nhất là độ dài lớn nhất của các thanh\ngỗ bằng nhau sau khi cưa ra. Ghi số 0  nếu không thể cưa ra được  thanh gỗ bằng\nnhau với độ dài nguyên."
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p3-chia-t-olp-10-2018",
            "title": "Chia đất (OLP 10 - 2018)",
            "fileName": "Chia đất (OLP 10 - 2018) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Olympic",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Chia đất (OLP 10 - 2018). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Chia đất (OLP 10 - 2018) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Phú hộ qua đời để lại cho 4 người con một mảnh đất hình vuông có kích thước n × n, trên\nđó có trồng một số cây gỗ quí. Theo di chúc, mảnh đất sẽ được chia thành 4 phần, mỗi phần\nlà một hình chữ nhật. Để tiết kiệm chi phí chia đất nên chỉ có thể thực hiện cắt mảnh đất bởi\nmột nhát cắt theo chiều ngang và một nhát cắt theo chiều dọc. Các con của phú hộ đều thích\ncó nhiều cây gỗ quí vì vậy họ sẽ chọn phần đất có nhiều cây gỗ quí hơn. Thứ tự nhận đất sẽ\ntừ lớn tới nhỏ, người em út sẽ nhận phần có ít cây gỗ quí nhất.\nYêu cầu:\n• Hãy chỉ cách chia đất để chênh lệch giữa số cây gỗ quí của người anh cả và của người em\nút là ít nhất.\n\nInput\n• Dòng thứ nhất ghi số nguyên dương n (2 ≤ n ≤ 500)\n• Tiếp theo là n dòng, mỗi dòng ghi n số, số 0 hoặc số 1. Số 0 thể hiện vị trí không có cây\ngỗ quí, số 1 thể hiện vị trí có cây gỗ quí.\nCác số ghi trên cùng một dòng cách nhau bởi ít nhất một kí tự trắng.\n\nOutput\n• Một dòng ghi một số nguyên là số lượng chênh lệch cây gỗ quí ít nhất trên phần đất của\nngười anh cả và của người em út.\nConstants\n• Có 50% số test tương ứng 50% số điểm có 2 ≤ n ≤ 150\n• Có 50% số test tương ứng 50% số điểm có 150 < n ≤ 500.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n1 0 1 0 0 1\n0 1 0 0 0 1\n1 0 0 0 0 0\n0 1 1 0 0 1\n0 1 0 0 1 0\n1 0 1 0 0 0",
            "sampleOutput": "1\nNguồn: Olympic 30/4 năm 2018.",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n1 0 1 0 0 1\n0 1 0 0 0 1\n1 0 0 0 0 0\n0 1 1 0 0 1\n0 1 0 0 1 0\n1 0 1 0 0 0",
                "output": "1\nNguồn: Olympic 30/4 năm 2018."
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p4-du-l-ch",
            "title": "Du lịch",
            "fileName": "Du lịch - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1500,
            "preview": "Bài toán Du lịch. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Du lịch - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Lớp của Thuận tổ chức đi chơi du lịch đến Nha Trang. Khi đến Nha Trang, họ có một buổi\nchiều tắm biển rất vui vẻ. Sau khi chơi vui vẻ, họ quyết định trở về khách sạn. Đoạn đường từ\nbiển về khách sạn có độ dài là l mét. Mỗi người đều có thể đi bộ với vận tốc là v 1 mét mỗi\ngiây. Tuy nhiên, do đã chơi cả chiều nên ai cũng thấm mệt, họ quyết định gọi xe để trở về\nkhách sạn. Xe có thể chở tối đa k người trong cùng một thời điểm và có vận tốc là v 2 mét\nmỗi giây. Mọi người sẽ chia nhau lên xe và đi bộ, tuy nhiên mỗi người sẽ chỉ lên xe nhiều nhất\nmột lần.\nHãy xác định khoảng thời gian ngắn nhất để tất cả n người đều trở về được khách sạn, coi\nkhoảng thời gian lên xe và xuống xe là ngay lập tức và ta có thể bỏ qua khoảng thời gian này.\n\nInput\n• Một dòng chứa năm số nguyên n, l, v 1, v 2, k (1 ≤ n ≤ 2 × 10^5, 1 ≤ l ≤ 10^9, 1 ≤\nv 1 < v 2 ≤ 10^9, 1 ≤ k ≤ n).\n\nOutput\n• Đưa ra một số thực là khoảng thời gian ngắn nhất (tính theo giây) để cả n người đều trở\nvề được khách sạn. Sai số tối đa cho phép là 1 0 − 6.\n\nScoring\n• Subtask 1 (30% số điểm): k = n.\n• Subtask 2 (30% số điểm): ⌈ n 2 ⌉ ≤ k ≤ n.\n• Subtask 3 (40% số điểm): không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 10 2 4 5",
            "sampleOutput": "2.5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 10 2 4 5",
                "output": "2.5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p5-milktea",
            "title": "MILKTEA",
            "fileName": "MILKTEA - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán MILKTEA. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/MILKTEA - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n cửa hàng trà sữa trong thành phố, cửa hàng thứ i bán với giá x_i đồng. Bạn muốn mua\ntrà sữa trong q ngày liên tiếp biết rằng ngày thứ i bạn được mẹ cho m i đồng.\nHỏi mỗi ngày bạn có thể mua được trà sữa từ bao nhiêu cửa hàng?\n\nInput\n• Dòng đầu tiên chứa số nguyên dương n (1 ≤ n ≤ 10^5) là số cửa hàng bán trà sữa\ntrong thành phố.\n• Dòng thứ hai chứa n số nguyên dương x 1, x 2, …, x n (1 ≤ x_i ≤ 10^5) là giá trà sữa ở\ncửa hàng thứ i.\n• Dòng thứ ba chứa số nguyên q (1 ≤ q ≤ 10^5) là số ngày liên tục bạn muốn mua trà sữa.\n• q dòng tiếp theo, dòng thứ i chứa số nguyên m i (1 ≤ m i ≤ 10^9) là số tiền mẹ bạn cho\ntrong ngày thứ i.\n\nOutput\n• In ra q số nguyên, số nguyên thứ i là số cửa hàng mà bạn có thể mua trà sữa vào ngày\nthứ i.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n3 10 8 6 11\n4\n1\n10\n3\n11",
            "sampleOutput": "0\n4\n1\n5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n3 10 8 6 11\n4\n1\n10\n3\n11",
                "output": "0\n4\n1\n5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p6-minecraft",
            "title": "Minecraft",
            "fileName": "Minecraft - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Minecraft. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Minecraft - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn đang chơi Minecraft, công việc của bạn là phải xây dựng một bức tường có độ cao lớn\nnhất có thể. Hiện tại, bạn đang có sẵn một bức tường có n cột, cột thứ i có chiều cao là a i.\nHiện tại bạn có w khối, với mỗi khối bạn có thể nâng độ cao một cột bất kì thêm một đơn vị.\nBạn muốn xây bức tường sao cho độ cao của cột có độ cao nhỏ nhất là lớn nhất có thể. Hỏi\nđộ cao đó có thể bằng bao nhiêu?\n\nInput\n• Dòng thứ nhất chứa hai số nguyên dương n và w (1 ≤ n ≤ 2 × 10^5, 1 ≤ w ≤ 10^9).\n• Dòng thứ hai chứa n số nguyên a 1, a 2, …, a n (1 ≤ a i ≤ 10^9).\n\nOutput\n• Một dòng chứa một số nguyên duy nhất là kết quả bài toán.\n\nScoring\n• Subtask 1 (30% số điểm): n ≤ 100, w ≤ 10^5.\n• Subtask 2 (30% số điểm): n ≤ 1 0 3, w ≤ 10^6.\n• Subtask 3 (40% số điểm): không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 9\n1 1 1",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 9\n1 1 1",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p7-tr-u-n-c",
            "title": "Trâu ăn cỏ",
            "fileName": "Trâu ăn cỏ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Trâu ăn cỏ. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Trâu ăn cỏ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "• Có n bãi cỏ được đánh số từ 1 đến n (từ trái sang phải). Và đám cỏ thứ i sẽ bị úa đi sau\na i ngày (cụ thể: ngày a i cỏ vẫn chưa úa nhưng sang ngày a i + 1 thì đã úa rồi).\n• Hôm nay nhân dịp xuân Tân Sửu 2021. K aninh o dắt trâu ra bãi cỏ đó và anh ấy đã\ngiao cho trâu một nhiệm vụ như sau:\n• Nhiệm vụ của chú trâu phải đi từ bãi cỏ thứ nhất sang bãi cỏ thứ n trong nhiều ngày\nnhất có thể, biết rằng, trâu chỉ có thể đi từ trái sang phải và giả sử trâu đang ở bãi cỏ thứ\ni (1 ≤ i < n − 1) thì anh ấy có thể sang bãi cỏ i + 1 hoặc bãi có thứ i + 2 (tức là \"bạn\ntrâu\" nhảy cóc), còn nếu trâu đang đứng ở bãi có thứ n − 1 thì anh ấy chỉ có thể sang\nbãi cỏ thứ n mà thôi. Và có một điều cần lưu ý đó là: Trâu không ăn cỏ úa, tức là nếu cỏ\nbị úa ở cánh đồng thứ nhất hoặc cánh đồng thứ n hoặc không tồn tại đường đi nào để\nđi từ cánh đồng 1 sang cánh đồng n thì xem như trâu chưa hoàn thành nhiệm vụ.\nYêu cầu: Cho một mảng gồm n phần tử a i và xuất ra số ngày nhiều nhất trâu có thể hoàn\nthành nhiệm vụ.\nLà một lập trình viên chuyên nghiệp, các bạn hãy giúp bạn trâu một tay nhé !\n\nInput\n• Dòng thứ nhất chứa số nguyên n (1 ≤ n ≤ 1000) - Thể hiện số lượng bãi cỏ.\n• Dòng thứ hai chứa n số nguyên a 1, a 2,..., a n (1 ≤ a i ≤ 1000)\n\nOutput\n• In ra đáp án cần tìm",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n3 6 7 5",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n3 6 7 5",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p8-t-i-b-i-gi-ng",
            "title": "Tải bài giảng",
            "fileName": "Tải bài giảng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Tải bài giảng. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Tải bài giảng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Do ảnh hưởng của dịch bệnh, các lớp học sẽ học kết hợp cả hình thức trực tiếp và trực tuyến.\nĐể học sinh có thể hiểu kĩ hơn về bài học, giáo viên lưu lại video các bài giảng và tải lên\nnhóm lớp cho học sinh xem lại.\nMột video bài giảng dài Z giây. Dung lượng mà video cần phát 1 giây là X MB. Nhưng\nmạng nhà An lúc đó chỉ có thể tải được Y MB trong 1 giây.\nAn muốn xem bài giảng mà không phải dừng lại giữa chừng. An quyết định trước khi bắt đầu\nxem, sẽ đợi trước T 0 giây để bài giảng được tải xuống một dung lượng nhất định. Một video\nbài giảng được phát liên tục nếu tổng dung lượng tại thời điểm bất kì mà An đã tải về lớn\nhơn hoặc bằng tổng dung lượng của đoạn video tính đến thời điểm đó.\nYêu cầu: Hãy giúp An tìm lượng thời gian ít nhất T 0 mà An phải đợi để có thể xem liên tục.\n\nInput\n• Gồm một dòng chứa ba số nguyên dương X, Y, Z (1 ≤ X, Y, Z ≤ 10^5; Y < X).\n\nOutput\n• Một số nguyên dương T 0 là thời gian ít nhất mà An phải đợi.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 1 1",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 1 1",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p9-v-n-t-c-tr-c-ox",
            "title": "Vận tốc trục Ox",
            "fileName": "Vận tốc trục Ox - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 1200,
            "preview": "Bài toán Vận tốc trục Ox. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Vận tốc trục Ox - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho trục OX và 2 hình thoi đặc biệt cạnh L (m) (hình thoi đặc biệt là hình vuông).\nBan đầu 2 điểm v 1, v 2 ở điểm O, sau đó 2 điểm v 1, v 2 di chuyển trên trục OX lần lượt với\nvận tốc V 1 (m / s), V 2 (m / s).\nHỏi tại thời điểm T là bao nhiêu giây để phần diện tích màu xanh lá cây bằng một số S cho\ntrước.\n\nInput\n• Dòng đầu tiên, L, V 1, V 2 (1 ≤ L, V 1, V 2 ≤ 10^9, V 1 =  V 2).\n• Dòng thứ hai, số nguyên dương Q (Q ≤ 10^5) - số câu hỏi.\n• Q dòng, mỗi dòng tương ứng một số nguyên dương S (1 ≤ S ≤ L 2).\n\nOutput\n• Mỗi câu trả lời trên một dòng, thời điểm T (s) được làm tròn đến 10 chữ số thập phân.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10 1 2\n2\n50\n100",
            "sampleOutput": "4.142135\n0.000000",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10 1 2\n2\n50\n100",
                "output": "4.142135\n0.000000"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b6-p10-x-p-que-di-m-thta-s-kh-o-to-n-qu-c-2024",
            "title": "Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024)",
            "fileName": "Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024). Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 6/Xếp que diêm (THTA Sơ khảo Toàn Quốc 2024) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Ban tổ chức đưa ra cho các thí sinh một trò chơi: hãy dùng N que diêm của ban tổ chức đã\nchuẩn bị để xếp thành lưới tam giác như hình trên thì có thể xếp được tam giác có nhiều nhất\nbao nhiêu tầng (chỉ tính tầng đã hoàn thiện).\n\nInput\n• Gồm một dòng chứa một số tự nhiên N (N ≤ 1 0 15) là số que diêm mà ban tổ chức đã\nchuẩn bị.\n\nOutput\n• Gồm một dòng chứa một số tự nhiên là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10",
                "output": "2"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-7",
        "order": 7,
        "title": "Thuật toán Băm xâu (String Hashing)",
        "theoryPdfFileName": "Chapter 3 lesson 7 - String Hashing.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 7 - String Hashing.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Thuật toán Băm xâu (String Hashing) với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Băm xâu (String Hashing)\n0. Tại sao ta cần băm xâu?\nHãy thử một bài rất thực tế:\nCho xâusđộ dàinvàQtruy vấn, mỗi truy vấn cho 4 số(l 1, r1, l2, r2). Hỏi đoạns[l1..r1]\ncó bằng đoạns[l2..r2]không?\nCách \"ngây thơ\": với mỗi truy vấn, so sánh từng ký tự - mấtO(L)vớiLlà độ dài đoạn.\nTổngO(Q·L). Nếun=Q=L= 10 5, tổng≈10 10 phép - quá chậm.\nCách thông minh: nếu ta gán cho mỗi xâu một con số sao cho:\n• Xâu giống nhau→cùng số.\n• Xâu khác nhau→(hầu như chắc chắn) khác số.\nThì so sánh 2 đoạn chỉ còn so sánh 2 số -O(1)! TổngO(n+Q)siêu nhanh.\nCon số đó gọi là hash (hay \"dấu vân tay\") của xâu, và kỹ thuật để tính nhanh hash của\nmọi đoạn gọi là string hashing.\n1. Thử thiết kế một hàm hash đơn giản\nÝ tưởng đầu tiên: cộng mã ASCII của mọi ký tự lại.\nhashngây thơ (\"abc) = 1 + 2 + 3 = 6\n(với mãa→1,b→2,c→3).\nCó vấn đề gì? Hãy thử \"bca\":\nhashngây thơ (\"bca) = 2 + 3 + 1 = 6\nCùng số! Hai xâu khác nhau lại ra cùng hash - đụng độ (collision). Phép cộng không nhớ\nthứ tự - đây là điểm chết.\nTa cần một công thức để vị trí của ký tự cũng quan trọng. Cách tự nhiên nhất: nhân với\nlũy thừa của một cơ số - giống cách viết một con số trong hệ thập phân.\n2. Băm đa thức (polynomial hash)\nÝ tưởng: \"đọc\"xâu như một con số viết trong cơ sốB.\nVí dụ vớiB= 10(cơ số quen thuộc nhất - hệ thập phân): mãa→1,b→2,c→3,\nd→4:\nH(\"abc) = 1·10 2 + 2·10 1 + 3·10 0 = 100 + 20 + 3 = 123\nĐọc lên đúng là... 123! Tức là xâu \"abc\"được \"đọc\"thành con số 123 trong hệ thập phân.\nTương tự:\nH(\"bca) = 2·100 + 3·10 + 1 = 231̸= 123\nKhác nhau! Vị trí ký tự đã ảnh hưởng đến giá trị. Không còn đụng độ ngu xuẩn như cách\ncộng.\nCông thức tổng quát: với xâus=s0s1 . . . sn−1 (mỗis i là một số nguyên dương mã ký tự):\nH(s) = (s 0·B n−1 +s 1·B n−2 +···+s n−1·B 0) modM\nM(mod): vì con số này có thể rất lớn (xâu dài105→số có10 5 chữ số!), ta lấy modulo\nMđể vừa kiểulong long. Phổ biến:M= 10 9 + 7hoặc10 9 + 9(số nguyên tố lớn).\nVí dụ vớiB= 31(thực tế hơn): vớia→1,b→2,c→3:\nH(\"abc) = 1·31 2 + 2·31 + 3 = 961 + 62 + 3 = 1026\nLưu ý quan trọng: Cộng 1 vào mã ký tự (s[i]−’a’+ 1thay vìs[i]−’a’). Nếu không,\n’a’→0, dẫn đếnH(\"a) = 0,H(\"aa) = 0,H(\"aaa) = 0- tất cả các xâu chỉ chứa ’a’ đều\ncó hash 0 - đụng độ hàng loạt.\n3. Tính hash của một đoạn nhanh - Hash tiền tố\nTới đây ta đã hash được cả xâu trongO(n). Nhưng bài toán hỏi hash của đoạn bất kỳ\ns[l..r]- nếu cứ tính lại từ đầu thì vẫnO(n)/ truy vấn, không nhanh hơn cách ngây thơ!\nBí kíp: dùng hash tiền tố - y như prefix sum (đã học ở khoá Đồng), nhưng cho hash. Đặt:\nh[i] =H(s[0..i−1]) = (s 0·B i−1 +s 1·B i−2 +···+s i−1) modM\nquy ướch[0] = 0(hash của xâu rỗng).\nXây dựng từng bước - vớis=\"abc,B= 10, mãa→1,b→2,c→3:\ni h[i] Ý NGHĨA\n0 0 hash của xâu rỗng\n1 0·10 + 1 = 1 hash của \"a\"\n2 1·10 + 2 = 12 hash của \"ab\"\n3 12·10 + 3 = 123 hash của \"abc\"\nCông thức truy hồi:h[i+ 1] = (h[i]·B+s i) modM(Đẩy mọi mũ lên 1 bậc rồi thêm ký\ntự mới ở mũB0). Đây là bước xây prefix hash.\n4. Hash của một đoạn -O(1)\nCóh[]rồi, làm sao lấy hash của đoạns[l..r]?\nQuan sát: vớis=\"abcde,B= 10:\n• h[5] = 12345(đọc \"abcde\")\n• h[2] = 12(đọc \"ab\")\nMuốn lấy \"cde\"(= 345), ta thấy:12345−12000 = 345. Mà12000 = 12·1000 =h[2]·10 3.\nSố 3 chính là độ dài đoạn!\nCông thức tổng quát - đoạns[l..r]có độ dàiL=r−l+ 1:\nhash(l, r) = (h[r+ 1]−h[l]·B L) modM\nTại sao công thức đúng?h[r+ 1]chứa toàn bộ ký tự từ vị trí 0 tớir, mũ cao nhất làBr.\nh[l]chứa ký tự 0 tớil−1, mũ cao nhất làB l−1. Nhânh[l]vớiB L \"đẩy\"lên cùng thang\nvớih[r+ 1], trừ đi triệt tiêu phần đầu - còn lại chính là phần giữa.\nKiểm tra với \"abcde\", lấy \"bcd\"(l= 1,r= 3,L= 3):\nhash(1,3) =h[4]−h[1]·10 3 = 1234−1·1000 = 234 =\"bcd\nTiền tínhpw[i] =B i modMngay khi build, để mỗi truy vấn chỉ tốnO(1).\n5. Hasher: gói tất cả vào class\nNhư đã giới thiệu ở bài 1, để tái sử dụng dễ dàng ta gói toàn bộ vào mộtstruct/class.\nConstructor xây luônh[]vàpw[], hàmget(l, r)trả hash của đoạn.\nC++\nstruct Hasher {\nstatic const long long B = 131;\nstatic const long long M = 1 0 0 0 0 0 0 0 0 7 ;\nvector < long long > h , pw ;\nHasher ( const string & s ) {\nint n = s . size () ;\nh . assign ( n + 1 , 0) ;\npw . assign ( n + 1 , 1) ;\nfor ( int i = 0; i < n ; i ++) {\nh [ i + 1] = ( h [ i ] * B + ( s [ i ] - ’a ’ + 1) ) % M ;\npw [ i + 1] = pw [ i ] * B % M ;\n}\n}\n// hash cua s [ l .. r ] (0 - indexed , hai dau bao gom )\nlong long get ( int l , int r ) {\nlong long L = r - l + 1;\nlong long x = ( h [ r + 1] - h [ l ] * pw [ L ]) % M ;\nreturn ( x % M + M ) % M ;// tranh so am sau %\n}\n};\n// Su dung :\nHasher H ( s ) ;\nif ( H . get ( l1 , r1 ) == H . get ( l2 , r2 ) ) {\n/* hai doan ( gan nhu chac chan ) bang nhau */\n}\nPython\nclass Hasher :\nB = 131\nM = 1 0 0 0 0 0 0 0 0 7\ndef __init__ ( self , s ) :\nn = len ( s )\nself . h = [0] * ( n + 1)\nself . pw = [1] * ( n + 1)\nfor i , c in en um era te ( s ) :\nself . h [ i + 1] = ( self . h [ i ] * self . B + ( ord ( c ) - ord ( ’a\n’) + 1) ) % self . M\nself . pw [ i + 1] = self . pw [ i ] * self . B % self . M\ndef get ( self , l , r ) :\nL = r - l + 1\nx = ( self . h [ r + 1] - self . h [ l ] * self . pw [ L ]) % self . M\nreturn x# Python % luon cho ket qua khong am\nQuan trọng: trong C++, sau phép trừh[r+ 1]−h[l]·pw[L]có thể ra số âm (vìh[l]·pw[L]\ncó thể lớn hơnh[r+ 1]moduloM). Phải((x % M) + M) % Mđể đưa về[0, M). Python\nkhông gặp lỗi này vì toán tử%luôn cho kết quả không âm.\n6. So sánh hai đoạn xâu -O(1)\nĐây là ứng dụng phổ biến nhất chính là bài toán đặt ra ở mục 0:\nC++\nHasher H ( s ) ;\n// s [ l1 .. r1 ] co bang s [ l2 .. r2 ] khong ?\nbool e q u a l _ s e g m e n t ( int l1 , int r1 , int l2 , int r2 ) {\nif ( r1 - l1 != r2 - l2 ) return false ;// do dai khac -> khac\nreturn H . get ( l1 , r1 ) == H . get ( l2 , r2 ) ;\n}\nPython\ndef e q u a l _ s e g m e n t ( l1 , r1 , l2 , r2 ) :\nif r1 - l1 != r2 - l2 :\nreturn False\nreturn H . get ( l1 , r1 ) == H . get ( l2 , r2 )\nTrace vớis=\"abacaba: hỏis[0..2](=\"aba) có bằngs[4..6](=\"aba) không?\n• H(s[0..2]) =hash của \"aba\"\n• H(s[4..6]) =hash của \"aba\"\n• Bằng→in \"YES\"\nCòns[0..1](=\"ab) so vớis[2..3](=\"ac)? Hash chắc chắn khác→in \"NO\".\nBài học: chỉ tốnO(1)cho mỗi truy vấn, sau khi đã build Hasher trongO(n).\n7. Tìm xuất hiện của pattern\nĐề: Cho textTđộ dàinvà patternPđộ dàim. Đếm số lầnPxuất hiện trongT.\nÝ tưởng: Tính hash củaPmột lần (gọi là target), rồi trượt cửa sổ độ dàimtrênT(vị\ntrí bắt đầui= 0,1, . . . , n−m). Mỗi cửa sổ so sánh hash với target trongO(1).\nTrace vớiT=\"ababab,P=\"ab (n= 6, m= 2):\ni ĐOẠNT[i..i+ 1] BẰNG \"ab\"?\n0 \"ab\" ✓\n1 \"ba\" X\n2 \"ab\" ✓\n3 \"ba\" X\n4 \"ab\" ✓\nĐáp án: 3 lần xuất hiện.\nC++\nint c o u n t _ o c c u r r e n c e s ( const string & T , const string & P ) {\nint n = T . size () , m = P . size () ;\nif ( m > n ) return 0;\nHasher HT ( T ) , HP ( P ) ;\nlong long target = HP . get (0 , m - 1) ;\nint cnt = 0;\nfor ( int i = 0; i + m - 1 < n ; i ++) {\nif ( HT . get (i , i + m - 1) == target ) cnt ++;\n}\nreturn cnt ;\n}\nPython\ndef c o u n t _ o c c u r r e n c e s (T , P ) :\nn , m = len ( T ) , len ( P )\nif m > n :\nreturn 0\nHT , HP = Hasher ( T ) , Hasher ( P )\ntarget = HP . get (0 , m - 1)\nreturn sum (1 for i in range ( n - m + 1) if HT . get (i , i + m - 1)\n== target )\nTổng phức tạp:O(n+m). Ngắn hơn nhiều so với cài KMP!\n8. Đếm số xâu con phân biệt\nĐề: Cho xâus, đếm số xâu con (substring) phân biệt.\nVí dụ nhỏ:s=\"aba. Các xâu con là:\n• Độ dài 1: \"a\", \"b\", \"a\"→phân biệt: {\"a\", \"b\"}→2.\n• Độ dài 2: \"ab\", \"ba\"→phân biệt: {\"ab\", \"ba\"}→2.\n• Độ dài 3: \"aba\"→1.\nÝ tưởng: Với mỗi độ dàiLtừ1tớin, duyệt mọi đoạn độ dàiL, tính hash của nó rồi\ncho vào *set*<long long>. Số phần tử trong *set*là số xâu con phân biệt có độ dàiL.\nCộng lại là đáp án.\nC++\nlong long c o u n t _ d i s t i n c t _ s u b s t r i n g s ( const string & s ) {\nint n = s . size () ;\nHasher H ( s ) ;\nlong long total = 0;\nfor ( int L = 1; L <= n ; L ++) {\nset < long long > seen ;\nfor ( int i = 0; i + L - 1 < n ; i ++) {\nseen . insert ( H . get (i , i + L - 1) ) ;\n}\ntotal += seen . size () ;\n}\nreturn total ;\n}\nPhức tạp:O(n 2 logn)vì insert vào *set*. Đủ tốt với *n*≤5000. Vớinlớn hơn cần suffix\narray (khoá Vàng).\n9. Đụng độ & Double Hashing\nHash có thể đụng độ (collision): hai xâu khác nhau ra cùng hash. Xác suất 1 cặp đụng\nđộ≈1/M.\nNhưng nhiều bài lại so sánh rất nhiều cặp:\n-Bài cóQ= 10 5 truy vấn so sánh 2 đoạn→khoảng105 cặp→xác suất sai≈10 −4 -\nthường an toàn.\n-Bài \"đếm xâu con phân biệt\"hoặc các bài duyệt mọi cặp đoạn: số cặp lên tớiO(n2)≈\n1010 với *n*= 10 5→xác suất sai≈10 10/109 = 10- gần như chắc chắn sai!\nĐó là chưa kể anti-hash test trên judge công khaiB, M(như Codeforces): người ra đề\ncó thể chuẩn bị input ép đụng độ→xác suất sai= 1.\nGiảm rủi ro: dùng hai cặp(B1, M1)và(B 2, M2)khác nhau. Hai đoạn bằng nhau⇔cả\nhai hash bằng. Xác suất 1 cặp đụng độ≈1/(M1·M 2)≈10 −18 - kể cả với1010 cặp vẫn\nan toàn.\nC++\n// Luu hash dang pair < long long , long long > , so sanh bang ==\nstruct Hasher2 {\nvector < long long > h1 , pw1 , h2 , pw2 ;\nstatic const long long B1 = 131 , M1 = 1 0 0 0 0 0 0 0 0 7 ;\nstatic const long long B2 = 137 , M2 = 9 9 8 2 4 4 3 5 3 ;\n// build & get tuong tu , chi la 2 lan song song\n};\nTrong CP, một hash thường là đủ - chỉ thêm double hash khi bài là CF Round có\nanti-hash.\n10. Bẫy thường gặp\n-Quên chuẩn hoá modulo sau phép trừ (C++): luôn dùng((x % M) + M) % M.\n-Hash của xâu rỗng= 0: cẩn thận khil > rhoặc khi độ dài bằng 0.\n-Quên cộng 1 vào mã ký tự:s[i] - ’a’cho ’a’= 0, khiến \"a\"và \"aa\"có cùng hash\n0.\n-Anti-hash trên Codeforces: vớiBvàMcố định công khai, người ra đề có thể\nchuẩn bị test đụng độ. Cách phòng: chọnBrandom ở runtime (ví dụmt19937\nrng(chrono::steady_clock::now().time_since_epoch().count()); B = rng()\n% 1000 + 256;), hoặc dùng double hash. Tránhrand()- chu kỳ ngắn và dễ đoán.\n-Dùngunordered_map<long long, ...>với key là hash: anh em Codeforces có thể\n\"hack\"bằng input gây nhiều đụng độ. Dùngmapcho an toàn.\n11. Tổng kết\nTHAO TÁC PHỨC TẠP\nBuild Hasher O(n)\nSo sánh 2 đoạn O(1)\nTìm pattern trong text O(n+m)\nĐếm xâu con phân biệt (n≤5000) O(n2 logn)\nString hashing là công cụ Swiss Army Knife cho mọi bài liên quan đến so sánh đoạn\nxâu. Học thuộc một class Hasher và mang theo trong template - bạn sẽ dùng nó rất\nnhiều!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b7-p1-finding-borders",
            "title": "Finding Borders",
            "fileName": "CSES - Finding Borders _ Tìm biên - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Finding Borders. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/CSES - Finding Borders _ Tìm biên - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một biên của một xâu là một tiền tố mà cũng là hậu tố của xâu nhưng không phải là toàn bộ\nxâu. Ví dụ, các biên của abcababcab là ab và abcab.\nNhiệm vụ của bạn là tìm độ dài của tất cả biên của một xâu được cho.\n\nInput\n• Dòng đầu vào duy nhất có một xâu độ dài n gồm các kí tự a - z.\n\nOutput\n• In độ dài của tất cả biên theo thứ tự tăng dần.\n\nScoring\n• 1 ≤ n ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "abcababcab",
            "sampleOutput": "2 5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "abcababcab",
                "output": "2 5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p2-finding-periods",
            "title": "Finding Periods",
            "fileName": "CSES - Finding Periods _ Tìm chu kì - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1500,
            "preview": "Bài toán Finding Periods. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/CSES - Finding Periods _ Tìm chu kì - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Chu kì của một chuỗi là một tiền tố có thể được sử dụng để tạo ra toàn bộ chuỗi bằng cách\nlặp lại tiền tố. Lần lặp lại cuối cùng có thể là một phần. Ví dụ, các chu kì của abcabca là\nabc, abcabc và abcabca.\nNhiệm vụ của bạn là tìm độ dài của tất cả các chu kì của một xâu được cho.\n\nInput\n• Dòng đầu vào duy nhất có một xâu độ dài n gồm các kí tự a - z.\n\nOutput\n• In ra độ dài của tất cả các chu kì theo thứ tự tăng dần.\n\nScoring\n• 1 ≤ n ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "abcabca",
            "sampleOutput": "3 6 7",
            "testCases": [
              {
                "id": "Test 1",
                "input": "abcabca",
                "output": "3 6 7"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p3-longest-palindrome",
            "title": "Longest Palindrome",
            "fileName": "CSES - Longest Palindrome _ Xâu đối xứng dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1600,
            "preview": "Bài toán Longest Palindrome. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/CSES - Longest Palindrome _ Xâu đối xứng dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu, nhiệm vụ của bạn là xác định xâu con đổi xứng dài nhất của xâu. Ví dụ, xâu đối\nxứng dài nhất trong aybabtu là bab.\n\nInput\n• Dòng đầu vào duy nhất chứa một chuỗi độ dài n. Mỗi kí tự là một trong những a -\nz.\n\nOutput\n• In xâu đối xứng dài nhất trong xâu. Nếu có một số đáp án, bạn có thể in bất kỳ đáp án\nnào trong số đó.\n\nScoring\n• 1 ≤ n ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "aybabtu",
            "sampleOutput": "bab",
            "testCases": [
              {
                "id": "Test 1",
                "input": "aybabtu",
                "output": "bab"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p4-pattern-positions",
            "title": "Pattern Positions",
            "fileName": "CSES - Pattern Positions _ Vị trí xâu con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1900,
            "preview": "Bài toán Pattern Positions. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/CSES - Pattern Positions _ Vị trí xâu con - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một xâu có độ dài n, các kí tự được đánh số từ 1.. n. Bạn cũng được cho một\nvài xâu con nữa. Nhiệm vụ của bạn là với mỗi xâu con, hãy tìm vị trí đầu tiên mà nó xuất hiện\ntrong chuỗi ban đầu, hoặc báo là vị trí đó không tồn tại.\n\nInput\n• Dòng đầu tiên của input chứa một xâu có độ dài n\n• Dòng tiếp theo chứa 1 số nguyên k, là số xâu con cần phải xử lý\n• k dòng tiếp theo, mỗi dòng chứa một xâu con\n\nOutput\n• In ra k số, số thứ i là vị trí đầu tiên mà xâu con thứ i xuất hiện trong xâu ban đầu (hoặc\n-1 nếu vị trí đó không tồn tại)\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ k ≤ 5 ⋅ 10^5\n• Tổng độ dài của các xâu con không vượt quá 5 ⋅ 10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "aybabtu\n3\nbab\nabc\na",
            "sampleOutput": "3\n-1\n1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "aybabtu\n3\nbab\nabc\na",
                "output": "3\n-1\n1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p5-repeating-substring",
            "title": "Repeating Substring",
            "fileName": "CSES - Repeating Substring _ _Xâu con lặp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1800,
            "preview": "Bài toán Repeating Substring. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/CSES - Repeating Substring _ _Xâu con lặp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một xâu con được gọi là lặp lại nếu như nó xuất hiện ở ít nhất hai vị trí khác nhau trong một\nxâu khác. Bạn được cho một xâu, và nhiệm vụ của bạn là phải tìm xâu con lặp lại có độ dài lớn\nnhất.\n\nInput\n• Dòng đầu tiên và duy nhất của input chứa một xâu có độ dài n, gồm các kí tự in thường\na - z.\n\nOutput\n• In ra xâu con lặp lại có độ dài lớn nhất. Nếu có nhiều xâu con như vậy thì có thể in ra xâu\nbất kì. Còn nếu không có xâu con lặp lại nào thì hãy in ra -1.\n\nScoring\n• 1 ≤ n ≤ 10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "cabababc",
            "sampleOutput": "abab",
            "testCases": [
              {
                "id": "Test 1",
                "input": "cabababc",
                "output": "abab"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p6-string-matching",
            "title": "String Matching",
            "fileName": "CSES - String Matching _ Khớp xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán String Matching. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/CSES - String Matching _ Khớp xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu và một từ khóa, nhiệm vụ của bạn là đếm số lượng vị trí mà từ khóa xuất hiện\ntrong xâu.\n\nInput\n• Dòng đầu vào đầu tiên có một xâu độ dài n và dòng đầu vào thứ hai có một từ khóa độ\ndài m. Cả hai đều bao gồm các ký tự a - z.\n• 1 ≤ n, m ≤ 10^6\n\nOutput\n• In một số nguyên: số lần xuất hiện.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "saippuakauppias\npp",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "saippuakauppias\npp",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p7-gh-p-x-u",
            "title": "Ghép xâu",
            "fileName": "Ghép xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Ghép xâu. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/Ghép xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho xâu A và xâu B chỉ gồm các chữ cái thường. Xâu B được gọi là xuất hiện tại vị trí i của\nxâu A nếu: A [ i ] = B [ 1 ], A [ i + 1 ] = B [ 2 ],..., A [ i + l e n g t h (B) − 1 ] = B [ l e n g t h (B)].\n(l e n g t h (B) là độ dài của xâu B)\nYêu cầu: Hãy tìm tất cả các vị trí mà B xuất hiện trong A.\n\nInput\n• Dòng 1: xâu A.\n• Dòng 2: xâu B.\n• Độ dài A, B không quá 1000000.\n\nOutput\n• Ghi ra các vị trí tìm được trên 1 dòng (thứ tự tăng dần). Nếu B không xuất hiện trong A\nthì bỏ trắng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "aaaaa\naa",
            "sampleOutput": "1 2 3 4\nNguồn: vn.spoj.com",
            "testCases": [
              {
                "id": "Test 1",
                "input": "aaaaa\naa",
                "output": "1 2 3 4\nNguồn: vn.spoj.com"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p8-r-t-g-n-x-u",
            "title": "Rút gọn xâu",
            "fileName": "Rút gọn xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "640MB",
            "point": 900,
            "preview": "Bài toán Rút gọn xâu. Giới hạn thời gian 1.0s, bộ nhớ 640MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/Rút gọn xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu S chỉ gồm các chữ cái in thường. Cách mô tả rút gọn của xâu S như sau:\n• Chọn ra một xâu X ngắn nhất có thể và một số nguyên dương K, sao cho khi viết xâu\nX lặp lại K lần thì ta thu được xâu S\n• Ghép K và X, ta thu được xâu rút gọn của S.\nVí dụ:\n• Xâu rút gọn của “abababab” là “4ab”\n• Xâu rút gọn của “aaa” là “3a”\n• Xâu rút gọn của “abac” là “1abac”\n\nInput\n• Gồm một dòng duy nhất chứa xâu S có độ dài không quá 1000.\n\nOutput\n• In ra xâu rút gọn của xâu S.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "abababab",
            "sampleOutput": "4ab",
            "testCases": [
              {
                "id": "Test 1",
                "input": "abababab",
                "output": "4ab"
              },
              {
                "id": "Test 2",
                "input": "aaa",
                "output": "3a"
              },
              {
                "id": "Test 3",
                "input": "abac",
                "output": "1abac"
              }
            ],
            "totalTests": 3
          },
          {
            "id": "c2-b7-p9-t-o-palindrome",
            "title": "Tạo palindrome",
            "fileName": "Tạo palindrome - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Tạo palindrome. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/Tạo palindrome - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu s. Cần thêm ít nhất bao nhiêu ký tự vào cuối xâu s để tạo thành một xâu đối\nxứng? In ra xâu đối xứng đó.\n\nInput\n• Dòng đầu tiên chứa một số nguyên dương t, số truy vấn bạn phải trả lời (1 ≤ t ≤ 100).\n• t dòng tiếp theo, mỗi dòng chứa một xâu s.\n• Tổng độ dài các xâu s không vượt quá 5 × 10^5.\n\nOutput\n• Với mỗi truy vấn, in ra một dòng là xâu đối xứng tạo thành.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\naaaa\nabba\namanaplanacanal\nxyz",
            "sampleOutput": "aaaa\nabba\namanaplanacanalpanama\nxyzyx",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\naaaa\nabba\namanaplanacanal\nxyz",
                "output": "aaaa\nabba\namanaplanacanalpanama\nxyzyx"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b7-p10-x-u-con-l-p",
            "title": "Xâu con lặp",
            "fileName": "Xâu con lặp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Xâu con lặp. Giới hạn thời gian 2.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/Xâu con lặp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho xâu S độ dài N, hãy lập trình xác định độ dài lớn nhất có thể của một xâu con xuất hiện\ntừ hai lần trở lên trong S (hai lần xuất hiện này không được giao nhau). Nói cách khác, tìm số\nnguyên l lớn nhất sao cho tồn tại hai số chỉ số i 1 và i 2 thỏa mãn:\n• 1 ≤ i 1, i 2 ≤ N − l + 1.\n• i 1 + l ≤ i 2.\n• S [ i 1 + j ] = S [ i 2 + j ] với mọi j = 0, 1, 2,..., l − 1.\nNếu không tồn tại số nguyên dương l thỏa mãn thì in ra 0.\n\nInput\n• Dòng đầu chứa số nguyên dương N (N ≤ 5000).\n• Dòng tiếp theo chứa xâu S độ dài N chỉ gồm các chữ cái latin in thường.\n\nOutput\nIn ra độ dài lớn nhất tìm được.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\nababa",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\nababa",
                "output": "2"
              },
              {
                "id": "Test 2",
                "input": "2\nxy",
                "output": "0"
              },
              {
                "id": "Test 3",
                "input": "13\ntrangeorange",
                "output": "5"
              }
            ],
            "totalTests": 3
          },
          {
            "id": "c2-b7-p11-c-chung-c-a-chu-i",
            "title": "Ước chung của chuỗi",
            "fileName": "Ước chung của chuỗi - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1023MB",
            "point": 1400,
            "preview": "Bài toán Ước chung của chuỗi. Giới hạn thời gian 1.0s, bộ nhớ 1023MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 7/Ước chung của chuỗi - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một chuỗi a được gọi là ước của chuỗi b nếu tồn tại một số nguyên dương x sao cho khi ta\nviết x lần chuỗi a thì sẽ thu được chuỗi b.\nVí dụ chuỗi abab có 2 ước là ab và abab.\nYêu cầu: Bạn được cho 2 chuỗi S 1 và S 2, hãy đếm xem chúng có tất cả bao nhiêu ước chung?\n\nInput\n• Dòng đầu tiên chứa chuỗi S 1.\n• Dòng thứ hai chứa chuỗi S 2.\n• Cả 2 chuỗi đều gồm các chữ cái thường, độ dài 2 chuỗi không quá 10^5 ký tự.\n\nOutput\n• In ra một số nguyên là kết quả của bài toán.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "xyztxyzt\nxyzt",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "xyztxyzt\nxyzt",
                "output": "1"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-8",
        "order": 8,
        "title": "BFS/DFS trên lưới - Loang & Multi-source",
        "theoryPdfFileName": "Chapter 3 lesson 8 - BFSDFS trên lưới – Floodfill & Multi-source.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 8 - BFSDFS trên lưới – Floodfill & Multi-source.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm BFS/DFS trên lưới - Loang & Multi-source với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "BFS/DFS trên lưới - Floodfill & Multi-source\n1. Floodfill - tô màu vùng liên thông\nĐề: Cho lướin×mgồm.(đất) và#(nước). Đếm số \"đảo\"(vùng đất liên thông).\nÝ tưởng: Duyệt từng ô đất chưa thăm, BFS/DFS từ đó để đánh dấu cả vùng. Đếm số\nlần khởi BFS.\nKhai báo dx, dy\nC++\nint dx [] = { -1 , 0 , 1 , 0};\nint dy [] = {0 , 1 , 0 , -1};\nPython\nDX = [ -1 , 0 , 1 , 0]\nDY = [0 , 1 , 0 , -1]\nBFS lưới\nC++\nbool vis [ N ][ N ];\nchar g [ N ][ N ];\nvoid bfs ( int sx , int sy ) {\nqueue < pair < int , int > > q ;\nq . push ({ sx , sy }) ;\nvis [ sx ][ sy ] = true ;\nwhile (! q . empty () ) {\nauto [x , y ] = q . front () ; q . pop () ;\nfor ( int d = 0; d < 4; d ++) {\nint nx = x + dx [ d ] , ny = y + dy [ d ];\nif ( nx < 1 || nx > n || ny < 1 || ny > m ) continue ;\nif ( g [ nx ][ ny ] == ’# ’ || vis [ nx ][ ny ]) continue ;\nvis [ nx ][ ny ] = true ;\nq . push ({ nx , ny }) ;\n}\n}\n}\nint islands = 0;\nfor ( int i = 1; i <= n ; i ++)\nfor ( int j = 1; j <= m ; j ++)\nif ( g [ i ][ j ] == ’. ’ && ! vis [ i ][ j ]) { bfs (i , j ) ; islands ++;\n}\nPython\nfrom c o l l e c t i o n s import deque\nDX , DY = [ -1 , 0 , 1 , 0] , [0 , 1 , 0 , -1]\nvis = [[ False ] * ( m + 1) for _ in range ( n + 1) ]\ndef bfs ( sx , sy ) :\nq = deque ([( sx , sy ) ])\nvis [ sx ][ sy ] = True\nwhile q :\nx , y = q . popleft ()\nfor d in range (4) :\nnx , ny = x + DX [ d ] , y + DY [ d ]\nif not (1 <= nx <= n and 1 <= ny <= m ) : continue\nif g [ nx ][ ny ] == ’# ’ or vis [ nx ][ ny ]: continue\nvis [ nx ][ ny ] = True\nq . append (( nx , ny ) )\nislands = 0\nfor i in range (1 , n + 1) :\nfor j in range (1 , m + 1) :\nif g [ i ][ j ] == ’. ’ and not vis [ i ][ j ]:\nbfs (i , j )\nislands += 1\nLưu ý: trên lướin×mlớn (ví dụ1000×1000) DFS đệ quy có thể stack overflow - nên\ndùng BFS (vòng lặp với queue).\n2. BFS = Đường đi ngắn nhất trên đồ thị không trọng\nsố\nTrên lưới với mọi bước có trọng số 1, BFS từ một đỉnh cho khoảng cách ngắn nhất tới\nmọi đỉnh khác.\nHãy hình dung BFS như sóng lan ra từ nguồn: vòng lặp đầu tiên chạm các ô cách 1 cạnh,\nvòng tiếp theo chạm các ô cách 2 cạnh, và cứ thế. Khi một ô được chạm lần đầu tiên, đó\nchắc chắn là khoảng cách ngắn nhất tới ô đó.\nC++\nfill (& dist [0][0] , & dist [0][0] + N * N , -1) ;\nqueue < pair < int , int > > q ;\nq . push ({ sx , sy }) ;\ndist [ sx ][ sy ] = 0;\nwhile (! q . empty () ) {\nauto [x , y ] = q . front () ; q . pop () ;\nfor ( int d = 0; d < 4; d ++) {\nint nx = x + dx [ d ] , ny = y + dy [ d ];\nif ( nx < 1 || nx > n || ny < 1 || ny > m ) continue ;//\nngoai luoi\nif ( g [ nx ][ ny ] == ’# ’) continue ;//\ntuong\nif ( dist [ nx ][ ny ] != -1) continue ;// da\ntham\ndist [ nx ][ ny ] = dist [ x ][ y ] + 1;\nq . push ({ nx , ny }) ;\n}\n}\nPython\nfrom c o l l e c t i o n s import deque\ndist = [[ -1] * ( m + 1) for _ in range ( n + 1) ]\nq = deque ([( sx , sy ) ])\ndist [ sx ][ sy ] = 0\nwhile q :\nx , y = q . popleft ()\nfor d in range (4) :\nnx , ny = x + DX [ d ] , y + DY [ d ]\nif not (1 <= nx <= n and 1 <= ny <= m ) or g [ nx ][ ny ] == ’# ’\n:\ncontinue\nif dist [ nx ][ ny ] != -1:\ncontinue\ndist [ nx ][ ny ] = dist [ x ][ y ] + 1\nq . append (( nx , ny ) )\n3. Multi-source BFS\nBài toán: Lưới bị cháy ở nhiều vị trí ban đầu (nhiều nguồn). Sau bao lâu thì ô(x, y)bị\nlửa đến?\nÝ tưởng: Push tất cả nguồn vào queue cùng lúc với khoảng cách 0. BFS bình thường→\ndist[x][y]sẽ là thời gian ô đó bị lửa.\nC++\nqueue < pair < int , int > > q ;\nfor ( auto [ sx , sy ] : sources ) {\nq . push ({ sx , sy }) ;\ndist [ sx ][ sy ] = 0;\n}\n// BFS nhu thuong\nPython\nfrom c o l l e c t i o n s import deque\nq = deque ()\nfor sx , sy in sources :\nq . append (( sx , sy ) )\ndist [ sx ][ sy ] = 0\n# BFS nhu thuong\nTại sao đúng? Tưởng tượng có một \"siêu nguồn\"nối đến mọi nguồn với cạnh 0. BFS từ\nsiêu nguồn = BFS multi-source.\n4. 0-1 BFS - khi đi qua ô có giá khác nhau\nĐề mẫu: Lướin×m. Mỗi ô là.(đi qua miễn phí, chi phí 0) hoặc#(đi qua tốn 1 đơn vị,\nví dụ \"đẩy tường\"). Tìm chi phí nhỏ nhất từ(sx, sy)đến(tx, ty).\nVấn đề: BFS thường giả sử mọi bước có giá bằng nhau, nên không xử lý được trường hợp\nnày. Còn Dijkstra (sẽ học bài 11) tổng quát hơn nhưng có hệ số log.\nMẹo 0-1 BFS: Khi giá chỉ có 2 mức là 0 và 1, dùng deque thay queue:\n• Bước \"miễn phí\"(giá 0)→đẩy vào đầu deque (push_front).\n• Bước \"tốn 1\"(giá 1)→đẩy vào đuôi deque (push_back).\nVẫn lấy ra từ đầu như BFS thường.\nC++\nint dist [ N ][ N ];\nfor ( int i = 1; i <= n ; i ++)\nfor ( int j = 1; j <= m ; j ++) dist [ i ][ j ] = INT_MAX ;\ndeque < pair < int , int > > dq ;\ndq . p u s h _ f r o n t ({ sx , sy }) ;\ndist [ sx ][ sy ] = 0;\nwhile (! dq . empty () ) {\nauto [x , y ] = dq . front () ; dq . pop _f ro nt () ;\nfor ( int d = 0; d < 4; d ++) {\nint nx = x + dx [ d ] , ny = y + dy [ d ];\nif ( nx < 1 || nx > n || ny < 1 || ny > m ) continue ;\nint w = ( g [ nx ][ ny ] == ’# ’) ? 1 : 0;// Gia di vao o ( nx ,\nny )\nif ( dist [ x ][ y ] + w < dist [ nx ][ ny ]) {\ndist [ nx ][ ny ] = dist [ x ][ y ] + w ;\nif ( w == 0) dq . p u s h _ f r o n t ({ nx , ny }) ;\nelse dq . pu sh _b ac k ({ nx , ny }) ;\n}\n}\n}\nPython\nINF = float ( ’ inf ’)\ndist = [[ INF ] * ( m + 1) for _ in range ( n + 1) ]\ndist [ sx ][ sy ] = 0\ndq = deque ([( sx , sy ) ])\nwhile dq :\nx , y = dq . popleft ()\nfor d in range (4) :\nnx , ny = x + DX [ d ] , y + DY [ d ]\nif not (1 <= nx <= n and 1 <= ny <= m ) : continue\nw = 1 if g [ nx ][ ny ] == ’# ’ else 0\nif dist [ x ][ y ] + w < dist [ nx ][ ny ]:\ndist [ nx ][ ny ] = dist [ x ][ y ] + w\nif w == 0:\ndq . a p p e n d l e f t (( nx , ny ) )\nelse :\ndq . append (( nx , ny ) )\nLưu ý: code trên dùngdist[x][y]hiện tại (không phải giá trịdlưu lúc push) khi relax\n- vì vậy không cần kiểm tra \"stale\"như ở Dijkstra. An toàn và đúng.\nMở rộng: Khi giá có nhiều giá trị (>2), 0-1 BFS không đủ→cần Dijkstra (bài 11).\n5. BFS với trạng thái mở rộng\nĐôi khi đỉnh không chỉ là(x, y)mà còn kèm trạng thái: \"có chìa khóa hay không\", \"đang\nquay hướng nào\", v.v.\nMẹo: encode trạng thái thành đỉnh(x, y,state). BFS trên đồ thị mở rộng.\nC++\nint dist [ N ][ N ][ K ];// K = so trang thai ; dinh = (x , y , state )\nPython\n# dinh = (x , y , state )\n6. DFS trên lưới - đếm kích thước vùng\nC++\nint dfs ( int x , int y ) {\nvis [ x ][ y ] = true ;\nint sz = 1;\nfor ( int d = 0; d < 4; d ++) {\nint nx = x + dx [ d ] , ny = y + dy [ d ];\nif ( nx < 1 || nx > n || ny < 1 || ny > m ) continue ;\nif ( g [ nx ][ ny ] == ’# ’ || vis [ nx ][ ny ]) continue ;\nsz += dfs ( nx , ny ) ;\n}\nreturn sz ;\n}\nPython\ndef dfs (x , y ) :\nvis [ x ][ y ] = True\nsz = 1\nfor d in range (4) :\nnx , ny = x + DX [ d ] , y + DY [ d ]\nif not (1 <= nx <= n and 1 <= ny <= m ) : continue\nif g [ nx ][ ny ] == ’# ’ or vis [ nx ][ ny ]: continue\nsz += dfs ( nx , ny )\nreturn sz\nTrên lưới≤1000×1000, DFS đệ quy có thể stack overflow nếu vùng kết nối lớn→dùng\nBFS.\n7. Mẫu bài toán hay gặp\n• Đếm đảo (số vùng đất liên thông).\n• Lửa lan tỏa, người thoát (multi-source BFS + so sánh).\n• Mê cung có chìa khóa (BFS với trạng thái).\n• Đếm số ô có thể đi tới từ vị trí cho trước.\n8. Bẫy thường gặp\n• Đánh dấuvisngay khi push vào queue (không phải khi pop) - nếu không sẽ push\ntrùng→TLE.\n• Boundary: kiểm tra ngoài lưới trước khi đọcg[nx][ny].\n• DFS đệ quy quá sâu trên lưới lớn→BFS.\n• Quên resetvis/distgiữa các test case.\n9. Tổng kết\nBFS/DFS trên lưới là một trong những dạng bài phổ biến nhất ở mức Bạc. Hãy luyện\nđến mức:\n• Code BFS lưới trong 2 phút mà không nghĩ.\n• Tự nhận ra bài \"lan tỏa\"→multi-source BFS.\n• Biết khi nào dùng BFS vs DFS (trên lưới lớn→BFS).\nSau bài này, bạn nên có thể giải hầu hết các bài \"grid + connectivity\"trên các Online\nJudge mức Silver!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b8-p1-ao-l-ng",
            "title": "Ao làng",
            "fileName": "Ao làng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Ao làng. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Ao làng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Ngôi làng CLA có rất nhiều ao hồ. Sơ đồ địa lí ngôi làng biểu diễn bằng một bảng ô vuông\nN × N. Mỗi ô vuông được biểu diễn bằng một trong hai kí tự:\n• . - cho biết vị trí này là ô đất.\n• # - biểu thị vị trí này là ô nước.\nMột cái ao làng được xác định bằng một vùng các ô vuông #. Hai ô vuông # A, B thuộc\ncùng một ao, khi và chỉ khi từ ô A có thể chèo thuyền qua các ô # sang ô B và ngược lại,\nbằng cách di chuyển theo bốn hướng Đông, Tây, Nam, Bắc. Diện tích của ao được xác định\nbằng số lượng ô vuông thuộc cái ao đó. Chu vi của ao được xác định bằng tổng các ô đất.\nhoặc đường biên kề cạnh của mỗi ô thuộc cái ao này.\nĐể chọn một cái ao cho lễ hội năm nay của làng. Trưởng làng đặt yêu cầu cái ao phải có diện\ntích càng lớn càng tốt, và nếu có nhiều ao cùng diện tích thì chu vi càng nhỏ càng tốt. Do đó,\nbạn hãy giúp trưởng làng xác định diện tích và chu vi cái ao này nhé.\n\nInput\n• Dòng đầu tiên chứa số nguyên N (1 ≤ N ≤ 1000)\n• N dòng tiếp theo, mỗi dòng chứa N kí tự, mô tả sơ đồ ngôi làng. Các kí tự có thể là.\nhoặc #.\n\nOutput\n• In ra diện tích và chu vi của cái ao được chọn thỏa mãn yêu cầu của trưởng làng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n##....\n....#.\n.#..#.\n.#####\n...###\n....##",
            "sampleOutput": "13 22",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n##....\n....#.\n.#..#.\n.#####\n...###\n....##",
                "output": "13 22"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p2-bi-n-i-v-zero",
            "title": "Biến đổi về Zero",
            "fileName": "Biến đổi về Zero - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Biến đổi về Zero. Giới hạn thời gian 2.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Biến đổi về Zero - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho số nguyên N, tại mỗi bước, bạn được thực hiện một trong hai phép biến đổi sau:\n1. Nếu có hai số nguyên dương a và b mà N = a ⋅ b (a =  1, b =  1) thì bạn có thể biến\nđổi N = m a x (a, b);\n2. Giảm giá trị của N xuống 1 đơn vị.\nYêu cầu: Hãy tính số phép biến đổi ít nhất để biến đổi số N thành số 0.\n\nInput\n• Dòng đầu tiên chứa số nguyên dương Q (1 ≤ Q ≤ 1000) là số lượng bộ dữ liệu;\n• Q dòng tiếp theo, dòng thứ i mô tả bộ dữ liệu thứ i: chứa duy nhất một số nguyên N (0 ≤ N ≤ 10^6).\n\nOutput\n• Ghi ra Q dòng, dòng thứ i ghi câu trả lời cho bộ dữ liệu thứ i tương ứng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2\n3\n3",
            "sampleOutput": "3\n3\nConstraints\n• 1 ≤ Q ≤ 1000\n• 0 ≤ N ≤ 1 0 6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n3\n3",
                "output": "3\n3\nConstraints\n• 1 ≤ Q ≤ 1000\n• 0 ≤ N ≤ 1 0 6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p3-b-ng-s",
            "title": "Bảng số",
            "fileName": "Bảng số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Bảng số. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Bảng số - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho trước bảng số A gồm m hàng, n cột. Mỗi ô trong bảng số chứa một số nguyên dương\ngọi là giá trị của ô. Tất cả các ô (ít nhất là 2 ô) có cùng giá trị, kề cạnh hoặc kề đỉnh tạo thành\nmột vùng số. Số lượng ô trong một vùng số gọi là diện tích của vùng số đó.\nYêu cầu: Tính số lượng vùng số có trong bảng A và diện tích của vùng số lớn nhất.\n\nInput\n• Dòng đầu chứa hai số nguyên dương m, n, mỗi số không vượt quá 100;\n• Trong m dòng tiếp theo, mỗi dòng chứa n số nguyên dương, mỗi số không vượt quá\n100.\n\nOutput\n• Dòng đầu ghi số lượng các vùng số có trong bảng A;\n• Dòng thứ hai ghi diện tích của vùng số lớn nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 6\n1 2 1 4 5 4\n1 3 1 4 5 4\n3 1 2 3 3 4\n2 2 4 5 3 3\n2 2 3 2 1 1",
            "sampleOutput": "8\n5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 6\n1 2 1 4 5 4\n1 3 1 4 5 4\n3 1 2 3 3 4\n2 2 4 5 3 3\n2 2 3 2 1 1",
                "output": "8\n5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p4-monsters",
            "title": "Monsters",
            "fileName": "CSES - Monsters _ Quái vật - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Monsters. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/CSES - Monsters _ Quái vật - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn và một số con quái vật đang ở trong một mê cung. Khi đi một bước theo một hướng nào\nđó trong mê cung, mỗi con quái vật cũng có thể đồng thời đi một bước theo một hướng nào\nđó. Mục tiêu của bạn là đến một trong những ô vuông ranh giới mà không bao giờ đi vào\ncùng ô với một con quái vật.\nNhiệm vụ của bạn là tìm hiểu xem mục tiêu của bạn có khả thi hay không, và nếu có, hãy in\nmột đường đi mà bạn có thể đi theo. Kế hoạch của bạn phải hoạt động trong mọi tình\nhuống; ngay cả khi những con quái vật biết trước đường đi của bạn.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: chiều cao và chiều rộng của bản đồ.\n• Sau đó, có n dòng gồm m ký tự mô tả bản đồ. Mỗi ký tự là. (sàn), # (tường), A\n(bắt đầu) hoặc M (quái vật). Có chính xác một A trong đầu vào.\n\nOutput\n• Trước tiên, hãy in YES nếu mục tiêu của bạn là có thể và NO nếu ngược lại.\n• Nếu mục tiêu của bạn là có thể, hãy in ví dụ về đường đi hợp lệ (độ dài của đường đi và\nmô tả của đường đi bằng cách sử dụng các ký tự D, U, L và R).\n• Bạn có thể in bất kỳ đường đi nào miễn là độ dài của nó nhiều nhất là n ⋅ m bước.\n\nScoring\n• 1 ≤ n, m ≤ 1 0 3",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 8\n########\n#M..A..#\n#.#.M#.#\n#M#..#..\n#.######",
            "sampleOutput": "YES\n5\nRRDDR",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 8\n########\n#M..A..#\n#.#.M#.#\n#M#..#..\n#.######",
                "output": "YES\n5\nRRDDR"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p5-doraemon-t-k-v-i-tr-ch-i-m-i",
            "title": "Doraemon tự kỷ với trò chơi mới",
            "fileName": "Doraemon tự kỷ với trò chơi mới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Doraemon tự kỷ với trò chơi mới. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Doraemon tự kỷ với trò chơi mới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hôm nay Nobita phải đi học bù từ sáng tới khuya cho kì nghỉ dịch Covid-19 dài kỷ lục 😢.\nDoraemon ở nhà một mình cả ngày quá cô đơn nên nó đã bày ra trò mới - Lật Bánh Rán.\nDoraemon đã mua sẵn 64 cái bánh rán đặc biệt của thế kỉ 22. Mỗi khi lật mặt bánh thì cả màu\nvà vị bên trong đều thay đổi 😮. Có 2 loại bánh khác nhau: màu nâu và màu trắng.\nDoraemon sẽ chơi với một con robot AI. Mèo ta và robot sẽ thay phiên nhau đi. Doraemon\nluôn đặt những chiếc bánh rán màu nâu xuống bàn cờ khi chơi lượt của mình, còn robot thì\nngược lại (đặt bánh màu trắng). Doraemon sẽ đi trước.\nBàn cờ là một bàn ăn vuông vức được chia thành 8 hàng và 8 cột (tức là 64 ô vuông nhỏ): các\nhàng được đánh số từ 1 tới 8 theo chiều từ trên xuống dưới, các cột được đánh các chữ cái từ\na tới h theo chiều từ trái sang phải.\nĐây là 1 ví dụ của bàn cờ:\nTới lượt một người chơi, người đó phải đặt bánh rán theo màu của mình tại một ô trống sao\ncho nó liền kề với một dãy các bánh rán khác màu (theo đường chéo hoặc hàng ngang, hàng\ndọc) và ở đầu kia của dãy bánh khác màu ấy là một bánh rán cùng màu với bánh mà người\nchơi này vừa đặt xuống. Nói cách khác, chiếc bánh rán người chơi này mới đặt xuống cùng\nvới một chiếc bánh rán cũ (cùng màu) bất kì kẹp ngay 2 đầu của một dãy các bánh rán khác\nmàu.\nTrong hình trên, những ô có vòng tròn viền đỏ là những vị trí mà Doraemon có thể đặt bánh\nxuống. Mỗi khi người chơi đặt bánh xuống như vậy, tất cả những bánh rán khác màu ở giữa\nsẽ được lật lại và đổi thành bánh cùng loại với chiếc bánh rán mới được đặt xuống. (Việc lật\nbánh để đổi loại được thực hiện bởi bàn cờ - máy lật bánh rán tự động từ thế kỉ 23 😮)\nHiện tại là lượt chơi của Doraemon, nhưng vì vừa chơi vừa nhìn những chiếc bánh rán thơm\nngon đổi màu nãy giờ nên mèo ta đã hoa mắt, đói xỉu 😢 và không thể nhìn ra được nước đi\ntối ưu có thể lật lên nhiều chiếc bánh rán màu nâu nhất (Doraemon chỉ thích vị của những\nbánh màu nâu). Bạn hãy giúp chú mèo máy tội nghiệp này nhé! Hãy in ra vị trí mà Doraemon\nnên đặt bánh rán xuống.\nTrong hình trên, 2 hình tròn màu đỏ là ô đặt bánh rán tối ưu nhất.\n\nInput\n• Gồm 8 dòng chứa các xâu độ dài 8 chỉ gồm các kí tự B, W và. mô tả bàn cờ. Những ô\ncó bánh rán đang có màu nâu ở mặt ngửa biểu thị bởi chữ cái B, bánh rán có màu trắng\nlà chữ W, còn lại là dấu chấm.\n\nOutput\n• Gồm một tọa độ duy nhất là vị trí bạn sẽ đặt bánh rán xuống (VD: a 1, h 8, …) và số lượng\nbánh rán nâu sẽ lật lên được (2 thông tin ngăn nhau bởi dấu cách).",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": ".WWWWWB.\n........\n...WWB..\n.WWWB...\nB.B.B...\n........\n....BWB.\n........",
            "sampleOutput": "a1 5\nIn ra c3 5 cũng được coi là đáp án đúng.\nLưu ý\nNếu có nhiều tọa độ cùng lật được số lượng bánh rán nâu lớn nhất, bạn có thể in ra một tọa\nđộ bất kì.\nNếu bánh rán mà Doraemon vừa đặt xuống “kẹp” được nhiều dãy bánh rán khác màu khác\nnhau thì nó có thể lật hết số bánh rán khác màu trong tất cả các dãy đó!",
            "testCases": [
              {
                "id": "Test 1",
                "input": ".WWWWWB.\n........\n...WWB..\n.WWWB...\nB.B.B...\n........\n....BWB.\n........",
                "output": "a1 5\nIn ra c3 5 cũng được coi là đáp án đúng.\nLưu ý\nNếu có nhiều tọa độ cùng lật được số lượng bánh rán nâu lớn nhất, bạn có thể in ra một tọa\nđộ bất kì.\nNếu bánh rán mà Doraemon vừa đặt xuống “kẹp” được nhiều dãy bánh rán khác màu khác\nnhau thì nó có thể lật hết số bánh rán khác màu trong tất cả các dãy đó!"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p6-h-nh-tinh-m-l-y",
            "title": "Hành tinh đầm lầy",
            "fileName": "Hành tinh đầm lầy - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "500MB",
            "point": 1300,
            "preview": "Bài toán Hành tinh đầm lầy. Giới hạn thời gian 1.0s, bộ nhớ 500MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Hành tinh đầm lầy - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Hành tinh FEN nổi tiếng bởi vô số các đầm lầy kỳ lạ của mình. Mỗi đầm lầy có hình gần như là\nchữ nhật. Kết quả quan sát nhiều năm cho thấy đầm lầy này có thể chia thành lưới ô vuông.\nMỗi ô vuông có 4 trạng thái khác nhau (ký hiệu là 0, 1, 2, 3). Sau 1 s thì trạng thái 0 thành\ntrạng thái 3, trạng thái 1 thành trạng thái 0, trạng thái 2 thành trạng thái 1, trạng thái 3 thành\ntrạng thái 2. Trạng thái 0 là trạng thái không thể đứng được ở trên ô đó, các trạng thái khác là\ntrạng thái có thể đứng được ở trên đó.\nYêu cầu: Cho bản đồ đầm lầy kích thước M × N ô (M hàng, N cột. Các hàng được đánh số\ntừ 1 đến M từ trên xuống dưới và các cột được đánh số từ 1 đến N từ trái sang phải), hãy\nxác định chương trình điều khiển đưa robot từ ô ở góc tây nam sang ô ở góc đông bắc với\nthời gian ngắn nhất có thể. Giả thiết răng luôn tồn tại một hành trình như vậy. Tại thời điểm\nban đầu (thời điểm 0) trạng thái của ô góc tây nam la 3. Sau 1 s robot có thể chuyển đến ô\nchung cạnh (nếu như ô này sau giây đó có trạng thái khác 0) hoặc đứng yên (nêu có thể đứng\nđược tại ô đạng đứng sau giây đó)\n\nInput\n• Dòng đầu ghi số nguyên M, N (1 ≤ M, N ≤ 50).\n• M dòng tiếp theo: mỗi dòng ghi N số nguyên dương trong phạm vi từ 0 đến 3\n\nOutput\n• Ghi số T là thời gian dịch chuyển robot.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 4\n3 2 3 3\n0 0 1 2\n3 3 1 2",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 4\n3 2 3 3\n0 0 1 2\n3 3 1 2",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p7-king",
            "title": "KING",
            "fileName": "KING - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán KING. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/KING - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một quân vua có thể đi đến một ô trống hoặc đang có một quân của đối thủ với bất kì hướng\nnào (ngang, dọc, chéo) trừ khi nước đi đó có thể khiến vua ở vào thế bị chiếu hoặc quân đó\ncủa đối thủ có bảo vệ.\nKhoa đang chơi cờ cùng bạn Nhân. Trên bàn cờ chỉ có 3 quân, điều khiển quân vua, Nhân\nđiều khiển hai quân Hậu. Quân hậu có sức mạnh tấn công vượt trội hơn nên Nhân chấp Khoa\nđược phép đi còn 2 quân hậu của Nhân chỉ đứng yên. Khoa đang thắc mắc có thể di chuyển\nquân vua của mình đến vị trí (x, y) trên bàn cờ để giành chiến thắng hay không. Bạn hãy lập\ntrình giúp Khoa kiểm tra điều đó. Biết rằng quân Khoa di chuyển số bước không giới hạn còn\nquân hậu của Nhân đứng yên tại vị trí (u 1, v 1) và (u 2, v 2) trên bàn cờ. Hậu (♕, ♛) là quân\ncờ mạnh nhất trong cờ vua. Nó có thể đi theo hàng ngang, đi hàng dọc, đi đường chéo với số\nô tuỳ ý.\n\nInput\n• Dòng 1 là số nguyên n - kích thước bàn cờ. (3 ≤ n ≤ 1000)\n• Dòng 2 là (u 1, v 1) và (u 2, v 2) - vị trí quân hậu của Nhân (1 ≤ u, v ≤ n)\n• Dòng 3 là (s x, s y) - vị trí quân vua của Khoa (1 ≤ s x, s y ≤ n)\n• Dòng 4 là (x, y) - vị trí mà Khoa muốn di chuyển đến để giành chiến thắng. (1 ≤\nx, y ≤ n)\n\nOutput\n• In YES nếu Khoa có thể thắng, còn không thì in NO",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n4 4 5 5\n1 3\n3 1",
            "sampleOutput": "YES",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n4 4 5 5\n1 3\n3 1",
                "output": "YES"
              },
              {
                "id": "Test 2",
                "input": "8\n4 4 5 5\n2 3\n1 6",
                "output": "NO"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c2-b8-p8-knight",
            "title": "KNIGHT",
            "fileName": "KNIGHT - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán KNIGHT. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/KNIGHT - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Mã là một quân trong trò chơi cờ vua, đại diện cho hình tượng hiệp sĩ (kỵ binh mặc giáp). Mỗi\nngười chơi bắt đầu ván đấu với hai quân Mã và vị trí ban đầu của nó là nằm giữa Xe và\nTượng; hay các ô b1, g1 đối với Trắng và b8, g8 đối với Đen xét về mặt ký hiệu đại số.\nCách đi của Mã có sự khác biệt so với những quân khác. Nước đi của nó giống hình chữ L và\ncó thể di chuyển theo mọi hướng trên bàn cờ. Giả sử vị trí của Mã đang là một ô góc của hình\nchữ nhật 2 × 3 ô, thì nước đi của Mã là đi tới ô góc đối diện. Mã có thể \"nhảy\" qua đầu các\nquân khác, bất kể của bên nào, để đi tới điểm đến; và nó là quân duy nhất trên bàn cờ có\nđược năng lực đặc biệt này. Sau khi ăn quân đối phương Mã sẽ được đặt tại vị trí của quân\nđó. Kỹ năng \"nhảy qua đầu\" giúp Mã có xu hướng trở thành quân mạnh nhất trong những\nthế cờ kín, đông quân. Nước đi này của Mã đã tồn tại rất lâu, không thay đổi từ trước thế kỷ 7\ncho đến nay. Mã di chuyển lần lượt đến các ô trắng rồi đen. (đang ở ô đen thì không thể đi\ntới một ô đen khác, tương tự với ô trắng).\nTrong bài tập này bạn được cho một quân mã đang ở tại ô (x, y) - dòng x và cột y trên bàn\ncờ kích thước 10 × 10. Bạn cần đếm số lượng ô mà quân mã đến được sau đúng N bước di\nchuyển.\n\nInput\n• Gồm ba số nguyên dương x, y, n (1 ≤ x, y, n ≤ 10)\n\nOutput\n• Một số nguyên dương duy nhất là số ô mà quân mã đến được sau đúng n bước đi",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 7 6",
            "sampleOutput": "50",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 7 6",
                "output": "50"
              },
              {
                "id": "Test 2",
                "input": "3 3 1",
                "output": "8"
              }
            ],
            "totalTests": 2
          },
          {
            "id": "c2-b8-p9-magic",
            "title": "MAGIC",
            "fileName": "MAGIC - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1300,
            "preview": "Bài toán MAGIC. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/MAGIC - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Kế tục thành công của trò chơi với khối lập phương thần bí, ngài Rubik sáng tạo ra dạng\nphẳng của trò chơi này gọi là trò chơi các ô vuông thần bí. Đây là một bảng gồm 8 ô vuông\nbằng nhau. Trong bài này chúng ta xét bảng trong đó mỗi ô vuông có một màu khác nhau.\nCác mầu được ký hiệu bởi 8 số nguyên dương đầu tiên. Trạng thái của bảng được cho bởi dãy\nký hiệu màu của các ô được viết lần lượt theo chiều kim đồng hồ bắt đầu từ ô ở góc trái trên\nvà kết thúc tại ô ở góc trái dưới. Ví dụ, trạng thái của bảng trong hình 1 được cho bởi dãy\n(1, 2, 3, 4, 5, 6, 7, 8). Trạng thái này được gọi là trạng thái khởi đầu.\nCó thể dùng 3 phép biến đổi cơ bản đối với bảng có tên là A,B,C:\n• A: Đổi chỗ dòng trên và dòng dưới.\n• B: Thực hiện một hoán vị vòng quanh sang phải.\n• C: Quay theo chiều kim đồng hồ 4 ô giữa.\nBiết rằng từ trạng thái khởi đầu luôn có thể chuyển về một trạng thái bất kỳ bằng cách dùng\ncác phép biến đổi cơ bản nói trên.\nTác động của 3 phép biến đổi được mô tả trong hình 2, với giả thiết trước khi thực hiện một\nphép biến đổi bất kỳ bảng đều đang ở trạng thái khởi đầu.\nHình 1:        Hình 2:\n1 2 3 4 -----> 8 7 6 5\n8 7 6 5   A    1 2 3 4\n-----> 4 1 2 3\nB    5 8 7 6\n-----> 1 7 2 4\nC    8 6 3 5\nBạn phải viết chương trình tính số phép biến đổi cơ bản ít nhất để chuyển bảng từ trạng thái\nkhởi đầu trong hình 1 về một trạng thái đích cho trước.\n\nInput\n• Chứa 8 số nguyên dương trong dòng đầu tiên mô tả trạng thái đích.\n\nOutput\n• Số phép biến đổi ít nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 6 8 4 5 7 3 1",
            "sampleOutput": "7",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 6 8 4 5 7 3 1",
                "output": "7"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p10-s-t-n",
            "title": "Sơ tán",
            "fileName": "Sơ tán - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "500MB",
            "point": 1100,
            "preview": "Bài toán Sơ tán. Giới hạn thời gian 1.0s, bộ nhớ 500MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Sơ tán - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một Trung tâm nghiên cứu tuyệt mật (mà chúng ta không có quyền nói rõ tên ở đây) có n\nphòng thí nghiệm đặt ngầm trong lòng đất. Các phòng thí nghiệm được đánh số từ 1 đến n.\nGiữa một số phòng có đường hầm nối với nhau, sao cho từ một phòng bất kỳ có thể đi đến\nphòng bất kỳ khác (có thể phải đi qua một số phòng nào đó). Độ dài mỗi đường hầm là như\nnhau và thời gian đi hết một đường hầm là 1. Không có đường hầm nào nối một phòng với\nchính nó, nhưng có thể có nhiều đường hầm cùng nối 2 phòng với nhau và tổng cộng trong\nTrung tâm có tất cả m đường hầm. Đường hầm cho phép đi lại theo cả hai chiều. Có k phòng\ncó lối thoát hiểm lên mặt đất. Trong trường hợp sơ tán khẩn cấp, tất cả các nhân viên phải tập\ntrung ở những phòng có lối thoát hiểm.\nYêu cầu: Hãy xác định thời gian tối thiểu để nhân viên mỗi phòng tập trung về phòng có lối\nthoát hiểm trong trường hợp phải sơ tán khẩn cấp.\n\nInput\n• Dòng đầu tiên chứa 2 số nguyên n và k (1 ≤ n ≤ 10^5, 1 ≤ k ≤ n).\n• Dòng thứ 2 chứa k số nguyên khác nhau cho biết các phòng có cửa thoát hiểm.\n• Dòng thứ 3 chứa số nguyên m (1 ≤ m ≤ 10^5).\n• Mỗi dòng trong m dòng tiếp theo chứa 2 số nguyên xác định cặp phòng có đường hầm\nnối trực tiếp.\n\nOutput\n• Một dòng chứa n số nguyên, số thứ i xác định thời gian tối thiểu để nhân viên phòng i\nđi được tới phòng có lối thoát hiểm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10\n2\n10 8\n9\n6 7\n7 5\n5 8\n8 1\n1 10\n10 3\n3 4\n4 9\n9 2",
            "sampleOutput": "1 4 1 2 1 3 2 0 3 0",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10\n2\n10 8\n9\n6 7\n7 5\n5 8\n8 1\n1 10\n10 3\n3 4\n4 9\n9 2",
                "output": "1 4 1 2 1 3 2 0 3 0"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b8-p11-t-m-ng-i-ng-n-nh-t-trong-m-cung",
            "title": "Tìm đường đi ngắn nhất trong mê cung",
            "fileName": "Tìm đường đi ngắn nhất trong mê cung - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.5s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Tìm đường đi ngắn nhất trong mê cung. Giới hạn thời gian 1.5s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Tìm đường đi ngắn nhất trong mê cung - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Mô tả:\nCho một mê cung hình chữ nhật được biểu diễn bằng một ma trận kích thước N x M, trong\nđó:\n• Ô có giá trị 0 là ô trống, có thể di chuyển qua.\n• Ô có giá trị 1 là ô tường, không thể di chuyển qua.\nNgười chơi bắt đầu tại tọa độ (x1, y1) và cần di chuyển đến tọa độ (x2, y2) bằng\ncách di chuyển theo 4 hướng: trên, dưới, trái, phải. Bạn cần tìm đường đi ngắn nhất từ vị trí\nbắt đầu đến vị trí đích trong mê cung, nếu có. Nếu không có đường đi, trả về -1.\nInput:\n• Dòng đầu tiên chứa hai số nguyên N và M (1 ≤ N, M ≤ 1000) - kích thước của mê\ncung (số hàng và số cột).\n• Dòng thứ hai chứa hai số nguyên x1 và y1 - tọa độ bắt đầu (0 ≤ x1 < N, 0 ≤ y1 <\nM).\n• Dòng thứ ba chứa hai số nguyên x2 và y2 - tọa độ kết thúc (0 ≤ x2 < N, 0 ≤ y2 <\nM).\n• Tiếp theo là N dòng, mỗi dòng chứa M số nguyên 0 hoặc 1, biểu diễn mê cung.\nOutput:\n• Trả về độ dài của đường đi ngắn nhất từ điểm bắt đầu đến điểm kết thúc. Nếu không có\nđường đi, trả về -1.\nRàng buộc:\n2 ≤ N, M ≤ 1000\n0 ≤ x1, y1, x2, y2 < N, M\nVí dụ:\nInput 1:\n5 5\n0 0\n4 4\n0 1 0 0 0\n0 1 1 1 0\n0 0 0 1 0\n1 1 0 0 0\n0 0 0 1 0\nOutput 1:\n8\nInput 2:\n7 7\n0 0\n6 6\n0 0 0 0 0 0 0\n1 1 1 1 1 1 0\n1 1 1 1 1 1 0\n1 1 1 1 1 1 0\n1 1 1 1 1 1 0\n1 1 1 1 1 1 0\n0 0 0 0 0 0 0\nOutput 2:\n12",
            "hasTestCases": false,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "",
            "sampleOutput": "",
            "testCases": [],
            "totalTests": 0
          },
          {
            "id": "c2-b8-p12-y-h-p",
            "title": "Đẩy hộp",
            "fileName": "Đẩy hộp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1300,
            "preview": "Bài toán Đẩy hộp. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 8/Đẩy hộp - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho đồ thị gồm N nút được đánh số từ 1 đến N và M cung có hướng. Trên N nút này, tại\nmỗi nút có không quá một khối hộp, có nút không có khối hộp nào. Một bước đẩy được coi\nlà đúng nếu ta đẩy một khối hộp từ vị trí hiện tại đi theo cung có hướng tương ứng nào đó\nđến một nút rỗng. Một nút rỗng là một nút hoặc là không chứa gì hoặc nút đó là nút 1.\nYêu cầu: Hãy tìm lịch trình đẩy tất cả các hộp về nút 1 sao cho số bước thực hiện là nhỏ nhất.\n\nInput\n• Dòng đầu tiên là ba số nguyên dương N, M, K trong đó K là số hộp. 1 ≤ N ≤\n10000, 0 ≤ M ≤ 50000, 0 ≤ K ≤ N.\n• Dòng thứ hai ghi K số khác nhau là số hiệu của K ô có hộp.\n• M dòng tiếp, mỗi dòng ghi hai số u, v với ý nghĩa có cung nối từ u đến v.\n\nOutput\n• Ghi ra số S là số bước đẩy ít nhất ta cần phải thực hiện.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 3 3\n2 3 4\n3 1\n2 1\n4 2",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 3 3\n2 3 4\n3 1\n2 1\n4 2",
                "output": "4"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-9",
        "order": 9,
        "title": "Cây cơ bản & Kỹ thuật DFS trên cây",
        "theoryPdfFileName": "Chapter 3 lesson 9 - Cây cơ bản & DFS trên cây.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 9 - Cây cơ bản & DFS trên cây.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Cây cơ bản & Kỹ thuật DFS trên cây với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Cây cơ bản & DFS trên cây\nNội dung\nCây (tree) là cấu trúc đồ thị đặc biệt: liên thông và không có chu trình. Cây cónđỉnh\nvà đúngn−1cạnh. Rất nhiều bài CP \"ẩn cây\"trong đề.\nTrong bài này ta học các kỹ thuật DFS cốt lõi trên cây.\n1. Tính chất cơ bản của cây\n2. DFS trên cây - không cần visited\n3. Tính kích thước cây con (subtree size)\n4. Tính độ sâu (depth) - dòng chảy \"cha→con\"\n• So sánh hai kiểu dòng chảy\n• Code\n• Ứng dụng phổ biến của pre-order\n5. Khoảng cách BFS từ một đỉnh\n6. Đường kính cây (Tree Diameter)\n7. Trọng tâm cây (Centroid)\n8. Dùng DFS post-order để gộp thông tin từ con\n• Ví dụ: Tổng khoảng cách từuđến mọi đỉnh trong cây con\n9. Stack overflow trên cây sâu\n10. Bài toán điển hình\n11. Tổng kết\n1. Tính chất cơ bản của cây\nCây có gốc (rooted tree): chọn 1 đỉnh làm gốc→mỗi đỉnh có 0 hoặc 1 cha,≥0con.\n• nđỉnh,n−1cạnh.\n• Giữa mọi cặp đỉnh có đúng 1 đường đi đơn giản.\n• Bỏ 1 cạnh→cây bị tách thành 2 thành phần.\n• Thêm 1 cạnh→tạo đúng 1 chu trình.\n2. DFS trên cây - không cần visited\nTrên cây có gốc, DFS chỉ cần truyền cha để tránh đi ngược:\nC++\nvector<int> g[N];\nvoid dfs(int u, int par) {\nfor (int v : g[u]) {\nif (v == par) continue;\ndfs(v, u);\n}\n}\ndfs(root, 0); // 0 = không có cha\nPython\nimport sys\nsys.setrecursionlimit(300000)\ndef dfs(u, par):\nfor v in g[u]:\nif v == par:\ncontinue\ndfs(v, u)\ndfs(root, 0)\nĐây là khung cho mọi DFS trên cây.\nCảnh báo Python:đệ quy mặc định chỉ∼1000mức. Cây cón≥10 5 phải tăng\nsetrecursionlimit. Cây sâu cực đại (n= 106) vẫn có thể stack overflow - chuyển DFS\nsang vòng lặp với stack hoặc dùng C++.\n3. Tính kích thước cây con (subtree size)\nTrên cây có gốc,sz[u] =số đỉnh trong cây con gốcu. Tính lá trước (sz= 1), rồi gộp giá\ntrị con lên cha:\nsz[u] = 1 +\nX\nvlà con củau\nsz[v]\nMũi tên cam trong hình minh họa luồng giá trị đi từ con LÊN cha - đây là khung tư\nduy chung cho mọi DP trên cây kiểu post-order.\nC++\nint sz[N];\nvoid dfs_size(int u, int par) {\nsz[u] = 1;\nfor (int v : g[u]) {\nif (v == par) continue;\ndfs_size(v, u);\nsz[u] += sz[v];\n}\n}\nPython\nsz = [0] * (n + 1)\ndef dfs_size(u, par):\nsz[u] = 1\nfor v in g[u]:\nif v == par:\ncontinue\ndfs_size(v, u)\nsz[u] += sz[v]\nsz[u] =số đỉnh trong cây con gốcu.\nỨng dụng:bài toán đếm cặp(u, v)sao cho ... thường liên quan tới subtree size.\n4. Tính độ sâu (depth) - dòng chảy \"cha→con\"\nBài toán tínhsz[u]ở mục 3 đã minh họa một kiểu DP trên cây: con tính trước, cha gộp\nlại sau (post-order, \"con→cha\"). Nhưng có một kiểu đối lập cũng cực kỳ quan trọng\n- cha tính trước, truyền giá trị xuống con (pre-order, \"cha→con\"). Bài toán mẫu kinh\nđiển: tính độ sâudep[u] =số cạnh từ gốc tớiu.\nTruy hồi:dep[gốc] = 0;dep[v] =dep[u] + 1vớivlà con củau.\nSo sánh hai kiểu dòng chảy\nPOST-ORDER (CON→\nCHA)\nPRE-ORDER (CHA→\nCON)\nVí dụ sz[u], đường kính, tree DP dep[u], khoảng cách từ gốc,\npropagate màu\nTính ở đâu? Sau khi gọi đệ quy con Trước khi gọi đệ quy con\nPhụ thuộc dp[u]phụ thuộcdp[các con] dp[v]phụ thuộcdp[cha củav]\nTrình tự ghi nhớ Lá xong trước, gốc xong sau Gốc xong trước, lá xong sau\nĐây là mẫu khung quan trọng: khi gặp bài DP trên cây, việc đầu tiên là hỏi - \"giá\ntrị củauphụ thuộc cha hay phụ thuộc con?\"Câu trả lời quyết định chỗ đặt câu lệnh tính\ntoán.\nCode\nC++\nint dep[N];\nvoid dfs_dep(int u, int par) {\nfor (int v : g[u]) {\nif (v == par) continue;\ndep[v] = dep[u] + 1; // TÍNH dep[v] TRƯỚC khi đệ quy\ndfs_dep(v, u);\n}\n}\ndep[root] = 0;\ndfs_dep(root, 0);\nPython\ndep = [0] * (n + 1)\ndef dfs_dep(u, par):\nfor v in g[u]:\nif v == par:\ncontinue\ndep[v] = dep[u] + 1 # TÍNH dep[v] TRƯỚC khi đệ quy\ndfs_dep(v, u)\ndep[root] = 0\ndfs_dep(root, 0)\nSo sánh với code tínhsz[u]ở mục 3: dòngsz[u] += sz[v]ở sau lời gọidfs_size(v,\nu)(vì cầnsz[v]đã được tính). Còn ở đây dòngdep[v] = dep[u] + 1đặt trước lời gọi\ndfs_dep(v, u)(vì cầndep[u]đã có sẵn).\nỨng dụng phổ biến của pre-order\n• Khoảng cách từ gốc (số cạnh hoặc tổng trọng số) - mở rộngdepthành tổng.\n• Truyềnmàu/nhãntừchaxuốngcon(vídụtômàuthayphiên0/1chocâybipartite).\n• Đánh số DFS pre-order (in-time, dùng cho Euler tour ở khóa Vàng).\n5. Khoảng cách BFS từ một đỉnh\nTrên cây không trọng số, BFS từs→khoảng cáchd[v] =số cạnh ngắn nhất từsđếnv.\nTương đương DFS.\n6. Đường kính cây (Tree Diameter)\nĐường kính = đường đi dài nhất trong cây.\nThuật toán 2 lần BFS/DFS:\n1. BFS từ một đỉnh bất kỳs→tìm đỉnh xa nhấtu.\n2. BFS từu→đỉnh xa nhấtv.dist(u, v)chính là đường kính.\n(Trong hình minh họa: bắt đầu BFS từ một đỉnh bất kỳstìm được đỉnh xa nhất là\nu= 4. Sau đó BFS từutìm được đỉnh xa nhất làv= 9. Đường4→2→1→3→5→\n7→8→9dài 7 cạnh chính là đường kính.)\nC++\n// BFS từ s, trả (đỉnh xa nhất, khoảng cách)\npair<int, int> far(int s) {\nvector<int> d(n+1, -1);\nqueue<int> q; q.push(s); d[s] = 0;\nint best = s;\nwhile (!q.empty()) {\nint u = q.front(); q.pop();\nif (d[u] > d[best]) best = u;\nfor (int v : g[u]) if (d[v] == -1) { d[v] = d[u] + 1; q.push(v); }\n}\nreturn {best, d[best]};\n}\nauto [u, du] = far(1); // Lần 1: từ một đỉnh bất kỳ\nauto [v, diameter] = far(u); // Lần 2: từ u -> ra đường kính\nPython\nfrom collections import deque\ndef far(s):\nd = [-1] * (n + 1)\nd[s] = 0\nq = deque([s])\nbest = s\nwhile q:\nu = q.popleft()\nif d[u] > d[best]:\nbest = u\nfor v in g[u]:\nif d[v] == -1:\nd[v] = d[u] + 1\nq.append(v)\nreturn best, d[best]\nu, _ = far(1)\nv, diameter = far(u)\n7. Trọng tâm cây (Centroid)\nĐịnh nghĩa:Trọng tâm là đỉnhusao cho khi xóau, mỗi cây con còn lại có không quá\nn/2đỉnh.\nTính chất:Mọi cây đều có ít nhất một trọng tâm (có thể có 2 khinchẵn).\nThuật toán:dùngsz[]từ mục 3. Một đỉnhulà trọng tâm khi:\n• Mọi cây con là con củaucó kích thước≤n/2, và\n• Phần còn lại \"phía cha\"có kích thướcn−sz[u]≤n/2.\n(par[u] =cha củausau khi DFS; với gốc,par[gốc] = 0và \"phía cha- 0 đỉnh.) Centroid\nxuất hiện trong nhiều thuật toán cây nâng cao (centroid decomposition - khóa Vàng).\nC++\nint findCentroid() {\nfor (int u = 1; u <= n; u++) {\nbool ok = (n - sz[u] <= n / 2);\nfor (int v : g[u]) {\nif (v != par[u] && sz[v] > n / 2) { ok = false; break; }\n}\nif (ok) return u;\n}\nreturn -1;\n}\nPython\ndef find_centroid():\nfor u in range(1, n + 1):\nok = (n - sz[u] <= n // 2)\nfor v in g[u]:\nif v != par[u] and sz[v] > n // 2:\nok = False\nbreak\nif ok:\nreturn u\nreturn -1\n8. Dùng DFS post-order để gộp thông tin từ con\nMẫu: tínhdp[u](hoặcf(u)) phụ thuộc vàodp[v]của các con.\nC++\nlong long dp[N];\nvoid dfs(int u, int par) {\ndp[u] = 0; // Hoặc giá trị khởi tạo phù hợp\nfor (int v : g[u]) {\nif (v == par) continue;\ndfs(v, u);\ndp[u] += dp[v]; // Hoặc max, hoặc công thức khác\n}\ndp[u]++; // Hoặc +giá trị đỉnh u\n}\nPython\ndp = [0] * (n + 1)\ndef dfs(u, par):\ndp[u] = 0\nfor v in g[u]:\nif v == par:\ncontinue\ndfs(v, u)\ndp[u] += dp[v]\ndp[u] += 1\nVí dụ: Tổng khoảng cách từuđến mọi đỉnh trong cây con\nC++\nlong long sum_dist[N], sz[N];\nvoid dfs(int u, int par) {\nsz[u] = 1; sum_dist[u] = 0;\nfor (int v : g[u]) {\nif (v == par) continue;\ndfs(v, u);\nsz[u] += sz[v];\nsum_dist[u] += sum_dist[v] + sz[v];\n// Mỗi đỉnh trong subtree(v) cách u thêm 1 so với cách v\n}\n}\nPython\nsz = [0] * (n + 1)\nsum_dist = [0] * (n + 1)\ndef dfs(u, par):\nsz[u] = 1\nsum_dist[u] = 0\nfor v in g[u]:\nif v == par:\ncontinue\ndfs(v, u)\nsz[u] += sz[v]\nsum_dist[u] += sum_dist[v] + sz[v]\n9. Stack overflow trên cây sâu\nCây có thể sâu tớin→DFS đệ quy với *n*= 10 6 có thể stack overflow.\nGiải pháp:\n• Tăng stack:ulimit -s unlimited(một số Online Judge hỗ trợ).\n• Viết DFS không đệ quy bằng stack.\n• Trên hầu hết Online Judge,n≤2×10 5 thường an toàn.\n10. Bài toán điển hình\n• Đường kính cây.\n• LCA cơ bản - đi lên cha cho tới khi gặp.\n• Đếm số con của mỗi đỉnh / kích thước cây con.\n• Đếm cặp đỉnh có khoảng cách đúngk.\n• Tâm cây / Trọng tâm cây.\n• Tổng độ dài tất cả đường đi trên cây.\n11. Tổng kết\nCây là cấu trúc đặc biệt của đồ thị - DFS trên cây luôn:\n1. Truyền cha để khỏi đi ngược.\n2. Post-order: gộp thông tin từ con.\n3. Pre-order: truyền thông tin từ cha xuống. endenumerate\nHọcvữngcâylàtiềnđềchoDPtrêncây(Vàng),LCA,HLD,centroiddecomposition,\n... - toàn những thuật toán đắt giá!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b9-p1-finding-a-centroid",
            "title": "Finding a Centroid",
            "fileName": "CSES - Finding a Centroid _ Tìm một Trọng tâm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Finding a Centroid. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/CSES - Finding a Centroid _ Tìm một Trọng tâm - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một cây n nút, nhiệm vụ của bạn là tìm một trọng tâm, tức là một nút sao cho khi nó làm\ngốc của cây, mỗi cây con có nhiều nhất ⌊ n /2 ⌋ nút.\n\nInput\n• Dòng đầu tiên là một số nguyên n: số nút. Các nút được đánh số 1, 2, …, n\n• Tiếp theo là n − 1 dòng mô tả các cạnh. Mỗi dòng chứa hai số nguyên a và b: có một\ncạnh nối hai nút a và b\n\nOutput\n• In ra một số nguyên: một nút trọng tâm. Nếu có nhiều đáp án, bạn có thể chọn bất kỳ\nđáp án nào.\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 2\n2 3\n3 4\n3 5",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 2\n2 3\n3 4\n3 5",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p2-subordinates",
            "title": "Subordinates",
            "fileName": "CSES - Subordinates _ Cấp dưới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Subordinates. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/CSES - Subordinates _ Cấp dưới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho biết cấu trúc của một công ty, nhiệm vụ của bạn là tính số lượng cấp dưới của mỗi người.\n\nInput\n• Dòng đầu tiên chứa một số nguyên n (1 ≤ n ≤ 2 × 10^5): số lượng nhân viên. Các\nnhân viên được đánh số 1, 2, …, n, và người có số 1 là tổng giám đốc của công ty.\n• Sau đó là n − 1 số nguyên: cấp trên trực tiếp trong công ty của mỗi nhân viên\n2, 3, …, n.\n\nOutput\n• In ra n số nguyên: số lượng cấp dưới của mỗi người 1, 2, …, n.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 1 2 3",
            "sampleOutput": "4 1 1 0 0",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 1 2 3",
                "output": "4 1 1 0 0"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p3-tree-diameter",
            "title": "Tree Diameter",
            "fileName": "CSES - Tree Diameter _ Đường kính của cây - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán Tree Diameter. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/CSES - Tree Diameter _ Đường kính của cây - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một cây gồm n đỉnh.\nĐường kính của cây là khoảng cách xa nhất giữa hai nút bất kì. Hãy xác định đường kính của\ncây.\n\nInput\n• Dòng đầu chứa một số nguyên n - số lượng nút. Các đỉnh được đánh số 1, 2, 3, …, n\n• Sau đó là n − 1 dòng mô tả các cạnh. Mỗi dòng chứa hai số nguyên a và b - có một\ncạnh nối nút a và b\n\nOutput\n• In ra một số nguyên - đường kính của cây\n\nScoring\n• 1 ≤ n ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 2\n1 3\n3 4\n3 5",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 2\n1 3\n3 4\n3 5",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p4-con-ch-u",
            "title": "Con cháu",
            "fileName": "Con cháu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "3.0s",
            "memoryLimit": "512MB",
            "point": 1000,
            "preview": "Bài toán Con cháu. Giới hạn thời gian 3.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/Con cháu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một cây có n nút được đánh số từ 1 đến n, gốc là nút 1. Với mỗi nút trên cây, hãy tìm số\nlượng con cháu của nó.\n\nInput\n• Dòng đầu tiên chứa số nguyên dương n (1 ≤ n ≤ 2 \times 10^5).\n• Dòng thứ hai chứa n − 1 số nguyên dương lần lượt là cha của mỗi nút từ 2, 3, …, n.\n\nOutput\n• In ra n số nguyên, số lượng con cháu của mỗi nút 1, 2, …, n.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 1 2 3",
            "sampleOutput": "4 1 1 0 0\nScoring\n• Nguồn: CSES.",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 1 2 3",
                "output": "4 1 1 0 0\nScoring\n• Nguồn: CSES."
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p5-duy-t-th-m-c",
            "title": "Duyệt thư mục",
            "fileName": "Duyệt thư mục - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 900,
            "preview": "Bài toán Duyệt thư mục. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/Duyệt thư mục - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong thư mục root có chứa tổng cộng n thư mục và tập tin (bao gồm chính nó). Dễ thấy,\nngoại trừ thư mục root thì mỗi tập tin hoặc thư mục đều có chính xác một thư mục bao\nchứa nó - tạm gọi là thư mục cha. Vì thế có tổng cộng n − 1 quan hệ cha-con trong thư mục\nroot. Bạn được cho biết tên của các thư mục và tập tin, cũng như các quan hệ cha-con.\nNhằm theo dõi nội dung của thư mục, bạn cần in ra tất cả mọi đường dẫn hợp lệ, (bắt đầu\nbằng root). Hãy lập trình giải quyết vấn đề trên.\n\nInput\n• Dòng đầu chứa n: số lượng tập tin và thư mục.\n• Dòng tiếp theo chứa n xâu là tên của tập tin hoặc thư mục tương ứng.\n• n − 1 dòng tiếp theo, mỗi dòng chứa 2 số u, v, có ý nghĩa là tên thứ u trong danh sách\ntên trên bao chứa tên thứ v. Dữ liệu đảm bảo u là một thư mục.\nDữ liệu đảm bảo tồn tại duy nhất một xâu root.\n\nOutput\n• In ra n dòng, dòng thứ i là đường dẫn tới tập tin hoặc thư mục thứ i.\n\nScoring\n• 1 ≤ n ≤ 200 trong mọi test",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\nbreak.zip program.docx sense.exe list.mp3 outside.pptx root\npurpose.jpg okay.pptx\n6 7\n6 2\n6 4\n6 8\n6 5\n6 1\n6 3",
            "sampleOutput": "root/break.zip\nroot/program.docx\nroot/sense.exe\nroot/list.mp3\nroot/outside.pptx\nroot\nroot/purpose.jpg\nroot/okay.pptx",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\nbreak.zip program.docx sense.exe list.mp3 outside.pptx root\npurpose.jpg okay.pptx\n6 7\n6 2\n6 4\n6 8\n6 5\n6 1\n6 3",
                "output": "root/break.zip\nroot/program.docx\nroot/sense.exe\nroot/list.mp3\nroot/outside.pptx\nroot\nroot/purpose.jpg\nroot/okay.pptx"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p6-h-th-ng-th-ng-ch-a-n-c",
            "title": "Hệ thống thùng chứa nước",
            "fileName": "Hệ thống thùng chứa nước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Hệ thống thùng chứa nước. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/Hệ thống thùng chứa nước - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một hệ thống N thùng chứa nước giống nhau được biểu diễn dưới dạng cây, trong đó mỗi\nthùng chứa tương ứng với một đỉnh. Các thùng chứa được nối với nhau bằng N − 1 ống hai\nchiều. Hai thùng chứa kết nối với nhau luôn được đặt trên các tầng liền kề. Nếu hai thùng a\nvà b được kết nối với nhau thì hai tầng đặt thùng a và b chênh nhau một đơn vị, nghĩa là\n∣ l e v e l a − l e v e l b ∣ = 1. Thùng 1 được đặt ở tầng dưới cùng. Mỗi thùng được kết nối với\nchính xác một thùng ở tầng bên dưới (ngoại trừ duy nhất thùng 1 không có kết nối nào bên\ndưới), nhưng có thể được kết nối với không hoặc nhiều thùng ở tầng trên. Dung tích tối đa\ncủa mỗi thùng là 1 lít, và ban đầu tất cả các thùng đều rỗng. Bài giả thiết đường ống có dung\ntích 0 lít, nghĩa là chúng không chứa nước mà chỉ cho nước đi qua theo bất kỳ hướng nào.\nCó Q truy vấn, mỗi truy vấn chứa một số nguyên i đại diện cho một thùng chứa. Đối với mỗi\ntruy vấn, hãy đổ thêm 1 lít nước vào thùng chứa i. Nước ở các thùng tầng trên sẽ chảy theo\nđường ống xuống các thùng tầng dưới cho đến khi đầy thùng, các thùng ở cùng một tầng sẽ\nluôn có cùng một lượng nước. Khi đổ nước vào một thùng đã đầy thì nước sẽ được đẩy lên\ntheo đường ống lên các thùng tầng phía trên nó đều nhau.\nYêu cầu: Tìm số lượng thùng chứa đầy nước sau khi xét xong tất cả các truy vấn.\n\nInput\n• Dòng đầu tiên chứa duy nhất một số nguyên T (1 ≤ T ≤ 10) là số lượng testcase. Mỗi\ntestcase trong số T testcase tiếp theo có khuôn dạng sau:\n• Dòng thứ nhất chứa hai số nguyên N và Q, trong đó N là số lượng thùng chứa và\nQ (1 ≤ Q ≤ N) là số lượng truy vấn.\n• Mỗi dòng trong số N − 1 dòng tiếp theo chứa hai số nguyên i và j (1 ≤ i, j ≤ N\nvà i =  j) nghĩa là thùng chứa thứ i được nối với thùng chứa thứ j.\n• Mỗi dòng trong số Q dòng tiếp theo chứa một số nguyên i (1 ≤ i ≤ N) đại diện\ncho thùng chứa 1 lít nước cần được thêm vào.\n\nOutput\n• Đối với mỗi testcase, in ra một dòng chứa duy nhất một số y là số lượng thùng chứa đầy\nnước sau khi xét xong tất cả các truy vấn.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2\n1 1\n1\n3 2\n1 2\n1 3\n1\n2",
            "sampleOutput": "1\n1\nScoring\n• Subtask 1 : 1 ≤ N ≤ 65535 , hệ thống chứa nước có dạng một cây nhị phân hoàn hảo,\nnghĩa là mỗi nút có 2 nút con và tất cả các nút lá đều nằm trên cùng một tầng.\n• Subtask 2 : 1 ≤ N ≤ 1 0 4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2\n1 1\n1\n3 2\n1 2\n1 3\n1\n2",
                "output": "1\n1\nScoring\n• Subtask 1 : 1 ≤ N ≤ 65535 , hệ thống chứa nước có dạng một cây nhị phân hoàn hảo,\nnghĩa là mỗi nút có 2 nút con và tất cả các nút lá đều nằm trên cùng một tầng.\n• Subtask 2 : 1 ≤ N ≤ 1 0 4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p7-n-c-l-nh",
            "title": "Nước lạnh",
            "fileName": "Nước lạnh - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Nước lạnh. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/Nước lạnh - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Mùa hè oi ả ở Wisconsin đã khiến cho lũ bò phải đi tìm nước để làm dịu đi cơn khát. Các\nđường ống dẫn nước của nông dân John đã dẫn nước lạnh vào 1 tập N nhánh (đánh số từ\n1... N) từ một cái bơm đặt ở chuồng bò.\nKhi nước lạnh chảy qua các ống, sức nóng mùa hè sẽ làm nước ấm lên. Bessie muốn tìm chỗ\ncó nước lạnh nhất để cô bò có thể tận hưởng mùa hè một cách thoải mái nhất.\nBessie đã vẽ sơ đồ toàn bộ các nhánh ống nước và nhận ra rằng nó là một đồ thị dạng cây\nvới gốc là chuồng bò và ở các điểm nút ống thì có chính xác 2 nhánh con đi ra từ nút đó. Một\nđiều ngạc nhiên là các nhánh ống này đều có độ dài là 1.\nCho bản đồ các ống nước, hãy cho biết khoảng cách từ chuồng bò tới tất cả các nút ống và ở\ncác phần cuối đường ống.\n\"Phần cuối\" của một đường ống, có thể là đi vào một nút ống hoặc là bị bịt, được gọi theo số\nthứ tự của đường ống. Bản đồ có C nút ống, được mô tả bằng 3 số nguyên: là \"phần cuối\"\ncủa ống E i và 2 ống nhánh đi ra từ đó là B 1 i và B 2 i. Đường ống số 1 nối với chuồng bò;\nkhoảng cách từ phần cuối của đường ống này tới chuồng bò là 1.\n\nInput\n• Dòng 1: 2 số nguyên cách nhau bởi dấu cách: N và C\n• Dòng 2... C + 1: Dòng i + 1 mô tả nút ống i với ba số nguyên cách nhau bởi dấu cách:\nE i, B 1 i, và B 2 i.\n\nOutput\n• Dòng 1... N: Dòng i chứa 1 số nguyên là khoảng cách từ chuồng tới \"phần cuối\" của\nống thứ i.\n\nScoring\n• 3 ≤ N ≤ 99999, N lẻ\n• 1 ≤ C ≤ N\n• 1 ≤ E i ≤ N\n• 2 ≤ B 1 i, B 2 i ≤ N",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 2\n3 5 4\n1 2 3",
            "sampleOutput": "1\n2\n2\n3\n3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 2\n3 5 4\n1 2 3",
                "output": "1\n2\n2\n3\n3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p8-software-olympic-30-4-k10-2023",
            "title": "Software (Olympic 30/4 K10 - 2023)",
            "fileName": "Software (Olympic 30_4 K10 - 2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Olympic",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Software (Olympic 30/4 K10 - 2023). Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/Software (Olympic 30_4 K10 - 2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Tâm rất yêu thích lập trình tạo phần mềm. Vào dịp rảnh rỗi Tâm đã thiết kế một phần mềm\nđơn giản. Màn hình phần mềm gồm N địa điểm (đánh số từ 1 đến N), trong đó mỗi địa\nđiểm có đặt một bóng đèn ở trạng thái sáng hoặc tắt. Có N − 1 con đường một chiều nối\ntrực tiếp giữa các cặp địa điểm. Mỗi lần Tâm chạm tay vào một địa điểm X i bất kì trên màn\nhình thì sẽ có một robot xuất phát từ địa điểm X i di chuyển theo các con đường một chiều,\ncuối cùng kết thúc ở địa điểm 1. Robot không thay đổi trạng thái đèn ở địa điểm X i và địa\nđiểm 1, các địa điểm còn lại robot đã đi qua thì đèn ở địa điểm đó sẽ thay đổi sang trạng thái\nngược lại (sáng thành tắt, tắt thành sáng).\nYêu cầu: Hãy cho biết khi Tâm thực hiện K lần chạm tay (mỗi lần chạm tay vào một địa điểm)\nthì sau đó sẽ có tất cả bao nhiêu địa điểm có đèn sáng. Biết rằng robot xuất phát từ địa điểm\nbất kì luôn có thể di chuyển theo các con đường một chiều đến địa điểm 1.\n\nInput\n• Dòng đầu tiên gồm 2 số nguyên dương N và K lần lượt là số địa điểm, số lần chạm tay\n(1 ≤ N, K ≤ 100000);\n• Dòng thứ hai gồm N số nguyên cho biết trạng thái đèn ở N địa điểm, lần lượt theo thứ\ntự từ địa điểm 1 đến địa điểm N. Trạng thái đèn tắt là 0, sáng là 1.\n• Dòng thứ i trong N − 1 dòng tiếp theo gồm hai số nguyên dương A n và B i (1 ≤\nA_i, B i ≤ N) cho biết có con đường một chiều nối trực tiếp từ địa điểm A_i đến B i;\n• Dòng cuối cùng gồm K số nguyên dương, trong đó số nguyên thứ i là X i (1 ≤ X ≤\nN) cho biết địa điểm thứ i mà Tâm thực hiện chạm tay.\n\nOutput\n• Ghi số nguyên duy nhất là kết quả cần tìm.\n\nScoring\n• 50% test ứng với 50% số điểm của bài có 1 ≤ N, K ≤ 5000;\n• 50% test ứng với 50% số điểm của bài có ràng buộc như đề bài.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 3\n1 0 0 0 0\n2 1\n4 2\n3 2\n5 4\n4 5 4",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 3\n1 0 0 0 0\n2 1\n4 2\n3 2\n5 4\n4 5 4",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b9-p9-t-m-c-a-c-y",
            "title": "Tâm của cây",
            "fileName": "Tâm của cây - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1300,
            "preview": "Bài toán Tâm của cây. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 9/Tâm của cây - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một cây, một đỉnh được gọi là tâm của cây nếu khoảng cách xa nhất từ đỉnh đó đến một\nđỉnh trong cây là nhỏ nhất.\nYêu cầu: Cho một cây. Hãy xác định các tâm của nó\n\nInput\n• Dòng 1: Ghi số nguyên dương n ≤ 10^5 là số đỉnh của cây\n• n − 1 dòng tiếp theo, mỗi dòng ghi hai số u, v mô tả một cạnh của cây.\n\nOutput\n• Dòng 1: ghi c là số tâm của cây\n• Dòng 2: ghi c số liệt kê tăng dần là số hiệu các đỉnh là tâm của cây.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n1 2\n2 3",
            "sampleOutput": "1\n2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n1 2\n2 3",
                "output": "1\n2"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-10",
        "order": 10,
        "title": "Đường đi ngắn nhất: Thuật toán Dijkstra",
        "theoryPdfFileName": "Chapter 3 lesson 10 - Dijkstra.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 10 - Dijkstra.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Đường đi ngắn nhất: Thuật toán Dijkstra với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Đường đi ngắn nhất - Dijkstra\nNội dung\nKhi cạnh có trọng số dương, BFS không còn đúng (BFS coi mọi cạnh như nhau). Để tìm\nđường đi ngắn nhất, ta cần thuật toán Dijkstra - kinh điển và cực kỳ quan trọng.\n1. Bài toán\n2. Ý tưởng Dijkstra\n3. Cài đặt với priority_queue\n• Độ phức tạp\n4. Trọng số âm? KHÔNG dùng Dijkstra!\n5. Truy vết đường đi (path reconstruction)\n6. Multi-source Dijkstra\n7. Dijkstra với trạng thái\n8. 0-1 BFS - đặc biệt khi trọng số chỉ 0 hoặc 1\n9. Bellman-Ford & Floyd-Warshall (giới thiệu)\n10. Bẫy thường gặp\n11. Tổng kết\n1. Bài toán\nĐề:Đồ thịnđỉnh,mcạnh có trọng số không âm. Tìmdist(s, v)- độ dài đường đi ngắn\nnhất từsđếnv, cho mọiv.\n2. Ý tưởng Dijkstra\nQuan sát:Đỉnhucódist[u]nhỏ nhất hiện tại trong số các đỉnh chưa được xác định sẽ\nlà đỉnh tiếp theo códistcuối cùng (vì mọi đường đi tớiuqua đỉnh chưa xác định khác\nđều có độ dài≥dist[u], do trọng số≥0).\nQuy trình:\n1. Khởi tạodist[s] = 0,dist[v] =∞vớiv̸=s.\n2. Lặp:\n3. Chọn đỉnhucódist[u]nhỏ nhất chưa xử lý.\n4. Đánh dấuulà đã xử lý.\n5. Cập nhật (relax) các láng giềng: nếudist[u]+w(u, v)< dist[v]thìdist[v] :=dist[u]+\nw(u, v).\nHìnhtrênminhhọaDijkstratrênđồthị5đỉnh:bêntráilàtrạngtháikhởitạo(dist[1] =\n0, mọi đỉnh khác=∞); bên phải là kết quả cuối vớidistngắn nhất từ nguồns= 1đến\nmọi đỉnh, các cạnh dùng cho cây đường ngắn nhất tô màu xanh lá.\n3. Cài đặt với priority_queue\nC++\nconst long long INF = 1e18;\nvector<pair<int,int>> g[N]; // g[u] = {(v, w)}\nlong long dist[N];\nvoid dijkstra(int s) {\nfill(dist+1, dist+n+1, INF);\ndist[s] = 0;\npriority_queue<pair<long long,int>, vector<pair<long long,int>>,\ngreater<>> pq;\npq.push({0, s});\nwhile (!pq.empty()) {\nauto [d, u] = pq.top(); pq.pop();\nif (d > dist[u]) continue; // Cũ - bỏ qua\nfor (auto [v, w] : g[u]) {\nif (dist[u] + w < dist[v]) {\ndist[v] = dist[u] + w;\npq.push({dist[v], v});\n}\n}\n}\n}\nPython\nimport heapq\nINF = 10**18\ndef dijkstra(s):\ndist = [INF] * (n + 1)\ndist[s] = 0\npq = [(0, s)] # (d, u) - heapq là min-heap\nwhile pq:\nd, u = heapq.heappop(pq)\nif d > dist[u]:\ncontinue\nfor v, w in g[u]:\nnd = d + w\nif nd < dist[v]:\ndist[v] = nd\nheapq.heappush(pq, (nd, v))\nreturn dist\nLưu ý quan trọng:dòngif (d > dist[u]) continue;- vì ta không xóa entry cũ\ntrongpriority_queue(C++ không hỗ trợdecrease_keydễ), ta chấp nhận nhiều entry\ntrùng nhưng kiểm tra \"lazy\".\nĐộ phức tạp\nO((V+E) logV)vớipriority_queue.\n4. Trọng số âm? KHÔNG dùng Dijkstra!\nDijkstra chỉ đúng với trọng số≥0. Nếu có trọng số âm:\n• Không có chu trình âm: dùng Bellman-Ford hoặc SPFA -O(V E).\n• Có chu trình âm: bài toán không có đáp án.\n• Bellman-Ford / Floyd-Warshall sẽ học sau.\n5. Truy vết đường đi (path reconstruction)\nLưu mảngpar[v]- đỉnh ngay trướcvtrên đường ngắn nhất từs.\nC++\nint par[N];\nfill(par+1, par+n+1, -1);\n// Trong relax:\nif (dist[u] + w < dist[v]) {\ndist[v] = dist[u] + w;\npar[v] = u;\npq.push({dist[v], v});\n}\n// Khôi phục đường từ s đến t:\nvector<int> path;\nfor (int v = t; v != -1; v = par[v]) path.push_back(v);\nreverse(path.begin(), path.end());\nPython\npar = [-1] * (n + 1)\n# Trong relax:\nif dist[u] + w < dist[v]:\ndist[v] = dist[u] + w\npar[v] = u\nheapq.heappush(pq, (dist[v], v))\n# Khôi phục đường từ s đến t:\npath = []\nv = t\nwhile v != -1:\npath.append(v)\nv = par[v]\npath.reverse()\n6. Multi-source Dijkstra\nTương tự multi-source BFS: push tất cả nguồn vàopqvớidist= 0.\nỨng dụng:\"đỉnh gần nhất một trongktrạm phát sóng\".\n7. Dijkstra với trạng thái\nĐỉnh(u, state). Ví dụ: \"đi với hoặc không có vé giảm giá\", \"đã đổi tàu hay chưa\".\n8. 0-1 BFS - đặc biệt khi trọng số chỉ 0 hoặc 1\nĐã đề cập ở Bài 8 - dùngdequethaypriority_queue,O(V+E).\n9. Bellman-Ford & Floyd-Warshall (giới thiệu)\n• Bellman-Ford:O(V E)- chấp nhận cạnh âm, phát hiện chu trình âm.\n• Floyd-Warshall:O(V 3)- đường ngắn nhất giữa mọi cặp đỉnh, đơn giản, code 5\ndòng:\nC++\nfor (int k = 1; k <= n; k++)\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= n; j++)\nd[i][j] = min(d[i][j], d[i][k] + d[k][j]);\nPython\nfor k in range(1, n + 1):\nfor i in range(1, n + 1):\nfor j in range(1, n + 1):\nif d[i][k] + d[k][j] < d[i][j]:\nd[i][j] = d[i][k] + d[k][j]\nDùng khin≤500.\n10. Bẫy thường gặp\n• Trọng số âm + Dijkstra→SAI ĐÁP ÁN.\n• Tràn số: tổng trọng số có thể tới1018 - dùnglong long, INF= 10 18.\n• Quênif (d > dist[u]) continue;→có thể TLE do xử lý lại đỉnh.\n• Multiset thay PQ:multiset<pair<long long,int»cũng dùng được, có lợi ở chỗ\nerase được entry cũ - nhưng phức tạp hơn.\n11. Tổng kết\nTHUẬT TOÁN TRỌNG SỐ PHỨC TẠP\nBFS Bằng nhau (= 1) O(V+E)\n0-1 BFS 0 hoặc 1 O(V+E)\nDijkstra Không âm O((V+E) logV)\nBellman-Ford Bất kỳ (cảnh báo chu trình âm)O(V E)\nFloyd-Warshall Bất kỳ, mọi cặp O(V 3)\nDijkstra là xương sống của các bài shortest path - hãy code thuộc lòng!",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b10-p1-b-o-yagi",
            "title": "Bão Yagi",
            "fileName": "Bão Yagi - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Bão Yagi. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/Bão Yagi - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Siêu bão Yagi vừa quét qua, gây ra tình trạng khẩn cấp ở nhiều khu vực. Có K kho chứa vật\ntư cứu trợ (S 1, S 2, …, S k) được đặt ở các vị trí khác nhau. Mỗi kho có thể cung cấp một\nlượng vật tư nhất định. Một khu vực bị ảnh hưởng nặng nề (T) đang rất cần sự tiếp tế. Bạn\ncần xác định thời gian ngắn nhất để chuyến hàng cứu trợ đầu tiên từ bất kỳ kho nào đến\nđược khu vực T. Đồng thời, bạn cần biết vật tư đó đến từ kho nào để phối hợp công tác cứu\ntrợ hiệu quả.\n\nInput\n• Dòng 1: Hai số nguyên N (tổng số địa điểm) và M (số lượng tuyến đường nối các địa\nđiểm).\n• Dòng 2: Số nguyên K (số lượng kho chứa vật tư cứu trợ).\n• Dòng 3: K số nguyên, là danh sách các kho chứa vật tư: S 1, S 2, …, S k.\n• Dòng 4: T, khu vực bị ảnh hưởng cần cứu trợ.\n• M dòng tiếp theo, mỗi dòng gồm ba số nguyên U, V, W, mô tả một tuyến đường giữa\nđịa điểm U và địa điểm V mất W đơn vị thời gian để di chuyển.\n\nOutput\n• Dòng 1: Thời gian ngắn nhất để vật tư đến được khu vực T.\n• Dòng 2: Kho chứa vật tư đã cung cấp chuyến hàng đến sớm nhất đó.\nNếu không thể đến được địa điểm cứu trợ thì in hai số − 1 trên 2 dòng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 5\n3\n1 2 3\n6\n1 4 10\n2 4 2\n3 5 1\n4 6 5\n5 6 10",
            "sampleOutput": "7\n2\nRàng buộc\n• 1 ≤ N ≤ 1 0 3\n• 1 ≤ K , U , V , T ≤ N\n• 1 ≤ M ≤ N × ( N − 1 ) /2\n• 1 ≤ W ≤ 1 0 9",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 5\n3\n1 2 3\n6\n1 4 10\n2 4 2\n3 5 1\n4 6 5\n5 6 10",
                "output": "7\n2\nRàng buộc\n• 1 ≤ N ≤ 1 0 3\n• 1 ≤ K , U , V , T ≤ N\n• 1 ≤ M ≤ N × ( N − 1 ) /2\n• 1 ≤ W ≤ 1 0 9"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p2-cj-kh-o-s-t",
            "title": "CJ Khảo sát",
            "fileName": "CJ Khảo sát - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán CJ Khảo sát. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CJ Khảo sát - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Sau bao nhiêu ngày tháng xây dựng ở vùng đất mới, thì CJ đã cử vài lực lượng cùng anh tới\nkhu vực đó để khảo sát tình hình làm việc cũng như địa thế. CJ đặt biệt quan tâm đến sức\nmạnh và sự hỗ trợ của đồng đội, nên đã khảo sát như sau:\n• Ở vùng đó có N căn cứ, được đánh số từ 1 tới N và M tuyến đường hai chiều, được\nđánh số từ 1 tới M.\n• Lực lượng của CJ sẽ tìm độ dài đường đi ngắn giữa Q cặp căn cứ s, t bất kì do CJ muốn\nxem xét để làm kết quả của cuộc khảo sát, rồi sau đó về họp bàn sau.\n• Định nghĩa căn cứ s có thể đi tới căn cứ t là tồn tại một đường đi từ s tới t, tức là tồn tại\ndãy các căn cứ P = ⟨ s = p 0, p 1,..., p k = t ⟩ sao cho ∀ i: 1 ≤ i ≤ k thì tồn tại tuyến\nđường trực tiếp giữa hai căn tứ p i − 1 và căn cứ p i.\nYêu cầu: Với mỗi cặp căn cứ s, t do CJ chọn, tìm đường đi ngắn nhất giữa hai căn cứ s và t.\n\nInput\n• Gồm M + Q + 1 dòng:\n• Dòng thứ nhất chứa ba số nguyên dương N, M, Q thể hiện số căn cứ, số con đường và\nsố cặp căn cứ muốn xem xét.\n• M dòng tiếp theo, dòng thứ i chứa ba số nguyên dương u i, v i và c i thể hiện có tuyến\nđường nối trực tiếp giữa u i và v i và có độ dài là c i (c i ≤ 10^9, u i =  v i).\n• Q dòng cuối cùng, dòng thứ i chứa hai số s i và t i thể hiện cặp căn cứ s i, t i mà CJ muốn\nxem xét (s i =  t i).\n\nOutput\n• Gồm Q dòng, dòng thứ i là đường đi ngắn nhất giữa cặp căn cứ s i, t i.\n\nScoring\n• Subtask 1 (25% số điểm): N ≤ 1 0 2, M ≤ 1 0 3, Q ≤ 5 × 1 0 2.\n• Subtask 2 (25% số điểm): N ≤ 3 × 1 0 2, M ≤ 2 × 1 0 4, Q ≤ 2 × 1 0 2.\n• Subtask 3 (50% số điểm): N ≤ 4 × 1 0 2, M ≤ 35 × 1 0 3, Q ≤ 35 × 1 0 3.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 6 2\n3 1 2\n5 2 1\n6 5 9\n5 1 4\n5 3 6\n4 6 1\n4 5\n3 2",
            "sampleOutput": "10\n7",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 6 2\n3 1 2\n5 2 1\n6 5 9\n5 1 4\n5 3 6\n4 6 1\n4 5\n3 2",
                "output": "10\n7"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p3-cj-d-ti-c",
            "title": "CJ dự tiệc",
            "fileName": "CJ dự tiệc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1300,
            "preview": "Bài toán CJ dự tiệc. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CJ dự tiệc - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một ngày, OG Loc đã mời CJ dự một buổi tiệc rap của anh ta. Và hôm nay buổi tiệc sẽ diễn ra,\nnhưng CJ vì mải mê công việc, mà khi nhìn vào đồng hồ và lịch thì … CJ mới chợt nhớ ra về\nbữa tiệc của OG Loc. Mà còn khoảng 2 tiếng nữa là buổi tiệc rap của OG Loc sẽ diễn ra.\nCJ nhìn vào bản đồ trong vùng. Bản đồ đấy gồm N ngôi nhà, đánh số từ 1 tới N và M con\nđường hai chiều nối hai ngôi nhà. Ngôi nhà của CJ có số hiệu là s, ngôi nhà có bữa tiệc của\nOG Loc có số hiệu là t. Vì không muốn tới trễ nên CJ quyết định tìm đường đi ngắn nhất từ\nnhà của mình tới buổi tiệc tại ngôi nhà của OG Loc và sẽ di chuyển theo đường đi đó.\n\nInput\n• Gồm M + 1 dòng:\n• Dòng đầu tiên chứa bốn số nguyên dương N, M, s, t (1 ≤ s, t ≤ N, s =  t).\n• M dòng tiếp theo, dòng thứ i chứa ba số u i, v i, c i thể hiện có đường hai chiều nối hai\nngôi nhà u i và v i, và độ dài là c i (u i =  v i).\n\nOutput\n• Ghi ra hai dòng:\n• Dòng đầu tiên ghi ra độ dài đường đi ngắn nhất.\n• Dòng thứ hai là số hiệu trên đường đi ngắn nhất tìm được theo thứ tự di chuyển, bắt đầu\ntừ s và kết thúc ở t.\n\nScoring\n• Subtask 1 (30% số điểm): N ≤ 1 0 3, M ≤ 2.1 0 3\n• Subtask 2 (70% số điểm): N ≤ 10^5, M ≤ 2.10^5",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 3 1 3\n1 2 3\n1 3 5\n2 3 1",
            "sampleOutput": "4\n1 2 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 3 1 3\n1 2 3\n1 3 5\n2 3 1",
                "output": "4\n1 2 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p4-cj-v-ng-cao",
            "title": "CJ ở vùng cao",
            "fileName": "CJ ở vùng cao - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán CJ ở vùng cao. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CJ ở vùng cao - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một ngày, Sweet nổi hứng lên, và đi ra khiêu chiến với nhóm Ballas mà CJ không hề biết gì.\nTới khi Sweet bị trọng thương thì mới báo CJ biết, và CJ tới cứu viện. Nhưng khi đó cảnh sát\ntới, và tất cả mọi người chạy trốn hết trừ Sweet và CJ. Sweet thì vào tù, còn CJ thì bị nhóm\ncảnh sát Frank Tenpenny (C.R.A.S.H) bắt cóc, và đưa đến vùng cao, hẻo lánh ở Whetstone.\nCJ bị nhóm C.R.A.S.H bắt phải làm nhiệm vụ: là tìm kẻ The Imforman để thanh toán. Và CJ\nphải làm, vì nếu không sẽ bị nhóm tiêu diệt. Được biết, ở vùng Whetstone có N đỉnh núi,\nđược đánh số từ 1 tới N, đỉnh núi i có độ cao là h [ i ], giữa hai đỉnh khác nhau bất kỳ đều có\nmột đường đi. CJ đang ở đỉnh núi thứ s, và The Imforman đang ở đỉnh núi thứ t.\nNếu tồn tại con đường từ đỉnh núi u tới đỉnh núi v, tức là tồn tại dãy các đỉnh núi P = ⟨ u =\np 0, p 1,..., p k = v ⟩ sao cho ∀ i: 1 ≤ i ≤ k thì tồn tại tuyến đường trực tiếp giữa hai đỉnh\nnúi p i − 1 và p i, thì định nghĩa độ nguy hiểm trên đường đi từ u tới v là ma x (∣ h [ p 1 ] −\nh [ p 0 ] ∣, ∣ h [ p 2 ] − h [ p 1 ] ∣, …, ∣ h [ p k ] − h [ p k − 1 ] ∣).\nVì CJ muốn an toàn cho mình khi di chuyển nên hãy chỉ ra cho CJ độ nguy hiểm nhỏ nhất và\nhành trình trên đường đi tương ứng từ s tới t. Nếu có nhiều đường đi, chỉ ra một hành trình\ntrên đường đi bất kỳ.\n\nInput\n• Gồm hai dòng:\n• Dòng thứ nhất chứa ba số nguyên dương N, s, t. (1 ≤ s, t ≤ N, s =  t)\n• Dòng thứ hai chứa N số nguyên dương h [ 1 ], h [ 2 ], … h [ N ], với h [ i ] là độ cao của đỉnh\nnúi i (1 ≤ i ≤ N, h [ i ] ≤ 10^9).\n\nOutput\n• Gồm hai dòng:\n• Dòng thứ nhất là độ nguy hiểm nhỏ nhất mà CJ trên con đường tìm được.\n• Dòng thứ hai là số hiệu của các đỉnh núi theo thứ tự hành trình, bắt đầu từ đỉnh s, và kết\nthúc ở đỉnh t.\n\nScoring\n• Subtask 1 (20% số điểm): N ≤ 1 0 2.\n• Subtask 2 (30% số điểm): N ≤ 1 0 3.\n• Subtask 3 (50% số điểm): N ≤ 1 0 4.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 1 6\n7 7 1 1 3 1",
            "sampleOutput": "4\n1 5 6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 1 6\n7 7 1 1 3 1",
                "output": "4\n1 5 6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p5-cycle-finding",
            "title": "Cycle Finding",
            "fileName": "CSES - Cycle Finding _ Tìm chu trình - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1600,
            "preview": "Bài toán Cycle Finding. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - Cycle Finding _ Tìm chu trình - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một đồ thị có hướng, và nhiệm vụ của bạn là hãy xác định xem đồ thị đó có\nchứa một chu trình âm hay không, và đồng thời cho một ví dụ của một chu trình như vậy.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng nút và cạnh. Các nút được\nđánh số 1, 2, …, n\n• Sau này, có m dòng mô tả các cạnh. Mỗi dòng có ba số nguyên a, b, và c: có một cạnh\ntừ nút a đến nút b mà độ dài của nó là c\n\nOutput\n• Nếu đồ thị chứa một chu trình âm, đầu tiên in ra YES, và sau đó là các nút trong chu\ntrình theo thứ tự của chúng. Nếu có vài chu trình âm, bạn có thể in bất kì trong số chúng.\nNếu không có chu trình âm, in ra NO\n\nScoring\n• 1 ≤ n ≤ 2500\n• 1 ≤ m ≤ 5000\n• 1 ≤ a, b ≤ n\n• − 10^9 ≤ c ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 5\n1 2 1\n2 4 1\n3 1 1\n4 1 -3\n4 3 -2",
            "sampleOutput": "YES\n1 2 4 1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 5\n1 2 1\n2 4 1\n3 1 1\n4 1 -3\n4 3 -2",
                "output": "YES\n1 2 4 1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p6-flight-discount",
            "title": "Flight Discount",
            "fileName": "CSES - Flight Discount _ Khuyến mãi chuyến bay - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1500,
            "preview": "Bài toán Flight Discount. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - Flight Discount _ Khuyến mãi chuyến bay - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là tìm một lộ trình bay rẻ nhất từ Syrjälä đến Metsälä. Bạn có một phiếu\nkhuyến mãi, sử dụng nó có thể giảm một nửa giá của bất kỳ chuyến bay nào trong suốt lộ\ntrình. Tuy nhiên, bạn chỉ có thể sử dụng phiếu đó một lần.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng thành phố và chuyến bay. Các\nthành phố được đánh số 1, 2, …, n. Thành phố 1 là Syrjälä, và thành phố n là Metsälä.\n• Sau này, có m dòng mô tả các chuyến bay. Mỗi dòng có ba số nguyên a, b và c: một\nchuyến bay bắt đầu tại thành phố a, kết thúc tại thành phố b, và giá của nó là c. Mỗi\nchuyến bay đều là một chiều.\n• Bạn có thể giả định rằng luôn luôn có thể đi từ Syrjälä đến Metsälä.\n\nOutput\n• In một số nguyên: giá của lộ trình rẻ nhất từ Syrjälä đến Metsälä.\n• Khi bạn sử dụng phiếu khuyến mãi cho một chuyến bay mà giá tiền của nó là x, giá tiền\ncủa nó trở thành ⌊ x /2 ⌋ (làm tròn xuống một số nguyên).\n\nScoring\n• 2 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n\n• 1 ≤ c ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 4\n1 2 3\n2 3 1\n1 3 7\n2 1 5",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 4\n1 2 3\n2 3 1\n1 3 7\n2 1 5",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p7-flight-routes",
            "title": "Flight Routes",
            "fileName": "CSES - Flight Routes _ Lộ trình bay - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1600,
            "preview": "Bài toán Flight Routes. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - Flight Routes _ Lộ trình bay - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là tìm k lộ trình bay ngắn nhất từ Syrjälä đến Metsälä. Một lộ trình có thể\nđi qua một thành phố vài lần.\nLưu ý rằng có thể có một số lộ trình với cùng một mức giá và mỗi lộ trình nên được xét (xem\nví dụ).\n\nInput\n• Dòng đầu vào đầu tiên có ba số nguyên n, m, và k: số lượng thành phố, chuyến bay, và\ntham số k. Các thành phố được đánh số 1, 2, …, n. Thành phố 1 là Syrjälä, và thành\nphố n là Metsälä.\n• Sau này, có m dòng mô tả các chuyến bay. Mỗi dòng có ba số nguyên a, b, và c: chuyến\nbay bắt đầu tại thành phố a, kết thúc tại thành phố b, và giá của nó là c. Tất cả các\nchuyến bay đều là chuyến bay một chiều.\n• Bạn có thể giả định rằng có ít nhất k lộ trình phân biệt từ Syrjälä đến Metsälä.\n\nOutput\n• In k số nguyên: giá của k tuyến đường rẻ nhất được sắp xếp theo giá của chúng.\n\nScoring\n• 2 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n\n• 1 ≤ c ≤ 10^9\n• 1 ≤ k ≤ 10",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 6 3\n1 2 1\n1 3 3\n2 3 2\n2 4 6\n3 2 8\n3 4 1",
            "sampleOutput": "4 4 7",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 6 3\n1 2 1\n1 3 3\n2 3 2\n2 4 6\n3 2 8\n3 4 1",
                "output": "4 4 7"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p8-high-score",
            "title": "High Score",
            "fileName": "CSES - High Score _ Điểm cao - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1600,
            "preview": "Bài toán High Score. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - High Score _ Điểm cao - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn chơi một trò chơi gồm n căn phòng và m đường hầm. Số điểm ban đầu của bạn là 0, và\nmỗi đường hầm tăng số điểm của bạn thêm x mà trong đó x có thể dương hoặc âm. Bạn có\nthể đi qua một đường hầm vài lần.\nNhiệm vụ của bạn là đi bộ từ phòng 1 đến phòng n. Số điểm tối đa mà bạn có thể đạt được\nlà bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng phòng và đường hầm. Các\nphòng được đánh số 1, 2, …, n\n• Sau đó, có m dòng mô tả các đường hầm. Mỗi dòng có ba số nguyên a, b và x: đường\nhầm bắt đầu tại phòng a, kết thúc tại phòng b, và tăng số điểm của bạn thêm x. Tất cả\nđường hầm đều là đường hầm một chiều\n• Bạn có thể giả định rằng luôn có thể đi từ phòng 1 đến phòng n\n\nOutput\n• In một số nguyên: số điểm lớn nhất bạn có thể đạt được. Tuy nhiên, nếu bạn có thể đạt\nđược số điểm lớn tùy ý, hãy in − 1\n\nScoring\n• 1 ≤ n ≤ 2500\n• 1 ≤ m ≤ 5000\n• 1 ≤ a, b ≤ n\n• − 10^9 ≤ x ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 5\n1 2 3\n2 4 -1\n1 3 -2\n3 4 7\n1 4 4",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 5\n1 2 3\n2 4 -1\n1 3 -2\n3 4 7\n1 4 4",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p9-investigation",
            "title": "Investigation",
            "fileName": "CSES - Investigation _ Nghiên cứu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1600,
            "preview": "Bài toán Investigation. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - Investigation _ Nghiên cứu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn dự định đi từ Syrjälä đến Lehmälä bằng máy bay. Bạn muốn tìm câu trả lời cho các câu\nhỏi sau:\n• giá rẻ nhất của một lộ trình như vậy là bao nhiêu?\n• có bao nhiêu lộ trình với giá rẻ nhất? (chia lấy dư cho 10^9 + 7)\n• số lượng chuyến bay tối thiểu của một lộ trình với giá rẻ nhất là bao nhiêu?\n• số lượng chuyến bay tối đa của một lộ trình với giá rẻ nhất là bao nhiêu?\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng thành phố và chuyến bay. Các\nthành phố được đánh số 1, 2, …, n. Thành phố 1 là Syrjälä, và thành phố n là Lehmälä.\n• Sau này, có m dòng mô tả các chuyến bay. Mỗi dòng có ba số nguyên a, b, và c: có một\nchuyến bay từ thành phố a đến thành phố b với giá c. Tất cả chuyến bay đều là chuyến\nbay một chiều.\n• Bạn có thể giả định rằng có một lộ trình từ Syrjälä đến Lehmälä.\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n\n• 1 ≤ c ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 5\n1 4 5\n1 2 4\n2 4 5\n1 3 2\n3 4 3",
            "sampleOutput": "5 2 1 2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 5\n1 4 5\n1 2 4\n2 4 5\n1 3 2\n3 4 3",
                "output": "5 2 1 2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p10-shortest-routes-i",
            "title": "Shortest Routes I",
            "fileName": "CSES - Shortest Routes I _ Tuyến đường ngắn nhất I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.2s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Shortest Routes I. Giới hạn thời gian 1.2s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - Shortest Routes I _ Tuyến đường ngắn nhất I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n thành phố và m chuyến bay giữa chúng. Nhiệm vụ của bạn là xác định độ dài của tuyến\nđường ngắn nhất từ   Syrjälä đến mọi thành phố.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và m: số lượng thành phố và chuyến bay. Các\nthành phố được đánh số 1, 2, …, n và thành phố 1 là Syrjälä.\n• Sau đó, có m dòng mô tả các chuyến bay. Mỗi dòng có ba số nguyên a, b và c: một\nchuyến bay bắt đầu tại thành phố a, kết thúc tại thành phố b, và độ dài của nó là c. Mỗi\nchuyến bay là một chuyến bay một chiều.\n• Bạn có thể giả định rằng có thể đi từ Syrjälä đến tất cả các thành phố khác.\n\nOutput\n• In n số nguyên: độ dài tuyến đường ngắn nhất từ   Syrjälä đến các thành phố 1, 2, …, n.\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ m ≤ 2 \times 10^5\n• 1 ≤ a, b ≤ n\n• 1 ≤ c ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 4\n1 2 6\n1 3 2\n3 2 3\n1 3 4",
            "sampleOutput": "0 5 2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 4\n1 2 6\n1 3 2\n3 2 3\n1 3 4",
                "output": "0 5 2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p11-shortest-routes-ii",
            "title": "Shortest Routes II",
            "fileName": "CSES - Shortest Routes II _ Tuyến đường ngắn nhất II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Shortest Routes II. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/CSES - Shortest Routes II _ Tuyến đường ngắn nhất II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n thành phố và m con đường giữa chúng. Nhiệm vụ của bạn là hãy xử lý q truy vấn mà\ntrong đó bạn phải xác định độ dài của tuyến đường ngắn nhất giữa hai thành phố cho trước.\n\nInput\n• Dòng đầu vào đầu tiên có ba số nguyên n, m và q: số lượng thành phố, con đường và\ntruy vấn\n• Sau đó, có m dòng mô tả các con đường. Mỗi dòng có ba số nguyên a, b và c: có một\ncon đường giữa các thành phố a và b mà độ dài của nó là c. Tất cả con đường đều là con\nđường hai chiều\n• Cuối cùng, có q dòng mô tả các truy vấn. Mỗi dòng có hai số nguyên a và b: xác định độ\ndài của tuyến đường ngắn nhất giữa các thành phố a và b\n• Các ràng buộc:\n• 1 ≤ n ≤ 500\n• 1 ≤ m ≤ n 2\n• 1 ≤ q ≤ 10^5\n• 1 ≤ a, b ≤ n\n• 1 ≤ c ≤ 10^9\n\nOutput\n• In độ dài của tuyến đường ngắn nhất với mỗi truy vấn. Nếu không có tuyến đường nào,\nin − 1 thay vào đó",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 3 5\n1 2 5\n1 3 9\n2 3 3\n1 2\n2 1\n1 3\n1 4\n3 2",
            "sampleOutput": "5\n5\n8\n-1\n3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 3 5\n1 2 5\n1 3 9\n2 3 3\n1 2\n2 1\n1 3\n1 4\n3 2",
                "output": "5\n5\n8\n-1\n3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p12-chuy-n-i-d-ngo-i",
            "title": "Chuyến đi dã ngoại",
            "fileName": "Chuyến đi dã ngoại - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 900,
            "preview": "Bài toán Chuyến đi dã ngoại. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/Chuyến đi dã ngoại - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Sau một thời gian ôn thi học kì mệt mỏi, thầy Hùng quyết định cho lớp TIN K18 đi một\nchuyến dã ngoại để xả stress. Mọi người trong lớp ai cũng hào hứng, và đưa ra rất nhiều địa\nđiểm khác nhau, cuối cùng cả lớp đều chốt về quê của thầy để vui chơi. Đến ngày khởi hành,\ncả lớp ai cũng thích thú và sẵn sàng chuẩn bị cho cuộc đi chơi xa. Đi được một đoạn đường\nthì xe đột nhiên bị hết xăng, may thay gần đó có vài trạm xăng công cộng, nhưng mỗi trạm\nxăng đều cùng có tối đa là a lít, và chi phí cho a lít của mỗi trạm xăng là khác nhau. Lớp TIN\nK18 chỉ có K đồng để phục vụ cho chuyến đi và quyết định cử vanquy - ông thần tốc độ đi\nmua xăng, biết mỗi trạm xăng phân bố đều trên ma trận M * N (M hàng N cột). Nhiệm vụ\ncủa vanquy là phải chỉ ra đường đi có chi phí đổ xăng ít nhất từ ô mà lớp TIN K18 bị hết\nxăng (x; y) đến ô địa điểm cần đến (M, N), biết tại mỗi bước, anh ấy chỉ có thể di chuyển\nsang ô kề bên phải hoặc ô kề bên dưới của ô hiện tại. Hỏi với số tiền mua lượng xăng của\nvanquy mua được có đáp ứng được nhu cầu của lớp hay không ? vanquy vô cùng bối rối và\nmuốn nhờ các bạn đam mê lập trình trên LQDOJ giúp đỡ. Hãy giúp anh ấy vượt qua thử\nthách này nhé !\n\nInput\n• Dòng đầu chứa hai số nguyên dương M và N (1 ≤ M, N ≤ 100) và 2 số nguyên a\n(1 ≤ a ≤ 100) và K (1 ≤ K ≤ 10^{18}) lần lượt là lượng xăng tối đa của mỗi trạm và\nchi phí tối đa của lớp TIN K18.\n• M dòng sau, mỗi dòng chứa N số nguyên dương mô tả chi phí cho a lít xăng của mỗi\ntrạm. Các số này có giá trị không vượt quá 10^6.\n• Dòng tiếp theo chứa tọa độ (x; y) là địa điểm mà lớp TIN K18 bị hết xăng.\n\nOutput\n• In ra chi phí ít nhất thỏa mãn yêu cầu của lớp TIN K18, nếu không, in ra − 1.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 3 1 10\n1 3 2\n2 4 1\n3 2 1\n1 1",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 3 1 10\n1 3 2\n2 4 1\n3 2 1\n1 1",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p13-logistics",
            "title": "Logistics",
            "fileName": "Logistics - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Logistics. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/Logistics - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Công ty Logistics Abela là một công ty thương mại điện tử lớn, chịu trách nhiệm tối ưu hóa\ncác tuyến đường giao hàng phức tạp. Mỗi kiện hàng cần được vận chuyển từ kho chính (S)\ncủa công ty. Tuy nhiên, trước khi đến tay khách hàng cuối cùng (T), kiện hàng này bắt buộc\nphải ghé qua một trung tâm kiểm định (X) để kiểm tra chất lượng của sản phẩm.\nMạng lưới giao thông của thành phố rất rộng lớn, bao gồm nhiều tuyến đường nối các địa\nđiểm quan trọng. Mỗi tuyến đường có một thời gian di chuyển cụ thể. Hãy tính toán thời gian\ndi chuyển ngắn nhất cho toàn bộ quy trình giao nhận này. Điều đó có nghĩa là bạn cần tìm lộ\ntrình nhanh nhất từ kho S đến trung tâm X, sau đó tiếp tục tìm lộ trình nhanh nhất từ trung\ntâm X đến điểm giao hàng T. Tổng thời gian của hai chặng đường này sẽ là tiêu chí then\nchốt để đảm bảo khách hàng nhận được hàng nhanh nhất và hiệu quả nhất.\n\nInput\n• Dòng 1: Năm số nguyên N, M, S, X, T.\n• N: Tổng số địa điểm trong mạng lưới giao hàng (đánh số từ 1 đến N).\n• M: Số lượng tuyến đường kết nối các địa điểm.\n• S: điểm xuất phát của kiện hàng.\n• X: điểm dừng bắt buộc để xử lý hàng.\n• T: điểm giao hàng cuối cùng.\n• M dòng tiếp theo: Mỗi dòng gồm ba số nguyên U, V, W.\n• U, V: Hai địa điểm được kết nối bởi một tuyến đường.\n• W: Thời gian di chuyển (trọng số) giữa U và V.\n\nOutput\nIn ra tổng thời gian di chuyển ngắn nhất cho toàn bộ hành trình từ S → X → T. Nếu\nkhông có đường đi hợp lệ nào để hoàn thành nhiệm vụ (ví dụ: không thể đến X từ S, hoặc\nkhông thể đến T từ X), in ra − 1.\n\nScoring\n• 1 ≤ N ≤ 1 0 3\n• 1 ≤ S, T, X, U, V ≤ N\n• 1 ≤ M ≤ N × (N − 1) /2\n• 1 ≤ W ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 8 1 4 6\n1 2 5\n1 3 10\n2 4 8\n3 4 2\n4 5 3\n4 6 7\n5 6 4\n2 3 1",
            "sampleOutput": "15",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 8 1 4 6\n1 2 5\n1 3 10\n2 4 8\n3 4 2\n4 5 3\n4 6 7\n5 6 4\n2 3 1",
                "output": "15"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p14-n-ng-san",
            "title": "Nông san",
            "fileName": "Nông san - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Nông san. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/Nông san - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trung tâm phân phối S là nơi tập kết rất nhiều nông sản. Mỗi ngày, trung tâm cần cử các xe\ngiao hàng để vận chuyển nông sản đến các thành phố/điểm bán lẻ khác nhau. Mỗi xe đi đến\nmột địa điểm riêng biệt. Các thành phố được kết nối với nhau và với trung tâm bằng những\ntuyến đường. Mỗi tuyến đường có một thời gian di chuyển nhất định.\nHãy tìm ra thời gian di chuyển ngắn nhất từ trung tâm phân phối (S) đến tất cả các thành\nphố/điểm bán lẻ khác trong mạng lưới. Việc này giúp tài xế giao hàng hiệu quả nhất, đảm\nbảo nông sản tươi ngon đến tay khách hàng nhanh chóng.\n\nInput\n• Dòng 1: Ba số nguyên N, M, S.\n• N: Tổng số địa điểm (bao gồm Trung tâm phân phối và các thành phố/điểm bán lẻ),\nđược đánh số từ 1 đến N.\n• M: Số lượng tuyến đường kết nối các địa điểm.\n• S: Trung tâm phân phối nông sản.\n• M dòng tiếp theo: Mỗi dòng gồm ba số nguyên U, V, W.\n• U, V: Hai địa điểm được kết nối bởi một tuyến đường.\n• W: Thời gian di chuyển giữa U và V.\n\nOutput\n• Ghi N dòng, trong đó dòng thứ i in ra thời gian di chuyển ngắn nhất từ Trung tâm\nphân phối S đến địa điểm i. Nếu không có đường đi đến một địa điểm nào đó, in ra − 1.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 6 1\n1 2 10\n1 3 30\n2 3 5\n2 4 20\n3 5 15\n4 5 10",
            "sampleOutput": "1: 0\n2: 10\n3: 15\n4: 30\n5: 30\nRàng buộc\n• 1 ≤ N ≤ 1 0 3\n• 1 ≤ S ≤ 1 0 3\n• 1 ≤ M ≤ N × ( N − 1 ) /2\n• 1 ≤ W ≤ 1 0 9",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 6 1\n1 2 10\n1 3 30\n2 3 5\n2 4 20\n3 5 15\n4 5 10",
                "output": "1: 0\n2: 10\n3: 15\n4: 30\n5: 30\nRàng buộc\n• 1 ≤ N ≤ 1 0 3\n• 1 ≤ S ≤ 1 0 3\n• 1 ≤ M ≤ N × ( N − 1 ) /2\n• 1 ≤ W ≤ 1 0 9"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b10-p15-s-ng-i-ng-n-nh-t",
            "title": "Số đường đi ngắn nhất",
            "fileName": "Số đường đi ngắn nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Số đường đi ngắn nhất. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/Số đường đi ngắn nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Ngày 27/11 tới là ngày tổ chức thi học kỳ I ở trường ĐH BK. Là sinh viên năm thứ nhất, Hiếu\nkhông muốn vì đi muộn mà gặp trục trặc ở phòng thi nên đã chuẩn bị khá kỹ càng. Chỉ còn\nlại một công việc khá gay go là Hiếu không biết đi đường nào tới trường là nhanh nhất.\nThường ngày Hiếu không quan tâm tới vấn đề này lắm cho nên bây giờ Hiếu không biết phải\nlàm sao cả. Bản đồ thành phố là gồm có N nút giao thông và M con đường nối các nút giao\nthông này. Có 2 loại con đường là đường 1 chiều và đường 2 chiều. Độ dài của mỗi con\nđường là một số nguyên dương.\nNhà Hiếu ở nút giao thông 1 còn trường ĐH BK ở nút giao thông N. Vì một lộ trình đường đi\ntừ nhà Hiếu tới trường có thể gặp nhiều yếu tố khác như là gặp nhiều đèn đỏ, đi qua công\ntrường xây dựng,... phải giảm tốc độ cho nên Hiếu muốn biết là có tất cả bao nhiêu lộ trình\nngắn nhất đi từ nhà tới trường. Bạn hãy lập trình giúp Hiếu giải quyết bài toán khó này.\n\nInput\n• Dòng đầu tiên chứa số nguyên N, M (1 ≤ N ≤ 5000, 1 ≤ M ≤ 31313);\n• M dòng tiếp theo mỗi dòng chứa 4 số nguyên dương K, U, V, L (1 ≤ K ≤ 2, 1 ≤\nU, V ≤ N, 1 ≤ L ≤ 32000) trong đó:\n• K = 1 nghĩa là có đường đi 1 chiều từ U tới V độ dài L\n• K = 2 nghĩa là có đường đi 2 chiều nối U và V độ dài L.\n\nOutput\n• Gồm 2 số nguyên là độ dài đường đi ngắn nhất và số lượng đường đi ngắn nhất biết số\nlượng đường đi ngắn nhất không quá 10000.",
            "hasTestCases": false,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "",
            "sampleOutput": "",
            "testCases": [],
            "totalTests": 0
          },
          {
            "id": "c2-b10-p16-travel1",
            "title": "TRAVEL1",
            "fileName": "TRAVEL1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "1GB",
            "point": 1200,
            "preview": "Bài toán TRAVEL1. Giới hạn thời gian 2.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 10/TRAVEL1 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Tại một thời điểm nào đó trong tương lai, lúc này du lịch vũ trụ đang rất phát triển. Có N\nhành tinh đang được khai thác để du lịch. Hai hành tinh u và v có thể đi lại trực tiếp tới nhau\nbằng N − 1 đường đi hai chiều đặc biệt, chi phí để sử dụng các đường đi này là 1 lqdcoin\n(đơn vị tiền tệ tại thời điểm này). Các đường đi được xây dựng sao cho luôn đảm bảo tồn tại\ncách đi giữa hai hành tinh bất kỳ.\nNgoài cách sử dụng các đường đi đặc biệt để đi lại, người ta đã tạo ra một cách đi khác để có\nthêm lựa chọn cho khách du lịch, đó là sử dụng những cánh cổng không gian, những cánh\ncổng này sẽ giúp cho một người đang đứng tại hành tinh u có thể dịch chuyển ngay lập tức\ntới một hành tinh bất kỳ. Tuy nhiên vì chi phí để chế tạo những cánh cổng này rất cao nên\nnhà đầu tư quyết định chỉ cho xây dựng cánh cổng ở một vài hành tinh. Ngoài ra nếu muốn\nsử dụng cánh cổng để di chuyển, khách du lịch phải trả thêm tiền, chi phí cho việc dịch\nchuyển giữa các cánh cổng khác nhau có thể khác nhau.\nBạn là một sinh viên ngành du lịch mới ra trường và đang nộp đơn ứng tuyển một vị trí làm\nhướng dẫn viên du lịch. Để vào được công ty bạn phải trải qua một bài thử thách. Bài thử\nthách như sau: có Q thời điểm, tại một thời điểm bất kỳ có thể diễn ra một trong các sự kiện\nsau:\n• Sự kiện 1: một cánh cổng không gian được xây dựng ở thành phố thứ v và để sử dụng\ncánh cổng này bạn phải tốn c lqdcoin\n• Sự kiện 2: Hiện tại bạn đang đứng tại hành tinh v và bạn cần di chuyển về hình tinh 1,\nbạn hãy tìm cách đi để tốn ít lqdcoin nhất.\n\nInput\n• Dòng đầu tiên gồm hai số nguyên dương N và Q lần lượt là số hành tinh, và Q thời\nđiểm trong thử thách (N, Q ≤ 1 0 3)\n• N -1 dòng tiếp theo, mỗi dòng gồm hai số nguyên dương u và v thể hiện các một\nđường đi đặc biệt giữa hai hành tinh u và v (1 ≤ u, v ≤ N, u =  v)\n• Q dòng tiếp theo, gồm một vài số nguyên đương, số đầu tiên là t (1 ≤ t ≤ 2). Nếu t =\n1, hai số tiếp theo sẽ là v và c (1 ≤ v ≤ N, 1 ≤ c ≤ 10^9). Nếu t = 2, số tiếp theo sẽ là\nv (1 ≤ v ≤ N).\nDữ liệu đảm bảo: luôn tồn tại một đường đi đặc biệt giữa hành tinh thứ i đến hành tinh thứ\ni + 1.\n\nOutput\n• Gồm một vài dòng là các cách đi tốn ít lqdcoin nhất cho từng sự kiện 2, mỗi câu trả lời in\ntrên một dòng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6 6\n1 2\n2 3\n3 4\n4 5\n5 6\n2 4\n1 5 3\n2 4\n1 3 1\n2 4\n2 6",
            "sampleOutput": "3\n3\n2\n4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6 6\n1 2\n2 3\n3 4\n4 5\n5 6\n2 4\n1 5 3\n2 4\n1 3 1\n2 4\n2 6",
                "output": "3\n3\n2\n4"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-11",
        "order": 11,
        "title": "Quy hoạch động nâng cao trên dãy & xâu",
        "theoryPdfFileName": "Chapter 3 lesson 11 - Quy hoạch động nâng cao và xâu.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 11 - Quy hoạch động nâng cao và xâu.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Quy hoạch động nâng cao trên dãy & xâu với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Quy hoạch động nâng cao trên dãy & xâu\nNội dung\nTrong khóa Đồng, bạn đã học DP cơ bản: Fibonacci, coin change, grid paths, knapsack\n0/1, LIS bản dễ. Bài này nâng cấp những kỹ năng đó với:\n1. LISO(nlogn)- patience sorting\n2. LCS - Longest Common Subsequence\n• Biến thể quen thuộc: Edit Distance (Levenshtein)\n3. Knapsack mở rộng\n• 3.1. Unbounded Knapsack - vật được lấy nhiều lần\n• 3.2. Bounded Knapsack - vậticóc i bản\n• 3.3. Group Knapsack - mỗi nhóm chọn≤1vật\n4. DP đếm trên dãy / xâu\n• Ví dụ: Xâu palindrome con dài nhất (LPS)\n• Ví dụ: Tìm xâu thứktheo thứ tự từ điển\n5. Mẹo DP nâng cao\n6. Bẫy thường gặp\n7. Tổng kết\n• LIS - dùng binary search trên patience arrayO(nlogn)\n• LCS / Edit Distance - DP trên hai xâu\n• Knapsack mở rộng: unbounded, bounded, group\n• DP đếm trên dãy / xâu - palindrome, đếm cách\n1. LISO(nlogn)- patience sorting\nNhắc lại bài toán:Cho dãya 1, . . . , an. Tìm dãy con tăng dài nhất.\n• CáchO(n 2)(Bronze):dp[i] =LIS kết thúc ởi.\n• CáchO(nlogn): Duy trì mảngtail, trong đótail[k]= giá trị nhỏ nhất có thể\nlà phần tử cuối của một LIS độ dàik+ 1.\nTính chất:tailluôn tăng nghiêm ngặt.\nQuy trình:Với mỗia i:\n• Nếua i >mọi giá trị trongtail→append.\n• Ngược lại, tìm vị trí đầu tiên≥a i trongtailvà thay giá trị đó bằnga i.\nC++\nvector<int> tail;\nfor (int x : a) {\nauto it = lower_bound(tail.begin(), tail.end(), x);\nif (it == tail.end()) tail.push_back(x);\nelse *it = x;\n}\ncout << tail.size();\nPython\nimport bisect\ntail = []\nfor x in a:\ni = bisect.bisect_left(tail, x)\nif i == len(tail):\ntail.append(x)\nelse:\ntail[i] = x\nprint(len(tail))\nĐáp án=tail.size().\nLưu ý:\n• lower_boundcho LIS nghiêm ngặt (strictly increasing).\n• Đổi sangupper_boundcho không giảm (non-decreasing).\nCảnh báo:tailkhông phải chính LIS - chỉ độ dài đúng. Để khôi phục LIS, cần lưu\nthêm thông tin (parent pointers).\n2. LCS - Longest Common Subsequence\nĐề:Cho hai xâuAđộ dàin,Bđộ dàim. Tìm xâu con dài nhất xuất hiện trong cả hai.\nTrạng thái:dp[i][j] =LCS củaA[1..i]vàB[1..j].\nTruy hồi:\n• NếuA[i] =B[j]:dp[i][j] =dp[i−1][j−1] + 1.\n• Ngược lại:dp[i][j] = max(dp[i−1][j], dp[i][j−1]).\nC++\nint dp[N][N];\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= m; j++) {\nif (a[i] == b[j]) dp[i][j] = dp[i-1][j-1] + 1;\nelse dp[i][j] = max(dp[i-1][j], dp[i][j-1]);\n}\ncout << dp[n][m];\nPython\ndp = [[0] * (m + 1) for _ in range(n + 1)]\nfor i in range(1, n + 1):\nfor j in range(1, m + 1):\nif a[i] == b[j]:\ndp[i][j] = dp[i-1][j-1] + 1\nelse:\ndp[i][j] = max(dp[i-1][j], dp[i][j-1])\nprint(dp[n][m])\nPhục hồi LCS:truy ngược từdp[n][m]- nếu ký tự bằng nhau vàdp[i−1][j−1] + 1 =\ndp[i][j]thì lấy ký tự đó, lùi cả hai. Ngược lại, lùi theo hướng códplớn hơn.\nPhức tạp:O(nm), nhớO(nm)- có thể giảm xuốngO(min(n, m))nếu chỉ cần độ dài.\nBiến thể quen thuộc: Edit Distance (Levenshtein)\nCùng khung 2D trên hai xâu, chỉ thay truy hồi. Edit distance đếm số phép biến đổi (chèn\n/ xóa / sửa) tối thiểu để biếnA→B:\n• dp[0][j] =j,dp[i][0] =i.\n• NếuA[i] =B[j]:dp[i][j] =dp[i−1][j−1].\n• Ngược lại:dp[i][j] = 1 + min({dp[i−1][j], dp[i][j−1], dp[i−1][j−1]})(xóa / chèn\n/ sửa).\nC++\nint dp[N][N];\nfor (int i = 0; i <= n; i++) dp[i][0] = i;\nfor (int j = 0; j <= m; j++) dp[0][j] = j;\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= m; j++) {\nif (a[i] == b[j]) dp[i][j] = dp[i-1][j-1];\nelse dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});\n}\ncout << dp[n][m];\nPython\ndp = [[0] * (m + 1) for _ in range(n + 1)]\nfor i in range(n + 1): dp[i][0] = i\nfor j in range(m + 1): dp[0][j] = j\nfor i in range(1, n + 1):\nfor j in range(1, m + 1):\nif a[i] == b[j]:\ndp[i][j] = dp[i-1][j-1]\nelse:\ndp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\nprint(dp[n][m])\nĐiểm mấu chốt:mọi DP 2D trên hai xâu đều cùng khung này, chỉ khác công thức\ntruy hồi.\n3. Knapsack mở rộng\n3.1. Unbounded Knapsack - vật được lấy nhiều lần\nKhác 0/1 knapsack: đảo chiều vòng lặpjthành tăng.\nC++\n// 0/1 - duyệt j từ W về w[i] (giảm)\nfor (int i = 1; i <= n; i++)\nfor (int j = W; j >= w[i]; j--)\ndp[j] = max(dp[j], dp[j - w[i]] + v[i]);\n// Unbounded - duyệt j từ w[i] tới W (tăng)\nfor (int i = 1; i <= n; i++)\nfor (int j = w[i]; j <= W; j++)\ndp[j] = max(dp[j], dp[j - w[i]] + v[i]);\nPython\n# 0/1\ndp = [0] * (W + 1)\nfor i in range(1, n + 1):\nfor j in range(W, w[i] - 1, -1): # giảm dần\ndp[j] = max(dp[j], dp[j - w[i]] + v[i])\n# Unbounded\ndp = [0] * (W + 1)\nfor i in range(1, n + 1):\nfor j in range(w[i], W + 1): # tăng dần\ndp[j] = max(dp[j], dp[j - w[i]] + v[i])\nLý do:với unbounded, khi cập nhậtdp[j]ta dùngdp[j−w[i]]ở lượt hiện tại (đã cập\nnhật) - tức cho phép chọn vậtinhiều lần.\n3.2. Bounded Knapsack - vậticóc i bản\nCách ngây thơ:nhân ra thành P ci vật riêng→O(nW P ci)- chậm.\nTối ưu binary:phân táchc i thành các \"gói\"có kích thước1,2,4,8, . . .và một gói\n\"dư\"để tổng vừa đúngc i. Mọi cách chọn0..ci vật đều có thể biểu diễn là tổng các gói\nđược chọn (giống biểu diễn nhị phân). Tổng số gói trên tất cả vật làO(nlogC)→giải\nbằng 0/1 knapsack thường.\nC++\n// items[k] = (weight_k, value_k) sau khi phân tách\nvector<pair<int,int>> items;\nfor (int i = 1; i <= n; i++) {\nint cnt = c[i];\nfor (int k = 1; k <= cnt; k *= 2) {\nint take = min(k, cnt);\nitems.push_back({take * w[i], take * v[i]});\ncnt -= take;\n}\nif (cnt > 0) items.push_back({cnt * w[i], cnt * v[i]});\n}\n// Sau đó chạy 0/1 knapsack thường trên items\nvector<int> dp(W + 1, 0);\nfor (auto [wi, vi] : items)\nfor (int j = W; j >= wi; j--)\ndp[j] = max(dp[j], dp[j - wi] + vi);\ncout << dp[W];\nPython\nitems = []\nfor i in range(1, n + 1):\ncnt = c[i]\nk = 1\nwhile k <= cnt:\ntake = min(k, cnt)\nitems.append((take * w[i], take * v[i]))\ncnt -= take\nk *= 2\nif cnt > 0:\nitems.append((cnt * w[i], cnt * v[i]))\ndp = [0] * (W + 1)\nfor wi, vi in items:\nfor j in range(W, wi - 1, -1):\ndp[j] = max(dp[j], dp[j - wi] + vi)\nprint(dp[W])\n3.3. Group Knapsack - mỗi nhóm chọn≤1vật\nC++\nfor (auto& group : groups) {\nfor (int j = W; j >= 0; j--)\nfor (auto [w, v] : group)\nif (j >= w) dp[j] = max(dp[j], dp[j-w] + v);\n}\nPython\nfor group in groups:\nfor j in range(W, -1, -1):\nfor w, v in group:\nif j >= w:\ndp[j] = max(dp[j], dp[j-w] + v)\nLưu ý:vòngjở ngoài vòng \"vật trong nhóm\"để tránh chọn2vật cùng nhóm.\n4. DP đếm trên dãy / xâu\nNhiều bài DP không hỏi giá trị tối ưu mà hỏi số cách. Khung tư duy như cũ - chỉ thay\nmax/minbằng+.\nVí dụ: Xâu palindrome con dài nhất (LPS)\nCho xâusđộ dàin. Tìm xâu con (subsequence) là palindrome dài nhất.\nTrạng thái:dp[i][j] =LPS củas[i..j].\nTruy hồi:\n• Nếui=j:dp[i][j] = 1.\n• Nếus[i] =s[j]:dp[i][j] =dp[i+ 1][j−1] + 2.\n• Ngược lại:dp[i][j] = max(dp[i+ 1][j], dp[i][j−1]).\nC++\n// s[1..n] - chỉ số từ 1 (giống LCS ở§2)\nfor (int len = 1; len <= n; len++)\nfor (int i = 1; i + len - 1 <= n; i++) {\nint j = i + len - 1;\nif (i == j) dp[i][j] = 1;\nelse if (s[i] == s[j]) dp[i][j] = dp[i+1][j-1] + 2;\nelse dp[i][j] = max(dp[i+1][j], dp[i][j-1]);\n}\ncout << dp[1][n];\nPython\n# s[1..n] - chỉ số từ 1\ndp = [[0] * (n + 2) for _ in range(n + 2)]\nfor length in range(1, n + 1):\nfor i in range(1, n - length + 2):\nj = i + length - 1\nif i == j:\ndp[i][j] = 1\nelif s[i] == s[j]:\ndp[i][j] = dp[i+1][j-1] + 2\nelse:\ndp[i][j] = max(dp[i+1][j], dp[i][j-1])\nprint(dp[1][n])\nQuan trọng:thứ tự duyệt theo độ dài đoạn (len) - vìdp[i][j]phụ thuộc đoạn ngắn\nhơn.\nVí dụ: Tìm xâu thứktheo thứ tự từ điển\nĐây là một kỹ thuật rất kinh điển kết hợp DP đếm và xây dựng đáp án từng bước.\nĐề mẫu:Cho ba sốm, n, p. TậpSgồm tất cả các xâu chỉ chứa đúngmký tựX,nký\ntựY,pký tựZ. Tìm xâu thứktrongStheo thứ tự từ điển.\nBước 1 - Đếm bằng DP:Gọif(m, n, p) =số xâu có thể tạo từmký tựX,nký tự\nY,pký tựZ. Truy hồi:\nf(m, n, p) =f(m−1, n, p) +f(m, n−1, p) +f(m, n, p−1)\n(điều kiện biênf(0,0,0) = 1). Đây chính là số tổ hợp(m+n+p)!\nm!n!p! .\nBước 2 - Xây dựng xâu từng ký tự:Tại mỗi vị trí, thử ký tự nhỏ nhất trước\n(X<Y<Z). Đếm xem có bao nhiêu xâu bắt đầu bằng ký tự đó:\n• Nếu chọnXđầu tiên→cònm−1ký tựX,nký tựY,pký tựZ→cóf(m−1, n, p)\nxâu.\n• Nếuk≤f(m−1, n, p)→đáp án bắt đầu bằngX, đệ quy với(m−1, n, p)và giữ\nnguyênk.\n• Ngược lại→đáp án không bắt đầu bằngX. Trừkđif(m−1, n, p)và thử ký tự kế\ntiếpY.\nC++\nstring solve(int m, int n, int p, long long k) {\nstring ans;\nwhile (m + n + p > 0) {\nlong long cntX = (m > 0) ? f[m-1][n][p] : 0;\nlong long cntY = (n > 0) ? f[m][n-1][p] : 0;\nif (k <= cntX) { ans += ’X’; m--; }\nelse if (k <= cntX + cntY) { k -= cntX; ans += ’Y’; n--; }\nelse { k -= cntX + cntY; ans += ’Z’; p--; }\n}\nreturn ans;\n}\nPython\ndef solve(m, n, p, k):\nans = []\nwhile m + n + p > 0:\ncntX = f[m-1][n][p] if m > 0 else 0\ncntY = f[m][n-1][p] if n > 0 else 0\nif k <= cntX:\nans.append(’X’); m -= 1\nelif k <= cntX + cntY:\nk -= cntX; ans.append(’Y’); n -= 1\nelse:\nk -= cntX + cntY; ans.append(’Z’); p -= 1\nreturn ’’.join(ans)\nTại sao đúng?Tất cả các xâu trongSđược sắp theo thứ tự từ điển. Khi đếm \"có bao\nnhiêu xâu bắt đầu bằngX\", ta biết chính xác các vị trí thứ tự1đếnf(m−1, n, p)trong\nS- mọi xâu thứ tự đó đều bắt đầu bằngX. Còn các xâu sau đó thì không. Việc trừk\nchính là đổi hệ tham chiếu sang nhóm còn lại.\nBẫy quan trọng:\n• kcó thể rất lớn - thường cầnlong longhoặc BigInt.\n• Đôi khi đề yêu cầu chặn đếm ở1018 để tránh tràn (nếuktối đa10 18, ta không cần\nbiết chính xácfkhi nó vượt10 18).\nKhi nào áp dụng được?\n• Có thể đếm số phần tử của tập \"có tiền tốT\"trong thời gian hợp lý.\n• Tập có thứ tự rõ ràng (từ điển, độ dài tăng dần, v.v.).\nĐây là kỹ thuật rất đáng nhớ - bạn sẽ gặp nó trong nhiều bài \"tìm đáp án thứk\".\n5. Mẹo DP nâng cao\n• Tối ưu bộ nhớ:nhiều DP chỉ phụ thuộc 2 hàng→giảmO(nm)xuốngO(m).\n• Tự hỏi:trạng thái là gì? Truy hồi gì? Thứ tự duyệt nào đúng?\n• Vẽ bảng DP:cực kỳ hữu ích để debug.\n• Khôi phục đáp án:lưu thêm \"lựa chọn\"(chọn vật nào, bước nào) để truy ngược.\n6. Bẫy thường gặp\n• 0/1 knapsack vs unbounded: chiều duyệtjngược nhau!\n• LCS index: dễ nhầmivớii−1.\n• Edit distance khởi tạo: phải đặtdp[i][0] =ivàdp[0][j] =j.\n• Trànlong long: tích lớn→dùnglong long.\n7. Tổng kết\nBÀI TOÁN TRẠNG THÁI PHỨC TẠP\nLIS chuẩn dp[i] O(n2)\nLIS nhanh patience array O(nlogn)\nLCS dp[i][j] O(nm)\nEdit distance dp[i][j] O(nm)\n0/1 knapsack dp[j] O(nW)\nUnbounded knapsack dp[j] O(nW)\nLPS / palindrome con dp[i][j] O(n2)",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b11-p1-bi-n-i-x-u",
            "title": "Biến đổi xâu",
            "fileName": "Biến đổi xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.2s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán Biến đổi xâu. Giới hạn thời gian 1.2s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Biến đổi xâu - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho hai xâu S và T chỉ gồm các ký tự in thường. Bạn được phép thực hiện một trong ba thao\ntác sau trên xâu S:\n• Chèn một ký tự bất kỳ vào xâu.\n• Xoá một ký tự bất kỳ trong xâu.\n• Thay đổi một ký tự bất kỳ trong xâu thành ký tự in thường khác.\nYêu cầu: Tìm số thao tác ít nhất để đưa xâu S về xâu T.\n\nInput\n• Dòng thứ nhất chứa số nguyên dương duy nhất là số bộ test T (T ≤ 40).\n• Mỗi test gồm 2 dòng, mỗi dòng chứa một xâu gồm các kí tự trong 'a' đến 'z' viết liền\nnhau, giới hạn độ dài không quá 1 0 3.\n\nOutput\n• Ghi ra T dòng, mỗi dòng là kết quả tương ứng cho một test là số thao tác ít nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1\nabc\nae",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1\nabc\nae",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p2-b-i-to-n-ba-l-2",
            "title": "Bài toán ba lô 2",
            "fileName": "Bài toán ba lô 2 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Bài toán ba lô 2. Giới hạn thời gian 2.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Bài toán ba lô 2 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có N viên bi, được đánh số 1, 2, 3,..., N. Với mỗi i (1 ≤ i ≤ N), viên bi thứ i có khối\nlượng là w i và có giá trị là v i.\nK aninh o quyết định chọn một số viên bi từ N viên bi trên và bỏ vào ba lô để đi chơi. Sức\nchứa của ba lô là W, có nghĩa là tổng khối lượng của các viên bi được chọn phải không được\nquá W.\nTìm tổng giá trị lớn nhất có thể của các viên bi được chọn để bỏ vào ba lô.\n\nInput\n• Dòng thứ nhất chứa hai số nguyên N, W (1 ≤ N ≤ 100, 1 ≤ W ≤ 10^9)\n• N dòng tiếp theo, mỗi dòng chứa hai số nguyên w i, v i (1 ≤ w i ≤ W, 1 ≤ v i ≤ 1 0 3)\n\nOutput\n• In ra giá trị cần tìm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 8\n3 30\n4 50\n5 60",
            "sampleOutput": "90",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 8\n3 30\n4 50\n5 60",
                "output": "90"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p3-b-i-to-n-ba-l-3",
            "title": "Bài toán ba lô 3",
            "fileName": "Bài toán ba lô 3 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Bài toán ba lô 3. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Bài toán ba lô 3 - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Trong siêu thị có N đồ vật, đồ vật thứ i có khối lượng là W i, và có giá trị là V i. Một ngày, CJ\nvào siêu thị để mua đồ. Vì trước kia mua nhiều ở đây, nên CJ được một tấm thẻ đặc biệt của\nsiêu thị. Khi có tấm thẻ này thì CJ được quyền lấy một số món đồ sao cho tổng khối lượng\nkhông quá M. Vì CJ không giỏi tính toán, nên các bạn hãy giúp CJ lấy một số món đồ sao\ncho tổng khối lượng không quá M, và tổng giá trị lớn nhất có thể.\n\nInput\n• Dòng thứ nhất chứa hai số nguyên dương N, M là số món đồ trong siêu thị và tổng\nkhối lượng tối đa trong tấm thẻ.\n• N dòng tiếp theo, dòng thứ i chứa hai số nguyên dương W i, V i lần lượt là khối lượng\nvà giá trị của đồ vật thứ i.\n\nOutput\n• Dòng thứ nhất in ra số món đồ mà CJ lấy để tổng giá trị đạt lớn nhất.\n• Dòng thứ hai in ra chỉ số các món đồ mà CJ lấy theo thứ tự tăng dần.\nConstants\n• N ≤ 18, M ≤ 5.10^9\n• W i, V i ≤ 10^9, với ∀ i, 1 ≤ i ≤ N.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 20\n7 1\n5 8\n1 1\n7 8\n9 7",
            "sampleOutput": "4\n1 2 3 4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 20\n7 1\n5 8\n1 1\n7 8\n9 7",
                "output": "4\n1 2 3 4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p4-book-shop",
            "title": "Book Shop",
            "fileName": "CSES - Book Shop _ Hiệu sách - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Book Shop. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/CSES - Book Shop _ Hiệu sách - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn đang ở trong một hiệu sách bán n cuốn sách khác nhau. Bạn biết giá và số trang của mỗi\ncuốn sách.\nBạn quyết định tổng số tiền mua sách của bạn tối đa là x. Tổng số trang tối đa bạn có thể\nmua là bao nhiêu? Bạn chỉ có thể mua mỗi cuốn sách nhiều nhất một lần.\n\nInput\n• Dòng đầu tiên chứa hai số nguyên n và x: số lượng sách và tổng số tiền tối đa\n• Dòng tiếp theo chứa n số nguyên h 1, h 2, …, h n: giá cả của mỗi cuốn sách\n• Dòng cuối cùng chứa n số nguyên s 1, s 2, …, s n: số trang của mỗi cuốn sách\n\nOutput\n• In một số nguyên duy nhất: tổng số trang tối đa\n\nScoring\n• 1 ≤ n ≤ 1000\n• 1 ≤ x ≤ 10^5\n• 1 ≤ h i, s i ≤ 1000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4 10\n4 8 5 3\n5 12 8 1",
            "sampleOutput": "13",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4 10\n4 8 5 3\n5 12 8 1",
                "output": "13"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p5-edit-distance",
            "title": "Edit Distance",
            "fileName": "CSES - Edit Distance _ Khoảng cách chỉnh sửa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Edit Distance. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/CSES - Edit Distance _ Khoảng cách chỉnh sửa - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Khoảng cách chỉnh sửa giữa hai xâu là số lượng thao tác tối thiểu cần thiết để chuyển đổi một\nxâu thành xâu kia.\nCác thao tác được phép là:\n• Thêm một ký tự vào xâu\n• Xóa một ký tự khỏi xâu\n• Thay thế một ký tự trong xâu\nVí dụ: khoảng cách chỉnh sửa giữa LOVE và MOVIE là 2, vì trước tiên bạn có thể thay thế\nL bằng M, sau đó thêm I.\nNhiệm vụ của bạn là tính toán khoảng cách chỉnh sửa giữa hai xâu.\n\nInput\n• Dòng đầu tiên có một xâu chứa n ký tự trong khoảng từ A - Z\n• Dòng thứ hai có một xâu chứa các ký tự m trong khoảng từ A - Z\n\nOutput\n• In một số nguyên: khoảng cách chỉnh sửa giữa các xâu\n\nScoring\n• 1 ≤ n ≤ 5000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "LOVE\nMOVIE",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "LOVE\nMOVIE",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p6-increasing-subsequence",
            "title": "Increasing Subsequence",
            "fileName": "CSES - Increasing Subsequence _ Dãy con tăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Increasing Subsequence. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/CSES - Increasing Subsequence _ Dãy con tăng - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho một mảng gồm n số nguyên. Nhiệm vụ của bạn là xác định dãy con tăng dài\nnhất của mảng, tức là, tìm dãy con dài nhất trong đó tất cả các phần tử đều lớn hơn phần tử\ntrước đó.\nMột dãy con là một dãy có thể thu được từ mảng bằng cách xóa một số phần tử mà vẫn\nkhông thay đổi thứ tự của các phần tử còn lại.\n\nInput\n• Dòng đầu tiên chứa một số nguyên n (1 ≤ n ≤ 2 \times 10^5) - kích thước của mảng\n• Sau đó có n số nguyên x 1, x 2, …, x n (1 ≤ x_i ≤ 10^9) - các phần tử của mảng\n\nOutput\n• In độ dài của dãy con tăng dài nhất",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "8\n7 3 5 3 6 2 9 8",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "8\n7 3 5 3 6 2 9 8",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p7-rectangle-cutting",
            "title": "Rectangle Cutting",
            "fileName": "CSES - Rectangle Cutting _ Cắt hình chữ nhật - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Rectangle Cutting. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/CSES - Rectangle Cutting _ Cắt hình chữ nhật - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Với một hình chữ nhật a × b, nhiệm vụ của bạn là cắt nó thành các hình vuông. Trong mỗi\nbước, bạn có thể chọn một hình chữ nhật và cắt nó thành hai hình chữ nhật sao cho độ dài\ncác cạnh vẫn là số nguyên. Số bước tối thiểu là bao nhiêu?\n\nInput\n• Gồm một dòng duy nhất chứa hai số nguyên a và b.\n\nOutput\n• In một số nguyên: số lần di chuyển tối thiểu.\n\nScoring\n• 1 ≤ a, b ≤ 500",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 5",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 5",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p8-d-y-con-t-ng-d-i-nh-t-b-n-kh",
            "title": "Dãy con tăng dài nhất (bản khó)",
            "fileName": "Dãy con tăng dài nhất (bản khó) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.7s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Dãy con tăng dài nhất (bản khó). Giới hạn thời gian 0.7s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Dãy con tăng dài nhất (bản khó) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một dãy số nguyên gồm N phần tử A [ 1 ], A [ 2 ], ⋯ A [ N ].\nBiết rằng dãy con tăng đơn điệu là 1 dãy A [ i 1 ], ⋯ A [ i k ] thỏa mãn i 1 < i 2 < ⋯ < i k và\nA [ i 1 ] < A [ i 2 ] < ⋯ < A [ i k ].\nYêu cầu: Hãy cho biết dãy con tăng đơn điệu dài nhất của dãy này có bao nhiêu phần tử.\n\nInput\n• Dòng đầu tiên chứa số nguyên dương N (1 ≤ N ≤ 30000)\n• Dòng thứ 2 ghi N số nguyên A [ 1 ], A [ 2 ], ⋯, A [ N ] (0 ≤ A [ i ] ≤ 1000000).\n\nOutput\n• Ghi ra độ dài của dãy con tăng đơn điệu dài nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6\n1 2 5 4 6 2",
            "sampleOutput": "4",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6\n1 2 5 4 6 2",
                "output": "4"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p9-d-y-con-n-i-u-t-ng-d-i-nh-t",
            "title": "Dãy con đơn điệu tăng dài nhất",
            "fileName": "Dãy con đơn điệu tăng dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Dãy con đơn điệu tăng dài nhất. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Dãy con đơn điệu tăng dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho dãy số nguyên A = (a 1, a 2,..., a n). Một dãy con của A là một cách chọn ra trong A\nmột số phần tử giữ nguyên thứ tự. Như vậy A có 2 n dãy con.\nYêu cầu: Tìm dãy con đơn điệu tăng của A có độ dài lớn nhất. Tức là tìm một số k lớn nhất và\ndãy chỉ số i 1 < i 2 <... < i k sao cho a_{i1} < a_{i2} <... < a i k.\n\nInput\n• Dòng 1: số nguyên dương n (n ≤ 10^5).\n• Dòng 2: n số nguyên a 1, a 2,..., a n (∀ i: ∣ a i ∣ ≤ 10^9)\n\nOutput\n• Dòng 1: số nguyên k\n• Dòng 2: k số nguyên i 1, i 2, …, i k",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "12\n1 2 3 8 9 4 5 6 2 3 9 10",
            "sampleOutput": "8\n1 2 3 6 7 8 11 12",
            "testCases": [
              {
                "id": "Test 1",
                "input": "12\n1 2 3 8 9 4 5 6 2 3 9 10",
                "output": "8\n1 2 3 6 7 8 11 12"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p10-s-hi-u-ho-n-v",
            "title": "Số hiệu hoán vị",
            "fileName": "Số hiệu hoán vị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Số hiệu hoán vị. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Số hiệu hoán vị - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Xét tất cả các hoán vị của dãy số tự nhiên (1, 2,..., n) (1 ≤ n ≤ 12)\nGiả sử rằng các hoán vị được sắp xếp theo thứ tự từ điển. Yêu cầu:\n• 1: Cho trước 1 hoán vị. Tìm số hiệu của hoán vị đó trong dãy đã sắp xếp\n• 2: Cho trước số hiệu của 1 hoán vị trong dãy hoán vị đã sắp xếp. Tìm hoán vị đó\n\nInput\n• Dòng 1: Chứa n số a 1, a 2,..., a n (dãy hoán vị n phần tử)\n• Dòng 2: Chứa số p (số hiệu của hoán vị trong dãy hoán vị n phần tử)\n\nOutput\n• Dòng 1: Ghi số q (số hiệu của dãy hoán vị a)\n• Dòng 2: Ghi n số b 1, b 2,..., b n (dãy hoán vị có số hiệu p)",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 1 3\n4",
            "sampleOutput": "3\n2 3 1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 1 3\n4",
                "output": "3\n2 3 1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p11-ti-n-t",
            "title": "Tiền tệ",
            "fileName": "Tiền tệ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1100,
            "preview": "Bài toán Tiền tệ. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Tiền tệ - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Ông Lionheart - thị trưởng của Bilaspur, có một kế hoạch cho cư dân của mình. Ông ta muốn\ngiới thiệu một hệ thống tiền tệ chỉ gồm 2 loại tiền mệnh giá a đồng và b đồng. Nhưng có\nmột vấn đề rắc rối là có những khoản tiền không thể chi trả bằng cách chỉ sử dụng 2 loại tiền\nnày. Trong những trường hợp đó, công dân sẽ phải chọn thanh toán kỹ thuật số.\nCho n khoản tiền, bạn hãy cho biết có bao nhiêu khoản tiền có thể thanh toán được bằng\ncách sử dụng các loại tiền trên và còn bao nhiêu khoản tiền phải được thanh toán bằng kỹ\nthuật số. Biết rằng thị trưởng đã cung cấp không giới hạn các loại tiền này.\n\nInput\n• Dòng đầu tiên chứa 3 số nguyên n, a, b (1 ≤ n, a, b ≤ 10^5).\n• Dòng thứ hai chứa n số nguyên c i, mô tả n khoản tiền cần thanh toán (1 ≤ c i ≤ 10^5).\n\nOutput\n• Ghi ra một dòng chứa 2 số nguyên tương ứng là số khoản tiền có thể thanh toán bằng 2\nloại tiền mệnh giá a đồng, b đồng và số khoản tiền phải thanh toán bằng kỹ thuật số.\n\nScoring\n• Subtask 1 (30% số điểm): 1 ≤ n, a, b, c i ≤ 1 0 2.\n• Subtask 2 (30% số điểm): 1 ≤ n, a, b, c i ≤ 1 0 3.\n• Subtask 3 (40% số điểm): Như ràng buộc gốc.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5 4 6\n16 20 36 22 15",
            "sampleOutput": "4 1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5 4 6\n16 20 36 22 15",
                "output": "4 1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p12-tr-ti-n",
            "title": "Trả tiền",
            "fileName": "Trả tiền - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1400,
            "preview": "Bài toán Trả tiền. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Trả tiền - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nước Silverland sử dụng hệ thống 100 loại tiền xu, trong đó các xu có mệnh giá là một số\nchính phương từ 1 2 đến 10^{0} 2:\nVới hệ thống này, để trả chính xác 10 xu ta có 4 cách:\n• Trả 10 đồng 1 xu.\n• Trả 6 đồng 1 xu và 1 đồng 4 xu.\n• Trả 2 đồng 1 xu và 2 đồng 4 xu.\n• Trả 1 đồng 1 xu và 1 đồng 9 xu.\nHãy xác định số lượng cách trả chính xác một số tiền m cho trước ở Silverland và đưa ra một\ncách trả phải dùng ít đồng xu nhất.\n\nInput\n• Dòng 1: số nguyên dương m (m ≤ 10^5).\n\nOutput\n• Dòng 1: số nguyên k là số lượng cách trả, lấy phần dư khi chia cho 123456789;\n• Dòng 2: số nguyên q là số đồng xu tối thiểu phải sử dụng để trả;\n• Các dòng tiếp theo, mỗi dòng ghi hai số nguyên dương a, b cho biết sử dụng a đồng xu\nloại mệnh giá b 2 trong phương án tối ưu (dùng ít đồng xu nhất).",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "19",
            "sampleOutput": "10\n3\n2 3\n1 1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "19",
                "output": "10\n3\n2 3\n1 1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p13-x-u-con-chung-d-i-nh-t",
            "title": "Xâu con chung dài nhất",
            "fileName": "Xâu con chung dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "2.0s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán Xâu con chung dài nhất. Giới hạn thời gian 2.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Xâu con chung dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho hai xâu s và t chỉ gồm các chữ cái thường ′ a ′.. ′ z ′. Tìm xâu con chung dài nhất\n(subsequence) của hai xâu s và t\n\nInput\n• Dòng thứ nhất chứa xâu s (1 ≤ ∣ s ∣ ≤ 3000)\n• Dòng thứ hai chứa xâu t (1 ≤ ∣ t ∣ ≤ 3000)\n\nOutput\n• In ra xâu chung dài nhất cần tìm. Nếu có nhiều đáp án in ra bất kì !\nChú ý: Một xâu con của một xâu x bất kì thu được bằng cách xóa đi một vài kí tự (có thể\nkhông xóa kí tự nào) từ xâu x và nối những phần tử còn lại mà không thay đổi thứ tự của\nchúng.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "axyb\nabyxb",
            "sampleOutput": "axb",
            "testCases": [
              {
                "id": "Test 1",
                "input": "axyb\nabyxb",
                "output": "axb"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p14-x-u-con-chung-kh-ng-li-n-k-d-i-nh-t",
            "title": "Xâu con chung không liền kề dài nhất",
            "fileName": "Xâu con chung không liền kề dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.2s",
            "memoryLimit": "256MB",
            "point": 1400,
            "preview": "Bài toán Xâu con chung không liền kề dài nhất. Giới hạn thời gian 1.2s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Xâu con chung không liền kề dài nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho hai xâu S và T chỉ gồm các ký tự in thường 'a' đến 'z'. Tìm độ dài xâu con chung không\nliền kề dài nhất (subsequence) của hai xâu S và T.\n\nInput\n• Dòng thứ nhất chứa số nguyên dương duy nhất là số bộ test T (T ≤ 40).\n• Mỗi test gồm 2 dòng, mỗi dòng chứa một xâu gồm các kí tự trong 'a' đến 'z' viết liền\nnhau, giới hạn độ dài không quá 1 0 3.\n\nOutput\n• Ghi ra T dòng, mỗi dòng là kết quả tương ứng cho một test là độ dài xâu con chung\nkhông liền kề dài nhất.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1\nabc\nab",
            "sampleOutput": "1",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1\nabc\nab",
                "output": "1"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b11-p15-o-n-con-hsg-thpt-h-t-nh-2023",
            "title": "Đoạn con (HSG THPT Hà Tĩnh 2023)",
            "fileName": "Đoạn con (HSG THPT Hà Tĩnh 2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1300,
            "preview": "Bài toán Đoạn con (HSG THPT Hà Tĩnh 2023). Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 11/Đoạn con (HSG THPT Hà Tĩnh 2023) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Một dãy số được gọi là dãy số đặc biệt khi ta đọc dãy từ trái sang phải cũng giống như khi\nđọc từ phải sang trái.\nChẳng hạn:\n• Dãy gồm các số (21, 1, 9, 1, 21) là dãy số đặc biệt.\n• Dãy gồm các số (1, 7, 8, 9, 1) không phải là dãy số đặc biệt.\nYêu cầu: Cho số nguyên dương N và dãy số A gồm N phần tử a 1, a 2, …, a n, mỗi phần tử\nlà một số nguyên dương. Hãy tìm số lượng ít nhất phần tử cần chèn thêm vào dãy A để dãy\nA thành dãy số đặc biệt.\n\nInput\n• Dòng đầu là số tự nhiên N ≤ 1000;\n• Dòng thứ 2 gồm N số nguyên dương a 1, a 2, a 3, …, a n (0 ≤ a i ≤ 10^9).\n\nOutput\n• Ghi kết quả tìm được ra màn hình.\n• Các số trên một dòng của tập input/output phải cách nhau ít nhất một dấu cách.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "5\n1 7 8 9 1",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "5\n1 7 8 9 1",
                "output": "2"
              }
            ],
            "totalTests": 1
          }
        ]
      },
      {
        "id": "cp-silver-lesson-12",
        "order": 12,
        "title": "Toán số học & Tổ hợp chuyên sâu",
        "theoryPdfFileName": "Chapter 3 lesson 12 - Advanced Math.pdf",
        "theoryPdfUrl": "/cp-assets/giao-trinh/Chapter 3 lesson 12 - Advanced Math.pdf",
        "theorySummary": "Chuyên đề lý thuyết trọng tâm Toán số học & Tổ hợp chuyên sâu với đầy đủ kiến thức cơ bản, phương pháp tối ưu và ví dụ minh họa trực quan.",
        "theoryContent": "Toán số học & tổ hợp\n0. Bài này dạy gì?\nỞ Toán học cơ bản, bạn đã làm quen với ước số, GCD/LCM, số nguyên tố, sàng Eratosthenes,\nsố học modular và lũy thừa nhanh. Bài Bạc này mở rộng chúng để xử các bài đếm/tổ hợp\nmodulop- một dạng đề rất phổ biến.\nBạn sẽ học:\n1. Số học modular - nhắc lại + bẫy thường gặp.\n2. Phép chia mod là gì? - Nghịch đảo modulo & định lý Fermat.\n3. Tổ hợpC(n,k) (modp)trongO(1)sau tiền xử lýO(n).\n4. Sàng tuyến tính & Smallest Prime Factor (SPF).\n5. Bù trừ (inclusion-exclusion) - đếm ít nhất một.\n1. Số học modular - nhắc nhanh\nKhi đề yêu cầu in đáp án modulop(thườngp= 109 + 7hoặc998244353, đều là số nguyên tố),\nta giữ kết quả luôn ở dạngrmodp∈[0,p). Tin vui:\nPHÉP CÔNG THỨC VÍ DỤ (P= 7)\nCộng (a+b) modp (5 + 4) mod 7 = 2\nTrừ (a−b+p) modp (2−5 + 7) mod 7 = 4\nNhân (a·b) modp (3·5) mod 7 = 1\nCộng / trừ / nhân đều \"phân phối\"qua modulo, chỉ cần lấy mod ngay sau mỗi bước để tránh\ntràn số.\nBẫy hay gặp với phép trừ (C++):(a−b)%pcó thể ra số âm khia<b. Luôn viết:\nlong long sub_mod ( long long a , long long b , long long p ) {\nreturn ( a - b + p ) % p ;// cong p de chac chan khong am\n}\nLũy thừa nhanhpower(a, b, p)đã học - phần này coi như đã quen.\n2. Vì sao \"chia\"lại khó?\nCộng / trừ / nhân ổn rồi - còn chia thì sao?\n6 mod 5 = 1và2 mod 5 = 2\n(6/2) mod 5 = 3̸= (1/2) mod 5 = 0.5Không phải số nguyên!\nPhép chia không \"phân phối\"qua modulo - đó là lý do ta cần một công cụ mới: nghịch đảo\nmodulo.\nÝ tưởng: thay vì viếta\nb (modp), ta viếta·b −1 (modp)trong đób −1 là số nhân vào ra 1:\nb·b −1≡1 (modp)\nKhi đó a\nb modp=a·b −1 modp. Vậy bài toán quy về: tìmb−1 modp.\n3. Tìm nghịch đảo modulo\nĐịnh nghĩa:a−1 modplà sốx∈[1,p−1]thỏaa·x≡1 (modp).\nĐiều kiện tồn tại:gcd(a,p) = 1. Khiplà số nguyên tố và1≤a<pthì luôn tồn tại.\n3.0. Cách \"trâu bò\": thử lần lượt\nVớipnhỏ, ta thửx= 1,2,3,...,p−1xem cái nào nhân vớiara1 modp:\nTìm3−1 mod 7:\nX 3·Xmod 7\n1 3\n2 6\n3 2\n4 5\n5 1✓\n→3−1≡5 (mod 7). Kiểm tra:3·5 = 15 = 2·7 + 1, đúng!\nCách nàyO(p)- quá chậm vớip= 10 9 + 7. Ta cần công cụ tốt hơn.\n3.1. Bằng định lý Fermat (khipnguyên tố)\nap−1≡1 (modp)\nSuy ra:a·a p−2≡1 (modp), tứca p−2 chính là nghịch đảo củaa:\na−1≡a p−2 (modp)\nÁp dụng choa= 3,p= 7:3 −1≡3 5 (mod 7).\nTính từng bước:32 = 9≡2,3 4 = 22 = 4,3 5 = 34·3 = 4·3 = 12≡5 (mod 7)- khớp với cách\ntrâu bò!\nTính bằng lũy thừa nhanh -O(logp)nhanh chóng mặt:\nC++\nlong long power ( long long a , long long b , long long p ) {\nlong long res = 1; a %= p ;\nwhile ( b > 0) {\nif ( b & 1) res = res * a % p ;\na = a * a % p ;\nb > >= 1;\n}\nreturn res ;\n}\nlong long inv ( long long a , long long p ) {\nreturn power (a , p - 2 , p ) ;\n}\nPython\ndef power (a , b , p ) :\nreturn pow (a , b , p )# pow (a , b , p ) la built - in : O ( log b )\ndef inv (a , p ) :\nreturn pow (a , p - 2 , p )# hoac pow (a , -1 , p ) ( Python 3.8+)\n3.2. Khipkhông nguyên tố - Extended Euclid\nKhipkhông nguyên tố (vẫn yêu cầugcd(a,p) = 1), Fermat không áp dụng được. Cách tổng\nquát là thuật toán Euclid mở rộng (extended Euclid): giảiax+py= 1, khi đóxmodpchính\nlà nghịch đảo.\nTuy nhiên,99%bài CP dùngpnguyên tố (thường là10 9 + 7), Fermat là đủ.\n4. Tổ hợpC(n,k)- định nghĩa & tính chất\nĐịnh nghĩa:C(n,k)(đọc là \"tổ hợp chậpkcủan\", còn ký hiệu\n\u0000n\nk\n\u0001\n) là số cách chọnkphần tử\ntừ một tậpnphần tử mà không quan tâm thứ tự.\nVí dụ:C(4,2) = 6- từ tập {A, B, C, D} có 6 cách chọn 2 phần tử: {AB, AC, AD, BC, BD,\nCD}.\nCông thức:\nC(n,k) = n!\nk!·(n−k)! (0≤k≤n)\nQuy ướcC(n,k) = 0khik <0hoặck >n.\nKiểm tra:C(5,2) = 5!\n2!·3! = 120\n2·6 = 10(Từ {1, 2, 3, 4, 5} chọn 2 số: 10 cách).\nVài tính chất hay dùng:\n• C(n,0) =C(n,n) = 1\n• C(n,k) =C(n,n−k)(đối xứng - chọnkphần tử \"vào\"giống chọnn−kphần tử \"ra\").\n• C(n,k) =C(n−1,k−1) +C(n−1,k)(tam giác Pascal).\nTam giác Pascal (mỗi số = tổng 2 số ngay trên):\nn= 0: 1\nn= 1: 1 1\nn= 2: 1 2 1\nn= 3: 1 3 3 1\nn= 4: 1 4 6 4 1\nn= 5: 1 5 10 10 5 1\nHàngn, cộtkchính làC(n,k). Pascal cho ta cách tínhC(n,k)bằng DPO(n 2)- đủ khi\nn≤5000. Khinlớn hơn, ta cần cáchO(1)/truy vấn.\n5. TínhC(n,k) modptrongO(1)sau tiền xử lýO(n)\nModulop, ta không chia trực tiếp được - phải nhân với nghịch đảo của giai thừa (mục 3). Tiền\ntính:\nfact[i] =i! modp\ninv_fact[i] = (i!)−1 modp\nKhi đó:\nC(n,k) modp=fact[n]·inv_fact[k]·inv_fact[n−k] modp\nCode chuẩn:\nC++\nconst int N = 200005;\nconst long long MOD = 1 0 0 0 0 0 0 0 0 7 ;\nlong long fact [ N ] , inv_fact [ N ];\nvoid p r e c o m p u t e () {\nfact [0] = 1;\nfor ( int i = 1; i < N ; i ++) fact [ i ] = fact [ i - 1] * i % MOD ;\ninv_fact [ N - 1] = power ( fact [ N - 1] , MOD - 2 , MOD ) ;\nfor ( int i = N - 2; i >= 0; i - -)\ninv_fact [ i ] = inv_fact [ i + 1] * ( i + 1) % MOD ;\n}\nlong long combi ( int n , int k ) {\nif ( k < 0 || k > n ) return 0;\nreturn fact [ n ] * inv_fact [ k ] % MOD * inv_fact [ n - k ] % MOD ;\n}\nPython\nMOD = 1 0 0 0 0 0 0 0 0 7\nfact = [1] * N\nfor i in range (1 , N ) :\nfact [ i ] = fact [ i - 1] * i % MOD\ninv_fact = [1] * N\ninv_fact [ N - 1] = pow ( fact [ N - 1] , MOD - 2 , MOD )\nfor i in range ( N - 2 , -1 , -1) :\ninv_fact [ i ] = inv_fact [ i + 1] * ( i + 1) % MOD\ndef combi (n , k ) :\nif k < 0 or k > n : return 0\nreturn fact [ n ] * inv_fact [ k ] % MOD * inv_fact [ n - k ] % MOD\nTrick quan trọng - tại sao buildinv_factngược? Cách \"ngây thơ\"là gọi Fermat cho từng\ninv_fact[i]→O(nlogp). Cách thông minh: tínhinv_fact[N-1]một lần bằng Fermat, rồi\ntruy hồi ngược:\ninv_fact[i] =inv_fact[i+ 1]·(i+ 1) modp\nTại sao đúng?(i+ 1)! = (i+ 1)·i!, lấy nghịch đảo cả hai vế: 1\ni! = (i+ 1)· 1\n(i+1)!, vậy toàn bộ\ntiền xử lý chỉO(n+ logp).\nBẫy: nhớ dùngfact[n](KHÔNG phảifact[k]) ở thừa số đầu - nhầm vị trí là sai ngay.\nỨng dụng phổ biến:\n• Đếm số cách chọn / sắp xếp.\n• Đếm số đường đi trên lướin×m(chỉ đi phải / xuống)=C(n+m,n).\n• Đếm số dãy thỏa điều kiện tổ hợp.\n6. Sàng tuyến tính & Smallest Prime Factor (SPF)\nSàng tuyến tínhO(n)có một lợi thế lớn: nó tự nhiên cho ta ước nguyên tố nhỏ nhất (smallest\nprime factor, SPF) của mỗi số, giúp phân tích thừa số nguyên tố trongO(logn).\nTrace vớiN= 12- sàng tuyến tính cho ta:\ni 2 3 4 5 6 7 8 9 10 11 12\nspf[i] 2 3 2 5 2 7 2 3 2 11 2\nĐể phân tíchx= 12:\n• spf[12] = 2→12 = 2·6.\n• spf[6] = 2→6 = 2·3.\n• spf[3] = 3→3 = 3·1.\n• Dừng. Kết quả:12 = 2 2·3. Mỗi bước chỉ tốnO(1).\nC++\nint spf [ N ];// smallest prime factor\nvector < int > primes ;\nvoid l i n e a r _ s i e v e () {\nfor ( int i = 2; i < N ; i ++) {\nif ( spf [ i ] == 0) {// i la so nguyen to\nspf [ i ] = i ;\nprimes . p ush _b ac k ( i ) ;\n}\nfor ( int p : primes ) {\nif (( long long ) p * i >= N ) break ;\nspf [ p * i ] = p ;// diem mau chot : moi so \" rot \" dung 1 lan\nif ( i % p == 0) break ;\n}\n}\n}\n// Phan tich nhanh nho SPF\nvector < pair < int , int > > factor ( int x ) {\nvector < pair < int , int > > res ;\nwhile ( x > 1) {\nint p = spf [ x ] , cnt = 0;\nwhile ( x % p == 0) { x /= p ; cnt ++; }\nres . pus h_ ba ck ({ p , cnt }) ;\n}\nreturn res ;\n}\nPython\nspf = [0] * N\nprimes = []\nfor i in range (2 , N ) :\nif spf [ i ] == 0:\nspf [ i ] = i\nprimes . append ( i )\nfor p in primes :\nif p * i >= N : break\nspf [ p * i ] = p\nif i % p == 0: break\ndef factor ( x ) :\nres = []\nwhile x > 1:\np = spf [ x ]; cnt = 0\nwhile x % p == 0:\nx //= p ; cnt += 1\nres . append (( p , cnt ) )\nreturn res\nƯu điểm so với phân tích thử chiaO(√n): nếu bạn cần phân tích nhiều số≤106 (ví dụ10 6\nsố), SPF tổng cộng chỉO(n+Qlogn)- nhanh hơn hẳn.\n7. Bù trừ (Inclusion-Exclusion)\n7.1. Vấn đề đặt ra\nĐề mẫu: Đếm số nguyên trong[1,n]chia hết cho ít nhất một trongp1,p 2,...,p k (vớip i là các\nsố nguyên tố phân biệt,knhỏ).\nVí dụ rất nhỏ:n= 30,p={2,3}. Liệt kê các số chia hết cho 2 hoặc 3 trong[1,30]:\n{2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 26, 27, 28, 30} - đúng 20 số.\nNếun= 10 18, không thể liệt kê. Cần công thức.\n7.2. Bù trừ cho 2 tập\nGọiA=tập số chia hết cho 2,B=tập số chia hết cho 3. Ta cần|A∪B|.\n|A∪B|=|A|+|B|−|A∩B|\nVớin= 30:|A|=⌊30/2⌋= 15,|B|=⌊30/3⌋= 10,|A∩B|=⌊30/6⌋= 5(bội chung là bội của\nlcm(2,3) = 6).\n|A∪B|= 15 + 10−5 = 20\n7.3. Bù trừ cho 3 tập\nVới 3 tậpA,B,C, áp dụng tương tự nhưng phức tạp hơn - phần \"chung 3\"bị trừ 3 lần (qua 3\ncặpA∩B,A∩C,B∩C) sau khi đã được cộng 3 lần, nên phải cộng bù lại 1 lần:\n|A∪B∪C|=|A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|\nVí dụ:n= 30,p={2,3,5}:\n• |A|= 15,|B|= 10,|C|= 6\n• |A∩B|= 5(bội 6),|A∩C|= 3(bội 10),|B∩C|= 2(bội 15)\n• |A∩B∩C|= 1(bội 30)\n• Tổng:15 + 10 + 6−5−3−2 + 1 = 22\n7.4. Công thức tổng quát\n\f\f\f\f\f\nk[\ni=1\nAi\n\f\f\f\f\f =\nX\n∅̸=S⊆{1,...,k}\n(−1)|S|+1·\n\f\f\f\f\f\n\\\ni∈S\nAi\n\f\f\f\f\f\nTập con cỡ lẻ - dấu cộng; cỡ chẵn - dấu trừ.\nVìp i là số nguyên tố phân biệt,|Ai1∩···∩A it|=⌊n/(p i1pi2...p it)⌋.\n7.5. Cài đặt bằng bitmask\nVớiknhỏ (≤20), duyệt2 k tập con bằng bitmask: mỗi mask (từ 1 đến2k−1) biểu diễn tập\ncon{i:bit i(mask) = 1}; dấu là+nếu số bit lẻ,−nếu chẵn.\nC++\nint k = p . size () ;\nlong long ans = 0;\nfor ( int mask = 1; mask < (1 << k ) ; mask ++) {\nlong long prod = 1;\nint bits = _ _ b u i l t i n _ p o p c o u n t ( mask ) ;\nbool overflow = false ;\nfor ( int i = 0; i < k ; i ++) {\nif ( mask >> i & 1) {\nif ( prod > n / p [ i ]) { overflow = true ; break ; }\nprod *= p [ i ];\n}\n}\nif ( overflow ) continue ;\nlong long term = n / prod ;\nans += ( bits % 2 == 1) ? term : - term ;\n}\nreturn ans ;\nPython\ndef c o u n t _ m u l t i p l e s (n , p ) :\nk = len ( p )\nans = 0\nfor mask in range (1 , 1 << k ) :\nprod = 1; bits = 0\nfor i in range ( k ) :\nif mask >> i & 1:\nprod *= p [ i ]; bits += 1\nif prod > n : prod = n + 1; break# tranh overflow /\ntich qua lon\nterm = n // prod if prod <= n else 0\nans += term if bits % 2 == 1 else - term\nreturn ans\nTrace tay với *n*= 30,p={2,3}(k= 2):\nMask (nhị phân) Bits Tập conS Tích prod ⌊n/prod⌋ Đóng góp vào ans\n01 1 {2} 2 15 +15\n10 1 {3} 3 10 +10\n11 2 {2, 3} 6 5 −5\nTổng:15 + 10−5 = 20- khớp với cách liệt kê ở 7.1.\nKhái quát: bù trừ là kỹ thuật \"đếm có chồng chéo\"- xuất hiện trong rất nhiều bài đếm (đếm\nhoán vị thỏa điều kiện, đếm bộ số nguyên tố cùng nhau, ...).\n7.6. Ứng dụng kinh điển: Đếm hoán vị không bất động (derangement)\nĐề: Đếm số hoán vịπcủa{1,2,...,n}sao choπ(i)̸=ivới mọii(không có \"điểm bất động\").\nGọi số đó làDn.\nÁp dụng IE: GọiAi =tập hoán vị cóπ(i) =i. Ta cầnn!−|A 1∪A 2∪···∪A n|.\nVới một tập conScỡt,| T\ni∈SAi|= (n−t)!(cố địnhtđiểm bất động, hoán vị tự don−tđiểm\ncòn lại). Số tập con cỡtlàC(n,t). Áp dụng IE:\nDn =n!−\nnX\nt=1\n(−1)t+1C(n,t)(n−t)! =n!\nnX\nt=0\n(−1)t\nt!\nCode: tính trực tiếp tổng trên, hoặc dùng truy hồiDn = (n−1)(D n−1 +D n−2).\n8. Mẫu kết hợp: đếm dãy cókphần tử \"đặc biệt\"\nBài toán: Có bảng chữ cái với|Σ|=ský tự. Một ký tự được coi là \"đặc biệt\". Đếm số dãy độ\ndàinsao cho có đúngkvị trí mang ký tự đặc biệt.\nPhân tích:\n1. Chọnkvị trí (trongnvị trí) để đặt ký tự đặc biệt:C(n,k)cách.\n2. Mỗi vị trí trongn−kvị trí còn lại cós−1lựa chọn (mọi ký tự trừ ký tự đặc biệt):(s−1)n−k\ncách.\nĐáp án:C(n,k)·(s−1) n−k modp.\nVí dụ cụ thể với *n*= 4,k= 2,s= 3(bảng chữ {a, b, c}, đặc biệt = a):\n• C(4,2) = 6cách chọn vị trí cho a.\n• (3−1) 4−2 = 22 = 4cách điền b, c vào 2 vị trí còn lại.\nTổng:6·4 = 24dãy.\nC(n,k)lấy từ tiền tính (mục 5),(s−1) n−k tính bằng lũy thừa nhanh→tổng cộngO(logp)/\ntruy vấn. Đây là \"form\"gặp liên tục ở các bài đếm.\n9. Bẫy thường gặp\n• Quên chuẩn hoá sau phép trừ: dùng((a - b) % p + p) % p.\n• Trànlong longkhi nhân: nếup≈10 9, hai số< pnhân lại<10 18 - vẫn vừalong long\nnhưng sát ngưỡng; cẩn thận với các bước cộng dồn.\n• Áp dụng Fermat khipkhông nguyên tố: sai. Khi đó cần extended Euclid (khoá Vàng) hoặc\ntránh chia.\n• TínhC(n,k)khik >nhoặck <0phải trả 0.\n• Sàng chonquá lớn:N= 10 7 sàng tuyến tính chiếm∼40MB chointarray - coi giới hạn\nbộ nhớ.\n• Bù trừ với quá nhiều tập (k >25):2k bùng nổ - phải đổi cách (DP, M¨ obius).\n10. Tổng kết\nCÔNG CỤ KHI DÙNG CHI PHÍ\nModular inverse (Fermat) Chia modpnguyên tố O(logp)\nPrecomputeC(n, k) Cần nhiềuCtrong cùng bài O(n)tiền+O(1)truy vấn\nLinear sieve + SPF Phân tích nhiều số O(n)sàng+O(logx)/ số\nInclusion-Exclusion Đếm \"ít nhất 1 trongk\" O(2k)",
        "coreConcepts": [
          "Độ phức tạp Big O",
          "Tối ưu giải thuật",
          "Cấu trúc dữ liệu chuẩn",
          "Cài đặt C++ tối ưu"
        ],
        "problems": [
          {
            "id": "c2-b12-p1-04-ph-n-t-ch-th-a-s-nguy-n-t",
            "title": "#04 - Phân tích thừa số nguyên tố",
            "fileName": "#04 - Phân tích thừa số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1300,
            "preview": "Bài toán #04 - Phân tích thừa số nguyên tố. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/#04 - Phân tích thừa số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có t số n 1, n 2, …, n t, hãy phân tích t số đấy thành thừa số nguyên tố.\nCụ thể, với số n bất kỳ, hãy phân tích n thành thừa số nguyên tố, và sau đó thu gọn lại với\nnguyên tắc như sau:\n• Các thừa số nguyên tố được sắp xếp tăng dần từ trái sang phải\n• Nếu thừa số p xuất hiện k > 1 lần, ta thu gọn lại thành k p.\nVì chúng ta đang in ra màn hình console, nên ta sẽ thay ký tự ^ thay cho phép lũy thừa, và\nký tự * thay cho phép nhân.\nVí dụ:\nN ĐÁP ÁN\n2 2\n16 2^4\n45 3^2*5\n95256 2^3*3^5*7^2\nDữ liệu đầu vào\n• Dòng đầu tiên chứa số t (t ≤ 100000)\n• n dòng tiếp theo, dòng thứ i chứa số n i (2 ≤ n i ≤ 1 0 7).\nĐịnh dạng đầu ra\n• In ra n dòng, dòng thứ i in ra phân tích thừa số nguyên tố rút gọn theo quy tắc trên của\nn i.\nĐiểm số\n• Subtask 1 (60% số điểm): n i, t ≤ 1000\n• Subtask n (100% số điểm): không có giới hạn nào khác",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n2\n16\n45\n95256",
            "sampleOutput": "2\n2^4\n3^2*5\n2^3*3^5*7^2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n2\n16\n45\n95256",
                "output": "2\n2^4\n3^2*5\n2^3*3^5*7^2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p2-binomial-coefficients",
            "title": "Binomial Coefficients",
            "fileName": "CSES - Binomial Coefficients _ Hệ số nhị thức - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Binomial Coefficients. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Binomial Coefficients _ Hệ số nhị thức - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là tính toán n hệ số nhị thức chia lấy dư cho 10^9 + 7.\nMột hệ số nhị thức (a) có thể được tính toán bằng công thức a !. Chúng ta giả định rằng\nb b ! (a − b)!\na và b là những số nguyên và 0 ≤ b ≤ a.\n\nInput\n• Dòng đầu vào đầu tiên chứa một số nguyên n: số lượng tính toán\n• Sau đó, có n dòng, mỗi dòng chứa hai số nguyên a và b\n\nOutput\n• In mỗi hệ số nhị thức chia lấy dư cho 10^9 + 7\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 0 ≤ b ≤ a ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n5 3\n8 1\n9 5",
            "sampleOutput": "10\n8\n126",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n5 3\n8 1\n9 5",
                "output": "10\n8\n126"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p3-bracket-sequences-i",
            "title": "Bracket Sequences I",
            "fileName": "CSES - Bracket Sequences I _ Dãy ngoặc I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Bracket Sequences I. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Bracket Sequences I _ Dãy ngoặc I - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Nhiệm vụ của bạn là tính toán số dãy ngoặc hợp lệ có độ dài n. Ví dụ: khi n = 6, có 5 dãy:\n• ()()()\n• ()(())\n• (())()\n• ((()))\n• (()())\n\nInput\n• Dòng đầu vào duy nhất có số nguyên n (1 ≤ n ≤ 10^6)\n\nOutput\n• In số lượng dãy chia lấy dư cho 10^9 + 7",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "6",
            "sampleOutput": "5",
            "testCases": [
              {
                "id": "Test 1",
                "input": "6",
                "output": "5"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p4-creating-strings-ii",
            "title": "Creating Strings II",
            "fileName": "CSES - Creating Strings II _ Tạo xâu II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Creating Strings II. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Creating Strings II _ Tạo xâu II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một xâu, nhiệm vụ của bạn là tính toán số lượng các xâu khác nhau có thể được tạo\nthành bằng các kí tự của nó.\n\nInput\n• Dòng đầu vào duy nhất có một xâu độ dài n. Mỗi kí tự nằm giữa a - z.\n\nOutput\n• In số lượng xâu khác nhau chia lấy dư cho 10^9 + 7.\n\nScoring\n• 1 ≤ n ≤ 10^6",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "aabac",
            "sampleOutput": "20",
            "testCases": [
              {
                "id": "Test 1",
                "input": "aabac",
                "output": "20"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p5-distributing-apples",
            "title": "Distributing Apples",
            "fileName": "CSES - Distributing Apples _ Phân phối táo - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Distributing Apples. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Distributing Apples _ Phân phối táo - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có n đứa trẻ và m quả táo sẽ được phân phối cho chúng. Nhiệm vụ của bạn là đếm số cách\nnày có thể được thực hiện.\nVí dụ: nếu n = 3 và m = 2, có 6 cách: [ 0, 0, 2 ], [ 0, 1, 1 ], [ 0, 2, 0 ], [ 1, 0, 1 ], [ 1, 1, 0 ] và\n[ 2, 0, 0 ].\n\nInput\n• Dòng đầu vào duy nhất có hai số nguyên n và m\n• 1 ≤ n, m ≤ 10^6\n\nOutput\n• In số lượng cách chia lấy cho 10^9 + 7",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 2",
            "sampleOutput": "6",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 2",
                "output": "6"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p6-exponentiation-ii",
            "title": "Exponentiation II",
            "fileName": "CSES - Exponentiation II _ Lũy thừa II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1300,
            "preview": "Bài toán Exponentiation II. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Exponentiation II _ Lũy thừa II - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Việc của bạn là tính toán hiệu quả giá trị a b c modulo 10^9 + 7.\nLưu ý rằng trong bài này, ta cho rằng 0 0 = 1.\n\nInput\n• Dòng đầu tiên là một số nguyên n: số lượng phép tính\n• Tiếp theo là n dòng, mỗi dòng chứa ba số nguyên a, b và c\n\nOutput\n• In ra từng giá trị a b c modulo 10^9 + 7\n\nScoring\n• 1 ≤ n ≤ 10^5\n• 1 ≤ a, b, c ≤ 10^9",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3\n3 7 1\n15 2 2\n3 4 5",
            "sampleOutput": "2187\n50625\n763327764",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3\n3 7 1\n15 2 2\n3 4 5",
                "output": "2187\n50625\n763327764"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p7-grid-paths",
            "title": "Grid Paths",
            "fileName": "CSES - Grid Paths _ Đường đi trên lưới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1900,
            "preview": "Bài toán Grid Paths. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Grid Paths _ Đường đi trên lưới - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một lưới n × n với ô vuông trên cùng bên trái là (1, 1) và ô vuông dưới cùng bên phải\nlà (n, n).\nNhiệm vụ của bạn là di chuyển từ ô trên cùng bên trái sang ô dưới cùng bên phải. Trên mỗi\nbước, bạn có thể di chuyển một ô sang phải hoặc xuống dưới. Ngoài ra, có m bẫy trong lưới.\nBạn không thể di chuyển đến một ô có bẫy.\nTổng số cách có thể di chuyển được là bao nhiêu?\n\nInput\n• Dòng đầu tiên chứa hai số nguyên n và m: kích thước mảng và số lượng bẫy\n• m dòng tiếp theo mô tả các bẫy. Mỗi dòng chứa hai số nguyên y và x: vị trí của một cái\nbẫy\n• Dữ liệu đảm bảo không có bẫy trong hình vuông trên cùng bên trái và dưới cùng bên\nphải\n\nOutput\n• Một dòng duy nhất chứa tổng số cách di chuyển sau khi modulo cho 10^9 + 7\n\nScoring\n• 1 ≤ n ≤ 10^6\n• 1 ≤ m ≤ 1000\n• 1 ≤ y, x ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 1\n2 2",
            "sampleOutput": "2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 1\n2 2",
                "output": "2"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p8-prime-multiples",
            "title": "Prime Multiples",
            "fileName": "CSES - Prime Multiples _ Bội số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1400,
            "preview": "Bài toán Prime Multiples. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/CSES - Prime Multiples _ Bội số nguyên tố - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Bạn được cho k số nguyên tố phân biệt a 1, a 2, …, a k và một số nguyên n.\nNhiệm vụ của bạn là tính toán có bao nhiêu trong n số nguyên dương đầu tiên chia hết cho\nít nhất một trong các số nguyên tố đã cho.\n\nInput\n• Dòng đầu vào đầu tiên có hai số nguyên n và k\n• Dòng thứ hai có k số nguyên tố a 1, a 2, …, a k\n\nOutput\n• In một số nguyên: số lượng số nguyên trong khoảng 1, 2, …, n chia hết cho ít nhất\nmột trong các số nguyên tố.\n\nScoring\n• 1 ≤ n ≤ 10^{18}\n• 1 ≤ k ≤ 20\n• 2 ≤ a i ≤ n",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "20 2\n2 5",
            "sampleOutput": "12",
            "testCases": [
              {
                "id": "Test 1",
                "input": "20 2\n2 5",
                "output": "12"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p9-chia-h-t-cho-abc",
            "title": "Chia hết cho ABC",
            "fileName": "Chia hết cho ABC - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1000,
            "preview": "Bài toán Chia hết cho ABC. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/Chia hết cho ABC - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Có bao nhiêu số nguyên dương không lớn hơn n chia hết cho một trong ba số a, b hoặc c ?\n\nInput\n• Dòng đầu tiên chứa duy nhất số nguyên dương n (n ≤ 10^{18}).\n• Dòng thứ hai lần lượt chứa ba số nguyên dương a, b, c (1 ≤ a, b, c ≤ 10^6).\n\nOutput\n• Một số duy nhất là đáp án cần tìm.\n\nScoring\n• Subtask 1 (40% số điểm): n ≤ 10^6.\n• Subtask 2 (30% số điểm): m i n (n a, b, c) ≤ 10^6.\n• Subtask 3 (30% số điểm): Không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "10\n2 5 3",
            "sampleOutput": "8",
            "testCases": [
              {
                "id": "Test 1",
                "input": "10\n2 5 3",
                "output": "8"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p10-ho-n-v-kh-ng-b-t-ng-thtc-v-ng-khu-v-c-2021",
            "title": "Hoán vị không bất động (THTC Vòng Khu vực 2021)",
            "fileName": "Hoán vị không bất động (THTC Vòng Khu vực 2021) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1600,
            "preview": "Bài toán Hoán vị không bất động (THTC Vòng Khu vực 2021). Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/Hoán vị không bất động (THTC Vòng Khu vực 2021) - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Huấn luyện viên của đội hành tinh Z biết rằng, đội Trái Đất đã nắm rõ các chỉ số thể lực và chỉ\nsố kĩ thuật của các vận động viên đội mình, vì vậy ông ta quyết định thay đổi số áo nhằm làm\nsai lệch những tính toán của đội Trái đất.\nĐội hành tinh Z có m vận động viên đánh số từ 1 tới m, ban đầu vận động viên thứ i mang\nsố áo là i (1 ≤ i ≤ m). Huấn luyện viên chọn T đoạn, đoạn thứ s (1 ≤ s ≤ T) mô tả bằng\ncặp số L s, R s (1 ≤ L s ≤ R s ≤ m), rồi hoán vị số áo của các vận động viên (có thể cả m\nvận động viên) sao cho tất cả các vận động viên có số áo nằm trong một trong T đoạn phải\nmang số áo khác với số áo ban đầu của mình. Cụ thể, với một vận động viên mang số áo i\nmà tồn tại s (1 ≤ s ≤ T) để L s ≤ i ≤ R s thì sau khi hoán vị vận động viên này phải mang\nsố áo khác với số áo ban đầu của mình.\nYêu cầu: Hãy cho biết huấn luyện viên của đội hành tinh Z có bao nhiêu cách khác nhau để\nhoán vị số áo cho các vận động viên theo quy tắc trên, hai cách hoán vị số áo được gọi là\nkhác nhau nếu có một vận động viên mang hai số áo khác nhau trong hai cách hoán vị.\n\nInput\nVào từ thiết bị vào chuẩn theo khuôn dạng:\n• Dòng đầu chứa số nguyên dương m, T.\n• Dòng thứ s (1 ≤ s ≤ T) trong T dòng tiếp theo chứa hai số nguyên dương\nL s, R s (1 ≤ L s ≤ R s ≤ m).\n\nOutput\n• Ghi ra thiết bị ra chuẩn gồm một dòng chứa một số nguyên duy nhất là số dư của phép\nchia: số cách hoán vị số áo cho (10^9 + 7).\n\nScoring\n• Subtask 1 (20% số điểm): m ≤ 10 và T = 0;\n• Subtask 2 (20% số điểm): m ≤ 10 và T = 1;\n• Subtask 3 (20% số điểm): m ≤ 1 0 3 và T = 1; R 1 − L 1 ≤ 10;\n• Subtask 4 (20% số điểm): m ≤ 1 0 3 và T ≤ 1 0 3;\n• Subtask 5 (20% số điểm): m ≤ 10^5 và T ≤ 1 0 3.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "3 1\n1 2",
            "sampleOutput": "3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "3 1\n1 2",
                "output": "3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p11-h-s-b-c-k-xem-pdf",
            "title": "H ệ  s ố  b ậ c k  Xem PDF",
            "fileName": "Hệ số bậc k - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "1GB",
            "point": 1200,
            "preview": "Bài toán H ệ  s ố  b ậ c k  Xem PDF. Giới hạn thời gian 1.0s, bộ nhớ 1GB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/Hệ số bậc k - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "H ệ s ố b ậ c k  Xem PDF\nNộp bài \n T ấ t c ả bài n ộ p\n Các bài n ộ p t ố t\nnh ấ t\n Tác gi ả:\n_minhduc\n〉 D ạ ng bài\n〉\nNgôn ng ữ cho\nphép\nAssembly, Awk, C,\nC#, C++, Clang,\nCobol, D, Groovy,\nHaskell, JS, Java,\nKotlin, Lua, Node JS,\nOCaml, ObjectiveC,\nOutput, PHP, Pascal,\nPerl, Prolog, Pypy,\nPypy 3, Python,\nRuby, Rust, Scala,\nScratch, Swift\n✓ Điểm: 1200 (p)  Thời gian: 1.0s  Bộ nhớ: 1G\n Input: calkexp.inp  Output: calkexp.out\nXét biểu thức sau: (x + a) n (với a, n là số được cho).\nYêu cầu: Khai triển biểu thức trên, tính hệ số bậc k ?\n\nInput\n• Một dòng chứa ba số nguyên a, n, k (0 ≤ a ≤ 10^9; 1 ≤ n ≤ 2 × 10^5; 0 ≤ k ≤ n).\n\nOutput\n• Một dòng chứa một số nguyên duy nhất là kết quả bài toán, do kết quả có thể rất lớn,\nbạn cần đưa ra kết quả chia lấy phần dư cho 10^9 + 7.\n\nScoring\n • Subtask 1 (25% số điểm): a = 1, n ≤ 10.   Ti ế ng Vi ệ t ⏾ ⌄\n• Subtask 2 (25% số điểm): n ≤ 10.\n• Subtask 3 (25% số điểm): a = 1.\n• Subtask 4 (25% số điểm): không có ràng buộc gì thêm.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "1 2 1",
            "sampleOutput": "2\n1 / 5 80%\n\n\n 0        Ti ế ng Vi ệ t  ⏾ ⌄\nBài t ậ p g ợ i ý:\n•  USACO 2016Jan Gold - Angry Cows\n•  Tìm cặp (THT TQ 2019)\n•  Một bài tập thú vị về chữ số\n•  Số 2020\n•  LQDOJ Contest #6 - Bài 1 - Quãng Đẹp\n•  Tổng tích trên dãy\n•  Tô màu tất cả\n•  Quý chia kẹo\nproudly powered by DMOJ | developed by LQDJudge team Tiếng Việt (vi)",
            "testCases": [
              {
                "id": "Test 1",
                "input": "1 2 1",
                "output": "2\n1 / 5 80%\n\n\n 0        Ti ế ng Vi ệ t  ⏾ ⌄\nBài t ậ p g ợ i ý:\n•  USACO 2016Jan Gold - Angry Cows\n•  Tìm cặp (THT TQ 2019)\n•  Một bài tập thú vị về chữ số\n•  Số 2020\n•  LQDOJ Contest #6 - Bài 1 - Quãng Đẹp\n•  Tổng tích trên dãy\n•  Tô màu tất cả\n•  Quý chia kẹo\nproudly powered by DMOJ | developed by LQDJudge team Tiếng Việt (vi)"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p12-ln-ng-m-trai",
            "title": "LN ngắm trai",
            "fileName": "LN ngắm trai - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "1.0s",
            "memoryLimit": "256MB",
            "point": 1800,
            "preview": "Bài toán LN ngắm trai. Giới hạn thời gian 1.0s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/LN ngắm trai - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Cho một bàn cờ m × n và 1 con hậu trên bàn cờ. LN tưởng tượng mình là con hậu và muốn\nđặt k con vua lên bàn cờ. LN muốn k con vua ở các vị trí khác nhau và con hậu ngắm nhìn\nđược nhiều con vua nhất. Một con vua nằm trong tầm ngắm của con hậu nếu nó 2 quân nằm\ntrên cùng 1 hàng, cột hoặc đường chéo, đồng thời giữa chúng không có con vua nào cản\nđường. LN tự hỏi con hậu có thể ngắm được nhiều nhất bao nhiêu con vua. ami cảm thấy bài\ntoán quá đơn giản nên thêm vào: Có bao nhiêu cách xếp để con hậu ngắm được nhiều con\nvua nhất?\nHai cách xếp được gọi là khác nhau nếu có một ô cờ mà trong cách xếp này có vua, và trong\ncách kia không có vua.\n\nInput\n• Dòng đầu tiên chứa 3 số nguyên dương m, n, k (1 ≤ m, n ≤ 1000; 1 ≤ k < mn)\n• Dòng thứ hai chứa 2 số nguyên dương x, y (1 ≤ x ≤ m, 1 ≤ y ≤ n) - vị trí của con\nhậu\n\nOutput\n• In ra 2 số nguyên dương a, b trên 1 dòng. Trong đó a là số con vua tối đa LN có thể\nngắm, b là số cách xếp để LN ngắm được nhiều con vua nhất sau khi mod 10^9 + 7\n\nScoring\n• Subtask 1 (10% số điểm): m = 1\n• Subtask 2 (10% số điểm): m, n ≤ 4\n• Subtask 3 (10% số điểm): m, n ≤ 20; k ≤ 3\n• Subtask 4 (10% số điểm): m, n ≤ 20\n• Subtask 5 (10% số điểm): m, n ≤ 100\n• Subtask 6 (50% số điểm): m, n ≤ 1000",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 2 2\n1 1",
            "sampleOutput": "2 3",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 2 2\n1 1",
                "output": "2 3"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p13-l-y-th-a-nhi-u-l-n",
            "title": "Lũy thừa nhiều lần",
            "fileName": "Lũy thừa nhiều lần - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "Chuyên Tin",
            "timeLimit": "0.5s",
            "memoryLimit": "256MB",
            "point": 1200,
            "preview": "Bài toán Lũy thừa nhiều lần. Giới hạn thời gian 0.5s, bộ nhớ 256MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/Lũy thừa nhiều lần - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "Các bạn học sinh tại trường tiểu học L làm bài quá nhanh chóng, hiện tại đang đòi một bài\ntập thử thách hơn. Nên tôi bảo các bạn ấy tính cái này. Cho số X = (⋯ ((a a 1 2) a 3) a 4 ⋯) a n.\nSau khi đem X chia lấy dư cho 2004010^501 thì được kết quả là bao nhiêu?.\nNói cách khác, bạn được cho dãy a gồm n số nguyên dương lớn hơn 1. Bạn lấy số thứ nhất\nlũy thừa cho số thứ hai, xong lại lấy kết quả đem đi lũy thừa cho số thứ ba, rồi lại lấy kết quả\nđem đi lũy thừa cho số thứ tư,..., cứ như thế cho tới số cuối cùng.\nƠ nhưng đây là bài tập của mấy bạn ấy mà, sao các bạn lại phải code nhỉ? Dù sao cũng lỡ rồi\nnên các bạn cứ làm đi nhé.\n\nInput\n• Dòng đầu chứa số n, 1 ≤ n ≤ 10^6.\n• Dòng tiếp chứa n số nguyên dương, trong đó 1 < a i ≤ 10^{18}\n\nOutput\n• Gồm một dòng duy nhất chứa kết quả",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "4\n2 3 4 5",
            "sampleOutput": "838811359",
            "testCases": [
              {
                "id": "Test 1",
                "input": "4\n2 3 4 5",
                "output": "838811359"
              }
            ],
            "totalTests": 1
          },
          {
            "id": "c2-b12-p14-th-a-s-nguy-n-t-nh-nh-t",
            "title": "Thừa số nguyên tố nhỏ nhất",
            "fileName": "Thừa số nguyên tố nhỏ nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "source": "HSG",
            "timeLimit": "1.0s",
            "memoryLimit": "512MB",
            "point": 1100,
            "preview": "Bài toán Thừa số nguyên tố nhỏ nhất. Giới hạn thời gian 1.0s, bộ nhớ 512MB.",
            "pdfUrl": "/cp-assets/chuong-2/Bài 12/Thừa số nguyên tố nhỏ nhất - LQDOJ_ Le Quy Don Online Judge.pdf",
            "problemContent": "JOIN TỔ CHỨC ĐỂ THAM GIA CÁC KÌ THI THỬ HSG 8,9 Bấm vào đây\nVới một số nguyên dương P (P ≥ 2), ta có thể phân tích P thành tích các thừa số nguyên\ntố, trong đó có một thừa số nguyên tố nhỏ nhất.\nVí dụ 100 = 2 × 2 × 5 × 5 thì 2 là thừa số nguyên tố nhỏ nhất của 100; 15 = 3 × 5 thì 3\nlà thừa số nguyên tố nhỏ nhất của 15; 17 = 17 thì 17 là thừa số nguyên tố nhỏ nhất của 17.\nCho trước một dãy gồm n số nguyên tố a 1, a 2,..., a n và một số nguyên dương k.\nYêu cầu: Đếm xem trong đoạn [ 2, k ] có bao nhiêu số nguyên có thừa số nguyên tố nhỏ nhất\nlà a i (1 ≤ i ≤ n)\n\nInput\n• Dòng thứ nhất chứa hai số nguyên dương n, k (1 < n ≤ 10^5, 2 ≤ k ≤ 10^6)\n• Dòng thứ 2 chứa n số nguyên tố a 1, a 2,..., a n (2 ≤ a i ≤ k, 1 ≤ i ≤ n).\n\nOutput\n• In ra n dòng với dòng thứ i là số lượng số nguyên trong đoạn [ 2, k ] có thừa số nguyên\ntố nhỏ nhất là a i.",
            "hasTestCases": true,
            "testCaseZipUrl": "",
            "solutionCodeUrl": "",
            "sampleInput": "2 10\n2 3",
            "sampleOutput": "5\n2",
            "testCases": [
              {
                "id": "Test 1",
                "input": "2 10\n2 3",
                "output": "5\n2"
              }
            ],
            "totalTests": 1
          }
        ]
      }
    ]
  }
};

export const getCPCourseData = (courseId: string): CPCourse | undefined => {
  return CP_COURSES_DATA[courseId];
};
