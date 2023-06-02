import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/faqs';

const useAdminFaqService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllFaqs() {
    return axiosPrivate.get(url);
  }

  function showFaq(id) {
    return axiosPrivate.get(`${url}/${id}`);
  }

  function createFaq(data) {
    return axiosPrivate.post(url, data);
  }

  function updateFaq(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteFaq(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  function changeStatus(id) {
    return axiosPrivate.post(`${url}/change-status/${id}`);
  }

  return {
    getAllFaqs,
    showFaq,
    createFaq,
    updateFaq,
    deleteFaq,
    changeStatus,
  }
}

export default useAdminFaqService;
