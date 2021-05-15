import React from 'react';
import {
  DownloadOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

const RankToolItem = () => {
  return (
    <>
      <div>
        <DownloadOutlined style={{ fontSize: '16px', color: '#888' }} />
      </div>

      <div>
        <PlusOutlined style={{ fontSize: '16px', color: '#888' }} />
      </div>

      <div>
        <ShareAltOutlined style={{ fontSize: '16px', color: '#888' }} />
      </div>
    </>
  );
};

export default RankToolItem;
