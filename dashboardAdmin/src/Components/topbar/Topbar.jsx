import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div>
<div className="topbar">
  <div className="topbarWrapper">
    <div className="topbarLeft">
      <span className="logo">AmirWebsite </span>
    </div>
    <div className="topbarRight">
      <div className="topbarIconContainer">
<NotificationsNoneIcon/>
<span className="topIconBadge">2</span>
      </div>

      <div className="topbarIconContainer">
<LanguageIcon/>
<span className="topIconBadge">2</span>
      </div>

      <div className="topbarIconContainer">
<SettingsIcon/>

      </div>
      <img src="Images/avatar.jpg" alt="" className='topAvatar' />
    </div>
  </div>

</div>
    </div>
  )
}
