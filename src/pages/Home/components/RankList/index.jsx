// libs
import React from "react";
// components
import RankItem from "../RankItem";
// scss
import "./style.scss";

const listItem = [
  {
    id: Math.random(),
    number: 1,
    img:
      "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/9/e/9/d9e901750b0205d7fd0cbc8bd87aea85.jpg?fs=MTYyMDg4ODmUsICzMzYzNXx3ZWJWNHw",
    song: "Sắp 30",
    singer: "Trịnh Đình Quang",
  },
  {
    id: Math.random(),
    number: 2,
    img:
      "https://lh3.googleusercontent.com/XSthZaSOZMLJKD3KkudqbOkg_p4EuQsum2PpsRGSzP6w_qZomWqZ8ZvcIeew39yRIeq9r_BUNSj7p_cj_PrwYL6wZlfUi_DOX3I0E_he5RmtvMVUohNUrJOJ_4Sh0zfVHbvZeEGG3_pTEeptYJ2ADqrWdnsaefTQb8B_NguKnORgtUp0AIm4jv2iHWKQP1Nbh8qsz0Ad1vKakLjmRZdwYF--9zQiZFa6jZ86hGpFiOYKBZC1ogsNdFV4YHB0_n17Ad43i_YR5Q798bhAiINlm0XzpeX0VPCYL6KK6IzqILpL92N0FoqT7H5gFFeEeWyqJLJSnWOFPHZkiQeoWTCxmyRZCH1HbdBVVEG8UkN4mOCIcZ2Gnaz0Whx--qDQ1nU6DcYrRYQRrLzw4vB4XP4brRLPaNla_Ve_GZvJD6Zy0m_pLbpt9jgnPchd7_6w9gpBcbofjUWNvhfEjJsNjvihSAaw6RAddVM1vTMb0_TV8klVEMGvY_jlqjyT8JMSp31KGgLZbNdh2rO7tQXOcCTuzHo3juUUD5uY3bQxebU1Cp2i4QvEzv0s6dd58C3-OqtPwUJCif8TIEh4ChePhmwtcZe4gTrG5PCEsxPNzQYuyrTCk7t5331TyGbo5vkKIubAaioSu-OfmmwEPrVjDuCAPo7k4mAendjsAlyf2GBeywc68rwlEOaMgVCmBH7XLynmwNRtB6C6KvCOnRFFioBcF4k=s240-no?authuser=0",
    song: "Vách Ngọc Ngà (New Version)",
    singer: "G5RSquad",
  },
  {
    id: Math.random(),
    number: 3,
    img:
      "https://lh3.googleusercontent.com/XSthZaSOZMLJKD3KkudqbOkg_p4EuQsum2PpsRGSzP6w_qZomWqZ8ZvcIeew39yRIeq9r_BUNSj7p_cj_PrwYL6wZlfUi_DOX3I0E_he5RmtvMVUohNUrJOJ_4Sh0zfVHbvZeEGG3_pTEeptYJ2ADqrWdnsaefTQb8B_NguKnORgtUp0AIm4jv2iHWKQP1Nbh8qsz0Ad1vKakLjmRZdwYF--9zQiZFa6jZ86hGpFiOYKBZC1ogsNdFV4YHB0_n17Ad43i_YR5Q798bhAiINlm0XzpeX0VPCYL6KK6IzqILpL92N0FoqT7H5gFFeEeWyqJLJSnWOFPHZkiQeoWTCxmyRZCH1HbdBVVEG8UkN4mOCIcZ2Gnaz0Whx--qDQ1nU6DcYrRYQRrLzw4vB4XP4brRLPaNla_Ve_GZvJD6Zy0m_pLbpt9jgnPchd7_6w9gpBcbofjUWNvhfEjJsNjvihSAaw6RAddVM1vTMb0_TV8klVEMGvY_jlqjyT8JMSp31KGgLZbNdh2rO7tQXOcCTuzHo3juUUD5uY3bQxebU1Cp2i4QvEzv0s6dd58C3-OqtPwUJCif8TIEh4ChePhmwtcZe4gTrG5PCEsxPNzQYuyrTCk7t5331TyGbo5vkKIubAaioSu-OfmmwEPrVjDuCAPo7k4mAendjsAlyf2GBeywc68rwlEOaMgVCmBH7XLynmwNRtB6C6KvCOnRFFioBcF4k=s240-no?authuser=0",
    song: "Răng Khôn",
    singer: "Phí Phương Anh",
  },
  {
    id: Math.random(),
    number: 4,
    img:
      "https://lh3.googleusercontent.com/XSthZaSOZMLJKD3KkudqbOkg_p4EuQsum2PpsRGSzP6w_qZomWqZ8ZvcIeew39yRIeq9r_BUNSj7p_cj_PrwYL6wZlfUi_DOX3I0E_he5RmtvMVUohNUrJOJ_4Sh0zfVHbvZeEGG3_pTEeptYJ2ADqrWdnsaefTQb8B_NguKnORgtUp0AIm4jv2iHWKQP1Nbh8qsz0Ad1vKakLjmRZdwYF--9zQiZFa6jZ86hGpFiOYKBZC1ogsNdFV4YHB0_n17Ad43i_YR5Q798bhAiINlm0XzpeX0VPCYL6KK6IzqILpL92N0FoqT7H5gFFeEeWyqJLJSnWOFPHZkiQeoWTCxmyRZCH1HbdBVVEG8UkN4mOCIcZ2Gnaz0Whx--qDQ1nU6DcYrRYQRrLzw4vB4XP4brRLPaNla_Ve_GZvJD6Zy0m_pLbpt9jgnPchd7_6w9gpBcbofjUWNvhfEjJsNjvihSAaw6RAddVM1vTMb0_TV8klVEMGvY_jlqjyT8JMSp31KGgLZbNdh2rO7tQXOcCTuzHo3juUUD5uY3bQxebU1Cp2i4QvEzv0s6dd58C3-OqtPwUJCif8TIEh4ChePhmwtcZe4gTrG5PCEsxPNzQYuyrTCk7t5331TyGbo5vkKIubAaioSu-OfmmwEPrVjDuCAPo7k4mAendjsAlyf2GBeywc68rwlEOaMgVCmBH7XLynmwNRtB6C6KvCOnRFFioBcF4k=s240-no?authuser=0",
    song: "Chỉ Là Không Cùng Nhau (Live Version)",
    singer: "Tăng Phúc",
  },
  {
    id: Math.random(),
    number: 5,
    img:
      "https://lh3.googleusercontent.com/XSthZaSOZMLJKD3KkudqbOkg_p4EuQsum2PpsRGSzP6w_qZomWqZ8ZvcIeew39yRIeq9r_BUNSj7p_cj_PrwYL6wZlfUi_DOX3I0E_he5RmtvMVUohNUrJOJ_4Sh0zfVHbvZeEGG3_pTEeptYJ2ADqrWdnsaefTQb8B_NguKnORgtUp0AIm4jv2iHWKQP1Nbh8qsz0Ad1vKakLjmRZdwYF--9zQiZFa6jZ86hGpFiOYKBZC1ogsNdFV4YHB0_n17Ad43i_YR5Q798bhAiINlm0XzpeX0VPCYL6KK6IzqILpL92N0FoqT7H5gFFeEeWyqJLJSnWOFPHZkiQeoWTCxmyRZCH1HbdBVVEG8UkN4mOCIcZ2Gnaz0Whx--qDQ1nU6DcYrRYQRrLzw4vB4XP4brRLPaNla_Ve_GZvJD6Zy0m_pLbpt9jgnPchd7_6w9gpBcbofjUWNvhfEjJsNjvihSAaw6RAddVM1vTMb0_TV8klVEMGvY_jlqjyT8JMSp31KGgLZbNdh2rO7tQXOcCTuzHo3juUUD5uY3bQxebU1Cp2i4QvEzv0s6dd58C3-OqtPwUJCif8TIEh4ChePhmwtcZe4gTrG5PCEsxPNzQYuyrTCk7t5331TyGbo5vkKIubAaioSu-OfmmwEPrVjDuCAPo7k4mAendjsAlyf2GBeywc68rwlEOaMgVCmBH7XLynmwNRtB6C6KvCOnRFFioBcF4k=s240-no?authuser=0",
    song: "Lệ Duyên Tình",
    singer: "K-ICM",
  },
];

const RankList = () => (
  <div className="rank-list">
    {listItem.map((item) => (
      <RankItem key={Math.random()} item={item} />
    ))}
  </div>
);

export default RankList;
