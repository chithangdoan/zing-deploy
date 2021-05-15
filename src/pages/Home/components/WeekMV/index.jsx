import React from 'react';
import WeekMVLink from '../WeekMVLink';

const listItem = [
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/mln03WkL25uAIe7KuVbdDx9PpAZyjNCHhlx0xdRhuZ2BMz9ImY9xToubt6pU10xwSot5V7mnKbcs2GjLggWhaA2JAMgm7269JQvxAEFc1hErHzSkZd-bNsVnGxYzRYMwMYt_9OM-EMQQMvu8I6cpvGak5KNd6-xgRJurLMB3YvELDUxiIr2bdcCXngbcYsSp4rYLadp4uOhHBWCEt_ouq_v-Ci9ttCN-vGWe1F9A2a-Zy8sW4wDNOAY8-ahOwTNvKNVCLtKbjHLLl1wUsnro02Y3RgN4JScoD8hexPGm8T7CqUS18T-qZ271GxJShqEs4c6BqxQGXrmvl1DwxSy14UDJf_wGaYLNn3juketRzqCyQUd0eSxTsNb-RlBlD34wJixcxGfVpQU4sogl0DnEohc4xg4tNv5_BEHtYSbSw1Obk6cgD8lSWBJJAJSClXeQMEXCnAXBZCNNskRf_XKeWdD7oakUNm3IaXtuBFLj3grckRYuaKvjZnmn3i6mUYr2N8yLxxvfPy3carrABIhoOnDutWORey0sYpt1zHP5qDtLxhgKU7OsTHgcur1eTvle7NT0JfeWjvW1jsJLY81PvRIYeiZGpnHWiYyyxRCrcjdneXtHccYjeZhN4UdOSWYnH1fQAeipQRSjikyJi6JfELVx48m_NCwmhZc8m_KzFmwZ90krmCvHNdWONNuLx3xyhQxlr_t9YY4NfM3mEyuRmzVM=w300-h168-no?authuser=0',
    song: 'Em Quá Khờ Dại',
    singer: 'Nguyễn Thạc Bảo Ngọc',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/G3zu2r64WKjIM0FnKk3egV-d-B8foFrh4MQKrNQF8hH-oLXJQUzG4VHhCJst0U4B29umn8UVKBJ8G5Bhr1DJOd_yGMKWpHZCkY7PMGL0xFrnLqMR0ABqEiVOGFxUPpU_P2_ocElzgbgUJc51BpeCeiWSri8_cyCAAAa4W-FJ7KW1_uNqdmMjFOeEDRHoGuThQuO8h2arrwWaJac2CCwsURauirThtsuQrWzuVmIRN8A7XyBZVpG4lyrNkj9SAvRgXzUnq1btvbY0-B7dQGwwcDcitl_9sS1F-qnDJauowOOvPh_K24PtP4fY2votT-JsjkKj2ZA2GoKyR-9Q5TPMD1aMgHj5TQIUWMCFl6B45KHlHTcWDz0gxv95zkptYcOugSBMY5dDcArx4zhGqXZfLHL5SvjDzppI8RsfQPVC2re38Y3RSHVxwMGnKe5tTeCgLBC5nNQwJsIyzrHmasfZuWftlaT2BhxUgM1RDpj4ONnkb85YYrCnPUvE-ncnCaRtLSHXDt5x1ygmuJYYPqqPXVT1dtEH9OgcwDZV-rvG-aZj3ckAl0NRYWx3WMMbgpmiWCYaF2olXEXdZD8Jjhdnqt3lfUsSyvgIxjRq8Ek_vkCtrQkT6Nkc8x469l_-xkdtX3256wdVBZQi4FyBA1FihdK9DPmmAjw4tIqkhLQ0xJ1QtMUytVD_K5g2QLR7TgH970I5bbZyXzgBdZvQBxaGeJBd=w240-h135-no?authuser=0',
    song: 'Quay Lại Lại Yêu',
    singer: 'Ngô Kiến Huy, Vương Anh Tú',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/-Miv_pwEUOnLRBhwG3sHoFMBfn75r6EgdPety_TaqDzs0XWPzVPxUUxoeZ9_ZNbbcDNhKq1yiK-xh4ne_mYa1wyKuyK7SEorZP3fqk1AznJDdD50isIaGwhoIjxj9PizqFF7sLOCUA7IS1-s-KVGh0tkekfFXqOB3v36uLB6fxqKrMxENVzJ6dUPSSE_X-JDd0tqgnWaV4TVy_LI-74pSnz9fKKoBn51sqOT9y22DqcQtroKu61Yt_0Xva6okfA8Qeni92FUDzv4XzEXUNpeZ8lVh0IykcAjoCqKlgffVke--sWTkzjap9c2ldtdWwf5nYmjpQc4_-ytAtSmlZ73A8xycZfZ2rtngiaxwnNrRaUXhNbyFB8Cn0qoRKhlJfTdFAELXVdgNp2BPdGTMMjfd5vpzqqOLoK4FSKis7ydqf736QvKBpIL1W77P0pH8UY-oxxWmZ3Cda0GBa2IftyMa4266Tr2N1Q6dOWeR8XEl7Igp29tHwMUPm_ksayQUjn0ATa_US4OMey3uxS5h0MQMFyh9vH8eShLRdxan3ImNXC1h99gKAc9dRiUj0XXDwb0zBerH8jUaNIZ-ZJCaGpJ9SQa_6n_Gl-QbmkuQXaKoHjH9OfHmAzc4QduR1r_Bde-EEBGuvOXD255uqS5YdoXGYapfoJErXtfPyM4NXOfPqIcqXskmTm9ELVNS9lCw8m2JkJCp78mY02BIlAXcfH9XZfl=w240-h135-no?authuser=0',
    song: 'Đom Đóm',
    singer: 'Jack',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/Hwy8aNqEpZZFrMn60A7H2qbq12SgbRFL7WStxXux9yGu9DwYSdho3yLAvA6Xb4uW6SHnvn2KrFbsJ8-PHaMFppYItprAKArJQ8W9QKrT5Q3kli5I7i7Ghw5DRC8tpCu4aPN3laIf8wtFkHBGpXSEWQOS99Y3wbj6wBl5nlKhrGOYSb6km9MY5h1_q_y8HjijIAvRbtLVCFYnd5gMf3WauAyparYRMml7Lpp2mUyhcYhBkJI_AZ2B-2nk4E3lIdc584ng4LkhDVVPLoXDJ4HKZQxEenxg36Qcvjko_O0hw0_HlxJPcqxrYtbPtVsSgmBBo2U09Qo92J08mp55t7NqnK7c3MgWsVYr89yR0AWxYn2E7YfFxzWfOcdOtS0z_huKu8wuejprONIlY6vosyMFXqMyZqHmRXBb5ob_V3pMWgmpYvBcLo4t31sv6ElCC_auRrZG92_HN0dNtUNYVoTTdIDmaswkdT4vht_FCDU3L70gY96Ep8LAfEMkkj4uV3aw-Rhkot00wXef6KtrsT9EtUYM1XuYIjWDuacpiGnF7ygX3VtKAAODOMXqwtx4mtwV7FdC1d0jcVvUpesRF2yATr3dLLz_-E45McVl7lsK4VrkioL4lcH69yHGl46EAMbNaqfHdm6rPRyZeaMAZ6XMmN4UctujE6eO6SkdAAZKmQFU1eNzE591rDBLOUu7lSlScMIt6Jd3Qj6Baf23ZfF74mKM=w240-h135-no?authuser=0',
    song: 'Người Ta Đâu Thương Em',
    singer: 'LyLy',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/YBv-A4O2rQcNwID5zSdyc9Bk374XrhWP2PMpZCRoL8LlURtIMlOvQXBPFP71at3cYehQN780r-PW1PQgP8HltnWZBbFi3G5xIu1rz6uqVRk16A8HUv4YAHD-rIYPL7Akl3TdVrO75nPb05zJ1wOeb0KeAvW2HlZCpbOb4yZDs9sWsKazbzybLHotN_vESicg0WMQdKz8P8nC3J3hwuExP0f1d5GwtmEJjumHGQCRVpc9sgCuEH-bt3buD7a_k7ekgea-0PFnvUS0dUryIUiSduCXvrAoOjqyKEY201VgtdM0e1a_s07pueBFq1wbIK_8BoIO_AFJEC81F3hGEabs_wWZkoUndg2TTc7zc1lJp5AX2NLw7G7xrJQi8UVE8m6pUp9HaJEPxTfMU-1K15pDorKnePtksLQJm3X0dBBk4Ev2aODTQl9_nCebiwcfBKuhLdUPNl16zSnd4As6V21vfdLoNXzGgvPO63oi4i_ym4FcTmBcXV3hMMITMxBfxkMCV5z1Jkpn8Yx5cojvvrxX52LQb2_M3VP_GwNauj7uK-_AsmDPCh4blPDSMIkJUVkiXdRDoObW9YZ9G8YYyMSPw5SXZM3UkP9lOu5sECUhcii5X0f4Vny5G3bJe57M-qKiln_LnVAgCVJQ3eVkcJ6XUyb9FvbdzlG2GLAC55Smhul3ZTug8jWXASf1qQqJ5Hf8Vj4LqG8xM1s3juOgkwBpQU1C=w240-h135-no?authuser=0',
    song: 'Anh Luôn Là Lý Do',
    singer: 'ERIK',
  },
];

const renderList = listItem.map((item) => <div item={item}>adasdsad</div>);
const WeekMV = () => {
  return (
    <div className='week-mv'>
      <WeekMVLink />
      {renderList}
    </div>
  );
};

export default WeekMV;
