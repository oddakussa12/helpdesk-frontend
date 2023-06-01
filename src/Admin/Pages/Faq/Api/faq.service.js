import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/admin/faqs';

const useAdminFaqService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllFaqs() {
    return axiosPrivate.get(url);
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

  function approveFaq() {
    return axiosPrivate.get('/admin/faqs');
  }

  function declineFaq() {
    return axiosPrivate.get('/admin/faqs');
  }

  return {
    getAllFaqs,
    createFaq,
    updateFaq,
    deleteFaq,
    approveFaq,
    declineFaq
  }
}

export default useAdminFaqService;
