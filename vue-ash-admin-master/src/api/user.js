import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/me',
    method: 'get'
  })
}

export function getUserList() {
  return request({
    url: '/users',
    method: 'get'
  })
}
export function createUser(data) {
  return request({
    url: '/user/create',
    method: 'post',
    data
  })
}
export function getUserDevices(data) {
  return request({
    url: '/devices',
    method: 'post',
    data
  })
}
export function updateUser(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
