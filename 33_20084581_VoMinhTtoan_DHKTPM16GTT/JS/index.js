$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
    // Viết code vào
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbname").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);


    function kiemTraCMND() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#CMND").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return true;
        } else {
            var soAo = $("#CMND").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbCMND").html("Tù 1 đến 100");
            } else {
                $("#tbName").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraCMND);

    function kiemTraDiaChi() {
        var i = 1;
        let mauKT = /[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("#tbDc").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#DC").val())) {
            $("#tbDc").html("Chỉ dùng 9 chữ số");
            return true;
        }
        $("#tbDc").html("*");
        return true;
    }
    $("#DC").blur(kiemTraDiaChi);


    function kiemTraEmail() {
        if ($("#Email").val() == "") {
            $("#tbEmail").html("Không để trống");
            return false;
        }
        var today = new number();
        var ntt = new number($("#Email").val());
        today = today.setnumber(today.getnumber() + 7);
        if (today > ntt) {
            $("#tbEmail").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#Email").blur(kiemTraEmail);

    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);


    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraCMND() == true && kiemTraSDT() == true && kiemTraEmail() == true && kiemTraDiaChi() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#CMND").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#Email").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })


})