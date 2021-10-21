function save() {
    let maSV = document.getElementById('maSV').value;
    let fullname = document.getElementById('fullname').value;
    let age = document.getElementById('age').value;
    let gender = '';
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    let address = document.getElementById('address').value;

    if (_.isEmpty(fullname)) {
        document.getElementById('fullname-error').innerHTML = 'Vui lòng nhập họ tên!';
    } else {
        document.getElementById('fullname-error').innerHTML = '';
    }

    if (_.isEmpty(maSV)) {
        document.getElementById('maSV-error').innerHTML = 'Vui lòng nhập mã sinh viên!'
    } else {
        document.getElementById('maSV-error').innerHTML = '';
    }

    if (_.isEmpty(age)) {
        document.getElementById('age-error').innerHTML = 'Vui lòng nhập tuổi!';
    } else {
        document.getElementById('age-error').innerHTML = '';
    }

    if (_.isEmpty(address)) {
        document.getElementById('maSV-error').innerHTML = 'Vui lòng nhập mã sinh viên';
    } else {
        document.getElementById('maSV-error').innerHTML = '';
    }

    if (_.isEmpty(gender)) {
        document.getElementById('gender-error').innerHTML = 'Vui lòng nhập giới tính!';
    } else {
        document.getElementById('gender-error').innerHTML = '';

        if (fullname && maSV && age && gender && address) {
            let students = localStorage.getItem('students') ? [] : JSON.parse(localStorage.getItem('students'));
            students.push({
                fullname: fullname,
                maSV: maSV,
                age: age,
                gender: gender,
                address: address,
            });
            localStorage.setItem('studens', JSON.stringify(students));
            this.renderListStudent();



            students.forEach((student) => {

                let genderlabel = student.gender === true ? Nam : Nữ;
                tableContent += `<tr>
                    <td> ${student.maSV}</td>   
                    <td>${student.fullname}</td>
                    <td> ${student.age}</td>
                    <td> ${genderlabel}</td>
                    <td> ${student.address}</td>
                    <td>
                         <a hrel='#'>Sửa</a> || <a hrel='#'>Xóa</a>

                     </td>
                    
                </tr>`;
            })
            document.getElementById('list-students').innerHTML = tableContent;
        }
    }
}
function renderListStudent() {
    let students = localStorage.getItem('students') ? [] : JSON.parse(localStorage.getItem('students'));
    if (students.length === 0) {
        document.getElementById('list-students').style.display = 'none';
        return false;
    }
    document.getElementById('list-students').style.display = 'block';
    let tableContent = `<tr>
                <td>MaSV</td>
                <td>Họ Tên</td>
                <td> Tuổi</td>
                <td> Giới TÍnh</td>
                <td> Địa Chỉ</td>
                <td> Thao Tác</td>
            </tr>`;
}
