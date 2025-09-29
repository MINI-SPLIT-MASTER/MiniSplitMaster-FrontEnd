/* import { isAstaraNuevo } from '../Common/utils'

// const RESERVED_TICKET_STATUS = 'Reserva'
// const RESERVED_TICKET_STATUS_TO_REPLACE = 'Diferido'

export const validateTicketStatusLabel = (ticketStatus = []) => {
  if (isAstaraNuevo()) {
    return ticketStatus.map(status => {
      // if (status.name === RESERVED_TICKET_STATUS) {
      //   return {
      //     ...status,
      //     name: RESERVED_TICKET_STATUS_TO_REPLACE,
      //   }
      // }
      return status
    })
  }
  return ticketStatus
}

export const validateTicketDetailsStatusLabel = (ticket = {}) => {
  if (isAstaraNuevo()) {
    return {
      ...ticket,
      edges: {
        ...ticket.edges,
        ticket_status: {
          ...ticket.edges.ticket_status,
          name: ticket.edges.ticket_status.name,
        },
      },
    }
  }
  return ticket
}

export const validateTicketsStatusLabel = (tickets = []) => {
  if (isAstaraNuevo()) {
    return tickets.map(ticket => {
      return validateTicketDetailsStatusLabel(ticket)
    })
  }
  return tickets
}
 */