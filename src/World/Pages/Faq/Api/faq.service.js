import httpCommon from "../../../../axios";

const url = '/faqs';

const useWorldFaqService = () => {

  function getAllFaqs() {
    return httpCommon.get(url);
  }

  return {
    getAllFaqs,
  }
}

export default useWorldFaqService;
