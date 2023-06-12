import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

const url = '/admin/ticket-status';

const useTicketStatusService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllTicketStatus() {
    return axiosPrivate.get(url);
  }

  function createTicketStatus(data) {
    return axiosPrivate.post(url, data);
  }

  function updateTicketStatus(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteTicketStatus(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  return {
    getAllTicketStatus,
    createTicketStatus,
    updateTicketStatus,
    deleteTicketStatus
  }
}

export default useTicketStatusService;
