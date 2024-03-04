import { request } from "@/api/request"
import { UserResponse } from "@/api/user/type"

export const getUsers = () => {
  return request<Array<UserResponse>>({
    url: '/mock/users',
    method: 'get',
  })
}

export const getUserById = (id: number) => {
  return request<UserResponse>({
    url: `/mock/user/${id}`,
    method: 'get',
  })
}
