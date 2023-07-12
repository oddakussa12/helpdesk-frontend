import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const url = '/support/tickets/dashboard';

const useSupportDashboardService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getDashboardData() {
    return axiosPrivate.get(url);
  }

  return {
    getDashboardData
  }
}

export default useSupportDashboardService;
