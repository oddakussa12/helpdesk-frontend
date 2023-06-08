import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/user/tickets';

const useUserTicketService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllTickets() {
    return axiosPrivate.get(`${url}/created_by_me`);
  }

  function showTicket(ticketId) {
    return axiosPrivate.get(`${url}/show/${ticketId}`);
  }

  function createTicket(data) {
    return axiosPrivate.post(url, data);
  }

  function updateTicket(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteTicket(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  function changeTicketStatus(id) {
    return axiosPrivate.post(`${url}/change-status/${id}`);
  }

  return {
    getAllTickets,
    showTicket,
    createTicket,
    updateTicket,
    deleteTicket,
    changeTicketStatus,
  }
}

export default useUserTicketService;
