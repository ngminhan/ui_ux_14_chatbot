import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppShell, Badge, Button, Card, TopBar } from '../../components/ui.jsx'

export function AdminDoctorDetail() {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [toast, setToast] = useState('')
  return (
    <AppShell role="admin">
      <TopBar />
      <div className="content-wide">
        <div className="mb-5"><Link to="/admin/doctors"><Button variant="ghost">← Quay lại</Button></Link></div>
        <div className="mb-7 flex items-center justify-between"><h1 className="text-3xl font-black">Chi tiết bác sĩ</h1><div className="flex gap-3"><Button variant="outline">Sửa thông tin</Button><Button variant="ghost" onClick={()=>setConfirmDelete(true)}>Xoá bác sĩ</Button></div></div>
        <div className="grid gap-7 lg:grid-cols-[360px_1fr]">
          <Card><div className="text-center"><div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-teal-100 text-3xl font-black text-teal-700">NM</div><h2 className="mt-5 text-2xl font-black">Nguyễn Văn Minh</h2><p className="text-slate-500">Nội tổng quát</p><Badge tone="green">Đang làm việc</Badge></div></Card>
          <Card><h2 className="section-title">Thông tin chuyên môn</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{['14/03/1985','Đà Nẵng','048185001234','Nội tổng quát'].map((v) => <div className="info-box" key={v}>{v}</div>)}</div></Card>
        </div>
      </div>
      {confirmDelete && <div className="modal-backdrop"><Card className="modal"><h2 className="text-xl font-black">Xác nhận xoá bác sĩ?</h2><div className="mt-5 flex justify-end gap-3"><Button variant="ghost" onClick={()=>setConfirmDelete(false)}>Huỷ</Button><Button onClick={()=>{setConfirmDelete(false); setToast('Đã xoá bác sĩ')}}>Xoá</Button></div></Card></div>}
      {toast && <div className="toast">{toast}</div>}
    </AppShell>
  )
}
