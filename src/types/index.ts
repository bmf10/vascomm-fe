export interface BaseResponse<Data> {
  readonly data: Data
  readonly message: string
  readonly status: {
    code: number
    message: string
  }
}

export interface Pagination<Data> {
  readonly page: number
  readonly perPage: number
  readonly rows: Data[]
  readonly total: number
}

export interface User {
  readonly createdAt: string
  readonly deletedAt: string
  readonly email: string
  readonly id: string
  readonly name: string
  readonly phone: string
  readonly role: string
  readonly updatedAt: string
  readonly status: 'active' | 'inactive'
}

export interface Product {
  readonly id: string
  readonly name: string
  readonly image: string
  readonly price: number
  readonly status: 'active' | 'inactive'
  readonly createdAt: string
  readonly updatedAt: string
  readonly deletedAt?: string
}
