import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/support/faqs';

const useSupportFaqService = () => {
  const axiosPrivate = useAxiosPrivate();

  function getAllFaqs() {
    return axiosPrivate.get(url);
  }

  function showFaq(id) {
    return axiosPrivate.get(`${url}/show/${id}`);
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


  return {
    getAllFaqs,
    showFaq,
    createFaq,
    updateFaq,
    deleteFaq
  }
}

export default useSupportFaqService;
