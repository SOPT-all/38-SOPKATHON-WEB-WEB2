export interface AnswerDetail {
  question: string;
  questionDate: string;
  parentVideoUrl: string;
  parentTime: string;
  myVideoUrl: string;
  myTime: string;
}

// TODO: 서버 endpoint 확정되면 axios 호출로 교체
export const getAnswerDetail = async (
  _id: string,
): Promise<AnswerDetail | null> => {
  return Promise.resolve(null);
};
