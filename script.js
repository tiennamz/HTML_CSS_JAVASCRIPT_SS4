let userName;
let password;
let passwordCount=0;

do {
    userName=prompt("Mời bạn nhập tài khoản:").trim();
    password=prompt("Mời bạn nhập mật khẩu:").trim();
    if(userName==="admin" && password==="12345"){
        alert("Đăng nhập thành công!");
        break;
    }else{
        if(userName!=="admin" && password!=="12345"){
            passwordCount++;
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${3-passwordCount} lần thử.`);
        }else if(userName!=="admin"){
            passwordCount++;
            alert(`Sai tài khoản! Bạn còn ${3-passwordCount} lần thử.`);
        }else if( password!=="12345"){
            passwordCount++;
            alert(`Sai mật khẩu! Bạn còn ${3-passwordCount} lần thử.`);
        }
    }
    if(passwordCount===3){
        alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
    }
} while (passwordCount<3);

let choice;
do {
    let menu=`
--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---
1. Phân loại mã số sách (Số nguyên chẵn/lẻ).
2. Thiết kế sơ đồ kho sách (Dạng lưới)
3. Dự toán phí bảo trì sách theo năm
4. Tìm mã số sách may mắn
5. Thoát
Vui lòng nhập lựa chọn của bạn (1-5):`

    choice=+prompt(menu);
    switch (choice) {
        case 1:
            let bookCode;
            let bookCodeCount=0;
            let evenCount=0;
            let oddCount=0;
            alert("Nhập các mã số sách (Nhập 0 để dừng lại):")
            do {
                bookCode=+prompt("Nhập mã số sách:")
                bookCodeCount++;
                if(!Number.isInteger(bookCode)){
                    alert("Vui lòng nhập số nguyên hợp lệ!")
                }
                if(bookCode===0){
                    alert("Đã phân loại xong! Xem kết quả tại Console (F12).");
                }
                if(bookCode%2===0){
                    if(bookCode===0){
                        continue;
                    }
                    evenCount++;
                }else{
                    oddCount++;
                }
            } while (bookCode!==0 || !Number.isInteger(bookCode));
  console.log(`
--- Kết quả phân loại mã sách ---
- Tổng số lượng mã sách đã nhập: ${bookCodeCount-1}
- Số mã chẵn (Sách khoa học): ${evenCount}
- Số mã lẻ (Sách nghệ thuật): ${oddCount}
`);
  
            break;
        case 2:
            let rowBook=+prompt("Nhập số hàng của kho:");
            let colBook=+prompt("Nhập số cột của kho:") ;
            if(isNaN(colBook) || isNaN(colBook) || colBook<=0 || rowBook<=0){
                alert("Số hàng và cột phải là số dương!")
            }else{
            console.log(`--- Bản đồ kho sách (${rowBook}x${colBook}) ---`);
            for(let i=1;i<=rowBook;i++){
                let result=""
                for(let j=1;j<=colBook;j++){
                    let array=`[${i}-${j}]`
                    if(i===j){
                        array+= "(Kệ ưu tiên)"
                    }
                    result += array + "   "
                    
                }
                console.log(result);
            }
        }
            break;
        case 3:
            let numberBook=+prompt("Nhập số lượng sách hiện có:");
            let priceBook=+prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):");
            let yearBook=+prompt("Nhập số năm dự toán:");
            console.log("--- Dự toán phí bảo trì sách theo năm ---");
            console.log(`
Năm 1: ${priceBook*numberBook} VNĐ (Đơn giá: ${priceBook}/cuốn)`);
            
            for(let i=2;i<=yearBook;i++){
                priceBook=priceBook+priceBook*0.1;
                console.log(`
Năm ${i}: ${priceBook*numberBook} VNĐ (Đơn giá: ${priceBook}/cuốn)`);
                
            }
            break;
        case 4:
            let luckyNumber=+prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):");
            let luckyArray="";
            let luckyCount=0;
            for(let i=1;i<=luckyNumber;i++){
                if(i%3===0 && i%5!==0){
                    luckyCount++;
                    luckyArray+=i + " "
                }
            }
            console.log("--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---");
            console.log(luckyArray);
            console.log(`=> Tổng cộng có ${luckyCount} mã may mắn.`);
            alert(`
Tìm thấy ${luckyCount} mã may mắn. Xem chi tiết tại Console.`)
            break;
        case 5:
            alert("Hệ thống đang đăng xuất... Hẹn gặp lại!");
            break;
    
        default:
            alert("Lựa chọn không hợp lệ, vui lòng thử lại!")
            break;
    }
} while (choice!==5);

