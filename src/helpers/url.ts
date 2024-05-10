import { url } from '@/configs';
import { DOCUMENT_PATH, IMAGE_PATH, JUSTIFICATION_FILE_PATH } from '@/constants';

export function generateImageUrl(fileName: string) {
  return `${url}/${IMAGE_PATH.replace('public/', '')}/${fileName}`;
}

export function generateDocumentUrl(fileName: string) {
  return `${url}/${DOCUMENT_PATH.replace('public/', '')}/${fileName}`;
}

export function generateJustificationUrl(fileName: string) {
  return `${url}/${JUSTIFICATION_FILE_PATH.replace('public/', '')}/${fileName}`;
}

export async function generateFileFromUrl(url?: string | null) {
  if (!url) return url;

  const response = await fetch(url);
  const name = url.split('/').pop() || '';
  const data = await response.blob();

  const metadata = {
    type: data.type,
  };

  return new File([data], name, metadata);
}
