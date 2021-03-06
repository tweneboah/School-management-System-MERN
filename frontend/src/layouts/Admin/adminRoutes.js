
import React from 'react';

const Dashboard = React.lazy(()  => import( '../../AdminComponents/dashboard/Index'));
const Settings = React.lazy(()  => import( '../../AdminComponents/settings/SettingsPage'));
const Notifications = React.lazy(()  => import( '../../AdminComponents/notifications/NotificationsPage'));
const Messages = React.lazy(()  => import( '../../AdminComponents/messages/Messaging'));


//academics
const Calender = React.lazy(()  => import( '../../AdminComponents/academics/Calender'));
const Classes = React.lazy(()  => import( '../../AdminComponents/academics/Classes'));
const Courses = React.lazy(()  => import( '../../AdminComponents/academics/Courses'));
const Timetable = React.lazy(()  => import( '../../AdminComponents/academics/Timetable'));
const Exams = React.lazy(()  => import( '../../AdminComponents/academics/Exams'));


//students
const AllStudents = React.lazy(()  => import( '../../AdminComponents/students/AllStudents'));
const Upgrade = React.lazy(()  => import( '../../AdminComponents/students/Upgrade'));
const Attendance = React.lazy(()  => import( '../../AdminComponents/students/Attendance'));
const Campuses = React.lazy(()  => import( '../../AdminComponents/students/Campuses'));
const Dormitories = React.lazy(()  => import( '../../AdminComponents/students/Dormitories'));
const NewStudent = React.lazy(()  => import( '../../AdminComponents/students/newStudent/NewStudent'));
const Prefects = React.lazy(()  => import( '../../AdminComponents/students/Prefects'));
const Scholarships = React.lazy(()  => import( '../../AdminComponents/students/Scholarships'));
const StudentDetails = React.lazy(()  => import( '../../AdminComponents/students/StudentDetails'));

//staff
const AddStaff = React.lazy(()  => import( '../../AdminComponents/staff/AddStaffPage'));
const Staff = React.lazy(()  => import( '../../AdminComponents/staff/AllStaff'));
const StaffAttendance = React.lazy(()  => import( '../../AdminComponents/staff/Attendence'));
const StaffDetails = React.lazy(() => import('../../AdminComponents/staff/StaffDetails'));
const Payrow = React.lazy(()  => import( '../../AdminComponents/staff/PayrowPage'));

//finance
const Banking = React.lazy(()  => import( '../../AdminComponents/finance/Banking'));
const SetFees = React.lazy(()  => import( '../../AdminComponents/finance/SetFees'));
const PrepareBill = React.lazy(()  => import( '../../AdminComponents/finance/PrepareBill'));
const NonBillPayment = React.lazy(()  => import( '../../AdminComponents/finance/NonBillPayment'));
const BillPayment = React.lazy(()  => import( '../../AdminComponents/finance/BillPayment'));
const ViewPayment = React.lazy(()  => import( '../../AdminComponents/finance/ViewPayment'));


 const routes =  [
    {
        path: "/",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
    },
    {
        path: "/academics/calender",
        name: "Calendar",
        component: Calender,   
    },
    {
        path: "/academics/classes",
        name: "Classes",
        component: Classes,   
    },
    {
        path: "/academics/courses",
        name: "Courses",
        component: Courses,   
    },
    {
        path: "/academics/timetable",
        name: "Timetable",
        component: Timetable,
    },
    {
        path: "/academics/exams",
        name: "Exams",
        component: Exams,
    },
    {
        path: "/students",
        name: "Students",
        exact: true,
        component: AllStudents,
    },
    {
        path: "/students/attendance",
        name: "Attendance",
        component: Attendance,
    },
    {
        path: "/students/campus",
        name: "Campuses",
        component: Campuses,
    },
    {
        path: "/students/dormitories",
        name: "Dormitories",
        component: Dormitories,
    },
    {
        path: "/students/new",
        name: "New Student",
        component: NewStudent,
    },
    {
        path: "/students/prefects",
        name: "Prefects",
        component: Prefects,
    },
    {
        path: "/students/upgrade",
        name: "Upgrade",
        component: Upgrade,
    },
    {
        path: "/students/scholarships",
        name: "Scholarships",
        component: Scholarships
    },
    {
        path: "/students/:id",
        name: "Student Details ",
        component: StudentDetails,
    },
    {
        path: "/staff",
        name: "All Staff ",
        exact: true,
        component: Staff,
    },
    {
        path: "/staff/new",
        name: "New Staff ",
        component: AddStaff,
    },
    {
        path: "/staff/attendance",
        name: "Staff Attendance ",
        component: StaffAttendance,
    },
    {
        path: "/staff/:id",
        name: "Staff Details ",
        component: StaffDetails,
    },
    {
        path: "/staff/payrow",
        name: "Staff Payrow ",
        component: Payrow,
    },
    {
        path: "/finance/set",
        name: "Set Fees",
        component: SetFees
    },
    {
        path: "/finance/preparebill",
        name: "Prepare Bill",
        component: PrepareBill
    },
    {
        path: "/finance/billpayment",
        name: "Bill Payment",
        component: BillPayment
    },
    {
        path: "/finance/banking",
        name: "Banking",
        component: Banking
    },
    {
        path: "/finance/nonbillpayment",
        name: "Non Bill Payment",
        component: NonBillPayment
    },
    {
        path: "/finance/viewpayment",
        name: "View Payment",
        component: ViewPayment
    },
    {
        path: "/messages",
        name: "Messages",
        component: Messages
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
    },
    {
        path: "/settings",
        name: "Acoount Settings",
        component: Settings,
    },
]

export default routes