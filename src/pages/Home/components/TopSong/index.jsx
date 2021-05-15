import React, { useState, useEffect } from 'react';

import TopSongList from '../TopSongList';
import TopSongMain from '../TopSongMain';

const listItem = [
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/nCs9NBq2LRwJ9vkmcsBkezEt5NeYjZvdC6o1uNEXeRXazhVrpmqI_b41PlSy78U5RaE0xBrhxH9qqYin9xLG-j3C2FHfaXLZW10gw0M6zj7AFzZfZX0Ry7HEW-B47UqdPUuHglO_tSmajbh4NvCrHdJTCwGqcNF0gypbB45w0F9_WF9elcsxzTuKxat_27PcnWN50F-or-Q6y5GqUpNNcYQlvkOT2rLDn9U3USv4LXxkyzlKVsiXy92EH8NSreokVB3ScDm_b2NRk88I1ptQb2yZiDkS8jLiRepV7gL401kd_qWkNt8AR-zd8ypV8_o5ObcdDGUCTlkDnCfpCWg2RQ2FqQOZM9RFp1EHc5NNn_fpdy-SsKJ-jtdtSpdrQUcrKiTWPJ50Ns2SoW9diIShgwbKoNEYSbA8TF56oFMmudwKdV_MyOVVUzIxMjB_ZwdDTh84j5GK_7-ZTiNDuOILZ4TH6Z9VXsagYZgh8Ot5_uIqEol1iL5_p1j_Zdv7iMNyX5WSNz9_dpfQ_IGtbAYMq5ATsGqn7ev-MWKwH69cXIWHUMmd8NdKFdZJ3N2D3dtwzddPPaO_aI7GT-vFtcrRzBjvNlRlwSu_dvCNwcw_eV-blQxwtZEL8UQUoC0o_vzPUc0TEdjH2w-TCTbxbtUgSeFue2UhQlKq9AM6-vh4mRG2Ettho9a6njY--X3HTHxXCMN2pqqY2s5mDbJd4RvEFcFm=w840-h339-no?authuser=0',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/dZhHuNzB033K3ZTzcHsya3x0SuSVcDNGwmB8ljISCcQcK5TRaLDkBHj6tiTyFEJmJVYcogGHhpwkHH7DQFawEWPM8W7Rj9FyZql5EDwBTJiBC7hxt21lly3j6BuNTtGgTKs6v9UT-dWk5FDSuNLZIS5hr9LSEBWgiE-ZRpTtcLANVkqYcE9S0WA8hhBQPInh4oN6Bj4ktCgS-zUIHAGCaWhrNKiesmknivQZIVczx7KwpXSxolcGuSw4qGvjEdePQp--9EyFTIcnyv7EEPbPgYtGwRKur6pAjCgALa27gFN0eo44mDdNU7Iye5ntLRbUUiMGmVKIT1DaV6Iw6TI2D2Y8mvITa3zINFACqJIsuhjjQx707n4TaoLnuKHICl7Fs6w6c0zQi8KkhDBPQUJqP0QYRe9rPFtA2eACAdVEUJltEJnoAcsQBQAr51SyX4xtxRVOxsq7nixGZqSxA3JJwJmb3cyrtSgDPf8Xb4W_EU1z0XteuQSZKpUVFXbCSVGRCapzUdteUZHKkhXdUL8ij3akDLb4qoPerNdFy_RIllu7F8uEpwM2eHnZNXRGomPs383Mi1Vyw73w2Xntr7llS8c1mDNM9z4o_qdu0CEfZDsPvHRAGYhNzIQR8OWkOA_c6qDL0qHmJvwBAdz1lFoOO9P_X7KshrQbT0x0PHWhtvr0KymbeWBaDoDmhNTfADjspWlcJreN3eC2v7-BLawz0-q3=w840-h339-no?authuser=0',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/ouWlTaPsqFLGs3NJnAlemJ3jV70k7zUntLf0B3RuN4p4JbqUjX1lY64mxl67AMdU9-Wtg4LxjSY9OAd9Do92dOfF6CsTccNWOEFHp5CKr3IA2Mil6L5RNiDKKNWZ8twOQtHOkVKzFk9mxCmO3she5qbAEiwRuXM8WMUeuccmsaZ1oY9QN6LL1E6RwfsEbYG2mG2CPZdu_SaSup10JD0asdzCJ8LiwJgQHRo3PwUFDapvjIn0ZcJL2NyQOcxdT1sc-swAntv81C57rKRpaD2YFOVWZOTn9uGpEHfgUOMhjTuBb6fUvcTDCFje4EQu_D4mSnRyh03QbFtSu0vlGmBeo56o0cxlO3xFMNDXE72OXaJf1PiHWl2v_UtcDQRphguSB80IkPwQpQAdnroB596EdA7xxxXE-519lyu29CbOuXGSCR-ZbU13oFtOyJ_AAWj6H4OAX4WUN4N7vluD52kR2GCYk-R6WRrH6u4t_FsFtTu_4l5j_8TDrzAkC-SzlEihokU72n9fFG3rHYQsS2_53jGh2aXfdib3sD-BmIabjel-AvQMBXLAslCav43Dqcb27NJOG7HShq0Oz9jK10WO6F0BQQhDsRhbL2zOG14s0eWDGBZrU2dR_X5NuqxQFG1nS8wLmmRhEokPToX9iXASx0Su7MO5VZimBweAqUXv7gUFY7ChDIJ6EVWeJjVkVn0xsvSqGTYpa8gdJfKXW-DxEucg=w840-h339-no?authuser=0',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/wk7uzPZU7v2VkYV1McfNclvPfTjj5BtIlyOMm53R6RQYd7KwP07a48sIgJKH2tk7d5T8bcXTjrBEsZNC8TNb2mXf8SbvaQld3AiEw1H76ApD-tuDB4VpVBFinHwLjD4Hm4C5Z02cOuY4thplFaSORynMMzcWuZ9kJFt-RdjoBHP4fI8p_sUeKWVvuT4QLq0usyOcLCFGFFZaN_lUpE-ESDR2FO4jj8A2SJakGA1mw5WxouqUBIU8dbsk6cgld1ApUzrNDIY3hLKBqM1IY7hCxjbAMyUQN1xaK1_XftHmLgx9iT65ISfHEo_186UelCKHK7DBNtAJAbD7HXl8FkQEt20sFvu0to5coQL3__sagjyze6cFISGMDfaCnfUzGctw7EIbIW-c-PTqCB57rU-ppTuatBZkbFix24mEw9Cr9btc8U6Qlu36gNqA5iiwaf22SDWW6tdH6KEn4sOCQloHeVNN9MzNp78zm5mndttkmPxQWO3TdgK6sphFIaqyjk1oRA4vMY-bgY_jmNLY-6TXfeIFWjGOkNHMF2e4wxzv_HHvcEWO4AnVx_vpGO13KdU0xppa0QMZnwVcMd26JyFJVcvCTvveJHj1GLbKGpXFyTUXyXLGulHXaK4FcCGrMUpF7kFOjXebp8HnupE03qRIIO2CJCsWmVCd8JFdNghgnQLtbsl4GRogbuhVct4JUIEZSXy1rHuz5e96Dk1rvE1r3NvA=w840-h339-no?authuser=0',
  },
  {
    id: Math.random(),
    img: 'https://lh3.googleusercontent.com/4vytpxhQGYqS77eXsAy5m18x-KRzuVmGZueJhkXg5xNEW4iVvZC1bKQkXtTaUzbvM6ymKH-IbSeLPQTtC0AZlNH6KOpUPmLvJvpmbuWb_gKD5QrmCttBlWqz0E3kb7gyzrO1XANGK-OjeMKaxAU8gn35tYPa3iE450s3f159vCPGhc4Vh6CFSgDrlWmqssSQj_rdlPl1b1xsy_vTvs5eU5G-ObikfXHHEQb1PXjpmRzWgzdnHn9fsN63ZGugw_1J9s8FYZkjAqUJ6lJoj0seF35fltPlPTzmkTcqBtLq_CJnsNE_9shF5Np4T89yi7sMIKN2dxa29FY5e6Hzz9j_3VRDVtWKCfUvN5-eXd-2gJMxPlwZFtLvTiJFWkqrHDl6hCeUuIA7bJ6yttnRIZDpY0ZQ0xwWzMCxCGA5W8YavHZLmRv2r3i3oEcpA_20NptAO_WatpXvDjveFno_oLBz0fyCBDHGouGsvSXW3lBRAqZZIj_Xtz-NhGBYTwhfoPspfqiyxT9LWE529ef3H4nlV0Eoloa_FJc4iPD30HWVGgVgHy8ABansbH9ryF-LZkv_Pg7MosxbQYivXeXsD1ovz5EOGVSTrjv5u8vxd0hJV_l6-XIVSl7zI_o3R5kxJrFuRWz3kIs_roghr6AAXtmuVqdJU0--eeNgQIONQOYgqLS2SU_1mHavfwoEZYTvrLUzcayI4T1MwmvOocXZ91qpyhdN=w840-h339-no?authuser=0',
  },
];

const TopSong = () => {
  const [imageDefault, setImageDefault] = useState(listItem[0].img);

  const [id, setId] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (id === 4) {
        setId(0);
      } else {
        setId(id + 1);
      }

      setImageDefault(listItem[id].img);
    }, 3000);
    return () => clearInterval(time);
  });

  return (
    <div>
      <TopSongMain imageDefault={imageDefault} />
      <TopSongList listItem={listItem} />
    </div>
  );
};

export default TopSong;
