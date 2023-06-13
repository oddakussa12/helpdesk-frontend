import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const url = '/support/base-data';

const useSupportBaseDataService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllTicketStatuses() {
    return axiosPrivate.get(`${url}/ticket-status`);
  }

  return {
    getAllTicketStatuses
  }
}

export default useSupportBaseDataService;
