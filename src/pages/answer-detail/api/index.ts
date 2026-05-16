export interface AnswerDetail {
  question: string;
  questionDate: string;
  parentVideoUrl: string;
  parentTime: string;
  myVideoUrl: string;
  myTime: string;
}

// TODO: 서버 endpoint 확정되면 axios 호출로 교체 (현재는 시각 확인용 더미)
export const getAnswerDetail = async (
  _id: string,
): Promise<AnswerDetail | null> => {
  return Promise.resolve({
    question: '어릴때 꿈은 뭐였어?',
    questionDate: '2026년 05월 17일',
    parentVideoUrl:
      'https://videos.pexels.com/video-files/6567877/6567877-uhd_2732_1440_25fps.mp4',
    parentTime: '오후 08:24',
    myVideoUrl:
      'https://videos.pexels.com/video-files/6567877/6567877-uhd_2732_1440_25fps.mp4',
    myTime: '오후 08:24',
  });
};
