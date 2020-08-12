import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/Whatshot'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
// import ExpandMoreoutlinedIcon from '@material-ui/icons/ExpandMoreoutline'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title='Trending' Icon={WhatshotIcon} />
            <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
            <hr />

            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title='History' Icon={HistoryIcon} />
            <SidebarRow title='Your videos' Icon={OndemandVideoIcon} />
            <SidebarRow title='Watch Later' Icon={WatchLaterIcon} />
            <SidebarRow title='Liked Videos' Icon={ThumbUpAltOutlinedIcon} />
            {/* <SidebarRow title='Show more' Icon={ExpandMoreoutlinedIcon} /> */}
            <hr />
        </div>
    )
}

export default Sidebar
