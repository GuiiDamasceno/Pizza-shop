import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: new Date().toISOString(),
    status: 'pending',
    totalInCents: 12000,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 123 456 7890',
    },
    orderItems: [
      {
        id: 'item1',
        priceInCents: 5000,
        quantity: 2,
        product: {
          name: 'Pepperoni Pizza',
        },
      },
      {
        id: 'item2',
        priceInCents: 7000,
        quantity: 2,
        product: {
          name: 'Margherita Pizza',
        },
      },
    ],
  })
})
