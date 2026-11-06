export const doctors = [
  { id: 'D-001', name: 'Nguyễn Văn Minh', dob: '1985-03-14', hometown: 'Đà Nẵng', cccd: '048185001234', spec: 'Nội tổng quát', position: 'Bác sĩ trưởng khoa', room: 'Phòng 102', phone: '0908 123 456', initials: 'NM', color: 'mint' },
  { id: 'D-002', name: 'Trần Thị Hoa', dob: '1988-07-02', hometown: 'Huế', cccd: '046188009876', spec: 'Tim mạch', position: 'Bác sĩ chuyên khoa I', room: 'Phòng 201', phone: '0912 987 654', initials: 'TH', color: 'blue' },
  { id: 'D-003', name: 'Lê Hoàng Anh', dob: '1990-12-20', hometown: 'Quảng Nam', cccd: '049190007654', spec: 'Răng Hàm Mặt', position: 'Bác sĩ điều trị', room: 'Phòng 305', phone: '0933 111 222', initials: 'LA', color: 'violet' },
  { id: 'D-004', name: 'Phạm Minh Tuấn', dob: '1982-09-11', hometown: 'Cần Thơ', cccd: '047182006543', spec: 'Chỉnh hình', position: 'Bác sĩ phẫu thuật', room: 'Phòng 108', phone: '0977 444 555', initials: 'PT', color: 'amber' },
]

export const cases = [
  { code: 'CA250501-001', patient: 'Trần Thị Mai', initials: 'TM', age: 42, gender: 'Nữ', phone: '0901 234 567', status: 'Đang chờ tư vấn', level: 'Trung bình', symptoms: 'Sốt, đau đầu, ho' },
  { code: 'CA250501-002', patient: 'Lê Văn Hùng', initials: 'LH', age: 55, gender: 'Nam', phone: '0908 222 118', status: 'Mới', level: 'Cao', symptoms: 'Đau ngực, khó thở' },
  { code: 'CA250501-003', patient: 'Phạm Quang Minh', initials: 'PM', age: 29, gender: 'Nam', phone: '0917 445 882', status: 'Đang tư vấn', level: 'Thấp', symptoms: 'Đau bụng, buồn nôn' },
  { code: 'CA250501-004', patient: 'Nguyễn Thị Lan', initials: 'NL', age: 36, gender: 'Nữ', phone: '0934 118 965', status: 'Hoàn tất', level: 'Trung bình', symptoms: 'Ho, đau họng' },
]

export const medicalData = [
  { id: '01', symptom: 'Ho khan, sốt nhẹ, đau họng kéo dài', diagnosis: 'Viêm họng cấp', level: 'Trung bình', action: 'Kê đơn kháng sinh nhẹ và nghỉ ngơi' },
  { id: '02', symptom: 'Đau tức ngực trái, khó thở khi vận động', diagnosis: 'Theo dõi tim mạch', level: 'Nghiêm trọng', action: 'Chụp ECG và xét nghiệm máu khẩn cấp' },
  { id: '03', symptom: 'Nổi mẩn đỏ vùng cánh tay, ngứa ngáy', diagnosis: 'Dị ứng thời tiết', level: 'Nhẹ', action: 'Bôi kem ngoài da và uống thuốc kháng Histamin' },
  { id: '04', symptom: 'Mệt mỏi kéo dài, sụt cân không rõ nguyên nhân', diagnosis: 'Kiểm tra tổng quát', level: 'Trung bình', action: 'Lấy mẫu xét nghiệm đường huyết và tuyến giáp' },
  { id: '05', symptom: 'Đau bụng vùng thượng vị, ợ chua', diagnosis: 'Viêm loét dạ dày', level: 'Trung bình', action: 'Nội soi dạ dày và điều chỉnh chế độ ăn' },
  { id: '06', symptom: 'Mắt đỏ, cộm, chảy nước mắt', diagnosis: 'Viêm kết mạc', level: 'Nhẹ', action: 'Nhỏ thuốc sát khuẩn và bảo vệ mắt' },
  { id: '07', symptom: 'Đau đầu dữ dội, hoa mắt, chóng mặt', diagnosis: 'Tăng huyết áp', level: 'Nghiêm trọng', action: 'Đo huyết áp liên tục và dùng thuốc hạ áp' },
]

export const scheduleRows = [
  { time: '08:00', endTime: '08:30', doctor: 'BS. Nguyễn Văn Minh', room: 'Phòng 102', patient: 'Trần Thị Mai', status: 'Đang tiến hành' },
  { time: '09:30', endTime: '10:00', doctor: 'BS. Trần Thị Hoa', room: 'Phòng 201', patient: 'Lê Văn Hùng', status: 'Chờ' },
  { time: '10:15', endTime: '10:45', doctor: 'BS. Lê Hoàng Anh', room: 'Phòng 305', patient: 'Phạm Quang Minh', status: 'Huỷ' },
  { time: '14:00', endTime: '14:30', doctor: 'BS. Phạm Minh Tuấn', room: 'Phòng 108', patient: 'Nguyễn Thị Lan', status: 'Đang tiến hành' },
]

export const doctorSchedule = [
  { day: 'Thứ 2', date: '13/05', shift: 'Sáng', time: '08:00 - 12:00', room: 'Phòng 201', type: 'Khám trực tiếp', patients: 12, status: 'Đã xác nhận' },
  { day: 'Thứ 3', date: '14/05', shift: 'Chiều', time: '13:30 - 17:30', room: 'Online', type: 'Tư vấn trực tuyến', patients: 8, status: 'Đã xác nhận' },
  { day: 'Thứ 4', date: '15/05', shift: 'Sáng', time: '08:00 - 12:00', room: 'Phòng 203', type: 'Khám trực tiếp', patients: 10, status: 'Đã xác nhận' },
  { day: 'Thứ 5', date: '16/05', shift: 'Tối', time: '18:00 - 21:00', room: 'Online', type: 'Tư vấn trực tuyến', patients: 6, status: 'Dự kiến' },
  { day: 'Thứ 6', date: '17/05', shift: 'Chiều', time: '13:30 - 17:30', room: 'Phòng 201', type: 'Khám trực tiếp', patients: 9, status: 'Đã xác nhận' },
]
