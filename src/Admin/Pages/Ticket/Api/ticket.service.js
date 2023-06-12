import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/tickets';

const useAdminTicketService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllTickets() {
    return axiosPrivate.get(url);
  }

  function showTicket(id) {
    return axiosPrivate.get(`${url}/show/${id}`);
  }

  function deleteticket(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  function assignTicket(ticket_id, data) {
    return axiosPrivate.post(`${url}/assign/${ticket_id}`, data);
  }

  function changePriority(id) {
    return axiosPrivate.post(`${url}/change-priority/${id}`);
  }


  return {
    getAllTickets,
    showTicket,
    deleteticket,
    assignTicket,
    changePriority
  }
}

export default useAdminTicketService;
