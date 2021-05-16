import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';
import './style.scss';

const UploadButton = () => {
  return (
    <div className='upload-button'>
      <CloudUploadOutlined style={{ fontSize: '22px' }} />
    </div>
  );
};

export default UploadButton;
