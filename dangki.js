document.getElementById('submit').addEventListener('click',comparison)
function comparison(){
    let a = document.getElementById('name').value
    let b = document.getElementById('email').value
    let c = document.getElementById('phone').value
    let d = document.getElementById('pass1').value
    let e = document.getElementById('pass2').value
    if(
        a==''||
        b==''||
        c==''||
        d==''||
        e==''
    ){alert('Nhìn lại xem thiếu cái gì không kìa')}
    else if(d!=e){alert('nhập lại mỗi cái mật khẩu mà cũng sai')}
    else{
        let f = prompt('nhập mã xác nhận: rjdnbtudgneigmslerbtwiurbidwinfmv')
        if(f==' rjdnbtudgneigmslerbtwiurbidwimfnv'){
            alert('đăng kí thành công')
            alert('hacker sẽ đến sớm thôi')
        }
        else {
            alert('sai mã xác nhận')
            alert('copy paste không hiệu quả đâu')
        }
    }
}