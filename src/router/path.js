//Authorized screen
import Home from '../screen/home'
import CheckinGPS from '../screen/checkinGPS'
import CheckinWifi from '../screen/checkinWifi'
import Info from '../screen/info'
import Calendar from '../screen/calendar'
import Notification from '../screen/notification'
import Phonebook from '../screen/phonebook'
import Profile from '../screen/profile'
import RegisterLeave from '../screen/registerLeave'
import ApproveLeave from '../screen/approveLeave'
import Welfare from '../screen/welfare'

//Unauthorized screen
import Login from '../screen/login'

export const authPath = [
    {
        label: 'home', //or translate key if u so desired
        component: Home,
        stack: [
            {
                label: 'Home',
                component: Home,
            },
            {
                label: 'info QR',
                component: Info,
            },
            {
                label: 'checkin Wifi',
                component: CheckinWifi,
            },
            {
                label: 'checkin GPS',
                component: CheckinGPS,
            },
            {
                label: 'Register Leave',
                component: RegisterLeave,
            },
            {
                label: 'ApproveLeave',
                component: ApproveLeave,
            }
        ]
    },
    {
        label: 'Calendar',
        component: Calendar,
    },
    {
        label: 'Phonebook',
        component: Phonebook,
    },
    {
        label: 'Welfare',
        component: Welfare,
    },
    {
        label: 'Notification',
        component: Notification,
    },
    {
        label: 'Profile',
        component: Profile,
    }
]

export const unauthPath = [
    {
        label: 'Login',
        component: Login,
    }
]