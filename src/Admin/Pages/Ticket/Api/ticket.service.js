import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/tickets';

const useAdminTicketService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllTickets() {
    return axiosPrivate.get(url);
  }

  function showticket(id) {
    return axiosPrivate.get(`${url}/${id}`);
  }

  function deleteticket(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  function assignTicket(id) {
    return axiosPrivate.post(`${url}/assign/${id}`);
  }

  function changePriority(id) {
    return axiosPrivate.post(`${url}/change-priority/${id}`);
  }


  return {
    getAllTickets,
    showticket,
    deleteticket,
    assignTicket,
    changePriority
  }
}

export default useAdminTicketService;
