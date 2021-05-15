import React from 'react';
import RankItem from '../RankItem';
import './style.scss';

const ListItem = [
  {
    id: Math.random(),
    number: 1,
    img: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/9/e/9/d9e901750b0205d7fd0cbc8bd87aea85.jpg?fs=MTYyMDg4ODmUsICzMzYzNXx3ZWJWNHw',
    song: 'Sắp 30',
    singer: 'Trịnh Đình Quang',
  },
  {
    id: Math.random(),
    number: 2,
    img: 'https://lh3.googleusercontent.com/U2gOBXPrVEw9QGdavXubWWLxBhWZSiMGaG0lGZ9irfCp0I9y5rstaFKayd6lr1rCEGKFc7iQABsdkoZ_wmqNIjNKjpYkEdFrPKRsAUZ-TFW5-afV3VAywKp63kXnDVrbTaJS_FU8Q6KYTzfcyY78Ni-Ha0-SP6VL5UZ5rABEemQLDB2CAHFCe0o7QrglGQzQscdij8aCzHFXOOG1zWHO1Gv2_ONzzhZH-mPPKe3XvhO23l0UCZ7f9Zl91xMPrJSc0vSppwV8uyJUTG9MDhwainucic5H3bialZULDtEBkbCW9T_Xj68rWz9bHwrlY9e_cUSlQvxzxEt2pct8wS2iikh4QwiEIeDdp1b5NBvL3bZCoETvQnS7eKtkFL8a5xYf5VfF5VBJTfYaJKudkzp3Wbf4UF2e8kSkTG5FYNws6C1NpYDKpC1LCLUoCKv8NBkISjz_vDGrjzl8_CPB3DRdF_V4SjlDas7ZZFOkDC8_5f3ddYIOr3rUhjWlRyA7TPotYOZ3E1-zxNxugHN_QilJVy79I7QuohgGlcYIPW4CrYtuthpAvfXnTTfp8Yq0y4SeGchdQUo9YrxcNPBfF70sWlKooOdPmYTtaVWaQeAc3VMYEksV7q8ai-YBkBluHVTSr66yQOFCBthDWIjrCpFG_FUuc6yP5W3oJ1VR1zBYJe2Dd-Myspsg1PfrHo9EbUvyami7-wqkBmXyVLfDjplql3a8=s94-no?authuser=0',
    song: 'Vách Ngọc Ngà (New Version)',
    singer: 'G5RSquad',
  },
  {
    id: Math.random(),
    number: 3,
    img: 'https://lh3.googleusercontent.com/CQD6RNDWPvI_RGFJ7djhamxOrDnY6tsb_6ORsVEdKScHbwnqA7SrwfkjGN3qXtyJZQUwq76GQR69obCgagT-bV8CglAiJhEuOslOM0TxntBgg9pm96wXRlqVQSjuivrBbntnBvLOkQHZfLSAJGm9ZJohHjYWJSDxva9ydGDEA2lNnLNacG0j0FCwjfWXC32k0r9-kx3IqntVFKkSp3i-oNhGE9fwmg9xL8SjiL_F-y_UIeWUrMNUeAAsnXYTiLvR2v1Dhp9wLDiJB1obBHLFqWAxl_uz1RAjp5R5QVL_eOUuxI8TN-3QIOQ8x_c-lO_YNXh0pjmoFZ6WLXb856jtoX3sH7jVhtHzguTMxVJgBFNyeTtnfrUSHHWWgvXG9bLLD30ZZddP-kArYa8WXgJradsX-_tyEwpyk-FgeTbglbnJn12_EptuM7FBRPpETYrTydzwnQlur3DwyZrAOhDsdg7AngA4PuVRrIdSSiGxYjhwe5xc1l3nDkywtD0w7SzNnexze_w65Sphdk__fqwIujeg8J6_YqO9A_wnlcnlAHrVbI8owCN9JmCEFZs96fFgU7EsyhUxfoGRYPNLbBcTAMzsNT9spwDAoyiHjk74wzkPX8pR5B_4SR0fEIJsfFuN_7zBRHm2pNOpaD2X1l7CdP90uczBcVOy43XGatUJZanux6s-pqBAZV8rgPVC1COHE2E5frYUpEJMX_6zrE3AwYnZ=s94-no?authuser=0',
    song: 'Răng Khôn',
    singer: 'Phí Phương Anh',
  },
  {
    id: Math.random(),
    number: 4,
    img: 'https://lh3.googleusercontent.com/nsZ0cYdsPWMEtuQVU1--M3fibcVegRAI68B6TlpF4ublUrEwf4JO6FLTJajjvpjwHXLsqAbJDJVLU0o1zmcdEjvNi4rsEXaHJVRNFIlnAi5vd3uv2-zpC1rdKH2GLhcI7kalhVJhv1ZKzJ5CwW3YKDa9meA-Ggsc2cuyc7wpAD-o_0dXpsXhNgwrDuUsoB760qgh-FdimC_qENQWf58wb9osUVu_sa_Js9yR0R42WDdp5LyhfjEFrFNV0DBXkot8PMxP0dB3ExXanRxDMsYM01v62X7Nj_puieHRgvs1KiHRJA-61y1qbOBr8BOT_eu6S7GBIE4Ihqob531luAgOksqFC4eGiFdgktpHo58LuRSrajNINAn0OX7HAQKOdy10BXaLrKkdyO86FU0npqYFQNPOpNRl2XMCRSonmHVBCRlLtt_q3dioyoOp3gd3zFAzyc3RSgUho3r770_z3qnsfxCmFDyECo7LWhC-3Owmb4yJDwVWZUcmND8egV6-0Buj6pWQJ2tVAXP_z3XoI9pPa708rxzs7mGwv5RIdxMWNFqDXZiDq2ypwSLTOj28R5toH2qPv9gxH-Hbo9fd2x7yUBoqMZmt9anYRNlDYRj1BjtRcPjBn_0TkvF3E0ta79wUMwnGgtT008kL_rhklRRhQ-z3RXenpvsVCOgFLUPgVX26PiswTwy4tHPge68X2YXLHkj7BuvNTNonzwPnCE44bxnd=s94-no?authuser=0',
    song: 'Chỉ Là Không Cùng Nhau (Live Version)',
    singer: 'Tăng Phúc',
  },
  {
    id: Math.random(),
    number: 5,
    img: 'https://lh3.googleusercontent.com/eba6qnWVtVJYuhoQGtrtU0BXED9w7dtX2U5lr-Xwpu3jBsFi_n-91sGlKv4I7r9tAlh8iTWOrPoGs1PEAvPuny95t6rHzdZ_0L_LA80mp3EsesAIxQj1ldkFeUvKXMq_Ls225QiElfOjtvmseDRHnRNBn1x0Dn2VC5SbaLDikSs-O67zLR_Q-4e9TmsghFaNIPsSC-Jn1YwqPdS2dLb-jQTIV2jGr6IMdzuy9fm9THPpw7ViZ1Ij-rfyu6wnDP6FOR2Y6l1cj7rv2uZZRYb7trqN8YwPmIGsyznV9C8KpIqmlvtzDSGwUVdzjAQKfwKuzbS9XRa5Iqhfz_KfLKZJa4TxCM8TAL5KWQEvAiOc00hjAGKzFvURGIgTsjVDngIGw4fTfrxeWb6YpReHRWtMw4oP2oYTchZHPXjI4_ituA0urZyOm3GoXjjEe_5-eXrHMjQ3ovsm31FbLxq0snPqJIwb0XsyFIaaiVSUKbHZGjAgN144b70kbLITP5aYV7vIY_AEHOD4JHlS2OeAteBNyrPS3GIZjpu78KQrUFeV7DUc4ElCsP-o1yIcOy7UDDXy2Cuvb5BBppjjP70EabyGl117fb0PwQ0gVh-EZOPEFO6RMkSJcyD4mjQmus-4aF-uHCatOv7NoRYgKLHsWZ_wJHQnUE9ytohppr2qZAlExP7kSFwE6H1C7b_asjFD7vfckPwx8B_cmzsS_iB9qnObYmY1=s94-no?authuser=0',
    song: 'Lệ Duyên Tình',
    singer: 'K-ICM',
  },
];

const RenderList = ListItem.map((item) => <RankItem item={item} />);

const RankList = () => {
  return <div className='rank-list'>{RenderList}</div>;
};

export default RankList;
