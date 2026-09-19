import os
import random
import zipfile

# Thuật toán Python tính kết quả Output chuẩn
def solve_kth_smallest(arr: list, k: int) -> int:
    sorted_arr = sorted(arr)
    return sorted_arr[k - 1]

# Các hàm tạo mảng theo từng loại test
def gen_test_data(cmd, n_val, seed):
    random.seed(seed)
    MAX_VAL = 10**8 * 10  # 10**9 (Sử dụng ** cho phép tính lũy thừa chính xác)
    
    if cmd == "min_1":
        return 1, 1, [random.randint(1, MAX_VAL)]
    elif cmd == "k_is_1":
        k = 1
        arr = [random.randint(1, MAX_VAL) for _ in range(n_val)]
        return n_val, k, arr
    elif cmd == "k_is_n":
        k = n_val
        arr = [random.randint(1, MAX_VAL) for _ in range(n_val)]
        return n_val, k, arr
    elif cmd == "sorted_asc":
        k = random.randint(1, n_val)
        arr = [random.randint(1, MAX_VAL) for _ in range(n_val)]
        arr.sort()
        return n_val, k, arr
    elif cmd == "sorted_desc":
        k = random.randint(1, n_val)
        arr = [random.randint(1, MAX_VAL) for _ in range(n_val)]
        arr.sort(reverse=True)
        return n_val, k, arr
    elif cmd == "all_same":
        k = random.randint(1, n_val)
        val = random.randint(1, MAX_VAL)
        return n_val, k, [val] * n_val
    elif cmd == "random":
        k = random.randint(1, n_val)
        arr = [random.randint(1, MAX_VAL) for _ in range(n_val)]
        return n_val, k, arr
    return n_val, 1, []

# Danh sách kịch bản test
commands = [
    ("min_1", 1, 1001),
    ("k_is_1", 10000, 1002),
    ("k_is_n", 10000, 1003),
    ("sorted_asc", 10000, 1004),
    ("sorted_desc", 10000, 1005),
    ("all_same", 10000, 1006),
    ("random", 10, 2001),
    ("random", 50, 2002),
    ("random", 100, 2003),
    ("random", 300, 3001),
    ("random", 600, 3002),
    ("random", 1000, 3003),
    ("random", 2500, 4001),
    ("random", 5000, 4002),
    ("random", 7500, 4003),
    ("random", 10000, 4004),
]

CPP_SOLUTION = """#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    if (!(cin >> n >> k)) return 0;

    vector<long long> a(n);
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
    }

    sort(a.begin(), a.end());

    cout << a[k - 1] << "\\n";

    return 0;
}
"""

def build_testcases():
    base_dir = "So_Nho_Thu_K_Tests"
    os.makedirs(base_dir, exist_ok=True)

    # Ghi file solution.cpp
    cpp_path = os.path.join(base_dir, "solution.cpp")
    with open(cpp_path, "w", encoding="utf-8") as f:
        f.write(CPP_SOLUTION)

    for idx, (cmd, n_val, seed) in enumerate(commands, 1):
        folder_name = f"Test{idx:02d}"
        test_dir = os.path.join(base_dir, folder_name)
        os.makedirs(test_dir, exist_ok=True)

        n, k, arr = gen_test_data(cmd, n_val, seed)

        # Ghi file input (.inp)
        inp_file = os.path.join(test_dir, "kthsmallest.inp")
        with open(inp_file, "w", encoding="utf-8") as f:
            f.write(f"{n} {k}\n")
            f.write(" ".join(map(str, arr)) + "\n")

        # Tính và ghi file output (.out)
        ans = solve_kth_smallest(arr, k)
        out_file = os.path.join(test_dir, "kthsmallest.out")
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(f"{ans}\n")

    # Nén file ZIP
    zip_path = "So_Nho_Thu_K_Testcases.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(base_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, start=base_dir)
                zipf.write(file_path, arcname)

    print(f"-> Đã tạo xong {len(commands)} testcases và đóng gói vào file '{zip_path}'!")

if __name__ == "__main__":
    build_testcases()
