// Dang nhap

let userName;
let password;
let falsePasswordCount=0;
do {
    userName=prompt("Mời bạn nhập tài khoản:");
    password=prompt("Mời bạn nhập mật khẩu:");
    if(userName==="admin" && password==="12345"){
        alert("Đăng nhập thành công!");
        break;
    }else{
        falsePasswordCount++;    
        if(userName!=="admin" && password!=="12345"){
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${3-falsePasswordCount} lần thử.`);
        }else if(password!=="12345"){
            alert(`Sai mật khẩu! Bạn còn ${3-falsePasswordCount} lần thử.`);
        }else if(userName!=="admin"){
            alert(`Sai tài khoản! Bạn còn ${3-falsePasswordCount} lần thử.`);
    }
    if(falsePasswordCount===3){
        alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
    }
    }
} while (falsePasswordCount<3 );

// menu
let choice;
do {
let menu=`
--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
1. Phân loại mã số sách (Chẵn/Lẻ)
2. Thiết kế sơ đồ kho sách (Dạng lưới)
3. Dự toán phí bảo trì sách theo năm
4. Tìm mã số sách may mắn
5. Thoát
Vui lòng nhập lựa chọn của bạn (1-5):
`
choice=+prompt(menu);
// Xử lý menu
    switch (choice) {
        case 1:
            let bookCode;
            bookCodeCount=0;
            bookCodeOddCount=0;
            bookCodeEvenCount=0;
            do {
                bookCode=+prompt("Nhập các mã số sách (Nhập 0 để dừng lại):");
                if(bookCode===0){   
                    break;
                }else{
                bookCodeCount++;
                if(bookCode%2===0){
                    bookCodeEvenCount++;
                }else{
                    bookCodeOddCount++;
                }
            if(isNaN(bookCode)){
                alert("Vui lòng nhập số nguyên hợp lệ!");               
            }else if(bookCode===null){   
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
            }
            }
            } while (bookCode!==0 );
            console.log(`
--- Kết quả phân loại mã sách ---
- Tổng số lượng mã sách đã nhập: ${bookCodeCount}
- Số mã chẵn (Sách khoa học): ${bookCodeEvenCount}
- Số mã lẻ (Sách nghệ thuật): ${bookCodeOddCount}
            
                `);
                alert("Đã phân loại xong! Xem kết quả tại Console (F12).")
            break;
    
        case 2:
              let rows = Number(prompt("Nhập số hàng của kho:"));
  let cols = Number(prompt("Nhập số cột của kho:"));

  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Số hàng và cột phải là số dương!");
    return;
  }

  console.log(`--- Bản đồ kho sách (${rows}x${cols}) ---`);
  for (let i = 1; i <= rows; i++) {
    let rowLayout = "";
    for (let j = 1; j <= cols; j++) {
      let position = `[${i}-${j}]`;
      if (i === j) {
        position += "(Kệ ưu tiên)";
      }
      rowLayout += position + "  ";
    }
    console.log(rowLayout); 
  }
  alert("Đã in bản đồ kho ra Console (F12).");
            break;
    
        case 3:
              let quantity = Number(prompt("Nhập số lượng sách hiện có:"));
  let currentCostPerBook = Number(prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):"));
  let years = Number(prompt("Nhập số năm dự toán:"));

  if (isNaN(quantity) || isNaN(currentCostPerBook) || isNaN(years)) {
    alert("Dữ liệu nhập vào phải là số!");
    return;
  }

  console.log("--- Dự toán phí bảo trì sách theo năm ---");
  let totalCost;
  for (let year = 1; year <= years; year++) {
    totalCost = quantity * currentCostPerBook;
    console.log(
      `Năm ${year}: ${totalCost.toLocaleString()} VNĐ (Đơn giá: ${currentCostPerBook.toFixed(0)}/cuốn)`,
    );

    currentCostPerBook = currentCostPerBook * 1.1;
  }
  alert("Đã hoàn thành bảng dự toán tại Console.");
            break;
    
        case 4:
            let n = Number(
    prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):"),
  );

  if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập số N dương!");
    return;
  }

  let luckyCount = 0;
  let luckyList = "";

  console.log(
    `--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`,
  );
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      luckyList += i + " ";
      luckyCount++;
    }
  }

  console.log(luckyList || "Không có mã nào thỏa mãn.");
  console.log(`=> Tổng cộng có ${luckyCount} mã may mắn.`);
  alert(`Tìm thấy ${luckyCount} mã may mắn. Xem chi tiết tại Console.`);
            break;
    
        case 5:
            alert("Hệ thống đang đăng xuất... Hẹn gặp lại!");
            break;
    
        default:
            alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
            break;
    }
} while (choice!==5);



