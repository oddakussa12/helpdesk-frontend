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

  function changeStatus(id) {
    return axiosPrivate.post(`${url}/change-status/${id}`);
  }


  return {
    getAllTickets,
    showTicket,
    reply,
    changeStatus
  }
}

export default useSupportTicketService;
