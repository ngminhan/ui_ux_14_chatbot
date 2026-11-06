import { useState } from 'react'
import { AppShell, Button, Card, PageHeader, TopBar } from '../../components/ui.jsx'

export function DoctorSettings() {
  const [avatar, setAvatar] = useState('A')
  function handleUpload(event) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setAvatar(reader.result)
    reader.readAsDataURL(file)
  }
  return (
    <AppShell role="doctor">
      <TopBar />
      <div className="content-wide">
        <PageHeader title="Cài đặt tài khoản" subtitle="Thông tin cá nhân theo kiểu mạng xã hội" />
        <Card>
          <div className="social-profile">
            <label className="avatar-upload">
              {typeof avatar === 'string' && avatar.startsWith('data:') ? <img src={avatar} alt="avatar" /> : <span>{avatar}</span>}
              <input type="file" accept="image/*" onChange={handleUpload} />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="input" defaultValue="Dr. Alexander" />
              <input className="input" defaultValue="34" />
              <input className="input" defaultValue="0908 000 999" />
              <input className="input" defaultValue="Bác sĩ tư vấn" />
            </div>
            <div className="mt-4"><Button>Lưu thông tin</Button></div>
          </div>
        </Card>
      </div>
    </AppShell>
  )
}
