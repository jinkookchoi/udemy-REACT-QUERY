import { queryKeys } from "./constants";

export const generateUserKey = (userId: number, userToken: string) => {
  return [queryKeys.user, userId]
}

export const generateUserAppointmentKey = (
  userId: number,
) => {
  return [queryKeys.appointments, queryKeys.user, userId]
}
