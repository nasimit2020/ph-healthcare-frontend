import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type ResponseSuccessType = {
    data: any;
    meta?: TMeta;
}

export type TMeta = {
    page: number;
    limit: number;
    total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
};

export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: TGenericErrorMessage[]
};

export type TGenericErrorMessage = {
    path: string | number;
    message: string;
};

export const Gender = ["MALE", "FEMALE"];