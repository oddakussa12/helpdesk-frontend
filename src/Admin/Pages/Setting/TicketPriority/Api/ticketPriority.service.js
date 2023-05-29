import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";

const url = '/admin/ticket-priority';

const usePriorityService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllPriority() {
    return axiosPrivate.get(url);
  }

  function createPriority(data) {
    return axiosPrivate.post(url, data);
  }

  function updatePriority(data) {
    return axiosPrivate.put(`${url}/${data.id}`, data);
  }

  function deletePriority(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  return {
    getAllPriority,
    createPriority,
    updatePriority,
    deletePriority,
  }
}

export default usePriorityService;
