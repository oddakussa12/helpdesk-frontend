import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const url = '/support/faqs';

const useSupportFaqService = () => {
  const axiosPrivate = useAxiosPrivate();

  function updateFaq(data) {
    return axiosPrivate.patch(`${url}/${data.id}`, data);
  }

  function deleteFaq(id) {
    return axiosPrivate.delete(`${url}/${id}`);
  }

  return {
    updateFaq,
    deleteFaq
  }
}

export default useSupportFaqService;
