import React from "react";
import WeekMVTop1 from "../WeekMVTop1";
import WeekMVTopNList from "../WeekMVTopNList";
import "./style.scss";

const listItem = [
  {
    id: Math.random(),
    number: "01",
    img:
      "https://lh3.googleusercontent.com/XSthZaSOZMLJKD3KkudqbOkg_p4EuQsum2PpsRGSzP6w_qZomWqZ8ZvcIeew39yRIeq9r_BUNSj7p_cj_PrwYL6wZlfUi_DOX3I0E_he5RmtvMVUohNUrJOJ_4Sh0zfVHbvZeEGG3_pTEeptYJ2ADqrWdnsaefTQb8B_NguKnORgtUp0AIm4jv2iHWKQP1Nbh8qsz0Ad1vKakLjmRZdwYF--9zQiZFa6jZ86hGpFiOYKBZC1ogsNdFV4YHB0_n17Ad43i_YR5Q798bhAiINlm0XzpeX0VPCYL6KK6IzqILpL92N0FoqT7H5gFFeEeWyqJLJSnWOFPHZkiQeoWTCxmyRZCH1HbdBVVEG8UkN4mOCIcZ2Gnaz0Whx--qDQ1nU6DcYrRYQRrLzw4vB4XP4brRLPaNla_Ve_GZvJD6Zy0m_pLbpt9jgnPchd7_6w9gpBcbofjUWNvhfEjJsNjvihSAaw6RAddVM1vTMb0_TV8klVEMGvY_jlqjyT8JMSp31KGgLZbNdh2rO7tQXOcCTuzHo3juUUD5uY3bQxebU1Cp2i4QvEzv0s6dd58C3-OqtPwUJCif8TIEh4ChePhmwtcZe4gTrG5PCEsxPNzQYuyrTCk7t5331TyGbo5vkKIubAaioSu-OfmmwEPrVjDuCAPo7k4mAendjsAlyf2GBeywc68rwlEOaMgVCmBH7XLynmwNRtB6C6KvCOnRFFioBcF4k=s240-no?authuser=0",
    song: "Em Quá Khờ Dại",
    singer: "Nguyễn Thạc Bảo Ngọc",
  },
  {
    id: Math.random(),
    number: "02",
    img:
      "https://lh3.googleusercontent.com/XSthZaSOZMLJKD3KkudqbOkg_p4EuQsum2PpsRGSzP6w_qZomWqZ8ZvcIeew39yRIeq9r_BUNSj7p_cj_PrwYL6wZlfUi_DOX3I0E_he5RmtvMVUohNUrJOJ_4Sh0zfVHbvZeEGG3_pTEeptYJ2ADqrWdnsaefTQb8B_NguKnORgtUp0AIm4jv2iHWKQP1Nbh8qsz0Ad1vKakLjmRZdwYF--9zQiZFa6jZ86hGpFiOYKBZC1ogsNdFV4YHB0_n17Ad43i_YR5Q798bhAiINlm0XzpeX0VPCYL6KK6IzqILpL92N0FoqT7H5gFFeEeWyqJLJSnWOFPHZkiQeoWTCxmyRZCH1HbdBVVEG8UkN4mOCIcZ2Gnaz0Whx--qDQ1nU6DcYrRYQRrLzw4vB4XP4brRLPaNla_Ve_GZvJD6Zy0m_pLbpt9jgnPchd7_6w9gpBcbofjUWNvhfEjJsNjvihSAaw6RAddVM1vTMb0_TV8klVEMGvY_jlqjyT8JMSp31KGgLZbNdh2rO7tQXOcCTuzHo3juUUD5uY3bQxebU1Cp2i4QvEzv0s6dd58C3-OqtPwUJCif8TIEh4ChePhmwtcZe4gTrG5PCEsxPNzQYuyrTCk7t5331TyGbo5vkKIubAaioSu-OfmmwEPrVjDuCAPo7k4mAendjsAlyf2GBeywc68rwlEOaMgVCmBH7XLynmwNRtB6C6KvCOnRFFioBcF4k=s240-no?authuser=0",
    song: "Quay Lại Lại Yêu",
    singer: "Ngô Kiến Huy, Vương Anh Tú",
  },
  {
    id: Math.random(),
    number: "03",
    img:
      "https://lh3.googleusercontent.com/VKg5wKOnCSbTw7uNc-Rni-5J5odghzvYaZx2l1EnWdLQEZUYIxFW9u-XViHei_mGxmbhHofs_DpYBR6OpfPE6R4IYDqIxPaMy1OPHRWnTLhjvFvHtrzUxPUCX1AFhdZEPtCcsUwbqT7MbETZvzyLk5T2W7XDI5sq1jX9yAjCAOIwuEj0JkCcNT6d5mo2hYd3ENUuB0rpBnUOR3bzlMb-GJ0TWYWvZ6-0Yjm6NjaV55b3--TaO3L_wIHhCmuW1Q1pnPmWW7B2YREcxiE9fMwacethJTQFgbljPtF6Xv4BmDFumevpZuR3veso6RPeAAWdKwIfXC5zvH0zfCRe5VTUMJwRhUtmOndzBdYNOt-gkiSW1F2GEaF483UihpzTS7OkBpbo4j6u8eezOD6tI39eRi5WZFnoBwxcvQQIVee_xexd75UaqaYMWxdgHkZ0qwUmVrlfScQavl73c5N4k8NWkQlwQW7DQnxu_vl1KksGQIHgSEL5WWzn9qXxfMyUYApWRYT4QAYdu6mscFN5iekig32mi1SBBhSY2MATDW0BNFPUS71yPFrZZVpcoJBFddc1gukoQD8PJLxhtIOb7FNpQnTemU05GCqJVEaA9tbPbjdkY-6kuW0EYL1Coh0xmcASbqyE935EUVYNp8KGcotDJcJZ_jKcwyjQ9VS9J91p6PMq77tlrfZ0K_KJaUuEuO8f-ASxtgr2ZFbPxJ4AdgFmEVkL=w240-h135-no?authuser=0",
    song: "Đom Đóm",
    singer: "Jack",
  },
  {
    id: Math.random(),
    number: "04",
    img:
      "https://lh3.googleusercontent.com/X1onvgQ3RWsIETfMBhx3ej5vVIghuN27BL_uN1ZdSw81WohbWSnzbSLMxj6OvtscUql0-jMUCAKwUQj7rfTT6ttoUY7CdXxw7R7Cp-kd3LETbIg6-Y5XKzs4xTmyFMcDVbjBhuspkmVyPm40tTX4WrrJZt65XOMkGX7emTpiDx8CGl-Ygxzs1WqaDB_zP4_laicEKFwKrQNkhiXhDKG1dnScsr5Xnta54dkXkABZt-Nvc5GWVxDa_kjnM2SjQhGVa9X16xO6BgG1aBv-WpaTQVZKnBZYa5Zqx74sxNY3YkJZg59Pzg7WjgUm7wKC2s3fJuUY5V79oln-31olQdTfs321okdrBWQrne_GhdrwxRNvTrQbC3jseUnLvZywJt4uECzYcKKDHC5oXVnhHGGr_j9eQdTYxm6cydxaj9Vj3ioRX3sdQ43TtRGT5dNJkZ46kceuaGZJLqKTd_BKry4AHIgbg73i8poSXRjpjhzoMIH2KQ3BFaXP2TCh7dghkw1PpdkHE7FR9Y5I5EViSyRcsB3os5r66QoGUls06wB5BwPm-7JaTwhFzhRF15mMmslM7J0pgUZgWvFt56wDyAo12SSPxp-9jdj-N5CVXgqZ7PgiQNb_RCnvyqf1487iK8aHjz2r1X9eZoXcG8xk2VzOhHW2rIMyivCkxBCnP3pJ-4HKtwnBsiEePh9bI9WXBiTPObpdxhCzRabDgxRzeqOxQWFw=w240-h135-no?authuser=0",
    song: "Người Ta Đâu Thương Em",
    singer: "LyLy",
  },
  {
    id: Math.random(),
    number: "05",
    img:
      "https://lh3.googleusercontent.com/kOpi8IhI2mERnTMFV4YLaHYhCx9FwQwcCSqbRzE2swEFs3mNf6KMAjBaFkdeVUkqUyxLVQG-QlhXvqaAkRF8B4x5JxhgnmIIeDTZ70rw1n54JKew2QR_ZmzkKYd4Wc6YTTwDzKXOwdnvYb6qS1d6UIoUj7xpfNaTsNHA11CRx0oodPjJboUTVpDsRifrnbZlKEfYh85iTKRyG_b9e7PxUfZeUgvwWTh72AAU7Q22j3J4u2W8tJ_2-1f7wV0a_O-SxS8DXPhrJ2K5iiXj1aTk9lpTxZgT3N9T0J9pFC-1NviesK8DVENjND9TGvtHimQz3tRHm3ZkIvl2H1xAjB0RC1csJNzd6LTlaqjggZziitNsMvov9rL-zvsd5agKVzFxWbGwD79tIzESP8gweCxSMmbxUqioZInoquptCTuoMdcbi0goxVdP42M6mdkY0BSR-cD-iIcoefvVLPa3VpPpZpi8sKTd5hE1QmrXIHx2-Uj0MUdmFHABtMSAFNpzQhpVqhiX6eZ22GXCK1SCj2kz1jefWDkYzp8KFEw2IGzcGJssuooc0h6rYy__ITyE_Ox2KkwRb4MpQbQJD0ZtMdwqx6f7ro4OG4nIOhbDbfl8PcpGBTo0IT8Rog-o3rZm2TeBmZefolLlArngMYBzDGWKRMWf51m_PuxKd1c7trIA7APbz8W4kejFvVuYqlkk3qx2leXyiCsrUVsP1r5jaS43II7Z=w240-h135-no?authuser=0",
    song: "Anh Luôn Là Lý Do",
    singer: "ERIK",
  },
];

const itemTop1 = listItem.shift();

const listItemTopN = listItem.slice(0, listItem.length + 1);

const WeekMVList = () => (
  <div className="week-mv-list">
    <WeekMVTop1 itemTop1={itemTop1} />
    <WeekMVTopNList listItemTopN={listItemTopN} />
  </div>
);

export default WeekMVList;
