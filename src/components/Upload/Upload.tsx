import {
  Upload as BaseUpload,
  UploadFile as BaseUploadFile,
  UploadProps as BaseUploadProps,
} from 'antd';
import { RcFile as BaseRcFile } from 'antd/es/upload';

type UploadProps = BaseUploadProps;
type UploadFile = BaseUploadFile;
type RcFile = BaseRcFile;

const Upload = function Upload(props: UploadProps) {
  return <BaseUpload {...props} />;
};

export { Upload };
export type { UploadProps };
export type { UploadFile };
export type { RcFile };
