import React from 'react';
import WeekMVTop1 from '../WeekMVTop1';
import WeekMVTopNList from '../WeekMVTopNList';

const listItem = [
  {
    id: Math.random(),
    number: '01',
    img: 'https://lh3.googleusercontent.com/KIUWZnqamDKO2OhvXkUnOSIiH1gx45rZdN8lOGwRoy7Ia-D8by2icKJ51cANhehYW5G27IUeGf48McYqMwPO3huwrSlSynX9faFg7qAPEzvWreSFnkPXtrsYg_dUVU368HuBiBU1RFnRlhliKREqcS1iYT5CARoiQD0LOMnY392urPWVtcWR1iFzHBHFsjcVcZzXJBCk2mAaB1tI8Whea0YwRRfAjdfJmLq0V7NNZ4mFHqY_EmHtct4oj6Bf9Zm5F2MxYtfMXAM_YwQYjrwW7zCHfj-fRJ3SZzFf6q8qzBgnvs2gSp1pL0i8NopWOrQH8brd3BMTHj3OG5mOaXbbVvxJQbtqJCKCi1G9_yEnWmY5vf145jdcGCFqesO31gcYYvivkpHxJa699uYpaL4j-p5Z8AH4vCRjVlMzDKXAHBBYzdh26w4Lwf3dwIm1M0mTRtlTTINr89E83l0oaLodV9aazepDWK3gW4fS6Jr8nB0_sd0Dc-1xYfI3YP73Ysoh-3woQ2PepXG-w_-5Sacl27UePBB2Wu_nNEB63S9bWks0wIIy6lPhvbSUgS_OXtxyqqvsmWm2nHyjCw8BzYTHM_prp1-Wobit1eRw5Ql8wzo2d606fyYQysq1OO0z2mryiFQxtrn0g5cghyVDVYzafbkRr7WLgsLtv1jC735aqvgt1lyXolPesVb2iKzFPAKUjW72_PDM0fA3w33MVhTcBjQv=w300-h168-no?authuser=0',
    song: 'Em Quá Khờ Dại',
    singer: 'Nguyễn Thạc Bảo Ngọc',
  },
  {
    id: Math.random(),
    number: '02',
    img: 'https://lh3.googleusercontent.com/y_FT4RLIErcGIWt20KUrj4xS0kIXEzlTNdyx_SfutTN0Z0kSPE8HdmU9u0rcSJtTTp7tSwHbJJ6Y9QDHg2rHBQZdx6O5YVR5Hh4uFOkixdFcMwGoCLDzKMbNPVv02A5V1GXB-a8DWPkgreiZymarEDCC84PWH5c5GrTSeJgURuEKcV-0Fk1bkCW5Pi8ql8SkMCuQUTAcyqZ730z0QWXt64Gh0vUpYmxMmpi7SB7WayE2zp4yRao-3vqwmHk4_-6LcEaxhyYAa2gAg0nY9OK6Dk44nO7bcXxt3w39RSFdf-EcF94b_1_QV252_MYFnF3QC1dtUyUelDPQwMavJbMfcbxpp5c81hIVSyoKBa_S0y7tr3JViVMyrTctbq33t_pIrx890VU-9kYfsCq_aAN0J4y2eakz8M5alSb5A00haQhfUYATqRoj_PDzxyFyrxkPyD3ZIzTCYF_IpQOK6rBb4iCnpNcMbGUPBbs1RN0Lqh4-a0JFrK3EI_YGq85itDRyMVr-iQOrFe4PDUY4hrLxbaC6SNkbV_ujwLqVk0EfEpCPJoKHScpK5niymUojt7eiXWjBSOtjeyTk22_-IJ5nyCBmeMMY3SreePrEurOerG67di6M7X6EFlGMW-awGqOVUTuuB27q-VAkbDZ4b-2rVs6jQtwNR7OtzhpWDvd2CKsc73sPcAoHFgK5l09NYd6NlWE289Q2Ru-BznpItqbbxwBa=w240-h135-no?authuser=0',
    song: 'Quay Lại Lại Yêu',
    singer: 'Ngô Kiến Huy, Vương Anh Tú',
  },
  {
    id: Math.random(),
    number: '03',
    img: 'https://lh3.googleusercontent.com/VKg5wKOnCSbTw7uNc-Rni-5J5odghzvYaZx2l1EnWdLQEZUYIxFW9u-XViHei_mGxmbhHofs_DpYBR6OpfPE6R4IYDqIxPaMy1OPHRWnTLhjvFvHtrzUxPUCX1AFhdZEPtCcsUwbqT7MbETZvzyLk5T2W7XDI5sq1jX9yAjCAOIwuEj0JkCcNT6d5mo2hYd3ENUuB0rpBnUOR3bzlMb-GJ0TWYWvZ6-0Yjm6NjaV55b3--TaO3L_wIHhCmuW1Q1pnPmWW7B2YREcxiE9fMwacethJTQFgbljPtF6Xv4BmDFumevpZuR3veso6RPeAAWdKwIfXC5zvH0zfCRe5VTUMJwRhUtmOndzBdYNOt-gkiSW1F2GEaF483UihpzTS7OkBpbo4j6u8eezOD6tI39eRi5WZFnoBwxcvQQIVee_xexd75UaqaYMWxdgHkZ0qwUmVrlfScQavl73c5N4k8NWkQlwQW7DQnxu_vl1KksGQIHgSEL5WWzn9qXxfMyUYApWRYT4QAYdu6mscFN5iekig32mi1SBBhSY2MATDW0BNFPUS71yPFrZZVpcoJBFddc1gukoQD8PJLxhtIOb7FNpQnTemU05GCqJVEaA9tbPbjdkY-6kuW0EYL1Coh0xmcASbqyE935EUVYNp8KGcotDJcJZ_jKcwyjQ9VS9J91p6PMq77tlrfZ0K_KJaUuEuO8f-ASxtgr2ZFbPxJ4AdgFmEVkL=w240-h135-no?authuser=0',
    song: 'Đom Đóm',
    singer: 'Jack',
  },
  {
    id: Math.random(),
    number: '04',
    img: 'https://lh3.googleusercontent.com/X1onvgQ3RWsIETfMBhx3ej5vVIghuN27BL_uN1ZdSw81WohbWSnzbSLMxj6OvtscUql0-jMUCAKwUQj7rfTT6ttoUY7CdXxw7R7Cp-kd3LETbIg6-Y5XKzs4xTmyFMcDVbjBhuspkmVyPm40tTX4WrrJZt65XOMkGX7emTpiDx8CGl-Ygxzs1WqaDB_zP4_laicEKFwKrQNkhiXhDKG1dnScsr5Xnta54dkXkABZt-Nvc5GWVxDa_kjnM2SjQhGVa9X16xO6BgG1aBv-WpaTQVZKnBZYa5Zqx74sxNY3YkJZg59Pzg7WjgUm7wKC2s3fJuUY5V79oln-31olQdTfs321okdrBWQrne_GhdrwxRNvTrQbC3jseUnLvZywJt4uECzYcKKDHC5oXVnhHGGr_j9eQdTYxm6cydxaj9Vj3ioRX3sdQ43TtRGT5dNJkZ46kceuaGZJLqKTd_BKry4AHIgbg73i8poSXRjpjhzoMIH2KQ3BFaXP2TCh7dghkw1PpdkHE7FR9Y5I5EViSyRcsB3os5r66QoGUls06wB5BwPm-7JaTwhFzhRF15mMmslM7J0pgUZgWvFt56wDyAo12SSPxp-9jdj-N5CVXgqZ7PgiQNb_RCnvyqf1487iK8aHjz2r1X9eZoXcG8xk2VzOhHW2rIMyivCkxBCnP3pJ-4HKtwnBsiEePh9bI9WXBiTPObpdxhCzRabDgxRzeqOxQWFw=w240-h135-no?authuser=0',
    song: 'Người Ta Đâu Thương Em',
    singer: 'LyLy',
  },
  {
    id: Math.random(),
    number: '05',
    img: 'https://lh3.googleusercontent.com/kOpi8IhI2mERnTMFV4YLaHYhCx9FwQwcCSqbRzE2swEFs3mNf6KMAjBaFkdeVUkqUyxLVQG-QlhXvqaAkRF8B4x5JxhgnmIIeDTZ70rw1n54JKew2QR_ZmzkKYd4Wc6YTTwDzKXOwdnvYb6qS1d6UIoUj7xpfNaTsNHA11CRx0oodPjJboUTVpDsRifrnbZlKEfYh85iTKRyG_b9e7PxUfZeUgvwWTh72AAU7Q22j3J4u2W8tJ_2-1f7wV0a_O-SxS8DXPhrJ2K5iiXj1aTk9lpTxZgT3N9T0J9pFC-1NviesK8DVENjND9TGvtHimQz3tRHm3ZkIvl2H1xAjB0RC1csJNzd6LTlaqjggZziitNsMvov9rL-zvsd5agKVzFxWbGwD79tIzESP8gweCxSMmbxUqioZInoquptCTuoMdcbi0goxVdP42M6mdkY0BSR-cD-iIcoefvVLPa3VpPpZpi8sKTd5hE1QmrXIHx2-Uj0MUdmFHABtMSAFNpzQhpVqhiX6eZ22GXCK1SCj2kz1jefWDkYzp8KFEw2IGzcGJssuooc0h6rYy__ITyE_Ox2KkwRb4MpQbQJD0ZtMdwqx6f7ro4OG4nIOhbDbfl8PcpGBTo0IT8Rog-o3rZm2TeBmZefolLlArngMYBzDGWKRMWf51m_PuxKd1c7trIA7APbz8W4kejFvVuYqlkk3qx2leXyiCsrUVsP1r5jaS43II7Z=w240-h135-no?authuser=0',
    song: 'Anh Luôn Là Lý Do',
    singer: 'ERIK',
  },
];

const itemTop1 = listItem.shift();

const listItemTopN = listItem.slice(0, listItem.length + 1);

const WeekMVList = () => {
  return (
    <div>
      <WeekMVTop1 itemTop1={itemTop1} />
      <WeekMVTopNList listItemTopN={listItemTopN} />
    </div>
  );
};

export default WeekMVList;
