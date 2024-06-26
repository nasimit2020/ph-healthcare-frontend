import { USER_ROLE } from "@/constant/role";
import { DrawerItem, UserRole } from "@/types"

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import TryIcon from '@mui/icons-material/Try';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonIcon from '@mui/icons-material/Person';

export const drawerItems = (role: UserRole): DrawerItem[] => {
    const roleMenus: DrawerItem[] = [];

    const commonMenuItems: DrawerItem[] = [
        {
            title: "Profile",
            path: `${role}/profile`,
            icon: PersonIcon,
        }
    ];

    switch (role) {
        case USER_ROLE.SUPER_ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Manage Users",
                    path: `${role}/manage-users`,
                    icon: GroupIcon,
                },
            );
            break;

        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Specialties",
                    path: `${role}/specialties`,
                    icon: TryIcon,
                },
                {
                    title: "Doctors",
                    path: `${role}/doctors`,
                    icon: MedicationLiquidIcon,
                },
                {
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Reviews",
                    path: `${role}/reviews`,
                    icon: ReviewsIcon,
                },
            );
            break;

        case USER_ROLE.DOCTOR:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: CalendarMonthIcon,
                }
            );
            break;

        case USER_ROLE.PATIENT:
            roleMenus.push(
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Prescriptions",
                    path: `${role}/prescriptions`,
                    icon: DashboardIcon,
                },
                {
                    title: "Payment History",
                    path: `${role}/payment-history`,
                    icon: PaymentsIcon,
                },

            );
            break;

        default:
            break;
    }

    return [...roleMenus, ...commonMenuItems];
}