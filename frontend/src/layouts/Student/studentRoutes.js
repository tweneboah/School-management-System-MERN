
import React from 'react';

const Dashboard = React.lazy(()  => import( '../../StudentComponents/dashboard/Index'));
const Profile =   React.lazy(()  => import( '../../StudentComponents/profile/ProfilePage'));
const EditProfile =   React.lazy(()  => import( '../../StudentComponents/profile/EditProfilePage'));
const Fees =   React.lazy(()  => import( '../../StudentComponents/finances/FeesPage'));
const Class =   React.lazy(()  => import( '../../StudentComponents/classes/Classes'));
const Courses =   React.lazy(()  => import( '../../StudentComponents/classes/CoursesPage'));
const Exams =   React.lazy(()  => import( '../../StudentComponents/classes/ExamsPage'));
const Timetable =   React.lazy(()  => import( '../../StudentComponents/classes/TimeTablePage'));
const Attendance =   React.lazy(()  => import( '../../StudentComponents/attendence/AttendancePage'));
const Messages =   React.lazy(()  => import( '../../StudentComponents/messages/Messages'));
const Notifications =   React.lazy(()  => import( '../../StudentComponents/notifications/NotificationsPage'));
const Settings =   React.lazy(()  => import( '../../StudentComponents/settings/SettingsPage'));




 const routes =  [
    {
        path: "/",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
    },
    {
        path: "/profile",
        name: "Profile",
        exact: true,
        component: Profile,
    },
    {
        path: "/editProfile",
        name: "Edit Profile",
        component: EditProfile,   
    },
    {
        path: "/class",
        name: "Class",
        component: Class
    },
    {
        path: "/course",
        name: "Courses",
        component: Courses
    },
    {
        path: "/exams",
        name: "Exams",
        component: Exams
    },
    {
        path: "/timetable",
        name: "Timetable",
        component: Timetable
    },
    {
        path: "/fees",
        name: "Fees",
        component: Fees
    },
    {
        path: "/attendance",
        name: "Attendance",
        component: Attendance
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings
    },
    {
        path: "/message",
        name: "Messages",
        component: Messages,
    },
]

export default routes