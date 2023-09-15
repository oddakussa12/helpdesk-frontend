import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/support/tickets';

const useSupportTicketService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllTickets() {
    return axiosPrivate.get(`${url}/assigned_to_me`);
  }

  function showTicket(id) {
    return axiosPrivate.get(`${url}/show/${id}`);
  }

  function reply(id, data) {
    return axiosPrivate.post(`${url}/reply/${id}`, data);
  }

  function updateStatus(id, data) {
    return axiosPrivate.patch(`${url}/update_status/${id}`, data);
  }


  return {
    getAllTickets,
    showTicket,
    reply,
    updateStatus
  }
}

export default useSupportTicketService;
