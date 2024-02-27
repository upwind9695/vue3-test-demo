import { request } from "../request.ts"
import { UserResponse } from "./type.ts"

export const getUsers = () => {
  return request<Array<UserResponse>>({
      url: "/mock/users",
      method: "get",
  })
}

export const getUserById= (id: number) => {
    return request<UserResponse>({
        url:`/mock/user/${id}`,
        method: "get",
    })
}
