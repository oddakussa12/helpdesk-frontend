import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/support/tickets';

const useSupportTicketService = () => {
  const axiosPrivate = useAxiosPrivate();

  function updateStatus(id, data) {
    return axiosPrivate.patch(`${url}/update_status/${id}`, data);
  }

  return {
    updateStatus
  }
}

export default useSupportTicketService;
